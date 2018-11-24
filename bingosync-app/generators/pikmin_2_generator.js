bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

//Version 1.3.2 of Pikmin 2 Bingo

//Changes since 1.3.1:
//Added the PAL name for Thirst Activator since I forgot to do it before
//Changed "Collect 8 Dweevils (of any kind)" to "Kill 8 Dweevils (of any kind)" to avoid confusion about whether the cave must be exited via a geyser -- same for the Gatling Groinks goal
//Changed "Collect all 5 Wogpoles in PP" to "Kill all 5 Wogpoles in PP" to make the goal less stupid
//Replaced the word "Kill" with the word "Defeat" in every goal that uses it (except ones where it wouldn't make sense)

//Previous changes can be found here: https://pastebin.com/Z2FYvkmB


var bingoList = [];
bingoList[1] = [
  { name: "Discover Yellow Pikmin", types: ["1"] },
  { name: "Defeat all 10 Mitites on HoB4", types: ["6"] },
  { name: "Toxic Toadstool (WFG4)", types: ["10"] },
  { name: "5 above ground treasures", types: ["11"] },
];
bingoList[2] = [
  { name: "Collect a 1-Pellet of each color", types: ["2"] },
  { name: "Collect an Empress Bulblax", types: ["7"] },
  { name: "Prototype Detector (HoB5)", types: ["10"] },
  { name: "Get a Pikmin Extinction inside a cave", types: ["12"] },
];
bingoList[3] = [
  { name: "Collect a 5-Pellet of each color", types: ["2"] },
  { name: "Collect all 3 Wogpoles in AW", types: ["7"] },
  { name: "Pilgrim Bulb (AW)", types: ["10"] },
  { name: "Destroy a Burgeoning Spiderwort mold", types: ["13"] },
];
bingoList[4] = [
  { name: "Make a Crimson Candypop Bud wilt", types: ["3"] },
  { name: "Collect 2 Burrowing Snagrets", types: ["7"] },
  { name: "Impediment Scourge (PP)", types: ["10"] },
  { name: "Kill Louie twice", types: ["12"] },
];
bingoList[5] = [
  { name: "60 Yellows", types: ["1"] },
  { name: "Defeat all 3 Creeping Chrysanthemums in AW", types: ["6"] },
  { name: "Aquatic Mine (PP)", types: ["10"] },
  { name: "Get a non-Red Pikmin Extinction", types: ["12"] },
];
bingoList[6] = [
  { name: "8 Spicy Sprays", types: ["4"] },
  { name: "Defeat the Burrowing Snagret in VoR", types: ["6"] },
  { name: "Complete HoB", types: ["8"] },
  { name: "Kill 5 Bulbmin children", types: ["12"] },
];
bingoList[7] = [
  { name: "50 Reds, 50 Yellows, and 50 Blues", types: ["1"] },
  { name: "Defeat 8 Water Dumples", types: ["6"] },
  { name: "Enter all 4 caves in AW", types: ["9"] },
  { name: "Trigger all 3 hazard cutscenes (Poison, Fire, and Water)", types: ["12"] },
];
bingoList[8] = [
  { name: "100 Blues", types: ["1"] },
  { name: "Defeat both Hermit Crawmads in PP", types: ["6"] },
  { name: "Fossilized Ursidae (VoR)", types: ["10"] },
  { name: "Activate every dormant Bomb Rock on SCx7", types: ["13"] },
];
bingoList[9] = [
  { name: "200 Total Pikmin", types: ["1"] },
  { name: "Defeat 8 Blowhogs (of any kind)", types: ["6"] },
  { name: "The Key (CoS5)", types: ["10"] },
  { name: "Have a Leaf Pikmin in the ground mature into a Flower Pikmin", types: ["13"] },
];
bingoList[10] = [
  { name: "100 Pikmin of a single type", types: ["1"] },
  { name: "Defeat all enemies in HoB and WFG", types: ["6"] },
  { name: "Justice Alloy (SH7)", types: ["10"] },
  { name: "5 food treasures", types: ["11"] },
];
bingoList[11] = [
  { name: "45 Purples", types: ["1"] },
  { name: "Clear GK4", types: ["8"] },
  { name: "Enter SmC", types: ["9"] },
  { name: "4 Explorer's Kit treasures", types: ["11"] },
];
bingoList[12] = [
  { name: "100 Yellows", types: ["1"] },
  { name: "Defeat 2 Gatling Groinks", types: ["6"] },
  { name: "Enter all 3 caves in VoR (EC must be entered again)", types: ["9"] },
  { name: "Crystal Clover (BK1) and Crystal King (BK4)", types: ["11"] },
];
bingoList[13] = [
  { name: "150 Reds", types: ["1"] },
  { name: "Clear FC3", types: ["8"] },
  { name: "Air Brake (AW)", types: ["10"] },
  { name: "Leviathan Feather (SH1) and Science Project (SH6)", types: ["11"] },
];
bingoList[14] = [
  { name: "45 Whites", types: ["1"] },
  { name: "Clear SCx3", types: ["8"] },
  { name: "Thirst Activator [US] / Perfect Container [PAL] (SCx7)", types: ["10"] },
  { name: "Olimarnite Shell (BK3) and Colossal Fossil (BK6)", types: ["11"] },
];
bingoList[15] = [
  { name: "Drain the main lake in PP", types: ["5"] },
  { name: "Clear SCx6", types: ["8"] },
  { name: "Stellar Orb (SCx9)", types: ["10"] },
  { name: "Superstick Textile (WFG3) and Exhausted Superstick (SCx1)", types: ["11"] },
];
bingoList[16] = [
  { name: "Make a Golden Candypop Bud wilt", types: ["3"] },
  { name: "Clear FC6", types: ["8"] },
  { name: "Repugnant Appendage (FC8)", types: ["10"] },
  { name: "7 treasures worth 160 Pokos or more", types: ["11"] },
];
bingoList[17] = [
  { name: "Make 5 Candypop Buds in SCx wilt", types: ["3"] },
  { name: "Clear SH6", types: ["8"] },
  { name: "Unspeakable Wonder (VoR)", types: ["10"] },
  { name: "Petrified Heart (WFG2), Tear Stone (BK2), and Regal Diamond (CoS5)", types: ["11"] },
];
bingoList[18] = [
  { name: "Build all 3 bridges in PP", types: ["5"] },
  { name: "Defeat 2 Fiery Bulblaxes", types: ["6"] },
  { name: "Temporal Mechanism (VoR)", types: ["10"] },
  { name: "Crystallized Telekinesis, Telepathy, and Clairvoyance (SH1, 4, and 5)", types: ["11"] },
];
bingoList[19] = [
  { name: "Make 4 Candypop Buds in FC wilt", types: ["3"] },
  { name: "Defeat 5 Breadbugs", types: ["6"] },
  { name: "Onion Replica (PP)", types: ["10"] },
  { name: "6 treasures worth 25 Pokos or fewer", types: ["11"] },
];
bingoList[20] = [
  { name: "Turn 15 Bulbmin into other types", types: ["3"] },
  { name: "Defeat 8 Dweevils (of any kind)", types: ["6"] },
  { name: "Optical Illustration [US] / Abstract Masterpiece [PAL] (PP)", types: ["10"] },
  { name: "12 treasures worth exactly 100 Pokos", types: ["11"] },
];
bingoList[21] = [
  { name: "Build all 3 bridges in AW", types: ["5"] },
  { name: "Collect all 3 Cannon Beetles in VoR", types: ["7"] },
  { name: "Enter all 4 caves in PP", types: ["9"] },
  { name: "Network Mainbrain, Vacuum Processor, and Indomitable CPU (SCx2, 6, and 7)", types: ["11"] },
];
bingoList[22] = [
  { name: "5 Spicy Sprays and 5 Bitter Sprays", types: ["4"] },
  { name: "Defeat all 5 Wogpoles in PP", types: ["6"] },
  { name: "Professional Noisemaker (SmC5)", types: ["10"] },
  { name: "6 fully buried treasures", types: ["11"] },
];
bingoList[23] = [
  { name: "Destroy the poison gate in VoR", types: ["5"] },
  { name: "Clear SmC3", types: ["8"] },
  { name: "Mirrored Stage (SR3)", types: ["10"] },
  { name: "Memorial Shell (CoS3) and Scrumptious Shell (SR3)", types: ["11"] },
];
bingoList[24] = [
  { name: "8 Bitter Sprays", types: ["4"] },
  { name: "Clear SmC4", types: ["8"] },
  { name: "Endless Repository [US] / Permanent Container [PAL] (SR5)", types: ["10"] },
  { name: "Paradoxical Enigma (CoS2) and Rubber Ugly (SR6)", types: ["11"] },
];
bingoList[25] = [
  { name: "Destroy all 6 gas pipes in AW", types: ["5"] },
  { name: "Clear SR6", types: ["8"] },
  { name: "Amplified Amplifier (SR7)", types: ["10"] },
  { name: "Durable Energy Cell (SR2) and Proton AA (SmC4)", types: ["11"] },
];
