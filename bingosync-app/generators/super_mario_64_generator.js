bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [{
    name: "Red Coin Star in WF",
    types: ["WF"]
}, {
    name: "100 Coin Star in WF",
    types: ["WF"]
}, {
    name: "Peach's Slide x 2",
    types: ["secrets"]
}, {
    name: "Reach the Castle Roof",
    types: ["lives"]
}, {
    name: "Lose Mario's Hat",
    types: ["losehat"]
}];
bingoList[2] = [{
    name: "5 Castle Secret Stars",
    types: ["secrets"]
}, {
    name: "Beat the King in BOB ",
    types: ["BOB"]
}, {
    name: "Two Bowser Stage Red Coin Stars",
    types: ["bowserreds"]
}, {
    name: "Collect 120 Coins in one stage",
    types: ["WF", "hundredcoin"]
}, {
    name: "100 Coin Star in CCM",
    types: ["CCM"]
}];
bingoList[3] = [{
    name: "Open 3 cannons",
    types: ["cannons"]
}, {
    name: "Secret Aquarium Star",
    types: ["aquarium"]
}, {
    name: "15 Lives",
    types: ["lives"]
}, {
    name: "Collect 130 Coins in one stage",
    types: ["hundredcoin"]
}];
bingoList[4] = [{
    name: "Mario Wings to the Sky BOB",
    types: ["BOB", "wingcap"]
}, {
    name: "Red Coin Star in HMC",
    types: ["HMC"]
}, {
    name: "All Stars in Whomps",
    types: ["WF"]
}, {
    name: "Three 100 Coin Stars",
    types: ["hundredcoin"]
}, {
    name: "BITS Red Coin Star",
    types: ["bowserreds"]
}];
bingoList[5] = [{
    name: "Red Coin Star in TTM",
    types: ["TTM"]
}, {
    name: "Cruiser Crossing the Rainbow RR",
    types: ["RR"]
}, {
    name: "Collect 140 Coins in one stage",
    types: ["hundredcoin"]
}, {
    name: "Secrets Star in THI",
    types: ["THI"]
}];
bingoList[6] = [{
    name: "Secrets Star in WDW",
    types: ["WDW"]
}, {
    name: "Red Coin Star in BOB",
    types: ["BOB"]
}, {
    name: "2 Cap Stage Stars",
    types: ["wingcap", "vanishcap", "metalcap", "secrets"]
}, {
    name: "Red Coin Star in BBH",
    types: ["BBH"]
}];
bingoList[7] = [{
    name: "7 Castle Secret Stars",
    types: ["secrets"]
}, {
    name: "100 Coin Star in LLL",
    types: ["LLL"]
}, {
    name: "20 lives",
    types: ["lives"]
}, {
    name: "Red Coin Star in SSL",
    types: ["SSL", "wingcap"]
}];
bingoList[8] = [{
    name: "All Stars in CCM",
    types: ["CCM"]
}, {
    name: "100 Coin Star in JRB",
    types: ["JRB"]
}, {
    name: "Red Coin Star in WDW",
    types: ["WDW"]
}];
bingoList[9] = [{
    name: "Eye in the Secret Room BBH",
    types: ["BBH", "vanishcap"]
}, {
    name: "Three Bowser Stage Red Coin Stars",
    types: ["bowserreds", "secrets"]
}, {
    name: "100 Coin Star in WDW",
    types: ["WDW"]
}, {
    name: "100 Coin Star in TTC",
    types: ["TTC"]
}];
bingoList[10] = [{
    name: "At least 1 star from 10 stages",
    types: ["starseach"]
}, {
    name: "100 Coin Star in SSL",
    types: ["SSL"]
}, {
    name: "Into the Igloo SL",
    types: ["SL", "vanishcap"]
}, {
    name: "25 Lives",
    types: ["lives"]
}, {
    name: "Open 5 Cannons",
    types: ["cannons"]
}];
bingoList[11] = [{
    name: "Red Coin Star in JRB",
    types: ["JRB"]
}, {
    name: "Mystery of the Monkey Cage TTM",
    types: ["TTM"]
}, {
    name: "Top Floor Cloud Stage Star",
    types: ["wingcap"]
}, {
    name: "Collect the Caps DDD",
    types: ["DDD", "vanishcap"]
}];
bingoList[12] = [{
    name: "3 Cap Stage Stars",
    types: ["wingcap", "vanishcap", "metalcap", "secrets"]
}, {
    name: "100 Coin Star in TTM",
    types: ["TTM"]
}, {
    name: "4 Stars each from SSL and HMC",
    types: ["SSL", "HMC"]
}, {
    name: "All Stars in LLL",
    types: ["LLL"]
}, {
    name: "Four 100 Coin Stars",
    types: ["hundredcoin"]
}];
bingoList[13] = [{
    name: "Race Through Downtown WDW",
    types: ["WDW", "vanishcap"]
}, {
    name: "100 Coin Star in HMC",
    types: ["HMC"]
}, {
    name: "100 Coin Star in THI",
    types: ["THI"]
}, {
    name: "100 Coin Star in DDD",
    types: ["DDD"]
}, {
    name: "4 Stars each from BOB and CCM",
    types: ["BOB", "CCM"]
}];
bingoList[14] = [{
    name: "100 Coin Star in RR",
    types: ["RR"]
}, {
    name: "100 Coin Star in BOB",
    types: ["BOB", "wingcap"]
}, {
    name: "30 Lives",
    types: ["lives"]
}, {
    name: "100 Coin Star in BBH",
    types: ["BBH"]
}, {
    name: "Open 7 Cannons",
    types: ["cannons"]
}];
bingoList[15] = [{
    name: "Defeat all 4 Mini-Bosses",
    types: ["SSL", "THI"]
}, {
    name: "3 Stars each from JRB and BBH",
    types: ["JRB", "BBH"]
}, {
    name: "30 Total Stars",
    types: ["manystar"]
}, {
    name: "100 Coin Star in SL",
    types: ["SL", "vanishcap"]
}, {
    name: "Rematch with Koopa the Quick THI",
    types: ["THI"]
}];
bingoList[16] = [{
    name: "10 Castle Secret Stars",
    types: ["secrets", "aquarium"]
}, {
    name: "At least 3 stars from 6 stages",
    types: ["starseach", "manystar"]
}, {
    name: "At least 2 stars from 10 stages",
    types: ["starseach", "manystar"]
}, {
    name: "All Stars in JRB",
    types: ["JRB"]
}, {
    name: "5 Stars in SL",
    types: ["SL"]
}];
bingoList[17] = [{
    name: "3 Stars each from TTC and RR",
    types: ["TTC", "RR"]
}, {
    name: "All Stars in HMC",
    types: ["HMC"]
}, {
    name: "Five 100 Coin Stars",
    types: ["hundredcoin", "starseach", "lives"]
}, {
    name: "Collect 140 Coins in two stages",
    types: ["hundredcoin"]
}, {
    name: "5 Stars in DDD",
    types: ["DDD"]
}];
bingoList[18] = [{
    name: "4 Stars each from JRB and DDD",
    types: ["JRB", "DDD"]
}, {
    name: "3 Stars each from THI and TTM",
    types: ["THI", "TTM"]
}, {
    name: "All Stars in BOB",
    types: ["BOB"]
}];
bingoList[19] = [{
    name: "All Stars in TTC",
    types: ["TTC"]
}, {
    name: "Six 100 Coin Stars",
    types: ["hundredcoin", "starseach", "lives"]
}, {
    name: "5 Stars in BBH",
    types: ["BBH"]
}, {
    name: "Open 9 Cannons",
    types: ["cannons"]
}];
bingoList[20] = [{
    name: "All Stars in SSL",
    types: ["SSL"]
}, {
    name: "6 Stars in WDW",
    types: ["WDW"]
}, {
    name: "6 Stars in SSL",
    types: ["SSL"]
}];
bingoList[21] = [{
    name: "At least 1 Star from each Stage",
    types: ["starseach", "manystar"]
}, {
    name: "Win All 3 Character Races",
    types: ["BOB", "CCM", "THI"]
}, {
    name: "At least 3 stars from 8 stages",
    types: ["starseach", "manystar"]
}, {
    name: "All Stars in TTM",
    types: ["TTM"]
}];
bingoList[22] = [{
    name: "12 Castle Secret Stars",
    types: ["secrets", "aquarium"]
}, {
    name: "35 Total Stars",
    types: ["manystar"]
}, {
    name: "6 Stars in RR",
    types: ["RR"]
}];
bingoList[23] = [{
    name: "Star #1 from each stage",
    types: ["starseach"]
}, {
    name: "Top Floor Toad Star",
    types: ["manystar"]
}, {
    name: "All Stars in Snowmans",
    types: ["SL", "vanishcap"]
}, {
    name: "6 Stars in BBH",
    types: ["BBH"]
}];
bingoList[24] = [{
    name: "6 Stars in DDD",
    types: ["DDD"]
}, {
    name: "All Stars in WDW",
    types: ["WDW", "vanishcap"]
}, {
    name: "All Stars in THI",
    types: ["THI"]
}];
bingoList[25] = [{
    name: "All Stars in BBH",
    types: ["BBH", "vanishcap"]
}, {
    name: "Open All 11 Cannons",
    types: ["cannons"]
}, {
    name: "All Stars in DDD",
    types: ["DDD", "vanishcap"]
}, {
    name: "All Stars in RR",
    types: ["RR"]
}];

