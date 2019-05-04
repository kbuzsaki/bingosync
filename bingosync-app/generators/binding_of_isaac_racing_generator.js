bingoGenerator = require("./generators/generator_bases/isaac_generator.js");

var bingoList = [];

var easyChallenges = [
  { name: "2 eyeball items", types: ["collectItem"] },
  { name: "2 items/trinkets with \"Head\" in the name", types: ["collectItem"] },
  { name: "15 separate coins on floor in one room", types: ["coins"] },
  { name: "Find a permanent flying item", types: ["collectItem"] },
  { name: "Satisfy a slot machine", types: ["arcadeRoom"] },
  { name: "Beat a full Fistula, Teratoma, or Envy", types: ["killBoss"] },
  { name: "Kill a Gurdy (Jr, Sr, Mama)", types: ["killBoss"] },
  { name: "2 Meat Cubes/Ball of Bandages", types: ["collectOrbital"] },
  { name: "50 coins", types: ["coins"] },
  { name: "15 keys", types: ["keys"] },
  { name: "25 bombs", types: ["bombs"] },
  { name: "Buy everything in a shop", types: ["shop"] },
  { name: "Buy 1 mapping item", types: ["shop"] },
  { name: "Clear a boss challenge room", types: ["roomClear"] },
  { name: "Satisfy a normal beggar", types: ["beggar"] },
  { name: "12 total health containers (any color)", types: ["health"] },
  { name: "Satisfy a blood bank", types: ["arcadeRoom"] },
  { name: "Jera four chests at once", types: ["useCards"] },
  { name: "Spun transformation", types: ["tranformation"] },
  { name: "Take 5 different pills in a run", types: ["pills"] },
  { name: "Sleep in a bed", types: ["bedroom"] },
  { name: "Max speed", types: ["stats"] },
  { name: "Bookworm tranformation", types: ["tranformation"] },
  { name: "Satisfy a devil beggar", types: ["beggar"] },
  { name: "Complete the game in hard mode", types: ["completeGame"] },
  { name: "Get an item from a sin boss", types: ["miniBoss"] },
  { name: "Get 5 luck", types: ["stats"] },
  { name: "Kill Krampus", types: ["devilRoom"] },
  { name: "Skip an open devil deal/angel room", types: ["devilRoom"] },
  { name: "Take all devil items in a deal (at least 2)", types: ["devilRoom"] },
  { name: "Increase all stats", types: ["stats"] },
  { name: "Kill Monstro", types: ["boss"] },
  { name: "Kill Loki", types: ["boss"] },
  { name: "Small Rock from a tinted rock", types: ["collectItem"] },
  { name: "Go through a trapdoor", types: ["findRoom"] },
  { name: "Fear 3 mobs simultaneously", types: ["enemyStatusEffect"] },
  { name: "Kill yourself using a blood donation machine", types: ["arcadeRoom"] },
  { name: "Use 2 Emperors in one run", types: ["useCards"] },
  { name: "Kill double trouble boss", types: ["killBoss"] },
  { name: "Clear only one room in a floor", types: ["floor"] },
  { name: "Pick up 5 trinkets in one run", types: ["getTrinkets"] },
  { name: "Kill a boss with Red/Blue Candle", types: ["killBossSpecial"] },
  { name: "Buy 4 soul hearts in one run", types: ["shop"] },
  { name: "Take ten hits in a room", types: ["playerDamage"] },
  { name: "Get 2 eternal hearts on one floor", types: ["health"] },
  { name: "Double trinket", types: ["getTrinkets"] },
  { name: "No trinkets during a run", types: ["getTrinkets"] }
];

bingoList[1] = easyChallenges;



var mediumChallenges = [
  { name: "Get a full Mega Satan Key by angels", types: ["angels"] },
  { name: "Satisfy a sacrifice room", types: ["sacrificeRoom"] },
  { name: "100 combined bombs, keys, coins", types: ["collectables"] },
  { name: "25+ each of bombs, keys, coins", types: ["collectables"] },
  { name: "3 orbitals", types: ["collectOrbital"] },
  { name: "Pick up 3 items that move and shoot", types: ["familiars"] },
  { name: "2 passive followers", types: ["familiars"] },
  { name: "Enter 5 super secret rooms", types: ["findRoom"] },
  { name: "Destroy a golden poop", types: ["poop"] },
  { name: "7 red heart containers", types: ["health"] },
  { name: "Skatole", types: ["collectItem"] },
  { name: "Kill a boss with bombs only", types: ["killBossSpecial"] },
  { name: "3 golden stars on minimap at once", types: ["floor"] },
  { name: "2 silver stars on minimap at once", types: ["floor"] },
  { name: "Kill a boss with a Chaos Card", types: ["useCards"] },
  { name: "Pee in 10 different rooms", types: ["floor"] },
  { name: "Break tear cap (without Soymilk)", types: ["stats"] },
  { name: "Clear Boss Rush", types: ["bossrush"] },
  { name: "Get any secret pool only item", types: ["secretRoom"] },
  { name: "Guppy transformation", types: ["transformation"] },
  { name: "Visit Black Market", types: ["findRoom"] },
  { name: "Seraphim transformation", types: ["transformation"] },
  { name: "Leviathan transformation", types: ["transformation"] },
  { name: "5 followers", types: ["familiars"] },
  { name: "Yes Mother! transformation", types: ["transformation"] },
  { name: "Fire 5 tears at once", types: ["tearModifier"] },
  { name: "Skip basement 1 treasure room and complete a run", types: ["skipItem"] },
  { name: "Reroll your build after D2", types: ["changeBuild"] },
  { name: "69 damage at least on stats", types: ["stats"] },
  { name: "Refuse a good angel room item", types: ["angelRoom"] },
  { name: "Take no damage up until Mom’s Foot", types: ["stats"] },
  { name: "Kill an angel then take a devil deal", types: ["angelRoom"] },
  { name: "Get +80 tear delay and finish the run", types: ["completeGame"] },
  { name: "Proc Judas Shadow after Dead Cat", types: ["resurrection"] },
  { name: "Charm 3 mobs in the same room", types: ["enemyStatusEffect"] },
  { name: "Play as 3 different characters in one run", types: ["resurrection"] },
  { name: "Beat a final boss with 1/2 health", types: ["health"] },
  { name: "Have 20 Dips simultaneously alive", types: ["poop"] },
  { name: "Reroll a single item pedestal 5 times", types: ["reroll"] },
  { name: "Full Meat Boy or Bandage Girl", types: ["familiar"] },
  { name: "Clear a floor without shooting a tear", types: ["floor"] },
  { name: "2 transformations at the same time", types: ["transformation"] },
  { name: "Teleport to a boss room without using The Emperor card", types: ["teleport"] },
  { name: "2 Technology items", types: ["collectItem"] },
  { name: "3 status effects", types: ["statusEffect"] },
  { name: "Keep a full red heart during a run", types: ["completeGame"] },
  { name: "Eat all the pills", types: ["pills"] }
];

bingoList[2] = mediumChallenges;


var hardChallenges = [
  { name: "Kill Blue Baby without shooting/active items/bombs", types: ["killBossSpecial"] },
  { name: "Beat Mom's Heart without treasure rooms", types: ["skipItem"] },
  { name: "Beat Mom's Hearteart without gaining red heart containers", types: ["health"] },
  { name: "Beat the Lamb without opening any chests", types: ["chests"] },
  { name: "Beat the Lamb without using any keys", types: ["keys"] },
  { name: "Beat the Lamb without shopping", types: ["shop"] },
  { name: "Fart on Satan", types: ["spillFart"] },
  { name: "Full clear Dark Room", types: ["fullClear"] },
  { name: "Beat Blue Baby without opening any chests", types: ["chests"] },
  { name: "Beat Blue Baby without using any keys", types: ["keys"] },
  { name: "Beat Blue Baby without shopping", types: ["shop"] },
  { name: "Spill on Isaac", types: ["spillFart"] },
  { name: "Full clear Chest", types: ["fullClear"] },
  { name: "Don't take damage on Womb 2", types: ["takeDmg"] },
  { name: "Sacrifice room to Dark Room and beat The Lamb", types: ["teleport"] },
  { name: "Defeat Hush", types: ["killBoss"] },
  { name: "Kill boss with Blood Rights or Magic Fingers", types: ["killBossSpecial"] },
  { name: "Defeat Mega Satan", types: ["killBoss"] },
  { name: "Finish a run, take no devil/angel deals", types: ["skipItem"] },
  { name: "Finish a run in less than 10 min", types: ["completeGame"] },
  { name: "Stompy transformation", types: ["transformation"] },
  { name: "Fun Guy transformation", types: ["tranformation"] },
  { name: "Conjoined transformation", types: ["transformation"] },
  { name: "Get three zodiac signs", types: ["collectItem"] },
  { name: "Get A Dollar", types: ["arcadeRoom"] },
  { name: "Bob transformation", types: ["tranformation"] },
  { name: "Exhaust a library", types: ["library"] },
  { name: "100 damage stat", types: ["stats"] },
  { name: "Beat a run with the Keeper", types: ["character"] },
  { name: "Have a tear size bigger than the room", types: ["tearModifier"] },
  { name: "Reach The Chest/Dark Room without Polaroid/Negative", types: ["skipItem"] },
  { name: "Get all Guppy items", types: ["collectItem"] },
  { name: "Beat BB/Lamb with Tiny Planet, Isaac's Heart or Soy Milk", types: ["killBossSpecial"] },
  { name: "Complete a run with 10 or less passive items", types: ["completeGame"] },
  { name: "Don't use active items", types: ["useItem"] },
  { name: "6 Hearts or Less", types: ["health"] }
];

bingoList[3] = hardChallenges;

// Added this manually because extra hard was missing
bingoList[4] = hardChallenges;


//extraHardChallenges = [
//
//];
//
//bingoList[4] = extraHardChallenges;


// Types
//collectItem, coins, arcadeRoom, killBoss, collectOrbital, keys, bombs, shop, beggar, health, useCards,
//tranformation, pills, bedroom, stats, completeGame, miniBoss, devilRoom, findRoom, enemyStatusEffect, getTrinkets, killBossSpecial,
//playerDamage, angels, sacrificeRoom, collectables, familiars, poop, floor, bossrush, secretRoom, tearModifier, skipItem,
//changeBuild, angelRoom, resurrection, reroll, teleport, statusEffect, chests, spillFart, fullClear, takeDmg, library, character,
//useItem
