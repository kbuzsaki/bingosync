var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
{ name: "2 Woods Bees", types: ["bees", "woods"] },
{ name: "2 Lake Bees", types: ["bees", "lake"] },
{ name: "2 Beach Bees", types: ["bees", "beach"] },
{ name: "2 Overworld Bees", types: ["bees", "overworld"] },
{ name: "7 Plains Tonics", types: ["tonic", "collect", "plains"] },
];
bingoList[2] = [
{ name: "Open 5 Tomes", types: ["tome"] },
{ name: "Plains Paywall", types: ["paywall", "coin"] },
{ name: "4 Plains Coins", types: ["coin", "plains"] },
{ name: "5 Coins", types: ["coin"] },
{ name: "2 Beach Tonics", types: ["tonic", "collect", "beach"] },
];
bingoList[3] = [
{ name: "10 Tonics", types: ["tonic", "collect"] },
{ name: "9 Plains Tonics", types: ["tonic", "collect", "plains"] },
{ name: "3 Desert Tonics", types: ["tonic", "collect", "desert"] },
{ name: "Open 3 Alt States", types: ["tome"] },
{ name: "Bomb Jump to T4", types: ["misc", "plains"] },
];
bingoList[4] = [
{ name: "Woods Level First", types: ["bees", "first", "overworld"] },
{ name: "6 Woods Tonics", types: ["tonic", "collect", "woods"] },
{ name: "5 Lake Tonics", types: ["tonic", "collect", "lake"] },
{ name: "5C Plains Level", types: ["coin", "plains"] },
{ name: "14-2 Intended Unlock", types: ["tome", "pagie"] },
];
bingoList[5] = [
{ name: "4 Beach Coins", types: ["coin", "beach"] },
{ name: "7-S Intended Way", types: ["bees", "secret", "woods"] },
{ name: "4 Woods Bees", types: ["bees", "woods"] },
{ name: "3 Pagies", types: ["pagie"] },
{ name: "11 Plains Tonics", types: ["tonic", "collect", "plains"] },
];
bingoList[6] = [
{ name: "2 Desert Bees", types: ["bees", "desert"] },
{ name: "4 Overworld Bees", types: ["bees", "overworld"] },
{ name: "5 Desert Tonics", types: ["tonic", "collect", "desert"] },
{ name: "7 Lake Tonics", types: ["tonic", "collect", "lake"] },
{ name: "Touch the Dead Planker", types: ["misc", "desert"] },
];
bingoList[7] = [
{ name: "4 Woods Coins", types: ["coin", "woods"] },
{ name: "7-2 No DA", types: ["bees", "woods"] },
{ name: "8 Woods Tonics", types: ["tonic", "collect", "woods"] },
{ name: "4 Beach Tonics", types: ["tonic", "collect", "beach"] },
{ name: "2 Factory Tonics", types: ["tonic", "collect", "factory"] },
];
bingoList[8] = [
{ name: "8 Plains Coins", types: ["coin", "plains"] },
{ name: "10 Coins", types: ["coin"] },
{ name: "9 Lake Tonics", types: ["tonic", "collect", "lake"] },
{ name: "4 Desert Coins", types: ["coin", "desert"] },
{ name: "4 Lake Coins", types: ["coin", "lake"] },
];
bingoList[9] = [
{ name: "2 Plains Bees", types: ["bees", "plains"] },
{ name: "5C Woods Level", types: ["coin", "woods"] },
{ name: "5C Beach Level", types: ["coin", "beach"] },
{ name: "14-S Intended Way", types: ["bees", "secret", "lake"] },
{ name: "16-S Intended Way", types: ["bees", "secret", "beach"] },
];
bingoList[10] = [
{ name: "Open 10 Tomes", types: ["tome"] },
{ name: "Open 6 Alt States", types: ["tome"] },
{ name: "Desert Paywall", types: ["paywall", "coin"] },
{ name: "15 Coins", types: ["coin"] },
{ name: "Purchase 4 Tonics", types: ["tonic", "buy"] },
];
bingoList[11] = [
{ name: "4 Beach Bees", types: ["bees", "beach"] },
{ name: "8 Beach Coins", types: ["coin", "beach"] },
{ name: "6 Overworld Bees", types: ["bees", "overworld"] },
{ name: "8 Woods Coins", types: ["coin", "woods"] },
{ name: "5C Desert Level", types: ["coin", "desert"] },
];
bingoList[12] = [
{ name: "6 Woods Bees", types: ["bees", "woods"] },
{ name: "4 Lake Bees", types: ["bees", "lake"] },
{ name: "Lake Level First", types: ["bees", "first"] },
{ name: "Woods Paywall", types: ["paywall", "coin"] },
{ name: "12 Plains Coins", types: ["coin", "plains"] },
];
bingoList[13] = [
{ name: "Yooka-Laylee Rap", types: ["misc", "plains"] },
{ name: "4 Plains Bees", types: ["bees", "plains"] },
{ name: "20 Tonics", types: ["tonic", "collect"] },
{ name: "Open 9 Alt States", types: ["tome"] },
{ name: "20 Coins", types: ["coin"] },
];
bingoList[14] = [
{ name: "5-S Intended Way", types: ["bees", "secret", "woods"] },
{ name: "7 Desert Tonics", types: ["tonic", "collect", "desert"] },
{ name: "Super Buddy Slam", types: ["tonic", "collect"] },
{ name: "5C Lake Level", types: ["coin", "lake"] },
{ name: "25% IL 0 Bees", types: ["misc", "lair"] },
];
bingoList[15] = [
{ name: "8 Overworld Bees", types: ["bees", "overworld"] },
{ name: "6 Pagies", types: ["pagie"] },
{ name: "3 Factory Tonics", types: ["tonic", "collect", "factory"] },
{ name: "8 Desert Coins", types: ["coin", "desert"] },
{ name: "4 Factory Coins", types: ["coin", "factory"] },
];
bingoList[16] = [
{ name: "Purchase 7 Tonics", types: ["tonic", "buy"] },
{ name: "8 Lake Coins", types: ["coin", "lake"] },
{ name: "5C Factory Level", types: ["coin", "factory"] },
{ name: "2 Intended Secret Exits", types: ["bees", "secret"] },
{ name: "6 Beach Tonics", types: ["tonic", "collect", "beach"] },
];
bingoList[17] = [
{ name: "4 Desert Bees", types: ["bees", "desert"] },
{ name: "2 Factory Bees", types: ["bees", "factory"] },
{ name: "12 Beach Coins", types: ["coin", "beach"] },
{ name: "Rampo Tonic", types: ["tonic", "collect"] },
{ name: "Lake Paywall", types: ["paywall", "coin"] },
];
bingoList[18] = [
{ name: "6 Beach Bees", types: ["bees", "beach"] },
{ name: "8-2", types: ["bees", "woods", "buy"] },
{ name: "10 Woods Tonics", types: ["tonic", "collect", "woods"] },
{ name: "Open 15 Tomes", types: ["tome"] },
{ name: "12 Woods Coins", types: ["coin", "woods"] },
];
bingoList[19] = [
{ name: "6 Plains Bees", types: ["bees", "plains"] },
{ name: "25 Coins", types: ["coin"] },
{ name: "20-1 No DA", types: ["bees", "factory"] },
{ name: "Open 12 Alt States", types: ["tome"] },
{ name: "Ch. 4 Pagie", types: ["pagie"] },
];
bingoList[20] = [
{ name: "5-2", types: ["bees", "woods"] },
{ name: "10-2 No oob", types: ["bees", "desert"] },
{ name: "15-2 No oob", types: ["bees", "beach"] },
{ name: "Purchase 10 Tonics", types: ["tonic", "buy"] },
{ name: "12 Desert Coins", types: ["coin", "desert"] }
];
bingoList[21] = [
{ name: "20-2 No DA", types: ["bees", "factory"] },
{ name: "9 Pagies ", types: ["pagie"] },
{ name: "30 Tonics", types: ["tonic", "collect"] },
{ name: "12 Lake Coins", types: ["coin", "lake"] },
{ name: "8 Factory Coins", types: ["coin", "factory"] },
];
bingoList[22] = [
{ name: "30 Coins", types: ["coin"] },
{ name: "Factory Level First", types: ["bees", "first"] },
{ name: "4 Factory Tonics", types: ["tonic", "collect", "factory"] },
{ name: "Beach Paywall", types: ["paywall", "coin"] },
{ name: "50% IL ", types: ["misc", "lair"] },
];
bingoList[23] = [
{ name: "4 Intended Secret Exits", types: ["bees", "secret"] },
{ name: "12 Pagies", types: ["pagie"] },
{ name: "Purchase 13 Tonics", types: ["tonic", "buy"] },
{ name: "35 Coins", types: ["coin"] },
{ name: "Open 20 Tomes", types: ["tome"] },
];
bingoList[24] = [
{ name: "6 Desert Bees", types: ["bees", "desert"] },
{ name: "6 Lake Bees", types: ["bees", "lake"] },
{ name: "Open 15 Alt States", types: ["tome"] },
{ name: "12 Factory Coins", types: ["coin", "factory"] },
{ name: "40 Coins", types: ["coin"] }
];
bingoList[25] = [
{ name: "75% IL ", types: ["misc", "lair"] },
{ name: "4 Factory Bees", types: ["bees", "factory"] },
{ name: "15 Pagies", types: ["pagie"] },
{ name: "40 Tonics", types: ["tonic", "collect"] },
{ name: "Purchase 16 Tonics", types: ["tonic", "buy"] },
];
