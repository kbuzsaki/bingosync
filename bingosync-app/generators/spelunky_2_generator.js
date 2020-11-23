var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Throw a Hired Hand into a Ghost", types: ["HH"] },
  { name: "Give a Pet to a Caveman", types: [] },
  { name: "Use a Parachute", types: [] },
  { name: "Become a thief (and not a vandal!)", types: ["Sparrow"] },
];
bingoList[2] = [
  { name: "Deliver Yang's Turkeys", types: ["Yang"] },
  { name: "Complete 4 levels with Climbing Gloves consecutively", types: [] },
  { name: "Rescue a total of 4 Pets in one run", types: ["HP"] },
  { name: "Collect 4 Idols in one run", types: ["Gold"] },
];
bingoList[3] = [
  { name: "Spawn the Kapala by sacrificing yourself", types: ["Death"] },
  { name: "Curse and then defeat Quillback", types: [] },
  { name: "Spawn an Eggplant", types: ["Eggplant"] },
  { name: "Eat 3 Cooked Turkeys in one run", types: ["HP"] },
];
bingoList[4] = [
  { name: "Die from a Monkey's stun", types: ["Death"] },
  { name: "Buy out an entire shop", types: ["Gold"] },
  { name: "Obtain 16 current HP", types: ["HP"] },
  { name: "Find and destroy a pot of gold", types: [] },
];
bingoList[5] = [
  { name: "Upset a Hired Help (and survive)", types: ["HH"] },
  { name: "Obtain 16 favor", types: ["Favor"] },
  { name: "Carry a Webgun through 4 levels consecutively", types: [] },
  { name: "Leave 4 levels after breaking the Cursed Pot", types: [] },
];
bingoList[6] = [
  { name: "Kill Sparrow", types: ["Sparrow"] },
  { name: "Snap Hou Yi's Bow in a Bear Trap", types: [] },
  { name: "Kill 6 Shopkeepers", types: [] },
  { name: "Sacrifice 3 mounts", types: ["Favor"] },
];
bingoList[7] = [
  { name: "Buy out Yang's pet shop", types: ["Yang","Gold"] },
  { name: "Kill Tun", types: [] },
  { name: "Keep a mount alive for 4 levels consecutively", types: [] },
  { name: "Feed the same Mantrap 4 bodies", types: [] },
];
bingoList[8] = [
  { name: "Enter Ghist's shop", types: [] },
  { name: "Snap a Shopkeeper in a Bear Trap", types: [] },
  { name: "Complete 4 levels consecutively without collecting items, HP, weapons, or mounts", types: [] },
  { name: "Keep a Hired Help alive for 4 levels consecutively", types: ["HH"] },
];
bingoList[9] = [
  { name: "Snap any back item in a Bear Trap", types: [] },
  { name: "Keep Tun alive and leave the level with her Crossbow", types: [] },
  { name: "See that Van Horsing kills Vlad", types: [] },
  { name: "Receive a Bomb Bag from the Salad Sisters", types: [] },
];
bingoList[10] = [
  { name: "Carry Yang's key to rescue Van Horsing", types: ["Yang"] },
  { name: "Befriend the Golden Monkey", types: [] },
  { name: "Survive an explosion", types: ["HP"] },
  { name: "Never obtain the Kapala", types: ["Restriction","Favor"] },
];
bingoList[11] = [
  { name: "Kill a Witch Doctor while cursed", types: [] },
  { name: "Obtain the Punish Ball / Ball and Chain", types: ["Favor"] },
  { name: "Swap back items for Vlad's Cape", types: [] },
  { name: "Obtain a total of 5 Hired Hands at once (Not all alive required)", types: ["HH"] },
];
bingoList[12] = [
  { name: "Teleport into a vault", types: [] },
  { name: "Obtain the Broken Sword", types: ["Clone Gun"] },
  { name: "Offer an Idol to Madame Tusk", types: ["Gold"] },
  { name: "Have a Necromancer ressurect a Pet", types: [] },
];
bingoList[13] = [
  { name: "Pick up Hedjet while being a criminal", types: [] },
  { name: "Clone Royal Jelly", types: ["Clone Gun"] },
  { name: "Slay Queen Bee", types: [] },
  { name: "Defeat Vlad with a Camera", types: [] },
];
bingoList[14] = [
  { name: "Slurp Elixir", types: ["HP"] },
  { name: "Kill a Ghist", types: [] },
  { name: "Bounce with a Yeti on a Spring Trap", types: [] },
  { name: "Defeat Olmec in 90 seconds or less", types: [] },
];
bingoList[15] = [
  { name: "Clone Waddler", types: ["Clone Gun"] },
  { name: "Unleash the Boulder", types: [] },
  { name: "Kill a Salad Sister in the Ice Caves", types: [] },
  { name: "Carry Eggplant through 4 levels consecutively", types: ["Eggplant"] },
];
bingoList[16] = [
  { name: "Complete City of Gold", types: [] },
  { name: "Be cursed twice in one run", types: [] },
  { name: "Never obtain Kali favor", types: ["Restriction","Favor"] },
  { name: "Defeat the Yeti Queen and Yeti King", types: [] },
];
bingoList[17] = [
  { name: "Complete Duat", types: [] },
  { name: "Slay Kingu without the use of Excalibur", types: [] },
  { name: "Kill a Lavamander", types: [] },
  { name: "Bounce between two lasers", types: [] },
];
bingoList[18] = [
  { name: "Obtain the Alien Compass", types: [] },
  { name: "Die to Anubis' Scepter's special attack", types: ["Death"] },
  { name: "Steal the Tusk Idol", types: ["Sparrow","Gold"] },
  { name: "Ride all 3 living mounts at least once", types: [] },
];
bingoList[19] = [
  { name: "Obtain the Plasma Cannon", types: [] },
  { name: "Don the True Crown", types: [] },
  { name: "Die to an Alien riding a Mech", types: ["Death"] },
  { name: "Never wear a back item", types: ["Restriction"] },
];
bingoList[20] = [
  { name: "Visit the Pleasure Palace as a VIP", types: ["Gold"] },
  { name: "Slay Tiamat and escape to the surface", types: ["Victory"] },
  { name: "Clone yourself", types: ["Clone Gun"] },
  { name: "Remain cursed for 8 levels in one run", types: [] },
];
bingoList[21] = [
  { name: "Defeat Tiamat and leave the level with a mount", types: ["Victory"] },
  { name: "Befriend Qilin on a Volcana/Tide Pool run", types: [] },
  { name: "Obtain 1.5 million score in one run", types: ["Gold"] },
  { name: "Steal from 4 Shopkeeper vaults in one run", types: ["Gold"] },
];
bingoList[22] = [
  { name: "Split Madame Tusk's vault with Sparrow", types: ["Sparrow","Gold"] },
  { name: "Awaken the Eggplant Child", types: ["Eggplant"] },
  { name: "Kill 7 NPCs in one run, excluding HH, Shopkeeps, and Bodyguards", types: [] },
  { name: "Befriend Qilin on a Jungle/Temple run", types: [] },
];
bingoList[23] = [
  { name: "Complete the Sun Challenge", types: ["Gold"] },
  { name: "Collect $400,000 from the City of Gold", types: ["Gold"] },
  { name: "Behead a Goliath Frog with Excalibur", types: [] },
  { name: "Slay Hundun and return to the surface", types: ["Victory"] },
];
bingoList[24] = [
  { name: "Never collect gold", types: ["Restriction","Clone Gun","Gold"] },
  { name: "Complete 10 levels with the Punish Ball / Ball and Chain in one run", types: ["Favor"] },
  { name: "Destroy 5 Altars in one run", types: ["Favor"] },
  { name: "Never use the whip", types: ["Restriction"] },
];
bingoList[25] = [
  { name: "Open the portal to the Cosmic Ocean", types: ["Victory"] },
  { name: "Don the Eggplant Crown", types: ["Eggplant"] },
  { name: "Never increase your HP", types: ["Restriction","HP"] },
  { name: "Defeat Hundun while cursed", types: ["Victory"] },
];
