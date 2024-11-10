bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Kill Godrick while summoning Nepheli Loux"
    },
    {
        "name": "Kill Rennala"
    },
    {
        "name": "Kill Radahn without summoning NPCs"
    },
    {
        "name": "Kill Morgott"
    },
    {
        "name": "Kill the Giant Golem (Tower of Return)"
    },
    {
        "name": "Kill Wormface"
    },
    {
        "name": "Kill Margit"
    },
    {
        "name": "Kill Leonine Misbegotten"
    },
    {
        "name": "Kill a Red Wolf Boss"
    },
    {
        "name": "Kill a Godskin Noble"
    },
    {
        "name": "Kill a Godskin Apostle"
    },
    {
        "name": "Kill Godfrey (Gold Spirit)"
    },
    {
        "name": "Kill Mimic Tear"
    },
    {
        "name": "Kill Black Blade Kindred"
    },
    {
        "name": "Kill Elemer of the Briar"
    },
    {
        "name": "Kill Crystalians (Sellia Hideaway"
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
        "name": "Kill Soldier of Godrick"
    },
    {
        "name": "Kill Limgrave Tree Sentinel"
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
        "name": "Kill Greyoll"
    },
    {
        "name": "Kill an NPC Invader"
    },
    {
        "name": "Kill a Magma Wyrm boss"
    },
    {
        "name": "Kill a Fallingstar Beast"
    },
    {
        "name": "Kill a Death Rite Bird"
    },
    {
        "name": "Kill an Omenkiller boss"
    },
    {
        "name": "Kill a Deathbird"
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
        "name": "Kill 2 Bell Bearing Hunters"
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
        "name": "Kill a Remembrance boss without spirits"
    },
    {
        "name": "Kill a Remembrance boss"
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
        "name": "Kill 12 bosses in Limgrave"
    },
    {
        "name": "Kill 8 bosses in Liurnia"
    },
    {
        "name": "Kill 5 bosses in Caelid"
    },
    {
        "name": "Kill 3 bosses in Altus Plateau (including Volcano Manor)"
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
        "name": "Complete a Hero's Grave"
    },
    {
        "name": "Complete 4 evergaols"
    },
    {
        "name": "Acquire 3 different Remembrances"
    },
    {
        "name": "Acquire full Dectus Medallion"
    },
    {
        "name": "Acquire Somberstone Bell Bearing [1]"
    },
    {
        "name": "Acquire Smithing-stone Bell Bearing [1]"
    },
    {
        "name": "Acquire Ghost Glovewort Bell Bearing [1]"
    },
    {
        "name": "Acquire Somberstone Bell Bearing [2]"
    },
    {
        "name": "Acquire Grave Glovewort Bell Bearing [1]"
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
        "name": "Somber +7 weapon"
    },
    {
        "name": "Smithing-stone +12 weapon"
    },
    {
        "name": "Spirit Ash +4 summon"
    },
    {
        "name": "Sacred Flask +5"
    },
    {
        "name": "8 Sacred Flask charges"
    },
    {
        "name": "Acquire 8 Physick Flask tears"
    },
    {
        "name": "Acquire 8 Cracked Pots"
    },
    {
        "name": "Acquire 3 Ritual Pots"
    },
    {
        "name": "Acquire 3 Memory Stones"
    },
    {
        "name": "Acquire 3 Whetblades"
    },
    {
        "name": "Acquire 5 different Talismans"
    },
    {
        "name": "Acquire both Scarseal talismans"
    },
    {
        "name": "Get Rya's invitation"
    },
    {
        "name": "Acquire Smithing-stone Bell Bearing [2]"
    },
    {
        "name": "Acquire 15 Ashes of War"
    },
    {
        "name": "Invade Magnus the Beast Claw"
    },
    {
        "name": "Dupe a Remembrance at a Mausoleum"
    },
    {
        "name": "Memory of Grace with 20k+ Runes"
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
        "name": "Use AoW Lightning Ram to kill a sheep"
    },
    {
        "name": "Learn 9 different sorceries"
    },
    {
        "name": "Learn 11 different incantations"
    },
    {
        "name": "Rune Level 60"
    },
    {
        "name": "20 Faith (no rebirth or buffs)"
    },
    {
        "name": "Kill Lansseax"
    },
    {
        "name": "Give boc his needle back"
    },
    {
        "name": "Kill 2 Tree spirits"
    },
    {
        "name": "Kill 2 Crystillian Bosses"
    },
    {
        "name": "Kill the Milicent invader in Caelid"
    },
    {
        "name": "Collect 3 Staves"
    },
    {
        "name": "Kill Patches"
    },
    {
        "name": "Collect 3 Seals"
    }
];
