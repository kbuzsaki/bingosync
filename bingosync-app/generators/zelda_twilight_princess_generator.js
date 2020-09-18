// Huge thanks to Isaac for helping clean this up and handling some of the logic!
// Also thanks to Hollow Knight and MM bingos for 90% of this code lol

	// Adds seedrandom function to Math. Might also update Math.random"s behavior.
	// prettier-ignore
	!function (j, i, g, m, k, n, o) { function q(b) { var e, f, a = this, c = b.length, d = 0, h = a.i = a.j = a.m = 0; for (a.S = [], a.c = [], c || (b = [c++]); g > d;)a.S[d] = d++; for (d = 0; g > d; d++)e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e; a.g = function (b) { var c = a.S, d = a.i + 1 & g - 1, e = c[d], f = a.j + e & g - 1, h = c[f]; c[d] = h, c[f] = e; for (var i = c[e + h & g - 1]; --b;)d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1]; return a.i = d, a.j = f, i }, a.g(g) } function p(b, e, f, a, c) { if (f = [], c = typeof b, e && "object" == c) for (a in b) if (a.indexOf("S") < 5) try { f.push(p(b[a], e - 1)) } catch (d) { } return f.length ? f : b + ("string" != c ? "\x00" : "") } function l(b, e, f, a) { for (b += "", a = f = 0; a < b.length; a++) { var c = e, d = a & g - 1, h = (f ^= 19 * e[a & g - 1]) + b.charCodeAt(a); c[d] = h & g - 1 } b = ""; for (a in e) b += String.fromCharCode(e[a]); return b } i.seedrandom = function (b, e) { var a, f = []; return b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f), a = new q(f), l(a.S, j), i.random = function () { for (var c = a.g(m), d = o, b = 0; k > c;)c = (c + b) * g, d *= g, b = a.g(1); for (; c >= n;)c /= 2, d /= 2, b >>>= 1; return (c + b) / d }, b }, o = i.pow(g, m), k = i.pow(2, k), n = 2 * k, l(i.random(), j) }([], Math, 256, 6, 52);

	// Returns a random key of an object.
	function randomKey(obj) {
		var keys = Object.keys(obj);
		return keys[Math.floor(Math.random() * keys.length)];
	}

	var defaultOptions = {
		// string: Seed for random number generator.
		seed: String(Math.ceil(999999 * Math.random())),
		// number: Indicates how many bingo options to generate. May generate a list of
		// fewer than "length" elements based on constraints.
		length: 25,
	};

	/**
	 * Generates bingo list.
	 *
	 * @param {object} bingoOptions Contains all available options and
	 * constraints.
	 * @param {object} optsIn Options. See defaultOptions for shape.
	 */
	function generateBingoList(bingoOptions, optsIn) {
		var options = Object.assign({}, defaultOptions, optsIn);

		Math.seedrandom(options.seed);

		var selectedGoals = [];
		var availableGoals = bingoOptions;

		for (
			var i = 0;
			i < options.length && Object.keys(availableGoals).length > 0;
			i++
		) {
			var goalKey = randomKey(availableGoals);
			var goal = availableGoals[goalKey];
			selectedGoals.push({ name: goal.name });

			availableGoals = Object.keys(availableGoals).reduce(function (acc, key) {
				if (key === goalKey) {
					return acc;
				}
				var item = availableGoals[key];
				if (goal.types && item.types) {
					var keys = Object.keys(goal.types);
					for (var i = 0; i < keys.length; i++) {
						if (item.types[keys[i]]) {
							return acc;
						}
					}
				}
				acc[key] = item;
				return acc;
			}, {});
		}

		return selectedGoals;
	}

	var bingoList = {

		// Item gets

		FishingRodGet: {
			name: "Get Fishing Rod",
		},
		/*
		FrogLureGet: {
			name: "Get Frog Lure",
		},
		*/
		/*
		SinkingLureGet: {
			name: "Get Sinking Lure",
		},
		*/
		EarringGet: {
			name: "Get Coral Earring",
		},
		SlingshotGet: {
			name: "Get Slingshot",
		},
		LanternGet: {
			name: "Get Lantern",
		},
		BoomerangGet: {
			name: "Get Gale Boomerang",
		},
		BootsGet: {
			name: "Get Iron Boots",
		},
		BowGet: {
			name: "Get Hero's Bow",
		},
		Quiver1Get: {
			name: "Get Large Quiver",
		},
		Quiver2Get: {
			name: "Get Giant Quiver",
		},
		BombBagGet: {
			name: "Get a Bomb Bag",
		},
		BombBag2Get: {
			name: "Get 2 Bomb Bags",
		},
		BombBag3Get: {
			name: "Get 3 Bomb Bags",
		},
		GiantBombBagGet: {
			name: "Get Giant Bomb Bags",
		},
		HawkeyeGet: {
			name: "Get Hawkeye",
		},
		ClawGet: {
			name: "Get a Clawshot",
		},
		DoubleClawGet: {
			name: "Get Double Clawshots",
		},
		SpinnerGet: {
			name: "Get Spinner",
		},
		BallChainGet: {
			name: "Get Ball & Chain",
		},
		DRodGet: {
			name: "Get Dominion Rod",
		},
		Drod2Get: {
			name: "Get Powered Dominion Rod",
		},
		BottleGet: {
			name: "Get a Bottle",
		},
		Bottle2Get: {
			name: "Get 2 Bottles",
		},
		Bottle3Get: {
			name: "Get 3 Bottles",
		},
		Bottle4Get: {
			name: "Get 4 Bottles",
		},
		MemoGet: {
			name: "Get Auru's Memo",
		},
		SketchGet: {
			name: "Get Ashei's Sketch",
		},
		SkyBookGet: {
			name: "Get Sky Book",
		},
		SkyCharGet: {
			name: "Get a Sky Character",
		},
		SkyChar2Get: {
			name: "Get 2 Sky Characters",
		},
		SkyChar3Get: {
			name: "Get 3 Sky Characters",
		},
		SkyChar4Get: {
			name: "Get 4 Sky Characters",
		},
		SkyChar5Get: {
			name: "Get 5 Sky Characters",
		},
		SkyChar6Get: {
			name: "Get All 6 Sky Characters",
		},
		LetterGet: {
			name: "Get Renado's Letter",
		},
		InvoiceGet: {
			name: "Get Doctor's Invoice",
		},
		StatueGet: {
			name: "Get Wooden Statue",
		},
		CharmGet: {
			name: "Get Ilia's Charm",
		},
		HorseCallGet: {
			name: "Get Horse Call",
		},
		Skill1Get: {
			name: "Learn a Hidden Skill",
		},
		Skill2Get: {
			name: "Learn 2 Hidden Skills",
		},
		Skill3Get: {
			name: "Learn 3 Hidden Skills",
		},
		Skill4Get: {
			name: "Learn 4 Hidden Skills",
		},
		Skill5Get: {
			name: "Learn 5 Hidden Skills",
		},
		Skill6Get: {
			name: "Learn 6 Hidden Skills",
		},
		Skill7Get: {
			name: "Learn All 7 Hidden Skills",
		},
		EndingBlowGet: {
			name: "Learn Ending Blow",
		},
		ShieldAttackGet: {
			name: "Learn Shield Attack",
		},
		BackSliceGet: {
			name: "Learn Back Slice",
		},
		HelmSplitterGet: {
			name: "Learn Helm Splitter",
		},
		MortalDrawGet: {
			name: "Learn Mortal Draw",
		},
		JumpStrikeGet: {
			name: "Learn Jump Strike",
		},
		GreatSpinGet: {
			name: "Learn Great Spin",
		},
		WoodSwordGet: {
			name: "Get Wooden Sword",
		},
		OrdonSwordGet: {
			name: "Get Ordon Sword",
		},
		MasterSwordGet: {
			name: "Get Master Sword",
		},
		LightSwordGet: {
			name: "Get Light Sword",
		},
		WoodShieldGet: {
			name: "Get Wooden Shield",
		},
		OrdonShieldGet: {
			name: "Get Ordon Shield",
		},
		HylianShieldGet: {
			name: "Get Hylian Shield",
		},
		ZoraArmorGet: {
			name: "Get & Equip Zora Armor",
		},
		MagicArmorGet: {
			name: "Get & Equip Magic Armor",
		},
		WalletGet: {
			name: "Get Big Wallet",
		},
		Wallet2Get: {
			name: "Get Giant Wallet",
		},
		Bug4Get: {
			name: "Get 4 Golden Bugs",
		},
		Bug8Get: {
			name: "Get 8 Golden Bugs",
		},
		Bug12Get: {
			name: "Get 12 Golden Bugs",
		},
		/*
		Bug16Get: {
			name: "Get 16 Golden Bugs",
		},
		*/
		/*
		Bug20Get: {
			name: "Get 20 Golden Bugs",
		},
		*/
		/*
		Bug24Get: {
			name: "Get 24 Golden Bugs",
		},
		*/
		Poe10Get: {
			name: "Get 10 Poe Souls",
		},
		Poe20Get: {
			name: "Get 20 Poe Souls",
		},
		Poe30Get: {
			name: "Get 30 Poe Souls",
		},
		/*
		Poe40Get: {
			name: "Get 40 Poe Souls",
		},
		*/
		/*
		Poe50Get: {
			name: "Get 50 Poe Souls",
		},
		*/
		/*
		Poe60Get: {
			name: "Get 60 Poe Souls",
		},
		*/
		YouthScentGet: {
			name: "Get Youth's Scent",
		},
		IliaScentGet: {
			name: "Get Scent of Ilia",
		},
		PoeScentGet: {
			name: "Get Poe Scent",
		},
		ReekfishScentGet: {
			name: "Get Reekfish Scent",
		},
		MedicineScentGet: {
			name: "Get Medicine Scent",
		},
		Hearts5: {
			name: "Have 5 Hearts Total",
		},
		Hearts10: {
			name: "Have 10 Hearts Total",
		},
		/*
		Hearts15: {
			name: "Have 15 Hearts Total",
		},
		*/
		/*
		Hearts20: {
			name: "Have All 20 Hearts",
		},
		*/
		HeartContainerGet: {
			name: "Get a Heart Container",
		},
		HeartContainer2Get: {
			name: "Get 2 Heart Containers",
		},
		HeartContainer3Get: {
			name: "Get 3 Heart Containers",
		},
		HeartContainer4Get: {
			name: "Get 4 Heart Containers",
		},
		/*
		HeartContainer5Get: {
			name: "Get 5 Heart Containers",
		},
		*/
		/*
		HeartContainer6Get: {
			name: "Get 6 Heart Containers",
		},
		*/
		/*
		HeartContainer7Get: {
			name: "Get 7 Heart Containers",
		},
		*/
		/*
		HeartContainer8Get: {
			name: "Get All 8 Heart Containers",
		},
		*/
		ValidationRupee: {
			name: "Get Validation Rupee",
		},
		GreenRupee: {
			name: "Get a Green Rupee",
		},
		AllRupeeTypes: {
			name: "Get 2 of Every Rupee Type",
		},
		OrangeRupees: {
			name: "Get 5 Orange Rupees",
		},
		SilverRupees: {
			name: "Get 2 Silver Rupees From Chests",
		},
		FTItemsGet: {
			name: "Get Forest Temple Map, Compass & Boss Key",
		},
		GMItemsGet: {
			name: "Get Goron Mines Map, Compass & Boss Key",
		},
		LBTItemsGet: {
			name: "Get Lakebed Temple Map, Compass & Boss Key",
		},
		AGItemsGet: {
			name: "Get Arbiter's Grounds Map, Compass & Boss Key",
		},
		SPRItemsGet: {
			name: "Get Snowpeak Ruins Map, Compass & Boss Key",
		},
		ToTItemsGet: {
			name: "Get Temple of Time Map, Compass & Boss Key",
		},
		CityItemsGet: {
			name: "Get City in the Sky Map, Compass & Boss Key",
		},
		PoTItemsGet: {
			name: "Get Palace of Twilight Map, Compass & Boss Key",
		},
		HCItemsGet: {
			name: "Get Forest Temple Map, Compass & Boss Key",
		},
		FTKeysGet: {
			name: "Get All 4 Forest Temple Small Keys",
		},
		GMKeysGet: {
			name: "Get All 3 Goron Mines Small Keys",
		},
		LBTKeysGet: {
			name: "Get All 3 Lakebed Temple Small Keys",
		},
		AGKeysGet: {
			name: "Get All 4 Arbiter's Grounds Small Keys",
		},
		SPRKeysGet: {
			name: "Get All 4 Snowpeak Ruins Small Keys",
		},
		ToTKeysGet: {
			name: "Get All 3 Temple of Time Small Keys",
		},
		CityKeyGet: {
			name: "Get the City in the Sky Small Key",
		},
		PoTKeysGet: {
			name: "Get All 7 Palace of Twilight Small Keys",
		},
		HCKeysGet: {
			name: "Get All 3 Hyrule Castle Small Keys",
		},
		FTOoccooGet: {
			name: "Get Forest Temple Ooccoo",
		},
		GMOoccooGet: {
			name: "Get Goron Mines Ooccoo",
		},
		LBTOoccooGet: {
			name: "Get Lakebed Temple Ooccoo",
		},
		AGOoccooGet: {
			name: "Get Arbiter's Grounds Ooccoo",
		},
		SPROoccooGet: {
			name: "Get Snowpeak Ruins Ooccoo",
		},
		ToTOoccooGet: {
			name: "Get Temple of Time Ooccoo",
		},
		CityOoccooGet: {
			name: "Get City in the Sky Ooccoo",
		},
		SPRPumpkinGet: {
			name: "Get Snowpeak Ruins Ordon Pumpkin",
		},
		SPRCheeseGet: {
			name: "Get Snowpeak Ruins Ordon Goat Cheese",
		},
		FusedShadowGet: {
			name: "Get a Fused Shadow",
		},
		FusedShadow2Get: {
			name: "Get 2 Fused Shadows",
		},
		FusedShadow3Get: {
			name: "Get All 3 Fused Shadows",
		},
		MirrorShardGet: {
			name: "Get a Mirror Shard (from bosses)",
		},
		MirrorShard2Get: {
			name: "Get 2 Mirror Shards (from bosses)",
		},
		MirrorShard3Get: {
			name: "Get 3 Mirror Shards (from bosses)",
		},

		// Common Enemy Goals

		AeralfosKill: {
			name: "Kill an Aeralfos",
		},
		ArmosKill: {
			name: "Kill an Armos",
		},
		ArmosClawshotKill: {
			name: "Kill an Armos with the Clawshot",
		},
		BeamosKill: {
			name: "Kill a Beamos",
		},
		BeamosBombKill: {
			name: "Kill a Beamos with Bombs",
		},
		BeamosBallChainKill: {
			name: "Kill a Beamos with the Ball & Chain",
		},
		BlueBokoblinKills: {
			name: "Kill 5 Blue Bokoblins",
		},
		RedBokoblinKills: {
			name: "Kill 5 Red Bokoblins",
		},
		ChuKills: {
			name: "Kill 1 of Each Type of Chu (excl. Green Chu)",
		},
		FireBubbleKills: {
			name: "Kill 5 Fire Bubbles",
		},
		IceBubbleKills: {
			name: "Kill 5 Ice Bubbles",
		},
		ChillfosKills: {
			name: "Kill 5 Chillfos",
		},
		FreezardKills: {
			name: "Kill 3 Freezards (and their Mini-Freezards)",
		},
		DarknutKills: {
			name: "Kill 4 Darknuts",
		},
		DekuLikeKills: {
			name: "Kill 3 Deku Likes",
		},
		DodongoKills: {
			name: "Kill 5 Dodongos",
		},
		DodongoKill: {
			name: "Kill a Dodongo with a Bomb",
		},
		GuayKill: {
			name: "Kill a Guay with the Slingshot",
		},
		AGPoeKill: {
			name: "Kill an Arbiter's Grounds Poe",
		},
		AGPoeKill2: {
			name: "Kill 2 Arbiter's Grounds Poes",
		},
		AGPoeKill3: {
			name: "Kill 3 Arbiter's Grounds Poes",
		},
		AGPoeKill4: {
			name: "Kill All 4 Arbiter's Grounds Poes",
		},
		PoeKills10: {
			name: "Kill 10 Poes",
		},
		PoeKills20: {
			name: "Kill 20 Poes",
		},
		PoeKills30: {
			name: "Kill 30 Poes",
		},
		/*
		PoeKills40: {
			name: "Kill 40 Poes",
		},
		*/
		/*
		PoeKills50: {
			name: "Kill 50 Poes",
		},
		*/
		/*
		PoeKills60: {
			name: "Kill 60 Poes",
		},
		*/
		LizalfosKills: {
			name: "Kill 5 Lizalfos",
		},
		DynalfosKills: {
			name: "Kill 2 Dynalfos",
		},
		ShellBladeKills: {
			name: "Kill 4 Shell Blades",
		},
		ShellBladeWBKills: {
			name: "Kill 2 Shell Blades with Water Bombs",
		},
		WolfosKills: {
			name: "Kill 5 White Wolfos",
		},
		ZantHeadKills: {
			name: "Kill 5 Zant Heads",
		},
		TorchSlugKills: {
			name: "Kill 5 Torch Slugs as Wolf",
		},
		StalfosKills: {
			name: "Kill 3 Stalfos with Ball & Chain",
		},
		TilewormKills: {
			name: "Kill 3 Tileworms",
		},
		MoldormKills: {
			name: "Kill 3 Moldorms",
		},
		GibdoKills: {
			name: "Kill 5 Gibdos (Redeads)",
		},
		GibdoKillsBombArrows: {
			name: "Kill a Gibdo (Redead) with Bomb Arrows",
		},
		ToadpoliKill: {
			name: "Kill a Toadpoli with Ball & Chain",
		},
		HelmasaurKills: {
			name: "Kill 5 Helmasaur",
		},
		HelmasaurKill: {
			name: "Kill a Helmasaur with its own Armor",
		},
		KeeseKill: {
			name: "Kill a Keese with Ball & Chain",
		},
		BigBabaKill: {
			name: "Kill a Big Baba",
		},
		BombskitKill: {
			name: "Kill a Bombskit with a Bombling",
		},
		EndingBlowKills: {
			name: "Kill 5 Enemies with Ending Blow",
		},
		BackSliceKills: {
			name: "Kill 5 Enemies with Back Slice",
		},
		HelmSplitterKills: {
			name: "Kill 5 Enemies with Helm Splitter",
		},
		MortalDrawKills: {
			name: "Kill 10 Enemies with Mortal Draw",
		},
		JumpStrikeKills: {
			name: "Kill 5 Enemies with Jump Strike",
		},
		GreatSpinKills: {
			name: "Kill 5 Enemies with Great Spin",
		},
		IronBootsKills: {
			name: "Kill 3 Enemies with Iron Boots",
		},
		SpinnerKills: {
			name: "Kill 3 Enemies with Spinner",
		},
		BallAndChainKills: {
			name: "Kill 10 Enemies with Ball & Chain",
		},
		ToTStatueKills: {
			name: "Kill 3 Enemies with the Temple of Time Statue",
		},
		BombKills: {
			name: "Kill 5 Enemies with Bombs",
		},
		SlingshotKills: {
			name: "Kill 5 Enemies with Slingshot",
		},
		BowKills: {
			name: "Kill 5 Enemies with Bow",
		},
		BoomerangStuns: {
			name: "Stun 5 Enemies with Boomerang",
		},
		WolfKills: {
			name: "Kill 10 Enemies as Wolf",
		},
		EnviromentKills: {
			name: "Kill an Enemy with Pots/Barrels/Boxes/etc.",
		},
		HawkeyeKill: {
			name: "Kill an Enemy With Bow Using Hawkeye",
		},

		// Mini-Bosses

		Ook: {
			name: "Defeat Ook",
		},
		Daangoro: {
			name: "Defeat Dangoro",
		},
		DekuToad: {
			name: "Defeat Deku Toad",
		},
		DeathSword: {
			name: "Defeat Death Sword",
		},
		DarkHammer: {
			name: "Defeat DarkHammer",
		},
		ToTDarknut: {
			name: "Defeat Temple of Time Darknut",
		},
		CityAeralfos: {
			name: "Defeat City in the Sky Aeralfos",
		},
		PhantomZants: {
			name: "Defeat both Phantom Zants",
		},
		SkullKid: {
			name: "Defeat Skull Kid",
		},
		KingBulblin: {
			name: "Defeat King Bulblin",
		},

		// Bosses

		Diababa: {
			name: "Defeat Diababa",
		},
		Fyrus: {
			name: "Defeat Fyrus",
		},
		Morpheel: {
			name: "Defeat Morpheel",
		},
		Stallord: {
			name: "Defeat Stallord",
		},
		Blizzeta: {
			name: "Defeat Blizzeta",
		},
		Armogohma: {
			name: "Defeat Armogohma",
		},
		Argorok: {
			name: "Defeat Argorok",
		},
		Zant: {
			name: "Defeat Zant",
		},

		// Misc

		Die: {
			name: "Die by any Means Necessary",
		},
		BladeTrapDeath: {
			name: "Die to a Blade Trap",
		},
		FloorSpikeDeath: {
			name: "Die to a Floor Spike",
		},
		MistDeath: {
			name: "Void Out in Faron Mist",
		},
		FogDeath: {
			name: "Auto-Transform in Palace of Twilight Fog",
		},
		DarknutDeath: {
			name: "Die to a Darknut",
		},
		Drown: {
			name: "Drown",
		},
		DrownMA: {
			name: "Drown While Wearing Magic Armor",
		},
		CoODeath: {
			name: "Die in Cave of Ordeals",
		},
		BombDeath: {
			name: "Die to Your Own Bombs",
		},
		ZADeath: {
			name: "Die While Wearing Zora Armor",
		},
		MADeath: {
			name: "Die While Wearing Magic Armor",
		},
		TrillDeath: {
			name: "Die to Trill",
		},
		ElectroDeath: {
			name: "Die to Electricity",
		},
		FreezeDeath: {
			name: "Freeze to Death",
		},
		BurnDeath: {
			name: "Burn to Death",
		},
		QuicksandDeath: {
			name: "Sink in Quicksand",
		},
		GameOver: {
			name: "Get a Game Over",
		},
		PitDeath: {
			name: "Fall Into a Pit",
		},
		DekuLikeEat: {
			name: "Get Eaten by a Deku Like",
		},
		JOTWAD: {
			name: "Jump Off the Watch Tower and Die!",
		},
		JOATAD: {
			name: "Jump  Off the Auru Tower and Die!",
		},
		TrillThief: {
			name: "Steal from Trill",
		},
		Rollgoal1: {
			name: "Complete 1 Level of Rollgoal",
		},
		Rollgoal2: {
			name: "Complete 2 Levels of Rollgoal",
		},
		Rollgoal3: {
			name: "Complete 3 Levels of Rollgoal",
		},
		Rollgoal4: {
			name: "Complete 4 Levels of Rollgoal",
		},
		Rollgoal5: {
			name: "Complete 5 Levels of Rollgoal",
		},
		/*
		Rollgoal10: {
			name: "Complete 10 Levels of Rollgoal",
		},
		*/
		HenaUpset: {
			name: "Have Hena Kick You Out",
		},
		HenaFishing: {
			name: "Catch 2 Different Fish with Hena",
		},
		CoO10: {
			name: "Clear 10 Floors of Cave of Ordeals",
		},
		CoO20: {
			name: "Clear 20 Floors of Cave of Ordeals",
		},
		CoO30: {
			name: "Clear 30 Floors of Cave of Ordeals",
		},
		/*
		CoO40: {
			name: "Clear 40 Floors of Cave of Ordeals",
		},
		*/
		/*
		CoO50: {
			name: "Clear All 50 Floors of Cave of Ordeals",
		},
		*/
		PoTSolLose: {
			name: "Lose Palace of Twilight Sol to Zant Hand",
		},
		ShoePolish: {
			name: "Polish Your Shoes in Castle Town",
		},
		CTBread: {
			name: "Get some Bread from Castle Town Market",
		},
		CTApple: {
			name: "Get an Apple from Castle Town Market",
		},
		CTFlower: {
			name: "Get a Flower from Castle Town Market",
		},
		GoronLaunch: {
			name: "Get Launched by a Goron",
		},
		ZoraRide: {
			name: "Ride the Zora up Zora's Domain Waterfall",
		},
		FuckGoron: {
			name: "Throw Hot Springwater Barrel on Ground Next to Thirsty Goron",
		},
		Iza1: {
			name: "Iza 1",
		},
		Iza2: {
			name: "Iza 2",
		},
		Star1: {
			name: "S.T.A.R. 1",
		},
		Star2: {
			name: "S.T.A.R. 2",
		},
		Plumm: {
			name: "Plumm Minigame",
		},
		Plumm60k: {
			name: "Score 60,000+ Points in Plumm Minigame",
		},
		HideNSeek: {
			name: "Hidden Village Cat Hide N' Seek",
		},
		LoveHint: {
			name: "Get a Love Hint from Fanadi",
		},
		CareerHint: {
			name: "Get a Career Hint from Fanadi",
		},
		Hotsprings: {
			name: "Visit the Hot Springs in Kakariko and Death Mountain",
		},
		TalkSiblings: {
			name: "Talk to Coro, Hena, and Iza",
		},
		MARupeeDrain: {
			name: "Drain All Your Rupees to Magic Armor",
		},
		LakeBottomWithMA: {
			name: "Touch Bottom of Lake Hylia with Magic Armor On",
		},
		SPRCannon: {
			name: "Fire a Snowpeak Ruins Cannon",
		},
		OoccooVoid: {
			name: "Fly an Ooccoo into a Void",
		},
		MapUnlock: {
			name: "Unlock All Provinces of the Map",
		},
		WarpUnlock: {
			name: "Unlock All Portals",
		},
		CuccoAbuse: {
			name: "Take Control of a Cucco", // Do not do this irl pls
		},
		CatchBass: {
			name: "Catch a Hyrule Bass",
		},
		CatchPike: {
			name: "Catch a Hylian Pike",
		},
		CatchGreengill: {
			name: "Catch a Greengill",
		},
		CatchCatfish: {
			name: "Catch an Ordon Catfish",
		},
		CatchReekfish: {
			name: "Catch a Reekfish",
		},
		/*
		CatchLoach: {
			name: "Catch a Hylian Loach",
		},
		*/
		SGHowl: {
			name: "Howl at Sacred Grove Stone",
		},
		DMHowl: {
			name: "Howl at Death Mountain Stone",
		},
		UZRHowl: {
			name: "Howl at Upper Zora River Stone",
		},
		LHHowl: {
			name: "Howl at Lake Hylia Stone",
		},
		SPHowl: {
			name: "Howl at Snowpeak Stone",
		},
		HVHowl: {
			name: "Howl at Hidden Village Stone",
		},
		TelmaTalk: {
			name: "Talk to Telma (not a cutscene)",
		},
		PostmanTalk: {
			name: "Talk to the Postman in 2 Different Locations (not via mail delivery)",
		},
		GMEldersTalk: {
			name: "Talk to all Goron Mines Elders",
		},
		CTPedsTalk: {
			name: "Talk to all Castle Town Pedestrians",
		},
		ToTDoor: {
			name: "Open the Temple of Time Door",
		},
		FTMonkeyRescue: {
			name: "Rescue All Monkeys in Forest Temple",
		},
		KakGraveyardToLakeSC: {
			name: "Take Shortcut from Kakariko Graveyard to Lake Hylia",
		},
		SCTToLakeSC: {
			name: "Take Shortcut from South Castle Town to Lake Hylia",
		},
		UseMilk: {
			name: "Drink Milk",
		},
		UseRedPotion: {
			name: "Drink a Red Potion",
		},
		UseBluePotion: {
			name: "Drink a Blue Potion",
		},
		UseLanternOil: {
			name: "Refill Lantern Oil from a Bottle",
		},
		UseWater: {
			name: "Pour out Water",
		},
		UseNastySoup: {
			name: "Drink Nasty Soup",
		},
		UseHotSpringwater: {
			name: "Drink Hot Springwater",
		},
		UseFairy: {
			name: "Have a Fairy Revive You",
		},
		UseFairyTears: {
			name: "Drink Great Fairy's Tears",
		},
		UseRareChuJelly: {
			name: "Drink Rare Chu Jelly",
		},
		UseRedChuJelly: {
			name: "Drink Red Chu Jelly",
		},
		UseBlueChuJelly: {
			name: "Drink Blue Chu Jelly",
		},
		UseGreenChuJelly: {
			name: "Drink Green Chu Jelly (Magic Potion)",
		},
		UseYellowChuJelly: {
			name: "Use Yellow Chu Jelly",
		},
		UsePurpleChuJelly: {
			name: "Use Purple Chu Jelly",
		},
		UseWorms: {
			name: "Catch a Fish Using Worms as Bait",
		},
		UseBeeLarvae: {
			name: "Catch a Fish Using Bee Larvae as Bait",
		},
		UseSuperbSoup: {
			name: "Drink Superb Soup",
		},
		ScoopAllChus: {
			name: "Scoop up all Types of Chu Jelly (excluding green)",
		},
		ScoopRedChuJelly: {
			name: "Scoop up Red Chu Jelly",
		},
		ScoopBlueChuJelly: {
			name: "Scoop up Blue Chu Jelly",
		},
		ScoopPurpleChuJelly: {
			name: "Scoop up Purple Chu Jelly",
		},
		ScoopYellowChuJelly: {
			name: "Scoop up Yellow Chu Jelly",
		},
		ScoopRareChuJelly: {
			name: "Scoop up Rare Chu Jelly",
		},
		ScoopLanternOil: {
			name: "Scoop up Lantern Oil",
		},
		GrowPumpkin: {
			name: "Water a Pumpkin in Ordon Village",
		},
		BurnShield: {
			name: "Burn a Wooden or Ordon Shield",
		},
		HenaLook: {
			name: "Look Around in Hena's House (get all dialogues)",
		},
		TrillNice: {
			name: "Donate 1,000 Rupees  to Trill and Buy Nothing",
		},
		PetGoats: {
			name: "Pet 5 Goats",
		},
		PlayFetch: {
		name: "Play Fetch with a Dog",
		},
		TalkToAnimals: {
		name: "Talk to 5 Different Animals",
		},
		LanternBug: {
			name: "Catch a Golden Bug with the Lantern",
		},
		BeeHives: {
			name: "Knock Down 2 Bee Hives",
		},
		BeeDeath: {
			name: "Die to a Swarm of Bees",
		},
		Plumm0Pts: {
		name: "Score 0 Points in Plumm's Minigame",
		},

		// World

		TreasureRoom: {
			name: "Riad Hyrule Castle Treasure Room",
		},
		CharloDonation: {
			name: "Donate to Charlo to get Item",
		},
		BuyCTMaloMart: {
			name: "Buy Everything in Malo Mart (Castle Town)",
		},
		BuyKakMaloMart: {
			name: "Buy Everything in Malo Mart (Kakariko)",
		},
		Jovanni20Souls: {
			name: "Turn in 20 Poe Souls to Jovanni",
		},
		/*
		Jovanni60Souls: {
			name: "Turn in all 60 Poe Souls to Jovanni",
		},
		*/
		BugTurnIn4: {
			name: "Turn in 4 Bugs to Agitha",
		},
		BugTurnIn8: {
			name: "Turn in 8 Bugs to Agitha",
		},
		BugTurnIn12: {
			name: "Turn in 12 Bugs to Agitha",
		},
		/*
		BugTurnIn16: {
			name: "Turn in 16 Bugs to Agitha",
		},
		*/
		/*
		BugTurnIn20: {
			name: "Turn in 20 Bugs to Agitha",
		},
		*/
		/*
		BugTurnIn24: {
			name: "Turn in all 24 Bugs to Agitha",
		},
		*/
		SkyCharChecks: {
			name: "Examine all Sky Book Character Locations",
		},
		HypeCave: {
			name: "Get all Items in Lake Hylia Long Cave (aka Hype Cave)",
		},
		FBF: {
			name: "Get all Items Available via Flight by Fowl in Lake Hylia",
		},
		BuyCityShop: {
			name: "Buy all Items in City in the Sky Oocca Shop",
		},
		BuyKakNightShop: {
			name: "Buy all Items in Kakariko Night Shop",
		},
		BuyDMTShop: {
			name: "Buy all Items in Death Mountain Goron Shop",
		},
		BuyCTGorons: {
			name: "Buy from all Gorons in Castle Town",
		},
		BuyCoroBottle: {
			name: "Buy Coro Bottle",
		},
		FTChests: {
			name: "Open all Chests in Forest Temple",
		},
		GMChests: {
			name: "Open all Chests in Goron Mines",
		},
		LBTChests: {
			name: "Open all Chests in Lakebed Temple",
		},
		AGChests: {
			name: "Open all Chests in Arbiter's Grounds",
		},
		SPRChests: {
			name: "Open all Chests in Snowpeak Ruins",
		},
		ToTChests: {
			name: "Open all Chests in Temple of Time",
		},
		CityChests: {
			name: "Open all City in the Sky Chests",
		},
		PoTChests: {
			name: "Open all Palace of Twilight Chests",
		},
		HCChests: {
			name: "Open all Hyrule Castle Chests",
		},
		AGPoes: {
			name: "Kill all Aribter's Grounds Poes",
		},
		SPRPoes: {
			name: "Kill all Snowpeak Ruins Poes",
		},
		ToTPoes: {
			name: "Kill all Temple of Time Poes",
		},
		CityPoes: {
			name: "Kill all City in the Sky Poes",
		},
		EldinGrottos: {
			name: "Clear all Eldin Grottos",
		},
		LanayruGrottos: {
			name: "Clear all Lanayru Grottos",
		},
		DesertGrottos: {
			name: "Clear all Desert Grottos",
		},
		SnowpeakGrottos: {
			name: "Clear all Snowpeak Grottos",
		},
		LanayruSpringChecks: {
			name: "Open all Lanayru Spring Chests",
		},
		KakarikoVillageChecks: {
			name: "Get all Kakariko Village Checks",
		},
		OrdonVillageChecks: {
			name: "Get all Ordon Village Checks",
		},
		FaronWoodsChecks: {
			name: "Get all Faron Woods Checks",
		},
		LakeHyliaChecks: {
			name: "Get all Lake Hylia Checks",
		},
		HyliaBridgeChecks: {
			name: "Get all Hylia Bridge Checks",
		},
		GoronStockcaveChecks: {
			name: "Get all Goron Stockcave Checks",
		},

	};

	var types = {

		fishingRod: ["FishingRodGet", "FrogLureGet", "SinkingLureGet","EarringGet", "CatchBass", "CatchPike", "CatchGreengill", "CatchCatfish", "CatchReekfish", "CatchLoach"],
		bow: ["BowGet", "Quiver1Get", "Quiver2Get"],
		bomb: ["BombBagGet", "BombBag2Get", "BombBag3Get", "GiantBombBagGet", "BombDeath"],
		claws: ["ClawGet", "DoubleClawGet"],
		rod: ["DRodGet", "DRod2Get", "SkyCharChecks"],
		bottles: ["BottleGet", "Bottle2Get", "Bottle3Get", "Bottle4Get", "UseRedPotion", "UseBluePotion", "UseMilk", "UseNastySoup", "UseHotSpringwater", "UseFairyTears", "UseFairy", "UseRareChuJelly", "UseRedChuJelly", "UseBlueChuJelly", "UseLanternOil", "UseWater", "UseGreenChuJelly", "UseYellowChuJelly", "UsePurpleChuJelly", "UseWorms", "UseBeeLarvae", "UseSuperbSoup", "ScoopAllChus", "ScoopRedChuJelly", "ScoopBlueChuJelly", "ScoopPurpleChuJelly", "ScoopYellowChuJelly", "ScoopRareChuJelly", "ScoopLanternOil", "GrowPumpkin"],
		questItem: ["MemoGet", "SketchGet", "LetterGet", "InvoiceGet", "StatueGet", "CharmGet", "HorseCallGet"],
		skybook: ["SkyBookGet", "SkyCharGet", "SkyChar2Get", "SkyChar3Get", "SkyChar4Get", "SkyChar5Get", "SkyChar6Get"],
		hiddenSkill: ["Skill1Get", "Skill2Get", "Skill3Get", "Skill4Get", "Skill5Get", "Skill6Get", "Skill7Get", "EndingBlowGet", "ShieldAttackGet", "BackSliceGet", "HelmSplitterGet", "MortalDrawGet", "JumpStrikeGet", "GreatSpinGet", "SGHowl", "DMHowl", "UZRHowl", "LHHowl", "SPHowl", "HVHowl", "EndingBlowKills", "BackSliceKills", "MortalDrawKills", "JumpStrikeKills", "GreatSpinKills"],
		sword: ["WoodSwordGet", "OrdonSwordGet", "MasterSwordGet", "LightSwordGet"],
		shield: ["WoodShieldGet", "OrdonShieldGet", "HylianShieldGet", "BurnShield"],
		armor: ["ZoraArmorGet", "MagicArmorGet", "MARupeeDrain", "MADeath", "DrownMA", "LakeBottomWithMA", "ZADeath"],
		wallet: ["WalletGet", "Wallet2Get"],
		bug: ["Bug4Get", "Bug8Get", "Bug12Get", "Bug16Get", "Bug20Get", "Bug24Get", "BugTurnIn4", "BugTurnIn8", "BugTurnIn12", "BugTurnIn16", "BugTurnIn20", "BugTurnIn24", "LanternBug"],
		poe: ["Poe10Get", "Poe20Get", "Poe30Get", "Poe40Get", "Poe50Get", "Poe60Get",  "Jovanni20Souls", "Jovanni60Souls", "AGPoeKill", "AGPoeKill2", "AGPoeKill3", "AGPoeKill4", "AGPoes", "PoeKills10", "PoeKills20", "PoeKills30", "PoeKills40", "PoeKills50", "PoeKills60"],
		scent: ["YouthScentGet", "IliaScentGet", "PoeScentGet", "ReekfishScentGet", "MedicineScentGet"],
		heart: ["Hearts5", "Hearts10", "Hearts15", "Hearts20", "HeartContainerGet", "HeartContainer2Get", "HeartContainer3Get", "HeartContainer4Get", "HeartContainer5Get", "HeartContainer6Get", "HeartContainer7Get", "HeartContainer8Get"],
		rupee: ["ValidationRupee", "GreenRupee", "AllRupeeTypes", "OrangeRupees", "SilverRupees"],
		forestTemple: ["FTItemsGet", "FTKeysGet", "FTOoccooGet", "DiababaKill", "FTMonkeyRescue", "FTChests"],
		goronMines: ["GMItemsGet", "GMKeysGet", "GMOoccooGet", "FyrusKill", "GMEldersTalk", "GMChests"],
		lakebedTemple: ["LBTItemsGet", "LBTKeysGet", "LBTOoccooGet", "MorpheelKill", "LBTChests"],
		arbitersGround: ["AGItemsGet", "AGKeysGet", "AGOoccooGet", "StallordKill", "AGPoeKill", "AGPoeKill2", "AGPoeKill3", "AGPoeKill4", "AGPoes", "AGChests"],
		snowpeakRuins: ["SPRItemsGet", "SPRKeysGet", "SPROoccooGet", "SPRPumpkinGet", "SPRCheeseGet", "BlizzetaKill", "SPRCannon", "SPRPoes", "SPRChests"],
		templeOfTime: ["ToTItemsGet", "ToTKeysGet", "ToTOoccooGet", "ArmogohmaKill", "ToTDoor", "ToTPoes", "ToTChests"],
		cityInTheSky: ["CityItemsGet", "CityKeysGet", "CityOoccooGet", "ArgorokKill", "OoccooVoid", "CityPoes", "CityChests"],
		palaceOfTwilight: ["PoTItemsGet", "PoTKeysGet", "ZantKill", "PoTChests"],
		hyruleCastle: ["HCItemsGet", "HCKeysGet", "TreasureRoom", "HCChests"],
		armosKills: ["ArmosKill", "ArmosClawshotKill"],
		beamosKills: ["BeamosKill", "BeamosBombKill", "BeamosBallChainKill"],
		bokoKills: ["RedBokoblinKills", "BlueBokoblinKills"],
		chus: ["ChuKills", "ScoopAllChus", "ScoopRedChuJelly", "ScoopBlueChuJelly", "ScoopPurpleChuJelly", "ScoopYellowChuJelly", "ScoopRareChuJelly"],
		bubbleKills: ["FireBubbleKills", "IceBubbleKills"],
		iceKills: ["ChillfosKills", "FreezardKills"],
		dodongoKills: ["DodongoKill", "DodongoKills"],
		agPoeKills: ["AGPoeKill", "AGPoeKill2", "AGPoeKill3", "AGPoeKill4", "AGPoes"],
		poeKills: ["PoeKills10", "PoeKills20", "PoeKills30", "PoeKills40", "PoeKills50", "PoeKills60"],
		lizalfosKills: ["LizalfosKills", "DynalfosKills"],
		helmaKills: ["HelmasaurKills", "HelmasaurKill"],
		skillKills: ["EndingBlowKills", "BackSliceKills", "HelmSplitterKills", "MortalDrawKills", "JumpStrikeKills", "GreatSpinKills"],
		shellBladeKills: ["ShellBladeKills", "ShellBladeWBKills"],
		deaths: ["Die", "BladeTrapDeath", "FloorSpikeDeath", "MistDeath", "FogDeath", "DarknutDeath", "Drown", "DrownMA", "CoODeath", "BombDeath", "ZADeath", "MADeath", "TrillDeath", "ElectroDeath", "FreezeDeath", "BurnDeath", "QuicksandDeath", "GameOver", "PitDeath", "DekuLikeEat", "JOTWAD", "JOATAD", "BeeDeath"],
		trill: ["TrillThief", "TrillDeath", "TrillNice"],
		rollgoal: ["Rollgoal1", "Rollgoal2", "Rollgoal3", "Rollgoal4", "Rollgoal5", "Rollgoal10"],
		hena: ["HenaUpset", "HenaFishing", "HenaLook"],
		coo: ["CoO10", "CoO20", "CoO30", "CoO40", "CoO50", "CoODeath"],
		castleTown: ["ShoePolish", "CTBread", "CTApple", "CTFlower", "CTPedsTalk", "CharloDonation", "BuyCTMaloMart", "Jovanni20Souls", "Jovanni60Souls"],
		izaMG: ["Iza1", "Iza2"],
		starMG: ["Star1", "Star2"],
		plummMG: ["Plumm", "Plumm60k", "Plumm0Pts"],
		hiddenVillage: ["HideNSeek", "HVHowl"],
		fanadi: ["LoveHint", "CareerHint"],
		mapProgress: ["MapUnlock", "WarpUnlock"],
		catchFish: ["CatchBass", "CatchPike", "CatchGreengill", "CatchCatfish", "CatchReekfish", "CatchLoach"],
		shortcuts: ["KakGraveyardToLakeSC", "SCTToLakeSC"],
		shopping: ["BuyCTMaloMart", "BuyKakMaloMart", "BuyCityShop", "BuyKakNightShop", "BuyDMTShop", "BuyCTGorons", "BuyCoroBottle"],
		grottos: ["EldinGrottos", "LanayruGrottos", "DesertGrottos", "SnowpeakGrottos"],
		gibdoKills: ["GibdoKills", "GibdoKillsBombArrows"],

	};

	var typesObj = Object.keys(types).reduce(function (acc, type) {
		types[type].forEach(function (item) {
			if (!acc[item]) {
				acc[item] = {};
			}
			acc[item][type] = true;
		});
		return acc;
	}, {});

	var bingoOptions = Object.keys(bingoList).reduce(function (acc, key) {
		var obj = Object.assign({}, bingoList[key]);
		if (typesObj[key]) {
			obj.types = Object.assign({}, typesObj[key]);
		}
		acc[key] = obj;
		return acc;
	}, {});

		bingoGenerator = generateBingoList;
