bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [
  null,
	[{
			"name": "Talk to Theo in Crossing",
			"types": ["earlygame", "cutscene"]
		},
		{
			"name": "Complete 1A Start without jumping",
			"types": ["earlygame", "task"]
		},
		{
			"name": "All Berries in Start of 1A (6)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "All Berries in Chasm (5)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "Get a 1-Up in 1A",
			"types": ["1up", "earlygame"]
		},
		{
			"name": "Forsaken City Blue Heart",
			"types": ["hearts", "earlygame"]
		},
		{
			"name": "Complete 1A Start without dashing",
			"types": ["earlygame", "task"]
		},
		{
			"name": "Forsaken City Cassette",
			"types": ["1b", "earlygame"]
		},
		{
			"name": "Old Site Blue Heart",
			"types": ["hearts", "earlygame"]
		}
	],
	[{
			"name": "Get two 1-Ups",
			"types": ["1up"]
		},
		{
			"name": "10 Berries in 1A",
			"types": ["amount_berries"]
		},
		{
			"name": "Talk to Theo in Awake",
			"types": ["earlygame", "awake"]
		},
		{
			"name": "All Berries in Awake (1)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "All Berries in Intervention (8)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "Complete Awake without dashing",
			"types": ["earlygame", "awake"]
		},
		{
			"name": "All Berries in Start of 2A (9)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "Old Site Cassette",
			"types": ["2b", "earlygame"]
		},
		{
			"name": "Complete Chasm without dashing",
			"types": ["earlygame", "task"]
		}

	],
	[{
			"name": "5 Berries in 3 Chapters",
			"types": ["amount_berries"]
		},
		{
			"name": "Read the Poem in 2A",
			"types": ["earlygame", "awake"]
		},
		{
			"name": "Talk to Theo in Elevator Shaft",
			"types": ["resort_cutscene", "cutscene"]
		},
		{
			"name": "Complete Intervention without jumping",
			"types": ["earlygame", "task"]
		},
		{
			"name": "All Berries in Crossing (9)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "10 Berries in 2A",
			"types": ["amount_berries"]
		},
		{
			"name": "Find Letter and PICO-8 in Huge Mess",
			"types": ["resort_cutscene", "cutscene"]
		},
		{
			"name": "Get a 1-Up in 2 Chapters",
			"types": ["1up", "challenge"]
		},
		{
			"name": "Grabless Start of 3A",
			"types": ["grabless"]
		}
	],
	[{
			"name": "Get a 1-Up in 2A",
			"types": ["1up"]
		},
		{
			"name": "Reach Old Site in PICO-8",
			"types": ["pico-8"]
		},
		{
			"name": "Forsaken City B-Side",
			"types": ["1b"]
		},
		{
			"name": "All Collectibles in 1A",
			"types": ["amount_berries"]
		},
		{
			"name": "5 Berries in 4 Chapters",
			"types": ["amount_berries"]
		},
		{
			"name": "Complete Crossing without dashing",
			"types": ["challenge", "task"]
		},
		{
			"name": "Complete Shrine without dashing",
			"types": ["task"]
		},
		{
			"name": "Grabless Start of 4A",
			"types": ["grabless"]
		},
		{
			"name": "Get a 1-Up in 4A",
			"types": ["1up"]
		},
		{
			"name": "2 Cassettes",
			"types": ["amount_cassettes"]
		}
	],
	[{
			"name": "20 Berries",
			"types": ["amount_berries"]
		},
		{
			"name": "Get 5 Berries in PICO-8",
			"types": ["pico-8"]
		},
		{
			"name": "Old Site B-Side",
			"types": ["2b"]
		},
		{
			"name": "Grabless 1A",
			"types": ["grabless"]
		},
		{
			"name": "Grabless 2A",
			"types": ["grabless"]
		},
		{
			"name": "3 Blue Hearts",
			"types": ["hearts"]
		},
		{
			"name": "Get three 1-Ups",
			"types": ["1up", "challenge"]
		},
		{
			"name": "Get a 1-Up in 5A",
			"types": ["1up"]
		},
		{
			"name": "All Berries in Elevator Shaft (4)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "2 Winged Berries in 2 Chapters",
			"types": ["special_berries"]
		}
	],
	[{
			"name": "All Berries in Huge Mess (7)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "Blue and Red Heart in Forsaken City",
			"types": ["1b"]
		},
		{
			"name": "Blue and Red Heart in Old Site",
			"types": ["2b"]
		},
		{
			"name": "All Collectibles in 2A",
			"types": ["amount_berries"]
		},
		{
			"name": "Celestial Resort Blue Heart",
			"types": ["hearts"]
		},
		{
			"name": "All Berries in Presidential Suite (3)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "Mirror Temple Cassette",
			"types": ["5b"]
		},
		{
			"name": "Huge Mess: Chest -> Books -> Towel",
			"types": ["huge_mess_pathing"]
		},
		{
			"name": "Huge Mess: Chest -> Towel -> Books",
			"types": ["huge_mess_pathing"]
		},
		{
			"name": "Huge Mess: Towel -> Books -> Chest",
			"types": ["huge_mess_pathing"]
		},
		{
			"name": "2 Seeded Berries",
			"types": ["special_berries"]
		}
	],
	[{
			"name": "2 optional Theo Cutscenes",
			"types": ["cutscene"]
		},
		{
			"name": "Get a 1-Up in 3 Chapters",
			"types": ["1up", "challenge"]
		},
		{
			"name": "Read Diary in Elevator Shaft",
			"types": ["resort_cutscene", "cutscene"]
		},
		{
			"name": "Grabless Elevator Shaft",
			"types": ["grabless"]
		},
		{
			"name": "All Berries in Start of 4A (8)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "Golden Ridge Cassette",
			"types": ["4b"]
		},
		{
			"name": "Complete 3 A-Sides",
			"types": ["amount_chapters"]
		}
	],
	[{
			"name": "All Berries in Old Trail (7)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "3 Winged Berries",
			"types": ["special_berries", "earlygame"]
		},
		{
			"name": "4 Winged Berries",
			"types": ["special_berries"]
		},
		{
			"name": "Use 5 Binoculars in B-Sides",
			"types": ["binoculars"]
		},
		{
			"name": "5 Berries in 5 Chapters",
			"types": ["amount_berries"]
		},
		{
			"name": "Grabless Huge Mess",
			"types": ["grabless"]
		},
		{
			"name": "Huge Mess: Books -> Chest -> Towel",
			"types": ["huge_mess_pathing"]
		},
		{
			"name": "Huge Mess: Books -> Towel -> Chest",
			"types": ["huge_mess_pathing"]
		},
		{
			"name": "Huge Mess: Towel -> Chest -> Books",
			"types": ["huge_mess_pathing"]
		},
		{
			"name": "Jump on 10 Snowballs",
			"types": ["snowballs"]
		}
	],
	[{
			"name": "Grabless Presidential Suite",
			"types": ["grabless"]
		},
		{
			"name": "25 Berries",
			"types": ["amount_berries"]
		},
		{
			"name": "Golden Ridge Blue Heart",
			"types": ["hearts"]
		},
		{
			"name": "4 Blue Hearts",
			"types": ["hearts"]
		},
		{
			"name": "Find Theo's Phone in 5A",
			"types": ["cutscene"]
		},
		{
			"name": "Grabless Cliff Face",
			"types": ["grabless"]
		},
		{
			"name": "Celestial Resort Cassette",
			"types": ["3b"]
		}
	],
	[{
			"name": "Get 2 Keys in 5B",
			"types": ["5b", "task"]
		},
		{
			"name": "All Berries in Cliff Face (5)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "Grabless Search",
			"types": ["grabless"]
		},
		{
			"name": "5 Winged Berries",
			"types": ["special_berries"]
		},
		{
			"name": "Talk to Theo in Search",
			"types": ["cutscene", "search"]
		},
		{
			"name": "4 Cassettes",
			"types": ["amount_cassettes"]
		},
		{
			"name": "15 Berries in 4A",
			"types": ["amount_berries"]
		}
	],
	[{
			"name": "Use 6 Binoculars in B-Sides",
			"types": ["binoculars"]
		},
		{
			"name": "Get 10 Berries in PICO-8",
			"types": ["pico-8"]
		},
		{
			"name": "Stun Oshiro 10 times",
			"types": ["oshiro_stun"]
		},
		{
			"name": "Golden Ridge B-Side",
			"types": ["4b"]
		},
		{
			"name": "Winged Golden Berry",
			"types": ["challenge"]
		},
		{
			"name": "Mirror Temple A-Side",
			"types": ["task"]
		},
		{
			"name": "Grabless Depths",
			"types": ["grabless"]
		},
		{
			"name": "10 Berries in 3A",
			"types": ["amount_berries"]
		}
	],
	[{
			"name": "Complete 2 B-Sides",
			"types": ["amount_chapters"]
		},
		{
			"name": "Grabless Unraveling",
			"types": ["grabless"]
		},
		{
			"name": "Get the Key in Depths",
			"types": ["task"]
		},
		{
			"name": "All Berries in Rescue (1)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "Mirror Temple Blue Heart",
			"types": ["hearts"]
		},
		{
			"name": "All Berries in Start of 5A (12)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "All Berries in Start of 3A (11)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "All Berries in Shrine (9)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "Hit a Kevin block from all 4 sides",
			"types": ["task"]
		}
	],
	[{
			"name": "All Berries in Unraveling (1)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "2 Blue and 2 Red Hearts",
			"types": ["amount_hearts", "amount_chapters"]
		},
		{
			"name": "Get the Orb in PICO-8",
			"types": ["pico-8"]
		},
		{
			"name": "Get 1 Key in Power Source",
			"types": ["ch9"]
		},
		{
			"name": "Reach Library (3B Checkpoint)",
			"types": ["3b"]
		},
		{
			"name": "All Berries in Into the Core (1)",
			"types": ["checkpoint_berries", "core"]
		},
		{
			"name": "Reflection Cutscene in Hollows",
			"types": ["cutscene"]
		},
		{
			"name": "Grabless Lake",
			"types": ["grabless"]
		}
	],
	[{
			"name": "35 Berries",
			"types": ["amount_berries"]
		},
		{
			"name": "40 Berries",
			"types": ["amount_berries"]
		},
		{
			"name": "Complete PICO-8",
			"types": ["pico-8"]
		},
		{
			"name": "3 optional Theo Cutscenes",
			"types": ["cutscene"]
		},
		{
			"name": "Kill a Seeker",
			"types": ["seeker", "task"]
		},
		{
			"name": "Use 1 Binocular in 4 Chapters",
			"types": ["binoculars"]
		},
		{
			"name": "Only top route in Hollows",
			"types": ["task", "reflection_pathing"]
		},
		{
			"name": "Get 1 Key in Search",
			"types": ["task", "search"]
		},
		{
			"name": "Reflection Cassette",
			"types": ["6b"]
		},
		{
			"name": "Reflection Blue Heart",
			"types": ["hearts"]
		}
	],
	[{
			"name": "3 Seeded Berries",
			"types": ["special_berries"]
		},
		{
			"name": "Complete 2 A-Sides and 2 B-Sides",
			"types": ["amount_chapters"]
		},
		{
			"name": "5 Cassettes",
			"types": ["amount_cassettes"]
		},
		{
			"name": "Stun Seekers 15 times",
			"types": ["seeker", "task"]
		},
		{
			"name": "Get 2 Keys in Power Source",
			"types": ["ch9"]
		},
		{
			"name": "Use 5 Binoculars in Farewell",
			"types": ["ch9", "binoculars"]
		},
		{
			"name": "All Berries in Depths (11)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "All Berries in Search (6)",
			"types": ["checkpoint_berries"]
		},
		{
			"name": "Mirror Temple B-Side",
			"types": ["5b"]
		}

	],
	[{
			"name": "5 Hearts",
			"types": ["amount_hearts"]
		},
		{
			"name": "20 Berries in 5A",
			"types": ["amount_berries"]
		},
		{
			"name": "Use 7 Binoculars",
			"types": ["binoculars"]
		},
		{
			"name": "Use 8 Binoculars",
			"types": ["binoculars"]
		},
		{
			"name": "Use 2 Binoculars in 5 Chapters",
			"types": ["binoculars"]
		},
		{
			"name": "Get 15 Berries in PICO-8",
			"types": ["pico-8", "challenge"]
		},
		{
			"name": "Celestial Resort B-Side",
			"types": ["3b"]
		},
		{
			"name": "Only bottom route in Hollows",
			"types": ["task", "reflection_pathing"]
		},
		{
			"name": "Get 2 Keys in Search",
			"types": ["task", "search"]
		},
		{
			"name": "Get 3 Keys in Search",
			"types": ["task", "search"]
		}
	],
	[{
			"name": "6 Winged Berries",
			"types": ["special_berries"]
		},
		{
			"name": "7 Winged Berries",
			"types": ["special_berries"]
		},
		{
			"name": "Kill 2 different Seekers",
			"types": ["seeker", "task"]
		},
		{
			"name": "Get 3 Keys in Power Source",
			"types": ["ch9"]
		},
		{
			"name": "Get 4 Keys in Power Source",
			"types": ["ch9"]
		},
		{
			"name": "Use 1 Binocular in 5 Chapters",
			"types": ["binoculars"]
		},
		{
			"name": "10 Berries in 3 Chapters",
			"types": ["amount_berries"]
		},
		{
			"name": "Switch to Ice on the right of Into the Core",
			"types": ["core"]
		},
		{
			"name": "5 Blue Hearts",
			"types": ["hearts"]
		}
	],
	[{
			"name": "Complete 3 B-Sides",
			"types": ["amount_chapters"]
		},
		{
			"name": "3 Blue and 3 Red Hearts",
			"types": ["amount_hearts", "amount_chapters"]
		},
		{
			"name": "Complete 2 Chapters Grabless",
			"types": ["grabless"]
		},
		{
			"name": "Stun Seekers 20 times",
			"types": ["seeker", "task"]
		},
		{
			"name": "Kill 3 different Seekers",
			"types": ["seeker", "task"]
		},
		{
			"name": "Blue and Red Heart in Golden Ridge",
			"types": ["4b"]
		},
		{
			"name": "Grabless Hollows",
			"types": ["grabless", "challenge"]
		},
		{
			"name": "15 Berries in 2 Chapters",
			"types": ["amount_berries"]
		},
		{
			"name": "15 Berries in 3A",
			"types": ["amount_berries"]
		}
	],
	[{
			"name": "45 Berries",
			"types": ["amount_berries"]
		},
		{
			"name": "50 Berries",
			"types": ["amount_berries"]
		},
		{
			"name": "Reach Rock Bottom (6A/6B Checkpoint)",
			"types": ["6b", "lategame"]
		},
		{
			"name": "Use 2 Binoculars in 3 Chapters",
			"types": ["binoculars"]
		},
		{
			"name": "Blue and Red Heart in Mirror Temple",
			"types": ["5b"]
		},
		{
			"name": "All Berries in Heart of the Mountain (1)",
			"types": ["checkpoint_berries", "core"]
		},
		{
			"name": "Use all Binoculars in 500M (3)",
			"types": ["lategame, binoculars"]
		},
		{
			"name": "All Berries in 0M (4)",
			"types": ["lategame"]
		},
		{
			"name": "All Collectibles in 4A",
			"types": ["amount_berries"]
		}
	],
	[{
			"name": "8 Winged Berries",
			"types": ["special_berries"]
		},
		{
			"name": "Complete 3 A-Sides and 3 B-Sides",
			"types": ["amount_chapters"]
		},
		{
			"name": "3 Gems in The Summit",
			"types": ["lategame", "gems"]
		},
		{
			"name": "0M and 500M Gems",
			"types": ["lategame", "gems", "task"]
		},
		{
			"name": "Grabless 3A",
			"types": ["grabless"]
		},
		{
			"name": "10 Berries in 4 Chapters",
			"types": ["amount_berries"]
		},
		{
			"name": "4 Seeded Berries",
			"types": ["special_berries", "lategame"]
		}
	],
	[{
			"name": "6 Hearts",
			"types": ["amount_hearts"]
		},
		{
			"name": "Use 9 Binoculars",
			"types": ["binoculars"]
		},
		{
			"name": "Use 10 Binoculars",
			"types": ["binoculars"]
		},
		{
			"name": "Grabless 5A",
			"types": ["grabless"]
		},
		{
			"name": "All Berries in 500M (6)",
			"types": ["lategame"]
		},
		{
			"name": "All Berries in 1000M (6)",
			"types": ["lategame"]
		},
		{
			"name": "Easteregg room in Reflection",
			"types": ["task"]
		}
	],
	[{
			"name": "The Summit Cassette",
			"types": ["7b"]
		},
		{
			"name": "10 Berries in 5 Chapters",
			"types": ["amount_berries"]
		},
		{
			"name": "Use 5 Binoculars in The Summit",
			"types": ["binoculars", "lategame"]
		},
		{
			"name": "Use all Binoculars in 1000M (4)",
			"types": ["binoculars", "lategame"]
		},
		{
			"name": "20 Berries in 7A",
			"types": ["lategame"]
		},
		{
			"name": "All Collectibles in 3A",
			"types": ["amount_berries"]
		}
	],
	[{
			"name": "15 Berries in 3 Chapters",
			"types": ["amount_berries", "big_berries"]
		},
		{
			"name": "65 Berries",
			"types": ["amount_berries", "big_berries"]
		},
		{
			"name": "Complete 5 A-Sides",
			"types": ["amount_chapters"]
		},
		{
			"name": "All 4 optional Theo Cutscenes",
			"types": ["cutscene"]
		},
		{
			"name": "4 Gems in The Summit",
			"types": ["lategame", "gems"]
		},
		{
			"name": "1000M and 1500M Gems",
			"types": ["lategame", "gems", "task"]
		}
	],
	[{
			"name": "All Berries in Hot and Cold (3)",
			"types": ["checkpoint_berries", "core"]
		},
		{
			"name": "Use 2 Binoculars in 4 Chapters",
			"types": ["binoculars"]
		},
		{
			"name": "Core Blue Heart",
			"types": ["core"]
		},
		{
			"name": "All Berries in 1500M (8)",
			"types": ["lategame"]
		},
		{
			"name": "All Berries in 2000M (8)",
			"types": ["lategame"]
		},
		{
			"name": "5 Gems in the Summit",
			"types": ["lategame", "gems"]
		}
	],
	[{
			"name": "75 Berries",
			"types": ["amount_berries", "big_berries"]
		},
		{
			"name": "15 Berries in 4 Chapters",
			"types": ["amount_berries", "big_berries"]
		},
		{
			"name": "All Collectibles in 8A",
			"types": ["checkpoint_berries", "core"]
		},
		{
			"name": "Get 5 Keys in Power Source",
			"types": ["ch9"]
		},
		{
			"name": "Visit the Bird's Nest in Epilogue",
			"types": ["task", "lategame"]
		},
		{
			"name": "Complete 4 B-Sides",
			"types": ["amount_chapters"]
		}
	]
];