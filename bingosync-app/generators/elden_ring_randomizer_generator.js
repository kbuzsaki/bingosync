bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Get two different full Medallions"
    },
    {
        "name": "Get two different Medallion Pieces"
    },
    {
        "name": "Devourer's Scepter"
    },
    {
        "name": "Marika's Scarseal"
    },
    {
        "name": "Comet Azur"
    },
    {
        "name": "Attune 5 Spells"
    },
    {
        "name": "Kill 10 different Bosses"
    },
    {
        "name": "Radagon's Soreseal"
    },
    {
        "name": "Kill White Mask Varre in Mohg's Palace"
    },
    {
        "name": "Obtain 20 different Helmets"
    },
    {
        "name": "Gold Scarab"
    },
    {
        "name": "Get either of the items from Fire Giant's Remembrance"
    },
    {
        "name": "Kill Ancient Dragon Lansseax"
    },
    {
        "name": "Grafted Blade Greatsword"
    },
    {
        "name": "Loot 4 different Carriages"
    },
    {
        "name": "Kill Edgar the Revenger"
    },
    {
        "name": "Obtain any pre-upgraded weapon"
    },
    {
        "name": "Bolt of Gransax"
    },
    {
        "name": "Collect 15 Golden Seeds before upgrading your Flask count"
    },
    {
        "name": "Collect 4 Sacred Tears before upgrading your Flask"
    },
    {
        "name": "Don't get any maps of Liurnia"
    },
    {
        "name": "Sword of Night and Flame"
    },
    {
        "name": "Founding Rain of Stars"
    },
    {
        "name": "Cast 20 different spells/incantations"
    },
    {
        "name": "Obtain 4 different Armorer's Cookbooks"
    },
    {
        "name": "Fingerprint Greatshield"
    },
    {
        "name": "Obtain 4 different Missionary's Cookbooks"
    },
    {
        "name": "Kill Ordovis"
    },
    {
        "name": "Obtain 2 Perfumer's Cookbooks"
    },
    {
        "name": "Obtain 2 different Glintstone Crowns"
    },
    {
        "name": "Obtain either of the Frenzied's Cookbooks"
    },
    {
        "name": "Giant Crusher"
    },
    {
        "name": "Obtain 4 Great Runes"
    },
    {
        "name": "Obtain 2 different Imp Heads"
    },
    {
        "name": "Activate Radahn's Great Rune"
    },
    {
        "name": "Godskin Peeler"
    },
    {
        "name": "Get killed by Malenia's Grab attack"
    },
    {
        "name": "Obtain any piece of Godskin Noble's Armor set"
    },
    {
        "name": "Pop a Pop a Hero's Rune of any number"
    },
    {
        "name": "Obtain 3 different pieces of Boss armor"
    },
    {
        "name": "Get killed by Waterfowl Dance"
    },
    {
        "name": "4 Different Remembrance Items"
    },
    {
        "name": "Obtain 10 different Crystal Tears"
    },
    {
        "name": "Get 4 Larval Tears"
    },
    {
        "name": "Respec"
    },
    {
        "name": "Die to a Crucible Knight's Breath attack"
    },
    {
        "name": "Use Celestial Dew to absolve yourself"
    },
    {
        "name": "Give 2 Scrolls and 3 Prayerbooks to Miriam"
    },
    {
        "name": "Get killed by Vyke"
    },
    {
        "name": "Ride Torrent into the Ocean"
    },
    {
        "name": "Get killed by both kinds of Crucible Knight"
    },
    {
        "name": "Have Ranni the Witch kill you"
    },
    {
        "name": "Obtain the Blasphemous Blade, and then Discard it"
    },
    {
        "name": "Star Fist"
    },
    {
        "name": "Use Unblockable Blade"
    },
    {
        "name": "Obtain an Ancient Dragon Smithing Stone"
    },
    {
        "name": "Get a Somber Weapon to +5, then Discard it"
    },
    {
        "name": "Die to Flame of the Fell God"
    },
    {
        "name": "Use Pyromancy on Fire Giant"
    },
    {
        "name": "Kill Rennala with a spell"
    },
    {
        "name": "Die to Radahn's Meteor attack"
    },
    {
        "name": "Obtain and wear 2 pieces of Crucible Knight armor (Axe or Tree)"
    },
    {
        "name": "Jump over any Boss attack"
    },
    {
        "name": "Get killed in a Spiritcaller Snail boss fight"
    },
    {
        "name": "Kill 20 Ants"
    },
    {
        "name": "Kill 4 enemies with one attack"
    },
    {
        "name": "Go into any Boss fight with zero Flasks"
    },
    {
        "name": "Use a Ruptured Crystal Tear to die"
    },
    {
        "name": "Die with a Rune Arc active"
    },
    {
        "name": "Ruins Greatsword"
    },
    {
        "name": "Kill Gostoc in Godrick's Arena"
    },
    {
        "name": "Go through Stormveil's Main Gate"
    },
    {
        "name": "Kill 3 named Dragons"
    },
    {
        "name": "Use Bloodhound Step to die"
    },
    {
        "name": "Obtain the Chrysalids' Memento"
    },
    {
        "name": "Obtain the Tonic of Forgetfulness"
    },
    {
        "name": "Obtain 3 Seedbed Curses"
    },
    {
        "name": "Give all 9 Deathroot to Gurranq at once"
    },
    {
        "name": "Use Mimic Tear to kill Stray Mimic Tear"
    },
    {
        "name": "Obtain the Fingerslayer Blade"
    },
    {
        "name": "Summon 10 different Spirit Ashes"
    },
    {
        "name": "Obtain the Stormhawk King"
    },
    {
        "name": "Obtain the Weathered Dagger, but do not return it to its owner"
    },
    {
        "name": "Adula's Moonblade"
    },
    {
        "name": "Obtain one of every elemental resistance medallion (Haligdrake, Flamedrake, etc."
    },
    {
        "name": "Get Deathblighted in the Lake of Rot"
    },
    {
        "name": "Get eaten by a Wormface"
    },
    {
        "name": "Get killed by a Tree Spirit, an Erdtree Avatar, and a Tree Sentinel"
    },
    {
        "name": "Kill any Boss without them noticing you"
    },
    {
        "name": "Black Knife"
    },
    {
        "name": "Kill a Troll with Troll's Roar"
    },
    {
        "name": "Dual wield 2 of the same Boss Weapon"
    },
    {
        "name": "Duplicate any remembrance, then use both copies for runes"
    },
    {
        "name": "Obtain 5 different Nomadic Merchant Bell Bearings"
    },
    {
        "name": "Kill all Bell Bearing Hunters"
    },
    {
        "name": "Obtain the Black Whetblade"
    },
    {
        "name": "Use Weapon Arts to end your own life"
    },
    {
        "name": "Use 2 Imbued Sword Keys"
    },
    {
        "name": "Kill the Dung Eater"
    },
    {
        "name": "Collect over 100 of any crafting material"
    },
    {
        "name": "Use a Gold-Pickled Fowl Foot and a Silver-Pickled Fowl Foot at the same time"
    },
    {
        "name": "Craft 30 Sweet Raisins and feed them all to Torrent"
    },
    {
        "name": "Jump from one Spiritspring into another"
    },
    {
        "name": "Kill any Boss with any Small Shield"
    },
    {
        "name": "Attack Fire Giant with a Torch"
    },
    {
        "name": "Kill Godrick with any Dragon Breath"
    },
    {
        "name": "Kill Radahn with any Gravity Sorcery"
    },
    {
        "name": "Consume a Boiled Prawn and die before it wears off"
    },
    {
        "name": "Lose at least 20,000 Runes by dying before getting them from a previous death"
    },
    {
        "name": "Great Stars"
    },
    {
        "name": "Get the Final Hit on Rykard with anything but the Serpent Hunter"
    },
    {
        "name": "Great-Jar's Arsenal"
    },
    {
        "name": "Prince of Death's Pustule"
    },
    {
        "name": "Greatshield Talisman"
    },
    {
        "name": "Graven-Mass Talisman"
    },
    {
        "name": "Arrow's Reach Talisman"
    },
    {
        "name": "Radagon Icon"
    },
    {
        "name": "Daedicar's Woe"
    },
    {
        "name": "Do not take a Keepsake at Character Creation"
    },
    {
        "name": "Use 3 Sacrificial Twigs"
    },
    {
        "name": "Longtail Cat Talisman"
    },
    {
        "name": "Obtain every Scorpion Charm (Magic, Fire, Lightning, Sacred)"
    },
    {
        "name": "Godfrey Icon"
    },
    {
        "name": "Go to Jarburg"
    },
    {
        "name": "Warrior Jar Shard"
    },
    {
        "name": "Use Jar items to kill a Living Jar"
    },
    {
        "name": "Use Perfume Items to kill a Perfumer"
    },
    {
        "name": "Kill 5 Night's Cavalry"
    },
    {
        "name": "Get hit by a Scarab's Explosion"
    },
    {
        "name": "Get killed by a Jellyfish"
    },
    {
        "name": "Let Aurelia kill a Boss by herself"
    },
    {
        "name": "Summon at least 2 different Legendary Spirit Ashes"
    },
    {
        "name": "Open the door to every Colosseum"
    },
    {
        "name": "Get killed by 2 different Blackflame attacks"
    },
    {
        "name": "Use Blackflame to kill a Godskin Apostle"
    },
    {
        "name": "Use Fire Incantations to kill Adan, Thief of Fire"
    },
    {
        "name": "Have your Guard broken 3 times in 1 fight"
    },
    {
        "name": "Parry any NPC twice"
    },
    {
        "name": "Use the Giant Rat Ashes"
    },
    {
        "name": "Obtain a Somber Ancient Dragon Smithing Stone"
    },
    {
        "name": "Discard any Legendary upgrade material"
    },
    {
        "name": "Ask Hewg about his Prayer"
    },
    {
        "name": "Do a Sacred Act with Fia 5 times"
    },
    {
        "name": "Kill any Boss with only consumables"
    },
    {
        "name": "Keep a Baldachin's Blessing for the rest of the game"
    },
    {
        "name": "Take a shower (Use Soap under a waterfall)"
    },
    {
        "name": "Use a Bewitching Branch"
    },
    {
        "name": "Kill Morgott using the Omen Bairn"
    },
    {
        "name": "Kill Morgott before killing Margit"
    },
    {
        "name": "Do not equip any Great Rune"
    },
    {
        "name": "Eat Exalted FLesh and a Boiled Prawn"
    },
    {
        "name": "Use every kind of Boluses"
    },
    {
        "name": "Jar Cannon"
    },
    {
        "name": "Black Bow"
    },
    {
        "name": "Erdtree Bow"
    },
    {
        "name": "Obtain the Bloody Finger"
    },
    {
        "name": "Erdtree Greatbow"
    },
    {
        "name": "Obtain 2 pieces of Tree Sentinel armor set"
    },
    {
        "name": "Die in every Castle on the map"
    },
    {
        "name": "Greet the Three Fingers"
    },
    {
        "name": "Die in Placidusax's arena without starting the fight"
    }
];
