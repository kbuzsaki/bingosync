bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
    { name: "Frypan"},
    { name: "Wire"},
    { name: "Small Knife"},
    { name: "Battle Knife"},
    { name: "Short Sword"},
    { name: "Long Knife"},
    { name: "Light Knife"},
    { name: "Insect Crush"}
];

bingoList[2] = [
    { name: "Aqua Whip"},
    { name: "Staff"},
    { name: "Kukri"},
    { name: "Scimitar"},
    { name: "SuhrCustom11"},
    { name: "Rod"},
    { name: "Cold Rapier"},
    { name: "Deadly Sword"},
    { name: "Deadly Rod"},
    { name: "Bronze Sword"},
    { name: "Thunder Ax"}
];

bingoList[3] = [
    { name: "Morning Star"},
    { name: "Beserk Blade"},
    { name: "Rockbreaker"},
    { name: "Cutter Whip"},
    { name: "Broadsword"},
    { name: "Spear"},
    { name: "Stun Gun"},
    { name: "Superdriver"},
    { name: "Multi Sword"},
    { name: "Silvo Rapier"}
];

bingoList[4] = [
    { name: "Lucky Blade"},
    { name: "Boom Sword"},
    { name: "Mist Rapier"},
    { name: "Trident"},
    { name: "Freeze Sword"},
    { name: "Holy Whip"},
    { name: "Flying Blow"},
    { name: "Silver Sword"},
    { name: "Heavy Lance"},
    { name: "Red Saber"},
    { name: "Super Sword"},
    { name: "Silver Rod"},
    { name: "Freeze Bow"},
    { name: "Buster Sword"},
    { name: "Great Ax"},
    { name: "Zirco Rod"},
    { name: "Rune Rapier"},
    { name: "Old Sword"},
    { name: "Zirco Sword"},
    { name: "Zirco Ax"},
    { name: "Zirco Whip"},
    { name: "Myth Blade"},
    { name: "Lizard Blow"},
    { name: "Zirco Flail"},
    { name: "Cursed Bow"}
];

bingoList[5] = [
    { name: "Apron"},
    { name: "Hide Armor"},
    { name: "Cloth"},
    { name: "Coat"},
    { name: "Lab-Coat"},
    { name: "Dress"},
    { name: "Frock"},
    { name: "Robe"},
    { name: "Light Dress"}
];

bingoList[6] = [
    { name: "Ironmail"},
    { name: "Iron Plate"},
    { name: "Thick Cloth"},
    { name: "Chain Armor"},
    { name: "Silk Toga"},
    { name: "Light Jacket"},
    { name: "Stone Plate"},
    { name: "Plated Cloth"},
    { name: "Silver Mail"},
    { name: "Metal Mail"},
    { name: "Silver Armor"}
];

bingoList[7] = [
    { name: "Bright Armor"},
    { name: "Deadly Armor"},
    { name: "Evening Gown"},
    { name: "Plati Plate"},
    { name: "Power Robe"},
    { name: "Revive Armor"},
    { name: "Crystal Robe"},
    { name: "Metal Jacket"},
    { name: "Eron Dress"},
    { name: "Bright Cloth"},
    { name: "Ghostsclothes"},
    { name: "Full Mail"},
    { name: "Magic Scale"},
    { name: "Royal Dress"},
    { name: "Old Armor"},
    { name: "Zircon Plate"},
    { name: "Small Shield"},
    { name: "Pot"},
    { name: "Wood Helmet"},
    { name: "Hairband"},
    { name: "Buckler"},
    { name: "Wood Shield"},
    { name: "Bracelet"},
    { name: "Hide Helmet"}
];

bingoList[8] = [
    { name: "Red Beret"},
    { name: "Glass Brace"},
    { name: "Ear Jewel"},
    { name: "Hide Shield"},
    { name: "Kite Shield"},
    { name: "Brone Helmet"},
    { name: "Power Brace"},
    { name: "Stone Helmet"}
];

bingoList[9] = [
    { name: "Hi-Potion"},
    { name: "Ex-Potion"},
    { name: "Miracle"},
    { name: "Hi-Magic"},
    { name: "Ex-Magic"},
    { name: "Awake"},
    { name: "Brave"},
    { name: "Confuse Ball"},
    { name: "Magic Fruit"},
    { name: "Magic Guard"}

];

bingoList[10] = [
    { name: "Strong"},
    { name: "Absorb"},
    { name: "Blizzard"},
    { name: "Bolt"},
    { name: "Champion"},
    { name: "Confuse"},
    { name: "Courage"},
    { name: "Deflect"},
    { name: "Destroy"},
    { name: "Dragon"},
    { name: "Dread"},
    { name: "Drowsy"},
    { name: "Fireball"}
];

bingoList[11] = [
    { name: "Spell Potion"},
    { name: "Curselifter"},
    { name: "Ex-Boomer"},
    { name: "Fire Ball"},
    { name: "Freeze Ball"},
    { name: "Ice Ball"},
    { name: "Life Potion"},
    { name: "Mind Gourd"}
];

bingoList[12] = [
    { name: "Terror Ball"},
    { name: "Antidote"},
    { name: "Big Boomer"},
    { name: "Boomerang"},
    { name: "Any Iris Item"}
];

bingoList[13] = [
    { name: "Speedy Ring"},
    { name: "Tough Gloves"},
    { name: "Blue Beret"},
    { name: "Mind Ring"},
    { name: "Tight Helmet"},
    { name: "Muscle Ring"},
    { name: "Ice Ring"},
    { name: "Brone Shield"},
    { name: "Cloche"},
    { name: "Fury Helmet"},
    { name: "Iron Helmet"},
    { name: "Protect Ring"},
    { name: "Witch Ring"},
    { name: "Water Ring"},
    { name: "Power Ring"},
    { name: "Fire Ring"},
    { name: "Thunder Ring"},
    { name: "Trick Ring"},
    { name: "Spike Shield"},
    { name: "Fake Ring"},
    { name: "Roomy Helm"}
];

bingoList[14] = [
    { name: "Mini Shield"},
    { name: "Beret"},
    { name: "Cap"},
    { name: "Cloth Helmet"},
    { name: "Jet Helmet"},
    { name: "Glass Cap"},
    { name: "Glass Ring"},
    { name: "Chop Board"},
    { name: "Headband"}
];

bingoList[15] = [
    { name: "Horse Rock"},
    { name: "Pearl Brace"},
    { name: "Tight Turban"},
    { name: "Plate Helmet"},
    { name: "Mystery Ring"},
    { name: "Eagle Rock"},
    { name: "Shade Hat"},
    { name: "Silvo Shield"},
    { name: "Sonic Ring"},
    { name: "Hipower Ring"},
    { name: "Metal Cloche"},
    { name: "Silver Helmet"},
    { name: "Tall Shield"},
    { name: "Jute Helmet"},
    { name: "Slash Shield"}
];

bingoList[16] = [
    { name: "Ice Valk"},
    { name: "Mirror"},
    { name: "Rally"},
    { name: "Shield"},
    { name: "Stronger"},
    { name: "Thunder"},
    { name: "Trick"},
    { name: "Valor"},
    { name: "Vortex"},
    { name: "Waken"},
    { name: "Zap"}
];

bingoList[17] = [
    { name: "Bravery"},
    { name: "Coma"},
    { name: "Droplet"},
    { name: "Fake"},
    { name: "Flash"},
    { name: "Fry"},
    { name: "Gale"},
    { name: "Perish"},
    { name: "Poison"},
    { name: "Spark"},
    { name: "Firebird"}
];

bingoList[18] = [
    { name: "Silver Hat"},
    { name: "Mage Shield"},
    { name: "Gold Shield"},
    { name: "Tuff Buckler"},
    { name: "Tect Buckler"},
    { name: "Gold Gloves"},
    { name: "Fury Ribbon"},
    { name: "Eron Hat"},
    { name: "Lion Fang"},
    { name: "Bee Rock"},
    { name: "Cancer Rock"}
];

bingoList[19] = [
    { name: "Cloth Armor"},
    { name: "Camu Armor"},
    { name: "Tight Dress"},
    { name: "Tough Hide"},
    { name: "Light Armor"},
    { name: "Holy Wings"},
    { name: "Toga"},
    { name: "Baggy"},
    { name: "Chainmail"},
    { name: "Long Robe"}
];

bingoList[20] = [
    { name: "Tecto Gloves"},
    { name: "Anger Brace"},
    { name: "Round Shield"},
    { name: "Turban"},
    { name: "Fury Ring"},
    { name: "Block Shield"},
    { name: "Plate Cap"},
    { name: "Big Shield"},
    { name: "Fayza Shield"},
    { name: "Glass Cloche"},
    { name: "Rock Helmet"}
];

bingoList[21] = [
    { name: "Quilted Silk"},
    { name: "Power Cape"},
    { name: "Metal Coat"},
    { name: "Silver Robe"},
    { name: "Plate Armor"},
    { name: "Silk Robe"},
    { name: "Power Jacket"},
    { name: "Metal Armor"},
    { name: "Crystal Mail"},
    { name: "Heal Armor"},
    { name: "Magic Bikini"}
];

bingoList[22] = [
    { name: "Mind Potion"},
    { name: "Mystery Pin"},
    { name: "Power Gourd"},
    { name: "Power Potion"},
    { name: "Regain"},
    { name: "Shriek"},
    { name: "Sleep Ball"},
    { name: "Smoke Ball"},
    { name: "Speed Potion"}
];

bingoList[23] = [
    { name: "Royal Whip"},
    { name: "Dekar Blade"},
    { name: "Burn Sword"},
    { name: "Launcher"},
    { name: "Pounder Rod"},
    { name: "Battledriver"},
    { name: "Crazy Blade"},
    { name: "Rainy Ax"},
    { name: "Luck Rapier"},
    { name: "Aqua Sword"},
    { name: "Crystal Wand"},
    { name: "Halbert"}
];

bingoList[24] = [
    { name: "Rapier"},
    { name: "Whip"},
    { name: "Dagger"},
    { name: "Knife"},
    { name: "Mace"},
    { name: "Franshiska"},
    { name: "Chain"},
    { name: "Gladius"}
];

bingoList[25] = [
    { name: "Fatal Pick"},
    { name: "Long Staff"},
    { name: "Hand Ax"},
    { name: "Sleep Rod"},
    { name: "Long Sword"},
    { name: "Vice Pliers"},
    { name: "Holy Staff"},
    { name: "Fire Dagger"},
    { name: "War Rapier"},
    { name: "Bronze Ax"},
    { name: "Figgoru"},
    { name: "Coma Hit"},
    { name: "Estok"}
];
