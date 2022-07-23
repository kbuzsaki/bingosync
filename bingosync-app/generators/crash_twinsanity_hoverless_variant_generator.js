// Twinsanity Bingo
// Original Twinsanity Bingo by BetaM
// Hoverless Varient
// This varient allows all goals to be completed without needing hover skip. This is a more fair bingo variant as it removes the most inconisitent skip in the run.

bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
{ name: "Gain a life from monkeys",types: []},
{ name: "Highest reachable point of the beach chunk",types: []},
{ name: "Do the Nut Skip" ,types: []},
{ name: "Defeat the invisible bats in Jungle Bungle's cave" ,types: []},
{ name: "Get all gems in Jungle Bungle" ,types: []}
];
bingoList[2] = [
{ name: "Defeat the clapping tribesmen" ,types: []},
{ name: "Warp to the secret beach using a haystack" ,types: []},
{ name: "Feed bombs to every totem that takes it" ,types: []},
{ name: "Get ontop of the lab" ,types: []}, 
];
bingoList[3] = [
{ name: "Get 2 Cortex in a single cutscene" ,types: []},
{ name: "Worm Minigame with Cortex Worms" ,types: []},
{ name: "Get all gems in Totem Hokum" ,types: []}
];
bingoList[4] = [
{ name: "Stop all the bouncy crates in Jungle Bungle" ,types: []},
{ name: "Teleport to the void at the drill chase" ,types: []}, //backtrack into cavern
{ name: "Get all gems in Ice Climb" ,types: []}
];
bingoList[5] = [
{ name: "Collect the Red gem in 8 levels" ,types: []}, 
{ name: "Collect the Yellow gem in 8 levels" ,types: []}, 
{ name: "Collect the Clear gem in 8 levels" ,types: []}, 
{ name: "Get on the watchtower at the start of the bee chase" ,types: []},
{ name: "Get a crate stuck on you in Slip Slide Icecapades" ,types: []}
];
bingoList[6] = [
{ name: "Totempole cutscene without worm bounce" ,types: []},
{ name: "Do Village Skip" ,types: []},
{ name: "Cheat death in totem or classroom" ,types: []},
]; 
bingoList[7] = [
{ name: "Beat Uka Uka" ,types: []},
{ name: "Beat Dingodile" ,types: []},
{ name: "Ride Cortex's plasma blast for 5 seconds" ,types: []},
{ name: "Stand ontop of the bus in Rooftop Rampage" ,types:[]},
];
bingoList[8] = [
{ name: "Collect all gems in Iceberg Lab" ,types: []},
{ name: "Collect all gems in N.Sanity Island" ,types: []},
{ name: "Collect all gems in Academy of Evil" ,types: []},
{ name: "Collect all gems in Twinsanity Island" ,types: []},
{ name: "Beat any boss twice" ,types: []}
];
bingoList[9] = [
{ name: "Defeat Cortex while standing on the outer ring" ,types: []},
{ name: "Escape out of a boss arena" ,types: []},
{ name: "Ride the rodeo for 5 seconds in Boiler Room Doom" ,types: []},
];
bingoList[10] = [
{ name: "Defeat all tribesmen in boats" ,types: []},
{ name: "Defeat all dogs" ,types: []},
{ name: "Defeat all chicken at the farm" ,types: []},
{ name: "Defeat all enemies after the bus chase" ,types: []},
{ name: "Defeat all ants in Iceberg Lab" ,types: []},
{ name: "Defeat all drill ants" ,types: []},
{ name: "Beat Rooftop Rampage without collecting the purple gem" ,types: []},
];
bingoList[11] = [
{ name: "Damage boost from a bat" ,types: []},
{ name: "Yellow gem in IC using Cortex" ,types: []},
{ name: "Do Boat OoB and cross the river" ,types: []},
];
bingoList[12] = [
{ name: "Go through the shortcut to HSH" ,types: []},
{ name: "Kill all the villagers in the village and both beaches" ,types: []},
{ name: "Kill all the rats in Boiler Room Doom" ,types: []},
{ name: "Kill all the rats in HSH" ,types: []},
];
bingoList[13] = [
{ name: "Defeat every swinger in the swinger room" ,types: []},
{ name: "Follow the mystery springs in HSH" ,types: []},
{ name: "Get all gems in Bandicoot Pursuit" ,types: []},
];
bingoList[14] = [
{ name: "Touch N.Gin" ,types: []},
{ name: "Destroy all life crates on slippery ice" ,types: []},
{ name: "Make N. Gin hit himself 3 times in one hit" ,types: []},
{ name: "Get all gems in Ant Agony" ,types: []},
];
bingoList[15] = [
{ name: "Get the yellow gem in HSH from OoB" ,types: []},
{ name: "Destroy all life crates in the walrus chase" ,types: []},
{ name: "Make an ant spin you on a gargoyle post 3 times" ,types: []},
];
bingoList[16] = [
{ name: "Skip 2 puzzles in Boiler" ,types: []},
{ name: "Beat Amberly without glitches" ,types: []},
{ name: "Get back into the village after the chase" ,types: []}
];
bingoList[17] = [
{ name: "Beat SSI without hitting switches" ,types: []},
{ name: "Get into a cutscene as an unintended character/combo" ,types: []},
{ name: "Beat CC without ringing bells" ,types: []}
];
bingoList[18] = [
{ name: "Fall into the hole below the rising slime" ,types: []},
{ name: "Defeat 3 invisible enemies in Classroom" ,types: []},
{ name: "Escape the village" ,types: []}
];
bingoList[19] = [
{ name: "Avoid ringing bells in Rooftop yourself" ,types: []},
{ name: "Avoid all gems in a Humiliskate level" ,types: []},
{ name: "Skip all Cortex chase triggers in BP" ,types: []},
{ name: "Skip No Cortex chase triggers in BP or TH" ,types: []},
{ name: "Skip all Cortex chase triggers in TH" ,types: []}
];
bingoList[20] = [
{ name: "Collect 3 Cortex lives as Crash" ,types: []},
{ name: "Get invincibility 5 times" ,types: []},
{ name: "99 Ammo" ,types: []}
];
bingoList[21] = [
{ name: "Get all 3 caged gems glitchless in TI" ,types: []},
{ name: "Break all blue light bulbs in AA" ,types: []},
];
bingoList[22] = [
{ name: "Activate the button at the big ant fight in AA" ,types: []},
{ name: "AA ball puzzle without crossing the gap (trickshot)" ,types: []},
{ name: "Break the BP cannon by shooting balls OoB", types: []},
{ name: "Skip both color platform sections in AA", types: []},
];
bingoList[23] = [
{ name: "Beat the final boss" ,types: []},
{ name: "50 Lives" ,types: []},
];
bingoList[24] = [
{ name: "Get invincibility in Rockslide Rumble" ,types: []},
{ name: "All Wumpa at the bottom of the 10th Dimension Lab" ,types: []},
{ name: "Stand on a Red Sphere stuck in midair" ,types: []}
];
bingoList[25] = [
{ name: "Get all gems in 4 levels" ,types: []},
{ name: "Collect at least 7 gems in every Hub" ,types: []},
{ name: "Collect 10 gems in a set of 4 levels" ,types: []},
{ name: "Collect at least 8 crystals" ,types: []}
];