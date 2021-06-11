var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
    
bingoList[1] = [
    {name: "Unequip a cursed item", types: ["action"]},
    {name: "Fix a rusted weapon", types: ["action", "forge"]},
    {name: "Learn Frost + Douse", types: ["psy"]},
    {name: "Obtain 3 Lucky Medals", types: ["item"]}
];
 
bingoList[2] = [
    {name: "Befriend Zephyr, Coal, Mud or Vine", types: ["djinn_r"]},
    {name: "Defeat the Chest Beaters", types: ["boss"]},
    {name: "Defeat King Scorpion", types: ["boss"]},
    {name: "Check the Tremor Bit chest", types: ["loc"]}
];
    
bingoList[3] = [
    {name: "Learn Zagan or Haures", types: ["summon"]},
    {name: "Defeat Aqua Hydra", types: ["boss"]},
    {name: "Check the Grindstone chest", types: ["loc"]},
    {name: "Check the Lemuria fountain item", types: ["loc"]},
    {name: "Learn Megaera or Flora", types: ["summon"]},
    {name: "Obtain Fire Brand or Sol Blade", types: ["equip"]}
];
 
bingoList[4] = [
    {name: "Befriend 5 Venus Djinn", types: ["djinn_n", "venus"]},
    {name: "Befriend 5 Mars Djinn", types: ["djinn_n", "mars"]},
    {name: "Befriend 5 Jupiter Djinn", types: ["djinn_n", "jupiter"]},
    {name: "Befriend 5 Mercury Djinn", types: ["djinn_n", "mercury"]}
];
 
bingoList[5] = [
    {name: "Learn Burst + Parch", types: ["psy"]},
    {name: "Enter Air Rock's tablet room", types: ["clear", "rocks", "airs_rock"]},
    {name: "Drain the underground lake in Mikasalla", types: ["action"]},
    {name: "Learn Mind Read + Reveal", types: ["psy"]},
    {name: "Befriend the Djinni in Aqua Rock", types: ["djinn_s", "aqua_rock"]}     
];
 
bingoList[6] = [
    {name: "Have someone be an Ascetic", types: ["class"]},
    {name: "Have someone be a Shaman", types: ["class"]},
    {name: "Have someone be a Cavalier", types: ["class"]},
    {name: "Have someone be an Enchanter", types: ["class"]},
    {name: "Learn 4 multi-element summons", types: ["summon"]}
];
 
bingoList[7] = [
    {name: "Check the Air's Rock summon tablet", types: ["loc", "summon", "airs_rock"]},
    {name: "Learn Moloch or Ulysses", types: ["summon"]},
    {name: "Learn Eclipse or Coatlicue", types: ["summon"]},
    {name: "Befriend the Djinni in Apojii Islands", types: ["djinn_s"]},
    {name: "Clear Gabomba Statue", types: ["clear"]}
];
 
bingoList[8] = [
    {name: "Befriend the Djinni in Taopo Swamp", types: ["djinn_s"]},
    {name: "Obtain 2 trading sequence items", types: ["item"]},
    {name: "Befriend Spritz, Flower or Crystal", types: ["djinn_r"]},
    {name: "Learn Sand", types: ["psy"]},
    {name: "Check the Dancing Idol pedestal", types: ["loc", "gaia_rock"]}
];
 
bingoList[9] = [
    {name: "Reach the top of Tundaria Tower", types: ["clear", "towers"]},
    {name: "Obtain Meditation Rod or Thanatos Mace", types: ["equip"]},
    {name: "Check the Fujin Shield chest", types: ["loc", "airs_rock"]},
    {name: "Obtain the Black Crystal", types: ["item"]},
    {name: "Use the Ruin Key", types: ["action"]},
    {name: "Obtain 2 Mist Potions", types: ["item"]}
];
 
bingoList[10] = [
    {name: "Defeat Serpent", types: ["boss", "rocks", "gaia_rock"]},
    {name: "Enter Aqua Rock's tablet room", types: ["clear", "rocks", "aqua_rock"]},
    {name: "Befriend Granite, Flash or Shade", types: ["djinn_r"]},
    {name: "Befriend Aroma, Ether or Ember", types: ["djinn_r"]},
    {name: "Obtain 2 prongs", types: ["item"]},
    {name: "Obtain the Erinyes' Tunic", types: ["equip"]}
];
 
bingoList[11] = [
    {name: "Obtain the Mysterious Card", types: ["item"]},
    {name: "Obtain the Trainer's Whip", types: ["item"]},
    {name: "Obtain the Tomegathericon", types: ["item"]},
    {name: "Learn Growth + Whirlwind", types: ["psy"]},
    {name: "Befriend the Djinni in Lemuria", types: ["djinn_s"]}
];
 
bingoList[12] = [
    {name: "Befriend Ground or Petra", types: ["djinn_r", "venus"]},
    {name: "Befriend Lull or Kite", types: ["djinn_r", "jupiter"]},
    {name: "Befriend Dew or Balm", types: ["djinn_r", "mercury"]},
    {name: "Befriend Corona or Kindle", types: ["djinn_r", "mars"]},
    {name: "Befriend 20 Djinn", types: ["djinn_n"]}
];
 
bingoList[13] = [
    {name: "Reach the top of Ankohl Ruins", types: ["clear", "towers"]},
    {name: "Defeat Avimander", types: ["boss"]},
    {name: "Obtain the Laughing or Healing Fungus", types: ["item"]},
    {name: "Learn Cyclone + Hover", types: ["psy"]},
    {name: "Befriend the Djinni in Gabomba Catacombs", types: ["djinn_s"]}
];
 
bingoList[14] = [
    {name: "Defeat 3 Mad Plants", types: ["enemy"]},
    {name: "Learn 7 multi-element summons", types: ["summon"]},
    {name: "Obtain Masamune or Phaeton's Blade", types: ["equip"]},
    {name: "Check the chest in SW Atteka Islet", types: ["loc"]},
    {name: "Learn Tremor + Catch", types: ["psy"]},
    {name: "Obtain the Corn", types: ["item"]}
];
 
bingoList[15] = [
    {name: "Obtain 2 keys", types: ["item"]},
    {name: "Check the Izumo summon tablet", types: ["loc"]},
    {name: "Learn Blaze", types: ["psy"]},
    {name: "Defeat all overworld Djinn (6)", types: ["djinn_n", "djinn_s"]},
    {name: "Defeat each Assassin-type enemy (2)", types: ["enemy"]},
    {name: "Obtain the Mars Star", types: ["item"]}
];
 
bingoList[16] = [
    {name: "Have someone be a Ninja", types: ["class"]},
    {name: "Have someone be a Medium", types: ["class"]},
    {name: "Have someone be a Ranger", types: ["class"]},
    {name: "Have someone be a Dragoon", types: ["class"]}
];
 
bingoList[17] = [
    {name: "Defeat Poseidon", types: ["boss"]},
    {name: "Obtain the Trident", types: ["item"]},
    {name: "Use the cannon in Loho", types: ["action"]},
    {name: "Obtain the Iris Robe", types: ["equip"]},
    {name: "Reach the top of Shrine of the Sea God", types: ["clear", "towers"]},
    {name: "Defeat a Blue Dragon-type enemy", types: ["enemy"]}
];
 
bingoList[18] = [
    {name: "Check the chest in Gondowan Settlement", types: ["loc"]},
    {name: "Check the chest in Hesperia Settlement", types: ["loc"]},
    {name: "Learn Teleport", types: ["psy"]},
    {name: "Enter the last room of Taopo Swamp", types: ["clear"]},
    {name: "Mind Read the cow in Lemuria", types: ["action"]},
    {name: "Defeat each Doomsayer-type enemy (2)", types: ["enemy"]}
];
 
bingoList[19] = [
    {name: "Forge with Orihalcon", types: ["action", "forge"]},
    {name: "Forge with a Golem Core", types: ["action", "forge"]},
    {name: "Forge with Mythril Silver", types: ["action", "forge"]},
    {name: "Forge with Dark Matter", types: ["action", "forge"]}
];
 
bingoList[20] = [
    {name: "Befriend 32 Djinn", types: ["djinn_n"]},
    {name: "Befriend 8 Venus Djinn", types: ["djinn_n", "venus"]},
    {name: "Befriend 8 Mars Djinn", types: ["djinn_n", "mars"]},
    {name: "Befriend 8 Jupiter Djinn", types: ["djinn_n", "jupiter"]},
    {name: "Befriend 8 Mercury Djinn", types: ["djinn_n", "mercury"]}
];
 
bingoList[21] = [
    {name: "Defeat Moapa and co.", types: ["boss"]},
    {name: "Enter Magma Rock's tablet room", types: ["clear", "rocks"]},
    {name: "Befriend the Djinni in SW Atteka Islet", types: ["djinn_s"]},
    {name: "Check the Teleport Lapis chest", types: ["loc"]},
    {name: "Check the Angara Cavern summon tablet", types: ["loc"]},
    {name: "Defeat each Merman-type enemy (3)", types: ["enemy"]}
];
 
bingoList[22] = [
    {name: "Learn the Daedalus summon", types: ["summon"]},
    {name: "Learn the Catastrophe summon", types: ["summon"]},
    {name: "Learn the Azul summon", types: ["summon"]},
    {name: "Learn Force", types: ["psy"]},
    {name: "Clear Jupiter Lighthouse", types: ["clear"]},
    {name: "Obtain the Alastor's Hood", types: ["item"]}
];
 
bingoList[23] = [
    {name: "Defeat the Flame Dragons", types: ["boss"]},
    {name: "Learn both Lift and Carry", types: ["psy"]},
    {name: "Befriend the Djinni in Trial Road", types: ["djinn_s"]},
    {name: "Defeat each Roc-type enemy (2)", types: ["enemy"]},
    {name: "Defeat an Aka Manah-type enemy", types: ["enemy"]}
];
 
bingoList[24] = [
    {name: "Defeat a Phoenix-type enemy", types: ["enemy"]},
    {name: "Defeat each Sea Dragon-type enemy (3)", types: ["enemy"]},
    {name: "Befriend the Djinni in Yampi Desert Cave", types: ["djinn_s"]},
    {name: "Check the Atteka Cavern summon tablet", types: ["loc"]}
];
 
bingoList[25] = [
    {name: "Defeat Valukar", types: ["boss"]},
    {name: "Defeat Sentinel", types: ["boss"]},
    {name: "Defeat Star Magician", types: ["boss"]}
];
