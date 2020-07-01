// Create Math.seedrandom function and maybe some other stuff idk can't be bothered to understand this obfuscated crap
(function(j, i, g, m, k, n, o) { function q(b) { var e, f, a = this, c = b.length, d = 0, h = a.i = a.j = a.m = 0; a.S = []; a.c = []; for (c || (b = [c++]); d < g;) a.S[d] = d++; for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e; a.g = function(b) { var c = a.S, d = a.i + 1 & g - 1, e = c[d], f = a.j + e & g - 1, h = c[f]; c[d] = h; c[f] = e; for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1]; a.i = d; a.j = f; return i }; a.g(g) } function p(b, e, f, a, c) { f = []; c = typeof b; if (e && c == "object") for (a in b) if (a.indexOf("S") < 5) try { f.push(p(b[a], e - 1)) } catch (d) {} return f.length ? f : b + (c != "string" ? "\0" : "") } function l(b, e, f, a) { b += ""; for (a = f = 0; a < b.length; a++) { var c = e, d = a & g - 1, h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a); c[d] = h & g - 1 } b = ""; for (a in e) b += String.fromCharCode(e[a]); return b } i.seedrandom = function(b, e) { var f = [], a; b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f); a = new q(f); l(a.S, j); i.random = function() { for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1); for (; c >= n;) c /= 2, d /= 2, b >>>= 1; return (c + b) / d }; return b }; o = i.pow(g, m); k = i.pow(2, k); n = k * 2; l(i.random(), j) })([], Math, 256, 6, 52);

// Reduces fluff in bingoList object if there's a method to set defaults
function preprocessBingoList(bingoList) {
    for (const key of Object.keys(bingoList)) {
        bingoList[key].name = key;

        if (!bingoList[key].hasOwnProperty("Desc")) {
            bingoList[key].Desc = "#!#" + key + "#!#";
        }

        if (!bingoList[key].hasOwnProperty("Type")) {
            bingoList[key].Type = "Generic";
        }

        if (!bingoList[key].hasOwnProperty("Excludes")) {
            bingoList[key].Excludes = [];
        }

        if (!bingoList[key].hasOwnProperty("Prereqs")) {
            bingoList[key].Prereqs = [];
        }
    }
}

bingoGenerator = function(bingoList, opts) {
    // Make sure everything exists that should
    preprocessBingoList(bingoList);

    // Separate goals into currently choosable / unchoosable
    var choosable = [];
    var unchoosable = [];

    for (const key of Object.keys(bingoList)) {
        if (bingoList[key].Prereqs.length > 0) {
            unchoosable.push(key);
        } else {
            choosable.push(key);
        }
    }

    // Create counts for all types
    var types = { };
    for (const key of Object.keys(bingoTypes)) {
        types[key] = bingoTypes[key].Max;
    }

    // Seed the random
    Math.seedrandom(opts.seed || Math.ceil(999999 * Math.random()).toString());

    var chosenGoals = [];
    for (var i = 0; i < 25; i++) {
        // Get a random goal, add to chosen
        var index = Math.floor(Math.random() * choosable.length);
        var goal = bingoList[choosable[index]];
        chosenGoals.push({ "name": goal.Desc });

        // Remove chosen goal from choosable list
        choosable.splice(index, 1);

        // Increment type counter, remove other goals of type if relevant
        types[goal.Type]--;
        if (types[goal.Type] <= 0) {
            for (var j = 0; j < choosable.length; j++) {
                if (bingoList[choosable[j]].Type === goal.Type) {
                    choosable.splice(j, 1);
                    j--;
                }
            }

            // Gotta check both arrays
            // Pretty dumb code duplication but at this point I'm not gonna bother changing the design
            for (var j = 0; j < unchoosable.length; j++) {
                if (unchoosable[j].Type === goal.Type) {
                    unchoosable.splice(j, 1);
                    j--;
                }
            }
        }

        // Remove excluded goals if relevant
        for (var j = 0; j < goal.Excludes.length; j++) {
            for (var k = 0; k < choosable.length; k++) {
                if (choosable[k] == goal.Excludes[j]) {
                    choosable.splice(k, 1);
                    k--;
                }
            }

            for (var k = 0; k < unchoosable.length; k++) {
                if (unchoosable[k] == goal.Excludes[j]) {
                    unchoosable.splice(k, 1);
                    k--;
                }
            }
        }

        // Check for newly choosable goals
        for (var j = 0; j < unchoosable.length; j++) {
            for (var k = 0; k < bingoList[unchoosable[j]].Prereqs.length; k++) {
                if (bingoList[unchoosable[j]].Prereqs[k] === goal.name) {
                    choosable.push(unchoosable[j]);
                    unchoosable.splice(j, 1);
                    j--;
                    break;
                }
            }
        }
    }

    return chosenGoals;
}

var bingoList = {
//Sorted alphabetically and grouped

//Bosses. Dream versions grouped instead of alphabetical

  "BVessel":{
      "Desc":"残破容器",
      "Excludes": ["LostKin"]
  },

  "LostKin":{
      "Desc":"失落近亲",
      "Excludes": ["BVessel"]
  },

  "CG1":{
      "Desc": "椅子哥1",
      "Excludes": ["CG2"]
  },

  "CG2": {
      "Desc":"椅子哥2",
      "Excludes": ["CG1"]
  },

  "Collector":{
      "Desc": "收藏家"
  },

  "DDefender":{
      "Desc":"芬达",
      "Excludes": ["WhiteDefender"]
  },

  "WhiteDefender":{
    "Desc":"白芬达",
    "Type": "Tiebreaker",
    "Excludes": ["DDefender"]
  },


  "FChamp": {
      "Desc": "失败冠军"
  },

  "FKnight_BMawlek": {
      "Desc": "假骑士+毛里克"
  },

  "Flukemarm":{
      "Desc": "吸虫之母"
  },

  /* Disabled but not forgotten my king PepeHands

  "GPZote":{
      "Desc": "Grey Prince Zote",
      "Type": "Tiebreaker"
  },

  */

  "HiveKnight":{
      "Desc": "蜂巢骑士",
      "Excludes": [ "HiveMask" ]
  },

  "Hornet2": {
      "Desc": "小姐姐2"
  },

  "MLords":{
      "Desc": "三螳螂"
  },

  "Nosk":{
      "Desc": "诺斯克"
  },

  "PaleLurker":{
      "Desc":"苍白潜伏者"
  },

  "Radiant": { // Under I know you're reading this and I hope it fills you with joy
      "Desc": "任一辐辉手办",
      "Excludes": ["Godhome", "Ordeal20"]
  },

  "SoulMaster": {
      "Desc": "灵魂大师",
      "Excludes": ["SoulTyrant"]
  },

  "SoulTyrant": {
      "Desc": "灵魂暴君",
      "Excludes": [ "SoulMaster" ]
  },

  "TLord":{
      "Desc": "叛徒领主",
      "Excludes": [ "WhiteLady", "ClothQuest" ]
  },

  "TMGrimm":{
      "Desc":"格林"
  },

  "NKGrimm":{
      "Desc": "梦魇之王 格林",
      "Type": "Tiebreaker",
      "Excludes": [ "CarefreeMelody" ]
  },

  "Uumuu":{
      "Desc": "乌姆"
  },

  "WK":{
      "Desc": "滚滚"
  },

  "VK_MMC":{
      "Desc":"反击嘤之王 + 巨型白给冲锋者"
  },




  //Dream Warriors


  "Galien":{
      "Desc":"加利安"
  },

  "Gorb":{
      "Desc":"戈布"
  },

  "Hu":{
      "Desc":"胡长老"
  },

  "Marmu":{
    "Desc":"马尔穆"
  },

  "Markoth":{
      "Desc":"马科斯"
  },

  "NoEyes":{
    "Desc":"无眼"
  },

  "Xero":{
      "Desc":"泽若"
  },




  //Enemies

  "2Warriors":{
      "Desc":"2魂守",
      "Excludes":[ "SSoulCheck" ]
  },

  "Aluba":{
      "Desc":"1蜻蜓"
  },

  "Aluba2":{
      "Desc":"2不同蜻蜓"
  },

  "Colo1":{
      "Desc":"竞技场 1",
      "Excludes":[ "ColoZote" ]
  },

  "ColoZote":{
      "Desc":"打败竞技场左特",
      "Excludes":["Colo1" ]
  },


  "CrystalCrawler":{
      "Desc":"看水晶爬虫日记"
  },

  "Devout":{
      "Desc":"杀6镰刀虫"
  },

  "Durandoo":{
      "Desc":"1杜兰多（苍绿酸水里的）"
  },

  "GHopper":{
      "Desc":"1大跳虫"
  },

  "GHusk":{
      "Desc":"金闪闪"
  },

  "Kingsmould":{
    "Desc":"1白宫守卫"
  },

  "Maggots":{
      "Desc":"杀2大锤兄弟"
  },

  "Millibelle":{
      "Desc":"打银行家",
      "Excludes":[ "Bank" ]
  },

  "Mimics":{
      "Desc":"杀4假虫"
  },

  "Myla":{
      "Desc":"杀米拉"
  },




  //Items. Different types (Dreamers/Skills/Keys/etc) grouped together

  "Herrah":{
      "Desc":"野兽赫拉"
  },

  "Lurien":{
      "Desc":"守望者卢瑞恩"
  },

  "Monomon":{
      "Desc":"教师莫洛蒙"
  },


  "DeepStag":{
      "Desc":"坐虫去远村",
      "Excludes":[ "Midwife", "VisitDistantHive" ]
  },

  "GardenStag":{
      "Desc":"坐虫去花园"
  },

  "HiddenStag":{
      "Desc":"坐虫去宫殿广场",
      "Excludes":[ "WPShadeSkip" ]
  },

  "KingStag":{
      "Desc":"坐虫去国王驿站"
  },

  "QueensStag":{
      "Desc":"坐虫去王后驿站"
  },



  "5Charms":{
    "Desc": "5+护符",
  },

  "5CharmsEquipped":{
    "Desc": "同时装备5个护符",
  },


  "CarefreeMelody":{
    "Desc": "无忧旋律",
    "Excludes": [ "NKGrimm" ]
  },

  "CompassSwarm":{
      "Desc":"指南针或poppy"
  },

  "DWielderShield":{
      "Desc":"梦盾或舞梦"
  },

  "FCharms":{
      "Desc":"2坚固"
  },

  "FlukenestFury":{
      "Desc":"喷子或亡怒"
  },

  "GrubsongElegy":{
      "Desc":"虫歌或挽歌"
  },

  "GWombWeavers":{
      "Desc":"子宫或编织者"
  },

  "HeavyBlowSteady":{
      "Desc":"沉重之击或稳定之体"
  },

  "HivebloodShadow":{
      "Desc":"蜂血或锋利之影"
  },

  "LifebloodCharms":{
      "Desc":"2蓝血护符"
  },

  "Longnail":{
      "Desc":"长钉或骄傲"
  },

  "QSlashGlory":{
      "Desc":"快劈或荣耀"
  },

  "QuickDeepFocus":{
      "Desc":"深聚或快聚"
  },

  "ShamanStoneTwister":{
      "Desc":"萨满或法扭"
  },

  "SprintmasterDashmaster":{
      "Desc":"冲刺大师或飞毛腿"
  },

  "SoulTools":{
      "Desc":"噬魂或捕手"
  },

  "UnnShell":{
      "Desc":"乌恩或八八子之壳"
  },

  "LoveKey":{
      "Desc": "爱之钥"
  },



  "CHeart":{
      "Desc":"超冲",
      "Excludes": [ "CrossroadsCanyonGrubs", "GWombSkip", "CHeartSkip", "TearCheck" ]
  },

  "DDark":{
      "Desc":"黑砸",
      "Excludes":[ "SSoul", "Shriek" ]
  },

  "DNail":{
      "Desc":"梦钉"
  },

  "DGate":{
      "Desc":"梦门"
  },

  "Dive":{
      "Desc":"白砸",
      "Excludes":[ "3Floors" ]
  },

  "MantisClaw":{
      "Desc":"爬墙",
      "Excludes":[ "SanctuarySkip", "WPShadeSkip", "VillageJournal", "CHeartSkip" ]
  },

  "NailArts":{
      "Desc":"2剑技"
  },

  "SCloak":{
      "Desc":"黑冲"
  },

  "Shriek":{
      "Desc":"黑吼",
      "Excludes":[ "SSoul", "DDark" ]
  },

  "SSoul":{
      "Desc":"黑波",
      "Excludes": [ "Shriek", "DDark" ]
  },

  "Tear":{
      "Desc":"酸泪",
      "Excludes": [ "UnnSkip", "LoveKeySkip" ]
  },

  "VSpirit":{
      "Desc":"白波"
  },

  "Wings":{
      "Desc":"二段跳"
  },

  "Wraiths":{
      "Desc":"白吼"
  },



  "15Grub":{
      "Desc":"15虫"
  },

  "2Ore":{
      "Desc":"2矿石",
      "Excludes":[ "Nail3" ]
  },

  "2Keys":{
      "Desc":"2简单钥匙"
  },

  "3Maps":{
      "Desc":"3地图（不包括德特茅斯或蜂巢）"
  },

  "CollectorMap":{
      "Desc":"收藏家地图"
  },

  "Egg":{
      "Desc":"1黑蛋"
  },

  "Godtuner":{
      "Desc":"神明调谐器"
  },

  "Idols":{
      "Desc":"3国王雕像"
  },

  "Journals":{
      "Desc":"5日记"
  },

  "Lantern":{
      "Desc":"灯",
      "Excludes":[ "JoniDarkRoom" ]
  },

  "Mask1":{
      "Desc":"1血量"
  },

  "Notches":{
      "Desc":"3槽"
  },

  "RancidEggs":{
      "Desc":"4臭蛋"
  },

  "Seals":{
      "Desc":"5印章"
  },

  "SoulVessel":{
      "Desc":"1魂槽"
  },

  "TramPass":{
      "Desc":"电车票",
      "Excludes":[ "PinsAll" ]
  },

  "WorldSense":{
      "Desc":"看完成度"
  },



  //Checks (Grubs are grouped)


  "Cornifer3":{
      "Desc":"3地图师或磁带对话"
  },

  "Dreamers":{
      "Desc":"看2守梦",
      "Excludes":[ "Uumuu", "WK", "VisitDistantHive" ]
  },

  "GreenpathRoot":{
      "Desc":"苍绿树"
  },

  "HallownestCrown":{
      "Desc":"圣巢之冠"
  },

  "Fountain":{
      "Desc":"买喷泉3000",
      "Excludes":[ "3000", "4000" ]
  },

  "GWombSkip":{
      "Desc":"看子宫",
      "Excludes":[ "CHeart" ]
  },

  "HiveMask":{
      "Desc":"看蜂巢碎片",
      "Excludes":[ "HiveKnight" ]
  },

  "JoniDarkRoom":{
      "Desc":"看乔尼",
      "Excludes":[ "Lantern" ]
  },

  "KEdgeRoot":{
      "Desc":"边境树"
  },

  "LoveKeySkip":{
      "Desc":"看爱之钥",
      "Excludes":[ "Tear" ]
  },

  "Nailmasters":{
      "Desc":"看2师傅"
  },

  "SanctuarySkip":{
      "Desc":"看庇护所下方日记",
      "Excludes":[ "MantisClaw" ]
  },

  "Sheo":{
      "Desc":"看席奥（苍绿）"
  },

  "Shops":{
      "Desc":"拜访4商店",
      "Excludes":[ "Cloth" ]
  },

  "StagVessel":{
      "Desc":"看鹿角虫巢穴碎片"
  },

  "SSoulCheck":{
      "Desc":"看黑波",
      "Excludes":[ "2Warriors" ]
  },

  "TearCheck":{
      "Desc":"看酸泪",
      "Excludes":[ "CHeart" ]
  },

  "Trees4":{
      "Desc":"砍4梦树"
  },

  "UnnSkip":{
      "Desc":"看乌恩",
      "Excludes":[ "Tear" ]
  },

  "VillageJournal":{
      "Desc":"看螳螂村日记",
      "Excludes":[ "MantisClaw" ]
  },

  "VoidHeart":{
      "Desc":"看黑心"
  },


  "CoTGrubs":{
      "Desc":"泪城5虫"
  },

  "CrossroadsCanyonGrubs":{
      "Desc":"十字路5虫+雾谷1虫",
      "Excludes":[ "CHeart" ]
  },

  "DeepnestGrubs":{
      "Desc":"深巢5虫"
  },

  "FunGreenGrub":{
      "Desc":"苍绿4虫+真菌2虫"
  },

  "PeaksGrub":{
      "Desc":"矿山7虫"
  },

  "QueenGrub":{
      "Desc":"花园3虫"
  },

  "WaterGrub":{
      "Desc": "下水道3虫"
  },




  //Misc.

  "3Floors":{
      "Desc":"砸开3地板",
      "Excludes":[ "Dive" ]
  },

  "420Rock":{
      "Desc":"边境420"
  },

  "500Essence":{
      "Desc":"500精华"
  },

  "3000":{
      "Desc":"花3000",
      "Excludes":[ "Fountain", "4000" ]
  },

  "4000":{
      "Desc":"花4000",
      "Excludes":[ "Fountain", "3000", "5000" ]
  },

  "5000":{
      "Desc":"花5000",
      "Excludes":[ "4000" ]
  },

  "Bank":{
      "Desc":"存1500",
      "Excludes":[ "Millibelle" ]
  },

  "Bardoon":{
      "Desc":"巴冬对话"
  },

  "BrettaSly":{
      "Desc":"救迷妹+斯莱"
  },

  "Brumm":{
    "Desc":"收集布鲁姆的火"
  },

  "Cloth":{
      "Desc":"阿布对话",
      "Excludes":[ "Shops" ]
  },

  "ClothQuest":{
      "Desc":"阿布结局",
      "Excludes":[ "TLord", "WhiteLady" ]
  },

  "CrestElevator":{
      "Desc":"使用城市纹章+泪城2电梯"
  },

  "DamnItGrimmchild":{ //https://clips.twitch.tv/LivelySpookyBibimbapTakeNRG
      "Desc":"用召唤护符杀3水母"
  },

  "DeepnestZote":{
      "Desc":"救深巢左特"
  },

  "DefenderSign":{
    "Desc":"读芬达碑"
  },

  "DirtmouthElevator":{
      "Desc":"开矿山电梯"
  },

  "ElderFlower":{
      "Desc":"送花给村长"
  },

  "Emilitia":{
      "Desc":"泪城贵妇对话"
  },

  "FlukeHermit":{
      "Desc":"吸虫隐士对话"
  },

  "Godhome":{
      "Desc":"进神居",
      "Excludes":[ "Ordeal20", "Radiant" ]
  },

  "GoamGarpede":{
      "Desc":"戈姆（十字路）+加皮德（深巢）图鉴"
  },

  "Jiji":{
      "Desc":"开吉吉家"
  },

  "Hazard":{
      "Desc":"把1小怪推入致死地形"
  },

  "HopperHell":{
      "Desc":"打稻草人至出现大跳虫"
  },

  "Lemm":{
      "Desc":"带臭屁和古董商对话"
  },

  "LegEater":{
      "Desc":"买空食腿者"
  },

 "Lifeblood":{
      "Desc":"10蓝血"
  },

  "LifebloodRoom":{
      "Desc":"不带蓝血护符进蓝血门"
  },

  "LoreBasin":{
    "Desc":"读盆地碑"
  },

  "LoreArchives":{
    "Desc":"读教师档案馆3碑"
  },

  "LoreCliffs":{
    "Desc":"读呼啸悬崖碑"
  },

  "LoreGreenpath":{
    "Desc":"读苍绿3碑"
  },

  "LoreKEdge":{
    "Desc":"读边境碑（带孢子）"
  },

  "LorePilgrims":{
    "Desc":"读朝圣者之路2碑（苍绿入口和泪城正门）"
  },

  "LoreSanctum":{
    "Desc":"读圣所2碑"
  },

  "LoreVillage":{
    "Desc":"读螳螂村2碑"
  },

  "Lumafly":{
      "Desc":"电光蝇图鉴"
  },

  "MaskMaker":{
      "Desc":"面具师对话"
  },

  "Midwife":{
      "Desc":"助产士对话",
      "Excludes":[ "DeepStag", "VisitDistantHive" ]
  },

  "MossProphet":{
      "Desc":"向传教士鞠躬"
  },

  "MrMushroom1":{
      "Desc":"蘑菇先生对话(不需要孢子)"
  },

  "Nail2":{
      "Desc":"2钉"
  },

  "Nail3":{
      "Desc":"3钉",
      "Excludes":[ "2Ore" ]
  },

  "Ordeal20":{
      "Desc":"无尽折磨",
      "Type": "Tiebreaker",
      "Excludes":[ "Godhome", "Radiant" ]
  },

  "Overcharm":{
      "Desc":"过载和红唇对话"
  },

  "PoP":{
      "Desc":"快乐之路",
      "Type": "Tiebreaker",
  },

  "Pins":{
      "Desc":"买6图针",
      "Excludes":[ "PinsAll" ]
  },

  "PinsAll":{
      "Desc":"买8图针",
      "Excludes":[ "Pins", "TramPass" ]
  },

  "Revek":{
      "Desc":"和保安拼刀3次不死",
      "Excludes":[ "ShrineOfBelievers" ]
  },

  "Salubra":{
      "Desc":"买空红唇"
  },

  "ShadeGates":{
      "Desc":"砍2黑门"
  },

  "Springs":{
      "Desc":"4温泉"
  },

  "SpringSplash":{
      "Desc":"竞技场温泉npc"
  },

  "ShrineOfBelievers":{
      "Desc":"赞助者神龛",
      "Excludes":[ "Revek" ]
  },

  "Telescope":{
      "Desc":"看卢瑞恩望远镜"
  },

  "Tendrils":{
      "Desc":"虚空之形图鉴"
  },

  "Tiso":{
    "Desc": "打飞提索的盾"
  },

  "Tuk":{
      "Desc":"臭蛋商对话"
  },

  "VisitDistantHive":{
      "Desc":"到远村或蜂巢",
      "Excludes": [ "TramPass", "DeepStag", "Midwife" ]

  },

  "VisitLakes":{
      "Desc":"到乌恩湖或蓝湖"
  },

  "VisitMounds":{
      "Desc":"到长满蚊子的山丘（要vm）或结晶山丘（要砸）"
  },

  "VisitSanctumWaterways":{
      "Desc":"到圣所或下水道"
  },

  "VisitTower":{
      "Desc":"到爱之塔（不需要爱之钥）"
  },

  "WhiteLady":{
      "Desc":"梦钉抽白夫人",
      "Excludes":[ "TLord", "ClothQuest" ]
  },

  "Willow":{
    "Desc": "梦钉抽长颈鹿食物"
  },

  "WPShadeSkip":{
      "Desc":"在隐藏鹿角站坐下",
      "Excludes":[ "HiddenStag", "Wings" ]
  }

};

var bingoTypes = {

    "Generic":{
        "Max":Number.MAX_SAFE_INTEGER
    },

    "Tiebreaker":{
        "Max":1
    }

};
