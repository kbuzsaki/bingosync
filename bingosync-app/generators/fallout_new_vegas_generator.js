var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Become addicted to at least 3 substances", types: ["items"] },
  { name: "Recruit Veronica", types: ["companion"] },
  { name: "Recruit Boone", types: ["companion, novac"] },
  { name: "Collect a Platinum Chip", types: ["items, strip"] },
  { name: "Collect a Doggie Treat", types: ["items"] },
  { name: "Obtain Benny's Lighter", types: ["items"] },
  { name: "Complete the quest Run Goodsprings Run", types: ["quest"] },
  { name: "Kill Tabitha", types: ["kill, blk"] },
  { name: "Collect the Destroyed Collar", types: ["items"] },
  { name: "Kill Moe", types: ["kill, blk"] },
  { name: "Kill Mean Sonofabitch", types: ["kill, westside"] },
  { name: "Collect a Ping Pong Ball", types: ["items, freeside"] },
  { name: "Obtain a Counterfeit Passport", types: ["items"] }
];
bingoList[2] = [
  { name: "Collect the CZ57 Avenger", types: ["weapon, east"] },
  { name: "Collect This Machine", types: ["weapon"] },
  { name: "Kill Ike", types: ["kill"] },
  { name: "Collect Oh Baby!", types: ["weapon, jacob"] },
  { name: "Craft a Mushroom Cloud", types: ["crafting"] },
  { name: "Kill Mr. House", types: ["kill, house, strip"] },
  { name: "Collect The Humble Cudgel", types: ["weapon"] },
  { name: "Obtain a Brahmin Wellington", types: ["items"] },
  { name: "Collect Mr. RADical's Journal", types: ["notes"] },
  { name: "Deface the Boulder City memorial", types: ["meme"] },
  { name: "Obtain the Jake Juice", types: ["items, house"] }
];
bingoList[3] = [
  { name: "Have at least 10000 caps", types: ["money"] },
  { name: "Collect at least 3 Snow globes", types: ["snow"] },
  { name: "Obtain the Cannibal perk", types: ["perk"] },
  { name: "Cook a Bloatfly Slider", types: ["crafting"] },
  { name: "Collect the Ratslayer", types: ["weapon"] },
  { name: "Obtain the GBRM2KX Memory Chip", types: ["weapon"] },
  { name: "Collect a Rolling Pin", types: ["weapon"] },
  { name: "Collect the Pretty Pretty Horsies book", types: ["items"] },
  { name: "Recruit Lily", types: ["companion, jacob"] },
  { name: "Collect the 'Flour'", types: ["items"] },
  { name: "Obtain a Wood Chipper", types: ["items, wood"] }
];
bingoList[4] = [
  { name: "Discover at least 30 locations", types: ["location"] },
  { name: "Become Vilified with at least 2 factions", types: ["rep"] },
  { name: "Have sex with at least 4 different people", types: ["sex"] },
  { name: "Cook a Caravan Lunch", types: ["crafting"] },
  { name: "Kill anyone with a Throwing Knife", types: ["items"] },
  { name: "Collect a Finger", types: ["items, novac"] },
  { name: "Collect 5 Sporks", types: ["items"] },
  { name: "Kill Mr Janitor", types: ["kill"] },
  { name: "Obtain the Sherriff's Duster", types: ["items, primm"] },
  { name: "Obtain a Schematics - billboard", types: ["items, strip"] }
];
bingoList[5] = [
  { name: "Become Idolized with at least 2 factions", types: ["rep"] },
  { name: "Complete the quest Beyond the Beef", types: ["quest, strip"] },
  { name: "Kill Duke", types: ["kill"] },
  { name: "Obtain the Gobi Campaign Sniper Rifle", types: ["items"] },
  { name: "Collect the Declaration of Vital Essence", types: ["notes"] },
  { name: "Obtain Chance's Knife", types: ["weapon"] },
  { name: "Collect 5 Solar Array Parts", types: ["items"] },
  { name: "Get a discount with Ada Straus", types: ["novac"] },
  { name: "Heal Snuffles' wounds", types: ["meme, sloan"] },
  { name: "Collect 18 Counterfeit Bottle Caps", types: ["items"] },
  { name: "Collect Pew Pew", types: ["weapon"] },
  { name: "Obtain Cuddles' Toy Car", types: ["items, blk"] }
];
bingoList[6] = [
  { name: "Kill the Legendary Deathclaw", types: ["kill"] },
  { name: "Kill the Giant Ant Queen", types: ["kill"] },
  { name: "Complete the quest I Fought The Law", types: ["quest, primm"] },
  { name: "Collect the Alien Blaster", types: ["weapon"] },
  { name: "Obtain a Plasma Caster", types: ["weapon"] },
  { name: "Complete the quest Booted", types: ["quest"] },
  { name: "Complete the quest Eye for an Eye", types: ["quest"] },
  { name: "Collect Vikki and Vance's hats", types: ["items"] },
  { name: "Obtain the Lab Technician Outfit", types: ["items"] },
  { name: "Collect an Irr. YumYum Deviled Eggs", types: ["items"] },
  { name: "Cook a Trail Mix", types: ["crafting"] },
  { name: "Kill a Mr Steel", types: ["kill"] },
  { name: "Obtain the Naughty Nightwear", types: ["items"] },
  { name: "Obtain a Rum & Nuka", types: ["items, freeside"] }
];
bingoList[7] = [
  { name: "Defeat 3 different opponents in Caravan", types: ["game"] },
  { name: "Become addicted to at least 10 substances", types: ["items"] },
  { name: "Raise a skill to 100", types: ["skill"] },
  { name: "Collect 100 Pinto Bean Pods", types: ["items"] },
  { name: "Collect the Vault 34 Overseer's Journal Fragments", types: ["vault34"] },
  { name: "Kill The King", types: ["kill, freeside"] },
  { name: "Collect a Thermic Lance", types: ["weapon"] },
  { name: "Collect The Screams of Brahmin holotape", types: ["novac"] },
  { name: "Have Captain Parker murder Keith", types: ["quest"] },
  { name: "Collect the 3 pages of the Die-ary of Trash", types: ["notes"] },
  { name: "Complete the quest That Lucky Old Sun", types: ["quest"] },
  { name: "Obtain the Ranger Takedown perk", types: ["perk, novac, charlie"] }
];
bingoList[8] = [
  { name: "Complete the quest Volare!", types: ["quest"] },
  { name: "Collect Elaine's Letter", types: ["dam"] },
  { name: "Collect the Ranger Station Charlie audio logs", types: ["charlie"] },
  { name: "Complete the quest Classic Inspiration", types: ["quest"] },
  { name: "Obtain Caesar's Armor", types: ["kill, legion"] },
  { name: "Kill Big Beard and Little Beard", types: ["kill, byelove"] },
  { name: "Cook a Gecko Kebab", types: ["crafting"] },
  { name: "Craft a '.308, JSP hand load' round", types: ["crafting"] },
  { name: "Obtain a Wasteland Omelet", types: ["items, sloan"] },
  { name: "Collect the 4 Torn Diary pages", types: ["notes"] },
  { name: "Complete the quest Three Card Bounty", types: ["quest"] },
  { name: "Obtain Mr Cuddles", types: ["items"] }
];
bingoList[9] = [
  { name: "Become Vilified with at least 4 factions", types: ["rep"] },
  { name: "Defeat 5 different opponents in Caravan", types: ["game"] },
  { name: "Collect Gus Olson's Speech", types: ["vault11"] },
  { name: "Collect the Differential Pressure Controller", types: ["vault11"] },
  { name: "Obtain the Adamantium Skeleton perk", types: ["perk"] },
  { name: "Kill the Legendary Nightstalker", types: ["kill"] },
  { name: "Have the Van Graffs get bombed", types: ["freeside"] },
  { name: "Kill the Legendary Fire Gecko", types: ["kill, gecko"] },
  { name: "Complete the quest Bye Bye Love", types: ["items, byelove"] },
  { name: "Activate all the Mojave Express postboxes", types: ["location"] },
  { name: "Complete the quest Wang Dang Atomic Tango", types: ["quest, freeside"] }
];
bingoList[10] = [
  { name: "Discover at least 50 locations", types: ["location"] },
  { name: "Get banned from a strip casino", types: ["game"] },
  { name: "Complete the quest You Can Depend on Me", types: ["quest"] },
  { name: "Obtain the Legion Assault perk", types: ["perk, legion"] },
  { name: "Collect 8 Forlorn Hope letters", types: ["notes"] },
  { name: "Obtain the RobCo Jumpsuit", types: ["items"] },
  { name: "Claim Motor-Runner's bounty", types: ["vault3"] },
  { name: "Upgrade Raul to a Tier 2 outfit", types: ["companion"] },
  { name: "Obtain the Monocyte Breeder implant", types: ["items"] },
  { name: "Obtain the Evil Gnome", types: ["items, gecko"] }
];
bingoList[11] = [
  { name: "Have at least 30000 caps", types: ["money"] },
  { name: "Kill Gabban", types: ["kill, vulpes"] },
  { name: "Kill Alerio", types: ["kill, vulpes"] },
  { name: "Complete the quest How Little We Know", types: ["quest, strip, byelove"] },
  { name: "Obtain the Chinese Stealth Armor", types: ["items"] },
  { name: "Get Bryce Anders to Camp McCarran alive", types: ["vault3"] },
  { name: "Complete the quest There Stands The Grass", types: ["quest"] },
  { name: "Obtain a Ruby's Casserole", types: ["items, primm"] },
  { name: "Kill the Lakelurk King", types: ["kill"] },
  { name: "Complete the quest Anywhere I Wander", types: ["quest"] }
];
bingoList[12] = [
  { name: "Collect at least 25 Blue Star caps", types: ["star"] },
  { name: "Complete the quest Wheel of Fortune", types: ["quest"] },
  { name: "Turn in the Snuff Tapes to Marie Pappas", types: ["strip"] },
  { name: "Craft a Time Bomb", types: ["crafting"] },
  { name: "Produce 100 units of Homemade Flamer Fuel", types: ["crafting"] },
  { name: "Get banned from the Vikki & Vance Casino", types: ["game, primm"] },
  { name: "Complete the quest Aba Daba Honeymoon", types: ["quest, khan"] },
  { name: "Obtain the Big Boomer", types: ["weapon, novac"] },
  { name: "Return the Missing Laser Pistol", types: ["brotherhood"] },
  { name: "Obtain Ambassador Crocker's Suit", types: ["items, strip"] }
];
bingoList[13] = [
  { name: "Obtain the Brotherhood Elder's robe", types: ["items"] },
  { name: "Obtain the Explorer's gear", types: ["items"] },
  { name: "Max Pvt. Sexton's tally counter", types: ["forlorn"] },
  { name: "Complete the quest The Finger of Suspicion", types: ["items"] },
  { name: "Collect a Wasteland Scout uniform", types: ["items"] },
  { name: "Obtain the All-American", types: ["weapon"] },
  { name: "Obtain 10 Legion Denarius, mangled", types: ["crafting"] },
  { name: "Discover all the Vaults", types: ["location"] },
  { name: "Complete the quest Oh My Papa", types: ["quest, khan"] },
  { name: "Kill the Legendary Cazador", types: ["kill"] }
];
bingoList[14] = [
  { name: "Complete the quest ED-E My Love", types: ["quest"] },
  { name: "Obtain the Pimp-Boy 3 Billion", types: ["items, freeside"] },
  { name: "Cook a Fire ant fricassée", types: ["crafting"] },
  { name: "Brew Moonshine", types: ["crafting"] },
  { name: "Free Silus without killing him", types: ["meme"] },
  { name: "Complete the quest G.I. Blues", types: ["quest, freeside"] },
  { name: "Obtain Sergeant Teddy", types: ["items"] },
  { name: "Obtain the Perk Fast Times", types: ["perk"] },
  { name: "Collect 11 Strip Letters", types: ["notes"] }
];
bingoList[15] = [
  { name: "Collect Euology Jones hat", types: ["items, freeside"] },
  { name: "Obtain the Explorer perk", types: ["perk"] },
  { name: "Complete the quest Talent Pool", types: ["quest, strip"] },
  { name: "Collect a Ranger Sequoia", types: ["weapon"] },
  { name: "Complete the quest We Are Legion", types: ["quest, forlorn"] },
  { name: "Complete the quest Restoring Hope", types: ["quest, forlorn"] },
  { name: "Complete the quest Nothin' But a Hound Dog", types: ["quest"] },
  { name: "Get a discount with Dr. Kemp", types: ["quest"] },
  { name: "Complete the quest I Put a Spell on You", types: ["quest"] }
];
bingoList[16] = [
  { name: "Complete the quest Come Fly With Me", types: ["quest"] },
  { name: "Complete the quest The White Wash", types: ["quest"] },
  { name: "Cook a Cook-Cook's Fiend stew", types: ["crafting"] },
  { name: "Obtain a Party Hat", types: ["items"] },
  { name: "Collect 10 Keys", types: ["items"] },
  { name: "Obtain 2 Acoustic Guitars", types: ["items"] },
  { name: "Collect 10 Chessboards", types: ["items"] },
  { name: "Collect 15 Red Plates", types: ["items"] },
  { name: "Obtain the Automated Solution Response holotape", types: ["items"] },
  { name: "Complete the quest Volare!", types: ["quest"] }
];
bingoList[17] = [
  { name: "Complete the quest I Forgot To Remember To Forget", types: ["quest"] },
  { name: "Complete the quest Someone to Watch Over Me", types: ["quest"] },
  { name: "Permanently raise 3 skills to 100", types: ["skill"] },
  { name: "Craft a Mother Darkness", types: ["crafting"] },
  { name: "Complete all of William Farber's tasks", types: ["meme"] },
  { name: "Complete the quest Heartache by the Number", types: ["quest", "cass"] },
  { name: "Complete the quest Why Can't We Be Friends", types: ["quest"] }
];
bingoList[18] = [
  { name: "Complete the quest No, Not Much", types: ["quest"] },
  { name: "Collect 7 Snow globes", types: ["snow"] },
  { name: "Kill 2 Radscorpion Queens", types: ["kill"] },
  { name: "Collect at least 10 unique weapons", types: ["weapon"] },
  { name: "Collect 10 bottles of Nuka-Cola Quartz", types: ["items"] },
  { name: "Complete the quest Hard Luck Blues", types: ["quest, vault34"] }
];
bingoList[19] = [
  { name: "Obtain the All-Purpose Science Suit", types: ["safehouse"] },
  { name: "Complete the challenge Artful Pocketeer", types: ["challenge"] },
  { name: "Complete the quest Return to Sender", types: ["quest"] },
  { name: "Kill Horowitz", types: ["kill, vault34"] },
  { name: "Acquire the Automatic Surgical Unit", types: ["legion"] },
  { name: "Collect 3 Motorcycle Gas Tanks", types: ["items"] },
  { name: "Complete the quest I Could Make You Care", types: ["quest"] },
  { name: "Collect at least 50 Blue Star caps", types: ["caps"] }
];
bingoList[20] = [
  { name: "Complete the quest Bleed Me Dry", types: ["quest, thorn"] },
  { name: "Win 3 rounds in the Legion Arena", types: ["legion"] },
  { name: "Craft a Tremble", types: ["crafting"] },
  { name: "Collect all Big Book of Science skill books", types: ["items, skillbook"] },
  { name: "Collect all Chinese Army: Special Ops Training Manual skill books", types: ["items, skillbook"] },
  { name: "Collect all D.C. Journal of Internal Medicine skill books", types: ["items, skillbook"] },
  { name: "Collect all Dean's Electronics skill books", types: ["items, skillbook"] },
  { name: "Collect all Duck and Cover! skill books", types: ["items, skillbook"] },
  { name: "Collect all Grognak the Barbarian skill books", types: ["items, skillbook"] },
  { name: "Collect all Guns and Bullets skill books", types: ["items, skillbook"] },
  { name: "Collect all Lying, Congressional Style skill books", types: ["items, skillbook"] },
  { name: "Collect all Nikola Tesla and You skill books", types: ["items, skillbook"] },
  { name: "Collect all Pugilism Illustrated skill books", types: ["items, skillbook, vault11"] },
  { name: "Collect all Tales of a Junktown Jerky Vendor skill books", types: ["items, skillbook"] },
  { name: "Collect all Tumblers Today skill books", types: ["items, skillbook"] },
  { name: "Collect all Wasteland Survival Guide skill books", types: ["items, skillbook"] },
  { name: "Sell Arcade Gannon into slavery", types: ["auld"] },
  { name: "Obtain the Lucky Shades", types: ["safehouse"] },
  { name: "Complete the quest Birds of a Feather", types: ["quest", "cass"] }
];
bingoList[21] = [
  { name: "Unlock the Brotherhood Safehouse", types: ["safehouse"] },
  { name: "Become Idolized with at least 4 factions", types: ["rep"] },
  { name: "Pick up 200 Cigarettes", types: ["items"] },
  { name: "Complete the quest No, Not Much", types: ["quest"] },
  { name: "Have sex with at least 9 different people", types: ["sex"] },
  { name: "Collect 3 different kinds of Dog Brains", types: ["kill"] },
  { name: "Kill Paladin Todd", types: ["kill"] },
  { name: "Craft a Dog Tag Fist", types: ["crafting"] }
];
bingoList[22] = [
  { name: "Get banned from all strip casinos", types: ["game"] },
  { name: "Complete the A Little Critical challenge", types: ["challenge"] },
  { name: "Complete the Tough Guy challenge", types: ["challenge"] },
  { name: "Collect a full set of T-51b Power Armor", types: ["items"] },
  { name: "Collect at least 100 Blue Star caps", types: ["caps"] },
  { name: "Collect at least 15 Unique Weapons", types: ["weapon"] }
];
bingoList[23] = [
  { name: "Obtain the Beautiful Beatdown perk", types: ["challenge"] },
  { name: "Complete the quest For Auld Lang Syne", types: ["quest, auld"] },
  { name: "Collect at least 20 Unique Weapons", types: ["weapon"] },
  { name: "Collect a Shishkebab", types: ["weapon"] },
  { name: "Obtain the Slayer perk", types: ["perk"] },
  { name: "Collect 3 Wood Chippers", types: ["items, wood"] },
  { name: "Collect 10 bottles of Nuka-Cola Victory", types: ["items"] }
];
bingoList[24] = [
  { name: "Complete the quest Arizona Killer", types: ["quest", "president"] },
  { name: "Complete the quest You'll Know It When It Happens", types: ["quest", "president"] },
  { name: "Kill all companions", types: ["companion, kill"] },
  { name: "Collect 10 Basketballs", types: ["items"] },
  { name: "Obtain the Friendly Help perk", types: ["challenge"] },
  { name: "Complete the All Things in Modder Nation challenge once", types: ["challenge"] },
  { name: "Obtain General Oliver's Uniform", types: ["ending"] },
  { name: "Obtain the Blade of the East", types: ["weapon", "ending"] }
];
bingoList[25] = [
  { name: "Complete the Lord Death challenge", types: ["challenge"] },
  { name: "Discover at least 100 locations", types: ["location"] },
  { name: "Defeat 3 Deathclaws in a Thorn arena match", types: ["thorn"] },
  { name: "Complete the At a Loss for Words challenge", types: ["challenge"] },
  { name: "Solve Sloan's Deathclaw problem (Claws Out unmarked quest)", types: ["quest, sloan"] },
  { name: "Complete the Healthy Glow challenge", types: ["challenge"] },
  { name: "Complete the quest Veni, Vidi, Vici", types: ["ending"] },
  { name: "Obtain the Meat of Champions perk", types: ["perk, challenge"] },
  { name: "Unlock the NCR Safehouse", types: ["safehouse"] }
];
