bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "HM01 Cut"
    },
    {
        "name": "HM04 Strength"
    },
    {
        "name": "TM01 Hone Claws"
    },
    {
        "name": "TM76 Struggle Bug"
    },
    {
        "name": "TM09 Venoshock"
    },
    {
        "name": "TM65 Shadow Claw"
    },
    {
        "name": "TM96 Nature Power"
    },
    {
        "name": "TM74 Gyro Ball"
    },
    {
        "name": "TM40 Aerial Ace"
    },
    {
        "name": "TM28 Dig"
    },
    {
        "name": "TM81 X-Scissor"
    },
    {
        "name": "TM47 Low Sleep"
    },
    {
        "name": "TM62 Acrobatics"
    },
    {
        "name": "TM43 Flame Charge"
    },
    {
        "name": "TM49 Echoed Voice"
    },
    {
        "name": "15 TMs"
    },
    {
        "name": "20 TMs"
    },
    {
        "name": "Have 3 TMs on the same Pokemon at the same time"
    },
    {
        "name": "Pikachu"
    },
    {
        "name": "Simisage"
    },
    {
        "name": "Simisear"
    },
    {
        "name": "Simipour"
    },
    {
        "name": "Trade for Quacklin"
    },
    {
        "name": "Trade for Thumper"
    },
    {
        "name": "Quilladin"
    },
    {
        "name": "Braxian"
    },
    {
        "name": "Frogadier"
    },
    {
        "name": "Butterfree/Beedrill"
    },
    {
        "name": "Vivillon"
    },
    {
        "name": "Gyarados"
    },
    {
        "name": "Charmeleon"
    },
    {
        "name": "Wartortle"
    },
    {
        "name": "Ivysaur"
    },
    {
        "name": "Abra"
    },
    {
        "name": "Audino"
    },
    {
        "name": "Snorlax"
    },
    {
        "name": "Aurorus/Tyrantrum"
    },
    {
        "name": "Glaceon"
    },
    {
        "name": "Sylveon"
    },
    {
        "name": "Nidoqueen/Nidoking"
    },
    {
        "name": "Tauros/Miltank"
    },
    {
        "name": "Pinsir/Heracross"
    },
    {
        "name": "Aerodactyl"
    },
    {
        "name": "Evolve 3 Pokemon using Evolutionary Stones"
    },
    {
        "name": "15 Obtained Pokemon"
    },
    {
        "name": "20 Obtained Pokemon"
    },
    {
        "name": "60 Seen Pokemon"
    },
    {
        "name": "80 Seen Pokemon"
    },
    {
        "name": "Rumble Badge"
    },
    {
        "name": "Plant Badge"
    },
    {
        "name": "Fairy Badge"
    },
    {
        "name": "Lucky Egg"
    },
    {
        "name": "Quick Claw"
    },
    {
        "name": "Rocky Helmet"
    },
    {
        "name": "Whipped Dream"
    },
    {
        "name": "Lucarionite"
    },
    {
        "name": "Amulet Coin"
    },
    {
        "name": "Flame Plate"
    },
    {
        "name": "Master Ball"
    },
    {
        "name": "Power Plant Pass"
    },
    {
        "name": "Good Rod"
    },
    {
        "name": "Don't use X-Items in battle"
    },
    {
        "name": "Defeat 7 Flare Grunts"
    },
    {
        "name": "Get a massage"
    },
    {
        "name": "Use a move with more than 90 Base Power"
    },
    {
        "name": "Don't buy Repels"
    },
    {
        "name": "Don't use HMs in battle"
    },
    {
        "name": "Get 50,000 Pokedollars"
    },
    {
        "name": "Get 100,000 Pokedollars"
    },
    {
        "name": "Get 200,000 Pokedollars"
    },
    {
        "name": "Obtain a Pokemon with 4 STAB moves"
    },
    {
        "name": "Don’t use Rare Candies"
    },
    {
        "name": "Encounter 5 Pokemon in bushes"
    },
    {
        "name": "Become a Viscount/Viscountess in the Battle Chateau"
    },
    {
        "name": "Turn Battle Animations on for all Gym Leaders"
    },
    {
        "name": "Set Mode"
    },
    {
        "name": "Never use the Roller Skates"
    },
    {
        "name": "Use a move that faints the user"
    },
    {
        "name": "Obtain a Pokemon with 500+ BST"
    },
    {
        "name": "Ditch the gift Mega Lucario"
    },
    {
        "name": "Kill a pokemon 10+ levels higher than you"
    },
    {
        "name": "Enjoy a meal at 'Restaurant Le Nah'"
    },
    {
        "name": "Grow 10 levels on a single Pokemon using the Day-Care"
    },
    {
        "name": "Take a photo at a Photo Spot"
    },
    {
        "name": "Evolve Inkay"
    },
    {
        "name": "Kill a Seviper using a Zangoose"
    },
    {
        "name": "Kill a Pikachu using an Eevee"
    },
    {
        "name": "Relearn a move"
    },
    {
        "name": "Level 30 Pokemon"
    },
    {
        "name": "Level 40 Pokemon"
    },
    {
        "name": "Kill a Pokemon using the same Pokemon"
    },
    {
        "name": "Examine yourself in a mirror for a full minute"
    },
    {
        "name": "Successfully use Protect 3 times in a row"
    },
    {
        "name": "Sketch a move"
    },
    {
        "name": "Mega Evolve 3 times"
    },
    {
        "name": "Evolve a pokemon via friendship"
    },
    {
        "name": "Defeat 10 Bunnelby"
    },
    {
        "name": "Kill a horde of Pokemon in 1 turn"
    },
    {
        "name": "Enter the Prism Tower"
    },
    {
        "name": "Defeat Grant on your first try"
    },
    {
        "name": "Defeat a gym without using a super-effective move"
    },
    {
        "name": "Buy a Lumiose Galette"
    },
    {
        "name": "Beat Trevor in a 'Pokemon Battle'"
    },
    {
        "name": "Kill a Pokemon using Perish Song or Destiny Bond"
    }
];
