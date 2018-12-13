bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "TT Race", types: ["race","tt"] },
  { name: "AI Puzzle", types: ["puzzle","ai"] },
  { name: "AH Coin", types: ["coin","ah"] },
  { name: "1-Up in A&G", types: ["life","aag"] },
  { name: "Window Life (A&G)", types: ["life","aag"] },
];
bingoList[2] = [
  { name: "CY Race", types: ["race","cy"] },
  { name: "All Al's Toy Barn Tokens", types: ["total","atb"] },
  { name: "AH Race", types: ["race","ah"] },
  { name: "1-Up in ATB", types: ["life","atb"] },
  { name: "Hidden Life (A&G)", types: ["life","aag"] },
];
bingoList[3] = [
  { name: "ATB Potato", types: ["upgrade","atb"] },
  { name: "All Tarmac Trouble Tokens", types: ["total","tt"] },
  { name: "ASL Collectable", types: ["collectable","asl"] },
  { name: "1-Up in ASL", types: ["life","asl"] },
  { name: "Lily Pad Life (A&G)", types: ["life","ah"] },
];
bingoList[4] = [
  { name: "AP Puzzle", types: ["puzzle","ap"] },
  { name: "All Al's Penthouse Tokens", types: ["total","ap"] },
  { name: "AP Boss", types: ["boss","ap"] },
  { name: "1-Up in EH", types: ["life","eh"] },
  { name: "Tennis Life (ATB)", types: ["life","atb"] },
];
bingoList[5] = [
  { name: "AI Boss", types: ["boss","ai"] },
  { name: "CY Potato", types: ["upgrade","cy"] },
  { name: "All Construction Yard Tokens", types: ["total","cy"] },
  { name: "1-Up in AP", types: ["life","ap"] },
  { name: "Space Life (ASL)", types: ["life","asl"] },
];
bingoList[6] = [
  { name: "AH Potato", types: ["upgrade","ah"] },
  { name: "All Allies & Gullies Tokens", types: ["total","aag"] },
  { name: "ASL Boss", types: ["boss","asl"] },
  { name: "1-Up in AI", types: ["life","ai"] },
  { name: "Hot Life (AP)", types: ["life","ap"] },
];
bingoList[7] = [
  { name: "EH Collectable", types: ["collectable","eh"] },
  { name: "AN Boss", types: ["boss","an"] },
  { name: "AP Race", types: ["race","ap"] },
  { name: "1-Up in TT", types: ["life","tt"] },
  { name: "Terminal Life (TT)", types: ["life","tt"] },
];
bingoList[8] = [
  { name: "TT Boss", types: ["boss","tt"] },
  { name: "Slime Time", types: ["boss","st"] },
  { name: "EH Boss", types: ["boss","eh"] },
  { name: "1-Up in every level", types: ["life","challenge"] },
  { name: "AH Rex", types: ["heybuzz","ah"] },
];
bingoList[9] = [
  { name: "Evil Emperor Zurg", types: ["boss","eez"] },
  { name: "ASL Puzzle", types: ["puzzle","asl"] },
  { name: "AI Potato", types: ["upgrade","ai"] },
  { name: "AH Green Laser", types: ["laser","ah"] },
  { name: "AN Rex", types: ["heybuzz","an"] },
];
bingoList[10] = [
  { name: "ATB Boss", types: ["boss","atb"] },
  { name: "All Elevator Hop Tokens", types: ["total","eh"] },
  { name: "TT Puzzle", types: ["puzzle","tt"] },
  { name: "AN Green Laser", types: ["laser","an"] },
  { name: "CY Rex", types: ["heybuzz","cy"] },
];
bingoList[11] = [
  { name: "AN Coin", types: ["coin","an"] },
  { name: "All Al's Space Land Tokens", types: ["total","asl"] },
  { name: "CY Collectable", types: ["collectable","cy"] },
  { name: "CY Green Laser", types: ["laser","cy"] },
  { name: "A&G Rex", types: ["heybuzz","aag"] },
];
bingoList[12] = [
  { name: "AP Coin", types: ["coin","ap"] },
  { name: "AN Race", types: ["race","an"] },
  { name: "CY Puzzle", types: ["puzzle","cy"] },
  { name: "A&G Green Laser", types: ["laser","aag"] },
  { name: "ATB Rex", types: ["heybuzz","atb"] },
];
bingoList[13] = [
  { name: "AH Puzzle", types: ["puzzle","ah"] },
  { name: "A&G Boss", types: ["boss","aag"] },
  { name: "A&G Coin", types: ["coin","aag"] },
  { name: "ATB Green Laser", types: ["laser","atb"] },
  { name: "ASL Rex", types: ["heybuzz","asl"] },
];
bingoList[14] = [
  { name: "CY Coin", types: ["coin","cy"] },
  { name: "EH Coin", types: ["coin","eh"] },
  { name: "All Andy's Neighborhood Tokens", types: ["total","an"] },
  { name: "ASL Green Laser", types: ["laser","asl"] },
  { name: "EH Rex", types: ["heybuzz","eh"] },
];
bingoList[15] = [
  { name: "AI Coin", types: ["coin","ai"] },
  { name: "AH Collectable", types: ["collectable","ah"] },
  { name: "AP Collectable", types: ["collectable","ap"] },
  { name: "EH Green Laser", types: ["laser","eh"] },
  { name: "AP Rex", types: ["heybuzz","ap"] },
];
bingoList[16] = [
  { name: "EH Puzzle", types: ["puzzle","eh"] },
  { name: "ATB Coin", types: ["coin","atb"] },
  { name: "TT Coin", types: ["coin","tt"] },
  { name: "AP Green Laser", types: ["laser","ap"] },
  { name: "AI Rex", types: ["heybuzz","ai"] },
];
bingoList[17] = [
  { name: "ATB Race", types: ["race","atb"] },
  { name: "CY Boss", types: ["boss","cy"] },
  { name: "EH Potato", types: ["upgrade","eh"] },
  { name: "AI Green Laser", types: ["laser","ai"] },
  { name: "TT Rex", types: ["heybuzz","tt"] },
];
bingoList[18] = [
  { name: "Bombs Away!", types: ["boss","ba"] },
  { name: "ASL Coin", types: ["coin","asl"] },
  { name: "A&G Collectable", types: ["collectable","aag"] },
  { name: "TT Green Laser", types: ["laser","tt"] },
];
bingoList[19] = [
  { name: "ATB Puzzle", types: ["puzzle","atb"] },
  { name: "Prospector Showdown", types: ["boss","ps"] },
  { name: "ATB Collectable", types: ["collectable","atb"] },
  { name: "Slime Time Green Laser", types: ["laser","st"] },
];
bingoList[20] = [
  { name: "Toy Barn Encounter", types: ["boss","tbe"] },
  { name: "EH Race", types: ["race","eh"] },
  { name: "A&G Puzzle", types: ["puzzle","aag"] },
  { name: "Crib Life (AH)", types: ["life","ah"] },
];
bingoList[21] = [
  { name: "All Airport Infiltration Tokens", types: ["total","ai"] },
  { name: "A&G Race", types: ["race","aag"] },
  { name: "All Potatos", types: ["upgrade","challenge"] },
  { name: "Shelf Life (AH)", types: ["life","ah"] },
];
bingoList[22] = [
  { name: "TT Collectable", types: ["collectable","tt"] },
  { name: "AH Boss", types: ["boss","ah"] },
  { name: "All Bosses", types: ["boss","challenge"] },
  { name: "Light Life (AH)", types: ["life","ah"] },
];
bingoList[23] = [
  { name: "AN Collectable", types: ["collectable","an"] },
  { name: "All Andy's House Tokens", types: ["total","ah"] },
  { name: "1-Up in AH", types: ["life","ah"] },
  { name: "Swing Life (AN)", types: ["life","ah"] },
];
bingoList[24] = [
  { name: "ASL Race", types: ["race","asl"] },
  { name: "AI Race", types: ["race","ai"] },
  { name: "1-Up in AN", types: ["life","an"] },
  { name: "Dozer Life (CY)", types: ["life","cy"] },
];
bingoList[25] = [
  { name: "AN Puzzle", types: ["puzzle","an"] },
  { name: "AI Collectable", types: ["collectable","ai"] },
  { name: "1-Up in CY", types: ["life","cy"] },
  { name: "Cabin Life (CY)", types: ["life","cy"] },
];
