bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Port Royal", types: ["clear","CotBP"] },
  { name: "Complete a Level with Zero Studs", types: [""] },
  { name: "Crash the Game", types: [""] },
];
bingoList[2] = [
  { name: "Tortuga", types: ["clear","CotBP"] },
  { name: "Pelegosto", types: ["clear","DMC"] },
  { name: "Singapore", types: ["clear","AWE"] },
  { name: "London Town", types: ["clear","OST"] },
  { name: "Singapore - No Level Skip", types: ["clear","AWE"] },
  { name: "Pelegosto - No Dog Skip", types: ["clear","DMC"] },
];
bingoList[3] = [
  { name: "The Black Pearl Attacks", types: ["clear","CotBP"] },
  { name: "A touch of Destiny", types: ["clear","DMC"] },
  { name: "Davy Jone's Locker", types: ["clear","AWE"] },
  { name: "Queen Anne's Revenge", types: ["clear","OST"] },
  { name: "Cannibals", types: ["Characters"] },
];
bingoList[4] = [
  { name: "Smuglers Den", types: ["clear","CotBP"] },
  { name: "The Dutchman's secret", types: ["clear","DMC"] },
  { name: "Norrington's choice", types: ["clear","AWE"] },
  { name: "Whitecap Bay", types: ["clear","OST"] },
];
bingoList[5] = [
  { name: "Isla de Muerta", types: ["clear","CotBP"] },
  { name: "Isla Cruces", types: ["clear","DMC"] },
  { name: "The Bretheren Court", types: ["clear","AWE"] },
  { name: "A Spanish Legacy", types: ["clear","OST"] },
  { name: "1 Million studs", types: ["Studs"] },
  { name: "Cursed Crew", types: ["Characters"] },
];
bingoList[6] = [
  { name: "The Kraken", types: ["clear","DMC"] },
  { name: "Maelstrom", types: ["clear","AWE"] },
  { name: "The Fountain of Youth", types: ["clear","OST"] },
  { name: "Port Royal all Compass Items", types: ["compass","CotBP"] },
];
bingoList[7] = [
  { name: "Tortuga - True Pirate", types: ["tp","CotBP"] },
  { name: "Pelegosto - True Pirate", types: ["tp","DMC"] },
  { name: "Singapore - True Pirate", types: ["tp","AWE"] },
  { name: "London Town - True Pirate", types: ["tp","OST"] },
  { name: "Disguises", types: ["Red Hats"] },
];
bingoList[8] = [
  { name: "Port Royal - True Pirate", types: ["tp","CotBP"] },
  { name: "Part of the Crew, Part of the Ship", types: ["Characters"] },
  { name: "Pirate Lords", types: ["Characters"] },
  { name: "5 Red Hats", types: ["Red Hats"] },
];
bingoList[9] = [
  { name: "Queen Anne's Revenge - True Pirate", types: ["tp","OST"] },
  { name: "Davy Jone's Locker - True Pirate", types: ["tp","AWE"] },
  { name: "Port Royal - 10 Minikits", types: ["Minikits","CotBP"] },
  { name: "The Bretheren Court - 10 Minikits", types: ["Minikits","AWE"] },
];
bingoList[10] = [
  { name: "Smuglers Den - 10 Minikits", types: ["Minikits","CotBP"] },
  { name: "2 Million Studs", types: ["Studs"] },
  { name: "Isla de Muerta - True Pirate", types: ["tp","CotBP"] },
  { name: "The Bretheren Court - True Pirate", types: ["tp","AWE"] },
  { name: "A Spanish Legacy - True Pirate", types: ["tp","OST"] },
];
bingoList[11] = [
  { name: "The Fountain of Youth All Compass Items", types: ["compass","OST"] },
  { name: "A Spanish Legacy All Compass Items", types: ["compass","OST"] },
  { name: "Whitecap Bay All Compass Items", types: ["compass","OST"] },
  { name: "Queen Anne's Revenge All Compass Items", types: ["compass","OST"] },

];
bingoList[12] = [
  { name: "London Town All Compass Items", types: ["compass","OST"] },
  { name: "Singapore All Compass Items", types: ["compass","AWE"] },
  { name: "Pelegosto All Compass Items", types: ["compass","DMC"] },
  { name: "Tortuga all Compass Items", types: ["compass","CotBP"] },
  { name: "The Black Pearl Attacks - True Pirate", types: ["tp","CotBP"] },
  { name: "A touch of Destiny - True Pirate", types: ["tp","DMC"] },
];
bingoList[13] = [
  { name: "Singapore - 10 Minikits", types: ["Minikits","AWE"] },
  { name: "London Town - 10 Minikits", types: ["Minikits","OST"] },
  { name: "Whitecap Bay - 10 Minikits", types: ["Minikits","OST"] },
  { name: "A Spanish Legacy - 10 Minikits", types: ["Minikits","OST"] },
];
bingoList[14] = [
  { name: "The Black Pearl Attacks all Compass Items", types: ["compass","CotBP"] },
  { name: "A touch of Destiny All Compass Items", types: ["compass","DMC"] },
  { name: "Davy Jone's Locker All Compass Items", types: ["compass","AWE"] },
  { name: "The Kraken - True Pirate", types: ["tp","DMC"] },
  { name: "The Fountain of Youth - True Pirate", types: ["tp","OST"] },
];
bingoList[15] = [
  { name: "Revenge", types: ["Characters"] },
  { name: "Smuglers Den all Compass Items", types: ["compass","CotBP"] },
  { name: "The Dutchman's secret All Compass Items", types: ["compass","DMC"] },
  { name: "Norrington's choice All Compass Items", types: ["compass","AWE"] },
  { name: "The Dutchman's secret - 10 Minikits", types: ["Minikits","DMC"] },
];
bingoList[16] = [
  { name: "Norrington's choice - 10 Minikits", types: ["Minikits","AWE"] },
  { name: "The Dutchman's secret - True Pirate", types: ["tp","DMC"] },
  { name: "Norrington's choice - True Pirate", types: ["tp","AWE"] },
  { name: "Whitecap Bay - True Pirate", types: ["tp","OST"] },
];
bingoList[17] = [
  { name: "Isla de Muerta All Compass Items", types: ["compass","CotBP"] },
  { name: "Isla Cruces All Compass Items", types: ["compass","DMC"] },
  { name: "The Bretheren Court All Compass Items", types: ["compass","AWE"] },
  { name: "5 Million studs", types: ["Studs"] },
];
bingoList[18] = [
  { name: "Tortuga - 10 Minikits", types: ["Minikits","CotBP"] },
  { name: "Pelegosto - 10 Minikits", types: ["Minikits","DMC"] },
  { name: "Queen Anne's Revenge - 10 Minikits", types: ["Minikits","OST"] },
  { name: "Isla Cruces - True Pirate", types: ["tp","DMC"] },
];
bingoList[19] = [
  { name: "The Fountain of Youth - 10 Minikits", types: ["Minikits","OST"] },
  { name: "The Kraken All Compass Items", types: ["compass","DMC"] },
  { name: "Maelstrom All Compass Items", types: ["compass","AWE"] },
  { name: "Maelstrom - 10 Minikits", types: ["Minikits","AWE"] },
];
bingoList[20] = [
  { name: "The Black Pearl Attacks  - 10 Minikits", types: ["Minikits","CotBP"] },
  { name: "A touch of Destiny - 10 Minikits", types: ["Minikits","DMC"] },
  { name: "Davy Jone's Locker - 10 Minikits", types: ["Minikits","AWE"] },
  { name: "Maelstrom - True Pirate", types: ["tp","AWE"] },
];
bingoList[21] = [
  { name: "Isla de Muerta - 10 Minikits", types: ["Minikits","CotBP"] },
  { name: "Isla Cruces - 10 Minikits", types: ["compass","DMC"] },
  { name: "10 Red Hats", types: ["Red Hats"] },
];
bingoList[22] = [
  { name: "The Kraken - 10 Minikits", types: ["Minikits","DMC"] },
  { name: "3 ships", types: ["Minikits"] },
];
bingoList[23] = [
  { name: "Go Fast", types: ["Red Hats"] },
  { name: "Free Play Custom Character", types: [""] },
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
