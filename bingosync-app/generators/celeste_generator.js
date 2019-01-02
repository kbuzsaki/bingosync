bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "All Berries in Awake (1)", types: ["2a_berries","2a"] },
  { name: "Talk to Theo in Crossing", types: ["cutscene","1a"] },
  { name: "Talk to Theo in Elevator Shaft", types: ["cutscene","3a"] },
  { name: "Forsaken City Heart", types: ["hearts","1a"] },
  { name: "Forsaken City Cassette", types: ["1b"] },
  { name: "All Berries in Presidential Suite (3)", types: ["3a_berries","3a"] },
];
bingoList[2] = [
  { name: "Talk to Theo in Awake", types: ["cutscene"] },
  { name: "Read the Poem in Awake", types: ["cutscene"] },
  { name: "Take hidden path before Cliff Face", types: ["task","4a"] },
  { name: "All Berries in Unraveling (1)", types: ["5a_berries","5a"] },
  { name: "All Berries in Rescue (1)", types: ["5a_berries","5a"] },
  { name: "All Berries in Start of 1A (6)", types: ["1a_berries","1a"] },
];
bingoList[3] = [
  { name: "Stun Oshiro 10 times", types: ["oshiro_stun","task"] },
  { name: "Stun Oshiro 15 times", types: ["oshiro_stun","task"] },
  { name: "Hit a Kevin block from all 4 sides", types: ["task","6a"] },
  { name: "Easteregg room in Reflection", types: ["task","6a"] },
  { name: "All Berries in Crossing (9)", types: ["1a_berries","1a"] },
  { name: "All Berries in Chasm (5)", types: ["1a_berries","1a"] },
];
bingoList[4] = [
  { name: "Complete Awake without dashing", types: ["dashless","2a"] },
  { name: "Read Diary in Elevator Shaft", types: ["cutscene","3a"] },
  { name: "Celestial Resort Cassette", types: ["3b"] },
  { name: "All Berries in Start of 4A (8)", types: ["4a_berries","4a"] },
  { name: "All Berries in Shrine (9)", types: ["4a_berries","4a"] },
  { name: "All Berries in Old Trail (7)", types: ["4a_berries","4a"] },
];
bingoList[5] = [
  { name: "Talk to Theo in Search", types: ["cutscene","5a"] },
  { name: "All 4 optional Theo Cutscenes", types: ["cutscene"] },
  { name: "Reflection Cutscene in Hollows", types: ["cutscene","6a"] },
  { name: "Old Site Heart", types: ["hearts","2a"] },
  { name: "All Berries in Start of 3A (11)", types: ["3a_berries","3a"] },
  { name: "10 Berries in 3A", types: ["3a_berries","amount_berries"] },
];
bingoList[6] = [
  { name: "Complete 5 A-Sides", types: ["amount_chapters"] },
  { name: "Kill a Seeker", types: ["seeker","task","5a"] },
  { name: "Kill 2 Seekers", types: ["seeker","task","5a"] },
  { name: "Stun 10 Seekers", types: ["seeker","task","5a"] },
  { name: "10 Berries in 4A", types: ["4a_berries","amount_berries"] },
  { name: "20 Berries in 4A", types: ["4a_berries","amount_berries"] },
];
bingoList[7] = [
  { name: "Complete 2 B-Sides", types: ["amount_chapters"] },
  { name: "Winged Golden Berry", types: ["dashless","1a"] },
  { name: "Complete Chasm without dashing", types: ["dashless","1a"] },
  { name: "Complete Crossing without dashing", types: ["dashless","1a"] },
  { name: "All Berries in 0M (4)", types: ["7a_berries","7a"] },
  { name: "All Berries in 500M (6)", types: ["7a_berries","7a"] },
];
bingoList[8] = [
  { name: "Reach Old Site in PICO-8", types: ["pico-8"] },
  { name: "Get the Orb in PICO-8", types: ["pico-8"] },
  { name: "Stun Oshiro 25 times", types: ["task","3a"] },
  { name: "Get 1 Key in Search", types: ["search","task","5a"] },
  { name: "All Berries in Search (6)", types: ["5a_berries","5a"] },
  { name: "All Berries in Cliff Face (5)", types: ["4a_berries","4a"] },
];
bingoList[9] = [
  { name: "Stun 20 Seekers", types: ["seeker","task","5a"] },
  { name: "Stun 30 Seekers", types: ["seeker","task","5a"] },
  { name: "Only top route in Hollows", types: ["reflection_pathing","6a"] },
  { name: "Only bottom route in Hollows", types: ["reflection_pathing","6a"] },
  { name: "Find Letter and PICO-8 in Huge Mess", types: ["task","3a"] },
  { name: "Golden Ridge Heart", types: ["hearts","4a"] },
];
bingoList[10] = [
  { name: "Grabless Old Site", types: ["grabless","2a"] },
  { name: "Grabless Forsaken City", types: ["grabless","1a"] },
  { name: "Grabless Badeline/Rock Bottom", types: ["grabless","6a"] },
  { name: "Get a 1-Up", types: ["1up"] },
  { name: "All Berries in 1000M (6)", types: ["7a_berries","7a"] },
  { name: "All Berries in 3000M (7)", types: ["7a_berries","7a"] },
  { name: "All Berries in Huge Mess (7)", types: ["3a_berries","3a"] },
];
bingoList[11] = [
  { name: "Huge Mess: Chest -> Books -> Towel", types: ["huge_mess_pathing","3a"] },
  { name: "Huge Mess: Books -> Chest -> Towel", types: ["huge_mess_pathing","3a"] },
  { name: "Huge Mess: Towel -> Chest -> Books", types: ["huge_mess_pathing","3a"] },
  { name: "No shortcut in 5A double bubble room", types: ["task","5a"] },
  { name: "Mirror Temple Heart", types: ["hearts","5a"] },
  { name: "10 Berries in 1A", types: ["1a_berries","amount_berries"] },
];
bingoList[12] = [
  { name: "Huge Mess: Chest -> Towel -> Books", types: ["huge_mess_pathing","3a"] },
  { name: "Huge Mess: Books -> Towel -> Chest", types: ["huge_mess_pathing","3a"] },
  { name: "Huge Mess: Towel -> Books -> Chest", types: ["huge_mess_pathing","3a"] },
  { name: "Destroy 8 Snowballs", types: ["snowballs","task","4a"] },
  { name: "Celestial Resort Heart", types: ["hearts","3a"] },
  { name: "10 Berries in 2A", types: ["2a_berries","amount_berries"] },
];
bingoList[13] = [
  { name: "0M and 500M Gems", types: ["gems","7a"] },
  { name: "1000M and 1500M Gems", types: ["gems","7a"] },
  { name: "2000M and 2500M Gems", types: ["gems","7a"] },
  { name: "Old Site B-Side", types: ["2b"] },
  { name: "Old Site Cassette", types: ["2b"] },
  { name: "20 Berries", types: ["amount_berries"] },
];
bingoList[14] = [
  { name: "2 Cassettes", types: ["amount_cassettes"] },
  { name: "3 Cassettes", types: ["amount_cassettes"] },
  { name: "Get 5 Berries in PICO-8", types: ["pico-8"] },
  { name: "Get 10 Berries in PICO-8", types: ["pico-8"] },
  { name: "Reflection Cassette", types: ["6b"] },
  { name: "Golden Ridge Cassette", types: ["4b"] },
];
bingoList[15] = [
  { name: "2 Hearts", types: ["amount_hearts"] },
  { name: "3 Hearts", types: ["amount_hearts"] },
  { name: "4 Hearts", types: ["amount_hearts"] },
  { name: "Mirror Temple B-Side", types: ["5b"] },
  { name: "All Berries in Depths (11)", types: ["5a_berries","5a"] },
  { name: "Mirror Temple Cassette", types: ["5b"] },
];
bingoList[16] = [
  { name: "3 Gems in The Summit", types: ["gems","7a"] },
  { name: "4 Gems in The Summit", types: ["gems","7a"] },
  { name: "5 Gems in the Summit", types: ["gems","7a"] },
  { name: "20 Berries in 1A", types: ["1a_berries","amount_berries"] },
  { name: "18 Berries in 2A", types: ["2a_berries","amount_berries"] },
  { name: "25 Berries in 3A", types: ["3a_berries","amount_berries"] },
];
bingoList[17] = [
  { name: "4 Cassettes", types: ["amount_cassettes"] },
  { name: "5 Cassettes", types: ["amount_cassettes"] },
  { name: "Complete 3 B-Sides", types: ["amount_chapters"] },
  { name: "Complete 4 B-Sides", types: ["amount_chapters"] },
  { name: "10 Berries in 5A", types: ["5a_berries","amount_berries"] },
  { name: "20 Berries in 5A", types: ["5a_berries","amount_berries"] },
];
bingoList[18] = [
  { name: "5 Hearts", types: ["amount_hearts"] },
  { name: "6 Hearts", types: ["amount_hearts"] },
  { name: "7 Hearts", types: ["amount_hearts"] },
  { name: "All Berries in 1500M (8)", types: ["7a_berries","7a"] },
  { name: "All Berries in 2000M (8)", types: ["7a_berries","7a"] },
  { name: "All Berries in 2500M (8)", types: ["7a_berries","7a"] },
];
bingoList[19] = [
  { name: "Complete PICO-8", types: ["pico-8"] },
  { name: "Destroy 15 Snowballs", types: ["snowballs","task","4a"] },
  { name: "Destroy 20 Snowballs", types: ["snowballs","task","4a"] },
  { name: "Reflection Heart", types: ["hearts"] },
  { name: "25 Berries", types: ["amount_berries"] },
  { name: "30 Berries", types: ["amount_berries"] },
];
bingoList[20] = [
  { name: "Talk to Old Lady in Core", types: ["core"] },
  { name: "All Flags in 3000M", types: ["task","7a"] },
  { name: "Get 2 Keys in Search", types: ["search","task","5a"] },
  { name: "Get 3 Keys in Search", types: ["search","task","5a"] },
  { name: "Golden Ridge B-Side", types: ["4b"] },
  { name: "All Berries in Elevator Shaft (4)", types: ["3a_berries","3a"] },
];
bingoList[21] = [
  { name: "Get two 1-Ups", types: ["1up"] },
  { name: "Get three 1-Ups", types: ["1up"] },
  { name: "35 Berries", types: ["amount_berries"] },
  { name: "40 Berries", types: ["amount_berries"] },
  { name: "45 Berries", types: ["amount_berries"] },
  { name: "Forsaken City B-Side", types: ["1b"] },
];
bingoList[22] = [
  { name: "20 Berries in 7A", types: ["7a_berries","amount_berries"] },
  { name: "35 Berries in 7A", types: ["7a_berries","amount_berries"] },
  { name: "Reflection B-Side", types: ["6b"] },
  { name: "All Berries in Start of 5A (12)", types: ["5a_berries","5a"] },
  { name: "50 Berries", types: ["amount_berries"] },
  { name: "The Summit Heart", types: ["hearts","7a"] },
];
bingoList[23] = [
  { name: "All Berries in Into the Core (1)", types: ["8a_berries","core"] },
  { name: "All Berries in Hot and Cold (3)", types: ["8a_berries","core"] },
  { name: "All Berries in Heart of the Mountain (1)", types: ["8a_berries","core"] },
  { name: "29 Berries in 4A", types: ["4a_berries","amount_berries"] },
  { name: "All Berries in Start of 2A (9)", types: ["2a_berries","2a"] },
  { name: "All Berries in Intervention (8)", types: ["2a_berries","2a"] },
];
bingoList[24] = [
  { name: "65 Berries", types: ["amount_berries"] },
  { name: "75 Berries", types: ["amount_berries"] },
  { name: "Don't skip final 4A Cutscene", types: ["task","4a"] },
  { name: "Celestial Resort B-Side", types: ["3b"] },
  { name: "31 Berries in 5A", types: ["5a_berries","amount_berries"] },
  { name: "The Summit Cassette", types: ["7b"] },
];
bingoList[25] = [
  { name: "100 Berries", types: ["amount_berries"] },
  { name: "5 Berries in 8A", types: ["8a_berries","core"] },
  { name: "Clear Core", types: ["core"] },
  { name: "47 Berries in 7A", types: ["7a_berries","amount_berries"] },
  { name: "Complete 5 B-Sides", types: ["amount_chapters"] },
  { name: "The Summit B-Side", types: ["7b"] },
];
