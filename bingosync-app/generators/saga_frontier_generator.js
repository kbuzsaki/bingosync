var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Perform the Junk Shop glitch", types: ["junkshop"] },
  { name: "Recruit Thunder", types: ["recruit"] },
  { name: "Travel to the CTC Building", types: ["travel","ctc"] },
  { name: "Rename a protagonist", types: ["rename"] },
  { name: "Fight the Foxy Sisters at least once", types: ["riki","specialfight"] },
];
bingoList[2] = [
  { name: "Watch the skeleton dance in Nelson", types: ["nelson","dance"] },
  { name: "Purchase a bar of gold", types: ["nelson","item","purchase"] },
  { name: "Walk by Asellus' house", types: ["asellus","travel"] },
  { name: "Talk to Leonard", types: ["talk","leonard"] },
  { name: "Get a Game Over", types: ["gameover"] },
];
bingoList[3] = [
  { name: "Permanently kill a party member", types: ["lpkill"] },
  { name: "Recruit Kylin", types: ["recruit"] },
  { name: "Recruit Fuse", types: ["recruit"] },
  { name: "Recruit all the girl members of Gradius", types: ["recruit"] },
  { name: "Kill King Sei", types: ["kill","sei"] },
  { name: "Fail to trigger Implosion's instant death condition", types: ["instantdeath","implosion"] },
];
bingoList[4] = [
  { name: "Defeat the GaeaToad in one turn", types: ["boss","oneturn"] },
  { name: "Open King Sei's Tomb", types: ["trigger","sei"] },
  { name: "Defeat the Skulldrake", types: ["boss"] },
  { name: "Obtain a GrainCannon", types: ["item","purchase","koorong"] },
  { name: "Enter the Gnome Cave", types: ["travel","gnome"] },
  { name: "Remind a father of their daughter", types: ["scrap","pub","nakajima"] },
  { name: "Talk to the Lord of Rings", types: ["virgil","talk"] },
];
bingoList[5] = [
  { name: "Have a palm reading of Hamster, type Star", types: ["fortune"] },
  { name: "Travel to Tanzer", types: ["tanzer"] },
  { name: "Recruit King Sei", types: ["recruit","sei"] },
  { name: "Get the fake treasure in Owmi", types: ["owmi","item"] },
  { name: "Recover a character's JP with an XMagi-Drink", types: ["item","heal"] },
];
bingoList[6] = [
  { name: "Recruit Silence", types: ["recruit"] },
  { name: "Travel to Wakatu", types: ["travel"] },
  { name: "Recruit Cotton", types: ["recruit"] },
  { name: "Obtain a Rank 7 item from the Junk Shop", types: ["junkshop","item","rank7"] },
  { name: "Purchase an item from pzkwV", types: ["pzkwv","item","purchase"] },
  { name: "Change T260G's body", types: ["t260","body"] },
];
bingoList[7] = [
  { name: "Perform a Level 4 Combo", types: ["combo","level4"] },
  { name: "Obtain tht for Rune Magic", types: ["magicgift","rune"] },
  { name: "Obtain the gife gift for Arcane Magic", types: ["magicgift","arcane"] },
  { name: "Obtain the gift for Light Magic", types: ["magicgift","light"] },
  { name: "Obtain the gift for Shadow Magic", types: ["magicgift","shadow"] },
  { name: "Recruit TimeLord", types: ["recruit"] },
  { name: "Purchase 100 Cures", types: ["purchase"] },
  { name: "Defeat Tanzer in less than 5 turns", types: ["boss","tanzer","fewturns"] },
  { name: "Look at a special magazine", types: ["shrike","magazine"] },
];
bingoList[8] = [
  { name: "Perform a Level 5 Combo", types: ["combo","level5"] },
  { name: "Become possessed", types: ["statuseffect"] },
  { name: "Obtain 3 SanctuaryStones", types: ["item","obtain"] },
  { name: "Recruit Zozma", types: ["recruit","zozma","asellus","emelia"] },
  { name: "Recruit Asellus and White Rose", types: ["recruit","asellus","whiterose","emelia"] },
];
bingoList[9] = [
  { name: "Clip out-of-bounds in the Ancient Ship", types: ["oob","ancientship"] },
  { name: "Spark 2 or more moves in the same fight", types: ["spark","sparks"] },
  { name: "Go to the invisible prison cell in Despair", types: ["travel","secretarea"] },
  { name: "Turn Cotton into a SonicBat in only one fight", types: ["cotton","absorb"] },
  { name: "Travel to MagicKingdom's Nursery", types: ["travel","blue","magickingdom"] },
  { name: "Purchase a SecretBoard", types: ["purchase","secretarea"] },
];
bingoList[10] = [
  { name: "Recruit Suzaku", types: ["recruit","suzaku"] },
  { name: "Obtain every item from the Luminous Labyrinth", types: ["light","allitems","labyrinth"] },
  { name: "Recruit 16 party members", types: ["recruit","16members"] },
  { name: "Create a save file as Rouge", types: ["save","rouge"] },
  { name: "Encounter a Kraken", types: ["kraken","encounter"] },
];
bingoList[11] = [
  { name: "Obtain the gift for Mind Magic", types: ["magicgift","mind"] },
  { name: "Use AsuraRevenge without dying", types: ["asurarevenge"] },
  { name: "Complete the first Trinity Base mission with only Emelia", types: ["trinitybase","emelia","solo"] },
  { name: "Travel to Golden Gate", types: ["goldengate","t260"] },
  { name: "Recruit RedTurnip", types: ["recruit","redturnip","asellus"] },
  { name: "Recruit pzkwV", types: ["pzkwv","t260","recruit"] },
  { name: "Recruit Liza (not as Emelia)", types: ["liza","recruit"] },
];
bingoList[12] = [
  { name: "Learn every Light Magic spell", types: ["completeschool","light"] },
  { name: "Learn every Shadow Magic spell", types: ["completeschool","shadow"] },
  { name: "Learn every Rune Magic spell", types: ["completeschool","rune"] },
  { name: "Learn every Arcane Magic spell", types: ["completeschool","arcane"] },
  { name: "Learn every Space Magic spell", types: ["completeschool","space"] },
  { name: "Learn every Time Magic spell", types: ["completeschool","time"] },
  { name: "Learn every Realm Magic spell", types: ["completeschool","realm"] },
  { name: "Learn every Mind Magic spell", types: ["completeschool","mind"] },
  { name: "Learn every Mystic Magic spell", types: ["completeschool","mystic"] },
  { name: "Clip out-of-bounds in NightmareHQ", types: ["oob","t260"] },
];
bingoList[13] = [
  { name: "Perform the OverDrive glitch without using StasisRune", types: ["glitch","overdrive","snakeoil"] },
  { name: "Defeat every Sage in one turn", types: ["asellus","sage","fewturns"] },
  { name: "Perform Takonomics", types: ["glitch","takonomics"] },
  { name: "Activate all MagiSpheres", types: ["blue","duel","magisphere"] },
  { name: "Gain the ability to have 8 turns within OverDrive", types: ["overdrive","turns","grind"] },
];
bingoList[14] = [
  { name: "Arrive at the Duel with only 2 encounters fought", types: ["duel","lowbr","blue"] },
  { name: "Defeat any final boss without using DSC", types: ["finalboss","dsc"] },
  { name: "Defeat the EarthDragon", types: ["boss","biolab","earthdragon"] },
  { name: "Kill a full party via Maelstrom's instant death condition", types: ["instantdeath","maelstrom"] },
  { name: "Defeat Virgil in 3 turns", types: ["virgil","fewturns"] },
  { name: "Travel through Hell while only taking one encounter", types: ["blue","noencounters"] },
];
bingoList[15] = [
  { name: "Obtain a CometBlade", types: ["wakatu","boss","cometblade"] },
  { name: "Obtain 10,000 Credits without the use of Takonomics", types: ["credits"] },
  { name: "Increase the Battle Rank to 9", types: ["br","brincrease"] },
  { name: "Obtain every single item from the Junk Shop", types: ["item","junkshop","allitems"] },
  { name: "Duplicate a CometBlade", types: ["wakatu","dupe","cometblade"] },
  { name: "Connect to the Ancient Ship computer without running into any enemies", types: ["t260","computer","noencounters"] },
  { name: "Complete Asellus' scenario without purchasing anything from Gozarus", types: ["asellus","gozarus","noitems"] },
  { name: "Complete Asellus' scenario while purchasing everything you can from Gozarus", types: ["asellus","gozarus","allitems"] },
];
bingoList[16] = [
  { name: "Defeat Hell'sLord using only Blue", types: ["finalboss","lordhell","blue"] },
  { name: "Defeat Diva at BR1", types: ["finalbos","diva","emelia","lowbr"] },
  { name: "Skip THE END", types: ["finalboss","lordhell","skiptheend","blue"] },
  { name: "Defeat AbyssBat", types: ["boss","shingrow","ancientship","abyssbat"] },
  { name: "Defeat Jotnar", types: ["boss","mosperiburg","jotnar"] },
  { name: "Defeat Furdo", types: ["boss","magickingdom","furdo"] },
  { name: "Defeat EarthDragon without any deflect or counter moves", types: ["boss","biolab","earthdragon","nodeflect"] },
];
bingoList[17] = [
  { name: "Perform the Scattered Petals combo (Blizzard+MoonlightCut+Tres Flores)", types: ["combo","midare"] },
  { name: "Obtain the WindShell without getting any encounters in the stepping stone room", types: ["item","hell"] },
  { name: "Travel to the areas of Sei's Tomb that were intended to have treasures", types: ["seistomb","cutcontent"] },
  { name: "Perform a Level 5 Combo with only Tower", types: ["combo","selfcombo","tower","arcane"] },
  { name: "Find where the gold salesman was originally placed", types: ["koorong","gold","cutcontent"] },
  { name: "Obtain over 200,000 Credits using Takonomics", types: ["takonomics","cashmoney"] },
];
bingoList[18] = [
  { name: "Lose the Duel at BR1 before the Light MagiSphere activates", types: ["blue","duel","fewturns","lose"] },
  { name: "Win the Duel", types: ["boss","blue","duel","win"] },
  { name: "Obtain over 54,000 Credits without the use of Takonomics", types: ["credits"] },
  { name: "Go to the removed entrance of the secret Luminous Labyrinth room", types: ["cutcontent","luminous"] },
  { name: "Get kicked out of Dr. Nusakan's office after he says only one sentence", types: ["asellus","cutcontent"] },
];
bingoList[19] = [
  { name: "Start a new scenario with INIT2 data", types: ["newgame","init2","systemdata"] },
  { name: "Delete a magic school from Blouge after the Duel", types: ["deleteschool","blue"] },
  { name: "Complete Tartaros without fighting anything", types: ["t260","tartaros","noencounters"] },
  { name: "Obtain TigerProgram from a mec that isn't a boss fight", types: ["program","absorb","selfdevelopment"] },
  { name: "Lock your Battle Rank", types: ["lockbr"] },
];
bingoList[20] = [
  { name: "Obtain GiantSwing on Liza during the first turn of the Nidheg fight", types: ["rngmanip","giantswingmanip"] },
  { name: "Complete any scenario without using any healing items or rest locations (inns, tents, etc.)", types: ["noheal","complete"] },
  { name: "Complete the CTC Building's staircase without taking any encounters", types: ["red","ctc","noencounters"] },
  { name: "Capture the mouse in Baccarat without venturing past the first screen of the underground", types: ["riki","baccarat"] },
  { name: "Defeat GenocideHeart without the use of V-MAX", types: ["t260","finalboss","novmax"] },
];
bingoList[21] = [
  { name: "Learn DSC with Liza", types: ["dsc"] },
  { name: "Recruit Rei", types: ["recruit","asellus"] },
  { name: "As Riki, obtain 10,000 Credits before fighting Vulcan II", types: ["credits","riki"] },
  { name: "Defeat Orlouge without using any Mystic absorbs", types: ["asellus","finalboss","orlouge","noabsorb"] },
  { name: "Deal 100,000+ damage to any enemy", types: ["bigdamage"] },
];
bingoList[22] = [
  { name: "Save Gina", types: ["gina","asellus"] },
  { name: "Start a new scenario with INIT3 data", types: ["recruit","asellus"] },
  { name: "Go to 2nd Div.", types: ["allscenarios","2nddiv"] },
  { name: "Defeat Shuzer on the Koorong Tarmac in 4 turns or less", types: ["red","soloshuzer","fewturns"] },
  { name: "Turn a monster into a BlackDragon", types: ["absorb","blackdragon"] },
];
bingoList[23] = [
  { name: "Defeat Hell'sLord without using any magic", types: ["finalboss","lordhell","nomagic"] },
  { name: "Defeat MasterRing with 5 monsters in your party", types: ["finalboss","masterring","allmonsters"] },
  { name: "Defeat GenocideHeart with 4 non-mecs in your party", types: ["finalboss","genocideheart","t260","4mecs"] },
  { name: "Defeat Virgil in 2 turns", types: ["virgil","2turns"] },
  { name: "Obtain enough credits in the Junk Shop that your Item Rank resets to 1", types: ["junkshop","credits","resetrank"] },
  { name: "Obtain all of Asellus' endings", types: ["asellus","allendings"] },
  { name: "Obtain all of Emelia's endings", types: ["emelia","allendings"] },
];
bingoList[24] = [
  { name: "Defeat TimeLord before he uses OverDrive", types: ["boss","fewturns","time"] },
  { name: "Defeat Diva without using any healing items or abilities", types: ["noheal","diva","finalboss"] },
  { name: "Defeat BossX without using Red", types: ["bossx","nomain","red","finalboss"] },
  { name: "Defeat Virgil in 2 turns without the use of Hidebehind", types: ["virgil","2turn","nohidebehind"] },
  { name: "Turn a monster into a Mariche", types: ["absorb","mariche"] },
];
bingoList[25] = [
  { name: "Obtain 3 of the 4 DSC moves during the Nidheg fight before escaping Despair as Emelia", types: ["dsc","multispark","nearimpossible"] },
  { name: "Raise any stat of any character to its max value without boosts from absorbs or equipment", types: ["maxstat","noboost"] },
  { name: "Defeat Spriggan with Lute in the main party", types: ["finalboss","mondo","luteinparty"] },
  { name: "Perform a Quick Save Skip past the river cutscene in Owmi", types: ["skip","glitch","owmi","quicksave"] },
  { name: "Defeat Hell'sLord as Blue without using any magic at BR1", types: ["finalboss","lordhell","blue","nomagic","lowbr"] },
  { name: "Complete any scenario without recruiting or using additional characters", types: ["alone","completescenario"] },
  { name: "Complete T260G's scenario at BR2", types: ["lowbr","completescenario","brmanip"] },
  { name: "Complete Red's scenario at BR1", types: ["lowbr","completescenario"] },
  { name: "Defeat the Masked Fiend in 2nd Div.", types: ["2nddiv","secretboss"] },
  { name: "Defeat Suzaku without using any attacking moves", types: ["suzaku","noattack"] },
];
