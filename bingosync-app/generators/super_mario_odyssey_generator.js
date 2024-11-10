var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
{ name: "Good Morning, Captain Toad! (Cascade)", types: ["Cascade", "Captain_Toad"] },
{ name: "Purchase 4 Hats", types: ["Hats"] },
{ name: "Atop the Highest Tower (Sand)", types: ["Sand_Story", "Story"] },
{ name: "Call Jaxi from 2 Stands", types: ["Jaxi"] },
{ name: "3 Checkpoints (Lake)", types: ["Lake"] },
{ name: "20 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "2 Moons from sub-areas (Lake)", types: ["Lake", "Sub_Areas"] },
{ name: "1 Moon from Keys", types: ["Keys"] },
{ name: "Ice Cave Treasure (Sand)", types: ["Sand"] }
];
bingoList[2] = [
{ name: "7 Moons from Nuts", types: ["Nuts"] },
{ name: "3 Checkpoints (Lost)", types: ["Lost"] },
{ name: "How You Doin', Captain Toad? (Metro)", types: ["Metro", "Captain_Toad"] },
{ name: "4 Checkpoints (Metro)", types: ["Metro"] },
{ name: "Captain Toad (Lost)", types: ["Lost", "Captain_Toad"] },
{ name: "6 Checkpoints (Sand)", types: ["Sand"] },
{ name: "25 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "10 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "Good Evening, Captain Toad! (Cap)", types: ["Cap", "Captain_Toad"] },
{ name: "Plant 1 Seed (Lake)", types: ["Lake", "Seeds"] }
];
bingoList[3] = [
{ name: "2 Moons from Slots", types: ["Slots"] },
{ name: "Look at 2 Hint Arts", types: ["Hint_View"] },
{ name: "2 Moons from sub-areas (Sand)", types: ["Sand", "Sub_Areas"] },
{ name: "7 Checkpoints (Sand)", types: ["Sand"] },
{ name: "1 Moon from Lakitu-Fishing", types: ["Fishing"] },
{ name: "2 Stickers", types: ["Stickers"] },
{ name: "1 Warp-Painting Moon", types: ["Warp_Painting"] },
{ name: "Answer 6 Sphynx Questions Correctly", types: ["Sphynx"] },
{ name: "Purchase 4 Souvenirs", types: ["Souvenirs"] },
{ name: "30 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "A Successful Repair Job (Lake)", types: ["Lake"] }
];
bingoList[4] = [
{ name: "20 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "4 Checkpoints (Wooded)", types: ["Wooded"] },
{ name: "3 Timer Challenges", types: ["Timer"] },
{ name: "Purchase 5 Hats", types: ["Hats"] },
{ name: "2 Checkpoints (Cap)", types: ["Cap"] },
{ name: "Call Jaxi from 3 Stands", types: ["Jaxi"] },
{ name: "24 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "12 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "10 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "Purchase 3 Full Costume Sets", types: ["Outfits"] },
{ name: "30 Regional Coins (Sand)", types: ["Sand_Regional"] },
];
bingoList[5] = [
{ name: "3 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "3 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "20 Moons (Wooded)", types: ["Wooded_Moons"] },
{ name: "Let's Go Swimming, Captain Toad! (Lake)", types: ["Lake", "Captain_Toad"] },
{ name: "3 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "Moon Shards in the Sand (Sand)", types: ["Sand_Story", "Story"] },
{ name: "12 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "4 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "4 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "2 Moons from Shiny Rocks", types: ["Shiny_Rocks"] },
{ name: "35 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
];
bingoList[6] = [
{ name: "10 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "20 Regional Coins (Metro)", types: ["Metro_Regional"] },
{ name: "25 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "10 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "10 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "Walking the Desert (Sand)", types: ["Sand"] },
{ name: "2 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "35 Regional Coins (Sand)", types: ["Sand_Regional"] },
{ name: "Jump-Rope Hero! (Metro)", types: ["Metro"] },
{ name: "4 Unique Life-Up Hearts (excl. Shops)", types: ["LifeUp"] }
];
bingoList[7] = [
{ name: "Purchase 4 Moons", types: ["Shop_Moons"] },
{ name: "5 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "22 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "14 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "4 Moons from sub-areas (Metro)", types: ["Metro", "Sub_Areas"] },
{ name: "2 Moons from sub-areas (Cascade)", types: ["Cascade", "Sub_Areas"] },
{ name: "2 Moons from Wooden Crates", types: ["Crates"] },
{ name: "12 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "Purchase 4 Full Costume Sets", types: ["Outfits"] },
{ name: "15 Regional Coins (Lake)", types: ["Lake_Regional"] }
];
bingoList[8] = [
{ name: "Rewiring the Neighborhood (Metro)", types: ["Locked_Door"] },
{ name: "15 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "2 Moons from sub-areas (Cap)", types: ["Cap", "Sub_Areas"] },
{ name: "12 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "4 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "4 Timer Challenges", types: ["Timer"] },
{ name: "3 Stickers", types: ["Stickers"] },
{ name: "1 Moon from Hint Art", types: ["Hint_Moons"] },
{ name: "26 Moons (Metro)", types: ["Metro_Moons"] },
{ name: "4 Moons from sub-areas (Sand)", types: ["Sand", "Sub_Areas"] },
{ name: "20 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "25 Regional Coins (Metro)", types: ["Metro_Regional"] },
{ name: "5 Story Moons (excl. Multi Moons)", types: ["Story"] }
];
bingoList[9] = [
{ name: "8 Moons from Nuts", types: ["Nuts"] },
{ name: "14 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "15 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "22 Moons (Wooded)", types: ["Wooded_Moons"] },
{ name: "25 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "20 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "Capture both the Cactus and the Tree", types: ["Capture_Both"] },
{ name: "3 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "20 Unique Captures", types: ["Unique_Captures"] },
{ name: "40 Regional Coins (Sand)", types: ["Sand_Regional"] }
];
bingoList[10] = [
{ name: "Plant 4 Seeds (Total)", types: ["Seeds"] },
{ name: "5 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "4 Stickers", types: ["Stickers"] },
{ name: "5 Timer Challenges", types: ["Timer"] },
{ name: "30 Regional Coins (Metro)", types: ["Metro_Regional"] },
{ name: "Showdown on the Inverted Pyramid (Sand)", types: ["Sand_Story", "Story"] },
{ name: "Purchase 5 Full Costume Sets", types: ["Outfits"] },
{ name: "30 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "30 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "RC Car Pro! (Metro)", types: ["Metro"] },
{ name: "6 Unique Life-Up Hearts (excl. Shops)", types: ["LifeUp"] }
];
bingoList[11] = [
{ name: "Exploring for Treasure (Wooded)", types: ["Locked_Door"] },
{ name: "4 Moons from sub-areas (Wooded)", types: ["Wooded", "Sub_Areas"] },
{ name: "6 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "4 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "Call Jaxi from 4 Stands", types: ["Jaxi"] },
{ name: "Dancing With New Friends (Sand)", types: ["Locked_Door"] },
{ name: "20 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "Wear the Boxer Shorts", types: ["Boxers"] },
{ name: "9 Moons from Nuts", types: ["Nuts"] },
{ name: "22 Unique Captures", types: ["Unique_Captures"] },
{ name: "45 Regional Coins (Sand)", types: ["Sand_Regional"] },
{ name: "Herding Sheep in the Dunes (Sand)", types: ["Sand", "Sheep"] }
];
bingoList[12] = [
{ name: "24 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "6 Moons from sub-areas (Sand)", types: ["Sand", "Sub_Areas"] },
{ name: "Purchase 6 Souvenirs", types: ["Souvenirs"] },
{ name: "25 Regional Coins (Cap)", types: ["Cap_Regional"] },
{ name: "90 Moons (Total)", types: ["Total_Moons"] },
{ name: "Look at 3 Hint Arts", types: ["Hint_View"] },
{ name: "3 Moons from Wooden Crates", types: ["Crates"] },
{ name: "14 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "4 Moons (Deep Woods)", types: ["Deep_Woods"] },
{ name: "2 Moons from Hint Art", types: ["Hint_Moons"] },
{ name: "35 Regional Coins (Lake)", types: ["Lake_Regional"] },
{ name: "35 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "35 Regional Coins (Metro)", types: ["Metro_Regional"] }
];
bingoList[13] = [
{ name: "4 Moons from sub-areas (Cascade)", types: ["Cascade", "Sub_Areas"] },
{ name: "24 Moons (Wooded)", types: ["Wooded_Moons"] },
{ name: "Plant 5 Seeds (Total)", types: ["Seeds"] },
{ name: "100 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "1 Moon from Goombas", types: ["Goomba"] },
{ name: "5 Multi Moons", types: ["Multi_Moons"] },
{ name: "5 Checkpoints (Wooded)", types: ["Wooded"] },
{ name: "24 Unique Captures", types: ["Unique_Captures"] },
{ name: "Purchase 6 Full Costume Sets", types: ["Outfits"] },
{ name: "14 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "25 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "7 Story Moons (excl. Multi Moons)", types: ["Story"] }
];
bingoList[14] = [
{ name: "6 Moons from sub-areas (Metro)", types: ["Metro", "Sub_Areas"] },
{ name: "Purchase 5 Moons", types: ["Shop_Moons"] },
{ name: "2 Warp-Painting Moons", types: ["Warp_Painting"] },
{ name: "125 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "6 Moons from sub-areas (Wooded)", types: ["Wooded", "Sub_Areas"] },
{ name: "3 Moons from Shiny Rocks", types: ["Shiny_Rocks"] },
{ name: "4 Moons from sub-areas (Cap)", types: ["Cap", "Sub_Areas"] },
{ name: "40 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "50 Regional Coins (Sand)", types: ["Sand_Regional"] },
{ name: "40 Regional Coins (Metro)", types: ["Metro_Regional"] }
];
bingoList[15] = [
{ name: "16 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "6 Checkpoints (Metro)", types: ["Metro"] },
{ name: "5 Moons from Music Notes", types: ["Music_Notes"] },
{ name: "5 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "26 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "10 Moons from Nuts", types: ["Nuts"] },
{ name: "16 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "2 Ground-Pound Moons (Wooded)", types: ["Wooded", "Deep_Woods"] },
{ name: "3 Ground-Pound Moons (Wooded)", types: ["Wooded", "Deep_Woods"] },
{ name: "26 Unique Captures", types: ["Unique_Captures"] },
{ name: "8 Unique Life-Up Hearts (excl. Shops)", types: ["LifeUp"] }
];
bingoList[16] = [
{ name: "150 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "6 Timer Challenges", types: ["Timer"] },
{ name: "7 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "3 Checkpoints (Seaside)", types: ["Late_Game", "Seaside"] },
{ name: "95 Moons (Total)", types: ["Total_Moons"] },
{ name: "Purchase 7 Full Costume Sets", types: ["Outfits"] },
{ name: "45 Regional Coins (Cascade)", types: ["Cascade_Regional"] },
{ name: "World Peace in 3 Kingdoms (excl. Cap, Cloud, Lost)", types: ["World_Peace"] },
{ name: "30 Regional Coins (Lost)", types: ["Lost_Regional"] },
{ name: "10 Regional Coins (Snow)", types: ["Late_Game", "Snow_Regional"] },
{ name: "Captain Toad is Chilly! (Snow)", types: ["Late_Game", "Snow", "Captain_Toad"] },
{ name: "All Regional Coins in 1 Kingdom", types: ["Regional_Kingdoms"] },
];
bingoList[17] = [
{ name: "8 Moons (Cap)", types: ["Cap_Moons"] },
{ name: "Purchase 6 Moons", types: ["Shop_Moons"] },
{ name: "16 Moons (Cascade)", types: ["Cascade_Moons"] },
{ name: "8 Checkpoints (Sand)", types: ["Sand"] },
{ name: "Uncork 1 Fountain (Seaside)", types: ["Late_Game", "Uncork", "Story"] },
{ name: "Good Job, Captain Toad! (Seaside)", types: ["Late_Game", "Seaside", "Captain_Toad"] },
{ name: "50 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "28 Unique Captures", types: ["Unique_Captures"] },
{ name: "2 Moons from Keys", types: ["Keys"] }
];
bingoList[18] = [
{ name: "16 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "8 Moons from sub-areas (Metro)", types: ["Metro", "Sub_Areas"] },
{ name: "175 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "4 Checkpoints (Seaside)", types: ["Late_Game", "Seaside"] },
{ name: "Uncork 2 Fountains (Seaside)", types: ["Late_Game", "Uncork", "Story"] },
{ name: "4 Moons (Snow)", types: ["Late_Game", "Snow_Moons"] },
{ name: "15 Regional Coins (Snow)", types: ["Late_Game", "Snow_Regional"] },
{ name: "World Peace Restored! (Wooded)", types: ["World_Peace"] },
{ name: "Moon Shards in the Cold Room (Snow)", types: ["Late_Game", "Locked_Door"] }
];
bingoList[19] = [
{ name: "3 Warp-Painting Moons", types: ["Warp_Painting"] },
{ name: "28 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "5 Captain Toad Moons", types: ["Captain_Toad"] },
{ name: "7 Timer Challenges", types: ["Timer"] },
{ name: "Uncork 3 Fountains (Seaside)", types: ["Late_Game", "Uncork", "Story"] },
{ name: "25 Regional Coins (Seaside)", types: ["Late_Game", "Seaside_Regional"] },
{ name: "Purchase 8 Full Costume Sets", types: ["Outfits"] },
{ name: "6 Moons (Seaside)", types: ["Late_Game", "Seaside_Moons"] },
{ name: "All Regional Coins in 2 Kingdoms", types: ["Regional_Kingdoms"] }
];
bingoList[20] = [
{ name: "200 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "2 Moons from Goombas", types: ["Late_Game", "Goomba"] },
{ name: "6 Multi Moons", types: ["Multi_Moons"] },
{ name: "30 Regional Coins (Seaside)", types: ["Late_Game", "Seaside_Regional"] },
{ name: "20 Regional Coins (Snow)", types: ["Late_Game", "Snow_Regional"] },
{ name: "18 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "8 Moons (Seaside)", types: ["Late_Game", "Seaside_Moons"] },
{ name: "6 Moons (Snow)", types: ["Late_Game", "Snow_Moons"] },
{ name: "World Peace Restored! (Sand)", types: ["World_Peace"] }
];
bingoList[21] = [
{ name: "5 Stickers", types: ["Stickers"] },
{ name: "9 Treasure Chest Moons", types: ["Treasure_Chest"] },
{ name: "35 Regional Coins (Seaside)", types: ["Late_Game", "Seaside_Regional"] },
{ name: "10 Moons (Seaside)", types: ["Late_Game", "Seaside_Moons"] },
{ name: "8 Moons (Snow)", types: ["Late_Game", "Snow_Moons"] },
{ name: "1 Barrier-Moon (Snow)", types: ["Late_Game", "Snow", "Story"] },
{ name: "Look at 4 Hint Arts", types: ["Late_Game", "Hint_View"] },
{ name: "60 Regional Coins (Wooded)", types: ["Wooded_Regional"] },
{ name: "A Relaxing Dance (Seaside)", types: ["Late_Game", "Locked_Door"] },
{ name: "1 Checkpoint (Snow)", types: ["Late_Game", "Snow"] }
];
bingoList[22] = [
{ name: "6 Moons from Moon Shards", types: ["Moon_Shards"] },
{ name: "26 Moons (Wooded)", types: ["Wooded_Moons"] },
{ name: "2 Moons from sub-areas (Seaside)", types: ["Late_Game", "Seaside", "Sub_Areas"] },
{ name: "40 Regional Coins (Seaside)", types: ["Late_Game", "Seaside_Regional"] },
{ name: "100 Moons (Total)", types: ["Total_Moons"] },
{ name: "3 Ground-Pound Moons (Seaside)", types: ["Late_Game", "Seaside", "Seaside_Moons"] },
{ name: "18 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "Answer 8 Sphynx Questions Correctly", types: ["Late_Game", "Sphynx"] },
{ name: "9 Story Moons (excl. Multi Moons)", types: ["Story"] }
];
bingoList[23] = [
{ name: "25 Regional Coins (Snow)", types: ["Late_Game", "Snow_Regional"] },
{ name: "Picture Match: Basically a Goomba (Cloud)", types: ["Cloud"] },
{ name: "4 Ground-Pound Moons (Seaside)", types: ["Late_Game", "Seaside", "Seaside_Moons"] },
{ name: "18 Moons (Lost)", types: ["Lost_Moons"] },
{ name: "2 Barrier-Moons (Snow)", types: ["Late_Game", "Snow", "Story"] },
{ name: "Caught Hopping in the Jungle! (Lost)", types: ["Lost", "Rabbit"] },
{ name: "30 Moons (Sand)", types: ["Sand_Moons"] }
];
bingoList[24] = [
{ name: "6 Moons from Music Notes", types: ["Late_Game", "Music_Notes"] },
{ name: "7 Moons from 8-bit Sections", types: ["8bit"] },
{ name: "225 Total Regional Coins", types: ["Regional_Coins"] },
{ name: "20 Moons from sub-areas (Total)", types: ["Sub_Areas"] },
{ name: "5 Ground-Pound Moons (Seaside)", types: ["Late_Game", "Seaside", "Seaside_Moons"] },
{ name: "4 Moons from sub-areas (Seaside)", types: ["Late_Game", "Seaside", "Sub_Areas"] }
];
bingoList[25] = [
{ name: "World Peace Restored! (Metro)", types: ["World_Peace"] },
{ name: "20 Moons (Lake)", types: ["Lake_Moons"] },
{ name: "3 Barrier-Moons (Snow)", types: ["Late_Game", "Snow", "Story"] },
{ name: "10 Moons from sub-areas (Metro)", types: ["Metro", "Sub_Areas"] },
{ name: "28 Moons (Wooded)", types: ["Wooded_Moons"] },
{ name: "32 Moons (Sand)", types: ["Sand_Moons"] },
{ name: "6 Ground-Pound Moons (Seaside)", types: ["Late_Game", "Seaside", "Seaside_Moons"] }
];
