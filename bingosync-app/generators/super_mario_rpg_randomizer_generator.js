bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "WEAR a Lazy Shell set"
    },
    {
        "name": "SELL a MATCHED set of 4 Armors"
    },
    {
        "name": "WEAR a MATCHED set of 3 Armors"
    },
    {
        "name": "SELL 1 Armor of each kind"
    },
    {
        "name": "SELL a 4 DIFFERENT Pin Accessories"
    },
    {
        "name": "SELL a 3 DIFFERENT Ring Accessories"
    },
    {
        "name": "SELL a Safety Badge AND Safety Ring"
    },
    {
        "name": "WEAR a Scarf set (2)"
    },
    {
        "name": "SELL 2 DIFFERENT Shoe Accessories"
    },
    {
        "name": "SELL 3 DIFFERENT Hammers"
    },
    {
        "name": "SELL 4 DIFFERENT Shells"
    },
    {
        "name": "SELL 4 DIFFERENT Glove Weapons"
    },
    {
        "name": "SELL a Super Suit OR an Attack Scarf"
    },
    {
        "name": "RETURN the Wallet"
    },
    {
        "name": "USE a Fakeout Mushroom in a Boss Battle"
    },
    {
        "name": "SELL 3 Eggs"
    },
    {
        "name": "SELL 6 DIFFERENT types of Mushroom"
    },
    {
        "name": "USE a Flower set (3)"
    },
    {
        "name": "SELL 2 DIFFERENT types of Syrup"
    },
    {
        "name": "OBTAIN Fireworks"
    },
    {
        "name": "OBTAIN a !Seeya AND an !EarlierTimes"
    },
    {
        "name": "THROW AWAY a Garbage set (3)"
    },
    {
        "name": "USE 3 DIFFERENT Bombs"
    },
    {
        "name": "SELL 3 DIFFERENT Sweets"
    },
    {
        "name": "BUY a 6-pack of the same Drinks"
    },
    {
        "name": "SELL a Goodie Bag OR Coin Trick to Croco"
    },
    {
        "name": "OPEN Doge Jump Chest in Bandit's Way"
    },
    {
        "name": "OPEN the Vault Treasures twice"
    },
    {
        "name": "OPEN the Key Item Chest in Kero Sewers"
    },
    {
        "name": "OPEN the Chest above the swings in Rose Way"
    },
    {
        "name": "OPEN 5 Chests in Rose Way with Shyguys on them"
    },
    {
        "name": "OPEN 5 chests in the Forest Secret Area"
    },
    {
        "name": "OPEN the You Missed! chest"
    },
    {
        "name": "OPEN the 3 Chests in Booster Pass Secret Area"
    },
    {
        "name": "OPEN the Teeter-Totter Chest in Booster Tower"
    },
    {
        "name": "OPEN the Chest in the Sunken Ship with the Shaman Vendor"
    },
    {
        "name": "OPEN the Chest in Sunken Ship with the Mario Clone"
    },
    {
        "name": "BUY the Chest from the Shaman in Land's End Underground"
    },
    {
        "name": "OBTAIN all Items in Belome Temple Vault"
    },
    {
        "name": "OPEN 4 Chests on the fall down through Nimbus Clouds"
    },
    {
        "name": "OPEN the Chest above the Jawful in Nimbus Castle"
    },
    {
        "name": "OPEN 2 Chests in the hidden room of Bowser's Keep"
    },
    {
        "name": "WIN 1+ Juggling mini-game"
    },
    {
        "name": "FIND 4 Keys"
    },
    {
        "name": "FIND and USE 2 Keys"
    },
    {
        "name": "FIND 2 Flags"
    },
    {
        "name": "DONATE Cricket Pie AND/OR Jam"
    },
    {
        "name": "FIND a Tenor, Soprano, or Bright Card"
    },
    {
        "name": "DONATE the Seed AND/OR Fertilizer"
    },
    {
        "name": "FINISH with over 1000 Coins"
    },
    {
        "name": "FINISH with over 25 Frog Coins"
    },
    {
        "name": "SPEND over 500 Coins on a single purchase"
    },
    {
        "name": "SPEND over 15 Frog Coins on a single purchase"
    },
    {
        "name": "OBTAIN a Frog Coin from a Wiggler"
    },
    {
        "name": "STUN Croco1 or Mack"
    },
    {
        "name": "DEFEAT 2+ Mimics"
    },
    {
        "name": "DEFEAT 2 Bosses named after Weapons"
    },
    {
        "name": "DEFEAT 2 Boss PAIRS"
    },
    {
        "name": "FEED a Party Member to Belome"
    },
    {
        "name": "DEFEAT Jinx twice"
    },
    {
        "name": "DEFEAT King Calamari, Megasmilax, or Culex"
    },
    {
        "name": "DEFEAT Johnny in a 1-on-1"
    },
    {
        "name": "DAMAGE Birdetta using a deflected Egg"
    },
    {
        "name": "DEFEAT Dodo BEFORE Valentina"
    },
    {
        "name": "DEFEAT IN ORDER: Axem Yellow, Red, Black, Green, Pink"
    },
    {
        "name": "DEFEAT Countdown by breaking the Watch first"
    },
    {
        "name": "DEFEAT 2 Supervisor Bosses"
    },
    {
        "name": "DEFEAT a Final Fantasy Monster"
    },
    {
        "name": "LOSE a battle to Apprentice Snifit"
    },
    {
        "name": "WITNESS 'Monster's FP is gone'"
    },
    {
        "name": "INFLICT a Status Effect on a Boss"
    },
    {
        "name": "DEFEAT 1+ Bosses in the Sunken Ship"
    },
    {
        "name": "HAVE your Fortune Told"
    },
    {
        "name": "BECOME the Dojo Sensei"
    },
    {
        "name": "DEFEAT 2+ Bosses in Nimbus Castle"
    },
    {
        "name": "SCARE an Enemy into Fleeing"
    },
    {
        "name": "DEFEAT a Troopa and Heavy Troopa of the SAME Color"
    },
    {
        "name": "CAST any Jump spell on a Spikey enemy"
    },
    {
        "name": "CAST Geno Whirl for 9999 Damage"
    },
    {
        "name": "DEFEAT 2+ DIFFERENT types of Dog"
    },
    {
        "name": "DEFEAT 3+ DIFFERENT types of Fish"
    },
    {
        "name": "DEFEAT 3+ DIFFERENT types of Shy Guy"
    },
    {
        "name": "TAKE DAMAGE from 2 DIFFERENT types of Star"
    },
    {
        "name": "WIN all 3 Crook battles in Moleville Mines"
    },
    {
        "name": "DEFEAT 2+ DIFFERENT colors of Fire Elemental"
    },
    {
        "name": "DEFEAT 2+ DIFFERENT types of Piranha Plant"
    },
    {
        "name": "ATTACK a Chomp Enemy with a Chomp Weapon"
    },
    {
        "name": "GET a Lick from 2 DIFFERENT Enemies"
    },
    {
        "name": "WATCH a Geckit attack itself"
    },
    {
        "name": "BANISH a Ghost with the Pure Water item"
    },
    {
        "name": "SAVE an ally/NPC in Mushroom Way in 3 Battles"
    },
    {
        "name": "DEFEAT 2 or more Dry Bones at the same time"
    },
    {
        "name": "PERFORM 10 consecutive Super/Ultra Jumps"
    },
    {
        "name": "PERFORM 10 consecutive Star Rain hits"
    },
    {
        "name": "CAST Psychopath in 3 DIFFERENT Boss battles"
    },
    {
        "name": "CAST a Spell that results in 0 damage"
    },
    {
        "name": "DEFEAT a Boss using only Items"
    },
    {
        "name": "FAIL to Run from battle 3 times in a row"
    },
    {
        "name": "BLOCK an instant Death attack"
    },
    {
        "name": "PERFECT BLOCK 5 Attacks for 0 damage"
    },
    {
        "name": "HAVE your entire Party affected by the same Status Effect"
    },
    {
        "name": "WIN the Race against Boshi"
    },
    {
        "name": "WIN Goomba Stomping 3 times"
    },
    {
        "name": "UNLOCK Grate Guy's Casino"
    },
    {
        "name": "FINISH as SMB1 Mario"
    },
    {
        "name": "COMPLETE the Minecart minigame"
    },
    {
        "name": "COLLECT at least 60 Coins from Midas River"
    },
    {
        "name": "UNLOCK Culex's Lair in Monstro Town"
    },
    {
        "name": "OBTAIN 5 or more Flowers on Booster Hill"
    },
    {
        "name": "COMPLETE the 3-D Maze in the Sunken Ship"
    },
    {
        "name": "WIN the maximum Sky Bridge reward on any difficulty"
    },
    {
        "name": "SCALE the Sky Troopa cliff in less than 12 seconds"
    },
    {
        "name": "OBTAIN everything on the Minefield in Booster Tower"
    },
    {
        "name": "LOSE the Curtain minigame"
    },
    {
        "name": "USE a Yoshi Cookie on a Mukumuku"
    },
    {
        "name": "WIN the Dodo Statue minigame"
    },
    {
        "name": "COMPLETE 2+ Red Door Puzzle scenes"
    },
    {
        "name": "COMPLETE 2+ Red Door Action scenes"
    },
    {
        "name": "FIND 3 Invincibility Stars"
    },
    {
        "name": "TALK to Link"
    },
    {
        "name": "LOSE the LUCKY! minigame 3+ times"
    },
    {
        "name": "WIN the LUCKY! minigame 3+ times"
    },
    {
        "name": "SLEEP in the Suite and TIP the Bellhop"
    },
    {
        "name": "SLEEP at Hinopio's Inn in the Volcano"
    },
    {
        "name": "READ 7 wishes on Star Hill"
    },
    {
        "name": "COMPLETE 1+ Composition at Melody Bay"
    },
    {
        "name": "FINISH with more than 50 FP"
    },
    {
        "name": "GET a Freebie (in Battle)"
    },
    {
        "name": "RESCUE an Ally from the Mines"
    },
    {
        "name": "RESCUE 3 Allies"
    },
    {
        "name": "OBTAIN 2 Star Pieces"
    },
    {
        "name": "OBTAIN 3 Star Pieces"
    },
    {
        "name": "RECEIVE an Item from Toad at an Inn"
    },
    {
        "name": "COMPLETE 1+ Red Door(s)"
    },
    {
        "name": "COMPLETE 3 Puzzles in the Sunken Ship"
    },
    {
        "name": "TRADE 5 Mushrooms for Items"
    },
    {
        "name": "LISTEN to a Retro SMB or SMW Tune"
    },
    {
        "name": "VIEW the Go World! Textbox"
    },
    {
        "name": "WORK at the Marrymore Hotel"
    },
    {
        "name": "HAVE your Picture taken"
    }
];
