// 102 Dalmatians: Puppies to the rescue Bingo
// Version 5.0
// By Adam TK Gladiator

bingoGenerator = require("./generators/generator_bases/srl_generator_v8.js");
var bingoList = [];
bingoList[1] = [
{"name": "100% Regent's Park" , types: ["rp"] },
{"name": "100% Toy Store" , types: ["ts"] },
{"name": "100% Piccadilly" , types: ["p"] },
{"name": "100% BigBen" , types: ["bb"] },
{"name": "100% Royal Museum" , types: ["rm"] },
{"name": "100% The Underground" , types: ["u"] },
{"name": "100% Carnival" , types: ["c"] },
{"name": "100% Lumber Mill" , types: ["lm"] },
{"name": "100% Countryside" , types: ["cs"] },
{"name": "100% Barnyard" , types: ["by"] },
{"name": "100% Ice Festival" , types: ["if"] },
{"name": "100% Ancient Castle" , types: ["ac"] },
{"name": "100% Spooky Forest" , types: ["sf"] },
{"name": "100% Hedge Maze" , types: ["hm"] },
{"name": "100% De Vil's Manor" , types: ["dvm"]  },
{"name": "100% Toy Factory" , types: ["tf"]  }
];
bingoList[2] = [
{"name": "All bones in Regent's Park" , types: ["rp","bones"] },
{"name": "All bones in Piccadilly" , types: ["p","bones"] },
{"name": "All bones in Carnival" , types: ["c","bones"] },
{"name": "All bones in Countryside " , types: ["cs","bones"] },
{"name": "All bones in Spooky Forest" , types: ["sf","bones"] }
];
bingoList[3] = [
{"name": "70 bones in Toy Store" , types: ["ts","bones"] },
{"name": "70 bones in BigBen" , types: ["bb","bones"] },
{"name": "70 bones in Royal Museum" , types: ["rm","bones"] },
{"name": "70 bones in The Underground" , types: ["u","bones"] },
{"name": "70 bones in Lumber Mill" , types: ["lm","bones"] },
{"name": "70 bones in Barnyard" , types: ["by","bones"] },
{"name": "70 bones in Ice Festival" , types: ["if","bones"] },
{"name": "70 bones in Ancient Castle" , types: ["ac","bones"] },
{"name": "70 bones in Hedge Maze" , types: ["hm","bones"] },
{"name": "70 bones in De Vil's Manor" , types: ["dvm","bones"] },
{"name": "70 bones in Toy Factory" , types: ["tf","bones"] }
];
bingoList[4] = [
{"name": "All puppies in Regent's Park" , types: ["rp"] },
{"name": "All puppies in Toy Store" , types: ["ts"] },
{"name": "All puppies in Piccadilly" , types: ["p"] },
{"name": "All puppies in BigBen" , types: ["bb"] },
{"name": "All puppies in Royal Museum" , types: ["rm"] },
{"name": "All puppies in The Underground" , types: ["u"] },
{"name": "All puppies in Carnival" , types: ["c"] },
{"name": "All puppies in Lumber Mill" , types: ["lm"] }
];
bingoList[5] = [
{"name": "All puppies in Countryside" , types: ["cs"] },
{"name": "All puppies in Barnyard" , types: ["by"] },
{"name": "All puppies in Ice Festival" , types: ["if"] },
{"name": "All puppies in Ancient Castle" , types: ["ac"] },
{"name": "All puppies in Spooky Forest" , types: ["sf"] },
{"name": "All puppies in Hedge Maze" , types: ["hm"] },
{"name": "All puppies in De Vil's Manor" , types: ["dvm"] },
{"name": "All puppies in Toy Factory" , types: ["tf"] },
{"name": "All puppies in 3 levels " , types: ["3lvl"] }
];
bingoList[6] = [
{"name": "7+ puppies in Regent's Park & Spooky Forest" , types: ["rp","sf"] },
{"name": "7+ puppies in Toy Store & Toy Factory" , types: ["ts","tf"] },
{"name": "7+ puppies in Piccadilly & Countryside" , types: ["p","cs"] },
{"name": "7+ puppies in BigBen & De Vil's Manor" , types: ["bb","dvm"] },
{"name": "7+ puppies in Royal Museum & Ancient Castle" , types: ["rm","ac"] },
{"name": "7+ puppies in The Underground & Barnyard" , types: ["u","by"] },
{"name": "7+ puppies in Carnival & Ice Festival" , types: ["c","if"] },
{"name": "7+ puppies in Lumber Mill & Hedge Maze" , types: ["lm","hm"] }
];
bingoList[7] = [
{"name": "120 combined bones in Regent's Park & Toy Factory" , types: ["rp","tf","bones"] },
{"name": "120 combined bones in Toy Store & Spooky Forest" , types: ["ts","sf","bones"] },
{"name": "120 combined bones in Piccadilly & De Vil's Manor" , types: ["p","dvm","bones"] },
{"name": "120 combined bones in BigBen & Countryside" , types: ["bb","cs","bones"] },
{"name": "120 combined bones in Royal Museum & Barnyard" , types: ["rm","by","bones"] },
{"name": "120 combined bones in The Underground & Ancient Castle", types: ["u","ac","bones"] },
{"name": "120 combined bones in Carnival & Hedge Maze" , types: ["c","hm","bones"] },
{"name": "120 combined bones in Lumber Mill & Ice Festival" , types: ["lm","if","bones"] }
];
bingoList[8] = [
{"name": "50 bones in both Regent's Park & De Vil's Manor" , types: ["bones"] },
{"name": "50 bones in both Toy Store & Countryside" , types: ["bones"] },
{"name": "50 bones in both Piccadilly & Toy Factory" , types: ["bones"] },
{"name": "50 bones in both BigBen & Spooky Forest" , types: ["bones"] },
{"name": "50 bones in both Royal Museum & Hedge Maze" , types: ["bones"] },
{"name": "50 bones in both The Underground & Ice Festival" , types: ["bones"] },
{"name": "50 bones in both Carnival & Barnyard" , types: ["bones"] },
{"name": "50 bones in both Lumber Mill & Ancient Castle" , types: ["bones"] }
];
bingoList[9] = [
{"name": "ELP Regent's park & Royal museum" , types: ["elp"] },
{"name": "ELP Spooky forest & Ancient castle" , types: ["elp"] },
{"name": "ELP Toy store & The Underground" , types: ["elp"] },
{"name": "ELP Toy factory & Countryside" , types: ["elp"] },
{"name": "ELP Bigben & Barnyard" , types: ["elp"] },
{"name": "ELP Piccadilly & Carnival" , types: ["elp"] },
{"name": "ELP De vil's manor & Lumber mill" , types: ["elp"] },
{"name": "ELP Ice festival & Hedge maze" , types: ["elp"] }
];
bingoList[10] = [
{"name": "ELP Regent's park & The Underground" , types: ["elp"] },
{"name": "ELP Spooky forest & Barnyard" , types: ["elp"] },
{"name": "ELP Toy store & Royal museum" , types: ["elp"] },
{"name": "ELP Countryside & Ancient castle" , types: ["elp"] },
{"name": "ELP Toy factory & Lumber mill" , types: ["elp"] },
{"name": "ELP Bigben & Carnival " , types: ["elp"] },
{"name": "ELP Piccadilly & Hedge maze" , types: ["elp"] },
{"name": "ELP De vil's manor & Ice festival " , types: ["elp"]  }
] ;
bingoList[11] = [
{"name": "ELP Regent's park & Ancient castle" , types: ["elp"] },
{"name": "ELP Spooky forest & Carnival" , types: ["elp"] },
{"name": "ELP Toy store & Lumber mill" , types: ["elp"] },
{"name": "ELP Toy factory & The Underground" , types: ["elp"] },
{"name": "ELP Countryside & Barnyard" , types: ["elp"] },
{"name": "ELP BigBen & Royal Museum" , types: ["elp"] },
{"name": "ELP De Vil's Manor & Hedge Maze" , types: ["elp"] },
{"name": "ELP Piccadilly & Ice Festival" , types: ["elp"] }
];
bingoList[12] = [
{"name": "ELP Regent's Park & Countryside" , types: ["elp"] },
{"name": "ELP Toy Store & De vil's Manor" , types: ["elp"] },
{"name": "ELP Piccadilly & Spooky Forest" , types: ["elp"] },
{"name": "ELP BigBen & Toy Factory" , types: ["elp"] },
{"name": "ELP Royal Museum & Ice Festival" , types: ["elp"] },
{"name": "ELP The Underground & Hedge Maze" , types: ["elp"] },
{"name": "ELP Carnival & Ancient Castle" , types: ["elp"] },
{"name": "ELP Lumber Mill & and Barnyard" , types: ["elp"] }
];
bingoList[13] = [
{"name": "ELP 7 levels" , types: ["elp"] },
{"name": "ELP 2 levels without collecting anything" , types: ["elp"] },
{"name": "ELP the same level with both Oddball and Domino" , types: ["elp"] },
{"name": "ELP 2 levels after getting 10 combined puppies from them" , types: ["elp"] }
];
bingoList[14] = [
{"name": "1 puppy from Regent's Park, Barnyard, Toy Store & Ice Festival" , types: ["puppy"] },
{"name": "1 puppy from Piccadilly, Ancient Castle & BigBen" , types: ["puppy"] },
{"name": "1 puppy from Hedge Maze, Toy Factory & De Vil's Manor" , types: ["puppy"] },
{"name": "1 puppy from The Underground, Lumber Mill & Carnival" , types: ["puppy"] },
{"name": "1 puppy from Spooky Forest, Royal Museum & Country Side" , types: ["puppy"] }
];
bingoList[15] = [
{"name": "15 combined puppies from Regent's Park, Toy Store, Piccadilly & BigBen" , types: ["puppy"] },
{"name": "15 combined puppies from Royal Museum, The Underground, Carnival & Lumber Mill" , types: ["puppy"] },
{"name": "15 combined puppies from Countryside, Barnyard, Ice Festival & Ancient Castle" , types: ["puppy"] },
{"name": "15 combined puppies from Spooky Forest, Hedge Maze, De Vil's Manor and Toy Factory" , types: ["puppy"] }
];
bingoList[16] = [
{"name": "Toy Store bubble puppy & Toy Factory on top of Hydraulic Press puppy" , types: ["puppy"] },
{"name": "Toy Store pinball puppy & De vil's Manor bed room puppy" , types: ["puppy"] },
{"name": "Toy Store eol area puppy & Hedge Maze eol puppy " , types: ["puppy"] },
{"name": "Toy Store rocket puppy & Spooky Forest underground puppy" , types: ["puppy"] },
{"name": "Piccadilly puzzle puppy & Ice Festival eol puppy" , types: ["puppy"] },
{"name": "Piccadilly manhole puppy & Barnyard silo puppy" , types: ["puppy"] },
{"name": "Regent's Park eol puppy & Countryside tree puppy" , types: ["puppy"] },
{"name": "BigBen elevator puppy & Carnival blue ticket area puppy" , types: ["puppy"] }
];
bingoList[17] = [
{"name": "Royal Museum jurassic area puppy & Barnyard toilet puppy" , types: ["puppy"] },
{"name": "Royal Museum eol area puppy & Hedge Maze room puppy" , types: ["puppy"] },
{"name": "Royal Museum inside pyramid puppy & Toy Factory magnetic room puppy" , types: ["puppy"] },
{"name": "Royal Museum outside pyramid puppy & Countryside cave puppy" , types: ["puppy"] },
{"name": "Royal Museum kitchen puppy & Lumber Mill eol puppy" , types: ["puppy"] },
{"name": "Underground eol puppy & Carnival Magic Wagon room 3 puppy" , types: ["puppy"] },
{"name": "Carnival red ticket area puppy & De Vil's Manor paintings puppy" , types: ["puppy"] },
{"name": "Ice Festival ice castle puppy & Carnival Magic Wagon room 1 puppy " , types: ["puppy"] },
{"name": "Ancient Castle behind doors puppy & Carnival green ticket area puppy" , types: ["puppy"] }
];
bingoList[18] = [
{"name": "10 puppies" , types: ["misc"] },
{"name": "20 puppies" , types: ["misc"] },
{"name": "30 puppies" , types: ["misc"] },
{"name": "200 bones" , types: ["misc"] },
{"name": "300 bones" , types: ["misc"] }
];
bingoList[19] = [
{"name": "Cruella I" , types: ["h"] },
{"name": "Cruella II" , types: ["h"] },
{"name": "Cruella III" , types: ["h"] },
{"name": "Cruella IV" , types: ["h"] },
{"name": "Defeat every Boss" , types: ["h"] }
];
bingoList[20] = [
{"name": "Finish a game of minigolf" , types: ["mg"] },
{"name": "Finish a game of dig dog" , types: ["mg"] },
{"name": "Finish a game of tiltmaze" , types: ["mg"] },
{"name": "Finish a game of checkers" , types: ["mg"] },
{"name": "Finish a game of ice race" , types: ["mg"] }
];
bingoList[21] = [
{"name": "Destroy 11 devils" , types: ["enemies"] },
{"name": "Destroy 6 planes" , types: ["enemies"] },
{"name": "Destroy 4 boats" , types: ["enemies"] },
{"name": "Destroy 9 dozers" , types: ["enemies"] },
{"name": "Destroy 9 helicopter" , types: ["enemies"] },
{"name": "Destroy 22 soldiers" , types: ["enemies"] },
{"name": "Destroy 5 penguins" , types: ["enemies"] },
{"name": "Destroy 4 snowmans" , types: ["enemies"] },
{"name": "Destroy 4 crocodiles" , types: ["enemies"] },
{"name": "Destroy 8 teddy bears" , types: ["enemies"] },
{"name": "Destroy 5 knights" , types: ["enemies"] },
{"name": "Destroy 7 monkeys" , types: ["enemies"] },
{"name": "Destroy 9 zepplins" , types: ["enemies"] },
{"name": "Destroy 5 toasters" , types: ["enemies"] },
{"name": "Destroy 7 punshing bags" , types: ["enemies"] },
{"name": "Destroy 6 jack in box" , types: ["enemies"] },
{"name": "Destroy 5 cruella cars" , types: ["enemies"] },
{"name": "Destroy 5 bomb cars" , types: ["enemies"] },
{"name": "Destroy 6 clowns" , types: ["enemies"] },
{"name": "Destroy 13 different enemies' types" , types: ["misc"] },
{"name": "Destroy 25 enemies" , types: ["misc"] }
];
bingoList[22] = [
{"name": "Talk to Tibbs in 2 different levels" , types: ["misc"] },
{"name": "Talk to Fidget in 2 different levels" , types: ["misc"] },
{"name": "Talk to Chester in 2 different levels" , types: ["misc"] },
{"name": "Talk to Yvonne in 2 different levels" , types: ["misc"] },
{"name": "Talk to Fluffy in 2 different levels" , types: ["misc"] },
{"name": "Talk to Shelby twice" , types: ["misc"] },
{"name": "Talk to Manny in 2 different levels" , types: ["misc"] },
{"name": "Do 2 Priscilla's tasks " , types: ["misc"] },
{"name": "Talk to Crystal in 2 different levels" , types: ["misc"] },
{"name": "Talk to an NPC in every level" , types: ["misc"] },
{"name": "Talk to 5 different NPCs" , types: ["misc"] },
{"name": "Bark 3 times at 7 NPCs" , types: ["misc"] },
{"name": "Talk to every NPC at least once" , types: ["misc"] }
];
bingoList[23] = [
{"name": "Defeat Horace 3 times" , types: ["h"] },
{"name": "Defeat Jasper 3 times" , types: ["h"] },
{"name": "Defeat Le Pelt twice" , types: ["h"] },
{"name": "Defeat every human at least once (including Cruella)" , types: ["h"] }
];
bingoList[24] = [
{"name": "Use 10 switches" , types: ["misc"] },
{"name": "Use 3 bubble machines and 2 canons" , types: ["misc"] },
{"name": "Collect 10 things in your inventory" , types: ["misc"] },
{"name": "Collect 2 keys" , types: ["misc"]  },
{"name": "Collect 20 buried bones" , types: ["misc"] },
{"name": "Collect 5 buried bones in 3 levels" , types: ["misc"] }
];
bingoList[25] = [
{"name": "Collect 8 stickers in the first page" , types: ["misc"] },
{"name": "Collect 8 stickers in the second page" , types: ["misc"] },
{"name": "Collect 8 stickers in the third page" , types: ["misc"] },
{"name": "Collect 8 stickers in the fourth page" , types: ["misc"] },
{"name": "Collect 10 stickers" , types: ["misc"] },
{"name": "Collect 15 stickers" , types: ["misc"] }
];

