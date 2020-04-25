var PlayersPanel = (function(){
    "use strict";

    var PlayersPanel = function($playersPanel){
        this.$playersPanel = $playersPanel;
    };

    PlayersPanel.prototype.setPlayer = function(playerJson) {
        if(this.$playersPanel.find("#" + playerJson["uuid"]).length === 0) {
            // insert if the uuid is not already listed
            var colorClass = getSquareColorClass(playerJson["color"]);
            var goalCounter = $("<span>", {"class": "goalcounter " + colorClass, html: "<span class=\"squarecounter\" title=\"Squares with color.\">0</span> <span class=\"rowcounter\" title=\"Rows with color.\">(0)</span>"});

            var playerName = $("<span>", {"class": "playername", text: " " + playerJson["name"]});
            var playerDiv = $("<div>", {"id": playerJson["uuid"]});
            playerDiv.append(goalCounter);
            playerDiv.append(playerName);

            this.$playersPanel.insertOnce(playerDiv, function($possibleNext) {
                var possibleNextName = $.trim($possibleNext.find(".playername").text()).toLowerCase();
                return possibleNextName > playerJson["name"].toLowerCase();
            });
        } else {
            // otherwise update the player's color
            var $playerEntry = this.$playersPanel.find("#" + playerJson["uuid"]);
            var $playerGoalCounter = $playerEntry.find(".goalcounter");
            COLORS.forEach(function(color) {
                $playerGoalCounter.removeClass(getSquareColorClass(color));
            });
            $playerGoalCounter.addClass(getSquareColorClass(playerJson["color"]));
        }
    };

    PlayersPanel.prototype.removePlayer = function(playerJson) {
        this.$playersPanel.find("#" + playerJson["uuid"]).remove();
    };

    PlayersPanel.prototype.updateGoalCounters = function(board) {
        this.$playersPanel.find(".goalcounter").each(function() {
            var colorClass = $(this).attr('class').split(' ')[1];
            $(this).find(".squarecounter").html(board.getColorCount(colorClass));
            $(this).find(".rowcounter").html("(" + board.getRowCount(colorClass) + ")");
        });
    };

    return PlayersPanel;
})();
