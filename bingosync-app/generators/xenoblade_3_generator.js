bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Fill out Pruning Wood entry (1)"
    },
    {
        "name": "Fill out 6 Thirsty Oak entry (4)"
    },
    {
        "name": "Fill out Simmertree entry (3)"
    },
    {
        "name": "Fill out Comet Carrot entry (2)"
    },
    {
        "name": "Fill out Filling Onion entry (2)"
    },
    {
        "name": "Fill out Dainty Shroom entry (5)"
    },
    {
        "name": "Fill out Kelp Mushroom entry (2)"
    },
    {
        "name": "Fill out Mallow-o'-the-Marsh entry (3)"
    },
    {
        "name": "Fill out Flake Crystal entry (2)"
    },
    {
        "name": "Fill out Demon Marble entry (2)"
    },
    {
        "name": "Fill out Warning Lamp entry (1)"
    },
    {
        "name": "Fill out Twin Generators entry (2)"
    },
    {
        "name": "Fill out Silverseed entry (4)"
    },
    {
        "name": "Fill out Milky Soy entry (4)"
    },
    {
        "name": "Fill out Plate Pothos entry (4)"
    },
    {
        "name": "Fill out Armu Barley entry (4)"
    },
    {
        "name": "Fill out Bluesky Bark entry (5)"
    },
    {
        "name": "Fill out Walnut Grape entry (6)"
    },
    {
        "name": "Fill out Sour Gooseberry entry (2)"
    },
    {
        "name": "Fill out Ruby Pineapple entry (4)"
    },
    {
        "name": "Fill out Jalapenoki entry (2)"
    },
    {
        "name": "Fill out Tootshroom entry (4)"
    },
    {
        "name": "Fill out Powder Pearl entry (4)"
    },
    {
        "name": "Fill out Delicate Bell entry (4)"
    },
    {
        "name": "Fill out Noise Bite entry (2)"
    },
    {
        "name": "Fill out Limelightstone entry (3)"
    },
    {
        "name": "Fill out Urchon Fossil entry (4)"
    },
    {
        "name": "Fill out Torta Fossil entry (4)"
    },
    {
        "name": "Fill out Nebula Fossil entry (2)"
    },
    {
        "name": "Fill out Blossom Belt entry (2)"
    },
    {
        "name": "Fill out Fluid Cranker entry (2)"
    },
    {
        "name": "Fill out Bullet Screen entry (2)"
    },
    {
        "name": "Fill out Lucky Spice entry (2)"
    },
    {
        "name": "Fill out Paste Bean entry (2)"
    },
    {
        "name": "Fill out Strong Dandelion entry (5)"
    },
    {
        "name": "Fill out Dawn Hydrangea entry (3)"
    },
    {
        "name": "Fill out Sweet Wasabi entry (6)"
    },
    {
        "name": "Fill out Cool Potato entry (4)"
    },
    {
        "name": "Fill out Baggy Swede entry (3)"
    },
    {
        "name": "Fill out Varicini entry (4)"
    },
    {
        "name": "Fill out Micropuff entry (4)"
    },
    {
        "name": "Fill out Wool Rock entry (2)"
    },
    {
        "name": "Fill out Magnet Clay entry (2)"
    },
    {
        "name": "Fill out Rabbit Diode entry (2)"
    },
    {
        "name": "Fill out Rainbow Circonia entry (2)"
    },
    {
        "name": "Fill out Bizarrenacle entry (2)"
    },
    {
        "name": "Fill out Royal Red Scallop entry (4)"
    },
    {
        "name": "Fill out Vinenut entry (5)"
    },
    {
        "name": "Fill out Heyday Poplar entry (4)"
    },
    {
        "name": "Fill out Foolin' Ivy entry (3)"
    },
    {
        "name": "Fill out Oil Lentil entry (2)"
    },
    {
        "name": "Fill out Cracker Nut entry (3)"
    },
    {
        "name": "Fill out Cutting-Edge Aloe entry (2)"
    },
    {
        "name": "Fill out Razzle Basil entry (2)"
    },
    {
        "name": "Fill out Humming Plum entry (2)"
    },
    {
        "name": "Fill out Red Durian entry (3)"
    },
    {
        "name": "Fill out Wyrdstone entry (5)"
    },
    {
        "name": "Fill out Blood Emerald entry (4)"
    },
    {
        "name": "Fill out Polar Pearl entry (3)"
    },
    {
        "name": "Fill out Monochromagnetite entry (2)"
    },
    {
        "name": "Fill out Capronite entry (4)"
    },
    {
        "name": "Fill out Pione Stone entry (4)"
    },
    {
        "name": "Fill out Rusty Bolt entry (2)"
    },
    {
        "name": "Fill out Winding Gear entry (3)"
    },
    {
        "name": "Fill out Mock-Lobster Pseudoshell entry (2)"
    },
    {
        "name": "Fill out Mudclam entry (4)"
    },
    {
        "name": "Fill out Tentacled Oyster entry (4)"
    },
    {
        "name": "Fill out Gypsum Branch entry (5)"
    },
    {
        "name": "Fill out Broom Icicle entry (4)"
    },
    {
        "name": "Fill out Absurd Branch entry (4)"
    },
    {
        "name": "Fill out Melancholy Rose entry (6)"
    },
    {
        "name": "Fill out Black Peony entry (3)"
    },
    {
        "name": "Fill out Ether Plum entry (5)"
    },
    {
        "name": "Fill out Dry Lemon entry (4)"
    },
    {
        "name": "Fill out Amethyst Vanilla entry (2)"
    },
    {
        "name": "Fill out Ice Cabbage entry (2)"
    },
    {
        "name": "Fill out Ingot Carrot entry (3)"
    },
    {
        "name": "Fill out Clicky Topaz entry (5)"
    },
    {
        "name": "Fill out Greedstone entry (4)"
    },
    {
        "name": "Fill out Icicle Marine entry (3)"
    },
    {
        "name": "Fill out Lacquer Stone entry (2)"
    },
    {
        "name": "Fill out Emerald Snow entry (4)"
    },
    {
        "name": "Fill out Rabbit Stone entry (3)"
    },
    {
        "name": "Fill out Peng Fossil entry (4)"
    },
    {
        "name": "Fill out Garlus Fossil entry (4)"
    },
    {
        "name": "Fill out Squood Fossil entry (3)"
    },
    {
        "name": "Fill out White Cover entry (2)"
    },
    {
        "name": "Fill out Strong Screw entry (2)"
    },
    {
        "name": "Fill out Modern Resistor entry (2)"
    },
    {
        "name": "Vermilion Woods 'Wood' category"
    },
    {
        "name": "Vermilion Woods 'Vegetables' category"
    },
    {
        "name": "Vermilion Woods 'Mushrooms' category"
    },
    {
        "name": "Vermilion Woods 'Ore' category"
    },
    {
        "name": "Vermilion Woods 'Machine Parts' category"
    },
    {
        "name": "Aurora Shelf 'Seeds' category"
    },
    {
        "name": "Aurora Shelf 'Plants' category"
    },
    {
        "name": "Aurora Shelf 'Fruit' category"
    },
    {
        "name": "Aurora Shelf 'Mushrooms' category"
    },
    {
        "name": "Aurora Shelf 'Gemstones' category"
    },
    {
        "name": "Aurora Shelf 'Ore' category"
    },
    {
        "name": "Aurora Shelf 'Fossils' category"
    },
    {
        "name": "Aurora Shelf 'Machine Parts' category"
    },
    {
        "name": "Yesterdale 'Seeds' category"
    },
    {
        "name": "Yesterdale 'Flowers' category"
    },
    {
        "name": "Yesterdale 'Vegetables' category"
    },
    {
        "name": "Yesterdale 'Mushrooms' category"
    },
    {
        "name": "Yesterdale 'Ore' category"
    },
    {
        "name": "Yesterdale 'Machine Parts' category"
    },
    {
        "name": "Yesterdale 'Shells' category"
    },
    {
        "name": "Ragmos Desolation 'Wood' category"
    },
    {
        "name": "Ragmos Desolation 'Seeds' category"
    },
    {
        "name": "Ragmos Desolation 'Plants' category"
    },
    {
        "name": "Ragmos Desolation 'Fruit' category"
    },
    {
        "name": "Ragmos Desolation 'Gemstones' category"
    },
    {
        "name": "Ragmos Desolation 'Ore' category"
    },
    {
        "name": "Ragmos Desolation 'Machine Parts' category"
    },
    {
        "name": "Ragmos Desolation 'Shells' category"
    },
    {
        "name": "Black Mountains 'Wood' category"
    },
    {
        "name": "Black Mountains 'Flowers' category"
    },
    {
        "name": "Black Mountains 'Fruit' category"
    },
    {
        "name": "Black Mountains 'Vegetables' category"
    },
    {
        "name": "Black Mountains 'Gemstones' category"
    },
    {
        "name": "Black Mountains 'Ore' category"
    },
    {
        "name": "Black Mountains 'Fossils' category"
    },
    {
        "name": "Black Mountains 'Machine Parts' category"
    },
    {
        "name": "Vermilion Woods 100% Collectopaedia"
    },
    {
        "name": "Aurora Shelf 100% Collectopaedia"
    },
    {
        "name": "Yesterdale 100% Collectopaedia"
    },
    {
        "name": "Ragmos Desolation 100% Collectopaedia"
    },
    {
        "name": "Black Mountains 100% Collectopaedia"
    },
    {
        "name": "100% Collectopaedia in any area"
    },
    {
        "name": "100% Collectopaedia in 2 areas"
    },
    {
        "name": "Vermilion Woods 25% Enemypaedia"
    },
    {
        "name": "Vermilion Woods 50% Enemypaedia"
    },
    {
        "name": "Vermilion Woods 75% Enemypaedia"
    },
    {
        "name": "Aurora Shelf 25% Enemypaedia"
    },
    {
        "name": "Aurora Shelf 50% Enemypaedia"
    },
    {
        "name": "Aurora Shelf 75% Enemypaedia"
    },
    {
        "name": "Yesterdale 25% Enemypaedia"
    },
    {
        "name": "Yesterdale 50% Enemypaedia"
    },
    {
        "name": "Yesterdale 75% Enemypaedia"
    },
    {
        "name": "Ragmos Desolation 25% Enemypaedia"
    },
    {
        "name": "Ragmos Desolation 50% Enemypaedia"
    },
    {
        "name": "Ragmos Desolation 75% Enemypaedia"
    },
    {
        "name": "Black Mountains 25% Enemypaedia"
    },
    {
        "name": "Black Mountains 50% Enemypaedia"
    },
    {
        "name": "Black Mountains 75% Enemypaedia"
    },
    {
        "name": "3 Containers in Vermilion Woods"
    },
    {
        "name": "5 Containers in Vermilion Woods"
    },
    {
        "name": "All Containers in Vermilion Woods (7)"
    },
    {
        "name": "4 Containers in Aurora Shelf"
    },
    {
        "name": "8 Containers in Aurora Shelf"
    },
    {
        "name": "12 Containers in Aurora Shelf"
    },
    {
        "name": "All Containers in Aurora Shelf (16)"
    },
    {
        "name": "2 Containers in Yesterdale"
    },
    {
        "name": "4 Containers in Yesterdale"
    },
    {
        "name": "All Containers in Yesterdale (6)"
    },
    {
        "name": "2 Containers in Ragmos Desolation"
    },
    {
        "name": "4 Containers in Ragmos Desolation"
    },
    {
        "name": "6 Containers in Ragmos Desolation"
    },
    {
        "name": "8 Containers in Ragmos Desolation"
    },
    {
        "name": "All Containers in Ragmos Desolation (10)"
    },
    {
        "name": "2 Containers in Black Mountains"
    },
    {
        "name": "4 Containers in Black Mountains"
    },
    {
        "name": "6 Containers in Black Mountains"
    },
    {
        "name": "8 Containers in Black Mountains"
    },
    {
        "name": "All Containers in Black Mountains (10)"
    },
    {
        "name": "1 Relic in Vermilion Woods"
    },
    {
        "name": "All Relics in Vermilion Woods"
    },
    {
        "name": "2 Relic in Aurora Shelf"
    },
    {
        "name": "3 Relics in Aurora Shelf"
    },
    {
        "name": "All Relics in Aurora Shelf (5)"
    },
    {
        "name": "1 Relic in Yesterdale"
    },
    {
        "name": "All Relics in Yesterdale (3)"
    },
    {
        "name": "1 Relic in Ragmos Desolation"
    },
    {
        "name": "3 Relics in Ragmos Desolation"
    },
    {
        "name": "All Relics in Ragmos Desolation (5)"
    },
    {
        "name": "2 Relics in Black Mountains"
    },
    {
        "name": "4 Relics in Black Mountains"
    },
    {
        "name": "6 Relics in Black Mountains"
    },
    {
        "name": "All Relics in Black Mountains (8)"
    },
    {
        "name": "2 Ether Channel in Vermilion Woods"
    },
    {
        "name": "All Ether Channels in Vermilion Woods (3)"
    },
    {
        "name": "3 Ether Channels in Aurora Shelf"
    },
    {
        "name": "5 Ether Channels in Aurora Shelf"
    },
    {
        "name": "7 Ether Channels in Aurora Shelf"
    },
    {
        "name": "10 Ether Channels in Aurora Shelf"
    },
    {
        "name": "All Ether Channels in Aurora Shelf (13)"
    },
    {
        "name": "2 Ether Channels in Yesterdale"
    },
    {
        "name": "All Ether Channels in Yesterdale (4)"
    },
    {
        "name": "2 Ether Channels in Ragmos Desolation"
    },
    {
        "name": "4 Ether Channels in Ragmos Desolation"
    },
    {
        "name": "6 Ether Channels in Ragmos Desolation"
    },
    {
        "name": "All Ether Channels in Ragmos Desolation (9)"
    },
    {
        "name": "2 Ether Channels in Black Mountains"
    },
    {
        "name": "4 Ether Channels in Black Mountains"
    },
    {
        "name": "All Ether Channels in Black Mountains (7)"
    },
    {
        "name": "All Locations in Vermilion Woods (8)"
    },
    {
        "name": "All Locations in Aurora Shelf (16)"
    },
    {
        "name": "All Locations in Yesterdale (8)"
    },
    {
        "name": "All Locations in Ragmos Desolation (9)"
    },
    {
        "name": "All Locations in Black Mountains (13)"
    },
    {
        "name": "All Landmarks in Aurora Shelf (7)"
    },
    {
        "name": "All Landmarks in Yesterdale (8)"
    },
    {
        "name": "Secret Area: Palace of Bal Attas"
    },
    {
        "name": "Secret Area: Sacred Water Cavern"
    },
    {
        "name": "Secret Area: Rotbatunga"
    },
    {
        "name": "Secret Area: Godreading Altar"
    },
    {
        "name": "Secret Area: Royal Green"
    },
    {
        "name": "Secret Area: Tranquil Bluffs"
    },
    {
        "name": "Secret Area: La Luz Temple"
    },
    {
        "name": "Secret Area: Three Sage Tabernacle"
    },
    {
        "name": "Secret Area: Third Sanctum"
    },
    {
        "name": "All Secret Areas in Ragmos Desolation (3)"
    },
    {
        "name": "All Secret Areas in Black Mountains (3)"
    },
    {
        "name": "1 Field Crafting in Vermilion Woods"
    },
    {
        "name": "All Field Crafting in Vermilion Woods (3)"
    },
    {
        "name": "2 Field Crafting in Aurora Shelf"
    },
    {
        "name": "4 Field Crafting in Aurora Shelf"
    },
    {
        "name": "6 Field Crafting in Aurora Shelf"
    },
    {
        "name": "8 Field Crafting in Aurora Shelf"
    },
    {
        "name": "All Field Crafting in Aurora Shelf (10)"
    },
    {
        "name": "2 Field Crafting in Yesterdale"
    },
    {
        "name": "4 Field Crafting in Yesterdale"
    },
    {
        "name": "All Field Crafting in Yesterdale (6)"
    },
    {
        "name": "2 Field Crafting in Ragmos Desolation"
    },
    {
        "name": "4 Field Crafting in Ragmos Desolation"
    },
    {
        "name": "6 Field Crafting in Ragmos Desolation"
    },
    {
        "name": "All Field Crafting in Ragmos Desolation (8)"
    },
    {
        "name": "2 Field Crafting in Black Mountains"
    },
    {
        "name": "4 Field Crafting in Black Mountains"
    },
    {
        "name": "7 Field Crafting in Black Mountains"
    },
    {
        "name": "10 Field Crafting in Black Mountains"
    },
    {
        "name": "All Field Crafting in Black Mountains (14)"
    },
    {
        "name": "Construct an Ether Mast"
    },
    {
        "name": "Construct 2 Ether Masts"
    },
    {
        "name": "Construct 3 Ether Masts"
    },
    {
        "name": "Ether Mast: Vermilion Woods"
    },
    {
        "name": "Ether Mast: Aurora Shelf, Ravaged Village"
    },
    {
        "name": "Ether Mast: Aurora Shelf, Lower Area"
    },
    {
        "name": "Ether Mast: Yesterdale"
    },
    {
        "name": "Ether Mast: Ragmos, Starting Area"
    },
    {
        "name": "Ether Mast: Ragmos, Raguel Lake"
    },
    {
        "name": "Ether Mast: Black Mountains, Main"
    },
    {
        "name": "Ether Mast: Black Mountains, Prison Island"
    },
    {
        "name": "Unlock all Art Slots for a character"
    },
    {
        "name": "Unlock all Gem Slots for a character"
    },
    {
        "name": "Unlock all Accessory Slots for a character"
    },
    {
        "name": "Unlock both Affinity Growth tiers for a character"
    },
    {
        "name": "Learn every Art as any character"
    },
    {
        "name": "Unlock all regular Skills for one character"
    },
    {
        "name": "Learn 4 Skills as any character"
    },
    {
        "name": "Learn 8 Skills as any character"
    },
    {
        "name": "Learn 12 Skills as any character"
    },
    {
        "name": "Enhance someone's Talent Art"
    },
    {
        "name": "Enhance someone's Talent Art twice"
    },
    {
        "name": "Enhance 2 Skills on the same character"
    },
    {
        "name": "Enhance 4 Skills on the same character"
    },
    {
        "name": "Enhance a Skill twice on the same character"
    },
    {
        "name": "Obtain all Initiative Effects"
    },
    {
        "name": "100% any character's Affinity Growth"
    },
    {
        "name": "Add Amryn to the Community"
    },
    {
        "name": "Add Axel to the Community"
    },
    {
        "name": "Add Babalulu to the Community"
    },
    {
        "name": "Add Bobobi to the Community"
    },
    {
        "name": "Add Burrburr to the Community"
    },
    {
        "name": "Add Carrom to the Community"
    },
    {
        "name": "Add Carsten to the Community"
    },
    {
        "name": "Add Cathy to the Community"
    },
    {
        "name": "Add Clarity to the Community"
    },
    {
        "name": "Add Cummings to the Community"
    },
    {
        "name": "Add Dillon to the Community"
    },
    {
        "name": "Add Eow to the Community"
    },
    {
        "name": "Add Finley to the Community"
    },
    {
        "name": "Add Georgie to the Community"
    },
    {
        "name": "Add Guguru to the Community"
    },
    {
        "name": "Add Hamill to the Community"
    },
    {
        "name": "Add Harby to the Community"
    },
    {
        "name": "Add Hyzen to the Community"
    },
    {
        "name": "Add Janus to the Community"
    },
    {
        "name": "Add Jethro to the Community"
    },
    {
        "name": "Add Jilljill to the Community"
    },
    {
        "name": "Add Kayleigh to the Community"
    },
    {
        "name": "Add Linka to the Community"
    },
    {
        "name": "Add Lottie to the Community"
    },
    {
        "name": "Add Lucille to the Community"
    },
    {
        "name": "Add Lui to the Community"
    },
    {
        "name": "Add Mickey to the Community"
    },
    {
        "name": "Add Miguel to the Community"
    },
    {
        "name": "Add Panacea to the Community"
    },
    {
        "name": "Add Peridot to the Community"
    },
    {
        "name": "Add Riku to the Community"
    },
    {
        "name": "Add Ruben to the Community"
    },
    {
        "name": "Add Saomi to the Community"
    },
    {
        "name": "Add Searle to the Community"
    },
    {
        "name": "Add Tiny Timtim to the Community"
    },
    {
        "name": "Add 8 people to the Community"
    },
    {
        "name": "Add 12 people to the Community"
    },
    {
        "name": "Add 16 people to the Community"
    },
    {
        "name": "Add 20 people to the Community"
    },
    {
        "name": "Add 24 people to the Community"
    },
    {
        "name": "Add 30 people to the Community"
    },
    {
        "name": "Deepen Affinity with 2 people"
    },
    {
        "name": "Deepen Affinity with 4 people"
    },
    {
        "name": "Deepen Affinity with 6 people"
    },
    {
        "name": "Deepen Affinity with 8 people"
    },
    {
        "name": "Deepen Affinity with 10 people"
    },
    {
        "name": "Quest: Dungeon Mapping"
    },
    {
        "name": "Quest: Tinkering With the X-Reader"
    },
    {
        "name": "Quest: The Very Lost Nopon"
    },
    {
        "name": "Quest: Lost & Found: Wedding Ring"
    },
    {
        "name": "Quest: Takedown: Krodlaxes"
    },
    {
        "name": "Quest: The Running Automaton"
    },
    {
        "name": "Quest: Riku's Workshop"
    },
    {
        "name": "Quest: Bobobi's Bad, Bad Day"
    },
    {
        "name": "Quest: The Derelict Ether Furnace"
    },
    {
        "name": "Quest: Big Game: Enn Shoox"
    },
    {
        "name": "Quest: Instructor Panacea"
    },
    {
        "name": "Quest: Hunt for the Kids"
    },
    {
        "name": "Quest: Lost & Found: Unread Book"
    },
    {
        "name": "Quest: Georgie's Ask"
    },
    {
        "name": "Quest: Big Game: Rumo Kapiba"
    },
    {
        "name": "Quest: Cooking with Rex, Part 1"
    },
    {
        "name": "Quest: Linka's Birthday"
    },
    {
        "name": "Quest: Takedown: Quadwings"
    },
    {
        "name": "Quest: Abandoned Supplies"
    },
    {
        "name": "Quest: The Junior Workforce"
    },
    {
        "name": "Quest: Cooking with Rex, Part 2"
    },
    {
        "name": "Quest: Step by Step"
    },
    {
        "name": "Quest: Cooking with Rex, Part 3"
    },
    {
        "name": "Quest: If Walls Could Speak"
    },
    {
        "name": "Quest: Lost & Found: Best Goggles"
    },
    {
        "name": "Quest: Takedown: Ignas"
    },
    {
        "name": "Quest: Big Game: Rogal Vvarga"
    },
    {
        "name": "Quest: Where Is That Guy?"
    },
    {
        "name": "Quest: Regret and Resolve"
    },
    {
        "name": "Quest: Snow Man's Treasure"
    },
    {
        "name": "Quest: A Melody Sustained"
    },
    {
        "name": "Quest: Ancient Contraption"
    },
    {
        "name": "Complete 3 Quests"
    },
    {
        "name": "Complete 5 Quests"
    },
    {
        "name": "Complete 7 Quests"
    },
    {
        "name": "Complete 10 Quests"
    },
    {
        "name": "Complete 12 Quests"
    },
    {
        "name": "Complete 15 Quests"
    },
    {
        "name": "Incursion: Marduk's Dogs"
    },
    {
        "name": "Incursion: Kevesi at 7th Platoon Camp"
    },
    {
        "name": "Incursion: Next to Exile Fortress Ruins"
    },
    {
        "name": "Incursion: Over Zalmor's Falls"
    },
    {
        "name": "Incursion: Dogs past Clifftop Camp"
    },
    {
        "name": "Incursion: Declessa Cave Ignas"
    },
    {
        "name": "Incursion: Ferronis Crater Agnians"
    },
    {
        "name": "Incursion: Agnians at Panorama Camp"
    },
    {
        "name": "Incursion: In the waters below Colony 9"
    },
    {
        "name": "Incursion: Agnians at Lumos Garrison"
    },
    {
        "name": "Incursion: Kevesi at Gelgemos Garrison"
    },
    {
        "name": "Incursion: Tirkins at Black Mountain"
    },
    {
        "name": "Incursion: Black Mountain Ignas"
    },
    {
        "name": "Vermilion Woods Intervention"
    },
    {
        "name": "1 Intervention in Aurora Shelf"
    },
    {
        "name": "2 Interventions in Aurora Shelf"
    },
    {
        "name": "All Interventions in Aurora Shelf (4)"
    },
    {
        "name": "Yesterdale Intervention"
    },
    {
        "name": "1 Intervention in Ragmos Desolation"
    },
    {
        "name": "All Interventions in Ragmos Desolation (2)"
    },
    {
        "name": "1 Intervention in Black Mountains"
    },
    {
        "name": "All Interventions in Black Mountains (2)"
    },
    {
        "name": "All Affinity Scenes in Vermilion Woods (2)"
    },
    {
        "name": "2 Affinity Scenes in Aurora Shelf"
    },
    {
        "name": "3 Affinity Scenes in Aurora Shelf"
    },
    {
        "name": "All Affinity Scenes in Aurora Shelf (5)"
    },
    {
        "name": "2 Affinity Scenes in Yesterdale"
    },
    {
        "name": "3 Affinity Scenes in Yesterdale"
    },
    {
        "name": "All Affinity Scenes in Yesterdale (5)"
    },
    {
        "name": "2 Affinity Scenes in Ragmos Desolation"
    },
    {
        "name": "All Affinity Scenes in Ragmos Desolation (4)"
    },
    {
        "name": "2 Affinity Scenes in Black Mountains"
    },
    {
        "name": "All Affinity Scenes in Black Mountains (4)"
    },
    {
        "name": "1 Fog Rift in Aurora Shelf"
    },
    {
        "name": "2 Fog Rifts in Aurora Shelf"
    },
    {
        "name": "All Fog Rifts in Aurora Shelf (3)"
    },
    {
        "name": "1 Fog Rift in Ragmos Desolation"
    },
    {
        "name": "2 Fog Rifts in Ragmos Desolation"
    },
    {
        "name": "All Fog Rifts in Ragmos Desolation (3)"
    },
    {
        "name": "2 Fog Rifts in Black Mountains"
    },
    {
        "name": "4 Fog Rifts in Black Mountains"
    },
    {
        "name": "All Fog Rifts in Black Mountains (6)"
    },
    {
        "name": "UM: Fogstalker Naiara"
    },
    {
        "name": "UM: Bombastic Rotbart Jr."
    },
    {
        "name": "UM: Advent Wolf Marduk"
    },
    {
        "name": "UM: Prohibitor Guiseppe"
    },
    {
        "name": "UM: Cavalier MacBright"
    },
    {
        "name": "UM: Watchful Valencia"
    },
    {
        "name": "UM: Smothering Andante"
    },
    {
        "name": "UM: Radicalized Godwin"
    },
    {
        "name": "UM: Treehugger Gerald"
    },
    {
        "name": "UM: Hilltop Chegwin"
    },
    {
        "name": "UM: Fograptor D'nari"
    },
    {
        "name": "UM: Fogtrawler Tallstuff"
    },
    {
        "name": "UM: Troglodyte Umir"
    },
    {
        "name": "UM: Cryoconite Laurel"
    },
    {
        "name": "UM: Tenebrous Muramasa"
    },
    {
        "name": "UM: Smackdown Brannigan"
    },
    {
        "name": "UM: Perambulator Moritz"
    },
    {
        "name": "UM: Many-Lived Derrick"
    },
    {
        "name": "UM: Naberius Invictus"
    },
    {
        "name": "UM: Surrogate Fitzpatrick"
    },
    {
        "name": "UM: Sworn Protector Hector"
    },
    {
        "name": "UM: Hallowcanter Hazerune"
    },
    {
        "name": "UM: Dragon God Alcar"
    },
    {
        "name": "UM: Sensational Gigapur"
    },
    {
        "name": "UM: Foghewn Augustus"
    },
    {
        "name": "Story Boss: Nikol and Glimmer"
    },
    {
        "name": "Story Boss: Moebius Q + R"
    },
    {
        "name": "Story Boss: Ritteli Rhinon"
    },
    {
        "name": "Story Boss: Moebius W (Phase 1)"
    },
    {
        "name": "Story Boss: Moebius W (Phase 2)"
    },
    {
        "name": "Story Boss: Wickt Igna"
    },
    {
        "name": "Story Boss: Na'el / Alpha"
    },
    {
        "name": "Story Boss: Heidel Taos"
    },
    {
        "name": "Story Boss: Shulk & Rex"
    },
    {
        "name": "Story Boss: Moebius N"
    },
    {
        "name": "Story Boss: Alpha (Phase 1)"
    },
    {
        "name": "Story Boss: Alpha (Phase 2)"
    },
    {
        "name": "Level Up at a Rest Spot"
    },
    {
        "name": "Craft 4 Gems"
    },
    {
        "name": "Craft 8 Gems"
    },
    {
        "name": "Craft 12 Gems"
    },
    {
        "name": "Craft 16 Gems"
    },
    {
        "name": "Craft every Gem (20)"
    },
    {
        "name": "Craft a Level II Gem"
    },
    {
        "name": "Craft a Level III Gem"
    },
    {
        "name": "Craft a Level IV Gem"
    },
    {
        "name": "Craft a Level V Gem"
    },
    {
        "name": "Craft 4 Gems that are Level II"
    },
    {
        "name": "Craft 8 Gems that are Level II"
    },
    {
        "name": "Craft 12 Gems that are Level II"
    },
    {
        "name": "Craft 2 Gems that are Level III"
    },
    {
        "name": "Craft 4 Gems that are Level III"
    },
    {
        "name": "Craft 6 Gems that are Level III"
    },
    {
        "name": "Cook a Meal"
    },
    {
        "name": "Have 3 or more Recipes"
    },
    {
        "name": "X-Reader: Treasure Sensor upgrade"
    },
    {
        "name": "X-Reader: Sense Analysis upgrade"
    },
    {
        "name": "X-Reader: Weakness Sensor upgrade"
    },
    {
        "name": "X-Reader: Arts Analysis"
    },
    {
        "name": "X-Reader: Key Item Sensor"
    },
    {
        "name": "X-Reader: Get 2 Upgrades"
    },
    {
        "name": "X-Reader: Get 3 Upgrades"
    },
    {
        "name": "Fully upgrade the X-Reader"
    },
    {
        "name": "Clean your Clothes"
    },
    {
        "name": "Clean your Clothes twice"
    },
    {
        "name": "Upgrade a weapon to Level III"
    },
    {
        "name": "Upgrade a weapon to Level IV"
    },
    {
        "name": "Upgrade a weapon to Level V"
    },
    {
        "name": "Have 20,000G"
    },
    {
        "name": "Have 40,000G"
    },
    {
        "name": "Have 60,000G"
    },
    {
        "name": "Have 80,000G"
    },
    {
        "name": "Have 100,000G"
    },
    {
        "name": "Reach Lv. 10"
    },
    {
        "name": "Reach Lv. 20"
    },
    {
        "name": "Reach Lv. 30"
    },
    {
        "name": "Reach Lv. 40"
    },
    {
        "name": "Reach Lv. 50"
    },
    {
        "name": "Reach Lv. 55"
    },
    {
        "name": "Overkill: Reach 300% EXP Bonus"
    },
    {
        "name": "Overkill: Reach 500% EXP Bonus"
    },
    {
        "name": "Overkill: Reach 800% EXP Bonus"
    },
    {
        "name": "Have 3 of the same Accessory"
    },
    {
        "name": "Have 7 of the same Accessory"
    },
    {
        "name": "Have Na'el defeat an enemy in a Chain Attack"
    },
    {
        "name": "Use Na'el's Chain Order"
    },
    {
        "name": "Have Na'el use her Chain Attack finisher"
    },
    {
        "name": "Optional Lucky Seven cutscene"
    },
    {
        "name": "Defeat an egg/nest before it hatches"
    },
    {
        "name": "Defeat an enemy using Quick Move AOE Damage"
    },
    {
        "name": "Have a debuff defeat an enemy"
    },
    {
        "name": "Inflict Sleep on an enemy"
    },
    {
        "name": "Defeat an enemy with a Special"
    },
    {
        "name": "Defeat an enemy with a Unity Combo"
    },
    {
        "name": "Defeat a Lv. 10+ enemy"
    },
    {
        "name": "Defeat a Lv. 20+ enemy"
    },
    {
        "name": "Defeat a Lv. 30+ enemy"
    },
    {
        "name": "Defeat a Lv. 40+ enemy"
    }
];
