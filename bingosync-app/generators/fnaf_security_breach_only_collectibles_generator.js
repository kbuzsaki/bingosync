bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Collect: Backstage Pass (Item)"
    },
    {
        "name": "Collect: Bonnie Plush  (Item)"
    },
    {
        "name": "Collect: Bowling Ticket (Item)"
    },
    {
        "name": "Collect: Comp. Entry Pass (Item)"
    },
    {
        "name": "Collect: Chica Balloon (Item)"
    },
    {
        "name": "Collect: Chica Magnet (Item)"
    },
    {
        "name": "Collect: Chica Mask (Item)"
    },
    {
        "name": "Collect: Chica Name Shirt (Item)"
    },
    {
        "name": "Collect: Chica Piñata (Item)"
    },
    {
        "name": "Collect: Chica’s Voice Box (Item)"
    },
    {
        "name": "Collect: Comedy Mask (Item)"
    },
    {
        "name": "Collect: Cupcake Piñata (Item)"
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
        "name": "Collect: El Chip Piñata (Item)"
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
        "name": "Collect: Four Block Shirt (Item)"
    },
    {
        "name": "Collect: Foxy Plush (Item)"
    },
    {
        "name": "Collect: Freddy Balloon (Item)"
    },
    {
        "name": "Collect: Freddy Face Shirt (Item)"
    },
    {
        "name": "Collect: Freddy Icon Shirt (Item)"
    },
    {
        "name": "Collect: Freddy Magnet (Item)"
    },
    {
        "name": "Collect: Freddy Mask (Item)"
    },
    {
        "name": "Collect: Freddy Name Shirt (Item)"
    },
    {
        "name": "Collect: Freddy Piñata (Item)"
    },
    {
        "name": "Collect: Freddy Upgrade (Item)"
    },
    {
        "name": "Collect: Frozen Chica Treat (Item)"
    },
    {
        "name": "Collect: Frozen Freddy Treat (Item)"
    },
    {
        "name": "Collect: Frozen Monty Treat (Item)"
    },
    {
        "name": "Collect: Frozen Roxy Treat (Item)"
    },
    {
        "name": "Collect: Glam Chica Figure (Item)"
    },
    {
        "name": "Collect: Glam Chica Plush (Item)"
    },
    {
        "name": "Collect: Glam Freddy Figure (Item)"
    },
    {
        "name": "Collect: Glam Freddy Plush (Item)"
    },
    {
        "name": "Collect: Glam Monty Figure (Item)"
    },
    {
        "name": "Collect: Glam Monty Plush (Item)"
    },
    {
        "name": "Collect: Glam Roxy Figure (Item)"
    },
    {
        "name": "Collect: Glam Roxy Plush (Item)"
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
        "name": "Collect: Monty Balloon (Item)"
    },
    {
        "name": "Collect: Monty Magnet (Item)"
    },
    {
        "name": "Collect: Monty Mask (Item)"
    },
    {
        "name": "Collect: Monty Mystery Mix (Item)"
    },
    {
        "name": "Collect: Monty Name Shirt (Item)"
    },
    {
        "name": "Collect: Monty Pinata (Item)"
    },
    {
        "name": "Collect: Moon Figure (Item)"
    },
    {
        "name": "Collect: Moon Plush (Item)"
    },
    {
        "name": "Collect: Mr. Hippo Magnet (Item)"
    },
    {
        "name": "Collect: Nightmare Plush (Item)"
    },
    {
        "name": "Collect: Old Poster (Item)"
    },
    {
        "name": "Collect: Party Pass (Item)"
    },
    {
        "name": "Collect: Photo Pass (Item)"
    },
    {
        "name": "Collect: Piñata (Item)"
    },
    {
        "name": "Collect: Pizza Plex Logo Shirt (Item)"
    },
    {
        "name": "Collect: Plush Baby (Item)"
    },
    {
        "name": "Collect: Retro Disc (Item)"
    },
    {
        "name": "Collect: Roxy Balloon (Item)"
    },
    {
        "name": "Collect: Roxy Magnet (Item)"
    },
    {
        "name": "Collect: Roxy Mask (Item)"
    },
    {
        "name": "Collect: Roxy Name Shirt (Item)"
    },
    {
        "name": "Collect: Roxy Piñata (Item)"
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
        "name": "Collect: Space Chica Keychain (Item)"
    },
    {
        "name": "Collect: Space Freddy Keychain (Item)"
    },
    {
        "name": "Collect: Space Monty Keychain (Item)"
    },
    {
        "name": "Collect: Space Roxy Keychain (Item)"
    },
    {
        "name": "Collect: Star Shirt (Item)"
    },
    {
        "name": "Collect: Sun Figure (Item)"
    },
    {
        "name": "Collect: Sun Plush (Item)"
    },
    {
        "name": "Collect: Tragedy Mask (Item)"
    },
    {
        "name": "Collect: Utility Hallway Map (Item)"
    },
    {
        "name": "Collect: 5 Retro Discs (Item)"
    },
    {
        "name": "Collect: AC Inspection (Message)"
    },
    {
        "name": "Collect: All Staff Meeting (Message)"
    },
    {
        "name": "Collect: Arcade Maint. Log (Message)"
    },
    {
        "name": "Collect: Arcade Conspiracy (Message)"
    },
    {
        "name": "Collect: BBW Maint. Log (Message)"
    },
    {
        "name": "Collect: Behind the Maze (Message)"
    },
    {
        "name": "Collect: Better Employees (Message)"
    },
    {
        "name": "Collect: CFF Maint. Log (Message)"
    },
    {
        "name": "Collect: Chasing Cars (Message)"
    },
    {
        "name": "Collect: Chica Report (Message)"
    },
    {
        "name": "Collect: Chica Upgrade (Message)"
    },
    {
        "name": "Collect: Compactor Instructions (Message)"
    },
    {
        "name": "Collect: Drink Fizzy Faz (Message)"
    },
    {
        "name": "Collect: Easy Money (Message)"
    },
    {
        "name": "Collect: False alarm (Message)"
    },
    {
        "name": "Collect: Food Storage (Message)"
    },
    {
        "name": "Collect: Hello Gregory (Message)"
    },
    {
        "name": "Collect: HI DAVE (Message)"
    },
    {
        "name": "Collect: Hide The Mix (Message)"
    },
    {
        "name": "Collect: It Is Happening Again (Message)"
    },
    {
        "name": "Collect: Job Security (Message)"
    },
    {
        "name": "Collect: Marked For Deletion (Message)"
    },
    {
        "name": "Collect: Missing (Message)"
    },
    {
        "name": "Collect: Monty Mischief (Message)"
    },
    {
        "name": "Collect: Monty Upgrade (Message)"
    },
    {
        "name": "Collect: Night Shift (Message)"
    },
    {
        "name": "Collect: Night Terrors (Message)"
    },
    {
        "name": "Collect: No Flash Photography (Message)"
    },
    {
        "name": "Collect: No Questions Asked (Message)"
    },
    {
        "name": "Collect: Old Elevator (Message)"
    },
    {
        "name": "Collect: Out of Order (Message)"
    },
    {
        "name": "Collect: Party Foul (Message)"
    },
    {
        "name": "Collect: Pink Slip (Message)"
    },
    {
        "name": "Collect: Power Drain (Message)"
    },
    {
        "name": "Collect: PQ1 Maint. Log (Message)"
    },
    {
        "name": "Collect: PQ2 Maint. Log (Message)"
    },
    {
        "name": "Collect: Question (Message)"
    },
    {
        "name": "Collect: Re-Theme (Message)"
    },
    {
        "name": "Collect: Recycled Pizza? (Message)"
    },
    {
        "name": "Collect: Red Flag (Message)"
    },
    {
        "name": "Collect: Roxy Upgrade (Message)"
    },
    {
        "name": "Collect: Safety Check (Message)"
    },
    {
        "name": "Collect: Sinkhole (Message)"
    },
    {
        "name": "Collect: Sole Winner (Message)"
    },
    {
        "name": "Collect: Stolen Property (Message)"
    },
    {
        "name": "Collect: Test Drivers Wanted (Message)"
    },
    {
        "name": "Collect: The Answer (Message)"
    },
    {
        "name": "Collect: Torn Paper (Message)"
    },
    {
        "name": "Collect: Ultimate Party Host (Message)"
    },
    {
        "name": "Collect: Under Study (Message)"
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
        "name": "Collect All Fizzy Faz Drinks"
    },
    {
        "name": "Collect All Space Keychains"
    },
    {
        "name": "Collect All Frozen Treats"
    },
    {
        "name": "Collect All Balloons"
    },
    {
        "name": "Collect All Magnets"
    },
    {
        "name": "Collect 2 Key Items"
    },
    {
        "name": "Collect 4 Key Items"
    },
    {
        "name": "Collect 8 Key Items"
    },
    {
        "name": "Collect All Masks"
    },
    {
        "name": "Collect All Glamrock Plushies"
    },
    {
        "name": "Collect All Glamrock Figures"
    },
    {
        "name": "Collect All Pinatas"
    },
    {
        "name": "Collect 2 Golden Figures"
    },
    {
        "name": "Collect 5 Golden Figures"
    },
    {
        "name": "Collect All Golden Figures"
    }
];
