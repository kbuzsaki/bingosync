var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Look through the telescope viewfinder", types: ["temple","click"] },
  { name: "Look at the jammed lever", types: ["temple","click"] },
  { name: "Look at Gehn's guard", types: ["temple","click"] },
  { name: "Wiggle the wooden gate", types: ["temple","click"] },
  { name: "Read about Star Fissure in Atrus's journal", types: ["Riven","code"] }
];
bingoList[2] = [
  { name: "Portrait: Gehn casting out Atrus", types: ["temple","gateroom"] },
  { name: "Portrait: Gehn & elders", types: ["temple","gateroom"] },
  { name: "Portrait: Gehn & book", types: ["temple","gateroom"] },
  { name: "Portrait: Gehn writing", types: ["temple","gateroom"] },
  { name: "Portrait: Gehn being worshipped", types: ["temple","gateroom"] },
  { name: "Look at a wahrk idol on Temple Island", types: ["temple","click"] }
];
bingoList[3] = [
  { name: "View Gateroom text \"The Ink\"", types: ["temple","gateroom"] },
  { name: "View Gateroom text \"The Books\"", types: ["temple","gateroom"] },
  { name: "View Gateroom text \"Our Master\"", types: ["temple","gateroom"] },
  { name: "Look at the tram platform through the viewer", types: ["temple","click"] },
  { name: "Divert steam to telescope", types: ["temple","gate"] }
];
bingoList[4] = [
  { name: "Raise side gate room inner gate", types: ["temple","gate"] },
  { name: "Sit in Gehn's imager chair with sound on", types: ["temple","cutscene"] },
  { name: "Ride tram from Jungle Island to Temple Island", types: ["jungle","click"] },
  { name: "Raise gate from gate room to golden dome", types: ["temple","gate"] },
  { name: "Rotate frog noise ball", types: ["jungle","cutscene"] }
];
bingoList[5] = [
  { name: "Lower the telescope to the hatch", types: ["temple","cutscene"] },
  { name: "Ride the minecart", types: ["jungle","cutscene"] },
  { name: "View golden dome island map", types: ["temple","click"] },
  { name: "Look at the beetle", types: ["jungle","cutscene"] },
  { name: "Fill wading pool", types: ["jungle","cutscene"] }
];
bingoList[6] = [
  { name: "Divert steam to boiler island/golden dome bridge", types: ["temple","gate"] },
  { name: "Divert steam to golden dome staircase", types: ["temple","gate"] },
  { name: "Lower the submarine", types: ["jungle","gate"] },
  { name: "Rotate wahrk noise ball", types: ["jungle","cutscene"] },
  { name: "Rotate beetle noise ball", types: ["jungle","cutscene"] },
  { name: "Look at the golden wahrk altar", types: ["jungle","click"] },
  { name: "Rotate sunner noise ball", types: ["jungle","cutscene"] }
];
bingoList[7] = [
  { name: "Drain the boiler", types: ["crater","gate"] },
  { name: "Turn on Christmas lights", types: ["temple","code"] },
  { name: "Ride tram from Jungle Island to Survey Island", types: ["jungle","click"] },
  { name: "Open fire marble dome (Jungle)", types: ["jungle","code"] },
  { name: "Ride tram from Survey Island to Jungle Island", types: ["survey","click"] }
];
bingoList[8] = [
  { name: "Watch village girl run away", types: ["jungle","cutscene"] },
  { name: "Run the chipper", types: ["crater","cutscene"] },
  { name: "Activate the viewer throne", types: ["survey","cutscene"] },
  { name: "View Gehn's projection in the Temple", types: ["temple","cutscene"] },
  { name: "Ride the execution throne to the top", types: ["jungle","click"] },
  { name: "Ride the golden elevator", types: ["survey","click"] }
];
bingoList[9] = [
  { name: "Close wahrk gallows", types: ["jungle","gate"] },
  { name: "Unlock hatch above ladder on Crater Island", types: ["crater","click"] },
  { name: "Turn off vent fan", types: ["crater","click"] },
  { name: "Press blue switch", types: ["survey","click"] },
  { name: "Dock at the platform control room", types: ["jungle","click"] }
];
bingoList[10] = [
  { name: "Knock on the door 5 times", types: ["jungle","cutscene"] },
  { name: "Open fire marble dome (Crater)", types: ["crater","code"] },
  { name: "Spy on Catherine through viewer", types: ["survey","cutscene"] },
  { name: "Press green switch", types: ["survey","click"] },
  { name: "Ride tram from Survey Island to Crater Island", types: ["survey","click"] },
  { name: "Read the note about the ball", types: ["crater","click"] },
  { name: "Rotate fish ball", types: ["crater","click"] },
  { name: "Press yellow switch", types: ["survey","click"] }
];
bingoList[11] = [
  { name: "Listen to the sunners bark", types: ["jungle","cutscene"] },
  { name: "Extend all dock platforms", types: ["jungle","gate"] },
  { name: "View Gehn's egg collection", types: ["crater","click"] },
  { name: "View bubbler demo", types: ["crater","click"] },
  { name: "Collect the dome code", types: ["crater","code"] }
];
bingoList[12] = [
  { name: "Look in the burned book", types: ["crater","click"] },
  { name: "Press orange switch", types: ["survey","click"] },
  { name: "Close the binding press", types: ["crater","click"] },
  { name: "Look at the wahrk gallows through viewer", types: ["survey","click"] },
  { name: "Press red switch", types: ["survey","click"] }
];
bingoList[13] = [
  { name: "Press purple switch", types: ["survey","click"] },
  { name: "Make the wahrk ram the glass", types: ["survey","cutscene"] },
  { name: "Ride tram from Crater Island to Survey Island", types: ["crater","click"] },
  { name: "Activate Temple Island survey", types: ["survey","click"] },
  { name: "Activate Jungle Island survey", types: ["survey","click"] }
];
bingoList[14] = [
  { name: "Activate Crater Island survey", types: ["survey","click"] },
  { name: "Activate Survey Island survey", types: ["survey","click"] },
  { name: "Activate Prison Island survey", types: ["survey","click"] },
  { name: "Dock at the wahrk gallows", types: ["jungle","click"] },
  { name: "Dock at the schoolroom", types: ["jungle","click"] }
];
bingoList[15] = [
  { name: "Open fire marble dome (Survey)", types: ["survey","code"] },
  { name: "Watch Gehn's school message", types: ["jungle","cutscene"] },
  { name: "Dock at the village dock", types: ["jungle","click"] },
  { name: "Survey Temple Island fire marble dome", types: ["survey","click"] },
  { name: "Survey Jungle Island fire marble dome", types: ["survey","click"] },
  { name: "Survey Crater Island fire marble dome", types: ["survey","click"] }
];
bingoList[16] = [
  { name: "Survey Survey Island fire marble dome", types: ["survey","click"] },
  { name: "Survey Prison Island fire marble dome", types: ["survey","click"] },
  { name: "Look at the lesson on the board", types: ["jungle","click"] },
  { name: "Look at the graded paper", types: ["jungle","click"] },
  { name: "Watch the elevator rise out of the water", types: ["survey","cutscene"] }
];
bingoList[17] = [
  { name: "Frighten away Gehn's assistent", types: ["survey","cutscene"] },
  { name: "Lower bridge from crater island to golden dome", types: ["crater","click"] },
  { name: "Extend golden dome gangway", types: ["temple","gate"] },
  { name: "Raise side gate room outer gate", types: ["temple","gate"] },
  { name: "Look in on the prisoner at the gallows", types: ["jungle","cutscene"] },
  { name: "Open gallows cell", types: ["jungle","click"] }
];
bingoList[18] = [
  { name: "Lower gallows ladder", types: ["jungle","click"] },
  { name: "Power the fire marble domes", types: ["temple","code"] },
  { name: "Open gallows secret passage", types: ["jungle","click"] },
  { name: "Light the four secret passage torches", types: ["jungle","click"] },
  { name: "Play a round of gallows game", types: ["jungle","cutscene"] },
  { name: "Unlock Tay book", types: ["jungle","click"] }
];
bingoList[19] = [
  { name: "Link to Tay", types: ["jungle","gate"] },
  { name: "Open fire marble dome (Temple)", types: ["temple","code"] },
  { name: "See Richard Vander Wende", types: ["tay","cutscene"] },
  { name: "Catch a frog", types: ["crater","cutscene"] },
  { name: "Collect the trap book", types: ["tay","click"] }
];
bingoList[20] = [
  { name: "Meet with Nelah", types: ["tay","cutscene"] },
  { name: "Link out from Tay in the tree", types: ["tay","click"] },
  { name: "Read the hatch code", types: ["Riven","code"] },
  { name: "Link out from Tay at idol", types: ["tay","click"] },
  { name: "Link to 233 from Temple Island", types: ["temple","gate"] }
];
bingoList[21] = [
  { name: "Link to 233 from Crater Island", types: ["crater","gate"] },
  { name: "Link to 233 from Prison Island", types: ["prison","gate"] },
  { name: "Have Catherine reject you", types: ["prison","cutscene"] },
  { name: "Open the Star Fissure hatch", types: ["temple","gate"] },
  { name: "Look at the Starry Expanse through the telescope", types: ["temple","click"] }
];
bingoList[22] = [
  { name: "Open fire marble dome (Prison)", types: ["prison","code"] },
  { name: "Link to 233 from Jungle Island", types: ["jungle","gate"] },
  { name: "Link to 233 from Survey Island", types: ["survey","gate"] },
  { name: "Summon the golden elevator with blue button", types: ["survey","click"] },
  { name: "Listen to Gehn's speech", types: ["233","cutscene"] }
];
bingoList[23] = [
  { name: "Trap Gehn", types: ["233","cutscene"] },
  { name: "Look at Gehn's pipe (233)", types: ["233","click"] },
  { name: "Look at Gehn's inkwell", types: ["233","click"] },
  { name: "Try to go outside in 233", types: ["233","click"] },
  { name: "Listen to the cannen", types: ["233","click"] },
  { name: "Link to Temple Island from 233", types: ["233","gate"] },
  { name: "Link to Jungle Island from 233", types: ["233","gate"] }
];
bingoList[24] = [
  { name: "Link to Crater Island from 233", types: ["233","gate"] },
  { name: "Link to Survey Island from 233", types: ["233","gate"] },
  { name: "Link to Prison Island from 233", types: ["233","gate"] },
  { name: "Listen to the watch code", types: ["233","code"] },
  { name: "View the recording of Keta", types: ["233","click"] },
  { name: "Free Catherine", types: ["prison","cutscene"] },
  { name: "Refuse to enter the trap book", types: ["233","cutscene"] }
];
bingoList[25] = [
  { name: "Opera", types: ["233","cutscene"] },
  { name: "Open destroyed Jungle Island link book", types: ["233","click"] },
  { name: "Open destroyed Crater Island link book", types: ["233","click"] },
  { name: "Open destroyed Survey Island link book", types: ["233","click"] },
  { name: "Open destroyed Prison Island link book", types: ["233","click"] },
  { name: "Summon Temple Island tram and have it not show up", types: ["temple","click"] },
  { name: "Free Riven", types: ["Riven","cutscene"] }
];

