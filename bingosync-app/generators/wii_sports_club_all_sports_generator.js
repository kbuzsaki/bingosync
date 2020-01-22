bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
{ name: "Hit the duck (Tennis Runner Ducky)", types: ["tent","ente"] },
{ name: "Win a Single-Game Match (Tennis)", types: ["tenn"] },
{ name: "Finish any Classic 3 Hole course (Golf)", types: ["gol3"] },
{ name: "100-Pin Strike (Bowling Stamp)", types: ["bows"] },
];
bingoList[2] = [
{ name: "Smash Point/Smash Hitter (Tennis Stamp)", types: ["tens"] },
{ name: "Win a Two-Game Match (Tennis)", types: ["tenn"] },
{ name: "Finish any Resort 3 Hole course (Golf)", types: ["gol3"] },
];
bingoList[3] = [
{ name: "Score 100+ points (Tennis Ring Master)", types: ["tent"] },
{ name: "Finish any Lakeside 3 Hole course (Golf)", types: ["gol3"] },
{ name: "Pitch Perfect/Strike Stringer (Baseball Stamp)", types: ["bass"] },
];
bingoList[4] = [
{ name: "Score 1800+ points (Bowling 100-Pin Game)", types: ["bown"] },
{ name: "Under Par/Underachiever (Golf Stamp)", types: ["gols"] },
{ name: "Hit a duck (Golf)", types: ["gol3","ente","gol9","golt","gols"] },
{ name: "The Secret Strike/Secret Striker (Bowling Stamp)", types: ["bows"] },
];
bingoList[5] = [
{ name: "Score 120+ points (Tennis Tennis Moles)", types: ["tent"] },
{ name: "Score 400+ points (Golf Driver Challenge)", types: ["golt"] },
{ name: "Get a 20+ combo (Boxing Picky Puncher)", types: ["boxt"] },
];
bingoList[6] = [
{ name: "Hit 3+ big moles (Tennis Tennis Moles)", types: ["tent"] },
{ name: "Score 150+ points (Golf Chip-In Bingo)", types: ["golt"] },
{ name: "Get an Eagle (Golf)", types: ["gols"] },
{ name: "Score 750+ points (Baseball Pitch Perfect)", types: ["bast"] },
];
bingoList[7] = [
{ name: "Win a Three-Game Match (Tennis)", types: ["tenn"] },
{ name: "Score 34.0m/111.5ft.+ (Golf Pro Putter)", types: ["golt"] },
{ name: "The Scret Shot (Golf Stamp)", types: ["gols"] },
];
bingoList[8] = [
{ name: "Smash Return (Tennis Stamp)", types: ["tens"] },
{ name: "Get a strike in every mode (Bowling)", types: ["bown"] },
{ name: "Get 6+ balls into a hole (Golf Pro Putter)", types: ["golt"] },
{ name: "Gobble Gobble/Turkey Wrangler (Bowling Stamp)", types: ["bows"] },
];
bingoList[9] = [
{ name: "Chip It in/Chip-In Wizard (Golf Stamp)", types: ["gols"] },
{ name: "Hit 10+ Home Runs (Baseball Homer Hero)", types: ["bast"] },
{ name: "Home Run/Home Runner (Baseball Stamp)", types: ["bass"] },
{ name: "Catch 6+ objects (Baseball Pitch Perfect)", types: ["bast"] },
];
bingoList[10] = [
{ name: "30-Shot Rally (Tennis Stamp)", types: ["tens"] },
{ name: "Score 180+ points (Bowling 10-Pin Game)", types: ["bown"] },
{ name: "Score 250+ points (Boxing Fowl Dodgeball)", types: ["boxt"] },
];
bingoList[11] = [
{ name: "Win a match (Boxing)", types: ["boxn"] },
{ name: "Score 150+ points (Bowling Tricky Pins)", types: ["bowt"] },
{ name: "Score 500+ points (Boxing Picky Puncher)", types: ["boxt"] },
];
bingoList[12] = [
{ name: "Standstill Shooter/Straight Shooter (Bowling Stamp)", types: ["bows"] },
{ name: "Fairway to Go!/Fairway or Bust (Golf Stamp)", types: ["gols"] },
{ name: "Lightning Round/Fast-Fists KO (Boxing Stamp)", types: ["boxs"] },
];
bingoList[13] = [
{ name: "Forehand Master (Tennis Stamp)", types: ["tens"] },
{ name: "Clear 10+ stages (Bowling Tricky Pins)", types: ["bowt"] },
{ name: "Get a bingo (Chip-In Bingo)", types: ["golt"] },
];
bingoList[14] = [
{ name: "Score 150m/ft.+ (Tennis Runner Ducky)", types: ["tent"] },
{ name: "Finish the Classic 9 Hole course (Golf)", types: ["gol9"] },
{ name: "Reach Level 2 (Golf)", types: ["lev"] },
];
bingoList[15] = [
{ name: "Get a ball into a hole (Golf Chip-In Bingo)", types: ["golt"] },
{ name: "Hit your ball through a red ring (Tennis Ring Master)", types: ["tent"] },
{ name: "Flag it Down (Golf Stamp)", types: ["gols"] },
];
bingoList[16] = [
{ name: "Clear 12 stages (Bowling Spare Pickups)", types: ["bowt"] },
{ name: "Comeback Kid/Comeback Champ (Boxing Stamp)", types: ["boxs"] },
{ name: "Score 100 points with a single punch (Boxing Fowl Dodgeball)", types: ["boxt"] },
];
bingoList[17] = [
{ name: "Finish the Resort 9 Hole course (Golf)", types: ["gol9"] },
{ name: "Score 1300m/4265ft.+ (Baseball Homer Hero)", types: ["bast"] },
{ name: "Reach Level 2 (Boxing)", types: ["lev"] },
];
bingoList[18] = [
{ name: "Split-Frame-Spare (Bowling Stamp)", types: ["bows"] },
{ name: "Score 600+ points (Boxing Pro Puncher)", types: ["boxt"] },
{ name: "Get all 100 pins without hitting the red button (Bowling 100-Pin Pro)", types: ["bowt"] },
];
bingoList[19] = [
{ name: "The Bare Minimum (Bowling Stamp)", types: ["bows"] },
{ name: "Get a score of -3 or better on any 3 Hole course (Golf)", types: ["gol3"] },
{ name: "No Pin Standing (Bowling Stamp)", types: ["bows"] },
];
bingoList[20] = [
{ name: "Collect 2+ clocks (Tennis Runner Ducky)", types: ["tent"] },
{ name: "Reach Level 3 (Bowling)", types: ["lev"] },
{ name: "Finish the Lakeside 9 Hole course (Golf)", types: ["gol9"] },
];
bingoList[21] = [
{ name: "Reach Level 3 (Tennis)", types: ["lev"] },
{ name: "Score 1400+ points (Bowling Spare Pickups)", types: ["bowt"] },
{ name: "Score 4+ points in a single game (Baseball)", types: ["basn"] },
];
bingoList[22] = [
{ name: "Score 6.0+ points with every ball (Golf Driver Challenge)", types: ["golt"] },
{ name: "Score 800+ points (Baseball Wall Breaker)", types: ["bast"] },
{ name: "Win a game (Baseball)", types: ["basn"] },
];
bingoList[23] = [
{ name: "Get 5+ bronze+ medals in total (Training)", types: ["med"] },
{ name: "Three and Out/Three for All (Baseball Stamp)", types: ["bass"] },
{ name: "Get a score of -5 or better on any 9 Hole course (Golf)", types: ["gol9"] },
];
bingoList[24] = [
{ name: "Reach Level 3 (Golf)", types: ["lev"] },
{ name: "Score 150+ points (Bowling Spin Control)", types: ["bown"] },
{ name: "Reach Level 2 (Baseball)", types: ["lev"] },
];
bingoList[25] = [
{ name: "King of Clubs/Birdie Watcher (Golf Stamp)", types: ["gols"] },
{ name: "Finish any 18 Hole course (Golf)", types: ["gol9","gols","golt","gol3"] },
{ name: "Get 5+ silver+ medals in total (Training)", types: ["med"] },
];
