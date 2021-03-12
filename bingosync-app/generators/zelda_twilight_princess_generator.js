// Huge thanks to Isaac for helping clean this up and handling some of the logic!
// Also thanks to Hollow Knight and MM bingos for 90% of this code lol
//
//

var bingoList = [];
bingoGenerator = (function () {
  // Adds seedrandom function to Math.
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

    FishingRodGet: 'Get Fishing Rod',
    // FrogLureGet: 'Get Frog Lure',
    // SinkingLureGet: 'Get Sinking Lure',
    EarringGet: 'Get Coral Earring',
    SlingshotGet: 'Get Slingshot',
    LanternGet: 'Get Lantern',
    BoomerangGet: 'Get Gale Boomerang',
    BootsGet: 'Get Iron Boots',
    BowGet: "Get Hero's Bow",
    Quiver1Get: 'Get Large Quiver',
    Quiver2Get: 'Get Giant Quiver',
    BombBagGet: 'Get a Bomb Bag',
    BombBag2Get: 'Get 2 Bomb Bags',
    BombBag3Get: 'Get 3 Bomb Bags',
    GiantBombBagGet: 'Get Giant Bomb Bags',
    HawkeyeGet: 'Get Hawkeye',
    ClawGet: 'Get a Clawshot',
    DoubleClawGet: 'Get Double Clawshots',
    SpinnerGet: 'Get Spinner',
    BallChainGet: 'Get Ball & Chain',
    DRodGet: 'Get Dominion Rod',
    Drod2Get: 'Get Powered Dominion Rod',
    BottleGet: 'Get a Bottle',
    Bottle2Get: 'Get 2 Bottles',
    Bottle3Get: 'Get 3 Bottles',
    Bottle4Get: 'Get 4 Bottles',
    MemoGet: "Get Auru's Memo",
    SketchGet: "Get Ashei's Sketch",
    SkyBookGet: 'Get Sky Book',
    SkyCharGet: 'Get a Sky Character',
    SkyChar2Get: 'Get 2 Sky Characters',
    SkyChar3Get: 'Get 3 Sky Characters',
    SkyChar4Get: 'Get 4 Sky Characters',
    SkyChar5Get: 'Get 5 Sky Characters',
    SkyChar6Get: 'Get All 6 Sky Characters',
    LetterGet: "Get Renado's Letter",
    InvoiceGet: "Get Doctor's Invoice",
    StatueGet: 'Get Wooden Statue',
    CharmGet: "Get Ilia's Charm",
    HorseCallGet: 'Get Horse Call',
    Skill1Get: 'Learn a Hidden Skill',
    Skill2Get: 'Learn 2 Hidden Skills',
    Skill3Get: 'Learn 3 Hidden Skills',
    Skill4Get: 'Learn 4 Hidden Skills',
    Skill5Get: 'Learn 5 Hidden Skills',
    Skill6Get: 'Learn 6 Hidden Skills',
    Skill7Get: 'Learn All 7 Hidden Skills',
    EndingBlowGet: 'Learn Ending Blow',
    ShieldAttackGet: 'Learn Shield Attack',
    BackSliceGet: 'Learn Back Slice',
    HelmSplitterGet: 'Learn Helm Splitter',
    MortalDrawGet: 'Learn Mortal Draw',
    JumpStrikeGet: 'Learn Jump Strike',
    GreatSpinGet: 'Learn Great Spin',
    WoodSwordGet: 'Get Wooden Sword',
    OrdonSwordGet: 'Get Ordon Sword',
    MasterSwordGet: 'Get Master Sword',
    LightSwordGet: 'Get Light Sword',
    WoodShieldGet: 'Get Wooden Shield',
    OrdonShieldGet: 'Get Ordon Shield',
    HylianShieldGet: 'Get Hylian Shield',
    ZoraArmorGet: 'Get & Equip Zora Armor',
    MagicArmorGet: 'Get & Equip Magic Armor',
    WalletGet: 'Get Big Wallet',
    Wallet2Get: 'Get Giant Wallet',
    Bug4Get: 'Get 4 Golden Bugs',
    Bug8Get: 'Get 8 Golden Bugs',
    Bug12Get: 'Get 12 Golden Bugs',
    // Bug16Get: 'Get 16 Golden Bugs',
    // Bug20Get: 'Get 20 Golden Bugs',
    // Bug24Get: 'Get 24 Golden Bugs',
    Poe10Get: 'Get 10 Poe Souls',
    Poe20Get: 'Get 20 Poe Souls',
    Poe30Get: 'Get 30 Poe Souls',
    // Poe40Get: 'Get 40 Poe Souls',
    // Poe50Get: 'Get 50 Poe Souls',
    // Poe60Get: 'Get 60 Poe Souls',
    YouthScentGet: "Get Youth's Scent",
    IliaScentGet: 'Get Scent of Ilia',
    PoeScentGet: 'Get Poe Scent',
    ReekfishScentGet: 'Get Reekfish Scent',
    MedicineScentGet: 'Get Medicine Scent',
    Hearts5: 'Have 5 Hearts Total',
    Hearts10: 'Have 10 Hearts Total',
    // Hearts15: 'Have 15 Hearts Total',
    // Hearts20: 'Have All 20 Hearts',
    HeartContainerGet: 'Get a Heart Container',
    HeartContainer2Get: 'Get 2 Heart Containers',
    HeartContainer3Get: 'Get 3 Heart Containers',
    HeartContainer4Get: 'Get 4 Heart Containers',
    // HeartContainer5Get: "Get 5 Heart Containers",
    // HeartContainer6Get: 'Get 6 Heart Containers',
    // HeartContainer7Get: 'Get 7 Heart Containers',
    // HeartContainer8Get: 'Get All 8 Heart Containers',
    ValidationRupee: 'Get Validation Rupee',
    GreenRupee: 'Get a Green Rupee',
    AllRupeeTypes: 'Get 2 of Every Rupee Type',
    OrangeRupees: 'Get 5 Orange Rupees',
    SilverRupees: 'Get 2 Silver Rupees From Chests',
    FTItemsGet: 'Get Forest Temple Map, Compass & Boss Key',
    GMItemsGet: 'Get Goron Mines Map, Compass & Boss Key',
    LBTItemsGet: 'Get Lakebed Temple Map, Compass & Boss Key',
    AGItemsGet: "Get Arbiter's Grounds Map, Compass & Boss Key",
    SPRItemsGet: 'Get Snowpeak Ruins Map, Compass & Boss Key',
    ToTItemsGet: 'Get Temple of Time Map, Compass & Boss Key',
    CityItemsGet: 'Get City in the Sky Map, Compass & Boss Key',
    PoTItemsGet: 'Get Palace of Twilight Map, Compass & Boss Key',
    HCItemsGet: 'Get Forest Temple Map, Compass & Boss Key',
    FTKeysGet: 'Get All 4 Forest Temple Small Keys',
    GMKeysGet: 'Get All 3 Goron Mines Small Keys',
    LBTKeysGet: 'Get All 3 Lakebed Temple Small Keys',
    AGKeysGet: "Get All 4 Arbiter's Grounds Small Keys",
    SPRKeysGet: 'Get All 4 Snowpeak Ruins Small Keys',
    ToTKeysGet: 'Get All 3 Temple of Time Small Keys',
    CityKeyGet: 'Get the City in the Sky Small Key',
    PoTKeysGet: 'Get All 7 Palace of Twilight Small Keys',
    HCKeysGet: 'Get All 3 Hyrule Castle Small Keys',
    FTOoccooGet: 'Get Forest Temple Ooccoo',
    GMOoccooGet: 'Get Goron Mines Ooccoo',
    LBTOoccooGet: 'Get Lakebed Temple Ooccoo',
    AGOoccooGet: "Get Arbiter's Grounds Ooccoo",
    SPROoccooGet: 'Get Snowpeak Ruins Ooccoo',
    ToTOoccooGet: 'Get Temple of Time Ooccoo',
    CityOoccooGet: 'Get City in the Sky Ooccoo',
    SPRPumpkinGet: 'Get Snowpeak Ruins Ordon Pumpkin',
    SPRCheeseGet: 'Get Snowpeak Ruins Ordon Goat Cheese',
    FusedShadowGet: 'Get a Fused Shadow',
    FusedShadow2Get: 'Get 2 Fused Shadows',
    FusedShadow3Get: 'Get All 3 Fused Shadows',
    MirrorShardGet: 'Get a Mirror Shard (from bosses)',
    MirrorShard2Get: 'Get 2 Mirror Shards (from bosses)',
    MirrorShard3Get: 'Get 3 Mirror Shards (from bosses)',

    // Common Enemy Goals

    AeralfosKill: 'Kill an Aeralfos',
    ArmosKill: 'Kill an Armos',
    ArmosClawshotKill: 'Kill an Armos with the Clawshot',
    BeamosKill: 'Kill a Beamos',
    BeamosBombKill: 'Kill a Beamos with Bombs',
    BeamosBallChainKill: 'Kill a Beamos with the Ball & Chain',
    BlueBokoblinKills: 'Kill 5 Blue Bokoblins',
    RedBokoblinKills: 'Kill 5 Red Bokoblins',
    ChuKills: 'Kill 1 of Each Type of Chu (excl. Green Chu)',
    FireBubbleKills: 'Kill 5 Fire Bubbles',
    IceBubbleKills: 'Kill 5 Ice Bubbles',
    ChillfosKills: 'Kill 5 Chillfos',
    FreezardKills: 'Kill 3 Freezards (and their Mini-Freezards)',
    DarknutKills: 'Kill 4 Darknuts',
    DekuLikeKills: 'Kill 3 Deku Likes',
    DodongoKills: 'Kill 5 Dodongos',
    DodongoKill: 'Kill a Dodongo with a Bomb',
    GuayKill: 'Kill a Guay with the Slingshot',
    AGPoeKill: "Kill an Arbiter's Grounds Poe",
    AGPoeKill2: "Kill 2 Arbiter's Grounds Poes",
    AGPoeKill3: "Kill 3 Arbiter's Grounds Poes",
    AGPoeKill4: "Kill All 4 Arbiter's Grounds Poes",
    PoeKills10: 'Kill 10 Poes',
    PoeKills20: 'Kill 20 Poes',
    PoeKills30: 'Kill 30 Poes',
    // PoeKills40: 'Kill 40 Poes',
    // PoeKills50: 'Kill 50 Poes',
    // PoeKills60: 'Kill 60 Poes',
    LizalfosKills: 'Kill 5 Lizalfos',
    DynalfosKills: 'Kill 2 Dynalfos',
    ShellBladeKills: 'Kill 4 Shell Blades',
    ShellBladeWBKills: 'Kill 2 Shell Blades with Water Bombs',
    WolfosKills: 'Kill 5 White Wolfos',
    ZantHeadKills: 'Kill 5 Zant Heads',
    TorchSlugKills: 'Kill 5 Torch Slugs as Wolf',
    StalfosKills: 'Kill 3 Stalfos with Ball & Chain',
    TilewormKills: 'Kill 3 Tileworms',
    MoldormKills: 'Kill 3 Moldorms',
    GibdoKills: 'Kill 5 ReDeads',
    GibdoKillsBombArrows: 'Kill a ReDead with Bomb Arrows',
    ToadpoliKill: 'Kill a Toadpoli with Ball & Chain',
    HelmasaurKills: 'Kill 5 Helmasaur',
    HelmasaurKill: 'Kill a Helmasaur with its own Armor',
    KeeseKill: 'Kill a Keese with Ball & Chain',
    BigBabaKill: 'Kill a Big Baba',
    BombskitKill: 'Kill a Bombskit with a Bombling',
    EndingBlowKills: 'Kill 5 Enemies with Ending Blow',
    BackSliceKills: 'Kill 5 Enemies with Back Slice',
    HelmSplitterKills: 'Kill 5 Enemies with Helm Splitter',
    MortalDrawKills: 'Kill 10 Enemies with Mortal Draw',
    JumpStrikeKills: 'Kill 5 Enemies with Jump Strike',
    GreatSpinKills: 'Kill 5 Enemies with Great Spin',
    IronBootsKills: 'Kill 3 Enemies with Iron Boots',
    SpinnerKills: 'Kill 3 Enemies with Spinner',
    BallAndChainKills: 'Kill 10 Enemies with Ball & Chain',
    ToTStatueKills: 'Kill 3 Enemies with the Temple of Time Statue',
    BombKills: 'Kill 5 Enemies with Bombs',
    SlingshotKills: 'Kill 5 Enemies with Slingshot',
    BowKills: 'Kill 5 Enemies with Bow',
    BoomerangStuns: 'Stun 5 Enemies with Boomerang',
    WolfKills: 'Kill 10 Enemies as Wolf',
    EnviromentKills: 'Kill an Enemy with Pots/Barrels/Boxes/etc.',
    HawkeyeKill: 'Kill an Enemy With Bow Using Hawkeye',
    WindBombKills: 'Kill 3 Enemies with a Bomb in the Boomerang',
    VoidKills: "Kill an Enemy by Knocking them into a Void",

    // Mini-Bosses

    Ook: 'Defeat Ook',
    Daangoro: 'Defeat Dangoro',
    DekuToad: 'Defeat Deku Toad',
    DeathSword: 'Defeat Death Sword',
    DarkHammer: 'Defeat DarkHammer',
    ToTDarknut: 'Defeat Temple of Time Darknut',
    CityAeralfos: 'Defeat City in the Sky Aeralfos',
    PhantomZants: 'Defeat both Phantom Zants',
    SkullKid: 'Defeat Skull Kid',
    KingBulblin: 'Defeat King Bulblin',
    KingBulblin2: 'Defeat King Bulblin Twice',

    // Bosses

    Diababa: 'Defeat Diababa',
    Fyrus: 'Defeat Fyrus',
    Morpheel: 'Defeat Morpheel',
    Stallord: 'Defeat Stallord',
    Blizzeta: 'Defeat Blizzeta',
    Armogohma: 'Defeat Armogohma',
    Argorok: 'Defeat Argorok',
    Zant: 'Defeat Zant',

    // Misc

    Die: 'Die by any Means Necessary',
    BladeTrapDeath: 'Die to a Blade Trap',
    FloorSpikeDeath: 'Die to a Floor Spike',
    MistDeath: 'Void Out in Faron Mist',
    FogDeath: 'Auto-Transform in Palace of Twilight Fog',
    DarknutDeath: 'Die to a Darknut',
    Drown: 'Drown',
    DrownMA: 'Drown While Wearing Magic Armor',
    CoODeath: 'Die in Cave of Ordeals',
    BombDeath: 'Die to Your Own Bombs',
    ZADeath: 'Die While Wearing Zora Armor',
    MADeath: 'Die While Wearing Magic Armor',
    TrillDeath: 'Die to Trill',
    ElectroDeath: 'Die to Electricity',
    FreezeDeath: 'Freeze to Death',
    BurnDeath: 'Burn to Death',
    QuicksandDeath: 'Sink in Quicksand',
    GameOver: 'Get a Game Over',
    PitDeath: 'Fall Into a Pit',
    DekuLikeEat: 'Get Eaten by a Deku Like',
    JOTWAD: 'Jump Off the Watch Tower and Die!',
    JOATAD: 'Jump  Off the Auru Tower and Die!',
    TrillThief: 'Steal from Trill',
    Rollgoal1: 'Complete 1 Level of Rollgoal',
    Rollgoal2: 'Complete 2 Levels of Rollgoal',
    Rollgoal3: 'Complete 3 Levels of Rollgoal',
    Rollgoal4: 'Complete 4 Levels of Rollgoal',
    Rollgoal5: 'Complete 5 Levels of Rollgoal',
    // Rollgoal10: 'Complete 10 Levels of Rollgoal',
    HenaUpset: 'Have Hena Kick You Out',
    HenaFishing: 'Catch 2 Different Fish with Hena',
    CoO10: 'Clear 10 Floors of Cave of Ordeals',
    CoO20: 'Clear 20 Floors of Cave of Ordeals',
    CoO30: 'Clear 30 Floors of Cave of Ordeals',
    // CoO40: 'Clear 40 Floors of Cave of Ordeals',
    // CoO50: 'Clear All 50 Floors of Cave of Ordeals',
    PoTSolLose: 'Lose Palace of Twilight Sol to Zant Hand',
    ShoePolish: 'Polish Your Shoes in Castle Town',
    CTBread: 'Get some Bread from Castle Town Market',
    CTApple: 'Get an Apple from Castle Town Market',
    CTFlower: 'Get a Flower from Castle Town Market',
    GoronLaunch: 'Get Launched by a Goron',
    ZoraRide: "Ride the Zora up Zora's Domain Waterfall",
    FuckGoron: 'Throw Hot Springwater Barrel on Ground Next to Thirsty Goron',
    Iza1: 'Iza 1',
    Iza2: 'Iza 2',
    IzaPts0: "Score 0 Points in Iza's Minigame",
    IzaPts30: "Score 30 Points in Iza's Minigame",
    Star1: 'S.T.A.R. 1',
    Star2: 'S.T.A.R. 2',
    Plumm: 'Plumm Minigame',
    Plumm60k: 'Score 60,000+ Points in Plumm Minigame',
    HideNSeek: "Hidden Village Cat Hide N' Seek",
    LoveHint: 'Get a Love Hint from Fanadi',
    CareerHint: 'Get a Career Hint from Fanadi',
    Hotsprings: 'Visit the Hot Springs in Kakariko and Death Mountain',
    TalkSiblings: 'Talk to Coro, Hena, and Iza',
    MARupeeDrain: 'Drain All Your Rupees to Magic Armor',
    LakeBottomWithMA: 'Touch Bottom of Lake Hylia with Magic Armor On',
    SPRCannon: 'Fire a Snowpeak Ruins Cannon',
    OoccooVoid: 'Fly an Ooccoo into a Void',
    MapUnlock: 'Visit All Provinces of the Map',
    WarpUnlock: 'Unlock All Portals',
    CuccoAbuse: 'Take Control of a Cucco', // Do not do this irl pls
    CuccoAbuse2: "Toss All Lake Hylia Cuccos into the Lake",
    CuccoAbuse3: 'Take Control of a Cucco in Ordon Village Village, Kakariko Village & Lake Hylia',
    CatchBass: 'Catch a Hyrule Bass',
    CatchPike: 'Catch a Hylian Pike',
    CatchGreengill: 'Catch a Greengill',
    CatchCatfish: 'Catch an Ordon Catfish',
    // CatchReekfish: 'Catch a Reekfish',
    // CatchLoach: 'Catch a Hylian Loach',
    SGHowl: 'Howl at Sacred Grove Stone',
    DMHowl: 'Howl at Death Mountain Stone',
    UZRHowl: 'Howl at Upper Zora River Stone',
    LHHowl: 'Howl at Lake Hylia Stone',
    SPHowl: 'Howl at Snowpeak Stone',
    HVHowl: 'Howl at Hidden Village Stone',
    TelmaTalk: 'Talk to Telma (not a cutscene)',
    PostmanTalk: 'Talk to the Postman in 2 Different Locations (not via mail delivery)',
    GMEldersTalk: 'Talk to all Goron Mines Elders',
    CTPedsTalk: 'Talk to all Castle Town Pedestrians',
    ToTDoor: 'Open the Temple of Time Door',
    FTMonkeyRescue: 'Rescue All Monkeys in Forest Temple',
    KakGraveyardToLakeSC: 'Take Shortcut from Kakariko Graveyard to Lake Hylia',
    SCTToLakeSC: 'Take Shortcut from South Castle Town to Lake Hylia',
    UseMilk: 'Drink Milk',
    UseRedPotion: 'Drink a Red Potion',
    UseBluePotion: 'Drink a Blue Potion',
    UseLanternOil: 'Refill Lantern Oil from a Bottle',
    UseWater: 'Pour out Water',
    UseNastySoup: 'Drink Nasty Soup',
    UseHotSpringwater: 'Drink Hot Springwater',
    UseFairy: 'Have a Fairy Revive You',
    UseFairyTears: "Drink Great Fairy's Tears",
    UseRareChuJelly: 'Drink Rare Chu Jelly',
    UseRedChuJelly: 'Drink Red Chu Jelly',
    UseBlueChuJelly: 'Drink Blue Chu Jelly',
    UseGreenChuJelly: 'Drink Green Chu Jelly (Magic Potion)',
    UseYellowChuJelly: 'Use Yellow Chu Jelly',
    UsePurpleChuJelly: 'Use Purple Chu Jelly',
    UseWorms: 'Catch a Fish Using Worms as Bait',
    UseBeeLarvae: 'Catch a Fish Using Bee Larvae as Bait',
    UseSuperbSoup: 'Drink Superb Soup',
    ScoopAllChus: 'Scoop up all Types of Chu Jelly (excluding green)',
    ScoopRedChuJelly: 'Scoop up Red Chu Jelly',
    ScoopBlueChuJelly: 'Scoop up Blue Chu Jelly',
    ScoopPurpleChuJelly: 'Scoop up Purple Chu Jelly',
    ScoopYellowChuJelly: 'Scoop up Yellow Chu Jelly',
    ScoopRareChuJelly: 'Scoop up Rare Chu Jelly',
    ScoopLanternOil: 'Scoop up Lantern Oil',
    GrowPumpkin: 'Water a Pumpkin in Ordon Village',
    BurnShield: 'Burn a Wooden or Ordon Shield',
    HenaLook: "Look Around in Hena's House (get all dialogues)",
    TrillNice: 'Donate 1,000 Rupees  to Trill and Buy Nothing',
    PetGoats: 'Pet All Goats in Ordon Ranch',
    PlayFetch: 'Play Fetch with a Dog',
    TalkToAnimals: 'Talk to 5 Different Animals',
    LanternBug: 'Catch a Golden Bug with the Lantern',
    BeeHives: 'Knock Down 2 Bee Hives',
    BeeDeath: 'Die to a Swarm of Bees',
    Plumm0Pts: "Score 0 Points in Plumm's Minigame",
    TreeBonks: "Bonk into 5 Different Trees",
    EponaYeet: "Get Yeeted Off Epona while Wearing Magic Armor",
    SolLoss: "Lose a Sol to a Zant Hand",
    ShieldArrow: "Shield Attack an Arrow",
    GoCanoeing: "Canoe Around Fishing Pond Rock Formation",
    CrystalHit: "Hit 3 Different Crystals within Dungeons",
    SwitchPress: "Press 5 Different Switches within Dungeons",
    ChainPull: "Pull 2 Different Chains within Dungeons",
    PotBreaks: "Break 10 Different Pots or Boxes within Dungeons",
    ClawshotTargets: "Clawshot to 10 Different Targets",
    ClawshotTargetsDungeon: "Clawshot to 5 Different Targets in One Dungeon",
    StarDeath: "Die in the S.T.A.R. Minigame",
    SpinnerSpikeBreak: "Break a Floor Spike with the Spinner",
    BombLavaDeath: "Bomb Yourself into Lava and Die (is this SS?)",
    DigTreasure: "Dig up Green, Blue, and Yellow Rupees",
    LBTStairsTurn: "Turn the Lakebed Temple Stairs 5 Times",
    TorchExtinguish: "Light a Torch and Extinquish it 3 Times in a Row",
    TorchLight: "Light 5 Different Torches",
    SpinnerRide: "Ride on Spinner Tracks in 2 Different Dungeons",
    StatueBreakSPR: "Break 10 Suits of Armor in Snowpeak Ruins",
    StatueBreakHC: "Break All 21 Suits of Armor in Hyrule Castle",
    PaintingShoot: "Shoot Down All 4 Paintings in Hyrule Castle",

    // World

    TreasureRoom: 'Raid Hyrule Castle Treasure Room',
    CharloDonation: 'Donate to Charlo to get Item',
    BuyCTMaloMart: 'Buy Everything in Malo Mart (Castle Town)',
    BuyKakMaloMart: 'Buy Everything in Malo Mart (Kakariko)',
    Jovanni20Souls: 'Turn in 20 Poe Souls to Jovanni',
    // Jovanni60Souls: 'Turn in all 60 Poe Souls to Jovanni',
    BugTurnIn4: 'Turn in 4 Bugs to Agitha',
    BugTurnIn8: 'Turn in 8 Bugs to Agitha',
    BugTurnIn12: 'Turn in 12 Bugs to Agitha',
    // BugTurnIn16: 'Turn in 16 Bugs to Agitha',
    // BugTurnIn20: 'Turn in 20 Bugs to Agitha',
    // BugTurnIn24: 'Turn in all 24 Bugs to Agitha',
    SkyCharChecks: 'Examine all Sky Book Character Locations',
    HypeCave: 'Get all Items in Lake Hylia Long Cave (aka Hype Cave)',
    FBF: 'Get all Items Available via Flight by Fowl in Lake Hylia',
    BuyCityShop: 'Buy all Items in City in the Sky Oocca Shop',
    BuyKakNightShop: 'Buy all Items in Kakariko Night Shop',
    BuyDMTShop: 'Buy all Items in Death Mountain Goron Shop',
    BuyCTGorons: 'Buy from all Gorons in Castle Town',
    BuyCoroBottle: 'Buy Coro Bottle',
    FTChests: 'Open all Chests in Forest Temple',
    GMChests: 'Open all Chests in Goron Mines',
    LBTChests: 'Open all Chests in Lakebed Temple',
    AGChests: "Open all Chests in Arbiter's Grounds",
    SPRChests: 'Open all Chests in Snowpeak Ruins',
    ToTChests: 'Open all Chests in Temple of Time',
    CityChests: 'Open all City in the Sky Chests',
    PoTChests: 'Open all Palace of Twilight Chests',
    HCChests: 'Open all Hyrule Castle Chests',
    AGPoes: "Kill all Aribter's Grounds Poes",
    SPRPoes: 'Kill all Snowpeak Ruins Poes',
    ToTPoes: 'Kill all Temple of Time Poes',
    CityPoes: 'Kill all City in the Sky Poes',
    EldinGrottos: 'Clear all Eldin Grottos',
    LanayruGrottos: 'Clear all Lanayru Grottos',
    DesertGrottos: 'Clear all Desert Grottos',
    SnowpeakGrottos: 'Clear all Snowpeak Grottos',
    LanayruSpringChecks: 'Open all Lanayru Spring Chests',
    KakarikoVillageChecks: 'Get all Kakariko Village Checks',
    OrdonVillageChecks: 'Get all Ordon Village Checks',
    FaronWoodsChecks: 'Get all Faron Woods Checks',
    LakeHyliaChecks: 'Get all Lake Hylia Checks',
    HyliaBridgeChecks: 'Get all Hylia Bridge Checks',
    GoronStockcaveChecks: 'Get all Goron Stockcave Checks',
  };

  // prettier-ignore
  var types = {
		fishingRod: ["FishingRodGet", "FrogLureGet", "SinkingLureGet","EarringGet", "CatchBass", "CatchPike", "CatchGreengill", "CatchCatfish", "CatchReekfish", "CatchLoach"],
		bow: ["BowGet", "Quiver1Get", "Quiver2Get"],
		bomb: ["BombBagGet", "BombBag2Get", "BombBag3Get", "GiantBombBagGet", "BombDeath"],
		claws: ["ClawGet", "DoubleClawGet"],
		rod: ["DRodGet", "DRod2Get", "SkyCharChecks"],
		bottles: ["BottleGet", "Bottle2Get", "Bottle3Get", "Bottle4Get", "UseRedPotion", "UseBluePotion", "UseMilk", "UseNastySoup", "UseHotSpringwater", "UseFairyTears", "UseFairy", "UseRareChuJelly", "UseRedChuJelly", "UseBlueChuJelly", "UseLanternOil", "UseWater", "UseGreenChuJelly", "UseYellowChuJelly", "UsePurpleChuJelly", "UseWorms", "UseBeeLarvae", "UseSuperbSoup", "ScoopAllChus", "ScoopRedChuJelly", "ScoopBlueChuJelly", "ScoopPurpleChuJelly", "ScoopYellowChuJelly", "ScoopRareChuJelly", "ScoopLanternOil", "GrowPumpkin"],
		questItem: ["MemoGet", "SketchGet", "LetterGet", "InvoiceGet", "StatueGet", "CharmGet", "HorseCallGet"],
		skybook: ["SkyBookGet", "SkyCharGet", "SkyChar2Get", "SkyChar3Get", "SkyChar4Get", "SkyChar5Get", "SkyChar6Get"],
		hiddenSkill: ["Skill1Get", "Skill2Get", "Skill3Get", "Skill4Get", "Skill5Get", "Skill6Get", "Skill7Get", "EndingBlowGet", "ShieldAttackGet", "BackSliceGet", "HelmSplitterGet", "MortalDrawGet", "JumpStrikeGet", "GreatSpinGet", "SGHowl", "DMHowl", "UZRHowl", "LHHowl", "SPHowl", "HVHowl", "EndingBlowKills", "BackSliceKills", "MortalDrawKills", "JumpStrikeKills", "GreatSpinKills", "ShieldArrow"],
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
		palaceOfTwilight: ["PoTItemsGet", "PoTKeysGet", "ZantKill", "PoTChests", "SolLoss"],
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
		deaths: ["Die", "BladeTrapDeath", "FloorSpikeDeath", "MistDeath", "FogDeath", "DarknutDeath", "Drown", "DrownMA", "CoODeath", "BombDeath", "ZADeath", "MADeath", "TrillDeath", "ElectroDeath", "FreezeDeath", "BurnDeath", "QuicksandDeath", "GameOver", "PitDeath", "DekuLikeEat", "JOTWAD", "JOATAD", "BeeDeath", "StarDeath", "BombLavaDeath"],
		trill: ["TrillThief", "TrillDeath", "TrillNice"],
		rollgoal: ["Rollgoal1", "Rollgoal2", "Rollgoal3", "Rollgoal4", "Rollgoal5", "Rollgoal10"],
		hena: ["HenaUpset", "HenaFishing", "HenaLook", "GoCanoeing"],
		coo: ["CoO10", "CoO20", "CoO30", "CoO40", "CoO50", "CoODeath"],
		castleTown: ["ShoePolish", "CTBread", "CTApple", "CTFlower", "CTPedsTalk", "CharloDonation", "BuyCTMaloMart", "Jovanni20Souls", "Jovanni60Souls"],
		izaMG: ["Iza1", "Iza2", "IzaPts0", "IzaPts30"],
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
        cuccos: ["CuccoAbuse", "CuccuAbuse2", "CuccoAbuse3"],
        kingbulblin: ["KingBulblin", "KingBulblin2"],
        clawshotTargets: ["ClawshotTargets", "ClawshotTargetsDungeon"],
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
    var obj = { name: bingoList[key] };
    if (typesObj[key]) {
      obj.types = Object.assign({}, typesObj[key]);
    }
    acc[key] = obj;
    return acc;
  }, {});

  return function bingoGenerator(oldList, options) {
    return generateBingoList(bingoOptions, options);
  };
})();
