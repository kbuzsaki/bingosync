var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Hero Episode - Story", types: [] },
  { name: "Buy 10 Data", types: [] },
  { name: "3-1 - 30k Studs", types: [] },
  { name: "2-1 - 3+ Minikits", types: [] },
  { name: "1-1 - 20k Studs", types: [] },
  { name: "Collect 10 Minikits", types: [] },
  { name: "1 Story Level with Zero Studs", types: [] },
  { name: "1 Story Level using 1P2C", types: [] },
  { name: "Watch 3 Cutscenes", types: [] },
];
bingoList[2] = [
  { name: "3-1 - 6+ Minikits", types: [] },
  { name: "3-1 - 4+ Story Minikits", types: [] },
  { name: "2-1 - 40k Studs", types: [] },
  { name: "1-1 - 3+ Minikits", types: [] },
  { name: "2 Super Statuses", types: [] },
  { name: "1-2 - Robin Only", types: [] },
  { name: "3-2 - 4+ Minikits", types: [] },
  { name: "5-2 - 1 Character", types: [] },
  { name: "Collect 15 Minikits", types: [] },
];
bingoList[3] = [
  { name: "2-1 - Hostage", types: [] },
  { name: "1-1 - Red Brick", types: [] },
  { name: "1-2 - 3+ Minikits", types: [] },
  { name: "3 Hostages", types: [] },
  { name: "2-2 - 15k Studs", types: [] },
  { name: "3-2 - 30k Studs", types: [] },
  { name: "3-3 - 15k Studs", types: [] },
  { name: "1-3 - No Drop In Warps", types: [] },
  { name: "2-3 - No Room 1 Out of Bounds", types: [] },
];
bingoList[4] = [
  { name: "1 Story Level with Ice Rink", types: [] },
  { name: "3-1 - Red Brick", types: [] },
  { name: "1-1 - Hostage", types: [] },
  { name: "2-1 - No Gliding", types: [] },
  { name: "1-2 - 40k Studs", types: [] },
  { name: "2-2 - 5+ Minikits", types: [] },
  { name: "3-2 - Hostage", types: [] },
  { name: "3-3 - 7+ Minikits", types: [] },
  { name: "1-3 - 30k Studs", types: [] },
];
bingoList[5] = [
  { name: "1 Story Level with Silhouettes/ Disguises", types: [] },
  { name: "3-2 - No Candy Cane Jump", types: [] },
  { name: "1-3 - 7+ Minikits", types: [] },
  { name: "2-3 - 5+ Minikits", types: [] },
  { name: "2-4 - No Turtle Skip", types: [] },
  { name: "Collect 3 Red Bricks", types: [] },
  { name: "4 Super Statuses", types: [] },
  { name: "1-4 - 40k Studs", types: [] },
  { name: "1-2 - Hostage", types: [] },
  { name: "Double Vacuum Deposit", types: [] },
];
bingoList[6] = [
  { name: "Collect 20 Minikits", types: [] },
  { name: "1-3 - Red Brick", types: [] },
  { name: "2-3 - Hostage", types: [] },
  { name: "1-4 - 5+ Minikits", types: [] },
  { name: "3-4 - 2+ Minikits", types: [] },
  { name: "3-2 - Red Brick", types: [] },
  { name: "Buy 4 Suit Upgrades", types: [] },
  { name: "3 Story Levels with Ice Rink", types: [] },
  { name: "2-4 - 30k Studs", types: [] },
];
bingoList[7] = [
  { name: "Buy Robin's Submarine", types: [] },
  { name: "2-3 - No Room 3 Gliding", types: [] },
  { name: "1-4 - Hostage", types: [] },
  { name: "3-4 - 35k Studs", types: [] },
  { name: "Buy All Police Road Vehicles", types: [] },
  { name: "Buy Batgirl and Nightwing", types: [] },
  { name: "2-4 - 5+ Minikits", types: [] },
  { name: "2-1 - Red Brick", types: [] },
  { name: "2-5 - 15k Studs", types: [] },
];
bingoList[8] = [
  { name: "3-4 - Hostage", types: [] },
  { name: "Episode 1 Story", types: [] },
  { name: "2-4 - Hostage", types: [] },
  { name: "Episode 2 Story", types: [] },
  { name: "2-5 - 6+ Minikits", types: [] },
  { name: "2-5 - 4+ Story Minikits", types: [] },
  { name: "1-5 - 10 Minikits", types: [] },
  { name: "Episode 3 Story", types: [] },
  { name: "3-5 - 40k Studs", types: [] },
  { name: "2-3 - Red Brick", types: [] },
];
bingoList[9] = [
  { name: "Buy 3 Law Enforcement Characters", types: [] },
  { name: "3-4 - No Wall Jumping", types: [] },
  { name: "2-4 - No Bench Jump", types: [] },
  { name: "2-5 - Hostage", types: [] },
  { name: "1-5 - 40k Studs", types: [] },
  { name: "3-5 - 7+ Minikits", types: [] },
  { name: "3-5 - 5+ Story Minikits", types: [] },
  { name: "6-1 - 30k Studs", types: [] },
  { name: "Buy Commissioner Gordon and Alfred", types: [] },
  { name: "Custom Character Free Play", types: [] },
];
bingoList[10] = [
  { name: "3-4 - Red Brick", types: [] },
  { name: "2-5 - No Glide Suit", types: [] },
  { name: "1-5 - 7+ Minikits", types: [] },
  { name: "1-5 - 5+ Story Minikits", types: [] },
  { name: "3-5 - Hostage", types: [] },
  { name: "6-1 - 6+ Minikits", types: [] },
  { name: "6-1 - 4+ Story Minikits", types: [] },
  { name: "5-1 - 6+ Minikits", types: [] },
  { name: "5-1 - 4+ Story Minikits", types: [] },
];
bingoList[11] = [
  { name: "Buy 2 Suit Upgrades", types: [] },
  { name: "1-5 - Hostage", types: [] },
  { name: "3-5 - No Magnet Suit", types: [] },
  { name: "2-5 - Red Brick", types: [] },
  { name: "6-1 - Red Brick", types: [] },
  { name: "4-1 - 30k Studs", types: [] },
  { name: "1-2 - Red Brick", types: [] },
  { name: "5-1 - Super Villain", types: [] },
  { name: "6-2 - 15k Studs", types: [] },
  { name: "Ride 3 Stud Rides", types: [] },
];
bingoList[12] = [
  { name: "3-5 - No Wall Jumping", types: [] },
  { name: "4-1 - 7+ Minikits", types: [] },
  { name: "4-1 - 5+ Story Minikits", types: [] },
  { name: "6-1 - Hostage", types: [] },
  { name: "6-2 - 4+ Minikits", types: [] },
  { name: "4-2 - 30k Studs", types: [] },
  { name: "Buy 2 Villain Red Bricks", types: [] },
  { name: "Collect All Suits", types: [] },
  { name: "1-5 - No Drop In Warps", types: [] },
];
bingoList[13] = [
  { name: "3-5 - 10 Minikits", types: [] },
  { name: "4-1 - Hostage", types: [] },
  { name: "6-2 - Red Brick", types: [] },
  { name: "4-2 - 6+ Minikits", types: [] },
  { name: "4-2 - 4+ Story Minikits", types: [] },
  { name: "5-2 - 7+ Minikits", types: [] },
  { name: "5-2 - 5+ Story Minikits", types: [] },
  { name: "Collect 5 Red Bricks", types: [] },
  { name: "2-2 - 10 Minikits", types: [] },
];
bingoList[14] = [
  { name: "4-1 - No Wall Jumping", types: [] },
  { name: "4-2 - Red Brick", types: [] },
  { name: "5-2 - Red Brick", types: [] },
  { name: "6-2 - 10 Minikits", types: [] },
  { name: "Buy Bruce Wayne and Private Jet", types: [] },
  { name: "3-3 - 10 Minikits", types: [] },
  { name: "Grow 3 Poison Ivy Plants", types: [] },
  { name: "Collect 1 Million Studs", types: [] },
  { name: "5-1 - No Birthday Skip", types: [] },
];
bingoList[15] = [
  { name: "4-2 - Hostage", types: [] },
  { name: "5-1 - Red Brick", types: [] },
  { name: "5-2 - Hostage", types: [] },
  { name: "4-1 - 10 Minikits", types: [] },
  { name: "4-3 - 4+ Minikits", types: [] },
  { name: "5-3 - 15k Studs", types: [] },
  { name: "2-4 - Red Brick", types: [] },
  { name: "5-4 - Hostage", types: [] },
  { name: "6-1 - No Boss Skip", types: [] },
];
bingoList[16] = [
  { name: "4-1 - Red Brick", types: [] },
  { name: "5-2 - Super Villain", types: [] },
  { name: "3-3 - Red Brick", types: [] },
  { name: "4-3 - 40k Studs", types: [] },
  { name: "5-3 - 7+ Minikits", types: [] },
  { name: "1-5 - Red Brick", types: [] },
  { name: "6-3 - 4+ Minikits", types: [] },
  { name: "3-1 - No Room 2/3 Gliding", types: [] },
  { name: "6 Super Statuses", types: [] },
];
bingoList[17] = [
  { name: "5-2 - 10 Minikits", types: [] },
  { name: "5-3 - Red Brick", types: [] },
  { name: "6-3 - 40k Studs", types: [] },
  { name: "3-4 - 8+ Minikits", types: [] },
  { name: "2-1 - 10 Minikits", types: [] },
  { name: "2-3 - 8+ Minikits", types: [] },
  { name: "1-1 - 9+ Minikits", types: [] },
  { name: "2-4 - 10 Minikits", types: [] },
  { name: "Buy Slam and Fast Build", types: [] },
];
bingoList[18] = [
  { name: "5-4 - 6+ Minikits", types: [] },
  { name: "5-4 - 4+ Story Minikits", types: [] },
  { name: "6-4 - Red Brick", types: [] },
  { name: "4-4 - 3+ Minikits", types: [] },
  { name: "4-3 - Hostage", types: [] },
  { name: "6-3 - Hostage", types: [] },
  { name: "1-4 - 9+ Minikits", types: [] },
  { name: "3 Story Levels with 1P2C", types: [] },
  { name: "6-1 - 9+ Minikits", types: [] },
  { name: "5-1 - 9+ Minikits", types: [] },
];
bingoList[19] = [
  { name: "4-3 - Red Brick", types: [] },
  { name: "6-3 - Red Brick", types: [] },
  { name: "6-4 - 5+ Minikits", types: [] },
  { name: "4-4 - 10 Minikits", types: [] },
  { name: "5-1 - Hostage", types: [] },
  { name: "5-5 - 20k Studs", types: [] },
  { name: "4-5 - 2+ Minikits", types: [] },
  { name: "5-4 - No Room 1 Skip", types: [] },
  { name: "6-5 - 9+ Minikits", types: [] },
];
bingoList[20] = [
  { name: "3 Story Levels with Zero Studs", types: [] },
  { name: "6-4 - 40k Studs", types: [] },
  { name: "5-4 - Red Brick", types: [] },
  { name: "4-4 - Hostage", types: [] },
  { name: "5-5 - 3+ Minikits", types: [] },
  { name: "6-5 - Red Brick", types: [] },
  { name: "4-5 - 30k Studs", types: [] },
  { name: "Buy 3 Villain Red Bricks", types: [] },
  { name: "Buy 5 Goons/Henchmen", types: [] },
  { name: "6-3 - 9+ Minikits", types: [] },
];
bingoList[21] = [
  { name: "4-4 - Red Brick", types: [] },
  { name: "5-5 - Red Brick", types: [] },
  { name: "6-5 - 4+ Minikits", types: [] },
  { name: "Episode 5 Story", types: [] },
  { name: "Episode 4 Story", types: [] },
  { name: "3-1 - No Vacuum Skip", types: [] },
  { name: "Collect 500k Studs", types: [] },
  { name: "4-2 - 10 Minikits", types: [] },
  { name: "5-4 - 8+ Minikits", types: [] },
  { name: "6-4 - 9+ Minikits", types: [] },
];
bingoList[22] = [
  { name: "Buy 3 Goons", types: [] },
  { name: "3-1 - Hostage", types: [] },
  { name: "6-5 - Hostage", types: [] },
  { name: "4-5 - 9+ Minikits", types: [] },
  { name: "Episode 6 Story", types: [] },
  { name: "6-4 - Hostage", types: [] },
  { name: "3-5 - Red Brick", types: [] },
  { name: "2-3 - Out of Bounds Minikit", types: [] },
  { name: "5-5 - 9+ Minikits", types: [] },
];
bingoList[23] = [
  { name: "6 Hostages", types: [] },
  { name: "1-3 - 10 Minikits", types: [] },
  { name: "Villain Episode - Story", types: [] },
  { name: "4-5 - Hostage", types: [] },
  { name: "3 Vehicle Levels Free Play", types: [] },
  { name: "1-4 - Red Brick", types: [] },
  { name: "Buy 2 Villains", types: [] },
  { name: "3-4 - No Disco Skip", types: [] },
  { name: "3-1 - Toxic Goo Minikit", types: [] },
];
bingoList[24] = [
  { name: "5-5 - Hostage", types: [] },
  { name: "4-5 - Red Brick", types: [] },
  { name: "6-5 - 40k Studs", types: [] },
  { name: "3-1 - 9+ Minikits", types: [] },
  { name: "3-2 - 9+ Minikits", types: [] },
  { name: "2-5 - 9+ Minikits", types: [] },
  { name: "2-3 - Super Hero", types: [] },
  { name: "Collect 25 Minikits", types: [] },
  { name: "Collect 7 Red Bricks", types: [] },
];
bingoList[25] = [
  { name: "3 Story Levels with Silhouettes/ Disguises", types: [] },
  { name: "5-4 - 30k Studs", types: [] },
  { name: "4-4 - 25k Studs", types: [] },
  { name: "1-2 - 8+ Minikits", types: [] },
  { name: "2-2 - Red Brick", types: [] },
  { name: "4-3 - 9+ Minikits", types: [] },
  { name: "5-3 - 10 Minikits", types: [] },
  { name: "5-5 - No Drop In Warps", types: [] },
  { name: "9 Hostages", types: [] },
];
