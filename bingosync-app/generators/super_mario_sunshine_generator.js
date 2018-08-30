var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var thisVersion = "v3 beta 8";

var bingoList = [];
bingoList[1] = [
{ name: "10 Blue Coins from Delfino Plaza", jp: "ドルピックタウンの青コイン10枚", types: ["Plaza_Blues", "Plaza_M", "Fruit_Ladies"] },
{ name: "3 Red Coin Shines", jp: "赤コインのシャイン3枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Low_Reds"] },
{ name: "3 Fruit Lady Blue Coins", jp: "アルバイトの青コイン3枚", types: ["Fruit_Ladies"] },
{ name: "15 Blue Coins from Ricco Harbor", jp: "リコハーバーの青コイン15枚", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_30", "Ricco_Shines"] },
{ name: "100 Coin Shine from Pianta Village", jp: "モンテのむらの100枚コイン", types: ["X100_Coins"] }
];
bingoList[2] = [
{ name: "Ricco 3 Hoverless", jp: "リコ3ホバー禁止", types: ["Ricco_Top", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] },
{ name: "15 Blue Coins from Pianta Village", jp: "モンテのむらの青コイン15枚", types: ["Pianta_Blues", "Goopy_Inferno", "Pianta_30", "Pianta_Shines"] },
{ name: "Collect 1 Hidden Shine in Bianco Hills", jp: "ビアンコヒルズの隠しシャイン1枚", types: ["Bianco_Early", "Bianco_Hidden", "Bianco_Shines"] },
{ name: "15 Blue Coins from Bianco Hills", jp: "ビアンコヒルズの青コイン15枚", types: ["Bianco_Blues", "Bianco_Early", "Bianco_30"] },
{ name: "Red Coins of Windmill Village (Bianco 4) Entirely Fluddless", jp: "ビアンコ4ポンプ禁止", types: ["Bianco_20", "Bianco_Early", "Bianco_Shines"] }
];
bingoList[3] = [
{ name: "10 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン10枚", types: ["Pinna_Blues", "Pinna_Early", "Fast_20", "Pinna_Boss", "Pinna_30", "Pinna_Shines"] },
{ name: "30 Total Blue Coins", jp: "青コイン合計30枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "4 Shines from Bianco Hills", jp: "ビアンコヒルズのシャイン4枚", types: ["Bianco_Rocket", "Bianco_Boss", "Bianco_Secret", "Bianco_Hidden", "Bianco_Early", "Bianco_Late", "Bianco_Blues", "Bianco_Shines"] },
{ name: "Collect 2 Hidden Shines in Gelato Beach", jp: "マンマビーチの隠しシャイン2枚", types: ["Gelato_Early", "Gelato_Hidden", "Gelato_Quacks", "9_S"] },
{ name: "5 Linked Blue Coin Pairs", jp: "双子ラクガキの青コイン5ペア", types: ["Linked_Blues"] }
];
bingoList[4] = [
{ name: "4 Fruit Lady Blue Coins", jp: "アルバイトの青コイン4枚", types: ["Fruit_Ladies"] },
{ name: "15 Blue Coins from Gelato Beach", jp: "マンマビーチの青コイン15枚", types: ["Gelato_Blues", "Fast_20", "Gelato_Quacks", "Gelato_30"] },
{ name: "Goopy Inferno (Pianta 3) NO damage taken", jp: "モンテ3をノーダメージでクリア", types: ["Goopy_Inferno", "Pianta_Shines"] },
{ name: "2 Rocket Nozzle Unlocks", jp: "ロケットノズル2つ解放", types: ["Rocket_Nozzle", "Bianco_Rocket", "Ricco_Rocket", "Gelato_Rocket", "Noki_Rocket", "Pianta_Rocket", "Plaza_Rocket"] },
{ name: "20 Blue Coins from Ricco Harbor", jp: "リコハーバーの青コイン20枚", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
{ name: "Collect 1 Hidden Shine in Ricco Harbor", jp: "リコハーバーの隠しシャイン1枚", types: ["Ricco_Top", "Ricco_Hidden", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] }
];
bingoList[5] = [
{ name: "20 Blue Coins from Gelato Beach", jp: "マンマビーチの青コイン20枚", types: ["Gelato_20", "Gelato_Early", "Gelato_Blues", "Gelato_100s", "Wiggler", "Fast_20", "Gelato_30"] },
{ name: "35 Total Blue Coins", jp: "青コイン合計35枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "Defeat Petey Strikes Back (Bianco 5)", jp: "ボスパックン撃破（ビアンコ5）", types: ["Bianco_Boss", "Bianco_Early", "Unique_Boss", "XBoss_Shines", "Bianco_Shines"] },
{ name: "100 Coin Shine from Sirena Beach", jp: "シレナビーチの100枚コイン", types: ["Sirena_100s", "X100_Coins", "Sirena_Early"] },
{ name: "15 Blue Coins from Delfino Plaza", jp: "ドルピックタウンの青コイン15枚", types: ["Plaza_Shines"] },
{ name: "100 Coin Shine from Ricco Harbor", jp: "リコハーバーの100枚コイン", types: ["Ricco_100s", "Ricco_Early", "Ricco_Top", "Ricco_Rocket", "Ricco_Shines"] }
];
bingoList[6] = [
{ name: "6 Blue Bird Blue Coins", jp: "青い鳥の青コイン6枚", types: ["Blue_Bird", "Gelato_Hidden"] },
{ name: "100 Coin Shine from Bianco Hills", jp: "ビアンコヒルズの100枚コイン", types: ["Bianco_100s", "Bianco_Early", "Bianco_Shines"] },
{ name: "15 Blue Coins from M Graffiti", jp: "M字から青コイン15枚", types: ["M_Graffiti", "Plaza_M", "Ricco_M"] },
{ name: "Defeat Wiggler", jp: "ボスハナチャン撃破（マンマ3）", types: ["Wiggler", "Gelato_Early"] },
{ name: "15 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン15枚", types: ["Pinna_Blues", "Fast_20", "Pinna_Early", "Pinna_30", "Pinna_Shines"] },
{ name: "5 Blue Coins from Enemies", jp: "敵から青コイン5枚", types: ["Blue_Enemies", "Ricco_Top", "Ricco_Blues", "Ricco_Early", "XBoss_Shines", "M_Graffiti"] }
];
bingoList[7] = [
{ name: "4 Red Coin Shines", jp: "赤コインのシャイン4枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Bianco_Early", "Bianco_8", "Low_Reds"] },
{ name: "Collect 1 Hidden Shine in Pinna Park", jp: "ピンナパークの隠しシャイン1枚", types: ["Pinna_Early", "Pinna_Hidden", "Pinna_Yoshi", "Pinna_Shines"] },
{ name: "Collect 1 Hidden Shine in Noki Bay", jp: "マーレのいりえの隠しシャイン1枚", types: ["Noki_Early", "Noki_Hidden", "Noki_Rocket"] },
{ name: "Collect a 100 Coin Shine from a Secret Level", jp: "ヒミツ内部で100枚コインのシャイン取得", types: ["Secret_100"] },
{ name: "4 Boss Shines", jp: "ボス4体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "40 Total Blue Coins", jp: "青コイン合計40枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] }
];
bingoList[8] = [
{ name: "Collect both gold bird shines", jp: "金の鳥のシャインを2枚取得", types: ["Plaza_Shines", "Noki_Hidden", "Noki_Early"] },
{ name: "20 Blue Coins from Bianco Hills", jp: "ビアンコヒルズの青コイン20枚", types: ["Bianco_20", "Bianco_30", "Bianco_Early", "Bianco_Blues", "Bianco_Shines"] },
{ name: "Defeat Gooper Blooper Returns (Ricco 5)", jp: "ボスゲッソー撃破（リコ5）", types: ["Ricco_Top", "Ricco_Early", "Ricco_6", "Ricco_100", "Ricco_Shines"] },
{ name: "4 Hidden Shines", jp: "隠しシャイン4枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Secret_Shines", "Hidden_Plaza"] },
{ name: "20 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン20枚", types: ["Pinna_Blues", "Fast_20", "Pinna_Early", "Pinna_30", "Pinna_Shines"] },
{ name: "45 Total Blue Coins", jp: "青コイン合計45枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] }
];
bingoList[9] = [
{ name: "100 Coin Shine from Gelato Beach", jp: "マンマビーチの100枚コイン", types: ["Gelato_100", "Gelato_Early"] },
{ name: "20 Lives", jp: "残機20", types: ["X_Lives"] },
{ name: "Collect the Sand Bird Shine", jp: "大砂鳥のシャインを取得", types: ["Wiggler", "Gelato_5", "Turbo_Nozzle", "Paint_Race"] },
{ name: "25 Blue Coins from Ricco Harbor", jp: "リコハーバーの青コイン25枚", types: ["Ricco_Blues", "Blue_Enemies", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
{ name: "100 Coin Shine from Pinna Park", jp: "ピンナパークの100枚コイン", types: ["Pinna_100", "Pinna_Yoshi", "Pinna_Hoverless", "Pinna_Shines"] },
{ name: "4 Unique Boss Shines", jp: "ボス4種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] }
];
bingoList[10] = [
{ name: "Red Coins of the Pirate Ships (Pinna 3) Hoverless", jp: "ピンナ3ホバー禁止", types: ["Pinna_Hoverless", "Pinna_Yoshi","Pinna_Shines"] },
{ name: "6 Shines from Ricco Harbor", jp: "リコハーバーのシャイン6枚", types: ["Ricco_6", "Ricco_Late", "Ricco_Yoshi"] },
{ name: "50 Total Blue Coins", jp: "青コイン合計50枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "5 Shines from Gelato Beach", jp: "マンマビーチのシャイン5枚", types:  ["Gelato_5", "Wiggler", "Gelato_Early", "Gelato_Shines"] },
{ name: "7 Blue Coins from Enemies", jp: "敵から青コイン7枚", types: ["Blue_Enemies", "XBoss_Shines", "M_Graffiti"] }
];
bingoList[11] = [
{ name: "Ride Yoshi in Pinna Park", jp: "ピンナパークのヨッシーに乗る", types: ["Pinna_Yoshi", "Pinna_Hoverless", "Butterfly", "Pinna_Early", "Pinna_Shines"] },
{ name: "5 Boss Shines", jp: "ボス5体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "4 Secret Shines", jp: "ヒミツステージのシャイン4枚", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden"] },
{ name: "8 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン8枚", types: ["Plaza_M", "Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza"] },
{ name: "5 Red Coin Shines", jp: "赤コインのシャイン5枚", types: ["Red_Shines", "Hidden_Shines", "Plaza_Shines", "Low_Reds"] }
];
bingoList[12] = [
{ name: "20 Blue Coins from M Graffiti", jp: "M字から青コイン20枚", types: ["M_Graffiti", "Plaza_M", "Ricco_M"] },
{ name: "9 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン9枚", types: ["Plaza_M", "Plaza_Shines", "Shadow_Plaza", "Hidden_Plaza"] },
{ name: "5 Hidden Shines", jp: "隠しシャイン5枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Secret_Shines", "Hidden_Plaza"] },
{ name: "55 Total Blue Coins", jp: "青コイン合計55枚", types: ["XTotal_Blues", "Blue_30"] },
{ name: "Collect 2 Hidden Shines in Ricco Harbor", jp: "リコハーバーの隠しシャイン2枚", types: ["Ricco_Hidden", "Ricco_Early"] },
{ name: "Runaway Ferris Wheel (Pinna 5) from the back Hoverless", jp: "ピンナ5を裏側からホバー禁止でクリア", types: ["Pinna_Hoverless", "Pinna_Early", "Butterfly", "Pinna_Shines"] }
];
bingoList[13] = [
{ name: "2 Piantissimo Races", jp: "モンテマンレース2つ", types: ["Paint_Race", "Wiggler", "Rocket_Nozzle"] },
{ name: "25 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン25枚", types: ["Pinna_Blues", "Pinna_Late", "Pinna_30", "Pinna_Yoshi", "Butterfly", "Pinna_Shines"] },
{ name: "10 Blue Coins from Sirena Beach", jp: "シレナビーチの青コイン10枚", types: ["Sirena_Blues", "Sirena_Early"] },
{ name: "Defeat Shadow Mario in Bianco Hills", jp: "ビアンコヒルズのニセマリオ撃破", types: ["Bianco_Shadow", "Shadow_Mario", "Bianco_Late", "Bianco_Shines", "Bianco_8"] },
{ name: "6 Red Coin Shines", jp: "赤コインのシャイン6枚", types: ["Red_Shines", "Hidden_Shines", "Low_Reds"] },
{ name: "25 Blue Coins from Gelato Beach", jp: "マンマビーチの青コイン25枚", types: ["Gelato_Blues", "Blue_Enemies", "Wiggler", "Gelato_30"] },
{ name: "25 Lives", jp: "残機25", types: ["X_Lives"] }
];
bingoList[14] = [
{ name: "Collect 1 Hidden Shine in Pianta Village", jp: "モンテのむらの隠しシャイン1枚", types: ["Pianta_Hidden", "X_Lives", "Pianta_Shines"] },
{ name: "Collect 1 Hidden Shine in Sirena Beach", jp: "シレナビーチの隠しシャイン1枚", types: ["Sirena_Hidden", "Sirena_Early"] },
{ name: "Collect 2 Hidden Shines in Bianco Hills", jp: "ビアンコヒルズの隠しシャイン2枚", types: ["Bianco_Hidden", "Bianco_Late", "Turbo_Nozzle", "Bianco_Yoshi", "Bianco_Shines"] },
{ name: "10 Blue Coins from Noki Bay", jp: "マーレのいりえの青コイン10枚", types: ["Noki_Blues", "Noki_Early"] },
{ name: "60 Total Blue Coins", jp: "青コイン合計60枚", types: ["XTotal_Blues", "Blue_30"] },
{ name: "Defeat Shadow Mario in Ricco Harbor", jp: "リコハーバーのニセマリオ撃破", types: ["Ricco_Shadow", "Shadow_Mario", "Ricco_Late", "Ricco_Shines"] },
{ name: "Bianco Hills Episode 8 Shine", jp: "ビアンコヒルズストーリー8", types: ["Bianco_Shadow", "Bianco_Late", "Bianco_Yoshi", "Turbo_Nozzle", "Bianco_Shines"] }
];
bingoList[15] = [
{ name: "30 Lives", jp: "残機30", types: ["X_Lives"] },
{ name: "20 Blue Coins from Pianta Village", jp: "モンテのむらの青コイン20枚", types: ["Pianta_Blues", "Pianta_Late", "Butterfly", "Pianta_Yoshi", "Pianta_30", "Pianta_Shines"] },
{ name: "6 Shines from Pianta Village", jp: "モンテのむらのシャイン6枚", types: ["Pianta_Late", "Pianta_8", "X_Lives", "Pianta_6", "Pianta_Shines"] },
{ name: "10 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン10枚", types: ["Plaza_M", "Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza"] },
{ name: "8 Linked Blue Coin Pairs", jp: "双子ラクガキの青コイン8ペア", types: ["Linked_Blues"] },
{ name: "6 Shines from Pinna Park", jp: "ピンナパークのシャイン6枚", types: ["Pinna_Boss", "Pinna_Yoshi", "Butterfly", "Pinna_6", "Pinna_Hoverless", "Pinna_Shines"] },
{ name: "3 Rocket Nozzle Unlocks", jp: "ロケットノズル3つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Gelato_Rocket", "Noki_Rocket"] }
];
bingoList[16] = [
{ name: "5 Secret Shines", jp: "ヒミツステージのシャイン5枚", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden", "Sirena_Hidden"] },
{ name: "65 Total Blue Coins", jp: "青コイン合計65枚", types: ["XTotal_Blues"] },
{ name: "6 Boss Shines", jp: "ボス6体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "Ricco Harbor Episode 8 Shine", jp: "リコハーバーストーリー8", types: ["Ricco_8", "Ricco_Late", "Ricco_Yoshi", "Ricco_Shines"] },
{ name: "35 Lives", jp: "残機35", types: ["X_Lives"] },
{ name: "Defeat Shadow Mario in Pianta Village", jp: "モンテのむらのニセマリオ撃破", types: ["Pianta_Late", "Pianta_Shadow", "Shadow_Mario", "Pianta_8", "X_Lives", "Pianta_Yoshi", "Pianta_6"] }
];
bingoList[17] = [
{ name: "5 Unique Boss Shines", jp: "ボス5種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss"] },
{ name: "Defeat both Cannon Moles and collect their shines", jp: "チョロプーを2匹とも倒す", types: ["Noki_Early", "Pinna_Shines"] },
{ name: "Both Bell Shines", jp: "ベルのシャインを2枚取得", types: ["Plaza_Shines"] },
{ name: "Lily Pad Shine", jp: "急流下りのシャイン取得", types: ["Plaza_Shines"] },
{ name: "Defeat Shadow Mario in Gelato Beach", jp: "マンマビーチのニセマリオ撃破", types: ["Gelato_Late", "Gelato_5", "Gelato_Shadow", "Sirena_8"] },
{ name: "40 Lives", jp: "残機40", types: ["X_Lives"] },
{ name: "Defeat Shadow Mario in Pinna Park", jp: "ピンナパークのニセマリオ撃破", types: ["Pinna_Shadow", "Shadow_Mario", "Pinna_6", "Pinna_Shines"] }
];
bingoList[18] = [
{ name: "6 Hidden Shines", jp: "隠しシャイン6枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Pianta_Hidden", "Secret_Shines", "Hidden_Plaza"] },
{ name: "7 Blue Bird Blue Coins", jp: "青い鳥の青コイン7枚", types: ["Blue_Bird", "Butterfly"] },
{ name: "20 Blue Coins from Noki Bay", jp: "マーレのいりえの青コイン20枚", types: ["Noki_Blues", "Noki_Early", "Noki_20"] },
{ name: "70 Total Blue Coins", jp: "青コイン合計70枚", types: ["XTotal_Blues"] },
{ name: "2 Turbo Nozzle Unlocks", jp: "ターボノズル2つ解放", types: ["Gelato_Turbo", "Turbo_Nozzle", "Bianco_Turbo", "Ricco_Turbo", "Sirena_Late"] },
{ name: "Defeat Boss of Tricky Ruins (Noki 2)", jp: "ボスゲッソー撃破（マーレ2）", types: ["Noki_Early"] }
];
bingoList[19] = [
{ name: "2 Shines from 5 Levels", jp: "5つのステージからシャイン2枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Gelato_Mix_Up"] },
{ name: "20 Blue Coins from Sirena Beach", jp: "シレナビーチの青コイン20枚", types: ["Sirena_Early","Sirena_Blues"] },
{ name: "Ride Yoshi in Bianco Hills", jp: "ビアンコヒルズのヨッシーに乗る", types: ["Bianco_Yoshi", "Bianco_8"] },
{ name: "5 Shines from 3 Levels", jp: "3つのステージからシャイン5枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Gelato_Mix_Up"] },
{ name: "2 Shadow Marios", jp: "ニセマリオ2体撃破", types: ["Shadow_Mario", "Bianco_Shadow", "Gelato_Shadow", "Ricco_Shadow", "Pianta_Shadow", "Shadow_Plaza", "Shadow_Mix_Up", "Gelato_Mix_Up"] },
{ name: "4 Blue Coins from Butterflies", jp: "蝶の青コイン4枚", types: ["Butterfly"] }
];
bingoList[20] = [
{ name: "Three 100 Coin Shines", jp: "100枚コインのシャイン3枚", types: ["Pianta_100", "X100_Coins", "Bianco_100", "Ricco_100", "Gelato_100", "Pinna_100", "Sirena_100", "Noki_100"] },
{ name: "Gelato Beach Episode 8 Shine", jp: "マンマビーチストーリー8", types: ["Gelato_8", "Gelato_Shadow", "Gelato_5", "Gelato_Shines", "Plaza_G8"] },
{ name: "1 Shine from each level", jp: "各ステージからシャインを1枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Gelato_Mix_Up"] },
{ name: "25 Blue Coins from Pianta Village", jp: "モンテのむらの青コイン25枚", types: ["Pianta_Blues", "Pianta_30", "Pianta_Shines"] },
{ name: "75 Total Blue coins", jp: "青コイン合計75枚", types: ["XTotal_Blues"] },
{ name: "Pianta Village Episode 8 Shine", jp: "モンテのむらストーリー8", types: ["Pianta_8", "Pianta_Shadow", "Pianta_6", "Pianta_Shines"] },
{ name: "4 Shines from 4 Levels", jp: "4つのステージからシャイン4枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Gelato_Mix_Up"] }
];
bingoList[21] = [
{ name: "80 Total Blue Coins", jp: "青コイン合計80枚", types: ["XTotal_Blues", "Fast_20"] },
{ name: "Sirena 3 NO Clipping", jp: "シレナ3すり抜けバグ禁止", types: ["Sirena_Late", "Pinna_Yoshi"] },
{ name: "Ride Yoshi in Gelato Beach", jp: "マンマビーチのヨッシーに乗る", types: ["Gelato_5", "Gelato_Shines"] },
{ name: "9 Blue Coins from Enemies", jp: "敵から青コイン9枚", types: ["Blue_Enemies", "Ricco_Blues"] },
{ name: "9 Shines from a single level (not plaza)", jp: "任意の1ステージからシャイン9枚取得（ドルピックタウン以外）", types: ["Ricco_8", "Sirena_8", "Bianco_8", "Gelato_8", "Pinna_8", "Pianta_8", "Red_Shines", "9_S"] },
{ name: "All 30 blue coins from a single level", jp: "1ステージから青コイン30枚取得", types: ["Ricco_30", "Bianco_30", "Pinna_30", "Gelato_30", "Pianta_30", "Blue_30"] },
{ name: "Collect 2 Hidden Shines in Pinna Park", jp: "ピンナパークの隠しシャイン2枚", types: ["Pinna_Hidden", "Pinna_Late", "Pinna_Shines"] }
];
bingoList[22] = [
{ name: "7 Hidden Shines", jp: "隠しシャイン7枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Secret_Shines", "Hidden_Plaza"] },
{ name: "5 Shines from Sirena Beach", jp: "シレナビーチのシャイン5枚", types: ["Sirena_5", "Sirena_Late", "Sirena_8"] },
{ name: "11 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン11枚", types: ["Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza", "Plaza_G8"] },
{ name: "6 Secret Shines", jp: "ヒミツステージのシャイン6枚", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden", "Sirena_Hidden"] },
{ name: "10 Shines from a single level (not plaza)", jp: "任意の1ステージからシャイン10枚取得（ドルピックタウン以外）", types: ["Ricco_8", "Sirena_8", "Bianco_8", "Gelato_8", "Pinna_8", "Pianta_8", "Red_Shines", "9_S"] },
{ name: "Collect 2 Hidden Shines in Pianta Village", jp: "モンテのむらの隠しシャイン2枚", types: ["Pianta_Late", "Pianta_Hidden", "Pianta_8", "Pianta_Shines", "9_S", "Low_Reds"] }
];
bingoList[23] = [
{ name: "Pinna Park Episode 8 Shine", jp: "ピンナパークストーリー8", types: ["Pinna_8", "Pinna_Late", "Pinna_Shines"] },
{ name: "4 Shines from Noki Bay", jp: "マーレのいりえのシャイン4枚", types: ["Noki_Late", "Noki_Early"] },
{ name: "7 Red Coin Shines", jp: "赤コインのシャイン7枚", types: ["Red_Shines", "Hidden_Shines"] },
{ name: "Collect 2 Hidden Shines in Sirena Beach", jp: "シレナビーチの隠しシャイン2枚", types: ["Sirena_Hidden", "Sirena_Late"] },
{ name: "Ride Yoshi in Pianta Village", jp: "モンテのむらのヨッシーに乗る", types: ["Pianta_6", "Pianta_Yoshi", "Butterfly", "X_Lives"] },
{ name: "Collect 25 Shines", jp: "シャイン25枚", types: ["Total_Shines", "X_Lives"] }
];
bingoList[24] = [
{ name: "Defeat Shadow Mario in Sirena Beach", jp: "シレナビーチのニセマリオ撃破", types: ["Shadow_Mario", "Sirena_Shadow", "Sirena_Late"] },
{ name: "Defeat the Eel of Noki Bay", jp: "ウナギ撃破（マーレ4）", types: ["Noki_Late", "Noki_Boss"] },
{ name: "100 Coin Shine from Noki Bay", jp: "マーレのいりえの100枚コイン", types: ["Noki_Late", "Noki_Boss", "Noki_100", "Noki_20"] },
{ name: "Four 100 Coin Shines", jp: "100枚コインのシャイン4枚", types: ["X100_Coins", "Bianco_100", "Ricco_100", "Gelato_100", "Pinna_100", "Sirena_100", "Noki_100", "Pianta_100"] },
{ name: "8 Red Coin Shines", jp: "赤コインのシャイン8枚", types: ["Red_Shines", "Hidden_Shines"] }
];
bingoList[25] = [
{ name: "Collect 28 Shines", jp: "シャイン28枚", types: ["Total_Shines", "X_Lives"] },
{ name: "Beat Piantissimo in Noki Bay Episode 5", jp: "マーレのいりえのモンテマンに勝利", types: ["Noki_Late", "Paint_Race"] },
{ name: "4 Rocket Nozzle Unlocks", jp: "ロケットノズル4つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Gelato_Rocket", "Noki_Rocket"] },
{ name: "Sirena Beach Episode 8 Shine", jp: "シレナビーチストーリー8", types: ["Sirena_8", "Sirena_Late"] },
{ name: "25 Blue Coins from Noki Bay", jp: "マーレのいりえの青コイン25枚", types: ["Noki_Late", "Noki_Blues", "Noki_30"] }
];
