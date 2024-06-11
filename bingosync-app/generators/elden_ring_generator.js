bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Kill Godrick while summoning Nepheli Loux"
    },
    {
        "name": "Kill Rennala after she summons all 4 different spirits"
    },
    {
        "name": "Kill Radahn without summoning NPCs"
    },
    {
        "name": "Kill Rykard and discard Serpent Hunter +0"
    },
    {
        "name": "Kill Morgott"
    },
    {
        "name": "Kill an Ancestor Spirit"
    },
    {
        "name": "Kill Mohg, Lord of Blood"
    },
    {
        "name": "Kill Margit with 4+ parries"
    },
    {
        "name": "Kill Leonine Misbegotten"
    },
    {
        "name": "Kill a Red Wolf Boss"
    },
    {
        "name": "Kill Godskin Noble (Volcano Manor) without status effects"
    },
    {
        "name": "Kill a Godskin Apostle"
    },
    {
        "name": "Kill Godfrey (Gold Spirit)"
    },
    {
        "name": "Kill Mimic Tear consumables only"
    },
    {
        "name": "Kill Valiant Gargoyles"
    },
    {
        "name": "Kill Fia's Champions"
    },
    {
        "name": "Kill Mohg (Sewers)"
    },
    {
        "name": "Kill Loretta (Blue Spirit)"
    },
    {
        "name": "Kill Commander O'Neil"
    },
    {
        "name": "Kill Grafted Scion (Chapel of Anticipation)"
    },
    {
        "name": "Kill Soldier of Godrick bare fist only"
    },
    {
        "name": "Kill Limgrave Tree Sentinel with a +0 weapon"
    },
    {
        "name": "Kill Agheel with a +0 weapon"
    },
    {
        "name": "Kill Tree Sentinel duo"
    },
    {
        "name": "Kill Crucible Knight & Misbegotten Warrior duo"
    },
    {
        "name": "Kill Elemer of the Briar"
    },
    {
        "name": "Kill Putrid Crystalian trio"
    },
    {
        "name": "Kill Wormface"
    },
    {
        "name": "Kill Royal Revenant (Kingsrealm Ruins)"
    },
    {
        "name": "Kill Greyoll without status effects"
    },
    {
        "name": "Kill a Dragonkin Soldier"
    },
    {
        "name": "Kill a Magma Wyrm boss"
    },
    {
        "name": "Kill a Fallingstar Beast"
    },
    {
        "name": "Kill a Black Blade Kindred"
    },
    {
        "name": "Kill an Omenkiller boss"
    },
    {
        "name": "Kill 1 Deathbird and 1 Death Rite Bird"
    },
    {
        "name": "Kill 2 Cemetery Shades"
    },
    {
        "name": "Kill 3 Watchdogs"
    },
    {
        "name": "Kill 2 Duelist bosses"
    },
    {
        "name": "Kill 2 Black Knife Assassins"
    },
    {
        "name": "Kill 3 Crucible Knights"
    },
    {
        "name": "Kill 3 Dragon Heart bosses"
    },
    {
        "name": "Kill 3 Erdtree Avatars"
    },
    {
        "name": "Kill 3 Night's Cavalry"
    },
    {
        "name": "Kill 3 Tibia Mariners"
    },
    {
        "name": "Kill 3 Bell Bearing Hunters"
    },
    {
        "name": "Kill 3 duo/trio bosses"
    },
    {
        "name": "Kill 5 bosses that ride a horse"
    },
    {
        "name": "Kill 5 bosses with 'tree' in their name"
    },
    {
        "name": "Kill a Remembrance boss hitless"
    },
    {
        "name": "Kill a Remembrance boss colossal weapons only"
    },
    {
        "name": "Kill a Remembrance boss daggers, claws, or fists only"
    },
    {
        "name": "Kill a Remembrance boss bow only"
    },
    {
        "name": "Kill a Remembrance boss sorcery only"
    },
    {
        "name": "Kill a Remembrance boss incantations only"
    },
    {
        "name": "Kill a Remembrance boss w/ remembrance weapon only"
    },
    {
        "name": "Kill a boss Spirit Ashes only"
    },
    {
        "name": "Kill a boss Consumables only"
    },
    {
        "name": "Kill a boss on Torrent the whole fight"
    },
    {
        "name": "Finish off a boss with the explosive physick"
    },
    {
        "name": "Kill 8 bosses in Limgrave"
    },
    {
        "name": "Kill 6 bosses in Liurnia"
    },
    {
        "name": "Kill 5 bosses in Caelid"
    },
    {
        "name": "Kill 5 bosses in Altus Plateau (no Volcano Manor)"
    },
    {
        "name": "Complete 2 catacomb dungeons"
    },
    {
        "name": "Complete 2 cave or grotto dungeons"
    },
    {
        "name": "Complete 2 tunnel or precipice dungeons"
    },
    {
        "name": "Complete an Altus Plateau Hero's Grave"
    },
    {
        "name": "Complete 4 evergaols"
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
        "name": "Acquire 8 different Talismans"
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
        "name": "Kill 3 NPC invaders"
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
