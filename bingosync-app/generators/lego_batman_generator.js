var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Hero Episode - Story", types: [] },
  { name: "Buy 10 Data", types: [] },
  { name: "Joker's Home Turf - 30k Studs", types: [] },
  { name: "There She Goes Again - 3+ Minikits", types: [] },
  { name: "You Can Bank on Batman - 20k Studs", types: [] },
  { name: "Collect 10 Minikits", types: [] },
  { name: "1 Story Level with Zero Studs", types: [] },
  { name: "1 Story Level using 1P2C", types: [] },
];
bingoList[2] = [
  { name: "Joker's Home Turf - 6+ Minikits", types: [] },
  { name: "There She Goes Again - 40k Studs", types: [] },
  { name: "You Can Bank on Batman - 3+ Minikits", types: [] },
  { name: "2 Super Hero/Villains", types: [] },
  { name: "An Icy Reception - Robin Only", types: [] },
  { name: "Little Fun at the Big Top - 4+ Minikits", types: [] },
  { name: "Stealing the Show - 1 Character", types: [] },
  { name: "Collect 15 Minikits", types: [] },
];
bingoList[3] = [
  { name: "There She Goes Again - Hostage", types: [] },
  { name: "You Can Bank on Batman - Red Brick", types: [] },
  { name: "An Icy Reception - 3+ Minikits", types: [] },
  { name: "3 Hostages", types: [] },
  { name: "Batboat Battle - 15k Studs", types: [] },
  { name: "Little Fun at the Big Top - 30k Studs", types: [] },
  { name: "Flight of the Bat - 15k Studs", types: [] },
  { name: "Two-Face Chase - No Drop In Warps", types: [] },
];
bingoList[4] = [
  { name: "1 Story Level with Ice Rink", types: [] },
  { name: "Joker's Home Turf - Red Brick", types: [] },
  { name: "You Can Bank on Batman - Hostage", types: [] },
  { name: "There She Goes Again - No Gliding", types: [] },
  { name: "An Icy Reception - 30k Studs", types: [] },
  { name: "Batboat Battle - 5+ Minikits", types: [] },
  { name: "Little Fun at the Big Top - Hostage", types: [] },
  { name: "Flight of the Bat - 7+ Minikits", types: [] },
  { name: "Two-Face Chase - 30k Studs", types: [] },
];
bingoList[5] = [
  { name: "1 Story Level with Silhouettes/ Disguises", types: [] },
  { name: "Little Fun at the Big Top - No Candy Cane Jump", types: [] },
  { name: "Two-Face Chase - 7+ Minikits", types: [] },
  { name: "Under the City - 5+ Minikits", types: [] },
  { name: "Collect 3 Red Bricks", types: [] },
  { name: "4 Super Hero/Villains", types: [] },
  { name: "A Poisonous Appointment - 40k Studs", types: [] },
  { name: "An Icy Reception - Hostage", types: [] },
  { name: "Double Vacuum Deposit", types: [] },
];
bingoList[6] = [
  { name: "Collect 20 Minikits", types: [] },
  { name: "Two-Face Chase - Red Brick", types: [] },
  { name: "Under the City - Hostage", types: [] },
  { name: "A Poisonous Appointment - 5+ Minikits", types: [] },
  { name: "In the Dark Night - 2+ Minikits", types: [] },
  { name: "Little Fun at the Big Top - Red Brick", types: [] },
  { name: "Buy 4 Suit Upgrades", types: [] },
  { name: "3 Story Levels with Ice Rink", types: [] },
  { name: "Zoo's Company - 30k Studs", types: [] },
];
bingoList[7] = [
  { name: "Buy Robin's Submarine and Penguin Goon Submarine", types: [] },
  { name: "Under the City - No Room 3 Gliding", types: [] },
  { name: "A Poisonous Appointment - Hostage", types: [] },
  { name: "In the Dark Night - 35k Studs", types: [] },
  { name: "Buy All Police Road Vehicles", types: [] },
  { name: "Buy Batgirl and Nightwing", types: [] },
  { name: "Zoo's Company - 7+ Minikits", types: [] },
  { name: "There She Goes Again - Red Brick", types: [] },
  { name: "Penguin's Lair - 15k Studs", types: [] },
];
bingoList[8] = [
  { name: "In the Dark Night - Hostage", types: [] },
  { name: "Riddler's Revenge - Hero Story", types: [] },
  { name: "Zoo's Company - Hostage", types: [] },
  { name: "Power Crazed Penguin - Hero Story", types: [] },
  { name: "Penguin's Lair - 6+ Minikits", types: [] },
  { name: "The Face Off - 10 Minikits", types: [] },
  { name: "The Joker's Return - Hero Story", types: [] },
  { name: "To the Top of the Tower - 40k Studs", types: [] },
  { name: "Under the City - Red Brick", types: [] },
];
bingoList[9] = [
  { name: "Buy 3 Law Enforcement Characters", types: [] },
  { name: "In the Dark Night - No Wall Jumping", types: [] },
  { name: "Zoo's Company - No Bench Jump", types: [] },
  { name: "Penguin's Lair - Hostage", types: [] },
  { name: "The Face Off - 30k Studs", types: [] },
  { name: "To the Top of the Tower - 7+ Minikits", types: [] },
  { name: "A Surprise for the Commissioner - 30k Studs", types: [] },
  { name: "Buy Commissioner Gordon and Alfred", types: [] },
  { name: "Custom Character Free Play", types: [] },
];
bingoList[10] = [
  { name: "Buy 2 Suit Upgrades", types: [] },
  { name: "3 Story Levels with Silhouettes/ Disguises", types: [] },
  { name: "In the Dark Night - Red Brick", types: [] },
  { name: "Zoo's Company - No Turtle Skip", types: [] },
  { name: "Penguin's Lair - No Glide Suit", types: [] },
  { name: "The Face Off - 7+ Minikits", types: [] },
  { name: "To the Top of the Tower - Hostage", types: [] },
  { name: "A Surprise for the Commissioner - 6+ Minikits", types: [] },
  { name: "Rockin' the Docks - 6+ Minikits", types: [] },
];
bingoList[11] = [
  { name: "The Face Off - Hostage", types: [] },
  { name: "To the Top of the Tower - No Magnet Suit", types: [] },
  { name: "Penguin's Lair - Red Brick", types: [] },
  { name: "A Surprise for the Commissioner - Red Brick", types: [] },
  { name: "The Riddler Makes a Withdrawal - 30k Studs", types: [] },
  { name: "An Icy Reception - Red Brick", types: [] },
  { name: "Rockin' the Docks - Super Villain", types: [] },
  { name: "Bi-Plane Blast - 15k Studs", types: [] },
  { name: "Ride 3 Stud Rides", types: [] },
];
bingoList[12] = [
  { name: "To the Top of the Tower - No Wall Jumping", types: [] },
  { name: "The Riddler Makes a Withdrawal - 7+ Minikits", types: [] },
  { name: "A Surprise for the Commissioner - Hostage", types: [] },
  { name: "Bi-Plane Blast - 4+ Minikits", types: [] },
  { name: "Joker's Home Turf - Hostage", types: [] },
  { name: "On the Rocks - 30k Studs", types: [] },
  { name: "Buy 2 Villain Red Bricks", types: [] },
  { name: "Collect All Suits", types: [] },
  { name: "The Face Off - No Drop In Warps", types: [] },
];
bingoList[13] = [
  { name: "To the Top of the Tower - 10 Minikits", types: [] },
  { name: "The Riddler Makes a Withdrawal - Hostage", types: [] },
  { name: "Bi-Plane Blast - Red Brick", types: [] },
  { name: "On the Rocks - 5+ Minikits", types: [] },
  { name: "Rockin' the Docks - Hostage", types: [] },
  { name: "Stealing the Show - 7+ Minikits", types: [] },
  { name: "Collect 5 Red Bricks", types: [] },
  { name: "Batboat Battle - 10 Minikits", types: [] },
];
bingoList[14] = [
  { name: "The Riddler Makes a Withdrawal - No Wall Jumping", types: [] },
  { name: "On the Rocks - Red Brick", types: [] },
  { name: "Stealing the Show - Red Brick", types: [] },
  { name: "Bi-Plane Blast - 10 Minikits", types: [] },
  { name: "Buy Bruce Wayne and Private Jet", types: [] },
  { name: "Flight of the Bat - 10 Minikits", types: [] },
  { name: "Grow 3 Poison Ivy Plants", types: [] },
  { name: "Collect 1 Million Studs", types: [] },
];
bingoList[15] = [
  { name: "On the Rocks - Hostage", types: [] },
  { name: "Rockin' the Docks - Red Brick", types: [] },
  { name: "Stealing the Show - Hostage", types: [] },
  { name: "The Riddler Makes a Withdrawal - 10 Minikits", types: [] },
  { name: "Green Fingers - 3+ Minikits", types: [] },
  { name: "Harboring a Grudge - 15k Studs", types: [] },
  { name: "Zoo's Company - Red Brick", types: [] },
  { name: "A Daring Rescue - Hostage", types: [] },
];
bingoList[16] = [
  { name: "The Riddler Makes a Withdrawal - Red Brick", types: [] },
  { name: "Stealing the Show - Super Villain", types: [] },
  { name: "Flight of the Bat - Red Brick", types: [] },
  { name: "Green Fingers - 40k Studs", types: [] },
  { name: "Harboring a Grudge - 7+ Minikits", types: [] },
  { name: "The Face Off - Red Brick", types: [] },
  { name: "The Joker's Masterpiece - 4+ Minikits", types: [] },
  { name: "Joker's Home Turf - No Room 2/3 Gliding", types: [] },
];
bingoList[17] = [
  { name: "Stealing the Show - 10 Minikits", types: [] },
  { name: "Harboring a Grudge - Red Brick", types: [] },
  { name: "The Joker's Masterpiece - 40k Studs", types: [] },
  { name: "In the Dark Night - 10 Minikits", types: [] },
  { name: "There She Goes Again - 10 Minikits", types: [] },
  { name: "Under the City - 10 Minikits", types: [] },
  { name: "You Can Bank on Batman - 10 Minikits", types: [] },
  { name: "Zoo's Company - 10 Minikits", types: [] },
  { name: "Buy Slam and Fast Build", types: [] },
];
bingoList[18] = [
  { name: "A Daring Rescue - 5+ Minikits", types: [] },
  { name: "The Lure of the Night - Red Brick", types: [] },
  { name: "An Enterprising Theft - 3+ Minikits", types: [] },
  { name: "Green Fingers - Hostage", types: [] },
  { name: "The Joker's Masterpiece - Hostage", types: [] },
  { name: "A Poisonous Appointment - 10 Minikits", types: [] },
  { name: "3 Story Levels with 1P2C", types: [] },
];
bingoList[19] = [
  { name: "Green Fingers - Red Brick", types: [] },
  { name: "The Joker's Masterpiece - Red Brick", types: [] },
  { name: "The Lure of the Night - 3+ Minikits", types: [] },
  { name: "An Enterprising Theft - 10 Minikits", types: [] },
  { name: "Arctic World - 20k Studs", types: [] },
  { name: "Breaking Blocks - 2+ Minikits", types: [] },
  { name: "A Daring Rescue - No Room 1 Skip", types: [] },
  { name: "3 Story Levels with Zero Studs", types: [] },
];
bingoList[20] = [
  { name: "The Lure of the Night - 40k Studs", types: [] },
  { name: "A Daring Rescue - Red Brick", types: [] },
  { name: "An Enterprising Theft - Hostage", types: [] },
  { name: "Arctic World - 2+ Minikits", types: [] },
  { name: "Dying of Laughter - Red Brick", types: [] },
  { name: "Breaking Blocks - 30k Studs", types: [] },
  { name: "Buy 3 Villain Red Bricks", types: [] },
  { name: "Buy 5 Goons/Henchmen", types: [] },
];
bingoList[21] = [
  { name: "An Enterprising Theft - Red Brick", types: [] },
  { name: "Arctic World - Red Brick", types: [] },
  { name: "Dying of Laughter - 5+ Minikits", types: [] },
  { name: "Power Crazed Penguin - Villain Story", types: [] },
  { name: "Riddler's Revenge - Villain Story", types: [] },
  { name: "Joker's Home Turf - No Vacuum Skip", types: [] },
  { name: "Collect 500k Studs", types: [] },
  { name: "On the Rocks - 10 Minikits", types: [] },
];
bingoList[22] = [
  { name: "Buy 3 Goons", types: [] },
  { name: "Dying of Laughter - Hostage", types: [] },
  { name: "Breaking Blocks - 10 Minikits", types: [] },
  { name: "The Joker's Return - Villain Story", types: [] },
  { name: "The Lure of the Night - Hostage", types: [] },
  { name: "To the Top of the Tower - Red Brick", types: [] },
  { name: "Under the City - Out of Bounds Minikit", types: [] },
];
bingoList[23] = [
  { name: "6 Hostages", types: [] },
  { name: "Two-Face Chase - 10 Minikits", types: [] },
  { name: "Villain Episode - Story", types: [] },
  { name: "Breaking Blocks - Hostage", types: [] },
  { name: "3 Vehicle Levels Free Play", types: [] },
  { name: "A Poisonous Appointment - Red Brick", types: [] },
  { name: "Buy 2 Villains", types: [] },
  { name: "In the Dark Night - No Disco Skip", types: [] },
];
bingoList[24] = [
  { name: "Arctic World - Hostage", types: [] },
  { name: "Breaking Blocks - Red Brick", types: [] },
  { name: "Dying of Laughter - 40k Studs", types: [] },
  { name: "Joker's Home Turf - 10 Minikits", types: [] },
  { name: "Little Fun at the Big Top - 10 Minikits", types: [] },
  { name: "Penguin's Lair - 10 Minikits", types: [] },
  { name: "Under the City - Super Hero", types: [] },
  { name: "Collect 25 Minikits", types: [] },
];
bingoList[25] = [
  { name: "A Daring Rescue - 30k Studs", types: [] },
  { name: "An Enterprising Theft - 25k Studs", types: [] },
  { name: "An Icy Reception - 10 Minikits", types: [] },
  { name: "Batboat Battle - Red Brick", types: [] },
  { name: "Green Fingers - 10 Minikits", types: [] },
  { name: "Harboring a Grudge - 10 Minikits", types: [] },
  { name: "Arctic World - No Drop In Warps", types: [] },
];
