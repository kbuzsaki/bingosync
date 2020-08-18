bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [
	[{
			"name": "Destroy the monkey box in Apu"
		},
		{
			"name": "Ring 2 doorbells in Homer 2"
		},
		{
			"name": "Fail a mission"
		},
		{
			"name": "Inanimate Carbon Rod"
		},
		{
			"name": "Boudoir Album"
		},
		{
			"name": "Human Cookbook"
		},
		{
			"name": "Destroy the Monkey Box in Bart 1"
		},
		{
			"name": "Apu meditate on top of the jebediah statue"
		},
		{
			"name": "Destroy a car with a ground pound"
		},
		{
			"name": "Soy Pop"
		}
	],
	[{
			"name": "BORT License Plate"
		},
		{
			"name": "Gabbo Doll"
		},
		{
			"name": "Hot Dog"
		},
		{
			"name": "Enter all interiors in Bart 2"
		},
		{
			"name": "Apus Tshirt"
		},
		{
			"name": "Prop 24 Sign"
		},
		{
			"name": "Chutney Squishie Card"
		},
		{
			"name": "Hell Toupee on foot"
		},
		{
			"name": "Destroy 10 tomacco plants in Homer 1"
		},
		{
			"name": "Enter every AI vechicle in Apu"
		}
	],
	[{
			"name": "Run over Snake in an armoured truck"
		},
		{
			"name": "Kick Kearny into Studio A"
		},
		{
			"name": "Hearse in the tractor beam"
		},
		{
			"name": "Kick 10 different NPCs"
		},
		{
			"name": "Get zapped by 3 different wasps"
		},
		{
			"name": "Lose 100 coins from being zapped by wasps"
		},
		{
			"name": "Go through the carwash with a smoking car"
		},
		{
			"name": "Blow up a car under bowlerama shortcut arm"
		},
		{
			"name": "Parchment"
		},
		{
			"name": "Destroy 3 different cars in the tractor beam"
		}
	],
	[{
			"name": "Skip a mission"
		},
		{
			"name": "Get to the top of Burns' backyard in Homer 1"
		},
		{
			"name": "Enter the Observatory in Nerd Race Queen"
		},
		{
			"name": "Ground pound the Squeaky-Voiced teen 3 times"
		},
		{
			"name": "Collect all the ufo wreckage coins in Homer 2"
		},
		{
			"name": "Blow up a car between train carts"
		},
		{
			"name": "Run a home run in 3 different levels"
		},
		{
			"name": "Skip a mission without manually restarting"
		},
		{
			"name": "5 Wasps in Marge"
		},
		{
			"name": "Australian Boot"
		}
	],
	[{
			"name": "Fail Petty Theft Homer"
		},
		{
			"name": "Complete Follow section in A Few Donuts More without entering a car"
		},
		{
			"name": "Blow up a cop car during Hit and Run"
		},
		{
			"name": "All Apu gags"
		},
		{
			"name": "All gags in any level"
		},
		{
			"name": "Kinky Frinky (5-B)"
		},
		{
			"name": "Fail 3 different missions"
		},
		{
			"name": "6 Wasps in Bart 1"
		},
		{
			"name": "5 Freebies"
		},
		{
			"name": "Mr. Honeybunny"
		}
	],
	[{
			"name": "Watch the Flowers by Irene Cutscene"
		},
		{
			"name": "Skip a main story cutscene in Apu"
		},
		{
			"name": "Power plant carpark gag as Homer Muumuu"
		},
		{
			"name": "No Button Presses in Blind Big Brother"
		},
		{
			"name": "Detention Deficit Disorder"
		},
		{
			"name": "Enter the DMV in Better than Beef"
		},
		{
			"name": "Cross the finish line from behind in Vox Nerduli"
		},
		{
			"name": "Lead Skinner to the Police Station in Detention Deficit Disorder"
		},
		{
			"name": "Kick 5 seagulls in Lisa"
		},
		{
			"name": "Park a waste truck in the powerplant carpark"
		}
	],
	[{
			"name": "Return of the Nearly Dead in a garbage truck"
		},
		{
			"name": "Full Metal Jackass in Planet Hype 50's Car"
		},
		{
			"name": "Get busted with exactly 50 coins"
		},
		{
			"name": "Watch all of the Observatory Cutscene in 2 levels"
		},
		{
			"name": "Perform Boat Jump or Bridge Clip in 3 different cars"
		},
		{
			"name": "Any street races in Homer 2"
		},
		{
			"name": "Skip a main story cutscene in Bart 2"
		},
		{
			"name": "Put otto in the well"
		},
		{
			"name": "Get a Duff Brewery Mascot under the springfield sign"
		},
		{
			"name": "Flaming Tires (7-B)"
		}
	],
	[{
			"name": "Kwik E Mart Race in Homer 2 without resetting car"
		},
		{
			"name": "Blow up skinner in S-M-R-T"
		},
		{
			"name": "Bonestorm Storm"
		},
		{
			"name": "Kick the head off of the jebediah statue as Ninja Bart"
		},
		{
			"name": "Stand on the Planet Hype sign as Floreda Lisa"
		},
		{
			"name": "Bonfire of the Manatees in First Person"
		},
		{
			"name": "Return of the Nearly Dead without picking up any coins"
		},
		{
			"name": "Make a Pawn do a Knight's move on the chessboard"
		},
		{
			"name": "... And Baby Makes Eight in Ambulance"
		},
		{
			"name": "Knock the cola truck onto road prior to Incriminating Caffiene"
		}
	],
	[{
			"name": "Complete Kang and Kodos Strike Back via the observatory"
		},
		{
			"name": "Activate both Powerplant gags during Bonestorm Storm"
		},
		{
			"name": "Kick Bart of a Boat"
		},
		{
			"name": "Destroy 5 Traffic Cars"
		},
		{
			"name": "15 Gags"
		},
		{
			"name": "Ring 3 doorbells in Homer 1"
		},
		{
			"name": "Win Homer 2 Wager Race"
		},
		{
			"name": "7 Wasps in Bart 2"
		},
		{
			"name": "Burns Portrait"
		},
		{
			"name": "Cemetery Race in Marge"
		}
	],
	[{
			"name": "Any street race in Bart 2"
		},
		{
			"name": "Watch the Nerd Car win the race in Nerd Race Queen"
		},
		{
			"name": "Stand on top of Moes in B-Sharps"
		},
		{
			"name": "Kick Mr. Burns in both Homer 1 and 2"
		},
		{
			"name": "Have Ralph stand up in a sandbox"
		},
		{
			"name": "Pocket Protector in first person"
		},
		{
			"name": "Watch all of the Larry the Looter Cutscene in 3 levels"
		},
		{
			"name": "Scroll through the entire phone booth in every level"
		},
		{
			"name": "All Homer 2 gags"
		},
		{
			"name": "8 Wasps in Lisa"
		},
		{
			"name": "9 Wasps in Homer 2"
		}
	],
	[{
			"name": "Have a car that starts with the letter S in the phonebooth"
		},
		{
			"name": "Have a car that starts with the letter D in the phonebooth"
		},
		{
			"name": "Have a car ends with Truck in the phonebooth"
		},
		{
			"name": "Get Hit and Run only kicking tombstones in the Cemetery"
		}, {
			"name": "All Homer 1 outfits"
		},
		{
			"name": "Casual Homer in the pool"
		},
		{
			"name": "In Lisa, complete a mission in the Honor Roller"
		},
		{
			"name": "A Few Donuts More..."
		},
		{
			"name": "Clear chessboard in Marge"
		},
		{
			"name": "Rigor Motors on Witch Broom"
		},
		{
			"name": "Buy Zombie car with exactly 500 coins"
		}
	],
	[{
			"name": "Survive Hit and Run without getting busted 3 times"
		},
		{
			"name": "Car surf from the observatory to the brewery"
		},
		{
			"name": "20 Gags"
		},
		{
			"name": "Win Bart 1 Wager Race"
		},
		{
			"name": "Fail Monkey See Monkey D'oh"
		},
		{
			"name": "Knock all of the benches around the Jebidiah Statue onto the road as Football Bart"
		},
		{
			"name": "Kick Milhouse off a cliff"
		},
		{
			"name": "Destroy the limo The Old Pirate and the Sea past the Bowlerama"
		},
		{
			"name": "Get Busted as inmate Marge"
		},
		{
			"name": "Get to Krusty Lu in 6-1 without picking up a kid going through the pier"
		}
	],
	[{
			"name": "As Homer donut stand on Lard Lads shoulder"
		},
		{
			"name": "Destroy 2 swingsets as Evil Homer"
		},
		{
			"name": "Theres Something about Monty"
		},
		{
			"name": "Destroy the default car from each level in the tractor beam"
		},
		{
			"name": "Drive from the Simpson House to Kwik-E-Mart in the husk"
		},
		{
			"name": "All Lisa gags"
		},
		{
			"name": "All Bart 2 gags"
		},
		{
			"name": "Win Lisa  Wager Race"
		},
		{
			"name": "Destroy all the pumpkins on the tomacco field in Homer 2"
		},
		{
			"name": "9 Wasps in Apu"
		},
		{
			"name": "Lisa Krustylu Race in the Malibu Stacey Car"
		}
	],
	[{
			"name": "Any Lisa street race"
		},
		{
			"name": "Watch a main story cutscene in Bart 2"
		},
		{
			"name": "The Old Pirate and the Sea in Knightboat"
		},
		{
			"name": "Enter the school during Redneck Roundup"
		},
		{
			"name": "Knock all of the benches around the Jebidiah Statue onto the road as Apu Army"
		},
		{
			"name": "Dial B for Blood (2-B)"
		},
		{
			"name": "Win Homer 1 Wager Race"
		},
		{
			"name": "Win Apu Wager Race"
		},
		{
			"name": "Win Bart 2 Wager Race"
		},
		{
			"name": "10 Wasps in Homer 1"
		}
	],
	[{
			"name": "Have a car that starts with the letter K in the phonebooth"
		},
		{
			"name": "All Bart 1 outfits"
		},
		{
			"name": "Skip a main story cutscene in Bart 1"
		},
		{
			"name": "S-M-R-T in Duff Truck"
		},
		{
			"name": "Better than Beef"
		},
		{
			"name": "Fishy Deals in the Fish Van"
		},
		{
			"name": "Let Snake reach the Observatory in Slithery Sleuthing"
		},
		{
			"name": "Collect fish 12 last in Fishy Deals"
		},
		{
			"name": "Destroy Curator on the highway"
		},
		{
			"name": "Kamp Krusty Flag gag as Bartman"
		}
	],
	[{
			"name": "All Homer 2 cards"
		},
		{
			"name": "Any level all cards"
		},
		{
			"name": "All Bart 1 gags"
		},
		{
			"name": "Ring 7 doorbells"
		},
		{
			"name": "This Old Shanty (1-B)"
		},
		{
			"name": "Win any Wager Race in Hard car"
		},
		{
			"name": "Collect 4 cola cans in your car in Cola Wars"
		},
		{
			"name": "Stand on the front tip of the C-Spanker as Cadet Bart"
		},
		{
			"name": "Tractor in tractor beam"
		},
		{
			"name": "Weapons of Mass Delinquency in Family Sedan"
		}
	],
	[{
			"name": "Collect one card from every level"
		},
		{
			"name": "All Marge gags"
		},
		{
			"name": "3 gags in every level"
		},
		{
			"name": "Princi-Pal (3-B)"
		},
		{
			"name": "Destroy two wasps in every level"
		},
		{
			"name": "Weapons of Mass Delinquency keeping a zero Hit and Run meter"
		},
		{
			"name": "Cell Outs in Honor Roller"
		},
		{
			"name": "Redneck Roundup in a Traffic Car"
		},
		{
			"name": "Police Marge in Police Car"
		},
		{
			"name": "Get to police station in This Little Piggy without picking up a donut"
		}
	],
	[{
			"name": "Lab Coat Caper"
		},
		{
			"name": "Complete 2 story missions in order without warping"
		},
		{
			"name": "Complete Bonestorm Storm whilst collecting the first drop pass the Simpsons house"
		},
		{
			"name": "All Bart 1 cards"
		},
		{
			"name": "All Bart 2 cards"
		},
		{
			"name": "All Homer 1 gags"
		},
		{
			"name": "Milking the Pigs (6-B)"
		},
		{
			"name": "Win any wager race in secret car"
		},
		{
			"name": "10 Cars"
		},
		{
			"name": "All Lisa outfits"
		}
	],
	[{
			"name": "Milhouse Race with Nightboat"
		},
		{
			"name": "Operation Hellfish"
		},
		{
			"name": "Finish Full Metal Jackass pass the Observatory"
		},
		{
			"name": "Alien Autotopsy II without resetting car"
		},
		{
			"name": "Destroy 10 Traffic Cars"
		},
		{
			"name": "Beached Love (4-B)"
		},
		{
			"name": "Win Marge Wager Race"
		},
		{
			"name": "25 Wasps"
		},
		{
			"name": "2 street races in Bart 1"
		},
		{
			"name": "Office spaced in Mr. Burns's Limo"
		}
	],
	[{
			"name": "The Fat & The Furious in Mr Burns Limo the intended way"
		},
		{
			"name": "Bart 'n' Frink in Black Van"
		},
		{
			"name": "Destroy each Cellout car with a different car"
		},
		{
			"name": "A Few Donuts More... in donut truck"
		},
		{
			"name": "Cola Wars"
		},
		{
			"name": "Eight Is too Much"
		},
		{
			"name": "Complete Kwik Cash with Snake knocked out of the car (via wasp)"
		},
		{
			"name": "Complete both Kremlin missions"
		},
		{
			"name": "All Lisa cards"
		},
		{
			"name": "All Apu cards"
		}
	],
	[{
			"name": "Watch a main story cutscene in Bart 1"
		},
		{
			"name": "Enter the DMV during Eight is too Much"
		},
		{
			"name": "Down with the Clown with Krusty's Limo"
		},
		{
			"name": "Stand on the duff truck as it exits the pier in Duff for me, Duff for you"
		},
		{
			"name": "All Marge cards"
		},
		{
			"name": "Have 2 cars ends with Truck in the phonebooth"
		},
		{
			"name": "Firetruck Race in Apu"
		},
		{
			"name": "Petty Theft Homer while only reversing"
		},
		{
			"name": "Flowers By Irene in the close cam"
		},
		{
			"name": "Complete Cola Wars but without sprinting"
		}
	],
	[{
			"name": "Alien Autotopsy I in the school bus"
		},
		{
			"name": "Donut Homer in Donut Truck"
		},
		{
			"name": "Complete 3 destruction missions"
		},
		{
			"name": "Complete 3 forced NPC-car missions"
		},
		{
			"name": "Bonus game race with at least 3 laps"
		},
		{
			"name": "All Marge outfits"
		},
		{
			"name": "Watch a main story cutscene in Apu"
		},
		{
			"name": "Incriminating Caffiene in close cam"
		},
		{
			"name": "10 cards"
		},
		{
			"name": "Complete the Homer 1 Nelson Race in the Plow King"
		}
	],
	[{
			"name": "Long Black Probes while holding the e-brake throughout"
		},
		{
			"name": "Pay Gil 1000 Coins Total"
		},
		{
			"name": "Have 1000 coins"
		},
		{
			"name": "5 outfits"
		},
		{
			"name": "Complete 3 missions with a secret car"
		},
		{
			"name": "Drive all secret cars"
		},
		{
			"name": "All Homer 1 cards"
		},
		{
			"name": "Buy Hoverbike"
		},
		{
			"name": "Complete at least 1 street race in 3 levels"
		},
		{
			"name": "Destroy each cola truck with a different car in From Outer Space"
		}
	],
	[{
			"name": "All Apu outfits"
		},
		{
			"name": "Watch Smithers enter the powerplant carpark in Office Spaced"
		},
		{
			"name": "Flowers By Irene in the Surveillance Van"
		},
		{
			"name": "Cell Outs in Willie's tractor"
		},
		{
			"name": "Complete 2 hit and collect missions"
		},
		{
			"name": "12 Cars"
		},
		{
			"name": "Complete 3 missions in order consecutively"
		},
		{
			"name": "Complete 3 missions in reverse order consecutively"
		},
		{
			"name": "Complete all even Missions in a single level"
		},
		{
			"name": "Wolves Stole My Pills"
		}
	],
	[{
			"name": "This Little Piggy while always looking backwards"
		},
		{
			"name": "Complete 2 missions involving the chase sedan"
		},
		{
			"name": "Have 1500 coins"
		},
		{
			"name": "All Homer 2 outfits"
		},
		{
			"name": "Watch a final cutscene in Homer 2"
		},
		{
			"name": "15 cards"
		},
		{
			"name": "Hit and Run-less Set to Kill "
		},
		{
			"name": "All Bart 2 outfits"
		},
		{
			"name": "Complete both Bandit missions"
		},
		{
			"name": "Complete From Outer Space in the Cola Truck"
		},
		{
			"name": "5 missions"
		},
		{
			"name": "5 Story missions"
		},
		{
			"name": "All Wasps in any level"
		},
		{
			"name": "Complete all odd-numbered Missions in a single level"
		},
		{
			"name": "Beached Love in Skinner's Sedan"
		},
		{
			"name": "Complete both Cletus truck missions"
		},
		{
			"name": "Complete 2 missions that require a costume or car purchase"
		},
		{
			"name": "Complete 5 missions with a secret car"
		},
		{
			"name": "Have 2 sedans in the phonebooth"
		},
		{
			"name": "Complete 3 follow missions"
		},
		{
			"name": "Complete 6 Story Missions as Homer"
		},
		{
			"name": "Complete 6 Story Missions as Bart"
		},
		{
			"name": "Complete a mission in every level"
		}
	]
];
