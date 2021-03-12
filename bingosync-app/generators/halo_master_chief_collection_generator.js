var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
{ name: "Tayari Plaza (Odst)", types: ["level1"] },
{ name: "Uplift Reserve(Odst)", types: ["level1"] },
{ name: "Kill 20 grunts", types: ["kill1"] },
{ name: "Kill 10 Eilets", types: ["kill1"] },
{ name: "Beat 2 flying levels", types: ["fly"] },
];
bingoList[2] = [
{ name: "Kizingo Boulevard(Odst)", types: ["level2"] },
{ name: "NMPD HQ(Odst)", types: ["level2"] },
{ name: "Kikowani Station(Odst)", types: ["level2"] },
{ name: "Oni sword base(Reach)", types: ["level2"] },
{ name: "Beat 2 tank levels", types: ["tank"] },
];
bingoList[3] = [
{ name: "Nightfall(Reach)", types: ["level2"] },
{ name: "Kill 50 grunts", types: ["kill2"] },
{ name: "Kill 20 Jackals", types: ["kill2"] },
{ name: "Kill 15 Eilets", types: ["kill2"] },
{ name: "Kill 20 Drones", types: ["kill"] },
];
bingoList[4] = [
{ name: "Kill 15 Brutes", types: ["kill2"] },
{ name: "Kill 2 Hunters", types: ["kill2"] },
{ name: "Kill 30 combat forms", types: ["kill2"] },
{ name: "Beat a level with the Tilt skull active", types: ["skull"] },
{ name: "Beat a level with the Recession skull active", types: ["skull"] },
];
bingoList[5] = [
{ name: "Kill 50 infection forms", types: ["kill2"] },
{ name: "Kill 5 pure forms", types: ["kill2"] },
{ name: "Pick up two collectables", types: ["collect"] },
{ name: "Beat a level with the Thunderstorm skull active", types: ["skull"] },
{ name: "Beat a level with the Acrophobia skull active", types: ["skull"] }
];
bingoList[6] = [
{ name: "Kill 20 Crawlers", types: ["kill3"] },
{ name: "Kill 10 Knights", types: ["kill3"] },
{ name: "Kill 5 Watchers", types: ["kill3"] },
{ name: "Pillar of Autumn (1)", types: ["level3"] },
{ name: "Beat a level with the Tough Luck skull active", types: ["skull"] },
];
bingoList[7] = [
{ name: "The Silent Cartographer(1)", types: ["level3"] },
{ name: "Assault on the control room(1)", types: ["level3"] },
{ name: "343 Guilty spark(1)", types: ["level3"] },
{ name: "Keyes(1)", types: ["level3"] },
{ name: "Beat a level with the Famine skull active", types: ["skull"] },
];
bingoList[8] = [
{ name: "The maw(1)", types: ["level3"] },
{ name: "Cairo Station(2)", types: ["level3"] },
{ name: "Outskirts(2)", types: ["level3"] },
{ name: "Metropolis(2)", types: ["level3"] },
{ name: "Beat a level with the Black Eye skull active", types: ["skull"] },
];
bingoList[9] = [
{ name: "The arbiter(2)", types: ["level3"] },
{ name: "Delta halo(2)", types: ["level3"] },
{ name: "Regret(2)", types: ["level3"] },
{ name: "Sacred icon(2)", types: ["level3"] },
{ name: "Beat a level with the Fog skull active", types: ["skull"] },
];
bingoList[10] = [
{ name: "Quarantine zone(2)", types: ["level3"] },
{ name: "Uprising(2)", types: ["level3"] },
{ name: "High Charity(2)", types: ["level3"] },
{ name: "The Great Journey(2)", types: ["level3"] },
{ name: "Beat a level with the Blind skull active", types: ["skull"] },
];
bingoList[11] = [
{ name: "Sierra 117(3)", types: ["level3"] },
{ name: "The storm(3)", types: ["level3"] },
{ name: "Floodgate(3)", types: ["level3"] },
{ name: "Cortana(3)", types: ["level3"] },
{ name: "Beat a level with the Catch skull active", types: ["skull"] },
];
bingoList[12] = [
{ name: "Dawn(4)", types: ["level3"] },
{ name: "Requiem(4)", types: ["level3"] },
{ name: "Oni Alpha Site(Odst)", types: ["level3"] },
{ name: "Data Hive(Odst)", types: ["level3"] },
{ name: "Beat a level with the Iron skull active", types: ["skull"] },
];
bingoList[13] = [
{ name: "Winter Contingency(Reach)", types: ["level3"] },
{ name: "Tip of the Spear(Reach)", types: ["level3"] },
{ name: "Beat 3 levels on medium", types: ["difficulty"] },
{ name: "Kill 70 grunts", types: ["kill3"] },
{ name: "Beat a level with the Mythic skull active", types: ["skull"] },
];
bingoList[14] = [
{ name: "Kill 30 Eilets", types: ["kill3"] },
{ name: "Kill 30 Brutes", types: ["kill3"] },
{ name: "Kill 4 Hunters", types: ["kill3"] },
{ name: "Kill 50 combat forms", types: ["kill3"] },
{ name: "Beat a level with the Scarab skull active", types: ["skull"] },
];
bingoList[15] = [
{ name: "Kill 70 infection forms", types: ["kill3"] },
{ name: "Pick up four collectables", types: ["collect"] },
{ name: "Beat 2 land vehicle levels", types: ["land"] },
{ name: "Beat 1 tank level", types: ["tank"] },
{ name: "Beat a level in under 15 min", types: ["run"] },
];
bingoList[16] = [
{ name: "Beat 1 flying level", types: ["fly"] },
{ name: "Beat 2 infantry levels", types: ["infan"] },
{ name: "Beat 1 sniper levels", types: ["sniper"] },
{ name: "Kill 2 Scarabs", types: ["kill"] },
{ name: "Kill 10 Carrier forms", types: ["kill"] },
];
bingoList[17] = [
{ name: "Halo(1)", types: ["level41"] },
{ name: "Truth and Reconciliation(1)", types: ["level4"] },
{ name: "Two betrayals(1)", types: ["level4"] },
{ name: "Gravemind(2)", types: ["level4"] },
{ name: "Kill 2 Wraiths", types: ["kill"] },
];
bingoList[18] = [
{ name: "Crow’s nest(3)", types: ["level4"] },
{ name: "Tsavo Highway(3)", types: ["level4"] },
{ name: "The ark(3)", types: ["level4"] },
{ name: "The Covenant(3)", types: ["level4"] },
{ name: "Kill 5 Ghosts", types: ["kill"] },
];
bingoList[19] = [
{ name: "Halo(3)", types: ["level4"] },
{ name: "Forerunner(4)", types: ["level4"] },
{ name: "Reclaimer(4)", types: ["level4"] },
{ name: "Shutdown(4)", types: ["level4"] },
{ name: "Kill 15 Sentinels", types: ["kill"] },
];
bingoList[20] = [
{ name: "Composer(4)", types: ["level4"] },
{ name: "Exodus(Reach)", types: ["level4"] },
{ name: "New Alexandria(Reach)", types: ["level4"] },
{ name: "The Package(Reach)", types: ["level4"] },
{ name: "Kill 5 Banshees", types: ["kill"] },
];
bingoList[21] = [
{ name: "The Pillar of Autumn (Reach)", types: ["level4"] },
{ name: "Kill 6 Hunters", types: ["kill4"] },
{ name: "Kill 50 Crawlers", types: ["kill4"] },
{ name: "Kill 10 Watchers", types: ["kill4"] },
{ name: "Get a score of 20,000 or more", types: ["score"] },
];
bingoList[22] = [
{ name: "Kill 20 Knights", types: ["kill4"] },
{ name: "Get 100 Headshots", types: ["medals"] },
{ name: "Pick up 6 collectables", types: ["collect"] },
{ name: "Get 50 Beat downs", types: ["medals"] },
{ name: "Beat 2 levels on heroic", types: ["difficulty"] },
];
bingoList[23] = [
{ name: "Beat 2 sniper levels", types: ["sniper"] },
{ name: "Beat 4 land vehicle levels", types: ["land"] },
{ name: "Beat 3 tank levels", types: ["tank"] },
{ name: "Beat 3 flying levels", types: ["fly"] },
{ name: "Beat 5 infantry levels", types: ["infan"] },
];
bingoList[24] = [
{ name: "The Library(1)", types: ["level5"] },
{ name: "The Oracle(2)", types: ["level5"] },
{ name: "Infinity(4)", types: ["level5"] },
{ name: "Midnight(4)", types: ["level5"] },
{ name: "Beat a level in under 20 min", types: ["run"] },
];
bingoList[25] = [
{ name: "Coastal Highway(Odst)", types: ["level5"] },
{ name: "Long night of Solace(Reach)", types: ["level5"] },
{ name: "Beat 1 level on legendary", types: ["difficulty"] },
{ name: "Beat 5 land vehicle levels", types: ["land"] },
{ name: "Beat 6 infantry levels", types: ["infan"] },
];
