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
	'Good Egg 1: Activate all the Flipswitch Panels and then get the Power Star',
	'Good Egg 1: Collect at least 100 Star Bits (without dying) and then get the Power Star',
	'Good Egg 2: Get the Power Star without doing any Long Jumps',
	'Good Egg 2: Use at least nine Launch Stars and then get the Power Star',
	'Good Egg 3: Collect the Life Mushroom and then get the Power Star',
	'Good Egg 3: Defeat at least two Chain Chomps with the Rainbow Star and then get the Power Star',
	'Good Egg Comet: Get the Power Star without taking any damage',
	'Good Egg Comet: Collect at least 120 Star Bits (without dying) and then get the Power Star',
	'Good Egg Purple: Destroy all the Boulders and then get the Power Star',
	'Good Egg Purple: Get the Power Star without collecting any Star Bits',
	'Good Egg Luigi: Collect at least 40 Star Bits (without dying) and then get the Power Star',
	'Good Egg Luigi: Enter at least two orange Warp Pipes and then get the Power Star',
	'Honeyhive 1: Get at least three different Bee Mushrooms and then get the Power Star',
	'Honeyhive 1: Collect at least 100 Star Bits (without dying) and then get the Power Star',
	'Honeyhive 2: Collect the Life Mushroom and then get the Power Star',
	'Honeyhive 2: Defeat at least 5 enemies with the Rainbow Star and then get the Power Star',
	'Honeyhive 3: Defeat at least seven Mandibugs and then get the Power Star',
	'Honeyhive 3: Collect the Life Mushroom and get the Power Star without taking any damage',
	'Honeyhive Comet: Collect at least 30 Star Bits (without dying) and then get the Power Star',
	'Honeyhive Comet: Collect at least 3 Coins and then get the Power Star',
	'Honeyhive Purple: Get the Power Star without collecting any 1-Up Mushrooms',
	'Honeyhive Purple: Collect at least 50 Star Bits (without dying) and then get the Power Star',
	'Honeyhive Luigi: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Honeyhive Luigi: Get the Power Star as Bee Mario/Luigi',
	'Loopdeeloop: Collect the 1-Up Mushroom and then get the Power Star',
	'Loopdeeloop: Collect at least 45 Coins and get the Power Star without dying',
	'Flipswitch: Collect all 2 Coins and then get the Power Star',
	'Flipswitch: Get the Power Star without taking any damage',
	'Bowser Jr. 1: Collect at least 25 Star Bits (without dying) and then get the Grand Star',
	'Bowser Jr. 1: Destroy at least three Glass Cages and then get the Grand Star',
	'Sweet Sweet: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Sweet Sweet: Get the Power Star without collecting any Coins',
	'Space Junk 1: Get the Power Star without taking any damage',
	'Space Junk 1: Defeat at least five Scuttlebugs and then get the Power Star',
	'Space Junk 2: Collect at least 85 Star Bits (without dying) and then get the Power Star',
	'Space Junk 2: Hit Kamella with a red Koopa Shell and get the Power Star without taking any damage',
	'Space Junk 3: Get the Power Star without taking any damage',
	'Space Junk 3: Collect at least 75 Star Bits (without dying) and then get the Power Star',
	'Space Junk Comet: Defeat at least five enemies and then get the Power Star',
	'Space Junk Comet: Collect at least 30 Coins and then get the Power Star',
	'Space Junk Purple: Get the Power Star without stepping on any blue Cosmic Platforms',
	'Space Junk Purple: Get the Power Star without doing any Long Jumps',
	'Space Junk Secret: Get the Power Star without taking any damage',
	'Space Junk Secret: Get a Goomba-Chain of 4 or more and then get the Power Star',
	'Rolling Green: Collect at least 15 Coins and then get the Power Star',
	'Rolling Green: Collect at least 75 Star Bits (without dying) and then get the Power Star',
	'Battlerock 1: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Battlerock 1: Get the Power Star without taking any damage',
	'Battlerock 2: Collect at least two 1-Up Mushrooms and then get the Power Star',
	'Battlerock 2: Collect at least 125 Star Bits (without dying) and then get the Power Star',
	'Battlerock 3: Get the Power Star without taking any damage',
	'Battlerock 3: Collect at least two Life Mushrooms and then get the Power Star',
	'Battlerock Comet: Collect at least 30 Star Bits (without dying) and then get the Power Star',
	'Battlerock Comet: Get the Power Star without defeating any Topmen',
	'Battlerock Purple: Get the Power Star without collecting any 1-Up Mushrooms',
	'Battlerock Purple: Get the Power Star without taking any damage',
	'Battlerock Secret: Collect all 5 Coins on the Trash Planet and then get the Power Star',
	'Battlerock Secret: Defeat all six Chain Chomps with the Rainbow Star and then get the Power Star',
	'Battlerock Luigi: Get the Power Star without taking any damage',
	'Battlerock Luigi: Collect at least 80 Star Bits (without dying) and then get the Power Star',
	'Hurry-Scurry: Step on all of the green Shrinking Tiles and then get the Power Star',
	'Hurry-Scurry: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Bowser 1: Collect at least one 1-Up Mushroom and then get the Grand Star',
	'Bowser 1: Get the Grand Star without taking any damage',
	'Sling Pod: Collect at least 100 Star Bits (without dying) and then get the Power Star',
	'Sling Pod: Collect at least two 1-Up Mushrooms and then get the Power Star',
	'Beach Bowl 1: Use at least one Launch Star and then get the Power Star',
	'Beach Bowl 1: Collect at least two 1-Up Mushrooms and then get the Power Star',
	'Beach Bowl 2: Enter at least one green Warp Pipe and then get the Power Star',
	'Beach Bowl 2: Open at least two Treasure Chests and then get the Power Star',
	'Beach Bowl 3: Collect at least 75 Star Bits (without dying) and then get the Power Star',
	'Beach Bowl 3: Collect at least three 1-Up Mushrooms and then get the Power Star',
	'Beach Bowl Comet: Get the Power Star without collecting any Star Bits',
	'Beach Bowl Comet: Get the Power Star without doing any Long Jumps',
	'Beach Bowl Purple: Collect at least 10 Purple Coins with the Spring Mushroom and then get the Power Star',
	'Beach Bowl Purple: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Beach Bowl Secret: Defeat a Prickly Piranha Plant and then get the Power Star',
	'Beach Bowl Secret: Get the Power Star without doing any Triple Jumps',
	'Bubble Breeze: Get the Power Star without doing any Backflips, Sideflips or Triple Jumps',
	'Bubble Breeze: Collect at least 75 Coins and then get the Power Star',
	'Ghostly 1: Get at least two different Boo Mushrooms and then get the Power Star',
	'Ghostly 1: Collect at least 40 Coins and then get the Power Star',
	'Ghostly 2: Use at least one Launch Star with the Rainbow Star and then get the Power Star without dying',
	'Ghostly 2: Get the Power Star without using any Sling Stars',
	'Ghostly 3: Get the Power Star without taking any damage',
	'Ghostly 3: Collect at least 120 Star Bits (without dying) and then get the Power Star',
	'Ghostly Comet: Collect at least 25 Star Bits (without dying) and then get the Power Star',
	'Ghostly Comet: Get the Power Star without collecting any Star Bits',
	'Ghostly Purple: Collect at least 110 Purple Coins and then get the Power Star',
	'Ghostly Purple: Get the Power Star without collecting any Life Mushrooms',
	'Ghostly Secret: Defeat at least one Boo with the Rainbow Star and then get the Power Star',
	'Ghostly Secret: Collect at least two ?-Coins and then get the Power Star',
	'Buoy Base 1: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Buoy Base 1: Use at least three Sling Stars and then get the Power Star',
	'Buoy Base Secret: Get the Power Star without taking any damage',
	'Buoy Base Secret: Collect at least 15 Coins and then get the Power Star',
	'Bowser Jr. 2: Defeat at least five Goombas and then get the Grand Star',
	'Bowser Jr. 2: Collect at least three 1-Up Mushrooms and then get the Grand Star',
	'Drip Drop: Get the Power Star without using any red Koopa Shells',
	'Drip Drop: Get the Power Star without using any green Koopa Shells',
	'Gusty Garden 1: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Gusty Garden 1: Collect at least 150 Star Bits (without dying) and then get the Power Star',
	'Gusty Garden 2: Collect at least 200 Star Bits (without dying) and then get the Power Star',
	'Gusty Garden 2: Collect the Life Mushroom and get the Power Star without taking any damage',
	'Gusty Garden 3: Use at least two Launch Stars with the Rainbow Star and then get the Power Star',
	'Gusty Garden 3: Collect at least 25 Coins and then get the Power Star',
	'Gusty Garden Comet: Collect at least 20 Star Bits (without dying) and then get the Power Star',
	'Gusty Garden Comet: Destroy at least two Item Crystals and then get the Power Star',
	'Gusty Garden Purple: Defeat at least five Goombas and then get the Power Star',
	'Gusty Garden Purple: Collect at least 120 Purple Coins and then get the Power Star',
	'Gusty Garden Secret: Destroy at least five Boulders with the Rainbow Star and then get the Power Star',
	'Gusty Garden Secret: Get the Power Star without destroying any Thorny Flowers',
	'Freezeflame 1: Collect at least 80 Coins and then get the Power Star',
	'Freezeflame 1: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Freezeflame 2: Get the Power Star without taking any damage',
	'Freezeflame 2: Collect the Life Mushroom and then get the Power Star',
	'Freezeflame 3: Use 2 or fewer Ice Flowers to reach the Power Star',
	'Freezeflame 3: Collect the Life Mushroom and then get the Power Star',
	'Freezeflame Comet: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Freezeflame Comet: Get the Power Star without doing any Long Jumps',
	'Freezeflame Purple: Collect at least 85 Coins and then get the Power Star',
	'Freezeflame Purple: Get the Power Star without collecting any Coins',
	'Freezeflame Secret: Destroy all four Snowmen with the Fire Flower and then get the Power Star',
	'Freezeflame Secret: Collect at least 1-Up Mushroom as Fire Mario/Luigi and then get the Power Star',
	'Dusty Dune 1: Collect at least 125 Star Bits (without dying) and then get the Power Star',
	'Dusty Dune 1: Collect at least two 1-Up Mushrooms and then get the Power Star',
	'Dusty Dune 2: Get the Power Star without entering any Warp Pipes',
	'Dusty Dune 2: Get the Power Star without touching any Tweesters',
	'Dusty Dune 3: Collect at least three 1-Up Mushrooms and get the Power Star without taking any damage',
	'Dusty Dune 3: Collect at least 50 Star Bits (without dying) and then get the Power Star',
	'Dusty Dune Comet: Collect at least 70 Star Bits (without dying) and then get the Power Star',
	'Dusty Dune Comet: Get the Power Star without entering any Warp Pipes',
	'Dusty Dune Purple: Do at least 15 Ground-Pounds on top of a Thwomp and then get the Power Star',
	'Dusty Dune Purple: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Dusty Dune Secret: Defeat at least 15 Dry Bones with the Rainbow Star and then get the Power Star',
	'Dusty Dune Secret: Collect the Life Mushroom and get the Power Star without taking any damage',
	'Dusty Dune Green: Collect at least 40 Coins and then get the Power Star',
	'Dusty Dune Green: Collect at least 40 Star Bits (without dying) and then get the Power Star',
	'Honeyclimb: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Honeyclimb: Collect at least 175 Star Bits (without dying) and get the Power Star without taking any damage',
	'Bowser 2: Get the Grand Star without doing any Long Jumps',
	'Bowser 2: Collect at least one 1-Up Mushroom and then get the Grand Star',
	'Bigmouth: Use at least one Sling Star and then get the Power Star',
	'Bigmouth: Defeat at least 12 Boos with a gold Koopa Shell and then get the Power Star',
	'Gold Leaf 1: Use at least two Sling Stars and then get the Power Star',
	'Gold Leaf 1: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Gold Leaf 2: Collect at least 150 Star Bits (without dying) and then get the Power Star',
	'Gold Leaf 2: Collect a Rainbow Star and then get the Power Star',
	'Gold Leaf 3: Get the Power Star as Bee Mario/Luigi',
	'Gold Leaf 3: Get the Power Star without taking any damage',
	'Gold Leaf Comet: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Gold Leaf Comet: Use at least one Sling Star and then get the Power Star',
	'Gold Leaf Purple: Get the Power Star without collecting any Star Bits',
	'Gold Leaf Purple: Collect at least 15 Star Bits (without dying) and then get the Power Star',
	'Gold Leaf Secret: Collect a 1-Up Mushroom while inside a Bubble and then get the Power Star',
	'Gold Leaf Secret: Get the Power Star without using any Cataquacks',
	'Sea Slide 1: Get the Power Star without using any Koopa Shells',
	'Sea Slide 1: Get the Power Star without collecting any Star Bits',
	'Sea Slide 2: Get the Power Star without using any Boost Rings',
	'Sea Slide 2: Get the Power Star without collecting any Coins',
	'Sea Slide 3: Collect at least two 1-Up Mushrooms on the Central Island and then get the Power Star',
	'Sea Slide 3: Get the Power Star without using any Sling Stars',
	'Sea Slide Comet: Get the Power Star while holding a Koopa Shell',
	'Sea Slide Comet: Get the Power Star without using any Koopa Shells',
	'Sea Slide Purple: Collect at least 75 Star Bits (without dying) and then get the Power Star',
	'Sea Slide Purple: Collect at least three different Bee Mushrooms and then get the Power Star',
	'Sea Slide Secret: Get the Power Star as Bee Mario/Luigi',
	'Sea Slide Secret: Collect at least 45 Star Bits (without dying) and then get the Power Star',
	'Toy Time 1: Get the Power Star without transforming into Spring Mario/Luigi',
	'Toy Time 1: Get the Power Star without taking any damage',
	'Toy Time 2: Step on at least 50 green Shrinking Tiles and then get the Power Star',
	'Toy Time 2: Get the Power Star without taking any damage',
	'Toy Time 3: Collect at least 175 Star Bits (without dying) and then get the Power Star',
	'Toy Time 3: Collect at least one Life Mushroom and get the Power Star without taking any damage',
	'Toy Time Comet: Get the Power Star without taking any damage',
	'Toy Time Comet: Enter at least one Warp Pipe and then get the Power Star',
	'Toy Time Purple: Collect at least 130 Purple Coins and then get the Power Star',
	'Toy Time Purple: Step on at least 70 green Shrinking Tiles and then get the Power Star',
	'Toy Time Secret: Collect at least 70 Star Bits (without dying) and then get the Power Star',
	'Toy Time Secret: Do a Ground-Pound on all three Spiked Platforms and then get the Power Star',
	'Bonefin: Get the Power Star without taking any damage',
	'Bonefin: Collect the Life Mushroom and then get the Power Star',
	'Bowser Jr. 3: Get the Grand Star without taking any damage',
	'Bowser Jr. 3: Collect the Life Mushroom and get the Grand Star without taking any damage',
	'Sand Spiral: Get the Power Star without using more than one Sling Star',
	'Sand Spiral: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Deep Dark 1: Collect at least 125 Star Bits (without dying) and then get the Power Star',
	'Deep Dark 1: Defeat at least 15 Octoombas with the Rainbow Star and then get the Power Star',
	'Deep Dark 2: Enter at least one Warp Pipe and then get the Power Star',
	'Deep Dark 2: Get the Power Star without defeating any Undergrunt Gunners',
	'Deep Dark 3: Defeat at least one Gringill and then get the Power Star',
	'Deep Dark 3: Get the Power Star without using any Koopa Shells',
	'Deep Dark Comet: Collect at least one ?-Coin and then get the Power Star',
	'Deep Dark Comet: Get the Power Star without collecting any Star Bits',
	'Deep Dark Purple: Collect at least five Coins and then get the Power Star',
	'Deep Dark Purple: Collect at least 20 Star Bits (without dying) and then get the Power Star',
	'Deep Dark Secret: Use a Gravity-Change Arrow at least once and then get the Power Star',
	'Deep Dark Secret: Get the Power Star without taking any damage',
	'Dreadnought 1: Get the Power Star without taking any damage',
	'Dreadnought 1: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Dreadnought 2: Collect a 1-Up Mushroom while standing on a Thwomp and then get the Power Star',
	'Dreadnought 2: Collect at least 30 Star Bits (without dying) and then get the Power Star',
	'Dreadnought 3: Collect at least three Life Mushrooms and then get the Power Star',
	'Dreadnought 3: Open at least one Treasure Chest and then get the Power Star',
	'Dreadnought Comet: Open at least two Treasure Chests and get the Power Star without taking any damage',
	'Dreadnought Comet: Defeat at least five Topmen and then get the Power Star',
	'Dreadnought Purple: Get the Power Star without taking any damage',
	'Dreadnought Purple: Do at least 10 Ground-Pounds on top of a Thwomp and then get the Power Star',
	'Dreadnought Secret: Collect at least 3 Coins and then get the Power Star',
	'Dreadnought Secret: Bounce on at least one green Topman and then get the Power Star',
	'Matter Splatter: Collect at least two 1-Up Mushrooms and then get the Power Star',
	'Matter Splatter: Collect at least 100 Star Bits (without dying) and then get the Power Star',
	'Melty Molten 1: Collect at least 120 Star Bits (without dying) and then get the Power Star',
	'Melty Molten 1: Collect at least 10 Coins and then get the Power Star',
	'Melty Molten 2: Collect at least two 1-Up Mushrooms and then get the Power Star',
	'Melty Molten 2: Collect the Life Mushroom the and get the Power Star',
	'Melty Molten 3: Collect at least 150 Star Bits (without dying) and then get the Power Star',
	'Melty Molten 3: Collect the Life Mushroom and then get the Power Star',
	'Melty Molten Comet: Collect at least 130 Star Bits (without dying) and then get the Power Star',
	"Melty Molten Comet: Defeat at least five Li'l Cinders and then get the Power Star",
	'Melty Molten Purple: Get the Power Star without taking any damage',
	'Melty Molten Purple: Collect both the Life Mushroom and the 1-Up Mushroom and then get the Power Star',
	'Melty Molten Secret: Collect the Life Mushroom and get the Power Star without taking any damage',
	'Melty Molten Secret: Collect at least 100 Star Bits (without dying) and then get the Power Star',
	'Bowser 3: Collect at least five 1-Up Mushrooms and then defeat Bowser',
	'Bowser 3: Collect at least 50 Star Bits (without dying) and then defeat Bowser',
	'Snow Cap: Get the Power Star without pressing the Jump Button',
	'Snow Cap: Collect at least 20 Star Bits (without dying) and then get the Power Star',
	'Bubble Blast: Collect at least 100 Star Bits (without dying) and then get the Power Star',
	'Bubble Blast: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Rolling Gizmo: Collect at least 50 Coins and then get the Power Star',
	'Rolling Gizmo: Get the Power Star without collecting any 1-Up Mushrooms',
	'Loopdeeswoop: Collect at least 100 Star Bits (without dying) and then get the Power Star',
	'Loopdeeswoop: Collect at least one 1-Up Mushroom and then get the Power Star',
	'Gateway 1: Get the Grand Star without taking any damage',
	'Gateway 1: Defeat at least five enemies and then get the Grand Star',
	'Gateway Purple: Collect at least 10 Star Bits (without dying) and then get the Power Star',
	'Gateway Purple: Collect at least 10 Coins and then get the Power Star',
	"Boo's Boneyard: Collect all four ?-Coins and then get the Power Star",
	"Boo's Boneyard: Collect at least one 1-Up Mushroom and then get the Power Star",
	'Grand Finale: Collect at least 3 Coins and then get the Power Star',
	'Grand Finale: Collect at least 10 Star Bits (without dying) and then get the Power Star',
	'Collect six 1-Up Mushrooms',
	'Collect eight 1-Up Mushrooms',
	'Collect ten 1-Up Mushrooms',
	'Collect twelve 1-Up Mushrooms',
	'Get 10 Power Stars',
	'Get 15 Power Stars',
	'Get 20 Power Stars',
	'Get 25 Power Stars',
	'Get two Power Stars from Luigi',
	'Get three Power Stars from Luigi',
	'Get four Power Stars from Luigi',
	'Get at least six Power Stars in any Dome',
	'Get at least seven Power Stars in any Dome',
	'Get at least eight Power Stars in any Dome',
	'Get at least nine Power Stars in any Dome',
	'Get at least seven Secret Power Stars',
	'Get at least eight Secret Power Stars',
	'Get at least nine Secret Power Stars',
	'Get at least ten Secret Power Stars',
	'Get at least eleven Secret Power Stars',
	'Get 15 Lives',
	'Get 20 Lives',
	'Get 25 Lives',
	'Get five Power Stars from five different Bosses',
	'Get six Power Stars from six different Bosses',
	'Get seven Power Stars from seven different Bosses',
	'Get eight Power Stars from eight different Bosses',
	'Get nine Power Stars from nine different Bosses',
	'Get ten Power Stars from ten different Bosses',
	'Get three Power Stars from one Galaxy',
	'Get four Power Stars from one Galaxy',
	'Get five Power Stars from one Galaxy',
	'Get six Power Stars from one Galaxy',
	'Collect three 1-Up Mushrooms in the Comet Observatory',
	'Collect four 1-Up Mushrooms in the Comet Observatory',
	'Collect five 1-Up Mushrooms in the Comet Observatory',
	'Get two Green Power Stars',
	'Get three Green Power Stars',
	'Complete at least two Trial Galaxies (excluding Grand Finale)',
	'Complete all three Trial Galaxies (excluding Grand Finale)',
	'Get all six Power Stars in Good Egg Galaxy',
	'Get all six Power Stars in Honeyhive Galaxy',
	'Get all six Power Stars in Space Junk Galaxy',
	'Get all seven Power Stars in Battlerock Galaxy',
	'Get all six Power Stars in Beach Bowl Galaxy',
	'Get all six Power Stars in Ghostly Galaxy',
	'Get all six Power Stars in Gusty Garden Galaxy',
	'Get all six Power Stars in Freezeflame Galaxy',
	'Get all seven Power Stars in Dusty Dune Galaxy',
	'Get all six Power Stars in Gold Leaf Galaxy',
	'Get all six Power Stars in Sea Slide Galaxy',
	'Get all six Power Stars in Toy Time Galaxy',
	'Get all six Power Stars in Deep Dark Galaxy',
	'Get all six Power Stars in Dreadnought Galaxy',
	'Get all six Power Stars in Melty Molten Galaxy',
	'Get at least two Grand Stars',
	'Get at least three Grand Stars',
	'Get at least four Grand Stars'
];
