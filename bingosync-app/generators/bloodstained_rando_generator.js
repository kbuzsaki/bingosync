bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "55% Map Completion"
    },
    {
        "name": "65% Map Completion"
    },
    {
        "name": "75% Map Completion"
    },
    {
        "name": "60% Shard Completion"
    },
    {
        "name": "70% Shard Completion"
    },
    {
        "name": "80% Shard Completion"
    },
    {
        "name": "Collect Double Jump, Invert, and High Jump Shards"
    },
    {
        "name": "Defeat Alfred"
    },
    {
        "name": "Defeat Orobas"
    },
    {
        "name": "Defeat Bathin"
    },
    {
        "name": "Defeat Valefar"
    },
    {
        "name": "Defeat Bloodless and Valac"
    },
    {
        "name": "Defeat 2 Differently Named Treasure Chests"
    },
    {
        "name": "Collect a Shard from a Demon Lord"
    },
    {
        "name": "Collect Galleon Map"
    },
    {
        "name": "Collect Aegis Plate"
    },
    {
        "name": "Guard Against Lava"
    },
    {
        "name": "Meet a Ghostly Friend in Celeste's Room"
    },
    {
        "name": "Collect 3 of Millionaire, Carpenter, Warhorse, and Celeste Keys"
    },
    {
        "name": "Drain the Blood Fountain"
    },
    {
        "name": "Collect 3 Shards from Each of Dullahammer Head and Malediction"
    },
    {
        "name": "Defeat Blood Grinder Knight, Shield Outsider, Axe Outsider, and G Axe Outsider"
    },
    {
        "name": "Defeat Dragon and Living Fossil"
    },
    {
        "name": "Ride Gamigin and Defeat Glashtyn (Horses)"
    },
    {
        "name": "Defeat Lili and Lamashtu"
    },
    {
        "name": "Defeat Gargoyle and Gaap"
    },
    {
        "name": "Defeat Wolfman and Silver Wolfman"
    },
    {
        "name": "Defeat Sabnock and Marbas"
    },
    {
        "name": "Defeat 3 Differently Named Elementals"
    },
    {
        "name": "Defeat 4 Differently Named Elementals"
    },
    {
        "name": "Collect Deep Sinker and Aqua Stream Shards"
    },
    {
        "name": "Defeat Nyabon, Macaron, and Kamikaze (Cats)"
    },
    {
        "name": "Collect a Shard from Both Puppy and Rocky (Dogs)"
    },
    {
        "name": "Collect a Shard from Both Carriage Morte and Gusion Cannon"
    },
    {
        "name": "Defeat Carabosse, Sidhe, and Titania (Fairies)"
    },
    {
        "name": "Defeat Buer Armor, Lance Armor, and Zepar (Armor Knights)"
    },
    {
        "name": "Defeat Zagan and Haagenti (Cows)"
    },
    {
        "name": "Defeat 5 Assassins or Ninjas Using Only Shurikens"
    },
    {
        "name": "Defeat Cyhyraeth Using Only a Firearm. Defeat Cyhyraeth Using Only a Dagger. Defeat Cyhyraeth Using Only Shoes."
    },
    {
        "name": "Defeat Living Fossil Using Only Bone Toss"
    },
    {
        "name": "Defeat Deeseama, Glashtyn, and Scylla Using Only Cerulean Splash"
    },
    {
        "name": "Defeat Shovel Knight While Being a Shovel Knight"
    },
    {
        "name": "Defeat Plume Parma Using Only Summon Plume Parma"
    },
    {
        "name": "Defeat Scythe Mite Using Only Summon Insect"
    },
    {
        "name": "Defeat Hellhound Using Only Summon Hellhound"
    },
    {
        "name": "Defeat Tracer Using Only Summon Tracer"
    },
    {
        "name": "Defeat Giant Morte and Giant Flame Cannon"
    },
    {
        "name": "Defeat Scythe Mite and Blood Bug"
    },
    {
        "name": "Defeat Abyssal Dragons in 2 Different Rooms"
    },
    {
        "name": "Defeat Tamako-Death Using Only Upbeat Heat"
    },
    {
        "name": "Defeat Buer, Triwheel Buer, Chariot Buer, and Giant Buer"
    },
    {
        "name": "Collect 3 Shards from Gusions"
    },
    {
        "name": "Identify the Enemy That Doesn't Drop a Shard (Excluding Morte)"
    },
    {
        "name": "Fully Explore Galleon Minerva (Visit all Map Tiles)"
    },
    {
        "name": "Fully Explore Tower of Twin Dragons (Visit all Map Tiles)"
    },
    {
        "name": "Fully Explore Hall of Termination (Visit all Map Tiles)"
    },
    {
        "name": "Fully Explore Garden of Silence (Visit all Map Tiles)"
    },
    {
        "name": "Fully Explore Entrance (Visit all Map Tiles)"
    },
    {
        "name": "Fully Explore Oriental Sorcery Lab (Visit all Map Tiles)"
    },
    {
        "name": "Collect Zangetsuto and Dimension Shift"
    },
    {
        "name": "Collect Tis Rozaïn and Void Ray Shards"
    },
    {
        "name": "Collect Petra Ray, Reflector Ray, and Void Ray Shards"
    },
    {
        "name": "Collect Flame Cannon, Flamethrower, and Inferno Breath Shards"
    },
    {
        "name": "Collect Va Ischa and Va Schia Shards"
    },
    {
        "name": "Collect Riga Storaema and Riga Dohin Shards"
    },
    {
        "name": "Collect Tis Raiff and Tis Rozaïn Shards"
    },
    {
        "name": "Collect Teps Oceus and Teps Salrenda Shards"
    },
    {
        "name": "Collect Fald Taiab and Fald Ciu Shards"
    },
    {
        "name": "Collect Gold Bullet and Jackpot Shards"
    },
    {
        "name": "Collect Acid Jet and Venom Mist Shards"
    },
    {
        "name": "Collect Directed Shield and Heretical Grinder Shards"
    },
    {
        "name": "Collect Throw Spear and Bolide Blast Shards"
    },
    {
        "name": "Collect Tornado Slicer and Toxic Storm Shards"
    },
    {
        "name": "Collect Chisel Barrage and Ruinous Rood Shards"
    },
    {
        "name": "Collect Flytrap and Welcome Company Shards"
    },
    {
        "name": "Collect 3 Differently Named 8-bit Shards"
    },
    {
        "name": "Collect Cerulean Splash and Thrashing Tentacle Shards"
    },
    {
        "name": "Collect Flying Dagger and Shuriken Shards"
    },
    {
        "name": "Collect Healing and Regenerate Shards"
    },
    {
        "name": "Collect Sword Expertise, Greatsword Expertise, and Katana Expertise Shards"
    },
    {
        "name": "Collect Kick Expertise and Dagger Expertise Shards"
    },
    {
        "name": "Collect Spear Expertise and Whip Expertise Shards"
    },
    {
        "name": "Collect Petra Breath and Petra Ray Shards"
    },
    {
        "name": "Collect Throwing Axe and Axe Strike Shards"
    },
    {
        "name": "Collect True Arrow and Chaser Arrow Shards"
    },
    {
        "name": "Collect Words of Wisdom and Red Remembrance Shards"
    },
    {
        "name": "Collect Money is Power and Pickpocket Shards"
    },
    {
        "name": "Collect Alchemic Bounty and Augment Gold Shards"
    },
    {
        "name": "Collect Beast Guardian and Feral Claws Shards"
    },
    {
        "name": "Collect Drain and Optimizer Shards"
    },
    {
        "name": "Collect Aqua Stream and Amphibian Speed Shards"
    },
    {
        "name": "Collect Standstill and Shadow Tracer Shards"
    },
    {
        "name": "Collect Head Flail and Gale Crawler Shards"
    },
    {
        "name": "Collect Death Cry and Draconic Rage Shards"
    },
    {
        "name": "Collect Release Toad and Summon Plume Parma Shards"
    },
    {
        "name": "Collect Circular Ripper and Directed Shield Shards"
    },
    {
        "name": "Slow 10 Differently Named Enemies with Lethargy"
    },
    {
        "name": "Turn 10 Differently Named Enemies to Stone"
    },
    {
        "name": "Use Both Detective Eye and Carabosse to Discover Secrets"
    },
    {
        "name": "Discover 9 Warp Rooms"
    },
    {
        "name": "Discover 16 Save Rooms"
    },
    {
        "name": "1100 HP"
    },
    {
        "name": "500 MP"
    },
    {
        "name": "69 Capacity"
    },
    {
        "name": "100 Capacity"
    },
    {
        "name": "Collect Valkyrie Sword, Valkyrie Dress, and Valkyrie Tiara"
    },
    {
        "name": "Defeat Gremory Using Only Zangetsuto"
    },
    {
        "name": "950 HP and 450 MP"
    },
    {
        "name": "Collect 5 Total Hair Apparents"
    },
    {
        "name": "Collect 8 Total Hair Apparents"
    },
    {
        "name": "Defeat Andrealphus and Doppelganger"
    },
    {
        "name": "Upon Collection, Unequip Gebel's Glasses for the Remainder of the Game"
    },
    {
        "name": "Have 3 Different Books from O.D. Simultaneously"
    },
    {
        "name": "Collect 2 Chests Below O.D."
    },
    {
        "name": "Collect 2 Healing Item Recipe Books"
    },
    {
        "name": "Collect 3 Ammunition Recipe Books"
    },
    {
        "name": "Collect 6 Equipment Recipe Books"
    },
    {
        "name": "Collect 7 Food Recipe Books"
    },
    {
        "name": "Collect 3 Boss Medals"
    },
    {
        "name": "Save Benjamin 3 Times"
    },
    {
        "name": "Save Benjamin Twice"
    },
    {
        "name": "Feed Susie 3 Times"
    },
    {
        "name": "Kill Those Murderers Dead 10 Times"
    },
    {
        "name": "Kill Those Murderers Dead 13 Times"
    },
    {
        "name": "Cut 2 Blood Moons"
    },
    {
        "name": "Defeat Glutton Train"
    },
    {
        "name": "Defeat Kunekune"
    },
    {
        "name": "Defeat 8-Bit Overlord"
    },
    {
        "name": "Defeat Master Carpenter"
    },
    {
        "name": "Defeat Millionaire's Bane"
    },
    {
        "name": "Defeat Revenant (Warhorse)"
    },
    {
        "name": "Defeat Zangetsu 1 and 2"
    },
    {
        "name": "Defeat Bloodless with Only Red Umbrella"
    },
    {
        "name": "Collect a Shard from Revenant, Millionaire's Bane, Master Carpenter, or 8-Bit Overlord"
    },
    {
        "name": "Collect 5 Differently Named Glasses"
    },
    {
        "name": "Collect 6 Differently Named Manipulative Shards"
    },
    {
        "name": "Collect 3 Differently Named Familiar Shards"
    },
    {
        "name": "Collect 5 Differently Named Guns"
    },
    {
        "name": "Collect 5 Differently Named Whips"
    },
    {
        "name": "Collect 6 Differently Named Spears"
    },
    {
        "name": "Collect 5 Differently Named Katanas"
    },
    {
        "name": "Collect 3 Differently Named Rapiers"
    },
    {
        "name": "Collect 4 Differently Named Daggers"
    },
    {
        "name": "Collect 4 Differently Named Clubs"
    },
    {
        "name": "Collect 5 Differently Named Shoes"
    },
    {
        "name": "Collect 4 Differently Named Scarves"
    },
    {
        "name": "Collect 9 Differently Named Greatswords"
    },
    {
        "name": "Collect 10 Differently Named Swords"
    },
    {
        "name": "Collect 5 Differently Named Ammunition"
    },
    {
        "name": "Collect 3 Differently Named Breastplates"
    },
    {
        "name": "Collect 12 Differently Named Rings"
    },
    {
        "name": "Collect 2 Differently Named Necklaces"
    },
    {
        "name": "Collect Pirate Hat and Santa Hat"
    },
    {
        "name": "Collect 2 Differently Named Circlets"
    },
    {
        "name": "Collect 2 Differently Named Tiaras"
    },
    {
        "name": "Collect 2 Differently Named Berets"
    },
    {
        "name": "Collect 2 Differently Named Belts"
    },
    {
        "name": "Collect Gebel's Glasses and Hellhound Shard"
    },
    {
        "name": "Collect 3 Differently Named Augment Passive Shards"
    },
    {
        "name": "Collect 6 Differently Named Resist Passive Shards"
    },
    {
        "name": "Collect 8 Differently Named Resist Passive Shards"
    },
    {
        "name": "Collect 7 Differently Named Summon Conjure Shards"
    },
    {
        "name": "Collect 5 Differently Named Expertise Passive Shards"
    },
    {
        "name": "Collect 3 of Country Dress, Tea Dress, Silk Dress, Scarlet Dress, and Valkyrie Dress"
    },
    {
        "name": "Collect 3 of Chemise, Mantua, Polonaise, Kalasiris, and Coronation Gown"
    },
    {
        "name": "Collect 3 of Lamellar Armor, Crusader's Armor, Crystal Armor, and Dragon Armor"
    },
    {
        "name": "Collect Kung Fu Vest, Hound Vest, and Assassin's Vest"
    },
    {
        "name": "Collect Knife, Kung Fu Shoes, Short Sword, and Claymore"
    },
    {
        "name": "Collect Dullahammer Helm, Cat Ears, Wolf Hood, Silver Tiara, and Ribbon"
    },
    {
        "name": "Collect Assassin Vest, Shinobi Garb, and Flame Mail"
    },
    {
        "name": "Collect Scale Armor, Iron Breastplate, Steel Breastplate, and Ex Shovel Armor"
    },
    {
        "name": "Collect Ring, Unicorn Ring, Assassin's Ring, and Cursed Ring"
    },
    {
        "name": "Collect Long Sword, Ulfberht Sword, Harpé, and Rhava Búral"
    },
    {
        "name": "Collect Poison Kukri, Stinger, Flame Whip, and Beast Killer"
    },
    {
        "name": "Collect Spiral Sword, Berdiche, and Dojigiri"
    },
    {
        "name": "Collect Partisan, Shovel, and Areadhbar"
    },
    {
        "name": "Collect Stone Mask, Crow Mask, Dance Mask, and Kitsune Mask"
    },
    {
        "name": "Collect 4 Differently Named Hats"
    },
    {
        "name": "Collect 2 of Bunny Boots, Bunny Ears, and Bunny Scarf"
    },
    {
        "name": "Collect Rhava Búral and Rhava Velar (Swords)"
    },
    {
        "name": "Enhance Any 2 Shards to Rank 9"
    },
    {
        "name": "Increase Any 3 Differently Named Shards to Grade 9"
    },
    {
        "name": "Enter 3 Different Iron Maidens"
    },
    {
        "name": "Ride a Chair"
    },
    {
        "name": "Defeat Gebel and Game Over"
    },
    {
        "name": "STR Food Bonus +10"
    },
    {
        "name": "INT Food Bonus +10"
    },
    {
        "name": "CON Food Bonus +10"
    },
    {
        "name": "MND Food Bonus +10"
    },
    {
        "name": "Max HP Food Bonus +100"
    },
    {
        "name": "Max MP Food Bonus +50"
    },
    {
        "name": "+3.0 MP Quickcharge Food Bonus"
    },
    {
        "name": "Strike a Pose on Top of a Cow Statue"
    },
    {
        "name": "Master 3 Different Techniques"
    },
    {
        "name": "Defeat a Boss Using Only Bunny- morphasis"
    },
    {
        "name": "Hear Carabosse Sing while Playing the Piano"
    },
    {
        "name": "Take a Carriage Ride in Garden of Silence"
    },
    {
        "name": "Get Turned to Stone by 4 Differently Named Enemies"
    },
    {
        "name": "Get Poisoned by 4 Differently Named Enemies"
    },
    {
        "name": "Get Cursed by 4 Differently Named Enemies"
    },
    {
        "name": "Defeat Aello, Celaeno, and Ocypete (Harpies) Using Only Accelerator"
    },
    {
        "name": "Defeat a Boss Using Only Shoes"
    },
    {
        "name": "Defeat a Boss Using Only Rapiers"
    },
    {
        "name": "Defeat a Boss Using Only Firearms and Ammunition"
    },
    {
        "name": "Defeat a Boss Using Only Daggers"
    },
    {
        "name": "Defeat a Boss Using Only Spears"
    },
    {
        "name": "Defeat a Boss Using Only Whips"
    },
    {
        "name": "Defeat a Boss Using Only a Sword. Defeat a Boss Using Only a Greatsword. Defeat a Boss Using Only a Katana."
    },
    {
        "name": "Defeat 3 Bosses Using Only a Single Shard (Same Shard on All 3 Bosses)"
    },
    {
        "name": "Win a Race in Den of Behemoths"
    },
    {
        "name": "Open Aegis Plate Treasure Chest"
    },
    {
        "name": "Sell 3 Augment LCK Shards in a Single Transaction"
    },
    {
        "name": "Die to Bael"
    },
    {
        "name": "Open 6 Underwater Chests"
    },
    {
        "name": "Complete 3 Abigail Quests"
    },
    {
        "name": "Obtain an Extra Material While Crafting with Alchemic Bounty"
    },
    {
        "name": "Grow and Harvest Rice, Potatoes, and Corn"
    },
    {
        "name": "Take Damage from Iron Maidens, Spikes, Swinging Axes, Guillotines, and Lava"
    },
    {
        "name": "Enlist Johannes' Help to Prepare 5 Differently Named New Consumable Dishes"
    },
    {
        "name": "Eat a Seafood Curry with a Forneus, a Pork Curry with a Plume Parma, or a Beef Curry with a Zagan"
    },
    {
        "name": "Permanently Activate 3 Staircases in Livre Ex Machina"
    },
    {
        "name": "Activate 7 Levers"
    },
    {
        "name": "Activate 10 Levers"
    },
    {
        "name": "Ride an Elevator in both Tower of Twin Dragons and Hidden Desert"
    },
    {
        "name": "Ride Both Underground Platforms for an Entire Circuit Without Falling Off (Start and End on Left Side)"
    },
    {
        "name": "Move 7 Different Objects Using Craftwork"
    },
    {
        "name": "Reach Level 40"
    },
    {
        "name": "Craft 2 Differently Named Shards"
    },
    {
        "name": "Collect 2 Weapons with the Same Name (But Different Stats)"
    },
    {
        "name": "Defeat Carabosse Using Only Carabosse Familiar"
    },
    {
        "name": "Defeat Bloodbringer Using Only Bloodbringer Familiar"
    },
    {
        "name": "Defeat a Boss Using Only Buer Familiar"
    },
    {
        "name": "Defeat Bloodbringer, Buer, Carabosse, Dantalion, and Dullahammer Head Using Only Familiar Shards"
    },
    {
        "name": "Read Dantalion in Ice Tomb (Sit in a Chair Using Dantalion Familiar)"
    },
    {
        "name": "Steal Blood from Enemies in 7 Differently Named Zones"
    },
    {
        "name": "Sit in a Chair in 10 Differently Named Zones (Excluding Save Rooms within those Zones)"
    },
    {
        "name": "Raise 3 Familiars' Level to 20"
    }
];
