bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
    {name: "All Honeycombs in IoH", types: ["Honeycombs", "IoH"]},
    {name: "6-Health BK", types: ["Honeycombs", "IoH"]},
    {name: "Bovina Jiggy", types: ["MT", "Jiggies"]},
    {name: "Purchase Blubberâ€™s Last Possession", types: ["JRL"]}
];

bingoList[2] = [
    {name: "All Warppads in GGM", types: ["GGM"]},
    {name: "All Notes in GGM", types: ["Notes", "Trebleclef", "GGM"]},
    {name: "Free Gobi", types: ["WW"]},
    {name: "All Warppads in CCL", types: ["CCL"]},
    {name: "All Honeycombs in GGM", types: ["Honeycombs", "GGM"]},
    {name: "Get Double Air", types: ["Moves", "IoH"]},
    {name: "Dilberta Jiggy", types: ["Jiggies", "MT", "GGM"]},
    {name: "Pillars Jiggy", types: ["MT", "Jiggies"]}
];

bingoList[3] = [
    {name: "Stub Biggafoots Toe", types: ["HFP"]},
    {name: "Oxygenate JRL Water", types: ["JRL"]},
    {name: "All Jinjos in MT", types: ["Jinjos", "MT"]},
    {name: "Relic Jiggy", types: ["Jiggies", "MT"]},
    {name: "4 Cheato Pages", types: ["Cheatos"]},
    {name: "4 Jiggies in MT", types: ["Jiggies", "MT"]},
    {name: "All Cheato Pages in MT", types: ["Cheatos", "MT"]}
];

bingoList[4] = [
    {name: "All Honeycombs in MT", types: ["Honeycombs", "MT"]},
    {name: "All Warppads in WW", types: ["WW"]},
    {name: "4 Trebleclefs", types: ["Trebleclef"]},
    {name: "30 Doubloons", types: ["JRL"]},
    {name: "Smugglers Cove Jiggy", types: ["Jiggies", "JRL"]},
    {name: "7-Health BK", types: ["Honeycombs", "IoH"]}
];

bingoList[5] = [
    {name: "All Notes in JRL", types: ["Notes", "JRL", "Trebleclef"]},
    {name: "All Warppads in JRL", types: ["JRL"]},
    {name: "All Honeycombs in WW", types: ["Honeycombs", "WW"]},
    {name: "All Notes in WW", types: ["Notes", "Trebleclef", "WW"]},
    {name: "All Warppads in MT", types: ["MT"]},
    {name: "All Honeycombs in HFP", types: ["Honeycombs", "HFP", "JRL"]},
    {name: "Learn Breegull Bash", types: ["Moves", "SoS", "IoH"]},
    {name: "5 Jiggies in MT", types: ["Jiggies", "MT"]}
];

bingoList[6] = [
    {name: "4 Jiggies in GGM", types: ["Jiggies", "GGM"]},
    {name: "All Honeycombs in JRL", types: ["Honeycombs", "JRL"]},
    {name: "All Cheato Pages in TDL", types: ["Cheatos", "TDL"]},
    {name: "Mingy Jongo Jiggy", types: ["Bosses", "CCL", "Jiggies"]},
    {name: "All Honeycombs in CCL", types: ["Honeycombs", "CCL"]},
    {name: "Targitzan Jiggy", types: ["Bosses", "Jiggies", "MT"]},
    {name: "6 Jiggies in MT", types: ["Jiggies", "MT"]}
];

bingoList[7] = [
    {name: "7 Glowbos", types: ["Glowbo"]},
    {name: "Mayan Kickball Jiggy", types: ["Jiggies", "MT"]},
    {name: "Chompasaurus Jiggy", types: ["Jiggies", "TDL"]},
    {name: "All Warppads in HFP", types: ["HFP"]},
    {name: "Volcano Jiggy", types: ["Jiggies", "HFP"]},
    {name: "All Notes in HFP", types: ["Notes", "Trebleclef", "HFP"]},
    {name: "5 Trebleclefs", types: ["Trebleclef"]},
    {name: "Ice Wall Jiggy", types: ["Jiggies", "HFP"]},
    {name: "All Honeycombs in TDL", types: ["Honeycombs", "TDL"]}
];

bingoList[8] = [
    {name: "Terry Jiggy", types: ["Bosses", "TDL", "Jiggies"]},
    {name: "All Notes in IoH", types: ["Notes", "Trebleclef", "IoH"]},
    {name: "All Notes in TDL", types: ["Notes", "Trebleclef", "TDL"]},
    {name: "Roar Cage Jiggy as T-Rex", types: ["Jiggies", "TDL"]},
    {name: "Merry Maggie Jiggy", types: ["Jiggies", "JRL"]},
    {name: "Mr. Patch Jiggy", types: ["Bosses", "Jiggies", "WW"]},
    {name: "Eyeball Plant Jiggy", types: ["Jiggies", "CCL"]},
    {name: "Mountain CP as T-Rex", types: ["Cheatos", "TDL"]},
    {name: "Rocknuts Jiggy", types: ["Jiggies", "TDL"]},
    {name: "All Cheato Pages in HFP", types: ["Cheatos", "HFP"]},
    {name: "6 Cheato Pages", types: ["Cheatos"]}
];

bingoList[9] = [
    {name: "All Cheato Pages in JRL", types: ["Cheatos", "JRL"]},
    {name: "All Jinjos in WW", types: ["Jinjos", "WW"]},
    {name: "Ice Train Jiggy", types: ["Jiggies", "HFP"]},
    {name: "All Jinjos in JRL", types: ["Jinjos", "JRL"]},
    {name: "Weldar Jiggy", types: ["GI", "Jiggies"]},
    {name: "Zubba's Minigame Jiggy", types: ["Jiggies", "CCL"]},
    {name: "Oogle Boogle Jiggy", types: ["Jiggies", "TDL"]},
    {name: "All Warppads in TDL", types: ["TDL"]},
    {name: "4 Train Switches", types: ["Train"]}
];

bingoList[10] = [
    {name: "Trash Can Jiggy", types: ["Jiggies", "CCL"]},
    {name: "4 Jiggies in CCL", types: ["Jiggies", "CCL"]},
    {name: "Jiggy & CP in Pot O' Gold", types: ["Jiggies", "Cheatos", "CCL"]},
    {name: "5 Jiggies in GGM", types: ["Jiggies", "GGM"]},
    {name: "Both Crazy Castle Jiggies", types: ["Jiggies", "WW"]},
    {name: "Kill George and Mildred", types: ["CCL", "HFP"]},
    {name: "Chris P. Bacon Jiggy", types: ["Jiggies", "JRL"]},
    {name: "Dippy Jiggy", types: ["Jiggies", "TDL", "CCL"]},
    {name: "All Jinjos in TDL", types: ["Jinjos", "TDL"]},
    {name: "7 Jiggies in MT", types: ["Jiggies", "MT"]}
];

bingoList[11] = [
    {name: "All Jinjos in CCL", types: ["Jinjos", "CCL"]},
    {name: "9 Glowbos", types: ["Glowbo"]},
    {name: "All Cheato Pages in GGM", types: ["Cheatos", "GGM"]},
    {name: "6 Trebleclefs", types: ["Trebleclef"]},
    {name: "Open all Elevator Doors", types: ["Doors", "GI"]},
    {name: "4 Jiggies in HFP", types: ["Jiggies", "HFP"]},
    {name: "Sub Game Jiggy", types: ["Jiggies", "JRL"]},
    {name: "Woo Fak Fak Jiggy", types: ["Bosses", "Jiggies", "JRL"]},
    {name: "Colosseum Kickball Jiggy", types: ["Jiggies", "HFP", "MT"]},
    {name: "Old King Coal Jiggy", types: ["Bosses", "Train", "jiggies", "GGM"]},
    {name: "8 Jiggies in MT", types: ["Jiggies", "MT"]}
];

bingoList[12] = [
    {name: "All Honeycombs in GI", types: ["Honeycombs", "GI"]},
    {name: "Cheese Wedge Jiggy", types: ["Jiggies", "CCL"]},
    {name: "Toxic Waste Jinjo from JRL", types: ["Jinjos", "JRL", "Route"]},
    {name: "All Jinjos in HFP", types: ["Jinjos", "HFP"]},
    {name: "Canary Mary Jiggy & CP in GGM", types: ["Jiggies", "Cheatos", "GGM"]},
    {name: "All Notes in CCL", types: ["Notes", "Trebleclef", "CCL"]},
    {name: "4 Jiggies in TDL", types: ["Jiggies", "TDL"]},
    {name: "Aliens Jiggy in JRL", types: ["Jiggies", "JRL"]},
    {name: "All Jinjos in GGM", types: ["Jinjos", "GGM"]},
    {name: "8-Health BK", types: ["Honeycombs", "IoH"]}
];

bingoList[13] = [
    {name: "Grow Both Beanstalks", types: ["CCL"]},
    {name: "Call Train to HFP Fire Side", types: ["Train", "HFP", "GGM"]},
    {name: "8 Cheato Pages", types: ["Cheatos"]},
    {name: "4 Jiggies in WW", types: ["Jiggies", "WW"]},
    {name: "5 Jiggies in CCL", types: ["Jiggies", "CCL"]},
    {name: "All Cheato Pages in GI", types: ["Cheatos", "GI", "Bosses"]},
    {name: "Crushing Shed Jiggy", types: ["Jiggies", "GGM"]}
];

bingoList[14] = [
    {name: "Dragon Brothers Jiggy", types: ["Bosses", "Jiggies", "HFP"]},
    {name: "All Warppads in GI", types: ["Warppads", "GI"]},
    {name: "Unscrew All 3 Platforms in GI", types: ["Doors", "GI"]},
    {name: "5 Jiggies in TDL", types: ["Jiggies", "TDL"]},
    {name: "Learn Claw Clamber Boots", types: ["Moves", "GI"]},
    {name: "5 Jiggies in HFP", types: ["Jiggies", "HFP"]},
    {name: "Defeat 3 Bosses (Except Klungos/Hag1)", types: ["Bosses"]},
    {name: "6 Jiggies in GGM", types: ["Jiggies", "GGM"]},
    {name: "All Jinjos in IoH & SM", types: ["Jinjos", "IoH", "JRL"]}
];

bingoList[15] = [
    {name: "11 Glowbos", types: ["Glowbo"]},
    {name: "7 Trebleclefs", types: ["Trebleclef"]},
    {name: "All Notes in GI", types: ["Notes", "Trebleclef", "GI"]},
    {name: "Tiptup Jiggy", types: ["Jiggies", "JRL", "TDL"]},
    {name: "Targitzan Jiggy w/o FPS", types: ["Jiggies", "MT"]},
    {name: "5 Jiggies in GI", types: ["Jiggies", "GI"]}
];

bingoList[16] = [
    {name: "Hatch all Eggs in CCL", types: ["CCL", "TDL"]},
    {name: "All Jinjos in GI", types: ["Jinjos", "GI"]},
    {name: "Open Superstash Deluxe Safe", types: ["Jiggies", "CCL"]},
    {name: "Learn Leg Spring", types: ["Moves", "GI"]},
    {name: "Call Train to GI", types: ["GI", "Train"]},
    {name: "Call Train to TDL", types: ["Train", "TDL"]},
    {name: "Star Spinner Jiggy", types: ["Jiggies", "WW"]}
];

bingoList[17] = [
    {name: "Mayan and Colosseum Kickball Jiggies", types: ["Jiggies", "HFP", "MT"]},
    {name: "10 Cheato Pages", types: ["Cheatos"]},
    {name: "4 Jiggies in JRL", types: ["Jiggies", "JRL"]},
    {name: "6 Jiggies in TDL", types: ["Jiggies", "TDL"]},
    {name: "Clinkers Cavern Jiggy", types: ["Jiggies", "GI"]},
    {name: "Quality Control Jiggy", types: ["Jiggies", "GI"]},
    {name: "7 Jiggies in GGM", types: ["Jiggies", "GGM"]}
];

bingoList[18] = [
    {name: "6 Jiggies in CCL", types: ["Jiggies", "CCL"]},
    {name: "Learn Snooze Pack", types: ["Moves", "GI"]},
    {name: "Woo Fak Fak Jiggy as BK", types: ["Bosses", "Jiggies", "JRL"]},
    {name: "Oil Drill Jiggy", types: ["Jiggies", "HFP"]},
    {name: "Boggyâ€™s Kids Jiggy", types: ["Jiggies", "WW", "TDL"]},
    {name: "All Train Switches", types: ["Train"]},
    {name: "Hatch Heggyâ€™s 3 Eggs", types: ["SoS"]}
];

bingoList[19] = [
    {name: "Learn Shack Pack", types: ["Moves", "HFP"]},
    {name: "Twinkly Packaging Jiggy", types: ["Jiggies", "GI"]},
    {name: "5 Jiggies in WW", types: ["Jiggies", "WW"]},
    {name: "Defeat Klungo 3", types: ["Bosses", "IoH", "CK"]},
    {name: "All Cheato Pages in WW", types: ["Cheatos", "WW"]},
    {name: "13 Glowbos", types: ["Glowbo"]}
];

bingoList[20] = [
    {name: "7 Jiggies in CCL", types: ["Jiggies", "CCL"]},
    {name: "6 Jiggies in GI", types: ["Jiggies", "GI"]},
    {name: "Dragon Kazooie", types: ["SoS", "IoH", "GGM", "MT"]},
    {name: "Defeat 4 Bosses (Except Klungos/Hag1)", types: ["Bosses"]},
    {name: "Learn Glide", types: ["Moves", "HFP"]},
    {name: "Defeat Hag 1", types: ["CK"]},
    {name: "Worker Jiggy in GI", types: ["Jiggies", "GI"]},
    {name: "8 Jiggies in GGM", types: ["Jiggies", "GGM"]}
];

bingoList[21] = [
    {name: "12 Cheato Pages", types: ["Cheatos"]},
    {name: "8 Trebleclefs", types: ["Trebleclef"]},
    {name: "Jelly Castle Jiggy as Banjo", types: ["Jiggies", "CCL", "HFP"]},
    {name: "Canary Mary Jiggy & CP in CCL", types: ["GGM", "CCL", "Jiggies", "Cheatos"]},
    {name: "6 Jiggies in HFP", types: ["Jiggies", "HFP"]},
    {name: "Dodgem Dome Jiggy", types: ["Jiggies", "WW"]},
    {name: "Sabreman Jiggy", types: ["Jiggies", "HFP", "WW", "TDL"]}
];

bingoList[22] = [
    {name: "Ride Train to Icy Side", types: ["HFP", "Train"]},
    {name: "Terryâ€™s Kids Jiggy", types: ["Jiggies", "TDL", "Bosses"]},
    {name: "6 Jiggies in WW", types: ["Jiggies", "WW"]},
    {name: "8 Jiggies in CCL", types: ["Jiggies", "CCL"]},
    {name: "5 Jiggies in JRL", types: ["Jiggies", "JRL"]},
    {name: "Heal The Sick Styracosaurus", types: ["TDL", "Train", "Bosses"]}
];

bingoList[23] = [
    {name: "7 Jiggies in GI", types: ["Jiggies", "GI"]},
    {name: "All Cheato Pages in CCL", types: ["Cheatos", "CCL"]},
    {name: "9-Health BK", types: ["Honeycombs", "IoH"]},
    {name: "Hatch 7 Eggs", types: ["TDL", "JRL", "Bosses", "SoS", "CCL"]}
];

bingoList[24] = [
    {name: "6 Jiggies in JRL", types: ["Jiggies", "JRL"]},
    {name: "Open all 4 Battery Doors in GI", types: ["Doors", "GI", "WW"]},
    {name: "7 Jiggies in TDL", types: ["Jiggies", "TDL"]},
    {name: "7 Jiggies in WW", types: ["Jiggies", "WW"]}
];

bingoList[25] = [
    {name: "Learn Sack Pack", types: ["Moves", "HFP", "CCL"]},
    {name: "Alienâ€™s Kids Jiggy", types: ["HFP", "TDL"]},
    {name: "7 Jiggies in JRL", types: ["Jiggies", "JRL"]},
    {name: "7 Jiggies in HFP", types: ["Jiggies", "HFP"]},
    {name: "Defeat 5 Bosses (Except Klungos/Hag1)", types: ["Bosses"]},
    {name: "9 Trebleclefs", types: ["Trebleclef"]}
];
