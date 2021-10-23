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
        "chest_set": {"Max": 1},
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

"40_t_m_sstones": {
        "Desc": "40 Soulstone (M)'s",
        "Diff": 1,
        "Types": ["item_count","soulstone","item_set","items","progression","#_t_m_sstones"]
},

"45_u_armors": {
        "Desc": "45 Unique Armors",
        "Diff": 1,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"4_ss_III_sets": {
        "Desc": "4 (III) Side Stories",
        "Diff": 1,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets"]
},

"9_ss_cliftlands": {
        "Desc": "9 Side Stories in Cliftlands (No Kit)",
        "Diff": 1,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"3_ch_3": {
        "Desc": "Complete 3 Chapter 3's",
        "Diff": 1,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","1_ch_3","2_ch_3"]
},

"6_u_dragon": {
        "Desc": "6 Unique Dragon Equipments",
        "Diff": 1,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"25_u_speed": {
        "Desc": "25 Unique Speed Equipments",
        "Diff": 1,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"5_u_boss_drop": {
        "Desc": "5 Unique Boss Equipment Drops",
        "Diff": 1,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"30_side_stories": {
        "Desc": "30 Side Stories",
        "Diff": 1,
        "Types": ["broad_ss_set","side_stories","ss_II","#_side_stories"]
},

"9_ss_woodlands": {
        "Desc": "9 Side Stories in Woodlands (No Kit)",
        "Diff": 1,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"7_ch_2": {
        "Desc": "Complete 7 Chapter 2's",
        "Diff": 1,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2"]
},

"16_u_shields": {
        "Desc": "16 Unique Shields",
        "Diff": 2,
        "Types": ["broad_item_set","armor","items","progression","#_u_shields"]
},

"400_sp": {
        "Desc": "400+ SP",
        "Diff": 2,
        "Types": ["sp","stats","#_sp"]
},

"str_8_bl": {
        "Desc": "Capture a Strength 8 Monster",
        "Diff": 2,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"7_u_phys_staves": {
        "Desc": "7 Unique Physical Staves",
        "Diff": 2,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"4_alluring": {
        "Desc": "4 Alluring Ribbons",
        "Diff": 2,
        "Types": ["item_set","accessory","side_stories","items","progression","#_alluring"]
},

"750_phys_atk": {
        "Desc": "750+ Physical Attack",
        "Diff": 2,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"730_evasion": {
        "Desc": "730+ Evasion",
        "Diff": 2,
        "Types": ["evasion","stats","#_evasion"]
},

"14_u_magic_bl": {
        "Desc": "Capture 14 Unique Elemental Themed Enemies",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"ch_3_slow": {
        "Desc": "Chapter 3 Boss without Soulstones or Vets",
        "Diff": 2,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"4_u_rune": {
        "Desc": "4 Unique Rune Weapons",
        "Diff": 3,
        "Types": ["item_set","weapon","elem_atk","items","progression","#_u_rune"]
},

"900_elem_def": {
        "Desc": "900+ Elemental Defense",
        "Diff": 3,
        "Types": ["elem_def","stats","#_elem_def"]
},

"600_critical": {
        "Desc": "600+ Critical",
        "Diff": 3,
        "Types": ["crit","stats","#_critical"]
},

"15_u_lizards_bl": {
        "Desc": "Capture 15 Unique Lizardmen / Lizardking",
        "Diff": 3,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"15_u_frogs_bl": {
        "Desc": "Capture 15 Unique Froggen / Frogking",
        "Diff": 3,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"15_u_birds_bl": {
        "Desc": "Capture 15 Unique Birdian / Birdking",
        "Diff": 3,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"15_u_rats_bl": {
        "Desc": "Capture 15 Unique Ratkin / Ratking",
        "Diff": 3,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"ch_3_no_boost": {
        "Desc": "Chapter 3 Boss without Boosting",
        "Diff": 3,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"20_u_spears": {
        "Desc": "20 Unique Spears",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"9_optional_bosses": {
        "Desc": "Defeat 9 Unique Optional Bosses",
        "Diff": 4,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"dreisang": {
        "Desc": "Defeat Dreisang",
        "Diff": 4,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"1_advanced_bosses": {
        "Desc": "Defeat 1 Advanced Job Boss",
        "Diff": 4,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"8_ch_2": {
        "Desc": "Complete 8 Chapter 2's",
        "Diff": 4,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","8_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","7_ch_2"]
},

"20_t_elem_amulets": {
        "Desc": "20 Elemental Reduction Amulets/Charms",
        "Diff": 5,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","progression","side_stories","#_t_elem_amulets"]
},

"850_elem_atk": {
        "Desc": "850+ Elemental Attack",
        "Diff": 5,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"4_ss_region_sets": {
        "Desc": "4 Side Stories in Each Region",
        "Diff": 5,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"7_ss_II_sets": {
        "Desc": "7 (II) Side Stories",
        "Diff": 5,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets"]
},

"9_ss_coastlands": {
        "Desc": "9 Side Stories in Coastlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_coastlands","side_stories","ss_boss","#_ss_coastlands"]
},

"10_ss_riverlands": {
        "Desc": "10 Side Stories in Riverlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"30_t_l_sstones": {
        "Desc": "30 Soulstone (L)'s",
        "Diff": 5,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"12_t_olives": {
        "Desc": "12 Olive (L)'s",
        "Diff": 5,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"20_t_stones": {
        "Desc": "20 Status Stones",
        "Diff": 5,
        "Types": ["item_set","item_count","status_stone","accessory","items","progression","#_t_stones"]
},

"105_t_chests": {
        "Desc": "Open 105 Total Chests",
        "Diff": 5,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"25_u_bl": {
        "Desc": "Capture 25 Unique Monsters",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat","#_u_bl"]
},

"20_u_swords": {
        "Desc": "20 Unique Swords",
        "Diff": 6,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"20_u_axes": {
        "Desc": "20 Unique Axes",
        "Diff": 6,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"10_ss_cliftlands": {
        "Desc": "10 Side Stories in Cliftlands (No Kit)",
        "Diff": 6,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"40_weakness_sets": {
        "Desc": "40 Revealed Weakness Sets",
        "Diff": 6,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"4_ch_3": {
        "Desc": "Complete 4 Chapter 3's",
        "Diff": 6,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","4_ch_2","1_ch_3","2_ch_3","3_ch_3"]
},

"450_accuracy": {
        "Desc": "450+ Accuracy",
        "Diff": 6,
        "Types": ["accuracy","stats","#_accuracy"]
},

"600_speed": {
        "Desc": "600+ Speed",
        "Diff": 6,
        "Types": ["speed","stats","#_speed"]
},

"25_u_accuracy": {
        "Desc": "25 Unique Accuracy Equipments",
        "Diff": 7,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"6_u_boss_drop": {
        "Desc": "6 Unique Boss Equipment Drops",
        "Diff": 7,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"16_t_l_nuts": {
        "Desc": "16 Nut (L)'s",
        "Diff": 7,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_l_nuts"]
},

"20_u_bows": {
        "Desc": "20 Unique Bows",
        "Diff": 7,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"7_u_necklaces": {
        "Desc": "7 Unique Necklaces",
        "Diff": 7,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"5_ss_III_sets": {
        "Desc": "5 (III) Side Stories",
        "Diff": 7,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets"]
},

"9_ss_sunlands": {
        "Desc": "9 Side Stories in Sunlands (No Kit)",
        "Diff": 7,
        "Types": ["ss_set","ss_sunlands","side_stories","ss_boss","#_ss_sunlands"]
},

"12_t_items": {
        "Desc": "12 Pages in All Items",
        "Diff": 8,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"825_phys_def": {
        "Desc": "825+ Physical Defense",
        "Diff": 8,
        "Types": ["phys_def","stats","#_phys_def"]
},

"40_side_stories": {
        "Desc": "40 Side Stories",
        "Diff": 8,
        "Types": ["broad_ss_set","side_stories","ss_II","#_side_stories"]
},

"8_ss_II_sets": {
        "Desc": "8 (II) Side Stories",
        "Diff": 8,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","7_ss_II_sets"]
},

"3_ss_bosses": {
        "Desc": "Defeat 3 Side Story Bosses",
        "Diff": 8,
        "Types": ["ss_set","ss_boss","boss","side_stories","#_ss_bosses"]
},

"90_t_brown_chests": {
        "Desc": "Open 90 Brown Chests",
        "Diff": 8,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"54_t_red_chests": {
        "Desc": "Open 54 Red Chests",
        "Diff": 8,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"steorra": {
        "Desc": "Defeat Steorra",
        "Diff": 8,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"balogar": {
        "Desc": "Defeat Balogar",
        "Diff": 8,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"25_u_critical": {
        "Desc": "25 Unique Critical Equipments",
        "Diff": 9,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"50_t_nuts": {
        "Desc": "50 Nuts",
        "Diff": 9,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_nuts"]
},

"40_u_accessories": {
        "Desc": "40 Unique Accessories",
        "Diff": 9,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","progression","side_stories","#_u_accessories"]
},

"5500_hp": {
        "Desc": "5500+ HP",
        "Diff": 9,
        "Types": ["hp","stats","#_hp"]
},

"2_ch_4": {
        "Desc": "Complete 2 Chapter 4's",
        "Diff": 9,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["1_ch_2","2_ch_2","1_ch_3","2_ch_3","1_ch_4"]
},

"50_u_weapons": {
        "Desc": "50 Unique Weapons",
        "Diff": 10,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"15_u_elem_reduce": {
        "Desc": "15 Unique Elemental Reduction Equipments",
        "Diff": 10,
        "Types": ["item_set","armor","accessory","elem_reduce","items","progression","side_stories","#_u_elem_reduce"]
},

"450_sp": {
        "Desc": "450+ SP",
        "Diff": 10,
        "Types": ["sp","stats","#_sp"]
},

"10_ss_highlands": {
        "Desc": "10 Side Stories in Highlands (No Kit)",
        "Diff": 10,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"36_t_purple_chests": {
        "Desc": "Open 36 Purple Chests",
        "Diff": 10,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"25_u_elem_wpn": {
        "Desc": "25 Unique Elemental Non-Staff Weapons",
        "Diff": 11,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"25_u_evasion": {
        "Desc": "25 Unique Evasion Equipments",
        "Diff": 11,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"20_u_daggers": {
        "Desc": "20 Unique Daggers",
        "Diff": 11,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"25_t_m_nuts": {
        "Desc": "25 Nut (M)'s",
        "Diff": 12,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_m_nuts"]
},

"30_u_headgears": {
        "Desc": "30 Unique Headgears",
        "Diff": 12,
        "Types": ["broad_item_set","armor","items","#_u_headgears"]
},

"30_u_body_armors": {
        "Desc": "30 Unique Body Armors",
        "Diff": 12,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"650_critical": {
        "Desc": "650+ Critical",
        "Diff": 12,
        "Types": ["crit","stats","#_critical"]
},

"10_optional_bosses": {
        "Desc": "Defeat 10 Unique Optional Bosses",
        "Diff": 12,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"50_t_town_boosts": {
        "Desc": "50 Town Boost Infos",
        "Diff": 12,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"18_u_magic_bl": {
        "Desc": "Capture 18 Unique Elemental Themed Enemies",
        "Diff": 12,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"50_t_m_sstones": {
        "Desc": "50 Soulstone (M)'s",
        "Diff": 13,
        "Types": ["item_count","soulstone","item_set","items","progression","#_t_m_sstones"]
},

"20_u_staves": {
        "Desc": "20 Unique Staves",
        "Diff": 13,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"10_ss_frostlands": {
        "Desc": "10 Side Stories in Frostlands (No Kit)",
        "Diff": 13,
        "Types": ["ss_set","ss_frostlands","side_stories","progression","ss_boss","#_ss_frostlands"]
},

"100_t_brown_chests": {
        "Desc": "Open 100 Brown Chests",
        "Diff": 13,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"60_t_red_chests": {
        "Desc": "Open 60 Red Chests",
        "Diff": 13,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"40_t_purple_chests": {
        "Desc": "Open 40 Purple Chests",
        "Diff": 13,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"7_u_boss_drop": {
        "Desc": "7 Unique Boss Equipment Drops",
        "Diff": 14,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"2_advanced_bosses": {
        "Desc": "Defeat 2 Advanced Job Bosses",
        "Diff": 14,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"5_ch_3": {
        "Desc": "Complete 5 Chapter 3's",
        "Diff": 14,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["5_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3"]
},

"900_elem_atk": {
        "Desc": "900+ Elemental Attack",
        "Diff": 14,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"10_ss_flatlands": {
        "Desc": "10 Side Stories in Flatlands (No Kit)",
        "Diff": 14,
        "Types": ["ss_set","ss_flatlands","side_stories","progression","#_ss_flatlands"]
},

"5_ss_region_sets": {
        "Desc": "5 Side Stories in Each Region",
        "Diff": 14,
        "Types": ["broad_ss_set","side_stories","ss_II","#_ss_region_sets"]
},

"800_phys_atk": {
        "Desc": "800+ Physical Attack",
        "Diff": 15,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"120_t_chests": {
        "Desc": "Open 120 Total Chests",
        "Diff": 15,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"55_u_armors": {
        "Desc": "55 Unique Armors",
        "Diff": 15,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"780_evasion": {
        "Desc": "780+ Evasion",
        "Diff": 15,
        "Types": ["evasion","stats","#_evasion"]
},

"5_u_adamantine": {
        "Desc": "5 Unique Adamantine Equipments",
        "Diff": 15,
        "Types": ["item_set","weapon","elem_atk","armor","items","progression","ss_specific","side_stories","#_u_adamantine"]
},

"999_elem_def": {
        "Desc": "999+ Elemental Defense",
        "Diff": 15,
        "Types": ["elem_def","stats","#_elem_def"]
},

"winnehild": {
        "Desc": "Defeat Winnehild",
        "Diff": 15,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"20_t_l_nuts": {
        "Desc": "20 Nut (L)'s",
        "Diff": 15,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_l_nuts"]
},

"18_u_lizards_bl": {
        "Desc": "Capture 18 Unique Lizardmen / Lizardking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"18_u_frogs_bl": {
        "Desc": "Capture 18 Unique Froggen / Frogking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"18_u_birds_bl": {
        "Desc": "Capture 18 Unique Birdian / Birdking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"18_u_rats_bl": {
        "Desc": "Capture 18 Unique Ratkin / Ratking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"15_t_items": {
        "Desc": "15 Pages in All Items",
        "Diff": 16,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"900_phys_def": {
        "Desc": "900+ Physical Defense",
        "Diff": 16,
        "Types": ["phys_def","stats","#_phys_def"]
},

"650_speed": {
        "Desc": "650+ Speed",
        "Diff": 16,
        "Types": ["speed","stats","#_speed"]
},

"6_ss_III_sets": {
        "Desc": "6 (III) Side Stories",
        "Diff": 16,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets","5_ss_III_sets"]
},

"6_ch_3": {
        "Desc": "Complete 6 Chapter 3's",
        "Diff": 16,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["5_ch_1","6_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","5_ch_3"]
},

"25_t_stones": {
        "Desc": "25 Status Stones",
        "Diff": 16,
        "Types": ["item_set","item_count","status_stone","accessory","items","progression","#_t_stones"]
},

"60_t_town_boosts": {
        "Desc": "60 Town Boost Infos",
        "Diff": 16,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"10_ss_coastlands": {
        "Desc": "10 Side Stories in Coastlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_coastlands","side_stories","progression","ss_boss","#_ss_coastlands"]
},

"15_t_olives": {
        "Desc": "15 Olive (L)'s",
        "Diff": 16,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"11_ss_riverlands": {
        "Desc": "11 Side Stories in Riverlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_riverlands","side_stories","progression","#_ss_riverlands"]
},

"str_9_bl": {
        "Desc": "Capture a Strength 9 Monster",
        "Diff": 16,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"6_ss_post_game": {
        "Desc": "6 Post Game Side Stories",
        "Diff": 16,
        "Types": ["side_stories","broad_ss_set","progression","#_ss_post_game"]
},

"12_t_strong_amulets": {
        "Desc": "12 Strong Elemental Reduction Amulets",
        "Diff": 17,
        "Types": ["item_set","item_count","accessory","elem_reduce","items","progression","#_t_strong_amulets"]
},

"500_sp": {
        "Desc": "500+ SP",
        "Diff": 17,
        "Types": ["sp","stats","#_sp"]
},

"50_side_stories": {
        "Desc": "50 Side Stories",
        "Diff": 17,
        "Types": ["broad_ss_set","side_stories","ss_II","ss_III","#_side_stories"]
},

"10_ss_woodlands": {
        "Desc": "10 Side Stories in Woodlands (No Kit)",
        "Diff": 17,
        "Types": ["ss_set","ss_woodlands","side_stories","progression","ss_boss","advanced_boss","#_ss_woodlands"]
},

"8_u_boss_drop": {
        "Desc": "8 Unique Boss Equipment Drops",
        "Diff": 17,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"40_t_l_sstones": {
        "Desc": "40 Soulstone (L)'s",
        "Diff": 17,
        "Types": ["item_count","soulstone","item_set","items","progression","#_t_l_sstones"]
},

"6500_hp": {
        "Desc": "6500+ HP",
        "Diff": 17,
        "Types": ["hp","stats","#_hp"]
},

"500_accuracy": {
        "Desc": "500+ Accuracy",
        "Diff": 17,
        "Types": ["accuracy","stats","#_accuracy"]
},

"11_ss_cliftlands": {
        "Desc": "11 Side Stories in Cliftlands (No Kit)",
        "Diff": 17,
        "Types": ["ss_set","ss_cliftlands","side_stories","progression","#_ss_cliftlands"]
},

"60_u_weapons": {
        "Desc": "60 Unique Weapons",
        "Diff": 18,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"830_evasion": {
        "Desc": "830+ Evasion",
        "Diff": 18,
        "Types": ["evasion","stats","#_evasion"]
},

"135_t_chests": {
        "Desc": "Open 135 Total Chests",
        "Diff": 18,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"3_ch_4": {
        "Desc": "Complete 3 Chapter 4's",
        "Diff": 18,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","1_ch_3","2_ch_3","3_ch_3","1_ch_4","2_ch_4"]
},

"6_ss_region_sets": {
        "Desc": "6 Side Stories in Each Region",
        "Diff": 18,
        "Types": ["broad_ss_set","side_stories","ss_II","#_ss_region_sets"]
},

"10_ss_sunlands": {
        "Desc": "10 Side Stories in Sunlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_sunlands","side_stories","progression","ss_boss","#_ss_sunlands"]
},

"12_ss_riverlands": {
        "Desc": "12 Side Stories in Riverlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_riverlands","side_stories","progression","#_ss_riverlands"]
},

"60_t_nuts": {
        "Desc": "60 Nuts",
        "Diff": 18,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_nuts"]
},

"18_u_elem_reduce": {
        "Desc": "18 Unique Elemental Reduction Equipments",
        "Diff": 18,
        "Types": ["item_set","armor","accessory","elem_reduce","items","#_u_elem_reduce"]
},

"3_advanced_bosses": {
        "Desc": "Defeat 3 Advanced Job Bosses",
        "Diff": 18,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"700_critical": {
        "Desc": "700+ Critical",
        "Diff": 19,
        "Types": ["crit","stats","#_critical"]
},

"7_ss_III_sets": {
        "Desc": "7 (III) Side Stories",
        "Diff": 19,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","7_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets","5_ss_III_sets","6_ss_III_sets"]
},

"11_ss_frostlands": {
        "Desc": "11 Side Stories in Frostlands (No Kit)",
        "Diff": 19,
        "Types": ["ss_set","ss_frostlands","side_stories","progression","ss_boss","#_ss_frostlands"]
},

"ss_boss_5": {
        "Desc": "SS: Into Thin Air",
        "Diff": 19,
        "Types": ["ss_specific","ss_woodlands","ss_boss","boss","advanced_boss","side_stories"]
},

"850_phys_atk": {
        "Desc": "850+ Physical Attack",
        "Diff": 19,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"7_ch_3": {
        "Desc": "Complete 7 Chapter 3's",
        "Diff": 19,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","7_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","5_ch_3","6_ch_3"]
},

"25_t_elem_amulets": {
        "Desc": "25 Elemental Reduction Amulets/Charms",
        "Diff": 19,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","progression","side_stories","#_t_elem_amulets"]
},

"25_u_axes": {
        "Desc": "25 Unique Axes",
        "Diff": 20,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"150_t_chests": {
        "Desc": "Open 150 Total Chests",
        "Diff": 20,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"11_ss_highlands": {
        "Desc": "11 Side Stories in Highlands (No Kit)",
        "Diff": 20,
        "Types": ["ss_set","ss_highlands","side_stories","progression","#_ss_highlands"]
},

"4_ch_4": {
        "Desc": "Complete 4 Chapter 4's",
        "Diff": 20,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","4_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","1_ch_4","2_ch_4","3_ch_4"]
},

"60_side_stories": {
        "Desc": "60 Side Stories",
        "Diff": 21,
        "Types": ["broad_ss_set","side_stories","ss_II","ss_III","#_side_stories"]
},

"4_advanced_bosses": {
        "Desc": "Defeat 4 Advanced Job Bosses",
        "Diff": 21,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"8_ch_3": {
        "Desc": "Complete 8 Chapter 3's",
        "Diff": 21,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","8_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","7_ch_2","8_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","5_ch_3","6_ch_3","7_ch_3"]
},

"9_u_boss_drop": {
        "Desc": "9 Unique Boss Equipment Drops",
        "Diff": 21,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"50_t_l_sstones": {
        "Desc": "50 Soulstone (L)'s",
        "Diff": 21,
        "Types": ["item_count","soulstone","item_set","items","progression","#_t_l_sstones"]
},

"25_u_spears": {
        "Desc": "25 Unique Spears",
        "Diff": 21,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"25_u_daggers": {
        "Desc": "25 Unique Daggers",
        "Diff": 21,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"50_u_accessories": {
        "Desc": "50 Unique Accessories",
        "Diff": 21,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","progression","side_stories","#_u_accessories"]
},

"18_t_items": {
        "Desc": "18 Pages in All Items",
        "Diff": 21,
        "Types": ["broad_item_set","item_count","items","progression","#_t_items"]
},

"880_evasion": {
        "Desc": "880+ Evasion",
        "Diff": 21,
        "Types": ["evasion","stats","#_evasion"]
},

"4_ss_bosses": {
        "Desc": "Defeat 4 Side Story Bosses",
        "Diff": 21,
        "Types": ["ss_set","ss_boss","boss","side_stories","progression","#_ss_bosses"]
},

"str_10_bl": {
        "Desc": "Capture a Strength 10 Monster",
        "Diff": 22,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"30_u_elem_wpn": {
        "Desc": "30 Unique Elemental Non-Staff Weapons",
        "Diff": 22,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"70_u_weapons": {
        "Desc": "70 Unique Weapons",
        "Diff": 22,
        "Types": ["broad_item_set","weapon","items","progression","#_u_weapons"]
},

"11_ss_coastlands": {
        "Desc": "11 Side Stories in Coastlands (No Kit)",
        "Diff": 22,
        "Types": ["ss_set","ss_coastlands","side_stories","progression","ss_boss","#_ss_coastlands"]
},

"12_ss_frostlands": {
        "Desc": "12 Side Stories in Frostlands (No Kit)",
        "Diff": 22,
        "Types": ["ss_set","ss_frostlands","side_stories","progression","ss_boss","#_ss_frostlands"]
},

"25_u_staves": {
        "Desc": "25 Unique Staves",
        "Diff": 23,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"8_ss_III_sets": {
        "Desc": "8 (III) Side Stories",
        "Diff": 23,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","7_ss_II_sets","8_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets","5_ss_III_sets","6_ss_III_sets","7_ss_III_sets"]
},

"ss_boss_2": {
        "Desc": "SS: Scardy Sheep",
        "Diff": 23,
        "Types": ["ss_specific","ss_flatlands","ss_boss","specific_character","boss","advanced_boss","progression","side_stories"]
},

"25_u_swords": {
        "Desc": "25 Unique Swords",
        "Diff": 23,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"11_ss_flatlands": {
        "Desc": "11 Side Stories in Flatlands (No Kit)",
        "Diff": 24,
        "Types": ["ss_set","ss_flatlands","side_stories","progression","ss_boss","advanced_boss","#_ss_flatlands"]
},

"13_ss_riverlands": {
        "Desc": "13 Side Stories in Riverlands (No Kit)",
        "Diff": 24,
        "Types": ["ss_set","ss_riverlands","side_stories","progression","#_ss_riverlands"]
},

"7500_hp": {
        "Desc": "7500+ HP",
        "Diff": 24,
        "Types": ["hp","stats","#_hp"]
},

"10_u_boss_drop": {
        "Desc": "10 Unique Boss Equipment Drops",
        "Diff": 24,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"7_ss_region_sets": {
        "Desc": "7 Side Stories in Each Region",
        "Diff": 24,
        "Types": ["broad_ss_set","side_stories","ss_II","ss_III","#_ss_region_sets"]
},

"10_ss_post_game": {
        "Desc": "10 Post Game Side Stories",
        "Diff": 25,
        "Types": ["side_stories","broad_ss_set","progression","#_ss_post_game"]
},

"21_t_items": {
        "Desc": "21 Pages in All Items",
        "Diff": 25,
        "Types": ["broad_item_set","item_count","items","progression","#_t_items"]
},

"70_side_stories": {
        "Desc": "70 Side Stories",
        "Diff": 25,
        "Types": ["broad_ss_set","side_stories","progression","ss_boss","ss_II","ss_III","#_side_stories"]
},

"11_ss_woodlands": {
        "Desc": "11 Side Stories in Woodlands (No Kit)",
        "Diff": 25,
        "Types": ["ss_set","ss_woodlands","side_stories","progression","ss_boss","advanced_boss","#_ss_woodlands"]
},

"5_ch_4": {
        "Desc": "Complete 5 Chapter 4's",
        "Diff": 25,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["5_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3","5_ch_3","1_ch_4","2_ch_4","3_ch_4","4_ch_4"]
},

"930_evasion": {
        "Desc": "930+ Evasion",
        "Diff": 25,
        "Types": ["evasion","stats","#_evasion"]
},

"11_ss_sunlands": {
        "Desc": "11 Side Stories in Sunlands (No Kit)",
        "Diff": 25,
        "Types": ["ss_set","ss_sunlands","side_stories","progression","ss_boss","#_ss_sunlands"]
},

"13_ss_frostlands": {
        "Desc": "13 Side Stories in Frostlands (No Kit)",
        "Diff": 25,
        "Types": ["ss_set","ss_frostlands","side_stories","progression","ss_boss","#_ss_frostlands"]
},

"12_ss_coastlands": {
        "Desc": "12 Side Stories in Coastlands (No Kit)",
        "Diff": 25,
        "Types": ["ss_set","ss_coastlands","side_stories","progression","ss_boss","#_ss_coastlands"]
},

"25_u_bows": {
        "Desc": "25 Unique Bows",
        "Diff": 25,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"14_ss_riverlands": {
        "Desc": "14 Side Stories in Riverlands (No Kit)",
        "Diff": 25,
        "Types": ["ss_set","ss_riverlands","side_stories","progression","#_ss_riverlands"]
}

};
