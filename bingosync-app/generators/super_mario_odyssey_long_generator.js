bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
{ name: "4 Checkpoints (Cascade)", types: ["Cascade"] },
{ name: "Purchase 7 Hats", types: ["Hats"] },
{ name: "Call Jaxi from 5 Stands", types: ["Jaxi"] },
{ name: "5 Checkpoints (Lake)", types: ["Lake"] },
{ name: "30 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "3 Checkpoints (Lost)", types: ["Lost"] },
{ name: "2 Moons from Slots", types: ["Slots"] },
{ name: "1 Moon from Lakitu-Fishing", types: ["Fishing"] },
{ name: "2 Checkpoints (Cap)", types: ["Cap"] }
];
bingoList[2] = [
{ name: "8 Moons from Nuts", types: ["Nuts"] },
{ name: "6 Checkpoints (Metro)", types: ["Metro"] },
{ name: "Captain Toad (Lost)", types: ["Lost"] },
{ name: "7 Checkpoints (Sand)", types: ["Sand"] },
{ name: "35 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "16 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "Moon Shards in the Sand (Sand)", types: ["Sand_Story"] },
{ name: "16 Non-Ground-Pound Moons (Sand)", types: ["No_Moons", "Sand_Condition"] },
{ name: "Capture both the Cactus and the Tree", types: ["Capture_Both"] }
];
bingoList[3] = [
{ name: "Look at 3 Hint Arts", types: ["Hint_View"] },
{ name: "4 Moons from sub-areas (Sand)", types: ["Sand"] },
{ name: "8 Checkpoints (Sand)", types: ["Sand"] },
{ name: "4 Stickers", types: ["Stickers"] },
{ name: "2 Warp-Painting Moons", types: ["Warp_Painting"] },
{ name: "Purchase 8 Souvenirs", types: ["Souvenirs"] },
{ name: "40 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "Koopa Trace-Walking (Sand)", types: ["Sand"] },
{ name: "Wear the Boxer Shorts", types: ["Coins"] }
];
bingoList[4] = [
{ name: "30 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] },
{ name: "6 Checkpoints (Wooded)", types: ["Wooded"] },
{ name: "5 Timer Challenges", types: ["Timer"] },
{ name: "Purchase 8 Hats", types: ["Hats"] },
{ name: "Call Jaxi from 6 Stands", types: ["Jaxi"] },
{ name: "34 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "14 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "12 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "Purchase 5 Full Costume Sets", types: ["Outfits"] },
{ name: "40 Regional Coins (Sand)", types: ["Sand_Regional"] }
];
bingoList[5] = [
{ name: "5 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "5 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "30 Moons (Wooded)", types: ["Wooded_Moons", "Wooded_Condition"] },
{ name: "4 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "16 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "6 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "5 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "3 Moons from Shiny Rocks", types: ["Shiny_Rocks"] },
{ name: "45 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "2 Moons from Slots", types: ["Slots"] }
];
bingoList[6] = [
{ name: "20 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "40 Regional Coins (Metro)", types: ["Metro_Regional"] },
{ name: "35 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "20 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "30 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "5 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "45 Regional Coins (Sand)", types: ["Sand_Regional"] },
{ name: "Herding Sheep in the Dunes (Sand)", types: ["Sand"] }
];
bingoList[7] = [
{ name: "Purchase 6 Moons", types: ["Shop_Moons"] },
{ name: "7 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "32 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] },
{ name: "16 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "8 Moons from sub-areas (Metro)", types: ["Metro"] },
{ name: "4 Moons from sub-areas (Cascade)", types: ["Cascade"] },
{ name: "3 Moons from Wooden Crates", types: ["Crates"] },
{ name: "18 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "20 Unique Captures", types: ["Unique_Captures"] },
{ name: "Purchase 6 Full Costume Sets", types: ["Outfits"] },
{ name: "25 Regional Coins (Lake)", types: ["Lake_Regional"] }
];
bingoList[8] = [
{ name: "35 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "4 Moons from sub-areas (Cap)", types: ["Cap"] },
{ name: "14 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "5 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "6 Timer Challenges", types: ["Timer"] },
{ name: "5 Stickers", types: ["Stickers"] },
{ name: "2 Moons from Hint Art", types: ["Hint_Moons"] },
{ name: "36 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "6 Moons from sub-areas (Sand)", types: ["Sand"] },
{ name: "30 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "45 Regional Coins (Metro)", types: ["Metro_Regional"] }
];
bingoList[9] = [
{ name: "9 Moons from Nuts", types: ["Nuts"] },
{ name: "18 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "25 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "32 Moons (Wooded)", types: ["Wooded_Moons", "Wooded_Condition"] },
{ name: "35 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "40 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "6 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "22 Unique Captures", types: ["Unique_Captures"] },
{ name: "50 Regional Coins (Sand)", types: ["Sand_Regional"] }
];
bingoList[10] = [
{ name: "Plant 6 Seeds", types: ["Seeds"] },
{ name: "7 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "6 Stickers", types: ["Stickers"] },
{ name: "7 Timer Challenges", types: ["Timer"] },
{ name: "50 Regional Coins (Metro)", types: ["Metro_Regional"] },
{ name: "Purchase 7 Full Costume Sets", types: ["Outfits"] },
{ name: "40 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "40 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "16 Non-Nut Moons (Wooded)", types: ["No_Moons", "Wooded_Condition"] }
];
bingoList[11] = [
{ name: "6 Moons from sub-areas (Wooded)", types: ["Wooded"] },
{ name: "38 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "8 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "6 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "Call Jaxi from 7 Stands", types: ["Jaxi"] },
{ name: "125 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "30 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "10 Moons from Nuts", types: ["Nuts"] },
{ name: "24 Unique Captures", types: ["Unique_Captures"] },
{ name: "55 Regional Coins (Sand)", types: ["Sand_Regional"] },
];
bingoList[12] = [
{ name: "34 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] },
{ name: "8 Moons from sub-areas (Sand)", types: ["Sand"] },
{ name: "Purchase 10 Souvenirs", types: ["Souvenirs"] },
{ name: "45 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "100 Moons (Total)", types: ["Total_Moons"] },
{ name: "Look at 4 Hint Arts", types: ["Hint_View"] },
{ name: "20 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "7 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "3 Moons from Hint Art", types: ["Hint_Moons"] },
{ name: "45 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "45 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "55 Regional Coins (Metro)", types: ["Metro_Regional"] }
];
bingoList[13] = [
{ name: "6 Moons from sub-areas (Cascade)", types: ["Cascade"] },
{ name: "34 Moons (Wooded)", types: ["Wooded_Moons", "Wooded_Condition"] },
{ name: "Plant 7 Seeds", types: ["Seeds"] },
{ name: "150 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "2 Moons from Goombas", types: ["Goomba"] },
{ name: "6 Multi Moons", types: ["Multi_Moons"] },
{ name: "7 Checkpoints (Wooded)", types: ["Wooded"] },
{ name: "26 Unique Captures", types: ["Unique_Captures"] },
{ name: "Purchase 8 Full Costume Sets", types: ["Outfits"] },
{ name: "16 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "35 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "World Peace Restored! (Wooded)", types: ["World_Peace"] }
];
bingoList[14] = [
{ name: "10 Moons from sub-areas (Metro)", types: ["Metro"] },
{ name: "Purchase 7 Moons", types: ["Shop_Moons"] },
{ name: "3 Warp-Painting Moons", types: ["Warp_Painting"] },
{ name: "175 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "8 Moons from sub-areas (Wooded)", types: ["Wooded"] },
{ name: "6 Moons from sub-areas (Cap)", types: ["Cap"] },
{ name: "50 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "60 Regional Coins (Sand)", types: ["Sand_Regional"] },
{ name: "60 Regional Coins (Metro)", types: ["Metro_Regional"] },
{ name: "1 Checkpoint (Luncheon)", types: ["Luncheon"] }
];
bingoList[15] = [
{ name: "18 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "8 Checkpoints (Metro)", types: ["Metro"] },
{ name: "6 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "6 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "36 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] },
{ name: "11 Moons from Nuts", types: ["Nuts"] },
{ name: "22 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "2 Ground-Pound Moons (Wooded)", types: ["Wooded", "Deep_Woods"] },
{ name: "3 Ground-Pound Moons (Wooded)", types: ["Wooded", "Deep_Woods"] },
{ name: "28 Unique Captures", types: ["Unique_Captures"] }
];
bingoList[16] = [
{ name: "200 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "8 Timer Challenges", types: ["Timer"] },
{ name: "9 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "6 Checkpoints (Seaside)", types: ["Seaside"] },
{ name: "110 Moons (Total)", types: ["Total_Moons"] },
{ name: "Purchase 9 Full Costume Sets", types: ["Outfits"] },
{ name: "50 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "World Peace in 4 Kingdoms (excl. Cap, Cloud, Lost)", types: ["World_Peace"] },
{ name: "40 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "20 Regional Coins (Snow)", types: ["Snow_Regional"] },
{ name: "Jump-Rope Hero (Metro)", types: ["Metro"] }
];
bingoList[17] = [
{ name: "10 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "Purchase 8 Moons", types: ["Shop_Moons"] },
{ name: "18 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "9 Checkpoints (Sand)", types: ["Sand"] },
{ name: "Uncork 3 Fountains (Seaside)", types: ["Uncork"] },
{ name: "60 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "30 Unique Captures", types: ["Unique_Captures"] },
{ name: "40 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "Goomba Picture-Match (Cloud)", types: ["Cloud"] }
];
bingoList[18] = [
{ name: "20 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "12 Moons from sub-areas (Metro)", types: ["Metro"] },
{ name: "225 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "7 Checkpoints (Seaside)", types: ["Seaside"] },
{ name: "Uncork 4 Fountains (Seaside)", types: ["Uncork"] },
{ name: "12 Moons (Snow)", types: ["Snow_Moons"] },
{ name: "25 Regional Coins (Snow)", types: ["Snow_Regional"] },
{ name: "World Peace Restored! (Sand)", types: ["World_Peace"] },
{ name: "4 Moons (Luncheon)", types: ["Luncheon_Moons"] }
];
bingoList[19] = [
{ name: "4 Warp-Painting Moons", types: ["Warp_Painting"] },
{ name: "38 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] },
{ name: "7 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "9 Timer Challenges", types: ["Timer"] },
{ name: "45 Regional Coins (Seaside)", types: ["Seaside_Regional"] },
{ name: "Purchase 10 Full Costume Sets", types: ["Outfits"] },
{ name: "14 Moons (Seaside)", types: ["Seaside_Moons", "Seaside_ConditionA"] },
{ name: "3 Barrier-Moons (Snow)", types: ["Snow"] },
{ name: "14 Moons (Snow)", types: ["Snow_Moons"] },
{ name: "32 Unique Captures", types: ["Unique_Captures"] }
];
bingoList[20] = [
{ name: "250 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "3 Moons from Goombas", types: ["Goomba"] },
{ name: "7 Multi Moons", types: ["Multi_Moons"] },
{ name: "50 Regional Coins (Seaside)", types: ["Seaside_Regional"] },
{ name: "30 Regional Coins (Snow)", types: ["Snow_Regional"] },
{ name: "24 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "16 Moons (Seaside)", types: ["Seaside_Moons", "Seaside_ConditionA"] },
{ name: "16 Moons (Snow)", types: ["Snow_Moons"] },
{ name: "4 Moons from Wooden Crates", types: ["Crates"] },
{ name: "3 Moons from Slots", types: ["Slots"] },
{ name: "6 Moons (Luncheon)", types: ["Luncheon_Moons"] }
];
bingoList[21] = [
{ name: "7 Stickers", types: ["Stickers"] },
{ name: "11 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "20 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "55 Regional Coins (Seaside)", types: ["Seaside_Regional"] },
{ name: "18 Moons (Seaside)", types: ["Seaside_Moons", "Seaside_ConditionA"] },
{ name: "14 Moons (Snow)", types: ["Snow_Moons"] },
{ name: "4 Barrier-Moons (Snow)", types: ["Snow"] },
{ name: "Look at 5 Hint Arts", types: ["Hint_View"] },
{ name: "70 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "18 Moons (Snow)", types: ["Snow_Moons"] }
];
bingoList[22] = [
{ name: "7 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "36 Moons (Wooded)", types: ["Wooded_Moons", "Wooded_Condition"] },
{ name: "4 Moons from sub-areas (Seaside)", types: ["Seaside"] },
{ name: "60 Regional Coins (Seaside)", types: ["Seaside_Regional"] },
{ name: "120 Moons (Total)", types: ["Total_Moons"] },
{ name: "5 Ground-Pound Moons (Seaside)", types: ["Seaside", "Seaside_ConditionB"] },
{ name: "10 Regional Coins (Luncheon)", types: ["Luncheon_Regional"] },
{ name: "8 Moons (Luncheon)", types: ["Luncheon_Moons"] },
{ name: "The Broodals Are After Some Cookin' (Luncheon)", types: ["Luncheon_Story"] },
{ name: "1 Ground-Pound Moon (Luncheon)", types: ["Luncheon"] }
];
bingoList[23] = [
{ name: "35 Regional Coins (Snow)", types: ["Snow_Regional"] },
{ name: "World Peace Restored! (Metro)", types: ["World_Peace"] },
{ name: "6 Ground-Pound Moons (Seaside)", types: ["Seaside", "Seaside_ConditionB"] },
{ name: "20 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "10 Non-Underwater Moons (Seaside)", types: ["No_Moons", "Seaside_ConditionA", "Seaside_ConditionB"] },
{ name: "15 Regional Coins (Luncheon)", types: ["Luncheon_Regional"] },
{ name: "10 Moons (Luncheon)", types: ["Luncheon_Moons"] },
{ name: "2 Moons from sub-areas (Luncheon)", types: ["Luncheon"] },
{ name: "1 Moon from Golden Turnips", types: ["Turnips"] },
{ name: "2 Checkpoints (Luncheon)", types: ["Luncheon"] },
{ name: "2 Ground-Pound Moons (Luncheon)", types: ["Luncheon"] }
];
bingoList[24] = [
{ name: "7 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "9 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "42 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "275 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "26 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "40 Moons (Sand)", types: ["Sand_Moons", "Sand_Condition"] },
{ name: "20 Regional Coins (Luncheon)", types: ["Luncheon_Regional"] },
{ name: "12 Moons (Luncheon)", types: ["Luncheon_Moons"] },
{ name: "3 Ground-Pound Moons (Luncheon)", types: ["Luncheon"] }
];
bingoList[25] = [
{ name: "World Peace Restored! (Seaside)", types: ["World_Peace"] },
{ name: "24 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "World Peace Restored! (Snow)", types: ["World_Peace"] },
{ name: "20 Moons (Seaside)", types: ["Seaside_Moons", "Seaside_ConditionA"] },
{ name: "25 Regional Coins (Luncheon)", types: ["Luncheon_Regional"] },
{ name: "Under the Cheese Rocks (Luncheon)", types: ["Luncheon_Story"] },
{ name: "4 Moons from sub-areas (Luncheon)", types: ["Luncheon"] },
{ name: "3 Checkpoints (Luncheon)", types: ["Luncheon"] },
{ name: "Capture both the Cactus and the Meat", types: ["Capture_Both"] },
{ name: "Capture both the Tree and the Meat", types: ["Capture_Both"] },
{ name: "Capture the Cactus, the Tree and the Meat", types: ["Capture_Both"] }
];
