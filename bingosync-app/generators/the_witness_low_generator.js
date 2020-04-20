var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
    {name:'Tutorial Patio Roof Audio Log'},
    {name:'Tutorial Gate Audio Log'},
    {name:'Desert Broken Wall Audio Log'},
    {name:'Shadows Orange Crate Audio Log'},
];
bingoList[2] = [
    {name:'Keep Guitar Amp Audio Log'},
    {name:'Keep Throne Audio Log'},
    {name:'Mill Stairs Audio Log'},
    {name:'Cloud Cycle Audio Log'},
];
bingoList[3] = [
    {name:'Jungle Laser Audio Log'},
    {name:'Jungle Beach Audio Log'},
    {name:'Peninsula Audio Log'},
    {name:'Town Obelisk Audio Log'},
];
bingoList[4] = [
    {name:'Any 8 Audio Logs'},
    {name:'Any 10 Audio Logs'},
    {name:'Any 12 Audio Logs'},
];
bingoList[5] = [
    {name:'Move any object that is not a Boat, Door, Staircase, or Laser'},
    {name:'Shadows: Open the Tutorial Door'},
    {name:'Any 7 Non-Laser Panels that do not increase solve count'},
];
bingoList[6] = [
    {name:'Tutorial Hallway EP'},
    {name:'Tutorial Cloud EP'},
    {name:'Tutorial Gate EP'},
    {name:'Tutorial Pillar'},
    {name:'Tutorial: Close the Gate'},
    {name:'Short Sewer EP'},
    {name:'Tutorial Garden EP'},
    {name:'Turn on the EEE Lightswitch'},
    {name:'Tutorial Vault'},
];
bingoList[7] = [
    {name:'Desert Discarded Panel'},
    {name:'Desert Shore EP'},
    {name:'Desert Island EP'},
    {name:'Desert Vault'},
    {name:'Desert Sand Snake EP'},
    {name:'Quarry Entrance Pipe EP'},
    {name:'Town: Open the Windmill'},
    {name:'Town Redirect Black Line EP'},
    {name:'Town Bell Tower Black Line EP'},
];
bingoList[8] = [
    {name:'Shadows Laser'},
    {name:'Mill Stairs Control Panel'},
    {name:'Mill Rooftop Vent EP'},
    {name:'Mill Discarded Panel'},
    {name:'Keep Red Flowers EP'},
    {name:'Keep Purple Flowers EP'},
    {name:'Keep Corridor Audio Log'},
];
bingoList[9] = [
    {name:'Jungle Entrance EP'},
    {name:'Jungle Discarded Panel'},
    {name:'Jungle Tree Halo EP'},
    {name:'Jungle Pop-up Wall Moss EP'},
    {name:'Jungle Courtyard Gate Panel'},
    {name:'Jungle Vault'},
    {name:'Jungle Green Leaf Moss EP'},
    {name:'Monastery Grass Stairs EP'},
    {name:'Monastery Right Courtyard EP'},
    {name:'Monastery Stone Wall EP'},
    {name:'Bunker Entry Door Panel'},
];
bingoList[10] = [
    {name:'Treehouse Drawbridge Control Panel'},
    {name:'Treehouse Laser Discarded Panel'},
    {name:'Mountainside Discarded Panel'},
    {name:'Mountainside Vault'},
    {name:'Mountaintop River EP'},
    {name:'Mountaintop River Panel'},
    {name:'Mountaintop Black Arch EP'},
    {name:'Cloud Cycle EP'},
];
bingoList[11] = [
    {name:'Tutorial Patio Floor Panel'},
    {name:'Tutorial Flowers EP'},
    {name:'Tutorial Discarded Panel'},
    {name:'Glass Factory Yellow Vase EP'},
    {name:'Any 2 Vaults'},
    {name:'Any 2 Discarded Panels'},
];
bingoList[12] = [
    {name:'Quarry Rock Line EPs'},
    {name:'Quarry Entry Gate Panels'},
    {name:'Mill Entry Door Panels'},
    {name:'Mill Sand Pile and Shore EPs'},
    {name:'Desert Facade EPs'},
    {name:'Desert Stairs EPs'},
    {name:'Desert Broken Wall EPs'},
];
bingoList[13] = [
    {name:'Town Church Stars and Lattice Panels'},
    {name:'Town Orange Crate Discarded Panel'},
    {name:'Shipwreck Discarded Panel'},
    {name:'Shipwreck Vault'},
    {name:'Shipwreck Stern EP'},
];
bingoList[14] = [
    {name:'Jungle Bamboo Sky EPs'},
    {name:'Monastery Entrance Doors'},
    {name:'Swamp Red Shortcut Panels'},
    {name:'Treehouse Floor Shadow EPs'},
    {name:'Mountainside Bush and Cove EPs'},
    {name:'Mountaintop White Arch EPs'},
];
bingoList[15] = [
    {name:'Keep Discarded Panel'},
    {name:'Keep Dirt Path EP'},
    {name:'Keep Hedge Mazes EP'},
    {name:'Keep Yellow Pressure Plate EP'},
    {name:'Keep Front Wall Audio Log'},
];
bingoList[16] = [
    {name:'Town Rooftop Discarded Panel'},
    {name:'Town Bridge Underside EP'},
    {name:'Any 3 Discarded Panels'},
];
bingoList[17] = [
    {name:'Jungle Waves Set 1 Panels'},
    {name:'Jungle Moss Same Start Point EPs'},
    {name:'Monastery Exterior Panels'},
    {name:'Monastery Left Shutters Audio Log'},
];
bingoList[18] = [
    {name:'Theater Discarded Panel'},
    {name:'Windmill First Blade EP'},
    {name:'Windmill Second Blade EP'},
    {name:'Windmill Third Blade EP'},
];
bingoList[19] = [
    {name:'Boathouse: Raise the Ramp'},
    {name:'Bunker Glass Room Panels'},
    {name:'Any 3 Vaults'},
    {name:'Swamp Laser'},
];
bingoList[20] = [
    {name:'Shipwreck Rope EPs'},
    {name:'Keep Laser'},
    {name:'Keep Green Pressure Plate EP'},
    {name:'Keep Purple Pressure Plate EP'},
];
bingoList[21] = [
    {name:'Town Tower Underside EPs'},
    {name:'Theater Church EP'},
    {name:'Theater Exit Panels'},
    {name:'Monastery Left Courtyard EP'},
    {name:'Any 4 Straight Line EPs'},
    {name:'Keep Hedge Maze Panels'},
    {name:'Keep Pressure Plates'},
    {name:'Shipwreck Circle EPs'},
    {name:'Swamp Sliding Bridge EPs'},
    {name:'Any 4 Discarded Panels'},
];
bingoList[22] = [
    {name:'Dots Tutorial Panels'},
    {name:'Glass Factory Vertical Symmetry Panels'},
    {name:'Orchard Apple Tree Panels'},
    {name:'All Desert Light Room Panels'},
    {name:'Town Green Light EP'},
    {name:'Theater Window and Doorway EPs'},
    {name:'Boathouse Erasers and Shapers Panels'},
    {name:'Town Red Hexagonal Panel'},
    {name:'Bunker Tutorial Panels'},
    {name:'Symmetry Black Dots Panels'},
    {name:'Swamp Island Control Panels'},
    {name:'Mill Ramp Light EP'},
    {name:'Mill Lift Light EP'},
];
bingoList[23] = [
    {name:'Town Eraser Panel'},
    {name:'Town R/G/B Light Panels'},
    {name:'Monastery Facade EPs'},
    {name:'Monastery Shutter EPs'},
    {name:'Mill Lower Row Panels'},
    {name:'Town Red Light EP'},
    {name:'Desert Pond Room EPs'},
    {name:'Swamp Red Panels'},
    {name:'Both Keep Laser Panels'},
    {name:'All 5 Vaults'},
];
bingoList[24] = [
    {name:'Jungle Waves Set 2 Panels'},
    {name:'Town Maze, Bridge, and Blue Panels'},
    {name:'Jungle: Raise the Pop-up Wall'},
    {name:'Boathouse Erasers and Star Panels'},
];
bingoList[25] = [
    {name:'Theater Video Panels'},
    {name:'Mill Upper Row Panels'},
    {name:'Shadows Tutorial Panels'},
    {name:'Desert Surface Panels'},
];
