function initializeBoard($board, boardUrl, goalSelectedUrl) {
    function updateSquare($square, json) {
        $square.html(json["name"]);
    }

    function updateBoard($board, json) {
        for(var i = 0; i < json.length; i++) {
            $square = $board.find("#slot" + (i + 1));
            updateSquare($square, json[i])
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
        $.ajax({
            "url": goalSelectedUrl,
            "type": "PUT",
            "data": JSON.stringify({
                "goal": goal
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

function initializeChatSocket($chatWindow, socketsUrl) {
    var $chatBody =  $chatWindow.find(".chat-body");
    var $chatInput = $chatWindow.find(".chat-input");
    var $chatSend =  $chatWindow.find(".chat-send");

    console.log($chatBody);

    console.log($chatWindow.children());

    function appendChatMessage(message) {
        $chatBody.append("<div>" + message + "</div>");
        if($chatBody[0] != undefined) {
            $chatBody.scrollTop($chatBody[0].scrollHeight);
        }
    }

    var chatSocket = new WebSocket(socketsUrl);
    chatSocket.onopen = function() {
        console.log("socket opened!");
    };
    chatSocket.onmessage = function (evt) {
        appendChatMessage(evt.data);
    };

    console.log($chatSend);

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
