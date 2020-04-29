bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Forsaken City Blue Heart", types: ["1a","hearts"] },
  { name: "Forsaken City B-Side", types: ["1b","b-sides"] },
  { name: "Triple 1-Up", types: ["1-up"] },
  { name: "Crossing Dashless", types: ["1a","dashless"] },
  { name: "Get a 1-Up in 2A", types: ["1-up","2a"] },
];
bingoList[2] = [
  { name: "Jumpless Dashless Awake", types: ["2a","dashless","jumpless"] },
  { name: "Complete Forsaken City with Low Friction", types: ["1a","1b","low_friction"] },
  { name: "3 Hearts", types: ["hearts","b-sides"] },
  { name: "2 Chapters Grabless", types: ["grabless"] },
  { name: "Golden Ridge Cassette", types: ["4a","b-sides"] },
];
bingoList[3] = [
  { name: "Two Blue and Two Red Hearts", types: ["hearts","b-sides"] },
  { name: "3 B-Sides", types: ["hearts","b-sides"] },
  { name: "Complete Forsaken City with 70% Speed", types: ["1a","1b"] },
  { name: "Complete Forsaken City with 160% Speed", types: ["1a","1b"] },
  { name: "Complete Old Site with Low Friction", types: ["2a","2b","low_friction"] },
];
bingoList[4] = [
  { name: "Full Clear 1A", types: ["1a","berries","hearts","full_clear"] },
  { name: "Quintuple 1-Up", types: ["1-up","berries"] },
  { name: "Winged Golden", types: ["1a","dashless"] },
  { name: "Complete 2 Chapters Mirrored", types: ["mirrored"] },
  { name: "Blue and Red Heart in Golden Ridge", types: ["4a","4b","b-sides","hearts"] },
];
bingoList[5] = [
  { name: "Grabless Cliff Face", types: ["4a","grabless"] },
  { name: "Complete Pico-8", types: ["3a"] },
  { name: "Get a 1-Up in 4 Chapters", types: ["1-up","big_berries"] },
  { name: "Complete Intervention without Jumping", types: ["2a","jumpless"] },
  { name: "Reach Library (3B Checkpoint)", types: ["3a","3b","b-sides"] },
];
bingoList[6] = [
  { name: "Complete Old Trail with Low Friction", types: ["4a","low_friction"] },
  { name: "100% Pico-8", types: ["3a"] },
  { name: "Complete Presidential Suite with Low Friction", types: ["3a","low_friction"] },
  { name: "Bop Oshiro 10 Times in Two Chapters", types: ["3a","3b"] },
  { name: "All Berries in Start and Depths of 5A (23)", types: ["5a","big_berries","full_clear"] },
];
bingoList[7] = [
  { name: "Invisible Huge Mess", types: ["3a","invisible"] },
  { name: "Complete Elevator Shaft with Low Friction", types: ["3a","low_friction"] },
  { name: "Complete 4 Chapters Mirrored", types: ["mirrored"] },
  { name: "Get 3 Keys in Search", types: ["5a"] },
  { name: "Get 4 Hearts and 4 Cassettes", types: ["hearts","b-sides"] }
];
bingoList[8] = [
  { name: "Invisible Forsaken City", types: ["1a","1b","invisible"] },
  { name: "Grabless Elevator Shaft", types: ["3a","grabless"] },
  { name: "4 Chapters Hiccups", types: [] },
  { name: "Get a 1-Up in 3A", types: ["3a","1-up"] },
  { name: "Bop Seekers 10 Times in 2 Chapters", types: ["5a","5b","seekers"] },
];
bingoList[9] = [
  { name: "Use 2 Binoculars in 4 Chapters", types: ["binos"] },
  { name: "Complete 3A Start with Low Friction", types: ["3a","low_friction"] },
  { name: "Invisible Unravelled", types: ["5a","invisible"] },
  { name: "Invisible Cliff Face", types: ["4a","invisible"] },
  { name: "Complete Start of Mirror Temple with Low Friction", types: ["5a","5b","low_friction"] },
];
bingoList[10] = [
  { name: "Invisible Start of Celestial Resort", types: ["3a","3b","invisible"] },
  { name: "Invisible Old Site", types: ["2a","2b","invisible"] },
  { name: "Grabless Huge Mess with the Heart", types: ["3a","grabless","hearts"] },
  { name: "6 Hearts", types: ["hearts"] },
  { name: "Complete 3 Chapters with Low Friction", types: ["low_friction"] },
];
bingoList[11] = [
  { name: "Full Clear 8A", types: ["8a","full_clear"] },
  { name: "Grabless Rock Bottom", types: ["6a","6b","grabless"] },
  { name: "Grabless Celestial Resort", types: ["3a","grabless"] },
  { name: "Kill 5 Different Seekers", types: ["5a","seekers"] },
  { name: "Complete Mirror Temple with Low Friction", types: ["5a","5b","low_friction"] },
];
bingoList[12] = [
  { name: "Kill 3 Different Seekers in Two Chapters", types: ["5a","5b","seekers","b-sides"] },
  { name: "Blue and Red Heart in Celestial Resort", types: ["3a","3b","hearts","b-sides"] },
  { name: "Get 15 Berries in 4 Chapters", types: ["big_berries"] },
  { name: "Intro Car in Remembered", types: ["farewell"] },
  { name: "1-Up in 7A", types: ["7a","1-up"] },
];
bingoList[13] = [
  { name: "Jumpless Reflection (Checkpoint)", types: ["6a","jumpless"] },
  { name: "All Berries in Search (6)", types: ["5a","berries"] },
  { name: "Jumpless Resolution", types: ["6a","jumpless"] },
  { name: "Grabless Mirror Temple", types: ["5a","grabless"] },
  { name: "Invisible Mirror Temple", types: ["5a","invisible"] },
];
bingoList[14] = [
  { name: "Grabless Repreive", types: ["6b","grabless"] },
  { name: "4 Seeded Berries", types: ["berries"] },
  { name: "5 Berries in 7 Chapters", types: ["big_berries"] },
  { name: "Invisible Presidential Suite", types: ["3a","invisible"] },
  { name: "Bounce on 10 Snowballs in 2 Chapters", types: ["4a","7a"] },
];
bingoList[15] = [
  { name: "3000M Grabless", types: ["7a","grabless"] },
  { name: "Complete 2 Chapters Invisible", types: ["invisible"] },
  { name: "Invisible 1500M", types: ["7a","invisible"] },
  { name: "Invisible 2500M", types: ["7a","invisible"] },
  { name: "Every Different Seeker Kill (12)", types: ["5a","5b","seekers","b-sides"] },

];
bingoList[16] = [
  { name: "Complete 5 Chapters Grabless", types: ["grabless"] },
  { name: "Use 4 Binoculars in 8 Chapters", types: ["binos","farewell","b-sides"] },
  { name: "Full Clear Three Chapters", types: ["full_clear","big_berries"] },
  { name: "Invisible 3000M", types: ["7a","invisible"] },
  { name: "69 Berries", types: ["big_berries"] },
];
bingoList[17] = [
  { name: "Blue Heart in The Summit", types: ["7a","hearts"] },
  { name: "Find the Bird's Nest in Epilogue", types: ["7a"] },
  { name: "20 Berries in 3 Chapters", types: ["big_berries","full_clear"] },
  { name: "Invisible Power Source", types: ["farewell","invisible"] },
  { name: "Complete 5 A-Sides", types: ["big_chapters"] },
];
bingoList[18] = [
  { name: "Complete 5 Chapters with Low Friction", types: ["low_friction","big_chapters"] },
  { name: "Complete 3000M with no Badeline Orbs", types: ["7a"] },
  { name: "20 Berries in 4 Chapters", types: ["big_berries","full_clear"] },
  { name: "Use 2 Binoculars in 8 Chapters", types: ["binos"] },
  { name: "Get 5 Keys in Power Source", types: ["farewell"] },
];
bingoList[19] = [
  { name: "All Winged Berries (11)", types: ["berries","dashless","7a"] },
  { name: "Complete 2B Grabless", types: ["2b","grabless","b-sides","hearts"] },
  { name: "Complete 5 B-Sides", types: ["b-sides","hearts","big_chapters"] },
  { name: "35 Berries in 7A", types: ["7a","big_berries","full_clear"] },
  { name: "Complete Rooftop Jumpless", types: ["3b","jumpless"] },
];
bingoList[20] = [
  { name: "Complete 6 Chapters Grabless", types: ["grabless","big_chapters"] },
  { name: "Reach Event Horizon", types: ["farewell"] },
  { name: "Use All Binoculars in A-Sides (14)", types: ["binos","7a"] },
  { name: "Complete 6 Chapters Invisible", types: ["big_chapters","invisible"] },
  { name: "Use All Binoculars in B-Sides (13)", types: ["b-sides","binos","6b","7b"] },
];
bingoList[21] = [
  { name: "Use 20 Binoculars in Farewell", types: ["binos","farewell","late_farewell"] },
  { name: "10 Hearts", types: ["hearts"] },
  { name: "6 Hearts and 6 Cassettes", types: ["hearts","b-sides"] },
  { name: "Blue and Red Heart in Reflection", types: ["6a","6b","hearts","b-sides"] },
  { name: "The Summit B-Side", types: ["7b","hearts","b-sides"] },
];
bingoList[22] = [
  { name: "Full Clear 7A", types: ["7a","big_berries","full_clear"] },
  { name: "8 Cassettes", types: ["b_sides"] },
  { name: "100 Berries", types: ["very_big_berries"] },
  { name: "Blue and Red Heart in The Summit", types: ["hearts","b-sides","7a","7b"] },
  { name: "Complete Remembered with Low Friction", types: ["farewell","low_friction"] },
];
bingoList[23] = [
  { name: "25 Berries in 4 Chapters", types: ["very_big_berries","full_clear"] },
  { name: "Determination Demo Room", types: ["farewell","late_farewell"] },
  { name: "20 Berries in 5 Chapters", types: ["very_big_berries","full_clear"] },
  { name: "Complete 10 Chapters", types: ["big_chapters"] },
  { name: "4 A-Sides and 4 B-Sides", types: ["big_chapters","hearts","b-sides"] },
];
bingoList[24] = [
  { name: "12 Hearts", types: ["hearts","b-sides"] },
  { name: "Unlock Reconciliation", types: ["farewell","late_farewell"] },
  { name: "Five Full Clears", types: ["big_berries","full_clear"] },
  { name: "Complete 6 B-Sides", types: ["b-sides","hearts","big_chapters"] },
  { name: "Grabless 6B", types: ["6b","b-sides","hearts","grabless"] },
];
bingoList[25] = [
  { name: "Moon Berry", types: ["farewell","late_farewell","full_clear"] },
  { name: "125 Berries", types: ["very_big_berries","full_clear"] },
  { name: "All Blue Hearts", types: ["hearts","big_chapters"] },
  { name: "7 Red Hearts", types: ["hearts","b-sides","big_chapters"] },
  { name: "Farewell", types: ["farewell","late_farewell"] },
];
