bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Blue Collar"
    },
    {
        "name": "Guru's Oil Pot"
    },
    {
        "name": "Blue Cape"
    },
    {
        "name": "Water Medal"
    },
    {
        "name": "Healing Herb"
    },
    {
        "name": "Ultimate Egg"
    },
    {
        "name": "Music Box: \"Whoever gets this will fall in love with you in an instant\""
    },
    {
        "name": "Selfi's Prized Egg"
    },
    {
        "name": "Octopus Balls: \"Delicious Octopus Dumplings\""
    },
    {
        "name": "Aura Bike: \"Someday I will have one\""
    },
    {
        "name": "3 Buildings: 3+ buildings in Save Screen"
    },
    {
        "name": "6 Buildings: 6+ buildings in Save Screen"
    },
    {
        "name": "9 Buildings: 9+ buildings in Save Screen"
    },
    {
        "name": "2 Girls: 2+ girls in Save Screen"
    },
    {
        "name": "4 Girls: 4+ girls in Save Screen"
    },
    {
        "name": "Monster Book: Complete 1 column of 1 elemental page of the Monster Book"
    },
    {
        "name": "Nico (Good): Meet Nico at a Cultural Building"
    },
    {
        "name": "Nico (Evil): Punch Nico (cello scene)"
    },
    {
        "name": "Selfi (Good): Get saved from a U-Boat by Selfi"
    },
    {
        "name": "Selfi (Evil): Be called a Bastard by Selfi (pulunpa rescue failure)"
    },
    {
        "name": "Fur (Good): Give Octopus Dumplings to Fur"
    },
    {
        "name": "Fur (Evil): Make Fur mad at you; \"I don't like you either, Koh\""
    },
    {
        "name": "Patty (Good): Have Patty serve you Octopus Wieners"
    },
    {
        "name": "Patty (Evil): Eat Patty's specialty and leave without paying"
    },
    {
        "name": "Vivian (Good): Offer Vivian flowers after her dance at the theatre"
    },
    {
        "name": "Vivian (Evil): Tell Vivian you missed her final, lead performance"
    },
    {
        "name": "Mia (Good): Return Mia's glasses"
    },
    {
        "name": "Mia (Evil): Tell Mia she has a bad figure (pool event)"
    },
    {
        "name": "Cherrl (Good): \"Curry\" (Cherrl Nurse path)"
    },
    {
        "name": "Cherrl (Evil): Find the healing herb and feed it to a monster"
    },
    {
        "name": "Ghosh (Good): Watch Vivian's dance together with Ghosh"
    },
    {
        "name": "Ghosh (Evil): Have 3 Wins against Ghosh in combat"
    },
    {
        "name": "Familiar level 15"
    },
    {
        "name": "Familiar level 25"
    },
    {
        "name": "Koh level 10"
    },
    {
        "name": "Koh level 20"
    },
    {
        "name": "3 Eggs: Carry 3 eggs in inventory"
    },
    {
        "name": "5 Familiars: Have 5 hatched familiars in Monster Hut"
    },
    {
        "name": "Win a race: Come first at the Racetrack"
    },
    {
        "name": "King Pin: Beat Bet at the Bowling game (30 points)"
    },
    {
        "name": "Whack a Mole: Beat Bet at the Hit the Mole game (20 points)"
    },
    {
        "name": "Batting game: Beat Bet at the Batting game (40 points)"
    },
    {
        "name": "Lucky 7s: Hit the 777 jackpot at the Casino"
    },
    {
        "name": "Barbell Toss: Beat the gym record at Barbell Toss (20 points)"
    },
    {
        "name": "Koh-Boat Show: Complete theatre routine as a U-boat (use U-boat glitch)"
    },
    {
        "name": "3 Bonks: Get knocked out by Fon (fail comedy act)"
    },
    {
        "name": "Fountain climb: Stand still on top of the Fountain"
    },
    {
        "name": "Ball of Wisdom: Teach familiar a spell from a ball"
    },
    {
        "name": "Glitched Entry: Perform a Glitched Entry to the tower"
    },
    {
        "name": "Millionaire: Amass 1,000,000 Gold"
    },
    {
        "name": "Oleem sacrifice: Sacrifice a home-hatched familiar with Oleem"
    },
    {
        "name": "Power Attack: Deal 100+ damage in a single melee/mixture/ball attack from Koh"
    },
    {
        "name": "Rock Breaker: Destroy a rock or ice rock"
    },
    {
        "name": "Picket Fence: Recover an item from an enemy Picket"
    },
    {
        "name": "Egg Rescue: Recover an egg from an enemy Viper"
    },
    {
        "name": "Push it to the Limit: Feed limit fruit to a Killer, then survive an attack from it"
    },
    {
        "name": "Don't Fence Me In: Seal yourself off using transformed Manoeva until Earthquake"
    },
    {
        "name": "Immunity: Survive till Earthquake using Immunity Glitch"
    },
    {
        "name": "Our Powers Combined: Acquire all 3 elements of either sword/shield/wand/seed/crystal"
    },
    {
        "name": "Troll combo: Have Hammer, Bowgun and Sword"
    },
    {
        "name": "Cold Fusion: Fuse two water monsters"
    },
    {
        "name": "Life on the Edge: Survive on 1HP after an enemy attack"
    },
    {
        "name": "Frog Strats: Kill an enemy with your Frog melee attack"
    },
    {
        "name": "Reflector: Reflect a spell back to the caster"
    },
    {
        "name": "Moonattack: Strike an enemy while facing the other way (moonwalk glitch)"
    }
];
