bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
 { name: "No saving", types: ["save"] },
 { name: "Buy 3 items from a shop", types: ["money"] },
 { name: "Defeat an enemy using only punches", types: ["fighting"] },
 { name: "Obtain 3 extra lives", types: ["life"] }
];
bingoList[2] = [
 { name: "Kill a knight", types: ["future"] },
 { name: "Defeat an enemy using only kicks", types: ["fighting"] },
 { name: "Obtain a potion", types: ["money","heal"] }
];
bingoList[3] = [
 { name: "Touch a cloud", types: ["air"] },
 { name: "Kill a zombie/mummy", types: ["ghost"] },
 { name: "Complete an autoscroll section", types: ["level"] },
 { name: "Complete a prologue/tutorial", types: ["cutscene"] }
];
bingoList[4] = [
 { name: "Collect 100 yellow/golden items", types: ["money"] },
 { name: "Obtain a card", types: ["obtain"] },
 { name: "Drain an enemy bar", types: ["boss"] },
 { name: "Complete a bonus/special stage", types: ["level"] }
];
bingoList[5] = [
 { name: "Kill a spider", types: ["bug"] },
 { name: "Obtain a fruit", types: ["shop"] },
 { name: "Level up to 4", types: ["hp"] },
 { name: "Enter a forest/jungle", types: ["weapon","area"] }
];
bingoList[6] = [
 { name: "Enter a castle", types: ["castle","area"] },
 { name: "Enter a desert", types: ["fire","area"] },
 { name: "Talk to a King or Princess", types: ["castle"] },
 { name: "Talk to a scientist", types: ["sci"] },
 { name: "New character/partner", types: ["char"] }
];
bingoList[7] = [
 { name: "Enter a snowy/icy area", types: ["snow", "ice","area"] },
 { name: "Ride an animal", types: ["vehicle"] },
 { name: "New vehicle", types: ["vehicle"] },
 { name: "Heal an ally", types: ["heal"] }
];
bingoList[8] = [
 { name: "Restore air with a bubble", types: ["water"] },
 { name: "Weapon upgrade", types: ["weapon"] },
 { name: "Win a race", types: ["race"] },
 { name: "Enter an inn/hotel", types: ["castle","area"] }
];
bingoList[9] = [
 { name: "Use a key", types: ["boss"] },
 { name: "Escape from prison", types: ["guard"] },
 { name: "Destroy an enemy vehicle", types: ["vehicle"] },
 { name: "Enter strong wind currents", types: ["wind"] }
];
bingoList[10] = [
 { name: "Obtain an explosive", types: ["weapon"] },
 { name: "Enter a volcano", types: ["fire","area"] },
 { name: "Don't shoot", types: ["save","ability","weapon"] },
 { name: "Armor/Defense upgrade", types: ["hp"] }
];
bingoList[11] = [
 { name: "Learn an ability involving magic", types: ["ability"] },
 { name: "Obtain a hammer", types: ["weapon"] },
 { name: "Beat a boss", types: ["boss"] },
 { name: "Play an instrument/song", types: ["ability"] }
];
bingoList[12] = [
 { name: "Boots/shoes upgrade", types: ["clothes"] },
 { name: "Enter outer space", types: ["area"] },
 { name: "Ride an electric elevator", types: ["vehicle"] }
];
bingoList[13] = [
 { name: "Catch a thief/criminal", types: ["guard"] },
 { name: "Read a book", types: ["lerning"] },
 { name: "Learn an ability involving water", types: ["ability","water"] }
];
bingoList[14] = [
 { name: "Ammo upgrade", types: ["weapon"] },
 { name: "100k points", types: ["level"] },
 { name: "Learn a password", types: ["guard"] }
];
bingoList[15] = [
 { name: "Increase max health", types: ["hp"] },
 { name: "Kill a floating hand", types: ["ghost"] },
 { name: "Obtain an area map", types: ["boss"] },
 { name: "Complete a stealth section", types: ["guard"] }
 ];
bingoList[16] = [
 { name: "Learn an ability involving fire", types: ["ability"] },
 { name: "Ride a snowboard", types: ["ice"] },
 { name: "Complete a rollercoaster/minecart ride", types: ["area"] },
 { name: "Rescue an NPC", types: ["save"] }
];
bingoList[17] = [
 { name: "Ride a boat/raft", types: ["vehicle"] },
 { name: "Defeat an insect boss", types: ["boss","bug"] },
 { name: "Kill a ghost", types: ["ghost"] },
 { name: "Kill a King", types: ["castle"] }
];
bingoList[18] = [
 { name: "Complete a world", types: ["boss"] },
 { name: "Learn how to shrink", types: ["ability"] },
 { name: "Stun an enemy", types: ["ability"] }
];
bingoList[19] = [
 { name: "Put on a disguise", types: ["guard"] },
 { name: "Kill a shapeshifter", types: ["ghost"] },
 { name: "Defeat your rival/dark-side", types: ["cutscene"] },
 { name: "Glitch out of bounds", types: ["glitch"] }
];
bingoList[20] = [
 { name: "Ride a train", types: ["vehicle"] },
 { name: "Obtain ability to warp", types: ["ability"] },
 { name: "Learn how to dig", types: ["ability"] },
 { name: "Transform into an animal", types: ["ability"] }
];
bingoList[21] = [
 { name: "Manipulate time", types: ["puzzle"] },
 { name: "Change the water level", types: ["water"] },
 { name: "Turn invisible", types: ["ability"] }
];
bingoList[22] = [
 { name: "Flip gravity", types: ["puzzle"] },
 { name: "Kill a vampire", types: ["ghost","boss"] },
 { name: "Defeat three bosses", types: ["boss"] }
];
bingoList[23] = [
 { name: "Obtain the ability to walk underwater", types: ["ability"] },
 { name: "Turn the lights on", types: ["puzzle"] }
];
bingoList[24] = [
 { name: "Defeat an enemy dragon", types: ["boss"] },
 { name: "Pass through a fake wall/floor", types: ["ghost"] },
 { name: "No jumping", types: ["boss","save","air","ability"] }
];
bingoList[25] = [
  { name: "Win a tournament", types: ["water"] },
  { name: "Beat a game", types: ["boss"] }
];
