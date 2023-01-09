COLORS = ["blank", "red", "blue", "green", "purple", "orange", "navy", "teal", "pink", "brown", "yellow"];

function getSquareColorClass(color) {
    return color + "square";
}

function getPlayerColorClass(color) {
    return color + "player";
}

function preciseSqrt(num) {
    const result = Math.sqrt(num);
    if (result * result !== num) {
        throw new Error("Number is not a square");
    }
    return result;
}

// global variables that are overwritten in bingosync.html main
var ROOM_SETTINGS = null;
var refreshBoard = function () {};
var hideBoard = function() {};
var revealBoard = function() {};
