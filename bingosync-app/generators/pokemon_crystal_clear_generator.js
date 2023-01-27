bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Defeat Brock"
    },
    {
        "name": "Defeat  Misty"
    },
    {
        "name": "Defeat Lt. Surge"
    },
    {
        "name": "Defeat Erica"
    },
    {
        "name": "Defeat Janine"
    },
    {
        "name": "Defeat Sabrina"
    },
    {
        "name": "Defeat Blaine"
    },
    {
        "name": "Defeat Blue"
    },
    {
        "name": "Defeat Faulkner"
    },
    {
        "name": "Defeat Bugsy"
    },
    {
        "name": "Defeat Whitney"
    },
    {
        "name": "Defeat Morty"
    },
    {
        "name": "Defeat Chuck"
    },
    {
        "name": "Defeat Jasmine"
    },
    {
        "name": "Defeat Pryce"
    },
    {
        "name": "Defeat Clair"
    },
    {
        "name": "Defeat Will in the Battle Simulator"
    },
    {
        "name": "Defeat Koga in the Battle Simulator"
    },
    {
        "name": "Defeat Bruno in the Battle Simulator"
    },
    {
        "name": "Defeat Karen in the Battle Simulator"
    },
    {
        "name": "Defeat Lance in the Battle Simulator"
    },
    {
        "name": "Obtain 3 Badges"
    },
    {
        "name": "Obtain 5 Badges"
    },
    {
        "name": "Obtain 8 Badges"
    },
    {
        "name": "Obtain 12 Badges"
    },
    {
        "name": "Obtain 16 Badges"
    },
    {
        "name": "Defeat the Elite Four"
    },
    {
        "name": "Defeat the Elite Four Rematch"
    },
    {
        "name": "Defeat the Mt. Silver Champ"
    },
    {
        "name": "Defeat THE CHAMP"
    },
    {
        "name": "Defeat 5 Bird Keepers"
    },
    {
        "name": "Defeat 5 Swimmers"
    },
    {
        "name": "Defeat 5 Bug Catchers"
    },
    {
        "name": "Defeat 5 Schoolboys"
    },
    {
        "name": "Defeat 5 Campers"
    },
    {
        "name": "Defeat 5 Firebreathers"
    },
    {
        "name": "Defeat 5 Picnickers"
    },
    {
        "name": "Defeat 5 Poke Fans"
    },
    {
        "name": "Defeat 5 Lasses"
    },
    {
        "name": "Defeat 5 Beauties"
    },
    {
        "name": "Defeat 5 Fishers"
    },
    {
        "name": "Defeat 5 Bikers"
    },
    {
        "name": "Defeat 5 Sailors"
    },
    {
        "name": "Defeat 5 Blackbelts"
    },
    {
        "name": "Defeat 5 Psychics"
    },
    {
        "name": "Defeat 5 Youngsters"
    },
    {
        "name": "Defeat 5 Super Nerds"
    },
    {
        "name": "Defeat 5 Cool Trainers"
    },
    {
        "name": "Defeat 5 PokeManiacs"
    },
    {
        "name": "Defeat 5 Twins"
    },
    {
        "name": "Defeat 5 Hikers"
    },
    {
        "name": "Poison an Opponent"
    },
    {
        "name": "Paralyze an Opponent"
    },
    {
        "name": "Put an Opponent to Sleep"
    },
    {
        "name": "Freeze an Opponent"
    },
    {
        "name": "Burn an Opponent"
    },
    {
        "name": "Confuse an Opponent"
    },
    {
        "name": "Infatuate an Opponent"
    },
    {
        "name": "Have overworld Poison fade"
    },
    {
        "name": "Use Struggle in battle"
    },
    {
        "name": "Rematch a Phone Call Trainer"
    },
    {
        "name": "Obtain 3 Phone Numbers from Trainers"
    },
    {
        "name": "Obtain 5 Phone Numbers from Trainers"
    },
    {
        "name": "10 Pokemon Owned"
    },
    {
        "name": "20 Pokemon Owned"
    },
    {
        "name": "30 Pokemon Owned"
    },
    {
        "name": "40 Pokemon Owned"
    },
    {
        "name": "50 Pokemon Owned"
    },
    {
        "name": "30 Pokemon Seen"
    },
    {
        "name": "50 Pokemon Seen"
    },
    {
        "name": "80 Pokemon Seen"
    },
    {
        "name": "Catch Lapras from the Union Cave or New Cerulean Cave"
    },
    {
        "name": "Use a Stone to Evolve a Pokemon"
    },
    {
        "name": "Evolve a Pokemon through Happiness"
    },
    {
        "name": "Evolve a Pokemon through Trade"
    },
    {
        "name": "Obtain 5 Normal Type Pokemon"
    },
    {
        "name": "Obtain 5 Water Type Pokemon"
    },
    {
        "name": "Obtain 5 Grass Type Pokemon"
    },
    {
        "name": "Obtain 5 Fire Type Pokemon"
    },
    {
        "name": "Obtain 5 Flying Type Pokemon"
    },
    {
        "name": "Obtain 5 Ground Type Pokemon"
    },
    {
        "name": "Obtain 5 Rock Type Pokemon"
    },
    {
        "name": "Obtain 5 Psychic Type Pokemon"
    },
    {
        "name": "Obtain 3 Dragon Type Pokemon"
    },
    {
        "name": "Obtain 3 Ghost Type Pokemon"
    },
    {
        "name": "Obtain 5 Bug Type Pokemon"
    },
    {
        "name": "Obtain 5 Poison Type Pokemon"
    },
    {
        "name": "Obtain 3 Steel Type Pokemon"
    },
    {
        "name": "Obtain 3 Dark Type Pokemon"
    },
    {
        "name": "Obtain 5 Electric Type Pokemon"
    },
    {
        "name": "Obtain 5 Ice Type Pokemon"
    },
    {
        "name": "Obtain 5 Fighting Type Pokemon"
    },
    {
        "name": "Obtain a Shiny Pokemon"
    },
    {
        "name": "Obtain a Kanto Starter Pokemon"
    },
    {
        "name": "Obtain a Johto Starter Pokemon"
    },
    {
        "name": "Obtain an Unown of the first letter of your name"
    },
    {
        "name": "Obtain a Pokemon that can only be one gender"
    },
    {
        "name": "Obtain 3 different Pokemon in the same Evolution Family"
    },
    {
        "name": "Revive a Fossil Pokemon"
    },
    {
        "name": "Complete an In-Game Trade"
    },
    {
        "name": "Obtain a Guardian of the Alph Forest"
    },
    {
        "name": "Purchase a Magikarp"
    },
    {
        "name": "Catch a non-legendary Stationary Pokemon"
    },
    {
        "name": "Obtain 2 Pokemon with different Pseudo Abilities"
    },
    {
        "name": "Obtain Togepi"
    },
    {
        "name": "Obtain Eevee"
    },
    {
        "name": "Obtain Dratini with Extreemspeed"
    },
    {
        "name": "Obtain Kenya"
    },
    {
        "name": "Obtain Shuckie"
    },
    {
        "name": "Obtain Ho-oh"
    },
    {
        "name": "Obtain Lugia"
    },
    {
        "name": "Obtain XD001"
    },
    {
        "name": "Obtain Suicune"
    },
    {
        "name": "Obtain Celebi"
    },
    {
        "name": "Obtain Mewtwo"
    },
    {
        "name": "Obtain Mew"
    },
    {
        "name": "Obtain Entei or Raikou"
    },
    {
        "name": "Obtain Sudowoodo"
    },
    {
        "name": "Obtain Snorlax"
    },
    {
        "name": "Obtain Porygon"
    },
    {
        "name": "Obtain a Legendary Bird"
    },
    {
        "name": "Obtain all 3 Legendary Birds"
    },
    {
        "name": "Obtain Mahog"
    },
    {
        "name": "Obtain 2 Pokemon that start with the same letter"
    },
    {
        "name": "Teach an Unown a second Move"
    },
    {
        "name": "Obtain all letters of the Unown Alphabet"
    },
    {
        "name": "Obtain Starmie"
    },
    {
        "name": "Hatch the Odd Egg"
    },
    {
        "name": "Purchase a Prize Pokemon at either Game Corner"
    },
    {
        "name": "Obtain Kangaskahn"
    },
    {
        "name": "Give a Pokemon a Custom Pallet"
    },
    {
        "name": "Teach a Pokemon a Move with the Move Reminder"
    },
    {
        "name": "Delete a Pokemon's Move with the Move Deleter"
    },
    {
        "name": "Lower a Pokemon's Level"
    },
    {
        "name": "Change a Pokemon's Nickname"
    },
    {
        "name": "Teach a Pokemon a Move with Event Tutor or Kanto TM Tutor"
    },
    {
        "name": "Have 1 Pokemon with 4 HM Moves"
    },
    {
        "name": "Obtain a Legendary or Mythical Pokemon"
    },
    {
        "name": "Obtain Aerodactyl"
    },
    {
        "name": "Defeat Fibbef"
    },
    {
        "name": "Defeat Chronicaler Robert"
    },
    {
        "name": "Defeat Diviner Ryan"
    },
    {
        "name": "Defeat Ex-Rocket Zevach"
    },
    {
        "name": "Defeat Ace Trainer Cat"
    },
    {
        "name": "Defeat Ace Trainer Tiko"
    },
    {
        "name": "Defeat Engineer Kensworth"
    },
    {
        "name": "Defeat Researcher Grizz"
    },
    {
        "name": "Defeat Cowboy Noak"
    },
    {
        "name": "Defeat Honeybun"
    },
    {
        "name": "Defeat DJ Fef"
    },
    {
        "name": "Defeat Doom"
    },
    {
        "name": "Defeat Beautifulman Chaos"
    },
    {
        "name": "Defeat ShockSlayer"
    },
    {
        "name": "Defeat Portablizer Shank"
    },
    {
        "name": "Defeat Pokekid Muddy"
    },
    {
        "name": "Defeat Pokemon Trainer Yellow"
    },
    {
        "name": "Defeat Adventurer Lena"
    },
    {
        "name": "Defeat a Mom in either New Bark Town or Pallet Town"
    },
    {
        "name": "Defeat Professor Oak"
    },
    {
        "name": "Defeat the Secret Trainer in Slowpoke Well"
    },
    {
        "name": "Defeat yourself through a Duplica battle"
    },
    {
        "name": "Find the missing girl on the SS Aqua"
    },
    {
        "name": "Watch the Clefairy dance at Mt. Moon Square"
    },
    {
        "name": "Obtain the Clear Bell"
    },
    {
        "name": "Obtain the Silver Wing"
    },
    {
        "name": "Obtain the Rainbow Wing"
    },
    {
        "name": "Obtain the GS Ball"
    },
    {
        "name": "Find Suicune in Cianwood"
    },
    {
        "name": "Find Suicune on Route 36"
    },
    {
        "name": "Find Suicune on Route 42"
    },
    {
        "name": "Obtain the Sword"
    },
    {
        "name": "Complete the Goldenrod Cafe Side Quest"
    },
    {
        "name": "Have lunch with Doom"
    },
    {
        "name": "Change your Character's look"
    },
    {
        "name": "Find the Yellow Swinub - Lemon"
    },
    {
        "name": "Find the Purple Swinub - Weird Grape"
    },
    {
        "name": "Find the Blue Swinub - Bloink"
    },
    {
        "name": "Find the Green Swinub - Pigy"
    },
    {
        "name": "Find the Brown Swinub"
    },
    {
        "name": "Take a tour of Cherrygrove"
    },
    {
        "name": "Learn how to catch a Pokemon from Dude"
    },
    {
        "name": "Convince Earl to go back to his Classroom"
    },
    {
        "name": "Trigger the Surprised Pikachu Meme"
    },
    {
        "name": "Mess with the computer at the New Cinnabar Lab"
    },
    {
        "name": "Look under the Truck in Vermilion City"
    },
    {
        "name": "Find the picture of the Dabbing Pig"
    },
    {
        "name": "Give Buena the correct Password"
    },
    {
        "name": "Listen to a spooky radio station in either Kanto or Johto"
    },
    {
        "name": "Mess with the game code in Celadon City"
    },
    {
        "name": "Push a Heavy Boulder"
    },
    {
        "name": "Read the Journal at the Day of the Week Siblings House"
    },
    {
        "name": "Deliver Kenya's mail"
    },
    {
        "name": "Heal MooMoo"
    },
    {
        "name": "Unlock Footprints"
    },
    {
        "name": "Honk the Train Horn"
    },
    {
        "name": "Take a ride on the Magnet Train"
    },
    {
        "name": "Take a ride on the SS Aqua"
    },
    {
        "name": "Take a ride on the a Ferry"
    },
    {
        "name": "Infect a Pokemon with Pokerus"
    },
    {
        "name": "Find a Pokemon with a Powerful Aura"
    },
    {
        "name": "Scale a Waterfall"
    },
    {
        "name": "Clear a Whirlpool"
    },
    {
        "name": "Light up a Dark Area"
    },
    {
        "name": "Unlock Grizz's PC"
    },
    {
        "name": "Win 1 level of Voltorb Flip"
    },
    {
        "name": "Win 8 or more coins from the Slots"
    },
    {
        "name": "Have no Money on hand or in the bank"
    },
    {
        "name": "Move into a new Residence"
    },
    {
        "name": "Solve 1 Ruins of Alph Puzzle"
    },
    {
        "name": "Solve 2 Ruins of Alph Puzzles"
    },
    {
        "name": "Solve 3 Ruins of Alph Puzzles"
    },
    {
        "name": "Solve 4 Ruins of Alph Puzzles"
    },
    {
        "name": "Solve the secret Ruins of Alph Puzzle"
    },
    {
        "name": "Give a Pokemon a Haircut"
    },
    {
        "name": "Give a Pokemon a Massage"
    },
    {
        "name": "Open Origin Plains"
    },
    {
        "name": "Win 1st"
    },
    {
        "name": "Cut the Hard to Grow Grass on Route 34"
    },
    {
        "name": "Unlock a new Pack Design"
    },
    {
        "name": "Unlock a new Song"
    },
    {
        "name": "Meditate with Eusine"
    },
    {
        "name": "Inspect the Silph Co big fountain"
    },
    {
        "name": "Turn an Apricorn into a Ball"
    },
    {
        "name": "$10000 in the Bank"
    },
    {
        "name": "$50000 on hand"
    },
    {
        "name": "Get food at the Goldenrod Cafe"
    },
    {
        "name": "Get a Snack at the Biker Bar or Ferry Terminal Snack Bar"
    },
    {
        "name": "Clear one Unown Pillar in the secret area of Union Cave"
    },
    {
        "name": "Infect a Pokemon with PokeRus"
    },
    {
        "name": "Collect an item from one of the Day of the Week Siblings"
    },
    {
        "name": "Obtain HM01 - Cut"
    },
    {
        "name": "Obtain HM02 - Fly"
    },
    {
        "name": "Obtain HM03 - Surf"
    },
    {
        "name": "Obtain HM04 - Strength"
    },
    {
        "name": "Obtain HM05 - Flash"
    },
    {
        "name": "Obtain HM06 - Whirlpool"
    },
    {
        "name": "Obtain HM07 - Waterfall"
    },
    {
        "name": "Obtain the Bike"
    },
    {
        "name": "Obtain the Gate Key"
    },
    {
        "name": "Obtain all of the Rods"
    },
    {
        "name": "Obtain the Poke Flute"
    },
    {
        "name": "Obtain the Blue Card"
    },
    {
        "name": "Obtain the Coin Case"
    },
    {
        "name": "Obtain the Pass"
    },
    {
        "name": "Obtain the Item Finder"
    },
    {
        "name": "Obtain the Red Scale"
    },
    {
        "name": "Obtain the Silph Pass"
    },
    {
        "name": "Obtain the Squirt Bottle"
    },
    {
        "name": "Obtain the SS Ticket"
    },
    {
        "name": "Obtain the Old Amber"
    },
    {
        "name": "Obtain the Dome Fossil"
    },
    {
        "name": "Obtain the Helix Fossil"
    },
    {
        "name": "Obtain the Dex Tracker Upgrade"
    },
    {
        "name": "Obtain the DV Viewer Upgrade"
    },
    {
        "name": "Obtain the Big Rock"
    },
    {
        "name": "Obtain the Region Map"
    },
    {
        "name": "Obtain the Luster Ball"
    },
    {
        "name": "Obtain a Booster Ball"
    },
    {
        "name": "Obtain the Mirror Ball"
    },
    {
        "name": "Obtain a Master Ball"
    },
    {
        "name": "Display a console in your room"
    },
    {
        "name": "Decorate your room with three pieces of decor"
    },
    {
        "name": "10 total phone numbers"
    },
    {
        "name": "10 TMs in your Pack"
    },
    {
        "name": "20 TMs in your Pack"
    },
    {
        "name": "30 TMs in your Pack"
    },
    {
        "name": "7 different Berries in your Pack"
    },
    {
        "name": "7 different Balls in your Pack"
    },
    {
        "name": "7 different Apricorns in your Pack"
    },
    {
        "name": "Obtain TM01 - Dynamic Punch"
    },
    {
        "name": "Obtain TM02 - Headbutt"
    },
    {
        "name": "Obtain TM03 - Curse"
    },
    {
        "name": "Obtain TM04 - Rollout"
    },
    {
        "name": "Obtain TM05 - Roar"
    },
    {
        "name": "Obtain TM06 - Toxic"
    },
    {
        "name": "Obtain TM07 - Zap Cannon"
    },
    {
        "name": "Obtain TM08 - Rock Smash"
    },
    {
        "name": "Obtain TM09 - Psych Up"
    },
    {
        "name": "Obtain TM10 - Hidden Power"
    },
    {
        "name": "Obtain TM11 - Sunny Day"
    },
    {
        "name": "Obtain TM12 - Sweet Scent"
    },
    {
        "name": "Obtain TM13 - Snore"
    },
    {
        "name": "Obtain TM14 - Blizzard"
    },
    {
        "name": "Obtain TM15 - Hyper Beam"
    },
    {
        "name": "Obtain TM16 - Icy Wind"
    },
    {
        "name": "Obtain TM17 - Protect"
    },
    {
        "name": "Obtain TM18 - Rain Dance"
    },
    {
        "name": "Obtain TM19 - Giga Drain"
    },
    {
        "name": "Obtain TM20 - Endure"
    },
    {
        "name": "Obtain TM21 - Frustration"
    },
    {
        "name": "Obtain TM22 - Solarbeam"
    },
    {
        "name": "Obtain TM23 - Iron Tail"
    },
    {
        "name": "Obtain TM24 - Dragonbreath"
    },
    {
        "name": "Obtain TM25 - Thunder"
    },
    {
        "name": "Obtain TM26 - Earthquake"
    },
    {
        "name": "Obtain TM27 - Return"
    },
    {
        "name": "Obtain TM28 - Dig"
    },
    {
        "name": "Obtain TM29 - Psychic"
    },
    {
        "name": "Obtain TM30 - Shadow Ball"
    },
    {
        "name": "Obtain TM31 - Mud-Slap"
    },
    {
        "name": "Obtain TM32 - Double Team"
    },
    {
        "name": "Obtain TM33 - Ice Punch"
    },
    {
        "name": "Obtain TM34 - Swagger"
    },
    {
        "name": "Obtain TM35 - Sleep Talk"
    },
    {
        "name": "Obtain TM36 - Sludge Bomb"
    },
    {
        "name": "Obtain TM37 - Sandstorm"
    },
    {
        "name": "Obtain TM38 - Fire Blast"
    },
    {
        "name": "Obtain TM39 - Swift"
    },
    {
        "name": "Obtain TM40 - Defense Curl"
    },
    {
        "name": "Obtain TM41 - Thunderpunch"
    },
    {
        "name": "Obtain TM42 - Dream Eater"
    },
    {
        "name": "Obtain TM43 - Detect"
    },
    {
        "name": "Obtain TM44 - Rest"
    },
    {
        "name": "Obtain TM45 - Attract"
    },
    {
        "name": "Obtain TM46 - Thief"
    },
    {
        "name": "Obtain TM47 - Steel Wing"
    },
    {
        "name": "Obtain TM48 - Fire Punch"
    },
    {
        "name": "Obtain TM49 - Fury Cutter"
    },
    {
        "name": "Obtain TM50 - Nightmare"
    }
];
