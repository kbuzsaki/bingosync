var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
    
bingoList[1] = [
    {name: "Unequip a cursed item", types: ["action"]},
    {name: "Fix a rusted weapon", types: ["forge"]},
    {name: "Own 3 Lucky Medals", types: ["item"]},
	{name: "Own 3 Vials", types: ["item"]},
	{name: "Obtain a Potion", types: ["item"]},
	{name: "Obtain a Water of Life", types: ["item"]},
	{name: "Defeat Briggs", types: ["boss"]},
];
 
bingoList[2] = [
    {name: "Defeat the Chest Beaters", types: ["boss"]},
    {name: "Defeat King Scorpion", types: ["boss"]},
    {name: "Collect the Tremor Bit chest", types: ["loc"]},
	{name: "Talk to a hint NPC", types: ["action"]},
	{name: "Learn Sand", types: ["psy"]}
];
    
bingoList[3] = [
	{name: "Befriend the Djinni in Taopo Swamp", types: ["djinn_s"]},
	{name: "Collect the Lemuria fountain item", types: ["loc"]},
	{name: "Enter Air Rock's tablet room", types: ["clear", "rocks", "airs_rock"]},
	{name: "Collect the Air's Rock summon tablet", types: ["loc", "summon", "airs_rock"]},
	{name: "Collect the Fujin Shield chest", types: ["loc", "airs_rock"]}
];
 
bingoList[4] = [
    {name: "Learn Mind Read + Reveal", types: ["psy"]},
	{name: "Learn Frost + Douse", types: ["psy"]},
	{name: "Befriend the Djinni in Aqua Rock", types: ["djinn_s", "aqua_rock"]},
	{name: "Drain the underground lake in Mikasalla", types: ["action"]},
	{name: "Learn Growth + Whirlwind", types: ["psy"]},
	{name: "Befriend the Djinni in Apojii Islands", types: ["djinn_s"]}
];

bingoList[5] = [
	{name: "Own 2 shirts", types: ["item"]},
	{name: "Own 2 boots", types: ["item"]},
	{name: "Own 2 rings", types: ["item"]},
	{name: "Defeat Aqua Hydra", types: ["boss"]},
	{name: "Obtain the Black Crystal", types: ["item"]},
	{name: "Own 8 stat-boosting items", types: ["item"]},
	{name: "Collect the item on the Dancing Idol pedestal", types: ["loc", "gaia_rock"]},
];
 
bingoList[6] = [
	{name: "Learn Zagan or Haures", types: ["summon"]},
	{name: "Learn Megaera or Flora", types: ["summon"]},
	{name: "Learn Moloch or Ulysses", types: ["summon"]},
    {name: "Learn Eclipse or Coatlicue", types: ["summon"]},
	{name: "Obtain the Mysterious Card", types: ["item"]},
    {name: "Obtain the Trainer's Whip", types: ["item"]},
    {name: "Obtain the Tomegathericon", types: ["item"]}
];
 
bingoList[7] = [	
	{name: "Obtain Fire Brand or Sol Blade", types: ["equip"]},
	{name: "Obtain Meditation Rod or Thanatos Mace", types: ["equip"]},
	{name: "Obtain Masamune or Phaeton's Blade", types: ["equip"]}
];
 
bingoList[8] = [
	{name: "Learn the Daedalus summon", types: ["summon"]},
    {name: "Learn the Catastrophe summon", types: ["summon"]},
    {name: "Learn the Azul summon", types: ["summon"]},
	{name: "Forge with a Tear Stone", types: ["forge"]},
	{name: "Forge with Dragon Skin", types: ["forge"]},
	{name: "Forge with a Salamander Tail", types: ["forge"]},
	{name: "Forge with a Sylph Feather", types: ["forge"]}
];
 
bingoList[9] = [
	{name: "Befriend 5 Venus Djinn", types: ["djinn_n", "venus"]},
    {name: "Befriend 5 Mars Djinn", types: ["djinn_n", "mars"]},
    {name: "Befriend 5 Jupiter Djinn", types: ["djinn_n", "jupiter"]},
    {name: "Befriend 5 Mercury Djinn", types: ["djinn_n", "mercury"]},
	{name: "Have someone be an Ascetic", types: ["class"]},
    {name: "Have someone be a Shaman", types: ["class"]},
    {name: "Have someone be a Cavalier", types: ["class"]},
    {name: "Have someone be an Enchanter", types: ["class"]}
];
 
bingoList[10] = [
	{name: "Obtain 2 prongs", types: ["item"]},
	{name: "Obtain 2 trading sequence items", types: ["item"]},
	{name: "Obtain 2 keys", types: ["item"]}
];

bingoList[11] = [
	{name: "Befriend Spritz, Flower or Crystal", types: ["djinn_r"]},
	{name: "Befriend Granite, Flash or Shade", types: ["djinn_r"]},
    {name: "Befriend Aroma, Ether or Ember", types: ["djinn_r"]},
	{name: "Befriend Zephyr, Coal or Vine", types: ["djinn_r"]}
];

bingoList[12] = [
	{name: "Collect the chest in Gondowan Settlement", types: ["loc"]},
    {name: "Collect the chest in Hesperia Settlement", types: ["loc"]},
	{name: "Collect the chest in SW Atteka Islet", types: ["loc"]},
	{name: "Obtain the Trident", types: ["item"]},
	{name: "Own 2 Mist Potions", types: ["item"]},
	{name: "Collect the item in both Indra and Osenia Cavern", types: ["loc"]},
];
 
bingoList[13] = [
	{name: "Obtain the Erinyes' Tunic", types: ["equip"]},
	{name: "Obtain the Iris Robe", types: ["equip"]},
	{name: "Obtain the Alastor's Hood", types: ["equip"]},
	{name: "Obtain the Fujin Shield", types: ["equip"]},
	{name: "Obtain the Jester's Armlet", types: ["equip"]},
	{name: "Obtain the Valkyrie Mail", types: ["equip"]}
];
 
bingoList[14] = [
	{name: "Use the Ruin Key", types: ["action"]},
	{name: "Defeat Serpent", types: ["boss", "rocks", "gaia_rock"]},
	{name: "Defeat all overworld Djinn (6)", types: ["djinn_n", "djinn_s"]},
	{name: "Defeat each Doomsayer-type enemy (2)", types: ["enemy"]},
	{name: "Obtain the Corn", types: ["item"]},
	{name: "Learn Burst + Parch", types: ["psy"]}
];

bingoList[15] = [
	{name: "Reach the top of Tundaria Tower", types: ["clear", "towers"]},
	{name: "Reach the top of Shrine of the Sea God", types: ["clear", "towers"]},
	{name: "Reach the top of Ankohl Ruins", types: ["clear", "towers"]},
	{name: "Enter Aqua Rock's tablet room", types: ["clear", "rocks", "aqua_rock"]},
	{name: "Clear Gabomba Statue", types: ["clear"]}
];
 
bingoList[16] = [
	{name: "Befriend 7 Venus Djinn", types: ["djinn_n", "venus"]},
    {name: "Befriend 7 Mars Djinn", types: ["djinn_n", "mars"]},
    {name: "Befriend 7 Jupiter Djinn", types: ["djinn_n", "jupiter"]},
    {name: "Befriend 7 Mercury Djinn", types: ["djinn_n", "mercury"]},
	{name: "Befriend 20 Djinn", types: ["djinn_n"]}
];
 
bingoList[17] = [
	{name: "Mind Read the cow in Lemuria", types: ["action"]},
	{name: "Obtain the Laughing or Healing Fungus", types: ["item"]},
    {name: "Learn Cyclone + Hover", types: ["psy"]},
	{name: "Learn Tremor + Catch", types: ["psy"]},
	{name: "Befriend the Djinni in SW Atteka Islet", types: ["djinn_s"]},
	{name: "Defeat 3 Mad Plants", types: ["enemy"]},
];
 
bingoList[18] = [
	{name: "Forge with Orihalcon", types: ["forge"]},
    {name: "Forge with a Golem Core", types: ["forge"]},
    {name: "Forge with Mythril Silver", types: ["forge"]},
    {name: "Forge with Dark Matter", types: ["forge"]}
];
 
bingoList[19] = [
	{name: "Learn Teleport", types: ["psy"]},
	{name: "Learn Blaze", types: ["psy"]},
	{name: "Defeat Avimander", types: ["boss"]},
	{name: "Befriend the Djinni in Gabomba Catacombs", types: ["djinn_s"]},
    {name: "Befriend the Djinni in Lemuria", types: ["djinn_s"]},
    {name: "Defeat each Assassin-type enemy (2)", types: ["enemy"]}
];
 
bingoList[20] = [
	{name: "Have someone be a Ninja", types: ["class"]},
    {name: "Have someone be a Medium", types: ["class"]},
    {name: "Have someone be a Ranger", types: ["class"]},
    {name: "Have someone be a Dragoon", types: ["class"]},
	{name: "Befriend Ground or Petra", types: ["djinn_r", "venus"]},
    {name: "Befriend Lull or Kite", types: ["djinn_r", "jupiter"]},
    {name: "Befriend Dew or Balm", types: ["djinn_r", "mercury"]},
    {name: "Befriend Corona or Kindle", types: ["djinn_r", "mars"]}
];
 
bingoList[21] = [
	{name: "Use the cannon in Loho", types: ["action"]},
	{name: "Learn Force", types: ["psy"]},
	{name: "Defeat Poseidon", types: ["boss"]},
	{name: "Enter the innermost room of Taopo Swamp", types: ["clear"]},
	{name: "Collect the Izumo summon tablet", types: ["loc"]},
	{name: "Obtain the Mars Star", types: ["item"]}
];
 
bingoList[22] = [
	{name: "Enter Magma Rock's tablet room", types: ["clear", "rocks"]},
	{name: "Befriend both Djinn in Contigo", types: ["djinn_s"]},
    {name: "Collect the Teleport Lapis chest", types: ["loc"]},
    {name: "Collect the Angara Cavern summon tablet", types: ["loc"]},
    {name: "Defeat each Merman-type enemy (3)", types: ["enemy"]}
];
 
bingoList[23] = [
    {name: "Learn both Lift and Carry", types: ["psy"]},
    {name: "Befriend the Djinni in Trial Road", types: ["djinn_s"]},
	{name: "Defeat a Phoenix-type enemy", types: ["enemy"]},
	{name: "Defeat each Roc-type enemy (2)", types: ["enemy"]}
];
 
bingoList[24] = [
	{name: "Defeat a Blue Dragon-type enemy", types: ["enemy"]},
	{name: "Defeat an Aka Manah-type enemy", types: ["enemy"]},
	{name: "Defeat each Sea Dragon-type enemy (3)", types: ["enemy"]},
	{name: "Befriend the Djinni in Yampi Desert Cave", types: ["djinn_s"]}
];
 
bingoList[25] = [
	{name: "Enter the boss room in Yampi Desert Cave", types: ["loc"]},
	{name: "Enter the boss room in Treasure Isle", types: ["loc"]},
	{name: "Enter the boss room in Islet Cave", types: ["loc"]},
	{name: "Clear Jupiter Lighthouse", types: ["clear"]},
    {name: "Defeat the Flame Dragons", types: ["boss"]},
	{name: "Defeat Moapa and co.", types: ["boss"]}
];
