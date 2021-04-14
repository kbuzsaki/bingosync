var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [
   [
      {
         "name":"Get softlocked",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Beat 2 levels tagged Autoscroll",
         "types":[
            "Tagged Levels"
         ]
      },
      {
         "name":"Beat 2 SMB1 levels",
         "types":[
            "Beat 2 X levels"
         ]
      },
      {
         "name":"Beat 2 SMW levels",
         "types":[
            "Beat 2 X levels"
         ]
      },
      {
         "name":"Status clear condition (Power Ups)",
         "types":[
            "Clear conditions"
         ]
      },
      {
         "name":"Finish a level while holding a koopa shell",
         "types":[
            "Finish a level in X"
         ]
      },
      {
         "name":"Defeat a Bowser Jr.",
         "types":[
            "Boss Fight"
         ]
      },
      {
         "name":"Naked Pipe",
         "types":[
            "Miscellaneous Goals"
         ]
      }
   ],
   [
      {
         "name":"Death by Hammer Bro hammer",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Death by mole wrench",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Death by Magikoopa projectile",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Beat 2 EU level",
         "types":[
            "Region levels"
         ]
      },
      {
         "name":"Beat 2 SMB3 levels",
         "types":[
            "Beat 2 X levels"
         ]
      },
      {
         "name":"Finish a level on a Yoshi",
         "types":[
            "Finish a level in X"
         ]
      },
      {
         "name":"Defeat a Bowser",
         "types":[
            "Boss Fight"
         ]
      }
   ],
   [
      {
         "name":"Death by getting crushed",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Death by Blooper",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Death by bomb explosion",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Beat 2 AUS level",
         "types":[
            "Region levels"
         ]
      },
      {
         "name":"Beat 2 levels tagged Speedrun",
         "types":[
            "Tagged Levels"
         ]
      },
      {
         "name":"Beat 2 levels tagged Technical",
         "types":[
            "Tagged Levels"
         ]
      },
      {
         "name":"Collect 2 checkpoints in a single level",
         "types":[
            "Miscellaneous Goals"
         ]
      },
      {
         "name":"Collect 1 checkpoint in a single level",
         "types":[
            "Miscellaneous Goals"
         ]
      }
   ],
   [
      {
         "name":"Death by any fish",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Beat 2 JPN level",
         "types":[
            "Region levels"
         ]
      },
      {
         "name":"Beat 2 levels tagged Puzzle-solving",
         "types":[
            "Tagged Levels"
         ]
      },
      {
         "name":"Beat 2 NSMBU levels",
         "types":[
            "Beat 2 X levels"
         ]
      },
      {
         "name":"Finish a level in a car",
         "types":[
            "Finish a level in X"
         ]
      },
      {
         "name":"Eliminate a player",
         "types":[
            "Online Multiplayer goals"
         ]
      }
   ],
   [
      {
         "name":"Death by Magikoopa projectile",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Beat 2 NA level",
         "types":[
            "Region levels"
         ]
      },
      {
         "name":"Beat 2 3D World levels",
         "types":[
            "Beat 2 X levels"
         ]
      },
      {
         "name":"Don't take damage clear condition",
         "types":[
            "Clear conditions"
         ]
      },
      {
         "name":"Finish a level in a clown car",
         "types":[
            "Finish a level in X"
         ]
      },
      {
         "name":"Defeat a Boom Boom or Pom Pom",
         "types":[
            "Boss Fight"
         ]
      },
      {
         "name":"Grab a 10, 30, + 50 in level",
         "types":[
            "Coin goals"
         ]
      }
   ],
   [
      {
         "name":"Death by Angry Sun",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Grab coin clear condition",
         "types":[
            "Clear conditions"
         ]
      },
      {
         "name":"Finish a level in a lakitu cloud",
         "types":[
            "Finish a level in X"
         ]
      },
      {
         "name":"Defeat a Koopaling",
         "types":[
            "Boss Fight"
         ]
      },
      {
         "name":"Beat Expert or Super Expert in co-op",
         "types":[
            "Online Multiplayer goals"
         ]
      },
      {
         "name":"Get at least 1 life from popping mini game",
         "types":[
            "Worlds"
         ]
      }
   ],
   [
      {
         "name":"Death by car",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Death by Shoe goomba",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Beat 2 levels tagged Music",
         "types":[
            "Tagged Levels"
         ]
      },
      {
         "name":"Killing enemies clear condition",
         "types":[
            "Clear conditions"
         ]
      },
      {
         "name":"Finish a level in a dry bones shell",
         "types":[
            "Finish a level in X"
         ]
      },
      {
         "name":"Get a world record",
         "types":[
            "Record-Getting goals"
         ]
      },
      {
         "name":"Get at least 1 life from baseball mini game",
         "types":[
            "Worlds"
         ]
      },
      {
         "name":"Grab top of flagpole",
         "types":[
            "Miscellaneous Goals"
         ]
      },
      {
         "name":"6+ Enemy stack",
         "types":[
            "Miscellaneous Goals"
         ]
      }
   ],
   [
      {
         "name":"Defeat an enemy with a moon",
         "types":[
            "Boss Fight"
         ]
      },
      {
         "name":"Get a first clear",
         "types":[
            "Record-Getting goals"
         ]
      },
      {
         "name":"SNES/ N64/ GCN/ Wii Music",
         "types":[
            "Sound Effects/Music"
         ]
      },
      {
         "name":"Non-Flagpole Finish (SMB3/ SMW/ Castle)",
         "types":[
            "Miscellaneous Goals"
         ]
      },
      {
         "name":"End a level with exactly 69 coins",
         "types":[
            "Coin goals"
         ]
      },
      {
         "name":"Collect 100 coins",
         "types":[
            "Coin goals"
         ]
      }
   ],
   [
      {
         "name":"Beat 2 Ground Theme Levels",
         "types":[
            "Beat X themed level"
         ]
      },
      {
         "name":"Beat 2 Ghost House Theme Levels",
         "types":[
            "Beat X themed level"
         ]
      },
      {
         "name":"Beat 2 Desert Theme Levels",
         "types":[
            "Beat X themed level"
         ]
      },
      {
         "name":"Find a piggie sound effect",
         "types":[
            "Sound Effects/Music"
         ]
      },
      {
         "name":"Boss Music in Level",
         "types":[
            "Sound Effects/Music"
         ]
      },
      {
         "name":"Beat a Title Screen Level",
         "types":[
            "Miscellaneous Goals"
         ]
      },
      {
         "name":"Invisible block w/ anything but a coin",
         "types":[
            "Miscellaneous Goals"
         ]
      }
   ],
   [
      {
         "name":"\"Uno Mas\" in title",
         "types":[
            "Level with X in title"
         ]
      },
      {
         "name":"\"First Level\" in title",
         "types":[
            "Level with X in title"
         ]
      },
      {
         "name":"Beat 2 Underwater Theme Levels",
         "types":[
            "Beat X themed level"
         ]
      },
      {
         "name":"Beat 2 Night Theme Levels",
         "types":[
            "Beat X themed level"
         ]
      },
      {
         "name":"Do a Shell-Jump",
         "types":[
            "Miscellaneous Goals"
         ]
      },
      {
         "name":"3 1-Ups in a single level (endless)",
         "types":[
            "Miscellaneous Goals"
         ]
      },
      {
         "name":"Finish a level w/ exactly 0 pts (before time bonus)",
         "types":[
            "Score goals"
         ]
      }
   ],
   [
      {
         "name":"Finish 2 levels in under 10 seconds",
         "types":[
            "Beat a level in under X seconds"
         ]
      },
      {
         "name":"Beat 2 Forest Theme Levels",
         "types":[
            "Beat X themed level"
         ]
      },
      {
         "name":"Beat 2 Snow Theme Levels",
         "types":[
            "Beat X themed level"
         ]
      },
      {
         "name":"Beat 2 Castle Theme Levels",
         "types":[
            "Beat X themed level"
         ]
      },
      {
         "name":"Level has a THX",
         "types":[
            "Miscellaneous Goals"
         ]
      }
   ],
   [
      {
         "name":"Finish 2 levels in under 20 seconds",
         "types":[
            "Beat a level in under X seconds"
         ]
      },
      {
         "name":"Beat 2 Airship Theme Levels",
         "types":[
            "Beat X themed level"
         ]
      },
      {
         "name":"Beat 2 Sky Theme Levels",
         "types":[
            "Beat X themed level"
         ]
      },
      {
         "name":"Touch The Flagpole in VS (Not Win)",
         "types":[
            "Online Multiplayer goals"
         ]
      },
      {
         "name":"Get 5 lives from slot machine mini game",
         "types":[
            "Worlds"
         ]
      }
   ],
   [
      {
         "name":"Finish a level with a key",
         "types":[
            "Finish a level in X"
         ]
      },
      {
         "name":"Get a VS win",
         "types":[
            "Online Multiplayer goals"
         ]
      },
      {
         "name":"4-Lane in VS match",
         "types":[
            "Online Multiplayer goals"
         ]
      },
      {
         "name":"1-1 Remake or Variant",
         "types":[
            "Miscellaneous Goals"
         ]
      },
      {
         "name":"Finish a level w/ exactly 6900 pts (before time bonus)",
         "types":[
            "Score goals"
         ]
      }
   ],
   [
      {
         "name":"Beat 2 Super Expert levels",
         "types":[
            "Beat X Levels in Y Difficulty"
         ]
      },
      {
         "name":"Beat 4 Expert levels",
         "types":[
            "Beat X Levels in Y Difficulty"
         ]
      },
      {
         "name":"Beat an Expert level first try",
         "types":[
            "Beat X level first try"
         ]
      },
      {
         "name":"Beat a World with 1-4 levels",
         "types":[
            "Worlds"
         ]
      },
      {
         "name":"Beat a level from a World with 69 lives",
         "types":[
            "Worlds"
         ]
      }
   ],
   [
      {
         "name":"Beat 10 Normal levels",
         "types":[
            "Beat X Levels in Y Difficulty"
         ]
      },
      {
         "name":"Beat 15 Easy levels",
         "types":[
            "Beat X Levels in Y Difficulty"
         ]
      },
      {
         "name":"Have over 100k total pts (endless or worlds)",
         "types":[
            "Score goals"
         ]
      }
   ],
   [
      {
         "name":"Death by 3 unique aquatic enemies",
         "types":[
            "Death Goals"
         ]
      },
      {
         "name":"Have 31 lives in Endless (Any difficulty)",
         "types":[
            "Have X lives in X difficulty"
         ]
      },
      {
         "name":"Beat a level from a World with 99 lives",
         "types":[
            "Worlds"
         ]
      }
   ],
   [
      {
         "name":"Beat a Super Expert level first try",
         "types":[
            "Beat X level first try"
         ]
      },
      {
         "name":"Beat 2 of each endless difficulty",
         "types":[
            "Miscellaneous Goals"
         ]
      }
   ],
   [
      {
         "name":"Beat 5 NA level",
         "types":[
            "Region levels"
         ]
      },
      {
         "name":"Beat 5 AUS level",
         "types":[
            "Region levels"
         ]
      },
      {
         "name":"Beat 5 levels tagged Autoscroll",
         "types":[
            "Tagged Levels"
         ]
      },
      {
         "name":"Beat 5 levels tagged Technical",
         "types":[
            "Tagged Levels"
         ]
      },
      {
         "name":"Beat 5 SMB1 levels",
         "types":[
            "Beat 2 X levels"
         ]
      },
      {
         "name":"Beat 5 SMW levels",
         "types":[
            "Beat 2 X levels"
         ]
      },
      {
         "name":"Beat 5 3D World levels",
         "types":[
            "Beat 2 X levels"
         ]
      }
   ],
   [
      {
         "name":"Beat 5 EU level",
         "types":[
            "Region levels"
         ]
      },
      {
         "name":"Beat 5 JPN level",
         "types":[
            "Region levels"
         ]
      },
      {
         "name":"Beat 5 levels tagged Speedrun",
         "types":[
            "Tagged Levels"
         ]
      },
      {
         "name":"Beat 5 levels tagged Music",
         "types":[
            "Tagged Levels"
         ]
      },
      {
         "name":"Beat 5 levels tagged Puzzle-solving",
         "types":[
            "Tagged Levels"
         ]
      },
      {
         "name":"Beat 5 SMB3 levels",
         "types":[
            "Beat 2 X levels"
         ]
      },
      {
         "name":"Beat 5 NSMBU levels",
         "types":[
            "Beat 2 X levels"
         ]
      }
   ],
   [
      {
         "name":"Beat 5 new levels",
         "types":[
            "Beat 5 X levels"
         ]
      },
      {
         "name":"Beat 5 hot levels",
         "types":[
            "Beat 5 X levels"
         ]
      },
      {
         "name":"3+ Man Flagpole Finish in VS",
         "types":[
            "Online Multiplayer goals"
         ]
      }
   ],
   [
      {
         "name":"Have 20 lives in Easy",
         "types":[
            "Have X lives in X difficulty"
         ]
      },
      {
         "name":"Beat a World with 5-8 levels",
         "types":[
            "Worlds"
         ]
      },
      {
         "name":"1 unique powerup from each theme",
         "types":[
            "Miscellaneous Goals"
         ]
      }
   ],
   [
      {
         "name":"Beat 6 Expert levels",
         "types":[
            "Beat X Levels in Y Difficulty"
         ]
      },
      {
         "name":"Have 15 lives in Normal",
         "types":[
            "Have X lives in X difficulty"
         ]
      },
      {
         "name":"Get 5 world records",
         "types":[
            "Record-Getting goals"
         ]
      }
   ],
   [
      {
         "name":"Beat 3 Super Expert levels",
         "types":[
            "Beat X Levels in Y Difficulty"
         ]
      },
      {
         "name":"Have 20 lives in Expert",
         "types":[
            "Have X lives in X difficulty"
         ]
      },
      {
         "name":"Beat 5 uncleared levels",
         "types":[
            "Record-Getting goals"
         ]
      }
   ],
   [
      {
         "name":"Have 30 lives in Easy",
         "types":[
            "Have X lives in X difficulty"
         ]
      },
      {
         "name":"Have 25 lives in Normal",
         "types":[
            "Have X lives in X difficulty"
         ]
      },
      {
         "name":"Have 25 lives in Expert",
         "types":[
            "Have X lives in X difficulty"
         ]
      },
      {
         "name":"Get 3 VS wins",
         "types":[
            "Online Multiplayer goals"
         ]
      },
      {
         "name":"Beat a World with 9+ levels",
         "types":[
            "Worlds"
         ]
      }
   ],
   [
      {
         "name":"Beat 15 Normal levels",
         "types":[
            "Beat X Levels in Y Difficulty"
         ]
      },
      {
         "name":"Beat 20 Easy levels",
         "types":[
            "Beat X Levels in Y Difficulty"
         ]
      },
      {
         "name":"Have over 250k total pts (endless or worlds)",
         "types":[
            "Score goals"
         ]
      }
   ]
]
