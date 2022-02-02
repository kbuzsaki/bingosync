bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Complete the pelican race", types: ["task", "hub1"] },
  { name: "Yakows cell", types: ["task","hub1"] },
  { name: "Destroy all 11 Geyser training dummies", types: ["checklist","hub1"] },
  { name: "50 orbs in Geyser Rock", types: ["collectables","hub1"] },
];
bingoList[2] = [
  { name: "Make the muse do a full lap", types: ["unique","hub1"] },
  { name: "Get villaged", types: ["unique","hub2"] },
];
bingoList[3] = [
  { name: "Secret cell in Volcanic Crater", types: ["task","hub3"] },
  { name: "Kill 10 lurkers on Flut Flut", types: ["checklist","multihub"] },
  { name: "Break 4 rolling barrels in Misty Island", types: ["unique","hub1"] },
  { name: "Complete the fish minigame without missing a fish", types: ["challenge","hub1"] },
];
bingoList[4] = [
  { name: "Get eaten by the shark in 4 different levels", types: ["checklist","multihub"] },
  { name: "Die from burning, drowning, dark eco, and a rat", types: ["checklist","multihub"] },
];
bingoList[5] = [
  { name: "Take fall damage in 4 different levels", types: ["checklist","multihub"] },
  { name: "Go too fast in Mountain Pass", types: ["challenge","hub2"] },
  { name: "Flut Flut cell in Boggy without Flut Flut or yellow eco", types: ["challenge","hub2"] },
  { name: "Kill all 3 frogs and 2 groups of bats in Boggy", types: ["checklist","hub2"] },
];
bingoList[6] = [
  { name: "Destroy all 10 rat nests", types: ["checklist","hub2"] },
  { name: "Ambush cell in Boggy Swamp", types: ["task","hub2"] },
  { name: "All orbs in Rock Village", types: ["collectables","hub2"] },
  { name: "All orbs in Volcanic Crater", types: ["collectables","hub3"] },
  { name: "All orbs in Sandover Village", types: ["collectables","hub1"] },
  { name: "All scout flies in Forbidden Jungle", types: ["collectables","hub1"] },
];
bingoList[7] = [
  { name: "Finish the ambush in Misty Island", types: ["task","hub1"] },
  { name: "Knock down all 4 bones in Misty Island", types: ["checklist","hub1"] },
  { name: "Zeppelins cell in Misty Island", types: ["task","hub1"] },
  { name: "All orbs in Forbidden Jungle", types: ["collectables","hub1"] },
];
bingoList[8] = [
  { name: "All scout flies in Misty Island", types: ["collectables","hub1"] },
  { name: "Yellow switch cell in Snowy without a skip", types: ["challenge","hub3"] },
  { name: "Kill all 8 spinning lurkers in LPC", types: ["checklist","hub2"] },
  { name: "Gnawing lurkers cell", types: ["task","hub3"] },
  { name: "Kill 4 zeppelin lurkers on-foot", types: ["challenge","hub1"] },
];
bingoList[9] = [
  { name: "Open 7 different orb vents", types: ["checklist","multihub"] },
  { name: "100% Mountain Pass", types: ["collectables","hub2"] },
  { name: "Blocker cell in Snowy Mountain", types: ["task","hub3"] },
];
bingoList[10] = [
  { name: "Buy Mayor and Uncle cells", types: ["multitask","hub1"] },
  { name: "Buy Gambler and Geologist cells", types: ["multitask","hub2"] },
];
bingoList[11] = [
  { name: "All orbs from both slides in LPC", types: ["collectables","hub2"] },
  { name: "'Bottom of LPC' cell using the 2nd slide", types: ["task","hub2"] },
];
bingoList[12] = [
  { name: "Break 9 different scout flies with yellow eco", types: ["checklist","multihub"] },
  { name: "Kill 5 lurkers with the ice lurker in Snowy", types: ["challenge","hub3"] },
];
bingoList[13] = [
  { name: "Break 3 orb crates in Sentinel without the cannon", types: ["challenge","hub1"] },
  { name: "Sub 39 Dead Man's Gorge", types: ["challenge","hub2"] },
];
bingoList[14] = [
  { name: "Reach at least 25 total scout flies", types: ["collectables","multihub"] },
  { name: "120 orbs in Sentinel Beach", types: ["collectables","hub1"] },
];
bingoList[15] = [
  { name: "Blue rings in Precursor Basin", types: ["task","hub2"] },
  { name: "All scout flies in Boggy Swamp", types: ["collectables","hub2"] },
  { name: "Kill all 7 giant spiders in Spider Cave", types: ["checklist","hub3"] },
  { name: "Get a cell while powered with blue, red, and yellow eco each", types: ["checklist","multihub"] },
];
bingoList[16] = [
  { name: "Finish Fire Canyon orbless", types: ["challenge","hub1"] },
  { name: "Dark eco crystals cell", types: ["task","hub3"] },
];
bingoList[17] = [
  { name: "Hidden Mountain Pass cell without a skip", types: ["unique","hub2"] },
  { name: "All orbs in robot room (116)", types: ["collectables","hub3"] },
  { name: "Defeat Klaww without losing any health", types: ["challenge","hub2"] },
];
bingoList[18] = [
  { name: "Lightning moles cell", types: ["task","hub2"] },
  { name: "Kill all 9 lurkers in Fire Canyon without dying", types: ["challenge","hub1"] },
];
bingoList[19] = [
  { name: "150 orbs in Boggy Swamp", types: ["collectables","hub2"] },
  { name: "150 orbs in Citadel", types: ["collectables","hub3"] },
  { name: "All scout flies in Citadel", types: ["collectables","hub3"] },
];
bingoList[20] = [
  { name: "Defeat Klaww and the plant boss", types: ["multitask","multihub"] },
  { name: "Reach at least 400 total orbs", types: ["collectables","multihub"] },
];
bingoList[21] = [
  { name: "Buy 3 oracle cells", types: ["multitask","multihub"] },
];
bingoList[22] = [
  { name: "Do rats TriHard", types: ["task","hub2"] },
  { name: "Collect light eco", types: ["task","hub3"] },
];
bingoList[23] = [
  { name: "All cells in LPC", types: ["collectables","hub2"] },
];
bingoList[24] = [
  { name: "All Snowy Mountain cells without Flut Flut", types: ["challenge","hub3"] },
  { name: "Reach at least 35 total cells", types: ["collectables","multihub"] },
  { name: "Finish Mountain Pass and Lava Tube in reverse", types: ["challenge","multihub"] },
];
bingoList[25] = [
  { name: "Finish Mountain Pass orbless", types: ["challenge","hub2"] },
  { name: "Dark cave cell using at most 2 crystals", types: ["challenge","hub3"] },
];
