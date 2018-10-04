bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

//Version 1.3.1 of Pikmin 2 Bingo

//Changes since 1.3:
//The "Region Friendly Update"
//Renamed a lot of goals to include PAL names for certain treasures
//Changed "6 treasures worth 200 Pokos or more" to "7 treasures worth 160 Pokos or more" (more PAL friendly, accounts for new race file setup)
//Changed "7 treasures worth 30 Pokos or fewer (10 if on JP)" to "6 treasures worth 25 Pokos or fewer" (less biased towards NTSC-J)
//Changed "Courage Reactor (VoR), Durable Energy Cell (SR2), and Proton AA (SmC4)" to remove Courage Reactor (accounts for new race file setup)
//Added "12 treasures worth exactly 100 Pokos" to difficulty 20
//Added "5 above ground treasures" to difficulty 1
//Removed "4 bottle cap treasures (7 milk cover treasures if on JP)" (less biased towards NTSC-J, more PAL friendly)
//Removed "Survival Ointment (WFG4) and Healing Cask (AW)" (the theme only makes sense on NTSC-U)

//Changes since 1.2.3:
//Completely revamped the difficulties of nearly every goal
//All changes can be seen here: https://docs.google.com/spreadsheets/d/1vP53wri6P6i5DYWvKPWRSfiO2v--OghUmD7MYI716ew/edit?usp=sharing
//Completely revamped the type system; too complicated to explain here
//Reworded a few goals
//Removed: "Collect the 20-Pellet in AW", "Destroy both electric gates in AW", "Destroy both black gates in PP", "Destroy all 3 electric gates in PP", "Destroy 4 poison gates", and "Decorative Goo (AW)"

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
  { name: "Discover Yellow Pikmin", types: ["1"] },
  { name: "Kill all 10 Mitites on HoB4", types: ["6"] },
  { name: "Toxic Toadstool (WFG4)", types: ["10"] },
  { name: "5 above ground treasures", types: ["11"] },
];
bingoList[2] = [
  { name: "Collect a 1-Pellet of each color", types: ["2"] },
  { name: "Collect an Empress Bulblax", types: ["7"] },
  { name: "Prototype Detector (HoB5)", types: ["10"] },
  { name: "Get a Pikmin Extinction inside a cave", types: ["12"] },
];
bingoList[3] = [
  { name: "Collect a 5-Pellet of each color", types: ["2"] },
  { name: "Collect all 3 Wogpoles in AW", types: ["7"] },
  { name: "Pilgrim Bulb (AW)", types: ["10"] },
  { name: "Destroy a Burgeoning Spiderwort mold", types: ["13"] },
];
bingoList[4] = [
  { name: "Make a Crimson Candypop Bud wilt", types: ["3"] },
  { name: "Collect 2 Burrowing Snagrets", types: ["7"] },
  { name: "Impediment Scourge (PP)", types: ["10"] },
  { name: "Kill Louie twice", types: ["12"] },
];
bingoList[5] = [
  { name: "60 Yellows", types: ["1"] },
  { name: "Kill all 3 Creeping Chrysanthemums in AW", types: ["6"] },
  { name: "Aquatic Mine (PP)", types: ["10"] },
  { name: "Get a non-Red Pikmin Extinction", types: ["12"] },
];
bingoList[6] = [
  { name: "8 Spicy Sprays", types: ["4"] },
  { name: "Kill the Burrowing Snagret in VoR", types: ["6"] },
  { name: "Complete HoB", types: ["8"] },
  { name: "Kill 5 Bulbmin (Children, not parents)", types: ["12"] },
];
bingoList[7] = [
  { name: "50 Reds, 50 Yellows, and 50 Blues", types: ["1"] },
  { name: "Kill 8 Water Dumples", types: ["6"] },
  { name: "Enter all 4 caves in AW", types: ["9"] },
  { name: "Trigger all 3 hazard cutscenes (Poison, Fire, and Water)", types: ["12"] },
];
bingoList[8] = [
  { name: "100 Blues", types: ["1"] },
  { name: "Kill both Hermit Crawmads in PP", types: ["6"] },
  { name: "Fossilized Ursidae (VoR)", types: ["10"] },
  { name: "Activate every dormant Bomb Rock on SCx7", types: ["13"] },
];
bingoList[9] = [
  { name: "200 Total Pikmin", types: ["1"] },
  { name: "Kill 8 Blowhogs (of any kind)", types: ["6"] },
  { name: "The Key (CoS5)", types: ["10"] },
  { name: "Have a Leaf Pikmin in the ground mature into a Flower Pikmin", types: ["13"] },
];
bingoList[10] = [
  { name: "100 Pikmin of a single type", types: ["1"] },
  { name: "Kill all enemies in HoB and WFG", types: ["6"] },
  { name: "Justice Alloy (SH7)", types: ["10"] },
  { name: "5 food treasures", types: ["11"] },
];
bingoList[11] = [
  { name: "45 Purples", types: ["1"] },
  { name: "Clear GK4", types: ["8"] },
  { name: "Enter SmC", types: ["9"] },
  { name: "4 Explorer's Kit treasures", types: ["11"] },
];
bingoList[12] = [
  { name: "100 Yellows", types: ["1"] },
  { name: "Collect 2 Gatling Groinks", types: ["7"] },
  { name: "Enter all 3 caves in VoR (EC must be entered again)", types: ["9"] },
  { name: "Crystal Clover (BK1) and Crystal King (BK4)", types: ["11"] },
];
bingoList[13] = [
  { name: "150 Reds", types: ["1"] },
  { name: "Clear FC3", types: ["8"] },
  { name: "Air Brake (AW)", types: ["10"] },
  { name: "Leviathan Feather (SH1) and Science Project (SH6)", types: ["11"] },
];
bingoList[14] = [
  { name: "45 Whites", types: ["1"] },
  { name: "Clear SCx3", types: ["8"] },
  { name: "Thirst Activator (SCx7)", types: ["10"] },
  { name: "Olimarnite Shell (BK3) and Colossal Fossil (BK6)", types: ["11"] },
];
bingoList[15] = [
  { name: "Drain the main lake in PP", types: ["5"] },
  { name: "Clear SCx6", types: ["8"] },
  { name: "Stellar Orb (SCx9)", types: ["10"] },
  { name: "Superstick Textile (WFG3) and Exhausted Superstick (SCx1)", types: ["11"] },
];
bingoList[16] = [
  { name: "Make a Golden Candypop Bud wilt", types: ["3"] },
  { name: "Clear FC6", types: ["8"] },
  { name: "Repugnant Appendage (FC8)", types: ["10"] },
  { name: "7 treasures worth 160 Pokos or more", types: ["11"] },
];
bingoList[17] = [
  { name: "Make 5 Candypop Buds in SCx wilt", types: ["3"] },
  { name: "Clear SH6", types: ["8"] },
  { name: "Unspeakable Wonder (VoR)", types: ["10"] },
  { name: "Petrified Heart (WFG2), Tear Stone (BK2), and Regal Diamond (CoS5)", types: ["11"] },
];
bingoList[18] = [
  { name: "Build all 3 bridges in PP", types: ["5"] },
  { name: "Kill 2 Fiery Bulblaxes", types: ["6"] },
  { name: "Temporal Mechanism (VoR)", types: ["10"] },
  { name: "Crystallized Telekinesis, Telepathy, and Clairvoyance (SH1, 4, and 5)", types: ["11"] },
];
bingoList[19] = [
  { name: "Make 4 Candypop Buds in FC wilt", types: ["3"] },
  { name: "Kill 5 Breadbugs", types: ["6"] },
  { name: "Onion Replica (PP)", types: ["10"] },
  { name: "6 treasures worth 25 Pokos or fewer", types: ["11"] },
];
bingoList[20] = [
  { name: "Turn 15 Bulbmin into other types", types: ["3"] },
  { name: "Collect 8 Dweevils (of any kind)", types: ["7"] },
  { name: "Optical Illustration [US] / Abstract Masterpiece [PAL] (PP)", types: ["10"] },
  { name: "12 treasures worth exactly 100 Pokos", types: ["11"] },
];
bingoList[21] = [
  { name: "Build all 3 bridges in AW", types: ["5"] },
  { name: "Collect all 3 Cannon Beetles in VoR", types: ["7"] },
  { name: "Enter all 4 caves in PP", types: ["9"] },
  { name: "Network Mainbrain, Vacuum Processor, and Indomitable CPU (SCx2, 6, and 7)", types: ["11"] },
];
bingoList[22] = [
  { name: "5 Spicy Sprays and 5 Bitter Sprays", types: ["4"] },
  { name: "Collect all 5 Wogpoles in PP", types: ["7"] },
  { name: "Professional Noisemaker (SmC5)", types: ["10"] },
  { name: "6 fully buried treasures", types: ["11"] },
];
bingoList[23] = [
  { name: "Destroy the poison gate in VoR", types: ["5"] },
  { name: "Clear SmC3", types: ["8"] },
  { name: "Mirrored Stage (SR3)", types: ["10"] },
  { name: "Memorial Shell (CoS3) and Scrumptious Shell (SR3)", types: ["11"] },
];
bingoList[24] = [
  { name: "8 Bitter Sprays", types: ["4"] },
  { name: "Clear SmC4", types: ["8"] },
  { name: "Endless Repository [US] / Permanent Container [PAL] (SR5)", types: ["10"] },
  { name: "Paradoxical Enigma (CoS2) and Rubber Ugly (SR6)", types: ["11"] },
];
bingoList[25] = [
  { name: "Destroy all 6 gas pipes in AW", types: ["5"] },
  { name: "Clear SR6", types: ["8"] },
  { name: "Amplified Amplifier (SR7)", types: ["10"] },
  { name: "Durable Energy Cell (SR2) and Proton AA (SmC4)", types: ["11"] },
];
