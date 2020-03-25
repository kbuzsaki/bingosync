bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

//Version 1.0 of Pikmin 2 All Areas Unlocked Bingo (AAU Bingo)


var bingoList = [];
bingoList[1] = [
  { name: "Discover Yellow Pikmin", types: ["pikmin"] },
  { name: "Defeat 10 Mitites", types: ["enemy"] },
  { name: "Drought Ender (WFG2)", types: ["treasure"] },
  { name: "5 above ground treasures", types: ["multiArea"] },
  { name: "Pilgrim Bulb (AW)", types: ["treasure"] },
  { name: "Collect a 1-Pellet of each color", types: ["pellet"] },
];
bingoList[2] = [
  { name: "Leave behind 20 Pikmin at sunset", types: ["harm"] },
  { name: "Throw 10 Pikmin into the abyss", types: ["harm"] },
  { name: "Luck Wafer (HoB4) and Chance Totem (AW)", types: ["multiCave"] },
  { name: "Prototype Detector (HoB5)", types: ["treasure","ek","sublevelClear","boss"] },
  { name: "Destroy a Burgeoning Spiderwort mold", types: [] },
  { name: "Discover Spicy Sprays", types: ["sprays"] },
  { name: "Impediment Scourge (PP)", types: ["treasure"] },
];
bingoList[3] = [
  { name: "Collect a 5-Pellet of each color", types: ["pellet"] },
  { name: "Defeat all 3 Wogpoles in AW", types: ["enemy"] },
  { name: "Electrocute 30 Pikmin", types: ["harm"] },
  { name: "Lose 30 Pikmin in a single cave", types: ["harm"] },
  { name: "8 above ground treasures", types: ["multiArea"] },
  { name: "Discover Bitter Sprays", types: ["sprays"] },
  { name: "Aquatic Mine (PP)", types: ["treasure"] },
];
bingoList[4] = [
  { name: "Defeat the Burrowing Snagret in VoR", types: ["enemy","boss"] },
  { name: "Drown 30 Pikmin", types: ["harm"] },
  { name: "Defeat 5 enemies by poisoning them", types: ["enemy","harm"] },
  { name: "4 Explorer's Kit treasures", types: ["multiArea","ek","boss"] },
  { name: "Get a non-Red Pikmin Extinction", types: ["harm"] },
];
bingoList[5] = [
  { name: "60 Yellows", types: ["pikmin"] },
  { name: "Defeat all 3 Creeping Chrysanthemums in AW", types: ["enemy"] },
  { name: "Lose 20 Pikmin to poison", types: ["harm"] },
  { name: "Complete HoB", types: ["sublevelClear","multiSublevel","boss"] },
  { name: "2 treasures in 3 caves", types: ["XinY"] },
];
bingoList[6] = [
  { name: "8 Spicy Sprays", types: ["sprays"] },
  { name: "Sunseed Berry (AW) and Combustion Berry (SH2)", types: ["multiCave"] },
  { name: "Lose 20 Pikmin to fire", types: ["harm"] },
  { name: "Lose 20 Pikmin to explosions", types: ["harm"] },
  { name: "Trigger all 3 hazard cutscenes (Poison, Fire, and Water)", types: [] },
];
bingoList[7] = [
  { name: "50 Reds, 50 Yellows, and 50 Blues", types: ["pikmin"] },
  { name: "Defeat 8 Water Dumples", types: ["enemy"] },
  { name: "Enter all 4 caves in AW", types: ["enter"] },
  { name: "Defeat 3 Burrowing Snagrets", types: ["enemy","boss"] },
  { name: "4 treasures in 3 caves", types: ["XinY"] },
  { name: "Crystal Clover (BK1) and Eternal Emerald Eye (BK6)", types: ["multiSublevel"] },
];
bingoList[8] = [
  { name: "Defeat both Hermit Crawmads in PP", types: ["enemy"] },
  { name: "Enter SmC with at least 30 Pikmin", types: ["enter"] },
  { name: "Forged Courage (BK7)", types: ["treasure","ek","boss"] },
  { name: "Defeat a Red, Orange, and Hairy Bulborb, and a Spotty Bulbear", types: ["enemy"] },
  { name: "The Key (CoS5)", types: ["treasure","ek","boss"] },
  { name: "Olimarnite Shell (BK3) and Colossal Fossil (BK6)", types: ["multiSublevel"] },
  { name: "100 Pikmin of a single type", types: ["pikmin"] },
];
bingoList[9] = [
  { name: "200 Total Pikmin", types: ["pikmin"] },
  { name: "Defeat 8 Blowhogs (of any kind)", types: ["enemy"] },
  { name: "Have a Leaf Pikmin in the ground mature into a Flower Pikmin", types: [] },
  { name: "Superstick Textile (WFG3) and Exhausted Superstick (SCx1)", types: ["multiArea"] },
  { name: "Enter all 3 caves in VoR", types: ["enter"] },
  { name: "6 treasures in 2 caves", types: ["XinY"] },
  { name: "Defeat all enemies on CoS4", types: ["enemy","sublevelClear"] },
  { name: "5 food treasures", types: ["multiArea"] },
];
bingoList[10] = [
  { name: "Justice Alloy (SH7)", types: ["treasure","ek","sublevelClear","boss"] },
  { name: "100 Blues", types: ["pikmin"] },
  { name: "Defeat 2 Fiery Bulblaxes", types: ["enemy"] },
  { name: "Defeat all 3 Creeping Chrysanthemums in WW", types: ["enemy"] },
  { name: "Crush 10 Pikmin", types: ["harm"] },
  { name: "Crystallized Telekinesis, Telepathy, and Clairvoyance (SH1, 4, and 5)", types: ["multiSublevel"] },
  { name: "Clear GK4", types: ["sublevelClear"] },
  { name: "Dream Material (GK6)", types: ["treasure","ek","boss"] },
  { name: "2 treasures in 5 caves", types: ["XinY"] },
];
bingoList[11] = [
  { name: "45 Purples", types: ["pikmin"] },
  { name: "Make a Crimson Candypop Bud wilt", types: ["cpb"] },
  { name: "Activate every dormant Bomb Rock on SCx7", types: [""] },
  { name: "Fossilized Ursidae (VoR)", types: ["treasure"] },
  { name: "Defeat 2 Gatling Groinks", types: ["enemy"] },
  { name: "Defeat 5 Wollywogs (of any kind)", types: ["enemy"] },
  { name: "Defeat all enemies on SH4", types: ["enemy","sublevelClear"] },
  { name: "Leviathan Feather (SH1) and Science Project (SH6)", types: ["multiSublevel"] },
];
bingoList[12] = [
  { name: "100 Yellows", types: ["pikmin"] },
  { name: "Make a Golden Candypop Bud wilt", types: ["cpb"] },
  { name: "Leave 10 Pikmin buried underground in a cave", types: ["harm"] },
  { name: "Defeat an Emperor and Empress Bulblax", types: ["enemy","boss","ek"] },
  { name: "Clear FC3", types: ["sublevelClear"] },
  { name: "Thirst Activator [US] / Perfect Container [PAL] (SCx7)", types: ["treasure"] },
  { name: "4 treasures in 5 caves", types: ["XinY"] },
  { name: "8 treasures in 2 caves", types: ["XinY"] },
];
bingoList[13] = [
  { name: "Air Brake (AW)", types: ["treasure"] },
  { name: "7 treasures worth 160 Pokos or more", types: ["multiArea"] },
  { name: "150 Pikmin of a single type", types: ["pikmin"] },
  { name: "8 Bitter Sprays", types: ["sprays"] },
  { name: "Clear SCx3", types: ["sublevelClear"] },
  { name: "10 treasures in 1 cave", types: ["XinY"] },
];
bingoList[14] = [
  { name: "45 Whites", types: ["pikmin"] },
  { name: "150 Reds", types: ["pikmin"] },
  { name: "Petrified Heart (WFG2), Tear Stone (BK2), and Regal Diamond (CoS5)", types: ["multiArea","sublevelClear"] },
  { name: "Essential Furnishing (FC1) and Innocence Lost (FC4)", types: ["multiSublevel"] },
  { name: "Drain the main lake in PP", types: ["obstacle"] },
  { name: "Clear SCx5", types: ["sublevelClear"] },
  { name: "Glee Spinner (DD3)", types: ["treasure","sublevelClear"] },
  { name: "6 treasures in 4 caves", types: ["XinY"] },
];
bingoList[15] = [
  { name: "Clear SCx6", types: ["sublevelClear"] },
  { name: "Defeat all 3 Cannon Beetles in VoR", types: ["enemy"] },
  { name: "Enter all 4 caves in PP", types: ["enter"] },
  { name: "Network Mainbrain, Vacuum Processor, and Indomitable CPU (SCx2, 6, and 7)", types: ["multiSublevel"] },
  { name: "5 Spicy Sprays and 5 Bitter Sprays", types: ["sprays"] },
  { name: "Clear FC6", types: ["sublevelClear"] },
  { name: "Clear SR3", types: ["sublevelClear"] },
  { name: "Temporal Mechanism (VoR)", types: ["treasure"] },
];
bingoList[16] = [
  { name: "Danger Chime (FC3) and Spouse Alert (FC7)", types: ["multiSublevel"] },
  { name: "Destroy the poison gate in VoR", types: ["obstacle"] },
  { name: "Stellar Orb (SCx9)", types: ["ek","treasure","boss","sublevelClear"] },
  { name: "Defeat 7 Cannon Beetles (of any kind)", types: ["enemy"] },
  { name: "Enter HoH without destroying the electric gate", types: ["enter"] },
  { name: "Fruit Guard [US] / Empty Space Container [PAL] (CoC8)", types: ["treasure","sublevelClear"] },
  { name: "Onion Replica (PP)", types: ["treasure"] },
  { name: "8 treasures in 3 caves", types: ["XinY"] },
  { name: "Mirrored Stage (SR3)", types: ["treasure"] },
];
bingoList[17] = [
  { name: "Make 5 Candypop Buds in SCx wilt", types: ["cpb"] },
  { name: "Defeat 4 Jellyfloats (of any kind)", types: ["enemy"] },
  { name: "Defeat 8 Dweevils (of any kind)", types: ["enemy"] },
  { name: "Enter all 3 caves in WW", types: ["enter"] },
  { name: "King of Sweets (CoS4), Diet Doomer (SmC1), and Pale Passion (SmC4)", types: ["multiCave"] },
  { name: "300 Total Pikmin", types: ["pikmin"] },
  { name: "Clear SR6", types: ["sublevelClear"] },
  { name: "Optical Illustration [US] / Abstract Masterpiece [PAL] (PP)", types: ["treasure"] },
  { name: "Endless Repository [US] / Permanent Container [PAL] (SR5)", types: ["treasure"] },
];
bingoList[18] = [
  { name: "Defeat all enemies on SCx6", types: ["enemy","sublevelClear"] },
  { name: "Defeat 5 Breadbugs", types: ["enemy"] },
  { name: "Defeat 2 Emperor Bulblaxes", types: ["enemy","boss"] },
  { name: "Defeat all enemies on FC4", types: ["enemy","sublevelClear"] },
  { name: "6 treasures worth 25 Pokos or fewer", types: ["multiArea"] },
  { name: "Armored Nut (WW) and Corpulent Nut (HoH1)", types: ["multiCave"] },
  { name: "Collect a 10-Pellet of each color", types: ["pellet"] },
  { name: "Clear SH6", types: ["sublevelClear"] },
  { name: "Clear SR5", types: ["sublevelClear"] },
  { name: "Nutrient Silo [US] / Stringent Container [PAL] (HoH6)", types: ["treasure","sublevelClear"] },
];
bingoList[19] = [
  { name: "Make 4 Candypop Buds in FC wilt", types: ["cpb"] },
  { name: "Repugnant Appendage (FC8)", types: ["treasure","ek","sublevelClear","boss"] },
  { name: "Build all 3 bridges in AW", types: ["obstacle"] },
  { name: "Build all 3 bridges in PP", types: ["obstacle"] },
  { name: "Defeat 5 unique bosses", types: ["enemy","ek","boss"] },
  { name: "Defeat all enemies on HoH9", types: ["enemy","sublevelClear"] },
  { name: "6 fully buried treasures", types: ["multiArea"] },
  { name: "3 Gyro Block treasures", types: ["multiSublevel","boss"] },
  { name: "Clear SmC3", types: ["sublevelClear"] },
  { name: "Dimensional Slicer [US] / Patience Tester [PAL] (HoH9)", types: ["treasure","sublevelClear"] },
];
bingoList[20] = [
  { name: "Turn 15 Bulbmin into other types", types: ["cpb"] },
  { name: "Unspeakable Wonder (VoR)", types: ["treasure"] },
  { name: "Defeat all enemies on CoC3", types: ["enemy","sublevelClear"] },
  { name: "10 treasures in 2 caves", types: ["XinY"] },
  { name: "Adamantine Girdle (SCx5) and Massage Girdle (PP)", types: ["multiArea"] },
  { name: "Clear CoC3", types: ["sublevelClear"] },
  { name: "Clear SmC4", types: ["sublevelClear"] },
  { name: "Professional Noisemaker (SmC5)", types: ["treasure","ek","sublevelClear","boss"] },
];
bingoList[21] = [
  { name: "Defeat all enemies on DD4", types: ["enemy","sublevelClear"] },
  { name: "Clear 3 sublevels with Antenna Beetles, without defeating them", types: ["sublevelClear","multiArea"] },
  { name: "4 toy ring treasures", types: ["multiArea"] },
  { name: "Memorial Shell (CoS3) and Scrumptious Shell (SR3)", types: ["multiCave"] },
  { name: "Destroy all 6 gas pipes in AW", types: ["obstacle"] },
  { name: "Conifer Spire (WW)", types: ["treasure"] },
];
bingoList[22] = [
  { name: "Defeat 2 different Empress Bulblaxes", types: ["enemy","ek","boss"] },
  { name: "Defeat all enemies on CoC8", types: ["enemy","sublevelClear"] },
  { name: "12 treasures worth exactly 100 Pokos", types: ["multiArea"] },
  { name: "Paradoxical Enigma (CoS2) and Rubber Ugly (SR6)", types: ["multiCave"] },
  { name: "Clear DD8", types: ["sublevelClear"] },
  { name: "Amplified Amplifier (SR7)", types: ["treasure","ek","sublevelClear","boss"] },
];
bingoList[23] = [
  { name: "Defeat all enemies on DD11", types: ["enemy","sublevelClear"] },
  { name: "Defeat an Emperor Bulblax without using Pikmin", types: ["enemy","boss"] },
  { name: "Destroy both black gates in WW", types: ["obstacle"] },
  { name: "Clear DD11", types: ["sublevelClear"] },
];
bingoList[24] = [
  { name: "Durable Energy Cell (SR2), Proton AA (SmC4), and Fuel Reservoir (CoC7)", types: ["multiArea"] },
  { name: "Clear DD12", types: ["sublevelClear"] },
  { name: "Toxic Toadstool (WFG4), Anti-Hiccup Fungus (WW), and Growshroom (CoC6)", types: ["multiArea"] },
  { name: "Omniscient Sphere (FC4), Mirth Sphere (CoC1), and Love Sphere (HoH3)", types: ["multiArea","sublevelClear"] },
];
bingoList[25] = [
  { name: "Unknown Merit (BK4), Lustrous Element (HoH4), and Mirrored Element (DD4)", types: ["multiArea","sublevelClear"] },
  { name: "Essence of Rage (FC1), Despair (CoC2), True Love (HoH2), and Desire (DD7)", types: ["multiArea","sublevelClear"] },
  { name: "Silencer (CoC10)", types: ["treasure","ek","sublevelClear","boss"] },
  { name: "Remembered Old Buddy (HoH15)", types: ["treasure","ek","sublevelClear","boss"] },
  { name: "1 Titan Dweevil treasure", types: ["multiSublevel","td","boss"] },
  { name: "2 Titan Dweevil treasures", types: ["multiSublevel","td","boss"] },
];
