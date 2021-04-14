var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
{ name: "Tayari Plaza (Odst)(I)", types: ["level1"] },
{ name: "Uplift Reserve(Odst)(L)", types: ["level1"] },
{ name: "Kill 20 grunts", types: ["kill1"] },
{ name: "Kill 10 Eilets", types: ["kill1"] },
{ name: "Beat 2 flying levels(F)", types: ["fly"] },
];
bingoList[2] = [
{ name: "Kizingo Boulevard(Odst)(T)", types: ["level2"] },
{ name: "NMPD HQ(Odst)(IS)", types: ["level2"] },
{ name: "Kikowani Station(Odst)(F)", types: ["level2"] },
{ name: "Oni sword base(Reach)(L)", types: ["level2"] },
{ name: "Beat 2 tank levels(T)", types: ["tank"] },
];
bingoList[3] = [
{ name: "Nightfall(Reach)(IS)", types: ["level2"] },
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
{ name: "Beat a level with the Acrophobia skull active", types: ["skull"] },
];
bingoList[6] = [
{ name: "Kill 20 Crawlers", types: ["kill3"] },
{ name: "Kill 10 Knights", types: ["kill3"] },
{ name: "Kill 5 Watchers", types: ["kill3"] },
{ name: "Pillar of Autumn (1)(I)", types: ["level3"] },
{ name: "Beat a level with the Tough Luck skull active", types: ["skull"] },
];
bingoList[7] = [
{ name: "The Silent Cartographer(1)(L)", types: ["level3"] },
{ name: "Assault on the control room(1)(T)", types: ["level3"] },
{ name: "343 Guilty spark(1)(I)", types: ["level3"] },
{ name: "Keyes(1)(I)", types: ["level3"] },
{ name: "Beat a level with the Famine skull active", types: ["skull"] },
];
bingoList[8] = [
{ name: "The maw(1)(IL)", types: ["level3"] },
{ name: "Cairo Station(2)(I)", types: ["level3"] },
{ name: "Outskirts(2)(IL)", types: ["level3"] },
{ name: "Metropolis(2)(T)", types: ["level3"] },
{ name: "Beat a level with the Black Eye skull active", types: ["skull"] },
];
bingoList[9] = [
{ name: "The arbiter(2)(IF)", types: ["level3"] },
{ name: "Delta halo(2)(T)", types: ["level3"] },
{ name: "Regret(2)(I)", types: ["level3"] },
{ name: "Sacred icon(2)(I)", types: ["level3"] },
{ name: "Beat a level with the Fog skull active", types: ["skull"] },
];
bingoList[10] = [
{ name: "Quarantine zone(2)(LT)", types: ["level3"] },
{ name: "Uprising(2)(L)", types: ["level3"] },
{ name: "High Charity(2)(I)", types: ["level3"] },
{ name: "The Great Journey(2)(TF)", types: ["level3"] },
{ name: "Beat a level with the Blind skull active", types: ["skull"] },
];
bingoList[11] = [
{ name: "Sierra 117(3)(I)", types: ["level3"] },
{ name: "The storm(3)(L)", types: ["level3"] },
{ name: "Floodgate(3)(I)", types: ["level3"] },
{ name: "Cortana(3)(I)", types: ["level3"] },
{ name: "Beat a level with the Catch skull active", types: ["skull"] },
];
bingoList[12] = [
{ name: "Dawn(4)(I)", types: ["level3"] },
{ name: "Requiem(4)(L)", types: ["level3"] },
{ name: "Oni Alpha Site(Odst)(IS)", types: ["level3"] },
{ name: "Data Hive(Odst)(I)", types: ["level3"] },
{ name: "Beat a level with the Iron skull active", types: ["skull"] },
];
bingoList[13] = [
{ name: "Winter Contingency(Reach)(L)", types: ["level3"] },
{ name: "Tip of the Spear(Reach)(L)", types: ["level3"] },
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
{ name: "Beat 2 land vehicle levels(L)", types: ["land"] },
{ name: "Beat 1 tank level(T)", types: ["tank"] },
{ name: "Beat a level in under 15 min", types: ["run"] },
];
bingoList[16] = [
{ name: "Beat 1 flying level(F)", types: ["fly"] },
{ name: "Beat 2 infantry levels(I)", types: ["infan"] },
{ name: "Beat 1 sniper level(S)", types: ["sniper"] },
{ name: "Kill 2 Scarabs", types: ["kill"] },
{ name: "Kill 10 Carrier forms", types: ["kill"] },
];
bingoList[17] = [
{ name: "Halo(1)(L)", types: ["level4"] },
{ name: "Truth and Reconciliation(1)(IS)", types: ["level4"] },
{ name: "Two betrayals(1)(IF)", types: ["level4"] },
{ name: "Gravemind(2)(I)", types: ["level4"] },
{ name: "Kill 2 Wraiths", types: ["kill"] },
];
bingoList[18] = [
{ name: "Crow’s nest(3)(I)", types: ["level4"] },
{ name: "Tsavo Highway(3)(L)", types: ["level4"] },
{ name: "The ark(3)(TLS)", types: ["level4"] },
{ name: "The Covenant(3)(IFT)", types: ["level4"] },
{ name: "Kill 5 Ghosts", types: ["kill"] },
];
bingoList[19] = [
{ name: "Halo(3)(IL)", types: ["level4"] },
{ name: "Forerunner(4)(IL)", types: ["level4"] },
{ name: "Reclaimer(4)(LS)", types: ["level4"] },
{ name: "Shutdown(4)(IF)", types: ["level4"] },
{ name: "Kill 15 Sentinels", types: ["kill"] },
];
bingoList[20] = [
{ name: "Composer(4)(IT)", types: ["level4"] },
{ name: "Exodus(Reach)(I)", types: ["level4"] },
{ name: "New Alexandria(Reach)(IF)", types: ["level4"] },
{ name: "The Package(Reach)(IT)", types: ["level4"] },
{ name: "Kill 5 Banshees", types: ["kill"] },
];
bingoList[21] = [
{ name: "The Pillar of Autumn (Reach)()", types: ["level4"] },
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
{ name: "Beat 2 sniper levels(S)", types: ["sniper"] },
{ name: "Beat 4 land vehicle levels(L)", types: ["land"] },
{ name: "Beat 3 tank levels(T)", types: ["tank"] },
{ name: "Beat 3 flying levels(F)", types: ["fly"] },
{ name: "Beat 3 infantry levels(I)", types: ["infan"] },
];
bingoList[24] = [
{ name: "The Library(1)(I)", types: ["level5"] },
{ name: "The Oracle(2)(I)", types: ["level5"] },
{ name: "Infinity(4)(IT)", types: ["level5"] },
{ name: "Midnight(4)(IF)", types: ["level5"] },
{ name: "Beat a level in under 20 min", types: ["run"] },
];
bingoList[25] = [
{ name: "Coastal Highway(Odst)(LT)", types: ["level5"] },
{ name: "Long night of Solace(Reach)(IF)", types: ["level5"] },
{ name: "Beat 1 level on legendary", types: ["difficulty"] },
{ name: "Beat 3 land vehicle levels(L)", types: ["land"] },
{ name: "Beat 4 infantry levels(I)", types: ["infan"] },
];
