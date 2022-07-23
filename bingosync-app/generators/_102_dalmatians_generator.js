// 102 Dalmatians: Puppies to the rescue Bingo
// Version 6.0
// By Adam TK Gladiator

bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");
var bingoList = [];
bingoList[1] = [
{"name": "1 up in Regent's Park & 1 up in Barnyard ","types": ["rp,by"]},
{"name": "1 up in Toy Store & 1 up in BigBen ","types": ["ts,bb"]},
{"name": "1 up in Piccadilly & 1 up in The Underground ","types": ["p,u"]},
{"name": "1 up in Royal Museum & 1 up in Carnival ","types": ["rm,c"]},
{"name": "1 up in Lumber Mill & 1 up in Ancient Castle ","types": ["lm,ac"]},
{"name": "1 up in Countryside & 1 up in Ice Festival ","types": ["cs,if"]},
{"name": "1 up in Spooky Forest & 1 up in Toy Factory ","types": ["sf,tf"]},
{"name": "1 up in Hedge Maze & 1 up in De Vil's Manor ","types": ["hm,dvm"]}
];
bingoList[2] = [
{"name": "All bones in Regent's Park","types": ["rp"]},
{"name": "All bones in Piccadilly","types": ["p"]},
{"name": "All bones in Carnival","types": ["c"]},
{"name": "All bones in Countryside ","types": ["cs"]},
{"name": "All bones in Toy Store ","types": ["ts"]}
];
bingoList[3] = [
{"name": "70 bones in Spooky Forest ","types": ["sf"]},
{"name": "70 bones in BigBen","types": ["bb"]},
{"name": "70 bones in Royal Museum","types": ["rm"]},
{"name": "70 bones in The Underground","types": ["u"]},
{"name": "70 bones in Lumber Mill","types": ["lm"]},
{"name": "70 bones in Barnyard","types": ["by"]},
{"name": "70 bones in Ice Festival","types": ["if"]},
{"name": "70 bones in Ancient Castle","types": ["ac"]},
{"name": "70 bones in Hedge Maze","types": ["hm"]},
{"name": "70 bones in De Vil's Manor","types": ["dvm"]},
{"name": "70 bones in Toy Factory","types": ["tf"]}
];
bingoList[4] = [
{"name": "All puppies in Regent's Park","types": ["rp"]},
{"name": "All puppies in Toy Store","types": ["ts"]},
{"name": "All puppies in Piccadilly","types": ["p"]},
{"name": "All puppies in BigBen","types": ["bb"]},
{"name": "All puppies in Royal Museum","types": ["rm"]},
{"name": "All puppies in The Underground","types": ["u"]},
{"name": "All puppies in Carnival","types": ["c"]},
{"name": "All puppies in Lumber Mill","types": ["lm"]}
];
bingoList[5] = [
{"name": "All puppies in Countryside","types": ["cs"]},
{"name": "All puppies in Barnyard","types": ["by"]},
{"name": "All puppies in Ice Festival","types": ["if"]},
{"name": "All puppies in Ancient Castle","types": ["ac"]},
{"name": "All puppies in Spooky Forest","types": ["sf"]},
{"name": "All puppies in Hedge Maze","types": ["hm"]},
{"name": "All puppies in De Vil's Manor","types": ["dvm"]},
{"name": "All puppies in Toy Factory","types": ["tf"]},
{"name": "All puppies in 3 levels ","types": ["3lvl"]}
];
bingoList[6] = [
{"name": "7+ puppies in Regent's Park & Spooky Forest","types": ["rp", "sf"]},
{"name": "7+ puppies in Toy Store & Toy Factory","types": ["ts", "tf"]},
{"name": "7+ puppies in Piccadilly & Countryside","types": ["p", "cs"]},
{"name": "7+ puppies in BigBen & De Vil's Manor","types": ["bb", "dvm"]},
{"name": "7+ puppies in Royal Museum & Ancient Castle","types": ["rm", "ac"]},
{"name": "7+ puppies in The Underground & Barnyard","types": ["u", "by"]},
{"name": "7+ puppies in Carnival & Ice Festival","types": ["c", "if"]},
{"name": "7+ puppies in Lumber Mill & Hedge Maze","types": ["lm", "hm"]}
];
bingoList[7] = [
{"name": "120 combined bones in Regent's Park & Toy Factory","types": ["rp", "tf"]},
{"name": "120 combined bones in Toy Store & Spooky Forest","types": ["ts", "sf"]},
{"name": "120 combined bones in Piccadilly & De Vil's Manor","types": ["p", "dvm"]},
{"name": "120 combined bones in BigBen & Countryside","types": ["bb", "cs"]},
{"name": "120 combined bones in Royal Museum & Barnyard","types": ["rm", "by"]},
{"name": "120 combined bones in The Underground & Ancient Castle","types": ["u", "ac"]},
{"name": "120 combined bones in Carnival & Hedge Maze","types": ["c", "hm"]},
{"name": "120 combined bones in Lumber Mill & Ice Festival","types": ["lm", "if"]}
];
bingoList[8] = [
{"name": "50 bones in both Regent's Park & De Vil's Manor", "types": ["rp","dvm"] },
{"name": "50 bones in both Piccadilly & Toy Factory","types": ["p", "tf"]},
{"name": "50 bones in both BigBen & Spooky Forest","types": ["bb", "sf"]},
{"name": "50 bones in both Royal Museum & Hedge Maze","types": ["rm", "hm"]},
{"name": "50 bones in both The Underground & Ice Festival","types": ["u", "if"]},
{"name": "50 bones in both Carnival & Barnyard","types": ["c", "by"]},
{"name": "50 bones in both Lumber Mill & Ancient Castle","types": ["lm", "ac"]}
];
bingoList[9] = [
{"name": "ELP Regent's park & Royal museum","types": ["rp", "rm"]},
{"name": "ELP Spooky forest & Ancient castle","types": ["sf", "ac"]},
{"name": "ELP Toy store & The Underground","types": ["ts", "u"]},
{"name": "ELP Toy factory & Countryside","types": ["tf", "cs"]},
{"name": "ELP Bigben & Barnyard","types": ["bb", "by"]},
{"name": "ELP Piccadilly & Carnival","types": ["p", "c"]},
{"name": "ELP De vil's manor & Lumber mill","types": ["dvm", "lm"]},
{"name": "ELP Ice festival & Hedge maze","types": ["if", "hm"]}
];
bingoList[10] = [
{"name": "ELP Regent's park & The Underground","types": ["rp", "u"]},
{"name": "ELP Spooky forest & Barnyard","types": ["sf", "by"]},
{"name": "ELP Toy store & Royal museum","types": ["ts", "rm"]},
{"name": "ELP Countryside & Ancient castle","types": ["cs", "ac"]},
{"name": "ELP Toy factory & Lumber mill","types": ["tf", "lm"]},
{"name": "ELP Bigben & Carnival ","types": ["bb", "c"]},
{"name": "ELP Piccadilly & Hedge maze","types": ["p", "hm"]},
{"name": "ELP De vil's manor & Ice festival ","types": ["dvm", "if"]}
];
bingoList[11] = [
{"name": "ELP Regent's park & Ancient castle","types": ["rp", "ac"]},
{"name": "ELP Spooky forest & Carnival","types": ["sf", "c"]},
{"name": "ELP Toy store & Lumber mill","types": ["ts", "lm"]},
{"name": "ELP Toy factory & The Underground","types": ["tf", "u"]},
{"name": "ELP Countryside & Barnyard","types": ["cs", "by"]},
{"name": "ELP BigBen & Royal Museum","types": ["bb", "rm"]},
{"name": "ELP De Vil's Manor & Hedge Maze","types": ["dvm", "hm"]},
{"name": "ELP Piccadilly & Ice Festival","types": ["p", "if"]}
];
bingoList[12] = [
{"name": "ELP Regent's Park & Countryside","types": ["rp", "cs"]},
{"name": "ELP Toy Store & De vil's Manor","types": ["ts", "dvm"]},
{"name": "ELP Piccadilly & Spooky Forest","types": ["p", "sf"]},
{"name": "ELP BigBen & Toy Factory","types": ["bb", "tf"]},
{"name": "ELP Royal Museum & Ice Festival","types": ["rm", "if"]},
{"name": "ELP The Underground & Hedge Maze","types": ["u", "hm"]},
{"name": "ELP Carnival & Ancient Castle","types": ["c", "ac"]},
{"name": "ELP Lumber Mill & and Barnyard","types": ["lm", "by"]}
];
bingoList[13] = [
{"name": "ELP 7 levels","types": ["7lvl"]},
{"name": "ELP 2 levels without collecting anything","types": ["2lvl"]},
{"name": "ELP the same level with both Oddball and Domino","types": ["1lvl"]},
{"name": "ELP 2 levels after getting 10 combined puppies from them","types": ["2lvl"]}];
bingoList[14] = [
{"name": "1 puppy from Regent's Park, Barnyard, Toy Store & Ice Festival","types": ["rp", "by", "ts", "if"]},
{"name": "1 puppy from Piccadilly, Ancient Castle & BigBen","types": ["p", "ac", "bb"]},
{"name": "1 puppy from Hedge Maze, Toy Factory & De Vil's Manor","types": ["hm", "tf", "dvm"]},
{"name": "1 puppy from The Underground, Lumber Mill & Carnival","types": ["u", "lm", "c"]},
{"name": "1 puppy from Spooky Forest, Royal Museum & Country Side","types": ["sf", "rm", "cs"]}];
bingoList[15] = [
{"name": "15 combined puppies from Regent's Park, Toy Store, Piccadilly & BigBen","types": ["rp", "ts", "p", "bb"]},
{"name": "15 combined puppies from Royal Museum, The Underground, Carnival & Lumber Mill","types": ["rm", "u", "c", "lm"]},
{"name": "15 combined puppies from Countryside, Barnyard, Ice Festival & Ancient Castle","types": ["cs", "by", "if", "ac"]},
{"name": "15 combined puppies from Spooky Forest, Hedge Maze, De Vil's Manor and Toy Factory","types": ["sf", "hm", "dvm", "tf"]}];
bingoList[16] = [
{"name": "Toy Store bubble puppy & Toy Factory on top of Hydraulic Press puppy","types": ["ts", "tf"]},
{"name": "Toy Store pinball puppy & De vil's Manor bed room puppy","types": ["ts", "dvm"]},
{"name": "Toy Store eol area puppy & Hedge Maze eol puppy ","types": ["ts", "hm"]},
{"name": "Toy Store rocket puppy & Spooky Forest underground puppy","types": ["ts", "sf"]},
{"name": "Piccadilly puzzle puppy & Ice Festival eol puppy","types": ["p", "if"]},
{"name": "Piccadilly manhole puppy & Barnyard silo puppy","types": ["p", "by"]},
{"name": "Regent's Park eol puppy & Countryside tree puppy","types": ["rp", "cs"]},
{"name": "BigBen elevator puppy & Carnival blue ticket area puppy","types": ["bb", "c"]}
];
bingoList[17] = [
{"name": "Royal Museum jurassic area puppy & Barnyard toilet puppy","types": ["rm", "by"]},
{"name": "Royal Museum eol area puppy & Hedge Maze room puppy","types": ["rm", "hm"]},
{"name": "Royal Museum inside pyramid puppy & Toy Factory magnetic room puppy","types": ["rm", "tf"]},
{"name": "Royal Museum outside pyramid puppy & Countryside cave puppy","types": ["rm", "cs"]},
{"name": "Royal Museum kitchen puppy & Lumber Mill eol puppy","types": ["rm", "lm"]},
{"name": "Underground eol puppy & Carnival Magic Wagon room 3 puppy","types": ["u", "c"]},
{"name": "Carnival red ticket area puppy & De Vil's Manor paintings puppy","types": ["c", "dvm"]},
{"name": "Ice Festival ice castle puppy & Carnival Magic Wagon room 1 puppy ","types": ["if", "c"]},
{"name": "Ancient Castle behind doors puppy & Carnival green ticket area puppy","types": ["ac", "c"]}
];
bingoList[18] = [
{"name": "10 puppies","types": ["3lvl"]},
{"name": "20 puppies","types": ["4lvl"]},
{"name": "30 puppies","types": ["5lvl"]},
{"name": "200 bones","types": ["2lvl"]},
{"name": "300 bones","types": ["3lvl"]},
{"name": "7 lives","types": ["7lvl"]},
{"name": "Collect 10 buried bones","types": ["3lvl"]},
{"name": "Collect 5 buried bones in 2 levels","types": ["2lvl"]}
];
bingoList[19] = [
{"name": "Cruella I","types": ["h"]},
{"name": "Cruella II","types": ["h"]},
{"name": "Cruella III","types": ["h"]},
{"name": "Cruella IV","types": ["h"]},
{"name": "Defeat every Boss","types": ["h"]}
];
bingoList[20] = [
{"name": "Finish a game of minigolf","types": ["mg"]},
{"name": "Finish a game of dig dog","types": ["mg"]},
{"name": "Finish a game of tiltmaze","types": ["mg"]},
{"name": "Finish a game of checkers","types": ["mg"]},
{"name": "Finish a game of ice race","types": ["mg"]}];
bingoList[21] = [
{"name": "Destroy 3 devils in 3 levels","types": ["cs", "dvm", "c"]},
{"name": "Destroy 4 planes in 2 levels","types": ["cs", "if"]},
{"name": "Destroy all boats","types": ["cs", "u", "sf"]},
{"name": "Destroy 5 dozers in 2 levels","types": ["by", "lm"]},
{"name": "Destroy 3 helicopters in 3 levels","types": ["by", "sf", "bb"]},
{"name": "Destroy 3 soldiers in 3 levels","types": ["by", "sf", "ts"]},
{"name": "Destroy 2 penguins in 2 levels","types": ["if", "tf"]},
{"name": "Destroy all snowmans","types": ["if"]},
{"name": "Destroy 3 crocodiles in 2 levels","types": ["ac", "u"]},
{"name": "Destroy 3 teddy bears in 3 levels","types": ["ac", "u", "dvm"]},
{"name": "Destroy 4 knights in 2 levels","types": ["ac", "rm"]},
{"name": "Destroy 4 monkeys in 2 levels","types": ["hm", "rp"]},
{"name": "Destroy 3 zepplins in 2 levels","types": ["hm", "bb"]},
{"name": "Destroy 3 toasters in 2 levels","types": ["dvm", "rm"]},
{"name": "Destroy 2 punshing bags in 3 levels","types": ["ts", "tf", "bb"]},
{"name": "Destroy 2 jack in box in 3 levels","types": ["rp", "tf", "lm"]},
{"name": "Destroy all cruella cars","types": ["rp", "p"]},
{"name": "Destroy 4 bomb cars in 2 levels","types": ["rm", "ts"]},
{"name": "Destroy 5 clowns in 2 levels","types": ["c", "p"]},
{"name": "Destroy 7 different enemies' types","types": ["3lvl"]},
{"name": "Destroy 15 enemies","types": ["3lvl"]}
];
bingoList[22] = [
{"name": "Talk to Tibbs in 2 different levels","types": ["ts", "dvm"]},
{"name": "Talk to Fidget in 2 different levels","types": ["rp", "p"]},
{"name": "Talk to Chester in 2 different levels","types": ["u", "lm"]},
{"name": "Talk to Yvonne in 2 different levels","types": ["bb", "ac"]},
{"name": "Talk to Fluffy in 2 different levels","types": ["rm", "tf"]},
{"name": "Talk to Shelby twice","types": ["c"]},
{"name": "Talk to Manny in 2 different levels","types": ["hm", "cs"]},
{"name": "Do 2 Priscilla's tasks ","types": ["by"]},
{"name": "Talk to Crystal in 2 different levels","types": ["if", "sf"]},
{"name": "Talk to an NPC in every level","types": ["16lvl"]},
{"name": "Talk to 5 different NPCs","types": ["5lvl"]},
{"name": "Bark 3 times at 7 NPCs","types": ["7lvl"]},
{"name": "Talk to every NPC at least once","types": ["9lvl"]}
];
bingoList[23] = [
{"name": "Defeat Horace 3 times","types": ["dvm", "p", "cs", "h"]},
{"name": "Defeat Jasper 3 times","types": ["rp", "if", "c", "h"]},
{"name": "Defeat Le Pelt twice","types": ["sf", "rm", "h"]},
{"name": "Defeat every human at least once (including Cruella)","types": ["h"]}
];
bingoList[24] = [
{"name": "Use 5 switches","types": ["by", "ac", "u", "hm", "rm", "lm"]},
{"name": "Use 3 bubble machines and 2 canons","types": ["if", "c", "ts"]},
{"name": "Collect 10 things in your inventory","types": ["rm", "by", "sf", "lm", "u", "c"]},
{"name": "Collect 2 keys","types": ["by", "sf", "lm", "u"]},
{"name": "Collect all tickets in carnival","types": ["c"]},
{"name": "Get the golden nut and do a full lap using the train","types": ["rp,ts"]},
{"name": "Ride the coaster and the train","types": ["c,ts"]},
{"name": "Use the tractor and the crane","types": ["by,lm"]},
{"name": "Get 5 pizzas from boxes","types": ["1lvl"]},
{"name": "Eat a pizza a hamburger, a hot dog, a steak and get the donut","types": ["3lvl, rm"]},
{"name": " Eat 7 food","types": ["5lvl"]}
];
bingoList[25] = [
{"name": "Collect 8 stickers in the first page","types": ["rp", "ts", "p", "bb"]},
{"name": "Collect 8 stickers in the second page","types": ["rm", "u", "c", "lm"]},
{"name": "Collect 8 stickers in the third page","types": ["cs", "by", "if", "ac"]},
{"name": "Collect 8 stickers in the fourth page","types": ["sf", "hm", "dvm", "tf"]},
{"name": "Collect 10 stickers","types": ["2lvl"]},
{"name": "Collect 15 stickers","types": ["3lvl"]}
];
