var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[[
{ "name": "Win the board", "types": ["finish"] },
{ "name": "Get three post-game Goblets", "types": ["finish"] }
],[
{ "name": "Open a Goblet chest", "types": ["board"] },
{ "name": "Accomplish a board-specific Goblet goal", "types": ["board"] }
],[
{ "name": "Kill another player", "types": ["board"] },
{ "name": "Have 100 or more Keys at once", "types": ["board"] },
{ "name": "Raid a weapon cache", "types": ["board"] }
],[
{ "name": "Hit a player with a Boxing Glove", "types": ["board", "item"] },
{ "name": "Shoot a player with the Shotgun", "types": ["board", "item"] },
{ "name": "Knock off a player’s Cactus Disguise", "types": ["board", "item"] }
],[
{ "name": "Hit multiple players with a Beehive", "types": ["board", "item"] },
{ "name": "Hit multiple players with an Eggplant", "types": ["board", "item"] }
],[
{ "name": "Win at Acidic Atoll", "types": ["minigame", "fps"] },
{ "name": "Win at Mystery Maze", "types": ["minigame", "fps"] },
{ "name": "Win at Sidestep Slope", "types": ["minigame", "fps"] },
{ "name": "Win at Slippery Sprint", "types": ["minigame", "fps", "slsp"] }
],[
{ "name": "Win at Miniature Motors", "types": ["minigame", "fps"] },
{ "name": "Win at Rotor Race", "types": ["minigame", "fps", "plane"] }
],[
{ "name": "Win at Altitude Attack", "types": ["minigame", "alat"] },
{ "name": "Win at Tunneling Tanks", "types": ["minigame"] },
{ "name": "Win at Motor Murder", "types": ["minigame"] }
],[
{ "name": "Win at Speedy Sabers", "types": ["minigame"] },
{ "name": "Win at Strategic Shockwave", "types": ["minigame"] },
{ "name": "Win at Temporal Trails", "types": ["minigame"] },
{ "name": "Win at Pummel Punch", "types": ["minigame"] }
],[
{ "name": "Win at Aftershock Arena", "types": ["minigame", "fps"] },
{ "name": "Win at Barn Brawl", "types": ["minigame", "fps"] },
{ "name": "Win at Daring Dogfight", "types": ["minigame", "fps", "plane"] },
{ "name": "Win at Foggy Falll", "types": ["minigame", "fps"] }
],[
{ "name": "Win at Magma and Mages", "types": ["minigame"] },
{ "name": "Win at Snowy Spin", "types": ["minigame"] },
{ "name": "Win at Billiard Battle", "types": ["minigame"] },
{ "name": "Win at Bounding Blocks", "types": ["minigame"] },
{ "name": "Win at Word Wars", "types": ["minigame"] }
],[
{ "name": "Win at Animal Arithmatic", "types": ["minigame"] },
{ "name": "Win at Mortar Mayhem", "types": ["minigame"] },
{ "name": "Win at Rocking Rhythm", "types": ["minigame", "rorh"] },
{ "name": "Win at Fractured Faces", "types": ["minigame"] }
],[
{ "name": "Win at Gift Grab", "types": ["minigame"] },
{ "name": "Win at Swift Shooters", "types": ["minigame"] },
{ "name": "Win at Pack and Pile", "types": ["minigame"] },
{ "name": "Win at Batty Batters", "types": ["minigame"] }
],[
{ "name": "Win at Traffic Theft", "types": ["minigame", "trth"] },
{ "name": "Win at Rolly Ragdolls", "types": ["minigame"] },
{ "name": "Win at Selfish Stride", "types": ["minigame", "sest"] },
{ "name": "Win at Memory Menu", "types": ["minigame"] }
],[
{ "name": "Win at Breaking Blocks", "types": ["minigame"] },
{ "name": "Win at Cannon Circle", "types": ["minigame"] },
{ "name": "Win at Laser Leap", "types": ["minigame"] },
{ "name": "Win at Searching Spotlights", "types": ["minigame"] }
],[
{ "name": "Win at Bullet Barrage", "types": ["minigame"] },
{ "name": "Win at Sorcerer’s Sprint", "types": ["minigame"] },
{ "name": "Win at Spooky Spikes", "types": ["minigame"] }
],[
{ "name": "Win at Bouncing Balls", "types": ["minigame"] },
{ "name": "Win at Elemental Escalation", "types": ["minigame"] },
{ "name": "Win at Rusty Racers", "types": ["minigame", "rura"] },
{ "name": "Win at Morphing Maze", "types": ["minigame", "fps"] }
],[
{ "name": "Win at Crown Capture", "types": ["minigame"] },
{ "name": "Win at Explosive Exchange", "types": ["minigame"] },
{ "name": "Win at Grifting Gifts", "types": ["minigame"] },
{ "name": "Win at Sandy Search", "types": ["minigame", "fps"] }
],[
{ "name": "Win at Thunderous Trench", "types": ["minigame"] },
{ "name": "Win at Sharky Swim", "types": ["minigame", "shsw"] },
{ "name": "Win at House Hunting", "types": ["minigame"] }
],[
{ "name": "Get 5 kills in Altitude Attack", "types": ["minigame", "alat", "challenge"] },
{ "name": "Eat all players in Sharky Swim", "types": ["minigame", "shsw", "challenge"] },
{ "name": "Don’t get hit by any cars with 3+ loot in Traffic Theft", "types": ["minigame", "trth", "challenge"] }
],[
{ "name": "Always pick a unique bridge in a game of Selfish Stride", "types": ["minigame", "sest", "challenge"] }
],[
{ "name": "Get the highest combo bonus in Rocking Rhythm", "types": ["minigame", "rorh", "challenge"] },
{ "name": "Don’t fall off the course in Rusty Racers", "types": ["minigame", "rura", "challenge"] },
{ "name": "Don’t fall in the water in Slippery Sprint", "types": ["minigame", "fps", "slsp", "challenge"] }
],[
{ "name": "Have the reaper collect Blood for you", "types": ["board", "random"] },
{ "name": "Have the reaper collect Keys for you", "types": ["board", "random"] }
],[
{ "name": "Use the Swap Portal to give an opponent a Goblet", "types": ["board", "item", "bad"] },
{ "name": "Visit a Goblet chest without opening it", "types": ["board", "bad"] }
],[
{ "name": "Get lucky with a Present", "types": ["board", "random", "item"] },
{ "name": "Summon an Ancient Evil", "types": ["board", "item"] },
{ "name": "Win an Arcade Challenge", "types": ["board", "item"] }
]];
