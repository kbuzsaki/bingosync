var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Ether Exploitation", types: ["Quest1"] },
  { name: "Wallflower", types: ["Quest1"] },
  { name: "4 Quiet Moments", types: ["QM"] },
  { name: "1 Hover Stone", types: ["Hover"] },
  { name: "Evelen", types: ["Yellow"] }
];
bingoList[2] = [
  { name: "Phlegmatic Jamir", types: ["UM"] },
  { name: "Highborn Alexandra", types: ["UM"] },
  { name: "Hunting Help", types: ["Quest1"] },
  { name: "Tei-Tei", types: ["Yellow"] }
];
bingoList[3] = [
  { name: "No Armu Done", types: ["Quest1"] },
  { name: "All Parts on Shoulder", types: ["Collect"] },
  { name: "5 Different Blue Gems", types: ["Gems"] },
  { name: "2 Giants Troves", types: ["Trove"] }
];
bingoList[4] = [
  { name: "Laennar’s Worries", types: ["Quest1"] },
  { name: "Finding Happiness", types: ["Quest1"] },
  { name: "Steady on, Grandad!", types: ["Quest1"] },
  { name: "Dekadeka", types: ["Blue"] }
];
bingoList[5] = [
  { name: "Secure the Area", types: ["Quest1"] },
  { name: "Rival Hearts", types: ["Quest1"] },
  { name: "5 Pororo’s Favorites", types: ["Pororo"] },
  { name: "5 Arts Coins", types: ["Coin"] },
  { name: "Drydry", types: ["Red"] }
];
bingoList[6] = [
  { name: "Ether Font", types: ["Quest1"] },
  { name: "All Flower in Alcamoth", types: ["Collect"] },
  { name: "4 Giants Troves", types: ["Trove"] },
  { name: "2 Hover Stones", types: ["Hover"] }
];
bingoList[7] = [
  { name: "Brother’s Keepsake", types: ["Quest1"] },
  { name: "All Strange on Shoulder", types: ["Collect"] },
  { name: "7 Quiet Moments", types: ["QM"] },
  { name: "Tutu", types: ["Yellow"] }
];
bingoList[8] = [
  { name: "Booming Frederick", types: ["UM"] },
  { name: "Fixing Up the Junks", types: ["Quest1"] },
  { name: "7 Different Green Gems", types: ["Gems"] }
];
bingoList[9] = [
  { name: "Grotesque Deimis", types: ["UM"] },
  { name: "5 Different Red Gems", types: ["Gems"] },
  { name: "10 Pororo’s Favorites", types: ["Pororo"] },
  { name: "Faifa", types: ["Blue"] }
];
bingoList[10] = [
  { name: "Quondam Grimbellum", types: ["UM"] },
  { name: "Cyclonic Yughana", types: ["UM"] },
  { name: "Rubble Trouble", types: ["Quest1", "Hover"] },
  { name: "All Vegetables on Shoulder", types: ["Collect"] }
];
bingoList[11] = [
  { name: "Inclined to Climb", types: ["Quest1"] },
  { name: "5 Different Yellow Gems", types: ["Gems"] },
  { name: "10 Arts Coins", types: ["Coin"] }
];
bingoList[12] = [
  { name: "Dismal Umya", types: ["UM"] },
  { name: "Buoyant Rostein", types: ["UM"] },
  { name: "Sorrow", types: ["Quest2"] },
  { name: "Fofora", types: ["Yellow"] }
];
bingoList[13] = [
  { name: "Caustic Naquatra", types: ["UM"] },
  { name: "Deputy Seagal", types: ["UM"] },
  { name: "5 Different Light Blue Gems", types: ["Gems"] },
  { name: "All Giants Troves", types: ["Trove"] },
  { name: "Setset", types: ["Red"] }
];
bingoList[14] = [
  { name: "Citadel Tostega", types: ["UM"] },
  { name: "10 Different Fogbeasts on Shoulder", types: ["FB"] },
  { name: "Perceptive Quinops", types: ["UM"] },
  { name: "5 Different Orange Gems", types: ["Gems"] }
];
bingoList[15] = [
  { name: "Contemptuous Greymane", types: ["UM", "FB"] },
  { name: "Air Marshal Reisenbach", types: ["UM"] },
  { name: "New Way of Life", types: ["Quest1"] },
  { name: "Shoulder Survey Snaps", types: ["Quest1"] }
];
bingoList[16] = [
  { name: "Stubborn Minds", types: ["Quest2"] },
  { name: "All Fruit in Alcamoth", types: ["Collect"] },
  { name: "15 Pororo’s Favorites", types: ["Pororo"] },
  { name: "11 Quiet Moments", types: ["QM"] },
  { name: "Hekasa", types: ["Blue"] }
];
bingoList[17] = [
  { name: "All FB in Alcamoth", types: ["FB"] },
  { name: "Custodian Barreldart", types: ["UM", "FB"] },
  { name: "Terpsichorean Cenoth", types: ["UM"] },
  { name: "15 Arts Coins", types: ["Coin"] }
];
bingoList[18] = [
  { name: "Brace for Friendship", types: ["Quest3"] },
  { name: "All Strange in Alcamoth", types: ["Collect"] },
  { name: "Nonona", types: ["Red"] }
];
bingoList[19] = [
  { name: "Hook, Line and Sinker", types: ["Quest2"] },
  { name: "All Animals on Shoulder", types: ["Collect"] }
];
bingoList[20] = [
  { name: "Fog King", types: [] },
  { name: "Confluent Uzva", types: ["UM"] },
  { name: "All Quiet Moments", types: ["QM"] }
];
bingoList[21] = [
  { name: "Marquis Odesh", types: ["UM"] },
  { name: "The Quest for Radzamalt", types: ["Quest3"] }
];
bingoList[22] = [
  { name: "Get Wunwun", types: ["Red"] },
  { name: "Complete A Surefire Hit", types: ["Quest3"] }
];
bingoList[23] = [
  { name: "All Alcamoth Fog Beasts", types: [] },
  { name: "The Fallen", types: ["Quest4"] },
  { name: "Lost & Found", types: ["Quest1", "Pororo"] }
];
bingoList[24] = [
  { name: "Sweetest Debt", types: ["Quest4"] },
  { name: "All Animals in Alcamoth", types: ["Collect"] },
  { name: "Ravager Apelpisia", types: ["UM"] }
];
bingoList[25] = [
  { name: "Defeat the Dragon", types: [] },
  { name: "The Future Within Our Grasp", types: ["Quest4"] },
  { name: "20 Arts Coins", types: ["Coin"] }
];