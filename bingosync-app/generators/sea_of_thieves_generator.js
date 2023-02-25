var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[
[{
"name": "Kill a Plant Skeleton Captain",
"types": [
"skelly"
]
},
{
"name": "Kill a Shadow Skeleton Captain",
"types": [
"skelly"
]
},
{
"name": "Kill a Gold Skeleton Captain",
"types": [
"skelly"
]
}
],
[{
"name": "Capture a Golden Striped Pig",
"types": [
"hunt"
]
},
{
"name": "Capture a Golden Chicken",
"types": [
"hunt"
]
},
{
"name": "Capture a Golden Snake",
"types": [
"hunt"
]
}
],
[{
"name": "Defeat a Skeleton Sloop",
"types": [
"skellyship"
]
},
{
"name": "Defeat a Skeleton Galleon",
"types": [
"skellyship"
]
}
],
[{
"name": "Color Your Ship's Lights Green",
"types": [
"light"
]
},
{
"name": "Color Your Ship's Lights Blue",
"types": [
"light"
]
},
{
"name": "Color Your Ship's Lights Purple",
"types": [
"light"
]
},
{
"name": "Color Your Ship's Lights Red",
"types": [
"light"
]
}
],
[{
"name": "Color Your Ship's Lights White",
"types": [
"light"
]
},
{
"name": "Color Your Ship's Lights Pink",
"types": [
"light"
]
}
],
[{
"name": "Find and fill a fireworks crate"
}],
[{
"name": "Gain 250+ Gold From a single Chest",
"types": [
"hoard"
]
},
{
"name": "Gain 150+ Gold From a single Skull",
"types": [
"oos"
]
},
{
"name": "Gain 150+ Gold From a single Crate",
"types": [
"merchant"
]
}
],
[{
"name": "Gain 450+ Gold From a single Crate",
"types": [
"merchant"
]
},
{
"name": "Gain 450+ Gold From a single Skull",
"types": [
"oos"
]
},
{
"name": "Gain 450+ Gold From a single Chest",
"types": [
"hoard"
]
}
],
[{
"name": "Gain 1000+ Gold From a single Crate",
"types": [
"merchant"
]
},
{
"name": "Gain 1000+ Gold From a single Skull",
"types": [
"oos"
]
},
{
"name": "Gain 1000+ Gold From a single Chest",
"types": [
"hoard"
]
}
],
[{
"name": "[+] Cash In a Skeleton Captain's Chest",
"types": [
"hoard"
]
},
{
"name": "[+] Cash In a Stronghold Chest",
"types": [
"hoard"
]
},
{
"name": "[+] Cash In a Stronghold Skull",
"types": [
"oos"
]
}
],
[{
"name": "Read 3 different Glitterbeard Journals across the Sea of Thieves"
}],
[{
"name": "Activate 2 small or 1 large skeleton thrones"
}],
[{
"name": "Turn in 10 pieces of perfectly cooked meat at a sea post",
"types": [
"hunt"
]
},
{
"name": "Turn in 5 pieces of perfectly cooked kraken or meg meat at a sea post",
"types": [
"hunt",
"kraken",
"meg"
]
}
],
[{
"name": "Bury 10 pieces of loot and post the map to the map board",
"types": [
"bury"
]
},
{
"name": "Bury 5 skulls and post the map to the map board",
"types": [
"bury",
"oos"
]
},
{
"name": "Bury 5 chests and post the map to the map board",
"types": [
"bury",
"hoard"
]
},
{
"name": "Bury 5 crates and post the map to the map board",
"types": [
"bury",
"merchant"
]
}
],
[{
"name": "Complete a Ghost Fleet Voyage",
"types": [
"voyage",
"oos"
]
},
{
"name": "Complete a Lost Shipment Voyage",
"types": [
"voyage",
"merchant"
]
},
{
"name": "Open a Gold Hoarder Treasure Vault",
"types": [
"voyage",
"hoard"
]
}
],
[{
"name": "Open the Royal Crest Fortress Treasury",
"types": [
"seafort"
]
},
{
"name": "Open the Imperial Crown Fortress Treasury",
"types": [
"seafort"
]
},
{
"name": "Open the Ancient Gold Fortress Treasury",
"types": [
"seafort"
]
},
{
"name": "Open the Old Brinestone Fortress Treasury",
"types": [
"seafort"
]
},
{
"name": "Open the Traitor’s Fate Fortress Treasury",
"types": [
"seafort"
]
},
{
"name": "Open the Mercy’s End Fortress Treasury",
"types": [
"seafort"
]
}
],
[{
"name": "Read Journal 5 in the Shrine of the Coral Tomb",
"types": [
"kingdom",
"shrine"
]
},
{
"name": "Read Journal 5 in the Shrine of Ocean’s Fortune",
"types": [
"kingdom",
"shrine"
]
},
{
"name": "Read Journal 5 in the Shrine of Ancient Tears",
"types": [
"kingdom",
"shrine"
]
},
{
"name": "Read Journal 5 in the Shrine of Tribute",
"types": [
"kingdom",
"shrine"
]
},
{
"name": "Read Journal 5 in the Shrine of Hungering",
"types": [
"kingdom",
"shrine"
]
},
{
"name": "Read Journal 5 in the Shrine of Flooded Embrace",
"types": [
"kingdom",
"shrine"
]
}
],
[{
"name": "Open the vault in Treasury of Sunken Shores",
"types": [
"kingdom",
"treasury"
]
},
{
"name": "Open the vault in Treasury of the Lost Ancients",
"types": [
"kingdom",
"treasury"
]
},
{
"name": "Open the vault in Treasury of the Secret Wilds",
"types": [
"kingdom",
"treasury"
]
}
],
[{
"name": "Complete 2 different Treasuries",
"types": [
"kingdom",
"treasury"
]
},
{
"name": "Complete 2 different Shrines",
"types": [
"kingdom",
"shrine"
]
},
{
"name": "Complete 2 different Sea Forts",
"types": [
"seafort"
]
}
],
[{
"name": "Find/Catch 3 Types of Pondies",
"types": [
"fish"
]
},
{
"name": "Find/Catch 3 Types of Wrecker",
"types": [
"fish"
]
},
{
"name": "Find/Catch 2 types of Stormfish",
"types": [
"fish"
]
},
{
"name": "Find/Catch 3 Types of Battlegill",
"types": [
"fish"
]
}
],
[{
"name": "Detonate a keg on another Player’s Ship",
"types": [
"keg",
"player"
]
}],
[{
"name": "Find/Catch a Trophy Pondie",
"types": [
"fish"
]
},
{
"name": "Find/Catch a Trophy Wrecker",
"types": [
"fish"
]
},
{
"name": "Find/Catch a Trophy Stormfish",
"types": [
"fish"
]
},
{
"name": "Find/Catch a Trophy Battlegill",
"types": [
"fish"
]
}
],
[{
"name": "Sink another Player’s Ship",
"types": [
"player"
]
}],
[{
"name": "Encounter the Kraken",
"types": [
"kraken",
"hard"
]
},
{
"name": "Slay a Megalodon",
"types": [
"meg",
"hard"
]
}
],
[{
"name": "Cash in a Chest of Legends",
"types": [
"athena",
"hard"
]
}]
];
