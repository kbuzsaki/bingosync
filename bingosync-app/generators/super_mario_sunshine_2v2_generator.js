var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var thisVersion = "v3 beta 9";

var bingoList = [];
bingoList[1] = [
{ name: "3 Fruit Lady Blue Coins", jp: "アルバイトの青コイン3枚", types: ["Fruit_Ladies"] },
{ name: "12 Blue Coins from Delfino Plaza", jp: "ドルピックタウンの青コイン10枚", types: ["Plaza_Blues", "Plaza_M", "Fruit_Ladies"] },
{ name: "100 Coin Shine from Pianta", jp: "モンテのむらの100枚コイン", types: ["X100_Coins"] },
{ name: "25 Blues from Pinna", jp: "ドルピックタウンの青コイン10枚", types: ["Plaza_Blues", "Plaza_M", "Fruit_Ladies"] },
{ name: "Two 100 Coin Shines", jp: "100枚コインのシャイン3枚", types: ["Pianta_100", "X100_Coins", "Bianco_100", "Ricco_100", "Gelato_100", "Pinna_100", "Sirena_100", "Noki_100"] },
];
bingoList[2] = [
{ name: "Bianco 4 Fluddless", jp: "", types: ["Bianco_20", "Bianco_Early", "Bianco_Shines"] },
{ name: "3 Red Coin Shines", jp: "赤コインのシャイン3枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Low_Reds"] },
{ name: "1 Hidden Shine in Bianco", jp: "ビアンコヒルズの隠しシャイン1枚", types: ["Bianco_Early", "Bianco_Hidden", "Bianco_Shines"] },
{ name: "100 Coin Shine from Ricco", jp: "リコハーバーの100枚コイン", types: ["Ricco_100s", "Ricco_Early", "Ricco_Top", "Ricco_Rocket", "Ricco_Shines"] },
{ name: "Ricco 3 Hoverless", jp: "リコ3ホバー禁止", types: ["Ricco_Top", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] }
];
bingoList[3] = [
{ name: "5 Linked Blue Coin Pairs", jp: "双子ラクガキの青コイン5ペア", types: ["Linked_Blues"] },
{ name: "15 Blue Coins from Bianco", jp: "ビアンコヒルズの青コイン15枚", types: ["Bianco_Blues", "Bianco_Early", "Bianco_30"] },
{ name: "4 Fruit Lady Blue Coins", jp: "アルバイトの青コイン3枚", types: ["Fruit_Ladies"] },
{ name: "1 Hidden Shine in Ricco", jp: "リコハーバーの隠しシャイン1枚", types: ["Ricco_Top", "Ricco_Hidden", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] },
{ name: "15 Blue Coins from M Graffiti", jp: "M字から青コイン15枚", types: ["M_Graffiti", "Plaza_M", "Ricco_M"] }
];
bingoList[4] = [
{ name: "Defeat 2 Blooper Bosses", jp: "", types: ["Noki_Early", "XBoss_Shines", "Ricco_6", "Ricco_Shadow"] },
{ name: "2 Rocket Nozzle Unlocks", jp: "ロケットノズル2つ解放", types: ["Rocket_Nozzle", "Bianco_Rocket", "Ricco_Rocket", "Gelato_Rocket", "Noki_Rocket", "Pianta_Rocket", "Plaza_Rocket", "Two_Rockets"] },
{ name: "15 Blue Coins from Gelato", jp: "マンマビーチの青コイン15枚", types: ["Gelato_Blues", "Fast_20", "Gelato_30"] },
{ name: "15 Blue Coins from Pianta", jp: "モンテのむらの青コイン20枚", types: ["Pianta_Blues", "Pianta_Late", "Butterfly", "Pianta_Yoshi", "Pianta_30", "Pianta_Shines", "Pianta_Lives"] },
{ name: "20 Blue Coins from Bianco", jp: "ビアンコヒルズの青コイン20枚", types: ["Bianco_20", "Bianco_30", "Bianco_Early", "Bianco_Blues", "Bianco_Shines"] }
];
bingoList[5] = [
{ name: "3 Hidden Shines", jp: "", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Gelato_Hidden", "Noki_Hidden", "Secret_Shines", "Hidden_Plaza"] },
{ name: "4 Red Coin Shines", jp: "赤コインのシャイン4枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Bianco_Early", "Bianco_8", "Low_Reds"] },
{ name: "12 Blue Coins from Pinna", jp: "ピンナパークの青コイン15枚", types: ["Pinna_Blues", "Fast_20", "Pinna_Early", "Pinna_30", "Pinna_Shines"] },
{ name: "2 Hidden Shines in Gelato", jp: "マンマビーチの隠しシャイン2枚", types: ["Gelato_Early", "Gelato_Hidden"] },
{ name: "Pianta 3 NO damage taken", jp: "モンテ3をノーダメージでクリア", types: ["Goopy_Inferno", "Pianta_Shines"] }
];
bingoList[6] = [
{ name: "5 Blue Bird Blue Coins", jp: "青い鳥の青コイン6枚", types: ["Blue_Bird", "Gelato_Hidden"] },
{ name: "23 Blue Coins from Ricco", jp: "リコハーバーの青コイン25枚", types: ["Ricco_Blues", "Blue_Enemies", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
{ name: "100 Coin Shine from Bianco", jp: "ビアンコヒルズの100枚コイン", types: ["Bianco_100s", "Bianco_Early", "Bianco_Shines"] },
{ name: "50 Yellow Coins from 3 Levels", jp: "ビアンコヒルズの100枚コイン", types: ["Bianco_100s", "Bianco_Early", "Bianco_Shines"] },
{ name: "4 Boss Shines", jp: "ボス4体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] }
];
bingoList[7] = [
{ name: "45 Total Blue Coins", jp: "青コイン合計45枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "40 Total Blue Coins", jp: "青コイン合計40枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "50 Total Blue Coins", jp: "青コイン合計50枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] }
];
bingoList[8] = [
{ name: "4 Secret Shines", jp: "ヒミツステージのシャイン4枚", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden"] },
{ name: "4 Hidden Shines", jp: "隠しシャイン4枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Secret_Shines", "Hidden_Plaza"] },
{ name: "5 Blue Coins from Enemies", jp: "敵から青コイン5枚", types: ["Blue_Enemies", "Ricco_Top", "Ricco_Blues", "Ricco_Early", "XBoss_Shines", "M_Graffiti"] },
{ name: "1 Hidden Shine in Pinna", jp: "ピンナパークの隠しシャイン1枚", types: ["Pinna_Early", "Pinna_Hidden", "Pinna_Yoshi", "Pinna_Shines"] }
];
bingoList[9] = [
{ name: "12 Blue Coins from Noki", jp: "マーレのいりえの青コイン10枚", types: ["Noki_Blues", "Noki_Early"] },
{ name: "20 Blue Coins from Gelato", jp: "マーレのいりえの青コイン10枚", types: ["Noki_Blues", "Noki_Early"] },
{ name: "7 NPC Blues", jp: "ビアンコヒルズのシャイン4枚", types: ["Bianco_Rocket", "Bianco_Boss", "Bianco_Secret", "Bianco_Hidden", "Bianco_Early", "Bianco_Late", "Bianco_Blues", "Bianco_Shines"] },
{ name: "150 Coins from Delfino Plaza", jp: "残機20", types: ["X_Lives", "Pianta_Lives"] },
{ name: "100 Coin Shine from Pinna", jp: "ピンナパークの100枚コイン", types: ["Pinna_100", "Pinna_Yoshi", "Pinna_Hoverless", "Pinna_Shines"] },
{ name: "Pinna 3 Hoverless", jp: "ピンナ3ホバー禁止", types: ["Pinna_Hoverless", "Pinna_Yoshi","Pinna_Shines"] }
];
bingoList[10] = [
{ name: "15 Lives", jp: "残機20", types: ["X_Lives", "Pianta_Lives"] },
{ name: "5 Shines from Gelato", jp: "マンマビーチのシャイン5枚", types:  ["Gelato_5", "Wiggler", "Gelato_Early", "Gelato_Shines"] },
{ name: "7 Blue Coins from Enemies", jp: "敵から青コイン7枚", types: ["Blue_Enemies", "XBoss_Shines", "M_Graffiti"] },
{ name: "100 Coin Shine from Sirena", jp: "シレナビーチの100枚コイン", types: ["Sirena_100s", "X100_Coins", "Sirena_Early"] },
{ name: "4 Unique Boss Shines", jp: "ボス4種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss", "Four_Rockets"] }
];
bingoList[11] = [
{ name: "Sand Bird Shine", jp: "大砂鳥のシャインを取得", types: ["Wiggler", "Gelato_5", "Turbo_Nozzle", "Paint_Race", "Four_Rockets"] },
{ name: "100 Coin Shine from a Secret Level", jp: "ヒミツ内部で100枚コインのシャイン取得", types: ["Secret_100"] },
{ name: "1 Turbo Nozzle Unlock", jp: "ターボノズル2つ解放", types: ["Gelato_Turbo", "Turbo_Nozzle", "Bianco_Turbo", "Ricco_Turbo", "Sirena_Late"] },
{ name: "5 Red Coin Shines", jp: "赤コインのシャイン5枚", types: ["Red_Shines", "Hidden_Shines", "Low_Reds"] },
{ name: "10 Blue Coins from Sirena", jp: "シレナビーチの青コイン10枚", types: ["Sirena_Blues", "Sirena_Early"] },
];
bingoList[12] = [
{ name: "5 Boss Shines", jp: "ボス5体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss", "5_Bosses"] },
{ name: "5 Hidden Shines", jp: "隠しシャイン5枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Secret_Shines", "Hidden_Plaza"] },
{ name: "9 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン9枚", types: ["Plaza_M", "Plaza_Shines", "Shadow_Plaza", "Hidden_Plaza", "Plaza_Mix_Up", "Pianta_8"] },
{ name: "Pinna 5 from the back Hoverless", jp: "ピンナ5を裏側からホバー禁止でクリア", types: ["Pinna_Hoverless", "Pinna_Early", "Butterfly", "Pinna_Shines"] },
{ name: "1 Hidden Shine in Sirena", jp: "シレナビーチの隠しシャイン1枚", types: ["Sirena_Hidden", "Sirena_Early"] }
];
bingoList[13] = [
{ name: "100 Coin Shine from Gelato", jp: "マンマビーチの100枚コイン", types: ["Gelato_100", "Gelato_Early"] },
{ name: "100 Coin Shine from Noki", jp: "マーレのいりえの100枚コイン", types: ["Noki_Boss", "Noki_100", "Noki_20"] },
{ name: "1 Hidden Shine in Pianta", jp: "赤コインのシャイン6枚", types: ["Red_Shines", "Hidden_Shines", "Low_Reds"] },
{ name: "5 Shines from Bianco", jp: "ビアンコヒルズのシャイン4枚", types: ["Bianco_Rocket", "Bianco_Boss", "Bianco_Secret", "Bianco_Hidden", "Bianco_Early", "Bianco_Late", "Bianco_Blues", "Bianco_Shines"] },
{ name: "6 Shines from Ricco", jp: "リコハーバーのシャイン6枚", types: ["Ricco_6", "Ricco_Late", "Ricco_Yoshi"] }
];
bingoList[14] = [
{ name: "Defeat both Cannon Moles and collect their shines", jp: "チョロプーを2匹とも倒す", types: ["Noki_Early", "Pinna_Shines"] },
{ name: "20 Blue Coins from 2 Levels", jp: "青コイン合計55枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "4 Shines from Sirena", jp: "シレナビーチのシャイン5枚", types: ["Sirena_5", "Sirena_Late", "Sirena_8"] },
{ name: "5 Shines from Pianta", jp: "モンテのむらのシャイン6枚", types: ["Pianta_Late", "Pianta_8", "X_Lives", "Pianta_6", "Pianta_Shines"] },
{ name: "2 Hidden Shines in Sirena", jp: "シレナビーチの隠しシャイン1枚", types: ["Sirena_Hidden", "Sirena_Early"] }
];
bingoList[15] = [
{ name: "3 Rocket Nozzle Unlocks", jp: "ロケットノズル3つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Gelato_Rocket", "Noki_Rocket", "Three_Rockets"] },
{ name: "8 Linked Blue Coin Pairs", jp: "双子ラクガキの青コイン8ペア", types: ["Linked_Blues", "Pinna_10"] },
{ name: "20 Blue Coins from Pianta", jp: "モンテのむらの青コイン20枚", types: ["Pianta_Blues", "Pianta_Late", "Butterfly", "Pianta_Yoshi", "Pianta_30", "Pianta_Shines", "Pianta_Lives"] },
{ name: "20 Blue Coins from Sirena", jp: "シレナビーチの青コイン20枚", types: ["Sirena_Early","Sirena_Blues", "Sirena_20"] },
{ name: "25 Lives", jp: "残機30", types: ["X_Lives", "Pianta_Lives"] }
];
bingoList[16] = [
{ name: "6 Red Coin Shines", jp: "赤コインのシャイン6枚", types: ["Red_Shines", "Hidden_Shines", "Low_Reds"] },
{ name: "Enter 6 Pipes And Collect Their Shines", jp: "", types: ["Noki_Early", "XBoss_Shines", "Ricco_6", "Ricco_Shadow"] },
{ name: "5 Secret Shines", jp: "ヒミツステージのシャイン5枚", types: ["Secret_Shines", "Hidden_Shines"] },
{ name: "6 Boss Shines", jp: "ボス6体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss"] },
{ name: "60 Total Blue Coins", jp: "青コイン合計60枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] }
];
bingoList[17] = [
{ name: "15 Shines from Delfino (With Blue Trades)", jp: "ドルピックタウンのシャイン9枚", types: ["Plaza_M", "Plaza_Shines", "Shadow_Plaza", "Hidden_Plaza", "Plaza_Mix_Up", "Pianta_8"] },
{ name: "Both Bell Shines", jp: "ベルのシャインを2枚取得", types: ["Plaza_Shines", "Plaza_Yoshi", "Pinna_6"] },
{ name: "Lily Pad NO Fruit Clips", jp: "急流下りのシャイン取得", types: ["Plaza_Shines", "Plaza_Yoshi"] }
];
bingoList[18] = [
{ name: "2 Shines from 5 Levels", jp: "5つのステージからシャイン2枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Gelato_Mix_Up", "Single_Mix_Up"] },
{ name: "3 Shines from 4 Levels", jp: "4つのステージからシャイン4枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Gelato_Mix_Up", "Single_Mix_Up"] },
{ name: "20 Blue Coins from Noki", jp: "マーレのいりえの青コイン20枚", types: ["Noki_Blues", "Noki_Early", "Noki_20"] }
];
bingoList[19] = [
{ name: "4 Butterfly Blues", jp: "蝶の青コイン4枚", types: ["Butterfly"] },
{ name: "4 Shines from 4 Levels", jp: "3つのステージからシャイン5枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Gelato_Mix_Up", "Single_Mix_Up"] },
{ name: "5 Shines from 3 Levels", jp: "3つのステージからシャイン5枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Gelato_Mix_Up", "Single_Mix_Up"] },
{ name: "Ride Yoshi in Pianta", jp: "モンテのむらのヨッシーに乗る", types: ["Pianta_6", "Pianta_Yoshi", "Butterfly", "X_Lives"] }
];
bingoList[20] = [
{ name: "4 Shines from Noki", jp: "マーレのいりえのシャイン4枚", types: ["Noki_Late", "Noki_Early"] },
{ name: "6 Hidden Shines", jp: "隠しシャイン6枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Pianta_Hidden", "Secret_Shines", "Hidden_Plaza"] },
{ name: "7 Blue Bird Blue Coins", jp: "青い鳥の青コイン7枚", types: ["Blue_Bird", "Butterfly"] },

];
bingoList[21] = [
{ name: "65 Total Blue Coins", jp: "青コイン合計65枚", types: ["XTotal_Blues", "Blue_30"] },
{ name: "75 Total Blue Coins", jp: "青コイン合計75枚", types: ["XTotal_Blues"] },
{ name: "70 Total Blue Coins", jp: "青コイン合計70枚", types: ["XTotal_Blues", "Blue_30"] }
];
bingoList[22] = [
{ name: "Defeat the Eel", jp: "ウナギ撃破（マーレ4）", types: ["Noki_Late", "Noki_Boss"] },
{ name: "Defeat Shadow Mario in Bianco ", jp: "ビアンコヒルズのニセマリオ撃破", types: ["Bianco_Shadow", "Bianco_Late", "Bianco_Shines", "Bianco_8"] },
{ name: "Pinna 8 Shine", jp: "ピンナパークのニセマリオ撃破", types: ["Pinna_Shadow", "Pinna_6", "Pinna_Shines"] }
];
bingoList[23] = [
{ name: "5 Unique Boss Shines", jp: "ボス4種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss", "Four_Rockets"] },
{ name: "1 Shine from each Level", jp: "各ステージからシャインを1枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Gelato_Mix_Up", "Single_Mix_Up"] },
{ name: "Sirena 3 NO Clipping", jp: "シレナ3すり抜けバグ禁止", types: ["Sirena_Late", "Pinna_Yoshi", "Three_Rockets"] },
{ name: "9 Shines from a Single Level", jp: "任意の1ステージからシャイン9枚取得（ドルピックタウン以外）", types: ["Ricco_8", "Bianco_8", "Gelato_8", "Pinna_8", "Pianta_8", "9_S", "Single_Mix_Up"] }
];
bingoList[24] = [
{ name: "Three 100 Coin Shines", jp: "100枚コインのシャイン4枚", types: ["X100_Coins", "Bianco_100", "Ricco_100", "Gelato_100", "Pinna_100", "Sirena_100", "Noki_100", "Pianta_100"] },
{ name: "2 Piantissimo Races", jp: "モンテマンレース2つ", types: ["Paint_Race", "Wiggler", "Rocket_Nozzle"] },
{ name: "2 Turbo Nozzle Unlocks", jp: "リコハーバーのニセマリオ撃破", types: ["Ricco_Shadow", "Ricco_Late", "Ricco_Shines", "Ricco_8"] }
];
bingoList[25] = [
{ name: "Collect 25 Shines", jp: "シャイン25枚", types: ["Total_Shines", "X_Lives"] },
{ name: "7 Red Coin Shines", jp: "赤コインのシャイン7枚", types: ["Red_Shines", "Hidden_Shines"] },
{ name: "Collect 28 Shines", jp: "シャイン28枚", types: ["Total_Shines", "X_Lives"] },
{ name: "2 Shadow Mario Shines", jp: "シャイン28枚", types: ["Total_Shines", "X_Lives"] }
];
