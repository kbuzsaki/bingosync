var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Kill an enemy with a bayonet", types: ["weapon"] },
  { name: "Kill an enemy with a rifle", types: ["weapon"] },
  { name: "Kill an enemy with a grenade", types: ["weapon"] },
  { name: "Complete Mission 1", types: ["mission"] },
];
bingoList[2] = [
  { name: "Kill an enemy with a bazooka", types: ["weapon"] },
  { name: "Kill an enemy with a TNT", types: ["weapon"] },
  { name: "Kill an enemy with water", types: ["weapon"] },
  { name: "Complete Mission 2", types: ["mission"] },
];
bingoList[3] = [
  { name: "Kill an enemy with a trotter ", types: ["weapon"] },
  { name: "Kill an enemy with a mine", types: ["weapon"] },
  { name: "Kill an enemy with a knife", types: ["weapon"] },
  { name: "Complete Mission 3", types: ["mission"] },
];
bingoList[4] = [
  { name: "Get an Engineer", types: ["rank"] },
  { name: "Get a Bombardier", types: ["rank"] },
  { name: "Get a Medic", types: ["rank"] },
  { name: "Get a Sniper", types: ["rank"] },
];
bingoList[5] = [
  { name: "Kill an enemy with a cluster grenade", types: ["weapon"] },
  { name: "Complete Mission 5", types: ["mission"] },
  { name: "Kill 1 enemy orderly", types: ["enemy"] },
  { name: "Kill 1 enemy sapper", types: ["enemy"] },
];
bingoList[6] = [
  { name: "Complete mission 4", types: ["mission"] },
  { name: "Kill an enemy with poison", types: ["weapon"] },
  { name: "Kill an enemy with a sniper rifle", types: ["weapon"] },
  { name: "Kill an enemy with a rifle burst", types: ["weapon"] },
];
bingoList[7] = [
  { name: "Complete Mission 9", types: ["mission"] },
  { name: "Complete Mission 15", types: ["mission"] },
  { name: "Destroy 1 shelter", types: ["vehicle"] },
  { name: "Kill an enemy with an airburst", types: ["weapon"] },
];
bingoList[8] = [
  { name: "Kill 3 enemy gunners", types: ["enemy"] },
  { name: "Complete Mission 8", types: ["mission"] },
  { name: "Destroy 1 pillbox ", types: ["vehicle"] },
  { name: "Complete Boot Camp", types: ["mission"] },
];
bingoList[9] = [
  { name: "Complete Mission 7", types: ["mission"] },
  { name: "Complete Mission 10", types: ["mission"] },
  { name: "Kill 3 enemy scouts ", types: ["enemy"] },
  { name: "Kill 1 enemy medic ", types: ["enemy"] },
];
bingoList[10] = [
  { name: "Get a Saboteur", types: ["rank"] },
  { name: "Get a Pyrotechnic", types: ["rank"] },
  { name: "Get a Surgeon", types: ["rank"] },
  { name: "Get a Spy", types: ["rank"] },
];
bingoList[11] = [
  { name: "Get two Engineers", types: ["rank"] },
  { name: "Get two Bombardiers", types: ["rank"] },
  { name: "Get two Medics", types: ["rank"] },
  { name: "Get two Snipers", types: ["rank"] },
];
bingoList[12] = [
  { name: "Kill 5 enemy gunners", types: ["enemy"] },
  { name: "Kill 3 enemy bombardiers", types: ["enemy"] },
  { name: "Kill 3 enemy snipers ", types: ["enemy"] },
  { name: "Destroy 1 artillery ", types: ["vehicle"] },
];
bingoList[13] = [
  { name: "Complete Mission 14", types: ["mission"] },
  { name: "Complete Mission 17", types: ["mission"] },
  { name: "Complete Mission 12", types: ["mission"] },
  { name: "Complete Mission 6", types: ["mission"] },
];
bingoList[14] = [
  { name: "Get a Commando", types: ["rank"] },
  { name: "Destroy 3 shelters ", types: ["vehicle"] },
  { name: "Destroy 3 pillboxes", types: ["vehicle"] },
  { name: "Kill an enemy with a Super Shotgun", types: ["weapon"] },
];
bingoList[15] = [
  { name: "Kill an enemy with a mortar", types: ["weapon"] },
  { name: "Kill an enemy with a cattle prod ", types: ["weapon"] },
  { name: "Kill an enemy with a cluster grenade", types: ["weapon"] },
  { name: "Kill an enemy with an explosive barrel", types: ["weapon"] },
];
bingoList[16] = [
  { name: "Destroy 1 tank ", types: ["vehicle"] },
  { name: "Complete Hogshead ", types: ["island"] },
  { name: "Complete Mission 11", types: ["mission"] },
  { name: "Complete Mission 16", types: ["mission"] },
];
bingoList[17] = [
  { name: "Kill an enemy with a flamethrower", types: ["weapon"] },
  { name: "Kill an enemy with an Airstrike", types: ["weapon"] },
  { name: "Kill an enemy with a sword", types: ["weapon"] },
  { name: "Kill an enemy with a tranq", types: ["weapon"] },
];
bingoList[18] = [
  { name: "Get two Saboteurs", types: ["rank"] },
  { name: "Get two Pyrotechnics", types: ["rank"] },
  { name: "Get two Surgeons", types: ["rank"] },
  { name: "Get two Spies", types: ["rank"] },
];
bingoList[19] = [
  { name: "Complete Saustralia", types: ["island"] },
  { name: "Get a Hero", types: ["rank"] },
  { name: "Kill 3 enemy pyrotechs ", types: ["enemy"] },
  { name: "Kill 3 enemy spies ", types: ["enemy"] },
];
bingoList[20] = [
  { name: "Get two Commandos", types: ["rank"] },
  { name: "Destroy 3 artilleries", types: ["vehicle"] },
  { name: "Kill an enemy with suicide ", types: ["weapon"] },
  { name: "Kill 3 enemy commandos ", types: ["enemy"] },
];
bingoList[21] = [
  { name: "Complete Mission 13", types: ["mission"] },
  { name: "Destroy 5 pillboxes", types: ["vehicle"] },
  { name: "Destroy 5 shelters", types: ["vehicle"] },
  { name: "Kill 5 enemy pyrotechs", types: ["enemy"] },
];
bingoList[22] = [
  { name: "Complete Mission 20", types: ["mission"] },
  { name: "Get two Heroes", types: ["rank"] },
  { name: "Kill 5 enemy spies", types: ["enemy"] },
  { name: "Kill 3 enemy surgeons", types: ["enemy"] },
];
bingoList[23] = [
  { name: "Complete Mission 23", types: ["mission"] },
  { name: "Complete Mission 24", types: ["mission"] },
  { name: "Kill 5 enemy commandos", types: ["rank"] },
  { name: "Kill 3 enemy heroes", types: ["rank"] },
];
bingoList[24] = [
  { name: "Complete Trottsville", types: ["island"] },
  { name: "Complete Mission 19", types: ["mission"] },
  { name: "Complete Mission 22 ", types: ["mission"] },
  { name: "Destroy 5 artilleries", types: ["vehicle"] },
];
bingoList[25] = [
  { name: "Complete Bellyopolis", types: ["island"] },
  { name: "Complete Arstria", types: ["island"] },
  { name: "Complete Mission 18", types: ["mission"] },
  { name: "Complete Mission 21", types: ["mission"] },
];
