bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Fur Step Shards"
    },
    {
        "name": "Fur Step Graffiti"
    },
    {
        "name": "Fur Step Blocks"
    },
    {
        "name": "3 Fur Step Shines"
    },
    {
        "name": "5 Fur Step Shines"
    },
    {
        "name": "Scamper Shards"
    },
    {
        "name": "Scamper Gooigi"
    },
    {
        "name": "Scamper Blocks"
    },
    {
        "name": "3 Scamper Shines"
    },
    {
        "name": "5 Scamper Shines"
    },
    {
        "name": "Flaptrap Shards"
    },
    {
        "name": "Flaptrap Blues"
    },
    {
        "name": "Flaptrap Blocks"
    },
    {
        "name": "3 Flaptrap Shines"
    },
    {
        "name": "5 Flaptrap Shines"
    },
    {
        "name": "Pounce Bounce Shards"
    },
    {
        "name": "Pounce Bounce Timer"
    },
    {
        "name": "Pounce Bounce Blocks"
    },
    {
        "name": "3 Pounce Bounce Shines"
    },
    {
        "name": "5 Pounce Bounce Shines"
    },
    {
        "name": "Slipskate Shards"
    },
    {
        "name": "Slipskate Blues"
    },
    {
        "name": "Slipskate Blocks"
    },
    {
        "name": "3 Slipskate Shines"
    },
    {
        "name": "5 Slipskate Shines"
    },
    {
        "name": "Trickity Shards"
    },
    {
        "name": "Trickity Blues"
    },
    {
        "name": "Trickity Blocks"
    },
    {
        "name": "3 Trickity Shines"
    },
    {
        "name": "5 Trickity Shines"
    },
    {
        "name": "Clawswipe Shards"
    },
    {
        "name": "Clawswipe PomPom"
    },
    {
        "name": "Clawswipe Blocks"
    },
    {
        "name": "3 Clawswipe Shines"
    },
    {
        "name": "5 Clawswipe Shines"
    },
    {
        "name": "Crisp Climb Shards"
    },
    {
        "name": "Crisp Climb Timer"
    },
    {
        "name": "Crisp Climb Blocks"
    },
    {
        "name": "3 Crisp Climb Shines"
    },
    {
        "name": "5 Crisp Climb Shines"
    },
    {
        "name": "Pipe Path Shards"
    },
    {
        "name": "Pipe Path Blues"
    },
    {
        "name": "Pipe Path Blocks"
    },
    {
        "name": "3 Pipe Path Shines"
    },
    {
        "name": "5 Pipe Path Shines"
    },
    {
        "name": "Risky Shards"
    },
    {
        "name": "Risky Fuzzies"
    },
    {
        "name": "Risky Blocks"
    },
    {
        "name": "3 Risky Shines"
    },
    {
        "name": "5 Risky Shines"
    },
    {
        "name": "Magmeow Shards"
    },
    {
        "name": "Magmeow Summit"
    },
    {
        "name": "Magmeow Blocks"
    },
    {
        "name": "3 Magmeow Shines"
    },
    {
        "name": "5 Magmeow Shines"
    },
    {
        "name": "Roiling Shards"
    },
    {
        "name": "Roiling Timer"
    },
    {
        "name": "Roiling Blocks"
    },
    {
        "name": "3 Roiling Shines"
    },
    {
        "name": "5 Roiling Shines"
    },
    {
        "name": "3 Shard Shines"
    },
    {
        "name": "9 Shard Shines"
    },
    {
        "name": "1 Gooigi Shine"
    },
    {
        "name": "3 Gooigi Shines"
    },
    {
        "name": "1 Key Shine"
    },
    {
        "name": "3 Key Shines"
    },
    {
        "name": "1 Blue Coin Shine"
    },
    {
        "name": "3 Blue Coin Shines"
    },
    {
        "name": "1 main-Island Timer Shine"
    },
    {
        "name": "3 main-Island Timer Shines"
    },
    {
        "name": "2 mini-Boss Shines"
    },
    {
        "name": "4 mini-Boss Shines"
    },
    {
        "name": "2 Fury Block Shines"
    },
    {
        "name": "4 Fury Block Shines"
    },
    {
        "name": "Wasteland Cloud Area Shine"
    },
    {
        "name": "Magmeow Floating Isle Shine"
    },
    {
        "name": "Slipskate Toad Brigade Shine"
    },
    {
        "name": "1 Floating Isle Shine"
    },
    {
        "name": "3 Floating Isle Shines"
    },
    {
        "name": "2 Combat Button Shines"
    },
    {
        "name": "4 Combat Button Shines"
    },
    {
        "name": "1 Cloud Area Shine"
    },
    {
        "name": "3 Cloud Area Shines"
    },
    {
        "name": "1 Calico Cat Shine"
    },
    {
        "name": "3 Calico Cat Shines"
    },
    {
        "name": "2 Plessie Gate Shines"
    },
    {
        "name": "4 Plessie Gate Shines"
    },
    {
        "name": "1 Lapcat Bunny Shine"
    },
    {
        "name": "3 Lapcat Bunny Shines"
    },
    {
        "name": "2 Toad Brigade Shines"
    },
    {
        "name": "4 Toad Brigade Shines"
    },
    {
        "name": "2 Plessie Medal Shines"
    },
    {
        "name": "4 Plessie Medal Shines"
    },
    {
        "name": "1 Lucky Isle Shine"
    },
    {
        "name": "3 Lucky Isle Shines"
    },
    {
        "name": "1 Shine From 5 Islands"
    },
    {
        "name": "3 Shines From 3 Islands"
    },
    {
        "name": "3 Shines From 5 Islands"
    },
    {
        "name": "5 Shines From 2 Islands"
    },
    {
        "name": "5 Shines From 5 Islands"
    },
    {
        "name": "5 main-Island Shines"
    },
    {
        "name": "10 main-Island Shines"
    },
    {
        "name": "25 main-Island Shines"
    },
    {
        "name": "50 main-Island Shines"
    },
    {
        "name": "2 non-Island Shines"
    },
    {
        "name": "5 non-Island Shines"
    },
    {
        "name": "15 non-Island Shines"
    },
    {
        "name": "30 non-Island Shines"
    },
    {
        "name": "5 Shines"
    },
    {
        "name": "10 Shines"
    },
    {
        "name": "30 Shines"
    },
    {
        "name": "70 Shines"
    },
    {
        "name": "80 Shines"
    },
    {
        "name": "Ring 3 Unique Giga Bells"
    },
    {
        "name": "Defeat Fury 2"
    },
    {
        "name": "Defeat Fury 3"
    },
    {
        "name": "Defeat Fury 4"
    },
    {
        "name": "Any% Category Completion"
    },
    {
        "name": "100 Shine Category Completion"
    },
    {
        "name": "5 Cat Bells in Inventory"
    },
    {
        "name": "5 Mushrooms in Inventory"
    },
    {
        "name": "5 Boomerang Flowers in Inventory"
    },
    {
        "name": "5 Fire Flowers in Inventory"
    },
    {
        "name": "5 Tanooki Leaves in Inventory"
    },
    {
        "name": "5 Lucky Bells in Inventory"
    },
    {
        "name": "1 of Every Item in Inventory"
    },
    {
        "name": "3 of Every Item in Inventory"
    },
    {
        "name": "5 of Every Item in Inventory"
    },
    {
        "name": "Collect a 100-coin Powerup"
    },
    {
        "name": "Powerups From 2 Unique Lighthouses"
    },
    {
        "name": "Powerups From 5 Unique Lighthouses"
    },
    {
        "name": "Powerups From 10 Unique Lighthouses"
    },
    {
        "name": "Enter 2 Unique Gold Pipe Areas"
    },
    {
        "name": "Enter 4 Unique Gold Pipe Areas"
    },
    {
        "name": "Reveal 5 Unique Interrogation Marks"
    },
    {
        "name": "Reveal 10 Unique Interrogation Marks"
    },
    {
        "name": "Reveal 20 Unique Interrogation Marks"
    },
    {
        "name": "Throw 3 Unique Red Cats Into Water"
    },
    {
        "name": "Throw 7 Unique Green Cats Into Water"
    },
    {
        "name": "Snuggle 4 Cats at the Same Time"
    },
    {
        "name": "Snuggle 10 Cats at the Same Time"
    },
    {
        "name": "Kill an Enemy With a Boomerang"
    },
    {
        "name": "Kill an Enemy With a Fireball"
    },
    {
        "name": "Kill an Enemy With a Tanooki Tail Swipe"
    },
    {
        "name": "Kill an Enemy With a Lucky Bell Ground Pound"
    },
    {
        "name": "Kill an Enemy With a Star Powerup"
    },
    {
        "name": "Kill an Enemy With Plessie"
    },
    {
        "name": "Kill an Enemy Inside a Koopa Shell"
    },
    {
        "name": "Die to Lava"
    },
    {
        "name": "Die to an Enemy"
    },
    {
        "name": "Die During Bowser's Fury Phase"
    },
    {
        "name": "Collect a Shine During Bowser's Fury Phase"
    },
    {
        "name": "Allow Bowser to Despawn Naturally"
    },
    {
        "name": "Collect a Shine While Wearing a Propeller Cap"
    },
    {
        "name": "Wear a Propeller Cap While in an Ice Skate"
    },
    {
        "name": "Collect Either Floating Isle Shine (not Mt Magmeow) Without Entering Its Clear Pipe"
    },
    {
        "name": "Fling off 3 Unique Cannons"
    },
    {
        "name": "Fling off 10 Unique Cannons"
    },
    {
        "name": "Ride a Fury Half Pipe With Plessie"
    },
    {
        "name": "Ride a Fury Ramp With Plessie"
    }
];
