bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Grimace 69 times on 1 screen"
    },
    {
        "name": "Lose 8 lives in 1 screen without having a game over screen"
    },
    {
        "name": "Successfully finish 6 magicians"
    },
    {
        "name": "Superboost off of any ring"
    },
    {
        "name": "Get the running powerup without having any cages collected"
    },
    {
        "name": "Get the helicopter powerup while having exactly 4 cages in total"
    },
    {
        "name": "Hit all 6 cages in 3 different levels"
    },
    {
        "name": "7 unique World map cage medallions"
    },
    {
        "name": "Zip 4 times"
    },
    {
        "name": "Kill 7 unique Greenbois"
    },
    {
        "name": "Get 2 lives from 1 Magician"
    },
    {
        "name": "Reach 30 Lives"
    },
    {
        "name": "Break 40 cages"
    },
    {
        "name": "Get all cages in Blue Mountains"
    },
    {
        "name": "Do 2 superjumps in a row in Picture city"
    },
    {
        "name": "Touch all 15 fairies in Picture City"
    },
    {
        "name": "Touch all 13 fairies in Band land"
    },
    {
        "name": "Take all 7 Photographers in Band Land"
    },
    {
        "name": "Take all 3 Photographers in Forest"
    },
    {
        "name": "Take all 5 Photographers in Blue Mountains"
    },
    {
        "name": "Take all 9 Photographers in Picture City"
    },
    {
        "name": "Take all 4 Photographers in Caves"
    },
    {
        "name": "Get exactly 1 cage in every level except for the caves levels"
    },
    {
        "name": "Max% Pink Plant Woods"
    },
    {
        "name": "Kill 6 unique tall living stones in PPW without using punch and without taking damage in between"
    },
    {
        "name": "Beat the 2nd PPW Magician under 27 seconds on your first visit to the level"
    },
    {
        "name": "Beat the PPW2 Magician under 8 seconds"
    },
    {
        "name": "Get all cages in AL without leaving the level"
    },
    {
        "name": "Enter AL for the first time with 13 lives and 5 cages"
    },
    {
        "name": "Beat Bzzit with a gold stage 1 or 2 speedfist"
    },
    {
        "name": "Beat both Bzzit & Moskito without using Jump and without taking damage"
    },
    {
        "name": "AL Screen 3 Max% and damageless (autoscroller)"
    },
    {
        "name": "Get all Swamps cages in reverse order"
    },
    {
        "name": "In Swamps screen 3, go from the bottom to top without taking damage and without using helicopter"
    },
    {
        "name": "Clip 6 times in the Swamps screen 1"
    },
    {
        "name": "Beat the Swamps Magician under 17 seconds without using helicopter and run"
    },
    {
        "name": "Max% The Swamps of Forgetfulness"
    },
    {
        "name": "Beat Moskito after beating Mr. Sax"
    },
    {
        "name": "Max% Moskito's Nest"
    },
    {
        "name": "Get all 3 MN screen 1 cages without using speed storage"
    },
    {
        "name": "Beat Moskito's Nest by only using 1 punch"
    },
    {
        "name": "Kill all enemies in MN screen 1 without getting hit (kill all piranha's once)"
    },
    {
        "name": "Get the Bongo hills dark screen cage without using helicopter, tethering and speedlocking"
    },
    {
        "name": "Beat Bongo hills after collecting all cages in Swamps"
    },
    {
        "name": "Beat the BH4 Magician under 23 seconds without using helicopter and run"
    },
    {
        "name": "Get all 6 1ups in Bongo Hills"
    },
    {
        "name": "Beat Bongo hills without dying and without taking damage while getting all cages"
    },
    {
        "name": "Max% Allegro Presto"
    },
    {
        "name": "Beat Allegro screen 1 while collecting 4 tings or less"
    },
    {
        "name": "Beat Allegro Presto after collecting all cages in Anguish Lagoon"
    },
    {
        "name": "Do Allegro clip twice within 5 tries"
    },
    {
        "name": "Beat Allegro Presto without having the ring grab powerup"
    },
    {
        "name": "Collect 5 cages in TG without getting hit"
    },
    {
        "name": "Get all cages in TG without using helicopter or superjumps"
    },
    {
        "name": "Beat TG screen 2 without taking a hit"
    },
    {
        "name": "Perform Double golem jump in TG"
    },
    {
        "name": "Damageless Hard Rocks"
    },
    {
        "name": "Beat Hard Rocks while having exactly 20 cages"
    },
    {
        "name": "Touch all the endsigns of Hard Rocks and SMC"
    },
    {
        "name": "Beat the final screen of Hard rocks while only allowed to touch 4 unique clouds"
    },
    {
        "name": "Get all 7 1ups in Hard Rocks"
    },
    {
        "name": "Collect all 51 tings in MSP1 and reach the endsign without taking a hit"
    },
    {
        "name": "Hit Mr. Stone 6 times while having atleast 3 dogs alive all the time"
    },
    {
        "name": "Punch Mr. Stone off the screen"
    },
    {
        "name": "Beat Mr. Stone Peaks after getting 4 cages in Hard Rocks"
    },
    {
        "name": "Beat Gong Heights screen 2 without letting go of right and without crawling"
    },
    {
        "name": "Get all Gong Heights cages in reverse order"
    },
    {
        "name": "Beat Gong Heights screen 1 while only touching one bongo"
    },
    {
        "name": "Beat Gong Heights without using helicopter and run"
    },
    {
        "name": "Enter Mr Sax fight (chase screen) while having exactly 69 tings"
    },
    {
        "name": "Beat mr sax using only 12 punches and without getting hit"
    },
    {
        "name": "Beat the first screen of Mr. Sax as small rayman"
    },
    {
        "name": "Clip 5 times in Mr. Sax without pressing down"
    },
    {
        "name": "Get all 7 1ups in EP"
    },
    {
        "name": "Grab 2 lives as small rayman on EP2"
    },
    {
        "name": "Beat the EP 3 Magician under 27 seconds"
    },
    {
        "name": "Beat EP without using helicopter and run"
    },
    {
        "name": "Beat Viking Mama with a Stage 2 goldfist and 5 health"
    },
    {
        "name": "Beat Viking Mama twice in a row with only taking 1 damage boost to do so"
    },
    {
        "name": "Damageless EP"
    },
    {
        "name": "Beat the first screen of PP as small rayman"
    },
    {
        "name": "Perform the -EZ Jump-"
    },
    {
        "name": "Beat PP without using helicopter and run in screens 1 and 3"
    },
    {
        "name": "in PP, Get 7 Unique fist powerups without picking up P orbs or 1ups"
    },
    {
        "name": "in PP2, Collect all 60 tings & reach the endsign without taking a hit"
    },
    {
        "name": "Beat the final screen of PP with the speedstorage strat on the sharpeners"
    },
    {
        "name": "Beat viking mama while having exactly 20 lives"
    },
    {
        "name": "Get to the left side of the return sign in SMC1"
    },
    {
        "name": "Reach the top SMC1 end sign without touching any sharpeners and without taking damage"
    },
    {
        "name": "Get all 8 1ups in SMC"
    },
    {
        "name": "Beat SMC screen 2 without using red rings"
    },
    {
        "name": "Beat Space Mama while having exactly 19 cages"
    },
    {
        "name": "Beat Space Mama after beating sax"
    },
    {
        "name": "Get all CP cages in reverse order"
    },
    {
        "name": "Complete CP1 whilst collecting 12 tings or less"
    },
    {
        "name": "Max% and Damageless Crystal Palace"
    },
    {
        "name": "Get all 7 1ups in EAJ"
    },
    {
        "name": "Damageless EAJ"
    },
    {
        "name": "Beat Skops without using punch"
    },
    {
        "name": "Beat Skops screen 1 without standing on a surface apart from the start and 3 red platforms"
    },
    {
        "name": "In Skops, get from the photographer to the end sign while only using 1 punch"
    },
    {
        "name": "Take the Skops photographer, then get all cages in reverse order without leaving the screen"
    }
];
