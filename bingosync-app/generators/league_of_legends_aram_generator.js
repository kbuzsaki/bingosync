bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
{ name: "Get a pentakill.", types: ["Multikill"] },
{ name: "Deny a pentakill (after quadra).", types: [] },
{ name: "Get a triplekill with one spellcast.", types: ["MultikillOneSpell"] },
{ name: "Die in fountain while all (enemy) towers are up.", types: [] },
];
bingoList[2] = [
{ name: "Get 1000 AP.", types: ["AP"] },
{ name: "Have the same amount of kills, deaths and assists.", types: ["KDA"] },
{ name: "Play a game with only melee champs in your team.", types: ["Teamcomp"] },
{ name: "Die only 1 time.", types: ["Dying"] },
];
bingoList[3] = [
{ name: "Either team gets a pentakill.", types: ["Multikill"] },
{ name: "Destroy the enemy inhibitor 3 times.", types: [] },
{ name: "Deal 3000 damage with the keystone mastery.", types: ["Damage"] },
{ name: "Both teams get aced at the same time.", types: [] },
];
bingoList[4] = [
{ name: "Win a game with 0 Kills.", types: [] },
{ name: "Kill a tower before 5min.", types: [] },
{ name: "Hard cc 5 enemies at the same time.", types: [] },
{ name: "Flash to block an ability that would hit an ally under 100/200/300 HP up to Lvl 5/10/15.", types: [] },
];
bingoList[5] = [
{ name: "All 5 teammembers reroll.", types: [] },
{ name: "Get an ace before level 6.", types: [] },
{ name: "Get 750 AP.", types: ["AP"] },
{ name: "Get a doublekill with one spellcast.", types: ["MultikillOneSpell"] },
];
bingoList[6] = [
{ name: "Win 4 games.", types: ["Winning"] },
{ name: "Play a game with at least 4 supportchamps.", types: ["Teamcomp"] },
{ name: "Have the same amount of deaths and assists.", types: ["KDA"] },
{ name: "Get 0 cs.", types: ["Cs"] },
];
bingoList[7] = [
{ name: "Get a quadrakill.", types: ["Multikill"] },
{ name: "Win a game with at least 3 yordles on your team.", types: ["Teamcomp"] },
{ name: "Have 5 champs of a specific region in your team.", types: ["Teamcomp"] },
{ name: "Play with a full skinset team.", types: ["Teamcomp"] },
];
bingoList[8] = [
{ name: "Proxy an entire minion wave.", types: [] },
{ name: "Die only 2 times.", types: ["Dying"] },
{ name: "Mitigate 60k dmg.", types: ["Mitigation"] },
{ name: "Reach 600 ms.", types: ["Movespeed"] },
{ name: "Build 3 complete items that build out of Sheen.", types: ["StackItems"] },
];
bingoList[9] = [
{ name: "Fully stack tear in 7min.", types: ["Tear"] },
{ name: "Deal 2000 damage with the keystone mastery.", types: ["Damage"] },
{ name: "Buy 3 complete lifesteal items (no startitem).", types: [] },
{ name: "Have the same amount of kills and assists.", types: ["KDA"] },
{ name: "Win within 15min.", types: ["Wintime"] },
];
bingoList[10] = [
{ name: "Get a triplekill.", types: ["Multikill"] },
{ name: "Get 200 armor or MR.", types: ["Resistances"] },
{ name: "At least 3 Rabadons out of all 10 players.", types: [] },
{ name: "Get 100 Bonus AD and 100 AP.", types: ["AD"," AP"] },
{ name: "Build no AP/AD on only AP/AD scaling champ.", types: ["AD"," AP"] },
];
bingoList[11] = [
{ name: "Use stopwatch and zhonyas in quick succession.", types: [] },
{ name: "Win 3 games.", types: ["Winning"] },
{ name: "Get 500 AP.", types: ["AP"] },
{ name: "Deal 700 dmg with one crit.", types: ["Critdmg"] },
];
bingoList[12] = [
{ name: "Kill a tower before 7min.", types: [] },
{ name: "Heal/shield no ally (as heal champ).", types: [] },
{ name: "Build no health on a tank.", types: [] },
{ name: "Overcap CDR by 20% (60% total CDR).", types: ["Stats"] },
{ name: "Mitigate 50k dmg.", types: ["Mitigation"] },
{ name: "Have the same amount of kills and deaths.", types: ["KDA"] },
];
bingoList[13] = [
{ name: "Get the lasthit on the nexus.", types: [] },
{ name: "Deal most damage out of all 10 players in a game.", types: [] },
{ name: "Feed the same poro 10 snacks.", types: [] },
{ name: "Heal 20k dmg.", types: ["Heal"] },
];
bingoList[14] = [
{ name: "Deal more than 125k dmg as team.", types: ["Teamdmg"] },
{ name: "Reach 550 ms.", types: ["Movespeed"] },
{ name: "Finish the Game with only identical finished items.", types: ["StackItems"] },
{ name: "Get 75 cs.", types: ["Cs"] },
];
bingoList[15] = [
{ name: "Don't kill a tower before 15min.", types: ["Tower"] },
{ name: "Accumulate 10k gold.", types: ["Gold"] },
{ name: "Have 5k max health.", types: ["HP"] },
{ name: "Take 30k damage in a game.", types: ["Damage taken"] },
{ name: "Get executed.", types: [] },
];
bingoList[16] = [
{ name: "Fully stack tear in 8min.", types: ["Tear"] },
{ name: "Get 100% critchance.", types: ["Crit"] },
{ name: "Deal 1000 damage with the keystone mastery.", types: ["Damage"] },
{ name: "Get 150 armor or MR.", types: ["Resistances"] },
{ name: "Deal 500 dmg with one crit.", types: ["Critdmg"] },
{ name: "Fully stack a tear (but don't upgrade it).", types: [] },
];
bingoList[17] = [
{ name: "All 10 players have a skin (without RP boost).", types: [] },
{ name: "Buy at least 1k mana as manaless champ.", types: [] },
{ name: "Die only 3 times.", types: ["Dying"] },
{ name: "Finish with 6 tears at the end of the game.", types: ["StackItems"] },
{ name: "Get 50 cs.", types: ["Cs"] },
];
bingoList[18] = [
{ name: "Don't skill Q until Lvl 12.", types: ["Skillpoints"] },
{ name: "Don't skill W until Lvl 12.", types: ["Skillpoints"] },
{ name: "Don't skill E until Lvl 12.", types: ["Skillpoints"] },
{ name: "Heal 15k dmg.", types: ["Heal"] },
{ name: "Deal more than 100k dmg as team.", types: ["Teamdmg"] },
{ name: "Win within 20min.", types: ["Wintime"] },
];
bingoList[19] = [
{ name: "Kill a tower before 9min.", types: ["Tower"] },
{ name: "Accumulate 5k gold.", types: ["Gold"] },
{ name: "Have 4k max health.", types: ["HP"] },
{ name: "But my body is telling me yeeees (always follow snowball).", types: ["Snowball"] },
{ name: "Take 25k damage in a game.", types: ["Damage taken"] },
{ name: "Reach 500 ms.", types: ["Movespeed"] },
];
bingoList[20] = [
{ name: "Build at least 2500 HP as adc.", types: [] },
{ name: "Get above 50% tenacity.", types: [] },
{ name: "Get 25 cs.", types: ["Cs"] },
{ name: "BM with Lvl 7 mastery after you die.", types: [] },
{ name: "My mind is telling me no (never follow snowball).", types: ["Snowball"] },
{ name: "Deal 300 dmg with one crit.", types: ["Critdmg"] },
{ name: "Sell one fullbuild item (and dont rebuy it).", types: [] },
];
bingoList[21] = [
{ name: "Run neither flash nor snowball.", types: [] },
{ name: "Reach level 18.", types: [] },
{ name: "Mitigate 40k dmg.", types: ["Mitigation"] },
{ name: "Win 2 games.", types: ["Winning"] },
{ name: "Get 100 armor or MR.", types: ["Resistances"] },
];
bingoList[22] = [
{ name: "Don't skill R until Lvl 9.", types: ["Skillpoints"] },
{ name: "Troll a teammate with a wall.", types: [] },
{ name: "Heal 10k dmg.", types: ["Heal"] },
{ name: "Accumulate 3k gold.", types: ["Gold"] },
{ name: "Deal more than 75k dmg as team.", types: ["Teamdmg"] },
{ name: "Win within 25min.", types: ["Wintime"] },
];
bingoList[23] = [
{ name: "Fully stack tear in 9 min.", types: ["Tear"] },
{ name: "Have 3k max health.", types: ["HP"] },
{ name: "Buy a potion of every kind.", types: [] },
{ name: "Buy Twin Shadows and roleplay while activating (BOOOO).", types: [] },
];
bingoList[24] = [
{ name: "Get a doublekill.", types: ["Multikill"] },
{ name: "Flash for a healthstation.", types: [] },
{ name: "Take 20k damage in a game.", types: ["Damage taken"] },
{ name: "Complete a Sheen item.", types: [] },
];
bingoList[25] = [
{ name: "Get no boots.", types: [] },
{ name: "Sell no items.", types: [] },
{ name: "Buy no starting items.", types: [] },
{ name: "Use no potions of any kind.", types: [] },
];
