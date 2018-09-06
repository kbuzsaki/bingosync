//Uses SRL Generator
bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

//Version 1.2.3 of Pikmin 2 Bingo

//Changes since 1.2.2:
//Moved "Paradoxical Enigma (CoS2) and Rubber Ugly (SR6)" from 23 to 24
//Moved "Mirrored Stage (SR3)" from 21 to 23
//Moved "Onion Replica (PP)" from 20 to 21
//Moved "Destroy both electric gates in AW" from 10 to 15
//Moved "Collect an Empress Bulblax" from 5 to 1
//Moved "Kill Louie twice" from 1 to 5
//Added "Survival Ointment (WFG4) and Healing Cask (AW)" to difficulty 2
//Added "Superstick Textile (WFG3) and Exhausted Superstick (SCx1)" to difficulty 15
//Added "6 fully buried treasures" to difficulty 20
//Removed "Never do Early Blues"
//Removed "Collect all above-ground treasures in PP"

//Changes since 1.2.1:
//Reworded a few goals
//Fixed a bug with text going outside the box for some goals
//Changed the Bottlecaps / Milk Covers goal to be more balanced between versions
//Changed the goal "4 treasures worth 200 Pokos or more" to 6
//Changed the goal "4 treasures worth 30 Pokos or fewer" to 7, and to be more balanced between versions

//Changes since 1.2:
//Made all of the changes suggested here: https://pastebin.com/54aDpt0f
//Moved other things around a little bit to have at least 4 goals per difficulty

//Changes since 1.1:
//Made some vague goals more specific
//Removed some stupid goals (No Yellows, No Sprays, No Treasure Gauge, and 2500 Pokos)
//Made some much needed difficulty changes to some goals
//Added many goals for certain treasure "themes":
//Food treasures, bottle caps, BK fossils, the 3 gemstones, SH marbles, SCx capacitors, scallop shells, rubber ducks, and batteries.

//Changes since 1.0:
//Made some vague goals more specific
//Added goals for (large number) of certain types of Pikmin
//Unbalanced things a lot. Let me explain:
//People complained about how every line seemed too hard, and how no one line seemed better than others.
//Previously I had a lot of types to filter what goals could be in the same row,
//to prevent, say, 2 specific treasures in the same cave.
//I removed a lot of those entirely, so it becomes more possible for "unbalanced" cards.


var bingoList = [];
bingoList[1] = [
  { name: "Get a Pikmin Extinction inside a cave", types: ["selfharm"] },
  { name: "Toxic Toadstool (WFG4)", types: ["wfg"] },
  { name: "Prototype Detector (HoB5)", types: ["empress","hipoko"] },
  { name: "Collect an Empress Bulblax", types: ["empress"] },
];
bingoList[2] = [
  { name: "Enter SmC", types: ["caveenter"] },
  { name: "Kill 10 Mitites on HoB4", types: ["hobenemies"] },
  { name: "Kill the Burrowing Snagret in VoR", types: ["snagret"] },
  { name: "Discover Yellow Pikmin", types: ["ylw"] },
  { name: "Survival Ointment (WFG4) and Healing Cask (AW)", types: ["theme"] },
];
bingoList[3] = [
  { name: "Get a non-Red Pikmin Extinction", types: ["ylw","selfharm"] },
  { name: "Pilgrim Bulb (AW)", types: ["aw"] },
  { name: "Have a Leaf Pikmin in the ground mature into a Flower Pikmin", types: ["mature"] },
  { name: "Collect a 1-Pellet of each color", types: ["pellet"] },
];
bingoList[4] = [
  { name: "5 food treasures", types: ["theme"] },
  { name: "Activate every dormant bomb rock on SCx7", types: ["scxbomb"] },
  { name: "Make a Red Candypop Bud wilt", types: ["red","cpb"] },
  { name: "Enter all 4 caves in AW", types: ["caveenter"] },
];
bingoList[5] = [
  { name: "60 Yellows", types: ["ylw","onetype"] },
  { name: "Collect a 5-Pellet of each color", types: ["pellet"] },
  { name: "Collect 2 Burrowing Snagret heads", types: ["snagret"] },
  { name: "Kill Louie twice", types: ["selfharm"] },
];
bingoList[6] = [
  { name: "Destroy the poison gate in VoR", types: ["poisongate"] },
  { name: "Crystal Clover (BK1) and Crystal King (BK4)", types: ["theme"] },
  { name: "Trigger all 3 hazard cutscenes (Poison, Fire, and Water)", types: ["selfharm"] },
  { name: "Enter all 3 caves in VoR", types: ["caveenter"] },
];
bingoList[7] = [
  { name: "50 Reds, 50 Yellows, and 50 Blues", types: ["red","ylw","masspik"] },
  { name: "Kill 8 Blowhogs (of any kind)", types: ["xenemy"] },
  { name: "Fossilized Ursidae (VoR)", types: ["vor"] },
  { name: "Complete HoB", types: ["clear"] },
];
bingoList[8] = [
  { name: "Destroy a Burgeoning Spiderwort mold", types: ["mold"] },
  { name: "Turn 15 Bulbmin into other types", types: ["blb"] },
  { name: "8 Spicy Sprays", types: ["spray"] },
  { name: "Kill all enemies in HoB and WFG", types: ["allenemy"] },
];
bingoList[9] = [
  { name: "Kill all 3 Creeping Chrysanthemums in AW", types: ["allenemy"] },
  { name: "Impediment Scourge (PP)", types: ["pp"] },
  { name: "Olimarnite Shell (BK3) and Colossal Fossil (BK6)", types: ["theme"] },
  { name: "Enter all 4 caves in PP", types: ["caveenter"] },
];
bingoList[10] = [
  { name: "Kill 8 Water Dumples", types: ["xenemy"] },
  { name: "Kill both Hermit Crawmads in PP", types: ["allenemy"] },
  { name: "45 Purples", types: ["onetype"] },
  { name: "Collect all 3 Wogpoles in AW", types: ["wogpole"] },
];
bingoList[11] = [
  { name: "Clear FC3", types: ["clear"] },
  { name: "Make 5 Candypop Buds in SCx wilt", types: ["cpb"] },
  { name: "Clear SCx3", types: ["clear"] },
  { name: "8 Bitter Sprays", types: ["spray"] },
  { name: "45 Whites", types: ["onetype"] },
];
bingoList[12] = [
  { name: "Aquatic Mine (PP)", types: ["pp"] },
  { name: "100 Pikmin of a single type", types: ["onetype","masspik"] },
  { name: "Kill 5 Bulbmin", types: ["blb","selfharm"] },
  { name: "The Key (CoS5)", types: ["easyboss","cos"] },
  { name: "Justice Alloy (SH7)", types: ["hardboss"] },
];
bingoList[13] = [
  { name: "Drain the main lake in PP", types: ["drain"] },
  { name: "Build all 3 bridges in AW", types: ["bridge"] },
  { name: "150 Reds", types: ["onetype","masspik","red"] },
  { name: "200 Total Pikmin", types: ["masspik"] },
];
bingoList[14] = [
  { name: "Temporal Mechanism (VoR)", types: ["vor","fiery"] },
  { name: "5 Spicy Sprays and 5 Bitter Sprays", types: ["spray"] },
  { name: "7 treasures worth 30 Pokos or fewer (10 if on JP)", types: ["lowpoko"] },
  { name: "Make 4 Candypop Buds in FC wilt", types: ["cpb"] },
  { name: "100 Blues", types: ["onetype","masspik"] },
];
bingoList[15] = [
  { name: "Destroy all 6 poison geysers in AW", types: ["poisongate","awgate"] },
  { name: "Collect 2 Gattling Groinks", types: ["xenemy"] },
  { name: "Thirst Activator (SCx7)", types: ["hipoko"] },
  { name: "Leviathan Feather (SH1) and Science Project (SH6)", types: ["lowpoko","theme"] },
  { name: "Destroy both electric gates in AW", types: ["elecgate","awgate"] },
  { name: "Superstick Textile (WFG3) and Exhausted Superstick (SCx1)", types: ["theme"] },
];
bingoList[16] = [
  { name: "Unspeakable Wonder (VoR)", types: ["vor"] },
  { name: "3 Explorer's Kit treasures", types: ["easyboss","hardboss"] },
  { name: "Collect all 3 Cannon Beetle corpses in VoR", types: ["allenemy"] },
  { name: "Petrified Heart (WFG2), Tear Stone (BK2), and Regal Diamond (CoS5)", types: ["theme"] },
];
bingoList[17] = [
  { name: "Clear GK4", types: ["clear"] },
  { name: "Kill 2 Fiery Bulblaxes", types: ["fiery"] },
  { name: "Build all 3 bridges in PP", types: ["bridge"] },
  { name: "Make a Yellow Candypop Bud wilt", types: ["ylw","cpb"] },
];
bingoList[18] = [
  { name: "6 treasures worth 200 Pokos or more (EC Globe doesn't count)", types: ["hipoko"] },
  { name: "100 Yellows", types: ["onetype","masspik","ylw"] },
  { name: "Clear SCx6", types: ["clear"] },
  { name: "4 bottle cap treasures (or 7 milk covers)", types: ["theme"] },
];
bingoList[19] = [
  { name: "Kill 5 Breadbugs", types: ["breadbug"] },
  { name: "Optical Illustration (PP)", types: ["pp","ppgate"] },
  { name: "Collect all 5 Wogpoles in PP", types: ["wogpole","ppgate"] },
  { name: "Stellar Orb (SCx9)", types: ["hardboss"] },
];
bingoList[20] = [
  { name: "Destroy both black gates in PP", types: ["blkgate","ppgate"] },
  { name: "Destroy all 3 electric gates in PP", types: ["elecgate","ppgate"] },
  { name: "Crystallized Telekenesis, Telepathy, and Clairvoyance (SH 1, 4, and 5)", types: ["theme"] },
  { name: "6 fully buried treasures", types: ["theme","vor"] },
];
bingoList[21] = [
  { name: "Collect the 20-Pellet in AW", types: ["pellet"] },
  { name: "Repugnant Appendage (FC8)", types: ["easyboss","empress"] },
  { name: "Clear FC6", types: ["clear"] },
  { name: "Onion Replica (PP)", types: ["pp","blkgate","void","lowpoko"] },
];
bingoList[22] = [
  { name: "Collect 8 Dweevils (of any kind)", types: ["xenemy"] },
  { name: "Destroy 4 poison gates", types: ["poisongate"] },
  { name: "Air Brake (AW)", types: ["aw"] },
  { name: "Network Mainbrain, Indomitable CPU, and Vacuum Processor (SCx 2, 6, and 7)", types: ["theme"] },
];
bingoList[23] = [
  { name: "Clear SH6", types: ["clear","lowpoko","snagret"] },
  { name: "Decorative Goo (AW)", types: ["awgate","aw"] },
  { name: "Memorial Shell (CoS3) and Scrumptious Shell (SR3)", types: ["theme"] },
  { name: "Mirrored Stage (SR3)", types: [] },
];
bingoList[24] = [
  { name: "Professional Noisemaker (SmC5)", types: ["hardboss"] },
  { name: "Endless Repository (SR5)", types: [] },
  { name: "Paradoxical Enigma (CoS2) and Rubber Ugly (SR6)", types: ["theme"] },
  { name: "Courage Reactor (VoR), Durable Energy Cell (SR2), and Proton AA (SmC4)", types: ["theme"] },
];
bingoList[25] = [
  { name: "Clear SmC3", types: ["clear"] },
  { name: "Clear SmC4", types: ["clear"] },
  { name: "Amplified Amplifier (SR7)", types: ["easyboss"] },
  { name: "Clear SR6", types: ["clear"] },
];
