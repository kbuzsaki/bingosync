var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[[
{ "name": "11 Delfino Blue Coins", "types": ["level_blues"] }, 
{ "name":"15 Delfino Blue Coins", "types": ["level_blues"] },
{ "name":"15 M Graffiti Blue Coins", "types": ["blues"] },
{ "name": "17 M Graffiti Blue Coins", "types": ["blues"] },
{ "name": "3 Blue Trade Shines", "types": ["blues"] }
],[
{ "name":"15 Gelato Blue Coins", "types": ["level_blues"] },
{ "name": "Erto 100 Coin Shine", "types": ["100_coin"] },
{ "name": "WarShip 100 Coin Shine", "types": ["100_coin"] },
{ "name": "LaCrima 100 Coin Shine", "types": ["100_coin"] },
{ "name": "LightHouse 100 Coin Shine", "types": ["100_coin"] },
{ "name": "Pianta Pit 100 Coin Shine", "types": ["100_coin"] },
{ "name": "Ricco 100 Coin Shine", "types": ["100_coin"] },
{ "name": "1 Turbo Nozzle Level Unlock", "types": [""] },
{ "name":"1 Ricco Hidden Shine", "types": ["hidden"] },
{ "name": "Pianta 100 Coin Shine", "types": ["100_coin"] }
],[
{ "name": "Pinna 100 Coin Shine", "types": ["100_coin"] },
{ "name": "Noki 100 Coin Shine", "types": ["100_coin"] },
{ "name": "1 Bianco Hidden Shine", "types": ["hidden"] },
{ "name": "Gelato 100 Coin Shine", "types": ["100_coin"] },
{ "name": "Complete Booty Scooty", "types": ["task"] },
{ "name": "Erto Hidden Shine", "types": ["hidden"] },
{ "name": "Two 100 Coin Shines", "types": ["100_coin"] }
],[
{ "name": "1 Pinna Hidden Shine", "types": ["hidden"] },
{ "name": "LightHouse Hidden Shine", "types": ["hidden"] },
{ "name": "4 Shines From Transitions","types": ["transition"]},
{ "name": "Bianco 4 Hoverless", "types": ["hoverless"] },
{ "name": "23 Ricco Blue Coins", "types": ["level_blues"] },
{ "name": "3 Boss Shines", "types": ["boss"] },
{ "name": "16 Pianta Village Blue Coins", "types": ["level_blues"] },
{ "name": "12 Pianta Pit Blue Coins", "types": ["level_blues"] },
{ "name": "13 Erto Blue Coins", "types": ["level_blues"] },
{ "name": "Warship 1","types": ["bottle_rocket"]}
],[
{ "name": "3 Fruit Lady Blue Coins", "types": ["blues"] },
{ "name": "5 NPC Blue Coins", "types": ["blues"] },
{ "name": "15 Bianco Blue Coins", "types": ["level_blues"] },
{ "name": "4 Sirena Shines", "types": ["level_shines", "episode_shines"] },
{ "name": "3 LaCrima Shines", "types": ["level_shines", "episode_shines"] },
{ "name": "3 LightHouse Shines", "types": ["level_shines", "episode_shines"] },
{ "name": "5 Enemy Blue Coins", "types": ["blues"] },
{ "name": "13 LightHouse Blue Coins", "types": ["level_blues"] },
{ "name": "13 LaCrima Blue Coins", "types": ["level_blues"] },
{ "name": "13 WarShip Blue Coins", "types": ["level_blues"] },
{ "name": "16 Noki Blue Coins", "types": ["level_blues"] },
{ "name": "Defeat Masked Stu in LaCrima", "types": ["task"] },
{ "name": "4 Noki Shines", "types": ["level_shines", "episode_shines"] }
],[
{ "name": "Ricco 3 Hoverless", "types": ["hoverless"] },
{ "name": "Pinna 3 Hoverless", "types": ["hoverless"] },
{ "name": "Lighthouse 2 hoverless (NO reset area)","types": ["hoverless"]},
{ "name": "2 Pianta Pit Shines", "types": ["level_shines"] },
{ "name": "3 Hidden Shines", "types": ["hidden"] },
{ "name": "8 Sirena Blue Coins", "types": ["level_blues"] },
{ "name": "2 Hidden Reds Hoverless", "types": ["reds", "hoverless","hidden"] },
{ "name": "2 Gelato Hidden Shines", "types": ["hidden"] },
{ "name": "3 Warship Shines", "types": ["level_shines", "episode_shines"] },
{ "name": "2 WarShip Hidden Shines", "types": ["hidden"] },
{ "name": "16 Pinna Blue Coins", "types": ["level_blues"] }
],[
{ "name": "5 Shines From Transitions","types": ["transitions"]},
{ "name": "4 Shines from 2 Levels", "types": ["x_shines_in_x_levels"] },
{ "name": "Pinna 5 from the Back Hoverless", "types": ["hoverless"] },
{ "name":"4 Shines from 2 New Levels", "types": ["x_shines_in_x_levels"] },
{ "name": "Complete a Boss Rematch", "types": ["boss"] },
{ "name": "6 Ricco Shines", "types": ["level_shines", "episode_shines"] },
{ "name": "5 Hidden Shines", "types": ["hidden"] },
{ "name": "8 Shines in Secrets", "types": ["secret", "reds"] },
{ "name": "5 Pinna Shines", "types": ["level_shines", "episode_shines"] }
],[
{ "name": "2 Rocket Nozzle  Level Unlocks", "types": [""] },
{ "name": "4 Boss Shines", "types": ["boss"] },
{ "name": "4 Pianta Shines", "types": ["level_shines", "episode_shines"] },
{ "name": "4 Erto Shines", "types": ["level_shines", "episode_shines"] },
{ "name": "4 Red Coin Shines", "types": ["reds"] },
{ "name": "Eel Shine", "types": ["episode_shines", "boss"] },
{ "name": "8 Delfino Shines", "types": ["delfino_shines"] },
{ "name": "9 Delfino Shines", "types": ["delfino_shines"] }
],[
{ "name": "5 Secret Shines", "types": ["secret"] },
{ "name": "5 Red Coin Shines", "types": ["reds"] },
{ "name": "7 Linked Blue Coin Pairs", "types": ["blues"] },
{ "name": "7 Blue Bird Blue Coins", "types": ["blues"] },
{ "name": "All 10 Daisy Cruiser Blue coins", "types": ["level_blues"] },
{ "name": "2 Piantissimo Shines", "types": ["task"] },
{ "name": "6 Shines From Transitions","types": ["transitions"]}
],[
{ "name": "4 Unique Boss Shines", "types": ["boss"] },
{ "name": "7 Enemy Blue Coins", "types": ["blues"] },
{ "name": "Bianco 100 Coin Shine", "types": ["100_coin"] },
{ "name": "20 Bianco Blue Coins", "types": ["level_blues"] },
{ "name": "Sirena 100 Coin Shine", "types": ["100_coin"] } ,
{ "name": "3 NPC Level Shines", "types": ["NPC"] },
{ "name": "Complete 2 secrets from new Levels", "types": ["secret_shines"] }
],[
{ "name": "1 Sirena Hidden Shine", "types": ["hidden"] },
{ "name": "6 Secret Shines", "types": ["secret"] },
{ "name": "8 Linked Blue Coin Pairs", "types": ["blues"] },
{ "name": "All 3 Cannon Mole Shines", "types": ["task"] },
{ "name": "Defeat Bowser", "types": [""] },
{ "name": "Complete 3 secrets from new Worlds", "types": ["secret_shines"] },
{ "name": "1 Pianta Hidden Shine", "types": ["hidden"] }
],[
{ "name": "20 Blue Coins from 2 Levels", "types": ["level_blues" , "total_blues"] },
{ "name": "6 Hidden Shines", "types": ["hidden"] },
{ "name": "2 Shine Button Shines", "types": ["task"] },
{ "name": " 20 Total Blues From Cruiser Hub Worlds", "types": ["level_blues", "total_blues"] },
{ "name": "Mario’s Dream 1", "types": ["bottle_rocket"] },
{ "name": "LaCrima Shadow Mario", "types": ["shadow_mario"] },
{ "name": "WarShip Shadow Mario", "types": ["shadow_mario"] },
{ "name": "LightHouse Shadow Mario", "types": ["shadow_mario"] },
{ "name": "Pinna Shadow Mario", "types": ["shadow_mario"] }
],[
{ "name": "2 Butterfly Blue Coins (NO Pinna)", "types": [""] },
{ "name": " 3 Shines From 2 Cruiser Hub Worlds", "types": ["x_shines_in_x_levels"] },
{ "name": "All Episodes for 1 Cruiser Hub World", "types": ["episode_shines"] },
{ "name": "La Nokissia’s Shine Race", "types": ["task"] },
{ "name": "Sirena 5 OR Noki 6 OR Gelato 5", "types": ["task"] },
{ "name": "Complete Erto 5", "types": ["level_shines", "episode_shines"] },
{ "name": "Complete 4 secrets from new Worlds", "types": ["secret_shines"] },
{ "name": "5 Boss Shines", "types": ["boss"] },
{ "name": "4 NPC Level shines", "types": ["NPC"] } 
],[
{ "name": "Ride Yoshi in 3 Levels", "types": [""] },
{ "name": "5 Unique Boss Shines", "types": ["boss"] },
{ "name": "6 Red Coin Shines", "types": ["reds"] },
{ "name": " 2 Shines From 2 Cruiser Hub Worlds", "types": ["x_shines_in_x_levels"] },
{ "name": " 2 Shines From 3 Cruiser Hub Worlds", "types": ["x_shines_in_x_levels"] }
],[
{ "name": "2 Shines from 4 Levels", "types": ["x_shines_in_x_levels"] },
{ "name": "100 Coin Shine in an Episode 2", "types": ["100_coin"] },
{ "name": "100 Coin Shine in a Secret", "types": ["100_coin"] },
{ "name": "5 Bianco Shines", "types": ["episode_shines"] },
{ "name": "100 Coin Shine in a Boss Episode", "types": ["100_coin"] },
{ "name": "Cruiser 100 Coin Shine", "types": ["100_coin"] },
{ "name": "Complete 2 Bottle Rocket Stages", "types": ["bottle_rocket"] }
],[
{ "name": "9 Blue Bird Blue Coins", "types": ["blues"] },
{ "name": "4 Gelato Shines", "types": ["level_shines"] },
{ "name": "3 Rocket Nozzle  Level Unlocks", "types": ["task"] },
{ "name": "Full Clear 1 Cruiser Hub World", "types": ["episode_shines"] },
{ "name": "3 Shines from 3 New Worlds", "types": ["x_shines_in_x_levels"] },
{ "name": "5 NPC Level Shines", "types": ["NPC"] } ,
{ "name": "4 non-red IGT Level shines", "types": ["IGT"] },
{ "name": "1 Shine from each new pre-cruiser Level", "types": ["x_shines_in_x_levels"] }
],[
{ "name": "5 Gelato Shines", "types": ["episode_shines"] },
{ "name": "7 Secret Shines", "types": ["secrets"] },
{ "name": "2 Secrets in 1 Level", "types": ["secrets"] },
{ "name": "7 Hidden Shines", "types": ["hidden"] },
{ "name": "Bianco Shadow Mario", "types": ["shadow_mario"] },
{ "name": "1 Shine from each vanilla Level", "types": ["x_shines_in_x_levels"] },
{ "name": "100 Coin Shine in a Cabin Level", "types": ["100_coin", "cabin"] }
],[
{ "name": "2 Shines from 5 Levels", "types": ["x_shines_in_x_levels"] },
{ "name": "5 Blues from 1 Cabin Level", "types": ["level_blues"] },
{ "name": "18 Sirena Blue Coins", "types": ["level_blues"] },
{ "name": "Complete Episode 3 OR 4 of Red Lily", "types": ["episode_shines"] },
{ "name": "Defeat Fire Petey", "types": ["episode_shines" , "boss"] }
],[
{ "name": "7 Red Coin Shines", "types": ["reds"] },
{ "name": "Pianta Shadow Mario", "types": ["shadow_mario"] },
{ "name": "Erto Shadow Mario", "types": ["shadow_mario"] },
{ "name": "26 Shines", "types": [""] },
{ "name": "5 non-red IGT Level shines", "types": ["IGT"] }, 
{ "name": "2 unique Blooper Riding Stages", "types": ["task"] }
],[
{ "name": "Wiggler Shine", "types": ["boss"] },
{ "name": "14 Delfino Shines (With Blue Trades + transitions)", "types": ["delfino_shines"] },
{ "name": "16 Delfino Shines (With Blue Trades + transitions)", "types": ["delfino_shines"] },
{ "name": "3 Piantissimo Shines", "types": ["task"] },
{ "name": "Three 100 Coin Shines", "types": ["100_coin"] }
],[
{ "name": "3 Shines from 3 Levels", "types": ["x_shines_in_x_levels"] },
{ "name": "4 Shines from 3 Levels", "types": ["x_shines_in_x_levels"] },
{ "name": "3 Shines from 2 Cruiser Hub Levels", "types": ["x_shines_in_x_levels"] },
{ "name": "3 Shines from 3 Cruiser Hub Levels", "types": ["x_shines_in_x_levels"] },
{ "name": "1 Shine from 4 Cruiser Hub Levels", "types": ["x_shines_in_x_levels"] },
{ "name": "2 Shines from 4 Cruiser Hub Levels", "types": ["x_shines_in_x_levels"] },
{ "name": "3 Level Turbo Nozzle Unlocks", "types": ["task"] },
{ "name": "6 non-red IGT Level Shines", "types": ["IGT"] } 
],[
{ "name": "12 Episode Shines", "types": ["episode_shines"] },
{ "name": "5 Shines from 2 Levels", "types": ["x_shines_in_x_levels"] },
{ "name": "14 Level Shines", "types": ["level_shines"] },
{ "name": "8 Shines from 1 Level", "types": ["level_shines"] }
],[
{ "name": "9 NPC Blue Coins OR Ricco 8", "types": ["blues" , "episode_shines"] },
{ "name": "1 Episode 8 Shine (NO Sirena)", "types": ["episode_shines"] },
{ "name": "Unlock Piantissimo", "types": [""] },
{ "name": "All 4 Sand Bird Blues OR All 4 Eel Blues", "types": ["blues"] },
{ "name": "Complete All Episodes of 1 Cabin Level", "types": ["cabin" , "episode_shines"] }
],[
{ "name": "10 Blue Coins from 4 Unique Worlds", "types": ["total_blues" , "level_blues"] },
{ "name": "45 Total Blue Coins", "types": ["total_blues"] },
{ "name": "50 Total Blue Coins", "types": ["total_blues"] },
{ "name": "55 Total Blue Coins", "types": ["total_blues"] },
{ "name": "20 Total Blue Coins from Cruiser Hub Worlds", "types": ["total_blues" , "level_blues"] }
],[
{ "name": "12 Blue Coins from 4 Unique Levels", "types": ["total_blues" , "level_blues"] },
{ "name": "8 Blue Coins from 3 Unique Cruiser Hub Worlds", "types": ["total_blues" , "level_blues"] },
{ "name": "30 Total Blue Coins from Cruiser Hub Worlds", "types": ["total_blues" , "level_blues"] },
{ "name": "70 Total Blue Coins", "types": ["total_blues"] },
{ "name": "75 Total Blue Coins", "types": ["total_blues"] },
{ "name": "80 Total Blue Coins", "types": ["total_blues"] },
{ "name": "90 Total Blue Coins", "types": ["total_blues"] },
{ "name": "2 Shadow Mario Shines","types": [""]}
]]
;
