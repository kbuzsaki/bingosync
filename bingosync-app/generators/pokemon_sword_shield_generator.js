bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Crit Leon or Hop"
    },
    {
        "name": "Spin around for 1 Minute"
    },
    {
        "name": "Die in the Wild Area"
    },
    {
        "name": "Defeat a strong-looking wild Pokémon"
    },
    {
        "name": "Bike into a Gurdurr on Route 8"
    },
    {
        "name": "Defeat a breeder in the Wild Area"
    },
    {
        "name": "Buy a TR from a Watt Trade and teach it (Min 2,000 Watts)"
    },
    {
        "name": "Catch a 1* Raid Battle Pokémon"
    },
    {
        "name": "Catch a 2* Raid Battle Pokémon"
    },
    {
        "name": "Catch a 3* Raid Battle Pokémon"
    },
    {
        "name": "Dynamax in every gym you enter"
    },
    {
        "name": "Trade for Cheekers"
    },
    {
        "name": "Trade for Cash"
    },
    {
        "name": "Trade for Candyfloss"
    },
    {
        "name": "Obtain 15 TMs"
    },
    {
        "name": "Trigger Yamper's ability"
    },
    {
        "name": "Cook a Sweet Potato Curry"
    },
    {
        "name": "Cook a Spicy Mushroom Curry"
    },
    {
        "name": "Cook a Sour Apple Curry"
    },
    {
        "name": "Cook a Bitter Sausage Curry"
    },
    {
        "name": "Cook 3 different curries (Different taste doesn’t count)"
    },
    {
        "name": "Cook 2 curries of at least Milcery Class"
    },
    {
        "name": "5 Curry Dex Recipes"
    },
    {
        "name": "Obtain 5 Fancy Apples"
    },
    {
        "name": "Get 100,000 Pokedollars"
    },
    {
        "name": "Get 1,000 Watts"
    },
    {
        "name": "Get 2,500 Watts"
    },
    {
        "name": "Get 5,000 Watts"
    },
    {
        "name": "1 hour Poké Job"
    },
    {
        "name": "Old Letter quest"
    },
    {
        "name": "Fossil Pokémon"
    },
    {
        "name": "Dynamax Rookidee"
    },
    {
        "name": "Dynamax Wooloo"
    },
    {
        "name": "Buy 69 Pokeballs"
    },
    {
        "name": "Obtain 10 revives"
    },
    {
        "name": "1 of each battle item"
    },
    {
        "name": "Release starter before reaching Motostoke"
    },
    {
        "name": "4 Badges Owned"
    },
    {
        "name": "Catch all 3 Pokémon in Kabu’s Gym Mission"
    },
    {
        "name": "Defeat all trainers on Route 3"
    },
    {
        "name": "Sirfetch’d"
    },
    {
        "name": "Get a Flapple/Appletun"
    },
    {
        "name": "Use a Cracked Pot on a Sinistea"
    },
    {
        "name": "Evolve Milcery"
    },
    {
        "name": "Shake 5 different Berry Trees"
    },
    {
        "name": "Flex on Mum"
    },
    {
        "name": "Play with your Pokémon in Pokémon Camp"
    },
    {
        "name": "Evolve a Pokémon via Evolution Stone"
    },
    {
        "name": "Escape from Battle without Running, Fainting, or Winning"
    },
    {
        "name": "Amulet Coin"
    },
    {
        "name": "4 Type Boosting Items"
    },
    {
        "name": "Beat up Hop 4 times"
    },
    {
        "name": "Rotom Rally: Meetup Spot"
    },
    {
        "name": "Rotom Rally: East Lake Axewell"
    },
    {
        "name": "Rotom Rally: Dappled Grove"
    },
    {
        "name": "Rotom Rally: Giant’s Seat"
    },
    {
        "name": "Rotom Rally: Giant’s Cap"
    },
    {
        "name": "Rotom Rally: Hammerlocke Hills"
    },
    {
        "name": "Rotom Rally: Bridge Field"
    },
    {
        "name": "Overworld Butterfree"
    },
    {
        "name": "Buy 10,000 Pokedollars of Clothes"
    },
    {
        "name": "Buy 20,000 Pokedollars of Clothes"
    },
    {
        "name": "Buy 30,000 Pokedollars of Clothes"
    },
    {
        "name": "Raboot"
    },
    {
        "name": "Thwackey"
    },
    {
        "name": "Drizzile"
    },
    {
        "name": "Get a 5 streak on the Digging Duo"
    },
    {
        "name": "A Pokémon Taller than 7 feet"
    },
    {
        "name": "An Eeveelution"
    },
    {
        "name": "Change your hairstyle"
    },
    {
        "name": "Hi-Tech Earbuds"
    },
    {
        "name": "Buy 5 Curry Ingredients"
    },
    {
        "name": "Catch 5 different Bug Type Pokémon"
    },
    {
        "name": "Catch 3 different Grass Type Pokémon"
    },
    {
        "name": "Catch 4 different Normal Type Pokémon"
    },
    {
        "name": "Catch an evolved Pokémon"
    },
    {
        "name": "Evolve a Gen 1 Pokémon"
    },
    {
        "name": "Evolve a Gen 2 Pokémon"
    },
    {
        "name": "Evolve a Gen 3 Pokémon"
    },
    {
        "name": "Evolve a Gen 4 Pokémon"
    },
    {
        "name": "Evolve a Gen 5 Pokémon"
    },
    {
        "name": "Evolve a Gen 6 Pokémon"
    },
    {
        "name": "Evolve a Gen 7 Pokémon"
    },
    {
        "name": "Evolve a Gen 8 Pokémon"
    },
    {
        "name": "Release One Pokémon"
    },
    {
        "name": "Release Two Pokémon"
    },
    {
        "name": "Release Three Pokémon"
    },
    {
        "name": "Defeat a Gym Leader with Battle Animations on"
    },
    {
        "name": "Win a battle in the Battle Cafe"
    },
    {
        "name": "Use Struggle"
    },
    {
        "name": "Defeat 4 Team Yell Grunts"
    },
    {
        "name": "Defeat 6 Team Yell Grunts"
    },
    {
        "name": "Defeat 8 Team Yell Grunts"
    },
    {
        "name": "60 Pokémon Seen"
    },
    {
        "name": "80 Pokémon Seen"
    },
    {
        "name": "100 Pokémon Seen"
    },
    {
        "name": "10 Pokémon Owned"
    },
    {
        "name": "15 Pokémon Owned"
    },
    {
        "name": "20 Pokémon Owned"
    },
    {
        "name": "Watch The Opening Ceremony Cutscene"
    },
    {
        "name": "Buy and Wear the Poison Uniform"
    },
    {
        "name": "Buy and Wear the Steel Uniform"
    },
    {
        "name": "Buy and Wear the Electric Uniform"
    },
    {
        "name": "Do not use EXP Candies or Rare Candies"
    },
    {
        "name": "No Pokecenters"
    },
    {
        "name": "Collect 3 different Evolutionary Stones"
    },
    {
        "name": "Collect 5 different Evolutionary Stones"
    },
    {
        "name": "Own 1 Pokémon from each generation"
    },
    {
        "name": "Don’t evolve your starter 1 times"
    },
    {
        "name": "Don’t evolve your starter 3 times"
    },
    {
        "name": "Don’t evolve your starter 5 times"
    },
    {
        "name": "Have a Pokémon with a weather-related ability"
    },
    {
        "name": "Upgrade your Rotom Bike to the max"
    },
    {
        "name": "Upgrade your Rotom Bike once"
    },
    {
        "name": "Get TM81 Bulldoze"
    },
    {
        "name": "Get TM73 Cross Poison"
    },
    {
        "name": "Defeat a Pokémon from a 5* Raid Battle"
    },
    {
        "name": "Defeat a Pokémon from a 4* Raid Battle"
    },
    {
        "name": "6 Pokémon that share the same type"
    },
    {
        "name": "3 Pokémon starting with the same letter"
    },
    {
        "name": "A Pokémon weighing less than 1 LB"
    },
    {
        "name": "A Pokémon weighing at least 150 LBs"
    },
    {
        "name": "Catch 5 different Pokémon from Dappled Grove"
    },
    {
        "name": "Catch 5 different Pokémon from East Lake Axwell"
    },
    {
        "name": "Catch 5 different Pokémon from West Lake Axwell"
    },
    {
        "name": "Catch 5 different Pokémon from South Lake Miloch"
    },
    {
        "name": "Catch 3 different Pokémon from Watchtower Ruins"
    },
    {
        "name": "Catch 3 different Pokémon from North Lake Miloch"
    },
    {
        "name": "Get 1 of each EV reducing berries"
    },
    {
        "name": "Talk to 3 Watt Traders"
    },
    {
        "name": "Talk to 5 Watt Traders"
    },
    {
        "name": "Talk to 7 Watt Traders"
    },
    {
        "name": "Talk to 5 NPCs in the wild area"
    },
    {
        "name": "Talk to 10 NPCs in the wild area"
    },
    {
        "name": "Talk to 15 NPCs in the wild area"
    },
    {
        "name": "Catch 1 static encounter in the wild area"
    },
    {
        "name": "Catch 3 static encounters in the wild area"
    },
    {
        "name": "Catch 5 static encounters in the wild area"
    },
    {
        "name": "Pick up 5 different items in the wild area"
    },
    {
        "name": "Pick up 10 different items in the wild area"
    },
    {
        "name": "Pick up 15 different items in the wild area"
    },
    {
        "name": "Catch 1 Pokémon encountered by fishing"
    },
    {
        "name": "Catch 3 Pokémon encountered by fishing"
    },
    {
        "name": "Catch 5 Pokémon encountered by fishing"
    },
    {
        "name": "Do a raid in Giant’s Seat"
    },
    {
        "name": "Do a raid in South Lake Miloch"
    },
    {
        "name": "Do a raid in North Lake Miloch"
    },
    {
        "name": "Sell an item for 5000 Pokedollars or more"
    },
    {
        "name": "Sell an item for 10000 Pokedollars or more"
    },
    {
        "name": "Collect 3 different wings"
    },
    {
        "name": "Collect 5 wings"
    },
    {
        "name": "Collect 7 wings"
    },
    {
        "name": "Pick up an evolution item"
    },
    {
        "name": "Talk to both nursery workers"
    },
    {
        "name": "Buy 2 TMs from any mart"
    },
    {
        "name": "TM39 Facade"
    },
    {
        "name": "TM84 Tail Slap"
    },
    {
        "name": "TM31 Attract"
    },
    {
        "name": "TM82 Electroweb"
    },
    {
        "name": "Get the Expert Belt"
    },
    {
        "name": "Get the Black Glasses"
    },
    {
        "name": "Enter 5 different NPC houses"
    },
    {
        "name": "Buy 69 Berries"
    },
    {
        "name": "Buy 420 Berries"
    },
    {
        "name": "Defeat all trainers on Route 4"
    },
    {
        "name": "Defeat 1 raid"
    },
    {
        "name": "Defeat 2 raids"
    },
    {
        "name": "Defeat 3 raids"
    },
    {
        "name": "Keep default options on until Hop 2"
    },
    {
        "name": "Defeat a Wooloo"
    },
    {
        "name": "Wooloo"
    },
    {
        "name": "Get an Everstone"
    },
    {
        "name": "Breed a Pokémon"
    },
    {
        "name": "Defeat an encounter from a berry tree"
    },
    {
        "name": "Customise trainer card"
    },
    {
        "name": "Send a Pokémon out on a Poke Job"
    },
    {
        "name": "Talk to Ball Guy"
    },
    {
        "name": "Buy 5 Quick Balls"
    },
    {
        "name": "Buy 5 Dusk Balls"
    },
    {
        "name": "Buy 5 Heal Balls"
    }
];
