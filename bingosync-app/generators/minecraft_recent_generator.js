bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
	"\"A Complete Catalogue\" advancement",
	"\"A Furious Cocktail\" advancement",
	"\"A Seedy Place\" advancement",
	"\"A Terrible Fortress\" advancement",
	"\"Acquire Hardware\" advancement",
	"\"Arbalistic\" advancement",
	"\"Bee Our Guest\" advancement",
	"\"Best Friends Forever\" advancement",
	"\"Birthday Song\" advancement",
	"\"Bukkit Bukkit\" advancement",
	"\"Bullseye\" advancement",
	"\"Caves & Cliffs\" advancement",
	"\"Country Lode, Take Me Home\" advancement",
	"\"Cover Me With Diamonds\" advancement",
	"\"Diamonds!\" advancement",
	"\"Enchanter\" advancement",
	"\"Fishy Business\" advancement",
	"\"Getting an Upgrade\" advancement",
	"\"Glow and Behold!\" advancement",
	"\"Great View From Up Here\" advancement",
	"\"Hero of the Village\" advancement",
	"\"Hidden in the Depths\" advancement",
	"\"Hired Help\" advancement",
	"\"Hot Stuff\" advancement",
	"\"Hot Tourist Destinations\" advancement",
	"\"Ice Bucket Challenge\" advancement",
	"\"Into Fire\" advancement",
	"\"Is It a Balloon?\" advancement",
	"\"Is It a Plane?\" advancement",
	"\"Isn't It Iron Pick\" advancement",
	"\"It It a Bird?\" advancement",
	"\"It Spreads\" advancement",
	"\"Local Brewery\" advancement",
	"\"Monster Hunter\" advancement",
	"\"Not Quite 'Nine' Lives\" advancement",
	"\"Not Today, Thank You\" advancement",
	"\"Oh Shiny\" advancement",
	"\"Ol' Betsy\" advancement",
	"\"Postmortal\" advancement",
	"\"Remote Getaway\" advancement",
	"\"Return to Sender\" advancement",
	"\"Serious Dedication\" advancement",
	"\"Sky's the Limit\" advancement",
	"\"Sniper Duel\" advancement",
	"\"Sound of Music\" advancement",
	"\"Spooky Scary Skeleton\" advancement",
	"\"Sticky Situation\" advancement",
	"\"Stone Age\" advancement",
	"\"Subspace Bubble\" advancement",
	"\"Suit Up\" advancement",
	"\"Sweet Dreams\" advancement",
	"\"Tactical Fishing\" advancement",
	"\"Take Aim\" advancement",
	"\"The Cutest Predator\" advancement",
	"\"The End?\" advancement",
	"\"The End... Again...\" advancement",
	"\"The Healing Power of Friendship!\" advancement",
	"\"The Next Generation\" advancement",
	"\"The Parrots and the Bats\" advancement",
	"\"This Boat Has Legs\" advancement",
	"\"Those Were the Days\" advancement",
	"\"Total Beelocation\" advancement",
	"\"Two Birds, One Arrow\" advancement",
	"\"Uneasy Alliance\" advancement",
	"\"Voluntary Exile\" advancement",
	"\"War Pigs\" advancement",
	"\"Wax off\" advancement",
	"\"Wax on\" advancement",
	"\"We Need to Go Deeper\" advancement",
	"\"What a Deal!\" advancement",
	"\"Whatever Floats Your Goat!\" advancement",
	"\"Who is Cutting Onions?\" advancement",
	"\"Who's the Pillager Now?\" advancement",
	"\"Withering Heights\" advancement",
	"\"You Need a Mint\" advancement",
	"\"You've Got a Friend in Me\" advancement",
	"\"Zombie Doctor\" advancement",
	"12 Unique concrete blocks",
	"16 Black stained glass",
	"16 Black wool",
	"16 Blue ice",
	"16 Blue stained glass",
	"16 Blue wool",
	"16 Brown stained glass",
	"16 Brown wool",
	"16 Cyan stained glass",
	"16 Cyan wool",
	"16 Eggs",
	"16 Ender Pearls",
	"16 Grass blocks",
	"16 Gray stained glass",
	"16 Gray wool",
	"16 Green stained glass",
	"16 Green wool",
	"16 Ink sacks",
	"16 Light blue stained glass",
	"16 Light blue wool",
	"16 Light gray stained glass",
	"16 Light gray wool",
	"16 Lime green stained glass",
	"16 Lime green wool",
	"16 Magenta stained glass",
	"16 Magenta wool",
	"16 Orange stained glass",
	"16 Orange wool",
	"16 Pink stained glass",
	"16 Pink wool",
	"16 Podzol",
	"16 Pumpkins",
	"16 Purple stained glass",
	"16 Purple wool",
	"16 Red stained glass",
	"16 Red wool",
	"16 Tinted glass",
	"16 White stained glass",
	"16 White wool",
	"16 Yellow stained glass",
	"16 Yellow wool",
	"3 Unique concrete blocks",
	"32 Blaze rods",
	"32 Diamonds",
	"32 Spider eyes",
	"64 Acacia logs",
	"64 Amethyst shards",
	"64 Andesite",
	"64 Apples",
	"64 Arrows",
	"64 Birch logs",
	"64 Bones",
	"64 Cacti",
	"64 Carrots",
	"64 Charcoal",
	"64 Clay (blocks)",
	"64 Coal",
	"64 Cobblestone",
	"64 Copper ingots",
	"64 Crafting table",
	"64 Crimson stems",
	"64 Dark oak logs",
	"64 Diorite",
	"64 Dirt",
	"64 Emeralds",
	"64 Endstone",
	"64 Feathers",
	"64 Flint",
	"64 Glass",
	"64 Glowstone blocks",
	"64 Gold ingots",
	"64 Granite",
	"64 Gravel",
	"64 Gunpowder",
	"64 Iron ingots",
	"64 Jungle logs",
	"64 Ladders",
	"64 Lapis lazuli",
	"64 Leather",
	"64 Leaves",
	"64 Lily pads",
	"64 Mangrove logs",
	"64 Nether quartz",
	"64 Nether wart",
	"64 Netherrack",
	"64 Oak logs",
	"64 Obsidian",
	"64 Potatoes",
	"64 Rails",
	"64 Redstone",
	"64 Rotten flesh",
	"64 Sand",
	"64 Sandstone",
	"64 Slimeballs",
	"64 Smooth stone",
	"64 Spruce logs",
	"64 Stone",
	"64 String",
	"64 Sugar cane",
	"64 Sweet berries",
	"64 Warped stems",
	"64 Wheat",
	"7 Unique concrete blocks",
	"8 Cobwebs",
	"8 Unique glazed terracotta",
	"Activate 3 end portals",
	"All 16 dye colors",
	"All 26 unique paintings",
	"All 3 \"stews\"",
	"All diamond tools",
	"All iron tools",
	"All stone tools",
	"All types of doors, including trapdoors",
	"All wood tools",
	"Any chain armor",
	"Any concrete block",
	"Any glazed terracotta",
	"Any tipped arrow",
	"Barter with a piglin",
	"Blow up a bed in the nether",
	"Bounce on a slime block",
	"Break a diamond tool",
	"Break a piece of diamond armor",
	"Break a shield",
	"Break any armor",
	"Break any tool",
	"Breed a axolotl",
	"Breed a bee",
	"Breed a cat",
	"Breed a chicken",
	"Breed a cow",
	"Breed a donkey",
	"Breed a fox",
	"Breed a frog",
	"Breed a goat",
	"Breed a hoglin",
	"Breed a horse",
	"Breed a llama",
	"Breed a mule",
	"Breed a ocelot",
	"Breed a panda",
	"Breed a pig",
	"Breed a rabbit",
	"Breed a sheep",
	"Breed a strider",
	"Breed a turtle",
	"Breed a wolf",
	"Brew a potion of fire resistance",
	"Brew a potion of harming",
	"Brew a potion of healing",
	"Brew a potion of invisibility",
	"Brew a potion of leaping",
	"Brew a potion of night vision",
	"Brew a potion of regeneration",
	"Brew a potion of slowness",
	"Brew a potion of strength",
	"Brew a potion of swiftness",
	"Brew a potion of water breathing",
	"Brew a potion of weakness",
	"Brew any lingering potion",
	"Carve a pumpkin",
	"Clean a banner with a cauldron",
	"Complete a map",
	"Cook 4 food on a campfire",
	"Craft a activator rail",
	"Craft a anvil",
	"Craft a armor stand",
	"Craft a beehive",
	"Craft a blast furnace",
	"Craft a bookshelf",
	"Craft a cake",
	"Craft a campfire",
	"Craft a candle",
	"Craft a cartography table",
	"Craft a clock",
	"Craft a compass",
	"Craft a daylight detector",
	"Craft a dispenser",
	"Craft a dropper",
	"Craft a end crystal",
	"Craft a ender chest",
	"Craft a fire charge",
	"Craft a fletching table",
	"Craft a grindstone",
	"Craft a honey block",
	"Craft a hopper",
	"Craft a jack o'lantern",
	"Craft a jukebox",
	"Craft a lectern",
	"Craft a loom",
	"Craft a magma cream",
	"Craft a note block",
	"Craft a observer",
	"Craft a painting",
	"Craft a piston",
	"Craft a powered rail",
	"Craft a prismarine brick",
	"Craft a rabbit stew",
	"Craft a red nether brick",
	"Craft a redstone comparator",
	"Craft a redstone lamp",
	"Craft a redstone repeater",
	"Craft a respawn anchor",
	"Craft a scaffolding",
	"Craft a smoker",
	"Craft a soul campfire",
	"Craft a soul lantern",
	"Craft a spyglass",
	"Craft a sticky piston",
	"Craft a stonecutter",
	"Craft a target",
	"Craft a trapped chest",
	"Create a dirt path block",
	"Create mud with a water bottle",
	"Damage an enderman with a spash water bottle",
	"Destroy a mob spawner",
	"Die",
	"Drink a honey bottle",
	"Drink milk",
	"Dry a sponge",
	"Duplicate an allay",
	"Dye a leather armor piece",
	"Dye a sheep",
	"Eat a apple",
	"Eat a baked potato",
	"Eat a beetroot",
	"Eat a beetroot soup",
	"Eat a bread",
	"Eat a carrot",
	"Eat a chorus Fruit",
	"Eat a cooked beef",
	"Eat a cooked chicken",
	"Eat a cooked cod",
	"Eat a cooked mutton",
	"Eat a cooked porkchop",
	"Eat a cooked rabbit",
	"Eat a cooked salmon",
	"Eat a cookie",
	"Eat a dried kelp",
	"Eat a enchanted golden apple",
	"Eat a glow berry",
	"Eat a golden apple",
	"Eat a golden carrot",
	"Eat a melon slice",
	"Eat a mushroom stew",
	"Eat a poison potato",
	"Eat a potato",
	"Eat a pufferfish",
	"Eat a pumpkin pie",
	"Eat a rabbit stew",
	"Eat a raw beef",
	"Eat a raw chicken",
	"Eat a raw cod",
	"Eat a raw mutton",
	"Eat a raw porkchop",
	"Eat a raw rabbit",
	"Eat a raw salmon",
	"Eat a rotten flesh",
	"Eat a spider eye",
	"Eat a suspicious stew",
	"Eat a sweet berry",
	"Eat a tropical fish",
	"Enchant a book",
	"Enchant a fishing pole",
	"Enchant a wooden tool",
	"Enter a badlands biome",
	"Enter a bamboo jungle biome",
	"Enter a deep dark biome",
	"Enter a desert temple",
	"Enter a desert village",
	"Enter a dripstone cave",
	"Enter a dungeon",
	"Enter a end city",
	"Enter a ice spikes biome",
	"Enter a igloo",
	"Enter a jungle biome",
	"Enter a jungle temple",
	"Enter a lush cave",
	"Enter a mangrove swamp",
	"Enter a mushroom island biome",
	"Enter a old growth pine taiga biome",
	"Enter a plains village",
	"Enter a ravine",
	"Enter a savanna village",
	"Enter a shipwreck",
	"Enter a snowy plains village",
	"Enter a snowy plains biome",
	"Enter a taiga village",
	"Enter a warm ocean biome",
	"Enter a windswept savanna biome",
	"Enter a witch hut",
	"Enter a amethyst geode",
	"Enter a ancient city",
	"Equip a curse of binding item",
	"Feed wheat to a horse",
	"Fill a composter",
	"Full diamond armor",
	"Full gold armor",
	"Full iron armor",
	"Full leather armor",
	"Full netherite armor",
	"Get a skeleton to shoot a skeleton",
	"Get the \"absorption\" effect",
	"Get the \"blindness\" effect",
	"Get the \"dolphins grace\" effect",
	"Get the \"glowing\" effect",
	"Get the \"hunger\" effect",
	"Get the \"levitation\" effect",
	"Get the \"mining fatigue\" effect",
	"Get the \"regeneration\" effect",
	"Get the \"resistance\" effect",
	"Get the \"wither\" effect",
	"Grow a dark oak tree",
	"Grow a giant mushroom",
	"Grow a large jungle tree",
	"Grow a large spruce tree",
	"Have a dolphin lead you to treasure",
	"Hit yourself with an arrow",
	"Kill a allay",
	"Kill a axolotl",
	"Kill a baby villager",
	"Kill a baby zombie with an arrow",
	"Kill a bat",
	"Kill a bee",
	"Kill a blaze",
	"Kill a blaze with snowballs",
	"Kill a cat",
	"Kill a cave spider",
	"Kill a chicken",
	"Kill a cod",
	"Kill a cow",
	"Kill a creeper",
	"Kill a creeper with another creeper",
	"Kill a creeper with tnt",
	"Kill a dolphin",
	"Kill a donkey",
	"Kill a drowned",
	"Kill a drowned holding a trident",
	"Kill a elder guardian",
	"Kill a ender dragon",
	"Kill a ender dragon without beds",
	"Kill a enderman",
	"Kill a endermite",
	"Kill a evoker",
	"Kill a fox",
	"Kill a frog",
	"Kill a ghast",
	"Kill a glow squid",
	"Kill a goat",
	"Kill a guardian",
	"Kill a hoglin",
	"Kill a horse",
	"Kill a husk",
	"Kill a iron golem",
	"Kill a llama",
	"Kill a magma cube",
	"Kill a mob while it's on fire",
	"Kill a mob with a tamed wolf",
	"Kill a mob with dripstone",
	"Kill a mob with fall damage",
	"Kill a mooshroom",
	"Kill a mule",
	"Kill a ocelot",
	"Kill a panda",
	"Kill a parrot",
	"Kill a phantom",
	"Kill a pig",
	"Kill a piglin",
	"Kill a piglin brute",
	"Kill a pillager",
	"Kill a polar bear",
	"Kill a pufferfish",
	"Kill a rabbit",
	"Kill a ravager",
	"Kill a salmon",
	"Kill a sheep",
	"Kill a shulker",
	"Kill a silverfish",
	"Kill a skeleton",
	"Kill a skeleton without it damaging you",
	"Kill a slime",
	"Kill a snow golem",
	"Kill a spider",
	"Kill a spider jockey",
	"Kill a squid",
	"Kill a stray",
	"Kill a strider",
	"Kill a tadpole",
	"Kill a tropical fish",
	"Kill a turtle",
	"Kill a vex",
	"Kill a villager",
	"Kill a vindicator",
	"Kill a warden",
	"Kill a witch",
	"Kill a wither",
	"Kill a wither skeleton",
	"Kill a wolf",
	"Kill a zoglin",
	"Kill a zombie",
	"Kill a zombie piglin",
	"Kill a zombie villager",
	"Light a creeper with flint & steel",
	"Light tnt with flint & steel",
	"Light tnt with redstone",
	"Loot a buried treasure",
	"Loot a ruined portal chest",
	"Make a efficiency 5 tool",
	"Make a power 5 bow",
	"Make a sharpness 5 sword",
	"Make a witch poison itself",
	"Milk a cow",
	"Milk a goat",
	"Mine ancient debris",
	"Mine coal ore",
	"Mine copper ore",
	"Mine diamond ore",
	"Mine emerald ore",
	"Mine gold ore",
	"Mine iron ore",
	"Mine lapis lazuli ore",
	"Mine nether gold ore",
	"Mine nether quartz ore",
	"Mine redstone ore",
	"Obtain 12 unique flowers",
	"Obtain a amethyst shard",
	"Obtain a mending book",
	"Obtain a name tag",
	"Obtain a nautilus shell",
	"Obtain a saddle",
	"Obtain a trident",
	"Obtain any froglight",
	"Obtain any goat horn",
	"Obtain any mob head",
	"Obtain diamond horse armor",
	"Obtain gold horse armor",
	"Obtain iron horse armor",
	"Obtain leather horse armor",
	"Plant a bamboo",
	"Plant a beetroot seed",
	"Plant a chorus fruit",
	"Plant a cocoa bean",
	"Plant a nether wart",
	"Plant a pumpkin seed",
	"Plant a sugar cane",
	"Plant a wheat seed",
	"Plant any sapling",
	"Plant something in a flower pot",
	"Play a music disc",
	"Push a mob with a piston",
	"Reach level 10",
	"Reach level 25",
	"Reach the build limit (y=320)",
	"Reach y=0 in the end",
	"Repair a tool in an anvil",
	"Ride a boat with a creeper",
	"Ride a minecart on a rail",
	"Ride a pig",
	"Ring a bell",
	"Set your spawn with a bed",
	"Shear a mooshroom",
	"Shear a sheep",
	"Shoot a bat with an arrow",
	"Shoot a bell",
	"Shoot a firework from a crossbow",
	"Stand on bedrock",
	"Stare at the sun with a spyglass",
	"Strip a log",
	"Summon a warden",
	"Swim in a desert well",
	"Swim in lava with fire resistance",
	"Tame a cat",
	"Tame a donkey",
	"Tame a horse",
	"Tame a llama",
	"Tame a mule",
	"Tame a parrot",
	"Tame a wolf",
	"Throw a diamond in lava",
	"Throw a ender pearl",
	"Throw a snowball",
	"Throw an egg",
	"Trap a mob in a boat",
	"Use any dye on a sign",
	"Use bonemeal on grass",
	"Wear a carved pumpkin",
	"Write a book"
];
