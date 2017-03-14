COLORS = ["blank", "red", "blue", "green", "purple", "orange"];
BLANK_COLOR = "blank";

var IS_LOCKOUT = null;

$(function () {
    if ($('#is-lockout').attr('value') === 'lockout') {
        IS_LOCKOUT = true;
    } else {
        IS_LOCKOUT = false;
    }
});

function getSquareColorClass(color) {
    return color + "square";
}

function getPlayerColorClass(color) {
    return color + "player";
}

function setSquareColor($square, newColor, removeColor) {
    var newColorClass = getSquareColorClass(newColor);
    if (!IS_LOCKOUT) {
        if (removeColor) {
            $square.children('.' + newColorClass).remove();
        } else if (!squareHasColor($square, newColorClass)) {
            $square.children('.blanksquare').remove();
            $square.children('.shadow').before('<div class="bg-color ' + newColorClass + '"></div>');
        }
    } else {
        $square.children('.bg-color').remove();
        $square.children('.shadow').before('<div class="bg-color ' + newColorClass + '"></div>');
    }
}

function setSquareColors($square, colors) {
    $square.children('.bg-color').remove();
    colors = colors.split(' ');
    var shadow = $square.children('.shadow');
    colors.forEach(function (color) {
        shadow.before('<div class="bg-color ' + getSquareColorClass(color) + '"></div>');
    });
    updateColorOffsets($square);
}

function updateColorOffsets($square) {
    var $colorElements = $square.children('.bg-color');
    var numColors = $colorElements.length;
    var translatePercent = {
        2: ['0', '0'],
        3: ['0', '36', '-34'],
        4: ['0', '46', '0', '-48'],
        5: ['0', '56', '18', '-18', '-56']
    };
    var translations = translatePercent[numColors];

    var curWidth = $colorElements.width();
    var curHeight = $colorElements.height();
    var targetAngle = Math.atan(curWidth/curHeight);

    $($colorElements[0]).css('transform', '');
    for (var i = 1; i < $colorElements.length; ++i) {
        var transform = 'skew(-' + targetAngle + 'rad) translateX(' + translations[i] + '%)';
        $($colorElements[i]).css('transform', transform);
        $($colorElements[i]).css('border-right', 'solid 1.5px #444444');
    }
}

function setPlayerColor($playerEntry, newColor) {
    var $playerGoalCounter = $playerEntry.find(".goalcounter");
    COLORS.forEach(function(color) {
        $playerGoalCounter.removeClass(getSquareColorClass(color));
    });
    $playerGoalCounter.addClass(getSquareColorClass(newColor));
}

function squareHasColor($square, colorClass) {
    return $square.children('.bg-color').any(function () {
        if (colorClass in $(this).getClasses()) {
            return true;
        }
    });
}

function initializeBoard($board, boardUrl, goalSelectedUrl, $colorChooser, isSpectator) {
    function updateSquare($square, json) {
        $square.html('<div class="starred hidden"></div><div class="shadow"></div><div class="vertical-center text-container"></div>');
        $square.children(".text-container").text(json["name"]);
        setSquareColors($square, json["colors"]);

        refitGoalText();
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

    if (!isSpectator) {
        $board.find(".square").on("click", function(ev) {
            var goal = $(this).html();
            var chosenColor = $colorChooser.find(".chosen-color").attr("squareColor");
            var chosenColorClass = getSquareColorClass(chosenColor);

            // Are we adding or removing the color
            var removeColor;
            // the square is blank and we're painting it
            if(squareHasColor($(this), getSquareColorClass("blank"))) {
                removeColor = false;
            }
            // the square is colored the same as the chosen color so we're clearing it (or just removing the chosen color from the square's colors)
            else if(squareHasColor($(this), chosenColorClass)) {
                removeColor = true;
            }
            // the square is a different color, but we allow multiple colors, so add it
            else if (!IS_LOCKOUT) {
                removeColor = false;
            }
            // the square is colored a different color and we don't allow multiple colors, so don't do anything
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
                    "color": chosenColor,
                    // if we are removing the color, we need to know which color we are removing
                    "remove_color": removeColor
                }),
                "error": function(result) {
                    console.log(result);
                }
            });
        });
    }

    $(window).resize(function () {
        $board.find(".square").each(function () { updateColorOffsets($(this)); });
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

    // add starring ability via right click
    $(".square").on("contextmenu", function(e) {
        e.preventDefault();
        $(this).children(".starred").toggleClass("hidden");
        return false;
    });
}

function initializeBoardCover($boardCover, boardRevealedUrl) {
    if ($boardCover) {
        $boardCover.on("click", function() {
            $(this).remove();
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
        var playerName = playerJson["name"];
        if (playerJson["is_spectator"]) {
            playerName += " (spectator)";
        }
        var name = $("<span>", {"class": "chat-name " + playerColor, text: playerName}).toHtml();
        return name;
    }
    function processChatJson(json) {
        console.log(json);
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
        var json = JSON.parse(evt.data);
        console.log(json);
        if(json["type"] === "goal") {
            var $square = $("#" + json["square"]["slot"]);
            setSquareColors($square, json["square"]["colors"]);
            updateGoalCounters($board, $playersPanel);
        }
        else if(json["type"] === "color") {
            var $playerEntry = $playersPanel.find("#" + json["player"]["uuid"]);
            setPlayerColor($playerEntry, json["player"]["color"]);
            updateGoalCounters($board, $playersPanel);
        }
        else if(json["type"] === "connection") {
            if(json["event_type"] === "connected" && !json["player"]["is_spectator"]) {
                // only insert if the uuid is not already listed
                if($playersPanel.find("#" + json["player"]["uuid"]).length === 0) {
                    var colorClass = getSquareColorClass(json["player"]["color"]);
                    var goalCounter = $("<span>", {"class": "goalcounter " + colorClass, html: "0"});
                    var playerName = $("<span>", {"class": "playername", text: " " + json["player"]["name"]});
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

function refitGoalText() {
    var $allText = $('.square div.text-container');
    var maxHeight = $('.square').height();

    $allText.each(function () {
        var $thisText = $(this);
        $thisText.css('font-size', '100%');
        var currentPercent = 100;
        while($thisText.height() > maxHeight) {
            currentPercent -= 2;
            $thisText.css('font-size', currentPercent + "%" );
        }
    });
}

window.addEventListener('resize', refitGoalText, false);

