bingoGenerator = require("./generators/generator_bases/synerGen.js");

//List made by Doid
//This is the Short game length Variant
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

"5_u_gold_items": {
        "Desc": "5 Unique Gold Items",
        "Diff": 1,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"4_u_iron": {
        "Desc": "4 Unique Iron Equipments",
        "Diff": 1,
        "Types": ["item_set","armor","weapon","items","#_u_iron"]
},

"3_u_silver": {
        "Desc": "3 Unique Silver Equipments",
        "Diff": 1,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"3_u_arcane": {
        "Desc": "3 Unique Arcane Weapons",
        "Diff": 1,
        "Types": ["item_set","weapon","elem_atk","items","#_u_arcane"]
},

"1_u_magus": {
        "Desc": "1 Magus Weapon",
        "Diff": 1,
        "Types": ["item_set","weapon","elem_atk","items","#_u_magus"]
},

"5_u_speed": {
        "Desc": "5 Unique Speed Equipments",
        "Diff": 1,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"5_u_accuracy": {
        "Desc": "5 Unique Accuracy Equipments",
        "Diff": 1,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"4_u_shields": {
        "Desc": "4 Unique Shields",
        "Diff": 1,
        "Types": ["broad_item_set","armor","items","#_u_shields"]
},

"1_ss_flatlands": {
        "Desc": "1 Side Story in Flatlands (No Kit)",
        "Diff": 1,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"1_ss_coastlands": {
        "Desc": "1 Side Story in Coastlands (No Kit)",
        "Diff": 1,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"chapter_1_chests": {
        "Desc": "Open All Chests in a Chapter 1 Dungeon",
        "Diff": 1,
        "Types": ["chest","chest_set","exploration"]
},

"5_u_iron": {
        "Desc": "5 Unique Iron Equipments",
        "Diff": 2,
        "Types": ["item_set","armor","weapon","items","#_u_iron"]
},

"5_u_evasion": {
        "Desc": "5 Unique Evasion Equipments",
        "Diff": 2,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"5_t_s_nuts": {
        "Desc": "5 Nut (S)'s",
        "Diff": 2,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"6_u_sstones": {
        "Desc": "6 Unique Soulstones",
        "Diff": 2,
        "Types": ["broad_item_set","soulstone","items","#_u_sstones"]
},

"10_t_brown_chests": {
        "Desc": "Open 10 Brown Chests",
        "Diff": 2,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"6_t_red_chests": {
        "Desc": "Open 6 Red Chests",
        "Diff": 2,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"5_weakness_sets": {
        "Desc": "5 Revealed Weakness Sets",
        "Diff": 2,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"2_bg_yolo": {
        "Desc": "Use BG Lv. 4 at total of 2 times in one fight",
        "Diff": 2,
        "Types": ["extended_combat","combat","#_bg_yolo"]
},

"5_t_pouches": {
        "Desc": "5 Money Pouches",
        "Diff": 2,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"4_u_silver": {
        "Desc": "4 Unique Silver Equipments",
        "Diff": 2,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"5_u_critical": {
        "Desc": "5 Unique Critical Equipments",
        "Diff": 2,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"5_u_staves": {
        "Desc": "5 Unique Staves",
        "Diff": 2,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"3_u_earrings": {
        "Desc": "3 Unique Earrings",
        "Diff": 2,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_earrings"]
},

"4_t_purple_chests": {
        "Desc": "Open 4 Purple Chests",
        "Diff": 2,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"15_t_chests": {
        "Desc": "Open 15 Total Chests",
        "Diff": 2,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"2_u_magus": {
        "Desc": "2 Unique Magus Weapons",
        "Diff": 3,
        "Types": ["item_set","weapon","elem_atk","items","#_u_magus"]
},

"10_t_s_sstones": {
        "Desc": "10 Soulstone (S)'s",
        "Diff": 3,
        "Types": ["item_count","soulstone","item_set","items","#_t_s_sstones"]
},

"6_u_headgears": {
        "Desc": "6 Unique Headgears",
        "Diff": 3,
        "Types": ["broad_item_set","armor","items","#_u_headgears"]
},

"6_u_body_armors": {
        "Desc": "6 Unique Body Armors",
        "Diff": 3,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"3_u_elem_reduce": {
        "Desc": "3 Unique Elemental Reduction Equipments",
        "Diff": 3,
        "Types": ["item_set","armor","accessory","elem_reduce","items","#_u_elem_reduce"]
},

"5_t_bottles": {
        "Desc": "5 Status Bottles",
        "Diff": 3,
        "Types": ["item_set","item_count","bottle","items","#_t_bottles"]
},

"1_bottle_sets": {
        "Desc": "1 Complete Set of Status Bottles",
        "Diff": 3,
        "Types": ["item_set","item_count","bottle","items","#_bottle_sets"]
},

"1_ss_frostlands": {
        "Desc": "1 Side Story in Frostlands (No Kit)",
        "Diff": 3,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"str_4_NPC": {
        "Desc": "Defeat a Strength 4 NPC",
        "Diff": 3,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"all_pouches": {
        "Desc": "All 5 Money Pouches",
        "Diff": 4,
        "Types": ["item_set","gold_item","items"]
},

"10_t_pouches": {
        "Desc": "10 Money Pouches",
        "Diff": 4,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"6_u_iron": {
        "Desc": "6 Unique Iron Equipments",
        "Diff": 4,
        "Types": ["item_set","armor","weapon","items","#_u_iron"]
},

"4_u_arcane": {
        "Desc": "4 Unique Arcane Weapons",
        "Diff": 4,
        "Types": ["item_set","weapon","elem_atk","items","#_u_arcane"]
},

"5_u_elem_wpn": {
        "Desc": "5 Unique Elemental Non-Staff Weapons",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"5_t_m_nuts": {
        "Desc": "5 Nut (M)'s",
        "Diff": 4,
        "Types": ["item_count","nut","item_set","items","#_t_m_nuts"]
},

"5_u_swords": {
        "Desc": "5 Unique Swords",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"5_u_daggers": {
        "Desc": "5 Unique Daggers",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"5_u_axes": {
        "Desc": "5 Unique Axes",
        "Diff": 4,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"3_u_rings": {
        "Desc": "3 Unique Rings",
        "Diff": 4,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_rings"]
},

"2_ss_flatlands": {
        "Desc": "2 Side Stories in Flatlands (No Kit)",
        "Diff": 4,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"2_ss_coastlands": {
        "Desc": "2 Side Stories in Coastlands (No Kit)",
        "Diff": 4,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"1_ss_highlands": {
        "Desc": "1 Side Story in Highlands (No Kit)",
        "Diff": 4,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"1_ss_sunlands": {
        "Desc": "1 Side Story in Sunlands (No Kit)",
        "Diff": 4,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"1_ss_riverlands": {
        "Desc": "1 Side Story in Riverlands (No Kit)",
        "Diff": 4,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"1_ss_cliftlands": {
        "Desc": "1 Side Story in Cliftlands (No Kit)",
        "Diff": 4,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"1_ss_woodlands": {
        "Desc": "1 Side Story in Woodlands (No Kit)",
        "Diff": 4,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"3_u_bl": {
        "Desc": "Capture 3 Unique Monsters",
        "Diff": 4,
        "Types": ["combat_counts","specific_character","beast_lore","combat","#_u_bl"]
},

"3_dead_boss": {
        "Desc": "Defeat a boss with 3 Travelers dead",
        "Diff": 4,
        "Types": ["extended_combat","combat_challenge","combat"]
},

"4_bg_yolo": {
        "Desc": "Use BG Lv. 4 at total of 4 times in one fight",
        "Diff": 4,
        "Types": ["extended_combat","combat","#_bg_yolo"]
},

"10_u_gold_items": {
        "Desc": "10 Unique Gold Items",
        "Diff": 5,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"2_u_phys_staves": {
        "Desc": "2 Unique Physical Staves",
        "Diff": 5,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"3_t_l_nuts": {
        "Desc": "3 Nut (L)'s",
        "Diff": 5,
        "Types": ["item_count","nut","item_set","items","#_t_l_nuts"]
},

"5_u_spears": {
        "Desc": "5 Unique Spears",
        "Diff": 5,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"5_u_bows": {
        "Desc": "5 Unique Bows",
        "Diff": 5,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"3_t_strong_amulets": {
        "Desc": "3 Strong Elemental Reduction Amulets",
        "Diff": 5,
        "Types": ["item_set","item_count","accessory","elem_reduce","items","#_t_strong_amulets"]
},

"2_u_bracelets": {
        "Desc": "2 Unique Bracelets",
        "Diff": 5,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"1_alluring": {
        "Desc": "1 Alluring Ribbon",
        "Diff": 5,
        "Types": ["item_set","accessory","side_stories","items","#_alluring"]
},

"ss_opt_6": {
        "Desc": "SS: The Weaver's Predicament",
        "Diff": 5,
        "Types": ["ss_specific","ss_cliftlands","side_stories"]
},

"20_t_brown_chests": {
        "Desc": "Open 20 Brown Chests",
        "Diff": 5,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"12_t_red_chests": {
        "Desc": "Open 12 Red Chests",
        "Diff": 5,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"3_u_lizards_bl": {
        "Desc": "Capture 3 Unique Lizardmen / Lizardking",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"3_u_frogs_bl": {
        "Desc": "Capture 3 Unique Froggen / Frogking",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"3_u_birds_bl": {
        "Desc": "Capture 3 Unique Birdian / Birdking",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"3_u_rats_bl": {
        "Desc": "Capture 3 Unique Ratkin / Ratking",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"2_u_magic_bl": {
        "Desc": "Capture 2 Unique Elemental Themed Enemies",
        "Diff": 5,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"5_ch_1": {
        "Desc": "Complete 5 Chapter 1's",
        "Diff": 5,
        "Types": ["chapter","progression","#_ch_1"]
},

"5_u_silver": {
        "Desc": "5 Unique Silver Equipments",
        "Diff": 6,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"1_u_soul": {
        "Desc": "1 Soul Weapon",
        "Diff": 6,
        "Types": ["item_set","weapon","elem_atk","items","#_u_soul"]
},

"2_u_adamantine": {
        "Desc": "2 Unique Adamantine Equipments",
        "Diff": 6,
        "Types": ["item_set","weapon","elem_atk","armor","items","#_u_adamantine"]
},

"10_t_nuts": {
        "Desc": "10 Nuts",
        "Diff": 6,
        "Types": ["item_count","nut","item_set","items","#_t_nuts"]
},

"5_u_earrings": {
        "Desc": "5 Unique Earrings",
        "Diff": 6,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_earrings"]
},

"1500_hp": {
        "Desc": "1500+ HP",
        "Diff": 6,
        "Types": ["hp","stats","#_hp"]
},

"1_ss_II_sets": {
        "Desc": "1 (II) Side Story",
        "Diff": 6,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"]
},

"2_ss_frostlands": {
        "Desc": "2 Side Stories in Frostlands (No Kit)",
        "Diff": 6,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"ss_opt_7": {
        "Desc": "SS: A Cub with No Name",
        "Diff": 6,
        "Types": ["ss_specific","ss_woodlands","side_stories"]
},

"8_t_purple_chests": {
        "Desc": "Open 8 Purple Chests",
        "Diff": 6,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"10_weakness_sets": {
        "Desc": "10 Revealed Weakness Sets",
        "Diff": 6,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"1_npc_summons": {
        "Desc": "Expend all Summons on an NPC",
        "Diff": 6,
        "Types": ["combat_counts","extended_combat","combat","#_npc_summons"]
},

"2_bl_summons": {
        "Desc": "Expend all Summon Uses on 2 Monsters",
        "Diff": 6,
        "Types": ["combat_counts","extended_combat","combat","#_bl_summons"]
},

"3_t_olives": {
        "Desc": "3 Olive (L)'s",
        "Diff": 7,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"2_u_forbidden": {
        "Desc": "2 Unique Forbbiden Equipments",
        "Diff": 7,
        "Types": ["item_set","weapon","forbidden","items","#_u_forbidden"]
},

"7_u_shields": {
        "Desc": "7 Unique Shields",
        "Diff": 7,
        "Types": ["broad_item_set","armor","items","#_u_shields"]
},

"1_u_necklaces": {
        "Desc": "1 Necklace",
        "Diff": 7,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"4_u_town_boosts": {
        "Desc": "Inquire/Scrutinize 4 Unique Town Boosts",
        "Diff": 7,
        "Types": ["item_set","info_counts","items","#_u_town_boosts"]
},

"10_t_town_boosts": {
        "Desc": "10 Town Boost Infos",
        "Diff": 7,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"3_t_items": {
        "Desc": "3 Pages in All Items",
        "Diff": 7,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"550_phys_atk": {
        "Desc": "550+ Physical Attack",
        "Diff": 7,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"550_elem_atk": {
        "Desc": "550+ Elemental Attack",
        "Diff": 7,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"200_accuracy": {
        "Desc": "200+ Accuracy",
        "Diff": 7,
        "Types": ["accuracy","stats","#_accuracy"]
},

"300_speed": {
        "Desc": "300+ Speed",
        "Diff": 7,
        "Types": ["speed","stats","#_speed"]
},

"430_evasion": {
        "Desc": "430+ Evasion",
        "Diff": 7,
        "Types": ["evasion","stats","#_evasion"]
},

"3_ss_coastlands": {
        "Desc": "3 Side Stories in Coastlands (No Kit)",
        "Diff": 7,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"2_ss_highlands": {
        "Desc": "2 Side Stories in Highlands (No Kit)",
        "Diff": 7,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"2_ss_sunlands": {
        "Desc": "2 Side Stories in Sunlands (No Kit)",
        "Diff": 7,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"2_ss_cliftlands": {
        "Desc": "2 Side Stories in Cliftlands (No Kit)",
        "Diff": 7,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"2_ss_woodlands": {
        "Desc": "2 Side Stories in Woodlands (No Kit)",
        "Diff": 7,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"1_optional_bosses": {
        "Desc": "Defeat 1 Optional Boss",
        "Diff": 7,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"8_u_concoct": {
        "Desc": "8 Unique Concoctions Used",
        "Diff": 7,
        "Types": ["combat_counts","items","specific_character","combat","#_u_concoct"]
},

"str_5_NPC": {
        "Desc": "Defeat a Strength 5 NPC",
        "Diff": 7,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"6_bg_yolo": {
        "Desc": "Use BG Lv. 4 at total of 6 times in one fight",
        "Diff": 7,
        "Types": ["extended_combat","combat","#_bg_yolo"]
},

"6_u_silver": {
        "Desc": "6 Unique Silver Equipments",
        "Diff": 8,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"1_u_rune": {
        "Desc": "1 Rune Weapon",
        "Diff": 8,
        "Types": ["item_set","weapon","elem_atk","items","#_u_rune"]
},

"10_u_speed": {
        "Desc": "10 Unique Speed Equipments",
        "Diff": 8,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"10_t_m_sstones": {
        "Desc": "10 Soulstone (M)'s",
        "Diff": 8,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"2_u_stones": {
        "Desc": "2 Unique Status Stones",
        "Diff": 8,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"5_t_elem_amulets": {
        "Desc": "5 Elemental Reduction Amulets/Charms",
        "Diff": 8,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","#_t_elem_amulets"]
},

"3_u_bracelets": {
        "Desc": "3 Unique Bracelets",
        "Diff": 8,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"10_u_accessories": {
        "Desc": "10 Unique Accessories",
        "Diff": 8,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","#_u_accessories"]
},

"2_ss_riverlands": {
        "Desc": "2 Side Stories in Riverlands (No Kit)",
        "Diff": 8,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"ss_opt_2": {
        "Desc": "SS: An Exotic Aroma",
        "Diff": 8,
        "Types": ["ss_specific","ss_coastlands","side_stories"]
},

"ss_opt_4": {
        "Desc": "SS: A Corpse with No Name",
        "Diff": 8,
        "Types": ["ss_specific","ss_riverlands","side_stories"]
},

"ss_opt_5": {
        "Desc": "SS: The Bandit's Code",
        "Diff": 8,
        "Types": ["ss_specific","ss_cliftlands","specific_character","side_stories"]
},

"30_t_chests": {
        "Desc": "Open 30 Total Chests",
        "Diff": 8,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"chapter_2_chests": {
        "Desc": "Open All Chests in a Chapter 2 Dungeon",
        "Diff": 8,
        "Types": ["chest","chest_set","exploration"]
},

"6_ch_1": {
        "Desc": "Complete 6 Chapter 1's",
        "Diff": 8,
        "Types": ["chapter","progression","#_ch_1"],
        "Excludes": ["5_ch_1"]
},

"7_u_iron": {
        "Desc": "7 Unique Iron Equipments",
        "Diff": 9,
        "Types": ["item_set","armor","weapon","items","#_u_iron"]
},

"3_u_magus": {
        "Desc": "3 Unique Magus Weapons",
        "Diff": 9,
        "Types": ["item_set","weapon","elem_atk","items","#_u_magus"]
},

"2_u_soul": {
        "Desc": "2 Unique Soul Weapons",
        "Diff": 9,
        "Types": ["item_set","weapon","elem_atk","items","#_u_soul"]
},

"3_u_phys_staves": {
        "Desc": "3 Unique Physical Staves",
        "Diff": 9,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"1_u_boss_drop": {
        "Desc": "1 Boss Equipment Drop",
        "Diff": 9,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"10_t_s_nuts": {
        "Desc": "10 Nut (S)'s",
        "Diff": 9,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"12_u_headgears": {
        "Desc": "12 Unique Headgears",
        "Diff": 9,
        "Types": ["broad_item_set","armor","items","#_u_headgears"]
},

"15_u_armors": {
        "Desc": "15 Unique Armors",
        "Diff": 9,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"5_t_stones": {
        "Desc": "5 Status Stones",
        "Diff": 9,
        "Types": ["item_set","item_count","status_stone","accessory","items","#_t_stones"]
},

"150_sp": {
        "Desc": "150+ SP",
        "Diff": 9,
        "Types": ["sp","stats","#_sp"]
},

"3_ss_frostlands": {
        "Desc": "3 Side Stories in Frostlands (No Kit)",
        "Diff": 9,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"3_ss_flatlands": {
        "Desc": "3 Side Stories in Flatlands (No Kit)",
        "Diff": 9,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"ss_opt_3": {
        "Desc": "SS: Performance Art",
        "Diff": 9,
        "Types": ["ss_specific","ss_highlands","side_stories"]
},

"ss_chain_6": {
        "Desc": "SS: Meryl, Lost then Found (III)",
        "Diff": 9,
        "Types": ["ss_specific","ss_riverlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"4_u_str_bl": {
        "Desc": "4 Different Strength Monsters in Beast Lore",
        "Diff": 9,
        "Types": ["combat_counts","specific_character","beast_lore","extended_combat","combat_set","combat","#_u_str_bl"]
},

"str_4_bl": {
        "Desc": "Capture a Strength 4 Monster",
        "Diff": 9,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"1_ch_2": {
        "Desc": "Complete a Chapter 2",
        "Diff": 9,
        "Types": ["chapter","progression","#_ch_2"]
},

"15_t_pouches": {
        "Desc": "15 Money Pouches",
        "Diff": 10,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"3_u_adamantine": {
        "Desc": "3 Unique Adamantine Equipments",
        "Diff": 10,
        "Types": ["item_set","weapon","elem_atk","armor","items","#_u_adamantine"]
},

"10_u_evasion": {
        "Desc": "10 Unique Evasion Equipments",
        "Diff": 10,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"10_u_accuracy": {
        "Desc": "10 Unique Accuracy Equipments",
        "Diff": 10,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"10_t_m_nuts": {
        "Desc": "10 Nut (M)'s",
        "Diff": 10,
        "Types": ["item_count","nut","item_set","items","#_t_m_nuts"]
},

"12_u_sstones": {
        "Desc": "12 Unique Soulstones",
        "Diff": 10,
        "Types": ["broad_item_set","soulstone","items","#_u_sstones"]
},

"12_u_body_armors": {
        "Desc": "12 Unique Body Armors",
        "Diff": 10,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"6_u_elem_reduce": {
        "Desc": "6 Unique Elemental Reduction Equipments",
        "Diff": 10,
        "Types": ["item_set","armor","accessory","elem_reduce","items","#_u_elem_reduce"]
},

"600_elem_atk": {
        "Desc": "600+ Elemental Attack",
        "Diff": 10,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"350_speed": {
        "Desc": "350+ Speed",
        "Diff": 10,
        "Types": ["speed","stats","#_speed"]
},

"3_ss_highlands": {
        "Desc": "3 Side Stories in Highlands (No Kit)",
        "Diff": 10,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"3_ss_sunlands": {
        "Desc": "3 Side Stories in Sunlands (No Kit)",
        "Diff": 10,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"3_ss_cliftlands": {
        "Desc": "3 Side Stories in Cliftlands (No Kit)",
        "Diff": 10,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"3_ss_woodlands": {
        "Desc": "3 Side Stories in Woodlands (No Kit)",
        "Diff": 10,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"ss_opt_1": {
        "Desc": "SS: Left Behind",
        "Diff": 10,
        "Types": ["ss_specific","ss_coastlands","side_stories"]
},

"ss_chain_4": {
        "Desc": "SS: Noelle, Seeker of Knowledge (III)",
        "Diff": 10,
        "Types": ["ss_specific","ss_highlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"ss_chain_5": {
        "Desc": "SS: Ria, Born to Roam (III)",
        "Diff": 10,
        "Types": ["ss_specific","ss_sunlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"ss_chain_9": {
        "Desc": "SS: In Search of Father (II)",
        "Diff": 10,
        "Types": ["ss_specific","ss_chain","ss_II","side_stories"]
},

"30_t_brown_chests": {
        "Desc": "Open 30 Brown Chests",
        "Diff": 10,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"18_t_red_chests": {
        "Desc": "Open 18 Red Chests",
        "Diff": 10,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"6_u_bl": {
        "Desc": "Capture 6 Unique Monsters",
        "Diff": 10,
        "Types": ["combat_counts","specific_character","beast_lore","combat","#_u_bl"]
},

"8_bg_yolo": {
        "Desc": "Use BG Lv. 4 at total of 8 times in one fight",
        "Diff": 10,
        "Types": ["extended_combat","combat","#_bg_yolo"]
},

"20_t_s_sstones": {
        "Desc": "20 Soulstone (S)'s",
        "Diff": 11,
        "Types": ["item_count","soulstone","item_set","items","#_t_s_sstones"]
},

"450_phys_def": {
        "Desc": "450+ Physical Defense",
        "Diff": 11,
        "Types": ["phys_def","stats","#_phys_def"]
},

"400_elem_def": {
        "Desc": "400+ Elemental Defense",
        "Diff": 11,
        "Types": ["elem_def","stats","#_elem_def"]
},

"300_critical": {
        "Desc": "300+ Critical",
        "Diff": 11,
        "Types": ["crit","stats","#_critical"]
},

"ss_collect_1": {
        "Desc": "SS: Here Be Dragons",
        "Diff": 11,
        "Types": ["ss_specific","ss_frostlands","side_stories"]
},

"12_t_purple_chests": {
        "Desc": "Open 12 Purple Chests",
        "Diff": 11,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"2_optional_bosses": {
        "Desc": "Defeat 2 Unique Optional Bosses",
        "Diff": 11,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"15_weakness_sets": {
        "Desc": "15 Revealed Weakness Sets",
        "Diff": 11,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"2_npc_summons": {
        "Desc": "Expend all Summons on an NPC 2 times",
        "Diff": 11,
        "Types": ["combat_counts","extended_combat","combat","#_npc_summons"]
},

"4_bl_summons": {
        "Desc": "Expend all Summon Uses on 4 Monsters",
        "Diff": 11,
        "Types": ["combat_counts","extended_combat","combat","#_bl_summons"]
},

"7_ch_1": {
        "Desc": "Complete 7 Chapter 1's",
        "Diff": 11,
        "Types": ["chapter","progression","#_ch_1"],
        "Excludes": ["5_ch_1","6_ch_1"]
},

"7_u_silver": {
        "Desc": "7 Unique Silver Equipments",
        "Diff": 12,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"2_u_dragon": {
        "Desc": "2 Unique Dragon Equipments",
        "Diff": 12,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"4_u_magus": {
        "Desc": "4 Unique Magus Weapons",
        "Diff": 12,
        "Types": ["item_set","weapon","elem_atk","items","#_u_magus"]
},

"10_u_axes": {
        "Desc": "10 Unique Axes",
        "Diff": 12,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"10_u_staves": {
        "Desc": "10 Unique Staves",
        "Diff": 12,
        "Types": ["broad_item_set","weapon","items","#_u_staves"]
},

"20_u_weapons": {
        "Desc": "20 Unique Weapons",
        "Diff": 12,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"200_sp": {
        "Desc": "200+ SP",
        "Diff": 12,
        "Types": ["sp","stats","#_sp"]
},

"1_ss_region_sets": {
        "Desc": "1 Side Story in Each Region",
        "Diff": 12,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"2_ss_II_sets": {
        "Desc": "2 (II) Side Stories",
        "Diff": 12,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets"]
},

"4_ss_frostlands": {
        "Desc": "4 Side Stories in Frostlands (No Kit)",
        "Diff": 12,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"4_ss_coastlands": {
        "Desc": "4 Side Stories in Coastlands (No Kit)",
        "Diff": 12,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"ss_chain_1": {
        "Desc": "SS: Sir Miles, Servant of the Flame (III)",
        "Diff": 12,
        "Types": ["ss_specific","ss_frostlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"ss_chain_2": {
        "Desc": "SS: Theracio's Tutelage (III)",
        "Diff": 12,
        "Types": ["ss_specific","ss_flatlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"ss_chain_8": {
        "Desc": "SS: Ashlan the Beastmaster (III)",
        "Diff": 12,
        "Types": ["ss_specific","ss_woodlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"str_6_NPC": {
        "Desc": "Defeat a Strength 6 NPC",
        "Diff": 12,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"10_u_critical": {
        "Desc": "10 Unique Critical Equipments",
        "Diff": 13,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"5_t_l_nuts": {
        "Desc": "5 Nut (L)'s",
        "Diff": 13,
        "Types": ["item_count","nut","item_set","items","#_t_l_nuts"]
},

"5_u_rings": {
        "Desc": "5 Unique Rings",
        "Diff": 13,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_rings"]
},

"2_u_necklaces": {
        "Desc": "2 Unique Necklaces",
        "Diff": 13,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"10_t_bottles": {
        "Desc": "10 Status Bottles",
        "Diff": 13,
        "Types": ["item_set","item_count","bottle","items","#_t_bottles"]
},

"2_bottle_sets": {
        "Desc": "2 Complete Sets of Status Bottles",
        "Diff": 13,
        "Types": ["item_set","item_count","bottle","items","#_bottle_sets"]
},

"2500_hp": {
        "Desc": "2500+ HP",
        "Diff": 13,
        "Types": ["hp","stats","#_hp"]
},

"650_elem_atk": {
        "Desc": "650+ Elemental Attack",
        "Diff": 13,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"250_accuracy": {
        "Desc": "250+ Accuracy",
        "Diff": 13,
        "Types": ["accuracy","stats","#_accuracy"]
},

"480_evasion": {
        "Desc": "480+ Evasion",
        "Diff": 13,
        "Types": ["evasion","stats","#_evasion"]
},

"10_side_stories": {
        "Desc": "10 Side Stories",
        "Diff": 13,
        "Types": ["broad_ss_set","side_stories","#_side_stories"]
},

"3_ss_riverlands": {
        "Desc": "3 Side Stories in Riverlands (No Kit)",
        "Diff": 13,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"4_ss_cliftlands": {
        "Desc": "4 Side Stories in Cliftlands (No Kit)",
        "Diff": 13,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"ss_boss_1": {
        "Desc": "SS: The Slumbering Giant",
        "Diff": 13,
        "Types": ["ss_specific","ss_frostlands","ss_boss","specific_character","boss","side_stories"]
},

"ss_chain_10": {
        "Desc": "SS: Daughter of the Dark God (II)",
        "Diff": 13,
        "Types": ["ss_specific","ss_chain","ss_II","side_stories"]
},

"6_u_lizards_bl": {
        "Desc": "Capture 6 Unique Lizardmen / Lizardking",
        "Diff": 13,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"10_u_elem_wpn": {
        "Desc": "10 Unique Elemental Non-Staff Weapons",
        "Diff": 14,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"10_u_spears": {
        "Desc": "10 Unique Spears",
        "Diff": 14,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"10_u_daggers": {
        "Desc": "10 Unique Daggers",
        "Diff": 14,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"7_u_earrings": {
        "Desc": "7 Unique Earrings",
        "Diff": 14,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_earrings"]
},

"2_alluring": {
        "Desc": "2 Alluring Ribbons",
        "Diff": 14,
        "Types": ["item_set","accessory","side_stories","items","#_alluring"]
},

"400_speed": {
        "Desc": "400+ Speed",
        "Diff": 14,
        "Types": ["speed","stats","#_speed"]
},

"1_ss_III_sets": {
        "Desc": "1 (III) Side Story",
        "Diff": 14,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets"]
},

"4_ss_flatlands": {
        "Desc": "4 Side Stories in Flatlands (No Kit)",
        "Diff": 14,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"ss_collect_2": {
        "Desc": "SS: The Price of Vengeance",
        "Diff": 14,
        "Types": ["ss_specific","ss_flatlands","side_stories"]
},

"1_ss_bosses": {
        "Desc": "Defeat 1 Side Story Boss",
        "Diff": 14,
        "Types": ["ss_set","ss_boss","boss","side_stories","#_ss_bosses"]
},

"8_subjobs": {
        "Desc": "Obtain 8 Subjobs",
        "Diff": 14,
        "Types": ["subjob","exploration"]
},

"6_u_frogs_bl": {
        "Desc": "Capture 6 Unique Froggen / Frogking",
        "Diff": 14,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"6_u_birds_bl": {
        "Desc": "Capture 6 Unique Birdian / Birdking",
        "Diff": 14,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"6_u_rats_bl": {
        "Desc": "Capture 6 Unique Ratkin / Ratking",
        "Diff": 14,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"str_5_bl": {
        "Desc": "Capture a Strength 5 Monster",
        "Diff": 14,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"20_t_nuts": {
        "Desc": "20 Nuts",
        "Diff": 15,
        "Types": ["item_count","nut","item_set","items","#_t_nuts"]
},

"10_u_bows": {
        "Desc": "10 Unique Bows",
        "Diff": 15,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"6_t_strong_amulets": {
        "Desc": "6 Strong Elemental Reduction Amulets",
        "Diff": 15,
        "Types": ["item_set","item_count","accessory","elem_reduce","items","#_t_strong_amulets"]
},

"20_t_town_boosts": {
        "Desc": "20 Town Boost Infos",
        "Diff": 15,
        "Types": ["item_set","item_count","info_counts","items","#_t_town_boosts"]
},

"4_ss_highlands": {
        "Desc": "4 Side Stories in Highlands (No Kit)",
        "Diff": 15,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"4_ss_sunlands": {
        "Desc": "4 Side Stories in Sunlands (No Kit)",
        "Diff": 15,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"4_ss_riverlands": {
        "Desc": "4 Side Stories in Riverlands (No Kit)",
        "Diff": 15,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"4_ss_woodlands": {
        "Desc": "4 Side Stories in Woodlands (No Kit)",
        "Diff": 15,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"ss_chain_7": {
        "Desc": "SS: Kaia, Mother of Dragon (III)",
        "Diff": 15,
        "Types": ["ss_specific","ss_cliftlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"45_t_chests": {
        "Desc": "Open 45 Total Chests",
        "Diff": 15,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"3_optional_bosses": {
        "Desc": "Defeat 3 Unique Optional Bosses",
        "Diff": 15,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"16_u_concoct": {
        "Desc": "16 Unique Concoctions Used",
        "Diff": 15,
        "Types": ["combat_counts","items","specific_character","combat","#_u_concoct"]
},

"15_u_gold_items": {
        "Desc": "15 Unique Gold Items",
        "Diff": 16,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"3_u_soul": {
        "Desc": "3 Unique Soul Weapons",
        "Diff": 16,
        "Types": ["item_set","weapon","elem_atk","items","#_u_soul"]
},

"10_t_l_sstones": {
        "Desc": "10 Soulstone (L)'s",
        "Diff": 16,
        "Types": ["item_count","soulstone","item_set","items","#_t_l_sstones"]
},

"10_u_shields": {
        "Desc": "10 Unique Shields",
        "Diff": 16,
        "Types": ["broad_item_set","armor","items","#_u_shields"]
},

"4_u_bracelets": {
        "Desc": "4 Unique Bracelets",
        "Diff": 16,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"8_u_town_boosts": {
        "Desc": "Inquire/Scrutinize 8 Unique Town Boosts",
        "Diff": 16,
        "Types": ["item_set","info_counts","items","#_u_town_boosts"]
},

"600_phys_atk": {
        "Desc": "600+ Physical Attack",
        "Diff": 16,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"350_critical": {
        "Desc": "350+ Critical",
        "Diff": 16,
        "Types": ["crit","stats","#_critical"]
},

"530_evasion": {
        "Desc": "530+ Evasion",
        "Diff": 16,
        "Types": ["evasion","stats","#_evasion"]
},

"5_ss_frostlands": {
        "Desc": "5 Side Stories in Frostlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"5_ss_coastlands": {
        "Desc": "5 Side Stories in Coastlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"5_ss_cliftlands": {
        "Desc": "5 Side Stories in Cliftlands (No Kit)",
        "Diff": 16,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"40_t_brown_chests": {
        "Desc": "Open 40 Brown Chests",
        "Diff": 16,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"24_t_red_chests": {
        "Desc": "Open 24 Red Chests",
        "Diff": 16,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"6_u_magic_bl": {
        "Desc": "Capture 6 Unique Elemental Themed Enemies",
        "Diff": 16,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"2_ch_2": {
        "Desc": "Complete 2 Chapter 2's",
        "Diff": 16,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["1_ch_2"]
},

"3_u_dragon": {
        "Desc": "3 Unique Dragon Equipments",
        "Diff": 17,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"2_u_boss_drop": {
        "Desc": "2 Unique Boss Equipment Drops",
        "Diff": 17,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"4_u_stones": {
        "Desc": "4 Unique Status Stones",
        "Diff": 17,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"500_elem_def": {
        "Desc": "500+ Elemental Defense",
        "Diff": 17,
        "Types": ["elem_def","stats","#_elem_def"]
},

"16_t_purple_chests": {
        "Desc": "Open 16 Purple Chests",
        "Diff": 17,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"20_weakness_sets": {
        "Desc": "20 Revealed Weakness Sets",
        "Diff": 17,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"5_u_str_bl": {
        "Desc": "5 Different Strength Monsters in Beast Lore",
        "Diff": 17,
        "Types": ["combat_counts","specific_character","beast_lore","extended_combat","combat_set","combat","#_u_str_bl"]
},

"3_npc_summons": {
        "Desc": "Expend all Summons on an NPC 3 times",
        "Diff": 17,
        "Types": ["combat_counts","extended_combat","combat","#_npc_summons"]
},

"6_bl_summons": {
        "Desc": "Expend all Summon Uses on 6 Monsters",
        "Diff": 17,
        "Types": ["combat_counts","extended_combat","combat","#_bl_summons"]
},

"20_t_pouches": {
        "Desc": "20 Money Pouches",
        "Diff": 18,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"8_u_silver": {
        "Desc": "8 Unique Silver Equipments",
        "Diff": 18,
        "Types": ["item_set","armor","weapon","items","#_u_silver"]
},

"2_u_rune": {
        "Desc": "2 Unique Rune Weapons",
        "Diff": 18,
        "Types": ["item_set","weapon","elem_atk","items","#_u_rune"]
},

"4_u_adamantine": {
        "Desc": "4 Unique Adamantine Equipments",
        "Diff": 18,
        "Types": ["item_set","weapon","elem_atk","armor","items","#_u_adamantine"]
},

"4_u_phys_staves": {
        "Desc": "4 Unique Physical Staves",
        "Diff": 18,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"15_u_evasion": {
        "Desc": "15 Unique Evasion Equipments",
        "Diff": 18,
        "Types": ["broad_item_set","armor","weapon","evasion","items","#_u_evasion"]
},

"15_u_speed": {
        "Desc": "15 Unique Speed Equipments",
        "Diff": 18,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"20_t_m_sstones": {
        "Desc": "20 Soulstone (M)'s",
        "Diff": 18,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"7_t_l_nuts": {
        "Desc": "7 Nut (L)'s",
        "Diff": 18,
        "Types": ["item_count","nut","item_set","items","#_t_l_nuts"]
},

"10_u_swords": {
        "Desc": "10 Unique Swords",
        "Diff": 18,
        "Types": ["broad_item_set","weapon","items","#_u_swords"]
},

"3_u_necklaces": {
        "Desc": "3 Unique Necklaces",
        "Diff": 18,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"300_accuracy": {
        "Desc": "300+ Accuracy",
        "Diff": 18,
        "Types": ["accuracy","stats","#_accuracy"]
},

"3_ss_II_sets": {
        "Desc": "3 (II) Side Stories",
        "Diff": 18,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets"]
},

"5_ss_flatlands": {
        "Desc": "5 Side Stories in Flatlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"5_ss_highlands": {
        "Desc": "5 Side Stories in Highlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"5_ss_woodlands": {
        "Desc": "5 Side Stories in Woodlands (No Kit)",
        "Diff": 18,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"chapter_3_chests": {
        "Desc": "Open All Chests in a Chapter 3 Dungeon",
        "Diff": 18,
        "Types": ["chest","chest_set","exploration"]
},

"ch_2_duo": {
        "Desc": "Chapter 2 Boss with 2 only Travelers",
        "Diff": 18,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"8_ch_1": {
        "Desc": "Complete 8 Chapter 1's",
        "Diff": 18,
        "Types": ["chapter","progression","#_ch_1"],
        "Excludes": ["5_ch_1","6_ch_1","7_ch_1"]
},

"25_u_armors": {
        "Desc": "25 Unique Armors",
        "Diff": 19,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"525_phys_def": {
        "Desc": "525+ Physical Defense",
        "Diff": 19,
        "Types": ["phys_def","stats","#_phys_def"]
},

"ss_chain_3": {
        "Desc": "SS: Le Mann, Explorer Extraordinaire (III)",
        "Diff": 19,
        "Types": ["ss_specific","ss_coastlands","ss_chain","ss_III","specific_character","ss_II","side_stories"]
},

"str_7_NPC": {
        "Desc": "Defeat a Strength 7 NPC",
        "Diff": 19,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"15_t_s_nuts": {
        "Desc": "15 Nut (S)'s",
        "Diff": 20,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"6_t_olives": {
        "Desc": "6 Olive (L)'s",
        "Diff": 20,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_olives"]
},

"10_t_elem_amulets": {
        "Desc": "10 Elemental Reduction Amulets/Charms",
        "Diff": 20,
        "Types": ["item_set","item_count","elem_reduce","accessory","items","#_t_elem_amulets"]
},

"5_u_bracelets": {
        "Desc": "5 Unique Bracelets",
        "Diff": 20,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"250_sp": {
        "Desc": "250+ SP",
        "Diff": 20,
        "Types": ["sp","stats","#_sp"]
},

"700_elem_atk": {
        "Desc": "700+ Elemental Attack",
        "Diff": 20,
        "Types": ["elem_atk","stats","#_elem_atk"]
},

"450_speed": {
        "Desc": "450+ Speed",
        "Diff": 20,
        "Types": ["speed","stats","#_speed"]
},

"400_critical": {
        "Desc": "400+ Critical",
        "Diff": 20,
        "Types": ["crit","stats","#_critical"]
},

"5_ss_sunlands": {
        "Desc": "5 Side Stories in Sunlands (No Kit)",
        "Diff": 20,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"5_ss_riverlands": {
        "Desc": "5 Side Stories in Riverlands (No Kit)",
        "Diff": 20,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"60_t_chests": {
        "Desc": "Open 60 Total Chests",
        "Diff": 20,
        "Types": ["chest","chest_counts","exploration","#_t_chests"]
},

"4_optional_bosses": {
        "Desc": "Defeat 4 Unique Optional Bosses",
        "Diff": 20,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"1_ch_3": {
        "Desc": "Complete a Chapter 3",
        "Diff": 20,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["1_ch_2"]
},

"4_u_soul": {
        "Desc": "4 Unique Soul Weapons",
        "Diff": 20,
        "Types": ["item_set","weapon","elem_atk","items","#_u_soul"]
},

"3_u_forbidden": {
        "Desc": "3 Unique Forbbiden Equipments",
        "Diff": 20,
        "Types": ["item_set","weapon","forbidden","items","#_u_forbidden"]
},

"18_u_headgears": {
        "Desc": "18 Unique Headgears",
        "Diff": 20,
        "Types": ["broad_item_set","armor","items","#_u_headgears"]
},

"18_u_body_armors": {
        "Desc": "18 Unique Body Armors",
        "Diff": 20,
        "Types": ["broad_item_set","armor","items","#_u_body_armors"]
},

"10_t_stones": {
        "Desc": "10 Status Stones",
        "Diff": 20,
        "Types": ["item_set","item_count","status_stone","accessory","items","#_t_stones"]
},

"15_t_bottles": {
        "Desc": "15 Status Bottles",
        "Diff": 20,
        "Types": ["item_set","item_count","bottle","items","#_t_bottles"]
},

"12_u_bl": {
        "Desc": "Capture 12 Unique Monsters",
        "Diff": 20,
        "Types": ["combat_counts","specific_character","beast_lore","combat","#_u_bl"]
},

"3_ch_2": {
        "Desc": "Complete 3 Chapter 2's",
        "Diff": 20,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["1_ch_2","2_ch_2"]
},

"30_t_s_sstones": {
        "Desc": "30 Soulstone (S)'s",
        "Diff": 21,
        "Types": ["item_count","soulstone","item_set","items","#_t_s_sstones"]
},

"7_u_rings": {
        "Desc": "7 Unique Rings",
        "Diff": 21,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_rings"]
},

"3_alluring": {
        "Desc": "3 Alluring Ribbons",
        "Diff": 21,
        "Types": ["item_set","accessory","side_stories","items","#_alluring"]
},

"600_elem_def": {
        "Desc": "600+ Elemental Defense",
        "Diff": 21,
        "Types": ["elem_def","stats","#_elem_def"]
},

"6_ss_cliftlands": {
        "Desc": "6 Side Stories in Cliftlands (No Kit)",
        "Diff": 21,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"4_npc_summons": {
        "Desc": "Expend all Summons on an NPC 4 times",
        "Diff": 21,
        "Types": ["combat_counts","extended_combat","combat","#_npc_summons"]
},

"8_bl_summons": {
        "Desc": "Expend all Summon Uses on 8 Monsters",
        "Diff": 21,
        "Types": ["combat_counts","extended_combat","combat","#_bl_summons"]
},

"3_u_boss_drop": {
        "Desc": "3 Unique Boss Equipment Drops",
        "Diff": 22,
        "Types": ["broad_item_set","armor","weapon","progression","items","progression","#_u_boss_drop"]
},

"6_t_items": {
        "Desc": "6 Pages in All Items",
        "Diff": 22,
        "Types": ["broad_item_set","item_count","items","#_t_items"]
},

"3500_hp": {
        "Desc": "3500+ HP",
        "Diff": 22,
        "Types": ["hp","stats","#_hp"]
},

"650_phys_atk": {
        "Desc": "650+ Physical Attack",
        "Diff": 22,
        "Types": ["phys_atk","stats","#_phys_atk"]
},

"2_ss_region_sets": {
        "Desc": "2 Side Stories in Each Region",
        "Diff": 22,
        "Types": ["broad_ss_set","side_stories","#_ss_region_sets"]
},

"2_ss_III_sets": {
        "Desc": "2 (III) Side Stories",
        "Diff": 22,
        "Types": ["ss_set","ss_chain","ss_III","side_stories","#_ss_III_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","1_ss_III_sets"]
},

"6_ss_frostlands": {
        "Desc": "6 Side Stories in Frostlands (No Kit)",
        "Diff": 22,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"6_ss_flatlands": {
        "Desc": "6 Side Stories in Flatlands (No Kit)",
        "Diff": 22,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"6_ss_coastlands": {
        "Desc": "6 Side Stories in Coastlands (No Kit)",
        "Diff": 22,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"50_t_brown_chests": {
        "Desc": "Open 50 Brown Chests",
        "Diff": 22,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"30_t_red_chests": {
        "Desc": "Open 30 Red Chests",
        "Diff": 22,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
},

"str_6_bl": {
        "Desc": "Capture a Strength 6 Monster",
        "Diff": 22,
        "Types": ["extended_combat","specific_character","beast_lore","combat_set","combat","str_#_bl"]
},

"ch_2_slow": {
        "Desc": "Chapter 2 Boss without Soulstones or Vets",
        "Diff": 22,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"ch_2_no_boost": {
        "Desc": "Chapter 2 Boss without Boosting",
        "Diff": 22,
        "Types": ["combat_challenge","boss","progression","combat"]
},

"25_t_pouches": {
        "Desc": "25 Money Pouches",
        "Diff": 22,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"4_u_dragon": {
        "Desc": "4 Unique Dragon Equipments",
        "Diff": 22,
        "Types": ["item_set","armor","weapon","crit","items","#_u_dragon"]
},

"15_u_accuracy": {
        "Desc": "15 Unique Accuracy Equipments",
        "Diff": 22,
        "Types": ["broad_item_set","armor","weapon","accuracy","items","#_u_accuracy"]
},

"15_t_m_nuts": {
        "Desc": "15 Nut (M)'s",
        "Diff": 22,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_m_nuts"]
},

"30_u_weapons": {
        "Desc": "30 Unique Weapons",
        "Diff": 22,
        "Types": ["broad_item_set","weapon","items","#_u_weapons"]
},

"6_u_stones": {
        "Desc": "6 Unique Status Stones",
        "Diff": 22,
        "Types": ["item_set","accessory","status_stone","accessory","items","#_u_stones"]
},

"20_u_accessories": {
        "Desc": "20 Unique Accessories",
        "Diff": 22,
        "Types": ["broad_item_set","accessory","stat_accessory","elem_reduce","items","#_u_accessories"]
},

"3_bottle_sets": {
        "Desc": "3 Complete Sets of Status Bottles",
        "Diff": 22,
        "Types": ["item_set","item_count","bottle","items","#_bottle_sets"]
},

"4_ss_II_sets": {
        "Desc": "4 (II) Side Stories",
        "Diff": 22,
        "Types": ["ss_set","ss_chain","ss_II","side_stories","#_ss_II_sets"],
        "Excludes": ["1_ss_II_sets","2_ss_II_sets","3_ss_II_sets"]
},

"20_t_purple_chests": {
        "Desc": "Open 20 Purple Chests",
        "Diff": 22,
        "Types": ["chest","chest_counts","exploration","#_t_purple_chests"]
},

"9_u_lizards_bl": {
        "Desc": "Capture 9 Unique Lizardmen / Lizardking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_lizards_bl"]
},

"9_u_frogs_bl": {
        "Desc": "Capture 9 Unique Froggen / Frogking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_frogs_bl"]
},

"9_u_birds_bl": {
        "Desc": "Capture 9 Unique Birdian / Birdking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_birds_bl"]
},

"9_u_rats_bl": {
        "Desc": "Capture 9 Unique Ratkin / Ratking",
        "Diff": 22,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_rats_bl"]
},

"15_u_critical": {
        "Desc": "15 Unique Critical Equipments",
        "Diff": 22,
        "Types": ["broad_item_set","armor","weapon","crit","items","#_u_critical"]
},

"7_ss_frostlands": {
        "Desc": "7 Side Stories in Frostlands (No Kit)",
        "Diff": 22,
        "Types": ["ss_set","ss_frostlands","side_stories","#_ss_frostlands"]
},

"6_ss_highlands": {
        "Desc": "6 Side Stories in Highlands (No Kit)",
        "Diff": 22,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"6_ss_woodlands": {
        "Desc": "6 Side Stories in Woodlands (No Kit)",
        "Diff": 22,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"15_u_elem_wpn": {
        "Desc": "15 Unique Elemental Non-Staff Weapons",
        "Diff": 23,
        "Types": ["broad_item_set","weapon","elem_atk","items","#_u_elem_wpn"]
},

"20_t_s_nuts": {
        "Desc": "20 Nut (S)'s",
        "Diff": 23,
        "Types": ["item_count","nut","item_set","items","#_t_s_nuts"]
},

"30_t_nuts": {
        "Desc": "30 Nuts",
        "Diff": 23,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_nuts"]
},

"18_u_sstones": {
        "Desc": "18 Unique Soulstones",
        "Diff": 23,
        "Types": ["broad_item_set","soulstone","items","#_u_sstones"]
},

"15_u_axes": {
        "Desc": "15 Unique Axes",
        "Diff": 23,
        "Types": ["broad_item_set","weapon","items","#_u_axes"]
},

"9_u_elem_reduce": {
        "Desc": "9 Unique Elemental Reduction Equipments",
        "Diff": 23,
        "Types": ["item_set","armor","accessory","elem_reduce","items","#_u_elem_reduce"]
},

"580_evasion": {
        "Desc": "580+ Evasion",
        "Diff": 23,
        "Types": ["evasion","stats","#_evasion"]
},

"ss_boss_3": {
        "Desc": "SS: Scourge of the Seas",
        "Diff": 23,
        "Types": ["ss_specific","ss_coastlands","ss_boss","boss","side_stories"]
},

"5_optional_bosses": {
        "Desc": "Defeat 5 Unique Optional Bosses",
        "Diff": 23,
        "Types": ["boss","exploration","#_optional_bosses"]
},

"25_weakness_sets": {
        "Desc": "25 Revealed Weakness Sets",
        "Diff": 23,
        "Types": ["combat_counts","extended_combat","combat","#_weakness_sets"]
},

"20_u_gold_items": {
        "Desc": "20 Unique Gold Items",
        "Diff": 23,
        "Types": ["broad_item_set","gold_item","items","#_u_gold_items"]
},

"5_u_phys_staves": {
        "Desc": "5 Unique Physical Staves",
        "Diff": 23,
        "Types": ["item_set","weapon","phys_atk","items","#_u_phys_staves"]
},

"15_u_spears": {
        "Desc": "15 Unique Spears",
        "Diff": 23,
        "Types": ["broad_item_set","weapon","items","#_u_spears"]
},

"4_u_necklaces": {
        "Desc": "4 Unique Necklaces",
        "Diff": 23,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_necklaces"]
},

"300_sp": {
        "Desc": "300+ SP",
        "Diff": 23,
        "Types": ["sp","stats","#_sp"]
},

"600_phys_def": {
        "Desc": "600+ Physical Defense",
        "Diff": 23,
        "Types": ["phys_def","stats","#_phys_def"]
},

"450_critical": {
        "Desc": "450+ Critical",
        "Diff": 23,
        "Types": ["crit","stats","#_critical"]
},

"7_ss_flatlands": {
        "Desc": "7 Side Stories in Flatlands (No Kit)",
        "Diff": 23,
        "Types": ["ss_set","ss_flatlands","side_stories","#_ss_flatlands"]
},

"7_ss_coastlands": {
        "Desc": "7 Side Stories in Coastlands (No Kit)",
        "Diff": 23,
        "Types": ["ss_set","ss_coastlands","side_stories","#_ss_coastlands"]
},

"6_ss_sunlands": {
        "Desc": "6 Side Stories in Sunlands (No Kit)",
        "Diff": 23,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"30_t_pouches": {
        "Desc": "30 Money Pouches",
        "Diff": 24,
        "Types": ["item_count","gold_item","broad_item_set","items","#_t_pouches"]
},

"10_t_l_nuts": {
        "Desc": "10 Nut (L)'s",
        "Diff": 24,
        "Types": ["item_count","nut","item_set","items","side_stories","#_t_l_nuts"]
},

"15_u_daggers": {
        "Desc": "15 Unique Daggers",
        "Diff": 24,
        "Types": ["broad_item_set","weapon","items","#_u_daggers"]
},

"13_u_shields": {
        "Desc": "13 Unique Shields",
        "Diff": 24,
        "Types": ["broad_item_set","armor","items","#_u_shields"]
},

"35_u_armors": {
        "Desc": "35 Unique Armors",
        "Diff": 24,
        "Types": ["broad_item_set","armor","items","#_u_armors"]
},

"500_speed": {
        "Desc": "500+ Speed",
        "Diff": 24,
        "Types": ["speed","stats","#_speed"]
},

"20_side_stories": {
        "Desc": "20 Side Stories",
        "Diff": 24,
        "Types": ["broad_ss_set","side_stories","#_side_stories"]
},

"7_ss_highlands": {
        "Desc": "7 Side Stories in Highlands (No Kit)",
        "Diff": 24,
        "Types": ["ss_set","ss_highlands","side_stories","#_ss_highlands"]
},

"ss_boss_4": {
        "Desc": "SS: Shadow over the Sands",
        "Diff": 24,
        "Types": ["ss_specific","ss_sunlands","ss_boss","boss","side_stories"]
},

"5_npc_summons": {
        "Desc": "Expend all Summons on an NPC 5 times",
        "Diff": 24,
        "Types": ["combat_counts","extended_combat","combat","#_npc_summons"]
},

"10_bl_summons": {
        "Desc": "Expend all Summon Uses on 10 Monsters",
        "Diff": 24,
        "Types": ["combat_counts","extended_combat","combat","#_bl_summons"]
},

"16_u_bl": {
        "Desc": "Capture 16 Unique Monsters",
        "Diff": 24,
        "Types": ["combat_counts","specific_character","beast_lore","combat","#_u_bl"]
},

"630_evasion": {
        "Desc": "630+ Evasion",
        "Diff": 24,
        "Types": ["evasion","stats","#_evasion"]
},

"6_ss_riverlands": {
        "Desc": "6 Side Stories in Riverlands (No Kit)",
        "Diff": 24,
        "Types": ["ss_set","ss_riverlands","side_stories","#_ss_riverlands"]
},

"24_u_concoct": {
        "Desc": "24 Unique Concoctions Used",
        "Diff": 24,
        "Types": ["combat_counts","items","specific_character","combat","#_u_concoct"]
},

"6_u_str_bl": {
        "Desc": "6 Different Strength Monsters in Beast Lore",
        "Diff": 24,
        "Types": ["combat_counts","specific_character","beast_lore","extended_combat","combat_set","combat","#_u_str_bl"]
},

"str_8_NPC": {
        "Desc": "Defeat a Strength 8 NPC",
        "Diff": 24,
        "Types": ["combat_set","combat","str_#_NPC"]
},

"4_ch_2": {
        "Desc": "Complete 4 Chapter 2's",
        "Diff": 24,
        "Types": ["chapter","progression","#_ch_2"],
        "Excludes": ["1_ch_2","2_ch_2","3_ch_2"]
},

"20_u_speed": {
        "Desc": "20 Unique Speed Equipments",
        "Diff": 25,
        "Types": ["broad_item_set","armor","weapon","speed","items","#_u_speed"]
},

"30_t_m_sstones": {
        "Desc": "30 Soulstone (M)'s",
        "Diff": 25,
        "Types": ["item_count","soulstone","item_set","items","#_t_m_sstones"]
},

"15_u_bows": {
        "Desc": "15 Unique Bows",
        "Diff": 25,
        "Types": ["broad_item_set","weapon","items","#_u_bows"]
},

"6_u_bracelets": {
        "Desc": "6 Unique Bracelets",
        "Diff": 25,
        "Types": ["item_set","accessory","stat_accessory","items","#_u_bracelets"]
},

"350_accuracy": {
        "Desc": "350+ Accuracy",
        "Diff": 25,
        "Types": ["accuracy","stats","#_accuracy"]
},

"7_ss_cliftlands": {
        "Desc": "7 Side Stories in Cliftlands (No Kit)",
        "Diff": 25,
        "Types": ["ss_set","ss_cliftlands","side_stories","#_ss_cliftlands"]
},

"7_ss_woodlands": {
        "Desc": "7 Side Stories in Woodlands (No Kit)",
        "Diff": 25,
        "Types": ["ss_set","ss_woodlands","side_stories","#_ss_woodlands"]
},

"10_u_magic_bl": {
        "Desc": "Capture 10 Unique Elemental Themed Enemies",
        "Diff": 25,
        "Types": ["combat_counts","specific_character","beast_lore","combat_set","combat","#_u_magic_bl"]
},

"2_ch_3": {
        "Desc": "Complete 2 Chapter 3's",
        "Diff": 25,
        "Types": ["chapter","progression","#_ch_3"],
        "Excludes": ["1_ch_2","2_ch_2","1_ch_3"]
},

"3_u_rune": {
        "Desc": "3 Unique Rune Weapons",
        "Diff": 25,
        "Types": ["item_set","weapon","elem_atk","items","progression","#_u_rune"]
},

"7_ss_sunlands": {
        "Desc": "7 Side Stories in Sunlands (No Kit)",
        "Diff": 25,
        "Types": ["ss_set","ss_sunlands","side_stories","#_ss_sunlands"]
},

"60_t_brown_chests": {
        "Desc": "Open 60 Brown Chests",
        "Diff": 25,
        "Types": ["chest","chest_counts","exploration","#_t_brown_chests"]
},

"36_t_red_chests": {
        "Desc": "Open 36 Red Chests",
        "Diff": 25,
        "Types": ["chest","chest_counts","exploration","#_t_red_chests"]
}

};
