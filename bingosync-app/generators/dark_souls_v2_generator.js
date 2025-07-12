bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Obtain the Demon's Great Hammer"
    },
    {
        "name": "Obtain Havel's Ring"
    },
    {
        "name": "Obtain the Drake Sword"
    },
    {
        "name": "Obtain the Gargoyle Tail Axe"
    },
    {
        "name": "Obtain the Crest of Artorias"
    },
    {
        "name": "Obtain the Dark Wood Grain Ring"
    },
    {
        "name": "Obtain the Ring of the Evil Eye"
    },
    {
        "name": "Obtain the Dragon King Greataxe"
    },
    {
        "name": "Obtain the Covetous Gold Serpent Ring"
    },
    {
        "name": "Obtain Power Within"
    },
    {
        "name": "Obtain Great Magic Weapon"
    },
    {
        "name": "Obtain Priscilla's Dagger"
    },
    {
        "name": "Obtain the Leo Ring"
    },
    {
        "name": "Obtain the Red Tearstone Ring"
    },
    {
        "name": "Obtain Great Magic Barrier"
    },
    {
        "name": "Obtain the Dragon Greatsword"
    },
    {
        "name": "Obtain the Moonlight Greatsword"
    },
    {
        "name": "Obtain the Guardian Tail"
    },
    {
        "name": "Obtain the Obsidian Greatsword"
    },
    {
        "name": "Obtain the Silver Pendant"
    },
    {
        "name": "Obtain Dark Bead"
    },
    {
        "name": "Defeat Taurus Demon (Undead Burg)"
    },
    {
        "name": "Defeat Moonlight Butterfly (Darkroot)"
    },
    {
        "name": "Defeat Capra Demon (Undead Burg)"
    },
    {
        "name": "Defeat Stray Demon"
    },
    {
        "name": "Defeat Gaping Dragon"
    },
    {
        "name": "Defeat Crossbreed Priscilla"
    },
    {
        "name": "Defeat Dark Sun Gwyndolyn"
    },
    {
        "name": "Defeat Pinwheel (Catacombs)"
    },
    {
        "name": "Defeat Gravelord Nito"
    },
    {
        "name": "Defeat Ceaseless Discharge"
    },
    {
        "name": "Defeat Demon Firesage"
    },
    {
        "name": "Defeat Centipede Demon"
    },
    {
        "name": "Defeat Bed of Chaos (lol)"
    },
    {
        "name": "Defeat Seath the Scaleless"
    },
    {
        "name": "Defeat Great Gray Wolf Sif"
    },
    {
        "name": "Defeat the Four Kings"
    },
    {
        "name": "Defeat Knight Artorias"
    },
    {
        "name": "Defeat Black Dragon Kalameet"
    },
    {
        "name": "Defeat Manus, Father of the Abyss"
    },
    {
        "name": "Kill 3 non-respawning Black Knights"
    },
    {
        "name": "Kill 2 non-respawning Channelers"
    },
    {
        "name": "Kill 2 non-respawning Titanite Demons"
    },
    {
        "name": "Kill 2 Berenike Knights"
    },
    {
        "name": "Kill a Great Feline"
    },
    {
        "name": "Kill 3 Mimics"
    },
    {
        "name": "Kill an Armored Boar"
    },
    {
        "name": "Kill a Hydra"
    },
    {
        "name": "Kill a Butcher"
    },
    {
        "name": "Kill an Undead Dragon"
    },
    {
        "name": "Kill 2 NPC Invaders"
    },
    {
        "name": "Kill a Mass of Souls"
    },
    {
        "name": "Kill 3 non-hostile NPCs (Oscar doesn't count)"
    },
    {
        "name": "Kill Undead Prince Ricard"
    },
    {
        "name": "Kill the Parasitic Wall Hugger"
    },
    {
        "name": "Kill the Chained Prisoner"
    },
    {
        "name": "Kill two different Box Rats"
    },
    {
        "name": "Kill a Crystal Lizard in the Great Hollow"
    },
    {
        "name": "Kill Bowlcut (Petrus)"
    },
    {
        "name": "Kill Andre of Astora"
    },
    {
        "name": "Kill Blacksmith Vamos"
    },
    {
        "name": "Free Lautrec from his cell"
    },
    {
        "name": "Free Griggs in Lower Undead Burg"
    },
    {
        "name": "Summon Dusk of Oolacile and talk to her"
    },
    {
        "name": "Have Patches flip the bridge in the Catacombs"
    },
    {
        "name": "Free Laurentius in the Depths"
    },
    {
        "name": "Free Logan in Sen's Fortress"
    },
    {
        "name": "Get the Tiny Being's Ring from Siegmeyer"
    },
    {
        "name": "Invade and kill Lautrec in Anor Londo"
    },
    {
        "name": "Kill hollowed Crestfallen Warrior in New Londo"
    },
    {
        "name": "Free Logan in Duke's Archives"
    },
    {
        "name": "Give Siegmeyer some moss"
    },
    {
        "name": "Talk to Sieglinde in Duke's Archives"
    },
    {
        "name": "Get kicked off a cliff by Patches"
    },
    {
        "name": "Kill hollowed Vince and Nico"
    },
    {
        "name": "Talk to Solaire in four different locations"
    },
    {
        "name": "Rescue Sif in the Chasm of the Abyss"
    },
    {
        "name": "See how Gough hunts dragons"
    },
    {
        "name": "Give the Divine Ember to Andre"
    },
    {
        "name": "Give the Large Divine Ember to Andre"
    },
    {
        "name": "Give the Large Ember to Andre"
    },
    {
        "name": "Give the Very Large Ember to Andre"
    },
    {
        "name": "Give the Dark Ember to Andre"
    },
    {
        "name": "Give the Large Magic Ember to Rickert"
    },
    {
        "name": "Give the Enchanted Ember to Rickert"
    },
    {
        "name": "Give the Large Flame Ember to Vamos"
    },
    {
        "name": "Give the Chaos Flame Ember to Vamos"
    },
    {
        "name": "Give the Crystal Ember to the Giant Blacksmith"
    },
    {
        "name": "Kill Havel by damaging him only with ripostes"
    },
    {
        "name": "Kill Burg Taurus Demon in a single plunging attack"
    },
    {
        "name": "Kill Gaping Dragon without killing the nearby Channeler"
    },
    {
        "name": "Kill the Four Kings before obtaining the Lordvessel"
    },
    {
        "name": "Kill Iron Golem without killing the Firebomb Giant"
    },
    {
        "name": "Kill Ceaseless Discharge without the cheese strat"
    },
    {
        "name": "Kill the Four Kings in 3 kings or less"
    },
    {
        "name": "Kill Nito without permanently killing his skeletons"
    },
    {
        "name": "Make Seath break the Primordial Crystal himself"
    },
    {
        "name": "Defeat a boss while cursed"
    },
    {
        "name": "Defeat a boss using only Sorceries"
    },
    {
        "name": "Defeat a boss using only Miracles"
    },
    {
        "name": "Defeat a boss using only Pyromancy"
    },
    {
        "name": "Die to Pinwheel in the Catacombs"
    },
    {
        "name": "Join the Warriors of Sunlight"
    },
    {
        "name": "Join the Forest Hunters"
    },
    {
        "name": "Join the Chaos Servants"
    },
    {
        "name": "Join the Gravelord Servants"
    },
    {
        "name": "Join the Path of the Dragon"
    },
    {
        "name": "Join the Blades of the Darkmoon"
    },
    {
        "name": "Join the Darkwraiths"
    },
    {
        "name": "Open the Chaos Covenant door to Lost Izalith"
    },
    {
        "name": "Ride the cage elevator in Sen's Fortress"
    },
    {
        "name": "Feed an item to Frampt"
    },
    {
        "name": "Get an Egg Head"
    },
    {
        "name": "Be taken by the Abyss"
    },
    {
        "name": "Get decked by a Mushroom Parent"
    },
    {
        "name": "Get taken to Firelink Altar by Kaathe (not Frampt)"
    },
    {
        "name": "Offer a soul to the Lordvessel"
    },
    {
        "name": "Upgrade your Estus Flask to +4"
    },
    {
        "name": "Fully upgrade a weapon"
    },
    {
        "name": "Take a Mimic's loot without killing it"
    },
    {
        "name": "Use Rite of Kindling to fully kindle a bonfire"
    },
    {
        "name": "Start with the Pendant"
    },
    {
        "name": "Start as Deprived"
    },
    {
        "name": "Start without Master Key (no Thief class)"
    },
    {
        "name": "Create a Boss Weapon from a soul"
    },
    {
        "name": "Break a Ring of Favor and Protection"
    },
    {
        "name": "Equip a Pinwheel mask"
    },
    {
        "name": "Trade an item with Snuggly the Crow"
    },
    {
        "name": "Perform 'Well! What is it!' after beating a boss"
    },
    {
        "name": "30 Vitality"
    },
    {
        "name": "30 Endurance"
    },
    {
        "name": "30 Strength"
    },
    {
        "name": "30 Dexterity"
    },
    {
        "name": "30 Intelligence"
    },
    {
        "name": "30 Faith"
    },
    {
        "name": "Have 15 soft humanity (big top left number)"
    },
    {
        "name": "Reach Soul Level 50"
    }
];
