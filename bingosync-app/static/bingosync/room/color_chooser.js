var ColorChooser = (function(){
    "use strict";

    var ColorChooser = function($chooserPanel, playerJson, colorSelectedUrl) {
        this.$chooserPanel = $chooserPanel;
        this.$choosers = $chooserPanel.find(".color-chooser");
        this.$collapseButton = $chooserPanel.find(".collapse-button");
        this.isSpectator = playerJson.is_spectator;
        this.colorSelectedUrl = colorSelectedUrl;

        var that = this;
        if (!this.isSpectator) {
            this.setChosenColor(playerJson.color);
            this.$choosers.on("click", function(ev) { that.clickColor(ev, $(this)); });
        }
        this.$collapseButton.on("mousedown", function(ev) { that.toggleCollapse(ev); });
    };

    ColorChooser.prototype.getChosenColor = function() {
        return this.$choosers.filter(".chosen-color").attr("squareColor");
    };

    ColorChooser.prototype.setChosenColor = function(newColor) {
        // Compatibility hack to allow setChosenColor to be called with either 'blue' or 'bluesquare'
        var newColorClass = (newColor.indexOf("square") !== -1) ? newColor : getSquareColorClass(newColor);
        this.$choosers.removeClass("chosen-color");
        this.$choosers.filter("." + newColorClass).addClass("chosen-color");
    };

    ColorChooser.prototype.reportChosenColor = function(newChosenColor) {
        $.ajax({
            "url": this.colorSelectedUrl,
            "type": "PUT",
            "data": JSON.stringify({
                "room": window.sessionStorage.getItem("room"),
                "color": newChosenColor
            }),
            "error": function(result) {
                console.log("Error reporting chosen color", result);
            }
        });
    };

    ColorChooser.prototype.clickColor = function(ev, $colorButton) {
        var newChosenColor = $colorButton.attr("squareColor");

        if (this.getChosenColor() === newChosenColor) {
            return;
        }

        this.setChosenColor(newChosenColor);
        this.reportChosenColor(newChosenColor);
    };

    ColorChooser.prototype.toggleCollapse = function(ev) {
        this.$chooserPanel.find(".js-lower-row").slideToggle(50);
        this.$collapseButton.children().toggleClass("flipped");
    };

    return ColorChooser;
})();
