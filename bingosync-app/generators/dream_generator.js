bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Cave-in Bubble", types: ["Bubble","desert"] },
  { name: "Grid Experiment", types: ["puzzle","office"] },
  { name: "Towers", types: ["puzzle","garden"] },
  { name: "Kitchen Bubble", types: ["Bubble","office"] },
];
bingoList[2] = [
  { name: "Yellow Gate", types: ["puzzle","hollow"] },
  { name: "All Bubbles: Resort", types: ["Challenge","resort"] },
  { name: "Coin", types: ["item","awake"] },
  { name: "Black Cube", types: ["item","meadow"] },
];
bingoList[3] = [
  { name: "Red Gate", types: ["puzzle","hollow"] },
  { name: "Labyrinth Vinyl", types: ["Vinyl","labyrinth"] },
  { name: "Bar Bubble", types: ["Bubble","resort"] },
  { name: "Bar Taps", types: ["puzzle","resort"] },
];
bingoList[4] = [
  { name: "Cave-In", types: ["POI","desert"] },
  { name: "Laboratory Bubble", types: ["Bubble","office"] },
  { name: "Pier", types: ["POI","resort"] },
  { name: "All Items: Resort", types: ["Challenge","resort"] },
];
bingoList[5] = [
  { name: "Tall Pipe", types: ["puzzle","office"] },
  { name: "Boss Office", types: ["POI","office"] },
  { name: "Desert Bedroom", types: ["POI","desert"] },
  { name: "Windows Bubble", types: ["Bubble","office"] },
];
bingoList[6] = [
  { name: "Finish Nightmare 3", types: ["puzzle","nightmare"] },
  { name: "Storage Bubble", types: ["Bubble","office"] },
  { name: "Catacombs", types: ["puzzle","desert"] },
  { name: "Cave Bubble", types: ["Bubble","desert"] },
];
bingoList[7] = [
  { name: "Compass", types: ["item","office"] },
  { name: "Resort Bubble", types: ["Bubble","resort"] },
  { name: "All Bubbles: Office", types: ["Challenge","office"] },
  { name: "Green Gate", types: ["puzzle","hollow"] },
];
bingoList[8] = [
  { name: "Finish Nightmare 1", types: ["puzzle","nightmare"] },
  { name: "Resort Edward Room", types: ["POI","resort"] },
  { name: "Stairs Bubble", types: ["Bubble","office"] },
  { name: "Trail Bubble", types: ["Bubble","desert"] },
];
bingoList[9] = [
  { name: "Future Vision", types: ["POI","hollow"] },
  { name: "Graveyard Puzzle", types: ["puzzle,desert"] },
  { name: "Edward Painting", types: ["puzzle","awake"] },
  { name: "Map", types: ["item","desert"] },
];
bingoList[10] = [
  { name: "Easter Egg Hunt", types: ["puzzle","meadow"] },
  { name: "5-Minute Ride", types: ["puzzle","coaster"] },
  { name: "Stars Bubble", types: ["Bubble","resort"] },
  { name: "Staff Bubble", types: ["Bubble","resort"] },
];
bingoList[11] = [
  { name: "Left Sandpit", types: ["POI","resort"] },
  { name: "All Bubbles: Desert", types: ["Challenge","desert"] },
  { name: "Ring Experiment", types: ["puzzle","office"] },
  { name: "Server Room", types: ["POI","office"] },
];
bingoList[12] = [
  { name: "Pier Bubble", types: ["Bubble","resort"] },
  { name: "Finish Poem", types: ["puzzle","hollow"] },
  { name: "Wishing Well", types: ["POI","labyrinth"] },
  { name: "Cliff Bubble", types: ["Bubble","desert"] },
];
bingoList[13] = [
  { name: "All POI: Resort", types: ["Challenge","resort"] },
  { name: "Meadow Vinyl", types: ["Vinyl","meadow"] },
  { name: "Junk Yard", types: ["POI","desert"] },
  { name: "Basement Bubble", types: ["Bubble","office"] },
];
bingoList[14] = [
  { name: "Mysterious Stone", types: ["Item","garden"] },
  { name: "Planet Experiment", types: ["puzzle","office"] },
  { name: "Office Bubble", types: ["Bubble","office"] },
  { name: "Three Pipe", types: ["puzzle","office"] },
];
bingoList[15] = [
  { name: "Phones", types: ["puzzle","resort"] },
  { name: "Beach Bubble", types: ["Bubble","resort"] },
  { name: "ViewMaster", types: ["item","resort"] },
  { name: "Finish Labyrinth", types: ["puzzle","labyrinth"] },
];
bingoList[16] = [
  { name: "Arcade Bubble", types: ["Bubble","desert"] },
  { name: "Teleporter", types: ["item","resort"] },
  { name: "Pipes Bubble", types: ["Bubble","office"] },
  { name: "Writing Bubble", types: ["Bubble","resort"] },
];
bingoList[17] = [
  { name: "Elevator Bubble", types: ["Bubble","office"] },
  { name: "Edwards Death Bed", types: ["POI","hospital"] },
  { name: "Candle Bubble", types: ["Bubble","desert"] },
  { name: "Relive Tragedy", types: ["puzzle","hospital"] },
];
bingoList[18] = [
  { name: "Great Knitter", types: ["POI","coaster"] },
  { name: "Resort Bedroom", types: ["POI","resort"] },
  { name: "Computers Bubble", types: ["Bubble","desert"] },
  { name: "Loading Bay", types: ["POI","office"] },
];
bingoList[19] = [
  { name: "Coaster Vinyl", types: ["Vinyl","coaster"] },
  { name: "Tower Art", types: ["POI","garden"] },
  { name: "Telescope", types: ["item","labyrinth"] },
  { name: "Power Crystal", types: ["item","office"] },
];
bingoList[20] = [
  { name: "Food Bubble", types: ["Bubble","resort"] },
  { name: "All Items: Office", types: ["Challenge","office"] },
  { name: "Flashlight", types: ["item","desert"] },
  { name: "Finish Nightmare 2", types: ["puzzle","nightmare"] },
];
bingoList[21] = [
  { name: "Meadow Sign", types: ["POI","meadow"] },
  { name: "Office Bedroom", types: ["POI","office"] },
  { name: "Ocean Bubble", types: ["Bubble","resort"] },
  { name: "All POI: Office", types: ["Challenge","office"] },
];
bingoList[22] = [
  { name: "Catacombs Bubble", types: ["Bubble","desert"] },
  { name: "Hospital Vinyl", types: ["Vinyl","hospital"] },
  { name: "Conveyors", types: ["puzzle","resort"] },
  { name: "Toilet Bubble", types: ["Bubble","office"] },
];
bingoList[23] = [
  { name: "Memory Experiment", types: ["puzzle","office"] },
  { name: "All POI: Desert", types: ["Challenge","desert"] },
  { name: "Snow Bubble", types: ["Bubble","desert"] },
];
bingoList[24] = [
  { name: "Graveyard Bubble", types: ["Bubble","desert"] },
  { name: "Garden Vinyl", types: ["Vinyl","garden"] },
  { name: "Hollow Vinyl", types: ["Vinyl","hollow"] },
];
bingoList[25] = [
  { name: "Church Bubble", types: ["Bubble","resort"] },
  { name: "Base Jump", types: ["POI","desert"] },
  { name: "All Items: Desert", types: ["Challenge","desert"] },
];

