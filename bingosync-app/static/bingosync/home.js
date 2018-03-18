
function initializeRoomsPanel($roomsPanel) {
    $roomsPanel.find(".show-button").on("click", function(e) {
        e.preventDefault();
        $roomsPanel.removeClass("hide-idle-rooms");
    });
    $roomsPanel.find(".hide-button").on("click", function(e) {
        e.preventDefault();
        $roomsPanel.addClass("hide-idle-rooms");
    });
}
