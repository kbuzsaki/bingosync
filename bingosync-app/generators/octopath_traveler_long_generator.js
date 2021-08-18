bingoGenerator = require("./generators/generator_bases/synerGen.js");

//List made by Doid
//This is the Long game length Variant
//The list has been generated with the help of this Google Sheet:
//https://docs.google.com/spreadsheets/d/1csndIf-XziHWjSTF8f_ZrFrwRYPLBQK_lxpZu3Y4l2Y/edit?usp=sharing

var bingoList = {

"bingoTypes": {
        "items": {"Max": 6},
        "item_set": {"Max": 2},
        "broad_item_set": {"Max": 2},
        "item_count": {"Max": 2},
        "weapon": {"Max": 2},
        "armor": {"Max": 2},
        "accessory": {"Max": 2},
        "soulstone": {"Max": 1},
        "nut": {"Max": 1},
        "gold_item": {"Max": 1},
        "forbidden": {"Max": 1},
        "elem_reduce": {"Max": 1},
        "status_stone": {"Max": 1},
        "stat_accessory": {"Max": 1},
        "bottle": {"Max": 1},
        "info_counts": {"Max": 1},
        "stats": {"Max": 3},
        "hp": {"Max": 1},
        "sp": {"Max": 1},
        "phys_atk": {"Max": 1},
        "elem_atk": {"Max": 1},
        "phys_def": {"Max": 1},
        "elem_def": {"Max": 1},
        "crit": {"Max": 1},
        "evasion": {"Max": 1},
        "speed": {"Max": 1},
        "accuracy": {"Max": 1},
        "side_stories": {"Max": 6},
        "broad_ss_set": {"Max": 1},
        "ss_set": {"Max": 2},
        "ss_chain": {"Max": 2},
        "ss_II": {"Max": 1},
        "ss_III": {"Max": 1},
        "ss_frostlands": {"Max": 2},
        "ss_flatlands": {"Max": 2},
        "ss_coastlands": {"Max": 2},
        "ss_highlands": {"Max": 2},
        "ss_sunlands": {"Max": 2},
        "ss_riverlands": {"Max": 2},
        "ss_cliftlands": {"Max": 2},
        "ss_woodlands": {"Max": 2},
        "ss_specific": {"Max": 3},
        "ss_boss": {"Max": 3},
        "specific_character": {"Max": 4},
        "exploration": {"Max": 4},
        "chest": {"Max": 2},
        "chest_set": {"Max": 2},
        "chest_counts": {"Max": 1},
        "combat": {"Max": 4},
        "subjob": {"Max": 2},
        "boss": {"Max": 5},
        "advanced_boss": {"Max": 3},
        "combat": {"Max": 4},
        "combat_counts": {"Max": 2},
        "beast_lore": {"Max": 2},
        "extended_combat": {"Max": 2},
        "combat_set": {"Max": 2},
        "combat_challenge": {"Max": 2},
        "progression": {"Max": 7},
        "chapter": {"Max": 3},
        "#_t_pouches": {"Max": 1},
        "#_u_gold_items": {"Max": 1},
        "#_u_iron": {"Max": 1},
        "#_u_silver": {"Max": 1},
        "#_u_dragon": {"Max": 1},
        "#_u_arcane": {"Max": 1},
        "#_u_magus": {"Max": 1},
        "#_u_soul": {"Max": 1},
        "#_u_rune": {"Max": 1},
        "#_u_adamantine": {"Max": 1},
        "#_u_elem_wpn": {"Max": 1},
        "#_u_phys_staves": {"Max": 1},
        "#_u_evasion": {"Max": 1},
        "#_u_critical": {"Max": 1},
        "#_u_speed": {"Max": 1},
        "#_u_accuracy": {"Max": 1},
        "#_u_boss_drop": {"Max": 1},
        "#_t_s_sstones": {"Max": 1},
        "#_t_m_sstones": {"Max": 1},
        "#_t_l_sstones": {"Max": 1},
        "#_t_s_nuts": {"Max": 1},
        "#_t_m_nuts": {"Max": 1},
        "#_t_l_nuts": {"Max": 1},
        "#_t_nuts": {"Max": 1},
        "#_u_sstones": {"Max": 1},
        "#_t_olives": {"Max": 1},
        "#_u_swords": {"Max": 1},
        "#_u_spears": {"Max": 1},
        "#_u_daggers": {"Max": 1},
        "#_u_axes": {"Max": 1},
        "#_u_bows": {"Max": 1},
        "#_u_staves": {"Max": 1},
        "#_u_forbidden": {"Max": 1},
        "#_u_weapons": {"Max": 1},
        "#_u_headgears": {"Max": 1},
        "#_u_body_armors": {"Max": 1},
        "#_u_shields": {"Max": 1},
        "#_u_armors": {"Max": 1},
        "#_u_elem_reduce": {"Max": 1},
        "#_t_strong_amulets": {"Max": 1},
        "#_u_stones": {"Max": 1},
        "#_t_elem_amulets": {"Max": 1},
        "#_t_stones": {"Max": 1},
        "#_u_earrings": {"Max": 1},
        "#_u_rings": {"Max": 1},
        "#_u_bracelets": {"Max": 1},
        "#_u_necklaces": {"Max": 1},
        "#_alluring": {"Max": 1},
        "#_u_accessories": {"Max": 1},
        "#_t_bottles": {"Max": 1},
        "#_bottle_sets": {"Max": 1},
        "#_u_town_boosts": {"Max": 1},
        "#_t_town_boosts": {"Max": 1},
        "#_t_items": {"Max": 1},
        "#_hp": {"Max": 1},
        "#_sp": {"Max": 1},
        "#_phys_atk": {"Max": 1},
        "#_elem_atk": {"Max": 1},
        "#_phys_def": {"Max": 1},
        "#_elem_def": {"Max": 1},
        "#_accuracy": {"Max": 1},
        "#_speed": {"Max": 1},
        "#_critical": {"Max": 1},
        "#_evasion": {"Max": 1},
        "#_side_stories": {"Max": 1},
        "#_ss_region_sets": {"Max": 1},
        "#_ss_II_sets": {"Max": 1},
        "#_ss_III_sets": {"Max": 1},
        "#_ss_frostlands": {"Max": 1},
        "#_ss_flatlands": {"Max": 1},
        "#_ss_coastlands": {"Max": 1},
        "#_ss_highlands": {"Max": 1},
        "#_ss_sunlands": {"Max": 1},
        "#_ss_riverlands": {"Max": 1},
        "#_ss_cliftlands": {"Max": 1},
        "#_ss_woodlands": {"Max": 1},
        "#_ss_bosses": {"Max": 1},
        "#_t_brown_chests": {"Max": 1},
        "#_t_red_chests": {"Max": 1},
        "#_t_purple_chests": {"Max": 1},
        "#_t_chests": {"Max": 1},
        "#_optional_bosses": {"Max": 1},
        "#_advanced_bosses": {"Max": 1},
        "#_weakness_sets": {"Max": 1},
        "#_u_concoct": {"Max": 1},
        "#_u_str_bl": {"Max": 1},
        "#_npc_summons": {"Max": 1},
        "#_bl_summons": {"Max": 1},
        "#_u_bl": {"Max": 1},
        "#_u_lizards_bl": {"Max": 1},
        "#_u_frogs_bl": {"Max": 1},
        "#_u_birds_bl": {"Max": 1},
        "#_u_rats_bl": {"Max": 1},
        "#_u_magic_bl": {"Max": 1},
        "str_#_bl": {"Max": 1},
        "str_#_NPC": {"Max": 1},
        "#_bg_yolo": {"Max": 1},
        "#_ch_1": {"Max": 1},
        "#_ch_2": {"Max": 1},
        "#_ch_3": {"Max": 1},
        "#_ch_4": {"Max": 1},
        "#_u_elem_boost": {"Max": 1},
        "#_u_bt_equip": {"Max": 1},
        "#_ss_post_game": {"Max": 1}
},

"800_elem_atk": {
        "Desc": "800+ Elemental Attack",
        "Diff": 1,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"70_t_brown_chests": {
        "Desc": "Open 70 Brown Chests",
        "Diff": 1,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"42_t_red_chests": {
        "Desc": "Open 42 Red Chests",
        "Diff": 1,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"15_u_rats_bl": {
        "Desc": "Capture 15 Unique Ratkin/Ratking",
        "Diff": 1,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"40_t_pouches": {
        "Desc": "40 Money Pouches",
        "Diff": 2,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"25_u_accuracy": {
        "Desc": "25 Unique Accuracy Equipments",
        "Diff": 2,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"12_t_items": {
        "Desc": "12 Pages in All Items",
        "Diff": 2,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"800_elem_def": {
        "Desc": "800+ Elemental Defense",
        "Diff": 2,
        "Types": ["elem_def","stats","#_elem_def"]
},

"550_critical": {
        "Desc": "550+ Critical",
        "Diff": 2,
        "Types": ["crit","stats","#_critical"]
},

"9_ss_coastlands": {
        "Desc": "9 Side Stories in Coastlands",
        "Diff": 2,
        "Types": ["ss_set","ss_coastlands","side_stories","ss_boss","#_ss_coastlands"]
},

"15_u_lizards_bl": {
        "Desc": "Capture 15 Unique Lizardmen/Lizardking",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"15_u_frogs_bl": {
        "Desc": "Capture 15 Unique Froggen/Frogking",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"15_u_birds_bl": {
        "Desc": "Capture 15 Unique Birdian/Birdking",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"7_ch_2": {
        "Desc": "Complete 7 Chapter 2's",
        "Diff": 2,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2"]
},

"25_u_gold_items": {
        "Desc": "25 Unique Gold Items",
        "Diff": 3,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"12_t_olives": {
        "Desc": "12 Olive (L)'s",
        "Diff": 3,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"9_ss_sunlands": {
        "Desc": "9 Side Stories in Sunlands",
        "Diff": 3,
        "Types": ["ss_set","ss_sunlands","side_stories","ss_boss","#_ss_sunlands"]
},

"24_t_purple_chests": {
        "Desc": "Open 24 Purple Chests",
        "Diff": 3,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"dreisang": {
        "Desc": "Defeat Dreisang",
        "Diff": 3,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"4_u_rune": {
        "Desc": "4 Unique Rune Weapons",
        "Diff": 3,
        "Types": ["item_set","weapon","elem_atk","items","progression","#_u_rune"]
},

"5_u_boss_drop": {
        "Desc": "5 Unique Boss Equipment Drops",
        "Diff": 3,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"30_u_body_armors": {
        "Desc": "30 Unique Body Armors",
        "Diff": 3,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"40_t_town_boosts": {
        "Desc": "40 Town Boost Infos",
        "Diff": 3,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"30_side_stories": {
        "Desc": "30 Side Stories",
        "Diff": 3,
        "Types": ["broad_ss_set","side_stories","ss_II","#_side_stories"]
},

"ss_boss_5": {
        "Desc": "SS: Into Thin Air",
        "Diff": 3,
        "Types": ["ss_specific","ss_woodlands","ss_boss","boss","advanced_boss","side_stories"]
},

"3_ss_bosses": {
        "Desc": "Defeat 3 Side Story Bosses",
        "Diff": 3,
        "Types": ["ss_set","ss_boss","boss","side_stories","#_ss_bosses"]
},

"8_optional_bosses": {
        "Desc": "Defeat 8 Unique Optional Bosses",
        "Diff": 3,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"50_u_weapons": {
        "Desc": "50 Unique Weapons",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"12_u_elem_reduce": {
        "Desc": "12 Unique Elemental Reduction Equipments",
        "Diff": 4,
        "Types": ["item_set","armor","accessory","elem_reduce","items","progression","#_u_elem_reduce"]
},

"750_phys_def": {
        "Desc": "750+ Physical Defense",
        "Diff": 4,
        "Types": ["phys_def","stats","#_phys_def"]
},

"6_ss_III_sets": {
        "Desc": "6 (III) Side Stories",
        "Diff": 4,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets","5_ss_III_sets"]
},

"8_ch_2": {
        "Desc": "Complete 8 Chapter 2's",
        "Diff": 4,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","8_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","7_ch_2"]
},

"25_u_elem_wpn": {
        "Desc": "25 Unique Elemental Non-Staff Weapons",
        "Diff": 5,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"25_u_critical": {
        "Desc": "25 Unique Critical Equipments",
        "Diff": 5,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"20_u_spears": {
        "Desc": "20 Unique Spears",
        "Diff": 5,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"75_t_chests": {
        "Desc": "Open 75 Total Chests",
        "Diff": 5,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"1_advanced_bosses": {
        "Desc": "Defeat 1 Advanced Job Bosses",
        "Diff": 5,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"14_u_magic_bl": {
        "Desc": "Capture 14 Unique Magic Enemies",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"str_8_bl": {
        "Desc": "Capture a Strength 8 Monster",
        "Diff": 5,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"25_u_evasion": {
        "Desc": "25 Unique Evasion Equipments",
        "Diff": 6,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"40_t_m_sstones": {
        "Desc": "40 Soulstone (M)'s",
        "Diff": 6,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"16_t_l_nuts": {
        "Desc": "16 Nut (L)'s",
        "Diff": 6,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_l_nuts"]
},

"20_u_swords": {
        "Desc": "20 Unique Swords",
        "Diff": 6,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"20_u_bows": {
        "Desc": "20 Unique Bows",
        "Diff": 6,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"4_alluring": {
        "Desc": "4 Alluring Ribbons",
        "Diff": 6,
        "Types": ["item_set","accessory","side_stories","items","progression","#_alluring"]
},

"4_ss_region_sets": {
        "Desc": "4 Side Stories in Each Region",
        "Diff": 6,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"40_u_accessories": {
        "Desc": "40 Unique Accessories",
        "Diff": 7,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","progression","side_stories","#_u_accessories"]
},

"400_sp": {
        "Desc": "400+ SP",
        "Diff": 7,
        "Types": ["sp","stats","#_sp"]
},

"730_evasion": {
        "Desc": "730+ Evasion",
        "Diff": 7,
        "Types": ["evasion","stats","#_evasion"]
},

"steorra": {
        "Desc": "Defeat Steorra",
        "Diff": 7,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"4_ch_3": {
        "Desc": "Complete 4 Chapter 3's",
        "Diff": 7,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","4_ch_2","1_ch_3","2_ch_3","3_ch_3"]
},

"7_u_necklaces": {
        "Desc": "7 Unique Necklaces",
        "Diff": 7,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"750_phys_atk": {
        "Desc": "750+ Physical Attack",
        "Diff": 7,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"900_elem_def": {
        "Desc": "900+ Elemental Defense",
        "Diff": 7,
        "Types": ["elem_def","stats","#_elem_def"]
},

"600_critical": {
        "Desc": "600+ Critical",
        "Diff": 7,
        "Types": ["crit","stats","#_critical"]
},

"80_t_brown_chests": {
        "Desc": "Open 80 Brown Chests",
        "Diff": 7,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"48_t_red_chests": {
        "Desc": "Open 48 Red Chests",
        "Diff": 7,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"7_ss_III_sets": {
        "Desc": "7 (III) Side Stories",
        "Diff": 8,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","7_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets","5_ss_III_sets","6_ss_III_sets"]
},

"9_optional_bosses": {
        "Desc": "Defeat 9 Unique Optional Bosses",
        "Diff": 8,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"ch_3_no_boost": {
        "Desc": "Chapter 3 Boss without Boosting",
        "Diff": 8,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"6_u_boss_drop": {
        "Desc": "6 Unique Boss Equipment Drops",
        "Diff": 8,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"50_t_nuts": {
        "Desc": "50 Nuts",
        "Diff": 8,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_nuts"]
},

"20_u_axes": {
        "Desc": "20 Unique Axes",
        "Diff": 8,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"20_t_elem_amulets": {
        "Desc": "20 Elemental Reduction Amulets/Charms",
        "Diff": 8,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","progression","side_stories","#_t_elem_amulets"]
},

"850_elem_atk": {
        "Desc": "850+ Elemental Attack",
        "Diff": 8,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"balogar": {
        "Desc": "Defeat Balogar",
        "Diff": 8,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"2_ch_4": {
        "Desc": "Complete 2 Chapter 4's",
        "Diff": 8,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["1_ch_2","2_ch_2","1_ch_3","2_ch_3","1_ch_4"]
},

"20_u_daggers": {
        "Desc": "20 Unique Daggers",
        "Diff": 9,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"28_t_purple_chests": {
        "Desc": "Open 28 Purple Chests",
        "Diff": 9,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"18_u_lizards_bl": {
        "Desc": "Capture 18 Unique Lizardmen/Lizardking",
        "Diff": 9,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"18_u_frogs_bl": {
        "Desc": "Capture 18 Unique Froggen/Frogking",
        "Diff": 9,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"18_u_birds_bl": {
        "Desc": "Capture 18 Unique Birdian/Birdking",
        "Diff": 9,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"18_u_rats_bl": {
        "Desc": "Capture 18 Unique Ratkin/Ratking",
        "Diff": 9,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"30_t_l_sstones": {
        "Desc": "30 Soulstone (L)'s",
        "Diff": 10,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"20_t_stones": {
        "Desc": "20 Status Stones",
        "Diff": 10,
        "Types": ["item_set","item_count","status_stone","accessory","items","progression","#_t_stones"]
},

"40_side_stories": {
        "Desc": "40 Side Stories",
        "Diff": 10,
        "Types": ["broad_ss_set","side_stories","ss_II","#_side_stories"]
},

"40_weakness_sets": {
        "Desc": "40 Revealed Weakness Sets",
        "Diff": 10,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"6_ss_post_game": {
        "Desc": "6 Post Game Side Stories",
        "Diff": 10,
        "Types": ["side_stories","broad_ss_set","progression","#_ss_post_game"]
},

"450_accuracy": {
        "Desc": "450+ Accuracy",
        "Diff": 10,
        "Types": ["accuracy","stats","#_accuracy"]
},

"25_t_m_nuts": {
        "Desc": "25 Nut (M)'s",
        "Diff": 11,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_m_nuts"]
},

"825_phys_def": {
        "Desc": "825+ Physical Defense",
        "Diff": 11,
        "Types": ["phys_def","stats","#_phys_def"]
},

"600_speed": {
        "Desc": "600+ Speed",
        "Diff": 11,
        "Types": ["speed","stats","#_speed"]
},

"20_u_staves": {
        "Desc": "20 Unique Staves",
        "Diff": 11,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"2_advanced_bosses": {
        "Desc": "Defeat 2 Advanced Job Bosses",
        "Diff": 11,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"5500_hp": {
        "Desc": "5500+ HP",
        "Diff": 11,
        "Types": ["hp","stats","#_hp"]
},

"5_ss_region_sets": {
        "Desc": "5 Side Stories in Each Region",
        "Diff": 11,
        "Types": ["broad_ss_set","side_stories","ss_II","#_ss_region_sets"]
},

"90_t_chests": {
        "Desc": "Open 90 Total Chests",
        "Diff": 11,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"7_u_boss_drop": {
        "Desc": "7 Unique Boss Equipment Drops",
        "Diff": 12,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"11_ss_riverlands": {
        "Desc": "11 Side Stories in Riverlands",
        "Diff": 12,
        "Types": ["ss_set","ss_riverlands","side_stories","progression","#_ss_riverlands"]
},

"90_t_brown_chests": {
        "Desc": "Open 90 Brown Chests",
        "Diff": 12,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"54_t_red_chests": {
        "Desc": "Open 54 Red Chests",
        "Diff": 12,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"32_t_purple_chests": {
        "Desc": "Open 32 Purple Chests",
        "Diff": 12,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"5_ch_3": {
        "Desc": "Complete 5 Chapter 3's",
        "Diff": 12,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["5_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3"]
},

"5_u_adamantine": {
        "Desc": "5 Unique Adamantine Equipments",
        "Diff": 13,
        "Types": ["item_set","weapon","elem_atk","armor","items","progression","ss_specific","side_stories","#_u_adamantine"]
},

"30_u_elem_wpn": {
        "Desc": "30 Unique Elemental Non-Staff Weapons",
        "Diff": 13,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"15_t_olives": {
        "Desc": "15 Olive (L)'s",
        "Diff": 13,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"15_u_elem_reduce": {
        "Desc": "15 Unique Elemental Reduction Equipments",
        "Diff": 13,
        "Types": ["item_set","armor","accessory","elem_reduce","items","progression","side_stories","#_u_elem_reduce"]
},

"450_sp": {
        "Desc": "450+ SP",
        "Diff": 13,
        "Types": ["sp","stats","#_sp"]
},

"10_ss_flatlands": {
        "Desc": "10 Side Stories in Flatlands",
        "Diff": 13,
        "Types": ["ss_set","ss_flatlands","side_stories","progression","#_ss_flatlands"]
},

"11_ss_cliftlands": {
        "Desc": "11 Side Stories in Cliftlands",
        "Diff": 13,
        "Types": ["ss_set","ss_cliftlands","side_stories","progression","#_ss_cliftlands"]
},

"18_u_magic_bl": {
        "Desc": "Capture 18 Unique Magic Enemies",
        "Diff": 13,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"20_t_l_nuts": {
        "Desc": "20 Nut (L)'s",
        "Diff": 14,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_l_nuts"]
},

"60_u_weapons": {
        "Desc": "60 Unique Weapons",
        "Diff": 14,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"55_u_armors": {
        "Desc": "55 Unique Armors",
        "Diff": 14,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"650_critical": {
        "Desc": "650+ Critical",
        "Diff": 14,
        "Types": ["crit","stats","#_critical"]
},

"ss_boss_2": {
        "Desc": "SS: Scardy Sheep",
        "Diff": 14,
        "Types": ["ss_specific","ss_flatlands","ss_boss","specific_character","boss","advanced_boss","progression","side_stories"]
},

"10_optional_bosses": {
        "Desc": "Defeat 10 Unique Optional Bosses",
        "Diff": 14,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"10_ss_frostlands": {
        "Desc": "10 Side Stories in Frostlands",
        "Diff": 14,
        "Types": ["ss_set","ss_frostlands","side_stories","progression","ss_boss","#_ss_frostlands"]
},

"12_ss_riverlands": {
        "Desc": "12 Side Stories in Riverlands",
        "Diff": 14,
        "Types": ["ss_set","ss_riverlands","side_stories","progression","#_ss_riverlands"]
},

"10_ss_woodlands": {
        "Desc": "10 Side Stories in Woodlands",
        "Diff": 14,
        "Types": ["ss_set","ss_woodlands","side_stories","progression","ss_boss","advanced_boss","#_ss_woodlands"]
},

"winnehild": {
        "Desc": "Defeat Winnehild",
        "Diff": 14,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"50_t_m_sstones": {
        "Desc": "50 Soulstone (M)'s",
        "Diff": 15,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"50_t_town_boosts": {
        "Desc": "50 Town Boost Infos",
        "Diff": 15,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"15_t_items": {
        "Desc": "15 Pages in All Items",
        "Diff": 15,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"900_elem_atk": {
        "Desc": "900+ Elemental Attack",
        "Diff": 15,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"10_ss_coastlands": {
        "Desc": "10 Side Stories in Coastlands",
        "Diff": 15,
        "Types": ["ss_set","ss_coastlands","side_stories","progression","ss_boss","#_ss_coastlands"]
},

"6_ch_3": {
        "Desc": "Complete 6 Chapter 3's",
        "Diff": 15,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["5_ch_1","6_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","5_ch_3"]
},

"780_evasion": {
        "Desc": "780+ Evasion",
        "Diff": 15,
        "Types": ["evasion","stats","#_evasion"]
},

"8_ss_III_sets": {
        "Desc": "8 (III) Side Stories",
        "Diff": 15,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","7_ss_II_sets","8_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets","5_ss_III_sets","6_ss_III_sets","7_ss_III_sets"]
},

"4_ss_bosses": {
        "Desc": "Defeat 4 Side Story Bosses",
        "Diff": 15,
        "Types": ["ss_set","ss_boss","boss","side_stories","progression","#_ss_bosses"]
},

"36_t_purple_chests": {
        "Desc": "Open 36 Purple Chests",
        "Diff": 15,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"str_9_bl": {
        "Desc": "Capture a Strength 9 Monster",
        "Diff": 15,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"999_elem_def": {
        "Desc": "999+ Elemental Defense",
        "Diff": 16,
        "Types": ["elem_def","stats","#_elem_def"]
},

"50_side_stories": {
        "Desc": "50 Side Stories",
        "Diff": 16,
        "Types": ["broad_ss_set","side_stories","ss_II","ss_III","#_side_stories"]
},

"10_ss_sunlands": {
        "Desc": "10 Side Stories in Sunlands",
        "Diff": 16,
        "Types": ["ss_set","ss_sunlands","side_stories","progression","ss_boss","#_ss_sunlands"]
},

"25_u_bows": {
        "Desc": "25 Unique Bows",
        "Diff": 16,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"800_phys_atk": {
        "Desc": "800+ Physical Attack",
        "Diff": 16,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"105_t_chests": {
        "Desc": "Open 105 Total Chests",
        "Diff": 16,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"35_u_elem_wpn": {
        "Desc": "35 Unique Elemental Non-Staff Weapons",
        "Diff": 17,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"8_u_boss_drop": {
        "Desc": "8 Unique Boss Equipment Drops",
        "Diff": 17,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"40_t_l_sstones": {
        "Desc": "40 Soulstone (L)'s",
        "Diff": 17,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"900_phys_def": {
        "Desc": "900+ Physical Defense",
        "Diff": 17,
        "Types": ["phys_def","stats","#_phys_def"]
},

"6_ss_region_sets": {
        "Desc": "6 Side Stories in Each Region",
        "Diff": 17,
        "Types": ["broad_ss_set","side_stories","ss_II","#_ss_region_sets"]
},

"3_ch_4": {
        "Desc": "Complete 3 Chapter 4's",
        "Diff": 17,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","1_ch_3","2_ch_3","3_ch_3","1_ch_4","2_ch_4"]
},

"25_u_spears": {
        "Desc": "25 Unique Spears",
        "Diff": 17,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"70_u_weapons": {
        "Desc": "70 Unique Weapons",
        "Diff": 17,
        "Types": ["broad_item_set","weapon","items","progression","#_u_weapons"]
},

"650_speed": {
        "Desc": "650+ Speed",
        "Diff": 17,
        "Types": ["speed","stats","#_speed"]
},

"3_advanced_bosses": {
        "Desc": "Defeat 3 Advanced Job Bosses",
        "Diff": 17,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"25_u_swords": {
        "Desc": "25 Unique Swords",
        "Diff": 18,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"25_u_daggers": {
        "Desc": "25 Unique Daggers",
        "Diff": 18,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"25_u_axes": {
        "Desc": "25 Unique Axes",
        "Diff": 18,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"25_t_stones": {
        "Desc": "25 Status Stones",
        "Diff": 18,
        "Types": ["item_set","item_count","status_stone","accessory","items","progression","#_t_stones"]
},

"11_ss_highlands": {
        "Desc": "11 Side Stories in Highlands",
        "Diff": 18,
        "Types": ["ss_set","ss_highlands","side_stories","progression","#_ss_highlands"]
},

"100_t_brown_chests": {
        "Desc": "Open 100 Brown Chests",
        "Diff": 18,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"60_t_red_chests": {
        "Desc": "Open 60 Red Chests",
        "Diff": 18,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"500_sp": {
        "Desc": "500+ SP",
        "Diff": 19,
        "Types": ["sp","stats","#_sp"]
},

"7_ch_3": {
        "Desc": "Complete 7 Chapter 3's",
        "Diff": 19,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","7_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","5_ch_3","6_ch_3"]
},

"12_t_strong_amulets": {
        "Desc": "12 Strong Elemental Reduction Amulets",
        "Diff": 19,
        "Types": ["item_set","item_count","accessory","elem_reduce","items","progression","#_t_strong_amulets"]
},

"60_t_town_boosts": {
        "Desc": "60 Town Boost Infos",
        "Diff": 19,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"830_evasion": {
        "Desc": "830+ Evasion",
        "Diff": 19,
        "Types": ["evasion","stats","#_evasion"]
},

"6500_hp": {
        "Desc": "6500+ HP",
        "Diff": 19,
        "Types": ["hp","stats","#_hp"]
},

"500_accuracy": {
        "Desc": "500+ Accuracy",
        "Diff": 19,
        "Types": ["accuracy","stats","#_accuracy"]
},

"25_u_staves": {
        "Desc": "25 Unique Staves",
        "Diff": 19,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"40_t_purple_chests": {
        "Desc": "Open 40 Purple Chests",
        "Diff": 19,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"4_ch_4": {
        "Desc": "Complete 4 Chapter 4's",
        "Diff": 19,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","4_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","1_ch_4","2_ch_4","3_ch_4"]
},

"50_u_accessories": {
        "Desc": "50 Unique Accessories",
        "Diff": 20,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","progression","side_stories","#_u_accessories"]
},

"4_advanced_bosses": {
        "Desc": "Defeat 4 Advanced Job Bosses",
        "Diff": 20,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"8_ch_3": {
        "Desc": "Complete 8 Chapter 3's",
        "Diff": 20,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","8_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","7_ch_2","8_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","5_ch_3","6_ch_3","7_ch_3"]
},

"18_t_items": {
        "Desc": "18 Pages in All Items",
        "Diff": 20,
        "Types": ["broad_item_set","item_count","items","progression","#_t_items"]
},

"120_t_chests": {
        "Desc": "Open 120 Total Chests",
        "Diff": 20,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"60_t_nuts": {
        "Desc": "60 Nuts",
        "Diff": 20,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_nuts"]
},

"18_u_elem_reduce": {
        "Desc": "18 Unique Elemental Reduction Equipments",
        "Diff": 20,
        "Types": ["item_set","armor","accessory","elem_reduce","items","#_u_elem_reduce"]
},

"700_critical": {
        "Desc": "700+ Critical",
        "Diff": 20,
        "Types": ["crit","stats","#_critical"]
},

"11_ss_frostlands": {
        "Desc": "11 Side Stories in Frostlands",
        "Diff": 21,
        "Types": ["ss_set","ss_frostlands","side_stories","progression","ss_boss","#_ss_frostlands"]
},

"9_u_boss_drop": {
        "Desc": "9 Unique Boss Equipment Drops",
        "Diff": 21,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"10_ss_post_game": {
        "Desc": "10 Post Game Side Stories",
        "Diff": 21,
        "Types": ["side_stories","broad_ss_set","progression","#_ss_post_game"]
},

"850_phys_atk": {
        "Desc": "850+ Physical Attack",
        "Diff": 21,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"13_ss_riverlands": {
        "Desc": "13 Side Stories in Riverlands",
        "Diff": 21,
        "Types": ["ss_set","ss_riverlands","side_stories","progression","#_ss_riverlands"]
},

"5_ss_bosses": {
        "Desc": "Defeat 5 Side Story Bosses",
        "Diff": 21,
        "Types": ["ss_set","ss_boss","boss","side_stories","progression","advanced_boss","#_ss_bosses"]
},

"25_t_elem_amulets": {
        "Desc": "25 Elemental Reduction Amulets/Charms",
        "Diff": 21,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","progression","side_stories","#_t_elem_amulets"]
},

"60_side_stories": {
        "Desc": "60 Side Stories",
        "Diff": 21,
        "Types": ["broad_ss_set","side_stories","ss_II","ss_III","#_side_stories"]
},

"11_ss_coastlands": {
        "Desc": "11 Side Stories in Coastlands",
        "Diff": 22,
        "Types": ["ss_set","ss_coastlands","side_stories","progression","ss_boss","#_ss_coastlands"]
},

"880_evasion": {
        "Desc": "880+ Evasion",
        "Diff": 22,
        "Types": ["evasion","stats","#_evasion"]
},

"11_ss_woodlands": {
        "Desc": "11 Side Stories in Woodlands",
        "Diff": 22,
        "Types": ["ss_set","ss_woodlands","side_stories","progression","ss_boss","advanced_boss","#_ss_woodlands"]
},

"7_ss_region_sets": {
        "Desc": "7 Side Stories in Each Region",
        "Diff": 22,
        "Types": ["broad_ss_set","side_stories","ss_II","ss_III","#_ss_region_sets"]
},

"135_t_chests": {
        "Desc": "Open 135 Total Chests",
        "Diff": 22,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"80_u_weapons": {
        "Desc": "80 Unique Weapons",
        "Diff": 22,
        "Types": ["broad_item_set","weapon","items","progression","#_u_weapons"]
},

"str_10_bl": {
        "Desc": "Capture a Strength 10 Monster",
        "Diff": 22,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"50_t_l_sstones": {
        "Desc": "50 Soulstone (L)'s",
        "Diff": 22,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"5_ch_4": {
        "Desc": "Complete 5 Chapter 4's",
        "Diff": 22,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["5_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","5_ch_3","1_ch_4","2_ch_4","3_ch_4","4_ch_4"]
},

"12_ss_frostlands": {
        "Desc": "12 Side Stories in Frostlands",
        "Diff": 23,
        "Types": ["ss_set","ss_frostlands","side_stories","progression","ss_boss","#_ss_frostlands"]
},

"11_ss_flatlands": {
        "Desc": "11 Side Stories in Flatlands",
        "Diff": 23,
        "Types": ["ss_set","ss_flatlands","side_stories","progression","ss_boss","advanced_boss","#_ss_flatlands"]
},

"10_u_boss_drop": {
        "Desc": "10 Unique Boss Equipment Drops",
        "Diff": 23,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"14_ss_riverlands": {
        "Desc": "14 Side Stories in Riverlands",
        "Diff": 23,
        "Types": ["ss_set","ss_riverlands","side_stories","progression","#_ss_riverlands"]
},

"70_side_stories": {
        "Desc": "70 Side Stories",
        "Diff": 23,
        "Types": ["broad_ss_set","side_stories","progression","ss_boss","ss_II","ss_III","#_side_stories"]
},

"11_ss_sunlands": {
        "Desc": "11 Side Stories in Sunlands",
        "Diff": 23,
        "Types": ["ss_set","ss_sunlands","side_stories","progression","ss_boss","#_ss_sunlands"]
},

"12_ss_cliftlands": {
        "Desc": "12 Side Stories in Cliftlands",
        "Diff": 23,
        "Types": ["ss_set","ss_cliftlands","side_stories","progression","#_ss_cliftlands"]
},

"150_t_chests": {
        "Desc": "Open 150 Total Chests",
        "Diff": 24,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"21_t_items": {
        "Desc": "21 Pages in All Items",
        "Diff": 24,
        "Types": ["broad_item_set","item_count","items","progression","#_t_items"]
},

"90_u_weapons": {
        "Desc": "90 Unique Weapons",
        "Diff": 24,
        "Types": ["broad_item_set","weapon","items","progression","#_u_weapons"]
},

"7500_hp": {
        "Desc": "7500+ HP",
        "Diff": 24,
        "Types": ["hp","stats","#_hp"]
},

"930_evasion": {
        "Desc": "930+ Evasion",
        "Diff": 24,
        "Types": ["evasion","stats","#_evasion"]
},

"12_ss_coastlands": {
        "Desc": "12 Side Stories in Coastlands",
        "Diff": 24,
        "Types": ["ss_set","ss_coastlands","side_stories","progression","ss_boss","#_ss_coastlands"]
},

"8_ss_region_sets": {
        "Desc": "8 Side Stories in Each Region",
        "Diff": 24,
        "Types": ["broad_ss_set","side_stories","ss_II","ss_III","#_ss_region_sets"]
},

"6_ch_4": {
        "Desc": "Complete 6 Chapter 4's",
        "Diff": 24,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["5_ch_1","6_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","5_ch_3","6_ch_3","1_ch_4","2_ch_4","3_ch_4","4_ch_4","5_ch_4"]
},

"60_u_accessories": {
        "Desc": "60 Unique Accessories",
        "Diff": 25,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","progression","side_stories","#_u_accessories"]
},

"13_ss_frostlands": {
        "Desc": "13 Side Stories in Frostlands",
        "Diff": 25,
        "Types": ["ss_set","ss_frostlands","side_stories","progression","ss_boss","#_ss_frostlands"]
},

"80_side_stories": {
        "Desc": "80 Side Stories",
        "Diff": 25,
        "Types": ["broad_ss_set","side_stories","progression","ss_boss","ss_II","ss_III","#_side_stories"]
},

"12_ss_flatlands": {
        "Desc": "12 Side Stories in Flatlands",
        "Diff": 25,
        "Types": ["ss_set","ss_flatlands","side_stories","progression","ss_boss","advanced_boss","#_ss_flatlands"]
},

"16_ss_post_game": {
        "Desc": "16 Post Game Side Stories",
        "Diff": 25,
        "Types": ["side_stories","broad_ss_set","progression","#_ss_post_game"]
},

"7_ch_4": {
        "Desc": "Complete 7 Chapter 4's",
        "Diff": 25,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","7_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","5_ch_3","6_ch_3","7_ch_3","1_ch_4","2_ch_4","3_ch_4","4_ch_4","5_ch_4","6_ch_4"]
},

"100_u_weapons": {
        "Desc": "100 Unique Weapons",
        "Diff": 25,
        "Types": ["broad_item_set","weapon","items","progression","#_u_weapons"]
},

"24_t_items": {
        "Desc": "24 Pages in All Items",
        "Diff": 25,
        "Types": ["broad_item_set","item_count","items","progression","#_t_items"]
},

"15_ss_riverlands": {
        "Desc": "15 Side Stories in Riverlands",
        "Diff": 25,
        "Types": ["ss_set","ss_riverlands","side_stories","progression","#_ss_riverlands"]
}

};
