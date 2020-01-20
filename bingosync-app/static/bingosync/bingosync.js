
function initializeChatSocket(chatPanel, board, playersPanel, socketsUrl, socketKey) {
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
        chatPanel.handleEvent(json);
    };
    chatSocket.onclose = function() {
        var disconnectText = "*** Disconnected from server, try refreshing.";
        var message = $("<div>", {"class": "connection-message", text: disconnectText}).toHtml();
        chatPanel.appendChatMessage(message);
    };

    return chatSocket;
}

function initializeChatSettings($chatSettings, $chatWindow) {
    $("#chat-settings-collapse").on("mousedown", function() {
        $("#chat-settings .panel-body").toggle(50);
    });

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


