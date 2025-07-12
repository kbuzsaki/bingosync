var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[
    [
        {"name": "4th place in a Free-for-All minigame", "types": ["minigame", "skill"]},
        {"name": "3rd place in a Free-for-All minigame", "types": ["minigame", "skill"]},
        {"name": "2nd place in a Free-for-All minigame", "types": ["minigame", "skill"]},
        {"name": "Get 1st place in a Free-for-All minigame", "types": ["minigame", "skill"]},
        {"name": "Pass by a Star without buying it", "types": ["star","movement"]}
        
    ],
    [
        {"name": "Lose a 2v2 minigame", "types": ["minigame", "skill"]},
        {"name": "Win a 2v2 minigame", "types": ["minigame", "skill"]},
        {"name": "Lose a 1v3 minigame on the team of 3", "types": ["minigame", "skill"]},
        {"name": "Win a 1v3 minigame as the solo player", "types": ["minigame", "skill"]},
        {"name": "Buy the least expensive item in any shop", "types": ["coin","item"]}
    ],
    [
        {"name": "Win a 1v3 minigame on the team of 3", "types": ["minigame", "skill"]},
        {"name": "Lose a 1v3 minigame as the solo player", "types": ["minigame", "skill"]},
        {"name": "Use any warp item", "types": ["item"]},
        {"name": "Use a Creepy Dice Block on yourself", "types": ["item"]},
        {"name": "Steal coins from somebody using Boo", "types": ["rng","boo","coin"]}
    ],
    [
        {"name": "Move at least 10 spaces in a single turn", "types": ["movement","rng"]},
        {"name": "Steal coins from 2 different players using Boo", "types": ["rng","boo","coin"]},
        {"name": "Land on an Unlucky Space", "types": ["movement"]},
        {"name": "Land on an Event Space", "types": ["movement"]},
        {"name": "Land on an Item Space", "types": ["movement","item"]}
    ],
    [
        {"name": "Steal another player's Jamboree Buddy", "types": ["movement","buddy"]},
        {"name": "Have at least 50 coins at once", "types": ["coin"]},
        {"name": "Steal coins from all 3 other players using Boo", "types": ["rng","boo","coin"]},
        {"name": "Duel another player for the maximum wager", "types": ["minigame"]},
        {"name": "Land on Blue Spaces 3 turns in a row", "types": ["movement"]}
    ],
    [
        {"name": "Roll a 7 or higher on a single Dice Block", "types": ["movement","rng"]},
        {"name": "Land on Unlucky Spaces 3 times", "types": ["movement"]},
        {"name": "Earn 0 coins during a coin minigame", "types": ["coin","skill","minigame"]},
        {"name": "Have 0 coins at any point during the final 5 turns", "types": ["coin"]},
        {"name": "Land on Lucky Spaces 3 times", "types": ["movement"]}
    ],
    [
        {"name": "Land on a space with another player standing on it", "types": ["movement","rng"]},
        {"name": "Use 2 unique warp items", "types": ["item"]},
        {"name": "Buy the most expensive item in any shop", "types": ["coin","item"]},
        {"name": "Win 2 minigames in a row", "types": ["minigame","skill"]},
        {"name": "Land on Event Spaces 3 times", "types": ["movement"]}
    ],
    [
        {"name": "Have 2 of the same item at once", "types": ["item"]},
        {"name": "Win a Duel minigame", "types": ["minigame","skill"]},
        {"name": "Go left at any split path", "types": ["movement"]},
        {"name": "Go right at any split path", "types": ["movement"]},
        {"name": "Receive any Item from a Lucky Space", "types": ["rng","item"]}
    ],
    [
        {"name": "Receive at least 10 coins from a Lucky Space", "types": ["rng","coin"]},
        {"name": "Earn at least 10 coins from a coin minigame (not bonus)", "types": ["minigame","skill","coin"]},
        {"name": "Have 3 different Items at the same time", "types": ["item"]},
        {"name": "Buy 5 total Items from shops", "types": ["item"]},
        {"name": "Lose coins on an Unlucky Space", "types": ["rng","coin"]}
    ],
    [
        {"name": "Win a Showdown Minigame", "types": ["minigame","skill","buddy"]},
        {"name": "Move at least 15 spaces in a single turn", "types": ["movement","rng"]},
        {"name": "1st place in a VS minigame", "types": ["minigame","skill"]},
        {"name": "Receive a 10 coin gift from Imposter Bowser", "types": ["bowser","rng"]},
        {"name": "Have at least 100 coins at once", "types": ["coin"]}
    ],
    [
        {"name": "Use the board's exclusive item", "types": ["item"]},
        {"name": "Play an Item Minigame", "types": ["rng","item","minigame"]},
        {"name": "Win 2 unique Duel minigames", "types": ["minigame","skill"]},
        {"name": "Land on Lucky Spaces 5 times", "types": ["movement"]},
        {"name": "Land on Unlucky Spaces 5 times", "types": ["movement"]}
    ],
    [
        {"name": "Use 3 unique warp items", "types": ["item"]},
        {"name": "Win 3 minigames in a row", "types": ["minigame","skill"]},
        {"name": "Trigger a Bowser Revolution", "types": ["bowser","rng"]},
        {"name": "Buy 2 Stars at once with a Jamboree Buddy", "types": ["star","buddy"]},
        {"name": "Land on Event Spaces 5 times", "types": ["movement"]}
    ],
    [
        {"name": "Receive a an Item from an Item Space that can't be bought at a Shop", "types": ["rng","item"]},
        {"name": "Trigger a Bowser Shuffle", "types": ["bowser","rng"]},
        {"name": "Buy 10 total Items from shops", "types": ["item"]},
        {"name": "Place 10 total traps on the board", "types": ["item"]},
        {"name": "Give an item to 4th place on an Unlucky Space", "types": ["rng","item"]}
    ],
    [
        {"name": "Lose at least 20 coins at once to Imposter Bowser", "types": ["bowser","rng","coin"]},
        {"name": "Have at least 2 Stars at once", "types": ["star"]},
        {"name": "Throw out 3 Items", "types": ["item"]},
        {"name": "Buy an Item and throw it out while still at the shop", "types": ["item"]},
        {"name": "Use a Golden Pipe but don't buy the Star", "types": ["item","star"]}
    ],
    [
        {"name": "Have 3 of the same item at once", "types": ["item"]},
        {"name": "Use a Jamboree Buddy's ability", "types": ["buddy"]},
        {"name": "Move at least 20 spaces in a single turn", "types": ["movement","rng"]},
        {"name": "Earn at least 20 coins from a Bonus minigame", "types": ["minigame","skill"]},
        {"name": "Have at least 150 coins at once", "types": ["coin"]}
    ],
    [
        {"name": "Have another player land on your trap", "types": ["movement","item"]},
        {"name": "Steal a Star using Boo", "types": ["star","boo"]},
        {"name": "Buy 2 items at once with a Jamboree Buddy", "types": ["item","buddy"]},
        {"name": "Lose 1 Star to Imposter Bowser", "types": ["bowser","rng","star"]},
        {"name": "Have at least 3 Stars at once", "types": ["star"]}
    ],
    [
        {"name": "Win 3 unique Duel minigames", "types": ["minigame","skill"]},
        {"name": "Throw out a Plunder Chest, Boo Bell, or Golden Pipe", "types": ["item"]},
        {"name": "Pass all 3 other players on the board in a single turn", "types": ["movement"]},
        {"name": "Win 2 Showdown Minigames", "types": ["minigame","skill","buddy"]},
        {"name": "1st place in 2 VS minigames", "types": ["minigame","skill"]}
    ],
    [
        {"name": "Have at least 5 Stars at once", "types": ["star"]},
        {"name": "Earn at least 40 coins from a Bonus coin minigame", "types": ["minigame","skill","coin"]},
        {"name": "Land on a space with 2 other players standing on it", "types": ["movement"]},
        {"name": "Win 5 minigames in a row", "types": ["minigame","skill"]},
        {"name": "Land on Bowser Spaces 2 times", "types": ["bowser","movement"]}
    ],
    [
        {"name": "Receive 20 coins from a Lucky Space", "types": ["rng"]},
        {"name": "Steal coins twice in one visit to Boo with a Jamboree Buddy", "types": ["boo","coin","buddy"]},
        {"name": "Land on Bowser Spaces 3 times", "types": ["bowser","movement"]},
        {"name": "Keep a Jamboree Buddy for 3 turns without them being stolen", "types": ["buddy"]},
        {"name": "Throw out 5 Items", "types": ["item"]}
    ],
    [
        {"name": "Roll 2 of the same number on Double Dice", "types": ["movement","rng"]},
        {"name": "Move at least 25 spaces in a single turn", "types": ["movement","rng"]},
        {"name": "Have at least 200 coins at once", "types": ["coin"]},
        {"name": "Steal 2 Stars in one visit to Boo with a Jamboree Buddy", "types": ["buddy","boo","star"]},
        {"name": "Receive an Item Bag from a Lucky Space", "types": ["rng","item"]}
    ],
    [
        {"name": "Receive at least 15 coins from Payday Double Dice", "types": ["movement","rng","coin"]},
        {"name": "Receive at least 20 coins at once during Chance Time", "types": ["rng","coin"]},
        {"name": "Land on Lucky Spaces 2 turns in a row", "types": ["movement"]},
        {"name": "Land on Unlucky Spaces 2 turns in a row", "types": ["movement"]},
        {"name": "Receive fewer than 10 coins from a Hidden Block", "types": ["coin","rng"]}
    ],
    [
        {"name": "Have other players land on your traps 2 times", "types": ["movement","item"]},
        {"name": "Play 2 Item Minigames", "types": ["rng","item","minigame"]},
        {"name": "Land on Event Spaces 2 turns in a row", "types": ["movement"]},
        {"name": "Receive at least 50 coins at once during Chance Time", "types": ["rng","coin"]},
        {"name": "Receive at least 10 coins from a Hidden Block", "types": ["coin","rng"]}
    ],
    [
        {"name": "Roll at least 20 on Triple Dice", "types": ["movement","rng"]},
        {"name": "Steal another player's item using a Plunder Chest", "types": ["rng", "item"]},
        {"name": "Use 2 different Jamboree Buddies' abilities", "types": ["buddy"]},
        {"name": "Win 2 Showdown Minigames", "types": ["minigame","skill","buddy"]},
        {"name": "Receive at least 20 coins from a Hidden Block", "types": ["coin","rng"]}
    ],
    [
        {"name": "Receive a Star during Chance Time", "types": ["rng","star"]},
        {"name": "Have at least 10 stars at once", "types": ["star"]},
        {"name": "Win 4 unique Duel minigames", "types": ["minigame","skill"]},
        {"name": "Have other players land on your traps 3 times", "types": ["movement","item"]},
        {"name": "Receive a Star from a Hidden Block", "types": ["rng", "star"]}
    ],
    [
        {"name": "Have 3 Loadstones at once", "types": ["item", "rng"]},
        {"name": "Win 7 minigames in a row", "types": ["minigame","skill"]},
        {"name": "Receive at least 25 coins from Payday Triple Dice", "types": ["movement","rng","coin"]},
        {"name": "Move at least 30 spaces in a single turn", "types": ["movement","rng"]},
        {"name": "Have at least 250 coins at once", "types": ["coin"]}
    ]
]
;
