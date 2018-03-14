
function initializeRoomsPanel($roomsPanel) {
    $roomsPanel.find(".show-button").on("click", function() {
        $roomsPanel.removeClass("hide-idle-rooms");
    });
    $roomsPanel.find(".hide-button").on("click", function() {
        $roomsPanel.addClass("hide-idle-rooms");
    });
}
