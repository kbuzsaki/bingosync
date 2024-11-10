bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "300 opals in Two Up"
    },
    {
        "name": "300 opals in Ship Rex"
    },
    {
        "name": "300 opals in Walk"
    },
    {
        "name": "300 opals in Snow Worries"
    },
    {
        "name": "300 opals in Outback "
    },
    {
        "name": "300 opals in Bridge"
    },
    {
        "name": "300 opals in Lyre Lyre"
    },
    {
        "name": "300 opals in Black Stump"
    },
    {
        "name": "300 opals in Rex Marks"
    },
    {
        "name": "All TEs in Two Up"
    },
    {
        "name": "All TEs in Ship Rex"
    },
    {
        "name": "All TEs in Walk"
    },
    {
        "name": "All TEs in Snow Worries"
    },
    {
        "name": "All TEs in Outback "
    },
    {
        "name": "All TEs in Bridge"
    },
    {
        "name": "All TEs in Lyre Lyre"
    },
    {
        "name": "All TEs in Black Stump"
    },
    {
        "name": "All TEs in Rex Marks"
    },
    {
        "name": "All Cogs in Two Up"
    },
    {
        "name": "All Cogs in Ship Rex"
    },
    {
        "name": "All Cogs in Walk"
    },
    {
        "name": "All Cogs in Snow Worries"
    },
    {
        "name": "All Cogs in Outback "
    },
    {
        "name": "All Cogs in Bridge"
    },
    {
        "name": "All Cogs in Lyre Lyre"
    },
    {
        "name": "All Cogs in Black Stump"
    },
    {
        "name": "All Cogs in Rex Marks"
    },
    {
        "name": "All Bilbies in Two Up"
    },
    {
        "name": "All Bilbies in Ship Rex"
    },
    {
        "name": "All Bilbies in Walk"
    },
    {
        "name": "All Bilbies in Snow Worries"
    },
    {
        "name": "All Bilbies in Outback "
    },
    {
        "name": "All Bilbies in Bridge"
    },
    {
        "name": "All Bilbies in Lyre Lyre"
    },
    {
        "name": "All Bilbies in Black Stump"
    },
    {
        "name": "All Bilbies in Rex Marks"
    },
    {
        "name": "All Opals in Hub 1"
    },
    {
        "name": "All Opals in Hub 2"
    },
    {
        "name": "All Opals in Hub 3"
    },
    {
        "name": "All TEs in Hub 1"
    },
    {
        "name": "All TEs in Hub 2"
    },
    {
        "name": "All TEs in Hub 3"
    },
    {
        "name": "All Bilbies in Hub 1"
    },
    {
        "name": "All Bilbies in Hub 2"
    },
    {
        "name": "All Bilbies in Hub 3"
    },
    {
        "name": "All Cogs in Hub 1"
    },
    {
        "name": "All Cogs in Hub 2"
    },
    {
        "name": "All Cogs in Hub 3"
    },
    {
        "name": "Collect 1000 Opals"
    },
    {
        "name": "Collect 1100 Opals"
    },
    {
        "name": "Collect 1200 Opals"
    },
    {
        "name": "Collect 1300 Opals"
    },
    {
        "name": "Collect 1500 Opals"
    },
    {
        "name": "Collect 1600 Opals"
    },
    {
        "name": "Collect 1700 Opals"
    },
    {
        "name": "Collect 1800 Opals"
    },
    {
        "name": "Collect 1900 Opals"
    },
    {
        "name": "Collect 2000 Opals"
    },
    {
        "name": "Collect 30 TEs"
    },
    {
        "name": "Collect 35 TEs"
    },
    {
        "name": "Collect 40 TEs"
    },
    {
        "name": "Collect 45 TEs"
    },
    {
        "name": "Collect 50 TEs"
    },
    {
        "name": "Collect 55 TEs"
    },
    {
        "name": "Collect 60 TEs"
    },
    {
        "name": "Collect 40 Cogs"
    },
    {
        "name": "Collect 45 Cogs"
    },
    {
        "name": "Collect 50 Cogs"
    },
    {
        "name": "Collect 55 Cogs"
    },
    {
        "name": "Collect 60 Cogs"
    },
    {
        "name": "Collect 65 Cogs"
    },
    {
        "name": "Collect 70 Cogs"
    },
    {
        "name": "Collect 75 Cogs"
    },
    {
        "name": "Collect 80 Cogs"
    },
    {
        "name": "Collect 20 Bilbies"
    },
    {
        "name": "Collect 25 Bilbies"
    },
    {
        "name": "Collect 30 Bilbies"
    },
    {
        "name": "Collect 35 Bilbies"
    },
    {
        "name": "Collect 40 Bilbies"
    },
    {
        "name": "Collect 45 Bilbies"
    },
    {
        "name": "Collect 5 1-UPs"
    },
    {
        "name": "Collect 10 1-UPs"
    },
    {
        "name": "Collect 15 1-UPs"
    },
    {
        "name": "All Rainbow Scales"
    },
    {
        "name": "Get the Flamerang"
    },
    {
        "name": "Get the Frostyrang"
    },
    {
        "name": "Get the Zappyrang"
    },
    {
        "name": "Get the Doomerang"
    },
    {
        "name": "Explode a wombat in TA (Kaboomerang)"
    },
    {
        "name": "Break A shed in Two Up (Zappyrang)"
    },
    {
        "name": "Break All Pillars in Bull's Pen (Zappyrang)"
    },
    {
        "name": "Dennis Message (Bridge)"
    },
    {
        "name": "Break A Shrub in Two Up (Zappyrang)"
    },
    {
        "name": "Break A Skull and Cross in Ship Rex (Zappyrang)"
    },
    {
        "name": "Die In Rainbow Cliffs"
    },
    {
        "name": "100% Two Up"
    },
    {
        "name": "100% Ship Rex"
    },
    {
        "name": "100% Outback Safari"
    },
    {
        "name": "100% Bridge"
    },
    {
        "name": "100% Lyre Lyre"
    },
    {
        "name": "100% Black Stump"
    },
    {
        "name": "100% Rex Marks"
    },
    {
        "name": "Heat Dennis' House"
    },
    {
        "name": "Aurora's Kids"
    },
    {
        "name": "Cable Car Capers"
    },
    {
        "name": "Koala Chaos (Snow)"
    },
    {
        "name": "Koala Crisis (Black Stump)"
    },
    {
        "name": "Treasure Hunt"
    }
];
