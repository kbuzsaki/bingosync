bingoGenerator = require("./generators/generator_bases/synerGen.js");

var bingoList = {
    //initialization
    "bingoTypes": {
        "boss": {"Max": 4}, //22 total (15 counting hardmode exclusions)
        "miniboss": {"Max": 4}, //20 total (13 counting hardmode exclusions)
        "bounty": {"Max": 1}, //5 total
        "hard": {"Max": 4}, //16 total
        "chapter": {"Max": 3}, //9 total (5 counting hardmode exclusions)
        "quest": {"Max": 6}, //22 total
        "collectible": {"Max": 8}, //29 total
        "#_cb": {"Max": 3}, //6 total
        "area_cb": {"Max": 3}, //7 total
        "medal": {"Max": 6}, //19 total
        "cooking": {"Max": 4}, //10 total
        "#_rank": {"Max": 2}, //6 total
        "stat_rank": {"Max": 1}, //5 total
        "cot": {"Max": 2}, //5 total
        "ability": {"Max": 2}, //5 total
        "spy": {"Max": 2} //4 total
    },
    "maxScore": 0,
    
    "ch_2": {
        "Desc": "Complete Chapter 2",
        "Diff": 6,
        "Types": ["chapter","boss"]
    },
    "ch_3": {
        "Desc": "Complete Chapter 3",
        "Diff": 9,
        "Excludes": ["boss_hard_b33"],
        "Types": ["chapter","boss"]
    },
    "ch_4": {
        "Desc": "Complete Chapter 4",
        "Diff": 15,
        "Excludes": ["boss_hard_watcher"],
        "Types": ["chapter","boss"]
    },
    "ch_5": {
        "Desc": "Complete Chapter 5",
        "Diff": 17,
        "Excludes": ["boss_hard_ultimax"],
        "Types": ["chapter","miniboss"]
    },
    "ch_6": {
        "Desc": "Complete Chapter 6",
        "Diff": 24,
        "Excludes": ["boss_hard_tank"],
        "Types": ["chapter","boss"]
    },
    "boss_hard_hard_hits": {
        "Desc": "Defeat any boss/miniboss with both Hard Mode and Hard Hits equipped",
        "Diff": 12,
        "Types": ["boss","miniboss","hard"]
    },
    "boss_hard_spider": {
        "Desc": "Defeat Spider with Hard Mode equipped",
        "Diff": 2,
        "Types": ["boss","hard"]
    },
    "boss_zm1": {
        "Desc": "Defeat Zasp & Mothiva 1",
        "Diff": 5,
        "Types": ["miniboss"]
    },
    "boss_scarlet": {
        "Desc": "Defeat Monsieur Scarlet",
        "Diff": 7,
        "Excludes": ["boss_hard_scarlet"],
        "Types": ["miniboss"]
    },
    "boss_hard_scarlet": {
        "Desc": "Defeat Monsieur Scarlet with Hard Mode equipped",
        "Diff": 9,
        "Excludes": ["boss_scarlet"],
        "Types": ["miniboss","hard"]
    },
    "boss_ahoneynation": {
        "Desc": "Defeat Ahoneynation",
        "Diff": 9,
        "Excludes": ["boss_hard_ahoneynation"],
        "Types": ["miniboss"]
    },
    "boss_hard_ahoneynation": {
        "Desc": "Defeat Ahoneynation with Hard Mode equipped",
        "Diff": 10,
        "Excludes": ["boss_ahoneynation"],
        "Types": ["miniboss","hard"]
    },
    "boss_hard_b33": {
        "Desc": "Defeat Heavy Drone B-33 with Hard Mode equipped",
        "Diff": 11,
        "Excludes": ["ch_3"],
        "Types": ["boss","hard","chapter"]
    },
    "boss_broodmother": {
        "Desc": "Defeat Broodmother",
        "Diff": 13,
        "Excludes": ["boss_hard_broodmother"],
        "Types": ["boss"]
    },
    "boss_hard_broodmother": {
        "Desc": "Defeat Broodmother with Hard Mode equipped",
        "Diff": 16,
        "Excludes": ["boss_broodmother"],
        "Types": ["boss","hard"]
    },
    "boss_chomper": {
        "Desc": "Defeat Mother Chomper",
        "Diff": 14,
        "Excludes": ["boss_hard_chomper"],
        "Types": ["boss"]
    },
    "boss_hard_chomper": {
        "Desc": "Defeat Mother Chomper with Hard Mode equipped",
        "Diff": 18,
        "Excludes": ["boss_chomper"],
        "Types": ["boss","hard"]
    },
    "boss_asto": {
        "Desc": "Defeat Astotheles",
        "Diff": 10,
        "Excludes": ["boss_hard_asto"],
        "Types": ["miniboss"]
    },
    "boss_hard_asto": {
        "Desc": "Defeat Astotheles with Hard Mode equipped",
        "Diff": 12,
        "Excludes": ["boss_asto"],
        "Types": ["miniboss","hard"]
    },
    "boss_scorp": {
        "Desc": "Defeat Dune Scorpion",
        "Diff": 12,
        "Excludes": ["boss_hard_scorp"],
        "Types": ["miniboss"]
    },
    "boss_hard_scorp": {
        "Desc": "Defeat Dune Scorpion with Hard Mode equipped",
        "Diff": 15,
        "Excludes": ["boss_scorp"],
        "Types": ["miniboss","hard"]
    },
    "boss_hard_watcher": {
        "Desc": "Defeat the Watcher with Hard Mode equipped",
        "Diff": 19,
        "Excludes": ["ch_4"],
        "Types": ["boss","hard","chapter"]
    },
    "boss_beast": {
        "Desc": "Defeat the Beast",
        "Diff": 17,
        "Excludes": ["boss_hard_beast"],
        "Types": ["boss"]
    },
    "boss_hard_beast": {
        "Desc": "Defeat the Beast with Hard Mode equipped",
        "Diff": 20,
        "Excludes": ["boss_beast"],
        "Types": ["boss","hard"]
    },
    "boss_hard_ultimax": {
        "Desc": "Defeat General Ultimax with Hard Mode equipped",
        "Diff": 19,
        "Excludes": ["ch_5"],
        "Types": ["miniboss","hard","chapter"]
    },
    "boss_primal": {
        "Desc": "Defeat Primal Weevil",
        "Diff": 20,
        "Excludes": ["boss_hard_primal"],
        "Types": ["miniboss"]
    },
    "boss_hard_primal": {
        "Desc": "Defeat Primal Weevil with Hard Mode equipped",
        "Diff": 23,
        "Excludes": ["boss_primal"],
        "Types": ["miniboss","hard"]
    },
    "boss_zm2": {
        "Desc": "Defeat Zasp & Mothiva 2",
        "Diff": 21,
        "Excludes": ["boss_hard_zm2"],
        "Types": ["miniboss"]
    },
    "boss_hard_zm2": {
        "Desc": "Defeat Zasp & Mothiva 2 with Hard Mode equipped",
        "Diff": 24,
        "Excludes": ["boss_zm2"],
        "Types": ["miniboss","hard"]
    },
    "boss_hard_tank": {
        "Desc": "Defeat ULTIMAX Tank with Hard Mode equipped",
        "Diff": 25,
        "Excludes": ["ch_6"],
        "Types": ["boss","hard","chapter"]
    },
    "boss_kali": {
        "Desc": "Defeat Kali & Kabbu",
        "Diff": 11,
        "Types": ["miniboss","quest"]
    },
    "boss_riz": {
        "Desc": "Defeat Riz",
        "Diff": 19,
        "Types": ["miniboss"]
    },
    "boss_carmina": {
        "Desc": "Defeat Carmina (in battle)",
        "Diff": 23,
        "Types": ["miniboss"]
    },
    "boss_seedling": {
        "Desc": "Defeat Seedling King",
        "Diff": 22,
        "Types": ["boss","bounty"]
    },
    "boss_devourer": {
        "Desc": "Defeat Devourer",
        "Diff": 16,
        "Types": ["boss","bounty"]
    },
    "boss_wyrm": {
        "Desc": "Defeat Tidal Wyrm",
        "Diff": 19,
        "Types": ["boss","bounty"]
    },
    "boss_monarch": {
        "Desc": "Defeat False Monarch",
        "Diff": 21,
        "Types": ["boss","bounty"]
    },
    "boss_peacock": {
        "Desc": "Defeat Peacock Spider",
        "Diff": 24,
        "Types": ["boss","bounty"]
    },
    "boss_hard_zommoth": {
        "Desc": "Defeat Zommoth with Hard Mode equipped",
        "Diff": 25,
        "Excludes": ["quest_leif"],
        "Types": ["boss","hard"]
    },
    "quest_vi": {
        "Desc": "Complete Vi's Request",
        "Diff": 13
    },
    "quest_leif": {
        "Desc": "Complete Leif's Request",
        "Diff": 23,
        "Excludes": ["boss_hard_zommoth"],
        "Types": ["boss"]
    },
    "quest_parts_delivery": {
        "Desc": "Complete \"Parts Delivery\"",
        "Diff": 2,
        "Types": ["quest"]
    },
    "quest_lost_toy": {
        "Desc": "Complete \"Lost Toy\"",
        "Diff": 2,
        "Types": ["quest"]
    },
    "quest_hearty_breakfast": {
        "Desc": "Complete \"I Want A New Taste\"",
        "Diff": 3,
        "Types": ["quest"]
    },
    "quest_favorite_one": {
        "Desc": "Complete \"Dropped My Hat!\"",
        "Diff": 3,
        "Types": ["quest"]
    },
    "quest_cable_car": {
        "Desc": "Complete \"Cable Car Bodyguard\"",
        "Diff": 5,
        "Types": ["quest"]
    },
    "quest_crisbee": {
        "Desc": "Complete \"I Wanna Get Better!\"",
        "Diff": 4,
        "Types": ["quest"]
    },
    "quest_kut": {
        "Desc": "Complete \"My Specialty\"",
        "Diff": 6,
        "Types": ["quest"]
    },
    "quest_fry": {
        "Desc": "Complete \"A Smiling Dish\"",
        "Diff": 7,
        "Excludes": ["quest_aria"],
        "Types": ["quest"]
    },
    "quest_aria": {
        "Desc": "Complete \"Team Snakemouth...\"",
        "Diff": 8,
        "Excludes": ["quest_fry"],
        "Types": ["quest"]
    },
    "quest_theater": {
        "Desc": "Complete \"Theater Help Wanted!\"",
        "Diff": 7,
        "Types": ["quest"]
    },
    "quest_tanjy": {
        "Desc": "Complete \"Huuuuuuuuu...!!!\"",
        "Diff": 10,
        "Types": ["quest"]
    },
    "quest_mothiva_doll": {
        "Desc": "Complete \"Lost Item\"",
        "Diff": 13,
        "Excludes": ["statberry_heart_1"],
        "Types": ["quest"]
    },
    "quest_ore": {
        "Desc": "Complete \"Ore Wanted\"",
        "Diff": 13,
        "Types": ["quest"]
    },
    "quest_bad_book": {
        "Desc": "Complete \"Awful's Beauty\"",
        "Diff": 15,
        "Types": ["quest"]
    },
    "quest_cenn_pisci": {
        "Desc": "Complete \"Explorer Check!\"",
        "Diff": 16,
        "Types": ["quest","miniboss"]
    },
    "quest_wizard": {
        "Desc": "Complete \"Find The Ingredients!\"",
        "Diff": 17,
        "Types": ["quest"]
    },
    "quest_claw": {
        "Desc": "Complete \"My Mecha Claw!\"",
        "Diff": 20,
        "Types": ["quest"]
    },
    "quest_leaf_cloak": {
        "Desc": "Complete \"Help Me Get It Back!\"",
        "Diff": 21,
        "Types": ["quest"]
    },
    "quest_sophie": {
        "Desc": "Complete \"Rare Item Wanted!\"",
        "Diff": 21,
        "Types": ["quest"]
    },
    "quest_spycards": {
        "Desc": "Complete \"Card Masters of Bugaria\"",
        "Diff": 15,
        "Types": ["quest"]
    },
    "quest_elom": {
        "Desc": "Complete \"In Search of Something\"",
        "Diff": 23,
        "Types": ["quest"]
    },
    "discovery_10": {
        "Desc": "10 Discoveries",
        "Diff": 1,
        "Excludes": ["discovery_15"],
        "Types": ["collectible"]
    },
    "discovery_15": {
        "Desc": "15 Discoveries",
        "Diff": 2,
        "Excludes": ["discovery_10","discovery_20"],
        "Types": ["collectible"]
    },
    "discovery_20": {
        "Desc": "20 Discoveries",
        "Diff": 6,
        "Excludes": ["discovery_15","discovery_25"],
        "Types": ["collectible"]
    },
    "discovery_25": {
        "Desc": "25 Discoveries",
        "Diff": 10,
        "Excludes": ["discovery_20","discovery_30"],
        "Types": ["collectible"]
    },
    "discovery_30": {
        "Desc": "30 Discoveries",
        "Diff": 14,
        "Excludes": ["discovery_25","discovery_35"],
        "Types": ["collectible"]
    },
    "discovery_35": {
        "Desc": "35 Discoveries",
        "Diff": 19,
        "Excludes": ["discovery_30","discovery_40"],
        "Types": ["collectible"]
    },
    "discovery_40": {
        "Desc": "40 Discoveries",
        "Diff": 24,
        "Excludes": ["discovery_35"],
        "Types": ["collectible"]
    },
    "cb_5": {
        "Desc": "5 Crystal Berries",
        "Diff": 2,
        "Types": ["collectible","#_cb"]
    },
    "cb_10": {
        "Desc": "10 Crystal Berries",
        "Diff": 6,
        "Types": ["collectible","#_cb"]
    },
    "cb_15": {
        "Desc": "15 Crystal Berries",
        "Diff": 8,
        "Types": ["collectible","#_cb"]
    },
    "cb_20": {
        "Desc": "20 Crystal Berries",
        "Diff": 11,
        "Types": ["collectible","#_cb"]
    },
    "cb_25": {
        "Desc": "25 Crystal Berries",
        "Diff": 16,
        "Types": ["collectible","#_cb"]
    },
    "cb_30": {
        "Desc": "30 Crystal Berries",
        "Diff": 23,
        "Types": ["collectible","#_cb"]
    },
    "cb_snakemouth": {
        "Desc": "2 Crystal Berries in Snakemouth Den",
        "Diff": 1,
        "Types": ["collectible","area_cb"]
    },
    "cb_golden": {
        "Desc": "2 Crystal Berries in Golden Path",
        "Diff": 5,
        "Types": ["collectible","area_cb"]
    },
    "cb_factory": {
        "Desc": "2 Crystal Berries in Honey Factory",
        "Diff": 8,
        "Types": ["collectible","area_cb"]
    },
    "cb_hideout": {
        "Desc": "2 Crystal Berries in Bandit Hideout",
        "Diff": 9,
        "Types": ["collectible","area_cb"]
    },
    "cb_grasslands": {
        "Desc": "2 Crystal Berries in Far Grasslands",
        "Diff": 18,
        "Types": ["collectible","area_cb"]
    },
    "cb_termite": {
        "Desc": "2 Crystal Berries in the Termite Kingdom",
        "Diff": 21,
        "Types": ["collectible","area_cb"]
    },
    "cb_giant": {
        "Desc": "2 Crystal Berries in the Giant's Lair",
        "Diff": 25,
        "Types": ["collectible","area_cb"]
    },
    "lore_3": {
        "Desc": "3 Lore Books",
        "Diff": 3,
        "Excludes": ["lore_5"],
        "Types": ["collectible"]
    },
    "lore_5": {
        "Desc": "5 Lore Books",
        "Diff": 8,
        "Excludes": ["lore_3","lore_8"],
        "Types": ["collectible"]
    },
    "lore_8": {
        "Desc": "8 Lore Books",
        "Diff": 11,
        "Excludes": ["lore_5","lore_10"],
        "Types": ["collectible"]
    },
    "lore_10": {
        "Desc": "10 Lore Books",
        "Diff": 15,
        "Excludes": ["lore_8"],
        "Types": ["collectible"]
    },
    "lore_15": {
        "Desc": "15 Lore Books",
        "Diff": 20,
        "Types": ["collectible"]
    },
    "lore_20": {
        "Desc": "20 Lore Books",
        "Diff": 25,
        "Types": ["collectible"]
    },
    "medal_hp_plus": {
        "Desc": "3 HP Pluses",
        "Diff": 7,
        "Types": ["medal"]
    },
    "medal_bug_me_not": {
        "Desc": "Bug Me Not!",
        "Diff": 1,
        "Types": ["medal"]
    },
    "medal_back_support": {
        "Desc": "Back Support",
        "Diff": 4,
        "Types": ["medal"]
    },
    "medal_strong_start": {
        "Desc": "Strong Start",
        "Diff": 3,
        "Types": ["medal"]
    },
    "medal_tardigrade": {
        "Desc": "Tardigrade Shield",
        "Diff": 5,
        "Types": ["medal"]
    },
    "medal_meditation": {
        "Desc": "Meditation",
        "Diff": 10,
        "Types": ["medal"]
    },
    "medal_shock_trooper": {
        "Desc": "Shock Trooper",
        "Diff": 8,
        "Types": ["medal"]
    },
    "medal_spy_specs": {
        "Desc": "Spy Specs",
        "Diff": 11,
        "Excludes": ["medal_detector"],
        "Types": ["medal"]
    },
    "medal_detector": {
        "Desc": "Detector",
        "Diff": 12,
        "Excludes": ["medal_spy_specs"],
        "Types": ["medal"]
    },
    "medal_charge_up": {
        "Desc": "Charge Up",
        "Diff": 13,
        "Excludes": ["statberry_vendor","misc_metal_island","statberry_bond_2"],
        "Types": ["medal"]
    },
    "medal_berserker": {
        "Desc": "Berserker",
        "Diff": 10,
        "Types": ["medal"]
    },
    "medal_antlion": {
        "Desc": "Antlion Jaws",
        "Diff": 12,
        "Types": ["medal"]
    },
    "medal_frostbite": {
        "Desc": "Frostbite",
        "Diff": 13,
        "Types": ["medal"]
    },
    "medal_eternal_venom": {
        "Desc": "Eternal Venom",
        "Diff": 20,
        "Types": ["medal"]
    },
    "medal_front_support": {
        "Desc": "Front Support",
        "Diff": 18,
        "Types": ["medal"]
    },
    "medal_life_cast": {
        "Desc": "Life Cast",
        "Diff": 22,
        "Types": ["medal"]
    },
    "medal_extra_freeze": {
        "Desc": "Extra Freeze",
        "Diff": 21,
        "Types": ["medal"]
    },
    "medal_status_mirror": {
        "Desc": "Status Mirror",
        "Diff": 24,
        "Types": ["medal"]
    },
    "medal_luckier_day": {
        "Desc": "Luckier Day",
        "Diff": 17,
        "Types": ["medal"]
    },
    "recipe_10": {
        "Desc": "10 Recipes",
        "Diff": 1,
        "Excludes": ["recipe_15","recipe_20"],
        "Types": ["cooking"]
    },
    "recipe_15": {
        "Desc": "15 Recipes",
        "Diff": 3,
        "Excludes": ["recipe_10","recipe_20"],
        "Types": ["cooking"]
    },
    "recipe_20": {
        "Desc": "20 Recipes",
        "Diff": 4,
        "Excludes": ["recipe_10","recipe_15"],
        "Types": ["cooking"]
    },
    "recipe_big_mistake": {
        "Desc": "Cook a Big Mistake",
        "Diff": 1,
        "Types": ["cooking"]
    },
    "recipe_danger_dish": {
        "Desc": "Cook a Danger Dish",
        "Diff": 4,
        "Types": ["cooking"]
    },
    "recipe_hustle_candy": {
        "Desc": "Cook a Hustle Candy",
        "Diff": 4,
        "Types": ["cooking"]
    },
    "recipe_squart": {
        "Desc": "Cook a Squash Tart",
        "Diff": 13,
        "Types": ["cooking"]
    },
    "recipe_cherry_bomb": {
        "Desc": "Cook Cherry Bombs",
        "Diff": 16,
        "Types": ["cooking"]
    },
    "recipe_miracle_shake": {
        "Desc": "Cook a Miracle Shake",
        "Diff": 14,
        "Excludes": ["recipe_berry_smoothie"],
        "Types": ["cooking"]
    },
    "recipe_berry_smoothie": {
        "Desc": "Cook a Berry Smoothie",
        "Diff": 17,
        "Excludes": ["recipe_miracle_shake"],
        "Types": ["cooking"]
    },
    "rank_4": {
        "Desc": "Reach Rank 4",
        "Diff": 7,
        "Types": ["#_rank"]
    },
    "rank_6": {
        "Desc": "Reach Rank 6",
        "Diff": 10,
        "Types": ["#_rank"]
    },
    "rank_9": {
        "Desc": "Reach Rank 9",
        "Diff": 15,
        "Types": ["#_rank"]
    },
    "rank_11": {
        "Desc": "Reach Rank 11",
        "Diff": 18,
        "Types": ["#_rank"]
    },
    "rank_13": {
        "Desc": "Reach Rank 13",
        "Diff": 22,
        "Types": ["#_rank"]
    },
    "rank_15": {
        "Desc": "Reach Rank 15",
        "Diff": 25,
        "Types": ["#_rank"]
    },
    "rank_hp_2": {
        "Desc": "Rank up HP twice",
        "Diff": 7,
        "Types": ["stat_rank"]
    },
    "rank_tp_2": {
        "Desc": "Rank up TP twice",
        "Diff": 3,
        "Types": ["stat_rank"]
    },
    "rank_tp_4": {
        "Desc": "Rank up TP four times",
        "Diff": 12,
        "Types": ["stat_rank"]
    },
    "rank_mp_2": {
        "Desc": "Rank up MP twice",
        "Diff": 5,
        "Types": ["stat_rank"]
    },
    "rank_mp_4": {
        "Desc": "Rank up MP four times",
        "Diff": 11,
        "Types": ["stat_rank"]
    },
    "cot_5": {
        "Desc": "Complete 5 battles in Cave of Trials",
        "Diff": 14,
        "Types": ["cot"]
    },
    "cot_10": {
        "Desc": "Complete 10 battles in Cave of Trials",
        "Diff": 17,
        "Types": ["cot"]
    },
    "cot_15": {
        "Desc": "Complete 15 battles in Cave of Trials",
        "Diff": 20,
        "Types": ["cot"]
    },
    "cot_20": {
        "Desc": "Complete 20 battles in Cave of Trials",
        "Diff": 22,
        "Types": ["cot"]
    },
    "cot_25": {
        "Desc": "Complete 25 battles in Cave of Trials",
        "Diff": 25,
        "Types": ["cot"]
    },
    "ability_dig": {
        "Desc": "Learn the Beetle Dig ability",
        "Diff": 8,
        "Excludes": ["cb_cerise"],
        "Types": ["ability"]
    },
    "ability_dash": {
        "Desc": "Learn the upgraded Horn Dash ability",
        "Diff": 20,
        "Types": ["ability"]
    },
    "ability_fly": {
        "Desc": "Learn the Bee Fly ability",
        "Diff": 18,
        "Types": ["ability"]
    },
    "ability_shield": {
        "Desc": "Learn the Bubble Shield ability",
        "Diff": 7,
        "Types": ["ability"]
    },
    "ability_icicle": {
        "Desc": "Learn the Icicle ability",
        "Diff": 19,
        "Types": ["ability"]
    },
    "spy_5": {
        "Desc": "5 Spies",
        "Diff": 1,
        "Types": ["spy"]
    },
    "spy_10": {
        "Desc": "10 Spies",
        "Diff": 5,
        "Types": ["spy"]
    },
    "spy_15": {
        "Desc": "15 Spies",
        "Diff": 9,
        "Types": ["spy"]
    },
    "spy_20": {
        "Desc": "20 Spies",
        "Diff": 14,
        "Types": ["spy"]
    },
    "statberry_heart_1": {
        "Desc": "1 Heart Berry",
        "Diff": 6,
        "Excludes": ["quest_mothiva_doll"]
    },
    "statberry_heart_2": {
        "Desc": "2 Heart Berries",
        "Diff": 11
    },
    "statberry_bond_1": {
        "Desc": "1 Bond Berry",
        "Diff": 9
    },
    "statberry_bond_2": {
        "Desc": "2 Bond Berries",
        "Diff": 15,
        "Excludes": ["medal_charge_up","misc_metal_island","statberry_vendor"]
    },
    "mines_2": {
        "Desc": "Unlock 2 tunnels to the Ant Mines",
        "Diff": 4
    },
    "mines_3": {
        "Desc": "Unlock 3 tunnels to the Ant Mines",
        "Diff": 14
    },
    "misc_plush": {
        "Desc": "Buy the Green Ranger Plushie",
        "Diff": 2
    },
    "misc_metal_island": {
        "Desc": "Visit Metal Island",
        "Diff": 6,
        "Excludes": ["medal_charge_up","statberry_vendor","statberry_bond_2"]
    },
    "misc_blank_card": {
        "Desc": "Obtain the Blank Card",
        "Diff": 9
    },
    "cb_cerise": {
        "Desc": "Rescue Cerise",
        "Diff": 8,
        "Excludes": ["ability_dig"],
        "Types": ["collectible"]
    },
    "misc_chompy_bow": {
        "Desc": "Equip a bow on Chompy",
        "Diff": 16
    },
    "misc_status_bombs": {
        "Desc": "Use all 4 types of status bombs (Poison, Sleep, Numb, Frost)",
        "Diff": 18
    },
    "lore_kenny": {
        "Desc": "Get the Lore Book from Kenny",
        "Diff": 21,
        "Types": ["collectible"]
    },
    "cb_pink_spider": {
        "Desc": "Get the Crystal Berry from the Pink Spider",
        "Diff": 22,
        "Types": ["collectible"]
    },
    "misc_spy_cards_tourney": {
        "Desc": "Win the Spy Cards Tournament",
        "Diff": 22
    },
    "arcade_mite_knight": {
        "Desc": "9500 Points in Mite Knight",
        "Diff": 23,
        "Excludes": ["arcade_flower_journey"]
    },
    "arcade_flower_journey": {
        "Desc": "4500 Points in Flower Journey",
        "Diff": 24,
        "Excludes": ["arcade_mite_knight"]
    },
    "statberry_vendor": {
        "Desc": "Buy every stat-boosting berry from the vendor in Defiant Root",
        "Diff": 25,
        "Excludes": ["medal_charge_up","misc_metal_island","statberry_bond_2"]
    }
}
