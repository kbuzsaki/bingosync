bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
 { name: "No saving", types: ["constant"] },
 { name: "Buy 3 items from a shop", types: ["money"] },
 { name: "Defeat an enemy using only punches", types: ["fighting","enemy"] },
 { name: "Obtain 3 extra lives", types: ["life"] }
];
bingoList[2] = [
 { name: "Defeat a knight", types: ["castle","enemy"] },
 { name: "Defeat an enemy using only kicks", types: ["fighting","enemy"] },
 { name: "Complete an autoscroll section", types: ["level"] },
 { name: "Obtain a potion", types: ["money","hp"] },
 { name: "Do a dance", types: ["ability","level"] }
];
bingoList[3] = [
 { name: "Touch a cloud", types: ["wind"] },
 { name: "Defeat a zombie/mummy", types: ["ghost","enemy"] },
 { name: "Climb to the summit of a mountain", types: ["area"] },
 { name: "Complete a prologue/tutorial", types: ["cutscene"] },
 { name: "Barrel roll", types: ["wind"] }
];
bingoList[4] = [
 { name: "Collect 100 yellow/golden items", types: ["money","level"] },
 { name: "Obtain a card", types: ["puzzle"] },
 { name: "Drain an enemy bar", types: ["boss"] },
 { name: "Complete a bonus/special stage", types: ["level"] },
 { name: "Defeat 15 unique enemies", types: ["level"] }
];
bingoList[5] = [
 { name: "Defeat a spider", types: ["bug","enemy"] },
 { name: "Obtain a fruit", types: ["money"] },
 { name: "Level up to 4", types: ["hp"] },
 { name: "Defeat a bat", types: ["ghost","enemy"] },
 { name: "Enter a forest/jungle", types: ["area"] }
];
bingoList[6] = [
 { name: "Enter a castle", types: ["castle","area"] },
 { name: "Enter a desert", types: ["fire","area"] },
 { name: "Talk to royalty", types: ["castle","npc","boss"] },
 { name: "Talk to a scientist", types: ["npc"] },
 { name: "New partner or party member", types: ["char"] }
];
bingoList[7] = [
 { name: "Enter a snowy/icy area", types: ["snow","area"] },
 { name: "Ride an animal", types: ["vehicle"] },
 { name: "New vehicle", types: ["vehicle"] },
 { name: "Become poisoned", types: ["hp","ability"] },
 { name: "Restore an ally's health", types: ["hp, char"] }
];
bingoList[8] = [
 { name: "Melee weapon upgrade", types: ["weapon"] },
 { name: "Win a race", types: ["race"] },
 { name: "Enter an inn/hotel", types: ["castle","area"] },
 { name: "Disturb the bees", types: ["bug"] },
 { name: "Defeat a slime", types: ["enemy"] }
];
bingoList[9] = [
 { name: "Use a key", types: ["boss"] },
 { name: "Escape from prison", types: ["guard"] },
 { name: "Destroy an enemy vehicle", types: ["vehicle","enemy"] },
 { name: "Enter strong wind currents", types: ["wind"] },
 { name: "Obtain a new hat", types: ["hp"] }
];
bingoList[10] = [
 { name: "Obtain an explosive", types: ["weapon"] },
 { name: "Enter a volcano", types: ["fire","area"] },
 { name: "Don't shoot", types: ["constant","ability","weapon"] },
 { name: "Armor/Defense upgrade", types: ["hp"] },
 { name: "Get shocked by electricity", types: ["enemy","area"] }
];
bingoList[11] = [
 { name: "Learn an ability involving magic", types: ["ability"] },
 { name: "Obtain a hammer", types: ["weapon"] },
 { name: "Defeat a boss", types: ["boss"] },
 { name: "Play an instrument/song", types: ["ability"] },
 { name: "Take damage from your own attack", types: ["weapon","ability"] }
];
bingoList[12] = [
 { name: "Boots/Shoes upgrade", types: ["hp"] },
 { name: "Enter outer space", types: ["area"] },
 { name: "Go through a floating ring", types: ["wind","level"] },
 { name: "Light a fire", types: ["fire","puzzle"] },
 { name: "Ride an electric elevator", types: ["vehicle"] }
];
bingoList[13] = [
 { name: "Catch a thief/criminal", types: ["guard"] },
 { name: "Read a book", types: ["learning"] },
 { name: "Defeat a snake or worm", types: ["bug","enemy"] },
 { name: "Learn an ability involving water", types: ["ability","water"] },
 { name: "Get covered in goo or mud", types: ["area"] }
];
bingoList[14] = [
 { name: "Ranged weapon upgrade", types: ["weapon"] },
 { name: "100k points", types: ["level"] },
 { name: "Hit a target", types: ["level"] },
 { name: "Collect letters to spell a word", types: ["money"] },
 { name: "Learn a password", types: ["guard","puzzle"] }
];
bingoList[15] = [
 { name: "Increase max health", types: ["hp"] },
 { name: "Defeat a floating hand", types: ["ghost","enemy"] },
 { name: "Obtain an area map", types: ["boss"] },
 { name: "Interact with a friendly cat or dog", types: ["npc"] },
 { name: "Buy 5 unique items from a shop", types: ["money"] }
 ];
bingoList[16] = [
 { name: "Learn an ability involving fire", types: ["ability","fire"] },
 { name: "Ride a snowboard", types: ["snow","vehicle"] },
 { name: "Complete a rollercoaster/minecart ride", types: ["area","vehicle"] },
 { name: "Complete a stealth section", types: ["guard"] },
 { name: "Rescue an NPC", types: ["npc"] }
];
bingoList[17] = [
 { name: "Ride a boat/raft", types: ["vehicle"] },
 { name: "Defeat an insect boss", types: ["boss","bug"] },
 { name: "Defeat a ghost", types: ["ghost","enemy"] },
 { name: "Defeat a king", types: ["castle","boss"] },
 { name: "Capture an insect or fish", types: ["bug","water"] }
];
bingoList[18] = [
 { name: "Complete a world", types: ["boss"] },
 { name: "Learn how to shrink", types: ["ability"] },
 { name: "Stun an enemy", types: ["ability"] },
 { name: "Defeat an enemy with a super or ultra attack", types: ["fighting","enemy"] },
 { name: "Outrun a large rolling object", types: ["area","level"] }
];
bingoList[19] = [
 { name: "Put on a disguise", types: ["guard"] },
 { name: "Defeat a shapeshifter", types: ["ghost","enemy"] },
 { name: "Defeat your rival/dark-side", types: ["cutscene","boss"] },
 { name: "Glitch out of bounds", types: ["glitch"] },
 { name: "Ride a flying animal", types: ["vehicle"] }
];
bingoList[20] = [
 { name: "Ride a train", types: ["vehicle"] },
 { name: "Obtain ability to warp", types: ["ability"] },
 { name: "Learn how to dig", types: ["ability"] },
 { name: "Utilize a bubble", types: ["water"] },
 { name: "Break the ice", types: ["snow"] }
];
bingoList[21] = [
 { name: "Manipulate time", types: ["puzzle"] },
 { name: "Change the water level", types: ["water","puzzle"] },
 { name: "Turn invisible", types: ["ability"] },
 { name: "Craft a weapon or armor", types: ["hp","learning","weapon"] },
 { name: "Transform into an animal", types: ["ability"] }
];
bingoList[22] = [
 { name: "Flip gravity", types: ["puzzle"] },
 { name: "Defeat a vampire", types: ["ghost","boss","enemy"] },
 { name: "Defeat three bosses", types: ["boss"] },
 { name: "Revive a character", types: ["hp"] },
 { name: "Pass through a fake wall/floor", types: ["ghost"] }
];
bingoList[23] = [
 { name: "Obtain the ability to swim or walk underwater", types: ["ability"] },
 { name: "Turn the lights on", types: ["puzzle"] },
 { name: "Gain control of an enemy", types: ["ability"] },
 { name: "Learn an ability involving wind", types: ["wind","ability"] },
 { name: "Cook food", types: ["learning"] }
];
bingoList[24] = [
 { name: "Defeat a dragon", types: ["boss","enemy"] },
 { name: "New playable character", types: ["char"] },
 { name: "No jumping", types: ["boss","constant","ability"] },
 { name: "Pacifism", types: ["constant","enemy","boss"] },
 { name: "Transition into having 100 HP", types: ["hp"] }
];
bingoList[25] = [
  { name: "Win a tournament", types: ["race","boss"] },
  { name: "Beat a game", types: ["boss"] }
];
