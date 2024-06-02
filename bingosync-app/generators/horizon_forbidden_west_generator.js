bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "1 ornament"
    },
    {
        "name": "2 ornaments"
    },
    {
        "name": "1 Vista Point"
    },
    {
        "name": "2 Vista Points"
    },
    {
        "name": "1 Black Box"
    },
    {
        "name": "2 Black Boxes"
    },
    {
        "name": "1 Survey Drone"
    },
    {
        "name": "2 Survey Drones"
    },
    {
        "name": "1 Signal Lens"
    },
    {
        "name": "3 Signal Lens"
    },
    {
        "name": "Turn in all Signal Lenses"
    },
    {
        "name": "any Daunt Quest"
    },
    {
        "name": "any No Man’s Land Quest"
    },
    {
        "name": "any Plainsong Quest"
    },
    {
        "name": "500 total shards"
    },
    {
        "name": "1500 total shards"
    },
    {
        "name": "Earn full stripes in 1 hunting trial"
    },
    {
        "name": "Earn 3 full strips in 1 hunting ground"
    },
    {
        "name": "1 melee pit trial"
    },
    {
        "name": "Beat a pit master"
    },
    {
        "name": "1 rebel camp"
    },
    {
        "name": "1 rebel outpost"
    },
    {
        "name": "Cauldron Mu"
    },
    {
        "name": "1 Cauldron (Mu or Tau)"
    },
    {
        "name": "1 Salvage Contract"
    },
    {
        "name": "1 Tallneck"
    },
    {
        "name": "Reach Riverhymn"
    },
    {
        "name": "Reach Plainsong"
    },
    {
        "name": "Reach Barren Light"
    },
    {
        "name": "Complete Twilight Path"
    },
    {
        "name": "Complete The Bristlebacks"
    },
    {
        "name": "Complete A Bigger Boom"
    },
    {
        "name": "Complete A Dash of Courage"
    },
    {
        "name": "Complete 3 side quests/errands"
    },
    {
        "name": "Complete 5 side quests/errands"
    },
    {
        "name": "Complete Death’s Door"
    },
    {
        "name": "Complete Tau"
    },
    {
        "name": "Complete the base"
    },
    {
        "name": "1 Vault key"
    },
    {
        "name": "Equip a sharpshot bow"
    },
    {
        "name": "Equip a warrior bow"
    },
    {
        "name": "Equip a spike thrower"
    },
    {
        "name": "Equip a power shredder"
    },
    {
        "name": "Equip a blast sling"
    },
    {
        "name": "Equip a ropecaster"
    },
    {
        "name": "Upgrade any weapon"
    },
    {
        "name": "Fully upgrade any weapon"
    },
    {
        "name": "Buy and equip an outfit"
    },
    {
        "name": "Fully upgrade any outfit"
    },
    {
        "name": "Equip Carja Blazon"
    },
    {
        "name": "Upgrade a pouch"
    },
    {
        "name": "Upgrade 3 pouches"
    },
    {
        "name": "Equip a blue weapon"
    },
    {
        "name": "Sell 3 weapons/outfits"
    },
    {
        "name": "Sell 5 weapons/outfits"
    },
    {
        "name": "Dye an outfit"
    },
    {
        "name": "Invest in 3 skills"
    },
    {
        "name": "Invest in 5 skills"
    },
    {
        "name": "Equip a valor surge"
    },
    {
        "name": "Fully upgrade a valor surge"
    },
    {
        "name": "Kill a machine with a weapon technique"
    },
    {
        "name": "Kill a machine with an environmental trap"
    },
    {
        "name": "Kill a machine with a crafted trap"
    },
    {
        "name": "Scan 4 machines"
    },
    {
        "name": "Scan 10 machines"
    },
    {
        "name": "Apply an outfit weave"
    },
    {
        "name": "Apply a weapon coil"
    },
    {
        "name": "Perform an aerial slash"
    },
    {
        "name": "Kill a thunderjaw"
    },
    {
        "name": "Kill a widemaw"
    },
    {
        "name": "Kill a clawstrider"
    },
    {
        "name": "Kill a fanghorn"
    },
    {
        "name": "Kill a human"
    },
    {
        "name": "Silent Strike an enemy"
    },
    {
        "name": "Pry open a chest"
    },
    {
        "name": "Craft and place 3 traps"
    },
    {
        "name": "Craft a potion"
    },
    {
        "name": "Drink a potion"
    },
    {
        "name": "Eat cooked food"
    },
    {
        "name": "Melee kill an enemy"
    },
    {
        "name": "Win a Strike match"
    },
    {
        "name": "Beat all rounds for a Strike opponent"
    },
    {
        "name": "Win once against 2 Strike opponents"
    },
    {
        "name": "Buy a Strike Piece"
    },
    {
        "name": "Fully apply a status effect"
    },
    {
        "name": "Fully apply frost"
    },
    {
        "name": "Fully apply shock"
    },
    {
        "name": "Fully apply fire"
    },
    {
        "name": "Fully apply acid"
    },
    {
        "name": "Fully apply purgewater"
    },
    {
        "name": "Fully apply a status effect to Aloy"
    },
    {
        "name": "Meet Talanah"
    },
    {
        "name": "Sell a Thunderjaw tail"
    },
    {
        "name": "Obtain a Leaplasher spark coil"
    },
    {
        "name": "Craft the Igniter"
    },
    {
        "name": "Override a machine other than a Charger"
    },
    {
        "name": "Loot greenshine sliver"
    }
];
