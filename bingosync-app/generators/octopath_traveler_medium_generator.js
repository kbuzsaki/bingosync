bingoGenerator = require("./generators/generator_bases/synerGen.js");

//List made by Doid
//This is the Medium game length Variant
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

"5_u_dragon": {
        "Desc": "5 Unique Dragon Equipments",
        "Diff": 1,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"10_t_l_nuts": {
        "Desc": "10 Nut (L)'s",
        "Diff": 1,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_l_nuts"]
},

"13_u_shields": {
        "Desc": "13 Unique Shields",
        "Diff": 1,
        "Types": ["broad_item_set","armor","items","#_u_shields"]
},

"15_t_bottles": {
        "Desc": "15 Status Bottles",
        "Diff": 1,
        "Types": ["item_set","item_count","bottle","items","#_t_bottles"]
},

"700_elem_atk": {
        "Desc": "700+ Elemental Attack",
        "Diff": 1,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"525_phys_def": {
        "Desc": "525+ Physical Defense",
        "Diff": 1,
        "Types": ["phys_def","stats","#_phys_def"]
},

"450_speed": {
        "Desc": "450+ Speed",
        "Diff": 1,
        "Types": ["speed","stats","#_speed"]
},

"7_ss_frostlands": {
        "Desc": "7 Side Stories in Frostlands",
        "Diff": 1,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"7_ss_flatlands": {
        "Desc": "7 Side Stories in Flatlands",
        "Diff": 1,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"7_ss_coastlands": {
        "Desc": "7 Side Stories in Coastlands",
        "Diff": 1,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"7_ss_highlands": {
        "Desc": "7 Side Stories in Highlands",
        "Diff": 1,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"8_ss_riverlands": {
        "Desc": "8 Side Stories in Riverlands",
        "Diff": 1,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"ss_chain_3": {
        "Desc": "SS: Le Mann, Explorer Extraordinaire (III)",
        "Diff": 1,
        "Types": ["ss_specific","ss_coastlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"16_t_purple_chests": {
        "Desc": "Open 16 Purple Chests",
        "Diff": 1,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"20_u_bl": {
        "Desc": "Capture 20 Unique Monsters",
        "Diff": 1,
        "Types": ["combat_counts","specific_character","beast_lore","combat","#_u_bl"]
},

"3_u_boss_drop": {
        "Desc": "3 Unique Boss Equipment Drops",
        "Diff": 2,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"30_t_nuts": {
        "Desc": "30 Nuts",
        "Diff": 2,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_nuts"]
},

"10_t_elem_amulets": {
        "Desc": "10 Elemental Reduction Amulets/Charms",
        "Diff": 2,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","#_t_elem_amulets"]
},

"250_sp": {
        "Desc": "250+ SP",
        "Diff": 2,
        "Types": ["sp","stats","#_sp"]
},

"400_critical": {
        "Desc": "400+ Critical",
        "Diff": 2,
        "Types": ["crit","stats","#_critical"]
},

"8_ss_cliftlands": {
        "Desc": "8 Side Stories in Cliftlands",
        "Diff": 2,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"3_ch_2": {
        "Desc": "Complete 3 Chapter 2's",
        "Diff": 2,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["1_ch_2","2_ch_2"]
},

"20_t_s_nuts": {
        "Desc": "20 Nut (S)'s",
        "Diff": 3,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"10_t_stones": {
        "Desc": "10 Status Stones",
        "Diff": 3,
        "Types": ["item_set","item_count","status_stone","accessory","items","#_t_stones"]
},

"6_u_bracelets": {
        "Desc": "6 Unique Bracelets",
        "Diff": 3,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"4_u_necklaces": {
        "Desc": "4 Unique Necklaces",
        "Diff": 3,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"6_ss_II_sets": {
        "Desc": "6 (II) Side Stories",
        "Diff": 3,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets"]
},

"8_ss_woodlands": {
        "Desc": "8 Side Stories in Woodlands",
        "Diff": 3,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"ss_boss_3": {
        "Desc": "SS: Scourge of the Seas",
        "Diff": 3,
        "Types": ["ss_specific","ss_coastlands","ss_boss","boss","side_stories"]
},

"15_u_elem_wpn": {
        "Desc": "15 Unique Elemental Non-Staff Weapons",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"15_u_critical": {
        "Desc": "15 Unique Critical Equipments",
        "Diff": 4,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"35_u_armors": {
        "Desc": "35 Unique Armors",
        "Diff": 4,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"3_alluring": {
        "Desc": "3 Alluring Ribbons",
        "Diff": 4,
        "Types": ["item_set","accessory","side_stories","items","#_alluring"]
},

"3500_hp": {
        "Desc": "3500+ HP",
        "Diff": 4,
        "Types": ["hp","stats","#_hp"]
},

"600_elem_def": {
        "Desc": "600+ Elemental Defense",
        "Diff": 4,
        "Types": ["elem_def","stats","#_elem_def"]
},

"20_side_stories": {
        "Desc": "20 Side Stories",
        "Diff": 4,
        "Types": ["broad_ss_set","side_stories","#_side_stories"]
},

"8_ss_flatlands": {
        "Desc": "8 Side Stories in Flatlands",
        "Diff": 4,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"8_ss_highlands": {
        "Desc": "8 Side Stories in Highlands",
        "Diff": 4,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"7_ss_sunlands": {
        "Desc": "7 Side Stories in Sunlands",
        "Diff": 4,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"45_t_chests": {
        "Desc": "Open 45 Total Chests",
        "Diff": 4,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"20_u_speed": {
        "Desc": "20 Unique Speed Equipments",
        "Diff": 5,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"40_t_s_sstones": {
        "Desc": "40 Soulstone (S)'s",
        "Diff": 5,
        "Types": ["item_count","soulstone","item_set","items","#_t_s_sstones"]
},

"15_u_spears": {
        "Desc": "15 Unique Spears",
        "Diff": 5,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"5_u_forbidden": {
        "Desc": "5 Unique Forbbiden Equipments",
        "Diff": 5,
        "Types": ["item_set","weapon","forbidden","items","#_u_forbidden"]
},

"650_phys_atk": {
        "Desc": "650+ Physical Attack",
        "Diff": 5,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"9_ss_riverlands": {
        "Desc": "9 Side Stories in Riverlands",
        "Diff": 5,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"ss_boss_4": {
        "Desc": "SS: Shadow over the Sands",
        "Diff": 5,
        "Types": ["ss_specific","ss_sunlands","ss_boss","boss","side_stories"]
},

"50_t_brown_chests": {
        "Desc": "Open 50 Brown Chests",
        "Diff": 5,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"30_t_red_chests": {
        "Desc": "Open 30 Red Chests",
        "Diff": 5,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"chapter_3_chests": {
        "Desc": "Open All Chests in a Chapter 3 Dungeon",
        "Diff": 5,
        "Types": ["chest","chest_set","exploration"]
},

"12_u_rats_bl": {
        "Desc": "Capture 12 Unique Ratkin/Ratking",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"ch_2_no_boost": {
        "Desc": "Chapter 2 Boss without Boosting",
        "Diff": 5,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"1_ss_post_game": {
        "Desc": "1 Post Game Side Stories",
        "Diff": 5,
        "Types": ["side_stories","broad_ss_set","progression","#_ss_post_game"]
},

"25_t_pouches": {
        "Desc": "25 Money Pouches",
        "Diff": 6,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"15_t_m_nuts": {
        "Desc": "15 Nut (M)'s",
        "Diff": 6,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_m_nuts"]
},

"15_u_daggers": {
        "Desc": "15 Unique Daggers",
        "Diff": 6,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"15_u_axes": {
        "Desc": "15 Unique Axes",
        "Diff": 6,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"6_u_stones": {
        "Desc": "6 Unique Status Stones",
        "Diff": 6,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"7_u_bracelets": {
        "Desc": "7 Unique Bracelets",
        "Diff": 6,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"9_t_items": {
        "Desc": "9 Pages in All Items",
        "Diff": 6,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"580_evasion": {
        "Desc": "580+ Evasion",
        "Diff": 6,
        "Types": ["evasion","stats","#_evasion"]
},

"5_optional_bosses": {
        "Desc": "Defeat 5 Unique Optional Bosses",
        "Diff": 6,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"25_weakness_sets": {
        "Desc": "25 Revealed Weakness Sets",
        "Diff": 6,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"9_t_olives": {
        "Desc": "9 Olive (L)'s",
        "Diff": 7,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"15_u_bows": {
        "Desc": "15 Unique Bows",
        "Diff": 7,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"24_u_headgears": {
        "Desc": "24 Unique Headgears",
        "Diff": 7,
        "Types": ["broad_item_set","armor","items","#_u_headgears"]
},

"30_t_town_boosts": {
        "Desc": "30 Town Boost Infos",
        "Diff": 7,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"4_ss_III_sets": {
        "Desc": "4 (III) Side Stories",
        "Diff": 7,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets"]
},

"9_ss_highlands": {
        "Desc": "9 Side Stories in Highlands",
        "Diff": 7,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"12_u_lizards_bl": {
        "Desc": "Capture 12 Unique Lizardmen/Lizardking",
        "Diff": 7,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"12_u_frogs_bl": {
        "Desc": "Capture 12 Unique Froggen/Frogking",
        "Diff": 7,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"12_u_birds_bl": {
        "Desc": "Capture 12 Unique Birdian/Birdking",
        "Diff": 7,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"13_t_l_nuts": {
        "Desc": "13 Nut (L)'s",
        "Diff": 8,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_l_nuts"]
},

"15_u_swords": {
        "Desc": "15 Unique Swords",
        "Diff": 8,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"9_u_elem_reduce": {
        "Desc": "9 Unique Elemental Reduction Equipments",
        "Diff": 8,
        "Types": ["item_set","armor","accessory","elem_reduce","items","#_u_elem_reduce"]
},

"300_sp": {
        "Desc": "300+ SP",
        "Diff": 8,
        "Types": ["sp","stats","#_sp"]
},

"600_phys_def": {
        "Desc": "600+ Physical Defense",
        "Diff": 8,
        "Types": ["phys_def","stats","#_phys_def"]
},

"450_critical": {
        "Desc": "450+ Critical",
        "Diff": 8,
        "Types": ["crit","stats","#_critical"]
},

"25_u_bl": {
        "Desc": "Capture 25 Unique Monsters",
        "Diff": 8,
        "Types": ["combat_counts","specific_character","beast_lore","combat","#_u_bl"]
},

"10_u_magic_bl": {
        "Desc": "Capture 10 Unique Magic Enemies",
        "Diff": 8,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"2_ch_3": {
        "Desc": "Complete 2 Chapter 3's",
        "Diff": 8,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","1_ch_3"]
},

"30_t_pouches": {
        "Desc": "30 Money Pouches",
        "Diff": 8,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"20_u_gold_items": {
        "Desc": "20 Unique Gold Items",
        "Diff": 8,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"6_u_dragon": {
        "Desc": "6 Unique Dragon Equipments",
        "Diff": 8,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"3_u_rune": {
        "Desc": "3 Unique Rune Weapons",
        "Diff": 8,
        "Types": ["item_set","weapon","elem_atk","items","progression","#_u_rune"]
},

"6_u_phys_staves": {
        "Desc": "6 Unique Physical Staves",
        "Diff": 8,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"20_t_l_sstones": {
        "Desc": "20 Soulstone (L)'s",
        "Diff": 8,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"24_u_body_armors": {
        "Desc": "24 Unique Body Armors",
        "Diff": 8,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"8_ss_coastlands": {
        "Desc": "8 Side Stories in Coastlands",
        "Diff": 8,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"9_ss_cliftlands": {
        "Desc": "9 Side Stories in Cliftlands",
        "Diff": 8,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"4_ch_2": {
        "Desc": "Complete 4 Chapter 2's",
        "Diff": 8,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2"]
},

"5_u_necklaces": {
        "Desc": "5 Unique Necklaces",
        "Diff": 9,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"500_speed": {
        "Desc": "500+ Speed",
        "Diff": 9,
        "Types": ["speed","stats","#_speed"]
},

"630_evasion": {
        "Desc": "630+ Evasion",
        "Diff": 9,
        "Types": ["evasion","stats","#_evasion"]
},

"24_u_concoct": {
        "Desc": "24 Unique Concoctions Used",
        "Diff": 9,
        "Types": ["combat_counts","items","specific_character","combat","#_u_concoct"]
},

"30_u_accessories": {
        "Desc": "30 Unique Accessories",
        "Diff": 9,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","side_stories","#_u_accessories"]
},

"350_accuracy": {
        "Desc": "350+ Accuracy",
        "Diff": 9,
        "Types": ["accuracy","stats","#_accuracy"]
},

"7_ss_II_sets": {
        "Desc": "7 (II) Side Stories",
        "Diff": 9,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets"]
},

"9_ss_woodlands": {
        "Desc": "9 Side Stories in Woodlands",
        "Diff": 9,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"20_t_purple_chests": {
        "Desc": "Open 20 Purple Chests",
        "Diff": 9,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"str_7_bl": {
        "Desc": "Capture a Strength 7 Monster",
        "Diff": 9,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"1_ch_4": {
        "Desc": "Complete 1 Chapter 4's",
        "Diff": 9,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["1_ch_2","1_ch_3"]
},

"30_t_m_sstones": {
        "Desc": "30 Soulstone (M)'s",
        "Diff": 10,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"40_u_weapons": {
        "Desc": "40 Unique Weapons",
        "Diff": 10,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"20_t_bottles": {
        "Desc": "20 Status Bottles",
        "Diff": 10,
        "Types": ["item_set","item_count","bottle","items","#_t_bottles"]
},

"700_elem_def": {
        "Desc": "700+ Elemental Defense",
        "Diff": 10,
        "Types": ["elem_def","stats","#_elem_def"]
},

"3_ss_region_sets": {
        "Desc": "3 Side Stories in Each Region",
        "Diff": 10,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"5_ss_III_sets": {
        "Desc": "5 (III) Side Stories",
        "Diff": 10,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets"]
},

"8_ss_frostlands": {
        "Desc": "8 Side Stories in Frostlands",
        "Diff": 10,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"8_ss_sunlands": {
        "Desc": "8 Side Stories in Sunlands",
        "Diff": 10,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"30_weakness_sets": {
        "Desc": "30 Revealed Weakness Sets",
        "Diff": 10,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"20_u_elem_wpn": {
        "Desc": "20 Unique Elemental Non-Staff Weapons",
        "Diff": 11,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"40_t_nuts": {
        "Desc": "40 Nuts",
        "Diff": 11,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_nuts"]
},

"15_u_staves": {
        "Desc": "15 Unique Staves",
        "Diff": 11,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"750_elem_atk": {
        "Desc": "750+ Elemental Attack",
        "Diff": 11,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"10_ss_riverlands": {
        "Desc": "10 Side Stories in Riverlands",
        "Diff": 11,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"2_ss_bosses": {
        "Desc": "Defeat 2 Side Story Bosses",
        "Diff": 11,
        "Types": ["ss_set","ss_boss","boss","side_stories","#_ss_bosses"]
},

"6_optional_bosses": {
        "Desc": "Defeat 6 Unique Optional Bosses",
        "Diff": 11,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"5_ch_2": {
        "Desc": "Complete 5 Chapter 2's",
        "Diff": 11,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2"]
},

"7_u_phys_staves": {
        "Desc": "7 Unique Physical Staves",
        "Diff": 11,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"20_u_evasion": {
        "Desc": "20 Unique Evasion Equipments",
        "Diff": 11,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"15_t_elem_amulets": {
        "Desc": "15 Elemental Reduction Amulets/Charms",
        "Diff": 11,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","side_stories","#_t_elem_amulets"]
},

"60_t_chests": {
        "Desc": "Open 60 Total Chests",
        "Diff": 11,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"ch_3_duo": {
        "Desc": "Chapter 3 (Final) Boss fight with 2 only Travelers",
        "Diff": 11,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"4_u_boss_drop": {
        "Desc": "4 Unique Boss Equipment Drops",
        "Diff": 12,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"9_t_strong_amulets": {
        "Desc": "9 Strong Elemental Reduction Amulets",
        "Diff": 12,
        "Types": ["item_set","item_count","accessory","elem_reduce","items","progression","#_t_strong_amulets"]
},

"15_t_stones": {
        "Desc": "15 Status Stones",
        "Diff": 12,
        "Types": ["item_set","item_count","status_stone","accessory","items","#_t_stones"]
},

"500_critical": {
        "Desc": "500+ Critical",
        "Diff": 12,
        "Types": ["crit","stats","#_critical"]
},

"8_ss_II_sets": {
        "Desc": "8 (II) Side Stories",
        "Diff": 12,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","7_ss_II_sets"]
},

"10_ss_cliftlands": {
        "Desc": "10 Side Stories in Cliftlands",
        "Diff": 12,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"60_t_brown_chests": {
        "Desc": "Open 60 Brown Chests",
        "Diff": 12,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"36_t_red_chests": {
        "Desc": "Open 36 Red Chests",
        "Diff": 12,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"20_u_accuracy": {
        "Desc": "20 Unique Accuracy Equipments",
        "Diff": 13,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"25_t_s_nuts": {
        "Desc": "25 Nut (S)'s",
        "Diff": 13,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"675_phys_def": {
        "Desc": "675+ Physical Defense",
        "Diff": 13,
        "Types": ["phys_def","stats","#_phys_def"]
},

"8_u_stones": {
        "Desc": "8 Unique Status Stones",
        "Diff": 13,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"4_bottle_sets": {
        "Desc": "4 Complete Sets of Status Bottles",
        "Diff": 13,
        "Types": ["item_set","item_count","bottle","items","#_bottle_sets"]
},

"700_phys_atk": {
        "Desc": "700+ Physical Attack",
        "Diff": 13,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"550_speed": {
        "Desc": "550+ Speed",
        "Diff": 13,
        "Types": ["speed","stats","#_speed"]
},

"9_ss_flatlands": {
        "Desc": "9 Side Stories in Flatlands",
        "Diff": 13,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"20_u_critical": {
        "Desc": "20 Unique Critical Equipments",
        "Diff": 13,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"6_u_necklaces": {
        "Desc": "6 Unique Necklaces",
        "Diff": 13,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"4500_hp": {
        "Desc": "4500+ HP",
        "Diff": 13,
        "Types": ["hp","stats","#_hp"]
},

"680_evasion": {
        "Desc": "680+ Evasion",
        "Diff": 13,
        "Types": ["evasion","stats","#_evasion"]
},

"chapter_4_chests": {
        "Desc": "Open All Chests in a Chapter 4 Dungeon",
        "Diff": 13,
        "Types": ["chest","chest_set","exploration"]
},

"7_optional_bosses": {
        "Desc": "Defeat 7 Unique Optional Bosses",
        "Diff": 13,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"35_t_pouches": {
        "Desc": "35 Money Pouches",
        "Diff": 14,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"25_u_speed": {
        "Desc": "25 Unique Speed Equipments",
        "Diff": 14,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"20_t_m_nuts": {
        "Desc": "20 Nut (M)'s",
        "Diff": 14,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_m_nuts"]
},

"30_u_headgears": {
        "Desc": "30 Unique Headgears",
        "Diff": 14,
        "Types": ["broad_item_set","armor","items","#_u_headgears"]
},

"16_u_shields": {
        "Desc": "16 Unique Shields",
        "Diff": 14,
        "Types": ["broad_item_set","armor","items","progression","#_u_shields"]
},

"45_u_armors": {
        "Desc": "45 Unique Armors",
        "Diff": 14,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"350_sp": {
        "Desc": "350+ SP",
        "Diff": 14,
        "Types": ["sp","stats","#_sp"]
},

"9_ss_frostlands": {
        "Desc": "9 Side Stories in Frostlands",
        "Diff": 14,
        "Types": ["ss_set","ss_frostlands","side_stories","ss_boss","#_ss_frostlands"]
},

"10_ss_highlands": {
        "Desc": "10 Side Stories in Highlands",
        "Diff": 14,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"35_weakness_sets": {
        "Desc": "35 Revealed Weakness Sets",
        "Diff": 14,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"6_ch_2": {
        "Desc": "Complete 6 Chapter 2's",
        "Diff": 14,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2"]
},

"400_accuracy": {
        "Desc": "400+ Accuracy",
        "Diff": 15,
        "Types": ["accuracy","stats","#_accuracy"]
},

"32_u_concoct": {
        "Desc": "32 Unique Concoctions Used",
        "Diff": 15,
        "Types": ["combat_counts","items","specific_character","combat","#_u_concoct"]
},

"ch_3_slow": {
        "Desc": "Chapter 3 Boss without Soulstones or Vets",
        "Diff": 15,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"3_ch_3": {
        "Desc": "Complete 3 Chapter 3's",
        "Diff": 15,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","1_ch_3","2_ch_3"]
},

"800_elem_atk": {
        "Desc": "800+ Elemental Attack",
        "Diff": 15,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"70_t_brown_chests": {
        "Desc": "Open 70 Brown Chests",
        "Diff": 15,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"42_t_red_chests": {
        "Desc": "Open 42 Red Chests",
        "Diff": 15,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"15_u_rats_bl": {
        "Desc": "Capture 15 Unique Ratkin/Ratking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"40_t_pouches": {
        "Desc": "40 Money Pouches",
        "Diff": 16,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"25_u_accuracy": {
        "Desc": "25 Unique Accuracy Equipments",
        "Diff": 16,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"12_t_items": {
        "Desc": "12 Pages in All Items",
        "Diff": 16,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"800_elem_def": {
        "Desc": "800+ Elemental Defense",
        "Diff": 16,
        "Types": ["elem_def","stats","#_elem_def"]
},

"550_critical": {
        "Desc": "550+ Critical",
        "Diff": 16,
        "Types": ["crit","stats","#_critical"]
},

"9_ss_coastlands": {
        "Desc": "9 Side Stories in Coastlands",
        "Diff": 16,
        "Types": ["ss_set","ss_coastlands","side_stories","ss_boss","#_ss_coastlands"]
},

"15_u_lizards_bl": {
        "Desc": "Capture 15 Unique Lizardmen/Lizardking",
        "Diff": 16,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"15_u_frogs_bl": {
        "Desc": "Capture 15 Unique Froggen/Frogking",
        "Diff": 16,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"15_u_birds_bl": {
        "Desc": "Capture 15 Unique Birdian/Birdking",
        "Diff": 16,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"7_ch_2": {
        "Desc": "Complete 7 Chapter 2's",
        "Diff": 16,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2"]
},

"25_u_gold_items": {
        "Desc": "25 Unique Gold Items",
        "Diff": 17,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"12_t_olives": {
        "Desc": "12 Olive (L)'s",
        "Diff": 17,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"9_ss_sunlands": {
        "Desc": "9 Side Stories in Sunlands",
        "Diff": 17,
        "Types": ["ss_set","ss_sunlands","side_stories","ss_boss","#_ss_sunlands"]
},

"24_t_purple_chests": {
        "Desc": "Open 24 Purple Chests",
        "Diff": 17,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"dreisang": {
        "Desc": "Defeat Dreisang",
        "Diff": 17,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"4_u_rune": {
        "Desc": "4 Unique Rune Weapons",
        "Diff": 17,
        "Types": ["item_set","weapon","elem_atk","items","progression","#_u_rune"]
},

"5_u_boss_drop": {
        "Desc": "5 Unique Boss Equipment Drops",
        "Diff": 17,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"30_u_body_armors": {
        "Desc": "30 Unique Body Armors",
        "Diff": 17,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"40_t_town_boosts": {
        "Desc": "40 Town Boost Infos",
        "Diff": 17,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"30_side_stories": {
        "Desc": "30 Side Stories",
        "Diff": 17,
        "Types": ["broad_ss_set","side_stories","ss_II","#_side_stories"]
},

"ss_boss_5": {
        "Desc": "SS: Into Thin Air",
        "Diff": 17,
        "Types": ["ss_specific","ss_woodlands","ss_boss","boss","advanced_boss","side_stories"]
},

"3_ss_bosses": {
        "Desc": "Defeat 3 Side Story Bosses",
        "Diff": 17,
        "Types": ["ss_set","ss_boss","boss","side_stories","#_ss_bosses"]
},

"8_optional_bosses": {
        "Desc": "Defeat 8 Unique Optional Bosses",
        "Diff": 17,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"50_u_weapons": {
        "Desc": "50 Unique Weapons",
        "Diff": 18,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"12_u_elem_reduce": {
        "Desc": "12 Unique Elemental Reduction Equipments",
        "Diff": 18,
        "Types": ["item_set","armor","accessory","elem_reduce","items","progression","#_u_elem_reduce"]
},

"750_phys_def": {
        "Desc": "750+ Physical Defense",
        "Diff": 18,
        "Types": ["phys_def","stats","#_phys_def"]
},

"6_ss_III_sets": {
        "Desc": "6 (III) Side Stories",
        "Diff": 18,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets","5_ss_III_sets"]
},

"8_ch_2": {
        "Desc": "Complete 8 Chapter 2's",
        "Diff": 18,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","8_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","7_ch_2"]
},

"25_u_elem_wpn": {
        "Desc": "25 Unique Elemental Non-Staff Weapons",
        "Diff": 18,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"25_u_critical": {
        "Desc": "25 Unique Critical Equipments",
        "Diff": 18,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"20_u_spears": {
        "Desc": "20 Unique Spears",
        "Diff": 18,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"75_t_chests": {
        "Desc": "Open 75 Total Chests",
        "Diff": 18,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"1_advanced_bosses": {
        "Desc": "Defeat 1 Advanced Job Bosses",
        "Diff": 18,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"14_u_magic_bl": {
        "Desc": "Capture 14 Unique Magic Enemies",
        "Diff": 18,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"str_8_bl": {
        "Desc": "Capture a Strength 8 Monster",
        "Diff": 18,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"25_u_evasion": {
        "Desc": "25 Unique Evasion Equipments",
        "Diff": 19,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"40_t_m_sstones": {
        "Desc": "40 Soulstone (M)'s",
        "Diff": 19,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"16_t_l_nuts": {
        "Desc": "16 Nut (L)'s",
        "Diff": 19,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_l_nuts"]
},

"20_u_swords": {
        "Desc": "20 Unique Swords",
        "Diff": 19,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"20_u_bows": {
        "Desc": "20 Unique Bows",
        "Diff": 19,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"4_alluring": {
        "Desc": "4 Alluring Ribbons",
        "Diff": 19,
        "Types": ["item_set","accessory","side_stories","items","progression","#_alluring"]
},

"4_ss_region_sets": {
        "Desc": "4 Side Stories in Each Region",
        "Diff": 19,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"40_u_accessories": {
        "Desc": "40 Unique Accessories",
        "Diff": 20,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","progression","side_stories","#_u_accessories"]
},

"400_sp": {
        "Desc": "400+ SP",
        "Diff": 20,
        "Types": ["sp","stats","#_sp"]
},

"730_evasion": {
        "Desc": "730+ Evasion",
        "Diff": 20,
        "Types": ["evasion","stats","#_evasion"]
},

"steorra": {
        "Desc": "Defeat Steorra",
        "Diff": 20,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"4_ch_3": {
        "Desc": "Complete 4 Chapter 3's",
        "Diff": 20,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","4_ch_2","1_ch_3","2_ch_3","3_ch_3"]
},

"7_u_necklaces": {
        "Desc": "7 Unique Necklaces",
        "Diff": 20,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"750_phys_atk": {
        "Desc": "750+ Physical Attack",
        "Diff": 20,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"900_elem_def": {
        "Desc": "900+ Elemental Defense",
        "Diff": 20,
        "Types": ["elem_def","stats","#_elem_def"]
},

"600_critical": {
        "Desc": "600+ Critical",
        "Diff": 20,
        "Types": ["crit","stats","#_critical"]
},

"80_t_brown_chests": {
        "Desc": "Open 80 Brown Chests",
        "Diff": 20,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"48_t_red_chests": {
        "Desc": "Open 48 Red Chests",
        "Diff": 20,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"7_ss_III_sets": {
        "Desc": "7 (III) Side Stories",
        "Diff": 21,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","7_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets","5_ss_III_sets","6_ss_III_sets"]
},

"9_optional_bosses": {
        "Desc": "Defeat 9 Unique Optional Bosses",
        "Diff": 21,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"ch_3_no_boost": {
        "Desc": "Chapter 3 Boss without Boosting",
        "Diff": 21,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"6_u_boss_drop": {
        "Desc": "6 Unique Boss Equipment Drops",
        "Diff": 21,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"50_t_nuts": {
        "Desc": "50 Nuts",
        "Diff": 21,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_nuts"]
},

"20_u_axes": {
        "Desc": "20 Unique Axes",
        "Diff": 21,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"20_t_elem_amulets": {
        "Desc": "20 Elemental Reduction Amulets/Charms",
        "Diff": 21,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","progression","side_stories","#_t_elem_amulets"]
},

"850_elem_atk": {
        "Desc": "850+ Elemental Attack",
        "Diff": 21,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"balogar": {
        "Desc": "Defeat Balogar",
        "Diff": 21,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"2_ch_4": {
        "Desc": "Complete 2 Chapter 4's",
        "Diff": 21,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["1_ch_2","2_ch_2","1_ch_3","2_ch_3","1_ch_4"]
},

"20_u_daggers": {
        "Desc": "20 Unique Daggers",
        "Diff": 22,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"28_t_purple_chests": {
        "Desc": "Open 28 Purple Chests",
        "Diff": 22,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"18_u_lizards_bl": {
        "Desc": "Capture 18 Unique Lizardmen/Lizardking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"18_u_frogs_bl": {
        "Desc": "Capture 18 Unique Froggen/Frogking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"18_u_birds_bl": {
        "Desc": "Capture 18 Unique Birdian/Birdking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"18_u_rats_bl": {
        "Desc": "Capture 18 Unique Ratkin/Ratking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"30_t_l_sstones": {
        "Desc": "30 Soulstone (L)'s",
        "Diff": 22,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"20_t_stones": {
        "Desc": "20 Status Stones",
        "Diff": 22,
        "Types": ["item_set","item_count","status_stone","accessory","items","progression","#_t_stones"]
},

"40_side_stories": {
        "Desc": "40 Side Stories",
        "Diff": 22,
        "Types": ["broad_ss_set","side_stories","ss_II","#_side_stories"]
},

"40_weakness_sets": {
        "Desc": "40 Revealed Weakness Sets",
        "Diff": 22,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"6_ss_post_game": {
        "Desc": "6 Post Game Side Stories",
        "Diff": 22,
        "Types": ["side_stories","broad_ss_set","progression","#_ss_post_game"]
},

"450_accuracy": {
        "Desc": "450+ Accuracy",
        "Diff": 23,
        "Types": ["accuracy","stats","#_accuracy"]
},

"25_t_m_nuts": {
        "Desc": "25 Nut (M)'s",
        "Diff": 23,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_m_nuts"]
},

"825_phys_def": {
        "Desc": "825+ Physical Defense",
        "Diff": 23,
        "Types": ["phys_def","stats","#_phys_def"]
},

"600_speed": {
        "Desc": "600+ Speed",
        "Diff": 23,
        "Types": ["speed","stats","#_speed"]
},

"20_u_staves": {
        "Desc": "20 Unique Staves",
        "Diff": 23,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"2_advanced_bosses": {
        "Desc": "Defeat 2 Advanced Job Bosses",
        "Diff": 23,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"5500_hp": {
        "Desc": "5500+ HP",
        "Diff": 23,
        "Types": ["hp","stats","#_hp"]
},

"5_ss_region_sets": {
        "Desc": "5 Side Stories in Each Region",
        "Diff": 23,
        "Types": ["broad_ss_set","side_stories","ss_II","#_ss_region_sets"]
},

"90_t_chests": {
        "Desc": "Open 90 Total Chests",
        "Diff": 23,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"7_u_boss_drop": {
        "Desc": "7 Unique Boss Equipment Drops",
        "Diff": 24,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"11_ss_riverlands": {
        "Desc": "11 Side Stories in Riverlands",
        "Diff": 24,
        "Types": ["ss_set","ss_riverlands","side_stories","progression","#_ss_riverlands"]
},

"90_t_brown_chests": {
        "Desc": "Open 90 Brown Chests",
        "Diff": 24,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"54_t_red_chests": {
        "Desc": "Open 54 Red Chests",
        "Diff": 24,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"32_t_purple_chests": {
        "Desc": "Open 32 Purple Chests",
        "Diff": 24,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"5_ch_3": {
        "Desc": "Complete 5 Chapter 3's",
        "Diff": 24,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["5_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","1_ch_3","2_ch_3","3_ch_3","4_ch_3"]
},

"5_u_adamantine": {
        "Desc": "5 Unique Adamantine Equipments",
        "Diff": 24,
        "Types": ["item_set","weapon","elem_atk","armor","items","progression","ss_specific","side_stories","#_u_adamantine"]
},

"30_u_elem_wpn": {
        "Desc": "30 Unique Elemental Non-Staff Weapons",
        "Diff": 24,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"15_t_olives": {
        "Desc": "15 Olive (L)'s",
        "Diff": 24,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"15_u_elem_reduce": {
        "Desc": "15 Unique Elemental Reduction Equipments",
        "Diff": 24,
        "Types": ["item_set","armor","accessory","elem_reduce","items","progression","side_stories","#_u_elem_reduce"]
},

"450_sp": {
        "Desc": "450+ SP",
        "Diff": 24,
        "Types": ["sp","stats","#_sp"]
},

"10_ss_flatlands": {
        "Desc": "10 Side Stories in Flatlands",
        "Diff": 24,
        "Types": ["ss_set","ss_flatlands","side_stories","progression","#_ss_flatlands"]
},

"11_ss_cliftlands": {
        "Desc": "11 Side Stories in Cliftlands",
        "Diff": 24,
        "Types": ["ss_set","ss_cliftlands","side_stories","progression","#_ss_cliftlands"]
},

"18_u_magic_bl": {
        "Desc": "Capture 18 Unique Magic Enemies",
        "Diff": 24,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"20_t_l_nuts": {
        "Desc": "20 Nut (L)'s",
        "Diff": 25,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_l_nuts"]
},

"60_u_weapons": {
        "Desc": "60 Unique Weapons",
        "Diff": 25,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"55_u_armors": {
        "Desc": "55 Unique Armors",
        "Diff": 25,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"650_critical": {
        "Desc": "650+ Critical",
        "Diff": 25,
        "Types": ["crit","stats","#_critical"]
},

"ss_boss_2": {
        "Desc": "SS: Scardy Sheep",
        "Diff": 25,
        "Types": ["ss_specific","ss_flatlands","ss_boss","specific_character","boss","advanced_boss","progression","side_stories"]
},

"10_optional_bosses": {
        "Desc": "Defeat 10 Unique Optional Bosses",
        "Diff": 25,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"10_ss_frostlands": {
        "Desc": "10 Side Stories in Frostlands",
        "Diff": 25,
        "Types": ["ss_set","ss_frostlands","side_stories","progression","ss_boss","#_ss_frostlands"]
},

"12_ss_riverlands": {
        "Desc": "12 Side Stories in Riverlands",
        "Diff": 25,
        "Types": ["ss_set","ss_riverlands","side_stories","progression","#_ss_riverlands"]
},

"10_ss_woodlands": {
        "Desc": "10 Side Stories in Woodlands",
        "Diff": 25,
        "Types": ["ss_set","ss_woodlands","side_stories","progression","ss_boss","advanced_boss","#_ss_woodlands"]
},

"winnehild": {
        "Desc": "Defeat Winnehild",
        "Diff": 25,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
}

};
