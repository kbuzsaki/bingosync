(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
                return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

function randomKey(jsonObj){
	var obj_keys = Object.keys(jsonObj);
  var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
  return ran_key;
}

bingoGenerator = function(bingoList, opts) {
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    Math.seedrandom(SEED);

    var selectedGoals = []

    for(var i = 1; i <= 25; i++){
        randomkey = randomKey(bingoList);

        for(var key in bingoList[randomkey]["excludes"]) {
            var exc = bingoList[randomkey]["excludes"][key];
            if( bingoList.hasOwnProperty(exc))
            delete bingoList[exc];
        }

        var goal = bingoList[randomkey]["Name"];
        selectedGoals[i] = {"name": goal};

        delete bingoList[randomkey];
    }

    return selectedGoals;
};

var bingoList = {
"FChamp": {"Name": "失败冠军", "excludes":{}},
"FKBM": {"Name": "假骑士+毛里克", "excludes":{}},
"SM": {"Name": "灵魂大师", "excludes":["Dive"]},
"ST": {"Name": "灵魂暴君", "excludes":{}},
"H2": {"Name": "小姐姐2", "excludes": {}},
"CG1":{"Name": "椅子哥1", "excludes":{}},
"CG2": {"Name":"椅子哥2", "excludes":{}},
"Dung":{"Name":"芬达","excludes":["DCrest", "Lemm"]},
"Flukemarm":{"Name": "虫母", "excludes":["Flukenest"]},
"Nosk":{"Name": "诺斯克", "excludes":{}},
"Lords":{"Name": "三螳螂", "excludes":["NailRange"]},
"Collector":{"Name": "收藏家", "excludes":{}},
"LoveKey":{"Name": "爱之钥", "excludes":[]},
"Traitor":{"Name": "叛徒领主", "excludes":["ClothQuest"]},
"Uumuu":{"Name": "水母", "excludes":[]},
"WK":{"Name": "滚滚", "excludes":[]},
"Lurien":{"Name": "守望者", "excludes":[]},
"Monomon":{"Name":"教师", "excludes":[]},
"Herrah":{"Name": "野兽赫拉", "excludes":["HornetMom"]},
"VKMMC":{"Name":"反击嘤之王+草团", "excludes":[]},
"Xero":{"Name":"泽若", "excludes":["DNail"]},
"Gorb":{"Name":"戈布", "excludes":[]},
"Hu":{"Name":"胡长老", "excludes":[]},
"Galien":{"Name":"加利安", "excludes":[]},
"Markoth":{"Name":"马科斯", "excludes":[]},
"Marmu":{"Name":"皮球", "excludes":[]},
"NoEyes":{"Name":"无眼", "excludes":[]},
"GChildUp":{"Name":"升级1次格林之子", "excludes":[]},
"BVessel":{"Name":"残破容器", "excludes":["Wings"]},
"LostKin":{"Name":"失落近亲", "excludes":[]},
"SS":{"Name":"黑波", "excludes":[]},
"Shriek":{"Name":"黑吼", "excludes":[]},
"Wraiths":{"Name":"白吼", "excludes":[]},
"Dive":{"Name":"白砸", "excludes":["SM"]},
"N2":{"Name":"2钉" , "excludes":[]},
"N3":{"Name":"3钉" , "excludes":["2Ore"]},
"DNail":{"Name":"梦剑", "excludes":["Xero"]},
"DGate":{"Name":"梦门", "excludes":[]},
"2Ore":{"Name":"2矿石", "excludes":["N3"]},
"Cyclone":{"Name":"旋风斩", "excludes":[]},
"Great":{"Name":"蓄力斩", "excludes":[]},
"DashSlash":{"Name":"冲刺斩", "excludes":[]},
"Wings":{"Name":"二段跳", "excludes":["BVessel"]},
"CH":{"Name":"超冲", "excludes":[]},
"SCloak":{"Name":"黑冲", "excludes":["Egg", "Tendrils"]},
"Tear":{"Name":"酸泪", "excludes":["Emily"]},
"Tram":{"Name":"电车票+所有电车站", "excludes":["Hiveblood", "HiveHeart", "HiveKnight"]},
"Lantern":{"Name":"买灯", "excludes":[]},
"XRoadsGrub":{"Name":"十字路5+雾谷1虫子", "excludes":[]},
"CoTGrub":{"Name":"泪城5虫", "excludes":[]},
"FunGreenGrub":{"Name":"苍绿4+真菌2虫子", "excludes":[]},
"PeaksGrub":{"Name":"矿山7虫","excludes":["Mimics"]},
"WaterGrub":{"Name": "下水道3虫", "excludes":[]},
"QueenGrub":{"Name":"花园3虫","excludes":[]},
"DeepGrub":{"Name":"深巢5虫","excludes":["Mimics"]},
"15Grub":{"Name":"15虫","excludes":[]},
"20Grub":{"Name":"20虫","excludes":[]},
"Fountain":{"Name":"喷泉碎片（3000）","excludes":["3000", "4000"]},
"Notches":{"Name":"3个额外护符槽", "excludes":[]},
"Soul1":{"Name":"1额外灵魂", "excludes":[]},
"Mask1":{"Name":"1额外血量", "excludes":[]},
"Mask2":{"Name":"2额外血量", "excludes":[]},
"Journals":{"Name":"5日记（不可出售）", "excludes":[]},
"Seals":{"Name":"5印章（不可出售）", "excludes":[]},
"Idols":{"Name":"3国王神像（可出售）","excludes":[]},
"Egg":{"Name":"1黑蛋（可出售）","excludes":["SCloak", "Tendrils"]},
"ElderFlower":{"Name":"送花给村长","excludes":[]},
"ColoZote":{"Name":"打败竞技场左特","excludes":["DeepZote", "Colo1"]},
"Colo1":{"Name":"竞技场1","excludes":["ColoZote"]},
"BrettaSly":{"Name":"救迷妹和斯莱", "excludes":[]},
"2Keys":{"Name":"使用2把简单钥匙","excludes":[]},
"DeepZote":{"Name":"救深巢左特","excludes":["ColoZote"]},
"CrestElevator":{"Name":"使用城市纹章+乘坐泪城两个大电梯","excludes":[]},
"Lemm":{"Name":"带臭屁与古董商对话","excludes":["Dung", "DCrest"]},
"Bank":{"Name":"在银行存1500","excludes":[]},
"420":{"Name":"王国边缘420钱堆","excludes":["QSlash"]},
"HiddenStag":{"Name":"解锁宫殿广场隐藏鹿角站","excludes":[]},
"GardenStag":{"Name":"解锁王后花园鹿角站", "excludes":[]},
"DeepStag":{"Name":"解锁深巢鹿角站","excludes":["Midwife"]},
"Pins":{"Name":"买6个地图图针","excludes":["PinsAll"]},
"PinsAll":{"Name":"买8个地图图针（全部）","excludes":["Pins"]},
"KingStag":{"Name":"解锁王后驿站和国王驿站","excludes":[]},
"HornetMom":{"Name":"与小姐姐（泪城雕像+野兽巢穴）对话","excludes":["Herrah"]},
"ClothQuest":{"Name":"看阿布死","excludes":["Traitor"]},
"Myla":{"Name":"杀米拉（矿山）","excludes":[]},
"3000":{"Name":"累计花费3000吉欧","excludes":["Fountain", "4000"]},
"4000":{"Name":"累计花费4000吉欧", "excludes":["Fountain", "3000", "5000"]},
"5000":{"Name":"累计花费5000吉欧", "excludes":["Fountain", "4000"]},
"Tolls":{"Name":"解锁6个收费机","excludes":[]},
"NailRange":{"Name":"修长之钉+骄傲印记","excludes":["Lords"]},
"Fragile":{"Name":"易碎三件套","excludes":[]},
"SPEED":{"Name":"飞毛腿+冲刺大师","excludes":[]},
"FOCUS":{"Name":"深聚+快聚","excludes":[]},
"SpellCharms":{"Name":"萨满+法扭","excludes":[]},
"BlueBlood":{"Name":"生命血+乔尼","excludes":[]},
"Weaversong":{"Name":"编织者之歌","excludes":[]},
"Grubsong":{"Name":"虫歌","excludes":[]},
"SharpShadow":{"Name":"锋利之影","excludes":[]},
"Unn":{"Name":"乌恩之形","excludes":[]},
"ThornsTrio":{"Name":"荆棘+巴德尔之壳+孢子","excludes":[]},
"QSlash":{"Name":"快劈","excludes":["420"]},
"BlowBody":{"Name":"沉重之击+稳定之体","excludes":[]},
"MaskMaker":{"Name":"面具师对话","excludes":["Midwife"]},
"Midwife":{"Name":"助产士对话","excludes":["MaskMaker"]},
"RancidEggs":{"Name":"4臭蛋","excludes":[]},
"Jiji":{"Name":"在吉吉家杀自己的灵魂","excludes":[]},
"500Essence":{"Name":"500梦境精华","excludes":["DWielder"]},
"DWielder":{"Name":"舞梦","excludes":["500Essence"]},
"Cornifer5":{"Name":"与地图师互动5次（不同地方）","excludes":[]},
"Flukenest":{"Name":"喷子","excludes":["Flukemarm"]},
"StagVessel":{"Name":"鹿角虫巢穴碎片","excludes":[]},
"Trees3":{"Name":"砍4梦树","excludes":[]},
"2Warriors":{"Name":"杀2灵魂战士","excludes":[]},
"4Maps":{"Name":"买6个地图", "excludes":[]},
"Emily":{"Name":"泪城贵妇对话", "excludes":["Tear"]},
"DDark":{"Name":"黑砸", "excludes":[]},
"Womb":{"Name":"子宫+格林", "excludes":[]},
"Springs":{"Name":"4温泉泡澡", "excludes":[]},
"Hiveblood":{"Name":"蜂巢之血", "excludes":["HiveHeart", "Tram", "HiveKnight"]},
"HiveKnight":{"Name":"蜂巢骑士", "excludes":["HiveHeart", "Hiveblood", "Tram"]},
"HiveHeart":{"Name":"蜂巢碎片", "excludes":["Hiveblood", "Tram", "HiveKnight"]},
"Revek":{"Name":"与保安拼刀3次不死", "excludes":[]},
"Tendrils":{"Name":"虚空卷须图鉴", "excludes":["SCloak", "Egg"]},
"GoamGarpede":{"Name":"戈姆（十字路）和加皮德（深巢）图鉴", "excludes":[]},
"Devout":{"Name":"杀6不同的镰刀虫", "excludes":[]},
"Mimics":{"Name":"杀4假虫", "excludes":["PeaksGrub", "DeepGrub"]},
"Bardoon":{"Name":"巴冬对话", "excludes":[]},
"FlukeHermit":{"Name":"吸虫隐士对话", "excludes":[]},
"PaleLurker":{"Name":"竞技场小忍者（苍白潜伏者）", "excludes":[]},
};
