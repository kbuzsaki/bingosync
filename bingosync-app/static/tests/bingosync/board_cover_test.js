(function(){
    "use strict";

    QUnit.module("BoardCover", {
        beforeEach: function() {
            $.mockjax.clear();
            sessionStorage.clear();

            this.$fixture = $("#qunit-fixture");
            this.$boardContainer = this.$fixture.find(".board-container");
            this.boardRevealedUrl = "/fake/board/revealed/url";
        }
    });

    QUnit.test("initially reveal board, then hide", function(assert) {
        var boardCover = new BoardCover(this.$boardContainer, false, this.boardRevealedUrl);
        assert.notOk(boardCover.isBoardHidden());
        boardCover.setBoardHidden(true);
        assert.ok(boardCover.isBoardHidden());
    });

    QUnit.test("initially hide board, then reveal", function(assert) {
        var boardCover = new BoardCover(this.$boardContainer, true, this.boardRevealedUrl);
        assert.ok(boardCover.isBoardHidden());
        boardCover.setBoardHidden(false);
        assert.notOk(boardCover.isBoardHidden());
    });

    QUnit.test("click hidden board reveals", function(assert) {
        var boardCover = new BoardCover(this.$boardContainer, true, this.boardRevealedUrl);

        revealBoard = function() { boardCover.setBoardHidden(false); };
        window.sessionStorage.setItem("room", "some_room_id");
        $.mockjax({
            url: this.boardRevealedUrl,
            data: assert.dataJsonEquals({room: "some_room_id"}),
            onAfterSuccess: assert.async()
        });

        assert.ok(boardCover.isBoardHidden());
        this.$boardContainer.find(".board-cover").click();
        assert.notOk(boardCover.isBoardHidden());
    });

    QUnit.test("click revealed board does nothing", function(assert) {
        var boardCover = new BoardCover(this.$boardContainer, false, this.boardRevealedUrl);

        // set up a handler to fail the test if it's called
        revealBoard = function() { boardCover.setBoardHidden(false); };
        window.sessionStorage.setItem("room", "some_room_id");
        $.mockjax({
            url: this.boardRevealedUrl,
            response: function(r) {
                assert.notOk(true, "select called with: " + JSON.stringify(r));
            }
        });

        assert.notOk(boardCover.isBoardHidden());
        this.$boardContainer.find(".board-cover").click();
        assert.notOk(boardCover.isBoardHidden());

        // wait a bit  to see if the handler fires
        assert.expect(2);
        setTimeout(assert.async(), 100);
    });
})();
