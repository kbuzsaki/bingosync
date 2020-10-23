bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];

bingoList[1] = [
    { name: "Hyrule Castle map", types: ["Maps & Compass"] },
    { name: "Play the '3 Chest Game' at both locations", types: [] },
    { name: "0 Rupees", types: ["Finisher"] },
    { name: "Catch the Running Boy in Kakariko", types: [] },
    { name: "Push all Blocks in Blinds House", types: [] },
    { name: "Maze Race in less then 10 Seconds", types: [] },
    { name: "Get all 4 Fake Swords in the Lost Woods", types: [] }
];
bingoList[2] = [
    { name: "Tower of Hera map and compass", types: ["Maps & Compass"] },
    { name: "Green Pendant", types: ["Dungeon Prize"] },
    { name: "Red Pendant", types: ["Dungeon Prize"] },
    { name: "Destroy both Hylian stone tablets", types: [] },
    { name: "Talk to the Human Cucco", types: [] },
    { name: "Sell something to the merchant", types: [] },
    { name: "Collect the 100 Rupee Chest", types: [] },
    { name: "Cause a Cucco Storm", types: [] },
    { name: "Ice-Rod without opening the Cave", types: [] }
];
bingoList[3] = [
    { name: "All 4 small chests in Eastern Palace", types: ["Eastern Palace","Dungeon Completion","Chest Collection"] },
    { name: "Eastern Palace map and compass", types: ["Eastern Palace","Maps & Compass"] },
    { name: "Desert Palace map and compass", types: ["Desert Palace","Maps & Compass"] },
    { name: "Hyrule Castle + Sewers + Sanctuary 100% map completion", types: ["Hyrule Castle","Dungeon Completion"] },
    { name: "Eastern Palace 100% map completion", types: ["Eastern Palace","Dungeon Completion"] },
    { name: "Tower of Hera 100% map completion", types: ["Tower of Hera","Dungeon Completion"] },
    { name: "Thieves Town map and compass", types: ["Thieves Town","Maps & Compass"] },
    { name: "Blue Pendant", types: ["Desert Palace","Dungeon Prize"] },
    { name: "Magic Cape, no Magic Mirror", types: ["Item Collection","Item Restriction"] },
    { name: "Collect both types of bee", types: ["Bottles"] },
    { name: "Crystal #1", types: ["Palace of Darkness","Dungeon Prize"] },
    { name: "All 3 small chests in Tower of Hera", types: ["Tower of Hera","Dungeon Completion","Chest Collection"] }
];
bingoList[4] = [
    { name: "2 different potions, no potion shop", types: ["Bottles"] },
    { name: "Cause a Skelleton Cucco Storm", types: ["Village of the Outcast","Easter Egg"] },
    { name: "All 8 small chests in Hyrule Castle, Sewers and Sanctuary", types: ["Hyrule Castle","Dungeon Completion","Chest Collection"] },
    { name: "1 crystal, no Moon Pearl", types: ["Dungeon Prize","Item Restriction"] },
    { name: "Defeat all 6 Gibo in Thieves Town", types: ["Thieves Town","Dungeon Completion","Enemy Hunt"] },
    { name: "Defeat all 8 Green Eyegores in Eastern Palace", types: ["Eastern Palace","Dungeon Completion","Enemy Hunt"] },
    { name: "Skull Woods map and compass", types: ["Skull Woods","Maps & Compass"] },
    { name: "Desert Palace 100% map completion", types: ["Desert Palace","Dungeon Completion"] },
    { name: "Faerie room in each LW dungeon", types: ["LW Dungeons","Fairy Ponds"] },
    { name: "Read all 4 telepathy tiles in LW Dungeons", types: ["LW Dungeons","Telepathy Tiles"] },
    { name: "Thieves Town 100% map completion", types: ["Thieves Town","Dungeon Completion"] },
    { name: "Defeat all 8 Mini Moldorms in Tower of Hera", types: ["Tower of Hera","Dungeon Completion","Enemy Hunt"] },
    { name: "Defeat 4 Dungeon bosses", types: ["Bosses"] },
    { name: "All 3 small chests in Desert Palace", types: ["Desert Palace","Dungeon Completion","Chest Collection"] },
    { name: "All 6 small chests in Thieves Town", types: ["Thieves Town","Dungeon Completion","Chest Collection"] }
];
bingoList[5] = [
    { name: "4 LW maps", types: ["Maps & Compass","LW Dungeons"] },
    { name: "Beat Blind in the Refight", types: ["Difficult Execution","Thieves Town"] },
    { name: "Collect the Single Arrow", types: ["Chest Collection","Palace of Darkness"] },
    { name: "Buy 2 different shields", types: ["Shops","Dark World Exploration"] },
    { name: "1 Blue rupee room, DW dungeon", types: ["Secret","DW Dungeons"] },
    { name: "1 crystal, no Magic Mirror", types: ["Dungeon Prize","Item Restriction"] },
    { name: "Collect all 4 Blue Rupee Chests", types: ["Rupees","Chest Collection"] },
    { name: "Freeze and then burn an enemy ", types: ["Magic Items"] },
    { name: "3 LW compasses", types: ["Maps & Compass","LW Dungeons"] },
    { name: "Defeat all 9 Devalants in Desert Palace", types: ["Desert Palace","Dungeon Completion","Enemy Hunt"] },
    { name: "All 6 small chests in Skull Woods", types: ["Skull Woods","Dungeon Completion","Chest Collection"] },
    { name: "Light all 14 Torches in Desert Palace", types: ["Desert Palace","Dungeon Completion"] },
    { name: "Buy a Single Heart at all 3 LW Shops", types: ["Shops","Light World Exploration"] }
];
bingoList[6] = [
    { name: "Enter Houlihan from 3 different Holes", types: ["Overworld Exploration","Secret"] },
    { name: "Visit the Fortune Teller in Both Worlds", types: ["Overworld Exploration","Shops"] },
    { name: "Defeat a boss, rods only", types: ["Difficult Execution","Item Restriction"] },
    { name: "8 heart pieces", types: ["Heart Collection","Overworld Exploration"] },
    { name: "Translate all 4 pieces of Hylian text ", types: ["Light World Exploration","Book"] },
    { name: "Get Tier 3 from 4 different Pull Spots", types: ["Overworld Exploration","Secret"] },
    { name: "All 3 medallions", types: ["Book","Overworld Exploration"] },
    { name: "1+ Bonk Rocks on 3 Overworld Screens", types: ["Light World Exploration"] }
    { name: "Enter and Exit 3 Different DLC Trap Rooms", types: ["Secret","Dungeons"] },
    { name: "Flute, no Moon Pearl", types: ["Item Collection","Item Restriction"] }
];
bingoList[7] = [
    { name: "All 3 potions", types: ["Bottles","Shops"] },
    { name: "Catch a Fairy at 6 Different Fairy Ponds", types: ["Fairy Ponds","Overworld Exploration"] },
    { name: "Collect all Chests in Dark Rooms", types: ["Chest Collection"] },
    { name: "Lanmolas', swordless, no bow", types: ["Difficult Execution","Item Restriction"] },
    { name: "Hookshot", types: ["Item Collection","Swamp Palace"] },
    { name: "3 telepathy tiles outside of dungons", types: ["Telepathy Tiles","Overworld Exploration"] },
    { name: "Catch a faerie, DM 4 faerie cave", types: ["Light World Exploration","Secret","Fairy Ponds"] },
    { name: "Defeat all 16 Gibdos in Skull Woods", types: ["Skull Woods","Dungeon Completion","Enemy Hunt"] },
];
bingoList[8] = [
    { name: "Collect 5 Maps", types: ["Maps & Compass","Dungeons"] },
    { name: "All 8 small chests in Swamp Palace", types: ["Swamp Palace","Dungeon Completion","Chest Collection"] },
    { name: "Upgrade all 4 Items at the Fairy Fountains", types: ["Shops","Overworld Exploration"] },
    { name: "4 NPCs have followed Link", types: ["Overworld Exploration"] },
    { name: "Get all Rupees in the 2 Rupee Thieve Caves once", types: ["Light World Exploration"] }
];
bingoList[9] = [
    { name: "Donate 100 Rupees to the Fairies", types: ["Shops","Rupees"] },
    { name: "Collect 5 Compasses", types: ["Maps & Compass","Dungeons"] },
    { name: "Collect 10 Red Rupee Chests", types: ["Rupees","Chest Collection"] },
    { name: "Top row of Y-items, max upgrades", types: ["Item Collection"] },
    { name: "Crystal #3", types: ["Skull Woods","Dungeon Prize"] },
    { name: "Crystal #4", types: ["Thieves Town", "Dungeon Prize"] },
    { name: "Touch a bumper in 4 dungeons", types: ["Dungeons"] },
    { name: "Defeat all 12 Kyamerons in Swamp Palace", types: ["Swamp Palace","Dungeon Completion","Enemy Hunt"] },
    { name: "Blind, swordbeams only", types: ["Difficult Execution","Thieves Town"] },
    { name: "Palace of Darkness map and compass", types: ["Palace of Darkness","Maps & Compass"] },
    { name: "Use different swords to collect Bombos/Ether", types: ["Book","Item Restriction","Light World Exploration","Swords"] }
];
bingoList[10] = [
    { name: "Open any rupee chest in 4 DW dungeons", types: ["Rupees"] },
    { name: "4 DW maps", types: ["Maps & Compass","DW Dungeons"] },
    { name: "Collect and use 10 Small Keys", types: ["Dungeons"] },
    { name: "Reveal 2 hidden floors", types: ["Secret","Book"] },
    { name: "Arrghus, swordless", types: ["Item Restriction","Difficult Execution","Swamp Palace"] },
    { name: "Open 5 Big Key Doors", types: ["Dungeons"] },
    { name: "Dig 32 Times during 1 Dig Game Round", types: ["Minigame","Village of the Outcast"] },
    { name: "12 heart pieces", types: ["Heart Collection","Overworld Exploration"] },
    { name: "4 DW compasses", types: ["Maps & Compass","DW Dungeons"] },
    { name: "Go back to 2 Dungeon Bossrooms after beating the Boss", types: ["Dungeons","Bosses"] }
];
bingoList[11] = [
    { name: "Downgrade a sword", types: ["Item Regression"] },
    { name: "Swamp Palace map and compass", types: ["Swamp Palace","Maps & Compass"] },
    { name: "All 4 swords atleast once", types: ["Swords","Item Collection"] },
    { name: "Cane of Byrna, no Bug Net or Magic Cape", types: ["Heart Collection","Item Collection","Magic Items","Item Restriction"] },
    { name: "All 12 small chests in Palace of Darkness", types: ["Palace of Darkness","Dungeon Completion","Chest Collection"] },
    { name: "Open all 7 Overworld Bomb Walls", types: ["Overworld Exploration"] },
    { name: "Delete a Chest Item", types: ["Item Regression"] },
    { name: "Perfect archery mini-game", types: ["Minigame","Village of the Outcast"] }
];
bingoList[12] = [
    { name: "Agahnims Tower 100% map completion", types: ["Agahnims Tower","Dungeon Completion"] },
    { name: "Defeat the one and only Usain Bolt", types: ["Enemy Hunt","Agahnims Tower"] },
    { name: "Defeat a blue tektike by Spectacle Rock", types: ["Enemy Hunt","Agahnims Tower"] },
    { name: "Lumberjack heart piece", types: ["Agahnims Tower","Heart Collection"] },
    { name: "10 hearts", types: ["Heart Collection"] }
];
bingoList[13] = [
    { name: "Defeat 3+ Enemies at once with each Medallion", types: ["Book","Swords"] },
    { name: "Use all 6 blue warps underneath rocks", types: ["Light World Exploration"] },
    { name: "6 bomb chests (No Gambling)", types: ["Chest Collection"] },
    { name: "Finish 1 DW dungeon without its Big Key", types: ["Dungeon Prize","Item Restriction"] },
    { name: "Skull Woods 100% map completion", types: ["Skull Woods","Dungeon Completion"] },
    { name: "All 3 shields", types: ["Item Collection"] }
];
bingoList[14] = [
    { name: "Defeat a boss with 2+ small keys", types: ["DW Dungeons","Bosses"] },
    { name: "999 Rupees", types: ["Rupees"] },
    { name: "Use an orange warp tile in 3 DW dungeons", types: ["DW Dungeons"] },
    { name: "5 arrow chests, no gambling", types: ["Chest Collection"] },
    { name: "Crystal #5", types: ["Ice Palace","Dungeon Prize"] },
    { name: "2 Big Chests, swordless", types: ["Item Collection","Item Restriction"] },
    { name: "5 Red Y-Items", types: ["Item Collection"] },
    { name: "Defeat a Lynel, Gold Sword", types: ["Enemy Hunt","Item Restriction","Swords"] },
    { name: "7 blue Y-items", types: ["Item Collection"] },
    { name: "Defeat a boss, Master Sword only", types: ["Item Restrictions","DW Dungeons","Swords"] }
];
bingoList[15] = [
    { name: "Finish 2 dungeons without their Big Keys", types: ["Dungeon Prize","Item Restriction"] },
    { name: "Crystal #2", types: ["Swamp Palace","Dungeon Prize"] }
    { name: "Red Sword, Red Shield, Red Mail", types: ["Item Collection","Ganons Tower"] },
    { name: "Defeat all 6 Freezors in Ice Palace", types: ["Ice Palace","Dungeon Completion","Enemy Hunt"] },
    { name: "3 telepathy tiles in Ice Palace", types: ["Ice Palace","Telepathy Tiles"] },
    { name: "Ice Palace map and compass", types: ["Ice Palace","Maps & Compass"] },
    { name: "Swamp Palace 100% map completion", types: ["Swamp Palace","Dungeon Completion"] },
    { name: "All 6 small chests in Ice Palace", types: ["Ice Palace","Dungeon Completion","Chest Collection"] }
];
bingoList[16] = [
    { name: "All 7 unique LW overworld heart pieces", types: ["Heart Collection","Light World Exploration"] },
    { name: "Talk to all 5 Dark World Storytellers", types: ["Dark World Exploration"] },
    { name: "All 6 unique DW heart pieces", types: ["Heart Collection","Dark World Exploration"] },
    { name: "Misery Mire map and compass", types: ["Misery Mire","Maps & Compass"] },
    { name: "Collect the Mire Fishroom Key", types: ["Misery Mire"] },
    { name: "Get Tempered without Gloves", types: ["Item Collection","Item Restriction","Swords"] },
    { name: "8 magic consuming items", types: ["Item Collection","Magic Items"] },
    { name: "Defeat all 7 Sluggulas in Misery Mire", types: ["Misery Mire","Dungeon Completion","Enemy Hunt"] },
    { name: "Kholdstare, no Fire Rod", types: ["Difficult Execution","Ice Palace"] }
];
bingoList[17] = [
    { name: "Die in 1 hit at full health", types: ["Item Restriction"] },
    { name: "Collect all 7 50 rupee chests", types: ["Rupees","Chest Collection"] },
    { name: "Collect a Darkroom Chest without Lamp", types: ["Difficult Execution","Item Restriction"] },
    { name: "Downgrade Titan's Mitts", types: ["Item Regression"] },
    { name: "LW Big Chests in reverse order", types: ["Eastern Palace","Desert Palace","Tower of Hera","Item Restriction"] },
    { name: "Delete the Old Man from the Mountain", types: ["Item Restriction","Difficult Execution"] }
];
bingoList[18] = [
    { name: "Collect each pendant, swordless", types: ["Dungeon Prize","Item Restriction"] },
    { name: "All 6 types of rupee chest", types: ["Chest Collection","Rupees"] },
    { name: "Master Sword, no boots", types: ["Dungeon Prize","Item Restriction","Swords"] },
    { name: "Yellow Sword, Yellow Shield, Yellow Hat", types: ["Item Collection"] },
    { name: "Gold Sword twice", types: ["Item Collection","Item Regression","Item Restriction"] }
];
bingoList[19] = [
    { name: "Agahnim 2, Bug Net only", types: ["Ganons Tower","Bottles"] },
    { name: "Completely destroy 2 walls", types: ["Secret","Skull Woods","Ganons Tower"] },
    { name: "Defeat a mini-helmasaur in 3 dungeons", types: ["Enemy Hunt","DW Dungeons"] },
    { name: "Unlock the purple chest", types: ["Dark World Exploration","Bottles"] },
    { name: "Move 3 walls", types: ["Secret","Desert Palace","Palace of Darkness","Misery Mire"] }
];
bingoList[20] = [
    { name: "8 Big Chests", types: ["Item Collection","Dungeons"] },
    { name: "Blue Sword, Blue Shield, Blue Mail", types: ["Item Collection","Item Restriction"] },
    { name: "Make 2 chests spawn in 3 DW dungeons", types: ["DW Dungeons","Secret"] },
    { name: "Gold bee, no boots", types: ["Secret","Item Restriction"] },
    { name: "Hera Big Key, no lamp", types: ["Magic Items","Item Restriction"] },
    { name: "Collect both Mail Upgrades", types: ["Item Collection","Ice Palace","Ganons Tower"] },
    { name: "All 5 300 rupees from chests/NPC`s", types: ["Rupees","Chest Collection"] }
];
bingoList[21] = [
    { name: "Wait out 3 different Tilerooms", types: ["Dungeons"] },
    { name: "All 6 small chests in Misery Mire", types: ["Misery Mire","Dungeon Completion","Chest Collection"] },
    { name: "Crystal #6", types: ["Misery Mire","Dungeon Prize"] },
    { name: "Skull Woods, no moving statues", types: ["Item Restriction","Skull Woods"] },
    { name: "Open the entrances to all crystal dungeons", types: ["Dark World Exploration"] },
    { name: "6 bosses", types: ["Bosses"] },
    { name: "Turtle Rock map and compass", types: ["Turtle Rock","Maps & Compass"] },
    { name: "Crystal #7", types: ["Turtle Rock", "Dungeon Prize"] },
    { name: "Mire, both blue rupee rooms", types: ["Misery Mire","Secret"] }
];
bingoList[22] = [
    { name: "Trinexx, no Tempered/Gold Sword", types: ["Turtle Rock","Difficult Execution","Item Restriction"] },
    { name: "Blind, no sword/hammer", types: ["Difficult Execution","Thieves Town"] },
    { name: "All 10 small chests in Turtle Rock", types: ["Turtle Rock","Dungeon Completion","Chest Collection"] },
    { name: "Defeat all 7 Hokkubokkus in Turtle Rock", types: ["Turtle Rock","Dungeon Completion","Enemy Hunt"] },
    { name: "Ganon's Tower map and compass", types: ["Ganons Tower","Maps & Compass"] },
    { name: "3 columns of Y-items", types: ["Item Collection"] },
    { name: "3 rows of Y-items", types: ["Item Collection"] },
    { name: "4 bottles", types: ["Bottles","Overworld Exploration"] },
    { name: "Collect Both Single Rupee Chests", types: ["Rupees","Chest Collection"] }
];
bingoList[23] = [
    { name: "Open Pyramid cracked wall", types: ["Dungeon Prize","Misery Mire","Ice Palace"] },
    { name: "2 refights in Ganon's Tower", types: ["Ganons Tower","Bosses"] },
    { name: "Defeat Moldorm with 2 different swords", types: ["Ganons Tower","Tower of Hera","Bosses","Swords"] },
    { name: "Turtle Rock 100% map completion", types: ["Turtle Rock","Dungeon Completion"] },
    { name: "Defeat all 21 turtles in Palace of Darkness", types: ["Palace of Darkness","Dungeon Completion","Enemy Hunt"] },
    { name: "Palace of Darkness 100% map completion", types: ["Palace of Darkness","Dungeon Completion"] },
    { name: "Mothula with Cane of Somaria", types: ["Difficult Execution","Skull Woods"] },
    { name: "Vitreous, bow only (either arrows)", types: ["Item Restriction","Bosses","Misery Mire"] },
    { name: "Defeat a wizzrobe in 2 dungeons", types: ["Ganons Tower","Misery Mire","Enemy Hunt"] }
];
bingoList[24] = [
    { name: "All 25 small chests in Ganons Tower", types: ["Ganons Tower","Dungeon Completion","Chest Collection"] },
    { name: "Ice Palace 100% map completion", types: ["Ice Palace","Dungeon Completion"] },
    { name: "Mire 100% map completion", types: ["Misery Mire","Dungeon Completion"] },
    { name: "Healed by all 9 Great Faeries", types: ["Fairy Ponds","Light World Exploration"] },
    { name: "Ganon's Tower 100% map completion", types: ["Ganons Tower","Dungeon Completion"] },
    { name: "15 hearts", types: ["Heart Collection"] }
];
bingoList[25] = [
    { name: "4 crystals, no boots", types: ["Dungeon Prize","Item Restriction"] },
    { name: "Gold Sword only Mothula", types: ["Item Restriction","Difficult Execution","Skull Woods"] },
    { name: "Open every Big Chest", types: ["Dungeons","Item Collection"] },
    { name: "Defeat Ganon and fall after Fanfare", types: ["Ganons Tower"] },
    { name: "Obtain 7 Swords", types: ["Swords","Item Restriction","Item Collection","Item Regression"] }
];
