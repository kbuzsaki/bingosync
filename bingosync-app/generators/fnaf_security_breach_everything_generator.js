bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Collect: Backstage Pass (Item)"
    },
    {
        "name": "Collect: Bowling Ticket (Item)"
    },
    {
        "name": "Collect: Comp. Entry Pass (Item)"
    },
    {
        "name": "Collect: Chica’s Voice Box (Item)"
    },
    {
        "name": "Collect: Damaged Head (Item)"
    },
    {
        "name": "Collect: Dance Pass (Item)"
    },
    {
        "name": "Collect: Day Care Pass (Item)"
    },
    {
        "name": "Collect: Faz Camera (Item)"
    },
    {
        "name": "Collect: Faz Map (Item)"
    },
    {
        "name": "Collect: Fazerblaster (Item)"
    },
    {
        "name": "Collect: Fizzy Faz Chica (Item)"
    },
    {
        "name": "Collect: Fizzy Faz Freddy (Item)"
    },
    {
        "name": "Collect: Fizzy Faz Monty (Item)"
    },
    {
        "name": "Collect: Fizzy Faz Roxy (Item)"
    },
    {
        "name": "Collect: Flashlight (Item)"
    },
    {
        "name": "Collect: Flashlight Upgrade (Item)"
    },
    {
        "name": "Collect: Freddy Upgrade (Item)"
    },
    {
        "name": "Collect: Go Kart (Item)"
    },
    {
        "name": "Collect: Golden Chica (Item)"
    },
    {
        "name": "Collect: Golden Freddy (Item)"
    },
    {
        "name": "Collect: Golden Monty (Item)"
    },
    {
        "name": "Collect: Golden Moon (Item)"
    },
    {
        "name": "Collect: Golden Sun (Item)"
    },
    {
        "name": "Collect: Hoodie (Item)"
    },
    {
        "name": "Collect: Mazercise Ticket (Item)"
    },
    {
        "name": "Collect: Mazercise Control Key (Item)"
    },
    {
        "name": "Collect: Monty Mystery Mix (Item)"
    },
    {
        "name": "Collect: Mr. Hippo Magnet (Item)"
    },
    {
        "name": "Collect: Party Pass (Item)"
    },
    {
        "name": "Collect: Photo Pass (Item)"
    },
    {
        "name": "Collect: Screw Driver (Item)"
    },
    {
        "name": "Collect: Security Badge (Item)"
    },
    {
        "name": "Collect: Shoes (Item)"
    },
    {
        "name": "Collect: Utility Hallway Map (Item)"
    },
    {
        "name": "Jumpscare: Montgomery Gator"
    },
    {
        "name": "Jumpscare: Glamrock Chica"
    },
    {
        "name": "Jumpscare: Glamrock Freddy"
    },
    {
        "name": "Jumpscare: Roxanne Wolf"
    },
    {
        "name": "Jumpscare: Vanessa (Cutscene)"
    },
    {
        "name": "Jumpscare: Vanessa (Death)"
    },
    {
        "name": "Jumpscare: Vanny"
    },
    {
        "name": "Jumpscare: Moon"
    },
    {
        "name": "Jumpscare: Wind-Up Music Man"
    },
    {
        "name": "Jumpscare: Endoskeleton"
    },
    {
        "name": "Jumpscare: Shattered Monty"
    },
    {
        "name": "Jumpscare: Shattered Roxy"
    },
    {
        "name": "Jumpscare: Shattered Chica"
    },
    {
        "name": "Jumpscare: DJ Music Man"
    },
    {
        "name": "Jumpscare: Sewer STAFF Bots"
    },
    {
        "name": "Jumpscare: Molten Freddy"
    },
    {
        "name": "Jumpscare: Corrupt Freddy"
    },
    {
        "name": "Visit: Monty Golf"
    },
    {
        "name": "Visit: Fazer Blast"
    },
    {
        "name": "Visit: Roxy Raceway"
    },
    {
        "name": "Visit: Mazercise"
    },
    {
        "name": "Visit: Bonnie Bowl"
    },
    {
        "name": "Visit: El Chip’s"
    },
    {
        "name": "Visit: The Loading Dock"
    },
    {
        "name": "Visit: The Kitchen"
    },
    {
        "name": "Visit: The Sewers"
    },
    {
        "name": "Visit: The Daycare"
    },
    {
        "name": "Visit: The Daycare Theatre"
    },
    {
        "name": "Visit: The Main Stage"
    },
    {
        "name": "Visit: The Sound Booth"
    },
    {
        "name": "Visit: The West Arcade"
    },
    {
        "name": "Visit: Beauty Salon"
    },
    {
        "name": "Visit: Endo Warehouse"
    },
    {
        "name": "Visit: Parts and Service"
    },
    {
        "name": "Visit: Prize Counter"
    },
    {
        "name": "Visit: Monty’s Green Room"
    },
    {
        "name": "Visit: Vanny’s Hideout"
    },
    {
        "name": "Visit: Main Stage"
    },
    {
        "name": "Visit: The Rehearsal Room"
    },
    {
        "name": "Visit: Staffbot Silo"
    },
    {
        "name": "Visit: Monty Golf Catwalks"
    },
    {
        "name": "Visit: Freddy’s Pizza Place"
    },
    {
        "name": "Visit: Kid’s Cove Entrance"
    },
    {
        "name": "Visit: Michael Afton’s Room"
    },
    {
        "name": "Complete: BB’s Balloon World"
    },
    {
        "name": "Complete: Princess Quest 1"
    },
    {
        "name": "Complete: Princess Quest 2"
    },
    {
        "name": "Complete: Princess Quest 3"
    },
    {
        "name": "Complete: Monty’s Gator Golf Arcade"
    },
    {
        "name": "Complete the Vanny Ending"
    },
    {
        "name": "Complete the Escape Ending"
    },
    {
        "name": "Complete the Princess Quest Ending"
    },
    {
        "name": "Complete the Car Battery Ending"
    },
    {
        "name": "Complete the Fire Ending"
    },
    {
        "name": "Complete the Afton Ending"
    },
    {
        "name": "Complete Any Ending"
    },
    {
        "name": "Complete 2 Endings"
    },
    {
        "name": "Complete 3 Endings"
    },
    {
        "name": "Decommission Chica"
    },
    {
        "name": "Decommission Monty"
    },
    {
        "name": "Decommission Roxy"
    },
    {
        "name": "Decommission All Animatronics"
    },
    {
        "name": "Travel in 3 Elevators"
    },
    {
        "name": "Stun Vanessa With The Faz Cam"
    },
    {
        "name": "Stun Vanessa With The Fazerblaster"
    },
    {
        "name": "Stun Roxy With The Faz Cam"
    },
    {
        "name": "Stun Roxy With The Fazerblaster"
    },
    {
        "name": "Stun Chica With The Faz Cam"
    },
    {
        "name": "Stun Chica With The Fazerblaster"
    },
    {
        "name": "Stun Freddy With The Faz Cam"
    },
    {
        "name": "Stun Freddy With The Fazerblaster"
    },
    {
        "name": "Evade a Wind-Up Music Man"
    },
    {
        "name": "Glitch Out Of Bounds"
    },
    {
        "name": "Wake Up DJ Music Man"
    },
    {
        "name": "Collect 5 Messages"
    },
    {
        "name": "Collect 10 Messages"
    },
    {
        "name": "Collect 15 Messages"
    },
    {
        "name": "Collect 20 Messages"
    },
    {
        "name": "Collect 25 Messages"
    },
    {
        "name": "Collect 30 Messages"
    },
    {
        "name": "Collect 5 Presents"
    },
    {
        "name": "Collect 10 Presents"
    },
    {
        "name": "Collect 15 Presents"
    },
    {
        "name": "Collect 20 Presents"
    },
    {
        "name": "Collect 25 Presents"
    },
    {
        "name": "Collect 30 Presents"
    },
    {
        "name": "Reach Security Level 2"
    },
    {
        "name": "Reach Security Level 4"
    },
    {
        "name": "Reach Security Level 6"
    },
    {
        "name": "Recharge Freddy"
    },
    {
        "name": "Open 5 Monty Gates"
    },
    {
        "name": "Open a Chica Voice box Gate"
    },
    {
        "name": "Score Less than 25 in Monty Golf"
    },
    {
        "name": "Die 5 Times"
    },
    {
        "name": "Die 10 Times"
    },
    {
        "name": "Collect 5 Upgrades"
    },
    {
        "name": "Collect 4 Passes/Tickets"
    },
    {
        "name": "Collect 2 Freddy Upgrade Items"
    },
    {
        "name": "Collect 2 Flashlight Upgrades"
    },
    {
        "name": "Hide in a Stroller"
    },
    {
        "name": "Hide in a Photo Booth"
    },
    {
        "name": "Hide in a Concession Stand"
    },
    {
        "name": "Make a Pizza"
    },
    {
        "name": "Crawl through 3 Vents"
    },
    {
        "name": "Play a game of Fazerblast"
    },
    {
        "name": "Get Soft-locked"
    },
    {
        "name": "Evade an Animatronic"
    },
    {
        "name": "Evade Vanny"
    },
    {
        "name": "Evade the Daycare Attendant"
    },
    {
        "name": "Turn on 5 Generators"
    },
    {
        "name": "Get Caught by a Security Bot"
    },
    {
        "name": "Get Caught by a Cleaning Bot"
    },
    {
        "name": "Get Caught by a Nightmare Bot"
    },
    {
        "name": "View 3 Cutscenes"
    },
    {
        "name": "Listen to a Retro Disc"
    },
    {
        "name": "Encounter any Glitch"
    }
];
