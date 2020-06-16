var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var thisVersion = "v3 beta 9";

var bingoList = [];
bingoList[1] = [
{ name: "M字から青コイン10枚", types: ["M_Graffiti", "Ricco_M"] },
{ name: "アルバイトの青コイン3枚", types: ["Fruit_Ladies"] },
{ name: "赤コインのシャイン3枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Low_Reds"] },
{ name: "ドルピックタウンの青コイン10枚", types: ["Plaza_Blues", "Fruit_Ladies"] },
{ name: "リコハーバーの青コイン15枚", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_Shines"] },
{ name: "モンテのむらの100枚コイン", types: ["X100_Coins"] }
];
bingoList[2] = [
{ name: "ピンナパークの青コイン10枚", types: ["Pinna_Blues", "Pinna_10", "Pinna_30"] },
{ name: "マンマビーチの青コイン15枚", types: ["Gelato_Blues", "Fast_20"] },
{ name: "リコハーバーの青コイン20枚", types: ["Ricco_Blues", "Ricco_M", "Fast_20", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
{ name: "ビアンコヒルズの青コイン15枚", types: ["Bianco_Blues", "Bianco_Early"] },
{ name: "リコハーバーの100枚コイン", types: ["Ricco_100s", "Ricco_Early", "Ricco_Top", "Ricco_Shines"] }
];
bingoList[3] = [
{ name: "青コイン合計30枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "アルバイトの青コイン4枚", types: ["Fruit_Ladies"] },
{ name: "ビアンコ4ポンプ禁止", types: ["Bianco_Early", "Bianco_Shines"] },
{ name: "ビアンコヒルズの隠しシャイン1枚", types: ["Bianco_Early", "Bianco_Hidden", "Bianco_Shines"] },
{ name: "双子ラクガキの青コイン5ペア", types: ["Linked_Blues"] },
{ name: "リコ3ポンプ禁止", types: ["Ricco_Top", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] }
];
bingoList[4] = [
{ name: "マーレのいりえの隠しシャイン1枚", types: ["Noki_Early", "Noki_Hidden", "Noki_Rocket"] },
{ name: "青い鳥の青コイン6枚", types: ["Blue_Bird"] },
{ name: "ドルピックタウンの青コイン15枚", types: ["Plaza_Blues"] },
{ name: "ロケットノズル2つ解放", types: ["Rocket_Nozzle", "Bianco_Rocket", "Ricco_Rocket", "Noki_Rocket", "Pianta_Rocket", "Two_Rockets"] },
{ name: "ビアンコヒルズのシャイン4枚", types: ["Bianco_Rocket", "Bianco_Boss", "Bianco_Secret", "Bianco_Early", "Bianco_Late", "Bianco_Blues", "Bianco_Shines"] },
{ name: "リコハーバーの隠しシャイン1枚", types: ["Ricco_Top", "Ricco_Hidden", "Ricco_Early", "Ricco_Rocket", "Ricco_Shines"] }
];
bingoList[5] = [
{ name: "青コイン合計35枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues", "Sirena_Blues", "XTotal_Blues", "Blue_30"] },
{ name: "赤コインのシャイン4枚", types: ["Red_Shines", "Plaza_Shines", "Hidden_Shines", "Bianco_Early", "Bianco_8", "Low_Reds"] },
{ name: "ピンナパークの青コイン15枚", types: ["Pinna_Blues", "Fast_20", "Pinna_Early", "Pinna_30", "Pinna_Shines"] },
{ name: "マンマビーチの青コイン20枚", types: ["Gelato_Early", "Gelato_Blues", "Wiggler", "Fast_20"] },
{ name: "マンマビーチの隠しシャイン2枚", types: ["Gelato_Early", "Gelato_Hidden"] },
{ name: "モンテ3をノーダメージでクリア", types: ["Goopy_Inferno", "Pianta_Shines"] }
];
bingoList[6] = [
{ name: "M字から青コイン15枚", types: ["M_Graffiti", "Ricco_M"] },
{ name: "ピンナパークの青コイン20枚", types: ["Pinna_Blues", "Fast_20", "Pinna_Early", "Pinna_30", "Pinna_Shines"] },
{ name: "リコハーバーの青コイン25枚", types: ["Ricco_Blues", "Blue_Enemies", "Ricco_Early", "Ricco_30", "Ricco_Shines"] },
{ name: "マンマビーチの100枚コイン", types: ["Gelato_100s", "Gelato_Early"] },
{ name: "ビアンコヒルズの100枚コイン", types: ["Bianco_100s", "Bianco_Early"] },
{ name: "金の鳥のシャインを2枚取得", types: ["Plaza_Shines", "Noki_Hidden", "Noki_Early"] }
];
bingoList[7] = [
{ name: "マーレのいりえの青コイン10枚", types: ["Noki_Blues", "Noki_Early"] },
{ name: "ビアンコヒルズの青コイン20枚", types: ["Bianco_Early", "Bianco_Blues", "Bianco_Shines"] },
{ name: "青コイン合計40枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues",  "XTotal_Blues", "Blue_30", "Sirena_Blues"] },
{ name: "ボスパックン撃破（ビアンコ5）", types: ["Bianco_Boss", "Bianco_Early", "Unique_Boss", "Bianco_Shines"] },
{ name: "シレナビーチの100枚コイン", types: ["Sirena_100s", "X100_Coins", "Sirena_Early"] },
{ name: "ボスハナチャン撃破（マンマ3）", types: ["Wiggler", "Gelato_Early"] }
];
bingoList[8] = [
{ name: "ヒミツステージのシャイン4枚", types: ["Secret_Shines", "Hidden_Shines", "Bianco_Hidden", "Plaza_Secret"] },
{ name: "チョロプーを2匹とも倒す", types: ["Noki_Early", "Pinna_Shines"] },
{ name: "ボス4体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss"] },
{ name: "青コイン合計45枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues",  "XTotal_Blues", "Blue_30", "Sirena_Blues"] },
{ name: "ピンナパークの隠しシャイン1枚", types: ["Pinna_Early", "Pinna_Hidden", "Pinna_Yoshi", "Pinna_Shines"] },
{ name: "ヒミツ内部で100枚コインのシャイン取得", types: ["Secret_100s"] }
];
bingoList[9] = [
{ name: "ピンナ3ホバー禁止", types: ["Pinna_Hoverless", "Pinna_Yoshi","Pinna_Shines", "Plaza_Yoshi"] },
{ name: "敵から青コイン5枚", types: ["Blue_Enemies", "Ricco_Top", "Ricco_Blues", "Ricco_Early", "XBoss_Shines", "M_Graffiti"] },
{ name: "ボス4種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss"] },
{ name: "隠しシャイン4枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Secret_Shines"] },
{ name: "赤コインのシャイン5枚", types: ["Red_Shines", "Hidden_Shines", "Low_Reds"] },
{ name: "残機20", types: ["X_Lives", "Pianta_Lives"] }
];
bingoList[10] = [
{ name: "リコハーバーのシャイン6枚", types: ["Ricco_6", "Ricco_Late", "Ricco_Yoshi"] },
{ name: "M字から青コイン20枚", types: ["M_Graffiti", "Ricco_M"] },
{ name: "青コイン合計50枚", types: ["Ricco_Blues", "Pinna_Blues", "Bianco_Blues", "Pianta_Blues", "Noki_Blues", "Plaza_Blues", "Gelato_Blues",  "XTotal_Blues", "Blue_30", "Sirena_Blues"] },
{ name: "マンマビーチのシャイン4枚", types:  ["Gelato_5", "Wiggler", "Gelato_Early"] },
{ name: "残機25", types: ["X_Lives", "Pianta_Lives"] },
{ name: "ピンナパークの100枚コイン", types: ["Pinna_100s", "Pinna_Hoverless"] }
];
bingoList[11] = [
{ name: "敵から青コイン7枚", types: ["Blue_Enemies", "XBoss_Shines", "M_Graffiti"] },
{ name: "双子ラクガキの青コイン8ペア", types: ["Linked_Blues", "Pinna_10"] },
{ name: "ピンナパークのヨッシーに乗る", types: ["Pinna_Yoshi", "Pinna_Hoverless", "Pinna_Butterfly", "Pinna_Early", "Pinna_Shines", "Plaza_Yoshi"] },
{ name: "ドルピックタウンのシャイン8枚", types: ["Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza", "Pianta_8", "Plaza_Secret", "LateS_Plaza"] },
{ name: "シレナビーチの青コイン10枚", types: ["Sirena_Blues", "Sirena_Early", "Three_Yoshi"] },
{ name: "ピンナパークの青コイン25枚", types: ["Pinna_Blues", "Pinna_Late", "Pinna_30", "Pinna_Yoshi"] }
];
bingoList[12] = [
{ name: "ボス5体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss", "5_Bosses"] },
{ name: "隠しシャイン5枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Pianta_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Secret_Shines", "Hidden_Plaza"] },
{ name: "マーレのいりえの青コイン20枚", types: ["Noki_Blues", "Noki_Early", "Noki_20", "LateG_Noki"] },
{ name: "青コイン合計55枚", types: ["XTotal_Blues", "High_Blues"] },
{ name: "シレナビーチの隠しシャイン1枚", types: ["Sirena_Hidden", "Sirena_Early"] },
{ name: "リコ6イカなし", types: ["Ricco_Top", "Ricco_Early", "Ricco_6", "Ricco_100s", "Ricco_Shines"] }
];
bingoList[13] = [
{ name: "赤コインのシャイン6枚", types: ["Red_Shines", "Hidden_Shines", "Low_Reds"] },
{ name: "リコハーバーの隠しシャイン2枚", types: ["Ricco_Hidden", "Ricco_Early", "Ricco_6"] },
{ name: "モンテのむらのシャイン6枚", types: ["Pianta_Late", "Pianta_8", "Pianta_Lives", "Pianta_6", "Pianta_Shines"] },
{ name: "大砂鳥のシャインを取得", types: ["Wiggler", "Gelato_5", "Paint_Race"] },
{ name: "ドルピックタウンのシャイン9枚", types: ["Plaza_Shines", "Shadow_Plaza", "Hidden_Plaza", "Plaza_Mix_Up", "Pianta_8", "Plaza_Secret", "Plaza_G8", "Plaza_Rocket", "LateS_Plaza", "HighBlue_Plaza"] },
{ name: "ピンナ5を裏側からホバー禁止でクリア", types: ["Pinna_Hoverless", "Pinna_Early", "Pinna_Butterfly", "Pinna_Shines", "Plaza_Yoshi"] }
];
bingoList[14] = [
{ name: "青コイン合計60枚", types: ["XTotal_Blues", "High_Blues"] },
{ name: "ロケットノズル3つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Bianco_Rocket", "Noki_Rocket", "Three_Rockets", "Pianta_Rocket"] },
{ name: "残機30", types: ["X_Lives", "Pianta_Lives", "100_Lives", "LateN_Lives"] },
{ name: "ベルのシャインを2枚取得", types: ["Plaza_Shines", "Plaza_Yoshi", "Pinna_6", "No_Clip"] },
{ name: "急流下りのシャイン取得", types: ["Plaza_Shines", "Plaza_Yoshi", "No_Clip"] },
{ name: "マーレのいりえの100枚コイン", types: ["Noki_100s", "Noki_20"] },
{ name: "リコハーバーのニセマリオ撃破", types: ["Ricco_Shadow", "Ricco_Late", "Ricco_Shines", "Ricco_8", "Ricco_Turbo"] }
];
bingoList[15] = [
{ name: "残機35", types: ["X_Lives", "Pianta_Lives", "100_Lives", "LateN_Lives"] },
{ name: "ビアンコヒルズの青コイン25枚", types: ["Bianco_30", "Bianco_Early", "Bianco_Blues"] },
{ name: "青コイン合計65枚", types: ["XTotal_Blues", "High_Blues"] },
{ name: "ビアンコヒルズのニセマリオ撃破", types: ["Bianco_Shadow", "Bianco_Late", "Bianco_Shines", "Bianco_8", "Multi_Shadow"] },
{ name: "ヒミツステージのシャイン5枚", types: ["Secret_Shines", "Hidden_Shines", "Secret_Count", "Plaza_Secret", "Ricco_Secret", "Pianta_Secret", "Gelato_Secret"] },
{ name: "モンテのむらの隠しシャイン1枚", types: ["Pianta_Hidden", "Pianta_Shines", "Pianta_Lives", "LateP_LateG"] }
];
bingoList[16] = [
{ name: "マンマビーチの青コイン25枚", types: ["Gelato_Blues", "Wiggler", "Paint_Race", "LateG_LateN"] },
{ name: "モンテのむらの青コイン20枚", types: ["Pianta_Blues", "Pianta_Late", "Pianta_Butterfly", "Pianta_Yoshi", "Pianta_Shines", "Pianta_Lives"] },
{ name: "モンテのむらのニセマリオ撃破", types: ["Pianta_Late", "Pianta_Shadow", "Pianta_8", "Pianta_Lives", "Pianta_Yoshi", "Pianta_6", "LateP_LateS", "LateP_LateG", "Pianta_Rocket", "Pianta_Secret"] },
{ name: "ボス6体撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Sirena_Early", "Noki_Boss"] },
{ name: "シレナビーチの青コイン20枚", types: ["Sirena_Early","Sirena_Blues", "Sirena_20"] },
{ name: "リコハーバーストーリー8", types: ["Ricco_8", "Ricco_Late", "Ricco_Yoshi", "Ricco_Shines", "2EP_8", "Ricco_Turbo", "Ricco_Secret"] }
];
bingoList[17] = [
{ name: "ボス5種類撃破", types: ["XBoss_Shines", "Unique_Boss", "Bianco_Boss", "Pinna_Boss", "Ricco_Boss", "Wiggler", "Sirena_Early", "Noki_Boss", "Pianta_6", "Unique_Gelato"] },
{ name: "ドルピックタウンのシャイン10枚", types: ["Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza", "Pianta_8", "Plaza_Secret", "Plaza_Rocket", "LateS_Plaza", "Noki_100s"] },
{ name: "残機40", types: ["X_Lives", "Pianta_Lives", "100_Lives", "LateN_Lives", "Gelato_Lives", "Sirena_Lives"] },
{ name: "青コイン合計70枚", types: ["XTotal_Blues", "High_Blues", "HighBlue_Plaza"] },
{ name: "ピンナパークのシャイン6枚", types: ["Pinna_Yoshi", "Pinna_Butterfly", "Pinna_6", "Pinna_Hoverless", "Pinna_Shines", "Four_Rockets"] },
{ name: "ビアンコヒルズストーリー8", types: ["Bianco_Shadow", "Bianco_Late", "Bianco_Yoshi", "Bianco_Shines", "Bianco_8", "2EP_8", "Sirena_Late"] },
{ name: "ボスゲッソーを3体全て倒す", types: ["Noki_Early", "XBoss_Shines", "Ricco_6", "Ricco_Shadow", "Sirena_Late"] }
];
bingoList[18] = [
{ name: "各ステージからシャインを1枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Single_Mix_Up"] },
{ name: "ビアンコヒルズの隠しシャイン2枚", types: ["Bianco_Hidden", "Bianco_Late", "Blue_Bird", "Bianco_Yoshi", "Bianco_Shines"] },
{ name: "5つのステージからシャイン2枚ずつ取得", types: ["Mix_Up", "Plaza_Mix_Up", "Single_Mix_Up"] },
{ name: "ターボノズル2つ解放", types: ["Gelato_Turbo", "Turbo_Nozzle", "Bianco_Turbo", "Ricco_Turbo", "Sirena_Late"] },
{ name: "青い鳥の青コイン7枚", types: ["Blue_Bird"] },
{ name: "モンテのむらの青コイン25枚", types: ["Pianta_Blues", "Pianta_30", "Pianta_Shines", "Pianta_Lives", "Sirena_Late", "Pianta_Butterfly"] },
{ name: "青コイン合計75枚", types: ["XTotal_Blues", "High_Blues"] }
];
bingoList[19] = [
{ name: "ニセマリオ2体撃破", types: ["Shadow_Mario", "Bianco_Shadow", "Gelato_Shadow", "Ricco_Shadow", "Pianta_Shadow", "Shadow_Plaza", "Shadow_Mix_Up"] },
{ name: "100枚コインのシャイン3枚", types: ["X100_Coins", "Bianco_100s", "Ricco_100s", "Gelato_100s", "Pinna_100s", "Sirena_100s", "Noki_100s", "Secret_100s", "100_Lives"] },
{ name: "モンテマンレース2つ", types: ["Paint_Race", "Wiggler", "Pinna_Paint"] },
{ name: "3つのステージからシャイン5枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Single_Mix_Up"] },
{ name: "シレナビーチのシャイン5枚", types: ["Sirena_5", "Sirena_Yoshi"] },
{ name: "隠しシャイン6枚", types: ["Hidden_Shines", "Ricco_Hidden", "Bianco_Hidden", "Gelato_Hidden", "Sirena_Hidden", "Noki_Hidden", "Pianta_Hidden", "Secret_Shines", "Hidden_Plaza"] },
{ name: "モンテのむらのヨッシーに乗る", types: ["Pianta_6", "Pianta_Yoshi", "Pianta_Butterfly", "Pianta_Lives", "LateP_LateG", "LateP_LateS", "Gelato_Yoshi"] }
];
bingoList[20] = [
{ name: "モンテのむらストーリー8", types: ["Pianta_8", "Pianta_Shadow", "Pianta_6", "Pianta_Shines", "Pinna_Shadow", "Gelato_Shadow", "2EP_8", "LateP_LateG", "Pianta_Late"] },
{ name: "青コイン合計80枚", types: ["XTotal_Blues", "High_Blues"] },
{ name: "シャイン24枚", types: ["Total_Shines", "X_Lives", "Slow_Awful"] },
{ name: "4つのステージからシャイン4枚ずつ取得", types: ["Mix_Up", "Shadow_Mix_Up", "Plaza_Mix_Up", "Single_Mix_Up"] },
{ name: "ピンナパークのニセマリオ撃破", types: ["Pinna_Shadow", "Pinna_6", "Pinna_Shines", "Four_Rockets"] },
{ name: "任意の1ステージからシャイン9枚取得（ドルピックタウン以外）", types: ["Ricco_8", "Pianta_Lives", "Bianco_8", "Gelato_8", "Pinna_8", "Pianta_8", "9_S", "Single_Mix_Up"] }
];
bingoList[21] = [
{ name: "マンマビーチのニセマリオ撃破", types: ["Gelato_Late", "Gelato_5", "Gelato_Shadow", "Sirena_8", "Gelato_8", "Noki_Paint", "Plaza_G8", "Multi_Shadow", "LateG_Noki", "Slow_Awful", "Gelato_Yoshi", "Unique_Gelato"] },
{ name: "赤コインのシャイン7枚", types: ["Red_Shines"] },
{ name: "ビアンコヒルズのヨッシーに乗る", types: ["Bianco_Yoshi", "Bianco_8", "Bianco_30", "Ricco_Shadow", "Noki_Paint"] },
{ name: "敵から青コイン9枚", types: ["Blue_Enemies", "Ricco_Blues"] },
{ name: "蝶の青コイン4枚", types: ["Pinna_Butterfly", "Blue_Bird", "Pianta_Butterfly"] },
{ name: "1ステージから青コイン30枚取得", types: ["Ricco_30", "Bianco_30", "Pinna_30", "Pianta_30", "Blue_30", "Secret_Count", "Pinna_6"] }
];
bingoList[22] = [
{ name: "シレナビーチの隠しシャイン2枚", types: ["Sirena_Hidden", "Sirena_Late", "Sirena_5", "Three_Rockets"] },
{ name: "ピンナパークの隠しシャイン2枚", types: ["Pinna_Hidden", "Pinna_Late", "Pinna_Shines", "Turbo_Nozzle"] },
{ name: "シレナ3すり抜けバグ禁止", types: ["Sirena_Late", "Pinna_Yoshi", "Three_Rockets", "Sirena_Yoshi", "No_Clip"] },
{ name: "シャイン27枚", types: ["Total_Shines", "X_Lives", "Slow_Awful"] },
{ name: "マーレのいりえのシャイン4枚", types: ["Noki_Late", "Slow_Awful"] },
{ name: "任意の1ステージからシャイン10枚取得（ドルピックタウン以外）", types: ["Ricco_8", "Pianta_Lives", "Bianco_8", "Gelato_8", "Pinna_8", "9_S", "Single_Mix_Up", "Secret_Count", "Pianta_Late"] }
];
bingoList[23] = [
{ name: "ピンナパークストーリー8", types: ["Pinna_8", "Pinna_Late", "Pinna_Shines", "Gelato_8", "2EP_8", "Pinna_Paint"] },
{ name: "ボステレサ撃破", types: ["Sirena_5", "Sirena_Late", "Sirena_8", "Sirena_Boss", "Pianta_Shadow", "LateP_LateS", "Three_Rockets", "Sirena_Lives"] },
{ name: "ストーリー8のシャインを2枚取得", types: ["Shadow_Mario", "Shadow_Plaza"] },
{ name: "ドルピックタウンのシャイン11枚", types: ["Plaza_Shines", "Shadow_Plaza", "Plaza_Mix_Up", "Hidden_Plaza", "Plaza_G8", "Pianta_8", "Plaza_Secret", "LateS_Plaza", "Plaza_Rocket"] },
{ name: "マンマビーチストーリー8", types: ["Gelato_8", "Gelato_Shadow", "Gelato_5", "Plaza_G8", "2EP_8", "Noki_Paint", "LateP_LateG", "LateG_Noki", "Sirena_8", "Gelato_Lives", "Gelato_Secret", "Gelato_Yoshi"] },
{ name: "モンテのむらの隠しシャイン2枚", types: ["Pianta_Late", "Pianta_Hidden", "Pianta_8", "Pianta_Shines", "9_S", "Low_Reds", "Pianta_Lives", "Pianta_Shadow", "Two_Rockets", "LateP_LateS", "Pianta_Secret"] }
];
bingoList[24] = [
{ name: "ヒミツステージのシャイン6枚", types: ["Secret_Shines", "Secret_Count", "Plaza_Secret", "Ricco_Secret"] },
{ name: "シレナビーチのニセマリオ撃破", types: ["Sirena_Shadow", "Sirena_Late", "Rocket_Nozzle", "Multi_Shadow", "Bianco_Yoshi", "Slow_Awful", "LateP_LateS", "LateS_Plaza"] },
{ name: "100枚コインのシャイン4枚", types: ["X100_Coins", "Bianco_100s", "Ricco_100s", "Gelato_100s", "100_Lives"] },
{ name: "ドルピックタウン以外の3つのステージでヨッシーに乗る", types: ["Pianta_6", "Pianta_Yoshi", "X_Lives", "Plaza_Shines", "5_Bosses", "Three_Yoshi"] },
{ name: "赤コインのシャイン8枚", types: ["Red_Shines"] }
];
bingoList[25] = [
{ name: "ウナギ撃破（マーレ4）", types: ["Noki_Late", "LateN_Lives"] },
{ name: "マンマビーチのヨッシーに乗る", types: ["X_Lives", "LateP_LateG", "Ricco_Late", "Slow_Awful", "Paint_Race"] },
{ name: "ロケットノズル4つ解放", types: ["Rocket_Nozzle", "Ricco_Rocket", "Four_Rockets", "Three_Rockets", "Plaza_Rocket", "Gelato_Yoshi"] },
{ name: "シレナビーチストーリー8", types: ["Sirena_8", "Sirena_Late", "Paint_Race", "2EP_8", "Blue_Bird", "LateP_LateS", "LateS_Plaza", "Slow_Awful"] },
{ name: "マーレのいりえの青コイン25枚", types: ["Noki_Late", "Noki_Blues", "LateG_LateN"] }
];
