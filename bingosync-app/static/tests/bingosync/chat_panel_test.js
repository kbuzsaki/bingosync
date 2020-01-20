(function(){
    "use strict";

    QUnit.module("ChatPanel", {
        beforeEach: function() {
            $.mockjax.clear();
            sessionStorage.clear();

            this.$fixture = $("#qunit-fixture");
            this.$chatPanel = this.$fixture.find("#bingo-chat");
            this.chatBodyEl = this.$chatPanel.find(".chat-body")[0];
            this.$chatSettings = this.$fixture.find("#chat-settings");
            this.chatUrl = "/fake/chat/url";
            this.historyUrl = "/fake/history/url";

            var that = this;
            this.mockReloadChat = function(response, done, onAfterSuccess) {
                $.mockjax({
                    url: this.historyUrl,
                    responseText: response,
                    onAfterSuccess: function() {
                        onAfterSuccess();
                        done();
                    },
                });
            };
            this.mockReloadFullChat = function(response, done, onAfterSuccess) {
                $.mockjax({
                    url: this.historyUrl + "?full=true",
                    responseText: response,
                    onAfterSuccess: function() {
                        onAfterSuccess();
                        done();
                    },
                });
            };
        }
    });

    QUnit.test("Construct empty panel", function(assert) {
        var chatPanel = new ChatPanel(this.$chatPanel, this.$chatSettings, this.chatUrl, this.historyUrl);
        assert.strictEqual(this.chatBodyEl.children.length, 1);

        var chatHistoryEl = this.chatBodyEl.children[0];
        assert.elementsAre(chatHistoryEl.children, assert.outerHtmlEquals.bind(assert), [
            ('<span class="history-placeholder">Loading chat history...</span>')
        ]);

        var strippedHistoryEl = chatHistoryEl.cloneNode(true);
        strippedHistoryEl.innerHTML = "";
        assert.outerHtmlEquals(strippedHistoryEl, '<div class="chat-history"></div>');
    });

    QUnit.test("Reload empty chat", function(assert) {
        var chatPanel = new ChatPanel(this.$chatPanel, this.$chatSettings, this.chatUrl, this.historyUrl);

        assert.expect(2);
        var that = this;
        this.mockReloadChat({events: [], allIncluded: true}, assert.async(), function() {
            assert.elementsAre(that.chatBodyEl.children, assert.outerHtmlEquals.bind(assert), [
                ('<div class="chat-history"></div>')
            ]);
        });
        chatPanel.reloadChatHistory();
    });

    QUnit.test("Reload non-empty chat", function(assert) {
        var chatPanel = new ChatPanel(this.$chatPanel, this.$chatSettings, this.chatUrl, this.historyUrl);

        var events = [
            {type: "chat", player: {name: "user_a"}, player_color: "red", text: "a message", timestamp: 1579385498},
            {type: "chat", player: {name: "user_b"}, player_color: "green", text: "a reply", timestamp: 1579385499},
        ];

        assert.expect(2);
        var that = this;
        this.mockReloadChat({events: events, allIncluded: true}, assert.async(), function() {
            assert.elementsAre(that.chatBodyEl.children, assert.outerHtmlEquals.bind(assert), [
                ('<div class="chat-history">' +
                  '<div class="chat-entry"><div>' +
                    '<span class="chat-timestamp">14:11:38</span> ' +
                    '<span class="chat-name redplayer">user_a</span>: ' +
                    '<span class="chat-message">a message</span>' +
                  '</div></div>' +
                  '<div class="chat-entry"><div>' +
                    '<span class="chat-timestamp">14:11:39</span> ' +
                    '<span class="chat-name greenplayer">user_b</span>: ' +
                    '<span class="chat-message">a reply</span>' +
                  '</div></div>' +
                '</div>')
            ]);
        });
        chatPanel.reloadChatHistory();
    });

    QUnit.test("Reload partial chat history", function(assert) {
        var chatPanel = new ChatPanel(this.$chatPanel, this.$chatSettings, this.chatUrl, this.historyUrl);
        assert.expect(4);

        var initialEvents = [
            {type: "chat", player: {name: "user_b"}, player_color: "green", text: "a reply", timestamp: 1579385499}
        ];
        var allEvents = [
            {type: "chat", player: {name: "user_a"}, player_color: "red", text: "a message", timestamp: 1579385498}
        ].concat(initialEvents);

        chatPanel.populateChatHistory({events: initialEvents, allIncluded: false});
        assert.elementsAre(this.chatBodyEl.children, assert.outerHtmlEquals.bind(assert), [
            ('<div class="chat-history">' +
                '<div class="chat-link">Click to load full history</div>' +
                '<div class="chat-entry"><div>' +
                '<span class="chat-timestamp">14:11:39</span> ' +
                '<span class="chat-name greenplayer">user_b</span>: ' +
                '<span class="chat-message">a reply</span>' +
                '</div></div>' +
            '</div>')
        ]);

        var that = this;
        this.mockReloadFullChat({events: allEvents, allIncluded: true}, assert.async(), function() {
            assert.elementsAre(that.chatBodyEl.children, assert.outerHtmlEquals.bind(assert), [
                ('<div class="chat-history">' +
                  '<div class="chat-entry"><div>' +
                    '<span class="chat-timestamp">14:11:38</span> ' +
                    '<span class="chat-name redplayer">user_a</span>: ' +
                    '<span class="chat-message">a message</span>' +
                  '</div></div>' +
                  '<div class="chat-entry"><div>' +
                    '<span class="chat-timestamp">14:11:39</span> ' +
                    '<span class="chat-name greenplayer">user_b</span>: ' +
                    '<span class="chat-message">a reply</span>' +
                  '</div></div>' +
                '</div>')
            ]);
        });

        this.$chatPanel.find(".chat-link").click();
    });

    QUnit.test("Handle new chat event", function(assert) {
        var chatPanel = new ChatPanel(this.$chatPanel, this.$chatSettings, this.chatUrl, this.historyUrl);
        chatPanel.populateChatHistory({events: [], allIncluded: true});

        chatPanel.handleEvent({
            type: "chat", text: "some message goes here", timestamp: 1579385498.575778, player_color: "blue",
            player: {uuid: "qciS9FzOQ_GoXb-My-x3pw", name: "user c", color: "blue", is_spectator: false}
        });
        assert.elementsAre(this.chatBodyEl.children, assert.outerHtmlEquals.bind(assert), [
            ('<div class="chat-history"></div>'),
            ('<div class="chat-entry"><div>' +
              '<span class="chat-timestamp">14:11:38</span> ' +
              '<span class="chat-name blueplayer">user c</span>: ' +
              '<span class="chat-message">some message goes here</span>' +
            '</div></div>')
        ]);
    });

    QUnit.test("Handle new color event", function(assert) {
        var chatPanel = new ChatPanel(this.$chatPanel, this.$chatSettings, this.chatUrl, this.historyUrl);
        chatPanel.populateChatHistory({events: [], allIncluded: true});

        // This event describes a player who was red, became purple with the event, but is currently green.
        chatPanel.handleEvent({
            type: "color", player_color: "red", color: "purple", timestamp: 1579383319.916953,
            player: {uuid: "qciS9FzOQ_GoXb-My-x3pw", name: "user c", color: "green", is_spectator: false}
        });
        assert.elementsAre(this.chatBodyEl.children, assert.outerHtmlEquals.bind(assert), [
            ('<div class="chat-history"></div>'),
            ('<div class="color-entry"><div class="color-message">' +
              '<span class="chat-timestamp">13:35:19</span> ' +
              '<span class="redplayer">user c</span> changed color to ' +
              '<span class="color-name purpleplayer">purple</span>' +
            '</div></div>')
        ]);
    });

    QUnit.test("Handle goal events", function(assert) {
        var chatPanel = new ChatPanel(this.$chatPanel, this.$chatSettings, this.chatUrl, this.historyUrl);
        chatPanel.populateChatHistory({events: [], allIncluded: true});

        chatPanel.handleEvent({
            type: "goal", player_color: "blue", color: "blue", remove: false, timestamp: 1579465863.366767,
            player: {uuid: "qciS9FzOQ_GoXb-My-x3pw", name: "c", color: "purple", is_spectator: false},
            square: {name: "Gravity Jumper", slot: "slot9", colors: "blue green purple"}
        });
        chatPanel.handleEvent({
            type: "goal", player_color: "blue", color: "blue", remove: true, timestamp: 1579465864.822462,
            player: {uuid: "qciS9FzOQ_GoXb-My-x3pw", name: "c", color: "purple", is_spectator: false},
            square: {name: "Gravity Jumper", slot: "slot9", colors: "blue green purple"}
        });
        chatPanel.handleEvent({
            type: "goal", player_color: "blue", color: "blue", remove: false, timestamp: 1579465866.218249,
            player: {uuid: "qciS9FzOQ_GoXb-My-x3pw", name: "c", color: "purple", is_spectator: false},
            square: {name: "Gravity Jumper", slot: "slot9", colors: "blue green purple"}
        });
        chatPanel.handleEvent({
            type: "goal", player_color: "green", color: "green", remove: false, timestamp: 1579465868.258829,
            player: {uuid: "qciS9FzOQ_GoXb-My-x3pw", name: "c", color: "purple", is_spectator: false},
            square: {name: "Gravity Jumper", slot: "slot9", colors: "blue green purple"}
        });

        assert.elementsAre(this.chatBodyEl.children, assert.outerHtmlEquals.bind(assert), [
            ('<div class="chat-history"></div>'),
            ('<div class="goal-entry"><div class="goal-message">' +
              '<span class="chat-timestamp">12:31:03</span> ' +
              '<span class="chat-name blueplayer">c</span> marked ' +
              '<span class="goal-name blueplayer">Gravity Jumper</span>' +
            '</div></div>'),
            ('<div class="goal-entry"><div class="goal-message">' +
              '<span class="chat-timestamp">12:31:04</span> ' +
              '<span class="chat-name blueplayer">c</span> cleared ' +
              '<span class="goal-name blankplayer">Gravity Jumper</span>' +
            '</div></div>'),
            ('<div class="goal-entry"><div class="goal-message">' +
              '<span class="chat-timestamp">12:31:06</span> ' +
              '<span class="chat-name blueplayer">c</span> marked ' +
              '<span class="goal-name blueplayer">Gravity Jumper</span>' +
            '</div></div>'),
            ('<div class="goal-entry"><div class="goal-message">' +
              '<span class="chat-timestamp">12:31:08</span> ' +
              '<span class="chat-name greenplayer">c</span> marked ' +
              '<span class="goal-name greenplayer">Gravity Jumper</span>' +
            '</div></div>')
        ]);
    });

    // TODO: Handle connection event

    // TODO: Handle revealed event

    // TODO: Handle new-card event

    // TODO: Handle chat send

})();
