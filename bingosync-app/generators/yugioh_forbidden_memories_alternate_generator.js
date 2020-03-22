bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
 { name: "Beat Simon in a Free Duel", types: ["win"] },
 { name: "Beat Rex in a Free Duel", types: ["win"] },
 { name: "Beat Villager 1 in a Free Duel", types: ["win"] },
 { name: "Beat Villager 2 in a Free Duel", types: ["win"] }
];
bingoList[2] = [
 { name: "Win with S-Pow", types: ["pow"] },
 { name: "Don't Duel Final 6", types: ["duel"] },
 { name: "Use a card destroying card when your opponent's field is empty", types: ["field"] },
 { name: "A-Pow (or better) 5 different duelists", types: ["pow"] }
];
bingoList[3] = [
 { name: "Win a duel with no cards left to draw in your deck", types: ["win"] },
 { name: "Defeat Kaiba without free dueling a WT opponent", types: ["win"] },
 { name: "Win a duel with Flame Cerb or Flower Wolf", types: ["win"] },
 { name: "Don't win against Duel Master K", types: ["lose"] }
];
bingoList[4] = [
 { name: "Buy a card that can't be obtained as a drop", types: ["star"] },
 { name: "Summon a fiend with greater than 2000 ATK", types: ["card"] },
 { name: "Win a duel with a WT opponent/mage with a fiend/insect/pyro", types: ["win"] },
 { name: "Own 5 different equips", types: ["card"] }
];
bingoList[5] = [
 { name: "Fuse two magics together", types: ["fusing"] },
 { name: "Don't leave the shrine after beating Meadow Mage", types: ["other"] },
 { name: "15 of one card", types: ["card"] },
 { name: "Win a 20 from meadow mage", types: ["card"] }
];
bingoList[6] = [
 { name: "Beat Weevil in a Free Duel", types: ["win"] },
 { name: "Beat Mai in a Free Duel", types: ["win"] },
 { name: "Beat Keith in a Free Duel", types: ["win"] },
 { name: "Beat Villager 3 in a Free Duel", types: ["win"] }
];
bingoList[7] = [
 { name: "Have a Hand with no Monsters", types: ["hand"] },
 { name: "Have a hand of 5 monsters that don't exceed 500 ATK and DEF", types: ["hand"] },
 { name: "Win a High Mage duel without playing cards that increase your atk/def", types: ["spell"] },
 { name: "Use a spell that heals or damages LP", types: ["spell"] }
];
bingoList[8] = [
 { name: "Have a hand of 5 females", types: ["hand"] },
 { name: "Perform a whole hand Fusion", types: ["hand"] },
 { name: "Win a Duel with a card who's original ATK and DEF was 500 or less without powering them up", types: ["card"] },
 { name: "0 Star Chips", types: ["star"] }
];
bingoList[9] = [
 { name: "Don't use Dragon or Thunder types in a duel", types: ["card"] },
 { name: "Win a mage duel with a deck that only has monsters in it", types: ["win"] },
 { name: "Have three copies of the same card in your hand", types: ["hand"] },
 { name: "Fuse dragonless THTD", types: ["fusing"] }
];
bingoList[10] = [
 { name: "25 of one card", types: ["card"] },
 { name: "3D battle with Psychic Kappa", types: ["duel"] },
 { name: "Win a duel with a monster whose atk is lower than its original atk", types: ["win"] },
 { name: "Defeat 3 different high mages without using the back row", types: ["win"] }
];
bingoList[11] = [
 { name: "Beat Seto 2", types: ["win"] },
 { name: "Fuse Shadow Specter", types: ["fusing"] },
 { name: "Destroy 5+ monsters with a spell", types: ["spell"] },
 { name: "Play a non destruction trap", types: ["trap"] }
];
bingoList[12] = [
 { name: "Defeat an opponent with a defensive win", types: ["win"] },
 { name: "Own 3 different ritual spells", types: ["spell"] },
 { name: "Don't use Umi", types: ["spell"] },
 { name: "Have a loaded field", types: ["field"] }
];
bingoList[13] = [
 { name: "Exact lethal to an opponent", types: ["win"] },
 { name: "Win a duel when you have less than or equal to 500 LP left", types: ["win"] },
 { name: "Finish off a low mage with a dinosaur", types: ["win"] },
 { name: "A-Tec weevil/mai/bakura/teana 2", types: ["tech"] }
];
bingoList[14] = [
 { name: "Fuse 7 Colored Fish", types: ["fusing"] },
 { name: "Fuse Harpies Feather Duster", types: ["fusing"] },
 { name: "Fuse and equip dark energy", types: ["fusing"] },
 { name: "Fuse Dark Elf without using a female", types: ["fusing"] }
];
bingoList[15] = [
 { name: "Control mystical sand, nekogal and queen of autumn leaves on the field", types: ["field"] },
 { name: "Win a duel with an attack that isn't a direct monster attack", types: ["win"] },
 { name: "500 or more total cards in chest", types: ["card"] },
 { name: "Win with S-Tec", types: ["tech"] }
];
bingoList[16] = [
 { name: "Lose to Teana", types: ["lose"] },
 { name: "D-Tec Rex", types: ["tech"] },
 { name: "Beat Heishin 1", types: ["heishin1"] },
 { name: "Win a duel with a card who's name ends with 'man'", types: ["win"] }
];
bingoList[17] = [
 { name: "Win with with a card you drew first turn", types: ["win"] },
 { name: "Destroy 5 spells and/or traps at the same time with a single effect card", types: ["spell"] },
 { name: "Beat a high mage without any thunders in your deck", types: ["win"] },
 { name: "Control 3 copies of the same monster with different attack values", types: ["field"] }
];
bingoList[18] = [
 { name: "Trapless A-Tec", types: ["tech"] },
 { name: "Defeat labyrinth mage 3 times", types: ["win"] },
 { name: "Defeat mage soldier 5 times", types: ["win"] },
 { name: "Defeat all WT opponents with 0 thunders", types: ["win"] }
];
bingoList[19] = [
 { name: "Use 6 cards in one turn without tossing", types: ["card"] },
 { name: "Use an Exodia card to defeat an opponent (ie. Left Arm hits an opponent to 0 LP)", types: ["win"] },
 { name: "Win a Duel with an LP damaging Magic or Trap card", types: ["win"] },
 { name: "Have your monster field loaded with Winged Beast type cards", types: ["field"] }
];
bingoList[20] = [
 { name: "Beat all Egypt 1 opponents (except Heishin 1)", types: ["heishin1"] },
 { name: "Wipe out opponent's entire LP (from the amount the duel started with) in a single turn", types: ["win"] },
 { name: "Have the AI activate type-specific removal (Dragon Capture Jar, etc)", types: ["spell"] },
 { name: "Power up a card with an original attack of 500 or less to at least 3000 ATK", types: ["spell"] }
];
bingoList[21] = [
 { name: "Perform a Ritual", types: ["spell"] },
 { name: "Beat Rex with a deck with monsters with no more than 500 original ATK", types: ["win"] },
 { name: "Have 5 of the same monster card on your field", types: ["field"] },
 { name: "Win a duel with a deck with only Dinosaur-type monsters in it", types: ["win"] }
];
bingoList[22] = [
 { name: "Win a High Mage duel without fusing", types: ["win"] },
 { name: "Destroy PUGM with Eradicating Aerosol", types: ["destroy"] },
 { name: "Win against a low mage with them only playing their respective field spell", types: ["field"] },
 { name: "Win a Duel with a card who's original ATK was 0", types: ["win"] }
];
bingoList[23] = [
 { name: "Opponent's Field is loaded", types: ["field"] },
 { name: "Win a duel with an 100 LP or less attack", types: ["win"] },
 { name: "Duel everyone at least once (besides final 6)", types: ["duel"] },
 { name: "Destroy Labyrinth Wall with Breath of Light", types: ["destroy"] }
];
bingoList[24] = [
 { name: "Win a duel using only unfavorable astrological attacks", types: ["win"] },
 { name: "Win a duel after the field has been every field type", types: ["field"] },
 { name: "A-Pow or better Heishin 1", types: ["pow"] },
 { name: "Win a duel with a deck with only Plant-type monsters in it", types: ["win"] }
];
bingoList[25] = [
 { name: "Both fields are loaded", types: ["field"] },
 { name: "Beat Kaiba once without skipping battle animations", types: ["win"] },
 { name: "Boost a card to max ATK or max DEF", types: ["spell"] },
 { name: "Beat every Mage without changing the field type", types: ["field"] }
];
