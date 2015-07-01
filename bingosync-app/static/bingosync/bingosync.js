COLORS = ["blank", "red", "blue", "green", "purple", "orange"];

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
        var assignedColor = (chosenColorClass in $(this).getClasses()) ? "blank" : chosenColor;
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

function initializeColorChooser($colorChooser, initialColor) {
    var $colorChoosers = $colorChooser.find(".color-chooser");
    $colorChoosers.on("click", function(ev) {
        $colorChoosers.removeClass("chosen-color");
        $(this).addClass("chosen-color");
    });
    $colorChooser.find("." + initialColor).addClass("chosen-color");
}

function initializeChatSocket($chatWindow, socketsUrl, chatUrl) {
    var $chatBody =  $chatWindow.find(".chat-body");
    var $chatInput = $chatWindow.find(".chat-input");
    var $chatSend =  $chatWindow.find(".chat-send");

    function appendChatMessage(message) {
        $chatBody.append("<div>" + message + "</div>");
        if($chatBody[0] !== undefined) {
            $chatBody.scrollTop($chatBody[0].scrollHeight);
        }
    }

    function processPlayerJson(playerJson) {
        var playerColor = getPlayerColorClass(playerJson["color"]);
        var name = $("<span>", {"class": "chat-name " + playerColor, html: playerJson["name"]}).toHtml();
        return name;
    }
    function processChatJson(json) {
        console.log(json);

        // connection messages don't have a player span, so do them first
        if (json["type"] === "connection") {
            return $("<div>", {"class": "connection-message", html: json["text"]}).toHtml();
        }

        // otherwise first format the name of the message sender
        var playerSpan = processPlayerJson(json["player"]);
        if(json["type"] === "chat") {
            var message = $("<span>", {"class": "chat-message", html: json["text"]}).toHtml();
            return $("<div>", {html: playerSpan + ": " + message}).toHtml();
        }
        else if(json["type"] === "goal") {
            var goal = $("<span>", {"class": "goal-name", html: json["square"]["name"]}).toHtml();
            return $("<div>", {html: playerSpan + " selected " + goal}).toHtml();
        }
    }

    var chatSocket = new WebSocket(socketsUrl);
    chatSocket.onopen = function() {
        console.log("socket opened!");
    };
    chatSocket.onmessage = function (evt) {
        json = JSON.parse(evt.data);
        console.log(json);
        if(json["type"] === "name") {
            window.sessionStorage.setItem("name", json["name"]);
        }
        else {
            if(json["type"] === "goal") {
                var $square = $("#" + json["square"]["slot"]);
                setSquareColor($square, json["square"]["color"]);
            }
            result = processChatJson(json);
            appendChatMessage(result);
        }
    };
    chatSocket.onclose = function() {
        closeMessage = {"type": "connection", "text": "Disconnected from server..."};
        result = processChatJson(closeMessage);
        appendChatMessage(result);
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
