// board types, set in opts.boardtype
var OOTRANDO_BOARDTYPE_ROWCOL   = 0;
var OOTRANDO_BOARDTYPE_BLACKOUT = 1;
var OOTRANDO_BOARDTYPE_RANDOM   = 2;
// any bigger than this breaks the randomization
var OOTRANDO_MAX_SEED_SIZE = 2147483646;

// list based on v9, https://pastebin.com/raw/RGVA7RwU

var bingoList = [
	"VISITALLADULT|1 Skulltula from each Adult Dungeon",
	"VISITALLCHILD|1 Skulltula from each Child Dungeon",
	"VISITALLADULT|Obtain 1 Small Key in each Adult Dungeon",
	"15 Different Skulltulas",
	"FIBK|FOBK|SHBK|SPBK|WBK|GBK|2 Boss Keys",
	"BOOTS|3 Boots",
	"FIBK|FOBK|SHBK|SPBK|WBK|GBK|3 Boss Keys",
	"LAKEHYLIA|3 Lake Hylia Skulltulas",
	"SHIELDS|3 Shields",
	"SHIELDS|BOOTS|3 Shields & 3 Boots",
	"SHIELDS|TUNICS|3 Shields & 3 Tunics",
	"WATERTEMPLE|3 Skulltulas in Water Temple",
	"SWORDS|3 Swords",
	"SWORDS|3rd Sword Slot Occupied",
	"SWORDS|BOOTS|3 Swords & 3 Boots",
	"SWORDS|SHIELDS|3 Swords & 3 Shields",
	"SWORDS|TUNICS|3 Swords & 3 Tunics",
	"SWORDS|TUNICS|SHIELDS|BOOTS|3 Swords, Tunics, Boots, and Shields",
	"TUNICS|3 Tunics",
	"TUNICS|BOOTS|3 Tunics & 3 Boots",
	"GTG|Obtain 3 Different Keys in Gerudo Training Grounds",
	"NUT|30 Deku Nut Capacity or Better",
	"COMPASSES|4 Compasses",
	"MAPS|4 Maps",
	"SHADOWTEMPLE|4 Skulltulas in Shadow Temple",
	"FORESTTEMPLE|Obtain 4 Different Keys in Forest Temple",
	"GTG|Obtain 4 Different Keys in Gerudo Training Grounds",
	"COMPASSES|5 Compasses",
	"BEANS|Buy a Magic Bean for 50 Rupees",
	"MAPS|5 Maps",
	"GTG|Obtain 5 Different Keys in Gerudo Training Grounds",
	"GIANTSWALLET|MAX|500 Rupees",
	"COMPASSES|6 Compasses",
	"MAPS|6 Maps",
	"GTG|Obtain 6 Different Keys in Gerudo Training Grounds",
	"COMPASSES|7 Compasses",
	"BEANS|Buy a Magic Bean for 70 Rupees",
	"GTG|Obtain 7 Different Keys in Gerudo Training Grounds",
	"MAPS|7 Maps",
	"GTG|Obtain 8 Different Keys in Gerudo Training Grounds",
	"SONGS|8 Songs",
	"SONGS|9 Songs",
	"SONGS|10 Songs",
	"HEARTS|10 Hearts",
	"HEARTS|11 Hearts",
	"HEARTS|12 Hearts",
	"ELEMENTALARROWS|All 3 Elemental Arrows",
	"All 3 Kokiri Forest area Skulltulas",
	"BOTW|BOOMERANG|All 3 Skulltulas in Bottom of the Well",
	"ICECAVERN|All 3 Skulltulas in Ice Cavern",
	"BOOMERANG|All 4 Gerudo Valley area Skulltulas",
	"BOOMERANG|All 4 Lon-Lon Ranch area Skulltulas",
	"All 4 Lost Woods area Skulltulas",
	"STORM|BOOMERANG|All 4 Market area Skulltulas",
	"DEKUTREE|BOOMERANG|All 4 Skulltulas in Deku Tree",
	"JABUJABUSBELLY|BOOMERANG|All 4 Skulltulas in Jabu-Jabu",
	"All 4 Wasteland/ Colossus area Skulltulas",
	"LAKEHYLIA|All 5 Lake Hylia Skulltulas",
	"BOMBBAG|DODONGOSCAVERN|All 5 Skulltulas in Dodongo's Cavern",
	"HAMMER|FIRETEMPLE|All 5 Skulltulas in Fire Temple",
	"BOW|FORESTTEMPLE|All 5 Skulltulas in Forest Temple",
	"SHADOWTEMPLE|All 5 Skulltulas in Shadow Temple",
	"SPIRITTEMPLE|All 5 Skulltulas in Spirit Temple",
	"LONGSHOT|WATERTEMPLE|All 5 Skulltulas in Water Temple",
	"BOMBBAG|All 8 Death Mountain area Skulltulas",
	"BOOMERANG|All 8 Kakariko area Skulltulas",
	"ZORADOMAIN|BOOMERANG|STRENGTH|All 8 Zora's Domain area Skulltulas",
	"WATERTEMPLE|Obtain 5 Different Small Keys in Water Temple",
	"DODONGOSCAVERN|BOMBBAG|Beat Dodongo's Cavern",
	"JABUJABUSBELLY|BOOMERANG|Beat Jabu-Jabu's Belly",
	"SLINGSHOT|DEKUTREE|Beat the Deku Tree",
	"FIRETEMPLE|HAMMER|Beat the Fire Temple",
	"BOW|FORESTTEMPLE|Beat the Forest Temple",
	"SHADOWTEMPLE|Beat the Shadow Temple",
	"SHIELDS|SPIRITTEMPLE|Beat the Spirit Temple",
	"LONGSHOT|WATERTEMPLE|Beat the Water Temple",
	"GIANTSWALLET|ICECAVERN|BOTTLE|Blue Fire",
	"SONG|Bolero of Fire",
	"BOMBBAG|Bomb Bag 30 or Better",
	"BOOMERANG|Boomerang",
	"GTG|Both Gerudo's Fortress area Skulltulas",
	"FAIRYSPELL|Both Hyrule Field area Skulltulas",
	"BOTTLE|Bottled Fairy",
	"SLINGSHOT|Bullet Bag 40 or Better",
	"SLINGSHOT|MAX|Bullet Bag 50",
	"EPONA|Cow in House",
	"IRONKNUCKLE|Defeat 4 Different Iron Knuckles",
	"Defeat a Skull Kid",
	"GTG|ICECAVERN|Defeat a White Wolfos",
	"DODONGOSCAVERN|Defeat all Lizalfos in Dodongo's Cavern",
	"BOW|FORESTTEMPLE|Defeat Amy (Green Poe)",
	"JABUJABUSBELLY|BOOMERANG|Defeat Barinade",
	"JABUJABUSBELLY|BOOMERANG|Defeat Big Octo",
	"SHADOWTEMPLE|Defeat Bongo-Bongo",
	"FIRETEMPLE|HAMMER|Defeat both Flare Dancers",
	"WATERTEMPLE|Defeat Dark Link",
	"DODONGOSCAVERN|BOMBBAG|Defeat King Dodongo",
	"BOW|FORESTTEMPLE|Defeat Meg (purple Poe)",
	"WATERTEMPLE|LONGSHOT|Defeat Morpha",
	"SPIRITTEMPLE|IRONKNUCKLE|SHIELDS|Defeat Nabooru-Knuckle",
	"FORESTTEMPLE|BOW|Defeat Phantom Ganon",
	"DEKUTREE|SLINGSHOT|Defeat Queen Gohma",
	"SPIRITTEMPLE|SHIELDS|Defeat Twinrova",
	"FIRETEMPLE|HAMMER|Defeat Volvagia",
	"FAIRYSPELL|Din's Fire",
	"Double Defense",
	"Double Magic",
	"SONG|EPONA|Epona's Song",
	"DEKUSTICK|20 Deku Stick Capacity or Better",
	"DEKUSTICK|MAX|30 Deku Stick Capacity",
	"BOW|Fairy Bow",
	"SLINGSHOT|Fairy Slingshot",
	"FAIRYSPELL|Farore's Wind",
	"BOTTLE|Fill all 4 Bottle Slots",
	"ELEMENTALARROWS|Fire Arrows",
	"FIRETEMPLE|FIBK|Fire Temple Boss Key",
	"FORESTTEMPLE|FOBK|Forest Temple Boss Key",
	"FIRETEMPLE|HAMMER|Free all 9 Gorons in Fire Temple",
	"FROG|SONGS|Frogs' All Songs Reward",
	"FROG|STORM|Frogs' Song of Storms Reward",
	"GANONSCASTLE|GBK|Ganon's Castle Boss Key",
	"GTG|Gerudo's Card",
	"GANONSCASTLE|LONGSHOT|STRENGTH|MAX|Get to the end of Fire Trial",
	"GANONSCASTLE|FAIRYSPELL|Get to the end of Forest Trial",
	"GANONSCASTLE|STRENGTH|MAX|Get to the end of Light Trial",
	"GANONSCASTLE|HAMMER|LONGSHOT|Get to the end of Shadow Trial",
	"GANONSCASTLE|SHIELDS|Get to the end of Spirit Trial",
	"GANONSCASTLE|HAMMER|ICECAVERN|Get to the end of Water Trial",
	"GIANTSWALLET|MAX|Giant's Wallet",
	"STRENGTH|MAX|Golden Gauntlets",
	"STRENGTH|Goron Bracelet or Better",
	"STRENGTH|Silver Gauntlets or Better",
	"TUNICS|FIRETEMPLE|GIANTSWALLET|Goron Tunic",
	"ELEMENTALARROWS|Ice Arrows",
	"BOOTS|WATERTEMPLE|LAKEHYLIA|Iron Boots",
	"MASK|Spooky Mask",
	"Lens of Truth",
	"ELEMENTALARROWS|Light Arrows",
	"LONGSHOT|Longshot",
	"COMPASSES|MAPS|BOTW|Map & Compass in Bottom of the Well",
	"COMPASSES|MAPS|DEKUTREE|Map & Compass in Deku Tree",
	"COMPASSES|MAPS|DODONGOSCAVERN|Map & Compass in Dodongo's Cavern",
	"COMPASSES|MAPS|FIRETEMPLE|Map & Compass in Fire Temple",
	"COMPASSES|MAPS|FORESTTEMPLE|Map & Compass in Forest Temple",
	"COMPASSES|MAPS|ICECAVERN|Map & Compass in Ice Cavern",
	"COMPASSES|MAPS|JABUJABUSBELLY|Map & Compass in Jabu-Jabu",
	"COMPASSES|MAPS|SHADOWTEMPLE|Map & Compass in Shadow Temple",
	"COMPASSES|MAPS|SPIRITTEMPLE|Map & Compass in Spirit Temple",
	"COMPASSES|MAPS|WATERTEMPLE|Map & Compass in Water Temple",
	"HAMMER|Megaton Hammer",
	"BOTTLE|EPONA|Milk",
	"SONG|Minuet of Forest",
	"SHIELDS|Mirror Shield",
	"FAIRYSPELL|Nayru's Love",
	"FORESTTEMPLE|Obtain all 5 Small Keys in Forest Temple",
	"SHADOWTEMPLE|Obtain all 5 Small Keys in Shadow Temple",
	"FIRETEMPLE|Obtain all 8 Small Keys in Fire Temple",
	"BEANS|Plant bean in Death Mountain Crater",
	"BOW|QUIVER|Quiver 40 or Better",
	"BOW|QUIVER|MAX|Quiver 50",
	"SONG|Requiem of Spirit",
	"BOTTLE|Find Ruto's Letter",
	"SONG|Saria's Song",
	"SHADOWTEMPLE|SHBK|Shadow Temple Boss Key",
	"SCALE|Silver Scale or Better",
	"SCALE|Golden Scale",
	"SPIRITTEMPLE|SPBK|Spirit Temple Boss Key",
	"Stone of Agony",
	"FAIRYSPELL|Two Fairy Spells",
	"WATERTEMPLE|WBK|Water Temple Boss Key",
	"BOMBBAG|Win A Bombchu Bowling Prize",
	"TUNICS|WATERTEMPLE|GIANTSWALLET|Zora Tunic",
	"Fall Prey to 3 Trap Chests",
	"DUNGEONS|2 Stones",
	"DUNGEONS|3 Medallions",
	"DUNGEONS|4 Medallions",
	"DUNGEONS|BOSSKEYS|Beat 2 Temples",
	"ZORADOMAIN|STRENGTH|All 4 Adult Zora's Domain area Skulltulas",
	"Find the Randomized Green Rupee",
	"BOMBBAG|MAX|Bomb Bag 40",
	"NUT|MAX|40 Deku Nut Capacity"
];

// https://gist.github.com/blixt/f17b47c62508be59987b
// --------------------------------------------------
function OOTRANDO_RandomOOTSeed(seed) {
	seed = Math.floor(seed);
	this._seed = seed % 2147483647;
	if (this._seed <= 0) this._seed += OOTRANDO_MAX_SEED_SIZE;
}
OOTRANDO_RandomOOTSeed.prototype.next = function () { // 2^31 - 2 (2147483646) upper limit
	return this._seed = this._seed * 16807 % (OOTRANDO_MAX_SEED_SIZE + 1);
};
// --------------------------------------------------

bingoGenerator = function(bingoList, opts) {
	var final_bingo_list = []; // array of 25 goals

	var board = [];
	var seed_val = opts.seed;
	if (seed_val > OOTRANDO_MAX_SEED_SIZE) {
		seed_val = OOTRANDO_MAX_SEED_SIZE;
	}

    var board_type = opts.boardtype || OOTRANDO_BOARDTYPE_ROWCOL;

	// split lines into objects w a group array
	var goals = [];
	for (var i=0; i<bingoList.length; i++) {
		var line = bingoList[i];
		var split = line.split('|');
		var groups = [];
		for (var j=0; j<split.length-1; j++) {
			groups.push(split[j]);
		}
		var goal_object = {
			goal: split[split.length-1],
			groups: groups
		};
		goals.push(goal_object);
	}

	var rng = new OOTRANDO_RandomOOTSeed(seed_val);
	var final_list_index = 0;
	for (var row=1; row<=5; row++){
		board.push([]);
		for (var col=1; col<=5; col++){
			// no conflict initially
			var conflict;
			var goal;
			do {
				conflict = false;
				// get goal from the goals list
				var goal_index = rng.next() % goals.length;
				goal = goals[goal_index];
				// if blackout, no two goals may share a group
				if (board_type == OOTRANDO_BOARDTYPE_BLACKOUT) {
					for (var i=0; i<goal.groups.length; i++) {
						// loop checking the groups of the potential goal
						for (var j=0; j<board.length; j++) {
							// loop checking board rows
							for (var k=0; k<board[j].length; k++) {
								// loop checking board columns
								if (board[j][k].groups.includes(goal.groups[i])) {
									conflict = goal.groups[i]; // conflict found !!
									break;
								}
							}
							if (conflict) break;
						}
						if (conflict) break;
					}
				// rows / cols / tlbr / bltr
				} else if (board_type == OOTRANDO_BOARDTYPE_ROWCOL) {
					for (var i=0; i<goal.groups.length; i++) {
						// loop checking the groups of the potential goal
						for (var j=1; j<row && !conflict; j++) {
							// current row
							var square = board[j-1][col-1];
							if (square.groups.includes(goal.groups[i])) {
								conflict = square; // conflict found !!
							}
						}
						for (var j=1; j<col && !conflict; j++) {
							// current col
							var square = board[row-1][j-1];
							if (board[row-1][j-1].groups.includes(goal.groups[i])) {
								conflict = board[row-1][j-1]; // conflict found !!
							}
						}
						for (var j=1; j<row && row==col && !conflict; j++) {
							// tlbr
							var square = board[j-1][j-1];
							if (square.groups.includes(goal.groups[i])) {
								conflict = square;
							}
						}
						for (var j=1; j<row && 6-row==col && !conflict; j++) {
							// bltr
							var square = board[j-1][j-1];
							if (square.groups.includes(goal.groups[i])) {
								conflict = square;
							}
						}
						if (conflict) { break; }
					}
				} else {
					// random
				}
			} while (conflict);
			// executes once a goal that matches the current filters is found
			var goal_text = goals[goal_index].goal;
			board[row-1].push(goal);
			goals.splice(goal_index, 1);
			final_bingo_list[final_list_index] = {"name": goal_text};
			final_list_index++;
		}
	}

	// return goal list
	return final_bingo_list;
}
