bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Beat the Hive without Michael" },
  { name: "Get Parasitic" },
  { name: "Get Shock" },
  { name: "Beat the Hive without hold actions" },
  { name: "Beat the Hive without parrying" },

];
bingoList[2] = [
  { name: "No hit Hive" },
  { name: "Get Pyra" },
  { name: "Don’t die to Messiah (let the game kill you)" },
  { name: "Get Enraged" },
  { name: "Get Gaea" },
];
bingoList[3] = [
  { name: "Get Determined" },
  { name: "Pet a Familiar" },
  { name: "Buy everything from Merchant 1" },
  { name: "Get the Rewind in Track 3" },
  { name: "Get Pierce" },
];
bingoList[4] = [
  { name: "Get Untethered" },
  { name: "Get the Rail Lever" },
  { name: "All NG virtues in Track 3" },
  { name: "All NG collectibles in Track 3" },
  { name: "Don’t level in Tracks 1, 2, or 3" },
];
bingoList[5] = [
  { name: "Track 3 on Hard/Hard" },
  { name: "Track 3 on Challenge/Challenge" },
  { name: "Track 3 without parrying" },
  { name: "Track 3 without hold actions" },
  { name: "Track 3 with Anima/Luna/Shock" },
];
bingoList[6] = [
  { name: "The Forsaken without parrying" },
  { name: "The Forsaken with Aero/Aero/Burst" },
  { name: "Christian 1 without parrying" },
  { name: "Christian 1 without parrying or hold actions" },
  { name: "Equip 3 virtues" },
];
bingoList[7] = [
  { name: "Get Thanatos" },
  { name: "Get Incensed" },
  { name: "Fight the Hollow" },
  { name: "Track 4 with Gaea/Gaea" },
  { name: "Don’t take the school bus" },
];
bingoList[8] = [
 { name: "All collectibles in Track 4" },
 { name: "Get all three tapes" },
 { name: "Get the tape The Past" },
 { name: "Get the tape The Future" },
 { name: "Get the tape The Dream" },

];
bingoList[9] = [
 { name: "Don’t use the code to get into the schoolhouse" },
 { name: "Track 4 on Hard/Hard" },
 { name: "Equip 5 virtues" },
 { name: "Get Hated" },
 { name: "Get the Rewind after Arena" },
];
bingoList[10] = [
 { name: "Get Rapid/Do I Am Not A Machine" },
 { name: "Track 5 without parrying" },
 { name: "Serah without parrying" },
 { name: "Track 5 with Pyra/Pyra" },
 { name: "S-rank all Arena fights, including the Arena Trainer’s" },
];
bingoList[11] = [
 { name: "Get the Arena Trainer’s Health Essence" },
 { name: "Get all virtues from levelling" },
 { name: "Don’t level in Tracks 4, 5" },
 { name: "No hit Serah" },
 { name: "Get Bios" },
];
bingoList[12] = [
 { name: "Get all Memories" },
 { name: "Track 6 without parrying/Repellant" },
 { name: "Christian 2 without parrying" },
 { name: "Christian 2 without hold actions" },
 { name: "Christian 2 with Luna/Luna/Burst" },
];
bingoList[13] = [
 { name: "Buy everything from Merchant 2" },
 { name: "Depths without parrying/Repellant" },
 { name: "Track 6 with Aero/Aero" },
 { name: "Track 6 with Anima/Anima" },
 { name: "Get Repellant" },
];
bingoList[14] = [
 { name: "Get Track 7 Rewind" },
 { name: "Get Aqua" },
 { name: "Harbinger II without parrying/Repellant" },
 { name: "Don’t level in tracks 6, 7" },
 { name: "Track 7 with Erebos/Erebos" },
];
bingoList[15] = [
 { name: "Track 7 without parrying" },
 { name: "Equip 8 virtues" },
 { name: "Get all 5 prayer beads" },
 { name: "Get all 7 rewinds" },
 { name: "Get all 3 health essence" },
];
bingoList[16] = [
 { name: "All (NG, non-ending) Mantras" },
 { name: "All (NG) Virtues" },
 { name: "All (NG) Familiars" },
 { name: "Track 8 without transforming" },
 { name: "Buy everything from Merchant 3" },
];
bingoList[17] = [
 { name: "Get Fos" },
 { name: "Get Lazer" },
 { name: "Get to 69% corruption" },
 { name: "Get to 100% corruption (the first time)" },
 { name: "Get the priest’s blessing in the Eastern Enclave" },
];
bingoList[18] = [
 { name: "Track 8 with Aqua/Aqua" },
 { name: "Track 8 with Bios/Pyra" },
 { name: "Track 8 with Aero/Anima" },
 { name: "Track 8 with Luna/Luna" },
 { name: "Track 8 with Luna/Luna" },
];
bingoList[19] = [
 { name: "Christian 3 without parrying/Repellant" },
 { name: "Christian 3 without hold actions" },
 { name: "Christian 3 without transforming" },
 { name: "Messiah with Aero/Anima/Heal" },
 { name: "Messiah with Luna/Luna/Lazer" },
];
bingoList[20] = [
 { name: "Messiah with priest debuff" },
 { name: "Messiah without hold actions" },
 { name: "Messiah on Hard/Hard" },
 { name: "No hit Messiah" },
 { name: "Messiah without Repellant" },
];
bingoList[21] = [
 { name: "Track 1 on Hard/Hard" },
 { name: "Track 2 on Hard/Hard" },
 { name: "Track 1 on Challenge/Challenge" },
 { name: "Track 2 on Challenge/Challenge" },
];
bingoList[22] = [
 { name: "Track 3 on Hard/Hard" },
 { name: "Track 4 on Hard/Hard" },
 { name: "Track 3 on Challenge/Challenge" },
 { name: "Track 4 on Challenge/Challenge" },
];
bingoList[23] = [
 { name: "Track 5 on Hard/Hard" },
 { name: "Track 6 on Hard/Hard" },
 { name: "Track 5 on Challenge/Challenge" },
 { name: "Track 6 on Challenge/Challenge" },
];
bingoList[24] = [
 { name: "Track 7 on Hard/Hard" },
 { name: "Track 8 on Hard/Hard" },
 { name: "Track 7 on Challenge/Challenge" },
 { name: "Track 8 on Challenge/Challenge" },
];
bingoList[25] = [
 { name: "Neutral Ending" },
];
