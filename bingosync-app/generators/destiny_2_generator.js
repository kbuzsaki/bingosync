var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 

[
	[{
			"name": "Collect 5 Chests on the EDZ",
			"types": ["Chest"]
		},
		{
			"name": "Collect 5 Chests on the Nessus",
			"types": ["Chest"]
		},
		{
			"name": "Collect 5 Chests on the Moon",
			"types": ["Chest"]
		},
		{
			"name": "Collect 5 Chests on the Cosmodrome",
			"types": ["Chest"]
		},
		{
			"name": "Collect 1 Chest on all accessible planets",
			"types": ["Chest", "HARD"]
		}
	],
	[{
			"name": "Collect 5 Resources on the EDZ ",
			"types": ["Node"]
		},
		{
			"name": "Collect 5 Resources on the Nessus",
			"types": ["Node"]
		},
		{
			"name": "Collect 5 Resources on the Moon",
			"types": ["Node"]
		},
		{
			"name": "Collect 5 Resources on the Cosmodrome",
			"types": ["Node"]
		},
		{
			"name": "Collect 1 Resources on all accessible planets",
			"types": ["Node", "HARD"]
		}
	],
	[{
			"name": "Complete 3 Patrols on the EDZ",
			"types": ["PT"]
		},
		{
			"name": "Complete 3 Patrols on the Nessus",
			"types": ["PT"]
		},
		{
			"name": "Complete 3 Patrols on the Moon",
			"types": ["PT"]
		},
		{
			"name": "Complete 3 Patrols on the Cosmodrome",
			"types": ["PT"]
		},
		{
			"name": "Complete 1 Patrol on all accessible planets",
			"types": ["PT", "HARD"]
		}
	],
	[{
			"name": "Get a Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get a Strand Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get a Stasis Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get a Bow Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get an Auto-rifle Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get a Hand Cannon Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get a Pulse Rifle Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get a Scout Rifle Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get a Shotgun Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get a Side-Arm Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get a Sniper Rifle Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get a Submachine Gun Kinetic Weapon",
			"types": ["Collect"]
		},
		{
			"name": "Get a Kinetic Fusion Rifle",
			"types": ["Collect", "Hard"]
		}
	],
	[{
			"name": "Get a Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Solar Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Arc Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a void Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get an Auto-rifle Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Bow Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Fusion Rifle Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Grenade Launcher Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Hand Cannon Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Pulse Rifle Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Scout Rife Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Shotgun Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Side-arm Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Submachine Gun Energy Weapon",
			"types": ["EN"]
		},
		{
			"name": "Get a Sniper Energy Weapon",
			"types": ["EN", "HARD"]
		}
	],
	[{
			"name": "Get a Power Weapon",
			"types": ["POW"]
		},
		{
			"name": "Get a Solar Power Weapon",
			"types": ["POW"]
		},
		{
			"name": "Get a Arc Power Weapon",
			"types": ["POW"]
		},
		{
			"name": "Get a Void Power Weapon",
			"types": ["POW"]
		},
		{
			"name": "Get a Stasis Power Weapon",
			"types": ["POW"]
		},
		{
			"name": "Get a Strand Power Weapon",
			"types": ["POW"]
		},
		{
			"name": "Get a Sword Power Weapon",
			"types": ["POW"]
		},
		{
			"name": "Get a Grenade Launcher Power Weapon",
			"types": ["POW"]
		},
		{
			"name": "Get a Linear Fusion Rifle Power Weapon",
			"types": ["POW"]
		},
		{
			"name": "Get a Rocket Launcher Power Weapon",
			"types": ["POW"]
		},
		{
			"name": "Get a Sword Power Weapon",
			"types": ["POW"]
		},
		{
			"name": "Get a Machine Gun Power Weapon ",
			"types": ["POW", "HARD"]
		}
	],
	[{
			"name": "Complete a Repeatable Bounty",
			"types": ["REP"]
		},
		{
			"name": "Complete 3 Repeatable Bounties",
			"types": ["REP"]
		},
		{
			"name": "Complete 5 Repeatable Bounties",
			"types": ["REP"]
		},
		{
			"name": "Complete 7 Repeatable Bounties",
			"types": ["REP"]
		},
		{
			"name": "Complete 10 Repeatable Bounties",
			"types": ["REP", "HARD"]
		}
	],
	[{
			"name": "Complete a Lost Sector on the EDZ",
			"types": ["Sector"]
		},
		{
			"name": "Complete a Lost Sector on the Moon",
			"types": ["Sector"]
		},
		{
			"name": "Complete a Lost Sector on Nessus",
			"types": ["Sector"]
		},
		{
			"name": "Complete a Lost Sector on the Cosmodrome",
			"types": ["Sector"]
		},
		{
			"name": "Complete a Lost sector on all accessible planets",
			"types": ["Sector", "HARD"]
		}
	],
	[{
			"name": "Complete a Dungeon Encounter",
			"types": ["DUNG"]
		},
		{
			"name": "Collect a Secret chest in a Dungeon or Raid",
			"types": ["DUNG"]
		},
		{
			"name": "Die in a Dungeon Encounter",
			"types": ["DUNG"]
		},
		{
			"name": "Cast a Super in a Dungeon Encounter",
			"types": ["DUNG"]
		},
		{
			"name": "Finish a Dungeon Solo",
			"types": ["DUNG", "HARD"]
		}
	],
	[{
			"name": "Complete a Public Event on the EDZ",
			"types": ["PUB"]
		},
		{
			"name": "Complete a Public Event on the Moon",
			"types": ["PUB"]
		},
		{
			"name": "Complete a Public Event on Nessus",
			"types": ["PUB"]
		},
		{
			"name": "Complete a Public Event on the Cosmodrome",
			"types": ["PUB"]
		},
		{
			"name": "Complete a Heroic Public event on any accessible Planet",
			"types": ["PUB", "HARD"]
		}
	],
	[{
			"name": "Complete a Crucible Match",
			"types": ["CRU"]
		},
		{
			"name": "Win a Crucible Match",
			"types": ["CRU"]
		},
		{
			"name": "Get a Kill In a Crucible Match",
			"types": ["CRU"]
		},
		{
			"name": "Die to an enemy in a Crucible Match",
			"types": ["CRU"]
		},
		{
			"name": "Get a melee Kill in the Crucible Match",
			"types": ["CRU", "HARD"]
		}
	],
	[{
			"name": "Complete a Gambit Match",
			"types": ["GAM"]
		},
		{
			"name": "Win a Gambit Match",
			"types": ["GAM"]
		},
		{
			"name": "Bank 15 Motes in a Gambit Match",
			"types": ["GAM"]
		},
		{
			"name": "Invade During a Gambit Match",
			"types": ["GAM"]
		},
		{
			"name": "Defeat an Enemy Guardian in Gambit",
			"types": ["GAM", "HARD"]
		}
	],
	[{
			"name": "Complete a Vanguard Strike",
			"types": ["VAN"]
		},
		{
			"name": "Activate your super during a Vanguard Strike",
			"types": ["VAN"]
		},
		{
			"name": "Die during a Vanguard Strike",
			"types": ["VAN"]
		},
		{
			"name": "Emote with a Fireteam member during a Vanguard Strike",
			"types": ["VAN"]
		},
		{
			"name": "Complete a Vanguard Nightfall",
			"types": ["VAN", "HARD"]
		}
	],
	[{
			"name": "Stun a Champion",
			"types": ["CHAMP"]
		},
		{
			"name": "Kill a Champion",
			"types": ["CHAMP"]
		},
		{
			"name": "Die to a Champion",
			"types": ["CHAMP"]
		},
		{
			"name": "Use a Finisher on a Champion",
			"types": ["CHAMP"]
		},
		{
			"name": "Kill a Champion without stunning it",
			"types": ["CHAMP", "HARD"]
		}
	],
	[{
			"name": "Interact with  Archie The Dog",
			"types": ["INT"]
		},
		{
			"name": "Interact with Zavala",
			"types": ["INT"]
		},
		{
			"name": "Interact with The Drifter",
			"types": ["INT"]
		},
		{
			"name": "Interact with Ikora",
			"types": ["INT"]
		},
		{
			"name": "Interact with Banshee",
			"types": ["INT"]
		},
		{
			"name": "Interact with Master Rahool",
			"types": ["INT"]
		},
		{
			"name": "Interact with Hawthrone",
			"types": ["INT"]
		},
		{
			"name": "Interact with Ada-1",
			"types": ["INT"]
		},
		{
			"name": "Interact with Tess Everis",
			"types": ["INT"]
		},
		{
			"name": "Interact with Lord Shaxx",
			"types": ["INT"]
		},
		{
			"name": "Interact with Devrim Kay",
			"types": ["INT"]
		},
		{
			"name": "Interact with Failsafe",
			"types": ["INT"]
		},
		{
			"name": "Interact with Eris Morn",
			"types": ["INT"]
		},
		{
			"name": "Interact with Shaw Han",
			"types": ["INT"]
		},
		{
			"name": "Disturb the remains on the Cosmodrome",
			"types": ["INT"]
		}
	],
	[{
			"name": "Get a Helmet Drop",
			"types": ["ARM"]
		},
		{
			"name": "Get a Gauntlet Drop",
			"types": ["ARM"]
		},
		{
			"name": "Get a Chest-piece Drop",
			"types": ["ARM"]
		},
		{
			"name": "Get a Leg Drop ",
			"types": ["ARM"]
		},
		{
			"name": "Get an Exotic Armor Drop",
			"types": ["ARM", "HARD"]
		}
	],
	[{
			"name": "Do a Front Roll on a Sparrow",
			"types": ["BIKE"]
		},
		{
			"name": "Do a Back-Roll on a Sparrow",
			"types": ["BIKE"]
		},
		{
			"name": "Do a Side Roll on a  Sparrow",
			"types": ["BIKE"]
		},
		{
			"name": "Blow up your Sparrow",
			"types": ["BIKE"]
		},
		{
			"name": "Emote while in the air on your sparrow",
			"types": ["BIKE", "HARD"]
		}
	],
	[{
			"name": "Travel to the Moth-yards ",
			"types": ["TRAVEL"]
		},
		{
			"name": "Travel to the Forgotten Shore",
			"types": ["TRAVEL"]
		},
		{
			"name": "Travel to the Divide",
			"types": ["TRAVEL"]
		},
		{
			"name": "Travel to Firebase Hades",
			"types": ["TRAVEL"]
		},
		{
			"name": "Travel to The Outskirts",
			"types": ["TRAVEL"]
		},
		{
			"name": "Travel to Anchor of Light",
			"types": ["TRAVEL"]
		},
		{
			"name": "Travel to Hellmouth",
			"types": ["TRAVEL"]
		},
		{
			"name": "Travel to Hallows",
			"types": ["TRAVEL"]
		},
		{
			"name": "Travel to Glade of Echos",
			"types": ["TRAVEL"]
		},
		{
			"name": "Travel to The Tangle",
			"types": ["TRAVEL"]
		},
		{
			"name": "Travel to the Lunar Battlefields",
			"types": ["TRAVEL"]
		}
	],
	[{
			"name": "Play the Tire Game",
			"types": ["TIRE"]
		},
		{
			"name": "Take a Tire to Eris Morn",
			"types": ["TIRE"]
		},
		{
			"name": "Score in three different holes in the Tire Game",
			"types": ["TIRE"]
		},
		{
			"name": "Don’t get a tire in any hole in the Tire Game",
			"types": ["TIRE"]
		},
		{
			"name": "Get a perfect Score in the Tire Game",
			"types": ["TIRE", "HARD"]
		}
	],
	[{
			"name": "Complete the Floor is Lava Mini-Game",
			"types": ["MINI"]
		},
		{
			"name": "Burn to death while playing the Floor is Lava Mini-Game",
			"types": ["MINI"]
		},
		{
			"name": "Get the Green Tower Ball",
			"types": ["MINI"]
		},
		{
			"name": "Get the Black Tower Ball",
			"types": ["MINI"]
		},
		{
			"name": "Get the Blue Tower Ball",
			"types": ["MINI"]
		},
		{
			"name": "Get the Traveler Tower Ball",
			"types": ["MINI", "HARD"]
		}
	],
	[{
			"name": "Go to Zavala’s Office",
			"types": ["EXP"]
		},
		{
			"name": "Go to the Hidden Annex Room",
			"types": ["EXP"]
		},
		{
			"name": "Go to the Future War Cult Office",
			"types": ["EXP"]
		},
		{
			"name": "Go to the Secret Armory Room",
			"types": ["EXP", "HARD "]
		},
		{
			"name": "Activate the Blast Deflectors in the hanger",
			"types": ["EXP"]
		},
		{
			"name": "Interact with any Hidden Interactable in the tower.",
			"types": ["EXP"]
		}
	],
	[{
			"name": "Get a Kill with Melee, Grenade, Super and all weapons on the EDZ ",
			"types": ["ALL"]
		},
		{
			"name": "Get a Kill with Melee, Grenade, Super and all weapons on the Moon",
			"types": ["ALL"]
		},
		{
			"name": "Get a Kill with Melee, Grenade, Super and all weapons on Nessus",
			"types": ["ALL"]
		},
		{
			"name": "Get a Kill with Melee, Grenade, Super and all weapons on the Cosmodrome",
			"types": ["ALL"]
		},
		{
			"name": "Get a Kill with Melee, Grenade, Super and all weapons on each accessible Planet",
			"types": ["ALL", "HARD"]
		}
	],
	[{
			"name": "Die to a Cabal drop-pod",
			"types": ["DIE"]
		},
		{
			"name": "Die to an Exploding Shank",
			"types": ["DIE"]
		},
		{
			"name": "Die to a Cursed Thrall",
			"types": ["DIE"]
		},
		{
			"name": "Die to a Vex Fanatic",
			"types": ["DIE"]
		},
		{
			"name": "Die to any Faction Boss",
			"types": ["DIE", "HARD"]
		}
	],
	[{
			"name": "Finish a Taken Enemy",
			"types": ["FINISH"]
		},
		{
			"name": "Finish a Hive Enemy",
			"types": ["FINISH"]
		},
		{
			"name": "Finish a cabal Enemy",
			"types": ["FINISH"]
		},
		{
			"name": "Finish a Fallen Enemy",
			"types": ["FINISH"]
		},
		{
			"name": "Finish a Vex Enemy ",
			"types": ["FINISH"]
		},
		{
			"name": "Finish an enemy from each faction",
			"types": ["FINISH", "HARD"]
		}
	],
	[{
			"name": "Get a Weapon with the Perk - Headstone",
			"types": ["reds"]
		},
		{
			"name": "Get a Weapon with the Perk - Envious Assassin ",
			"types": ["secrets"]
		},
		{
			"name": "Get a Weapon with the Perk - Lead from Gold",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Kill Clip",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Demolitionist",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Rapid Hit",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Clown Cartridge",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Auto Loading Holster",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Fragile Focus",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Moving Target",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Frenzy",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Hatchling",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Harmony",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Adagio",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Focused Fury",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Slideways",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Rewind Rounds",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Perfect Float",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Perpetual Motion",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Osmosis",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Forth Times a Charm",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Dynamic Sway Reduction",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Killing Wind",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Surplus",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Quickdraw",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - No Distractions",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Swashbuckler",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Snapshot Sights",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Rangefinder",
			"types": ["PERK"]
		},
		{
			"name": "Get a Weapon with the Perk - Subsistence",
			"types": ["PERK"]
		}
	]
];
