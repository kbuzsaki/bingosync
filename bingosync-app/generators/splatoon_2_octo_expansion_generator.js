bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
    {name: "A05 w/ splat bombs", types: ["A", "early"]},
    {name: "A08 w/ squiffer", types: ["A", "early"]},
    {name: "Beat 2 8ball levels", types: ["8ball", "early"]},
    {name: "Beat 1 level with blaster", types: ["blaster"]},
    {name: "Beat 1 level with charger", types: ["charger"]}
];

bingoList[2] = [
    {name: "Unlock I (green) line", types: ["enemy"]},
    {name: "Complete 6 connector (square) stations", types: ["lines"]},
    {name: "Get 5000 credits", types: ["credits"]},
    {name: "Beat 1 “Bust the Targets” level", types: ["targets"]},
    {name: "Beat 1 level with brella", types: ["brella"]}
];

bingoList[3] = [
    {name: "All levels on yellow line", types: ["A"]},
    {name: "Beat 3 8ball levels", types: ["8ball"]},
    {name: "1 Thang", types: ["thang"]},
    {name: "Beat 1 level with splatling", types: ["splatling"]},
    {name: "Beat 2 levels using Baller", types: ["baller"]}
];

bingoList[4] = [
    {name: "Beat 1 boss", types: ["boss"]},
    {name: "C02 w/o goal Balloon Fish", types: ["ink"]},
    {name: "Beat a station using all 3 supplied weapons", types: ["misc"]},
    {name: "J03/D08 with the Splat Charger", types: ["J", "D"]}
];

bingoList[5] = [
    {name: "I05/B08 w/ the Bamboozler", types: ["I", "B"]},
    {name: "Beat 2 levels using inkjet", types: ["inkjet"]},
    {name: "J04 w/ the inkbrush", types: ["J", "inkbrush"]},
    {name: "8ball OOB in E06", types: ["8ball"]}
];

bingoList[6] = [
    {name: "Beat 4 8-ball levels", types: ["8ball"]},
    {name: "Beat 2 “Balloon Pop” levels", types: ["balloon"]},
    {name: "Collect 5 armor upgrades", types: ["armor"]},
    {name: "Beat 3 levels using a roller", types: [""]},
    {name: "I02 without grabbing ink refills", types: ["I", "ink"]}
];

bingoList[7] = [
    {name: "F02 w/ burst bombs only", types: ["F"]},
    {name: "Beat 2 stations using all 3 supplied weapons", types: ["misc"]},
    {name: "Unlock 6 lines", types: ["lines"]},
    {name: "Beat 3 levels using a brush", types: ["brush"]},
    {name: "Beat 4 “Bust the Targets” levels", types: ["targets"]},
    {name: "Complete 10 connector (square) stations", types: ["lines"]}
];

bingoList[8] = [
    {name: "Beat 3 levels using dualies", types: ["dual"]},
    {name: "Beat 3 levels using a slosher", types: ["slosher"]},
    {name: "Collect 2 thangs", types: ["thang"]},
    {name: "Beat all levels on 2 lines", types: ["lines"]},
    {name: "Beat 3 levels using a brella", types: ["brella"]},
    {name: "Collect 15 power egg containers", types: ["credits"]},
    {name: "J02 w/ splat charger ", types: ["J", "charger"]}
];

bingoList[9] = [
    {name: "Beat all levels on lime line [I]", types: ["I", "lines"]},
    {name: "Complete E10 with splat charger", types: ["E", "charger"]},
    {name: "Beat 3 levels using a splatling", types: ["splatling"]},
    {name: "Get 10000 credits", types: ["credits"]},
    {name: "Fly through every ring in G10/E07", types: ["G", "E", "inkjet"]}
];

bingoList[10] = [
    {name: "Beat both match the shape stations", types: ["F", "J"]},
    {name: "Beat 3 levels using a charger", types: ["charger"]},
    {name: "Complete 12 connector (square) stations", types: ["lines"]},
    {name: "Beat 3 levels using blaster", types: ["blaster"]},
    {name: "Beat all levels on blue line [H]", types: ["H", "lines"]}
];

bingoList[11] = [
    {name: "Beat 5 levels using a roller", types: ["roller"]},
    {name: "Collect 20 power egg containers", types: ["credits"]},
    {name: "Beat all levels on purple line (G)", types: ["G", "lines"]},
    {name: "G02 w/ the Dynamo Roller", types: ["G", "roller"]},
    {name: "Beat 3 stages using all 3 supplied weapons", types: ["misc"]}
];

bingoList[12] = [
    {name: "Beat both data point stages", types: ["E", "F"]},
    {name: "E09 w/ only Burst Bombs", types: ["E"]},
    {name: "Get at least 15000 credits", types: ["credits"]},
    {name: "Beat 3 “Balloon Pop” levels", types: ["balloon"]},
    {name: "Beat 3 levels using inkjet", types: ["inkjet"]},
    {name: "Beat 5 levels using a charger", types: ["charger"]},
    {name: "Complete 12 connector (square) stations", types: ["lines"]}
];

bingoList[13] = [
    {name: "Beat all levels on gray line (D)", types: ["D", "lines"]},
    {name: "Beat all levels on pink line (J)", types: ["J", "lines"]},
    {name: "Collect 10 armor upgrades", types: ["armor"]},
    {name: "Beat 5 levels using a brush", types: ["brush"]},
    {name: "Beat all levels on 3 lines", types: ["lines"]},
    {name: "Beat 7 “Bust the Targets” levels", types: ["targets"]},
    {name: "Beat both rainmaker levels", types: ["A", "F"]}
];

bingoList[14] = [
    {name: "Unlock 8 lines", types: ["lines"]},
    {name: "Beat 2 boss fights", types: ["boss"]},
    {name: "Beat 5 levels using a slosher", types: ["slosher"]},
    {name: "I01/G01 with the Octobrush", types: ["boss", "brush"]},
    {name: "Beat all levels on black line (F)", types: ["F", "lines"]},
    {name: "Beat both tower control levels", types: ["H", "B"]}
];

bingoList[15] = [
    {name: "Beat all levels on green line (C)", types: ["C", "lines"]},
    {name: "Beat 7 levels using a roller", types: ["roller"]},
    {name: "Beat both “defend the orb” levels", types: ["J", "D", "I", "E"]},
    {name: "Beat 5 levels using a brella", types: ["brella"]},
    {name: "Collect 30 power egg containers", types: ["credits"]},
    {name: "Get 20000 credits", types: ["credits"]},
    {name: "Beat 7 levels using a charger", types: ["charger"]}
];

bingoList[16] = [
    {name: "Beat 5 levels using a splatling", types: ["splatling"]},
    {name: "Beat 6 8-Ball levels", types: ["8ball"]},
    {name: "Beat all 4 limited ink stages", types: ["ink"]},
    {name: "Complete 16 connector (square) stations", types: ["lines"]},
    {name: "Beat 3 levels using baller", types: ["baller"]},
    {name: "Beat 4 stages using all 3 supplied weapons", types: ["misc"]}
];

bingoList[17] = [
    {name: "Beat all levels on teal line (B)", types: ["B", "lines"]},
    {name: "Beat 5 levels using inkjet", types: ["inkjet"]},
    {name: "Beat 4 “Balloon Pop” levels", types: ["balloon"]},
    {name: "Collect 3 thangs", types: ["thang"]},
    {name: "Unlock all 10 lines", types: ["lines"]},
    {name: "Collect 15 armor upgrades", types: ["armor"]}
];

bingoList[18] = [
    {name: "Beat 3 boss fights", types: ["boss"]},
    {name: "Beat all levels on magenta line (E)", types: ["E", "lines"]},
    {name: "Beat 7 levels using a blaster", types: ["blaster"]},
    {name: "Get at least 25000 credits", types: ["credits"]},
    {name: "Beat 9 levels using charger", types: ["charger"]}
];

bingoList[19] = [
    {name: "Beat 7 levels using a slosher", types: ["slosher"]},
    {name: "Beat 7 levels using a brella", types: ["brella"]},
    {name: "Beat 8 8-Ball levels", types: ["8ball"]},
    {name: "Beat 9 levels using blaster", types: ["blaster"]}
];

bingoList[20] = [
    {name: "Beat all levels on 4 lines", types: ["lines"]},
    {name: "Beat 7 levels using a splatling", types: ["splatling"]},
    {name: "Beat 9 levels using a roller", types: ["roller"]},
    {name: "Complete all 20 connector (square) stations", types: ["lines"]},
    {name: "Get at least 30000 credits", types: ["credits"]}
];

bingoList[21] = [
    {name: "Beat all 4 boss fights", types: ["boss"]},
    {name: "Beat 12 levels using a charger", types: ["charger"]},
    {name: "Beat 5 levels using all 3 supplied weapons", types: ["misc"]},
    {name: "Beat 5 levels using dualies", types: ["dual"]}
];

bingoList[22] = [
    {name: "Beat 12 levels using a blaster", types: ["blaster"]},
    {name: "Collect all 4 thangs", types: ["thang"]},
    {name: "Beat 7 levels using a brush", types: ["brush"]},
    {name: "Get at least 35000 credits", types: ["credits"]}
];

bingoList[23] = [
    {name: "Beat 9 levels using a brush", types: ["brush"]},
    {name: "Beat 9 levels using a roller", types: ["roller"]}
];

bingoList[24] = [
    {name: "Beat all 10 8 Ball levels", types: ["8ball"]},
    {name: "Beat 14 levels using blaster", types: ["blaster"]},
];

bingoList[25] = [
    {name: "Get at least 40000 credits", types: ["credits", "long"]},
    {name: "Beat 16 levels using a charger", types: ["charger", "long"]},
    {name: "Beat 6 levels using all 3 supplied weapons", types: ["misc", "long"]},
    {name: "Beat all levels on 5 lines", types: ["lines", "long"]}
];
