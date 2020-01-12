(function(){
    "use strict";

    QUnit.module("ColorChooser", {
        beforeEach: function() {
            this.$fixture = $("#qunit-fixture");
            this.$chooserPanel = this.$fixture.find("#color-chooser");
            this.colorSelectedUrl = "";
        }
    });

    QUnit.test("sets initial color", function(assert) {
        var player = {is_spectator: false, color: "blue"};
        var colorChooser = new ColorChooser(this.$chooserPanel, player, this.colorSelectedUrl);

        assert.expect(10);
        assert.dom(".color-chooser.bluesquare").hasClass("chosen-color");
        this.$chooserPanel.find(".color-chooser").not(".bluesquare").each(function() {
            assert.dom($(this)[0]).doesNotHaveClass("chosen-color");
        });
    });

    QUnit.test("does not set color for spectators", function(assert) {
        var player = {is_spectator: true, color: "blue"};
        var colorChooser = new ColorChooser(this.$chooserPanel, player, this.colorSelectedUrl);

        assert.expect(10);
        this.$chooserPanel.find(".color-chooser").each(function() {
            assert.dom($(this)[0]).doesNotHaveClass("chosen-color");
        });
    });

    QUnit.test("get initial color blue", function(assert) {
        var player = {is_spectator: false, color: "blue"};
        var colorChooser = new ColorChooser(this.$chooserPanel, player, this.colorSelectedUrl);
        assert.strictEqual(colorChooser.getChosenColor(), "blue");
    });

    QUnit.test("get initial color brown", function(assert) {
        var player = {is_spectator: false, color: "brown"};
        var colorChooser = new ColorChooser(this.$chooserPanel, player, this.colorSelectedUrl);
        assert.strictEqual(colorChooser.getChosenColor(), "brown");
    });
})();
