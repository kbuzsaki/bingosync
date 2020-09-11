var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
{"name": "Get the Spider Donut", "types": ["Item", "Ruins"]},
{"name": "Get the Spider Cider", "types": ["Item", "Ruins"]},
{"name": "Get Toy Knife, skip Faded Ribbon", "types": ["Item", "Ruins"]},
{"name": "Get Faded Ribbon, skip Toy Knife", "types": ["Item", "Ruins"]},
{"name": "Finish with at least 300 G", "types": ["Waterfall", "Hotlands", "CORE", "Gold"]},
];
bingoList[2] = [
{"name": "Get Aaron's Yellow Credit", "types": ["Spare", "Waterfall", "Yellow_Credits"]},
{"name": "Get the Glamburger in CORE", "types": ["Item", "CORE"]},
{"name": "Buy the Sea Tea and use it in Battle", "types": ["Item"]},
{"name": "Get the Abandoned Quiche", "types": ["Item", "Waterfall"]},
{"name": "Spare Temmie", "types": ["Spare", "Waterfall"]},
];
bingoList[3] = [
{"name": "Win at Thundersnail", "types": ["Waterfall"]},
{"name": "Kill Jerry", "types": ["Kill", "Snowdin"]},
{"name": "Spare Vulkin", "types": ["Spare", "Hotlands", "Yellow_Credits"]},
{"name": "Get to LV 5", "types": ["Kill"]},
{"name": "Kill two Major Bosses", "types": ["Kill"]},
];
bingoList[4] = [
{"name": "Get one Snowman Piece", "types": ["Item", "Snowdin"]},
{"name": "Look through a telescope", "types": ["Waterfall"]},
{"name": "Buy the Notebook", "types": ["Item", "Waterfall"]},
{"name": "Rip the Punch Card in battle", "types": ["Waterfall", "Hotlands", "CORE"]},
{"name": "Buy the Legendary Hero", "types": ["Item", "CORE"]},
];
bingoList[5] = [
{"name": "Get the Where are the Knives text", "types": ["Kill", "Ruins"]},
{"name": "Get all Monster Candy", "types": ["Item", "Ruins"]},
{"name": "Deplete encounters for one area", "types": ["Kill"]},
{"name": "Buy the Nice Cream in Waterfall and Snowdin", "types": ["Item", "Waterfall", "Snowdin"]},
{"name": "Find the Dog in Papyrus' house", "types": ["Snowdin"]},
];
bingoList[6] = [
{"name": "Buy the Tough Glove", "types": ["Item", "Snowdin"]},
{"name": "Save Monster Kid from Falling", "types": ["Waterfall"]},
{"name": "Sans says you're going to have a bad time", "types": ["Kill", "Snowdin"]},
{"name": "Talk to 8 Echo Flowers", "types": ["Waterfall"]},
{"name": "Get 3 Snowman Pieces", "types": ["Item", "Kill", "Snowdin"]},
];
bingoList[7] = [
{"name": "Do Kindergarten Undyne", "types": ["Spare", "Waterfall"]},
{"name": "Do Papyrus' colour puzzle", "types": ["Snowdin"]},
{"name": "Buy the Mystery key, skip the Empty Gun", "types": ["Item", "CORE"]},
{"name": "Buy the Empty Gun, skip the Mystery key", "types": ["Item", "CORE"]},
];
bingoList[8] = [
{"name": "Kill 4 Dog bosses", "types": ["Dogs", "Kill", "Snowdin"]},
{"name": "Extend Lesser Doggo Fully", "types": ["Dogs", "Snowdin", "Yellow_Credits"]},
{"name": "Ride the Ferry in Waterfall", "types": ["Waterfall"]},
{"name": "Defuse a Bomb", "types": ["Hotlands"]},
{"name": "Get Gyftrot's Yellow Credit", "types": ["Spare", "Snowdin", "Yellow_Credits"]},
];
bingoList[9] = [
{"name": "Get Yellow Credits for 4 Monsters in Ruins", "types": ["Spare", "Ruins", "Yellow_Credits"]},
{"name": "Find 2 Cameras in Snowdin", "types": ["Cameras", "Snowdin"]},
{"name": "Find 4 Cameras in Snowdin", "types": ["Cameras", "Snowdin"]},
{"name": "Empty the Water cooler", "types": ["Hotlands"]},
];
bingoList[10] = [
{"name": "Get Yellow Credits for 10 Monsters overall", "types": ["Spare", "Yellow_Credits"]},
{"name": "Complete 2 Hotland Puzzles", "types": ["Puzzles", "Hotlands"]},
{"name": "Get Carried by the Small Bird", "types": ["Waterfall"]},
{"name": "Flee Toriel", "types": ["Ruins"]},
];
bingoList[11] = [
{"name": "Complete 5 Hotland Puzzles", "types": ["Puzzles", "Hotlands"]},
{"name": "Visit Undyne's House", "types": ["Waterfall"]},
{"name": "Complete 4 Hotland Puzzles", "types": ["Puzzles", "Hotlands"]},
{"name": "Ask the Froggit for Pink names", "types": ["Ruins"]},
{"name": "Leave Ruins with at least 30 G", "types": ["Ruins", "Gold"]},
];
bingoList[12] = [
{"name": "Get Gold from the Snow Poffs", "types": ["Snowdin"]},
{"name": "Kill One Dog boss", "types": ["Dogs", "Kill", "Snowdin"]},
{"name": "Kill 2 Dog Bosses", "types": ["Dogs", "Kill Snowdin"]},
{"name": "Do the Mettaton Quiz Show", "types": ["Hotlands"]},
{"name": "Remember Heat Flamesman's Name", "types": ["Hotlands"]},
];
bingoList[13] = [
{"name": "Get to 12 LV", "types": ["Kill"]},
{"name": "Kill Glyde", "types": ["Kill", "Snowdin"]},
{"name": "Date Papyrus", "types": ["Spare", "Snowdin"]},
{"name": "Stop to smell the flowers", "types": ["Hotlands"]},
];
bingoList[14] = [
{"name": "Pile all the Hotdogs on Frisk", "types": ["Item", "Hotlands"]},
{"name": "Get Dog Salad", "types": ["Item", "Waterfall"]},
{"name": "Level up 3 different times", "types": ["Kill"]},
{"name": "Make Temmie say You Will Regret This", "types": ["Item", "Waterfall"]},
];
bingoList[15] = [
{"name": "Fly on the Jetpack", "types": ["Hotlands"]},
{"name": "Watch Mettaton's Musical", "types": ["Hotlands"]},
{"name": "Go through the whole Papyrus fight", "types": ["Spare", "Snowdin"]},
{"name": "Get Ballet Shoes, skip Burnt Pan", "types": ["Item", "Waterfall", "Hotlands"]},
];
bingoList[16] = [
{"name": "Kill Muffet", "types": ["Kill", "Hotlands"]},
{"name": "Get to 3 LV", "types": ["Kill"]},
{"name": "Spare Royal Guards", "types": ["Spare", "Hotlands", "Yellow_Credits"]},
{"name": "Fall in the Pit 10 times", "types": ["Ruins"]},
];
bingoList[17] = [
{"name": "Get 10,000 Points in the Mettaton Fight", "types": ["Kill", "Spare", "CORE"]},
{"name": "Get to 7 LV", "types": ["Kill"]},
{"name": "Get to 9 LV", "types": ["Kill"]},
{"name": "Buy the Cloudy Glasses, skip the Old Tutu", "types": ["Item", "Waterfall"]},
{"name": "Try to go through the Fire Exit", "types": ["Dogs", "Snowdin"]},
];
bingoList[18] = [
{"name": "Get Purple flag in Ball", "types": ["Ball", "Snowdin"]},
{"name": "Get Yellow flag in Ball", "types": ["Ball", "Snowdin"]},
{"name": "Get Orange flag in Ball", "types": ["Ball", "Snowdin"]},
{"name": "Buy the Cinnamon Bunny", "types": ["Item", "Snowdin"]},
{"name": "Travel with the Riverperson", "types": ["Hotlands"]},
];
bingoList[19] = [
{"name": "Pick up both Astronaut Food", "types": ["Item", "Waterfall"]},
{"name": "Pick up the Instant Noodles", "types": ["Item", "Hotlands"]},
{"name": "Pick up the Stained Apron", "types": ["Item", "Hotlands"]},
{"name": "Buy the Bisicle", "types": ["Item", "Snowdin"]},
];
bingoList[20] = [
{"name": "Stay at the Snowdin Inn", "types": ["Snowdin"]},
{"name": "Spot Flowey following you after Ruins", "types": ["Snowdin", "Waterfall", "Hotlands", "CORE"]},
{"name": "Buy the Junk Food", "types": ["Item", "CORE"]},
{"name": "Eat the Instant Noodles in Battle", "types": ["Item", "Hotlands", "CORE"]},
];
bingoList[21] = [
{"name": "Ride the Long Elevator", "types": ["CORE"]},
{"name": "Call Toriel from 2 rooms", "types": ["Ruins"]},
{"name": "Play 3 Spooktunes", "types": ["Waterfall"]},
{"name": "Get Light Blue flag in Ball", "types": ["Ball", "Snowdin"]},
{"name": "Leave Snowdin with at least 200G", "types": ["Snowdin", "Gold"]},
];
bingoList[22] = [
{"name": "Interact with 4 Mice", "types": ["Mice"]},
{"name": "Call Toriel from 4 rooms", "types": ["Ruins"]},
{"name": "Buy and equip the Manly Bandana", "types": ["Item", "Snowdin"]},
{"name": "Find 6 Cameras in Snowdin", "types": ["Cameras", "Snowdin"]},
{"name": "Spare the First Froggit", "types": ["Spare", "Ruins"]},
];
bingoList[23] = [
{"name": "Do 2 Sans Dates", "types": ["CORE"]},
{"name": "Exchange 3 Punch Cards for a Nice Cream", "types": ["Item", "Waterfall"]},
{"name": "Kill Napstablook", "types": ["Kill", "Ruins"]},
{"name": "Buy the Cowboy Hat", "types": ["Item", "CORE"]},
];
bingoList[24] = [
{"name": "Spare the Warriors", "types": ["Spare", "CORE"]},
{"name": "Kill the Warriors", "types": ["Kill", "CORE"]},
{"name": "Wait at the Barrier", "types": ["CORE"]},
{"name": "Find 8 Cameras in Snowdin", "types": ["Cameras", "Snowdin"]},
];
bingoList[25] = [
{"name": "Interact with 2 Mice", "types": ["Mice"]},
{"name": "Interact with 3 Mice", "types": ["Mice"]},
{"name": "Eat the Pie", "types": ["Item"]},
{"name": "Buy the Face Steak", "types": ["Item", "Hotlands"]},
{"name": "Temmie College", "types": ["Item", "Waterfall"]},
];
