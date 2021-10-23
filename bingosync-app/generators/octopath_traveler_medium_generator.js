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

"3_u_boss_drop": {
        "Desc": "3 Unique Boss Equipment Drops",
        "Diff": 1,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"6_t_items": {
        "Desc": "6 Pages in All Items",
        "Diff": 1,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"3500_hp": {
        "Desc": "3500+ HP",
        "Diff": 1,
        "Types": ["hp","stats","#_hp"]
},

"650_phys_atk": {
        "Desc": "650+ Physical Attack",
        "Diff": 1,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"2_ss_region_sets": {
        "Desc": "2 Side Stories in Each Region",
        "Diff": 1,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"2_ss_III_sets": {
        "Desc": "2 (III) Side Stories",
        "Diff": 1,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","1_ss_III_sets"]
},

"6_ss_frostlands": {
        "Desc": "6 Side Stories in Frostlands (No Kit)",
        "Diff": 1,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"6_ss_flatlands": {
        "Desc": "6 Side Stories in Flatlands (No Kit)",
        "Diff": 1,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"6_ss_coastlands": {
        "Desc": "6 Side Stories in Coastlands (No Kit)",
        "Diff": 1,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"50_t_brown_chests": {
        "Desc": "Open 50 Brown Chests",
        "Diff": 1,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"30_t_red_chests": {
        "Desc": "Open 30 Red Chests",
        "Diff": 1,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"str_6_bl": {
        "Desc": "Capture a Strength 6 Monster",
        "Diff": 1,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"ch_2_slow": {
        "Desc": "Chapter 2 Boss without Soulstones or Vets",
        "Diff": 1,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"ch_2_no_boost": {
        "Desc": "Chapter 2 Boss without Boosting",
        "Diff": 1,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"25_t_pouches": {
        "Desc": "25 Money Pouches",
        "Diff": 2,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"4_u_dragon": {
        "Desc": "4 Unique Dragon Equipments",
        "Diff": 2,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"15_u_accuracy": {
        "Desc": "15 Unique Accuracy Equipments",
        "Diff": 2,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"15_t_m_nuts": {
        "Desc": "15 Nut (M)'s",
        "Diff": 2,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_m_nuts"]
},

"30_u_weapons": {
        "Desc": "30 Unique Weapons",
        "Diff": 2,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"6_u_stones": {
        "Desc": "6 Unique Status Stones",
        "Diff": 2,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"20_u_accessories": {
        "Desc": "20 Unique Accessories",
        "Diff": 2,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","#_u_accessories"]
},

"3_bottle_sets": {
        "Desc": "3 Complete Sets of Status Bottles",
        "Diff": 2,
        "Types": ["item_set","item_count","bottle","items","#_bottle_sets"]
},

"4_ss_II_sets": {
        "Desc": "4 (II) Side Stories",
        "Diff": 2,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets"]
},

"20_t_purple_chests": {
        "Desc": "Open 20 Purple Chests",
        "Diff": 2,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"9_u_lizards_bl": {
        "Desc": "Capture 9 Unique Lizardmen / Lizardking",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"9_u_frogs_bl": {
        "Desc": "Capture 9 Unique Froggen / Frogking",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"9_u_birds_bl": {
        "Desc": "Capture 9 Unique Birdian / Birdking",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"9_u_rats_bl": {
        "Desc": "Capture 9 Unique Ratkin / Ratking",
        "Diff": 2,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"15_u_critical": {
        "Desc": "15 Unique Critical Equipments",
        "Diff": 3,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"7_ss_frostlands": {
        "Desc": "7 Side Stories in Frostlands (No Kit)",
        "Diff": 3,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"6_ss_highlands": {
        "Desc": "6 Side Stories in Highlands (No Kit)",
        "Diff": 3,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"6_ss_woodlands": {
        "Desc": "6 Side Stories in Woodlands (No Kit)",
        "Diff": 3,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"15_u_elem_wpn": {
        "Desc": "15 Unique Elemental Non-Staff Weapons",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"20_t_s_nuts": {
        "Desc": "20 Nut (S)'s",
        "Diff": 4,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"30_t_nuts": {
        "Desc": "30 Nuts",
        "Diff": 4,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_nuts"]
},

"18_u_sstones": {
        "Desc": "18 Unique Soulstones",
        "Diff": 4,
        "Types": ["broad_item_set","soulstone","items","#_u_sstones"]
},

"15_u_axes": {
        "Desc": "15 Unique Axes",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"9_u_elem_reduce": {
        "Desc": "9 Unique Elemental Reduction Equipments",
        "Diff": 4,
        "Types": ["item_set","armor","accessory","elem_reduce","items","#_u_elem_reduce"]
},

"580_evasion": {
        "Desc": "580+ Evasion",
        "Diff": 4,
        "Types": ["evasion","stats","#_evasion"]
},

"ss_boss_3": {
        "Desc": "SS: Scourge of the Seas",
        "Diff": 4,
        "Types": ["ss_specific","ss_coastlands","ss_boss","boss","side_stories"]
},

"5_optional_bosses": {
        "Desc": "Defeat 5 Unique Optional Bosses",
        "Diff": 4,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"25_weakness_sets": {
        "Desc": "25 Revealed Weakness Sets",
        "Diff": 4,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"20_u_gold_items": {
        "Desc": "20 Unique Gold Items",
        "Diff": 5,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"5_u_phys_staves": {
        "Desc": "5 Unique Physical Staves",
        "Diff": 5,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"15_u_spears": {
        "Desc": "15 Unique Spears",
        "Diff": 5,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"4_u_necklaces": {
        "Desc": "4 Unique Necklaces",
        "Diff": 5,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"300_sp": {
        "Desc": "300+ SP",
        "Diff": 5,
        "Types": ["sp","stats","#_sp"]
},

"600_phys_def": {
        "Desc": "600+ Physical Defense",
        "Diff": 5,
        "Types": ["phys_def","stats","#_phys_def"]
},

"450_critical": {
        "Desc": "450+ Critical",
        "Diff": 5,
        "Types": ["crit","stats","#_critical"]
},

"7_ss_flatlands": {
        "Desc": "7 Side Stories in Flatlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"7_ss_coastlands": {
        "Desc": "7 Side Stories in Coastlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"6_ss_sunlands": {
        "Desc": "6 Side Stories in Sunlands (No Kit)",
        "Diff": 5,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"30_t_pouches": {
        "Desc": "30 Money Pouches",
        "Diff": 6,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"10_t_l_nuts": {
        "Desc": "10 Nut (L)'s",
        "Diff": 6,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_l_nuts"]
},

"15_u_daggers": {
        "Desc": "15 Unique Daggers",
        "Diff": 6,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"13_u_shields": {
        "Desc": "13 Unique Shields",
        "Diff": 6,
        "Types": ["broad_item_set","armor","items","#_u_shields"]
},

"35_u_armors": {
        "Desc": "35 Unique Armors",
        "Diff": 6,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"500_speed": {
        "Desc": "500+ Speed",
        "Diff": 6,
        "Types": ["speed","stats","#_speed"]
},

"20_side_stories": {
        "Desc": "20 Side Stories",
        "Diff": 6,
        "Types": ["broad_ss_set","side_stories","#_side_stories"]
},

"7_ss_highlands": {
        "Desc": "7 Side Stories in Highlands (No Kit)",
        "Diff": 6,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"ss_boss_4": {
        "Desc": "SS: Shadow over the Sands",
        "Diff": 6,
        "Types": ["ss_specific","ss_sunlands","ss_boss","boss","side_stories"]
},

"5_npc_summons": {
        "Desc": "Expend all Summons on an NPC 5 times",
        "Diff": 6,
        "Types": ["combat_counts","extended_combat","combat","#_npc_summons"]
},

"10_bl_summons": {
        "Desc": "Expend all Summon Uses on 10 Monsters",
        "Diff": 6,
        "Types": ["combat_counts","extended_combat","combat","#_bl_summons"]
},

"16_u_bl": {
        "Desc": "Capture 16 Unique Monsters",
        "Diff": 6,
        "Types": ["combat_counts","specific_character","beast_lore","combat","#_u_bl"]
},

"630_evasion": {
        "Desc": "630+ Evasion",
        "Diff": 7,
        "Types": ["evasion","stats","#_evasion"]
},

"6_ss_riverlands": {
        "Desc": "6 Side Stories in Riverlands (No Kit)",
        "Diff": 7,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"24_u_concoct": {
        "Desc": "24 Unique Concoctions Used",
        "Diff": 7,
        "Types": ["combat_counts","items","specific_character","combat","#_u_concoct"]
},

"6_u_str_bl": {
        "Desc": "6 Different Strength Monsters in Beast Lore",
        "Diff": 7,
        "Types": ["combat_counts","specific_character","beast_lore","extended_combat","combat_set","combat","#_u_str_bl"]
},

"str_8_NPC": {
        "Desc": "Defeat a Strength 8 NPC",
        "Diff": 7,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"4_ch_2": {
        "Desc": "Complete 4 Chapter 2's",
        "Diff": 7,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2"]
},

"20_u_speed": {
        "Desc": "20 Unique Speed Equipments",
        "Diff": 8,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"30_t_m_sstones": {
        "Desc": "30 Soulstone (M)'s",
        "Diff": 8,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"15_u_bows": {
        "Desc": "15 Unique Bows",
        "Diff": 8,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"6_u_bracelets": {
        "Desc": "6 Unique Bracelets",
        "Diff": 8,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"350_accuracy": {
        "Desc": "350+ Accuracy",
        "Diff": 8,
        "Types": ["accuracy","stats","#_accuracy"]
},

"7_ss_cliftlands": {
        "Desc": "7 Side Stories in Cliftlands (No Kit)",
        "Diff": 8,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"7_ss_woodlands": {
        "Desc": "7 Side Stories in Woodlands (No Kit)",
        "Diff": 8,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"10_u_magic_bl": {
        "Desc": "Capture 10 Unique Elemental Themed Enemies",
        "Diff": 8,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"2_ch_3": {
        "Desc": "Complete 2 Chapter 3's",
        "Diff": 8,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","1_ch_3"]
},

"3_u_rune": {
        "Desc": "3 Unique Rune Weapons",
        "Diff": 9,
        "Types": ["item_set","weapon","elem_atk","items","progression","#_u_rune"]
},

"7_ss_sunlands": {
        "Desc": "7 Side Stories in Sunlands (No Kit)",
        "Diff": 9,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"60_t_brown_chests": {
        "Desc": "Open 60 Brown Chests",
        "Diff": 9,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"36_t_red_chests": {
        "Desc": "Open 36 Red Chests",
        "Diff": 9,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"5_u_dragon": {
        "Desc": "5 Unique Dragon Equipments",
        "Diff": 9,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"30_t_town_boosts": {
        "Desc": "30 Town Boost Infos",
        "Diff": 9,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"750_elem_atk": {
        "Desc": "750+ Elemental Attack",
        "Diff": 9,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"700_elem_def": {
        "Desc": "700+ Elemental Defense",
        "Diff": 9,
        "Types": ["elem_def","stats","#_elem_def"]
},

"3_ss_III_sets": {
        "Desc": "3 (III) Side Stories",
        "Diff": 9,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","1_ss_III_sets","2_ss_III_sets"]
},

"8_ss_flatlands": {
        "Desc": "8 Side Stories in Flatlands (No Kit)",
        "Diff": 9,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"7_ss_riverlands": {
        "Desc": "7 Side Stories in Riverlands (No Kit)",
        "Diff": 9,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"24_t_purple_chests": {
        "Desc": "Open 24 Purple Chests",
        "Diff": 9,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"chapter_4_chests": {
        "Desc": "Open All Chests in a Chapter 4 Dungeon",
        "Diff": 9,
        "Types": ["chest","chest_set","exploration"]
},

"30_weakness_sets": {
        "Desc": "30 Revealed Weakness Sets",
        "Diff": 9,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"15_u_staves": {
        "Desc": "15 Unique Staves",
        "Diff": 10,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"15_t_elem_amulets": {
        "Desc": "15 Elemental Reduction Amulets/Charms",
        "Diff": 10,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","side_stories","#_t_elem_amulets"]
},

"5_u_necklaces": {
        "Desc": "5 Unique Necklaces",
        "Diff": 10,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"9_t_items": {
        "Desc": "9 Pages in All Items",
        "Diff": 10,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"75_t_chests": {
        "Desc": "Open 75 Total Chests",
        "Diff": 10,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"6_optional_bosses": {
        "Desc": "Defeat 6 Unique Optional Bosses",
        "Diff": 10,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"str_9_NPC": {
        "Desc": "Defeat a Strength 9 NPC",
        "Diff": 10,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"5_ch_2": {
        "Desc": "Complete 5 Chapter 2's",
        "Diff": 10,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2"]
},

"6_u_phys_staves": {
        "Desc": "6 Unique Physical Staves",
        "Diff": 11,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"20_t_l_sstones": {
        "Desc": "20 Soulstone (L)'s",
        "Diff": 11,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"13_t_l_nuts": {
        "Desc": "13 Nut (L)'s",
        "Diff": 11,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_l_nuts"]
},

"4_u_forbidden": {
        "Desc": "4 Unique Forbbiden Equipments",
        "Diff": 11,
        "Types": ["item_set","weapon","forbidden","items","#_u_forbidden"]
},

"9_t_strong_amulets": {
        "Desc": "9 Strong Elemental Reduction Amulets",
        "Diff": 11,
        "Types": ["item_set","item_count","accessory","elem_reduce","items","progression","#_t_strong_amulets"]
},

"15_t_stones": {
        "Desc": "15 Status Stones",
        "Diff": 11,
        "Types": ["item_set","item_count","status_stone","accessory","items","#_t_stones"]
},

"7_u_bracelets": {
        "Desc": "7 Unique Bracelets",
        "Diff": 11,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"20_t_bottles": {
        "Desc": "20 Status Bottles",
        "Diff": 11,
        "Types": ["item_set","item_count","bottle","items","#_t_bottles"]
},

"8_ss_cliftlands": {
        "Desc": "8 Side Stories in Cliftlands (No Kit)",
        "Diff": 11,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"str_7_bl": {
        "Desc": "Capture a Strength 7 Monster",
        "Diff": 11,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"ch_3_duo": {
        "Desc": "Chapter 3 Boss with 2 only Travelers",
        "Diff": 11,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"1_ch_4": {
        "Desc": "Complete a Chapter 4",
        "Diff": 11,
        "Types": ["chapter","progression","#_ch_4"],
        "Excludes": ["1_ch_2","1_ch_3"]
},

"20_u_evasion": {
        "Desc": "20 Unique Evasion Equipments",
        "Diff": 12,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"40_t_s_sstones": {
        "Desc": "40 Soulstone (S)'s",
        "Diff": 12,
        "Types": ["item_count","soulstone","item_set","items","#_t_s_sstones"]
},

"15_u_swords": {
        "Desc": "15 Unique Swords",
        "Diff": 12,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"8_u_stones": {
        "Desc": "8 Unique Status Stones",
        "Diff": 12,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"700_phys_atk": {
        "Desc": "700+ Physical Attack",
        "Diff": 12,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"675_phys_def": {
        "Desc": "675+ Physical Defense",
        "Diff": 12,
        "Types": ["phys_def","stats","#_phys_def"]
},

"500_critical": {
        "Desc": "500+ Critical",
        "Diff": 12,
        "Types": ["crit","stats","#_critical"]
},

"5_ss_II_sets": {
        "Desc": "5 (II) Side Stories",
        "Diff": 12,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets"]
},

"8_ss_frostlands": {
        "Desc": "8 Side Stories in Frostlands (No Kit)",
        "Diff": 12,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"8_ss_highlands": {
        "Desc": "8 Side Stories in Highlands (No Kit)",
        "Diff": 12,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"8_ss_woodlands": {
        "Desc": "8 Side Stories in Woodlands (No Kit)",
        "Diff": 12,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"40_t_nuts": {
        "Desc": "40 Nuts",
        "Diff": 13,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_nuts"]
},

"9_t_olives": {
        "Desc": "9 Olive (L)'s",
        "Diff": 13,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"550_speed": {
        "Desc": "550+ Speed",
        "Diff": 13,
        "Types": ["speed","stats","#_speed"]
},

"8_ss_riverlands": {
        "Desc": "8 Side Stories in Riverlands (No Kit)",
        "Diff": 13,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"70_t_brown_chests": {
        "Desc": "Open 70 Brown Chests",
        "Diff": 13,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"42_t_red_chests": {
        "Desc": "Open 42 Red Chests",
        "Diff": 13,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"20_u_elem_wpn": {
        "Desc": "20 Unique Elemental Non-Staff Weapons",
        "Diff": 14,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"20_u_accuracy": {
        "Desc": "20 Unique Accuracy Equipments",
        "Diff": 14,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"4_u_boss_drop": {
        "Desc": "4 Unique Boss Equipment Drops",
        "Diff": 14,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"4500_hp": {
        "Desc": "4500+ HP",
        "Diff": 14,
        "Types": ["hp","stats","#_hp"]
},

"350_sp": {
        "Desc": "350+ SP",
        "Diff": 14,
        "Types": ["sp","stats","#_sp"]
},

"28_t_purple_chests": {
        "Desc": "Open 28 Purple Chests",
        "Diff": 14,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"str_10_NPC": {
        "Desc": "Defeat a Strength 10 NPC",
        "Diff": 14,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"1_ss_post_game": {
        "Desc": "1 Post Game Side Story",
        "Diff": 14,
        "Types": ["side_stories","broad_ss_set","progression","#_ss_post_game"]
},

"35_t_pouches": {
        "Desc": "35 Money Pouches",
        "Diff": 15,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"20_t_m_nuts": {
        "Desc": "20 Nut (M)'s",
        "Diff": 15,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_m_nuts"]
},

"24_u_headgears": {
        "Desc": "24 Unique Headgears",
        "Diff": 15,
        "Types": ["broad_item_set","armor","items","#_u_headgears"]
},

"680_evasion": {
        "Desc": "680+ Evasion",
        "Diff": 15,
        "Types": ["evasion","stats","#_evasion"]
},

"7_optional_bosses": {
        "Desc": "Defeat 7 Unique Optional Bosses",
        "Diff": 15,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"12_u_lizards_bl": {
        "Desc": "Capture 12 Unique Lizardmen / Lizardking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"12_u_frogs_bl": {
        "Desc": "Capture 12 Unique Froggen / Frogking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"12_u_birds_bl": {
        "Desc": "Capture 12 Unique Birdian / Birdking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"12_u_rats_bl": {
        "Desc": "Capture 12 Unique Ratkin / Ratking",
        "Diff": 15,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"24_u_body_armors": {
        "Desc": "24 Unique Body Armors",
        "Diff": 16,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"30_u_accessories": {
        "Desc": "30 Unique Accessories",
        "Diff": 16,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","side_stories","#_u_accessories"]
},

"400_accuracy": {
        "Desc": "400+ Accuracy",
        "Diff": 16,
        "Types": ["accuracy","stats","#_accuracy"]
},

"3_ss_region_sets": {
        "Desc": "3 Side Stories in Each Region",
        "Diff": 16,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"8_ss_coastlands": {
        "Desc": "8 Side Stories in Coastlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"35_weakness_sets": {
        "Desc": "35 Revealed Weakness Sets",
        "Diff": 16,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"32_u_concoct": {
        "Desc": "32 Unique Concoctions Used",
        "Diff": 16,
        "Types": ["combat_counts","items","specific_character","combat","#_u_concoct"]
},

"40_t_pouches": {
        "Desc": "40 Money Pouches",
        "Diff": 17,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"25_u_gold_items": {
        "Desc": "25 Unique Gold Items",
        "Diff": 17,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"20_u_critical": {
        "Desc": "20 Unique Critical Equipments",
        "Diff": 17,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"25_t_s_nuts": {
        "Desc": "25 Nut (S)'s",
        "Diff": 17,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"40_u_weapons": {
        "Desc": "40 Unique Weapons",
        "Diff": 17,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"4_bottle_sets": {
        "Desc": "4 Complete Sets of Status Bottles",
        "Diff": 17,
        "Types": ["item_set","item_count","bottle","items","#_bottle_sets"]
},

"800_elem_atk": {
        "Desc": "800+ Elemental Attack",
        "Diff": 17,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"550_critical": {
        "Desc": "550+ Critical",
        "Diff": 17,
        "Types": ["crit","stats","#_critical"]
},

"6_ss_II_sets": {
        "Desc": "6 (II) Side Stories",
        "Diff": 17,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets"]
},

"40_t_town_boosts": {
        "Desc": "40 Town Boost Infos",
        "Diff": 18,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"800_elem_def": {
        "Desc": "800+ Elemental Defense",
        "Diff": 18,
        "Types": ["elem_def","stats","#_elem_def"]
},

"9_ss_highlands": {
        "Desc": "9 Side Stories in Highlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"8_ss_sunlands": {
        "Desc": "8 Side Stories in Sunlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"9_ss_riverlands": {
        "Desc": "9 Side Stories in Riverlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"2_ss_bosses": {
        "Desc": "Defeat 2 Side Story Bosses",
        "Diff": 18,
        "Types": ["ss_set","ss_boss","boss","side_stories","#_ss_bosses"]
},

"20_u_bl": {
        "Desc": "Capture 20 Unique Monsters",
        "Diff": 18,
        "Types": ["combat_counts","specific_character","beast_lore","combat","#_u_bl"]
},

"6_ch_2": {
        "Desc": "Complete 6 Chapter 2's",
        "Diff": 18,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2"]
},

"5_u_forbidden": {
        "Desc": "5 Unique Forbbiden Equipments",
        "Diff": 18,
        "Types": ["item_set","weapon","forbidden","items","#_u_forbidden"]
},

"6_u_necklaces": {
        "Desc": "6 Unique Necklaces",
        "Diff": 18,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"9_ss_frostlands": {
        "Desc": "9 Side Stories in Frostlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_frostlands","side_stories","ss_boss","#_ss_frostlands"]
},

"80_t_brown_chests": {
        "Desc": "Open 80 Brown Chests",
        "Diff": 18,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"48_t_red_chests": {
        "Desc": "Open 48 Red Chests",
        "Diff": 18,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"90_t_chests": {
        "Desc": "Open 90 Total Chests",
        "Diff": 18,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
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

"9_ss_flatlands": {
        "Desc": "9 Side Stories in Flatlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"32_t_purple_chests": {
        "Desc": "Open 32 Purple Chests",
        "Diff": 18,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"8_optional_bosses": {
        "Desc": "Defeat 8 Unique Optional Bosses",
        "Diff": 18,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"40_t_m_sstones": {
        "Desc": "40 Soulstone (M)'s",
        "Diff": 19,
        "Types": ["item_count","soulstone","item_set","items","progression","#_t_m_sstones"]
},

"45_u_armors": {
        "Desc": "45 Unique Armors",
        "Diff": 19,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"4_ss_III_sets": {
        "Desc": "4 (III) Side Stories",
        "Diff": 19,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets"]
},

"9_ss_cliftlands": {
        "Desc": "9 Side Stories in Cliftlands (No Kit)",
        "Diff": 19,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"3_ch_3": {
        "Desc": "Complete 3 Chapter 3's",
        "Diff": 19,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","1_ch_3","2_ch_3"]
},

"6_u_dragon": {
        "Desc": "6 Unique Dragon Equipments",
        "Diff": 19,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"25_u_speed": {
        "Desc": "25 Unique Speed Equipments",
        "Diff": 19,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"5_u_boss_drop": {
        "Desc": "5 Unique Boss Equipment Drops",
        "Diff": 19,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"30_side_stories": {
        "Desc": "30 Side Stories",
        "Diff": 19,
        "Types": ["broad_ss_set","side_stories","ss_II","#_side_stories"]
},

"9_ss_woodlands": {
        "Desc": "9 Side Stories in Woodlands (No Kit)",
        "Diff": 19,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"7_ch_2": {
        "Desc": "Complete 7 Chapter 2's",
        "Diff": 19,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2"]
},

"16_u_shields": {
        "Desc": "16 Unique Shields",
        "Diff": 20,
        "Types": ["broad_item_set","armor","items","progression","#_u_shields"]
},

"400_sp": {
        "Desc": "400+ SP",
        "Diff": 20,
        "Types": ["sp","stats","#_sp"]
},

"str_8_bl": {
        "Desc": "Capture a Strength 8 Monster",
        "Diff": 20,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"7_u_phys_staves": {
        "Desc": "7 Unique Physical Staves",
        "Diff": 21,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"4_alluring": {
        "Desc": "4 Alluring Ribbons",
        "Diff": 21,
        "Types": ["item_set","accessory","side_stories","items","progression","#_alluring"]
},

"750_phys_atk": {
        "Desc": "750+ Physical Attack",
        "Diff": 21,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"730_evasion": {
        "Desc": "730+ Evasion",
        "Diff": 21,
        "Types": ["evasion","stats","#_evasion"]
},

"14_u_magic_bl": {
        "Desc": "Capture 14 Unique Elemental Themed Enemies",
        "Diff": 21,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"ch_3_slow": {
        "Desc": "Chapter 3 Boss without Soulstones or Vets",
        "Diff": 21,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"4_u_rune": {
        "Desc": "4 Unique Rune Weapons",
        "Diff": 22,
        "Types": ["item_set","weapon","elem_atk","items","progression","#_u_rune"]
},

"900_elem_def": {
        "Desc": "900+ Elemental Defense",
        "Diff": 22,
        "Types": ["elem_def","stats","#_elem_def"]
},

"600_critical": {
        "Desc": "600+ Critical",
        "Diff": 22,
        "Types": ["crit","stats","#_critical"]
},

"15_u_lizards_bl": {
        "Desc": "Capture 15 Unique Lizardmen / Lizardking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"15_u_frogs_bl": {
        "Desc": "Capture 15 Unique Froggen / Frogking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"15_u_birds_bl": {
        "Desc": "Capture 15 Unique Birdian / Birdking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"15_u_rats_bl": {
        "Desc": "Capture 15 Unique Ratkin / Ratking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"ch_3_no_boost": {
        "Desc": "Chapter 3 Boss without Boosting",
        "Diff": 22,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"20_u_spears": {
        "Desc": "20 Unique Spears",
        "Diff": 22,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"9_optional_bosses": {
        "Desc": "Defeat 9 Unique Optional Bosses",
        "Diff": 22,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"dreisang": {
        "Desc": "Defeat Dreisang",
        "Diff": 22,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"1_advanced_bosses": {
        "Desc": "Defeat 1 Advanced Job Boss",
        "Diff": 22,
        "Types": ["boss","subjob","advanced_boss","exploration","#_advanced_bosses"]
},

"8_ch_2": {
        "Desc": "Complete 8 Chapter 2's",
        "Diff": 22,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1","8_ch_1","1_ch_2","2_ch_2","3_ch_2","4_ch_2","5_ch_2","6_ch_2","7_ch_2"]
},

"20_t_elem_amulets": {
        "Desc": "20 Elemental Reduction Amulets/Charms",
        "Diff": 23,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","progression","side_stories","#_t_elem_amulets"]
},

"850_elem_atk": {
        "Desc": "850+ Elemental Attack",
        "Diff": 23,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"4_ss_region_sets": {
        "Desc": "4 Side Stories in Each Region",
        "Diff": 23,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"7_ss_II_sets": {
        "Desc": "7 (II) Side Stories",
        "Diff": 23,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets"]
},

"9_ss_coastlands": {
        "Desc": "9 Side Stories in Coastlands (No Kit)",
        "Diff": 23,
        "Types": ["ss_set","ss_coastlands","side_stories","ss_boss","#_ss_coastlands"]
},

"10_ss_riverlands": {
        "Desc": "10 Side Stories in Riverlands (No Kit)",
        "Diff": 23,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"30_t_l_sstones": {
        "Desc": "30 Soulstone (L)'s",
        "Diff": 23,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"12_t_olives": {
        "Desc": "12 Olive (L)'s",
        "Diff": 23,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"20_t_stones": {
        "Desc": "20 Status Stones",
        "Diff": 23,
        "Types": ["item_set","item_count","status_stone","accessory","items","progression","#_t_stones"]
},

"105_t_chests": {
        "Desc": "Open 105 Total Chests",
        "Diff": 23,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"25_u_bl": {
        "Desc": "Capture 25 Unique Monsters",
        "Diff": 23,
        "Types": ["combat_counts","specific_character","beast_lore","combat","#_u_bl"]
},

"20_u_swords": {
        "Desc": "20 Unique Swords",
        "Diff": 24,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"20_u_axes": {
        "Desc": "20 Unique Axes",
        "Diff": 24,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"10_ss_cliftlands": {
        "Desc": "10 Side Stories in Cliftlands (No Kit)",
        "Diff": 24,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"40_weakness_sets": {
        "Desc": "40 Revealed Weakness Sets",
        "Diff": 24,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"4_ch_3": {
        "Desc": "Complete 4 Chapter 3's",
        "Diff": 24,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2","4_ch_2","1_ch_3","2_ch_3","3_ch_3"]
},

"450_accuracy": {
        "Desc": "450+ Accuracy",
        "Diff": 24,
        "Types": ["accuracy","stats","#_accuracy"]
},

"600_speed": {
        "Desc": "600+ Speed",
        "Diff": 24,
        "Types": ["speed","stats","#_speed"]
},

"25_u_accuracy": {
        "Desc": "25 Unique Accuracy Equipments",
        "Diff": 25,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"6_u_boss_drop": {
        "Desc": "6 Unique Boss Equipment Drops",
        "Diff": 25,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"16_t_l_nuts": {
        "Desc": "16 Nut (L)'s",
        "Diff": 25,
        "Types": ["item_count","nut","item_set","items","progression","side_stories","#_t_l_nuts"]
},

"20_u_bows": {
        "Desc": "20 Unique Bows",
        "Diff": 25,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"7_u_necklaces": {
        "Desc": "7 Unique Necklaces",
        "Diff": 25,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"5_ss_III_sets": {
        "Desc": "5 (III) Side Stories",
        "Diff": 25,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","1_ss_III_sets","2_ss_III_sets","3_ss_III_sets","4_ss_III_sets"]
},

"9_ss_sunlands": {
        "Desc": "9 Side Stories in Sunlands (No Kit)",
        "Diff": 25,
        "Types": ["ss_set","ss_sunlands","side_stories","ss_boss","#_ss_sunlands"]
},

"12_t_items": {
        "Desc": "12 Pages in All Items",
        "Diff": 25,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"825_phys_def": {
        "Desc": "825+ Physical Defense",
        "Diff": 25,
        "Types": ["phys_def","stats","#_phys_def"]
},

"40_side_stories": {
        "Desc": "40 Side Stories",
        "Diff": 25,
        "Types": ["broad_ss_set","side_stories","ss_II","#_side_stories"]
},

"8_ss_II_sets": {
        "Desc": "8 (II) Side Stories",
        "Diff": 25,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets","4_ss_II_sets","5_ss_II_sets","6_ss_II_sets","7_ss_II_sets"]
},

"3_ss_bosses": {
        "Desc": "Defeat 3 Side Story Bosses",
        "Diff": 25,
        "Types": ["ss_set","ss_boss","boss","side_stories","#_ss_bosses"]
},

"90_t_brown_chests": {
        "Desc": "Open 90 Brown Chests",
        "Diff": 25,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"54_t_red_chests": {
        "Desc": "Open 54 Red Chests",
        "Diff": 25,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"steorra": {
        "Desc": "Defeat Steorra",
        "Diff": 25,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
},

"balogar": {
        "Desc": "Defeat Balogar",
        "Diff": 25,
        "Types": ["boss","subjob","advanced_boss","exploration"],
        "Excludes": ["1_advanced_bosses"]
}

};
