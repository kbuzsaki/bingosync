var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [
  {},
  [ // 1
    { name: "Get a haircut", types: ["overworld"] },
    { name: "Buy and wear a $20,000 outfit", types: ["overworld"] },
    { name: "Take a photo with a third stage Pokémon", types: ["overworld"] },
  ],
  [ // 2
    { name: "Catch a Pokémon that is taller than the player", types: ["catch"] },
    { name: "Catch an Alpha Pokémon using a heavy-type ball", types: ["catch"] },
    { name: "Five backstrikes in a row", types: ["catch"] },
    { name: "Defeat the tutorial Starly five times before catching it", types: ["catch"] },
  ],
  [ // 3
    { name: "Catch 40+ Pokémon in one report", types: ["survey"] },
    { name: "Catch 15 different species in one report", types: ["survey"] },
    { name: "Fill 8 pastures", types: ["overworld"] },
    { name: "Sell 50k worth of items in one shopping trip", types: ["overworld"] },
  ],
  [ // 4
    { name: "Register 3 different Hisuian forms", types: ["dex"] },
    { name: "Catch at least 5 Unown", types: ["dex"] },
    { name: "Use four different Agile Style moves in one fight", types: ["fight"] },
    { name: "Use four different Strong Style moves in one fight", types: ["fight"] },
  ],
  [ // 5
    { name: "Catch any shiny", types: ["catch"] },
    { name: "Catch an Alpha without being spotted.", types: ["catch"] },
    { name: "Have 5 different Pokémon that have non-Hisuian regional forms", types: ["survey"] },
    { name: "Perfect any dex entry", types: ["dex"] },
    { name: "Rank 10 the dex entry of a second stage Pokémon", types: ["dex"] },
  ],
  [ // 6
    { name: "Faint Alpha Snorlax", types: ["overworld"] },
    { name: "Defeat Kleavor without throwing any non-critical balms", types: ["overworld"] },
    { name: "Defeat any Frenzied Lord without using any Pokémon", types: ["overworld"] },
    { name: "Do not dodge during any Frenzied Lord encounter", types: ["overworld"] },
  ],
  [ // 7
    { name: "Use a struggle attack", types: ["fight"] },
    { name: "Have a wild use a struggle attack on you", types: ["fight"] },
    { name: "Critical hit with Self Destruct", types: ["fight"] },
    { name: "Paralyze an opponent and have it lose three turns in a row", types: ["fight"] },
  ],
  [ // 8
    { name: "Release your starter before fighting Rei/Akari", types: ["overworld"] },
    { name: "Dig up an evolution item with Ursaluna", types: ["overworld"] },
    { name: "Dig up three Old Verses with Ursaluna", types: ["overworld"] },
  ],
  [ // 9
    { name: "Obtain Hisuian Lilligant", types: ["dex"] },
    { name: "Obtain Hisuian Electrode", types: ["dex"] },
    { name: "Obtain Hisuian Arcanine", types: ["dex"] },
    { name: "Obtain Kleavor", types: ["dex"] },
  ],
  [ // 10
    { name: "Obtain Basculegion", types: ["dex"] },
    { name: "Obtain Ursaluna", types: ["dex"] },
    { name: "Obtain Sneasler", types: ["dex"] },
    { name: "Obtain Overqwil", types: ["dex"] },
    { name: "Obtain Wyrdeer", types: ["dex"] },
    { name: "Send out Hisuian Typhlosion and surround it in smoke", types: ["dex"] },
  ],
  [ // 11
    { name: "Pop all the balloons on any course", types: ["overworld"] },
    { name: "Score 125,000+ points in the shooting gallery", types: ["overworld"] },
  ],
  [ // 12
    { name: "Complete Big Buisel, Little Buisel", types: ["quest"] },
    { name: "Complete Playing with Drifloon", types: ["quest"] },
    { name: "Complete Strange Happenings at Midnight", types: ["quest"] },
    { name: "Complete The Mysterious Will-o'-the-Wisp", types: ["quest"] },
    { name: "Complete Inspiration from Hippopotas", types: ["quest"] },
  ],
  [ // 13
    { name: "Reach survey rank 4", types: ["overworld"] },
    { name: "Black out from fall damage", types: ["overworld"] },
    { name: "Black out from drowning", types: ["overworld"] },
    { name: "Get paralyzed, drowzy, and poisoned outside of battle", types: ["overworld"] },
    { name: "Submit a report with at least 5 Pokémon where no two start with the same letter", types: ["survey"] },
    { name: "Submit a report with at least 30 Pokémon that are all the same species", types: ["survey"] },
  ],
  [ // 14
    { name: "Register 7 different Ghost-type Pokémon", types: ["dex"] },
    { name: "Register 10 different Normal-type Pokémon", types: ["dex"] },
    { name: "Register 10 different Flying-type Pokémon", types: ["dex"] },
    { name: "Register 8 different Bug-type Pokémon", types: ["dex"] },
    { name: "Register 7 different Electric-type Pokémon", types: ["dex"] },
    { name: "Register 7 different Psychic-type Pokémon", types: ["dex"] },
  ],
  [ // 15
    { name: "Catch a Pokémon in a Space-Time Distortion", types: ["overworld"] },
    { name: "Release 90+ Pokémon at the same time", types: ["overworld"] },
    { name: "Raise a GV to level 10", types: ["overworld"] },
    { name: "Use 5 Rare Candies on a Pokémon at the same time", types: ["overworld"] },
    { name: "Craft 99 of any item at the same time", types: ["overworld"] },
  ],
  [ // 16
    { name: "Upgrade your satchel space 10 times", types: ["overworld"] },
    { name: "Do not catch any Pokémon from trees or rocks", types: ["overworld"] },
    { name: "Collect and turn in 20 wisps", types: ["overworld"] },
  ],
  [ // 17
    { name: "Catch Empoleon, Torterra, and Infernape", types: ["catch"] },
    { name: "Catch Rhyhorn, Rhydon, and Rhyperior", types: ["catch"] },
    { name: "Catch Happiny, Chansey, and Blissey", types: ["catch"] },
    { name: "Catch Abra, Kadabra, and Alakazam in the same report", types: ["catch"] },
  ],
  [ // 18
    { name: "Catch every non-Legendary Pokémon in a region", types: ["catch"] },
    { name: "Catch a Pokémon in the water from the shore", types: ["catch"] },
    { name: "Have a full pasture of Bidoof", types: ["catch"] },
    { name: "Catch a Pokémon without touching the right joystick", types: ["catch"] },
  ],
  [ // 19
    { name: "Tutor every move available to a Pokémon to it", types: ["overworld"] },
    { name: "Have 999 of an item", types: ["overworld"] },
    { name: "Know 25 different crafting recipes", types: ["overworld"] },
    { name: "Craft 7 Pokéshi dolls", types: ["overworld"] },
  ],
  [ // 20
    { name: "Catch a Pokémon owned by Beni", types: ["catch"] },
    { name: "Catch a fully-evolved Pokémon that is in the air", types: ["catch"] },
    { name: "Evolve 5 Pokémon using evolution items", types: ["dex"] },
    { name: "Evolve a Pokémon using a Linking Cable", types: ["dex"] },
  ],
  [ // 21
    { name: "Have exactly 0 money", types: ["overworld"] },
    { name: "Catch 8 Pokémon during an outbreak", types: ["overworld"] },
    { name: "Acquire a Mint", types: ["overworld"] },
  ],
  [ // 22
    { name: "Traverse from one camp to another without being seen", types: ["overworld"] },
    { name: "Catch 5 or more Alphas in one report", types: ["survey"] }

  ],
  [ // 23
    { name: "Catch a fossil Pokémon", types: ["catch"] },
    { name: "Catch Ralts, Kirlia, Gardevoir, and Gallade", types: ["catch"] },
    { name: "Obtain Porygon-Z", types: ["catch"] },
    { name: "Do not evolve any Pokémon by level", types: ["hard"] },
  ],
  [ // 24
    { name: "Defeat an Alpha using a party of 6 different Eeveelutions", types: ["party"] },
    { name: "Defeat an Alpha using a party of every Burmy and Wormadam form", types: ["party"] },
    { name: "Defeat an Alpha using a party of only Starlies", types: ["party"] },
    { name: "Defeat an Alpha using a party of only baby Pokémon", types: ["party"] },
    { name: "Defeat an Alpha using a party of Scyther, Scizor, and Kleavor", types: ["party"] },

  ],
  [ // 25
    { name: "Buy an Ultra Ball from the general store", types: ["hard"] },
    { name: "Obtain three different Rotom forms", types: ["hard"] },
    { name: "Reach survey rank 3 before crossing the Obsidian Fieldlands bridge", types: ["hard"] },
  ],
];