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

bingoGenerator = function(bingoList, opts) {
    var LANG = opts.lang || 'name';
    var MODE = opts.mode || "normal";
    var cardType = "Normal";
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    var size = 5;
    if (true) {
        Math.seedrandom(SEED);
        var MAX_SEED = 999999;

        var lineCheckList = [];
        if (size == 5) {
            lineCheckList[1] = [1, 2, 3, 4, 5, 10, 15, 20, 6, 12, 18, 24];
            lineCheckList[2] = [0, 2, 3, 4, 6, 11, 16, 21];
            lineCheckList[3] = [0, 1, 3, 4, 7, 12, 17, 22];
            lineCheckList[4] = [0, 1, 2, 4, 8, 13, 18, 23];
            lineCheckList[5] = [0, 1, 2, 3, 8, 12, 16, 20, 9, 14, 19, 24];
            lineCheckList[6] = [0, 10, 15, 20, 6, 7, 8, 9];
            lineCheckList[7] = [0, 12, 18, 24, 5, 7, 8, 9, 1, 11, 16, 21];
            lineCheckList[8] = [5, 6, 8, 9, 2, 12, 17, 22];
            lineCheckList[9] = [4, 12, 16, 20, 9, 7, 6, 5, 3, 13, 18, 23];
            lineCheckList[10] = [4, 14, 19, 24, 8, 7, 6, 5];
            lineCheckList[11] = [0, 5, 15, 20, 11, 12, 13, 14];
            lineCheckList[12] = [1, 6, 16, 21, 10, 12, 13, 14];
            lineCheckList[13] = [0, 6, 12, 18, 24, 20, 16, 8, 4, 2, 7, 17, 22, 10, 11, 13, 14];
            lineCheckList[14] = [3, 8, 18, 23, 10, 11, 12, 14];
            lineCheckList[15] = [4, 9, 19, 24, 10, 11, 12, 13];
            lineCheckList[16] = [0, 5, 10, 20, 16, 17, 18, 19];
            lineCheckList[17] = [15, 17, 18, 19, 1, 6, 11, 21, 20, 12, 8, 4];
            lineCheckList[18] = [15, 16, 18, 19, 2, 7, 12, 22];
            lineCheckList[19] = [15, 16, 17, 19, 23, 13, 8, 3, 24, 12, 6, 0];
            lineCheckList[20] = [4, 9, 14, 24, 15, 16, 17, 18];
            lineCheckList[21] = [0, 5, 10, 15, 16, 12, 8, 4, 21, 22, 23, 24];
            lineCheckList[22] = [20, 22, 23, 24, 1, 6, 11, 16];
            lineCheckList[23] = [2, 7, 12, 17, 20, 21, 23, 24];
            lineCheckList[24] = [20, 21, 22, 24, 3, 8, 13, 18];
            lineCheckList[25] = [0, 6, 12, 18, 20, 21, 22, 23, 19, 14, 9, 4];
        }

        function mirror(i) {
            if (i == 0) {
                i = 4;
            } else if (i == 1) {
                i = 3;
            } else if (i == 3) {
                i = 1;
            } else if (i == 4) {
                i = 0;
            }
            return i;
        }

        function difficulty(i) {
            var Num3 = SEED % 1000;
            var Rem8 = Num3 % 8;
            var Rem4 = Math.floor(Rem8 / 2);
            var Rem2 = Rem8 % 2;
            var Rem5 = Num3 % 5;
            var Rem3 = Num3 % 3;
            var RemT = Math.floor(Num3 / 120);
            var Table5 = [0];
            Table5.splice(Rem2, 0, 1);
            Table5.splice(Rem3, 0, 2);
            Table5.splice(Rem4, 0, 3);
            Table5.splice(Rem5, 0, 4);
            Num3 = Math.floor(SEED / 1000);
            Num3 = Num3 % 1000;
            Rem8 = Num3 % 8;
            Rem4 = Math.floor(Rem8 / 2);
            Rem2 = Rem8 % 2;
            Rem5 = Num3 % 5;
            Rem3 = Num3 % 3;
            RemT = RemT * 8 + Math.floor(Num3 / 120);
            var Table1 = [0];
            Table1.splice(Rem2, 0, 1);
            Table1.splice(Rem3, 0, 2);
            Table1.splice(Rem4, 0, 3);
            Table1.splice(Rem5, 0, 4);
            i--;
            RemT = RemT % 5;
            x = (i + RemT) % 5;
            y = Math.floor(i / 5);
            var e5 = Table5[(x + 3 * y) % 5];
            var e1 = Table1[(3 * x + y) % 5];
            value = 5 * e5 + e1;
            if (MODE == "short") {
                value = Math.floor(value / 2);
            } else if (MODE == "long") {
                value = Math.floor((value + 25) / 2);
            }
            value++;
            return value;
        }

        function checkLine(i, typesA) {
            var synergy = 0;
            for (var j = 0; j < lineCheckList[i].length; j++) {
                var typesB = bingoBoard[lineCheckList[i][j] + 1].types;
                if (typeof typesB != 'undefined') {
                    for (var k = 0; k < typesA.length; k++) {
                        for (var l = 0; l < typesB.length; l++) {
                            if (typesA[k] == typesB[l]) {
                                synergy++;
                                if (k == 0) {
                                    synergy++
                                };
                                if (l == 0) {
                                    synergy++
                                };
                            }
                        }
                    }
                }
            }
            return synergy;
        }
        var bingoBoard = [];
        for (var i = 1; i <= 25; i++) {
            bingoBoard[i] = {
                difficulty: difficulty(i)
            };
        }
        for (var i = 1; i <= 25; i++) {
            var getDifficulty = bingoBoard[i].difficulty;
            var RNG = Math.floor(bingoList[getDifficulty].length * Math.random());
            if (RNG == bingoList[getDifficulty].length) {
                RNG--;
            };
            var j = 0,
                synergy = 0,
                currentObj = null,
                minSynObj = null;
            do {
                currentObj = bingoList[getDifficulty][(j + RNG) % bingoList[getDifficulty].length];
                synergy = checkLine(i, currentObj.types);
                if (minSynObj == null || synergy < minSynObj.synergy) {
                    minSynObj = {
                        synergy: synergy,
                        value: currentObj
                    };
                }
                j++;
            } while ((synergy != 0) && (j < bingoList[getDifficulty].length));
            bingoBoard[i].types = minSynObj.value.types;
            bingoBoard[i].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[i].synergy = minSynObj.synergy;
        }
        return bingoBoard;
    }
};
var bingoList=[];
bingoList[1]=[{
name:"Never obtain Bombchus",jp:'ボムチュウ未取得',types:["restrict"]},{
name:"Room key",jp:'宿の鍵',types:["delivery"]},{
name:"Blast Mask",jp:'バクレツのお面',types:["allnight"]},{
name:"Hit hidden owl in West Clock Town",jp:'西クロックタウンのフクロウ像を叩く',types:["nothing"]},{
name:"No shield",jp:'盾未所持',types:["mirror"]},{
name:"Enter 4th Day",jp:'4日目突入',types:["end"]}];
bingoList[2]=[{
name:"Keaton Quiz HP",jp:'キータンクイズのハートのかけら',types:["delivery"]},{
name:"Blank B Button (No Sword)",jp:'Bボタンを空にする（剣未所持）',types:["sword","epona"]},{
name:"2 blank C-buttons",jp:'Cボタンを2つ空にする',types:["delivery"]},{
name:"Clear all 3 chest icons on Termina Field Map",jp:'タルミナ平原のマップの宝箱のアイコンを3つ全て消す',types:["map"]},{
name:"Rosa Sisters Notebook Ribbon",jp:'手帳のローザ姉妹にリボンをつける',types:["notebook"]},{
name:"??? Notebook Ribbon",jp:'手帳の??にリボンをつける',types:["notebook","deed"]}];
bingoList[3]=[{
name:"Milk",jp:'ミルク',types:["bottle","ranch"]},{
name:"Blue Potion",jp:'青のクスリ',types:["bottle"]},{
name:"20 Magic Beans",jp:'魔法のマメ20個',types:["slot","ingx24"]},{
name:"Deku Playground Heart Piece",jp:'デクナッツのプレイスポットのハートのかけら',types:["heart"]},{
name:"Chateau Romani",jp:'シャトーロマーニ',types:["delivery","bottle"]},{
name:"Gibdo Mask",jp:'ギブドのお面',types:["mirror"]},{
name:"Postman's Hat",jp:'ポストハット',types:["delivery"]}];
bingoList[4]=[{
name:"Woodfall Map and Compass",jp:'ウッドフォールの神殿のマップとコンパス',types:["woodfall","mc"]},{
name:"Save sun mask",jp:'太陽のお面を救う',types:["couple"]},{
name:"7 masks",jp:'お面7つ',types:["mask"]},{
name:"6 Notebook Ribbons",jp:'手帳にリボンを6個つける',types:["notebook"]},{
name:"All 5 Termina Grotto HPs",jp:'タルミナ平原の全5つのハートのかけら',types:["heart"]},{
name:"Woodfall Boss Key",jp:'ウッドフォールの神殿のボス鍵',types:["woodfall","bosskey"]}];
bingoList[5]=[{
name:"Unlock Odolwa's Door",jp:'オドルワのボス部屋の鍵を外す',types:["woodfall","bosskey"]},{
name:"Pendant of Memories",jp:'思い出のペンダント',types:["couple","slot"]},{
name:"Bunny Hood",jp:'うさみみずきん',types:["ranch"]},{
name:"Epona's Song",jp:'エポナの歌',types:["song","epona","ranch"]},{
name:"Doggy Racetrack HP",jp:'ドッグレースのハートのかけら',types:["ranch"]},{
name:"Postman Notebook Ribbon",jp:'手帳のポストマンにリボンをつける',types:["notebook","delivery","couple"]},{
name:"10 Woodfall Fairies",jp:'ウッドフォールの神殿のはぐれ妖精10匹',types:["fairy","woodfall"]}];
bingoList[6]=[{
name:"Hookshot",jp:'フックショット',types:["hook","fortress","stt","gbt"]},{
name:"15 Oceanside Skulltula Tokens",jp:'海のクモ館の黄金のスタルチュラの魂15個',types:["spider","wallet"]},{
name:"Oceanside Spider House HP",jp:'海のクモ館のハートのかけら',types:["wallet"]},{
name:"Song of Storms",jp:'嵐の歌',types:["song","grave"]},{
name:"Kill 2 Iron Knuckles",jp:'アイアンナックを2体倒す',types:["song","grave"]},{
name:"Razor Sword",jp:'フェザーソード',types:["sword"]},{
name:"Captain's Hat",jp:'隊長のボウシ',types:["grave"]}];
bingoList[7]=[{
name:"Under 00:35 Epona Archery",jp:'エポナのやぶさめ35秒未満',types:["song","epona","ranch"]},{
name:"Seahorse",jp:'タツノオトシゴ',types:["picto","fortress","bottle"]},{
name:"Ikana Castle HP",jp:'イカーナ古城のハートのかけら',types:["castle"]},{
name:"Marine Lab Fish HP",jp:'海洋研究所の魚のハートのかけら',types:["heart"]},{
name:"No Song of Soaring",jp:'大翼の歌未取得',types:["song","restrict"]},{
name:"Odolwa's Remains",jp:'オドルワの亡骸',types:["woodfall","remains"]}];
bingoList[8]=[{
name:"Clear all 3 chest icons on Zora Cape Map",jp:'ゾーラのみさきのマップの宝箱のアイコンを3つ全て消す',types:["hook","fortress","map"]},{
name:"Biggest Quiver",jp:'最大の矢立て',types:["woodfall"]},{
name:"Oath to Order",jp:'誓いの号令',types:["song","remains"]},{
name:"All Area Maps from Tingle",jp:'すべてのエリアマップ',types:["map"]},{
name:"Path to Snowhead HP",jp:'山里からスノーヘッドへの道のハートのかけら',types:["heart"]},{
name:"Open 8 Woodfall Temple Chests",jp:'ウッドフォールの神殿の宝箱を8つ開ける',types:["woodfall"]},{
name:"Goron Mask",jp:'ゴロンの仮面',types:["lens"]},{
name:"Stone Mask",jp:'石コロのお面',types:["lens"]}];
bingoList[9]=[{
name:"Rock Sirloin above head",jp:'岩肉を持ち上げている状態',types:["lens","end"]},{
name:"Pictograph of dancing Redead",jp:'踊っているリーデットの写真',types:["picto","mirror"]},{
name:"4 Business Scrub HPs",jp:'アキンドナッツのハートのかけら4つ',types:["heart","scrub","deed"]},{
name:"Don Gero's Mask",jp:'ゲーロのお面',types:["lens"]},{
name:"Mask of Truth",jp:'まことのお面',types:["spider"]},{
name:"Pinnacle Rock HP",jp:'トンガリ岩のハートのかけら',types:["picto","fortress"]}];
bingoList[10]=[{
name:"Giant Wallet",jp:'巨人のサイフ',types:["wallet","spider"]},{
name:"Bottled Deku Princess",jp:'デク姫（空き瓶に入れた）',types:["woodfall","remains"]},{
name:"Poe Hut HP",jp:'幽霊小屋のハートのかけら',types:["heart"]},{
name:"Both Shooting Gallery HPs",jp:'両方の射的場のハートのかけら2つ',types:["heart","woodfall"]},{
name:"Unbar 5 doors in the Well",jp:'井戸の下の鉄格子を5つ解除する',types:["mirror"]},{
name:"500 rupees in wallet",jp:'サイフに500ルピー',types:["wallet","spider"]},{
name:"Exactly 333 rupees in wallet",jp:'サイフにぴったり333ルピー',types:["wallet","spider"]}];
bingoList[11]=[{
name:"Couple's Mask",jp:'めおとのお面',types:["couple"]},{
name:"Open 2 chests in the Well",jp:'井戸の下の宝箱を2個開ける',types:["mirror"]},{
name:"Circus Leader's Mask",jp:'座長のお面',types:["mask","notebook"]},{
name:"Gold Rupee From Ikana Business Scrub",jp:'イカーナのアキンドナッツから金色のルピーを貰う',types:["scrub","deed"]},{
name:"Biggest Bomb Bag",jp:'ボム袋（40コ）',types:["scrub","lens"]},{
name:"6 Hearts (no dupe)",jp:'ハート6つ（増殖は含まない）',types:["heart"]},{
name:"1000 rupees in bank",jp:'銀行に1000ルピー',types:["wallet"]},{
name:"Pirates  Fortress HP",jp:'海賊のアジトのハートのかけら',types:["fortress"]}];
bingoList[12]=[{
name:"10 Notebook ribbons",jp:'手帳にリボンを10個つける',types:["notebook"]},{
name:"Great Spin",jp:'大回転斬り',types:["fairy","woodfall"]},{
name:"Lullaby Intro",jp:'半分だけの子守唄',types:["lens","song"]},{
name:"All top row songs",jp:'コレクト画面の上の列の歌全部',types:["song","grave","epona"]},{
name:"Garo Mask",jp:'ガロのお面',types:["ranch","epona"]}];
bingoList[13]=[{
name:"Open 11 Pirates' Fortress area chests",jp:'海賊のアジトの宝箱を11個開ける',types:["fortress","hook"]},{
name:"Pictograph of Pamela outside her house",jp:'パメラが家の外に出た写真',types:["picto","cerpin","grave"]},{
name:"Goron Lullaby",jp:'ゴロンのララバイ',types:["lens","song"]},{
name:"Powder Keg",jp:'大バクダン',types:["lens"]},{
name:"Defeat a Garo Ninja",jp:'ガロを倒す',types:["epona"]},{
name:"Romani's Mask",jp:'ロマーニのお面',types:["ranch"]}];
bingoList[14]=[{
name:"All-Night Mask",jp:'夜更かしのお面',types:["allnight","wallet","spider"]},{
name:"10 masks",jp:'お面10個',types:["mask"]},{
name:"Romani Notebook Ribbon",jp:'手帳のロマニーにリボンをつける',types:["notebook","epona"]},{
name:"Big Poe",jp:'ビッグポウ',types:["grave"]},{
name:"3 real bottles (no dupe)",jp:'空き瓶3つ（増殖は含めない）',types:["bottle"]},{
name:"Column of 4 masks on pause",jp:'お面画面の縦列のお面を4つ揃える',types:["mask"]},{
name:"Grow 8 bean plants",jp:'魔法のマメを8つ育てる',types:["ingx24"]},{
name:"45 Skulltula Tokens",jp:'黄金のスタルチュラの魂45個',types:["spider","wallet"]},{
name:"Explode Hole in Ikana Castle Ceiling",jp:'イカーナ古城の天井に穴を開ける',types:["lens","castle"]}];
bingoList[15]=[{
name:"Captain's Hat, Gibdo Mask, and Garo Mask",jp:'隊長のボウシとギブドのお面とガロのお面',types:["mask","grave","epona"]},{
name:"Row of 6 masks on pause",jp:'お面画面の横列のお面を6つ揃える',types:["mask"]},{
name:"Red, Green, and Blue Potions",jp:'赤と緑と青のクスリ',types:["bottle"]},{
name:"1 elemental arrow",jp:'属性の矢1種',types:["elemental"]},{
name:"12 masks",jp:'お面12個',types:["mask"]},{
name:"3 bottom row songs",jp:'コレクト画面の下の列の歌3つ',types:["song"]}];
bingoList[16]=[{
name:"All 3 Photo Hut Area HPs",jp:'沼地のハートのかけら3つ全部',types:["heart","picto","remains","woodfall"]},{
name:"Diagonal of 4 slots in item inventory",jp:'Cアイテム画面を対角線上に4つ揃える',types:["slot","bottle"]},{
name:"Mask of Scents",jp:'ブーさんのお面',types:["woodfall","remains"]},{
name:"Magical Mushroom",jp:'魔法のキノコ',types:["woodfall","remains"]},{
name:"Snowhead Map and Compass",jp:'スノーヘッドの神殿のマップとコンパス',types:["snowhead","mc"]},{
name:"Fire Arrows",jp:'炎の矢',types:["snowhead","elemental"]},{
name:"Snowhead Boss Key",jp:'スノーヘッドの神殿のボス鍵',types:["snowhead","bosskey"]},{
name:"5 HPs in East Clock Town",jp:'東クロックタウンのハートのかけら5つ',types:["heart"]}];
bingoList[17]=[{
name:"7 Hearts (no dupe)",jp:'ハート7つ（増殖は含まない）',types:["heart"]},{
name:"Mirror Shield",jp:'ミラーシールド',types:["mirror"]},{
name:"12 slots in item inventory",jp:'Cアイテム画面を12個埋める',types:["slot","bottle"]},{
name:"3 unused small keys in Snowhead",jp:'スノーヘッドの神殿の未使用の小さな鍵3つ',types:["snowhead"]},{
name:"Unlock Goht's Door",jp:'ゴートのボス部屋の鍵を外す',types:["snowhead","bosskey"]},{
name:"4 Total Unused Small Keys",jp:'未使用の小さな鍵を合計で4つ',types:["snowhead"]}];
bingoList[18]=[{
name:"4 real bottles (no dupe)",jp:'空き瓶4つ（増殖は含まない）',types:["bottle"]},{
name:"2 Boss Keys",jp:'ボス鍵2つ',types:["bosskey"]},{
name:"Open 10 chests in Snowhead",jp:'スノーヘッドの神殿の宝箱を10個開ける',types:["snowhead"]},{
name:"Gorman Brothers Notebook ribbon",jp:'手帳のゴーマン兄弟にリボンをつける',types:["notebook","epona","ranch"]},{
name:"Hit all 10 owls",jp:'フクロウ像を10個全て叩く',types:["hook","stt"]},{
name:"Goht's Remains",jp:'ゴートの亡骸',types:["snowhead","remains"]}];
bingoList[19]=[{
name:"Light Arrows",jp:'光の矢',types:["elemental","stt"]},{
name:"5 STT Fairies",jp:'ロックビルの神殿のはぐれ妖精5匹',types:["stt"]},{
name:"20 pictures in Notebook",jp:'手帳に写真を20個',types:["notebook"]},{
name:"Beaver HP",jp:'滝上の渓流のハートのかけら',types:["hook","bottle"]},{
name:"Curiosity Shop Owner Notebook Ribbon",jp:'手帳のマニ屋のおじさんにリボンをつける',types:["notebook","allnight","spider"]},{
name:"7 songs",jp:'歌7つ',types:["song"]},{
name:"New Wave Bossa Nova",jp:'潮騒のボサノバ',types:["song","fortress","gbt"]},{
name:"10 unique bottle contents",jp:'空き瓶の中身10種',types:["bottle"]}];
bingoList[20]=[{
name:"14 masks",jp:'お面14個',types:["mask"]},{
name:"STT Map and Compass",jp:'ロックビルの神殿のマップとコンパス',types:["stt","mc"]},{
name:"Remove all blocks from Snowhead Pillar",jp:'スノーヘッドの神殿の柱のブロックを全て取り除く',types:["lens","snowhead"]},{
name:"GBT Map and Compass",jp:'グレートベイの神殿のマップとコンパス',types:["gbt","mc"]},{
name:"2 boss remains",jp:'ボスの亡骸2つ',types:["remains"]},{
name:"Open 5 chests in GBT",jp:'グレートベイの神殿の宝箱を5つ開ける',types:["gbt"]},{
name:"Clear 3 chest icons on Mountain Village Maps",jp:'山里のマップの宝箱のアイコンを3つ消す',types:["snowhead","remains","map"]},{
name:"Normal Poe",jp:'ポウ',types:["stt","istt"]}];
bingoList[21]=[{
name:"Get Wizrobe stray fairy in STT",jp:'ロックビルの神殿のウィズローブのはぐれ妖精',types:["stt","istt"]},{
name:"10 Snowhead Fairies",jp:'スノーヘッドの神殿のはぐれ妖精10匹',types:["snowhead"]},{
name:"Giant's Mask",jp:'巨人の仮面',types:["stt","istt"]},{
name:"Open chest of Magic Beans",jp:'魔法のマメの入った空箱を開ける',types:["ingx24","istt","stt"]},{
name:"Gyorg's Remains",jp:'グヨーグの亡骸',types:["gbt","remains"]}];
bingoList[22]=[{
name:"Destroy 15 ice blocks in Snowhead",jp:'スノーヘッドの神殿の氷を15個壊す',types:["snowhead","elemental"]},{
name:"Press 3 yellow floor switches in STT",jp:'ロックビルの神殿の黄色の床スイッチを3つ押す',types:["stt","istt"]},{
name:"Change Water Direction in GBT",jp:'グレートベイの神殿の水流を変える',types:["gbt"]},{
name:"Unlock Gyorg's Door",jp:'グヨーグのボス部屋の鍵を外す',types:["gbt","bosskey"]},{
name:"Elegy of Emptiness",jp:'ぬけがらのエレジー',types:["song","mirror","castle"]},{
name:"Ice Arrows",jp:'氷の矢',types:["elemental","gbt"]},{
name:"20 total stray fairies",jp:'はぐれ妖精を合計で20匹',types:["fairy"]}];
bingoList[23]=[{
name:"10 STT Fairies",jp:'ロックビルの神殿のはぐれ妖精10匹',types:["stt"]},{
name:"STT Boss Key",jp:'ロックビルの神殿のボス鍵',types:["stt","istt","bosskey"]},{
name:"Activate Green Water Pump in GBT",jp:'グレートベイの神殿の緑色のポンプを稼働させる',types:["gbt"]},{
name:"10 fairies in GBT",jp:'グレートベイの神殿のはぐれ妖精10匹',types:["gbt"]},{
name:"2 elemental arrows",jp:'属性の矢2種',types:["elemental"]},{
name:"2 unused small keys in Stone Tower",jp:'ロックビルの神殿の未使用の小さな鍵2つ',types:["stt"]},{
name:"Double Magic",jp:'魔力2倍',types:["snowhead","lens"]},{
name:"Unlock Twinmold's Door",jp:'ツインモルドのボス部屋の鍵を外す',types:["stt","istt","bosskey"]}];
bingoList[24]=[{
name:"8 hearts (no dupe)",jp:'ハート8つ（増殖は含まない）',types:["heart"]},{
name:"Twinmold's Remains",jp:'ツインモルドの亡骸',types:["stt","istt","remains"]},{
name:"Kill Gekko in GBT",jp:'グレートベイの神殿のゲッコーを倒す',types:["gbt","elemental"]},{
name:"Gold Dust",jp:'砂金',types:["snowhead","remains","bottle"]},{
name:"3 Temple Compasses",jp:'神殿のコンパス3つ',types:["mc"]}];
bingoList[25]=[{
name:"15 Notebook ribbons",jp:'手帳にリボンを15個つける',types:["notebook"]},{
name:"Melt 3 Ice Blocks in GBT",jp:'グレートベイの神殿の氷を3つ溶かす',types:["gbt","elemental"]},{
name:"Gilded Sword",jp:'金剛の剣',types:["sword","snowhead","remains"]},{
name:"Cremia's reward (hug or 200 rupees)",jp:'クレミアの報酬（ハグか200ルピー）',types:["ranch"]},{
name:"All temple maps",jp:'全ての神殿のマップ',types:["mc","gbt"]},{
name:"30 total stray fairies",jp:'はぐれ妖精を合計で30匹',types:["fairy"]},{
name:"7 fairies in every temple",jp:'各神殿のはぐれ妖精を7匹ずつ',types:["fairy"]}];
