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

    // simpler generator that just does a random choice without duplicates
    Math.seedrandom(SEED);
    if (true) {
        var usedGoals = {};
        var bingoBoard = [];

        for (var i = 1; i <= 25; i++) {
            var randIndex = Math.floor(Math.random() * bingoList.length);
            while (usedGoals[randIndex]) {
                randIndex = Math.floor(Math.random() * bingoList.length);
            }
            usedGoals[randIndex] = true;

            var goal = bingoList[randIndex];
            bingoBoard[i] = {"name": goal};
        }

        return bingoBoard;
    }
};

var bingoList = [
    "1-Stage Master (Cycling)",
    "100 Pointer (Return Challenge)",
    "200 Point Dive (Skydiving)",
    "200 Pointer (Return Challenge)",
    "3-Stage Master (Cycling)",
    "50 Pointer (Return Challenge)",
    "5000-Pointer (Power Cruising)",
    "6-Stage Maste (Cycling)",
    "A Cut Above (Speed Slice)",
    "A Secret to Everybody (Archery)",
    "A for Effort (Frisbee Dog)",
    "Ace of Clubs (Golf)",
    "Back From the Brink (TT Match)",
    "Bag of Tricks (Wakeboarding)",
    "Balloon Animal (Frisbee Dog)",
    "Balloonatic (Island Flyover)",
    "Beginner Licence (Canoeing)",
    "Bonus Plumber (3-Point Contest)",
    "Bull Stampede (Archery)",
    "Buzzer Beater (Pickup Game)",
    "Camera Shy (Skydiving)",
    "Century Shot (Archery)",
    "Chip It In (Golf)",
    "Cliff-Hanger (Duel)",
    "Cut the Red Tape (Canoeing)",
    "Double Time (Speed Slice)",
    "Ducks in a Row (Canoeing)",
    "English Major (Spin Control)",
    "Epic Rally (TT Match)",
    "Expert Licence (Canoeing)",
    "First of Many (Cycling)",
    "Follow That Plane (Island Flyover)",
    "For the Birds (Skydiving)",
    "Friends in High Places (Skydiving)",
    "Gobble Gobble (Bowling)",
    "Golden Arm (Frisbee Dog)",
    "Good Dog (Frisbee Dog)",
    "Head First (Spin Control)",
    "High Five (Skydiving)",
    "Hole In One (Frisbee Golf)",
    "Hole-In-One (Golf)",
    "Hoop Hero (Pickup Game)",
    "Hot Hand (3-Point Contest)",
    "Hot Streak (3-Point Contest)",
    "Huge Air (Wakeboarding)",
    "In Your Face (TT Match)",
    "Intermediate Licence (Canoeing)",
    "Island Hopper (Island Flyover)",
    "King of Clubs (Golf)",
    "Last Gasp (Cycling)",
    "Last Mii Standing (Duel)",
    "Leisure Cruiser (Power Cruising)",
    "Lights Out (Pickup Game)",
    "Lucky Skip (Frisbee Golf)",
    "Master Carver (Wakeboarding)",
    "Met Your Match (Duel)",
    "Not a Scratch (Showdown)",
    "Off the Wall (100-Pin Game)",
    "On a Roll (Frisbee Golf)",
    "One for All (Spin Control)",
    "One-Hit Wonder (Duel)",
    "Perfect 10 (Showdown)",
    "Perfect Game (Bowling)",
    "Perfect Target (Frisbee Dog)",
    "Perfectly Matched (TT Match)",
    "Pin Dropper (100-Pin Game)",
    "Pin Dropper (Bowling)",
    "Pin Dropper (Spin Control)",
    "Pop Frenzy (Island Flyover)",
    "Power Cruiser (Power Cruising)",
    "Power Jumper (Power Cruising)",
    "Pro Bowler (Bowling)",
    "Psychic Slice (Speed Slice)",
    "Pure Shooter (3-Point Contest)",
    "Quick Draw (3-Point Contest)",
    "Recycler (Return Challenge)",
    "Rim Rattler (Pickup Game)",
    "Ringmaster (Power Cruising)",
    "Save Face (Return Challenge)",
    "Secret Strike (100-Pin Game)",
    "Sharpshooter (Archery)",
    "Slice and Dice (Speed Slice)",
    "Slicing Machine (Speed Slice)",
    "Smooth Landing (Wakeboarding)",
    "Split Spare (100-Pin Game)",
    "Split Spare (Bowling)",
    "Split Spare (Spin Control)",
    "Straight and Narrow (Frisbee Golf)",
    "Straight to the Point (Duel)",
    "Super Strike (100-Pin Game)",
    "Sure Shot (Archery)",
    "Sword Fighter (Showdown)",
    "Swordmaster (Showdown)",
    "Table Titan (TT Match)",
    "The Long Way Home (Wakeboarding)",
    "Triple Dip (Pickup Game)",
    "Under Par (Frisbee Golf)",
    "Under Par (Golf)",
    "Untouchable (Showdown)",
    "Wuhu Tour Gide (Island Flyover)"
];
