var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Ether Exploitation", types: ["Ether"] },
  { name: "Wallflower", types: ["Wallflower"] },
  { name: "4 Quiet Moments", types: ["QM"] },
  { name: "1 Hover Stone", types: ["Hover"] },
  { name: "Evelen", types: ["Yellow"] }
];
bingoList[2] = [
  { name: "Phlegmatic Jamir", types: ["UM2"] },
  { name: "Highborn Alexandra", types: ["UM2"] },
  { name: "Hunting Help", types: ["Q1"] },
  { name: "Tei-Tei", types: ["Yellow"] }
];
bingoList[3] = [
  { name: "No Armu Done", types: ["Q1"] },
  { name: "All Parts on Shoulder", types: ["Collect"] },
  { name: "5 Different Blue Gems", types: ["Gems"] },
  { name: "2 Giants Troves", types: ["Trove"] }
];
bingoList[4] = [
  { name: "Laennar’s Worries", types: ["Q1"] },
  { name: "Finding Happiness", types: ["Ether"] },
  { name: "Steady on, Grandad!", types: ["Q3"] },
  { name: "Dekadeka", types: ["Blue"] }
];
bingoList[5] = [
  { name: "Secure the Area", types: ["Q3"] },
  { name: "Rival Hearts", types: ["Rival"] },
  { name: "5 Pororo’s Favorites", types: ["Pororo"] },
  { name: "5 Arts Coins", types: ["Coin"] },
  { name: "Drydry", types: ["Red"] }
];
bingoList[6] = [
  { name: "Ether Font", types: ["Q1"] },
  { name: "All Flower in Alcamoth", types: ["Collect"] },
  { name: "4 Giants Troves", types: ["Trove"] },
  { name: "2 Hover Stones", types: ["Hover"] }
];
bingoList[7] = [
  { name: "Brother’s Keepsake", types: ["Brother"] },
  { name: "All Strange on Shoulder", types: ["Collect"] },
  { name: "7 Quiet Moments", types: ["QM"] },
  { name: "Tutu", types: ["Yellow"] }
];
bingoList[8] = [
  { name: "Booming Frederick", types: ["UM2"] },
  { name: "Fixing Up the Junks", types: ["Q2"] },
  { name: "7 Different Green Gems", types: ["Gems"] }
];
bingoList[9] = [
  { name: "Grotesque Deimis", types: ["UM3"] },
  { name: "5 Different Red Gems", types: ["Gems"] },
  { name: "10 Pororo’s Favorites", types: ["Pororo"] },
  { name: "Faifa", types: ["Blue"] }
];
bingoList[10] = [
  { name: "Quondam Grimbellum", types: ["UM3"] },
  { name: "Cyclonic Yughana", types: ["UM3"] },
  { name: "Rubble Trouble", types: ["Hover"] },
  { name: "All Vegetables on Shoulder", types: ["Collect"] }
];
bingoList[11] = [
  { name: "Inclined to Climb", types: ["Q2"] },
  { name: "5 Different Yellow Gems", types: ["Gems"] },
  { name: "10 Arts Coins", types: ["Coin"] }
];
bingoList[12] = [
  { name: "Dismal Umya", types: ["UM2"] },
  { name: "Buoyant Rostein", types: ["UM3"] },
  { name: "Sorrow", types: ["Wallflower"] },
  { name: "Fofora", types: ["Yellow"] }
];
bingoList[13] = [
  { name: "Caustic Naquatra", types: ["UM1"] },
  { name: "Deputy Seagal", types: ["UM1"] },
  { name: "5 Different Light Blue Gems", types: ["Gems"] },
  { name: "All Giants Troves", types: ["Trove"] },
  { name: "Setset", types: ["Red"] }
];
bingoList[14] = [
  { name: "Citadel Tostega", types: ["UM4"] },
  { name: "10 Different Fogbeasts on Shoulder", types: ["FB"] },
  { name: "Perceptive Quinops", types: ["UM2"] },
  { name: "5 Different Orange Gems", types: ["Gems"] }
];
bingoList[15] = [
  { name: "Contemptuous Greymane", types: ["UM4"] },
  { name: "Air Marshal Reisenbach", types: ["UM2"] },
  { name: "New Way of Life", types: ["Life"] },
  { name: "Shoulder Survey Snaps", types: ["Q3"] }
];
bingoList[16] = [
  { name: "Stubborn Minds", types: ["Rival"] },
  { name: "All Fruit in Alcamoth", types: ["Collect"] },
  { name: "15 Pororo’s Favorites", types: ["Pororo"] },
  { name: "11 Quiet Moments", types: ["QM"] },
  { name: "Hekasa", types: ["Blue"] }
];
bingoList[17] = [
  { name: "Custodian Barreldart", types: ["UM4"] },
  { name: "Terpsichorean Cenoth", types: ["UM4"] },
  { name: "15 Arts Coins", types: ["Coin"] }
];
bingoList[18] = [
  { name: "Brace for Friendship", types: ["Wallflower"] },
  { name: "All Strange in Alcamoth", types: ["Collect"] },
  { name: "Nonona", types: ["Red"] }
];
bingoList[19] = [
  { name: "Hook, Line and Sinker", types: ["Life"] },
  { name: "All Animals on Shoulder", types: ["Collect"] }
];
bingoList[20] = [
  { name: "Fog King", types: ["EG"] },
  { name: "Confluent Uzva", types: ["UM4"] },
  { name: "All Quiet Moments", types: ["QM"] }
];
bingoList[21] = [
  { name: "Marquis Odesh", types: ["UM2"] },
  { name: "The Quest for Radzamalt", types: ["Life"] }
];
bingoList[22] = [
  { name: "Get Wunwun", types: ["Red", "Q4"] },
  { name: "A Surefire Hit", types: ["Life", "Q4"] }
];
bingoList[23] = [
  { name: "All Alcamoth Fog Beasts", types: ["FB"] },
  { name: "The Fallen", types: ["Wallflower", "Q4"] },
  { name: "Lost & Found", types: ["Pororo", "Q4"] }
];
bingoList[24] = [
  { name: "Sweetest Debt", types: ["Life", "Q4"] },
  { name: "All Animals in Alcamoth", types: ["Collect"] },
  { name: "Ravager Apelpisia", types: ["UM1"] }
];
bingoList[25] = [
  { name: "Defeat the Dragon", types: ["EG", "Q4"] },
  { name: "The Future Within Our Grasp", types: ["Wallflower", "Brother", "Life", "Q4"] },
  { name: "20 Arts Coins", types: ["Coin"] }
];
