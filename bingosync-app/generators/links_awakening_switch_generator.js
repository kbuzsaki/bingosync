bingoGenerator = require("./generators/generator_bases/ladx_generator.js");

var bingoList = [
    {"name": "Bonk the beach monkey"},
    {"name": "Complete a Chamber Dungeon"},
    {"name": "Do 2 sets of 3-of-a-Kind"},
    {"name": "Do 3 sets of chess"},
    {"name": "Get Bombs"},
    {"name": "Heal at 3 Fairy Fountains"},
    {"name": "Kill DethI"},
    {"name": "Kill Turtle Rock"},
    {"name": "Kill an Anti-Kirby"},
    {"name": "Kill an enemy with an enemy"},
    {"name": "Learn Frog Song"},
    {"name": "Learn Mambo"},
    {"name": "Put the Ghost to rest"},
    {"name": "Save Marin on the bridge"},
    {"name": "Speak with an Owl Statue in Color Dungeon"},
    {"name": "Speak with an Owl Statue in D1"},
    {"name": "Speak with an Owl Statue in D2"},
    {"name": "Speak with an Owl Statue in D3"},
    {"name": "Speak with an Owl Statue in D4"},
    {"name": "Speak with an Owl Statue in D5"},
    {"name": "Speak with an Owl Statue in D6"},
    {"name": "Speak with an Owl Statue in D7"},
    {"name": "Speak with an Owl Statue in D8"},
    {"name": "Summon a Cucco storm"},
    {"name": "Talk to a Cukeman"},
    {"name": "Two followers at once"},
    {"name": "Drown an enemy"},

    {"name": "Get a Bottle", "group": "bottle"},
    {"name": "Capture a Fairy", "group": "bottle"},
    {"name": "Catch 3 fish", "group": "fishing"},
    {"name": "Catch 6 fish", "group": "fishing"},
    {"name": "Get the Heavyweight Lure", "group": "fishing"},
    {"name": "Collect 10 Seashells", "group": "manyseashells"},
    {"name": "Collect 11 Seashells", "group": "manyseashells"},
    {"name": "Collect 12 Seashells", "group": "manyseashells"},
    {"name": "Collect 13 Seashells", "group": "manyseashells"},
    {"name": "Collect 14 Seashells", "group": "manyseashells"},
    {"name": "Obtain the Seashell Sensor", "group": "manyseashells"},
    {"name": "Collect 1 Chamber Stone", "group": "chamberstones"},
    {"name": "Collect 2 Chamber Stones", "group": "chamberstones"},
    {"name": "Collect 3 Chamber Stones", "group": "chamberstones"},
    {"name": "Collect 4 Chamber Stones", "group": "chamberstones"},
    {"name": "Collect 4 Heart Pieces", "group": "hps"},
    {"name": "Collect 8 Heart Pieces", "group": "hps"},
    {"name": "Collect 3 Seashells", "group": "fewseashells"},
    {"name": "Collect 4 Seashells", "group": "fewseashells"},
    {"name": "Collect 5 Seashells", "group": "fewseashells"},
    {"name": "Collect 6 Seashells", "group": "fewseashells"},
    {"name": "Collect 7 Seashells", "group": "fewseashells"},
    {"name": "Collect the 5 Golden Leaves", "group": "kanalet"},
    {"name": "Kill the Ball and Chain Soldier", "group": "kanalet"},
    {"name": "Kill the Mad Bomber", "group": "kanalet"},
    {"name": "Eat a green apple", "group": "apple"},
    {"name": "Eat a red apple", "group": "apple"},
    {"name": "Eat an apple", "group": "apple"},
    {"name": "Empty out the Trendy Game", "group": "trendy"},
    {"name": "Marin Trendy Game event", "group": "trendy"},
    {"name": "Get an arrow without the Bow", "group": "arrows"},
    {"name": "Get the Bow", "group": "arrows"},
    {"name": "Get the Shovel", "group": "arrows"},
    {"name": "Get the Blue Mail", "group": "mail"},
    {"name": "Get the Red Mail", "group": "mail"},
    {"name": "Kill Evil Orb", "group": "mail"},
    {"name": "Get the Bracelet", "group": "bracelet"},
    {"name": "Get the L2 Bracelet", "group": "bracelet"},
    {"name": "Get the Yoshi Doll", "group": "earlytrade"},
    {"name": "Get the Ribbon", "group": "earlytrade"},
    {"name": "Get the Dog Food", "group": "earlytrade"},
    {"name": "Get the Bananas", "group": "earlytrade"},
    {"name": "Get the Stick", "group": "midtrade"},
    {"name": "Get the Honeycomb", "group": "midtrade"},
    {"name": "Get the Pineapple", "group": "midtrade"},
    {"name": "Get the Hibiscus", "group": "midtrade"},
    {"name": "Get Christine's Letter", "group": "latetrade"},
    {"name": "Get the Broom", "group": "latetrade"},
    {"name": "Get the Fishing Hook", "group": "latetrade"},
    {"name": "Get the Necklace", "group": "latetrade"},
    {"name": "Get the Mermaid Scale", "group": "fulltrade"},
    {"name": "Get the Lens", "group": "fulltrade"},
    {"name": "Get the Boomerang", "group": "fulltrade"},
    {"name": "Read all the books in the library", "group": "fulltrade"},
    {"name": "Get the Full Moon Cello", "group": "cello"},
    {"name": "Kill Moldorm", "group": "cello"},
    {"name": "Get the Conch Horn", "group": "horn"},
    {"name": "Kill Genie", "group": "horn"},
    {"name": "Kill Slime Eye", "group": "bell"},
    {"name": "Get the Sea Lily's Bell", "group": "bell"},
    {"name": "Get the Surf Harp", "group": "harp"},
    {"name": "Kill Angler Fish", "group": "harp"},
    {"name": "Get the Wind Marimba", "group": "marimba"},
    {"name": "Kill Slime Eel", "group": "marimba"},
    {"name": "Get the Coral Triangle", "group": "triangle"},
    {"name": "Kill Facade", "group": "triangle"},
    {"name": "Kill Evil Eagle", "group": "organ"},
    {"name": "Get the Organ of Evening Calm", "group": "organ"},
    {"name": "Get the Thunder Drum", "group": "drum"},
    {"name": "Kill Hot Head", "group": "drum"},
    {"name": "Get Flippers", "group": "flippers"},
    {"name": "Kill D4 Cueball", "group": "flippers"},
    {"name": "Get the Hookshot", "group": "hookshot"},
    {"name": "Kill Gohmas", "group": "hookshot"},
    {"name": "Kill Master Stalfos at least once", "group": "hookshot"},
    {"name": "Get the Magic Powder", "group": "powder"},
    {"name": "Get the Tail Key", "group": "powder"},
    {"name": "Get the Mushroom again", "group": "powder"},
    {"name": "Get the Magic Rod", "group": "rod"},
    {"name": "Kill Blaino", "group": "rod"},
    {"name": "Get the Mirror Shield", "group": "mirror"},
    {"name": "Kill Grim Creeper", "group": "mirror"},
    {"name": "Get Pegasus Boots", "group": "boots"},
    {"name": "Kill D3 Dodongo Snakes", "group": "boots"},
    {"name": "Get the Roc's Feather", "group": "feather"},
    {"name": "Kill D1 Rolling Bones", "group": "feather"},
    {"name": "Get the Angler Key", "group": "walrus"},
    {"name": "Kill Lanmola", "group": "walrus"},
    {"name": "Wake up the Walrus", "group": "walrus"},
    {"name": "Get the Bird Key", "group": "rooster"},
    {"name": "Revive the Rooster", "group": "rooster"},
    {"name": "Get the Face Key", "group": "armos"},
    {"name": "Kill Armos Knight", "group": "armos"},
    {"name": "Get the Slime Key", "group": "villa"},
    {"name": "Totaka's Song in Richard's Villa", "group": "villa"},
    {"name": "Kill Boss Buzz Blob", "group": "d0mid"},
    {"name": "Kill Stone Hinox", "group": "d0mid"},
    {"name": "Kill the Orange Hinox", "group": "hinox"},
    {"name": "Kill the Red Hinox", "group": "hinox"},
    {"name": "Kill the Blue Hinox", "group": "hinox"},
    {"name": "Kill D6 Dodongo Snakes", "group": "d6mid"},
    {"name": "Kill D6 Smasher", "group": "d6mid"},
    {"name": "Kill D8 Cueball", "group": "d8mid"},
    {"name": "Kill D8 Dodongo Snakes", "group": "d8mid"},
    {"name": "Kill D8 Rolling Bones", "group": "d8mid"},
    {"name": "Kill D8 Smasher", "group": "d8mid"},
    {"name": "Kill Moblin King", "group": "bowwow"},
    {"name": "Rescue Bow-Wow", "group": "bowwow"},
    {"name": "Return Bow-Wow", "group": "bowwow"},
    {"name": "Learn Ballad", "group": "ballad"},
    {"name": "Learn Ballad at Animal Village", "group": "ballad"},
    {"name": "Learn Ballad at Mabe Village", "group": "ballad"},
    {"name": "Map completion in overworld", "group": "mapoverworld"},
    {"name": "Get all overworld warps", "group": "mapoverworld"},
    {"name": "Map and Compass in Color Dungeon", "group": "d0map"},
    {"name": "Map completion in Color Dungeon", "group": "d0map"},
    {"name": "Map and Compass in D1", "group": "d1map"},
    {"name": "Map completion in D1", "group": "d1map"},
    {"name": "Map and Compass in D2", "group": "d2map"},
    {"name": "Map completion in D2", "group": "d2map"},
    {"name": "Map and Compass in D3", "group": "d3map"},
    {"name": "Map completion in D3", "group": "d3map"},
    {"name": "Map and Compass in D4", "group": "d4map"},
    {"name": "Map completion in D4", "group": "d4map"},
    {"name": "Map and Compass in D5", "group": "d5map"},
    {"name": "Map completion in D5", "group": "d5map"},
    {"name": "Map and Compass in D6", "group": "d6map"},
    {"name": "Map completion in D6", "group": "d6map"},
    {"name": "Map and Compass in D7", "group": "d7map"},
    {"name": "Map completion in D7", "group": "d7map"},
    {"name": "Map and Compass in D8", "group": "d8map"},
    {"name": "Map completion in D8", "group": "d8map"},
    {"name": "Marin cliff cutscene", "group": "marin"},
    {"name": "Marin date", "group": "marin"},
    {"name": "Play the Raft Ride", "group": "raft"},
    {"name": "Get under 30 seconds in the Raft Race", "group": "raft"},
    {"name": "Talk to 3 Owl Statues in the overworld", "group": "owls"},
    {"name": "Talk to 4 Owl Statues in the overworld", "group": "owls"},
    {"name": "Talk to 5 Owl Statues in the overworld", "group": "owls"},
    {"name": "Talk to 6 Owl Statues in the overworld", "group": "owls"},
    {"name": "Place the Ciao Ciao figure", "group": "figure"},
    {"name": "Place the Goomba figure", "group": "figure"},
    {"name": "Have a total of 5 hearts", "group": "hcs"},
    {"name": "Have a total of 6 hearts", "group": "hcs"},
    {"name": "Have a total of 7 hearts", "group": "hcs"},
    {"name": "Have a total of 8 hearts", "group": "hcs"},
    {"name": "Have a total of 9 hearts", "group": "hcs"},
    {"name": "Have a total of 10 hearts", "group": "hcs"},
    {"name": "Buy a new Shield", "group": "shield"},
    {"name": "Lose your Shield", "group": "shield"},
    {"name": "Kill the Giant Ghini", "group": "ghini"},
    {"name": "Kill all Ghinis in the graveyard", "group": "ghini"},
    {"name": "Get some Medicine", "group": "medecine"},
    {"name": "Get revived by Medicine", "group": "medecine"},
    {"name": "Game Over", "group": "death"},
    {"name": "Die to the shopkeeper", "group": "death"},
    {"name": "Die by drowning", "group": "death"},
    {"name": "Get a capacity upgrade", "group": "upgrade"},
    {"name": "Get the bomb capacity upgrade", "group": "upgrade"},
    {"name": "Get the arrows capacity upgrade", "group": "upgrade"},
    {"name": "Get the powder capacity upgrade", "group": "upgrade"},
    {"name": "Use a phone booth", "group": "fewbooths"},
    {"name": "Use 2 phone booths", "group": "fewbooths"},
    {"name": "Use 3 phone booths", "group": "fewbooths"},
    {"name": "Use 6 phone booths", "group": "manybooths"},
    {"name": "Use 7 phone booths", "group": "manybooths"},
    {"name": "Use 8 phone booths", "group": "manybooths"},
];
