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
name:"Never obtain Bombchus",types:["restrict"]},{
name:"Room Key",types:["delivery"]},{
name:"Blast Mask",types:["allnight"]},{
name:"No Shield",types:["mirror"]},{
name:"Enter 4th Day",types:["end"]},];
bingoList[2]=[{
name:"Keaton Quiz HP",types:["delivery"]},{
name:"Blank B Button (no sword)",types:["sword","epona"]},{
name:"2 blank C-buttons",types:["delivery"]},{
name:"Clear All 3 Chest Icons on Termina Field Map",types:["map"]},{
name:"Rosa Sister's Happiness Seal",types:["notebook"]},{
name:"??? Happiness Seal",types:["notebook","deed"]}];
bingoList[3]=[{
name:"Milk",types:["bottle","ranch"]},{
name:"Blue Potion",types:["bottle"]},{
name:"20 Magic Beans",types:["slot","bean"]},{
name:"Deku Playground HP",types:["heart"]},{
name:"Chateau Romani",types:["delivery","bottle"]},{
name:"Gibdo Mask",types:["mirror"]},{
name:"Postman's Hat",types:["delivery"]}];
bingoList[4]=[{
name:"WFT Map and Compass",types:["wft","mc"]},{
name:"Save Sun Mask",types:["couple"]},{
name:"7 Masks",types:["mask"]},{
name:"6 Happiness Seals",types:["notebook"]},{
name:"All 5 Termina Grotto HPs",types:["heart"]},{
name:"WFT Boss Key",types:["wft","bosskey"]}];
bingoList[5]=[{
name:"Unlock Odolwa's Door",types:["wft","bosskey"]},{
name:"Pendant of Memories",types:["couple","slot"]},{
name:"Bunny Hood",types:["ranch"]},{
name:"Epona's Song",types:["song","epona","ranch"]},{
name:"Doggy Racetrack HP",types:["ranch"]},{
name:"Postman Happiness Seal",types:["notebook","delivery","couple"]},{
name:"10 WFT Fairies",types:["fairy","wft"]}];
bingoList[6]=[{
name:"Hookshot",types:["hook","fortress","stt","gbt"]},{
name:"15 Oceanside Skulltula Tokens",types:["spider","wallet"]},{
name:"Oceanside Spider House HP",types:["wallet"]},{
name:"Song of Storms",types:["song","grave"]},{
name:"Kill 2 Iron Knuckles",types:["song","grave"]},{
name:"Razor Sword",types:["sword"]},{
name:"Captain's Hat",types:["grave"]},{
name:"Defeat Captain Keeta",types:["grave"]}];
bingoList[7]=[{
name:"Under 00:35 Epona Archery",types:["song","epona","ranch"]},{
name:"Seahorse",types:["picto","fortress","bottle"]},{
name:"Ikana Castle HP",types:["castle"]},{
name:"Marine Lab Fish HP",types:["heart"]},{
name:"No Song of Soaring",types:["song","restrict","stt","istt"]},{
name:"No Hidden Owl Statue",types:["restrict","stt","istt","0thday"]},{
name:"Odolwa's Remains",types:["wft","remains"]},{
name:"Open 2 Graves",types:["grave"]}];
bingoList[8]=[{
name:"Clear All 3 Chest Icons on Zora Cape Map",types:["hook","fortress","map"]},{
name:"Biggest Quiver",types:["wft"]},{
name:"Oath to Order",types:["song","remains"]},{
name:"All Maps from Tingle",types:["map"]},{
name:"Path to Snowhead HP",types:["heart"]},{
name:"Open 8 WFT Chests",types:["wft"]},{
name:"Goron Mask",types:["lens"]},{
name:"Stone Mask",types:["lens"]}];
bingoList[9]=[{
name:"Rock Sirloin above head",types:["lens","end"]},{
name:"Don Gero's Mask",types:["lens"]},{
name:"Light Arrow",types:["elemental","stt","gfs"]},{
name:"STT Map and Compass",types:["stt","mc"]},{
name:"2 Unused STT Small Keys",types:["stt","gfs"]}];
bingoList[10]=[{
name:"Pictograph of Dancing Redead",types:["picto","mirror"]},{
name:"Unbar 5 doors in the Well",types:["mirror"]},{
name:"Ghost Hut HP",types:["heart"]},{
name:"5 STT Fairies",types:["stt","gistt","gfs"]},{
name:"Open Chest of Magic Beans",types:["bean","stt","istt","gistt"]},{
name:"Press 3 STT Yellow Floor Switches",types:["stt","istt","gistt"]}];
bingoList[11]=[{
name:"4 Business Scrub HPs",types:["heart","scrub","deed"]},{
name:"Pinnacle Rock HP",types:["picto","fortress"]},{
name:"Giant Wallet",types:["wallet","spider"]},{
name:"500 Rupees in Wallet",types:["wallet","spider"]},{
name:"Exactly 333 Rupees in Wallet",types:["wallet","spider"]},{
name:"Bottled Deku Princess",types:["wft","remains"]},{
name:"Normal Poe",types:["stt","istt","gistt"]},{
name:"Giant's Mask",types:["stt","istt","gistt"]}];
bingoList[12]=[{
name:"Mask of Truth",types:["spider"]},{
name:"Both Shooting Gallery HPs",types:["heart","wft"]},{
name:"Couple's Mask",types:["couple"]},{
name:"Circus Leader's Mask",types:["mask","notebook"]},{
name:"Gold Rupee from Ikana Business Scrub",types:["scrub","deed"]},{
name:"Biggest Bomb Bag",types:["scrub","lens"]},{
name:"6 Hearts (no dupe)",types:["heart"]},{
name:"1000 Rupees in Bank",types:["wallet"]},{
name:"Pirate's Fortress HP",types:["fortress"]},{
name:"Get STT Wizrobe Stray Fairy",types:["stt","istt","gistt"]},{
name:"STT Boss Key",types:["stt","istt","bosskey","gistt"]}];
bingoList[13]=[{
name:"10 Happiness Seals",types:["notebook"]},{
name:"Great Spin",types:["fairy","wft"]},{
name:"Lullaby Intro",types:["lens","song"]},{
name:"All Top Row Songs",types:["song","grave","epona"]},{
name:"Garo Mask",types:["ranch","epona"]},{
name:"Unlock Twinmold's Door",types:["dungeon","stt","istt","bosskey","gistt"]},{
name:"Twinmold's Remains",types:["dungeon","stt","istt","remains","gistt"]},{
name:"Kill 3 Dinolfos",types:["elemental","gbt"]}];
bingoList[14]=[{
name:"Open 2 Well Chests",types:["mirror"]},{
name:"Open 11 Pirate's Fortress area Chests",types:["fortress","hook"]},{
name:"Goron Lullaby",types:["lens","song"]},{
name:"Powder Keg",types:["lens"]},{
name:"Defeat Garo Ninja",types:["epona"]},{
name:"Romani's Mask",types:["ranch"]},{
name:"10 STT Fairies",types:["stt","istt","gistt","gfs"]}];
bingoList[15]=[{
name:"All-Night Mask",types:["allnight","spider","wallet"]},{
name:"10 Masks",types:["mask"]},{
name:"Romani Happiness Seal",types:["notebook","epona"]},{
name:"Big Poe",types:["grave"]},{
name:"3 Real Bottles (no dupe)",types:["bottle"]},{
name:"Column of 4 Masks",types:["mask"]},{
name:"Grow 8 Bean Plants",types:["bean"]},{
name:"45 Skulltula Tokens",types:["spider","wallet"]},{
name:"Explode Hole in Ikana Castle Ceiling",types:["lens","castle"]},{
name:"Kill 2 Wizrobes",types:["elemental","gbt"]}];
bingoList[16]=[{
name:"Captain's Hat, Gibdo Mask, and Garo Mask",types:["mask","grave","epona"]},{
name:"Row of 6 Masks",types:["mask"]},{
name:"Red, Green, and Blue Potions",types:["bottle"]},{
name:"12 Masks",types:["mask"]},{
name:"3 Bottom Row Songs",types:["song"]}];
bingoList[17]=[{
name:"All 3 Tourist Center Area HPs",types:["heart","picto","remains","wft"]},{
name:"Diagonal of 4 Item Slots",types:["slot","bottle"]},{
name:"Mask of Scents",types:["wft","remains"]},{
name:"Magical Mushroom",types:["wft","remains"]},{
name:"SHT Map and Compass",types:["sht","mc","gsht"]},{
name:"Fire Arrow",types:["sht","elemental","gsht"]},{
name:"SHT Boss Key",types:["sht","bosskey","gsht"]},{
name:"5 East Clock Town HPs",types:["heart"]},{
name:"New Wave Bossa Nova",types:["song","fortress","gbt","gsht","gistt"]},{
name:"10 SHT Fairies",types:["sht","gsht"]}];
bingoList[18]=[{
name:"7 Hearts (no dupe)",types:["heart"]},{
name:"Mirror Shield",types:["mirror"]},{
name:"12 Item Slots",types:["slot","bottle"]},{
name:"3 Unused SHT Small Keys",types:["sht","gsht"]},{
name:"Unlock Goht's Door",types:["sht","bosskey","gsht"]},{
name:"4 Total Unused Small Keys",types:["sht","gsht"]},{
name:"2 Elemental Arrows",types:["elemental"]},{
name:"3 Temple Compasses",types:["mc"]},{
name:"2 Temple Maps and Compasses",types:["mc"]},{
name:"Beaver Bottle",types:["hook","bottle"]}];
bingoList[19]=[{
name:"4 Real Bottles (no dupe)",types:["bottle"]},{
name:"2 Boss Keys",types:["bosskey"]},{
name:"Gorman Brother's Happiness Seal",types:["notebook","epona","ranch"]},{
name:"Goht's Remains",types:["sht","remains","gsht"]}];
bingoList[20]=[{
name:"All Notebook Pictures",types:["notebook"]},{
name:"Beaver HP",types:["hook","bottle"]},{
name:"Curiosity Shop Owner Happiness Seal",types:["notebook","allnight","spider"]},{
name:"Hit All 10 Owl Statues",types:["hook","stt"]},{
name:"20 Total Stray Fairies",types:["fairy"]}];
bingoList[21]=[{
name:"7 Songs",types:["song"]},{
name:"10 Unique Bottle Contents",types:["bottle"]},{
name:"14 Masks",types:["mask"]},{
name:"Remove All Blocks from SHT Pillar",types:["lens","sht","gsht"]},{
name:"Clear 3 Chest Icons on Mountain Village Maps",types:["sht","remains","map","gsht"]},{
name:"GBT Map and Compass",types:["dungeon","gbt","mc","gsht","gistt"]}];
bingoList[22]=[{
name:"Open 10 SHT Chests",types:["sht","gsht"]},{
name:"2 Boss Remains",types:["remains"]},{
name:"Open 5 GBT Chests",types:["dungeon","gbt","gsht","gistt"]},{
name:"Destroy 15 SHT Ice Blocks",types:["sht","elemental","gsht"]},{
name:"3 Temple Maps and Compasses",types:["mc"]}];
bingoList[23]=[{
name:"Gyorg's Remains",types:["dungeon","gbt","remains","gsht","gistt"]},{
name:"Elegy of Emptiness",types:["song","mirror","castle"]},{
name:"Double Magic",types:["sht","lens"]},{
name:"Gold Dust",types:["dungeon","sht","remains","bottle","gsht"]},{
name:"3 Boss Keys",types:["bosskey"]}];
bingoList[24]=[{
name:"Change GBT Water Direction",types:["dungeon","gbt","gsht","gistt"]},{
name:"8 Hearts (no dupe)",types:["heart"]},{
name:"Cremia's Reward(hug or 200 rupees)",types:["ranch","0thday"]},{
name:"2 Temple Maps, Compasses, and Boss Keys",types:["mc","bosskey"]}];
bingoList[25]=[{
name:"Ice Arrow",types:["dungeon","elemental","gbt","gsht","gistt"]},{
name:"Gilded Sword",types:["dungeon","sword","sht","remains"]},{
name:"30 Total Stray Fairies",types:["dungeon","fairy"]},{
name:"2 Great Fairy Rewards",types:["gfairy"]},{
name:"Great Fairy's Sword",types:["gfs","gfairy","gbt"]}];

