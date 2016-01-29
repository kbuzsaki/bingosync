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
    if (!opts) opts = {};
    var LANG = opts.lang || 'name';
    var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
    Math.seedrandom(SEED);
    var MODE = opts.mode || 'normal';
    var rowElements = {};
    rowElements["row1"] = [1, 2, 3, 4, 5];
    rowElements["row2"] = [6, 7, 8, 9, 10];
    rowElements["row3"] = [11, 12, 13, 14, 15];
    rowElements["row4"] = [16, 17, 18, 19, 20];
    rowElements["row5"] = [21, 22, 23, 24, 25];
    rowElements["col1"] = [1, 6, 11, 16, 21];
    rowElements["col2"] = [2, 7, 12, 17, 22];
    rowElements["col3"] = [3, 8, 13, 18, 23];
    rowElements["col4"] = [4, 9, 14, 19, 24];
    rowElements["col5"] = [5, 10, 15, 20, 25];
    rowElements["tlbr"] = [1, 7, 13, 19, 25];
    rowElements["bltr"] = [5, 9, 13, 17, 21];

    function invertObject(obj) {
        var ret = {};
        Object.keys(obj).forEach(function(key) {
            obj[key].forEach(function(item) {
                if (!ret[item]) ret[item] = [];
                ret[item].push(key);
            });
        });
        return ret;
    }
    rowCheckList = invertObject(rowElements);

    function makeCard() {
        var bingoBoard = [];
        for (var i = 1; i <= 25; i++) {
            if (MODE == "short") {
                bingoBoard[i] = {
                    difficulty: difficulty(i),
                    child: "yes"
                };
            } else {
                bingoBoard[i] = {
                    difficulty: difficulty(i),
                    child: "no"
                };
            }
        }
        var populationOrder = [];
        populationOrder[1] = 13;
        var diagonals = [1, 7, 19, 25, 5, 9, 17, 21];
        shuffle(diagonals);
        populationOrder = populationOrder.concat(diagonals);
        var nondiagonals = [2, 3, 4, 6, 8, 10, 11, 12, 14, 15, 16, 18, 20, 22, 23, 24];
        shuffle(nondiagonals);
        populationOrder = populationOrder.concat(nondiagonals);
        for (var k = 23; k <= 25; k++) {
            var currentSquare = getDifficultyIndex(k);
            if (currentSquare == 0) continue;
            for (var i = 1; i < 25; i++) {
                if (populationOrder[i] == currentSquare) {
                    populationOrder.splice(i, 1);
                    break;
                }
            }
            populationOrder.splice(1, 0, currentSquare);
        }
        for (var i = 1; i <= 25; i++) {
            var sq = populationOrder[i];
            var getDifficulty = bingoBoard[sq].difficulty;
            var goalArray = getShuffledGoals(getDifficulty);
            var j = 0,
                synergy = 0,
                spill = 0,
                currentObj = null,
                minSynObj = null;
            do {
                currentObj = goalArray[j];
                synergy = checkLine(sq, currentObj);
                if (minSynObj == null || synergy < minSynObj.synergy) {
                    minSynObj = {
                        synergy: synergy,
                        value: currentObj
                    };
                }
                j++;
                if (j >= goalArray.length) {
                    getDifficulty++;
                    spill++;
                    if (getDifficulty > 25) {
                        return false;
                    } else if (spill >= 3) {
                        return false;
                    } else {
                        goalArray = getShuffledGoals(getDifficulty);
                        j = 0;
                    }
                }
            } while (synergy != 0);
            bingoBoard[sq].types = minSynObj.value.types;
            bingoBoard[sq].subtypes = minSynObj.value.subtypes;
            bingoBoard[sq].name = minSynObj.value[LANG] || minSynObj.value.name;
            bingoBoard[sq].child = minSynObj.value.child;
            bingoBoard[sq].synergy = minSynObj.synergy;
        }
        return bingoBoard;

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

        function shuffle(toShuffle) {
            for (var i = 0; i < toShuffle.length; i++) {
                var randElement = Math.floor(Math.random() * (i + 1));
                var temp = toShuffle[i];
                toShuffle[i] = toShuffle[randElement];
                toShuffle[randElement] = temp;
            }
        }

        function getShuffledGoals(difficulty) {
            var newArray = bingoList[difficulty].slice();
            shuffle(newArray);
            return newArray;
        }

        function getDifficultyIndex(difficulty) {
            for (var i = 1; i <= 25; i++) {
                if (bingoBoard[i].difficulty == difficulty) {
                    return i;
                }
            }
            return 0;
        }

        function checkLine(i, testsquare) {
            var typesA = testsquare.types || [];
            var subtypesA = testsquare.subtypes || [];
            var synergy = 0;
            var rows = rowCheckList[i],
                elements = [];
            var childCount = 0;
            for (var k = 0; k < rows.length; k++) {
                elements = rowElements[rows[k]];
                childCount = 0;
                for (var m = 0; m < elements.length; m++) {
                    var testsquare2 = bingoBoard[elements[m]];
                    var typesB = testsquare2.types || [];
                    var subtypesB = testsquare2.subtypes || [];
                    if (typeof typesB != 'undefined') {
                        function matchArrays(arr1, arr2) {
                            for (var n = 0; n < arr1.length; n++) {
                                for (var p = 0; p < arr2.length; p++) {
                                    if (arr1[n] == arr2[p]) synergy++;
                                }
                            }
                        }
                        matchArrays(typesA, typesB);
                        matchArrays(typesA, subtypesB);
                        matchArrays(subtypesA, typesB);
                    }
                    if (bingoBoard[elements[m]].child == "yes") {
                        childCount++;
                    }
                }
                if (MODE == "short") {
                    if (testsquare.child == "no") {
                        childCount--;
                    }
                    if (childCount < 5) {
                        synergy += 3;
                    }
                } else {
                    if (testsquare.child == "yes") {
                        childCount++;
                    }
                    if (childCount > 4) {
                        synergy += 3;
                    }
                }
            }
            return synergy;
        }
    }
    var card;
    var iterations = 0;
    while (true) {
        iterations++;
        card = makeCard();
        if (card === false) {
            continue;
        } else {
            break;
        }
    }
    return card;
};
var bingoList = [];
bingoList["info"] = {
    version: "v8.5"
};
bingoList[1] = [{
    name: "Bottled Fairy",
    jp: 'ビン(妖精)',
    types: ["bottle"],
    child: "yes"
}, {
    name: "Bullet Bag (50)",
    jp: 'デクのタネ袋(50)',
    types: ["bulletbag"],
    child: "yes"
}, {
    name: "Bomb Bag (30)",
    jp: 'ボム袋(30)',
    types: ["bombbag"],
    child: "yes"
}, {
    name: "Lens of Truth",
    jp: 'まことのメガネ',
    types: ["botw"],
    child: "yes"
}, {
    name: "Defeat a Skull Kid",
    jp: 'スタルキッド撃破',
    types: ["skullkid"],
    child: "yes"
}, {
    name: "At least 30 Deku Nuts",
    jp: 'デクの実30個以上',
    types: ["nuts"],
    child: "yes"
}];
bingoList[2] = [{
    name: "Map & Compass in Dodongo's Cavern",
    jp: 'ドドンゴの洞窟のマップとコンパス',
    types: ["dc"],
    subtypes: ["mapcompass"],
    child: "yes"
}, {
    name: "Map & Compass in Deku Tree",
    jp: 'デクの樹様の中のマップとコンパス',
    types: ["deku"],
    subtypes: ["mapcompass"],
    child: "yes"
}, {
    name: "Map & Compass in Bottom of the Well",
    jp: '井戸の底のマップとコンパス',
    types: ["botw"],
    subtypes: ["mapcompass"],
    child: "yes"
}, {
    name: "Giant's Knife",
    jp: '巨人のナイフ',
    types: ["swords"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "Minuet of Forest",
    jp: '森のメヌエット',
    types: ["forest"],
    subtypes: ["songs"],
    child: "no"
}, {
    name: "Goron Tunic",
    jp: 'ゴロンの服',
    types: ["tunics", "dmc", "fire"],
    child: "no"
}, {
    name: "Zora Tunic",
    jp: 'ゾーラの服',
    types: ["tunics", "ice"],
    child: "no"
}];
bingoList[3] = [{
    name: "Both heart pieces in Death Mountain Crater",
    jp: 'デスマウンテン火口のハートのかけら２つ',
    types: ["dmc", "fire"],
    subtypes: ["hearts"],
    child: "yes"
}, {
    name: "Fairy Slingshot",
    jp: '妖精のパチンコ',
    types: ["bulletbag", "deku"],
    child: "yes"
}, {
    name: "At least 3 songs",
    jp: '歌3つ以上',
    types: ["songs", "zl"],
    child: "yes"
}, {
    name: "Quiver (40)",
    jp: '矢立て(40)',
    types: ["atrade", "forest", "quiver"],
    child: "no"
}, {
    name: "Defeat all Lizalfos in Dodongo's Cavern",
    jp: 'ドドンゴの洞窟のリザルフォス全て撃破',
    types: ["dc"],
    child: "yes"
}, {
    name: "Bolero of Fire",
    jp: '炎のボレロ',
    types: ["dmc", "fire"],
    subtypes: ["songs"],
    child: "no"
}];
bingoList[4] = [{
    name: "30 Deku Sticks",
    jp: 'デクの棒30本',
    types: ["atrade"],
    child: "yes"
}, {
    name: "Defeat King Dodongo",
    jp: 'キングドドンゴ撃破',
    types: ["dc", "kd"],
    subtypes: ["hearts"],
    child: "yes"
}, {
    name: "Fire Temple Boss Key",
    jp: '炎の神殿のボス部屋のカギ',
    types: ["fire"],
    subtypes: ["bosskey"],
    child: "no"
}, {
    name: "Ruto's Letter",
    jp: 'ルトの手紙',
    types: ["bottle"],
    child: "yes"
}, {
    name: "Ice Arrows",
    jp: '氷の矢',
    types: ["fortress", "quiver"],
    subtypes: ["kd"],
    child: "yes"
}, {
    name: "Map & Compass in Shadow Temple",
    jp: '闇の神殿のマップとコンパス',
    types: ["shadow"],
    subtypes: ["mapcompass"],
    child: "yes"
}];
bingoList[5] = [{
    name: "3 unused keys in Gerudo Training Grounds",
    jp: 'ゲルドの修練場の未使用のカギ3つ',
    types: ["fortress"],
    child: "yes"
}, {
    name: "Bullet Bag (40)",
    jp: 'デクのタネ袋(40)',
    types: ["bulletbag", "deku"],
    child: "yes"
}, {
    name: "Blue Fire",
    jp: '青い炎',
    types: ["ice", "bottle", "ganon"],
    child: "yes"
}, {
    name: "Defeat Queen Gohma",
    jp: 'ゴーマ撃破',
    types: ["deku", "ganon"],
    subtypes: ["hearts"],
    child: "yes"
}, {
    name: "All 3 Kokiri Forest area Skulltulas",
    jp: 'コキリの森エリアの黄金のスタルチュラ３匹',
    types: ["forest"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "Ice Cavern Heart Piece",
    jp: '氷の洞窟のハートのかけら',
    types: ["ice"],
    subtypes: ["hearts", "mapcompass"],
    child: "yes"
}, {
    name: "3 Tunics",
    jp: '服3種類',
    types: ["tunics", "ice", "fire"],
    child: "no"
}, {
    name: "Water Temple Boss Key",
    jp: '水の神殿のボス部屋のカギ',
    types: ["water", "fortress"],
    subtypes: ["bosskey"],
    child: "no"
}];
bingoList[6] = [{
    name: "4 unused keys in Gerudo Training Grounds",
    jp: 'ゲルドの修練場の未使用のカギ4つ',
    types: ["fortress"],
    child: "yes"
}, {
    name: "Map & Compass in Ice Cavern",
    jp: '氷の洞窟のマップとコンパス',
    types: ["ice"],
    subtypes: ["mapcompass"],
    child: "yes"
}, {
    name: "Defeat a White Wolfos",
    jp: 'ホワイトウルフォス撃破',
    types: ["ice", "fortress"],
    subtypes: ["mapcompass"],
    child: "yes"
}, {
    name: "Ganon's Castle Boss Key",
    jp: 'ガノン城のボス部屋のカギ',
    types: ["ganon", "deku"],
    subtypes: ["bosskey"],
    child: "yes"
}, {
    name: "All 3 Skulltulas in Bottom of the Well",
    jp: '井戸の底の黄金のスタルチュラ3匹',
    types: ["botw"],
    subtypes: ["wallet"],
    child: "yes"
}, {
    name: "Cow in House",
    jp: '牛(リンクの家)',
    types: ["cow"],
    child: "no"
}, {
    name: "Beat the Deku Tree",
    jp: 'デクの樹様の中クリア',
    types: ["deku", "ganon"],
    child: "yes"
}, {
    name: "All 3 Skulltulas in Ice Cavern",
    jp: '氷の洞窟の黄金のスタルチュラ3匹',
    types: ["ice"],
    subtypes: ["wallet", "mapcompass"],
    child: "yes"
}];
bingoList[7] = [{
    name: "Beat Dodongo's Cavern",
    jp: 'ドドンゴの洞窟クリア',
    types: ["dc", "fortress", "kd"],
    child: "yes"
}, {
    name: "Both Gerudo's Fortress area Skulltulas",
    jp: 'ゲルドの砦の黄金のスタルチュラ2匹',
    types: ["fortress"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "Milk",
    jp: 'ロンロン牛乳',
    types: ["lonlon", "bottle"],
    child: "yes"
}, {
    name: "All 4 Lost Woods area Skulltulas",
    jp: '迷いの森エリアの黄金のスタルチュラ4匹',
    types: ["forest"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "Fill all 4 Bottle Slots",
    jp: '4つの空きビンスロットを全て埋める',
    types: ["bottle"],
    child: "yes"
}, {
    name: "Blue Potion",
    jp: '青いクスリ',
    types: ["atrade", "zl"],
    child: "no"
}, {
    name: "At least 4 songs",
    jp: '歌4つ以上',
    types: ["songs", "atrade", "zl"],
    subtypes: ["child2"],
    child: "yes"
}];
bingoList[8] = [{
    name: "Giant's Wallet",
    jp: '巨人のサイフ',
    types: ["wallet"],
    child: "yes"
}, {
    name: "Plant bean in Death Mountain Crater",
    jp: 'デスマウンテン火口の土にマメを植える',
    types: ["dmc", "beans"],
    subtypes: ["child2"],
    child: "yes"
}, {
    name: "Epona's Song",
    jp: 'エポナの歌',
    types: ["lonlon"],
    subtypes: ["songs"],
    child: "yes"
}, {
    name: "Iron Boots",
    jp: 'ヘビーブーツ',
    types: ["ice", "boots"],
    subtypes: ["mapcompass"],
    child: "yes"
}, {
    name: "5 unused keys in Gerudo Training Grounds",
    jp: 'ゲルドの修練場の未使用のカギ5つ',
    types: ["fortress"],
    child: "yes"
}, {
    name: "6 Hearts",
    jp: 'ハート6つ',
    types: ["hearts"],
    child: "yes"
}, {
    name: "Defeat Phantom Ganon",
    jp: 'ファントムガノン撃破',
    types: ["forest", "pg"],
    subtypes: ["hearts"],
    child: "yes"
}, {
    name: "Map & Compass in Water Temple",
    jp: '水の神殿のマップとコンパス',
    types: ["water"],
    subtypes: ["mapcompass"],
    child: "yes"
}];
bingoList[9] = [{
    name: "3 Swords & 3 Tunics",
    jp: '剣3種類と服3種類',
    types: ["swords", "tunics", "ice", "fire"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "3 Boots",
    jp: '靴3種類',
    types: ["ice", "boots"],
    subtypes: ["mapcompass"],
    child: "yes"
}, {
    name: "All 5 Skulltulas in Dodongo's Cavern",
    jp: 'ドドンゴの洞窟の黄金のスタルチュラ5匹',
    types: ["dc"],
    subtypes: ["wallet"],
    child: "yes"
}, {
    name: "Defeat Morpha",
    jp: 'モーファ撃破',
    types: ["water"],
    subtypes: ["hearts"],
    child: "yes"
}, {
    name: "Beat the Forest Temple",
    jp: '森の神殿クリア',
    types: ["forest", "pg"],
    subtypes: ["hearts"],
    child: "yes"
}];
bingoList[10] = [{
    name: "500 Rupees",
    jp: '500ルピー',
    types: ["wallet"],
    child: "yes"
}, {
    name: "All 4 Skulltulas in Deku Tree",
    jp: 'デクの樹様の中の黄金のスタルチュラ4匹',
    types: ["deku"],
    subtypes: ["wallet"],
    child: "yes"
}, {
    name: "At least 7 Magic Beans",
    jp: '魔法のマメ7つ以上',
    types: ["beans"],
    subtypes: ["child2", "wallet"],
    child: "yes"
}, {
    name: "Defeat Big Octo",
    jp: '大オクタ撃破',
    types: ["jabu", "ice"],
    child: "yes"
}, {
    name: "37th heart piece (Child Fortress)",
    jp: '37番目のハートのかけら(子供のゲルドの砦)',
    types: ["fortress"],
    subtypes: ["hearts", "kd"],
    child: "yes"
}, {
    name: "Beat the Water Temple",
    jp: '水の神殿クリア',
    types: ["water"],
    subtypes: ["hearts"],
    child: "yes"
}, {
    name: "Forest Medallion",
    jp: '森のメダル',
    types: ["forest", "lightarrow", "atrade", "zl", "pg"],
    subtypes: ["hearts"],
    child: "yes"
}, {
    name: "6 unused keys in Gerudo Training Grounds",
    jp: 'ゲルドの修練場の未使用のカギ6つ',
    types: ["fortress"],
    child: "yes"
}, {
    name: "Requiem of Spirit",
    jp: '魂のレクイエム',
    types: ["spirit"],
    subtypes: ["songs"],
    child: "yes"
}, {
    name: "At least 6 songs",
    jp: '歌6つ以上',
    types: ["songs", "atrade", "zl"],
    subtypes: ["child2"],
    child: "no"
}];
bingoList[11] = [{
    name: "All 4 Lon-Lon Ranch area Skulltulas",
    jp: 'ロンロン牧場エリアの黄金のスタルチュラ4匹',
    types: ["jabu", "lonlon"],
    subtypes: ["wallet"],
    child: "yes"
}, {
    name: "Defeat Bongo-Bongo",
    jp: 'ボンゴボンゴ撃破',
    types: ["shadow"],
    subtypes: ["hearts", "bosskey"],
    child: "yes"
}, {
    name: "At least 4 Skulltulas in Shadow Temple",
    jp: '闇の神殿の黄金のスタルチュラ4匹以上',
    types: ["shadow"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "All 8 Kakariko area Skulltulas",
    jp: 'カカリコ村エリアの黄金のスタルチュラ8匹',
    types: ["botw"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "Mirror Shield",
    jp: 'ミラーシールド',
    types: ["shields", "spirit"],
    child: "yes"
}, {
    name: "All 5 Skulltulas in Forest Temple",
    jp: '森の神殿の黄金のスタルチュラ5匹',
    types: ["forest"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "Water Medallion",
    jp: '水のメダル',
    types: ["water", "lightarrow", "atrade", "zl"],
    subtypes: ["hearts"],
    child: "yes"
}, {
    name: "Gerudo's Card",
    jp: 'ゲルドの会員証',
    types: ["fortress"],
    child: "yes"
}, {
    name: "Defeat Amy (Green Poe)",
    jp: 'エイミー撃破(緑のポウ)ｴ',
    types: ["forest", "fortress", "quiver"],
    subtypes: ["mapcompass", "bosskey"],
    child: "no"
}];
bingoList[12] = [{
    name: "Beat the Shadow Temple",
    jp: '闇の神殿クリア',
    types: ["shadow"],
    subtypes: ["hearts", "bosskey"],
    child: "yes"
}, {
    name: "Get to the end of Fire Trial",
    jp: '炎の結界の最後の部屋に到達',
    types: ["ganon", "strength", "fire"],
    subtypes: ["bosskey"],
    child: "no"
}, {
    name: "Golden Gauntlets",
    jp: '金のグローブ',
    types: ["strength", "ganon", "deku"],
    child: "yes"
}, {
    name: "Get Bombchu chest in Spirit Temple",
    jp: '魂の神殿のボムチュウ取得',
    types: ["spirit"],
    child: "yes"
}, {
    name: "All 4 Skulltulas in Jabu-Jabu",
    jp: 'ジャブジャブ様のお腹の黄金のスタルチュラ4匹',
    types: ["jabu", "ice"],
    subtypes: ["hearts", "wallet"],
    child: "yes"
}, {
    name: "Fairy Bow",
    jp: '妖精の弓',
    types: ["forest", "quiver"],
    subtypes: ["mapcompass", "bosskey"],
    child: "no"
}, {
    name: "Defeat Dark Link",
    jp: 'ダークリンク撃破',
    types: ["water", "ice"],
    child: "no"
}, {
    name: "Fire Arrow",
    jp: '炎の矢',
    types: ["water", "fortress", "firearrow", "quiver"],
    child: "no"
}];
bingoList[13] = [{
    name: "Stone of Agony",
    jp: 'もだえ石',
    types: ["wallet"],
    child: "yes"
}, {
    name: "7 Hearts",
    jp: 'ハート7つ',
    types: ["hearts"],
    child: "yes"
}, {
    name: "Map & Compass in Jabu-Jabu",
    jp: 'ジャブジャブ様のお腹のマップとコンパス',
    types: ["jabu"],
    subtypes: ["mapcompass"],
    child: "yes"
}, {
    name: "Win Bombchu Bowling Prize",
    jp: 'ボムチュウボウリングの景品',
    types: ["dc", "kd"],
    subtypes: ["hearts", "child2"],
    child: "yes"
}, {
    name: "Silver Gauntlets",
    jp: '銀のグローブ',
    types: ["strength", "spirit"],
    child: "yes"
}, {
    name: "Longshot",
    jp: 'ロングフック',
    types: ["water", "ice"],
    child: "no"
}, {
    name: "3 Swords & 3 Boots",
    jp: '剣3種類と靴3種類',
    types: ["swords", "boots", "ice"],
    subtypes: ["wallet", "mapcompass"],
    child: "no"
}];
bingoList[14] = [{
    name: "Double Magic",
    jp: '魔力2倍',
    types: ["dmc", "zl"],
    child: "yes"
}, {
    name: "At least 8 songs",
    jp: '歌8つ以上',
    types: ["songs", "atrade", "zl"],
    subtypes: ["child2"],
    child: "no"
}, {
    name: "Bronze Gauntlets",
    jp: '銅のグローブ',
    types: ["strength", "bulletbag", "ganon", "atrade"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "Keaton Mask",
    jp: 'キータンのお面',
    types: ["zl"],
    child: "yes"
}, {
    name: "3 Tunics & 3 Boots",
    jp: '服3種類と靴3種類',
    types: ["tunics", "boots", "fire", "ice"],
    subtypes: ["mapcompass"],
    child: "no"
}, {
    name: "Forest Temple Boss Key",
    jp: '森の神殿のボス部屋のカギ',
    types: ["forest", "claimcheck", "quiver"],
    subtypes: ["mapcompass", "bosskey"],
    child: "no"
}];
bingoList[15] = [{
    name: "Both Hyrule Field area Skulltulas",
    jp: 'ハイラル平原エリアの黄金ノスタルチュラ2匹',
    types: ["zl", "water"],
    subtypes: ["wallet"],
    child: "yes"
}, {
    name: "Map & Compass in Forest Temple",
    jp: '森の神殿のマップとコンパス',
    types: ["forest", "quiver"],
    subtypes: ["mapcompass", "bosskey"],
    child: "no"
}, {
    name: "Map & Compass in Fire Temple",
    jp: '炎の神殿のマップとコンパス',
    types: ["fire"],
    subtypes: ["mapcompass", "bosskey"],
    child: "no"
}, {
    name: "All 4 Gerudo Valley area Skulltulas",
    jp: 'ゲルドの谷エリアの黄金のスタルチュラ4匹',
    types: ["fortress"],
    subtypes: ["wallet", "child2"],
    child: "no"
}, {
    name: "All 8 Death Mountain area Skulltulas",
    jp: 'デスマウンテンエリアの黄金のスタルチュラ8匹',
    types: ["dmc"],
    subtypes: ["child2", "wallet"],
    child: "no"
}, {
    name: "At least 9 Magic Beans",
    jp: '魔法のマメ9つ以上',
    types: ["beans"],
    subtypes: ["child2", "wallet"],
    child: "yes"
}, {
    name: "Blue Gauntlets",
    jp: '青のグローブ',
    types: ["spirit", "strength", "bulletbag", "atrade"],
    subtypes: ["wallet"],
    child: "no"
}];
bingoList[16] = [{
    name: "Megaton Hammer",
    jp: 'メガトンハンマー',
    types: ["fire"],
    subtypes: ["mapcompass", "bosskey"],
    child: "no"
}, {
    name: "6 Maps",
    jp: 'マップ6つ',
    types: ["mapcompass", "claimcheck"],
    child: "yes"
}, {
    name: "All 8 Zora's Domain area Skulltulas",
    jp: 'ゾーラの里エリアの黄金のスタルチュラ8匹',
    types: ["jabu", "ice"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "Defeat Barinade",
    jp: 'バリネード撃破',
    types: ["jabu"],
    subtypes: ["hearts"],
    child: "yes"
}, {
    name: "Double Defense",
    jp: '防御力2倍',
    types: ["zl", "ganon"],
    child: "no"
}];
bingoList[17] = [{
    name: "At least 3 Skulltulas in Water Temple",
    jp: '水の神殿の黄金のスタルチュラ3匹以上',
    types: ["water", "ice", "zl"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "Frog's Heart Piece",
    jp: 'カエルのハートのかけら(嵐の歌)',
    types: ["forest", "child2", "pg"],
    subtypes: ["hearts", "songs"],
    child: "no"
}, {
    name: "Shadow Temple Boss Key",
    jp: '闇の神殿のボス部屋のカギ',
    types: ["shadow", "zl"],
    subtypes: ["hearts", "bosskey"],
    child: "yes"
}, {
    name: "Defeat both Flare Dancers",
    jp: 'フレアダンサー2体撃破',
    types: ["fire"],
    subtypes: ["mapcompass", "bosskey"],
    child: "no"
}, {
    name: "Beat Jabu-Jabu's Belly",
    jp: 'ジャブジャブ様のお腹クリア',
    types: ["jabu"],
    subtypes: ["hearts", "child2"],
    child: "yes"
}, {
    name: "All 5 Skulltulas in Spirit Temple",
    jp: '魂の神殿の黄金のスタルチュラ5匹',
    types: ["spirit"],
    subtypes: ["wallet"],
    child: "yes"
}, {
    name: "3 Swords & 3 Shields",
    jp: '剣3種類と盾3種類',
    types: ["swords", "shields", "spirit"],
    subtypes: ["wallet"],
    child: "no"
}, {
    name: "Get to the end of Light Trial",
    jp: '光の結界の最後の部屋に到達',
    types: ["ganon", "zl", "strength"],
    child: "no"
}, {
    name: "8 different unused keys in Gerudo Training Grounds",
    jp: 'ゲルドの修練場の未使用のカギ8つ',
    types: ["fortress", "strength", "quiver"],
    child: "no"
}];
bingoList[18] = [{
    name: "6 Compasses",
    jp: 'コンパス6つ',
    types: ["mapcompass"],
    child: "yes"
}, {
    name: "Farore's Wind",
    jp: 'フロルの風',
    types: ["zl", "ice"],
    child: "yes"
}, {
    name: "All 5 Skulltulas in Fire Temple",
    jp: '炎の神殿の黄金のスタルチュラ5匹',
    types: ["fire"],
    subtypes: ["wallet", "mapcompass", "bosskey"],
    child: "no"
}, {
    name: "Defeat Volvagia",
    jp: 'ヴァルバジア撃破',
    types: ["fire"],
    subtypes: ["hearts", "mapcompass", "bosskey", "pg"],
    child: "no"
}, {
    name: "At least 9 songs",
    jp: '歌9つ以上',
    types: ["songs", "atrade", "zl"],
    subtypes: ["child2"],
    child: "no"
}];
bingoList[19] = [{
    name: "Defeat Nabooru-Knuckle",
    jp: 'アイアンナック(ナボール)撃破',
    types: ["spirit"],
    child: "no"
}, {
    name: "Saria's Song",
    jp: 'サリアの歌',
    types: ["zl", "saria"],
    subtypes: ["child2", "songs"],
    child: "yes"
}, {
    name: "8 Hearts",
    jp: 'ハート8つ',
    types: ["hearts"],
    child: "yes"
}, {
    name: "3 Shields & 3 Tunics",
    jp: '盾3種類と服3種類',
    types: ["shields", "fire", "tunics", "spirit"],
    child: "no"
}, {
    name: "Beat the Fire Temple",
    jp: '炎の神殿クリア',
    types: ["fire", "forest"],
    subtypes: ["hearts", "bosskey", "mapcompass", "pg"],
    child: "no"
}];
bingoList[20] = [{
    name: "Light Arrows",
    jp: '光の矢',
    types: ["lightarrow", "atrade", "zl"],
    child: "no"
}, {
    name: "Defeat Meg (purple Poe)",
    jp: 'メグ撃破(紫のポウ)',
    types: ["forest", "quiver"],
    subtypes: ["mapcompass", "bosskey"],
    child: "no"
}, {
    name: "All 4 Wasteland/ Colossus area Skulltulas",
    jp: '幻影の砂漠・巨大邪神像エリアの黄金のスタルチュラ4匹',
    types: ["spirit"],
    subtypes: ["child2", "wallet", "kd"],
    child: "no"
}, {
    name: "Nayru's Love",
    jp: 'ネールの愛',
    types: ["spirit", "zl"],
    child: "yes"
}, {
    name: "Free all 9 gorons in Fire Temple",
    jp: '炎の神殿で９人のゴロンを全員救う',
    types: ["fire"],
    subtypes: ["mapcompass", "bosskey"],
    child: "no"
}];
bingoList[21] = [{
    name: "Goron Bracelet",
    jp: 'ゴロンの腕輪',
    types: ["strength", "zl", "saria"],
    subtypes: ["child2"],
    child: "yes"
}, {
    name: "All 5 Lake Hylia Skulltulas",
    jp: 'ハイリア湖畔エリアの黄金のスタルチュラ5匹',
    types: ["ice", "water"],
    subtypes: ["child2", "wallet", "mapcompass"],
    child: "no"
}, {
    name: "Din's Fire",
    jp: 'ディンの炎',
    types: ["zl"],
    subtypes: ["child2"],
    child: "yes"
}, {
    name: "Get to the end of Spirit Trial",
    jp: '魂の結界の最後の部屋に到達',
    types: ["ganon", "spirit", "quiver"],
    child: "no"
}, {
    name: "All 4 Market area Skulltulas",
    jp: '城下町エリアの黄金のスタルチュラ4匹',
    types: ["forest", "child2", "pg"],
    subtypes: ["hearts", "wallet"],
    child: "no"
}, {
    name: "Spooky Mask",
    jp: 'こわそなお面',
    types: ["zl", "fortress", "saria", "beans"],
    child: "yes"
}];
bingoList[22] = [{
    name: "7 Maps",
    jp: 'マップ7つ',
    types: ["mapcompass", "claimcheck"],
    child: "yes"
}, {
    name: "Spirit Temple Boss Key",
    jp: '魂の神殿のボス部屋のカギ',
    types: ["spirit", "lightarrow", "zl"],
    subtypes: ["bosskey"],
    child: "no"
}, {
    name: "Quiver (50)",
    jp: '矢立て(50)',
    types: ["quiver", "fortress", "beans"],
    child: "no"
}, {
    name: "3 Shields & 3 Boots",
    jp: '盾3種類と靴3種類',
    types: ["shields", "boots", "spirit", "ice"],
    subtypes: ["mapcompass"],
    child: "yes"
}];
bingoList[23] = [{
    name: "Both heart pieces in Lost Woods",
    jp: '迷いの森のハートのかけら２つ',
    types: ["zl"],
    subtypes: ["hearts", "child2", "songs"],
    child: "yes"
}, {
    name: "Map & Compass in Spirit Temple",
    jp: '魂の神殿のマップとコンパス',
    types: ["spirit", "zl"],
    subtypes: ["mapcompass"],
    child: "yes"
}, {
    name: "Defeat Twinrova",
    jp: 'ツインローバ撃破',
    types: ["spirit"],
    subtypes: ["hearts"],
    child: "no"
}, {
    name: "Get to the end of Water Trial",
    jp: '水の結界の最後の部屋に到達',
    types: ["ganon", "fire", "lightarrow"],
    subtypes: ["mapcompass", "bosskey", "pg"],
    child: "no"
}];
bingoList[24] = [{
    name: "Two Fairy Spells",
    jp: '魔法のアイテム２つ',
    types: ["zl", "spirit"],
    subtypes: ["child2"],
    child: "yes"
}, {
    name: "Beat the Spirit Temple",
    jp: '魂の神殿クリア',
    types: ["spirit"],
    subtypes: ["hearts"],
    child: "no"
}, {
    name: "All 5 Skulltulas in Shadow Temple",
    jp: '闇の神殿の黄金のスタルチュラ5匹',
    types: ["shadow", "zl"],
    subtypes: ["wallet", "bosskey"],
    child: "no"
}, {
    name: "Get to the end of Shadow Trial",
    jp: '闇の結界の最後の部屋に到達',
    types: ["ganon", "fire"],
    subtypes: ["lightarrow", "mapcompass", "bosskey", "pg"],
    child: "no"
}];
bingoList[25] = [{
    name: "9 Hearts",
    jp: 'ハート9つ',
    types: ["hearts"],
    child: "yes"
}, {
    name: "7 Compasses",
    jp: 'コンパス7つ',
    types: ["mapcompass"],
    child: "no"
}, {
    name: "All 5 Skulltulas in Water Temple",
    jp: '水の神殿の黄金のスタルチュラ5匹',
    types: ["water", "zl"],
    child: "no"
}, {
    name: "Green Gauntlets",
    jp: '緑のグローブ',
    types: ["strength", "bulletbag", "zl", "atrade", "saria"],
    subtypes: ["wallet"],
    child: "no"
}];
