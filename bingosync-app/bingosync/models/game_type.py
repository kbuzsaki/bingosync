from enum import Enum, unique

@unique
class GameType(Enum):
    ocarina_of_time = 1
    super_mario_64 = 2
    majoras_mask = 3
    super_metroid = 4
    castlevania_sotn = 5
    super_mario_world_legacy = 6
    pokemon_red_blue = 7
    pokemon_crystal = 8
    donkey_kong_64 = 9
    pikmin = 10
    super_mario_sunshine = 11
    pokemon_red_blue_randomizer = 12
    final_fantasy_1 = 13
    crash_twinsanity = 14
    lufia_2 = 15
    lego_star_wars = 16
    spyro_2 = 17
    custom = 18
    pokemon_snap = 19
    ocarina_of_time_blackout = 20
    ocarina_of_time_short = 21
    ocarina_of_time_short_blackout = 22
    pokemon_ruby_sapphire = 23
    adams_family = 24
    sonic_adventure_2 = 25
    dark_souls = 26
    road_trip_adventure = 27
    psychonauts = 28
    super_mario_galaxy = 29
    banjo_tooie = 30
    ff4_ancient_cave = 31
    zelda_botw = 32
    sonic_adventure_2_hero_story = 33
    the_witness = 34
    pikmin_2 = 35
    alttp_randomizer = 36
    pokemon_platinum = 37
    rayman_ps1 = 38
    pokemon_crystal_randomizer = 39
    pokemon_emerald_old_randomizer = 40
    pokemon_crystal_classic_randomizer = 41
    sonic_adventure_2_dark_story = 42
    sonic_adventure_2_long = 43
    zelda_skyward_sword = 44
    super_mario_odyssey = 45
    super_mario_odyssey_long = 46
    rabi_ribi = 47
    generic_bingo = 48
    generic_bingo_deluxe = 49
    harry_potter_2 = 50
    pokemon_emerald_old_randomizer_short = 51
    hollow_knight = 52
    jade_cocoon = 53
    mass_effect_2 = 54
    alttp_enemy_randomizer = 55
    happy_wheels_level_editor = 56
    secret_of_mana = 57
    secret_of_mana_german = 58
    secret_of_mana_short = 59
    secret_of_mana_short_german = 60
    final_fantasy_1_randomizer_short = 61
    final_fantasy_1_randomizer_long = 62
    ff4_free_enterprise = 63
    spyro_2_4_x = 64
    yugioh_forbidden_memories = 65
    links_awakening = 66
    dark_souls_3 = 67
    bloodborne = 68
    cuphead = 69
    pokemon_black_white = 70
    battleblock_theater = 71
    battle_for_bikini_bottom = 72
    luigis_mansion = 73
    luigis_mansion_dark_moon = 74
    yokus_island_express = 75
    league_of_legends_aram = 76
    legend_of_mana = 77
    castlevania_aria_of_sorrow = 78
    nier_automata = 79
    octopath_traveler = 80
    splatoon_2_octo_expansion = 81
    pokemon_emerald_randomizer = 82
    resident_evil_hd_randomizer = 83
    wii_sports_resort = 84
    wii_sports_resort_all_stamps = 85
    cardfight_vanguard = 86
    super_mario_odyssey_short = 87
    yooka_laylee = 88
    ocarina_of_time_item_randomizer = 89
    ocarina_of_time_item_randomizer_blackout = 90
    doom_2016 = 91
    pokemon_heartgold_soulsilver = 92
    super_mario_galaxy_2 = 93
    super_mario_odyssey_all_kingdoms = 94
    zelda_botw_short = 95
    zelda_botw_long = 96
    binding_of_isaac = 97
    super_mario_sunshine_tournament = 98
    super_mario_sunshine_lockout = 99
    super_mario_odyssey_all_kingdoms_post_game = 100
    super_smash_bros_brawl_all_brawl = 101
    super_smash_bros_brawl_basic = 102
    transistor = 103
    sonic_adventure_dx = 104
    new_super_mario_bros_wii = 105
    celeste = 106
    paper_mario = 107
    mega_man_11 = 108
    world_of_warcraft = 109
    super_mario_63 = 110
    pokepark_wii = 111
    super_mario_sunshine_1v1 = 112
    wii_sports = 113
    zelda_wind_waker_sd = 114
    dream = 115
    toy_story_2 = 116
    mario_party_advance = 117
    darkest_dungeon = 118
    club_penguin = 119
    slime_rancher = 120
    slime_rancher_lockout = 121
    zelda_botw_jp = 122
    zelda_botw_jp_short = 123
    zelda_botw_jp_long = 124
    darkest_dungeon_lockout = 125
    ittle_dew_2 = 126
    super_paper_mario = 127
    lego_batman_long = 128
    into_the_breach = 129
    make_a_good_megaman_level_2 = 130
    super_mario_sunshine_1v1_beta = 131
    lego_pirates_of_the_caribbean = 132
    banjo_dreamie = 133
    chibi_robo = 134
    touhou_luna_nights = 135
    ittle_dew_2_blackout = 136
    ittle_dew_2_expert = 137
    iconoclasts = 138
    ocarina_of_time_beta_quest = 139
    octopath_traveler_story = 140
    dragon_warrior_monsters = 141
    kirby_and_the_amazing_mirror = 142
    jak_and_daxter = 143
    wii_sports_resort_all_stamps_lite = 144
    castlevania_sotn_randomizer = 145
    binding_of_isaac_racing = 146
    terraria_1_3 = 147
    lego_batman = 148
    crash_team_racing = 149
    simpsons_hit_and_run = 150
    paper_mario_new = 151
    super_mario_64_randomizer_lockout = 152
    dark_devotion = 153
    dark_souls_2 = 154
    terraria_1_3_pre_hardmode = 155
    wii_sports_club_all_sports_expert = 156
    mario_maker_2 = 157
    minecraft_1_16_1 = 158
    new_super_mario_bros_ds = 159
    wii_sports_club_golf_only = 160
    hat_in_time = 161
    wii_sports_series_all_sports = 162
    super_metroid_experimental = 163
    super_metroid_double_anti_bingo = 164
    final_fantasy_1_randomizer_winter_dab = 165
    super_metroid_alttp_crossover_randomizer = 166
    disneys_magical_mirror = 167
    myst = 168
    super_mario_sunshine_2v2 = 169
    lego_star_wars_the_complete_saga_ds = 170
    celeste_blackout = 171
    custom_randomized = 172
    final_fantasy_8 = 173
    revenge_of_the_bird_king = 174
    mgs_peace_walker = 175
    yokus_island_express_randomizer = 176
    wii_sports_club_all_sports = 177
    sekiro = 178
    hollow_knight_item_rando = 179
    monster_rancher_2 = 180
    lucah_boad = 181
    wii_play = 182
    super_mario_world = 183
    illusion_of_gaia_rando = 184
    pikmin_2_all_areas_unlocked = 185
    yugioh_forbidden_memories_alternate = 186
    custom_srl_v5 = 187
    custom_isaac = 188
    kingdom_hearts_final_mix = 189
    pokemon_emerald_vanilla = 190
    the_witness_low = 191
    cat_quest_2 = 192
    sonic_adventure_2_nightmare = 193
    jak_and_daxter_easy = 194
    celeste_long = 195
    celeste_cn = 196
    celeste_blackout_cn = 197
    hollow_knight_cn = 198
    wii_party_global_trot = 199
    pokemon_sword_shield = 200
    otogi = 201
    zelda_minish_cap_randomizer = 202
    yooka_laylee_impossible_lair = 203
    banjo_tooie_short = 204
    banjo_tooie_long = 205
    need_for_speed_carbon = 206
    kotor = 207
    sonic_r = 208
    celeste_turkish = 209
    mgs_portable_ops_plus_training = 210
    old_school_runescape = 211
    super_mario_sunshine_jp = 212
    super_mario_sunshine_1v1_jp = 213
    xenoblade_chronicles_future_connected = 214
    hollow_knight_item_rando_cn = 215
    hollow_knight_item_rando_pt = 216
    spyro_2_4_no_ds = 217
    kingdom_hearts_2_final_mix = 218
    sludgelife = 219
    undertale = 220
    pikmin_3 = 221
    zelda_twilight_princess = 222
    _102_dalmatians = 223
    hollow_knight_item_rando_cursed = 224
    hollow_knight_item_rando_tiebreakerless = 225
    a_bugs_life = 226
    bloodstained_rando = 227
    alttp_vanilla_rmg = 228
    ocarina_of_time_item_randomizer_short =  229
    pokemon_omega_ruby_alpha_sapphire = 230
    monster_rancher_2_rng_lite = 231
    fallout_new_vegas = 232
    minecraft_1_17_1 = 233
    donald_duck_goin_quackers = 234
    monsters_inc_scare_island = 235
    kingdom_hearts_2_final_mix_current = 236
    luigis_mansion_all_doors_unlocked = 237
    spyro_3_year_of_the_dragon = 238
    medabots_ax_rokusho = 239
    pen_pen_triicelon = 240
    spelunky_2 = 241
    nights_into_dreams = 242
    skyrim = 243
    jak_and_daxter_new_game_plus = 244
    pokemon_colosseum = 245
    zelda_botw_french = 246
    zelda_botw_french_short = 247
    zelda_botw_french_long = 248
    terraria = 249
    phasmophobia = 250
    monster_rancher_2_viewers = 251
    rayman_legends = 252
    smash_ultimate_world_of_light = 253
    tony_hawks_pro_skater_1_2 = 254
    riven = 255
    world_of_warcraft_new_character = 256
    metroid_prime_randomizer_balanced = 257
    metroid_prime_randomizer_chaos = 258
    stardew_valley = 259
    links_awakening_switch = 260
    mario_sports_mix = 261
    pokemon_x_y = 262
    lego_batman_semi_random_level_names = 263
    lego_batman_semi_random_level_numbers = 264
    lego_batman_random_level_names = 265
    lego_batman_random_level_numbers = 266
    world_of_warcraft_random_level_one = 267
    halo_master_chief_collection = 268
    runescape_3_clue_scroll = 269
    hades = 270
    minecraft_1_8_9 = 271
    soul_knight = 272
    escape_from_tarkov = 273
    hollow_knight_cratthew = 274
    mario_maker_2_2021 = 275
    video_games = 276
    halo_master_chief_collection_synergy = 277
    cyberpunk_2077 = 278
    splatoon_2_hero_mode = 279
    chess_dot_com = 280
    saga_frontier = 281
    cod_warzone = 282
    mario_kart_8_deluxe = 283
    crystalis = 284
    golden_sun_lost_age_randomizer = 285
    metroid_prime_2_randomizer_balanced = 286
    metroid_prime_2_randomizer_chaos = 287
    new_super_mario_bros_u = 288
    hollow_knight_item_rando_dab = 289
    snailiad = 290
    geometry_dash = 291
    mario_kart_double_dash = 292
    bowsers_fury_blackout = 293
    bowsers_fury_lockout = 294
    super_meat_boy = 295
    pokemon_crystal_randomizer_tournament = 296
    new_super_mario_bros_2 = 297
    crash_bandicoot_4 = 298
    kingdom_hearts_final_mix_randomizer = 299
    celeste_portuguese = 300
    yokus_island_express_simplified = 301
    yokus_island_express_randomizer_simplified = 302
    octopath_traveler_short = 303
    octopath_traveler_medium = 304
    octopath_traveler_long = 305
    stardew_valley_challenge_cup = 306
    salt_and_sanctuary = 307
    untitled_goose_game = 308
    deaths_door = 309
    hogs_of_war = 310
    celeste_classic_mods = 311
    dont_starve_together = 312
    monster_hunter_world = 313
    majoras_mask_item_randomizer = 314
    luigis_mansion_3 = 315
    fantastic_contraption = 316
    luigis_mansion_all_rooms = 317
    zelda_wind_waker_randomizer = 318
    doodle_champion_island_games_begin = 319
    quest_for_glory_vga = 320
    crash_twinsanity_hoverless_variant = 321
    around_the_clock_at_bikini_bottom = 322

    def __str__(self):
        return self.short_name

    @property
    def group(self):
        return GAME_TYPE_GROUPS[self]

    @property
    def group_name(self):
        return GAME_TYPE_GROUP_NAMES[self]

    @property
    def long_name(self):
        return GAME_TYPE_LONG_NAMES[self]

    @property
    def short_name(self):
        return GAME_TYPE_SHORT_NAMES[self]

    @property
    def variant_name(self):
        return GAME_TYPE_VARIANT_NAMES[self]

    @property
    def is_game_group(self):
        return self.group == self

    @property
    def is_custom(self):
        return self in (GameType.custom, GameType.custom_randomized, GameType.custom_srl_v5, GameType.custom_isaac)

    @property
    def uses_seed(self):
        # fixed custom is the one game type that doesn't use a seed
        return self != GameType.custom

    @staticmethod
    def for_value(value):
        return list(GameType)[value - 1]

    def generator_instance(self):
        from bingosync.generators import BingoGenerator, CustomGenerator
        if self.is_custom:
            return CustomGenerator(self)
        else:
            return BingoGenerator.instance(self.name)

    @staticmethod
    def choices():
        return [(game_type.value, game_type.long_name) for game_type in GameType]

    @staticmethod
    def game_choices():
        choices = [(gt.value, gt.group_name) for gt in GAME_GROUPS if gt.is_game_group and not gt.is_custom]
        choices = list(sorted(choices, key=lambda el: strip_articles(el[1]).lower()))
        custom_choices = [(gt.value, gt.group_name) for gt in [GameType.custom]]
        return [(None, '')] + choices + custom_choices

    @staticmethod
    def variant_choices():
        return [(group_gt.value,
                 [(gt.value, name) for gt, name, short_name in group['variants'] if gt not in HIDDEN_VARIANTS])
                for group_gt, group in GAME_GROUPS.items()]

def strip_articles(name):
    """A hacky sort key that ignores things like 'The ' """
    if name.startswith("The "):
        return name[4:]
    elif name.startswith("A "):
        return name[2:]
    return name


DEFAULT_VARIANT_NAME = "Normal"
def singleton_group(game_type, name, short_name, variant_name=DEFAULT_VARIANT_NAME):
    return {
        game_type: {
            "name": name,
            "variants": [
                (game_type, variant_name, short_name),
            ],
        }
    }

# specific game type variants to hide from the variant dropdown as a "soft removal"
# don't actually remove the variant so that it still shows the correct data for historical rooms.
# this will probably break if all of the variants for a game group are hidden.
HIDDEN_VARIANTS = {
    GameType.super_mario_sunshine_1v1_beta,
    GameType.super_mario_sunshine_lockout,
    GameType.super_mario_sunshine_tournament,
    GameType.video_games,
}

GAME_GROUPS = {
    GameType.ocarina_of_time: {
        "name": "Zelda: Ocarina of Time",
        "variants": [
            (GameType.ocarina_of_time, "Normal", "Zelda: OoT"),
            (GameType.ocarina_of_time_blackout, "Blackout", "OoT Blackout"),
            (GameType.ocarina_of_time_short, "Short", "OoT Short"),
            (GameType.ocarina_of_time_short_blackout, "Short Blackout", "OoT Short Blackout"),
            (GameType.ocarina_of_time_item_randomizer, "Item Randomizer", "OoT IR"),
            (GameType.ocarina_of_time_item_randomizer_blackout, "Item Randomizer Blackout", "OoT IR Blackout"),
            (GameType.ocarina_of_time_item_randomizer_short, "Item Randomizer Short", "OoT IR Short"),
            (GameType.ocarina_of_time_beta_quest, "Beta Quest", "OoT BQ"),
        ],
    },
    GameType.secret_of_mana: {
        "name": "Secret of Mana",
        "variants": [
            (GameType.secret_of_mana, "Normal", "SoM"),
            (GameType.secret_of_mana_german, "German", "SoM German"),
            (GameType.secret_of_mana_short, "Short", "SoM Short"),
            (GameType.secret_of_mana_short_german, "Short German", "SoM Short German"),
        ],
    },
    GameType.pokemon_emerald_randomizer: {
        "name": "Pokémon Emerald",
        "variants": [
            (GameType.pokemon_emerald_randomizer, "Randomizer", "Emerald"),
            (GameType.pokemon_emerald_old_randomizer, "Old Randomizer", "Emerald Old"),
            (GameType.pokemon_emerald_old_randomizer_short, "Short Old Randomizer", "Emerald Old Short"),
            (GameType.pokemon_emerald_vanilla, "Vanilla", "Emerald Vanilla"),
        ],
    },
    GameType.pokemon_crystal: {
        "name": "Pokémon Crystal",
        "variants": [
            (GameType.pokemon_crystal, "Normal", "Poké Crystal"),
            (GameType.pokemon_crystal_randomizer, "Current Randomizer", "Crystal Current"),
            (GameType.pokemon_crystal_classic_randomizer, "Classic Randomizer", "Crystal Classic"),
            (GameType.pokemon_crystal_randomizer_tournament, "2021 Summer Tournament Randomizer", "Crystal Tournament"),
        ],
    },
    GameType.pokemon_red_blue: {
        "name": "Pokémon Red/Blue",
        "variants": [
            (GameType.pokemon_red_blue, "Normal", "Poké Red/Blue"),
            (GameType.pokemon_red_blue_randomizer, "Randomizer", "Red/Blue Random"),
        ],
    },
    GameType.sonic_adventure_2: {
        "name": "Sonic Adventure 2",
        "variants": [
            (GameType.sonic_adventure_2, "Normal", "SA2"),
            (GameType.sonic_adventure_2_hero_story, "Hero Story", "SA2 Hero"),
            (GameType.sonic_adventure_2_dark_story, "Dark Story", "SA2 Dark"),
            (GameType.sonic_adventure_2_long, "Long", "SA2 Long"),
            (GameType.sonic_adventure_2_nightmare, "Nightmare", "SA2 Nightmare"),
        ],
    },
    GameType.super_mario_odyssey: {
        "name": "Super Mario Odyssey",
        "variants": [
            (GameType.super_mario_odyssey, "Normal", "SMO"),
            (GameType.super_mario_odyssey_short, "Short", "SMO Short"),
            (GameType.super_mario_odyssey_long, "Long", "SMO Long"),
            (GameType.super_mario_odyssey_all_kingdoms, "All Kingdoms", "SMO All Kingdoms"),
            (GameType.super_mario_odyssey_all_kingdoms_post_game, "All Kingdoms + Post Game", "SMO AK + PG"),
        ],
    },
    GameType.generic_bingo: {
        "name": "Generic Bingo",
        "variants": [
            (GameType.generic_bingo, "Normal", "Generic"),
            (GameType.generic_bingo_deluxe, "Deluxe", "Generic Deluxe"),
        ],
    },
    GameType.alttp_randomizer: {
        "name": "Zelda: A Link to the Past",
        "variants": [
            (GameType.alttp_randomizer, "Randomizer", "ALttP Random"),
            (GameType.alttp_enemy_randomizer, "Enemy Randomizer", "ALttP Enemizer"),
            (GameType.alttp_vanilla_rmg, "Vanilla", "ALttP Vanilla"),
        ],
    },
    GameType.banjo_tooie: {
        "name": "Banjo-Tooie",
        "variants": [
            (GameType.banjo_tooie, "Normal", "Banjo-Tooie"),
            (GameType.banjo_tooie_short, "Short", "Banjo-Tooie Short"),
            (GameType.banjo_tooie_long, "Long", "Banjo-Tooie Long"),
        ],
    },
    GameType.binding_of_isaac: {
        "name": "The Binding of Isaac: Afterbirth+",
        "variants": [
            (GameType.binding_of_isaac, "Normal", "Isaac AB+"),
            (GameType.binding_of_isaac_racing, "Racing+", "Isaac R+"),
        ],
    },
    GameType.bowsers_fury_blackout: {
        "name": "Bowser's Fury",
        "variants": [
            (GameType.bowsers_fury_blackout, "Blackout", "Bowser's Fury Blackout"),
            (GameType.bowsers_fury_lockout,  "Lockout",  "Bowser's Fury Lockout"),
        ],
    },
    GameType.castlevania_sotn: {
        "name": "Castlevania: Symphony of the Night",
        "variants": [
            (GameType.castlevania_sotn, "Normal", "SotN"),
            (GameType.castlevania_sotn_randomizer, "Randomizer", "SotN Randomizer"),
        ],
    },
    GameType.celeste: {
        "name": "Celeste",
        "variants": [
            (GameType.celeste, "Normal", "Celeste"),
            (GameType.celeste_blackout, "Blackout", "Celeste Blackout"),
            (GameType.celeste_long, "Long", "Celeste Long"),
            (GameType.celeste_cn, "Normal - CN", "Celeste CN"),
            (GameType.celeste_portuguese, "Normal - Portuguese", "Celeste PT"),
            (GameType.celeste_blackout_cn, "Blackout - CN", "Celeste Blackout CN"),
            (GameType.celeste_turkish, "Normal - Turkish", "Celeste TR"),
        ],
    },
    GameType.crash_twinsanity: {
        "name": "Crash Twinsanity",
        "variants": [
            (GameType.crash_twinsanity, "Normal", "Crash Twinsanity"),
            (GameType.crash_twinsanity_hoverless_variant, "Hoverless", "Twinsanity Hoverless"),
        ],
    },
    GameType.custom: {
        "name": "Custom (Advanced)",
        "variants": [
            (GameType.custom, "Fixed Board", "Custom"),
            (GameType.custom_randomized, "Randomized", "Custom (Rand)"),
            (GameType.custom_srl_v5, "SRL v5", "Custom (SRLv5)"),
            (GameType.custom_isaac, "Isaac", "Custom (Isaac)"),
        ],
    },
    GameType.darkest_dungeon: {
        "name": "Darkest Dungeon",
        "variants": [
            (GameType.darkest_dungeon, "Normal", "Darkest Dungeon"),
            (GameType.darkest_dungeon_lockout, "Lockout", "DD Lockout"),
        ],
    },
    GameType.ff4_ancient_cave: {
        "name": "Final Fantasy 4",
        "variants": [
            (GameType.ff4_ancient_cave, "Ancient Cave", "FF4 AC"),
            (GameType.ff4_free_enterprise, "Free Enterprise", "FF4 FE"),
        ],
    },
    GameType.final_fantasy_1: {
        "name": "Final Fantasy 1",
        "variants": [
            (GameType.final_fantasy_1, "Normal", "FF1"),
            (GameType.final_fantasy_1_randomizer_short, "Randomizer Short", "FF1 Random Short"),
            (GameType.final_fantasy_1_randomizer_long, "Randomizer Long (Defeat Chaos)", "FF1 Random Long"),
            (GameType.final_fantasy_1_randomizer_winter_dab, "Randomizer Winter DAB", "FF1R DAB"),
        ],
    },
    GameType.spyro_2: {
        "name": "Spyro 2: Ripto's Rage",
        "variants": [
            (GameType.spyro_2, "3.1", "Spyro 2 - 3.1"),
            (GameType.spyro_2_4_x, "4.1", "Spyro 2 - 4.1"),
            (GameType.spyro_2_4_no_ds, "4.1 No Dragon Shores", "Spyro 2 - 4.1 No DS"),
        ],
    },
    GameType.wii_sports_resort: {
            "name": "Wii Sports Resort",
        "variants": [
            (GameType.wii_sports_resort, "Normal", "WSR"),
            (GameType.wii_sports_resort_all_stamps, "All Stamps", "WSR All Stamps"),
            (GameType.wii_sports_resort_all_stamps_lite, "All Stamps Lite", "WSR Stamps Lite"),
        ],
    },
    GameType.halo_master_chief_collection: {
        "name": "Halo: The Master Chief Collection",
        "variants": [
            (GameType.halo_master_chief_collection, "Normal", "Halo MCC"),
            (GameType.halo_master_chief_collection_synergy, "Synergy", "Halo MCC Synergy"),
        ],
    },
    GameType.hollow_knight: {
        "name": "Hollow Knight",
        "variants": [
            (GameType.hollow_knight, "Normal", "Hollow Knight"),
            (GameType.hollow_knight_item_rando, "Item Randomizer", "HK Item Rando"),
            (GameType.hollow_knight_cn, "Normal - CN", "Hollow Knight CN"),
            (GameType.hollow_knight_item_rando_cn, "Item Randomizer - CN", "HK Random CN"),
            (GameType.hollow_knight_item_rando_pt, "Item Randomizer - Portuguese", "HK Random PT"),
            (GameType.hollow_knight_item_rando_cursed, "Item Randomizer - Cursed", "HK Item Rando Cursed"),
            (GameType.hollow_knight_item_rando_tiebreakerless, "Item Randomizer - No Tiebreakers", "HK Item Rando Tiebreakerless"),
            (GameType.hollow_knight_item_rando_dab, "Item Randomizer - DAB", "HK Item Rando DAB"),
            (GameType.hollow_knight_cratthew, "Cratthew", "HK Cratthew"),
        ],
    },
    GameType.illusion_of_gaia_rando: {
        "name": "Illusion of Gaia",
        "variants": [
            (GameType.illusion_of_gaia_rando, "Randomizer", "IoGR"),
        ],
    },
    GameType.ittle_dew_2: {
        "name": "Ittle Dew 2",
        "variants": [
            (GameType.ittle_dew_2, "Normal", "Ittle Dew 2"),
            (GameType.ittle_dew_2_blackout, "Blackout/Lockout", "ID2 Blackout"),
            (GameType.ittle_dew_2_expert, "Expert", "ID2 Expert")
        ],
    },
    GameType.jak_and_daxter: {
        "name": "Jak and Daxter: The Precursor Legacy",
        "variants": [
            (GameType.jak_and_daxter, "Normal", "J&D: TPL"),
            (GameType.jak_and_daxter_easy, "Easy", "J&D: TPL Easy"),
            (GameType.jak_and_daxter_new_game_plus, "NG+", "J&D: TPL NG+"),
        ],
    },
    GameType.kingdom_hearts_final_mix: {
        "name": "Kingdom Hearts Final Mix",
        "variants": [
            (GameType.kingdom_hearts_final_mix, "Normal", "KHFM"),
            (GameType.kingdom_hearts_final_mix_randomizer, "Randomizer", "KHFM Rando"),
        ],
    },
    GameType.kingdom_hearts_2_final_mix: {
        "name": "Kingdom Hearts II Final Mix",
        "variants": [
            (GameType.kingdom_hearts_2_final_mix, "Original", "KH2FM"),
            (GameType.kingdom_hearts_2_final_mix_current, "Current", "KH2FM Current"),
        ],
    },
    GameType.lego_batman: {
        "name": "LEGO Batman: The Video Game",
        "variants": [
            (GameType.lego_batman, "Normal", "LEGO Batman"),
            (GameType.lego_batman_long, "Long", "LEGO Batman Long"),
            (GameType.lego_batman_semi_random_level_names, "Semi-Random Level Names", "LEGO Batman Semi-Random Names"),
            (GameType.lego_batman_semi_random_level_numbers, "Semi-Random Level Numbers", "LEGO Batman Semi-Random Numbers"),
            (GameType.lego_batman_random_level_names, "Random Level Names", "LEGO Batman Random Names"),
            (GameType.lego_batman_random_level_numbers, "Random Level Numbers", "LEGO Batman Random Numbers"),
        ],
    },
    GameType.lufia_2: {
        "name": "Lufia 2",
        "variants": [
            (GameType.lufia_2, "Ancient Cave", "Lufia 2 AC"),
        ],
    },
    GameType.luigis_mansion: {
        "name": "Luigi's Mansion",
        "variants": [
            (GameType.luigis_mansion, "Normal", "Luigi's Mansion"),
            (GameType.luigis_mansion_all_doors_unlocked, "All Doors Unlocked", "LM ADU"),
            (GameType.luigis_mansion_all_rooms, "All Rooms", "LM All Rooms"),
        ],
    },
    GameType.links_awakening: {
        "name": "Zelda: Link's Awakening",
        "variants": [
            (GameType.links_awakening, "Randomizer", "LADX Random"),
        ],
    },
    GameType.links_awakening: {
        "name": "Zelda: Link's Awakening",
        "variants": [
            (GameType.links_awakening, "Randomizer", "LADX Random"),
        ],
    },
    GameType.links_awakening_switch: {
        "name": "Zelda: Link's Awakening (Switch)",
        "variants": [
            (GameType.links_awakening_switch, "Normal", "LAS"),
        ],
    },
    GameType.majoras_mask: {
        "name": "Zelda: Majora's Mask",
        "variants": [
            (GameType.majoras_mask, "Normal", "Zelda: MM"),
            (GameType.majoras_mask_item_randomizer, "Item Randomizer", "Zelda: MM IR"),
        ],
    },
    GameType.mario_maker_2: {
        "name": "Super Mario Maker 2",
        "variants": [
            (GameType.mario_maker_2, "Normal", "Mario Maker 2"),
            (GameType.mario_maker_2_2021, "2021", "Mario Maker 2 - 2021"),
        ],
    },
    GameType.metroid_prime_randomizer_balanced: {
        "name": "Metroid Prime",
        "variants": [
            (GameType.metroid_prime_randomizer_balanced, "Randomizer Balanced", "MPR Balanced"),
            (GameType.metroid_prime_randomizer_chaos, "Randomizer Chaos", "MPR Chaos"),
        ],
    },
    GameType.metroid_prime_2_randomizer_balanced: {
    "name": "Metroid Prime 2: Echoes",
    "variants": [
        (GameType.metroid_prime_2_randomizer_balanced, "Randomizer Balanced", "MP2 Balanced"),
        (GameType.metroid_prime_2_randomizer_chaos, "Randomizer Chaos", "MP2 Chaos"),
    ],
    },
    GameType.mgs_portable_ops_plus_training: {
        "name": "MGS: Portable Ops+",
        "variants": [
            (GameType.mgs_portable_ops_plus_training, "Training", "MPO+ Training"),
        ],
    },
    GameType.minecraft_1_16_1: {
        "name": "Minecraft",
        "variants": [
            (GameType.minecraft_1_16_1, "1.16.1", "Minecraft 1.16.1"),
            (GameType.minecraft_1_8_9, "1.8.9", "Minecraft 1.8.9"),
            (GameType.minecraft_1_17_1, "Most recent (1.17.1)", "Minecraft 1.17.1"),
        ],
    },
    GameType.monster_rancher_2: {
        "name": "Monster Rancher 2",
        "variants": [
            (GameType.monster_rancher_2, "Normal", "MR2"),
            (GameType.monster_rancher_2_rng_lite, "RNG Lite", "MR2 RNG Lite"),
            (GameType.monster_rancher_2_viewers, "Viewers", "MR2 Viewers"),
        ],
    },
    GameType.octopath_traveler: {
        "name": "Octopath Traveler",
        "variants": [
            (GameType.octopath_traveler, "Standard", "Octopath"),
            (GameType.octopath_traveler_story, "Story", "Octopath Story"),
            (GameType.octopath_traveler_short, "Short Card", "Octopath - Short Game"),
            (GameType.octopath_traveler_medium, "Medium Card", "Octopath - Medium Game"),
            (GameType.octopath_traveler_long, "Long Card", "Octopath - Long Game")
        ],
    },
    GameType.old_school_runescape: {
        "name": "Old School Runescape",
        "variants": [
            (GameType.old_school_runescape, "F2P + Entrana", "OSRS")
        ],
    },
    GameType.paper_mario: {
        "name": "Paper Mario",
        "variants": [
            (GameType.paper_mario, "Normal", "The Pape"),
            (GameType.paper_mario_new, "New", "The Pape (New)"),
        ],
    },
    GameType.pikmin_2: {
        "name": "Pikmin 2",
        "variants": [
            (GameType.pikmin_2, "Normal", "Pikmin 2"),
            (GameType.pikmin_2_all_areas_unlocked, "All Areas Unlocked", "Pikmin 2 AAU"),
        ],
    },
    GameType.pokemon_heartgold_soulsilver: {
        "name": "Pokémon HeartGold/SoulSilver",
        "variants": [
            (GameType.pokemon_heartgold_soulsilver, "Randomizer", "Poké HG/SS"),
        ],
    },
    GameType.runescape_3_clue_scroll: {
        "name": "Runescape 3",
        "variants": [
            (GameType.runescape_3_clue_scroll, "Clue Scroll", "RS3 Clue"),
        ],
    },
    GameType.slime_rancher: {
        "name": "Slime Rancher",
        "variants": [
            (GameType.slime_rancher, "Normal", "Slime Rancher"),
            (GameType.slime_rancher_lockout, "Lockout", "Slime Rancher Lockout"),
        ],
    },
    GameType.splatoon_2_octo_expansion: {
        "name": "Splatoon 2",
        "variants": [
            (GameType.splatoon_2_octo_expansion, "Octo Expansion", "Splatoon 2: OE"),
            (GameType.splatoon_2_hero_mode, "Hero Mode", "Splatoon 2: Hero Mode"),
        ],
    },
    GameType.stardew_valley: {
        "name": "Stardew Valley",
        "variants": [
            (GameType.stardew_valley, "Normal", "Stardew Valley"),
            (GameType.stardew_valley_challenge_cup, "Challenge Cup", "Stardew Valley CC"),
        ],
    },
    GameType.super_mario_64: {
        "name": "Super Mario 64",
        "variants": [
            (GameType.super_mario_64, "Normal", "SM64"),
            (GameType.super_mario_64_randomizer_lockout, "Randomizer Lockout", "SM64 Randomizer"),
        ],
    },
    GameType.super_mario_sunshine: {
        "name": "Super Mario Sunshine",
        "variants": [
            (GameType.super_mario_sunshine, "Normal", "SMS"),
            (GameType.super_mario_sunshine_jp, "Normal - JP", "SMS JP"),
            (GameType.super_mario_sunshine_tournament, "Tournament", "SMS Tournament"),
            (GameType.super_mario_sunshine_lockout, "Lockout", "SMS Lockout"),
            (GameType.super_mario_sunshine_1v1, "1v1", "SMS 1v1"),
            (GameType.super_mario_sunshine_1v1_jp, "1v1 - JP", "SMS 1v1 JP"),
            (GameType.super_mario_sunshine_1v1_beta, "1v1 Beta", "SMS 1v1 Beta"),
            (GameType.super_mario_sunshine_2v2, "2v2", "SMS 2v2"),
        ],
    },
    GameType.super_mario_world: {
        "name": "Super Mario World",
        "variants": [
            (GameType.super_mario_world, "Normal", "SMW"),
            (GameType.super_mario_world_legacy, "Legacy SRL", "SMW Legacy"),
        ],
    },
    GameType.super_metroid: {
        "name": "Super Metroid",
        "variants": [
            (GameType.super_metroid, "Normal", "Super Metroid"),
            (GameType.super_metroid_experimental, "Experimental", "Super Metroid Exp."),
            (GameType.super_metroid_double_anti_bingo, "Double Anti-Bingo", "Super Metroid DAB"),
        ],
    },
    GameType.super_smash_bros_brawl_all_brawl: {
        "name": "Super Smash Bros. Brawl",
        "variants": [
            (GameType.super_smash_bros_brawl_all_brawl, "All Brawl", "SSBB All"),
            (GameType.super_smash_bros_brawl_basic, "Basic", "SSBB Basic"),
        ],
    },
    GameType.resident_evil_hd_randomizer: {
        "name": "Resident Evil: HD",
        "variants": [
            (GameType.resident_evil_hd_randomizer, "Randomizer", "REHD Random"),
        ],
    },
    GameType.terraria: {
        "name": "Terraria",
        "variants": [
            (GameType.terraria, "Pre-Hardmode", "Terraria PreHM"),
            (GameType.terraria_1_3, "1.3 Hardmode", "Terraria 1.3 HM"),
            (GameType.terraria_1_3_pre_hardmode, "1.3 Pre-Hardmode", "Terraria 1.3 PreHM"),
        ],
    },
    GameType.the_witness: {
        "name": "The Witness",
        "variants": [
            (GameType.the_witness, "Normal", "The Witness"),
            (GameType.the_witness_low, "Low%", "The Witness Low%"),
        ],
    },
    GameType.wii_sports_series_all_sports: {
        "name": "Wii Sports Series",
        "variants": [
            (GameType.wii_sports_series_all_sports, "All Sports", "WSS All Sports")
        ],
    },
    GameType.wii_sports_club_all_sports: {
        "name": "Wii Sports Club",
        "variants": [
            (GameType.wii_sports_club_all_sports, "All Sports", "WSC All Sports"),
            (GameType.wii_sports_club_golf_only, "Golf Only", "WSC Golf Only"),
            (GameType.wii_sports_club_all_sports_expert, "All Sports Expert", "WSC All Sports Expert"),
        ],
    },
    GameType.world_of_warcraft: {
        "name": "World of Warcraft",
        "variants": [
            (GameType.world_of_warcraft, "Normal", "WoW"),
            (GameType.world_of_warcraft_new_character, "New Character", "WoW New Char"),
            (GameType.world_of_warcraft_random_level_one, "Random Level 1", "WoW RL1"),
        ],
    },
    GameType.yokus_island_express: {
        "name": "Yoku's Island Express",
        "variants": [
            (GameType.yokus_island_express, "Vanilla", "Yoku's IE"),
            (GameType.yokus_island_express_simplified, "Vanilla (Simplified)", "Yoku's IE Simple"),
            (GameType.yokus_island_express_randomizer, "Randomizer", "Yoku's IE Rando"),
            (GameType.yokus_island_express_randomizer_simplified, "Randomizer (Simplified)", "Yoku's IE Rando Simple"),
        ],
    },
    GameType.yugioh_forbidden_memories: {
        "name": "Yu-Gi-Oh! Forbidden Memories",
        "variants": [
            (GameType.yugioh_forbidden_memories, "Normal", "YGO FM"),
            (GameType.yugioh_forbidden_memories_alternate, "Type B", "YGO FM (Type B)"),
        ],
    },
    GameType.wii_party_global_trot: {
        "name": "Wii Party",
        "variants": [
            (GameType.wii_party_global_trot, "Global Trot", "Wii Party GT"),
        ],
    },
    GameType.zelda_botw: {
        "name": "Zelda: Breath of the Wild",
        "variants": [
            (GameType.zelda_botw, "Normal", "BotW Normal"),
            (GameType.zelda_botw_short, "Short", "BotW Short"),
            (GameType.zelda_botw_long, "Long", "BotW Long"),
            (GameType.zelda_botw_french, "Normal - FR", "BotW FR Normal"),
            (GameType.zelda_botw_french_short, "Short - FR", "BotW FR Short"),
            (GameType.zelda_botw_french_long, "Long - FR", "BotW FR Long"),
            (GameType.zelda_botw_jp, "Normal - JP", "BotW JP Normal"),
            (GameType.zelda_botw_jp_short, "Short - JP", "BotW JP Short"),
            (GameType.zelda_botw_jp_long, "Long - JP", "BotW JP Long"),
        ],
    },
    GameType.zelda_wind_waker_sd: {
        "name": "Zelda: The Wind Waker SD",
        "variants": [
            (GameType.zelda_wind_waker_sd, "Normal", "TWW SD"),
            (GameType.zelda_wind_waker_randomizer, "Randomizer", "TWW Rando"),
        ],
    },
    **singleton_group(GameType._102_dalmatians, "102 Dalmatians: Puppies to the Rescue", "102 Dal: PTTR"),
    **singleton_group(GameType.a_bugs_life, "A Bug's Life", "Bug's Life"),
    **singleton_group(GameType.adams_family, "The Addams Family (SNES)", "Addams Family"),
    **singleton_group(GameType.around_the_clock_at_bikini_bottom, "Around the Clock at Bikini Bottom", "Around the Clock"),
    **singleton_group(GameType.banjo_dreamie, "Banjo-Dreamie", "Banjo-Dreamie"),
    **singleton_group(GameType.battle_for_bikini_bottom, "SpongeBob SquarePants: Battle for Bikini Bottom", "BFBB"),
    **singleton_group(GameType.battleblock_theater, "BattleBlock Theater", "BBT"),
    **singleton_group(GameType.bloodborne, "Bloodborne", "Bloodborne"),
    **singleton_group(GameType.bloodstained_rando, "Bloodstained: Ritual of the Night Randomizer", "Bloodstained Rando"),
    **singleton_group(GameType.cardfight_vanguard, "Cardfight!! Vanguard", "CFVG"),
    **singleton_group(GameType.castlevania_aria_of_sorrow, "Castlevania: Aria of Sorrow", "CV: AoS"),
    **singleton_group(GameType.cat_quest_2, "Cat Quest 2", "Cat Quest 2"),
    **singleton_group(GameType.celeste_classic_mods, "Celeste Classic", "Celeste Classic Mods", "Mods"),
    **singleton_group(GameType.chess_dot_com, "Chess.com", "Chess.com"),
    **singleton_group(GameType.chibi_robo, "Chibi-Robo! Plug Into Adventure", "Chibi-Robo!"),
    **singleton_group(GameType.club_penguin, "Club Penguin", "Club Peng."),
    **singleton_group(GameType.cod_warzone, "Call of Duty: Warzone", "CoD: Warzone"),
    **singleton_group(GameType.crash_bandicoot_4, "Crash Bandicoot 4: It's About Time", "C4: IAT"),
    **singleton_group(GameType.crash_team_racing, "Crash Team Racing", "CTR"),
    **singleton_group(GameType.crystalis, "Crystalis", "Crystalis", "Randomizer"),
    **singleton_group(GameType.cuphead, "Cuphead", "Cuphead"),
    **singleton_group(GameType.cyberpunk_2077, "Cyberpunk 2077", "CP2077"),
    **singleton_group(GameType.dark_devotion, "Dark Devotion", "Dark Devotion"),
    **singleton_group(GameType.dark_souls, "Dark Souls", "Dark Souls"),
    **singleton_group(GameType.dark_souls_2, "Dark Souls 2", "Dark Souls 2"),
    **singleton_group(GameType.dark_souls_3, "Dark Souls 3", "Dark Souls 3"),
    **singleton_group(GameType.deaths_door, "Death's Door", "Death's Door"),
    **singleton_group(GameType.disneys_magical_mirror, "Disney's Magical Mirror Starring Mickey Mouse", "DMMSMM"),
    **singleton_group(GameType.donald_duck_goin_quackers, "Donald Duck: Goin' Quackers!", "DD: GQ!"),
    **singleton_group(GameType.dont_starve_together, "Don't Starve Together", "Don't Starve Together"),
    **singleton_group(GameType.doodle_champion_island_games_begin, "Doodle Champion Island Games Begin!", "Doodle Champion Island Games Begin!"),
    **singleton_group(GameType.dragon_warrior_monsters, "Dragon Warrior Monsters", "DWM"),
    **singleton_group(GameType.dream, "Dream", "Dream"),
    **singleton_group(GameType.donkey_kong_64, "Donkey Kong 64", "DK64"),
    **singleton_group(GameType.doom_2016, "DOOM (2016)", "DOOM (2016)"),
    **singleton_group(GameType.escape_from_tarkov, "Escape from Tarkov", "Escape from Tarkov"),
    **singleton_group(GameType.fantastic_contraption, "Fantastic Contraption", "Fantastic Contraption"),
    **singleton_group(GameType.fallout_new_vegas, "Fallout: New Vegas", "Fallout: NV"),
    **singleton_group(GameType.final_fantasy_8, "Final Fantasy 8", "FF8"),
    **singleton_group(GameType.geometry_dash, "Geometry Dash", "Geometry Dash"),
    **singleton_group(GameType.golden_sun_lost_age_randomizer, "Golden Sun: The Lost Age Randomizer", "GS: TLA Rando"),
    **singleton_group(GameType.hades, "Hades", "Hades"),
    **singleton_group(GameType.happy_wheels_level_editor, "Happy Wheels Level Editor", "HW Level Editor"),
    **singleton_group(GameType.harry_potter_2, "Harry Potter and the Chamber of Secrets", "HP2"),
    **singleton_group(GameType.hat_in_time, "A Hat in Time", "A Hat in Time"),
    **singleton_group(GameType.hogs_of_war, "Hogs of War", "Hogs of War"),
    **singleton_group(GameType.iconoclasts, "Iconoclasts", "Iconoclasts"),
    **singleton_group(GameType.into_the_breach, "Into the Breach", "ITB"),
    **singleton_group(GameType.jade_cocoon, "Jade Cocoon: Story of the Tamamayu", "Jade Cocoon: SotT"),
    **singleton_group(GameType.kirby_and_the_amazing_mirror, "Kirby & The Amazing Mirror", "KtAM"),
    **singleton_group(GameType.kotor, "Star Wars: Knights of the Old Republic", "KotOR"),
    **singleton_group(GameType.league_of_legends_aram, "League of Legends ARAM", "LoL ARAM"),
    **singleton_group(GameType.legend_of_mana, "Legend of Mana", "LoM"),
    **singleton_group(GameType.lego_pirates_of_the_caribbean, "LEGO Pirates of the Caribbean", "LEGO PotC"),
    **singleton_group(GameType.lego_star_wars, "LEGO Star Wars: The Video Game", "LEGO SW"),
    **singleton_group(GameType.lego_star_wars_the_complete_saga_ds, "LEGO Star Wars: The Complete Saga DS",
            "LEGO SW: TCS DS"),
    **singleton_group(GameType.lucah_boad, "Lucah: Born of a Dream", "Lucah: BOAD"),
    **singleton_group(GameType.luigis_mansion_dark_moon, "Luigi's Mansion: Dark Moon", "LM Dark Moon"),
    **singleton_group(GameType.luigis_mansion_3, "Luigi's Mansion 3", "LM 3"),
    **singleton_group(GameType.make_a_good_megaman_level_2, "Make a Good Mega Man Level Contest 2", "MaGMMLC2"),
    **singleton_group(GameType.mario_kart_8_deluxe, "Mario Kart 8 Deluxe", "MK8 Deluxe"),
    **singleton_group(GameType.mario_kart_double_dash, "Mario Kart: Double Dash", "MKDD"),
    **singleton_group(GameType.mario_party_advance, "Mario Party Advance", "MP Advance"),
    **singleton_group(GameType.mario_sports_mix, "Mario Sports Mix", "Mario Sports Mix"),
    **singleton_group(GameType.mass_effect_2, "Mass Effect 2", "Mass Effect 2"),
    **singleton_group(GameType.medabots_ax_rokusho, "Medabots AX: Rokusho", "Medabots AX"),
    **singleton_group(GameType.mega_man_11, "Mega Man 11", "MM11"),
    **singleton_group(GameType.mgs_peace_walker, "MGS: Peace Walker", "MGSPW"),
    **singleton_group(GameType.monster_hunter_world, "Monster Hunter World", "MHW"),
    **singleton_group(GameType.monsters_inc_scare_island, "Monsters, Inc. Scare Island", "Monsters, Inc"),
    **singleton_group(GameType.myst, "Myst", "Myst"),
    **singleton_group(GameType.need_for_speed_carbon, "Need for Speed: Carbon", "NFSC"),
    **singleton_group(GameType.new_super_mario_bros_2, "New Super Mario Bros. 2", "NSMB2"),
    **singleton_group(GameType.new_super_mario_bros_ds, "New Super Mario Bros. DS", "NSMB DS"),
    **singleton_group(GameType.new_super_mario_bros_u, "New Super Mario Bros. U", "NSMBU"),
    **singleton_group(GameType.new_super_mario_bros_wii, "New Super Mario Bros. Wii", "NSMB Wii"),
    **singleton_group(GameType.nier_automata, "NieR: Automata", "NieR"),
    **singleton_group(GameType.nights_into_dreams, "NiGHTS: Into Dreams", "NiGHTS Into Dreams"),
    **singleton_group(GameType.otogi, "Otogi: Myth of Demons", "Otogi"),
    **singleton_group(GameType.pen_pen_triicelon, "Pen Pen TriIcelon", "Pen Pen TriIcelon"),
    **singleton_group(GameType.phasmophobia, "Phasmophobia", "Phasmophobia"),
    **singleton_group(GameType.pikmin, "Pikmin", "Pikmin"),
    **singleton_group(GameType.pikmin_3, "Pikmin 3", "Pikmin 3"),
    **singleton_group(GameType.pokemon_black_white, "Pokémon Black/White", "Poké BW"),
    **singleton_group(GameType.pokemon_colosseum, "Pokémon Colosseum", "Poké Colosseum"),
    **singleton_group(GameType.pokemon_omega_ruby_alpha_sapphire, "Pokémon Omega Ruby/Alpha Sapphire", "Poké OR/AS"),
    **singleton_group(GameType.pokemon_platinum, "Pokémon Platinum", "Poké Plat."),
    **singleton_group(GameType.pokemon_ruby_sapphire, "Pokémon Ruby/Sapphire", "Poké Ruby/Sapph"),
    **singleton_group(GameType.pokemon_sword_shield, "Pokémon Sword/Shield", "Poké SWSH"),
    **singleton_group(GameType.pokemon_snap, "Pokémon Snap", "Poké Snap"),
    **singleton_group(GameType.pokemon_x_y, "Pokémon X and Y", "Poké XY"),
    **singleton_group(GameType.pokepark_wii, "PokéPark Wii: Pikachu's Adventure", "PokéPark"),
    **singleton_group(GameType.psychonauts, "Psychonauts", "Psychonauts"),
    **singleton_group(GameType.quest_for_glory_vga, "Quest for Glory 1 VGA", "QFG1 VGA"),
    **singleton_group(GameType.rabi_ribi, "Rabi-Ribi", "Rabi-Ribi"),
    **singleton_group(GameType.rayman_legends, "Rayman Legends", "Rayman Legends"),
    **singleton_group(GameType.rayman_ps1, "Rayman (PS1)", "Rayman"),
    **singleton_group(GameType.revenge_of_the_bird_king, "Revenge of the Bird King", "RotBK"),
    **singleton_group(GameType.riven, "Riven: The Sequel to Myst", "Riven"),
    **singleton_group(GameType.road_trip_adventure, "Road Trip Adventure", "Road Trip Adv."),
    **singleton_group(GameType.saga_frontier, "SaGa Frontier (PS1)", "SaGa Frontier (PS1)"),
    **singleton_group(GameType.salt_and_sanctuary, "Salt and Sanctuary", "Salt and Sanctuary"),
    **singleton_group(GameType.sekiro, "Sekiro: Shadows Die Twice", "Sekiro"),
    **singleton_group(GameType.simpsons_hit_and_run, "The Simpsons: Hit & Run", "SHaR"),
    **singleton_group(GameType.skyrim, "The Elder Scrolls V: Skyrim", "Skyrim"),
    **singleton_group(GameType.sludgelife, "Sludgelife", "Sludgelife"),
    **singleton_group(GameType.smash_ultimate_world_of_light, "Smash Ultimate: World of Light", "Smush: WoL"),
    **singleton_group(GameType.snailiad, "Snailiad", "Snailiad"),
    **singleton_group(GameType.sonic_adventure_dx, "Sonic Adventure DX", "SADX"),
    **singleton_group(GameType.sonic_r, "Sonic R", "Sonic R"),
    **singleton_group(GameType.soul_knight, "Soul Knight", "Soul Knight"),
    **singleton_group(GameType.spelunky_2, "Spelunky 2", "Spelunk 2"),
    **singleton_group(GameType.spyro_3_year_of_the_dragon, "Spyro: Year of the Dragon", "Spyro: YotD"),
    **singleton_group(GameType.super_mario_63, "Super Mario 63", "SM63"),
    **singleton_group(GameType.super_mario_galaxy, "Super Mario Galaxy", "SM Galaxy"),
    **singleton_group(GameType.super_mario_galaxy_2, "Super Mario Galaxy 2", "SM Galaxy 2"),
    **singleton_group(GameType.super_meat_boy, "Super Meat Boy", "Super Meat Boy"),
    **singleton_group(GameType.super_metroid_alttp_crossover_randomizer,
            "Super Metroid & A Link to the Past Crossover Randomizer", "SMZ3"),
    **singleton_group(GameType.super_paper_mario, "Super Paper Mario", "SPM"),
    **singleton_group(GameType.tony_hawks_pro_skater_1_2, "Tony Hawk's Pro Skater 1+2", "THPS 1+2"),
    **singleton_group(GameType.touhou_luna_nights, "Touhou Luna Nights", "TLN"),
    **singleton_group(GameType.toy_story_2, "Toy Story 2: Buzz Lightyear to the Rescue", "Toy Story 2"),
    **singleton_group(GameType.transistor, "Transistor", "Transistor"),
    **singleton_group(GameType.undertale, "Undertale", "Undertale"),
    **singleton_group(GameType.untitled_goose_game, "Untitled Goose Game", "Goose Game"),
    **singleton_group(GameType.video_games, "Video Games Bingo", "Video Games"),
    **singleton_group(GameType.wii_play, "Wii Play", "Wii Play"),
    **singleton_group(GameType.wii_sports, "Wii Sports", "Wii Sports"),
    **singleton_group(GameType.xenoblade_chronicles_future_connected, "Xenoblade Chronicles: Future Connected", "XC FC"),
    **singleton_group(GameType.yooka_laylee, "Yooka-Laylee", "Yook"),
    **singleton_group(GameType.yooka_laylee_impossible_lair, "Yooka-Laylee and the Impossible Lair", "YLIL"),
    **singleton_group(GameType.zelda_minish_cap_randomizer, "Zelda: The Minish Cap Randomizer", "TMCR"),
    **singleton_group(GameType.zelda_skyward_sword, "Zelda: Skyward Sword", "Zelda: SS"),
    **singleton_group(GameType.zelda_twilight_princess, "Zelda: Twilight Princess", "Zelda: TP"),
}

GAME_TYPE_GROUPS = {}
GAME_TYPE_GROUP_NAMES = {}
GAME_TYPE_LONG_NAMES = {}
GAME_TYPE_SHORT_NAMES = {}
GAME_TYPE_VARIANT_NAMES = {}
ALL_VARIANTS = []
for group, entry in GAME_GROUPS.items():
    name = entry["name"]
    variants = entry["variants"]
    for game, variant_name, short_name in variants:
        if len(variants) == 1 and variant_name == "Normal":
            long_name = name
        else:
            long_name = name + " - " + variant_name
        GAME_TYPE_GROUPS[game] = group
        GAME_TYPE_GROUP_NAMES[game] = name
        GAME_TYPE_LONG_NAMES[game] = long_name
        GAME_TYPE_SHORT_NAMES[game] = short_name
        GAME_TYPE_VARIANT_NAMES[game] = variant_name
        ALL_VARIANTS.append(game)
