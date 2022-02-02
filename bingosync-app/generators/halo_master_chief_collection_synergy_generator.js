var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
{ name: "Halo(1)(L)", types: ["level4"] },
{ name: "The ark(3)(TLS)", types: ["level4"] },
{ name: "Cairo Station(2)(I)", types: ["level3"] },
{ name: "Beat a level with the Tilt skull active", types: ["skull"] },
{ name: "Pick up six collectables", types: ["collect"] },
];
bingoList[2] = [
{ name: "Truth and Reconciliation(1)(IS)", types: ["level4"] },
{ name: "The Covenant(3)(ILFT)", types: ["level4"] },
{ name: "Regret(2)(I)", types: ["level3"] },
{ name: "Kill 20 grunts", types: ["kill1"] },
{ name: "Get 100 Headshots", types: ["collect"] },
];
bingoList[3] = [
{ name: "Two betrayals(1)(F)", types: ["level4"] },
{ name: "Halo(3)(IL)", types: ["level4"] },
{ name: "Dawn(4)(I)", types: ["level3"] },
{ name: "Kill 10 Eilets", types: ["kill1"] },
{ name: "Pick up four collectables", types: ["collect"] },
];
bingoList[4] = [
{ name: "Gravemind(2)(I)", types: ["level4"] },
{ name: "The Package(Reach)(IT)", types: ["level4"] },
{ name: "Cortana(3)(I)", types: ["level3"] },
{ name: "Beat a level with the Recession skull active", types: ["skull"] },
{ name: "Kill 2 Scarabs", types: ["kill"] },
];
bingoList[5] = [,
{ name: "Crow’s nest(3)(I)", types: ["level4"] },
{ name: "Reclaimer(4)(LS)", types: ["level4"] },
{ name: "Pillar of Autumn (1)(I)", types: ["level3"] },
{ name: "Kill 20 Jackals", types: ["kill2"] },
{ name: "Pick up two collectables", types: ["collect"] },
];
bingoList[6] = [
{ name: "Tsavo Highway(3)(L)", types: ["level4"] },
{ name: "Shutdown(4)(IF)", types: ["level4"] },
{ name: "Metropolis(2)(T)", types: ["level3"] },
{ name: "Kill 15 Eilets", types: ["kill2"] },
{ name: "Get a score of 20,000 or more", types: ["score"] },
];
bingoList[7] = [
{ name: "Composer(4)(I)", types: ["level4"] },
{ name: "Exodus(Reach)(I)", types: ["level4"] },
{ name: "Delta halo(2)(T)", types: ["level3"] },
{ name: "Kill 15 Brutes", types: ["kill2"] },
{ name: "Beat a level in under 15 min", types: ["run"] },
];
bingoList[8] = [
{ name: "New Alexandria(Reach)(IF)", types: ["level4"] },
{ name: "High Charity(2)(I)", types: ["level3"] },
{ name: "Kill 2 Hunters", types: ["kill2"] },
{ name: "Beat a level with the Thunderstorm skull active", types: ["skull"] },
{ name: "Beat a level in under 20 min", types: ["run"] },
];
bingoList[9] = [
{ name: "The Pillar of Autumn (Reach)(I)", types: ["level4"] },
{ name: "The Silent Cartographer(1)(IL)", types: ["level3"] },
{ name: "Kill 30 combat forms", types: ["kill2"] },
{ name: "Beat a level with the Acrophobia skull active", types: ["skull"] },
{ name: "Beat 1 level on legendary", types: ["difficulty"] },
];
bingoList[10] = [
{ name: "The Library(1)(I)", types: ["level5"] },
{ name: "Outskirts(2)(ILS)", types: ["level3"] },
{ name: "Kill 15 Carrier forms", types: ["kill2"] },
{ name: "Beat a level with the Tough Luck skull active", types: ["skull"] },
{ name: "Beat 2 levels on Heroic", types: ["difficulty"] },
];
bingoList[11] = [
{ name: "The Oracle(2)(LT)", types: ["level5"] },
{ name: "Sierra 117(3)(I)", types: ["level3"] },
{ name: "Kill 5 pure forms", types: ["kill2"] },
{ name: "Beat a level with the Famine skull active", types: ["skull"] },
{ name: "Beat 3 levels on medium", types: ["difficulty"] },
];
bingoList[12] = [
{ name: "Infinity(4)(IT)", types: ["level5"] },
{ name: "The Great Journey(2)(TF)", types: ["level3"] },
{ name: "Kill 20 Crawlers", types: ["kill3"] },
{ name: "Beat a level with the Black Eye skull active", types: ["skull"] },
{ name: "Beat 2 infantry levels(I)", types: ["infan"] },
];
bingoList[13] = [
{ name: "Midnight(4)(IF)", types: ["level5"] },
{ name: "The Maw(1)(IL)", types: ["level3"] },
{ name: "Kill 10 Knights", types: ["kill3"] },
{ name: "Beat a level with the Fog skull active", types: ["skull"] },
{ name: "Beat 3 infantry levels(I)", types: ["infan"] },
];
bingoList[14] = [
{ name: "Coastal Highway(Odst)(LT)", types: ["level5"] },
{ name: "Quarantine zone(2)(LT)", types: ["level3"] },
{ name: "Kill 5 Watchers", types: ["kill3"] },
{ name: "Beat a level with the Blind skull active", types: ["skull"] },
{ name: "Beat 4 infantry levels(I)", types: ["infan"] },
];
bingoList[15] = [
{ name: "Long night of Solace(Reach)(LT)", types: ["level5"] },
{ name: "Keyes(1)(I)", types: ["level3"] },
{ name: "Kill 70 grunts", types: ["kill3"] },
{ name: "Beat a level with the Catch skull active", types: ["skull"] },
{ name: "Beat 2 land vehicle levels(L)", types: ["land"] },
];
bingoList[16] = [
{ name: "Assault on the control room(1)(T)", types: ["level3"] },
{ name: "Winter Contingency(Reach)(L)", types: ["level3"] },
{ name: "Kill 30 Eilets", types: ["kill3"] },
{ name: "Beat a level with the Iron skull active", types: ["skull"] },
{ name: "Beat 3 land vehicle levels(L)", types: ["land"] },
];
bingoList[17] = [
{ name: "343 Guilty spark(1)(I)", types: ["level3"] },
{ name: "Tip of the Spear(Reach)(L)", types: ["level3"] },
{ name: "Kill 30 Brutes", types: ["kill3"] },
{ name: "Beat a level with the Mythic skull active", types: ["skull"] },
{ name: "Beat 4 land vehicle levels(L)", types: ["land"] },
];
bingoList[18] = [
{ name: "The arbiter(2)(IF)", types: ["level3"] },
{ name: "Kizingo Boulevard(Odst)(T)", types: ["level2"] },
{ name: "Kill 50 Combat forms", types: ["kill3"] },
{ name: "Get 50 Beat downs", types: ["collect"] },
{ name: "Beat 1 tank level(T)", types: ["tank"] },
];
bingoList[19] = [
{ name: "Sacred icon(2)(I)", types: ["level3"] },
{ name: "Nightfall(Reach)(IS)", types: ["level2"] },
{ name: "Kill 4 Hunters", types: ["kill3"] },
{ name: "Beat a level with the Scarab skull active", types: ["skull"] },
{ name: "Beat 2 sniper levels(S)", types: ["sniper"] },
];
bingoList[20] = [
{ name: "Uprising(2)(L)", types: ["level3"] },
{ name: "Oni sword base(Reach)(L)", types: ["level2"] },
{ name: "Kill 70 Combat forms", types: ["kill3"] },
{ name: "Kill 20 Drones", types: ["kill"] },
{ name: "Beat 2 tank level(T)", types: ["tank"] },
];
bingoList[21] = [
{ name: "The storm(3)(L)", types: ["level3"] },
{ name: "Kikowani Station(Odst)(F)", types: ["level2"] },
{ name: "Kill 6 Hunters", types: ["kill4"] },
{ name: "Kill 5 Banshees", types: ["kill"] },
{ name: "Beat 3 tank levels(T)", types: ["tank"] },
];
bingoList[22] = [
{ name: "Floodgate(3)(I)", types: ["level3"] },
{ name: "NMPD HQ(Odst)(IS)", types: ["level2"] },
{ name: "Kill 50 Crawlers", types: ["kill4"] },
{ name: "Kill 15 Sentinels", types: ["kill"] },
{ name: "Beat 1 flying level(F)", types: ["fly"] },
];
bingoList[23] = [
{ name: "Requiem(4)(L)", types: ["level3"] },
{ name: "Uplift Reserve(Odst)(L)", types: ["level1"] },
{ name: "Kill 20 Knights", types: ["kill4"] },
{ name: "Kill 5 Ghosts", types: ["kill"] },
{ name: "Beat 2 flying levels(F)", types: ["fly"] },
];
bingoList[24] = [
{ name: "Oni Alpha Site(Odst)(IS)", types: ["level3"] },
{ name: "Tayari Plaza (Odst)(I)", types: ["level1"] },
{ name: "Kill 10 Watchers", types: ["kill4"] },
{ name: "Kill 2 Wraiths", types: ["kill"] },
{ name: "Beat 3 flying levels(F)", types: ["fly"] },
];
bingoList[25] = [
{ name: "Data Hive(Odst)(I)", types: ["level3"] },
{ name: "Forerunner(4)(I)", types: ["level4"] },
{ name: "Kill 50 grunts", types: ["kill2"] },
{ name: "Kill 10 Carrier forms", types: ["kill"] },
{ name: "Beat 1 sniper levels(S)", types: ["sniper"] },
];
