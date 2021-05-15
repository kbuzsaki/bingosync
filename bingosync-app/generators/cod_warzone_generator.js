bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "5 Kills with SMGs", types: ["smgs"] },
  { name: "5 Kills with ARs", types: ["ars"] },
  { name: "5 Kills with DMRs/Marksman Rifles", types: ["marksman"] },
  { name: "Complete 5 Contracts", types: ["contracts"] },
];
bingoList[2] = [
  { name: "3 Kills with Snipers", types: ["snipers"] },
  { name: "3 Kills with Shotguns", types: ["shotguns"] },
  { name: "3 Kills with Pistols", types: ["pistols"] },
  { name: "Get a Down with a Proximity Mine or Claymore", types: ["heal"] },
];
bingoList[3] = [
  { name: "Complete 2 Recon Contracts", types: ["recon"] },
  { name: "Complete 2 Scavenger Contracts", types: ["scavenger"] },
  { name: "Use 4 UAVs", types: ["uav"] },
  { name: "Use 4 UAVs", types: ["uav"] },
];
bingoList[4] = [
  { name: "Kill 1 King", types: ["kill_kings"] },
  { name: "Completely Use Up 1 Gas Mask", types: ["gas_masks"] },
  { name: "2 Sniper Kills as a Downtown Roof Rat", types: ["snipers"] },
];
bingoList[5] = [
  { name: "Complete 1 Bounty Contract", types: ["bounty"] },
  { name: "2 Kills with Vehicles", types: ["vehicle_kills"] },
  { name: "Collect Loadout 4 Times", types: ["loadouts"] },
];
bingoList[6] = [
  { name: "1 Knock/Finish with a Custer/Air Strike", types: ["strike"] },
  { name: "Blow Up 1 Occupied Vehicle with Lethal Equipment", types: ["lethal"] },
  { name: "Kill a Player with a Bolt Action Rifle that is Less Than 10m Away", types: [] },
];
bingoList[7] = [
  { name: "Complete 2 King Contracts", types: ["king"] },
  { name: "Kill 1 Enemy with Lethal Equipment", types: ["lethal"] },
  { name: "Kill 1 Enemy with a Melee", types: ["melee"] },
];
bingoList[8] = [
  { name: "Kill 1 Enemy out of a Moving Vehicle with a Sniper", types: ["moving_vehicle"] },
  { name: "Kill 1 Enemy while a Passenger of a Moving Vehicle", types: ["kill_from_moving_vehicle"] },
  { name: "Get 2 Kills with a single Dead Silence", types: [] },
];
bingoList[9] = [
  { name: "Unlock 1 Bunker", types: ["bunkers"] },
  { name: "Complete 7 Contracts", types: ["contracts"] },
  { name: "Get an Advanced UAV", types: ["advanced_uav"] },
];
bingoList[10] = [
  { name: "10 Kills with SMGs", types: ["smgs"] },
  { name: "10 Kills with ARs", types: ["ars"] },
  { name: "10 Kills with DMRs/Marksman Rifles", types: ["marksman"] },
];
bingoList[11] = [
  { name: "Self-revive 4 Times", types: ["heal"] },
  { name: "Collect Loadout 6 Times", types: ["loadouts"] },
  { name: "Get a Kill with a Throwing Knife", types: ["knife"] },
];
bingoList[12] = [
  { name: "Unlock 2 Bunkers", types: ["bunkers"] },
  { name: "Use 6 UAVs", types: ["uav"] },
  { name: "Kill 2 Kings", types: ["kill_kings"] },
];
bingoList[13] = [
  { name: "7 Kills with Snipers", types: ["snipers"] },
  { name: "7 Kills with Shotguns", types: ["shotguns"] },
  { name: "7 Kills with Pistols", types: ["pistols"] },
];
bingoList[14] = [
  { name: "Complete 4 Recon Contracts", types: ["recon"] },
  { name: "Complete 4 Scavenger Contracts", types: ["scavenger"] },
  { name: "Complete 4 King Contracts", types: ["king"] },
  { name: "Be the First Squad Eliminated", types: [] },
];
bingoList[15] = [
  { name: "4 Kills with Vehicles", types: ["vehicle_kills"] },
  { name: "2 Knocks/Finishes with a Custer/Air Strike", types: ["strike"] },
  { name: "Kill 2 Enemies with Lethal Equipment", types: ["lethal"] },
];
bingoList[16] = [
  { name: "Blow Up 2 Occupied Vehicles with Lethal Equipment", types: ["lethal"] },
  { name: "Kill 2 Enemies out of Moving Vehicles with a Sniper", types: ["moving_vehicle"] },
  { name: "Place Top 20 with at least 1 Squadmate in a Vehicle at all Times", types: [] },
];
bingoList[17] = [
  { name: "Kill 2 Enemies while a Passenger of a Moving Vehicle", types: ["kill_from_moving_vehicle"] },
  { name: "Self-revive 6 Times", types: ["heal"] },
  { name: "Get a Kill Over 200m", types: [] },
];
bingoList[18] = [
  { name: "Completely Use Up 3 Gas Masks", types: ["gas_masks"] },
  { name: "Complete 6 Scavenger Contracts", types: ["scavenger"] },
  { name: "Have Both Players Survive Until Gluag Closes without Entering the Gulag", types: [] },
  { name: "Get 2 Advanced UAVs", types: ["advanced_uav"] },
];
bingoList[19] = [
  { name: "Kill 4 Enemies while a Passenger of a Moving Vehicle", types: ["kill_from_moving_vehicle"] },
  { name: "Complete 6 Recon Contracts", types: ["recon"] },
  { name: "Kill 2 Enemies with Melees", types: ["melee"] },
];
bingoList[20] = [
  { name: "Collect Loadout 10 Times", types: ["loadouts"] },
  { name: "Blow Up 4 Occupied Vehicles with Lethal Equipment", types: ["lethal"] },
  { name: "Get 2 Kills with Throwing Knives", types: ["knife"] },
];
bingoList[21] = [
  { name: "4 Knocks/Finishes with a Custer/Air Strike", types: ["strike"] },
  { name: "Complete 6 King Contracts", types: ["king"] },
  { name: "Get at Least 10 Kills in a Game", types: [] },
];
bingoList[22] = [
  { name: "15 Kills with Snipers", types: ["snipers"] },
  { name: "15 Kills with Shotguns", types: ["shotguns"] },
  { name: "15 Kills with Pistols", types: ["pistols"] },
  { name: "Place Top 20 with Starting Pistol Only", types: [] },
];
bingoList[23] = [
  { name: "Use 10 UAVs", types: ["uav"] },
  { name: "Kill 4 Kings", types: ["kill_kings"] },
  { name: "Completely Use Up 6 Gas Masks", types: ["gas_masks"] },
  { name: "Kill 4 Enemies with Melees", types: ["melee"] },
];
bingoList[24] = [
  { name: "25 Kills with SMGs", types: ["smgs"] },
  { name: "25 Kills with ARs", types: ["ars"] },
  { name: "25 Kills with DMRs/Marksman Rifles", types: ["marksman"] },
  { name: "Complete 15 Contracts", types: ["contracts"] },
];
bingoList[25] = [
  { name: "7 Kills with Vehicles", types: ["vehicle_kills"] },
  { name: "Unlock 5 Bunkers", types: ["bunkers"] },
  { name: "Kill 4 Enemies out of Moving Vehicles with a Sniper", types: ["moving_vehicle"] },
  { name: "Win the Gulag Without Killing the Enemy", types: [] },
];
