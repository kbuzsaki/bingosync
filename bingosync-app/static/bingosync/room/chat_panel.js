var ChatPanel = (function(){
    "use strict";

    function processPlayerJson(playerJson, playerColor) {
        if(playerColor === undefined) {
            playerColor = getPlayerColorClass(playerJson["color"]);
        }
        var playerName = playerJson["name"];
        if (playerJson["is_spectator"]) {
            playerName += " (spectator)";
        }
        var name = $("<span>", {"class": "chat-name " + playerColor, text: playerName}).toHtml();
        return name;
    }

    function processChatJson(json) {
        // Generate readable timestamp
        var zeroPad = function (str, length) {
            return ('000000' + str).slice(-length);
        };
        var eventTime = new Date(json.timestamp*1000);
        var timeString = zeroPad(eventTime.getHours(), 2) + ':' + zeroPad(eventTime.getMinutes(), 2) +
                         ':' + zeroPad(eventTime.getSeconds(), 2);
        var timeHtml = $("<span>", {"class": "chat-timestamp", html: timeString});
        if (!$('#timestamp-toggle').prop("checked")) {
            timeHtml.hide();
        }
        timeHtml = timeHtml.toHtml();

        // connection and color messages don't have a player span, so do them first
        if (json["type"] === "connection") {
            var connectionPlayerName = json["player"]["name"];
            if (json["player"]["is_spectator"]) {
                connectionPlayerName += " (spectator)";
            }

            var connectionMessage = $("<span>", {text: connectionPlayerName + " " + json["event_type"]}).toHtml();
            return $("<div>", {"class": "connection-message", html: timeHtml + " - " + connectionMessage}).toHtml();
        }
        else if(json["type"] === "color") {
            var playerColorClass = getPlayerColorClass(json["player_color"]);
            var playerName = $("<span>", {"class": playerColorClass, text: json["player"]["name"]}).toHtml();
            var newColorClass = getPlayerColorClass(json["color"]);
            var colorName = $("<span>", {"class": "color-name " + newColorClass, text: json["color"]}).toHtml();
            var colorMessage = playerName + " changed color to " + colorName;
            return $("<div>", {"class": "color-message", html: timeHtml + " " + colorMessage}).toHtml();
        }
        else if(json["type"] === "revealed") {
            var playerColorClass = getPlayerColorClass(json["player_color"]);
            var playerName = $("<span>", {"class": playerColorClass, text: json["player"]["name"]}).toHtml();
            var revealedMessage = playerName + " revealed the card";
            return $("<div>", {"class": "revealed-message", html: timeHtml + " " + revealedMessage}).toHtml();
        }
        else if(json["type"] === "new-card") {
            var playerColorClass = getPlayerColorClass(json["player_color"]);
            var playerName = $("<span>", {"class": playerColorClass, text: json["player"]["name"]}).toHtml();
            var newCardMessage = playerName + " generated a new card for " +
                                 $("<span>", {"class": "game-title", text: json["game"]}).toHtml() + ". ";
            if (json["game"] !== "Custom (Advanced)") {
                newCardMessage += " seed: ";
                if (json["is_current"]) {
                    newCardMessage += $("<span>", {"class": "seed-wait", text: '...'}).toHtml();
                } else {
                    newCardMessage += $("<span>", {"class": "seed", text: json["seed"]}).toHtml();
                }
            }
            return $("<div>", {"class": "new-card-message", html: timeHtml + " " + newCardMessage}).toHtml();
        }

        // otherwise first format the name of the message sender
        var playerSpan = processPlayerJson(json["player"], getPlayerColorClass(json["player_color"]));
        if(json["type"] === "chat") {
            var message = $("<span>", {"class": "chat-message", text: json["text"]}).toHtml();
            return $("<div>", {html: timeHtml + " " + playerSpan + ": " + message}).toHtml();
        }
        else if(json["type"] === "goal") {
            var colorClass = json["remove"] ? getPlayerColorClass('blank') : getPlayerColorClass(json["color"]);
            var goal = $("<span>", {"class": "goal-name " + colorClass, text: json["square"]["name"]}).toHtml();

            if(json["remove"]) {
                return $("<div>", {"class": "goal-message", html: timeHtml + " " + playerSpan + " cleared " + goal}).toHtml();
            }
            else {
                return $("<div>", {"class": "goal-message", html: timeHtml + " " + playerSpan + " marked " + goal}).toHtml();
            }
        }
    }

    var ChatPanel = function($chatPanel, $chatSettings, chatUrl, chatHistoryUrl) {
        this.$chatPanel = $chatPanel;
        this.$chatBody =  $chatPanel.find(".chat-body");
        this.$chatInput = $chatPanel.find(".chat-input");
        this.$chatSend =  $chatPanel.find(".chat-send");
        this.$chatHistory = this.$chatBody.find(".chat-history");
        this.$chatSettings = $chatSettings;
        this.chatUrl = chatUrl;
        this.chatHistoryUrl = chatHistoryUrl;

        this.$chatSend.on("click", this.onSend.bind(this));
    };

    ChatPanel.prototype.appendChatMessage = function(message, messageType) {
        var entry = $("<div>", {"class": messageType, html: message});
        var setting = this.$chatSettings.find("#" + messageType + "-toggle");
        entry.toggle(setting.prop("checked"));
        this.$chatBody.append(entry);
        if(this.$chatBody[0] !== undefined) {
            this.$chatBody.scrollTop(this.$chatBody[0].scrollHeight);
        }
    };

    ChatPanel.prototype.reloadChatHistory = function(full) {
        $.ajax({
            "url": this.chatHistoryUrl + (full ? '?full=true' : ''),
            "success": this.populateChatHistory.bind(this),
            "error": function(result) {
                console.log(result);
            }
        });
    };

    ChatPanel.prototype.populateChatHistory = function(result) {
        var that = this;

        this.$chatHistory.html('');
        if (!result.allIncluded) {
            var link = $("<div>", {"class": "chat-link", html: "Click to load full history"});
            link.click(function() { that.reloadChatHistory(true); });
            this.$chatHistory.append(link);
        }
        for(var i = 0; i < result.events.length; i++) {
            var chatJson = result.events[i];
            var message = processChatJson(chatJson);
            var entry = $("<div>", {"class": chatJson["type"] + "-entry", html: message});
            this.$chatHistory.append(entry);
        }
        var $seedInChat = $("#bingo-chat .new-card-message .seed-wait").removeClass('seed-wait').addClass('seed-hidden').text("Hidden");
        if(this.$chatBody[0] !== undefined) {
            this.$chatBody.scrollTop(this.$chatBody[0].scrollHeight);
        }
    };

    ChatPanel.prototype.handleEvent = function(json) {
        var result = processChatJson(json);
        this.appendChatMessage(result, json["type"] + "-entry");
    };

    ChatPanel.prototype.onSend = function() {
        $.ajax({
            "url": this.chatUrl,
            "type": "PUT",
            "data": JSON.stringify({
                "room": window.sessionStorage.getItem("room"),
                "text": this.$chatInput.val()
            }),
            "error": function(result) {
                console.log(result);
            }
        });
        this.$chatInput.val('');
        return false;
    };

    return ChatPanel;
})();
