var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[[
{ "name": "Have 40 coins"},
{ "name": "Have 10 gems"},
{ "name": "Have 10 keys"},
{ "name": "Have 90 steps", "types": ["steps"] },
{ "name": "Have 5 stars"},
{ "name": "Have 5 allowance"}
],[
{ "name": "Draft 6 green rooms in 1 day", "types": ["green"] },
{ "name": "Draft 6 orange rooms in 1 day", "types": ["orange"] },
{ "name": "Draft 6 purple rooms in 1 day", "types": ["purple"] },
{ "name": "Draft 6 red rooms in 1 day", "types": ["red"] },
{ "name": "Draft 5 shops in 1 day", "types": ["gold"] }
],[
{ "name": "Obtain a Lucky Rabbit’s Foot"},
{ "name": "Obtain a Coupon Book", "types": ["gold"] },
{ "name": "Obtain a Watering Can", "types": ["green"] },
{ "name": "Obtain a Telescope", "types": ["stars"] },
{ "name": "Obtain a Hallpass", "types": ["orange"] }
],[
{ "name": "Leave a non-Contraption item in the Coat Check"},
{ "name": "Leave a Contraption in the Coat Check"},
{ "name": "Leave a key in the Coat Check"},
{ "name": "Retrieve any item from the Coat Check"},
{ "name": "Draft the Coat Check and leave it empty"}
],[
{ "name": "Adjust a room’s rarity"},
{ "name": "Add a room via the Drafting Studio"},
{ "name": "Start an experiment in the Laboratory", "types": ["lab"] },
{ "name": "Speak to Alzara"},
{ "name": "Upgrade 2 rooms", "types": ["upgrade"] }
],[
{ "name": "Eat food that gives more than 21 steps" },
{ "name": "Eat food that gives exactly 16 steps" },
{ "name": "Eat a side in the Dining Room" },
{ "name": "Eat food that gives 0 steps" },
{ "name": "Eat a green apple", "types": ["apple"] }
],[
{ "name": "Prism Key or Secret Passage into a red room", "types": ["red"] },
{ "name": "Open an empty Parlor box"},
{ "name": "End the day with an upgrade disk in your inventory"},
{ "name": "End the day with 50 or more steps", "types": ["purple","steps"] },
{ "name": "Draft 10 dead ends in one day", "types": ["tomb"] }
],[
{ "name": "Create a Burning Glass or Power Hammer", "types": ["bgph"] },
{ "name": "Create a Contraption other than the Burning Glass or Power Hammer"},
{ "name": "Create any Contraption"},
{ "name": "Create a Lucky Purse or Electromagnet"},
{ "name": "Have multiple Broken Levers or items created with Broken Levers at once"}
],[
{ "name": "Save gems or keys with a Stopwatch", "types": ["clock"] },
{ "name": "Obtain two Microchips in one day" },
{ "name": "Open a filing cabinet" },
{ "name": "Dig up a treasure map" },
{ "name": "Remove a room from your drafting pool with an item" }
],[
{ "name": "Find a Floorplan just lying around" },
{ "name": "Add a duplicate Floorplan via Chamber of Mirrors" },
{ "name": "Open a car door" },
{ "name": "Throw a coin in the Fountain" },
{ "name": "Open 4 Locker Room lockers in one day" }
],[
{ "name": "Unlock the West Gate" },
{ "name": "Unlock the Gemstone Caverns" },
{ "name": "Lower the Foundation elevator" },
{ "name": "Upgrade 4 rooms", "types": ["upgrade"] },
{ "name": "Spot 3 or more constellations at once", "types": ["stars"] }
],[
{ "name": "Pick a gem flower from the Greenhouse" },
{ "name": "Turn on the sink in the Kitchen" },
{ "name": "Drain the Fountain" },
{ "name": "Ride the boat underground" },
{ "name": "Empty the Pool" }
],[
{ "name": "Power the Pump Room" },
{ "name": "Power the Garage" },
{ "name": "Power the Laundry Room" },
{ "name": "Power the Furnace", "types": ["furnace"] },
{ "name": "Power the Laboratory", "types": ["grotto"] }
],[
{ "name": "Draft the Master Bedroom" },
{ "name": "Draft Her Ladyship’s Chamber" },
{ "name": "Draft a Freezer" },
{ "name": "Draft a Furnace", "types": ["furnace"] },
{ "name": "Draft the Vault", "types": ["vault"] }
],[
{ "name": "Reach room 46" }
],[
{ "name": "Solve a Sigil", "types": ["sigil"] },
{ "name": "Visit the Mt. Holly Gift Shop!", "types": ["giftshop"] },
{ "name": "Enter the Precipice", "types": ["precipice"] },
{ "name": "Use a Vault Key", "types": ["vault"] },
{ "name": "Full House Trophy" }
],[
{ "name": "Buy out the Kitchen" },
{ "name": "Buy out the Commissary" },
{ "name": "Buy an item from the Showroom" },
{ "name": "Buy an item from the Gift Shop", "types": ["giftshop"] },
{ "name": "Buy a book" }
],[
{ "name": "Activate an experiment 4 or more times in one day" },
{ "name": "Dig up something other than a turnip, key, or coin", "types": ["dig"] },
{ "name": "Enhance your lockpicking skill at least twice", "types": ["lab"] },
{ "name": "Eat a delicious apple", "types": ["stars", "apple"] },
{ "name": "Pick a gem flower from somewhere other than the Greenhouse", "types": ["flower"] }
],[
{ "name": "Trade for an upgrade disk", "types": ["trade"] },
{ "name": "Draft 2 or more Classrooms on one day", "types": ["grade"] },
{ "name": "Have 2 or more items before drafting any rooms in the manor", "types": ["item"] },
{ "name": "Dig 12 or more times in a day", "types": ["dig"] },
{ "name": "Draft an Outer Room that shouldn’t be there", "types": ["monk"]}
],[
{ "name": "Turn on the Laboratory Machine", "types": ["grotto"] },
{ "name": "Read 5 red letters" },
{ "name": "Obtain a total of 10 permanent and room upgrades", "types": ["upgrade"] },
{ "name": "Destroy the Keeper", "types": ["bgph"] },
{ "name": "Obtain the power of a chess piece", "types": ["precipice", "chess"] }
],[
{ "name": "Draft a Tunnel from a Tunnel", "types": ["orange"] },
{ "name": "Draft 3 Aquariums in one day", "types": ["lab"] },
{ "name": "Draft 90 different rooms" },
{ "name": "End a day with an equal number of each color of room in the manor" },
{ "name": "Draft a Mechanarium with more than four doors" }
],[
{ "name": "Draft the Dovecote" },
{ "name": "Draft the Dormitory", "types": ["orange"] },
{ "name": "Draft the Vestibule", "types": ["purple"] },
{ "name": "Draft the Kennel" },
{ "name": "Draft the Clocktower", "types": ["clock"] },
{ "name": "Draft the Solarium", "types": ["green"] }
],[
{ "name": "Enter the Antechamber while drafting every red room you see", "types": ["red"] },
{ "name": "Enter the Antechamber while never having more than 2 items in your inventory", "types": ["item"] },
{ "name": "Enter the Antechamber while never having fewer than 20 steps", "types": ["steps", "purple"] },
{ "name": "Enter the Antechamber with no rooms in the West Wing", "types": ["wing"] },
{ "name": "Enter the Antechamber with no rooms in the East Wing", "types": ["wing"] },
{ "name": "Enter the Antechamber without drafting a green room", "types": ["green"] }
],[
{ "name": "Open the Underground Tombside door" },
{ "name": "Draft an Outer Room that really shouldn’t be there (Foundation, Entrance Hall, Antechamber, 46)", "types": ["monk"] },
{ "name": "Open the Shelter Safe", "types": ["waiting"] },
{ "name": "Enter the Antechamber with a Hovel outside", "types": ["purple"] },
{ "name": "Blow up the Trading Post", "types": ["bgph", "trade"] },
{ "name": "Open 4 Mora Jai boxes" }
],[
{ "name": "Visit the Orindian Ruins", "types": ["grotto"] },
{ "name": "Draft a non-Aquarium Blackprint" },
{ "name": "Pick a flower off of a grave", "types": ["flower","bgph"] },
{ "name": "Castle", "types": ["chess"] },
{ "name": "Reach 6th grade", "types": ["grade"] },
{ "name": "Reclaim the (paper) Crown", "types": ["red"] }
]];
