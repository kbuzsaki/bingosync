bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Defeat Godrick while summoning Nepheli Loux"
    },
    {
        "name": "Defeat Rennala after she summons all 4 different spirits"
    },
    {
        "name": "Defeat Radahn without summoning NPCs"
    },
    {
        "name": "Defeat Rykard and discard Serpent Hunter +0"
    },
    {
        "name": "Defeat Morgott"
    },
    {
        "name": "Defeat an Ancestor Spirit"
    },
    {
        "name": "Defeat Mohg, Lord of Blood"
    },
    {
        "name": "Defeat Margit with 4+ parries"
    },
    {
        "name": "Defeat Leonine Misbegotten"
    },
    {
        "name": "Defeat Red Wolf of Radagon"
    },
    {
        "name": "Defeat Godskin Noble (Volcano Manor) without status effects"
    },
    {
        "name": "Defeat a Godskin Apostle"
    },
    {
        "name": "Defeat Godfrey (Gold Spirit)"
    },
    {
        "name": "Defeat Mimic Tear consumables only"
    },
    {
        "name": "Defeat Valiant Gargoyles"
    },
    {
        "name": "Defeat Fia's Champions"
    },
    {
        "name": "Defeat Mohg (Sewers)"
    },
    {
        "name": "Defeat Loretta (Blue Spirit)"
    },
    {
        "name": "Defeat Commander O'Neil"
    },
    {
        "name": "Defeat Grafted Scion (Chapel of Anticipation)"
    },
    {
        "name": "Defeat Soldier of Godrick bare fist only"
    },
    {
        "name": "Defeat Limgrave Tree Sentinel with a +0 weapon"
    },
    {
        "name": "Defeat Agheel with a +0 weapon"
    },
    {
        "name": "Defeat Tree Sentinel duo"
    },
    {
        "name": "Defeat Crucible Knight & Misbegotten Warrior duo"
    },
    {
        "name": "Defeat Elemer of the Briar"
    },
    {
        "name": "Defeat Putrid Crystalian trio"
    },
    {
        "name": "Defeat Wormface"
    },
    {
        "name": "Defeat Royal Revenant (Kingsrealm Ruins)"
    },
    {
        "name": "Defeat Greyoll without status effects"
    },
    {
        "name": "Defeat a Dragonkin Soldier"
    },
    {
        "name": "Defeat a Magma Wyrm boss"
    },
    {
        "name": "Defeat a Fallingstar Beast"
    },
    {
        "name": "Defeat a Black Blade Kindred"
    },
    {
        "name": "Defeat an Omenkiller boss"
    },
    {
        "name": "Defeat 1 Deathbird and 1 Death Rite Bird"
    },
    {
        "name": "Defeat 2 Cemetery Shades"
    },
    {
        "name": "Defeat 2 Duelist bosses"
    },
    {
        "name": "Defeat 2 Black Knife Assassins"
    },
    {
        "name": "Defeat 3 Erdtree Watchdogs"
    },
    {
        "name": "Defeat 3 Crucible Knights"
    },
    {
        "name": "Defeat 3 Dragon Heart bosses"
    },
    {
        "name": "Defeat 3 Erdtree Avatars"
    },
    {
        "name": "Defeat 3 Night's Cavalry"
    },
    {
        "name": "Defeat 3 Tibia Mariners"
    },
    {
        "name": "Defeat 3 Bell Bearing Hunters"
    },
    {
        "name": "Defeat 3 duo/trio bosses"
    },
    {
        "name": "Defeat 5 bosses that ride a horse"
    },
    {
        "name": "Defeat 5 bosses with 'tree' in their name"
    },
    {
        "name": "Defeat a Remembrance boss hitless"
    },
    {
        "name": "Defeat a Remembrance boss colossal weapons only"
    },
    {
        "name": "Defeat a Remembrance boss daggers, claws, or fists only"
    },
    {
        "name": "Defeat a Remembrance boss bow only"
    },
    {
        "name": "Defeat a Remembrance boss sorcery only"
    },
    {
        "name": "Defeat a Remembrance boss incantations only"
    },
    {
        "name": "Defeat a Remembrance boss with Remembrance boss weapon only"
    },
    {
        "name": "Defeat a boss Spirit Ashes only"
    },
    {
        "name": "Defeat a boss Consumables only"
    },
    {
        "name": "Defeat a boss on Torrent the whole fight"
    },
    {
        "name": "Finish off a boss with the explosive physick"
    },
    {
        "name": "Defeat 8 bosses in Limgrave"
    },
    {
        "name": "Defeat 6 bosses in Liurnia"
    },
    {
        "name": "Defeat 5 bosses in Caelid"
    },
    {
        "name": "Defeat 5 bosses in Altus Plateau (no Volcano Manor)"
    },
    {
        "name": "Complete 2 catacomb dungeons"
    },
    {
        "name": "Complete 2 cave or grotto dungeons"
    },
    {
        "name": "Complete 2 tunnel dungeons"
    },
    {
        "name": "Complete an Altus Plateau Hero's Grave"
    },
    {
        "name": "Complete 4 evergaols"
    },
    {
        "name": "Clear the Frenzy tower in Liurnia"
    },
    {
        "name": "Acquire 4 different Remembrances"
    },
    {
        "name": "Acquire full Dectus Medallion"
    },
    {
        "name": "Acquire Somberstone Bell Bearing [1] and [2]"
    },
    {
        "name": "Acquire Smithing-stone Bell Bearing [1] and [2]"
    },
    {
        "name": "Acquire Grave and Ghost Glovewort Bell Bearings [1]"
    },
    {
        "name": "Acquire 3 Imbued Sword Keys"
    },
    {
        "name": "Acquire Margit's and Mohg's Shackles"
    },
    {
        "name": "Restore Godrick’s Great Rune"
    },
    {
        "name": "Restore Radahn’s Great Rune"
    },
    {
        "name": "Restore Rykard’s Great Rune"
    },
    {
        "name": "Restore Morgott’s Great Rune"
    },
    {
        "name": "Somber +9 weapon"
    },
    {
        "name": "Smithing-stone +12 weapon"
    },
    {
        "name": "Spirit Ash +4 summon"
    },
    {
        "name": "Sacred Flask +7"
    },
    {
        "name": "10 Sacred Flask charges"
    },
    {
        "name": "Acquire 10 Physick Flask tears"
    },
    {
        "name": "Acquire 10 Cracked Pots"
    },
    {
        "name": "Acquire 5 Ritual Pots"
    },
    {
        "name": "Acquire 4 Memory Stones"
    },
    {
        "name": "Acquire 3 Whetblades"
    },
    {
        "name": "Acquire 2 legendary armaments"
    },
    {
        "name": "Acquire 8 different talismans"
    },
    {
        "name": "Acquire 6 different Glintstone Staves"
    },
    {
        "name": "Acquire 4 different Sacred Seals"
    },
    {
        "name": "Acquire both Scarseal talismans"
    },
    {
        "name": "Take Rya's hand to Volcano Manor"
    },
    {
        "name": "Return Thop's academy key"
    },
    {
        "name": "Acquire Fingerslayer Blade"
    },
    {
        "name": "Invade and defeat Magnus the Beast Claw"
    },
    {
        "name": "Dupe a Remembrance at a Mausoleum"
    },
    {
        "name": "Memory of Grace with 50k+ Runes"
    },
    {
        "name": "Defeat 3 NPC invaders"
    },
    {
        "name": "Kill 3 friendly NPCs (no hermit merchants)"
    },
    {
        "name": "Kill Gurranq"
    },
    {
        "name": "Sell Bloodhound's Fang +0"
    },
    {
        "name": "Use AoW Lightning Ram to kill 10 sheep"
    },
    {
        "name": "Learn 12 different sorceries"
    },
    {
        "name": "Learn 14 different incantations"
    },
    {
        "name": "Rune Level 60"
    },
    {
        "name": "30 Faith (no rebirth or buffs)"
    },
    {
        "name": "30 Intelligence (no rebirth or buffs)"
    }
];
