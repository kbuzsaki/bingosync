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
var bingoList = [];

bingoList[1] = [
{ name: "Clear the EAST CHIMNEY Deja Vu"},
{ name: "Clear the EAST CHIMNEY normal"},
{ name: "Clear the West and East Chimney Deja Vu"},
{ name: "Clear the West and East Chimney normal"},
{name: "Clear the West and East Chimney normal and Deja Vu"},
{name: "Clear the WEST CHIMNEY Deja Vu"},
{name: "Clear the WEST CHIMNEY normal"}
];
bingoList[2] = [
{ name: "Dont kill an Optional Boss"},
{ name: "Dont kill the Centipedes"},
{ name: "Dont kill the Rave"},
{ name: "Dont kill the Snowman"},
{ name: "Kill the Centipedes"},
{ name: "Kill the Centipedes and damage only one of them"},
{ name: "Kill the Rave"},
{ name: "Kill the Rave by holding the shield"},
{ name: "Kill the Snowman"},
{ name: "Kill the Snowman with the golfball"}
];
bingoList[3] = [
{ name: "Kill the Dragon"},
{ name: "Kill the Dragon by not touching the middle or right platform"},
{ name: "Kill the Goblin"},
{ name: "Kill the Goblin with the Sword"},
{ name: "Kill the Wacky Scientist"},
{ name: "Kill the Wacky Scientist with the Golfball"},
{ name: "Kill the Witch"},
{ name: "Kill the Witch with the Sword"}
];
bingoList[4] = [
{ name: "Get 5 different Fezicopter"},
{ name: "Get 5 different Golfballs"},
{ name: "Get 5 different Swords"}
];
bingoList[5] = [
{ name: "Get 100000 Points"},
{ name: "Get 125000 Points"},
{ name: "Get 250000 Points"},
{ name: "Get 50000 Points"},
{ name: "Get 75000 Points"},
];
bingoList[6] = [
{ name: "Read 10 Textboxes"},
{ name: "Read 3 Textboxes"},
{ name: "Read 5 Textboxes"},
{ name: "Read 7 Textboxes"}
];
bingoList[7] = [
{ name: "Save Pugsley without using the scert door or the Toy Tower Shortcuts"},
{ name: "Save Pugsley without using the Secret Door"},
{ name: "Save Pugsley without using THE TOY TOWER secret robes"},
{ name: "Clear PUGSLEYS PIPE"},
{ name: "Visit every Room in the Toy Tower World"}
];
bingoList[8] = [
{ name: "Kill the Judge"},
{ name: "Kill the Judge with the Sword"},
{ name: " Danger Zone Judge"}
],
bingoList[9] = [
{ name: "Clear THE 1UP ROOM"},
{ name: "Clear JESTER JUWELS"},
{ name: "Complete THE PIRANHA TANK without taking or dealing damage"}
];
bingoList[10] = [
{ name: "Clear THE COLD CASH"},
{ name: "Clear THE TROPHY ROOM"},
{ name: "Complete THE GONDOLA without touching the water"}
];
bingoList[11] = [
{ name: "Clear POISON IVY by starting from the bottom"},
{ name: "Clear THE MONEY SPIDER by starting from the bottom"},
{ name: "Complete the Conservatory without  using the hidden door under the entrance"}
];
bingoList[12] = [
{ name: "Clear ROLLING STONES"},
{ name: "Clear the Water Sectioon in THE MINE SHAFT"},
{ name: "Clear GOLFERs PRIZE"}
];
bingoList[13] = [
{ name: "Complete THE GONDOLA without touching the water"},
{ name: "Complete the PORTRAIT GALLERY and dont go into THE DARK ROOM"},
{ name: "Complete JESTERs JUMP from the right side"}
];
bingoList[14] = [
{ name: "COMPLETE THE DARK ROOM by taking the leftmost door"},
{ name: "Complete THE BIG PIT"},
{ name: "Clear THE CLOSET"}
];
bingoList [15] = [
{ name: "Complete the READING ROOM without using the Fezicopter"},
{ name: "Clear THE COOKIE JAR"},
{ name: "Clear THE MONEY FUNNEL"}
];
bingoList[16] = [
{ name: "Save Fester and Pugsley"},
{ name: "Save Wednesday and Eudora"}
];
bingoList[17] = [
{ name: "Furnace Clip"},
{ name: "Lurch Door Skip"}
];
bingoList[18] = [
{ name: "Tiny JJ Skip"},
{ name: "Do a Cutscene Skip "},
{ name: "No Select to Quit"},
{ name: "Judge Softlock"}
];
bingoList[19] = [
{ name: "Hit the switch in THE CONSEVATORY from the left side"},
{ name: "Fall down in AMAZING CHAINS  leave and reenter and climb up again"},
{ name: "Dont kill a single Fly in the Gallery World"}
];
bingoList[20] = [
{ name: "Reach the Boss Door in WORMY WAY by using only ropes"},
{ name: "Use the left Door in THE PIRANHA TANK"},
{ name: "Get the hidden 1UP in UNDER GRAVEYARD"}
];
bingoList[21] = [
{ name: "Visit every Room in the Furnace World"},
{ name: "Get all Money at the top of THE CRAZY CRYPT"},
{ name: "Get all 1UPs in SUNKEN STAIRS"}
];
bingoList[22] = [
{ name: "Go 3 times through walls"},
{ name: "Every digit of your score has to be the same except for the last one and score has to be at least 10000"},
{ name: "Get all 1UPs in MONSTER GARDEN"}
];
bingoList[23] = [
{ name: "Kill the Trains Nose"},
{ name: "Get the three 1UPs in UNDER THE TREE"},
{ name: " Get all 1UPs in the CRYPTIC CLIMB"}
];
bingoList[24] = [
{ name: "Get to the secret Spot in the CHAMBER OF WALLS"},
{ name: "Reach the secret door in the THORN PASS by hitting the switch"},
{ name: "Get the Heart at the Bubble Race Part at THE FIRING FISH"}
];
bingoList[25] = [
{ name: "Get five 1UPs by collecting money"},
{ name: "Get 5 different Shields"},
{ name: "Get 5 different Single Spot 1UPs"},
{ name: "Get 5 different Single Spot Hearts"}
];

