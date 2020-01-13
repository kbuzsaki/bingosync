function initializeBoardCover(boardRevealedUrl, showNow) {
    $boardCover = $(".board-cover");
    if (!showNow) {
        revealBoard();
    }
    $boardCover.on("click", function() {
        if (!$(this).is(":visible")) {
            return;
        }
        revealBoard();
        $.ajax({
            "url": boardRevealedUrl,
            "type": "PUT",
            "data": JSON.stringify({
                "room": window.sessionStorage.getItem("room"),
            }),
            "error": function(result) {
                console.log(result);
            }
        });
    });
}

// so many parameters :(
function initializeChatSocket($chatWindow, board, playersPanel, $chatSettings,
                              socketsUrl, chatUrl, chatHistoryUrl, socketKey) {
    var $chatBody =  $chatWindow.find(".chat-body");
    var $chatInput = $chatWindow.find(".chat-input");
    var $chatSend =  $chatWindow.find(".chat-send");

    function appendChatMessage(message, messageType) {
        var entry = $("<div>", {"class": messageType, html: message});
        var setting = $chatSettings.find("#" + messageType + "-toggle");
        entry.toggle(setting.prop("checked"));
        $chatBody.append(entry);
        if($chatBody[0] !== undefined) {
            $chatBody.scrollTop($chatBody[0].scrollHeight);
        }
    }

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
        //console.log(json);
        // Generate readable timestamp
        var zeroPad = function (str, length) {
            return ('000000' + str).slice(-length);
        };
        var eventTime = new Date(json.timestamp*1000);
        var timeString = zeroPad(eventTime.getHours(), 2) + ':' + zeroPad(eventTime.getMinutes(), 2) + ':' + zeroPad(eventTime.getSeconds(), 2);
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
            var newCardMessage = playerName + " generated a new card for " + $("<span>", {"class": "game-title", text: json["game"]}).toHtml() + ". ";
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

    var $chatHistory = $chatBody.find(".chat-history");
    var populateChatHistory = function (result) {
        $chatHistory.html('');
        if (!result.allIncluded) {
            var link = $("<div>", {"class": "chat-link", html: "Click to load full history"});
            link.click(function () {
                $.ajax({
                    "url": chatHistoryUrl + '?full=true',
                    "success": populateChatHistory,
                    "error": function(result) {
                        console.log(result);
                    }
                });
            });
            $chatHistory.append(link);
        }
        for(var i = 0; i < result.events.length; i++) {
            var chatJson = result.events[i];
            message = processChatJson(chatJson);
            var entry = $("<div>", {"class": chatJson["type"] + "-entry", html: message});
            $chatHistory.append(entry);
        }
        $seedInChat = $("#bingo-chat .new-card-message .seed-wait").removeClass('seed-wait').addClass('seed-hidden').text("Hidden");
        if($chatBody[0] !== undefined) {
            $chatBody.scrollTop($chatBody[0].scrollHeight);
        }
    };
    $.ajax({
        "url": chatHistoryUrl,
        "success": populateChatHistory,
        "error": function(result) {
            console.log(result);
        }
    });

    var chatSocket = new WebSocket(socketsUrl);
    chatSocket.onopen = function() {
        console.log("socket opened!");
        chatSocket.send(JSON.stringify({"socket_key": socketKey}));
    };
    chatSocket.onmessage = function (evt) {
        var json = JSON.parse(evt.data);
        //console.log(json);
        if (json["type"] === "error") {
            console.log("Got error message from socket: ", json);
            return;
        } else if (json["type"] === "goal") {
            board.getSquare(json["square"]["slot"]).setColors(json["square"]["colors"]);
            playersPanel.updateGoalCounters(board);
        }
        else if(json["type"] === "color") {
            playersPanel.setPlayer(json["player"]);
            playersPanel.updateGoalCounters(board);
        }
        else if(json["type"] === "connection") {
            if(json["event_type"] === "connected" && !json["player"]["is_spectator"]) {
                playersPanel.setPlayer(json["player"]);
                playersPanel.updateGoalCounters(board);
            }
            else if(json["event_type"] === "disconnected") {
                playersPanel.removePlayer(json["player"]);
            }
        }
        else if(json["type"] === "new-card") {
            // if the card was never revealed show what the seed was in the chat anyway
            $("#bingo-chat .new-card-message .seed-hidden").text(ROOM_SETTINGS.seed).removeClass('seed-hidden').addClass('seed');
            refreshBoard();
        } else if (json["type"] === "chat") {
            // no special effects for chat, it just gets written to the panel
        } else {
            console.log("unrecognized event type: ", json);
        }
        result = processChatJson(json);
        appendChatMessage(result, json["type"] + "-entry");
    };
    chatSocket.onclose = function() {
        var disconnectText = "*** Disconnected from server, try refreshing.";
        var message = $("<div>", {"class": "connection-message", text: disconnectText}).toHtml();
        appendChatMessage(message);
    };

    $chatSend.on("click", function(ev) {
        $.ajax({
            "url": chatUrl,
            "type": "PUT",
            "data": JSON.stringify({
                "room": window.sessionStorage.getItem("room"),
                "text": $chatInput.val()
            }),
            "error": function(result) {
                console.log(result);
            }
        });
        $chatInput.val('');
        return false;
    });

    return chatSocket;
}

function initializeChatSettings($chatSettings, $chatWindow) {
    $chatSettings.find("#chat-entry-toggle").on("change", function() {
        $chatWindow.find(".chat-entry").toggle(this.checked);
    });
    $chatSettings.find("#goal-entry-toggle").on("change", function() {
        $chatWindow.find(".goal-entry").toggle(this.checked);
    });
    $chatSettings.find("#color-entry-toggle").on("change", function() {
        $chatWindow.find(".color-entry").toggle(this.checked);
    });
    $chatSettings.find("#connection-entry-toggle").on("change", function() {
        $chatWindow.find(".connection-entry").toggle(this.checked);
    });
    $chatSettings.find("#timestamp-toggle").on("change", function() {
        $chatWindow.find(".chat-timestamp").toggle(this.checked);
    });
}


