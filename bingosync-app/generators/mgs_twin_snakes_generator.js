// Metal Gear Solid: The Twin Snakes Bingo Generator
// Version 0.1
// By NickRPGreen
// With contributions from SuaveBeardson

bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
    { name: "Dog Tag: Liquid Snake" },
    { name: "Ocelot: Non-Lethal", "types": ["Ocelot"] },
    { name: "PSG1-T" },
    { name: "Psycho Mantis: Non-Lethal", "types": ["Psycho Mantis"] },
    { name: "Sniper Wolf 1: Non-Lethal", "types": ["Sniper Wolf 1"] },
    { name: "Sniper Wolf 2: Non-Lethal", "types": ["Sniper Wolf 2"] },
    { name: "Tank: Lethal", "types": ["Tank"] },
    { name: "Vulcan Raven: Lethal", "types": ["Vulcan Raven"] },
];
bingoList[2] = [
    { name: "Body Armor" },
    { name: "Book" },
    { name: "Cave: Shoot the Pupper", "types": ["Cave"] },
    { name: "Dog Tag: Psycho Mantis" },
    { name: "Gain 10 Alerts", "types": ["Alerts"] },
    { name: "Kill 10 Guards", "types": ["Kill Guards"] },
    { name: "Ocelot: Damageless" },
    { name: "Vulcan Raven: Stinger Only", "types": ["Raven Weapon","Raven Lethal"] },
];
bingoList[3] = [
    { name: "Claymore" },
    { name: "Daze 1 Guard", "types": ["Daze"] },
    { name: "Destroy 10 Cameras", "types": ["Cameras"] },
    { name: "Dog Tag: Vulcan Raven" },
    { name: "Heliport: 'A surveillance camera?'" },
    { name: "Liquid: Don't let Liquid fall off" },
    { name: "Ocelot: Lethal", "types": ["Ocelot"] },
    { name: "Snowfield: Shoot the Pupper" },
];
bingoList[4] = [
    { name: "Dog Tag: Nuke Building B1 Office" },
    { name: "Dog Tag: Sniper Wolf" },
    { name: "FAMAS" },
    { name: "Kill 20 Guards", "types": ["Kill Guards"] },
    { name: "Knock 1 guard over a fence", "types": ["Fence"] },
    { name: "Medi-room: Hide from Johnny" },
    { name: "Ninja: Use a Chaff" },
    { name: "Punch 1 guard in the crotch", "types": ["Crotch"] },
    { name: "See Snake fall flat on his face" },
];
bingoList[5] = [
    { name: "Answer a non-mandatory Codec call" },
    { name: "Cargo Elevators: Punch 3 ravens", "types": ["Ravens"] },
    { name: "Cargo Elevators: Shoot 5 ravens", "types": ["Ravens"] },
    { name: "Comms Tower B: Destroy all cameras", "types": ["Comms Tower B"] },
    { name: "Dog Tag: Canyon South" },
    { name: "Gain 15 Alerts", "types": ["Alerts"] },
    { name: "Hide in a locker" },
    { name: "Kick a locker door inwards" },
    { name: "Kick a locker door outwards" },
    { name: "Underground Passage: See Meryl slap her butt" },
];
bingoList[6] = [
    { name: "Be Slapped By Meryl" },
    { name: "Box 2" },
    { name: "Comms Tower A: No M9", "types": ["Comms Tower A"] },
    { name: "Dog Tag: Blast Furnace Middle Catwalk" },
    { name: "Dog Tag: Tank Hanger North East" },
    { name: "Game Over: Pit" },
    { name: "Game Over: Shot" },
    { name: "Knock Out 10 Guards", "types": ["Knock Out"] },
    { name: "Liquid: Punches only" },
    { name: "Psycho Mantis: Damageless" },
];
bingoList[7] = [
    { name: "Cave: Do not shoot any wolves", "types": ["Cave"] },
    { name: "Destroy 15 Cameras", "types": ["Cameras"] },
    { name: "Dog Tag: Canyon Below Tank" },
    { name: "Dog Tag: Nuke Building B1 Toilet" },
    { name: "Dog Tag: Underground Base Upper West" },
    { name: "Dog Tag: Warehouse North Lower" },
    { name: "Game Over: Fall" },
    { name: "Ninja: Damageless" },
    { name: "Nuke Building 1F: No Chaff/M9" },
    { name: "Psycho Mantis: Lethal", "types": ["Psycho Mantis"] },
];
bingoList[8] = [
    { name: "Call Nastasha Romanenko" },
    { name: "Daze 3 Guards", "types": ["Daze"] },
    { name: "Dog Tag: Heliport Truck" },
    { name: "Dog Tag: Meryl" },
    { name: "Dog Tag: Warehouse West" },
    { name: "Kill 30 Guards", "types": ["Kill Guards"] },
    { name: "Punch 3 guards in the crotch", "types": ["Crotch"] },
    { name: "RP Sensor" },
    { name: "Sniper Wolf 2: Damageless" },
    { name: "Vulcan Raven: Bullets Only", "types": ["Raven Weapon","Raven Lethal"] },
];
bingoList[9] = [
    { name: "Cargo Elevator: Explosives Only", "types": ["Cargo Elevator"] },
    { name: "Comms Tower B: Destroy no cameras", "types": ["Comms Tower B","Max Cams"] },
    { name: "Dog Tag: Armory West" },
    { name: "Dog Tag: Blast Furnace Lower Patrol" },
    { name: "Dog Tag: Heliport Sleeping Vent" },
    { name: "Dog Tag: Tank Hanger South West" },
    { name: "Game Over: Baker died" },
    { name: "Game Over: Suffocate" },
    { name: "Have a guard ask 'Whose footprints are these?'" },
    { name: "SOCOM Suppressor" },
    { name: "Tank Hanger: Shoot all sensor units", "types": ["Tank Hanger"] },
];
bingoList[10] = [
    { name: "Collect 5 Dog Tags", "types": ["Dog Tags"] },
    { name: "Comms Tower A: Lethal Only", "types": ["Comms Tower A"] },
    { name: "Dog Tag: Armory East" },
    { name: "Dog Tag: Heliport 2nd Floor" },
    { name: "Dog Tag: Tank Hanger Suppressor" },
    { name: "Dog Tag: Warehouse East" },
    { name: "Ninja: Shoot Mario during fight" },
    { name: "Ninja: Shoot Yoshi during fight" },
    { name: "Psycho Mantis: FAMAS Only", "types": ["Psycho Mantis"] },
    { name: "Sniper Wolf 2: No Stinger Search" },
    { name: "Vulcan Raven: Handguns Only", "types": ["Raven Weapon"] },
];
bingoList[11] = [
    { name: "Cargo Elevator: Non-Lethal" },
    { name: "Cave: Have a wolf pee on a box" },
    { name: "Dog Tag: Johnny Sasaki" },
    { name: "Dog Tag: Warehouse North Upper" },
    { name: "Game Over: Own Explosion" },
    { name: "Gas Mask" },
    { name: "Heliport SOCOM" },
    { name: "Knock 2 guards over fences", "types": ["Fence"] },
    { name: "Knock Out 20 Guards", "types": ["Knock Out"] },
    { name: "Sniper Wolf 1: Damageless" },
    { name: "Tank: Damageless" },
];
bingoList[12] = [
    { name: "Daze 5 Guards", "types": ["Daze"] },
    { name: "Dog Tag: Canyon North" },
    { name: "Gain 20 Alerts", "types": ["Alerts"] },
    { name: "Guard Encounter: Non-Lethal" },
    { name: "Have a guard state “It’s just a box”" },
    { name: "Heliport: Fast-travel to Nuke Building 1F" },
    { name: "Liquid: Damageless" },
    { name: "Punch 5 guards in the crotch", "types": ["Crotch"] },
    { name: "Sniper Wolf 1: No Crits" },
    { name: "Vulcan Raven: Nikita Only", "types": ["Raven Weapon","Raven Lethal"] },
    { name: "Vulcan Raven: Throwables Only", "types": ["Raven Weapon","Raven Lethal"] },
];
bingoList[13] = [
    { name: "Cargo Elevator: Melee Only", "types": ["Cargo Elevator"] },
    { name: "Dog Tag: Underground Base East" },
    { name: "Four Horsemen: Melee Only" },
    { name: "Game Over: Meryl died" },
    { name: "Medi-room: Survive one round of torture", "types": ["Torture"] },
    { name: "Nuke Building 1F: Fast-travel to the Heliport" },
    { name: "Sniper Wolf 1: No Pentaz" },
    { name: "Supply Route: No FPV" },
    { name: "Tank Hanger: Shoot no sensor units", "types": ["Tank Hanger"] },
    { name: "Vulcan Raven: Famas Only", "types": ["Raven Weapon","Raven Lethal"] },
];
bingoList[14] = [
    { name: "Armory M9" },
    { name: "Blast Furnace: No Hanging" },
    { name: "Comms Tower A: No Stun Grenades", "types": ["Comms Tower A"] },
    { name: "Destroy 20 Cameras", "types": ["Cameras"] },
    { name: "Dog Tag: Armory PSG1" },
    { name: "Dog Tag: Canyon Above Tank" },
    { name: "Dog Tag: Warehouse Center" },
    { name: "Game Over: Lava" },
    { name: "Mine Detector" },
    { name: "Sniper Wolf 2: No Crits" },
];
bingoList[15] = [
    { name: "Cargo Dock: Take a dive" },
    { name: "Collect 10 Dog Tags", "types": ["Dog Tags"] },
    { name: "Dog Tag: Armory Elevator" },
    { name: "Heliport: Exit via the second floor vent" },
    { name: "Hind D: Damageless" },
    { name: "Knock 3 guards over fences", "types": ["Fence"] },
    { name: "Liquid: No punch loops" },
    { name: "PSG1" },
    { name: "Vulcan Raven: Snipers Only", "types": ["Raven Weapon"] },
];
bingoList[16] = [
    { name: "Box 3" },
    { name: "Game Over: Drown" },
    { name: "Game Over: Electrocuted" },
    { name: "Psycho Mantis: No Crits" },
    { name: "Rappel: No Rope" },
    { name: "Sniper Wolf 2: No Pentaz" },
    { name: "Tank: No Chaff Grenades", "types": ["Tank"] },
    { name: "Tank: No Throwables", "types": ["Tank"] },
];
bingoList[17] = [
    { name: "Destroy 25 Cameras", "types": ["Cameras","Max Cams"] },
    { name: "Dog Tag: Blast Furnace North West" },
    { name: "Dog Tag: Underground Base Lower West" },
    { name: "Game Over: Wolf Lunge" },
    { name: "Knock Out 30 Guards", "types": ["Knock Out"] },
    { name: "Tank: Non-Lethal", "types": ["Tank","Tank Lethal"] },
    { name: "Tank: Throwables Only", "types": ["Tank"] },
    { name: "Vulcan Raven: Traps Only", "types": ["Raven Weapon","Raven Lethal"] },
];
bingoList[18] = [
    { name: "Box 1" },
    { name: "Game Over: Enemy Explosion" },
    { name: "Game Over: Scalded" },
    { name: "Game Over: Vehicular Take Down" },
    { name: "Heliport: Throw a guard off the cliff" },
    { name: "Metal Gear REX: Damageless" },
    { name: "Ninja: Play Hide & Seek" },
];
bingoList[19] = [
    { name: "Four Horsemen: Non-Lethal" },
    { name: "Nuke Building B1: All Dog Tags" },
    { name: "Sniper Wolf 2: Lethal", "types": ["Sniper Wolf 2"] },
    { name: "Tank Hanger: All Dog Tags" },
    { name: "Thermal Goggles" },
    { name: "Vulcan Raven: Damageless" },
    { name: "Warehouse North: All Dog Tags" },
];
bingoList[20] = [
    { name: "Blast Furnace: All Dog Tags" },
    { name: "Game Over: Meleed" },
    { name: "Medi-room: “What are you playing in that ketchup for?”" },
    { name: "Medi-room: Survive two rounds of torture", "types": ["Torture"] },
    { name: "Night Vision Goggles" },
    { name: "Ocelot: No First-Person View" },
    { name: "Snowfield: Fast-travel to Nuke Building 1F" },
];
bingoList[21] = [
    { name: "Collect 15 Dog Tags", "types": ["Dog Tags"] },
    { name: "Ninja: Nikita Swings Only" },
    { name: "Nuke Building 1F: Fast-travel to the Snowfield" },
    { name: "Sniper Wolf 2: Stinger Only", "types": ["Sniper Wolf 2"] },
    { name: "Tank: Grenades Only", "types": ["Tank","Tank Lethal"] },
    { name: "Warehouse: Freeze PAL Key" },
];
bingoList[22] = [
    { name: "Heliport: Fast-travel to the Snowfield" },
    { name: "Hide in a locker to escape an Evasion" },
    { name: "Psycho Mantis: Melee Only", "types": ["Psycho Mantis"] },
    { name: "Sniper Wolf 2: Nikita Only", "types": ["Sniper Wolf 2"] },
    { name: "Snowfield: Fast-travel to the Heliport" },
    { name: "Underground Base: All Dog Tags" },
];
bingoList[23] = [
    { name: "Blast Furnace: Heat PAL Key" },
    { name: "Canyon: All Dog Tags" },
    { name: "Game Over: Bird Peck" },
    { name: "Heliport: All Dog Tags" },
    { name: "Vulcan Raven: Non-Lethal", "types": ["Vulcan Raven","Raven Lethal"] },
];
bingoList[24] = [
    { name: "Armory: All Dog Tags" },
    { name: "Digital Camera" },
    { name: "Medi-room: Leave your gear behind" },
    { name: "No Prozac Skips" },
    { name: "Psycho Mantis: No Controller Swap" },
];
bingoList[25] = [
    { name: "Collect 20 Dog Tags", "types": ["Dog Tags"] },
    { name: "Medi-room: Survive three rounds of torture", "types": ["Torture"] },
    { name: "Sniper Wolf 1: Lethal", "types": ["Sniper Wolf 1"] },
    { name: "Warehouse: All Dog Tags" },
];