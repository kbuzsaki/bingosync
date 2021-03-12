bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Defeat Mario in 3 different battles"
    },
    {
        "name": "Defeat Luigi in 3 different battles"
    },
    {
        "name": "Defeat Peach in 3 different battles"
    },
    {
        "name": "Defeat Bowser in 3 different battles"
    },
    {
        "name": "Defeat Dr. Mario in 3 different battles"
    },
    {
        "name": "Defeat Rosalina & Luma and Daisy each in battle"
    },
    {
        "name": "Defeat three different Koopa Kids (Bowser Jr.) in 3 different battles"
    },
    {
        "name": "Defeat Yoshi in 3 different battles"
    },
    {
        "name": "Defeat Donkey Kong in 3 different battles"
    },
    {
        "name": "Defeat Diddy Kong in 3 different battles"
    },
    {
        "name": "Defeat Link, Young Link, and Toon Link each in battle"
    },
    {
        "name": "Defeat Zelda in 3 different battles"
    },
    {
        "name": "Defeat Sheik in 3 different battles"
    },
    {
        "name": "Defeat Young Link in 3 different battles"
    },
    {
        "name": "Defeat Ganondorf in 3 different battles"
    },
    {
        "name": "Defeat Toon Link in 3 different battles"
    },
    {
        "name": "Defeat Zero Suit Samus in 3 different battles"
    },
    {
        "name": "Defeat Kirby in 3 different battles"
    },
    {
        "name": "Defeat Meta Knight in 3 different battles"
    },
    {
        "name": "Defeat King Dedede in 3 different battles"
    },
    {
        "name": "Defeat Fox in 3 different battles"
    },
    {
        "name": "Defeat Falco in 3 different battles"
    },
    {
        "name": "Defeat Wolf in 3 different battles"
    },
    {
        "name": "Defeat Pikachu in 3 different battles"
    },
    {
        "name": "Defeat Jigglypuff in 3 different battles"
    },
    {
        "name": "Defeat Pichu in 3 different battles"
    },
    {
        "name": "Defeat Mewtwo, Greninja, Incineroar, and Lucario each in battle"
    },
    {
        "name": "Defeat Squirtle, Ivysaur, and Charizard each in battle"
    },
    {
        "name": "Defeat Mii Gunner, Brawler, and Swordsman each in battle"
    },
    {
        "name": "Defeat Lucario in 3 different battles"
    },
    {
        "name": "Defeat Captain Falcon in 3 different battles"
    },
    {
        "name": "Defeat Ness in 3 different battles"
    },
    {
        "name": "Defeat Lucas and Ness each in battle"
    },
    {
        "name": "Defeat Ice Climbers in 3 different battles"
    },
    {
        "name": "Defeat Marth in 3 different battles"
    },
    {
        "name": "Defeat Chrom and Roy each in battle"
    },
    {
        "name": "Defeat Ike and Marth each in battle"
    },
    {
        "name": "Defeat Lucina in 3 different battles"
    },
    {
        "name": "Defeat Robin in 3 different battles"
    },
    {
        "name": "Defeat Corrin and Robin each in battle"
    },
    {
        "name": "Defeat Mr. Game & Watch in 3 different battles"
    },
    {
        "name": "Defeat Pit in 3 different battles"
    },
    {
        "name": "Defeat Palutena in 3 different battles"
    },
    {
        "name": "Defeat Pit and Dark Pit each in battle"
    },
    {
        "name": "Defeat Wario in 3 different battles"
    },
    {
        "name": "Defeat Olimar in 3 different battles"
    },
    {
        "name": "Defeat R.O.B. in 3 different battles"
    },
    {
        "name": "Defeat Villager in 3 different battles"
    },
    {
        "name": "Defeat Wii Fit Trainer in 3 different battles"
    },
    {
        "name": "Defeat Little Mac in 3 different battles"
    },
    {
        "name": "Defeat Shulk in 3 different battles"
    },
    {
        "name": "Defeat Duck Hunt in 3 different battles"
    },
    {
        "name": "Defeat Snake in 3 different battles"
    },
    {
        "name": "Defeat Sonic in 3 different battles"
    },
    {
        "name": "Defeat Mega Man in 3 different battles"
    },
    {
        "name": "Defeat Pac-Man in 3 different battles"
    },
    {
        "name": "Defeat Ken and Ryu each in battle"
    },
    {
        "name": "Defeat Bayonetta in 3 different battles"
    },
    {
        "name": "Defeat King K. Rool in 3 different battles"
    },
    {
        "name": "Defeat Ridley in 3 different battles"
    },
    {
        "name": "Defeat Dark Samus and Samus each in battle"
    },
    {
        "name": "Defeat Incineroar in 3 different battles"
    },
    {
        "name": "Defeat Chrom and Roy each in battle"
    },
    {
        "name": "Defeat Isabelle in 3 different battles"
    },
    {
        "name": "Defeat Inkling in 3 different battles"
    },
    {
        "name": "Defeat Simon and Richter each in battle"
    },
    {
        "name": "Fully clear Raceway"
    },
    {
        "name": "Fully clear Southern Great Plateau"
    },
    {
        "name": "Fully clear World Tour"
    },
    {
        "name": "Fully clear River Woods"
    },
    {
        "name": "Fully clear Eastern Town"
    },
    {
        "name": "Fully clear Mushroom Platforms"
    },
    {
        "name": "Fully clear Ribbon Road"
    },
    {
        "name": "Fully clear Cliffside Rapids"
    },
    {
        "name": "Fully clear Molten Fortress"
    },
    {
        "name": "Fully clear Kongo Jungle"
    },
    {
        "name": "Fully clear Military Base"
    },
    {
        "name": "Fully clear Base"
    },
    {
        "name": "Fully clear Lumiose City"
    },
    {
        "name": "Fully clear Console City"
    },
    {
        "name": "Fully clear Heart Pool Mountain"
    },
    {
        "name": "Fully clear Poison Woods"
    },
    {
        "name": "Fully clear Power Plant"
    },
    {
        "name": "Fully clear Northwestern Town"
    },
    {
        "name": "Fully clear Frozen Mountain"
    },
    {
        "name": "Fully clear Temple of Light"
    },
    {
        "name": "Fully clear Outer Space"
    },
    {
        "name": "Fully clear Pac-Maze"
    },
    {
        "name": "Fully clear Beachside Town"
    },
    {
        "name": "Fully clear DK Island"
    },
    {
        "name": "Fully clear Alolan Islands"
    },
    {
        "name": "Fully clear Forest Hill"
    },
    {
        "name": "Fully clear Mountain Falls"
    },
    {
        "name": "Fully clear Badlands"
    },
    {
        "name": "Fully clear Raging Volcano"
    },
    {
        "name": "Fully clear Floating Islands"
    },
    {
        "name": "Fully clear Gourmet Race"
    },
    {
        "name": "Lose a match by timing out"
    },
    {
        "name": "After unlocking Mario, never use Kirby"
    },
    {
        "name": "Always use your most recently unlocked fighter"
    },
    {
        "name": "Never use support spirits"
    },
    {
        "name": "Never use a neutral primary spirit"
    },
    {
        "name": "Don’t spend any skill spheres"
    },
    {
        "name": "Win a fight without leaving the floor"
    },
    {
        "name": "Win a fight only dealing damage while aerial"
    },
    {
        "name": "Win a fight after jumping immediately and not touching the floor again"
    },
    {
        "name": "Use 3 different fighting styles in 3 fights"
    },
    {
        "name": "Teach 1 spirit 3 different fighting styles"
    },
    {
        "name": "Forget a fighting style at slowpoke"
    },
    {
        "name": "Forget 2 different fighting styles at slowpoke"
    },
    {
        "name": "Forget 3 different fighting styles at slowpoke"
    },
    {
        "name": "Unlock 3 Dojos"
    },
    {
        "name": "Unlock 4 Dojos"
    },
    {
        "name": "Unlock 5 Dojos"
    },
    {
        "name": "Level a spirit to 99 at the Gym"
    },
    {
        "name": "Unlock the Gym"
    },
    {
        "name": "Unlock 2 Shops"
    },
    {
        "name": "Unlock 3 Shops"
    },
    {
        "name": "Unlock 3 explorers"
    },
    {
        "name": "Send 4 spirits exploring"
    },
    {
        "name": "Unlock 5 fighters"
    },
    {
        "name": "Unlock 10 fighters"
    },
    {
        "name": "Unlock 15 fighters"
    },
    {
        "name": "Beat 3 fights with no spirits"
    },
    {
        "name": "Beat 5 fights with no spirits"
    },
    {
        "name": "Beat 7 fights with no spirits"
    },
    {
        "name": "Defeat 3 Ace Spirits"
    },
    {
        "name": "Defeat 5 Ace Spirits"
    },
    {
        "name": "Defeat 7 Ace Spirits"
    },
    {
        "name": "Don't use throws in any fight"
    },
    {
        "name": "Don't use specials in any fight"
    },
    {
        "name": "Clear an entire area without double jumping"
    },
    {
        "name": "Don’t dismiss any spirits"
    },
    {
        "name": "Do every fight on Normal or higher difficulty"
    },
    {
        "name": "Do every fight on Hard or higher difficulty"
    },
    {
        "name": "Defeat an Ace Spirit on Hard difficulty"
    },
    {
        "name": "Win 5 fights against Giant enemies"
    },
    {
        "name": "Win 3 fights against Giant enemies"
    },
    {
        "name": "Win 5 fights against Tiny enemies"
    },
    {
        "name": "Win 3 fights against Metal enemies"
    },
    {
        "name": "Defeat an enemy via drowning"
    },
    {
        "name": "Defeat an enemy by spiking them downwards"
    },
    {
        "name": "Defeat an enemy by throwing them into the blast zone"
    },
    {
        "name": "Defeat an enemy with a command grab"
    },
    {
        "name": "Defeat an enemy while they are invisible"
    },
    {
        "name": "Defeat a golden enemy"
    },
    {
        "name": "Defeat an enemy and have them hit the front of the screen"
    },
    {
        "name": "Defeat an enemy and have them star out in the background"
    },
    {
        "name": "Defeat ONLY the main fighter to win"
    },
    {
        "name": "Defeat everyone EXCEPT the main fighter and then win"
    },
    {
        "name": "Win 3 horde fights(5 or more fighters)"
    },
    {
        "name": "Be under the effect of 3 transformations at the same time"
    },
    {
        "name": "Win a fight while Giant"
    },
    {
        "name": "Win a fight while Invisible"
    },
    {
        "name": "Win a fight while Metal"
    },
    {
        "name": "Win a fight while a flower is on your head"
    },
    {
        "name": "Win a fight only dealing damage with items"
    },
    {
        "name": "Win 3 fights with a final smash"
    },
    {
        "name": "Take 3 different Warp pipes"
    },
    {
        "name": "Summon a spirit"
    },
    {
        "name": "Summon 2 spirits"
    },
    {
        "name": "Summon 3 spirits"
    },
    {
        "name": "Enhance a spirit"
    },
    {
        "name": "Enhance 2 different spirits"
    },
    {
        "name": "Enhance 3 different spirits"
    },
    {
        "name": "Level 3 spirits to 99"
    },
    {
        "name": "Level 4 spirits to 99"
    },
    {
        "name": "Level 5 spirits to 99"
    },
    {
        "name": "Clear 7 environmental blocks"
    },
    {
        "name": "Clear 5 environmental blocks"
    },
    {
        "name": "Clear 3 environmental blocks"
    },
    {
        "name": "Press the Red Button in Console City"
    },
    {
        "name": "Unlock the Temple of Light"
    },
    {
        "name": "Ride the Rapids"
    },
    {
        "name": "Take the Train"
    },
    {
        "name": "Slide on the Ice"
    },
    {
        "name": "Road trip on the Bus"
    },
    {
        "name": "Grow the Giant Vine"
    },
    {
        "name": "Build the Rainbow Bridge"
    },
    {
        "name": "Grow the Tiny mushroom"
    },
    {
        "name": "Press the Blue button"
    },
    {
        "name": "Press the Green button"
    },
    {
        "name": "Press the Pink button"
    },
    {
        "name": "Finish a match with an Item explosion"
    },
    {
        "name": "Finish a stamina match with < 5 health"
    },
    {
        "name": "Finish a stamina match with < 10 health"
    },
    {
        "name": "Finish a timed match with < 10 seconds left"
    },
    {
        "name": "Finish a timed match with < 20 seconds left"
    },
    {
        "name": "Loot 5 treasure chests"
    },
    {
        "name": "Loot 10 treasure chests"
    },
    {
        "name": "Loot 15 treasure chests"
    },
    {
        "name": "Collect 30 orbs from chests"
    },
    {
        "name": "Collect 40 orbs from chests"
    },
    {
        "name": "Collect 50 orbs from chests"
    },
    {
        "name": "Finish with >150 orbs"
    },
    {
        "name": "Finish with >200 orbs"
    },
    {
        "name": "Acquire 3 spirits from chests"
    },
    {
        "name": "Acquire 4 spirits from chests"
    },
    {
        "name": "Acquire 5 spirits from chests"
    },
    {
        "name": "Have 40 small snacks"
    },
    {
        "name": "Have 50 small snacks"
    },
    {
        "name": "Have 60 small snacks"
    },
    {
        "name": "Have 30 medium snacks"
    },
    {
        "name": "Have 40 medium snacks"
    },
    {
        "name": "Have 50 medium snacks"
    },
    {
        "name": "Have 5 large snacks"
    },
    {
        "name": "Have 10 large snacks"
    },
    {
        "name": "Have 15 large snacks"
    },
    {
        "name": "Win a match using 5 different fighters"
    },
    {
        "name": "Win 3 matches at a spirit type disadvantage"
    },
    {
        "name": "Win 5 matches at a spirit type disadvantage"
    },
    {
        "name": "Equip a Primary with two supports from their home series"
    },
    {
        "name": "Win a fight with no damage taken"
    },
    {
        "name": "Win 3 fights at over 100%"
    },
    {
        "name": "Win 3 fights at over 200%"
    },
    {
        "name": "Win a fight at 999%"
    },
    {
        "name": "Finish a fight with wind with no wind resistance"
    },
    {
        "name": "Don’t get slept-on on a sleep floor stage"
    },
    {
        "name": "Don’t get poisoned on a poison floor stage"
    },
    {
        "name": "Don’t get burnt on a lava floor stage"
    },
    {
        "name": "Don’t get frozen on an ice floor stage"
    },
    {
        "name": "Don’t get shocked on a zap floor stage"
    },
    {
        "name": "Don’t use any jumps while on a sticky floor stage"
    },
    {
        "name": "Finish a full lap on a scrolling stage"
    },
    {
        "name": "Kill screen two fighters with the same attack"
    },
    {
        "name": "Finish a fight with the screen upside down"
    },
    {
        "name": "Finish a fight while controls are reversed"
    },
    {
        "name": "Finish a fight while completely blinded by fog"
    },
    {
        "name": "Buy out a shops entire stock"
    },
    {
        "name": "Buy 8 items from shops"
    },
    {
        "name": "Kirby Kamikaze"
    },
    {
        "name": "Defeat an Ace with no spirits"
    },
    {
        "name": "Defeat an Ace with a team at <1500 power"
    },
    {
        "name": "Defeat an Ace with a team at <3000 power"
    },
    {
        "name": "Defeat an Ace at a spirit disadvantage"
    },
    {
        "name": "Defeat a Legendary without spirits"
    },
    {
        "name": "Defeat a Legendary with a team at <2000 power"
    },
    {
        "name": "Defeat a Legendary with a team at <4000 power"
    },
    {
        "name": "Defeat a Legendary at a spirit disadvantage"
    },
    {
        "name": "Heal 100% with a single item"
    },
    {
        "name": "Unlock Sheik, Marth, and Villager"
    },
    {
        "name": "Defeat K. Rool with DK or Diddy"
    },
    {
        "name": "Defeat Bowser with Mario, Yoshi, or Peach"
    },
    {
        "name": "Defeat King Dedede with Kirby"
    },
    {
        "name": "Defeat Mewtwo with any pokemon"
    },
    {
        "name": "Defeat Dark Samus or Ridley with Samus or ZSS"
    },
    {
        "name": "Defeat Wolf with Fox or Falco"
    },
    {
        "name": "Defeat Ganondorf with Link, Toon Link, or Sheik"
    },
    {
        "name": "Defeat Giga Bowser with Peach"
    },
    {
        "name": "Defeat Dr. Wily with Mega Man"
    },
    {
        "name": "Defeat The Boss with Snake"
    },
    {
        "name": "Defeat Emperor Bulblax with Olimar"
    },
    {
        "name": "Defeat Viridi with Pit"
    },
    {
        "name": "Win a fight using only Kirby’s copied ability"
    },
    {
        "name": "Collect 3 different powers as Kirby in 1 fight"
    },
    {
        "name": "Refund 20 different nodes in the skill tree"
    },
    {
        "name": "Obtain the Double Final Smash skill-255"
    },
    {
        "name": "Obtain the Special-Move Power ^^ skill-265"
    },
    {
        "name": "Obtain the Hyper Smash Attacks skill-245"
    },
    {
        "name": "Obtain the Fast Final Smash skill-155"
    },
    {
        "name": "Obtain the Weapon Resist ^ skill-375"
    },
    {
        "name": "Obtain the Additional Midair Jump skill-315"
    },
    {
        "name": "Obtain the No Penalty for Continuous Dodging skill-200"
    },
    {
        "name": "Obtain the Strong-Wind, Lava-Floor, and Poison Damage Reduced skills-185"
    },
    {
        "name": "Obtain 3 shield skills in the skill tree"
    },
    {
        "name": "Obtain 5 attack skills in the skill tree"
    },
    {
        "name": "Obtain 3 item skills in the skill tree"
    },
    {
        "name": "Obtain 3 movement skills in the skill tree"
    },
    {
        "name": "Obtain 2 healing skills in the skill tree"
    },
    {
        "name": "Have 9 skills allocated in the skill tree"
    },
    {
        "name": "Have 12 skills allocated in the skill tree"
    },
    {
        "name": "Have 15 skills allocated in the skill tree"
    },
    {
        "name": "Defeat 5 Assist Trophies"
    },
    {
        "name": "Defeat 3 Assist Trophies"
    },
    {
        "name": "Defeat Luma 3 times in 1 Fight"
    },
    {
        "name": "Defeat 10 Pikmin in 1 Fight"
    },
    {
        "name": "Back throw Bowser 3 times with Mario in 1 fight"
    },
    {
        "name": "Hit King Dedede 3 times with Kirby’s Hammer in 1 fight"
    },
    {
        "name": "Equip two spirits that grant an item"
    },
    {
        "name": "Shield break an enemy"
    },
    {
        "name": "Sleep an enemy 3 times in 1 fight"
    },
    {
        "name": "Freeze an enemy 3 times in 1 fight"
    },
    {
        "name": "Win a fight with a counter attack"
    },
    {
        "name": "Win a fight with a projectile reflect"
    },
    {
        "name": "Unlock 1 music track"
    },
    {
        "name": "Unlock 2 music tracks"
    },
    {
        "name": "Unlock 3 music tracks"
    },
    {
        "name": "Unlock 2 Mii Costumes"
    },
    {
        "name": "Unlock 3 Mii Costumes"
    },
    {
        "name": "Unlock 4 Mii Costumes"
    },
    {
        "name": "Have 15,000 sp"
    },
    {
        "name": "Have 20,000 sp"
    },
    {
        "name": "Have 25,000 sp"
    },
    {
        "name": "Win a fight after getting your Shield broken 3 times"
    },
    {
        "name": "Finish in a Volcano"
    },
    {
        "name": "Finish in the water"
    },
    {
        "name": "Finish in Space"
    },
    {
        "name": "Finish in the Clouds"
    },
    {
        "name": "Finish on a Mushroom"
    },
    {
        "name": "Finish in the middle of the Maze"
    },
    {
        "name": "Finish at the Start"
    },
    {
        "name": "Finish with no spirits in your inventory"
    },
    {
        "name": "Knock on Galeems door"
    },
    {
        "name": "Defeat 5 spirits from the Super Mario Series"
    },
    {
        "name": "Defeat 3 spirits from the Metroid series"
    },
    {
        "name": "Defeat 6 spirits from the Pokemon series"
    },
    {
        "name": "Defeat 3 spirits from the Star Fox series"
    },
    {
        "name": "Defeat 5 spirits from the Zelda series"
    },
    {
        "name": "Defeat 5 spirits from the Fire Emblem series"
    },
    {
        "name": "Defeat 3 spirits from the Donkey Kong series"
    },
    {
        "name": "Defeat 3 spirits from the Animal Crossing series"
    },
    {
        "name": "Defeat 3 spirits from the Kid Icarus series"
    },
    {
        "name": "Defeat 3 spirits from the Earthbound series"
    },
    {
        "name": "Defeat 5 spirits from the Mega Man series"
    },
    {
        "name": "Defeat 3 spirits from the Kirby series"
    },
    {
        "name": "Defeat 3 spirits from the F-Zero series"
    },
    {
        "name": "Defeat 3 spirits from the Metal Gear series"
    },
    {
        "name": "Defeat 3 spirits from the Pikmin series"
    },
    {
        "name": "Defeat 3 spirits from the Sonic series"
    },
    {
        "name": "Defeat 3 spirits from the Street Fighter series"
    },
    {
        "name": "Level a spirit to 99 using battles only"
    },
    {
        "name": "Don't use Bowser, DK, or Pokemon Trainer"
    },
    {
        "name": "Unlock Yoshi using Mario"
    },
    {
        "name": "Use only Kirby"
    },
    {
        "name": "Unlock King Dedede using Kirby"
    },
    {
        "name": "Use only Jigglypuff's rest to win a battle"
    },
    {
        "name": "Get a spirit that has ether the Metal or Metal killer ability"
    },
    {
        "name": "Use no snacks"
    },
    {
        "name": "Juggle an opponent 5 times without them touching the ground"
    },
    {
        "name": "Assemble the Star Fox Team (Fox, Falco, Peppy, Slippy)"
    },
    {
        "name": "Press every button in the base"
    },
    {
        "name": "Unlock 3 characters that use a gun or cannon"
    },
    {
        "name": "Unlock 3 characters with a counter or reflect"
    },
    {
        "name": "Unlock 3 characters with a sword"
    },
    {
        "name": "Unlock 3 characters with kicks, punches, or throws for specials"
    },
    {
        "name": "Use a magic attack with 3 different characters"
    },
    {
        "name": "Use a fire attack with 5 different characters"
    },
    {
        "name": "Use an electric attack with 3 different characters"
    },
    {
        "name": "Use an ice attack with 3 different characters"
    },
    {
        "name": "Use a Pokemon to unlock another Pokemon"
    },
    {
        "name": "Coin-Op (Unlock DK, Pac-Man, Ryu, Duck Hunt)"
    },
    {
        "name": "The Workout: (Unlock Little Mac, Wii Fit Trainer, Captain Falcon, and the gym)"
    },
    {
        "name": "No place like home: (Unlock Villager, Isabel, Timmy & Tommy, and Cooper & Booker)"
    },
    {
        "name": "Mario Party 2020: (Unlock Mario, Bowser, Peach, Yoshi, and DK)"
    },
    {
        "name": "Handheld: (Unlock Kirby, Pikachu, Game & Watch, Pokemon Trainer)"
    },
    {
        "name": "DKC: (Unlock DK, Diddy, Summon Cranky Kong, and Funky's shop)"
    },
    {
        "name": "Sword Boiz: (Unlock Link, Marth, Mii Sword Fighter, Shulk)"
    },
    {
        "name": "Inkopolis (Inkling, Sheldon, Capt. Cuddlefish)"
    },
    {
        "name": "Obtain 5 spirits that don't have a series in the base roster"
    },
    {
        "name": "Never use the Giant Zapfish"
    },
    {
        "name": "Use command inputs to win a battle (Ken, Ryu, Terry)"
    },
    {
        "name": "Do 5 laps around the raceway"
    },
    {
        "name": "Spend 3k in the shops"
    },
    {
        "name": "Spend 5k in the shops"
    },
    {
        "name": "Win a battle using only Falcon Punch"
    },
    {
        "name": "Rescue Peach with Mario"
    },
    {
        "name": "Obtain the M. Bison or Shine Sprite spirit"
    },
    {
        "name": "Obtain the Victini or Ho-oh spirit"
    },
    {
        "name": "Obtain the James McCloud or Geno spirit"
    },
    {
        "name": "Obtain the Ashley or Viridi spirit"
    },
    {
        "name": "Obtain the Pauline or Jeff spirit"
    },
    {
        "name": "Obtain the The Boss spirit"
    },
    {
        "name": "Summon M. Bison"
    },
    {
        "name": "Summon Polar Bear"
    },
    {
        "name": "Summon Hector"
    },
    {
        "name": "Summon Cranky Kong"
    },
    {
        "name": "Summon Gray Fox"
    },
    {
        "name": "Summon Phosphora"
    },
    {
        "name": "Summon Pit (Original)"
    },
    {
        "name": "Summon Dunban"
    },
    {
        "name": "Summon Pak E. Derm"
    },
    {
        "name": "Summon Nabbit"
    },
    {
        "name": "Summon Scizor"
    },
    {
        "name": "Summon Ashley"
    },
    {
        "name": "Summon Ninjara"
    },
    {
        "name": "Summon a spirit using a material bought from a shop"
    },
    {
        "name": "Summon 2 spirits using materials bought from a shop"
    },
    {
        "name": "Summon 3 spirits using materials bought from a shop"
    },
    {
        "name": "Taunt in every battle"
    },
    {
        "name": "Use all three taunts without taking damage in a single fight"
    },
    {
        "name": "Taunt an enemy who just taunted you"
    },
    {
        "name": "Go around the long way to unlock Marth, Sheik or Villager"
    }
];
