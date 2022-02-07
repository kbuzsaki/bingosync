bingoGenerator = require("./generators/generator_bases/synerGen.js");

var bingoList = {
  "bingoTypes": {
    "Tiebreaker": {"Max": 1}
  },
  "maxScore": 9.5,
  //Sorted alphabetically and grouped

  //Bosses. Dream versions grouped instead of alphabetical


  "2DreamBosses": {
    "Desc": "夢見の再戦ボスを2人倒す"
  },

  "BVessel": {
    "Desc": "壊れた器を倒す",
    "Excludes": ["LostKin"]
  },

  "LostKin": {
    "Desc": "失われた同胞を倒す",
    "Excludes": ["BVessel"]
  },

  "CG1": {
    "Desc": "憤怒のゴエイムシを倒す",
    "Excludes": ["CG2"]
  },

  "CG2": {
    "Desc": "スイショウゴエイムシを倒す",
    "Excludes": ["CG1"]
  },

  "Collector": {
    "Desc": "収集者を倒す",
    "Excludes": ["KEGrubs"]
  },

  "DDefender": {
    "Desc": "フンコロ騎士を倒す",
    "Excludes": ["WhiteDefender"]
  },

  "WhiteDefender": {
    "Desc": "純白の騎士を倒す",
    "Types": ["Tiebreaker"],
    "Excludes": ["DDefender", "MrMushroom1"]
  },

  "FChamp": {
    "Desc": "失望の王者を倒す"
  },

  "FKnight_BMawlek": {
    "Desc": "偽りの騎士と悩めるモーレックを倒す"
  },

  "Flukemarm": {
    "Desc": "スイツキマームを倒す"
  },

/*
  "GPZote": {
    "Desc": "灰色の王子ゾートを倒す",
    "Types": ["Tiebreaker"],
    "Excludes": ["ColoZote", "DeepnestZote", "Colo1"]
  },
 */

  "HiveKnight": {
    "Desc": "ハイブの騎士を倒す",
    "Excludes": ["HiveMask"]
  },

  "Hornet2": {
    "Desc": "王国のはずれのホーネットを倒す",
    "Excludes": ["VisitQueensShell"]
  },

  "MLords": {
    "Desc": "カマキリの王を倒す"
  },

  "Nosk": {
    "Desc": "ノスクを倒す",
    "Excludes": ["PaleOreCheck"]
  },

/*
  "OroMato": {
    "Desc": "Defeat Oro and Mato",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },
  */

  "PaleLurker": {
    "Desc": "蒼白のシノビを倒す"
  },

/*
  "PaintmasterSheo": {
    "Desc": "Defeat Paintmaster Sheo",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

  "PVessel": {
    "Desc": "Defeat Pure Vessel",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

*/

  "Radiant": { // Under I know you're reading this and I hope it fills you with joy
    "Desc": "「光輝」ボスを1人倒す",
    "Excludes": ["Godhome", "Ordeal20"]
  },

  "SoulMaster": {
    "Desc": "ソウルの師を倒す",
    "Excludes": ["SoulTyrant"]
  },

  "SoulTyrant": {
    "Desc": "ソウルの圧制者を倒す",
    "Excludes": ["SoulMaster"]
  },

  "TLord": {
    "Desc": "造反者の長の倒す",
    "Excludes": ["WhiteLady", "ClothQuest"]
  },

  "TMGrimm": {
    "Desc": "巡業団の長グリムを倒す"
  },

  "NKGrimm": {
    "Desc": "悪夢の王グリムを倒す",
    "Types": ["Tiebreaker"],
    "Excludes": ["CarefreeMelody"]
  },

  "Uumuu": {
    "Desc": "ウームーを倒す"
  },

  "WK": {
    "Desc": "監視塔の騎士を倒す"
  },

  "VK_MMC": {
    "Desc": "イカリバエの王とダイコケグマを倒す"
  },




  //Dream Warriors


  "2DreamWarriors": {
    "Desc": "夢見の戦士を2人倒す" // No exclusion for now - but I wouldn't be surprised if a type demand rises up
  },

  "Galien": {
    "Desc": "ガリエンを倒す"
  },

  "Gorb": {
    "Desc": "ゴーブを倒す"
  },

  "Hu": {
    "Desc": "長老フーを倒す"
  },

  "Marmu": {
    "Desc": "マームを倒す"
  },

  "Markoth": {
    "Desc": "マーコスを倒す"
  },

  "NoEyes": {
    "Desc": "メナシを倒す"
  },

  "Xero": {
    "Desc": "ゼロを倒す"
  },




  //Enemies

  "2Warriors": {
    "Desc": "ソウルの戦士を2人倒す",
    "Excludes": ["SSoulCheck"]
  },

  "3Sentries": {
    "Desc": "ダイバンペイムシを3人倒す",
    "Excludes": ["GHusk"]
  },

  "Aluba": {
    "Desc": "アルーバを1人倒す"
  },

  "Aluba2": {
    "Desc": "アルーバを2人倒す"
  },

  "Colo1": {
    "Desc": "戦士の試練をクリアする",
    "Excludes": ["ColoZote", "GPZote"]
  },

/*
  "Colo3": {
    "Desc": "愚者の試練をクリアする",
    "Types": ["Tiebreaker"]
  },

*/

  "ColoZote": {
    "Desc": "戦士の試練でゾートを倒す",
    "Excludes": ["Colo1", "GPZote"]
  },

  "CrystalCrawler": {
    "Desc": "スイショウズリズリを倒す"
  },

  "Devout": {
    "Desc": "オイカケシンジャを異なる場所で6人倒す"
  },

  "Durandoo": {
    "Desc": "デュランドゥーを倒す",
    "Excludes": ["Gulka"]
  },

  "GHopper": {
    "Desc": "オオハネムシを倒す"
  },

  "GHusk": {
    "Desc": "ナリキンムシを倒す",
    "Excludes": ["3Sentries"]
  },

  "Gulka": {
    "Desc": "グルカをグルカ自身の弾を跳ね返して倒す",
    "Excludes": ["Durandoo"]
  },

  "Kingsmould": {
    "Desc": "オウノカラを倒す",
    "Excludes": ["PoP"],
    "Score": 0.88
  },

  "Lightseed": {
    "Desc": "光輝の種を倒す"
  },

  "Maggots": {
    "Desc": "マゴットを2人倒す"
  },

  "Marissa": {
    "Desc": "マリッサを夢見の釘で斬る",
    "Excludes": ["Springs", "2Keys"]
  },

  "Millibelle": {
    "Desc": "ミリベルを悦楽の家で釘で斬る",
    "Excludes": ["Bank"]
  },

  "Mimics": {
    "Desc": "幼虫モドキの場所を4か所チェックする"
  },

  "Myla": {
    "Desc": "マイラを倒す",
    "Score": 1.18
  },




  //Items. Different types (Dreamers/Skills/Keys/etc) grouped together

  "Herrah": {
    "Desc": "ヘラーを入手する",
    "Score": 1.30
  },

  "Lurien": {
    "Desc": "ルリエンを入手する",
    "Score": 1.30
  },

  "Monomon": {
    "Desc": "モノモンを入手する",
    "Score": 1.30
  },


  "DeepStag": {
    "Desc": "彼方の村にスタグで訪ねる",
    "Excludes": ["Midwife", "VisitDistantHive"],
    "Score": 1.30
  },

  "GardenStag": {
    "Desc": "女王の庭にスタグで訪ねる",
    "Score": 1.30
  },

  "HiddenStag": {
    "Desc": "隠された駅にスタグで訪ねる",
    "Excludes": ["WPShadeSkip"],
    "Score": 1.30
  },

  "KingStag": {
    "Desc": "王の駅にスタグで訪ねる",
    "Score": 1.30
  },

  "QueensStag": {
    "Desc": "女王の駅にスタグで訪ねる",
    "Score": 1.30
  },



  "5Charms": {
    "Desc": "チャームを5つ以上入手",
    "Score": 0.20
  },

  "5CharmsEquipped": {
    "Desc": "チャームを5つ同時に装備する",
  },


  "CarefreeMelody": {
    "Desc": "陽気なメロディを入手する",
    "Excludes": ["NKGrimm", "Brumm"]
  },

  "CompassSwarm": {
    "Desc": "放浪者のコンパスか収集の群れのどちらかを入手する",
    "Score": 1.06
  },

  "DWielderShield": {
    "Desc": "夢の司か夢の盾のどちらかを入手する",
    "Score": 1.06
  },

  "FCharms": {
    "Desc": "繊細なチャームを3つ全て入手する",
    "Score": 1.00
  },

  "FlukenestFury": {
    "Desc": "スイツキの巣か死にゆく者の怒りのどちらかを入手する",
    "Score": 1.06
  },

  "GrubsongElegy": {
    "Desc": "幼虫の歌か成虫の哀歌のどちらかを入手する",
    "Score": 1.06
  },

  "GWombWeavers": {
    "Desc": "輝く子宮か紡ぐ者の歌のどちらかを入手する",
    "Score": 1.06
  },

  "HeavyBlowSteady": {
    "Desc": "重い一撃か重心安定のどちらかを入手する",
    "Score": 1.06
  },

  "HivebloodShadow": {
    "Desc": "ハイヴの血か鋭利な影のどちらかを入手する",
    "Score": 1.06
  },

  "LifebloodCharms": {
    "Desc": "生命の心、生命の核、ジョニの祝福の中から2つ入手する",
    "Score": 1.00
  },

  "Longnail": {
    "Desc": "長い釘か誇りの印のどちらかを入手する",
    "Score": 1.06
  },

  "QSlashGlory": {
    "Desc": "高速斬りか釘師の栄光のどちらかを入手する",
    "Score": 1.06
  },

  "QuickDeepFocus": {
    "Desc": "迅速なるフォーカスか超集中のどちらかを入手する",
    "Score": 1.06
  },

  "ShamanStoneTwister": {
    "Desc": "霊媒師の石か魔力の印のどちらかを入手する",
    "Score": 1.06
  },

  "SprintmasterDashmaster": {
    "Desc": "速駆け師か健脚の師のどちらかを入手する",
    "Score": 1.06
  },

  "SoulTools": {
    "Desc": "ソウルイーターかソウルキャッチャーのどちらかを入手する",
    "Score": 1.06
  },

  "ThornsStalwart": {
    "Desc": "苦痛のトゲか堅固な殻のどちらかを入手する",
    "Score": 1.06
  },

  "UnnShell": {
    "Desc": "ウヌの形態かバルダーの殻のどちらかを入手する",
    "Score": 1.06
  },

  "LoveKey": {
    "Desc": "愛の鍵を入手する",
    "Excludes": ["KEGrubs"],
    "Score": 1.30
  },


  "DDark": {
    "Desc": "漆黒のダイブを入手する",
    "Score": 1.03
  },

  "DNail": {
    "Desc": "夢見の釘を入手する",
    "Score": 0.80
  },

  "DGate": {
    "Desc": "夢見の門を入手する",
    "Score": 0.95
  },

  "NailArts": {
    "Desc": "釘奥義を2つ入手する",
    "Score": 1.00
  },

  "Shriek": {
    "Desc": "アビスの叫びを入手する",
    "Score": 1.03
  },

  "SSoul": {
    "Desc": "シェイドソウルを入手する",
    "Score": 1.03
  },

  "Tear": {
    "Desc": "イズマの涙を入手する",
    "Excludes": ["UnnSkip", "LoveKeySkip"],
    "Score": 1.18
  },

  "VSpirit": {
    "Desc": "復讐の魂を入手する",
    "Score": 0.96
  },

  "Wraiths": {
    "Desc": "亡霊の叫びを入手する",
    "Score": 0.96
  },



  "15Grub": {
    "Desc": "芋虫を15人助ける",
    "Excludes": ["KEGrubs", "35Grub"]
  },

/*
  "35Grub": {
    "Desc": "Obtain 35 grubs",
    "Excludes": ["KEGrubs", "15Grub", "DeepnestGrubs", "BasinGrubs", "CrossroadsCanyonGrubs", "PeaksGrub", "QueenGrub", "WaterGrub", "FunGreenGrub"],
    "Types": ["Tiebreaker"]
  },
*/

  "2Ore": {
    "Desc": "蒼白の鉱石を2つ入手する",
    "Excludes": ["Nail3"],
    "Score": 0.71
  },

  "2Keys": {
    "Desc": "単純な鍵を2つ使用する",
    "Excludes": ["Jiji", "Marissa"],
    "Score": 0.89
  },

  "3Maps": {
    "Desc": "ダートマウス、ハイブを除くマップを3つ入手する",
    "Excludes": ["Cornifer3"]
  },

  "CollectorMap": {
    "Desc": "コレクターの地図を入手する",
    "Score": 1.30
  },

  "Egg": {
    "Desc": "神秘の卵を1つ入手する",
    "Score": 0.73
  },

  "Godtuner": {
    "Desc": "神の調律器を入手",
    "Score": 1.30
  },

  "Idols": {
    "Desc": "王の小像を3つ入手する",
    "Score": 0.66
  },

  "Journals": {
    "Desc": "放浪者の日誌を5つ入手する",
    "Score": 0.51
  },

  "Lantern": {
    "Desc": "ルマバエのランタンを入手する",
    "Excludes": ["JoniDarkRoom"],
    "Score": 1.30
  },

  "Mask1": {
    "Desc": "仮面の破片を4つ入手する",
    "Score": 0.43
  },

  "Notches": {
    "Desc": "チャームスロットを6つ保有する",
    "Score": 0.41
  },

  "RancidEggs": {
    "Desc": "悪臭を放つ卵を4つ入手する",
    "Score": 0.36
  },

  "Seals": {
    "Desc": "ハロウネストの紋章を5つ入手する",
    "Score": 0.44
  },

  "SoulVessel": {
    "Desc": "器の欠片を3つ入手する",
    "Score": 0.61
  },

  "TramPass": {
    "Desc": "トラムの乗車券を入手する",
    "Excludes": ["PinsAll", "KEGrubs"],
    "Score": 1.30
  },

  "WorldSense": {
    "Desc": "World Senseを入手する",
    "Score": 1.30
  },



  //Checks (Grubs are grouped)


  "Cornifer3": {
    "Desc": "コーニファーの出現場所を3か所チェックする",
    "Excludes": ["3Maps"]

  },


  "CHeartCheck": {
    "Desc": "水晶の心臓の場所をチェックする"
  },

  "CPeaksChest": {
    "Desc": "水晶山の宝箱を開ける"
  },

  "DeepFocusCheck": {
    "Desc": "超集中の場所をチェックする"
  },

  "Dreamers": {
    "Desc": "夢見の守護者がいる場所のうち2か所のアイテムを入手する（要：夢見の釘）",
    "Excludes": ["Uumuu", "WK", "VisitDistantHive"]
  },

  "GreenpathRoot": {
    "Desc": "緑の道のささやきの根のエッセンスをすべて回収する"
  },

  "HallownestCrown": {
    "Desc": "水晶山の蒼白の鉱石の場所をチェックする"
  },

  "Fountain": {
    "Desc": "古代の穴の泉に3000ジオ投入する",
    "Excludes": ["3000", "4000"]
  },

  "FungalCoreElder": {
    "Desc": "巨大なキノキンの骸に向かってお辞儀する（↓を入力）"
  },

  "GWombSkip": {
    "Desc": "輝く子宮の場所をチェックする"
  },

  "HiveMask": {
    "Desc": "ハイブ内のマスクの破片の場所をチェックする",
    "Excludes": ["HiveKnight", "KEGrubs"]
  },

  "JoniDarkRoom": {
    "Desc": "ジョニの祝福の場所をチェックする",
    "Excludes": ["Lantern"]
  },

  "KEdgeRoot": {
    "Desc": "王国のはずれのささやきの根のエッセンスをすべて回収する"
  },

  "LoveKeySkip": {
    "Desc": "愛の鍵の場所をチェックする",
    "Excludes": ["Tear"]
  },

  "Nailmasters": {
    "Desc": "釘師の場所を2か所チェックする"
  },

  "PaleOreCheck": {
    "Desc": "蒼白の鉱石の場所を2か所チェックする（芋虫、先見者報酬は除く）",
    "Excludes": ["Nosk"]
  },

  "SanctuarySkip": {
    "Desc": "ダイコケグマのいる部屋の右の部屋にある放浪者の日誌をチェックする"
  },

  "Sheo": {
    "Desc": "シオの場所をチェックする"
  },

  "Shops": {
    "Desc": "4つの店に訪問する（スライ、イゼルダ、サルブラ、足を喰らう者）",
    "Excludes": ["Cloth"]
  },

  "SpellLocations": {
    "Desc": "スペルの場所を3か所チェックする"
  },

  "StagVessel": {
    "Desc": "スタグの巣の器の欠片の場所をチェックする"
  },

  "SSoulCheck": {
    "Desc": "シェイドソウルの場所をチェックする",
    "Excludes": ["2Warriors"],
    "Score": 1.30
  },

  "ShriekCheck": {
    "Desc": "アビスの叫びの場所のアイテムを入手する（要：亡霊の叫び）"
  },

  "TearCheck": {
    "Desc": "イズマの涙の場所をチェックする"
  },

  "Trees4": {
    "Desc": "4か所のささやきの根のエッセンスをすべて回収する"
  },

  "UnnSkip": {
    "Desc": "ウヌの形態の場所をチェックする",
    "Excludes": ["Tear"]
  },

  "VillageJournal": {
    "Desc": "カマキリ族の村の上の放浪者の日記の場所をチェック"
  },

  "VoidHeart": {
    "Desc": "虚無の心の場所をチェックする"
  },


  "BasinGrubs": {
    "Desc": "古代の穴の芋虫を解放、または芋虫の場所をすべて（2か所）チェックする"
  },

  "CoTGrubs": {
    "Desc": "涙の都の芋虫を解放、または芋虫の場所をすべて（5か所）チェックする"
  },

  "CrossroadsCanyonGrubs": {
    "Desc": "交叉路および霧の渓谷の芋虫を解放、または芋虫の場所をすべて（6か所）チェックする"
  },

  "DeepnestGrubs": {
    "Desc": "暗闇の巣の芋虫を解放、または芋虫の場所をすべて（5か所）チェックする"
  },

  "FunGreenGrub": {
    "Desc": "緑の道と胞子の森の芋虫を解放、または芋虫の場所をすべて（6か所）チェックする"
  },

  /*

  "KEGrubs": {
    "Desc": "Check/Free all grubs in Kingdom's Edge (7)",
    "Excludes": ["3Floors", "15Grub", "TramPass", "HiveMask", "Collector", "LoveKey"],
    "Types": ["Tiebreaker"]
  },

*/

  "PeaksGrub": {
    "Desc": "水晶山の芋虫を解放、または芋虫の場所をすべて（7か所）チェックする"
  },

  "QueenGrub": {
    "Desc": "女王の庭の芋虫を解放、または芋虫の場所をすべて（3か所）チェックする"
  },

  "WaterGrub": {
    "Desc": "王家の水路の芋虫を解放、または芋虫の場所をすべて（3か所）チェックする"
  },




  //Misc.

  "3Floors": {
    "Desc": "ダイブを使用して3か所の地面を壊す",
    "Excludes": ["KEGrubs"]

  },

  "420Rock": {
    "Desc": "王国のはずれの巨大なジオの塊を壊す"
  },

  "500Essence": {
    "Desc": "エッセンスを500集める"
  },

  "3000": {
    "Desc": "3000ジオ使用する",
    "Excludes": ["Fountain", "4000"]
  },

  "4000": {
    "Desc": "4000ジオ使用する",
    "Excludes": ["Fountain", "3000", "5000"]
  },

  "5000": {
    "Desc": "5000ジオ使用する",
    "Excludes": ["4000"]
  },

  "Bank": {
    "Desc": "銀行に1500ジオ預ける",
    "Excludes": ["Millibelle"]
  },

  "Bardoon": {
    "Desc": "バードーンに話しかける"
  },

  "BrettaSly": {
    "Desc": "ブレッタとスライを助ける"
  },

  "Brumm": {
    "Desc": "ブラムの炎を入手する",
    "Excludes": ["CarefreeMelody"]
  },

  "Cloth": {
    "Desc": "クロースに話しかける",
    "Excludes": ["Shops"]
  },

  "ClothQuest": {
    "Desc": "クロースのサブストーリーのどちらかのエンディングを迎える",
    "Excludes": ["TLord", "WhiteLady"]
  },

  "CotQuirrel": {
    "Desc": "涙の都のクィレルが座っているベンチに座る（隣に座る必要はない）"
  },

  "CrestElevator": {
    "Desc": "都の紋章を使用する ＆ 涙の都の2か所の大きなエレベーターに乗る",
    "Score": 1.30
  },

  "DamnItGrimmchild": { //https://clips.twitch.tv/LivelySpookyBibimbapTakeNRG
    "Desc": "ウーマを3人、召喚系のチャームを使用して倒す",
    "Score": 0.87
  },

  "DeepnestZote": {
    "Desc": "暗闇の巣のゾートを助ける",
    "Excludes": ["GPZote"]

  },

  "DefenderSign": {
    "Desc": "イズマの森の手前のフンコロ騎士の看板をチェックする"
  },

  "DirtmouthElevator": {
    "Desc": "ダートマウスと水晶山をつなぐエレベーターを開く"
  },

  "ElderFlower": {
    "Desc": "老いたムシに繊細な花を渡す"
  },

  "Emilitia": {
    "Desc": "エミリシアに話しかける"
  },

  "FlukeHermit": {
    "Desc": "フルークハーミットに話しかける"
  },

  "Godhome": {
    "Desc": "神の家を訪ねる",
    "Excludes": ["Ordeal20", "Radiant"]
  },

  "GoamGarpede": {
    "Desc": "ゴームとガーピードを狩猟者の書に登録する場所をチェックする"
  },

  "Jiji": {
    "Desc": "ジジの小屋を開ける"
  },

  "HopperHell": {
    "Desc": "オロの横の部屋のかかしを25回叩く"
  },

  "Lemm": {
    "Desc": "守護者の紋章をつけた状態でレムに話しかける",
    "Score": 1.30
  },

  "LegEater": {
    "Desc": "足を食らう者のアイテムをすべて購入する"
  },

  "Lifeblood": {
    "Desc": "青ライフを同時に10保有する"
  },

  "LifebloodRoom": {
    "Desc": "生命の血に関連するチャームをつけずに、生命の核の部屋に入る"
  },

  "LoreArchives": {
    "Desc": "教師の書庫の石碑を3つチェックする"
  },

  "LoreBasin": {
    "Desc": "古代の穴の石碑をチェックする"
  },

  "LoreCity": {
    "Desc": "涙の都の石碑を2つチェックする（ソウルの聖域、悦楽の家を除く）"
  },

  "LoreCliffs": {
    "Desc": "風鳴りの崖の石碑をチェックする"
  },


  "LoreGreenpath": {
    "Desc": "緑の道の石碑を3つチェックする"
  },

  "LoreKEdge": {
    "Desc": "王国のはずれの石碑をチェックする（要：スポアシュルーム）",
    "Score": 1.30
  },

  "LorePilgrims": {
    "Desc": "巡礼者の道の石碑を2つチェックする（緑の道のオオバルダーの部屋＆都の紋章を使う部屋）"
  },

  "LoreSanctum": {
    "Desc": "ソウルの聖域の石碑を2つチェックする"
  },

  "LoreVillage": {
    "Desc": "カマキリ族の村の石碑を2つチェックする"
  },

  "Lumafly": {
    "Desc": "デンゲキルマバエを狩猟者の書に登録する場所をチェックする"
  },

  "MaskMaker": {
    "Desc": "仮面を作る者に話しかける"
  },

  "Midwife": {
    "Desc": "助産師に話しかける",
    "Excludes": ["DeepStag", "VisitDistantHive"]
  },

  "MossProphet": {
    "Desc": "コケの預言者におじぎをする（↓を入力、生死は問わない）"
  },

  "MrMushroom1": {
    "Desc": "Mr.マッシュルームに話しかける（スポアシュルームは必要ない）",
    "Score": 0.88
  },

  "Nail2": {
    "Desc": "釘を2回強化する",
    "Score": 0.55
  },

  "Nail3": {
    "Desc": "釘を3回強化する",
    "Excludes": ["2Ore"],
    "Score": 0.78
  },

  "NailHut": {
    "Desc": "釘師の小屋で、その小屋の釘師の奥義を使う"
  },

  "Ordeal20": {
    "Desc": "永劫の試練でゾートを20人倒す",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

  "Overcharm": {
    "Desc": "オーバーチャームの状態でサルブラと話す"
  },

  "PoP": {
    "Desc": "苦痛の道をクリアする",
    "Types": ["Tiebreaker"],
    "Excludes": ["Kingsmould"]
  },

  "Pins": {
    "Desc": "イゼルダからマップピンを6つ購入する",
    "Excludes": ["PinsAll"],
    "Score": 0.68
  },

  "PinsAll": {
    "Desc": "イゼルダからマップピンを8つ全て購入する",
    "Excludes": ["Pins", "TramPass"],
    "Score": 1.15
  },

  "Revek": {
    "Desc": "レヴェックの攻撃を死なずに3回パリィする",
    "Excludes": ["ShrineOfBelievers"]
  },

  "Salubra": {
    "Desc": "サルブラの店のアイテムをすべて購入する"
  },

  "ShadeGates": {
    "Desc": "シェイドゲートを2か所釘で斬る"
  },

  "Springs": {
    "Desc": "温泉に4か所浸かる",
    "Excludes": ["Marissa"]
  },

  "SpringSplash": {
    "Desc": "闘技場の温泉のNPCを釘で斬る"
  },

  "ShrineOfBelievers": {
    "Desc": "信ずる者の神殿を訪ねる",
    "Excludes": ["Revek"]
  },

  "Telescope": {
    "Desc": "監視塔の望遠鏡を覗く"
  },

  "Tendrils": {
    "Desc": "虚無の触手を狩猟者の書に登録する場所をチェックする"
  },

  "Tiso": {
    "Desc": "ティソの死体から盾をはじく"
  },

  "Trilobite": {
    "Desc": "獣の巣の三葉虫を釘で斬る"
  },

  "Tuk": {
    "Desc": "タックと話す"
  },

  "VisitDistantHive": {
    "Desc": "彼方の村かハイヴのどちらかを訪ねる",
    "Excludes": ["TramPass", "DeepStag", "Midwife"]

  },

  "VisitLakes": {
    "Desc": "ウヌの湖か青い湖のどちらかを訪ねる"
  },

  "VisitMounds": {
    "Desc": "緑に埋もれた塚か水晶の塚のどちらかを訪ねる（水晶の塚はダイブを使用）"
  },

  "VisitQueensShell": {
    "Desc": "女王の庭か脱ぎ捨てられた殻のどちらかを訪ねる",
    "Excludes": ["Hornet2"]

  },

  "VisitSanctumWaterways": {
    "Desc": "ソウルの聖域か王家の水路のどちらかを訪ねる"
  },

  "VisitTower": {
    "Desc": "愛の塔を訪ねる（愛の鍵は不要）"
  },

  "VoidPool": {
    "Desc": "虚無の海に浸かる"
  },

  "WhiteLady": {
    "Desc": "白いレディを夢見の釘で斬る",
    "Excludes": ["TLord", "ClothQuest"]
  },

  "Willow": {
    "Desc": "ウィローの顔を夢見の釘で斬る"
  },

  "WPShadeSkip": {
    "Desc": "隠された駅のベンチに座る",
    "Excludes": ["HiddenStag", "Wings"]
  }

};