//Made By TK & Kolapro
bingoGenerator = require("./generators/generator_bases/simple_generator.js");
var bingoList =
  [{
		"name": "Kill all spiders in High Caves and kill all enemies in Terrace Village "
	},
	{
		"name": "Get all dragons in Stone Hill and Dry Canyon"
	},
	{
		"name": "8 homeworld dragons"
	},
	{
		"name": "Kill all Gnorcs in Peace Keepers homeworld and kill all monkeys in Metalhead"
	},
	{
		"name": "ELV Twilight Harbor without getting hit "
	},
	{
		"name": "ELV 3 levels without getting anything"
	},
	{
		"name": "Kill 5 different fodder in 5 different levels"
	},
	{
		"name": "Get 5 eggs in Magic Crafters"
	},
	{
		"name": "Have 10 lives"
	},
	{
		"name": "Get 8 purple gems"
	},
	{
		"name": "Kill all egg thieves"
	},
	{
		"name": "Ignite 4 rockets"
	},
	{
		"name": "Unlock 4 keychests"
	},
	{
		"name": "Break all life chests in Peace Keepers levels"
	},
	{
		"name": "Get 15 dragons"
	},
	{
		"name": "Break 1 spring chest of every colour"
	},
	{
		"name": "Kill all enemies in Misty Bog and Blowhard"
	},
	{
		"name": "Get 2 dragons in both Wizard Peak and Terrace Village"
	},
	{
		"name": "Unlock Gnasty Gnorc"
	},
	{
		"name": "Complete Wild Flight and Night Flight"
	},
	{
		"name": "Get 400+ gems in 2 Dream Weavers levels"
	},
	{
		"name": "Use all flame powerups"
	},
	{
		"name": "100% Ice Cavern and Icy Flight"
	},
	{
		"name": "Get 2000 gems"
	},
	{
		"name": "Get 250 gems in both Wizard Peak and Jacques"
	},
	{
		"name": "Break all purple gem and red gem spring chests "
	},
	{
		"name": "Break all the spring chests in 3 levels"
	},
	{
		"name": "Get 30 dragons"
	},
	{
		"name": "Kiss all the fairies and destroy all of the shields in Haunted Towers"
	},
	{
		"name": "Destroy 9 strong chests"
	},
	{
		"name": "Let Shemp do 25 spins in his last phase"
	},
	{
		"name": "700 homeworld gems"
	},
	{
		"name": "All gems in 2 flight levels"
	},
	{
		"name": "Defeat 3 bosses"
	},
	{
		"name": "Get 200 gems in 3 levels that have 400 gems"
	},
	{
		"name": "Have 20 lives"
	},
	{
		"name": "Get 6 eggs"
	},
	{
		"name": "ELV 3 levels without getting hit"
	},
	{
		"name": "Break 8 fireworks chests"
	},
	{
		"name": "Use 5 supercharge ramps"
	},
	{
		"name": "Hit all gem lamps in Ice Cavern"
	},
	{
		"name": "All gems in 2 homeworlds"
	},
	{
		"name": "Break 15 fan chests"
	},
	{
		"name": "Kill the wizards in the platform in High caves using the supercharge powerup"
	},
	{
		"name": "Get all dragons in Dark Passage"
	},
	{
		"name": "Get 100 gems in 3 levels that have 300 gems (no flights)"
	},
	{
		"name": "6 combined dragons in Tree Tops and Alpine Ridge"
	},
	{
		"name": "300 gems in both Cliff Town and High Caves"
	},
	{
		"name": "100% Misty Bog"
	},
	{
		"name": "100% Gnorc Cove"
	},
	{
		"name": "600 combined gems in Dry Canyon and Blowhard"
	},
	{
		"name": "All dragons in Tree Tops and Jacques"
	},
	{
		"name": "Speak to the dragon that tells you about Sunny Flight and finish that flight"
	},
	{
		"name": "All gems in Metalhead"
	},
	{
		"name": "350 combined gems in Doctor Shemp and Town Square"
	},
	{
		"name": "All gems in Toasty"
	},
	{
		"name": "100% 2 homeworlds"
	},
	{
		"name": "Use 5 whirlwinds in 5 different levels/homeworlds"
	},
	{
		"name": "Get 1000 gems"
	},
	{
		"name": "Release 6 'Thank you for releasing me' dragons"
	},
	{
		"name": "Use 7 end of level vortex's"
	},
	{
		"name": "Rescue all the fairies in Lofty Castle"
	},
	{
		"name": "100% Dark Hollow"
	},
	{
		"name": "Talk to all of the balloonists"
	},
	{
		"name": "10 dragons in Magic Crafters"
	},
	{
		"name": "Get 600 gems in Artisans"
	},
	{
		"name": "Die in blue water in 5 different levels"
	},
	{
		"name": "All dragons in Gnorc Gnexus"
	},
	{
		"name": "Kill all of the Big Mammas"
	},
	{
		"name": "200 gems in at least 1 level in all worlds (no flights/homeworlds)"
	},
	{
		"name": "3 dragons in at least 1 level in all worlds except Gnorc Gnexus"
	},
	{
		"name": "Kill all thieves in Tree Tops and in Gnasty Gnorc"
	},
	{
		"name": "Get all gems in Stone Hill and Toasty"
	},
	{
		"name": "100% Town Square"
	},
	{
		"name": "700 combined gems in Tree Tops and Alpine Ridge"
	},
	{
		"name": "Get 250 gems in both Lofty Castle and Twilight Harbor"
	},
	{
		"name": "100% 2 Dream Weavers levels"
	},
	{
		"name": "300 gems in both Dark Passage and Gnorc Cove"
	},
	{
		"name": "700 combined gems in High Caves and Haunted Towers"
	},
	{
		"name": "Get all dragons in Cliff Town and Stone Hill "
	},
	{
		"name": "300 gems in Alpine Ridge and both dragons in Terrace Village"
	},
	{
		"name": "Clear the death room in Misty Bog without getting hit (fail=suicide, redo) "
	},
	{
		"name": "Open the key chest in Metalhead and get 200 gems in ice cavern"
	},
	{
		"name": "Get all dragons in Jacques, defeat him and finish crystal flight"
	},
	{
		"name": "Defeat all enemies in Gnorc Cove and Cliff Town"
	},
	{
		"name": "All bulls stuck in town square and vortex in terrace village without getting hit by the electric floor"
	},
	{
		"name": "Get 200 gems in 2 levels sparxless "
	},
	{
		"name": "Run 5 laps back to back around the purple gem area in cliff town  "
	},
	{
		"name": "Get eaten, electrocuted, spanked and drown "
	},
	{
		"name": "Get 2 dragons in 5 different levels"
	},
	{
		"name": "Kill 5 gnorcs with the canon and burn  5 cactuses"
	},
	{
		"name": "Get the secret life in twilight harbor"
	},
	{
		"name": "Do 5 laps in gnasty gnorc"
	},
	{
		"name": "Get 300 gems in 2 levels that have 500 gems"
	},
	{
		"name": "Get 10 dragons, 500 gems and 5 eggs"
	},
	{
		"name": "350+ gems in 'town' levels"
	},
	{
		"name": "ELV both 'Dark' levels"
	},
	{
		"name": "ELV Dry Canyon,Haunted Towers and Stone Hill"
	},
	{
		"name": "ELV High Caves,Toasty and Terrace Village"
	},
	{
		"name": "ELV 1 level from each homeworld"
	},
	{
		"name": "Get 20 orbs from enemies"
	},
	{
		"name": "Ignite 10 firework chests"
	},
	{
		"name": "All gems in Dark Hollow and 300 gems in Terrace Village"
	},
	{
		"name": "All gems in Toasty and 250 gems in Misty Bog "
	},
	{
		"name": "300 gems in both Dry Canyon and Metalhead"
	},
	{
		"name": "300 gems in both Alpine Ridge and Gnasty Gnorc"
	},
	{
		"name": "100 gems in both Stone Hill and Peace Keepers homeworld"
	},
	{
		"name": "300 gems in both Alpine Ridge and Gnasty Gnorc"
	},
	{
		"name": "200 gems in both Doctor Shemp and Magic Crafters homeworld"
	},
	{
		"name": "200 gems in both Lofty Castle and Beast Makers homeworld"
	},
	{
		"name": "200 gemons in Town Square and Ice Cavern"
	},
	{
		"name": "2 dragons in both Dark Hollow and High Caves"
	},
	{
		"name": "2 dragons in both Lofty Castle and Misty Bog"
	},
	{
		"name": "3+ dragons in Gnorc Cove and Haunted Towers"
	},
	{
		"name": "2 dragons in both Dark Hollow and Wizard Peak"
	},
	{
		"name": "3+ dragons in Gnorc Cove and Haunted Towers"
	},
	{
		"name": "3 dragons in both Town Square and Alpine Ridge"
	},
	{
		"name": "3 dragons in both Misty Bog and Dry Canyon"
	},
	{
		"name": "4+ dragons in Cliff Town and Twilight Harbor"
	},
	{
		"name": "4+ dragons in High Caves and Twilight Harbor"
	},
	{
		"name": "4+ dragons in Gnorc Cove and Lofty Castle"
	},
	{
		"name": "All dragons Peace Keepers homeworld and 2 dragons in Dark Passage"
	},
	{
		"name": "All dragons in Magic Crafters homeworld and all fools in Dream Weavers homeworld"
	},
	{
		"name": "All dragons in Beast Makers homeworld and complete Wild Flight without touching the ground"
	},
	{
		"name": "Get 400+ gems in 2 Beast Makers levels"
	},
	{
		"name": "Get 300+ gems in 2 Magic Crafters levels"
	},
	{
		"name": "Get 250+ gems in 2 Peace Keepers levels"
	},
	{
		"name": "100% 2 Peace Keepers levels"
	},
	{
		"name": "100% 2 Magic Crafters levels"
	},
	{
		"name": "4 + dragons in Terrace Village and Haunted Towers "
	},
	{
		"name" : "100 % 2 Artisans levels"
	}, {
		"name": "100% 2 Beast Makers levels"
	}, {
		"name": "All the main path fools in Dark Passage and all Shield Gnorcs in Dark Hollow"
	}, {
		"name": "100% Stone Hill"
	}, {
		"name": "100% Tree Tops"
	}, {
		"name": "100% Wizard Peak"
	}, {
		"name": "2 dragons in both Gnorc Cove and Dream Weavers homeworld "
	},
	{
		"name": "7+ dragons in all homeworlds"
	},
	{
		"name": "Kill both gem thieves in Tree Tops"
	}
]