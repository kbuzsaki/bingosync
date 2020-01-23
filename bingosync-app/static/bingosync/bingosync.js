
function initializeChatSettings($chatSettings, $chatWindow) {
    $("#chat-settings-collapse").on("mousedown", function() {
        $("#chat-settings .panel-body").toggle(50);
    });

    $chatSettings.find("#chat-entry-toggle").on("change", function() {
        $chatWindow.find(".chat-entry").toggle(this.checked);
    });
    $chatSettings.find("#goal-entry-toggle").on("change", function() {
        $chatWindow.find(".goal-entry").toggle(this.checked);
    });
    $chatSettings.find("#color-entry-toggle").on("change", function() {
        $chatWindow.find(".color-entry").toggle(this.checked);
    });
    $chatSettings.find("#connection-entry-toggle").on("change", function() {
        $chatWindow.find(".connection-entry").toggle(this.checked);
    });
    $chatSettings.find("#timestamp-toggle").on("change", function() {
        $chatWindow.find(".chat-timestamp").toggle(this.checked);
    });
}


