bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Port Royal", types: [] },
  { name: "Complete a Level with Zero Studs", types: [] },
  { name: "Crash the Game", types: [] },
];
bingoList[2] = [
  { name: "Tortuga", types: [] },
  { name: "Pelegosto", types: [] },
  { name: "Singapore", types: [] },
  { name: "London Town", types: [] },
  { name: "Singapore - No Level Skip", types: [] },
  { name: "Pelegosto - No Dog Skip", types: [] },
];
bingoList[3] = [
  { name: "The Black Pearl Attacks", types: [] },
  { name: "A touch of Destiny", types: [] },
  { name: "Davy Jone's Locker", types: [] },
  { name: "Queen Anne's Revenge", types: [] },
  { name: "Cannibals", types: ["Characters"] },
];
bingoList[4] = [
  { name: "Smuglers Den", types: [] },
  { name: "The Dutchman's secret", types: [] },
  { name: "Norrington's choice", types: [] },
  { name: "Whitecap Bay", types: [] },
];
bingoList[5] = [
  { name: "Isla de Muerta", types: [] },
  { name: "Isla Cruces", types: [] },
  { name: "The Bretheren Court", types: [] },
  { name: "A Spanish Legacy", types: [] },
  { name: "1 Million studs", types: ["Studs"] },
  { name: "Cursed Crew", types: ["Characters"] },
];
bingoList[6] = [
  { name: "The Kraken", types: [] },
  { name: "Maelstrom", types: [] },
  { name: "The Fountain of Youth", types: [] },
  { name: "Port Royal all Compass Items", types: [] },
];
bingoList[7] = [
  { name: "Tortuga - True Pirate", types: [] },
  { name: "Pelegosto - True Pirate", types: [] },
  { name: "Singapore - True Pirate", types: [] },
  { name: "London Town - True Pirate", types: [] },
  { name: "Disguises", types: ["Red Hats"] },
];
bingoList[8] = [
  { name: "Port Royal - True Pirate", types: [] },
  { name: "Part of the Crew, Part of the Ship", types: ["Characters"] },
  { name: "Pirate Lords", types: ["Characters"] },
  { name: "5 Red Hats", types: ["Red Hats"] },
];
bingoList[9] = [
  { name: "Queen Anne's Revenge - True Pirate", types: [] },
  { name: "Davy Jone's Locker - True Pirate", types: [] },
  { name: "Port Royal - 10 Minikits", types: [] },
  { name: "The Bretheren Court - 10 Minikits", types: [] },
];
bingoList[10] = [
  { name: "Smuglers Den - 10 Minikits", types: [] },
  { name: "2 Million Studs", types: ["Studs"] },
  { name: "Isla de Muerta - True Pirate", types: [] },
  { name: "The Bretheren Court - True Pirate", types: [] },
  { name: "A Spanish Legacy - True Pirate", types: [] },
];
bingoList[11] = [
  { name: "The Fountain of Youth All Compass Items", types: [] },
  { name: "A Spanish Legacy All Compass Items", types: [] },
  { name: "Whitecap Bay All Compass Items", types: [] },
  { name: "Queen Anne's Revenge All Compass Items", types: [] },

];
bingoList[12] = [
  { name: "London Town All Compass Items", types: [] },
  { name: "Singapore All Compass Items", types: [] },
  { name: "Pelegosto All Compass Items", types: [] },
  { name: "Tortuga all Compass Items", types: [] },
  { name: "The Black Pearl Attacks - True Pirate", types: [] },
  { name: "A touch of Destiny - True Pirate", types: [] },
];
bingoList[13] = [
  { name: "Singapore - 10 Minikits", types: [] },
  { name: "London Town - 10 Minikits", types: [] },
  { name: "Whitecap Bay - 10 Minikits", types: [] },
  { name: "A Spanish Legacy - 10 Minikits", types: [] },
];
bingoList[14] = [
  { name: "The Black Pearl Attacks all Compass Items", types: [] },
  { name: "A touch of Destiny All Compass Items", types: [] },
  { name: "Davy Jone's Locker All Compass Items", types: [] },
  { name: "The Kraken - True Pirate", types: [] },
  { name: "The Fountain of Youth - True Pirate", types: [] },
];
bingoList[15] = [
  { name: "Revenge", types: ["Characters"] },
  { name: "Smuglers Den all Compass Items", types: [] },
  { name: "The Dutchman's secret All Compass Items", types: [] },
  { name: "Norrington's choice All Compass Items", types: [] },
  { name: "The Dutchman's secret - 10 Minikits", types: [] },
];
bingoList[16] = [
  { name: "Norrington's choice - 10 Minikits", types: [] },
  { name: "The Dutchman's secret - True Pirate", types: [] },
  { name: "Norrington's choice - True Pirate", types: [] },
  { name: "Whitecap Bay - True Pirate", types: [] },
];
bingoList[17] = [
  { name: "Isla de Muerta All Compass Items", types: [] },
  { name: "Isla Cruces All Compass Items", types: [] },
  { name: "The Bretheren Court All Compass Items", types: [] },
  { name: "5 Million studs", types: ["Studs"] },
];
bingoList[18] = [
  { name: "Tortuga - 10 Minikits", types: [] },
  { name: "Pelegosto - 10 Minikits", types: [] },
  { name: "Queen Anne's Revenge - 10 Minikits", types: [] },
  { name: "Isla Cruces - True Pirate", types: [] },
];
bingoList[19] = [
  { name: "The Fountain of Youth - 10 Minikits", types: [] },
  { name: "The Kraken All Compass Items", types: [] },
  { name: "Maelstrom All Compass Items", types: [] },
  { name: "Maelstrom - 10 Minikits", types: [] },
];
bingoList[20] = [
  { name: "The Black Pearl Attacks  - 10 Minikits", types: [] },
  { name: "A touch of Destiny - 10 Minikits", types: [] },
  { name: "Davy Jone's Locker - 10 Minikits", types: [] },
  { name: "Maelstrom - True Pirate", types: [] },
];
bingoList[21] = [
  { name: "Isla de Muerta - 10 Minikits", types: [] },
  { name: "Isla Cruces - 10 Minikits", types: [] },
  { name: "10 Red Hats", types: ["Red Hats"] },
];
bingoList[22] = [
  { name: "The Kraken - 10 Minikits", types: [] },
  { name: "3 ships", types: ["Minikits"] },
];
bingoList[23] = [
  { name: "Go Fast", types: ["Red Hats"] },
  { name: "Free Play Custom Character", types: [] },
  { name: "10 Million studs", types: ["Studs"] },
];
bingoList[24] = [
  { name: "15 Red Hats", types: ["Red Hats"] },
  { name: "x7680", types: ["Red Hats"] },
  { name: "20 Red Hats", types: ["Red Hats"] },
];
bingoList[25] = [
  { name: "4 ships", types: ["Minikits"] },
  { name: "5 ships", types: ["Minikits"] },
  { name: "All ships from same movie", types: ["Minikits"] },
];
