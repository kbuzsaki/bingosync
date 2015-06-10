COLORS = ["blanksquare", "redsquare", "bluesquare", "greensquare", "purplesquare", "orangesquare"];

function setSquareColor($square, new_color) {
    COLORS.forEach(function(color) {
        $square.removeClass(color);
    });
    $square.addClass(new_color);
}

function initializeBoard($board, boardUrl, goalSelectedUrl, $colorChooser) {
    function updateSquare($square, json) {
        $square.html(json["name"]);
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
        var assignedColor = (chosenColor in $(this).getClasses()) ? "blanksquare" : chosenColor;
        $.ajax({
            "url": goalSelectedUrl,
            "type": "PUT",
            "data": JSON.stringify({
                "name": window.sessionStorage.getItem("name"),
                "goal": goal,
                "slot": $(this).attr("id"),
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

function initializeColorChooser($colorChooser) {
    var $colorChoosers = $colorChooser.find(".color-chooser");
    $colorChoosers.on("click", function(ev) {
        $colorChoosers.removeClass("chosen-color");
        $(this).addClass("chosen-color");
    });
}

function initializeChatSocket($chatWindow, socketsUrl) {
    var $chatBody =  $chatWindow.find(".chat-body");
    var $chatInput = $chatWindow.find(".chat-input");
    var $chatSend =  $chatWindow.find(".chat-send");

    function appendChatMessage(message) {
        $chatBody.append("<div>" + message + "</div>");
        if($chatBody[0] !== undefined) {
            $chatBody.scrollTop($chatBody[0].scrollHeight);
        }
    }

    function processChatJson(json) {
        console.log(json);
        //return $("<div>", {class: "blah", html: "some text"}).html();
        if(json["type"] === "chat") {
            var name = $("<span>", {"class": "chat-name", html: json["name"] + ": "}).toHtml();
            var message = $("<span>", {"class": "chat-message", html: json["text"]}).toHtml();
            return $("<div>", {html: name + message}).toHtml();
        }
        else if(json["type"] === "goal") {
            var name = $("<span>", {"class": "chat-name", html: json["name"]}).toHtml();
            var goal = $("<span>", {"class": "", html: " selected " + json["goal"]}).toHtml();
            return $("<div>", {html: name + goal}).toHtml();
        }
        else if(json["type"] === "connection") {
            return $("<div>", {"class": "connection-message", html: json["text"]}).toHtml();
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
                var $square = $("#" + json["slot"]);
                setSquareColor($square, json["color"]);
            }
            result = processChatJson(json);
            appendChatMessage(result);
        }
    };

    $chatSend.on("click", function(ev) {
        var message = {
            "type": "chat",
            "text": $chatInput.val()
        };
        chatSocket.send(JSON.stringify(message));
        $chatInput.val('');
        return false;
    });

    return chatSocket;
}
