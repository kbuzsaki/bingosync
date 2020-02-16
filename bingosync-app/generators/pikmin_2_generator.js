bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");
 
//Version 1.4 of Pikmin 2 Bingo
 
//Changes since 1.3.2
//Added 15 new goals (marked as "new" in comments in the list)
//Removed: "Defeat all enemies in HoB and WFG", "Defeat all 5 Wogpoles in PP", "Get a Pikmin Extinction inside a cave", "Kill 5 Bulbmin (Children, not parents)", and "Kill Louie twice"
//Moved a bunch of goals around to make all Shower Room goals and only Shower Room goals in difficulties 24 and 25, guaranteeing exactly 2 Shower Room goals on every card
//Moved "12 treasures worth exactly 100 Pokos" from 20 to 23
//Moved "Defeat 5 Breadbugs" from 19 to 21
//Moved "Clear SH6" from 17 to 21
//Moved "Network Mainbrain, Vacuum Processor, and Indomitable CPU (SCx2, 6, and 7)" from 21 to 18
//Moved "Build all 3 bridges in AW" from 21 to 17
//Moved "Leviathan Feather (SH1) and Science Project (SH6)" from 13 to 16
//Moved "Destroy the poison gate in VoR" from 23 to 15
//Moved "Defeat 2 Fiery Bulblaxes" from 18 to 13
//Moved "Make a Golden Candypop Bud wilt" from 16 to 12
//Moved "Make a Crimson Candypop Bud wilt" from 4 to 11
//Moved "Superstick Textile (WFG3) and Exhausted Superstick (SCx1)" from 15 to 8
 
//Previous changes can be found here: https://pastebin.com/Z2FYvkmB
 
 
var bingoList = [];
bingoList[1] = [
  { name: "Discover Yellow Pikmin", types: ["pikmin"] },
  { name: "Defeat all 10 Mitites on HoB4", types: ["enemy"] },
  { name: "Toxic Toadstool (WFG4)", types: ["treasure"] },
  { name: "5 above ground treasures", types: ["multi"] },
];
bingoList[2] = [
  { name: "Collect a 1-Pellet of each color", types: ["pellet"] },
  { name: "Collect an Empress Bulblax", types: ["collect"] },
  { name: "Prototype Detector (HoB5)", types: ["treasure"] },
];
bingoList[3] = [
  { name: "Collect a 5-Pellet of each color", types: ["pellet"] },
  { name: "Collect all 3 Wogpoles in AW", types: ["collect"] },
  { name: "Pilgrim Bulb (AW)", types: ["treasure"] },
  { name: "Destroy a Burgeoning Spiderwort mold", types: ["misc"] },
];
bingoList[4] = [
  { name: "Collect 2 Burrowing Snagrets", types: ["collect"] },
  { name: "Impediment Scourge (PP)", types: ["treasure"] },
  { name: "Sunseed Berry (AW) and Combustion Berry (SH2)", types: ["multi"] }, //new
];
bingoList[5] = [
  { name: "60 Yellows", types: ["pikmin"] },
  { name: "Defeat all 3 Creeping Chrysanthemums in AW", types: ["enemy"] },
  { name: "Aquatic Mine (PP)", types: ["treasure"] },
  { name: "Get a non-Red Pikmin Extinction", types: ["misc"] },
];
bingoList[6] = [
  { name: "8 Spicy Sprays", types: ["sprays"] },
  { name: "Defeat the Burrowing Snagret in VoR", types: ["enemy"] },
  { name: "Complete HoB", types: ["sublevel"] },
];
bingoList[7] = [
  { name: "50 Reds, 50 Yellows, and 50 Blues", types: ["pikmin"] },
  { name: "Defeat 8 Water Dumples", types: ["enemy"] },
  { name: "Enter all 4 caves in AW", types: ["enter"] },
  { name: "Trigger all 3 hazard cutscenes (Poison, Fire, and Water)", types: ["misc"] },
];
bingoList[8] = [
  { name: "100 Blues", types: ["pikmin"] },
  { name: "Defeat both Hermit Crawmads in PP", types: ["enemy"] },
  { name: "Fossilized Ursidae (VoR)", types: ["treasure"] },
  { name: "Activate every dormant Bomb Rock on SCx7", types: ["misc"] },
  { name: "Superstick Textile (WFG3) and Exhausted Superstick (SCx1)", types: ["multi"] },
];
bingoList[9] = [
  { name: "200 Total Pikmin", types: ["pikmin"] },
  { name: "Defeat 8 Blowhogs (of any kind)", types: ["enemy"] },
  { name: "The Key (CoS5)", types: ["treasure"] },
  { name: "Have a Leaf Pikmin in the ground mature into a Flower Pikmin", types: ["misc"] },
  { name: "Forged Courage (BK7)", types: ["treasure"] }, //new
];
bingoList[10] = [
  { name: "100 Pikmin of a single type", types: ["pikmin"] },
  { name: "Justice Alloy (SH7)", types: ["treasure"] },
  { name: "5 food treasures", types: ["multi"] },
];
bingoList[11] = [
  { name: "45 Purples", types: ["pikmin"] },
  { name: "Clear GK4", types: ["sublevel"] },
  { name: "Enter SmC", types: ["enter"] },
  { name: "4 Explorer's Kit treasures", types: ["multi"] },
  { name: "Make a Crimson Candypop Bud wilt", types: ["cpb"] },
  { name: "Dream Material (GK6)", types: ["treasure"] }, //new
];
bingoList[12] = [
  { name: "100 Yellows", types: ["pikmin"] },
  { name: "Defeat 2 Gatling Groinks", types: ["enemy"] },
  { name: "Enter all 3 caves in VoR", types: ["enter"] },
  { name: "Crystal Clover (BK1) and Crystal King (BK4)", types: ["multi"] },
  { name: "Make a Golden Candypop Bud wilt", types: ["cpb"] },
  { name: "Leave 10 Pikmin buried underground", types: ["misc"] }, //new
];
bingoList[13] = [
  { name: "150 Reds", types: ["pikmin"] },
  { name: "Clear FC3", types: ["sublevel"] },
  { name: "Air Brake (AW)", types: ["treasure"] },
  { name: "Defeat 2 Fiery Bulblaxes", types: ["enemy"] },
  { name: "Defeat all enemies on CoS4", types: ["enemy"] }, //new
];
bingoList[14] = [
  { name: "45 Whites", types: ["pikmin"] },
  { name: "Clear SCx3", types: ["sublevel"] },
  { name: "Thirst Activator [US] / Perfect Container [PAL] (SCx7)", types: ["treasure"] },
  { name: "Olimarnite Shell (BK3) and Colossal Fossil (BK6)", types: ["multi"] },
  { name: "Danger Chime (FC3) and Spouse Alert (FC7)", types: ["multi"] }, //new
];
bingoList[15] = [
  { name: "Drain the main lake in PP", types: ["obstacle"] },
  { name: "Clear SCx6", types: ["sublevel"] },
  { name: "Stellar Orb (SCx9)", types: ["treasure"] },
  { name: "Destroy the poison gate in VoR", types: ["obstacle"] },
  { name: "Clear SCx5", types: ["sublevel"] }, //new
];
bingoList[16] = [
  { name: "Clear FC6", types: ["sublevel"] },
  { name: "Repugnant Appendage (FC8)", types: ["treasure"] },
  { name: "7 treasures worth 160 Pokos or more", types: ["multi"] },
  { name: "Leviathan Feather (SH1) and Science Project (SH6)", types: ["multi"] },
  { name: "Defeat all enemies on SH4", types: ["enemy"] }, //new
];
bingoList[17] = [
  { name: "Make 5 Candypop Buds in SCx wilt", types: ["cpb"] },
  { name: "Unspeakable Wonder (VoR)", types: ["treasure"] },
  { name: "Petrified Heart (WFG2), Tear Stone (BK2), and Regal Diamond (CoS5)", types: ["multi"] },
  { name: "Build all 3 bridges in AW", types: ["obstacle"] },
];
bingoList[18] = [
  { name: "Build all 3 bridges in PP", types: ["obstacle"] },
  { name: "Temporal Mechanism (VoR)", types: ["treasure"] },
  { name: "Crystallized Telekinesis, Telepathy, and Clairvoyance (SH1, 4, and 5)", types: ["multi"] },
  { name: "Network Mainbrain, Vacuum Processor, and Indomitable CPU (SCx2, 6, and 7)", types: ["multi"] },
  { name: "Defeat all enemies on SCx6", types: ["enemy"] }, //new
];
bingoList[19] = [
  { name: "Make 4 Candypop Buds in FC wilt", types: ["cpb"] },
  { name: "Onion Replica (PP)", types: ["treasure"] },
  { name: "6 treasures worth 25 Pokos or fewer", types: ["multi"] },
  { name: "Defeat all enemies on FC4", types: ["enemy"] }, //new
];
bingoList[20] = [
  { name: "Turn 15 Bulbmin into other types", types: ["cpb"] },
  { name: "Defeat 8 Dweevils (of any kind)", types: ["enemy"] },
  { name: "Optical Illustration [US] / Abstract Masterpiece [PAL] (PP)", types: ["treasure"] },
  { name: "Defeat 8 Cannon Beetles (of any kind)", types: ["enemy"] }, //new
  { name: "Collect a 10-Pellet of each color", types: ["pellet"] }, //new
];
bingoList[21] = [
  { name: "Collect all 3 Cannon Beetles in VoR", types: ["collect"] },
  { name: "Clear SH6", types: ["sublevel"] },
  { name: "Defeat 5 Breadbugs", types: ["enemy"] },
];
bingoList[22] = [
  { name: "5 Spicy Sprays and 5 Bitter Sprays", types: ["sprays"] },
  { name: "Professional Noisemaker (SmC5)", types: ["treasure"] },
  { name: "6 fully buried treasures", types: ["multi"] },
  { name: "King of Sweets (CoS4), Diet Doomer (SmC1), and Pale Passion (SmC4)", types: ["multi"] }, //new
];
bingoList[23] = [
  { name: "Clear SmC3", types: ["sublevel"] },
  { name: "12 treasures worth exactly 100 Pokos", types: ["multi"] },
  { name: "Destroy all 6 gas pipes in AW", types: ["obstacle"] },
  { name: "8 Bitter Sprays", types: ["sprays"] },
  { name: "Clear SmC4", types: ["sublevel"] },
];
bingoList[24] = [
  { name: "Enter all 4 caves in PP", types: ["enter"] },
  { name: "Memorial Shell (CoS3) and Scrumptious Shell (SR3)", types: ["multi"] },
  { name: "Durable Energy Cell (SR2) and Proton AA (SmC4)", types: ["multi"] },
  { name: "Mirrored Stage (SR3)", types: ["treasure"] },
  { name: "Clear SR3", types: ["sublevel"] }, //new
];
bingoList[25] = [
  { name: "Clear SR6", types: ["sublevel"] },
  { name: "Amplified Amplifier (SR7)", types: ["treasure"] },
  { name: "Paradoxical Enigma (CoS2) and Rubber Ugly (SR6)", types: ["multi"] },
  { name: "Endless Repository [US] / Permanent Container [PAL] (SR5)", types: ["treasure"] },
  { name: "Clear SR5", types: ["sublevel"] }, //new
];
