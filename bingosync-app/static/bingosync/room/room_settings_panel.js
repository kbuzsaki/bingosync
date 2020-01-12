var RoomSettingsPanel = (function(){
    "use strict";

    var RoomSettingsPanel = function($roomSettingsContainer, roomSettingsUrl) {
        this.$roomSettingsContainer = $roomSettingsContainer;
        this.roomSettingsUrl = roomSettingsUrl;

        this.initPanel();
    };

    RoomSettingsPanel.prototype.initPanel = function() {
        this.$panelBody = this.$roomSettingsContainer.find(".panel-body");
        this.$collapseButton = this.$roomSettingsContainer.find(".collapse-button");

        var that = this;
        this.$collapseButton.on("mousedown", function() {
            that.$panelBody.toggle(50);
        });
    };

    RoomSettingsPanel.prototype.reloadSettings = function() {
        var that = this;
        $.ajax({
            "url": this.roomSettingsUrl,
            "success": function(result) {
                that.$roomSettingsContainer.html(result.panel);
                that.initPanel();

                // TODO: encapsulate room settings in settings panel
                ROOM_SETTINGS = result.settings;

                // TODO: extract seed reveal to a chat panel class
                $seedInChat = $("#bingo-chat .new-card-message .seed-wait").removeClass('seed-wait');
                if (ROOM_SETTINGS.hide_card) {
                    hideBoard();
                    $seedInChat.text("Hidden").addClass('seed-hidden');
                } else {
                    revealBoard();
                    $seedInChat.text(ROOM_SETTINGS.seed).addClass('seed');
                }

                // TODO: extract new card logic
                refreshNewCardDialog();
            },
            "error": function(result) {
                console.log(result);
            }
        });
    };

    return RoomSettingsPanel;
})();
