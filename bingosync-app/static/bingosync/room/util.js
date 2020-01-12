COLORS = ["blank", "red", "blue", "green", "purple", "orange", "navy", "teal", "pink", "brown", "yellow"];
BLANK_COLOR = "blank";

function getSquareColorClass(color) {
    return color + "square";
}

function getPlayerColorClass(color) {
    return color + "player";
}

ORDERED_COLORS = ["pink", "red", "orange", "brown", "yellow", "green", "teal", "blue", "navy", "purple"];

function sortColors(colors) {
    orderedColors = [];
    for (var i = 0; i < ORDERED_COLORS.length; i++) {
        if (colors.indexOf(ORDERED_COLORS[i]) !== -1) {
            orderedColors.push(ORDERED_COLORS[i]);
        }
    }
    return orderedColors;
}

