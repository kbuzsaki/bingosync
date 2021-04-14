var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "TT Race", types: ["race","tt"] },
  { name: "AI Puzzle", types: ["puzzle","ai"] },
  { name: "AH Coin", types: ["coin","ah"] },
  { name: "1-Up in A&G", types: ["life","aag"] },
  { name: "Window Life (A&G)", types: ["life","aag"] },
  { name: "Jump into Green Goo", types: ["event"] },
  { name: "Northwest Battery (BA)", types: ["battery","ba"] },
  { name: "Train Battery (AP)", types: ["battery","ap"] },
];
bingoList[2] = [
  { name: "CY Race", types: ["race","cy"] },
  { name: "All Al's Toy Barn Tokens", types: ["total","atb"] },
  { name: "AH Race", types: ["race","ah"] },
  { name: "1-Up in ATB", types: ["life","atb"] },
  { name: "Hidden Life (A&G)", types: ["life","aag"] },
  { name: "Jump into Oil", types: ["event"] },
  { name: "Northeast Battery (BA)", types: ["battery","ba"] },
  { name: "Al TV Battery (AP)", types: ["battery","ap"] },
];
bingoList[3] = [
  { name: "ATB Potato", types: ["upgrade","atb"] },
  { name: "All Tarmac Trouble Tokens", types: ["total","tt"] },
  { name: "ASL Collectable", types: ["collectable","asl"] },
  { name: "1-Up in ASL", types: ["life","asl"] },
  { name: "Lily Pad Life (A&G)", types: ["life","ah"] },
  { name: "Lose a Life", types: ["event"] },
  { name: "Southwest Battery (BA)", types: ["battery","ba"] },
  { name: "Table Battery (AP)", types: ["battery","ap"] },
];
bingoList[4] = [
  { name: "AP Puzzle", types: ["puzzle","ap"] },
  { name: "All Al's Penthouse Tokens", types: ["total","ap"] },
  { name: "AP Boss", types: ["boss","ap"] },
  { name: "Tennis Life (ATB)", types: ["life","atb"] },
  { name: "Touch 5 Infoboxes", types: ["event","heybuzz"] },
  { name: "Southeast Battery (BA)", types: ["battery","ba"] },
  { name: "Bathroom Battery (AP)", types: ["battery","ap"] },
];
bingoList[5] = [
  { name: "AI Boss", types: ["boss","ai"] },
  { name: "CY Potato", types: ["upgrade","cy"] },
  { name: "All Construction Yard Tokens", types: ["total","cy"] },
  { name: "1-Up in AP", types: ["life","ap"] },
  { name: "Space Life (ASL)", types: ["life","asl"] },
  { name: "All Rex (Diet HeyBuzz%)", types: ["total","heybuzz"] },
  { name: "All 4 Bombs Away Batteries", types: ["battery","ba"] },
  { name: "Kitchen Battery (AP)", types: ["battery","ap"] },
];
bingoList[6] = [
  { name: "AH Potato", types: ["upgrade","ah"] },
  { name: "All Allies & Gullies Tokens", types: ["total","aag"] },
  { name: "ASL Boss", types: ["boss","asl"] },
  { name: "Hot Life (AP)", types: ["life","ap"] },
  { name: "Both RC Races (AH & AN)", types: ["race","ah","an"] },
  { name: "1 AH Collectable", types: ["collectable","ah"] },
  { name: "Dozer Battery (CY)", types: ["battery","cy"] },
  { name: "Rocket Battery (AI)", types: ["battery","ai"] },
];
bingoList[7] = [
  { name: "EH Collectable", types: ["collectable","eh"] },
  { name: "AN Boss", types: ["boss","an"] },
  { name: "AP Race", types: ["race","ap"] },
  { name: "1-Up in TT", types: ["life","tt"] },
  { name: "Terminal Life (TT)", types: ["life","tt"] },
  { name: "1 AN Collectable", types: ["collectable","an"] },
  { name: "Crane Battery (CY)", types: ["battery","cy"] },
  { name: "Stinky Pete's Battery (AI)", types: ["battery","ai"] },
];
bingoList[8] = [
  { name: "TT Boss", types: ["boss","tt"] },
  { name: "Slime Time", types: ["boss","st"] },
  { name: "EH Boss", types: ["boss","eh"] },
  { name: "1-Up in every level", types: ["life","challenge"] },
  { name: "AH Rex", types: ["heybuzz","ah"] },
  { name: "1 CY Collectable", types: ["collectable","cy"] },
  { name: "Building Battery (CY)", types: ["battery","cy"] },
  { name: "Blacksmith Battery (TT)", types: ["battery","tt"] },
];
bingoList[9] = [
  { name: "Evil Emperor Zurg", types: ["boss","eez"] },
  { name: "ASL Puzzle", types: ["puzzle","asl"] },
  { name: "AI Potato", types: ["upgrade","ai"] },
  { name: "AH Green Laser", types: ["laser","ah"] },
  { name: "AN Rex", types: ["heybuzz","an"] },
  { name: "1 A&G Collectable", types: ["collectable","aag"] },
  { name: "Shortcut Pillar Battery (CY)", types: ["battery","cy"] },
  { name: "Race Platform Battery (TT)", types: ["battery","tt"] },
];
bingoList[10] = [
  { name: "ATB Boss", types: ["boss","atb"] },
  { name: "All Elevator Hop Tokens", types: ["total","eh"] },
  { name: "TT Puzzle", types: ["puzzle","tt"] },
  { name: "AN Green Laser", types: ["laser","an"] },
  { name: "CY Rex", types: ["heybuzz","cy"] },
  { name: "1 ATB Collectable", types: ["collectable","atb"] },
  { name: "Roadwork Battery (A&G)", types: ["battery","aag"] },
  { name: "Terminal 3 Battery (TT)", types: ["battery","tt"] },
];
bingoList[11] = [
  { name: "AN Coin", types: ["coin","an"] },
  { name: "All Al's Space Land Tokens", types: ["total","asl"] },
  { name: "CY Collectable", types: ["collectable","cy"] },
  { name: "CY Green Laser", types: ["laser","cy"] },
  { name: "A&G Rex", types: ["heybuzz","aag"] },
  { name: "1 ASL Collectable", types: ["collectable","asl"] },
  { name: "Balcony Battery (A&G)", types: ["battery","aag"] },
  { name: "Terminal 8 Battery (TT)", types: ["battery","tt"] },
];
bingoList[12] = [
  { name: "AP Coin", types: ["coin","ap"] },
  { name: "AN Race", types: ["race","an"] },
  { name: "CY Puzzle", types: ["puzzle","cy"] },
  { name: "A&G Green Laser", types: ["laser","aag"] },
  { name: "ATB Rex", types: ["heybuzz","atb"] },
  { name: "1 AP Collectable", types: ["collectable","ap"] },
  { name: "Top Battery (A&G)", types: ["battery","aag"] },
  { name: "1 Collectable in Every Level", types: ["collectable","challenge"] },
];
bingoList[13] = [
  { name: "AH Puzzle", types: ["puzzle","ah"] },
  { name: "A&G Boss", types: ["boss","aag"] },
  { name: "A&G Coin", types: ["coin","aag"] },
  { name: "ATB Green Laser", types: ["laser","atb"] },
  { name: "ASL Rex", types: ["heybuzz","asl"] },
  { name: "1 AI Collectable", types: ["collectable","ai"] },
  { name: "Gumball Battery (ATB)", types: ["battery","atb"] },
];
bingoList[14] = [  
  { name: "CY Coin", types: ["coin","cy"] },
  { name: "EH Coin", types: ["coin","eh"] },
  { name: "All Andy's Neighborhood Tokens", types: ["total","an"] },
  { name: "ASL Green Laser", types: ["laser","asl"] },
  { name: "EH Rex", types: ["heybuzz","eh"] },
  { name: "1 TT Collectable", types: ["collectable","tt"] },
  { name: "Vent Battery (ATB)", types: ["battery","atb"] },
];
bingoList[15] = [
  { name: "AI Coin", types: ["coin","ai"] },
  { name: "AH Collectable", types: ["collectable","ah"] },
  { name: "AP Collectable", types: ["collectable","ap"] },
  { name: "EH Green Laser", types: ["laser","eh"] },
  { name: "AP Rex", types: ["heybuzz","ap"] },
  { name: "Wheezy Battery (AH)", types: ["battery","ah"] },
  { name: "Bike Battery (ATB)", types: ["battery","atb"] },
];
bingoList[16] = [
  { name: "EH Puzzle", types: ["puzzle","eh"] },
  { name: "ATB Coin", types: ["coin","atb"] },
  { name: "TT Coin", types: ["coin","tt"] },
  { name: "AP Green Laser", types: ["laser","ap"] },
  { name: "AI Rex", types: ["heybuzz","ai"] },
  { name: "Attic Battery (AH)", types: ["battery","ah"] },
  { name: "Boxpile Battery (ATB)", types: ["battery","atb"] },
];
bingoList[17] = [
  { name: "ATB Race", types: ["race","atb"] },
  { name: "CY Boss", types: ["boss","cy"] },
  { name: "EH Potato", types: ["upgrade","eh"] },
  { name: "AI Green Laser", types: ["laser","ai"] },
  { name: "TT Rex", types: ["heybuzz","tt"] },
  { name: "Stair Battery (AH)", types: ["battery","ah"] },
  { name: "Dino Battery (ATB)", types: ["battery","atb"] },
];
bingoList[18] = [
  { name: "Bombs Away!", types: ["boss","ba"] },
  { name: "ASL Coin", types: ["coin","asl"] },
  { name: "A&G Collectable", types: ["collectable","aag"] },
  { name: "TT Green Laser", types: ["laser","tt"] },
  { name: "All Puzzle Tokens", types: ["puzzle","challenge"] },
  { name: "TV Battery (AH)", types: ["battery","ah"] },
  { name: "UFO Battery (ASL)", types: ["battery","asl"] },
];
bingoList[19] = [
  { name: "ATB Puzzle", types: ["puzzle","atb"] },
  { name: "Prospector Showdown", types: ["boss","ps"] },
  { name: "ATB Collectable", types: ["collectable","atb"] },
  { name: "Slime Time Green Laser", types: ["laser","st"] },
  { name: "All Race Tokens", types: ["race","challenge"] },
  { name: "Trash Battery (AH)", types: ["battery","ah"] },
  { name: "Buggy Battery (ASL)", types: ["battery","asl"] },
];
bingoList[20] = [
  { name: "Toy Barn Encounter", types: ["boss","tbe"] },
  { name: "EH Race", types: ["race","eh"] },
  { name: "A&G Puzzle", types: ["puzzle","aag"] },
  { name: "Crib Life (AH)", types: ["life","ah"] },
  { name: "All Coin Tokens", types: ["coin","challenge"] },
  { name: "Box Battery (AH)", types: ["battery","ah"] },
  { name: "Arcade Battery (ASL)", types: ["battery","asl"] },
];
bingoList[21] = [
  { name: "All Airport Infiltration Tokens", types: ["total","ai"] },
  { name: "A&G Race", types: ["race","aag"] },
  { name: "All Potatos", types: ["upgrade","challenge"] },
  { name: "Shelf Life (AH)", types: ["life","ah"] },
  { name: "All Collectable Tokens", types: ["collectable","challenge"] },
  { name: "Yard Battery (AN)", types: ["battery","an"] },
  { name: "Small Crater Battery (TBE)", types: ["battery","tbe"] },
];
bingoList[22] = [
  { name: "TT Collectable", types: ["collectable","tt"] },
  { name: "AH Boss", types: ["boss","ah"] },
  { name: "All Bosses", types: ["boss","challenge"] },
  { name: "Light Life (AH)", types: ["life","ah"] },
  { name: "Inflate Rubber Duck (AN)", types: ["an","event"] },
  { name: "Wash Battery (AN)", types: ["battery","an"] },
  { name: "Closest Battery (TBE)", types: ["battery","tbe"] },
  { name: "Helicopter Battery (TT)", types: ["battery","tt"] },
];
bingoList[23] = [
  { name: "AN Collectable", types: ["collectable","an"] },
  { name: "All Andy's House Tokens", types: ["total","ah"] },
  { name: "1-Up in AH", types: ["life","ah"] },
  { name: "Swing Life (AN)", types: ["life","ah"] },
  { name: "Disable All Cannons (AP)", types: ["ap","event"] },
  { name: "Pillar Battery (AN)", types: ["battery","an"] },
  { name: "Farthest Battery (TBE)", types: ["battery","tbe"] },
];
bingoList[24] = [
  { name: "ASL Race", types: ["race","asl"] },
  { name: "AI Race", types: ["race","ai"] },
  { name: "1-Up in AN", types: ["life","an"] },
  { name: "Dozer Life (CY)", types: ["life","cy"] },
  { name: "Jump into Water", types: ["event"] },
  { name: "Swing Battery (AN)", types: ["battery","an"] },
  { name: "Rightmost Battery (TBE)", types: ["battery","tbe"] },
  { name: "Luggage Battery (AI)", types: ["battery","ai"] },
];
bingoList[25] = [
  { name: "AN Puzzle", types: ["puzzle","an"] },
  { name: "AI Collectable", types: ["collectable","ai"] },
  { name: "1-Up in CY", types: ["life","cy"] },
  { name: "Cabin Life (CY)", types: ["life","cy"] },
  { name: "Jump into Cement", types: ["event"] },
  { name: "Tree Battery (AN)", types: ["battery","an"] },
  { name: "All 4 Batteries in Toy Barn Encounter", types: ["battery","tbe"] },
];