var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [
	[{
			"name": "S rank John Gutter",
			"types": ["srank", "jg"]
		},
		{
			"name": "S rank Pizzascape",
			"types": ["srank", "ps"]
		},
		{
			"name": "S rank Ancient Cheese",
			"types": ["srank", "ac"]
		},
		{
			"name": "S rank Bloodsauce Dungeon",
			"types": ["srank", "bsd"]
		},
		{
			"name": "P rank Pepperman",
			"types": ["srank", "boss"]
		}
	],
	[{
			"name": "Grab every toppin in floor 1",
			"types": ["toppin", "floor1"]
		},
		{
			"name": "Touch boiling sauce 10 times",
			"types": ["bsd"]
		},
		{
			"name": "Parry 15 forknights in pizzascape",
			"types": ["enemy", "ps"]
		},
		{
			"name": "8 secrets in floor 1",
			"types": ["floor1", "secret"]
		}, {
			"name": "Parry Pepperman twice in the same attack",
			"types": ["boss"]
		}
	],
	[{
			"name": "S rank Oregano Desert",
			"types": ["srank", "od"]
		},
		{
			"name": "S rank Wasteyard",
			"types": ["srank", "wy"]
		},
		{
			"name": "S rank Fun Farm",
			"types": ["srank", "ff"]
		},
		{
			"name": "S rank Fast Food Saloon",
			"types": ["srank", "ffs"]
		},
		{
			"name": "P rank Vigilante",
			"types": ["srank"]
		}
	],
	[{
			"name": "Grab every toppin in floor 2",
			"types": ["toppin", "floor2"]
		},
		{
			"name": "Charge shot only Vigilante",
			"types": ["boss", "floor2"]
		},
		{
			"name": "8 secrets in floor 2",
			"types": ["floor2", "secret"]
		},
		{
			"name": "Unlock floor 3",
			"types": ["floor2"]
		},
		{
			"name": "Remove Mort 5 times",
			"types": ["floor2", "ff"]
		}
	],
	[{
			"name": "S rank Crust Cove",
			"types": ["srank", "cc"]
		},
		{
			"name": "S rank Gnome Forest",
			"types": ["srank", "gf"]
		},
		{
			"name": "S rank Golf",
			"types": ["srank", "golf"]
		},
		{
			"name": "S rank Deep Dish 9",
			"types": ["srank", "dd9"]
		},
		{
			"name": "P rank Noise",
			"types": ["srank", "boss"]
		}
	],
	[{
			"name": "Open 7 chests in Crust Cove",
			"types": ["enemy", "cc"]
		},
		{
			"name": "Get all primo burgers in Golf",
			"types": ["golf"]
		},
		{
			"name": "8 secrets in floor 3",
			"types": ["secret", "floor3"]
		}, {
			"name": "Grab every toppin in floor 3",
			"types": ["toppin", "floor3"]
		},
		{
			"name": "Unlock floor 4",
			"types": ["floor3"]
		}
	],
	[{
			"name": "S rank The Pig City",
			"types": ["srank", "tpc"]
		}, {
			"name": "S rank Oh Shit",
			"types": ["srank", "os"]
		},
		{
			"name": "S rank Peppi-bot Factory",
			"types": ["srank", "pbf"]
		},
		{
			"name": "S rank R-R-Freezerator",
			"types": ["srank", "rrf"]
		},
		{
			"name": "P rank Fake Peppino",
			"types": ["srank", "boss"]
		}
	],
	[{
			"name": "Grab every toppin on floor 4",
			"types": ["toppin", "floor4"]
		},
		{
			"name": "8 secrets in floor 4",
			"types": ["secret", "floor4"]
		},
		{
			"name": "Kill Santa n R-R-Freezerator",
			"types": ["enemy", "rrf"]
		},
		{
			"name": "’Say Oink’ in Pig City",
			"types": ["tpc"]
		},
		{
			"name": "Unlock floor 5",
			"types": ["floor5"]
		}
	],
	[{
			"name": "S rank Pizzascare",
			"types": ["psc"]
		},
		{
			"name": "S rank Don’t make a sound",
			"types": ["srank", "dmas"]
		},
		{
			"name": "S rank War",
			"types": ["srank", "war"]
		},
		{
			"name": "Beat The crumbling tower of pizza",
			"types": ["tctop"]
		}
	],
	[{
			"name": "Get every jumpscare in don’t make a sound",
			"types": ["dmas", "enemy"]
		},
		{
			"name": "Visit the mansion",
			"types": ["secret", "floor5"]
		},
		{
			"name": "5 secrets in floor 5",
			"types": ["secret", "floor5"]
		},
		{
			"name": "Grab every toppin in floor 5",
			"types": ["toppin"]
		},
		{
			"name": "Crouch on any shit tile for 5 seconds",
			"types": ["os"]
		}
	],
	[{
			"name": "Beat John Gutter without grabbing",
			"types": ["jg"]
		},
		{
			"name": "Get grabbed by Mr. Pinch 5 times",
			"types": ["enemy", "os"]
		},
		{
			"name": "P rank 3 levels",
			"types": ["prank"]
		},
		{
			"name": "Kill 5 enemies with a super taunt",
			"types": ["enemy"]
		}
	],
	[{
			"name": "Have 300$ in the piggy bank",
			"types": ["gimmick"]
		},
		{
			"name": "Kill Snotty",
			"types": ["enemy"]
		},
		{
			"name": "5 secret rooms in the tower",
			"types": ["secret"]
		},
		{
			"name": "All chef tasks for 1 level",
			"types": ["task"]
		}
	],
	[{
			"name": "As Gustavo kick Brick 10 times",
			"types": ["gus"]
		},
		{
			"name": "Reflect a noise goblins projectile in Gnome Forest",
			"types": ["gf", "enemy"]
		},
		{
			"name": "Destroy all the john blocks in John Gutter",
			"types": ["jg"]
		},
		{
			"name": "Super taunt as Gustavo",
			"types": ["gus"]
		}
	],
	[{
			"name": "2 second laps in floor 1",
			"types": ["lap2", "floor1"]
		},
		{
			"name": "2 second laps in floor 2",
			"types": ["lap2", "floor2"]
		},
		{
			"name": "2 second laps in floor 3",
			"types": ["lap2", "floor3"]
		},
		{
			"name": "2 second laps in floor 4",
			"types": ["lap2", "floor4"]
		},
		{
			"name": "1 second lap in floor 5",
			"types": ["lap2", "floor5"]
		}
	],
	[{
			"name": "100% Lobby",
			"types": ["lobby", "100%"]
		},
		{
			"name": "Beat every level in floor 1",
			"types": ["floor1"]
		},
		{
			"name": "Beat every level in floor 5",
			"types": ["floor5"]
		},
		{
			"name": "Don’t get hit by any of the Forknights in Pizzascape",
			"types": ["reds"]
		},
		{
			"name": "Visit no secrets in any level",
			"types": ["secret"]
		}
	],
	[{
			"name": "3 second laps in floor 1",
			"types": ["floor1", "lap2"]
		},
		{
			"name": "50 toppins",
			"types": ["toppins"]
		},
		{
			"name": "40 toppins",
			"types": ["toppins"]
		},
		{
			"name": "Do 2 super taunts in any level",
			"types": ["gimmick"]
		},
		{
			"name": "Don’t drop combo in any level",
			"types": ["combo"]
		}
	],
	[{
			"name": "21 secrets",
			"types": ["secret"]
		},
		{
			"name": "14 secrets",
			"types": ["secret"]
		},
		{
			"name": "12 tower treasures",
			"types": ["treasure"]
		},
		{
			"name": "9 tower treasures",
			"types": ["treasure"]
		}
	],
	[{
			"name": "70 combo",
			"types": ["combo"]
		},
		{
			"name": "80 combo",
			"types": ["combo"]
		},
		{
			"name": "100 combo",
			"types": ["combo"]
		}
	],
	[{
			"name": "Avoid taking damage in any level",
			"types": ["gimmick"]
		},
		{
			"name": "Avoid touching the ground with satan’s choice",
			"types": ["floor4", "rrf"]
		},
		{
			"name": "Complete a level that has rats while killing every rat",
			"types": ["enemy"]
		},
		{
			"name": "Complete a level that has rats without killing any rat",
			"types": ["enemy"]
		}
	],
	[{
			"name": "Title screen jumpscare",
			"types": ["hub"]
		},
		{
			"name": "Get Gerome but don’t collect the tower treasure in any level",
			"types": ["treasure"]
		},
		{
			"name": "Summon Pizza Face in a level",
			"types": ["enemy"]
		}
	],
	[{
			"name": "Get hit by all the pizza cutters in Bloodsauce (excluding secret 3)",
			"types": ["bsd", "floor1"]
		},
		{
			"name": "Parry all the pizza cutters in Bloodsauce (excluding secret 3)",
			"types": ["bsd", "floor1"]
		},
		{
			"name": "Get hit by grandpa pepper in The Pig City",
			"types": ["tpc", "floor4", "enemy"]
		},
		{
			"name": "’There Can Only Be One’ in Peppibot Factory",
			"types": ["pbf", "floor4", "task"]
		}
	],
	[{
			"name": "Kill 3 enemies in the olive bubble in Deep-Dish 9",
			"types": ["dd9", "enemy", "floor3"]
		},
		{
			"name": "Kill all the UFOlives in Deep-Dish 9",
			"types": ["dd9", "enemy", "floor3"]
		},
		{
			"name": "Have a toppin do the same taunt twice in a row.",
			"types": ["toppin"]
		},
		{
			"name": "Don’t kill any of the Tribe Cheese in Oregano Desert",
			"types": ["od", "floor2", "enemy"]
		}
	],
	[{
			"name": "Break every ghost block in Wasteyard",
			"types": ["floor2", "wy"]
		},
		{
			"name": "Let a horse win a race in Fastfood Saloon",
			"types": ["ffs", "floor2"]
		},
		{
			"name": "Crouch on any shit tile for 5 seconds in Oh Shit!",
			"types": ["floor4", "os"]
		},
		{
			"name": "Ride the weenie mount for 8 seconds",
			"types": ["floor2", "ffs"]
		}
	],
	[{
			"name": "Taunt next to each boss in the hub",
			"types": ["hub"]
		},
		{
			"name": "Blow yourself and an enemy up with a bomb in The Ancient Cheese",
			"types": ["ac", "floor1", "enemy"]
		},
		{
			"name": "Line yourself up with the you need to be this tall cardboard slab",
			"types": ["floor4", "hub"]
		},
		{
			"name": "Get hit in every level in floor 1",
			"types": ["floor1"]
		}
	],
	[{
			"name": "Throw an enemy to break a block",
			"types": ["enemy"]
		},
		{
			"name": "Get a B or lower on any level",
			"types": ["gimmick"]
		},
		{
			"name": "Don’t taunt, parry, or super taunt in a level",
			"types": ["gimmick"]
		},
		{
			"name": "Use the superjump crawl to get through a 1 block tall gap",
			"types": ["gimmick"]
		}
	]
];
