var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

// lockout version
var thisVersion = "v3 beta 9";

var bingoList = [];
bingoList[1] = [
{ name: "10 Blue Coins from Delfino Plaza", jp: "ドルピックタウンの青コイン10枚", types: [] },
{ name: "3 Red Coin Shines", jp: "赤コインのシャイン3枚", types: [] },
{ name: "3 Fruit Lady Blue Coins", jp: "アルバイトの青コイン3枚", types: [] },
{ name: "15 Blue Coins from Ricco Harbor", jp: "リコハーバーの青コイン15枚", types: [] },
{ name: "100 Coin Shine from Pianta Village", jp: "モンテのむらの100枚コイン", types: [] }
];
bingoList[2] = [
{ name: "Ricco 3 Hoverless", jp: "リコ3ホバー禁止", types: [] },
{ name: "Collect 1 Hidden Shine in Bianco Hills", jp: "ビアンコヒルズの隠しシャイン1枚", types: [] },
{ name: "10 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン10枚", types: [] },
{ name: "15 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン15枚", types: [] },
{ name: "15 Blue Coins from Bianco Hills", jp: "ビアンコヒルズの青コイン15枚", types: [] },
{ name: "Bianco 4 Entirely Fluddless", jp: "ビアンコ4ポンプ禁止", types: [] }
];
bingoList[3] = [
{ name: "4 Fruit Lady Blue Coins", jp: "アルバイトの青コイン4枚", types: [] },
{ name: "30 Total Blue Coins", jp: "青コイン合計30枚", types: [] },
{ name: "4 Shines from Bianco Hills", jp: "ビアンコヒルズのシャイン4枚", types: [] },
{ name: "100 Coin Shine from Ricco Harbor", jp: "リコハーバーの100枚コイン", types: [] },
{ name: "5 Linked Blue Coin Pairs", jp: "双子ラクガキの青コイン5ペア", types: [] }
];
bingoList[4] = [
{ name: "15 Blue Coins from Delfino Plaza", jp: "ドルピックタウンの青コイン15枚", types: [] },
{ name: "Goopy Inferno (Pianta 3) NO damage taken", jp: "モンテ3をノーダメージでクリア", types: [] },
{ name: "2 Rocket Nozzle Unlocks", jp: "ロケットノズル2つ解放", types: [] },
{ name: "20 Blue Coins from Ricco Harbor", jp: "リコハーバーの青コイン20枚", types: [] },
{ name: "Collect 1 Hidden Shine in Ricco Harbor", jp: "リコハーバーの隠しシャイン1枚", types: [] }
];
bingoList[5] = [
{ name: "10 Blue Coins from Sirena Beach", jp: "シレナビーチの青コイン10枚", types: [] },
{ name: "15 Blue Coins from Gelato Beach", jp: "マンマビーチの青コイン15枚", types: [] },
{ name: "20 Blue Coins from Gelato Beach", jp: "マンマビーチの青コイン20枚", types: [] },
{ name: "Collect 2 Hidden Shines in Gelato Beach", jp: "マンマビーチの隠しシャイン2枚", types: [] },
{ name: "5 Blue Coins from Enemies", jp: "敵から青コイン5枚", types: [] },
{ name: "Defeat Petey Strikes Back (Bianco 5)", jp: "ボスパックン撃破（ビアンコ5）", types: [] }
];
bingoList[6] = [
{ name: "Collect 1 Hidden Shine in Sirena Beach", jp: "シレナビーチの隠しシャイン1枚", types: [] },
{ name: "4 Red Coin Shines", jp: "赤コインのシャイン4枚", types: [] },
{ name: "6 Blue Bird Blue Coins", jp: "青い鳥の青コイン6枚", types: [] },
{ name: "100 Coin Shine from Bianco Hills", jp: "ビアンコヒルズの100枚コイン", types: [] },
{ name: "Two 100 coin shines", types: [] }
];
bingoList[7] = [
{ name: "100 Coin Shine from Gelato Beach", jp: "マンマビーチの100枚コイン", types: [] },
{ name: "Defeat Wiggler", jp: "ボスハナチャン撃破（マンマ3）", types: [] },
{ name: "Collect 1 Hidden Shine in Pinna Park", jp: "ピンナパークの隠しシャイン1枚", types: [] },
{ name: "Collect a 100 Coin Shine from a Secret Level", jp: "ヒミツ内部で100枚コインのシャイン取得", types: [] },
{ name: "4 Boss Shines", jp: "ボス4体撃破", types: [] },
{ name: "40 Total Blue Coins", jp: "青コイン合計40枚", types: [] }
];
bingoList[8] = [
{ name: "100 Coin Shine from Sirena Beach", jp: "シレナビーチの100枚コイン", types: [] },
{ name: "20 Blue Coins from Bianco Hills", jp: "ビアンコヒルズの青コイン20枚", types: [] },
{ name: "Ricco 6 with pink blooper", jp: "ボスゲッソー撃破（リコ5）", types: [] },
{ name: "4 Hidden Shines", jp: "隠しシャイン4枚", types: [] },
{ name: "20 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン20枚", types: [] },
];
bingoList[9] = [
{ name: "15 Blue Coins from M Graffiti", jp: "M字から青コイン15枚", types: [] },
{ name: "20 Lives", jp: "残機20", types: [] },
{ name: "Collect the Sand Bird Shine", jp: "大砂鳥のシャインを取得", types: [] },
{ name: "25 Blue Coins from Ricco Harbor", jp: "リコハーバーの青コイン25枚", types: [] },
{ name: "4 Unique Boss Shines", jp: "ボス4種類撃破", types: [] }
];
bingoList[10] = [
{ name: "100 Coin Shine from Pinna Park", jp: "ピンナパークの100枚コイン", types: [] },
{ name: "6 Shines from Ricco Harbor", jp: "リコハーバーのシャイン6枚", types: [] },
{ name: "50 Total Blue Coins", jp: "青コイン合計50枚", types: [] },
{ name: "5 Shines from Gelato Beach", jp: "マンマビーチのシャイン5枚", types:  [] },
{ name: "7 Blue Coins from Enemies", jp: "敵から青コイン7枚", types: [] }
];
bingoList[11] = [
{ name: "Ride Yoshi in Pinna Park", jp: "ピンナパークのヨッシーに乗る", types: [] },
{ name: "5 Boss Shines", jp: "ボス5体撃破", types: [] },
{ name: "4 Secret Shines", jp: "ヒミツステージのシャイン4枚", types: [] },
{ name: "Pinna 3 Hoverless", jp: "ピンナ3ホバー禁止", types: [] },
{ name: "5 Red Coin Shines", jp: "赤コインのシャイン5枚", types: [] }
];
bingoList[12] = [
{ name: "20 Blue Coins from M Graffiti", jp: "M字から青コイン20枚", types: [] },
{ name: "9 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン9枚", types: [] },
{ name: "2 Piantissimo Races", jp: "モンテマンレース2つ", types: [] },
{ name: "5 Hidden Shines", jp: "隠しシャイン5枚", types: [] },
{ name: "Collect 2 Hidden Shines in Ricco Harbor", jp: "リコハーバーの隠しシャイン2枚", types: [] },
{ name: "Runaway Ferris Wheel (Pinna 5) from the back Hoverless", jp: "ピンナ5を裏側からホバー禁止でクリア", types: [] }
];
bingoList[13] = [
{ name: "60 Total Blue Coins", jp: "青コイン合計60枚", types: [] },
{ name: "25 Blue Coins from Pinna Park", jp: "ピンナパークの青コイン25枚", types: [] },
{ name: "Defeat Shadow Mario in Bianco Hills", jp: "ビアンコヒルズのニセマリオ撃破", types: [] },
{ name: "6 Red Coin Shines", jp: "赤コインのシャイン6枚", types: [] },
{ name: "10 Blue Coins from Noki Bay", jp: "マーレのいりえの青コイン10枚", types: [] },
{ name: "25 Blue Coins from Gelato Beach", jp: "マンマビーチの青コイン25枚", types: [] }
];
bingoList[14] = [
{ name: "Collect 2 Hidden Shines in Bianco Hills", jp: "ビアンコヒルズの隠しシャイン2枚", types: [] },
{ name: "Collect both gold bird shines", jp: "金の鳥のシャインを2枚取得", types: [] },
{ name: "6 Shines from Pianta Village", jp: "モンテのむらのシャイン6枚", types: [] },
{ name: "20 Blue Coins from Pianta Village", jp: "モンテのむらの青コイン25枚", types: [] },
{ name: "Defeat Shadow Mario in Ricco Harbor", jp: "リコハーバーのニセマリオ撃破", types: [] },
{ name: "Bianco Hills Episode 8 Shine", jp: "ビアンコヒルズストーリー8", types: [] }
];
bingoList[15] = [
{ name: "30 Lives", jp: "残機30", types: [] },
{ name: "25 Blue Coins from Pianta Village", jp: "モンテのむらの青コイン20枚", types: [] },
{ name: "Collect 1 Hidden Shine in Pianta Village", jp: "モンテのむらの隠しシャイン1枚", types: [] },
{ name: "8 Linked Blue Coin Pairs", jp: "双子ラクガキの青コイン8ペア", types: [] },
{ name: "6 Shines from Pinna Park", jp: "ピンナパークのシャイン6枚", types: [] },
{ name: "3 Rocket Nozzle Unlocks", jp: "ロケットノズル3つ解放", types: [] }
];
bingoList[16] = [
{ name: "5 Secret Shines", jp: "ヒミツステージのシャイン5枚", types: [] },
{ name: "Defeat both Cannon Moles and collect their shines", jp: "チョロプーを2匹とも倒す", types: [] },
{ name: "20 Blue Coins from Sirena Beach", jp: "シレナビーチの青コイン20枚", types: [] },
{ name: "6 Boss Shines", jp: "ボス6体撃破", types: [] },
{ name: "Ricco Harbor Episode 8 Shine", jp: "リコハーバーストーリー8", types: [] },
{ name: "Defeat Shadow Mario in Pianta Village", jp: "モンテのむらのニセマリオ撃破", types: [] }
];
bingoList[17] = [
{ name: "5 Unique Boss Shines", jp: "ボス5種類撃破", types: [] },
{ name: "Both Bell Shines", jp: "ベルのシャインを2枚取得", types: [] },
{ name: "Lily Pad Shine", jp: "急流下りのシャイン取得", types: [] },
{ name: "40 Lives", jp: "残機40", types: [] },
{ name: "10 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン10枚", types: [] },
{ name: "Defeat Shadow Mario in Pinna Park", jp: "ピンナパークのニセマリオ撃破", types: [] }
];
bingoList[18] = [
{ name: "2 Turbo Nozzle Unlocks", jp: "ターボノズル2つ解放", types: [] },
{ name: "2 Shadow Marios", jp: "ニセマリオ2体撃破", types: [] },
{ name: "6 Hidden Shines", jp: "隠しシャイン6枚", types: [] },
{ name: "7 Blue Bird Blue Coins", jp: "青い鳥の青コイン7枚", types: [] },
{ name: "20 Blue Coins from Noki Bay", jp: "マーレのいりえの青コイン20枚", types: [] },
{ name: "70 Total Blue Coins", jp: "青コイン合計70枚", types: [] },
{ name: "Three 100 Coin Shines", jp: "100枚コインのシャイン3枚", types: [] }
];
bingoList[19] = [
{ name: "2 Shines from 5 Levels", jp: "5つのステージからシャイン2枚ずつ取得", types: [] },
{ name: "Defeat Boss of Tricky Ruins (Noki 2)", jp: "ボスゲッソー撃破（マーレ2）", types: [] },
{ name: "4 Blue Coins from Butterflies", jp: "蝶の青コイン4枚", types: [] },
{ name: "5 Shines from 3 Levels", jp: "3つのステージからシャイン5枚ずつ取得", types: [] },
{ name: "Defeat Shadow Mario in Gelato Beach", jp: "マンマビーチのニセマリオ撃破", types: [] },
{ name: "Ride Yoshi in Pianta Village", jp: "モンテのむらのヨッシーに乗る", types: [] },
{ name: "9 linked blue coin pairs", types: [] }
];
bingoList[20] = [
{ name: "1 Shine from each level", jp: "各ステージからシャインを1枚ずつ取得", types: [] },
{ name: "Ride Yoshi in Bianco Hills", jp: "ビアンコヒルズのヨッシーに乗る", types: [] },
{ name: "5 Shines from Sirena Beach", jp: "シレナビーチのシャイン5枚", types: [] },
{ name: "4 Shines from 4 Levels", jp: "4つのステージからシャイン4枚ずつ取得", types: [] },
{ name: "11 Shines from Delfino Plaza", jp: "ドルピックタウンのシャイン11枚", types: [] },
{ name: "Gelato Beach Episode 8 Shine", jp: "マンマビーチストーリー8", types: [] }
];
bingoList[21] = [
{ name: "Defeat King Boo", jp: "Japanese Text", types: [] },
{ name: "Pianta Village Episode 8 Shine", jp: "モンテのむらストーリー8", types: [] },
{ name: "9 Blue Coins from Enemies", jp: "敵から青コイン9枚", types: [] },
{ name: "9 Shines from a single level (not plaza)", jp: "任意の1ステージからシャイン9枚取得（ドルピックタウン以外）", types: [] },
{ name: "100 Coin Shine from Noki Bay", jp: "マーレのいりえの100枚コイン", types: [] },
{ name: "All 30 blue coins from a single level", jp: "1ステージから青コイン30枚取得", types: [] },
{ name: "Collect 2 Hidden Shines in Pinna Park", jp: "ピンナパークの隠しシャイン2枚", types: [] }
];
bingoList[22] = [
{ name: "7 Hidden Shines", jp: "隠しシャイン7枚", types: [] },
{ name: "Sirena 3 NO Clipping", jp: "シレナ3すり抜けバグ禁止", types: [] },
{ name: "80 Total Blue Coins", jp: "青コイン合計80枚", types: [] },
{ name: "6 Secret Shines", jp: "ヒミツステージのシャイン6枚", types: [] },
{ name: "Collect 25 Shines", jp: "シャイン25枚", types: [] },
{ name: "10 Shines from a single level (not plaza)", jp: "任意の1ステージからシャイン10枚取得（ドルピックタウン以外）", types: [] },
{ name: "Collect 2 Hidden Shines in Pianta Village", jp: "モンテのむらの隠しシャイン2枚", types: [] }
];
bingoList[23] = [
{ name: "Pinna Park Episode 8 Shine", jp: "ピンナパークストーリー8", types: [] },
{ name: "4 Shines from Noki Bay", jp: "マーレのいりえのシャイン4枚", types: [] },
{ name: "7 Red Coin Shines", jp: "赤コインのシャイン7枚", types: [] },
{ name: "Collect 2 Hidden Shines in Sirena Beach", jp: "シレナビーチの隠しシャイン2枚", types: [] },
{ name: "2 episode 8 shines", types: [] },
{ name: "3 Shadow Marios", types: [] }
];
bingoList[24] = [
{ name: "Defeat Shadow Mario in Sirena Beach", jp: "シレナビーチのニセマリオ撃破", types: [] },
{ name: "Defeat the Eel of Noki Bay", jp: "ウナギ撃破（マーレ4）", types: [] },
{ name: "Ride Yoshi in Gelato Beach", jp: "マンマビーチのヨッシーに乗る", types: [] },
{ name: "Four 100 Coin Shines", jp: "100枚コインのシャイン4枚", types: [] },
{ name: "5 blue coins from butterflies", types: [] },
{ name: "25 Blue Coins from Noki Bay", jp: "マーレのいりえの青コイン25枚", types: [] },
{ name: "8 Red Coin Shines", jp: "赤コインのシャイン8枚", types: [] }
];
bingoList[25] = [
{ name: "Collect 28 Shines", jp: "シャイン28枚", types: [] },
{ name: "Beat Piantissimo in Noki Bay Episode 5", jp: "マーレのいりえのモンテマンに勝利", types: [] },
{ name: "4 Rocket Nozzle Unlocks", jp: "ロケットノズル4つ解放", types: [] },
{ name: "Sirena Beach Episode 8 Shine", jp: "シレナビーチストーリー8", types: [] },
{ name: "Collect 2 Hidden Shines in Noki Bay", jp: "マーレのいりえの隠しシャイン1枚", types: [] },
{ name: "Ride Yoshi in 3 Different Levels (not plaza)", jp: "Japanese Text", types: [] }
];
