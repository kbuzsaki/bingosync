bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Starting Class - Knight"
    },
    {
        "name": "Starting Class - Mage"
    },
    {
        "name": "Starting Class - Paladin"
    },
    {
        "name": "Starting Class - Thief"
    },
    {
        "name": "Starting Class - Chef"
    },
    {
        "name": "Starting Class - Cleric"
    },
    {
        "name": "Starting Class - Pauper"
    },
    {
        "name": "Starting Class - Hunter"
    },
    {
        "name": "Level 30 Dex"
    },
    {
        "name": "Level 30 Strength"
    },
    {
        "name": "Level 30 Magic"
    },
    {
        "name": "Level 30 Wisdom"
    },
    {
        "name": "Join Creed - The Three"
    },
    {
        "name": "Join Creed - Devara's Light"
    },
    {
        "name": "Join Creed - The Iron Ones"
    },
    {
        "name": "Join Creed - The Stone Roots"
    },
    {
        "name": "Join Creed - Keepers of Fire and Sky"
    },
    {
        "name": "Join Creed - The House of Splendor"
    },
    {
        "name": "Join Creed - Order of the Betrayer"
    },
    {
        "name": "Weapon Challenge - Daggers Only"
    },
    {
        "name": "Weapon Challenge - Swords Only"
    },
    {
        "name": "Weapon Challenge - Axes Only"
    },
    {
        "name": "Weapon Challenge - Whips Only"
    },
    {
        "name": "Weapon Challenge - Poleaxes/Reapers Only"
    },
    {
        "name": "Weapon Challenge - Spears Only"
    },
    {
        "name": "Weapon Challenge - Bows/Crossbows Only"
    },
    {
        "name": "Weapon Challenge - Pistols Only"
    },
    {
        "name": "Weapon Challenge - Wands/Staves Only"
    },
    {
        "name": "Dart Brand"
    },
    {
        "name": "Vertigo Brand"
    },
    {
        "name": "Shadowflip Brand"
    },
    {
        "name": "Hardlight Brand"
    },
    {
        "name": "Redshift Brand"
    },
    {
        "name": "Light Armor Only"
    },
    {
        "name": "Heavy Armor Only"
    },
    {
        "name": "Challenge - Magic Only"
    },
    {
        "name": "Challenge - Iron Pot Only"
    },
    {
        "name": "Challenge - Oar Only"
    },
    {
        "name": "Challenge - Naked"
    },
    {
        "name": "Challenge - No Blocking"
    },
    {
        "name": "Challenge - No Healing"
    },
    {
        "name": "Effects - Red Shards"
    },
    {
        "name": "Effects - Amber Idol"
    },
    {
        "name": "Effects - Grasping Ring"
    },
    {
        "name": "Effects - Crystal Sphere"
    },
    {
        "name": "Salvation Ending"
    },
    {
        "name": "Dominion Ending"
    },
    {
        "name": "Reach Devotion Level 2 In Any Creed"
    },
    {
        "name": "Reach Devotion Level 3 In Any Creed"
    },
    {
        "name": "Reach Devotion Level 5 In Any Creed"
    },
    {
        "name": "Collect Bag of Earth"
    },
    {
        "name": "Collect Bone Key"
    },
    {
        "name": "Collect Bronze Key"
    },
    {
        "name": "Collect Cellar Key"
    },
    {
        "name": "Collect Fortress Key"
    },
    {
        "name": "Collect Green Key"
    },
    {
        "name": "Collect Jagged Key"
    },
    {
        "name": "Collect Mossy Key"
    },
    {
        "name": "Collect Sanctuary Key"
    },
    {
        "name": "Collect Spiked Key"
    },
    {
        "name": "Take Sanctuary in The Shivering Shore"
    },
    {
        "name": "Take Sanctuary in The Festering Banquet"
    },
    {
        "name": "Take Sanctuary in The Bandit's Pass"
    },
    {
        "name": "Take Sanctuary in The Village of Smiles"
    },
    {
        "name": "Take Sanctuary in The Watching Woods"
    },
    {
        "name": "Take Sanctuary in The Sunken Keep"
    },
    {
        "name": "Take Sanctuary in The Castle of Storms"
    },
    {
        "name": "Take Sanctuary in Mal's Floating Castle"
    },
    {
        "name": "Take Sanctuary in The Red Hall of Cages"
    },
    {
        "name": "Take Sanctuary in Cran's Pass"
    },
    {
        "name": "Take Sanctuary in Hager's Cavern"
    },
    {
        "name": "Take Sanctuary in The Mire of Stench"
    },
    {
        "name": "Take Sanctuary in The Far Beach"
    },
    {
        "name": "Take Sanctuary in The Dome of the Forgotten"
    },
    {
        "name": "Take Sanctuary in The Ziggurat of Dust"
    },
    {
        "name": "Take Sanctuary in The Ruined Temple"
    },
    {
        "name": "Take Sanctuary in The Pitchwoods"
    },
    {
        "name": "Take Sanctuary in Siam Lake"
    },
    {
        "name": "Take Sanctuary in The The Blackest Vault"
    },
    {
        "name": "Take Sanctuary in The Salt Alkymancery"
    },
    {
        "name": "Take Sanctuary in The Crypt of the Dead Gods"
    },
    {
        "name": "Take Sanctuary in The Still Palace"
    },
    {
        "name": "Transmute an Item"
    },
    {
        "name": "Talk to Black Sands Sorcerer"
    },
    {
        "name": "Talk to Catmerch"
    },
    {
        "name": "Talk to Boatman"
    },
    {
        "name": "Talk to Despondent Thief"
    },
    {
        "name": "Talk to Luna Sage"
    },
    {
        "name": "Talk to Fern"
    },
    {
        "name": "Talk to Princess"
    },
    {
        "name": "Talk to The Candlelit Lady"
    },
    {
        "name": "Talk to Old Man"
    },
    {
        "name": "Talk to Alde Griggs"
    },
    {
        "name": "Talk to Minty Skell"
    },
    {
        "name": "Talk to Mad Jester"
    },
    {
        "name": "Talk to Masterless Knight"
    },
    {
        "name": "Talk to Nomad"
    },
    {
        "name": "Talk to The Mirekeeper"
    },
    {
        "name": "Access Dev Shopkeeper"
    },
    {
        "name": "Defeat The Sodden Knight"
    },
    {
        "name": "Defeat The Queen of Smiles"
    },
    {
        "name": "Defeat The Kraekan Cyclops"
    },
    {
        "name": "Defeat The Mad Alchemist"
    },
    {
        "name": "Defeat The False Jester"
    },
    {
        "name": "Defeat The Kraekan Wyrm"
    },
    {
        "name": "Defeat The Tree of Men"
    },
    {
        "name": "Defeat The Disemboweled Husk"
    },
    {
        "name": "Defeat That Stench Most Foul"
    },
    {
        "name": "Defeat The Untouched Inquisitor"
    },
    {
        "name": "Defeat The Third Lamb"
    },
    {
        "name": "Defeat The Dried King"
    },
    {
        "name": "Defeat The Bloodless Prince"
    },
    {
        "name": "Defeat The Coveted"
    },
    {
        "name": "Defeat Carsejaw the Cruel"
    },
    {
        "name": "Defeat The Witch of the Lake"
    },
    {
        "name": "Defeat The Unskinned"
    },
    {
        "name": "Defeat Kraekan Dragon Skourzh"
    },
    {
        "name": "Defeat The Nameless God"
    },
    {
        "name": "Defeat The The Unspeakable Deep"
    },
    {
        "name": "Defeat Murdiella Mal"
    },
    {
        "name": "Defeat The Ronin Cran"
    },
    {
        "name": "Defeat The Forgotten Kings"
    },
    {
        "name": "Acquire 3 Spells"
    },
    {
        "name": "Acquire 3 Incantations"
    },
    {
        "name": "Acquire 3 Prayers"
    },
    {
        "name": "Acquire Bloodflower Charm"
    },
    {
        "name": "Acquire Goldenstone Charm"
    },
    {
        "name": "Acquire Impen's Charm"
    },
    {
        "name": "Acquire Lantern Charm"
    },
    {
        "name": "Acquire Mireheart Charm"
    },
    {
        "name": "Acquire Mossy Charm"
    },
    {
        "name": "Acquire Pale Charm"
    },
    {
        "name": "Acquire Redhair Charm"
    },
    {
        "name": "Acquire Saper Charm"
    },
    {
        "name": "Acquire Shroud Charm"
    },
    {
        "name": "Acquire Silversalt Charm"
    },
    {
        "name": "Acquire Stone Charm"
    },
    {
        "name": "Acquire Templar's Charm"
    },
    {
        "name": "Acquire Vile Charm"
    },
    {
        "name": "Acquire Voracious Charm"
    },
    {
        "name": "Acquire Whistlebone Charm"
    },
    {
        "name": "Acquire Bandaged Ring"
    },
    {
        "name": "Acquire Bloodflower Ring"
    },
    {
        "name": "Acquire Bloodluster's Ring"
    },
    {
        "name": "Acquire Brightcoral Ring"
    },
    {
        "name": "Acquire Burning Sky Ring"
    },
    {
        "name": "Acquire Charged Ring"
    },
    {
        "name": "Acquire Conduit of Mind"
    },
    {
        "name": "Acquire Crystalmoat Ring"
    },
    {
        "name": "Acquire Dancing Ring"
    },
    {
        "name": "Acquire Defender's Ring"
    },
    {
        "name": "Acquire Faithful Ring"
    },
    {
        "name": "Acquire Fused Metal Ring"
    },
    {
        "name": "Acquire Golenstone Ring"
    },
    {
        "name": "Acquire Grasping Ring"
    },
    {
        "name": "Acquire Impen Crest Ring"
    },
    {
        "name": "Acquire Kismet Stone"
    },
    {
        "name": "Acquire Link of Fire and Sky"
    },
    {
        "name": "Acquire Mending Bandaged"
    },
    {
        "name": "Acquire Mossy Ring"
    },
    {
        "name": "Acquire Plated Ring"
    },
    {
        "name": "Acquire Relentless Ring"
    },
    {
        "name": "Acquire Ring of Brilliance"
    },
    {
        "name": "Acquire Ring of Meditation"
    },
    {
        "name": "Acquire Salt Seeker's Ring"
    },
    {
        "name": "Acquire Shroud Ring"
    },
    {
        "name": "Acquire Sparkling Ring"
    },
    {
        "name": "Acquire Storm Ring"
    },
    {
        "name": "Acquire Symbol of Affluence"
    },
    {
        "name": "Acquire Trickster's Band"
    },
    {
        "name": "Acquire Vile Vines Ring"
    },
    {
        "name": "Acquire Wrapped Link"
    }
];
