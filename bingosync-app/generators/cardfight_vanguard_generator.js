bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Soulblast 1 card or more", types: ["soulblast"] },
  { name: "Use 2 Counterblast", types: ["counterblast"] },
  { name: "Declare a G Assist", types: ["g-assist"] },
  { name: "Use a Trigger as the Starting Vanguard", types: ["starter"] },
];
bingoList[2] = [
  { name: "Place a Sentinel only on GC and not using its effects", types: ["sentinel", "guard"] },
  { name: "Have 2 face-down cards in Damage Zone", types: ["counterblast"] },
  { name: "Reach Critical 2 with one unit", types: ["crit"] },
  { name: "Use 2 AUTO skills in one turn", types: ["auto"] },
];
bingoList[3] = [
  { name: "Reach 4 cards in Soul", types: ["soul"] },
  { name: "Soulblast 3 cards or more", types: ["soulblast"] },
  { name: "Use 4 Counterblasts", types: ["counterblast"] },
  { name: "Have cards in Exclusion Zone", types: ["exclusion", "g-assist", "ultimatestride"] },
];
bingoList[4] = [
  { name: "Check 5 Triggers", types: ["trigger"] },
  { name: "Soulblast 5 cards or more", types: ["soulblast"] },
  { name: "Use 6 Counterblasts", types: ["counterblast"] },
  { name: "Avoid misriding", types: ["misride"] },
];
bingoList[5] = [
  { name: "Reach 0 card in Soul after riding Grade 2", types: ["soul"] },
  { name: "Have 3 face-down cards in Damage Zone", types: ["counterblast"] },
  { name: "Use 2 ACT skills in one turn", types: ["act"] },
  { name: "Succeed a G Assist", types: ["g-assist"] },
  { name: "Do 4 Attacks or more before riding Grade 3", types: ["attack"] },
];
bingoList[6] = [
  { name: "Use 3 Skills in one turn", types: ["skill"] },
  { name: "Draw 2 cards in one turn", types: ["draw"] },
  { name: "Call 3 Rear-Guard in one turn", types: ["call"] },
  { name: "Have 3 cards face-up in the G-Zone", types: ["g-zone"] },
];
bingoList[7] = [
  { name: "Take 2 Damage in one turn (Rescue excluded)", types: ["takedamage"] },
  { name: "Deal 2 Damage to the opponent in one turn", types: ["dealdamage"] },
  { name: "Do 5 Attacks or more before riding Grade 3", types: ["attack"] },
  { name: "Declare two G Assist", types: ["g-assist"] },
];
bingoList[8] = [
  { name: "Place 5 cards from hand/G-Zone to GC to guard 1 attack", types: ["guard"] },
  { name: "Damage Check 4 Triggers (Rescue excluded)", types: ["damagecheck", "trigger"] },
  { name: "Use 2 G-Guardian", types: ["g-zone", "guard"] },
  { name: "Use 3 AUTO Skills with a Cost", types: ["auto"] },
];
bingoList[9] = [
  { name: "Have 4 face-down cards in Damage Zone", types: ["counterblast"] },
  { name: "Have 20 or less cards in the deck", types: ["deck"] },
  { name: "No call/superior call 2 turns in a row", types: ["no-call"] },
  { name: "Use 2 skills with unique keyword", types: ["skill", "keyword"] },
];
bingoList[10] = [
  { name: "Reach 5 cards in Soul", types: ["soul"] },
  { name: "Ride Grade 3 two times in one game", types: ["ride"] },
  { name: "Have 5 cards face-up in the G-Zone", types: ["g-zone"] },
  { name: "Use 3 Sentinel in one game", types: ["sentinel", "guard"] },
];
bingoList[11] = [
  { name: "Reach Critical 3 with one unit", types: ["crit"] },
  { name: "Use 4 Skills in one turn", types: ["skill"] },
  { name: "Call 4 Rear-Guard in one turn", types: ["call"] },
  { name: "Use 2 AUTO/ACT Generation Break skills", types: ["skill", "gb"] },
];
bingoList[12] = [
  { name: "Check 7 Triggers", types: ["trigger"] },
  { name: "Win a game on an Ultimate Stride turn", types: ["win", "ultimatestride"] },
  { name: "Use 5 AUTO Skills with a Cost", types: ["auto", "skill"] },
  { name: "Reach 40,000 Power with one unit", types: ["power"] },
];
bingoList[13] = [
  { name: "Use 2 Sentinel in one turn", types: ["sentinel", "guard"] },
  { name: "Win a game", types: ["win"] },
  { name: "Draw 4 cards in one turn", types: ["draw"] },
  { name: "Win a game with 5 cards in Damage Zone", types: ["win"] },
  { name: "Countercharge 3 times", types: ["countercharge"] },
];
bingoList[14] = [
  { name: "Have 15 or less cards in the deck", types: ["deck"] },
  { name: "Take 3 Damage or more before riding Grade 3", types: ["takedamage"] },
  { name: "Stand 3 Units with effect(s)", types: ["stand"] },
];
bingoList[15] = [
  { name: "Reach 50,000 Power with one unit", types: ["power"] },
  { name: "Have 3 Units with keyword", types: ["keyword"] },
  { name: "Damage Check 7 Triggers (Rescue excluded)", types: ["damagecheck", "trigger"] },
  { name: "Reach 25,000 Power with a Rear-Guard", types: ["power"] },
];
bingoList[16] = [
  { name: "Have 10 or less cards in the deck", types: ["deck"] },
  { name: "Use 5 Skills in one turn", types: ["skill"] },
  { name: "Win the game with 3 or less cards in hand", types: ["win"] },
  { name: "Take 0 damage during opponent’s turn", types: ["nodamage"] },
  { name: "Do 4 Attacks or more in one turn", types: ["attack"] },
];
bingoList[17] = [
  { name: "Reach 7 cards in Soul", types: ["soul"] },
  { name: "Deal 3 Damage to the opponent in one turn", types: ["dealdamage"] },
  { name: "Use 4 G-Guardian", types: ["g-zone", "guard"] },
  { name: "Use 5 AUTO/ACT Generation Break skills", types: ["skill", "gb"] },
  { name: "Reach 55,000 Power with one unit", types: ["power"] },
];
bingoList[18] = [
  { name: "Ride Grade 3 three times in one game", types: ["ride"] },
  { name: "Call 5 Rear-Guard in one turn", types: ["call"] },
  { name: "Have 4 Units with keyword", types: ["keyword"] },
  { name: "Use 4 Sentinel in one game", types: ["sentinel"] },
];
bingoList[19] = [
  { name: "Reach 60,000 Power with one unit", types: ["power"] },
  { name: "Heal 2 times in one game (Rescue excluded)", types: ["heal"] },
  { name: "Have 7 cards face-up in the G-Zone", types: ["g-zone"] },
];
bingoList[20] = [
  { name: "Check 10 Triggers", types: ["blkgate","ppgate"] },
  { name: "Take 3 Damage in one turn (Rescue excluded)", types: ["elecgate","ppgate"] },
  { name: "Stand 5 Units with effect(s)", types: ["stand"] },
];
bingoList[21] = [
  { name: "Get an unusable Heal Trigger", types: ["noheal"] },
  { name: "Use 7 G-Guardian", types: ["g-zone", "guard"] },
  { name: "Lose the G-Zone after an Ultimate Stride", types: ["ultimatestride"] },
  { name: "Win two games", types: ["win"] },
];
bingoList[22] = [
  { name: "Heal 3 times in one game (Rescue excluded)", types: ["heal"] },
  { name: "Win a game with an attack from a Vanguard", types: ["win"] },
  { name: "Countercharge 6 times", types: ["countercharge"] },
  { name: "Call more than 5 Rear-Guard in one turn", types: ["call"] },
];
bingoList[23] = [
  { name: "Use 3 Sentinel in one turn", types: ["sentinel", "guard"] },
  { name: "Have 9 cards face-up in the G-Zone", types: ["g-zone"] },
  { name: "Win a game with an attack from a Rear-Guard", types: ["win"] },
  { name: "Win a game without Striding the last turn", types: ["win"] },
];
bingoList[24] = [
  { name: "Deal 7 Damage or more to the opponent", types: ["overkill"] },
  { name: "Have 5 Units with keyword", types: ["keyword"] },
  { name: "Take 0 damage during two of your opponent’s turn in a row", types: ["nodamage"] },
  { name: "Check two unusable Heal Trigger", types: ["noheal"] },
];
bingoList[25] = [
  { name: "Heal 4 times in one game (Rescue excluded)", types: ["heal"] },
  { name: "Win a game with an attack from a Grade 0", types: ["win"] },
  { name: "Win a game without Striding the last 2 turns", types: ["win"] },
];
