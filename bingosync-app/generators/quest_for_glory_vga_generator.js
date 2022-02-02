var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Die of Exhaustion", types: ["deathmessage"] },
  { name: "Steal from the Healer", types: ["selfharm", "items", "thiefquest"] },
  { name: "Pay Bruno 10 gold", types: ["money"] },
];
bingoList[2] = [
  { name: "Die in 5 different ways", types: ["deathmessage"] },
  { name: "See the Easter Eggs at the Road and Lake", types: ["timepass"] },
  { name: "Die by falling", types: ["deathmessage", "climbing"] },
  { name: "Faceplant by falling from three places", types: ["selfharm", "climbing"] },
];
bingoList[3] = [
  { name: "Free the Fox with the Open spell", types: ["statgrind"] },
  { name: "Defeat the Kobold using only blades", types: ["combat", "mainquest"] },
  { name: "Get removed from the premises by Crusher, Erasmus, and 'Enry", types: ["deathmessage"] },
  { name: "Buy the chainmail armor", types: ["money", "items"] },
  { name: "Use the Thieves' Toolkit, and never the simple lockpick, to pick locks", types: ["thiefquest"] },
];
bingoList[4] = [
  { name: "Never turn in mushrooms to the Healer", types: ["selfharm", "items"] },
  { name: "Score at least 100 points", types: ["score"] },
  { name: "Win Dag-Nab-It with a bet of 51 silver", types: ["thiefquest", "money"] },
  { name: "Get kicked out by Erasmus for knowing his jokes", types: ["magequest"] },
  { name: "Steal all items from both break-ins", types: ["thiefquest", "items", "money"] },
  { name: "Get 3 pieces of paper", types: ["items"] },
  { name: "Open both treasure chests", types: ["money", "combat"] },
  { name: "Get caught by the Three Stooges", types: ["mainquest", "deathmessage"] },
  { name: "Get killed by both Antwerps", types: ["mainquest", "deathmessage"] },
  { name: "Drink all 3 drinks at the tavern in the same timeline", types: ["deathmessage"] },
  { name: "Obtain the Ring in 4 different ways", types: ["magequest"] },
  { name: "Defeat a Brigand using only Zap-enhanced attacks", types: ["combat", "magequest"] },
  { name: "Give food to 4 different creatures", types: ["timepass"] },
  { name: "Never climb into or out of town", types: ["selfharm", "climbing"] },
];
bingoList[5] = [
  { name: "Never use Magic", types: ["statrestriction", "magequest"] },
  { name: "Win the Game", types: ["mainquest"] },
  { name: "Get Luck to 100", types: ["statgrind"] },
  { name: "Play as a Magic User Only", types: ["statrestriction"] },
  { name: "Defeat a forest monster without engaging it in close combat", types: ["statgrind", "combat"] },
  { name: "Die by failing to pick the Sheriff's safe 3 times", types: ["deathmessage", "thiefquest"] },
  { name: "Have a score of -25 or worse", types: ["score", "fightquest"] },
  { name: "As a Magic User, rescue Barnard without waking the Kobold", types: ["mainquest"] },
];
bingoList[6] = [
  { name: "Catch the Seed with Fetch", types: ["mainquest", "statgrind"] },
  { name: "Kill 5 different types of monsters", types: ["combat"] },
  { name: "Win Mage's Maze", types: ["magequest"] },
  { name: "Get both the Troll's Beard and some Cheetaur Claws", types: ["combat", "items"] },
  { name: "Turn in the Mandrake Root", types: ["mainquest", "timepass"] },
];
bingoList[7] = [
  { name: "Learn every Spell", types: ["magequest"] },
  { name: "Beat the game while cursed by Baba Yaga", types: ["mainquest"] },
  { name: "Have at least 18 different items in your inventory", types: ["items"] },
  { name: "Sleep in 3 different locations", types: ["timepass"] },
  { name: "Never lockpick anything", types: ["selfharm"] },
  { name: "Have at least 600 total stat points", types: ["statgrind"] },
];
bingoList[8] = [
  { name: "Complete the Slow Dance with the Fairies", types: ["timepass", "mainquest"] },
  { name: "Score at least 200 points", types: ["score"] },
  { name: "Cross the Trapped Room while the Archers are active and don't get hit", types: ["mainquest"] },
  { name: "Be transformed into 3 different things", types: ["deathmessage"] },
  { name: "Never climb anything", types: ["selfharm", "climbing"] },
];
bingoList[9] = [
  { name: "Get Throwing to 100", types: ["statgrind"] },
  { name: "Defeat the brigands at the front gate", types: ["mainquest", "combat"] },
  { name: "Defeat Swordy Lordy", types: ["statgrind", "combat", "fightquest"] },
];
bingoList[10] = [
  { name: "Get Lockpicking to 100", types: ["statgrind"] },
  { name: "Acquire Dispel Potion", types: ["mainquest", "items", "timepass"] },
  { name: "Defeat Swordy Lordy while borrowing a shield", types: ["statgrind", "fightquest"] },
  { name: "Give Fred's beard to the healer", types: ["combat"] },
];
bingoList[11] = [
  { name: "Have at least 24 different items in your inventory", types: ["items", "thiefquest"] },
  { name: "Have 7 different things that are contained in flasks", types: ["items", "mainquest", "timepass"] },
];
bingoList[12] = [
  { name: "Get Magic to 100", types: ["statgrind", "magequest"] },
];
bingoList[13] = [
  { name: "Get a spell to 100 proficiency", types: ["statgrind", "magequest"] },
];
bingoList[14] = [
  { name: "Score at least 300 points", types: ["score"] },
];
bingoList[15] = [
  { name: "Kill Saurus Rex", types: ["combat", "statgrind"] },
  { name: "Get Climbing to 100", types: ["statgrind", "mainquest"] },
  { name: "Complete the full countercurse", types: ["mainquest"] },
];
bingoList[16] = [
  { name: "Get Parry to 100", types: ["statgrind"] },
  { name: "Never run from battle", types: ["combat", "selfharm"] },
];
bingoList[17] = [
  { name: "Get Vitality to 100", types: ["statgrind"] },
];
bingoList[18] = [
  { name: "Get Dodge to 100", types: ["statgrind"] },
];
bingoList[19] = [
  { name: "Get Strength to 100", types: ["statgrind"] },
];
bingoList[20] = [
  { name: "Get Agility to 100", types: ["statgrind"] },
];
bingoList[21] = [
  { name: "Get Weapon Use to 100", types: ["statgrind"] },
];
bingoList[22] = [
  { name: "Do not add points during Character Creation", types: ["statrestriction", "selfharm"] },
];
bingoList[23] = [
  { name: "Give Fred's beard to the healer", types: ["statgrind", "combat"] },
];
bingoList[24] = [
  { name: "Get Stealth to 100", types: ["statgrind"] },
];
bingoList[25] = [
  { name: "Only visit the Character Creation once", types: ["selfharm"] },
];
