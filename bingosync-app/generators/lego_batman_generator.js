var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "You Can Bank on Batman - Super Hero", types: ["SH"] },
  { name: "There She Goes Again - Super Hero", types: ["SH"] },
  { name: "Joker's Home Turf - Super Hero", types: ["SH"] },
  { name: "Complete a level with Zero Studs", types: ["Challenge"] },
  { name: "Buy 10 Data", types: ["Buy"] },
  { name: "Complete a level with Silhouettes/Disguises", types: ["Challenge"] },
];
bingoList[2] = [
  { name: "You Can Bank on Batman - Red Brick", types: ["Upgrade"] },
  { name: "There She Goes Again - Hostage", types: ["Hostage"] },
  { name: "There She Goes Again - No Gliding", types: ["Challenge"] },
  { name: "Joker's Home Turf - 5+ Minikits", types: ["5MK"] },
  { name: "Complete a level using 1P2C", types: ["Challenge"] },
  { name: "Collect 1 Million Studs", types: ["Challenge","CollectXThings"] },
  { name: "In the Dark Night - No Wall Jumping", types: ["Challenge"] },
];
bingoList[3] = [
  { name: "You Can Bank on Batman - Hostage", types: ["Hostage"] },
  { name: "Little Fun at the Big Top - Hostage", types: ["Hostage"] },
  { name: "Complete a level with Ice Rink", types: ["Challenge"] },
  { name: "Batboat Battle - 5+ Minikits", types: ["5MK"] },
  { name: "Two-Face Chase - Red Brick", types: ["Upgrade"] },
  { name: "An Icy Reception - Super Hero", types: ["SH"] },
  { name: "Joker's Home Turf - No Out of Bounds", types: ["Challenge"] },
];
bingoList[4] = [
  { name: "Ride 3 Stud Rides", types: ["Challenge"] },
  { name: "Batboat Battle - Super Hero", types: ["SH"] },
  { name: "Little Fun at the Big Top - Super Hero", types: ["SH"] },
  { name: "Under the City - Hostage", types: ["Hostage"] },
  { name: "Stealing the Show - 1 Character", types: ["Challenge"] },
  { name: "Two-Face Chase - Super Hero", types: ["SH"] },
  { name: "Penguin's Lair - No Glide Suit", types: ["Challenge"] },
];
bingoList[5] = [
  { name: "An Icy Reception - Robin Only", types: ["Challenge"] },
  { name: "Two-Face Chase - 5+ Minikits", types: ["5MK"] },
  { name: "Under the City - 5+ Minikits", types: ["5MK"] },
  { name: "Joker's Home Turf - Red Brick", types: ["Upgrade"] },
  { name: "Flight of the Bat - Super Hero", types: ["SH"] },
  { name: "Little Fun at the Big Top - Red Brick", types: ["Upgrade"] },
  { name: "To the Top of the Tower - No Wall Jumping", types: ["Challenge"] },
];
bingoList[6] = [
  { name: "Under the City - Super Hero", types: ["SH"] },
  { name: "Flight of the Bat - 5+ Minikits", types: ["5MK"] },
  { name: "An Icy Reception - Hostage", types: ["Hostage"] },
  { name: "A Poisonous Appointment - Hostage", types: ["Hostage"] },
  { name: "Zoo's Company - Hostage", types: ["Hostage"] },
  { name: "In the Dark Night - Hostage", types: ["Hostage"] },
  { name: "The Riddler Makes a Withdrawal - No Wall Jumping", types: ["Challenge"] },
];
bingoList[7] = [
  { name: "15 Minikits", types: ["MK","CollectXThings"] },
  { name: "A Poisonous Appointment - Super Hero", types: ["SH"] },
  { name: "Zoo's Company - Super Hero", types: ["SH"] },
  { name: "In the Dark Night - Super Hero", types: ["SH"] },
  { name: "You Can Bank on Batman - 5+ Minikits", types: ["5MK"] },
  { name: "An Icy Reception - 5+ Minikits", types: ["5MK"] },
  { name: "Under the City - No Room 3 Gliding", types: ["Challenge"] },
];
bingoList[8] = [
  { name: "Little Fun at the Big Top - 5+ Minikits", types: ["5MK"] },
  { name: "Double Vacuum Deposit", types: ["Challenge"] },
  { name: "Under the City - Red Brick", types: ["Upgrade"] },
  { name: "Zoo's Company - Red Brick", types: ["Upgrade"] },
  { name: "The Face Off - Hostage", types: ["Hostage"] },
  { name: "Penguin's Lair - Hostage", types: ["Hostage"] },
  { name: "To the Top of the Tower - Hostage", types: ["Hostage"] },
];
bingoList[9] = [
  { name: "4 Hostages", types: ["Hostage","CollectXThings"] },
  { name: "5 Super Hero/Villains", types: ["SHV","CollectXThings"] },
  { name: "Buy 5 Vehicles", types: ["Buy","Character"] },
  { name: "Buy Batgirl and Nightwing", types: ["Buy","Character"] },
  { name: "Penguin's Lair - 5+ Minikits", types: ["5MK"] },
  { name: "To the Top of the Tower - 5+ Minikits", types: ["5MK"] },
  { name: "Custom Character Free Play", types: ["Challenge"] },
];
bingoList[10] = [
  { name: "Riddler's Revenge - Hero Story", types: ["Episode"] },
  { name: "Power Crazed Penguin - Hero Story", types: ["Episode"] },
  { name: "The Joker's Return - Hero Story", types: ["Episode"] },
  { name: "There She Goes Again - Red Brick", types: ["Upgrade"] },
  { name: "The Face Off - Super Hero", types: ["SH"] },
  { name: "Penguin's Lair - Super Hero", types: ["SH"] },
  { name: "To the Top of the Tower - Super Hero", types: ["SH"] },
];
bingoList[11] = [
  { name: "A Poisonous Appointment - 5+ Minikits", types: ["5MK"] },
  { name: "The Face Off - 5+ Minikits", types: ["5MK"] },
  { name: "There She Goes Again - 5+ Minikits", types: ["5MK"] },
  { name: "Zoo's Company - 5+ Minikits", types: ["5MK"] },
  { name: "In the Dark Night - 5+ Minikits", types: ["5MK"] },
  { name: "Hero Story", types: ["Episode"] },
  { name: "The Riddler Makes a Withdrawal - Hostage", types: ["Hostage"] },
];
bingoList[12] = [
  { name: "In the Dark Night - Red Brick", types: ["Upgrade"] },
  { name: "Penguin's Lair - Red Brick", types: ["Upgrade"] },
  { name: "A Surprise for the Commissioner - Red Brick", types: ["Upgrade"] },
  { name: "The Riddler Makes a Withdrawal - 5+ Minikits", types: ["5MK"] },
  { name: "Rockin' the Docks - 5+ Minikits", types: ["5MK"] },
  { name: "Stealing the Show - Hostage", types: ["Hostage"] },
  { name: "A Surprise for the Commissioner - 5+ Minikits", types: ["5MK"] },
];
bingoList[13] = [
  { name: "Buy Commissioner Gordon and Alfred", types: ["Buy","Character"] },
  { name: "The Riddler Makes a Withdrawal - Super Villain", types: ["SV"] },
  { name: "Rockin' the Docks - Super Villain", types: ["SV"] },
  { name: "A Surprise for the Commissioner - Super Villain", types: ["SV"] },
  { name: "To the Top of the Tower - 10 Minikits", types: ["10MK"] },
  { name: "The Riddler Makes a Withdrawal - Red Brick", types: ["Extra"] },
  { name: "Stealing the Show - Red Brick", types: ["Extra"] },
];
bingoList[14] = [
  { name: "The Face Off - 10 Minikits", types: ["10MK"] },
  { name: "To the Top of the Tower - No Magnet Suit", types: ["Challenge"] },
  { name: "Joker's Home Turf - Hostage", types: ["Hostage"] },
  { name: "Rockin' the Docks - Hostage", types: ["Hostage"] },
  { name: "Bi-Plane Blast - Red Brick", types: ["Extra"] },
  { name: "Stealing the Show - 5+ Minikits", types: ["5MK"] },
  { name: "Buy 4 Suit Upgrades", types: ["Upgrade","Buy"] },
  { name: "An Icy Reception - Red Brick", types: ["Extra"] },
];
bingoList[15] = [
  { name: "A Surprise for the Commissioner - Hostage", types: ["Hostage"] },
  { name: "Rockin' the Docks - Red Brick", types: ["Extra"] },
  { name: "Bi-Plane Blast - Super Villain", types: ["SV"] },
  { name: "On the Rocks - Super Villain", types: ["SV"] },
  { name: "Stealing the Show - Super Villain", types: ["SV"] },
  { name: "30 Minikits", types: ["MK","CollectXThings"] },
  { name: "Buy Bat-Tank and Robin's Submarine", types: ["Buy","Character"] },
];
bingoList[16] = [
  { name: "Collect All Suits", types: ["Challenge","CollectXThings"] },
  { name: "Bi-Plane Blast - 5+ Minikits", types: ["5MK"] },
  { name: "The Riddler Makes a Withdrawal - 10 Minikits", types: ["10MK"] },
  { name: "Flight of the Bat - Red Brick", types: ["Extra"] },
  { name: "On the Rocks - 5+ Minikits", types: ["5MK"] },
  { name: "Harboring a Grudge - 5+ Minikits", types: ["5MK"] },
];
bingoList[17] = [
  { name: "Buy Bruce Wayne and Private Jet", types: ["Buy","Character"] },
  { name: "The Face Off - Red Brick", types: ["Upgrade"] },
  { name: "Green Fingers - Super Villain", types: ["SHV"] },
  { name: "Harboring a Grudge - Super Villain", types: ["SV"] },
  { name: "The Joker's Masterpiece - Super Villain", types: ["SV"] },
  { name: "On the Rocks - Hostage", types: ["Hostage"] },
  { name: "Buy All Goons", types: ["Buy","Character"] },
  { name: "You Can Bank on Batman - 10 Minikits", types: ["10MK"] },
];
bingoList[18] = [
  { name: "On the Rocks - Red Brick", types: ["Extra"] },
  { name: "There She Goes Again - 10 Minikits", types: ["10MK"] },
  { name: "Batboat Battle - 10 Minikits", types: ["10MK"] },
  { name: "Under the City - 10 Minikits", types: ["10MK"] },
  { name: "Zoo's Company - 10 Minikits", types: ["10MK"] },
  { name: "Green Fingers - Red Brick", types: ["Extra"] },
  { name: "Harboring a Grudge - Red Brick", types: ["Extra"] },
  { name: "The Joker's Masterpiece - Red Brick", types: ["Extra"] },
];
bingoList[19] = [
  { name: "Flight of the Bat - 10 Minikits", types: ["10MK"] },
  { name: "On the Rocks - 10 Minikits", types: ["10MK"] },
  { name: "Stealing the Show - 10 Minikits", types: ["10MK"] },
  { name: "Bi-Plane Blast - 10 Minikits", types: ["10MK"] },
  { name: "The Lure of the Night - Red Brick", types: ["Extra"] },
  { name: "Green Fingers - Hostage", types: ["Hostage"] },
  { name: "The Joker's Masterpiece - Hostage", types: ["Hostage"] },
  { name: "An Enterprising Theft - Hostage", types: ["Hostage"] },
];
bingoList[20] = [
  { name: "Batboat Battle - Red Brick", types: ["Upgrade"] },
  { name: "An Enterprising Theft - Super Villain", types: ["SV"] },
  { name: "A Daring Rescue - Super Villain", types: ["SV"] },
  { name: "The Lure of the Night - Super Villain", types: ["SV"] },
  { name: "Green Fingers - 5+ Minikits", types: ["5MK"] },
  { name: "A Daring Rescue - 5+ Minikits", types: ["5MK"] },
  { name: "The Joker's Masterpiece - 5+ Minikits", types: ["5MK"] },
  { name: "An Icy Reception - 10 Minikits", types: ["10MK"] },
  { name: "In the Dark Night - 10 Minikits", types: ["10MK"] },
  { name: "Green Fingers - 10 Minikits", types: ["10MK"] },
  { name: "Harboring a Grudge - 10 Minikits", types: ["10MK"] },
];
bingoList[21] = [
  { name: "An Enterprising Theft - Red Brick", types: ["Extra"] },
  { name: "Arctic World - Hostage", types: ["Hostage"] },
  { name: "The Lure of the Night - Hostage", types: ["Hostage"] },
  { name: "Dying of Laughter - Hostage", types: ["Hostage"] },
  { name: "A Poisonous Appointment - Red Brick", types: ["Upgrade"] },
  { name: "To the Top of the Tower - Red Brick", types: ["Upgrade"] },
  { name: "A Daring Rescue - Red Brick", types: ["Extra"] },
  { name: "Breaking Blocks - Super Villain", types: ["SV"] },
  { name: "Arctic World - Super Villain", types: ["SV"] },
  { name: "Dying of Laughter - Super Villain", types: ["SV"] },
  { name: "5 Red Bricks", types: ["RB","CollectXThings"] },
];
bingoList[22] = [
  { name: "An Enterprising Theft - 5+ Minikits", types: ["5MK"] },
  { name: "The Lure of the Night - 5+ Minikits", types: ["5MK"] },
  { name: "Hero Free Play", types: ["Episode"] },
  { name: "Riddler's Revenge - Villain Story", types: ["Episode"] },
  { name: "Power Crazed Penguin - Villain Story", types: ["Episode"] },
  { name: "The Joker's Return - Villain Story", types: ["Episode"] },
  { name: "Two-Face Chase - 10 Minikits", types: ["10MK"] },
  { name: "A Poisonous Appointment - 10 Minikits", types: ["10MK"] },
  { name: "An Enterprising Theft - 10 Minikits", types: ["10MK"] },
  { name: "Breaking Blocks - Red Brick", types: ["Extra"] },
  { name: "45 Minikits", types: ["MK","CollectXThings"] },
];
bingoList[23] = [
  { name: "10 Super Hero/Villains", types: ["SHV","CollectXThings"] },
  { name: "Villain Story", types: ["Episode"] },
  { name: "Arctic World - Red Brick", types: ["Extra"] },
  { name: "Breaking Blocks - Hostage", types: ["Hostage"] },
  { name: "Buy 4 Red Bricks", types: ["RB","Buy"] },
  { name: "3 Vehicle Levels Free Play", types: ["Challenge"] },
  { name: "Dying of Laughter - Red Brick", types: ["Extra"] },
  { name: "8 Hostages", types: ["Hostage","CollectXThings"] },
  { name: "Breaking Blocks - 5+ Minikits", types: ["5MK"] },
  { name: "Arctic World - 5+ Minikits", types: ["5MK"] },
  { name: "Dying of Laughter - 5+ Minikits", types: ["5MK"] },
];
bingoList[24] = [
  { name: "Penguin's Lair - 10 Minikits", types: ["10MK"] },
  { name: "Joker's Home Turf - 10 Minikits", types: ["10MK"] },
  { name: "Little Fun at the Big Top - 10 Minikits", types: ["10MK"] },
  { name: "Breaking Blocks - 10 Minikits", types: ["10MK"] },
  { name: "Buy All Villains", types: ["Buy","Character"] },
  { name: "Rockin' the Docks - 10 Minikits", types: ["10MK"] },
  { name: "Buy 8 Suit Upgrades", types: ["Upgrade","Buy"] },
  { name: "A Surprise for the Commissioner - 10 Minikits", types: ["10MK"] },
  { name: "The Lure of the Night - 10 Minikits", types: ["10MK"] },
  { name: "A Daring Rescue - Hostage", types: ["Hostage"] },
  { name: "Villain Free Play", types: ["Episode"] },
];
bingoList[25] = [
  { name: "The Joker's Masterpiece - 10 Minikits", types: ["10MK"] },
  { name: "15 Super Hero/Villains", types: ["SHV","CollectXThings"] },
  { name: "12 Hostages", types: ["Hostage","CollectXThings"] },
  { name: "Bonus Level", types: ["SHV"] },
  { name: "Dying of Laughter - 10 Minikits", types: ["10MK"] },
  { name: "10 Red Bricks", types: ["RB","CollectXThings"] },
  { name: "A Daring Rescue - 10 Minikits", types: ["10MK"] },
  { name: "Buy All Law Enforcement Characters", types: ["Buy","Character"] },
  { name: "Buy 8 Red Bricks", types: ["RB","Buy"] },
  { name: "Arctic World - 10 Minikits", types: ["10MK"] },
  { name: "15 Red Bricks", types: ["RB","CollectXThings"] },
];
