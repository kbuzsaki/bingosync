COLORS = ["blank", "red", "blue", "green", "purple", "orange"];
BLANK_COLOR = "blank";

function getSquareColorClass(color) {
    return color + "square";
}

function getPlayerColorClass(color) {
    return color + "player";
}

function setSquareColor($square, new_color) {
    COLORS.forEach(function(color) {
        $square.removeClass(getSquareColorClass(color));
    });
    $square.addClass(getSquareColorClass(new_color));
}

function setPlayerColor($playerEntry, new_color) {
    var $playerGoalCounter = $playerEntry.find(".goalcounter");
    COLORS.forEach(function(color) {
        $playerGoalCounter.removeClass(getSquareColorClass(color));
    });
    $playerGoalCounter.addClass(getSquareColorClass(new_color));
}

function initializeBoard($board, boardUrl, goalSelectedUrl, $colorChooser) {
    function updateSquare($square, json) {
        $square.html(json["name"]);
        setSquareColor($square, json["color"]);
    }

    function updateBoard($board, json) {
        for(var i = 0; i < json.length; i++) {
            $square = $board.find("#slot" + (i + 1));
            updateSquare($square, json[i]);
        }
    }

    $.ajax({
        "url": boardUrl,
        "success": function(result) {
            updateBoard($board, result);
        }
    });

    $board.find(".square").on("click", function(ev) {
        var goal = $(this).html();
        var chosenColor = $colorChooser.find(".chosen-color").attr("squareColor");
        var chosenColorClass = getSquareColorClass(chosenColor);

        var assignedColor;
        // the square is blank and we're painting it
        if(getSquareColorClass("blank") in $(this).getClasses()) {
            assignedColor = chosenColor;
        }
        // the square is colored the same as the chosen color so we're clearing it
        else if(chosenColorClass in $(this).getClasses()) {
            assignedColor = "blank";
        }
        // the square is colored a different color, so don't do anything
        else {
            return;
        }

        $.ajax({
            "url": goalSelectedUrl,
            "type": "PUT",
            "data": JSON.stringify({
                "room": window.sessionStorage.getItem("room"),
                // substring to get rid of the 'slot' in e.g. 'slot12'
                "slot": $(this).attr("id").substring(4),
                "color": assignedColor
            }),
            "error": function(result) {
                console.log(result);
            }
        });
    });

    function addRowHover(name) {
        $board.find("#" + name).hover(
            function() {
                $board.find("." + name).addClass("hover");
            },
            function() {
                $board.find("." + name).removeClass("hover");
            }
        );
    }

    addRowHover("row1");
    addRowHover("row2");
    addRowHover("row3");
    addRowHover("row4");
    addRowHover("row5");
    addRowHover("col1");
    addRowHover("col2");
    addRowHover("col3");
    addRowHover("col4");
    addRowHover("col5");
    addRowHover("tlbr");
    addRowHover("bltr");
}

function getColorCount($board, colorClass) {
    return $board.find("." + colorClass).size();
}

function updateGoalCounters($board, $goalCounters) {
    $(".goalcounter").each(function() {
        var colorClass = $(this).attr('class').split(' ')[1];
        $(this).html(getColorCount($board, colorClass));
    });
}

function initializeColorChooser($colorChooser, initialColor, colorSelectedUrl) {
    var $colorChoosers = $colorChooser.find(".color-chooser");
    $colorChoosers.on("click", function(ev) {
        // don't do anything if the color is already the chosen color
        if("chosen-color" in $(this).getClasses()) {
            return;
        }

        $colorChoosers.removeClass("chosen-color");
        $(this).addClass("chosen-color");
        $.ajax({
            "url": colorSelectedUrl,
            "type": "PUT",
            "data": JSON.stringify({
                "room": window.sessionStorage.getItem("room"),
                "color": $(this).attr("squareColor")
            }),
            "error": function(result) {
                console.log(result);
            }
        });
    });
    $colorChooser.find("." + initialColor).addClass("chosen-color");
}

// so many parameters :(
function initializeChatSocket($chatWindow, $board, $playersPanel, $chatSettings,
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
        var name = $("<span>", {"class": "chat-name " + playerColor, html: playerJson["name"]}).toHtml();
        return name;
    }
    function processChatJson(json) {
        console.log(json);

        // connection and color messages don't have a player span, so do them first
        if (json["type"] === "connection") {
            var connectionMessage = json["player"]["name"] + " " + json["event_type"];
            return $("<div>", {"class": "connection-message", html: " - " + connectionMessage}).toHtml();
        }
        else if(json["type"] === "color") {
            var playerColorClass = getPlayerColorClass(json["player_color"]);
            var playerName = $("<span>", {"class": playerColorClass, html: json["player"]["name"]}).toHtml();
            var newColorClass = getPlayerColorClass(json["color"]);
            var colorName = $("<span>", {"class": "color-name " + newColorClass, html: json["color"]}).toHtml();
            var colorMessage = playerName + " changed color to " + colorName;
            return $("<div>", {"class": "color-message", html: colorMessage}).toHtml();
        }

        // otherwise first format the name of the message sender
        var playerSpan = processPlayerJson(json["player"], getPlayerColorClass(json["player_color"]));
        if(json["type"] === "chat") {
            var message = $("<span>", {"class": "chat-message", html: json["text"]}).toHtml();
            return $("<div>", {html: playerSpan + ": " + message}).toHtml();
        }
        else if(json["type"] === "goal") {
            var colorClass = getPlayerColorClass(json["color"]);
            var goal = $("<span>", {"class": "goal-name " + colorClass, html: json["square"]["name"]}).toHtml();

            if(json["color"] === BLANK_COLOR) {
                return $("<div>", {"class": "goal-message", html: playerSpan + " cleared " + goal}).toHtml();
            }
            else {
                return $("<div>", {"class": "goal-message", html: playerSpan + " marked " + goal}).toHtml();
            }
        }
    }

    var $chatHistory = $chatBody.find(".chat-history");
    $.ajax({
        "url": chatHistoryUrl,
        "success": function(result) {
            $chatHistory.html('');
            for(var i = 0; i < result.length; i++) {
                var chatJson = result[i];
                message = processChatJson(chatJson);
                var entry = $("<div>", {"class": chatJson["type"] + "-entry", html: message});
                $chatHistory.append(entry);
            }
            if($chatBody[0] !== undefined) {
                $chatBody.scrollTop($chatBody[0].scrollHeight);
            }
        },
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
        json = JSON.parse(evt.data);
        console.log(json);
        json = $.escapeHtml(json);
        console.log(json);
        if(json["type"] === "goal") {
            var $square = $("#" + json["square"]["slot"]);
            setSquareColor($square, json["square"]["color"]);
            updateGoalCounters($board, $playersPanel);
        }
        else if(json["type"] === "color") {
            var $playerEntry = $playersPanel.find("#" + json["player"]["uuid"]);
            setPlayerColor($playerEntry, json["player"]["color"]);
            updateGoalCounters($board, $playersPanel);
        }
        else if(json["type"] === "connection") {
            if(json["event_type"] === "connected") {
                // only insert if the uuid is not already listed
                if($playersPanel.find("#" + json["player"]["uuid"]).length === 0) {
                    var colorClass = getSquareColorClass(json["player"]["color"]);
                    var goalCounter = $("<span>", {"class": "goalcounter " + colorClass, html: "0"});
                    var playerName = $("<span>", {"class": "playername", html: " " + json["player"]["name"]});
                    var playerDiv = $("<div>", {"id": json["player"]["uuid"]});
                    playerDiv.append(goalCounter);
                    playerDiv.append(playerName);

                    $playersPanel.insertOnce(playerDiv, function($possibleNext) {
                        var possibleNextName = $.trim($possibleNext.find(".playername").text()).toLowerCase();
                        console.log("comparing " + possibleNextName);
                        return possibleNextName > json["player"]["name"].toLowerCase();
                    });

                    updateGoalCounters($board, $playersPanel);
                }
            }
            else if(json["event_type"] === "disconnected") {
                $("#" + json["player"]["uuid"]).remove();
            }
        }
        result = processChatJson(json);
        appendChatMessage(result, json["type"] + "-entry");
    };
    chatSocket.onclose = function() {
        var disconnectText = "*** Disconnected from server, try refreshing.";
        var message = $("<div>", {"class": "connection-message", html: disconnectText}).toHtml();
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
}

