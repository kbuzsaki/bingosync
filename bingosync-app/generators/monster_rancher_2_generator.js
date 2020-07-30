bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
 {name: "Feed Monster 12 Potatoes", types: ["food"] },
 {name: "Unlock FIMBA Monsters", types: ["quick","unlock"] },
 {name: "Move Misses At 95% Or More", types: ["battles","rng"] },
 {name: "Two Gemini Pots In Inventory", types: ["battles","items"]},
];
bingoList[2] = [
 {name: "Go Bankrupt", types: ["money","quick"] },
 {name: "Monster Dies At < 1 Year Old", types: ["death","quick"] },
 {name: "1 Hit KO Opponent", types: ["rng","battles"] },
 {name: "Unlock 15 Monster Cards", types: ["cards","combine"]},
];
bingoList[3] = [
 {name: "Fight King Ape", types: ["long","errantry"] },
 {name: "Win A Tournament With AI Control Only", types: ["battles"] },
 {name: "Discard Pure Platina", types: ["items"] },
 {name: "Fill Inventory With Smoked Snakes", types: ["shop","items"]},
];
bingoList[4] = [
 {name: "Move Hits At 10% Or Less", types: ["battles","rng"] },
 {name: "Rewarded 3000G On 1 Errantry", types: ["errantry"] },
 {name: "Unlock 10 Monster Cards", types: ["cards","combine"] },
 {name: "2 Crits Back To Back", types: ["battles","rng"] },
];
bingoList[5] = [
 {name: "Win 8 Tournaments", types: ["battles"] },
 {name: "Use 3 Drugs On 1 Monster", types: ["drugs"] },
 {name: "Finish 1 Tech Chain", types: ["techs","errantry"] },
 {name: "Defeat 3 Different Mocchis", types: ["battles"] },
];
bingoList[6] = [
 {name: "KO Oakleyman", types: ["battles"] },
 {name: "Spend Over 10000G At The Shop In 1 Trip", types: ["shop"] },
 {name: "Strong Glue", types: ["expedition"] },
 {name: "Defeat 3 Different Suezos", types: ["battles"] },
];
bingoList[7] = [
 {name: "Find Kato Disc Chips On Expedition", types: ["items","expedition"] },
 {name: "Unlock Dragon", types: ["unlock","long"] },
 {name: "Activate Ease", types: ["battles","specials"] },
 {name: "Have 1 Tech In Each Slot", types: ["battles"] },
];
bingoList[8] = [
 {name: "Find Two Pure Gold On 1 Expedition", types: ["expedition"] },
 {name: "Activate Fury", types: ["battles","specials"] },
 {name: "Lose A Week Of Life With A Banana", types: ["items"] },
 {name: "Monster Card Ending In 1", types: ["cards"] },
];
bingoList[9] = [
 {name: "Monster Flattened In Battle", types: ["battles"] },
 {name: "2 Greats In A Row", types: ["rng","ranch"] },
 {name: "2 Crab’s Claws In Inventory", types: ["battles","items"] },
 {name: "Two Statues In Inventory", types: ["battles","items"]},
];
bingoList[10] = [
 {name: "Beat Your Monster In Sumo", types: ["play","ranch"] },
 {name: "Run Away", types: ["ranch"] },
 {name: "Grit And Win", types: ["rng","battles","specials"] },
 {name: "0 to 99 Guts", types: ["battles"] },
];
bingoList[11] = [
 {name: "Unlock Ghost", types: ["unlock","death","long"] },
 {name: "Refuse 1 Ranch Upgrade", types: ["ranch"] },
 {name: "Wins/Losses Mirrored On Grid", types: ["rng","battles"] },
 {name: "Truancy", types: ["quick","ranch"] },
];
bingoList[12] = [
 {name: "Mock Seeds", types: ["long","shop","unlock"] },
 {name: "Get 5 Diamond Marks", types: ["food"] },
 {name: "Use A Move That Costs 50 Guts Or More", types: ["battles"] },
 {name: "Defeat 4 Different Zuums", types: ["battles"] },
];
bingoList[13] = [
 {name: "Commit Foolery 3 Times In One Battle", types: ["battles"] },
 {name: "Unlock One Move From Each Errantry", types: ["errantry"] },
 {name: "5 Or More Funeral Attendees", types: ["death"] },
 {name: "Commit Foolery 6 Times In One Battle", types: ["battles"] },
];
bingoList[14] = [
 {name: "0 Funeral Attendees", types: ["quick","death"] },
 {name: "Failure 3 Times In A Row", types: ["ranch","quick"] },
 {name: "Beat Your Monster In Mudball Fight", types: ["play","ranch"] },
 {name: "1 Damage", types: ["quick","battles"] },
];
bingoList[15] = [
 {name: "Unlock Joker", types: ["unlock","expedition"] },
 {name: "50000G", types: ["money"] },
 {name: "Wither For 60+ Guts", types: ["techs","battles"] },
 {name: "Crit 1 Damage", types: ["quick","battles"] },
];
bingoList[16] = [
 {name: "100 Fame", types: ["battles","stats"] },
 {name: "Don’t Visit Aunt Verde For 1 Year", types: ["quick","shop"] },
 {name: "Unlock Centaur", types: ["unlock"] },
 {name: "Rewarded Money On Expedition", types: ["expedition"] },
];
bingoList[17] = [
 {name: "Activate Fight", types: ["battles","specials"] },
 {name: "Spartan", types: ["stats","ranch"] },
 {name: "Scold Monster For Cheating", types: ["quick","ranch"] },
 {name: "Activate Unity", types: ["specials","battles"] },
];
bingoList[18] = [
 {name: "Find Phoenix Feather On First Expedition", types: ["expedition"] },
 {name: "Unlock 3 Enemy Cards", types: ["cards"] },
 {name: "Beat Your Monster In Sparring", types: ["play","ranch"] },
 {name: "\"It’s Not A Serious Injury\"", types: ["ranch"] },
];
bingoList[19] = [
 {name: "Breeder Rank 7", types: ["long"] },
 {name: "Activate Will", types: ["battles","specials"] },
 {name: "Refuse Praise For Monster Giving Item", types: ["quick","items","ranch"] },
 {name: "Errow Smiles", types: ["errantry"] },
];
bingoList[20] = [
 {name: "Win A Fight Using Only Recovery Moves", types: ["battles","techs"] },
 {name: "Try To Use Clay Doll As Combining Item", types: ["items","combine"] },
 {name: "Every Stat Ends With 1", types: ["stats"] },
 {name: "Defeat A Jill", types: ["battles"] },
];
bingoList[21] = [
 {name: "Power And Win", types: ["rng","battles","specials"] },
 {name: "Unlock Durahan", types: ["unlock","expedition"] },
 {name: "Never See Kavaro", types: ["expedition"] },
 {name: "Monster(s) Give 3 Different Items", types: ["rng","items"] },
];
bingoList[22] = [
 {name: "Dig Up Hotsprings", types: ["monspec","ranch"] },
 {name: "Beat Your Monster In Snowball Fight", types: ["play","ranch"] },
 {name: "Activate Guard", types: ["battles","specials"] },
 {name: "KO Waranmo", types: ["battles"] },
];
bingoList[23] = [
 {name: "IMa/FIMBA Sweep", types: ["battles"] },
 {name: "Golem Or Baku On Ranch", types: ["monspec","ranch"] },
 {name: "Feed Monster 12 Milk", types: ["food"] },
 {name: "Get KO’d By Tiravail", types: ["battles"] },
];
bingoList[24] = [
 {name: "Fill Freezer With Different Monsters", types: ["combine"] },
 {name: "800+ Speed", types: ["stats"] },
 {name: "Unlock 20 Monster Cards", types: ["cards","combine"] },
 {name: "Colt Discreetly Throws Away Item", types: ["items"] },
];
bingoList[25] = [
 {name: "800+ Power", types: ["stats"] },
 {name: "800+ Intelligence", types: ["stats"] },
 {name: "Unlock Phoenix", types: ["unlock","expedition"] },
 {name: "Kitty’s Bang Doesn't KO", types: ["battles"] },
];
