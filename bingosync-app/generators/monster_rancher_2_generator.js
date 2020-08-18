bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
 {name: "Feed Monster 12 Potatoes", types: ["food"] },
 {name: "Unlock FIMBA Monsters", types: ["quick","unlock"] },
 {name: "Move Misses At 95% Or More", types: ["fightrng"] },
 {name: "Two Gemini Pots In Inventory", types: ["battles","items"]},
 {name: "+600 In Two Stats", types: ["stats"] },
];
bingoList[2] = [
 {name: "Go Bankrupt", types: ["money"] },
 {name: "Monster Dies At < 1 Year Old", types: ["death","quick"] },
 {name: "1 Hit KO Opponent", types: ["fight"] },
 {name: "Unlock 15 Monster Cards", types: ["cards","combine"]},
 {name: "Defeat 2 Different Phoenixs", types: ["battles"] },
];
bingoList[3] = [
 {name: "Fight King Ape", types: ["long"] },
 {name: "Win A Tournament With AI Control Only", types: ["battles"] },
 {name: "Move Hits At 10% Or Less", types: ["fightrng"] },
 {name: "Fill Inventory With Smoked Snakes", types: ["shop","items"]},
 {name: "500+ Life", types: ["stats"] },
];
bingoList[4] = [
 {name: "Discard Pure Platina", types: ["items"] },
 {name: "Rewarded 3000G On 1 Errantry", types: ["errantry"] },
 {name: "Unlock 10 Monster Cards", types: ["cards","combine"] },
 {name: "2 Crits Back To Back", types: ["fightrng"] },
 {name: "Defeat 3 Different Hares", types: ["battles"] },
];
bingoList[5] = [
 {name: "Win 8 Tournaments", types: ["battles"] },
 {name: "Use 3 Drugs On 1 Monster", types: ["drugs"] },
 {name: "Finish 1 Tech Chain", types: ["techs","errantry"] },
 {name: "Activate Ease", types: ["fightrng","specials"] },
 {name: "Boots And Big Footprint In Inventory", types: ["items"] },
];
bingoList[6] = [
 {name: "KO Oakleyman", types: ["fight"] },
 {name: "Spend Over 10000G At The Shop In 1 Trip", types: ["shop"] },
 {name: "Strong Glue", types: ["expedition"] },
 {name: "5 Different Disc Chips In Inventory", types: ["battles","items"] },
 {name: "KO Opponent In 4 Seconds Or Less", types: ["fight"] },
];
bingoList[7] = [
 {name: "Find Kato Disc Chips On Expedition", types: ["items","expedition"] },
 {name: "Unlock Dragon", types: ["unlock","long"] },
 {name: "Truancy", types: ["quick","ranch"] },
 {name: "Wins/Losses Mirrored On Grid", types: ["rng","battles"] },
 {name: "999 Damage", types: ["fight"] },
];
bingoList[8] = [
 {name: "Find Two Pure Gold On 1 Expedition", types: ["expedition"] },
 {name: "Activate Fury", types: ["fightrng","specials"] },
 {name: "Lose A Week Of Life With A Banana", types: ["items"] },
 {name: "Monster Card Ending In 1", types: ["cards"] },
 {name: "Win 3 F-Rank Tournaments", types: ["battles"] },
];
bingoList[9] = [
 {name: "Monster Flattened In Battle", types: ["fight"] },
 {name: "2 Greats In A Row", types: ["rng","ranch"] },
 {name: "2 Crab’s Claws In Inventory", types: ["battles","items"] },
 {name: "Have 1 Tech In Each Slot", types: ["errantry"] },
 {name: "Feed Monster 12 Tablets", types: ["food"] },
];
bingoList[10] = [
 {name: "Beat Your Monster In Sumo", types: ["play","ranch"] },
 {name: "Get 5 Diamond Marks", types: ["food"] },
 {name: "Grit And Win", types: ["fightrng","specials"] },
 {name: "Two Statues In Inventory", types: ["battles","items"]},
 {name: "8 Monsters Spell Trainer Name In Freezer", types: ["freezer"] },
];
bingoList[11] = [
 {name: "Unlock Ghost", types: ["unlock","death","long"] },
 {name: "Refuse 1 Ranch Upgrade", types: ["ranch"] },
 {name: "0 to 99 Guts", types: ["fight"] },
 {name: "Defeat 3 Different Mocchis", types: ["battles"] },
 {name: "Zuum Disc Chips And Dino Tail In Inventory", types: ["items"] },
];
bingoList[12] = [
 {name: "Mock Seeds", types: ["long","shop","unlock"] },
 {name: "Use A Move That Costs 50 Guts Or More", types: ["fight"] },
 {name: "Defeat 4 Different Zuums", types: ["battles"] },
 {name: "Run Away", types: ["quick","ranch"] },
 {name: "Plant Chips And Flower In Inventory", types: ["items"] },
];
bingoList[13] = [
 {name: "Commit Foolery 3 Times In One Battle", types: ["fightrng"] },
 {name: "Unlock One Move From Each Errantry", types: ["errantry"] },
 {name: "5 Or More Funeral Attendees", types: ["death"] },
 {name: "Commit Foolery 6 Times In One Battle", types: ["fightrng"] },
 {name: "Defeat 3 Different Suezos", types: ["battles"] },
];
bingoList[14] = [
 {name: "Unlock Joker", types: ["unlock","expedition"] },
 {name: "Failure 3 Times In A Row", types: ["ranch","quick"] },
 {name: "1 Damage", types: ["fight"] },
 {name: "3 \"I Regret…\"s At The Shrine", types: ["rng"] },
 {name: "6 \"I Regret…\"s At The Shrine", types: ["rng"] },
];
bingoList[15] = [
 {name: "Beat Your Monster In Mudball Fight", types: ["play","ranch"] },
 {name: "50000G", types: ["money"] },
 {name: "Unlock Centaur", types: ["unlock"] },
 {name: "Crit 1 Damage", types: ["fightrng"] },
 {name: "0 Funeral Attendees", types: ["quick","death"] },
];
bingoList[16] = [
 {name: "100 Fame", types: ["battles","stats"] },
 {name: "Scold Monster For Cheating", types: ["quick","ranch"] },
 {name: "Rewarded Money On Expedition", types: ["expedition"] },
 {name: "Wither For 60+ Guts", types: ["techs","fight"] },
 {name: "Monster Gets +1 On Two Different Drills", types: ["combination"] },
];
bingoList[17] = [
 {name: "Activate Fight", types: ["fightrng","specials"] },
 {name: "Spartan", types: ["stats","ranch"] },
 {name: "Don’t Visit Aunt Verde For 1 Year", types: ["quick","shop"] },
 {name: "Find Phoenix Feather On First Expedition", types: ["expedition"] },
 {name: "Monster Gets +1 On Errantry", types: ["combination"] },
];
bingoList[18] = [
 {name: "Activate Unity", types: ["specials","fightrng"] },
 {name: "Unlock 3 Enemy Cards", types: ["cards"] },
 {name: "Beat Your Monster In Sparring", types: ["play","ranch"] },
 {name: "\"It’s Not A Serious Injury\"", types: ["harmful"] },
 {name: "Sell Monster For At Least 50G", types: ["quick","market"] },
];
bingoList[19] = [
 {name: "Breeder Rank 7", types: ["long","battles"] },
 {name: "Activate Will", types: ["fightrng","specials"] },
 {name: "Refuse Praise For Monster Giving Item", types: ["quick","items","ranch"] },
 {name: "Don’t See Errow Until 1002", types: ["errantry"] },
 {name: "Sell Monster For At Least 1000G", types: ["long","market"] },
];
bingoList[20] = [
 {name: "Win A Fight Using Only Recovery Moves", types: ["fight","techs"] },
 {name: "Try To Use Clay Doll As Combining Item", types: ["items","combine"] },
 {name: "Every Stat Ends With 1", types: ["stats"] },
 {name: "Defeat A Jill", types: ["battles"] },
 {name: "Bad To Good Nature", types: ["ranch"] },
];
bingoList[21] = [
 {name: "Power And Win", types: ["fightrng","specials"] },
 {name: "Unlock Durahan", types: ["unlock","expedition"] },
 {name: "Never See Kavaro", types: ["expedition"] },
 {name: "Dig Up Hotsprings", types: ["monspec","ranch"] },
 {name: "Search Elephant Statue", types: ["expedition"] },
];
bingoList[22] = [
 {name: "Monster(s) Give 3 Different Items", types: ["rng","items"] },
 {name: "Beat Your Monster In Snowball Fight", types: ["play","ranch"] },
 {name: "Activate Guard", types: ["fightrng","specials"] },
 {name: "Unlock 20 Monster Cards", types: ["cards","combine"] },
 {name: "Search Jill Statue", types: ["expedition"] },
];
bingoList[23] = [
 {name: "Win More Than 2000G At IMa/FIMBA", types: ["battles"] },
 {name: "Golem Or Baku On Ranch", types: ["monspec","ranch"] },
 {name: "800+ Intelligence", types: ["stats"] },
 {name: "Get KO’d By Tiravail", types: ["fight"] },
 {name: "Give Monster 1 Of Each Shop Item Before 1001", types: ["items","shop"] },
];
bingoList[24] = [
 {name: "Fill Freezer With Different Monsters", types: ["combine"] },
 {name: "800+ Speed", types: ["stats"] },
 {name: "KO Waranmo", types: ["fight"] },
 {name: "Colt Discreetly Throws Away Item", types: ["items"] },
 {name: "Win By Less Than 1%", types: ["fightrng"] },
];
bingoList[25] = [
 {name: "800+ Power", types: ["stats"] },
 {name: "Feed Monster 12 Milk", types: ["food"] },
 {name: "Unlock Phoenix", types: ["unlock","expedition"] },
 {name: "Kitty’s Bang Doesn’t KO", types: ["fight"] },
 {name: "Naga Or Monol On Ranch", types: ["ranch","monspec"] },
];
