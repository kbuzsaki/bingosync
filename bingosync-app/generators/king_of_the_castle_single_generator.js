var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[
	[{
			"name": "Marry Baron",
			"types": ["marriage"]
		},
		{
			"name": "Marry Chief",
			"types": ["marriage"]
		},
		{
			"name": "Marry Count",
			"types": ["marriage"]
		},
		{
			"name": "Marry Grandee",
			"types": ["marriage"]
		},
		{
			"name": "Marry Patrician",
			"types": ["marriage"]
		},
		{
			"name": "Marry Commoner",
			"types": ["marriage"]
		},
		{
			"name": "Chaste Monarch",
			"types": ["marriage"]
		},
		{
			"name": "Party Monarch",
			"types": ["marriage"]
		},
		{
			"name": "Leave Spouse at Altar",
			"types": ["marriage"]
		}
	],
	[{
		"types": [],
		"name": "Divorce Spouse"
	}],
	[{
			"name": "Baron Honor Guard",
			"types": ["guard"]
		},
		{
			"name": "Chief Honor Guard",
			"types": ["guard"]
		},
		{
			"name": "Count Honor Guard",
			"types": ["guard"]
		},
		{
			"name": "Grandee Honor Guard",
			"types": ["guard"]
		},
		{
			"name": "Patrician Honor Guard",
			"types": ["guard"]
		},
		{
			"name": "Mercenary Honor Guard",
			"types": ["guard"]
		},
		{
			"name": "No Honor Guard",
			"types": ["guard"]
		}
	],
	[{
		"name": "Kill Off Honor Guard"
	}],
	[{
			"name": "Throw King Into River",
			"types": ["corn"]
		},
		{
			"name": "No Coronation",
			"types": ["corn"]
		},
		{
			"name": "Nobles Put on a Coronation Feast",
			"types": ["corn"]
		}
	],
	[{
		"name": "Monarch's Vote Makes Difference"
	}],
	[{
		"name": "Monarch's Golden Choice Loses"
	}],
	[{
		"name": "Successful Call For Unity"
	}],
	[{
		"name": "Successful Iron Choice"
	}],
	[{
		"name": "Successful Royal Gamble"
	}],
	[{
		"name": "Unsuccessful Royal Gamble"
	}],
	[{
		"name": "Vetoless Run"
	}],
	[{
		"name": "Chiefs Get Bear"
	}],
	[{
		"name": "Anyone But Chiefs Gets Bear"
	}],
	[{
		"name": "Burn a field"
	}],
	[{
		"name": "Burn a person"
	}],
	[{
		"name": "Burn a building"
	}],
	[{
		"name": "Noble Death"
	}],
	[{
		"name": "Noble Jailed"
	}],
	[{
		"name": "Oried Sighting"
	}],
	[{
			"name": "Finfolk Sighting"
		},
		{
			"name": "Wizard Sighting"
		},
		{
			"name": "Troll Sighting"
		},
		{
			"name": "Ortega Sighting"
		},
		{
			"name": "Werecreature Sighting"
		},
		{
			"name": "Sally Six-Fingers"
		},
		{
			"name": "Bees!"
		},
		{
			"name": "Dueling"
		},
		{
			"name": "Plague"
		},
		{
			"name": "Kraken"
		},
		{
			"name": "Avalanche"
		},
		{
			"name": "Jousting"
		},
		{
			"name": "Biffo"
		},
		{
			"name": "Boat Race"
		},
		{
			"name": "Shark Sighting"
		},
		{
			"name": "Chur Voyage Returns"
		},
		{
			"name": "Planty McPlantface"
		},
		{
			"name": "Spiders"
		},
		{
			"name": "Sandwich"
		}
	],
	[{
			"name": "Guillotine"
		},
		{
			"name": "Winterfeast"
		},
		{
			"name": "Night of the Seven Pyres"
		},
		{
			"name": "Great Hunt"
		},
		{
			"name": "Summer Games"
		},
		{
			"name": "Crimson Vigil"
		},
		{
			"name": "Die Unexpectedly"
		}
	],
	[{
			"name": "Treasury<1000",
			"types": ["money"]
		},
		{
			"name": "Treasury>4500",
			"types": ["money"]
		},
		{
			"name": "Auction Color Sweep",
			"types": ["auction"]
		},
		{
			"name": "Build Cost>10000",
			"types": ["Auction"]
		},
		{
			"name": "Cruel Tax Everyone",
			"types": ["tax"]
		},
		{
			"name": "Bribe Everyone",
			"types": ["tax"]
		},
		{
			"name": "Delay a Scheme"
		},
		{
			"name": "Kill Rebellion Envoy",
			"types": ["envoy"]
		},
		{
			"name": "Spare Rebellion Envoy",
			"types": ["envoy"]
		},
		{
			"name": "Successful Rebellion",
			"types": ["rebellion"]
		},
		{
			"name": "Failed Rebellion",
			"types": ["rebellion"]
		}
	],
	[{
			"name": "Have Child With Spouse",
			"types": ["heir"]
		},
		{
			"name": "Have Bastard Child",
			"types": ["heir"]
		},
		{
			"name": "Anoit Cousin As Heir",
			"types": ["heir"]
		},
		{
			"name": "Adopt Low-Born Heir",
			"types": ["heir"]
		}
	],
	[{
			"name": "Baron Victory",
			"types": ["victory"]
		},
		{
			"name": "Chief Victory",
			"types": ["victory"]
		},
		{
			"name": "Count Victory",
			"types": ["victory"]
		},
		{
			"name": "Grandee Victory",
			"types": ["victory"]
		},
		{
			"name": "Patrician Victory",
			"types": ["victory"]
		},
		{
			"name": "Monarch Victory",
			"types": ["victory"]
		}
	]
]
;
