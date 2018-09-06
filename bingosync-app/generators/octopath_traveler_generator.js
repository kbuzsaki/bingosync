// What even is this magic?
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
  var MODE = opts.mode || 'normal';
  var cardType = 'Normal';
  var SEED = opts.seed || Math.ceil(999999 * Math.random()).toString();
  var size = 5;

  // octopath generator by @CAD97
  Math.seedrandom(SEED);

  function shuffle(list) {
    for (var i = list.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = list[i];
      list[i] = list[j];
      list[j] = tmp;
    }
    return list;
  }
  function transpose(matrix) {
    for (var i = 0; i < matrix.length; i++) {
      for (var j = 0; j < i; j++) {
        var tmp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = tmp;
      }
    }
    return matrix;
  }
  function horizontalMirror(matrix) {
    for (var i = 0; i < matrix.length; i++) {
      matrix[i] = matrix[i].reverse();
    }
    return matrix;
  }
  function verticalMirror(matrix) {
    return matrix.reverse();
  }
  function coinFlip() {
    return Math.random() < 0.5;
  }
  function randomPop(arr) {
    var i = Math.floor(Math.random() * arr.length);
    var ret = arr[i];
    arr.splice(i, 1);
    return ret;
  }

  var boardLayout = [
    [0, 2, 4, 6, 7],
    [1, 3, 2, 5, 4],
    [3, 4, 1, 2, 6],
    [5, 6, 3, 7, 0],
    [2, 1, 7, 0, 5]
  ];
  if (coinFlip()) boardLayout = transpose(boardLayout);
  if (coinFlip()) boardLayout = horizontalMirror(boardLayout);
  if (coinFlip()) boardLayout = verticalMirror(boardLayout);
  bingoList = shuffle(bingoList);

  // SRL generators use board[1]-board[25] and put an empty value
  // in board[0], so start with a filler undefined.
  var board = [undefined];
  for (var i = 0; i < boardLayout.length; i++) {
      var row = boardLayout[i];
      for (var j = 0; j < row.length; j++) {
          var idx = row[j];
          board.push(randomPop(bingoList[idx]));
      }
  }
  return board;
}

var bingoList = [];
bingoList[0] = [
	{ "name": "Ophilia" },
	{ "name": "Ophilia - Sheltering Veil" },
	{ "name": "Ophilia - Luminescence" },
	{ "name": "Ophilia - Heal More" },
	{ "name": "Ophilia - Reflective Veil" },
	{ "name": "Ophilia - Revive" }
];
bingoList[1] = [
	{ "name": "Cyrus" },
	{ "name": "Cyrus - Lightning Bolt" },
	{ "name": "Cyrus - Analyze" },
	{ "name": "Cyrus - Fire Storm" },
	{ "name": "Cyrus - Blizzard" },
	{ "name": "Cyrus - Lightning Blast" }
];
bingoList[2] = [
	{ "name": "Tressa" },
	{ "name": "Tressa - Rest" },
	{ "name": "Tressa - Trade Tempest" },
	{ "name": "Tressa - Donate BP" },
	{ "name": "Tressa - Sidestep" },
	{ "name": "Tressa - Hired Help" }
];
bingoList[3] = [
	{ "name": "Olberic" },
	{ "name": "Olberic - Spearhead" },
	{ "name": "Olberic - Incite" },
	{ "name": "Olberic - Cross Strike" },
	{ "name": "Olberic - Stout Wall" },
	{ "name": "Olberic - Thousand Spears" }
];
bingoList[4] = [
	{ "name": "Primrose" },
	{ "name": "Primrose - Peacock Strut" },
	{ "name": "Primrose - Mole Dance" },
	{ "name": "Primrose - Night Ode" },
	{ "name": "Primrose - Panther Dance" },
	{ "name": "Primrose - Bewildering Grace" }
];
bingoList[5] = [
	{ "name": "Alfyn" },
	{ "name": "Alfyn - Rehabilitate" },
	{ "name": "Alfyn - Amputation" },
	{ "name": "Alfyn - Empoison" },
	{ "name": "Alfyn - Vivify" },
	{ "name": "Alfyn - Last Stand" }
];
bingoList[6] = [
	{ "name": "Therion" },
	{ "name": "Therion - HP Thief" },
	{ "name": "Therion - Shackle Foe" },
	{ "name": "Therion - Armor Corrosive" },
	{ "name": "Therion - Steal SP" },
	{ "name": "Therion - Share SP" }
];
bingoList[7] = [
	{ "name": "H'aanit" },
	{ "name": "H'aanit - Thunderbird" },
	{ "name": "H'aanit - Leghold Trap" },
	{ "name": "H'aanit - Mercy Strike" },
	{ "name": "H'aanit - Arrowstorm" },
	{ "name": "H'aanit - Take Aim" }
];
