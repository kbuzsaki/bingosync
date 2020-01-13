var Board = (function(){
    "use strict";

    function getSquareColors($square) {
        var colors = {};
        $square.children('.bg-color').each(function() {
            for (var color in $(this).getClasses()) {
                if (color.indexOf("square") !== -1) {
                    colors[color] = true;
                }
            }
        });
        return colors;
    }

    function squareHasColor($square, colorClass) {
        var colors = getSquareColors($square);
        return colors[colorClass];
    }

    function updateColorOffsets($square) {
        var $colorElements = $square.children('.bg-color');
        var numColors = $colorElements.length;
        var translatePercent = {
            2: ['0', '0'],
            3: ['0', '36', '-34'],
            4: ['0', '46', '0', '-48'],
            5: ['0', '56', '18', '-18', '-56'],
            6: ['0', '60', '30', '0', '-30', '-60'],
            7: ['0', '64', '38', '13', '-13', '-38', '-64'],
            8: ['0', '64', '41', '20', '0', '-21', '-41', '-64'],
            9: ['0', '66', '45', '27', '9', '-9', '-27', '-45', '-66'],
            10: ['0', '68', '51', '34', '17', '0', '-17', '-34', '-51', '-68']
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

    function setSquareColors($square, colors) {
        $square.children('.bg-color').remove();
        colors = colors.split(' ');
        var shadow = $square.children('.shadow');
        colors = sortColors(colors);
        $square.attr("title", colors.join("\n"));
        // the color offsets seem to work right-to-left, so reverse the array first
        colors.reverse();
        colors.forEach(function (color) {
            shadow.before('<div class="bg-color ' + getSquareColorClass(color) + '"></div>');
        });
        updateColorOffsets($square);
    }

    var Square = function($square) {
        this.$square = $square;
        this.$square.on("click", this.onClick);
    };

    Square.prototype.setColors = function(colors) {
        this.$square.children('.bg-color').remove();
        colors = colors.split(' ');
        var shadow = this.$square.children('.shadow');
        colors = sortColors(colors);
        this.$square.attr("title", colors.join("\n"));
        // the color offsets seem to work right-to-left, so reverse the array first
        colors.reverse();
        colors.forEach(function (color) {
            shadow.before('<div class="bg-color ' + getSquareColorClass(color) + '"></div>');
        });
        updateColorOffsets(this.$square);
    };

    Square.prototype.onClick = function(ev) {
    };

    Square.prototype.setJson = function(json) {
        this.$square.html('<div class="starred hidden"></div><div class="shadow"></div>' +
                          '<div class="vertical-center text-container"></div>');
        this.$square.children(".text-container").text(json["name"]);
        setSquareColors(this.$square, json["colors"]);
    };

    var Board = function($board, playerJson, colorChooser, getBoardUrl, selectGoalUrl) {
        this.$board = $board;
        this.$squares = $board.find(".square");
        this.isSpectator = playerJson.is_spectator;
        this.colorChooser = colorChooser;
        this.getBoardUrl = getBoardUrl;
        this.selectGoalUrl = selectGoalUrl;
        this.squares = [];
        for (var i = 0; i < 25; i++) {
            var $square = $board.find("#slot" + (i + 1));
            this.squares.push(new Square($square));
        }

        var that = this;
        if (!this.isSpectator) {
            this.$squares.on("click", function(ev) { that.clickSquare(ev, $(this)); });
        }

        function addRowHover(name) {
            that.$board.find("#" + name).hover(
                function() {
                    that.$board.find("." + name).addClass("hover");
                },
                function() {
                    that.$board.find("." + name).removeClass("hover");
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

        $(window).resize(function () {
            that.$squares.each(function () { updateColorOffsets($(this)); });
        });

        // add starring ability via right click
        this.$squares.on("contextmenu", function(e) {
            e.preventDefault();
            $(this).children(".starred").toggleClass("hidden");
            return false;
        });
    };

    Board.prototype.setJson = function(json) {
        for(var i = 0; i < json.length; i++) {
            this.squares[i].setJson(json[i]);
        }
        this.refitGoalText();
    };

    Board.prototype.reloadBoard = function() {
        var that = this;
        $.ajax({
            "url": this.getBoardUrl,
            "success": function(result) {
                that.setJson(result);
            }
        });
    };

    Board.prototype.getSquare = function(slot) {
        return this.squares[parseInt(slot.substring(4))-1];
    };

    Board.prototype.getColorCount = function(colorClass) {
        return this.$board.find("." + colorClass).size();
    };

    Board.prototype.clickSquare = function(ev, $square) {
        var goal = $square.html();
        var chosenColor = this.colorChooser.getChosenColor();
        var chosenColorClass = getSquareColorClass(chosenColor);

        // Are we adding or removing the color
        var removeColor;
        // the square is blank and we're painting it
        if ($.isEmptyObject(getSquareColors($square))) {
            removeColor = false;
        }
        // the square is colored the same as the chosen color so we're clearing it (or just removing the chosen color from the square's colors)
        else if (squareHasColor($square, chosenColorClass)) {
            removeColor = true;
        }
        // the square is a different color, but we allow multiple colors, so add it
        else if (ROOM_SETTINGS.lockout_mode !== "Lockout") {
            removeColor = false;
        }
        // the square is colored a different color and we don't allow multiple colors, so don't do anything
        else {
            return;
        }

        $.ajax({
            "url": this.selectGoalUrl,
            "type": "PUT",
            "data": JSON.stringify({
                "room": window.sessionStorage.getItem("room"),
                // substring to get rid of the 'slot' in e.g. 'slot12'
                "slot": $square.attr("id").substring(4),
                "color": chosenColor,
                // if we are removing the color, we need to know which color we are removing
                "remove_color": removeColor
            }),
            "error": function(result) {
                console.log(result);
            }
        });
    };

    Board.prototype.refitGoalText = function() {
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
    };

    return Board;
})();
