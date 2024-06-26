bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    "10 Hearts",
    "5 Hearts",
    "Angler Fish: Angler’s Tunnel",
    "Angler’s Tunnel 1 Key",
    "Angler’s Tunnel 2 Keys",
    "Angler’s Tunnel 3 Keys",
    "Angler’s Tunnel 4 Keys",
    "Angler’s Tunnel 5 Keys",
    "Angler’s Tunnel Beak",
    "Angler’s Tunnel Compass",
    "Angler’s Tunnel Map",
    "Angler’s Tunnel Nightmare Key",
    "Beach Item Check",
    "Beat the Game",
    "Blaino: Turtle Rock",
    "Blue Hinox: Eagle’s Tower",
    "Bombs",
    "Boomerang",
    "Boomerang Trade Check",
    "Bottle Grotto 1 Small Key",
    "Bottle Grotto 2 Small Keys",
    "Bottle Grotto 3 Small Keys",
    "Bottle Grotto 4 Small Keys",
    "Bottle Grotto 5 Smalls Keys",
    "Bottle Grotto Beak",
    "Bottle Grotto Compass",
    "Bottle Grotto Map",
    "Bottle Grotto Nightmare Key",
    "Bow",
    "Catfish’s Maw 1 Small Key",
    "Catfish’s Maw 2 Small Keys",
    "Catfish’s Maw 3 Small Keys",
    "Catfish’s Maw Beak",
    "Catfish’s Maw Compass",
    "Catfish’s Maw Map",
    "Catfish’s Maw Nightmare Key",
    "Cave Upgrade Check",
    "Collect a Guardian Acorn",
    "Collect a Piece of Power",
    "Colour Dungeon 1 Small Key",
    "Colour Dungeon 2 Small Keys",
    "Colour Dungeon 3 Small Keys",
    "Colour Dungeon Beak",
    "Colour Dungeon Compass",
    "Colour Dungeon Map",
    "Colour Dungeon Nightmare Key",
    "Conch Horn",
    "Coral Triangle",
    "Die",
    "Dodongo Snakes: Face Shrine",
    "Dodongo Snakes: Key Cavern",
    "Dodongo Snakes: Turtle Rock",
    "Eagle’s Tower 1 Small Key",
    "Eagle’s Tower 2 Small Keys",
    "Eagle’s Tower 3 Small Keys",
    "Eagle’s Tower Beak",
    "Eagle’s Tower Compass",
    "Eagle’s Tower Map",
    "Eagle’s Tower Nightmare Key",
    "Enter Wind Fish’s Egg",
    "Evil Eagle: Eagle’s Tower",
    "Facade: Face Shrine",
    "Face Shrine 1 Small Key",
    "Face Shrine 2 Small Keys",
    "Face Shrine 3 Small Keys",
    "Face Shrine Beak",
    "Face Shrine Compass",
    "Face Shrine Map",
    "Face Shrine Nightmare Key",
    "Finish Angler’s Tunnel",
    "Finish Bottle Grotto",
    "Finish Catfish’s Maw",
    "Finish Colour Dungeon",
    "Finish Eagle’s Tower",
    "Finish Face Shrine",
    "Finish Key Cavern",
    "Finish Tail Cave",
    "Finish Turtle Rock",
    "Flippers",
    "Full Clear Angler’s Tunnel",
    "Full Clear Bottle Grotto",
    "Full Clear Catfish’s Maw",
    "Full Clear Colour Dungeon",
    "Full Clear Eagle’s Tower",
    "Full Clear Face Shrine",
    "Full Clear Key Cavern",
    "Full Clear Tail Cave",
    "Full Clear Turtle Rock",
    "Full Moon Cello",
    "Genie: Bottle Grotto",
    "Giant Buzz Blob: Colour Dungeon",
    "Gohma: Catfish’s Maw",
    "Grim Creeper: Eagle’s Tower",
    "Hardhit Beetle: Colour Dungeon",
    "Hookshot",
    "Hot Head: Turtle Rock",
    "Hydrosaur: Angler’s Tunnel",
    "Hydrosaur: Turtle Rock",
    "Key Cavern 1 Small Key",
    "Key Cavern 2 Small Keys",
    "Key Cavern 3 Small Keys",
    "Key Cavern 4 Small Keys",
    "Key Cavern 5 Small Keys",
    "Key Cavern 6 Small Keys",
    "Key Cavern 7 Small Keys",
    "Key Cavern 8 Small Keys",
    "Key Cavern 9 Small Keys",
    "Key Cavern Beak",
    "Key Cavern Compass",
    "Key Cavern Map",
    "Key Cavern Nightmare Key",
    "Kill a Blooper",
    "Kill a Boo",
    "Kill a Camo Goblin",
    "Kill a Cheep Cheep",
    "Kill a Flying Tile",
    "Kill a Gibdo",
    "Kill a Goomba",
    "Kill a Green Zol",
    "Kill a Hardhat Beetle",
    "Kill a Helmasaur",
    "Kill a Keese",
    "Kill a Mask Mimic",
    "Kill a Mini-Moldorm",
    "Kill a Pairodd",
    "Kill a Piranha Plant",
    "Kill a Pols Voice",
    "Kill a Red Zol",
    "Kill a Spear Stalfos",
    "Kill a Spiked Beetle",
    "Kill a Sword and Shield Stalfos",
    "Kill a Three-of-a-Kind",
    "Kill a Vacuum Mouth",
    "Kill a Water Tektite",
    "Kill a Wizzrobe",
    "Kill an Arm Mimic",
    "Kill an Orb Monster",
    "Magic Powder",
    "Magic Rod",
    "Master Strafos 1: Catfish’s Maw",
    "Master Strafos 2: Catfish’s Maw",
    "Master Strafos 3: Catfish’s Maw",
    "Master Strafos 4: Catfish’s Maw",
    "Max Rupees",
    "Mirror Shield",
    "Moldorm: Tail Cave",
    "Ocarina",
    "Organ of Evening Calm",
    "Pegasus Boots",
    "Power Bracelet L-1",
    "Power Bracelet L-2",
    "Purchase any item from the shop",
    "Red Hinox: Turtle Rock",
    "Roc’s Feather",
    "Rover: Face Shrine",
    "Rover: Turtle Rock",
    "Sea Lily’s Bell",
    "Secret Medicine",
    "Shadow Nightmare: Wind Fish’s Egg",
    "Shield",
    "Shovel",
    "Slime Eel: Catfish’s Maw",
    "Slime Eye: Key Cavern",
    "Spike Roller: Tail Cave",
    "Spike Roller: Turtle Rock",
    "Stone Hinox: Colour Dungeon",
    "Surf Harp",
    "Sword",
    "Tail Cave 1 Small Key",
    "Tail Cave 2 Small Keys",
    "Tail Cave 3 Small Keys",
    "Tail Cave Beak",
    "Tail Cave Compass",
    "Tail Cave Map",
    "Tail Cave Nightmare Key",
    "Tarin Check",
    "Thunder Drum",
    "Turtle Rock 1 Small Key",
    "Turtle Rock 2 Small Keys",
    "Turtle Rock 3 Small Keys",
    "Turtle Rock 4 Small Keys",
    "Turtle Rock 5 Small Keys",
    "Turtle Rock 6 Small Keys",
    "Turtle Rock 7 Small Keys",
    "Turtle Rock Beak",
    "Turtle Rock Compass",
    "Turtle Rock Map",
    "Turtle Rock Nightmare Key",
    "Wind Marimba",
    "Yellow Hinox: Bottle Grotto"
];
