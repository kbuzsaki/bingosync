bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Hookshot"
    },
    {
        "name": "Boomerang"
    },
    {
        "name": "Deku Leaf"
    },
    {
        "name": "Iron Boots"
    },
    {
        "name": "Hero's Bow"
    },
    {
        "name": "Fire and Ice Arrows"
    },
    {
        "name": "Light Arrows"
    },
    {
        "name": "Bombs"
    },
    {
        "name": "Skull Hammer"
    },
    {
        "name": "Hero's Sword"
    },
    {
        "name": "Master Sword"
    },
    {
        "name": "Hero's Shield"
    },
    {
        "name": "Power Bracelets"
    },
    {
        "name": "Bottle"
    },
    {
        "name": "Bottled Water"
    },
    {
        "name": "Forest Water"
    },
    {
        "name": "Forest Firefly"
    },
    {
        "name": "Fairy in a Bottle"
    },
    {
        "name": "Elixir Soup"
    },
    {
        "name": "Red Potion"
    },
    {
        "name": "Green Potion"
    },
    {
        "name": "Blue Potion"
    },
    {
        "name": "1 Dungeon Map"
    },
    {
        "name": "1 Compass"
    },
    {
        "name": "Collect 3 Small Keys Total"
    },
    {
        "name": "Collect a Big Key"
    },
    {
        "name": "Din's Pearl"
    },
    {
        "name": "Nayru's Pearl"
    },
    {
        "name": "Farore's Pearl"
    },
    {
        "name": "Collect 1 Triforce Shard"
    },
    {
        "name": "Collect 2 Triforce Shards"
    },
    {
        "name": "Collect 3 Charts"
    },
    {
        "name": "Enter The Ghost Ship"
    },
    {
        "name": "Collect 3 Boko Baba Seeds"
    },
    {
        "name": "Collect 3 Blue Chu Jelly"
    },
    {
        "name": "Collect 3 Golden Feathers"
    },
    {
        "name": "Collect 3 Joy Pendants"
    },
    {
        "name": "Collect a Knight's Crest"
    },
    {
        "name": "Collect 3 Skull Necklaces"
    },
    {
        "name": "Pick up a Boko Stick"
    },
    {
        "name": "Pick up a Machete"
    },
    {
        "name": "Pick up a Darknut Sword"
    },
    {
        "name": "Pick up a Moblin Spear"
    },
    {
        "name": "Pick up a Stalfos Club"
    },
    {
        "name": "Win the Cannon Game"
    },
    {
        "name": "Defeat a Boko Baba without using a Sword"
    },
    {
        "name": "Defeat a Bokoblin with a Quickspin"
    },
    {
        "name": "Parry a ChuChu"
    },
    {
        "name": "Defeat a Kargarok with Exclusively the Bow, without using L-Target on it"
    },
    {
        "name": "Flatten a Miniblin with the Skull Hammer"
    },
    {
        "name": "Defeat a Peahat with a Bomb or Bomb Flower"
    },
    {
        "name": "Pull a Rat with the Hookshot"
    },
    {
        "name": "Defeat a Big Octo with only the Boomerang"
    },
    {
        "name": "Destroy a Big Octo Eye with only the Hookshot"
    },
    {
        "name": "Defeat a Big Octo with only the Bow"
    },
    {
        "name": "Defeat a Big Octo with only Bombs"
    },
    {
        "name": "Destroy a Earth God's Lyric Stone"
    },
    {
        "name": "Destroy a Wind God's Aria Stone"
    },
    {
        "name": "Destroy all of a Darknut's Armor"
    },
    {
        "name": "Defeat a Blue Beamos"
    },
    {
        "name": "Shatter a Frozen Darknut with the Skull Hammer"
    },
    {
        "name": "Defeat a Fire Keese with an Ice Arrow"
    },
    {
        "name": "Defeat a Magtail with only the Grappling Hook"
    },
    {
        "name": "Get your Sword Blocked 3 times by Moblins"
    },
    {
        "name": "Get at Least 5 Morths Attached to You"
    },
    {
        "name": "Knock a Poe's Lantern out of his Ethereal Hands"
    },
    {
        "name": "Defeat a Redead with the Hurricane Spin"
    },
    {
        "name": "Defeat a Stalfos with his own Club"
    },
    {
        "name": "Lose all your Magic to Dexivines"
    },
    {
        "name": "Defeat a Wizzrobe with the Hookshot Exclusively"
    },
    {
        "name": "Collect an Orange Rupee"
    },
    {
        "name": "Collect a Silver Rupee"
    },
    {
        "name": "Have at Least 500 Rupees"
    },
    {
        "name": "Have Max Rupees for your Wallet"
    },
    {
        "name": "Get 50 Hits on Orca without Taking Damage"
    },
    {
        "name": "Climb and Stand on the Top of 4 Different Grappling Posts"
    },
    {
        "name": "Hover for at Least 30 Seconds with the Leaf"
    },
    {
        "name": "Survive Getting Hit by the Black Pig"
    },
    {
        "name": "Have Your Boomerang Lock onto 5 Different Targets at Once"
    },
    {
        "name": "Befriend Cyclos"
    },
    {
        "name": "Defeat a Kargarok with the King of Red Lions' Cannon"
    },
    {
        "name": "Defeat a Boss"
    },
    {
        "name": "HIt Phantom Ganon with your Sword"
    },
    {
        "name": "Collect a Tingle Statue"
    },
    {
        "name": "Defeat 3 Moblins in Forsaken Fortress"
    },
    {
        "name": "Salvage a Sunken Treasure"
    },
    {
        "name": "Destroy 5 Skulls on Four-Eye Reef"
    },
    {
        "name": "Cut all The Grass and Flowers on Western Fairy Island"
    },
    {
        "name": "Destroy Both Ships on Three-Eye Reef"
    },
    {
        "name": "Destroy the Golden Boat"
    },
    {
        "name": "Destroy 2 Giga-pots on Needlerock Isle"
    },
    {
        "name": "Defeat all the Kargaroks on Needlerock Isle"
    },
    {
        "name": "Break the Top of 5 Pots in Diamond-Step Isle Cave"
    },
    {
        "name": "Defeat 2 Different Seahats While Standing on Horseshoe Island"
    },
    {
        "name": "Heal Grandma"
    },
    {
        "name": "Fix a Broken Sign with Aria"
    },
    {
        "name": "Destroy 7 Unique Pots on Outset Island"
    },
    {
        "name": "STRIKE DOWN all of Misa's Grass with a Single Hurricane Spin"
    },
    {
        "name": "Perform a Quickspin on any 3 of the Eyes on Five-Eye Reef"
    },
    {
        "name": "Sink all 4 Ships near Islet of Steel"
    },
    {
        "name": "Bloom the Withered Tree on Greatfish Isle"
    },
    {
        "name": "Destroy 9 Different Rocks on Rock Spire Isle without Link Touching the Isle"
    },
    {
        "name": "Absorb all 5 Fairies in Mother and Child Isles without leaving the King of Red Lions"
    },
    {
        "name": "Feed the Fish near Mother and Child Isles"
    },
    {
        "name": "Suplex all 5 Boulders on Star Island"
    },
    {
        "name": "Clear everything off all 3 Rafts near Northern Fairy Island"
    },
    {
        "name": "From Beedle's Ship Shop at Spectacle Island, Shoot Both of the Island's Signs Down"
    },
    {
        "name": "Destroy all of the Flowers on Tingle Island with a Single Quickspin"
    },
    {
        "name": "Salvage 3 Treasures in Cyclops Reef Waters"
    },
    {
        "name": "Crumble all 8 Pillars in Stone Watcher Island Cave"
    },
    {
        "name": "From Beedle's Ship Shop at Shark Island, Shoot The Islands Sign Down"
    },
    {
        "name": "Dig up Sand Rupees Totalling at Least 25 Rupees at Headstone Island"
    },
    {
        "name": "Talk to the Man with the Telescope at Two-Eye Reef"
    },
    {
        "name": "Clear off all 3 Lookout Platforms near Southern Fairy Island"
    },
    {
        "name": "Defeat 4 Seahats While Standing on Southern Triangle Island"
    },
    {
        "name": "Destroy 4 Cannons in the Six-Eye Reef Square"
    },
    {
        "name": "Destroy all the Flowers at Northern Triangle Island (Including the Small Triangle"
    },
    {
        "name": "Slice up all the Grass at Gale Isle"
    },
    {
        "name": "Destroy 5 Different Giga-pots Near Crescent Moon Island"
    },
    {
        "name": "From Pawprint Isle’s Beedle’s Ship Shop, Defeat a Bokoblin"
    },
    {
        "name": "Bloom the Withered Plant at Eastern Fairy Island"
    },
    {
        "name": "Enter Tower of the Gods"
    },
    {
        "name": "Smash all 4 Pots in the Cabana Cabin"
    },
    {
        "name": "Defeat the Redead in Cabana Labyrinth"
    },
    {
        "name": "Get Inside Ice Ring Isle Cave without using the Deku Leaf"
    },
    {
        "name": "Defeat 2 Gyorgs in Angular Isles' Square"
    },
    {
        "name": "Get 50 Rupees at Boating Course Minigame"
    },
    {
        "name": "Enter Makar’s Secret Room in Forest Haven"
    },
    {
        "name": "Defeat Both Forest Haven Octorocks"
    },
    {
        "name": "Defeat all 6 Boko Babas at Forest Haven"
    },
    {
        "name": "Cook a Potion in Forest Haven using Boko Baba Seeds"
    },
    {
        "name": "Blow up all 5 Rocks at Bomb Island without Leaving the King of Red Lions"
    },
    {
        "name": "Get a Bomb Drop from Grass at Eastern Triangle Island"
    },
    {
        "name": "From the King of Red Lions Defeat the Kargarok atop Fire Mountain"
    },
    {
        "name": "From Dragon Roost Island Beedle Ship Defeat 2 Different Kargaroks"
    },
    {
        "name": "Destroy all 11 Rocks on Dragon Roost Island Exterior"
    },
    {
        "name": "Break all 3 Signs on Dragon Roost Island Exterior"
    },
    {
        "name": "Defeat both Kargaroks at Seven-Star Isles"
    },
    {
        "name": "Defeat the Blue Chu Jelly on Overlook Island"
    },
    {
        "name": "Fly at Least 222 Yards at the Flight Control Platform Minigame"
    },
    {
        "name": "Defeat all 4 Kargaroks at Star Belt Archipelago"
    },
    {
        "name": "Defeat the Blue Chu Jelly at Thorned Fairy Island with the Skull Hammer Exclusively"
    },
    {
        "name": "From the Light Soil the Mailbox is on, Shoot 4 Kargaroks down at Bird's Peak Rock"
    },
    {
        "name": "Get All 24 Rupees on the Floating Platforms in Cliff Plateau Isles Cave"
    },
    {
        "name": "Defeat all 5 Kargaroks at Five-Star Isles"
    },
    {
        "name": "In the First Room of Dragon Roost Cavern Destroy All 13 Pots, and 3 Rocks"
    },
    {
        "name": "Defeat 5 Different Bokoblins in Dragon Roost Cavern (Including the Outside Area)"
    },
    {
        "name": "Decipher a Triforce Chart"
    },
    {
        "name": "Decipher 2 Triforce Charts"
    },
    {
        "name": "Defeat any Boss without Taking Damage"
    },
    {
        "name": "Defeat any Mini-Boss room with only Bombs"
    },
    {
        "name": "Break an Eye Plant with a Seed in The Forbidden Woods"
    },
    {
        "name": "Clear out all Seeds and Enemies in the Boss Door Room of Forbidden Woods"
    },
    {
        "name": "Defeat 3 Peahats and 3 Boko Babas in Chest in Locked Tree Trunk Room"
    },
    {
        "name": "Knock down all Floating Seeds in Seeds Hanging by Vines Room"
    },
    {
        "name": "Defeat 4 Different Yellow Chus in Tower of the Gods"
    },
    {
        "name": "Have 4 Hearts"
    },
    {
        "name": "Have 6 Hearts"
    },
    {
        "name": "Break 6 Different Bombable Walls in Tower of the Gods"
    },
    {
        "name": "Destroy a Pillar in Tower of the Gods"
    },
    {
        "name": "Defeat a Bubble in Tower of the Gods"
    },
    {
        "name": "Defeat 3 Different Moblins in the Earth Temple"
    },
    {
        "name": "Break 5 Different Stones with Light in the Earth Temple"
    },
    {
        "name": "Collect an Earth Temple Key"
    },
    {
        "name": "Feed a Seagull to a Kargarok"
    },
    {
        "name": "Score 26 in Mail Sorting"
    },
    {
        "name": "Have Forest Water Expire"
    },
    {
        "name": "Uncover a Coffin in the Earth Temple"
    },
    {
        "name": "Plant 5 Different Seeds in The Wind Temple"
    },
    {
        "name": "Have Exactly 69 Rupees for 5 seconds"
    },
    {
        "name": "Have Exactly 420 Rupees for 5 seconds"
    },
    {
        "name": "Open at Least 3 Warp Pots Between all Dungeons"
    },
    {
        "name": "Find an Arrow Drop from Grass in Wind Temple"
    },
    {
        "name": "Volley a Single Shot from Phantom Ganon with an Empty Bottle"
    },
    {
        "name": "Block a Stone Demon Pigs Laser with your Shield in Forsaken Fortress"
    },
    {
        "name": "Hammer down 7 Different Pegs on Forsaken Fortress"
    },
    {
        "name": "Take down all 3 Spotlights on Forsaken Fortress"
    },
    {
        "name": "Defeat a Rat in Forsaken Fortress"
    },
    {
        "name": "Submit a Picture of Cyclos to the Nintendo Gallery"
    },
    {
        "name": "Submit a Picture of Phantom Ganon to the Nintendo Gallery"
    },
    {
        "name": "Submit a Picture of Valoo to the Nintendo Gallery"
    },
    {
        "name": "Submit a Picture of Makar to the Nintendo Gallery"
    },
    {
        "name": "Submit a Picture of Medli to the Nintendo Gallery"
    },
    {
        "name": "Submit a Picture of Fishman (The Map Fish) and Submit it to the Nintendo Gallery"
    },
    {
        "name": "Submit a Picture of Old Man Ho Ho (Telescope Man) to the Nintendo Gallery"
    },
    {
        "name": "Deliver a Letter from your Delivery Bag"
    },
    {
        "name": "Collect a Piece of Heart"
    },
    {
        "name": "Collect a Heart Container"
    },
    {
        "name": "Get Hurricane Dizzy on the Yellow Rupee Rock near Outset Island Bridge"
    },
    {
        "name": "From Aryll's Lookout, Deku Leaf to Beedle’s Ship Shop"
    },
    {
        "name": "Get the Green Rupee on the Tall Rock in the Water on Outset Island"
    },
    {
        "name": "Defeat at Least 2 Enemies with 1 Arrow"
    },
    {
        "name": "From Grandma's Houses’ Wooden Deck, Knock down the Sign next to Aryll's Lookout"
    },
    {
        "name": "Defeat 2 Different Redeads in the Earth Temple"
    },
    {
        "name": "Defeat 3 Different Floormasters in the Earth Temple"
    },
    {
        "name": "Have 5 Wind Waker Songs"
    },
    {
        "name": "Buy any Item from the Rock Spire Beedle Shop"
    },
    {
        "name": "Destroy the Size 2 Squid in the Squid Minigame"
    },
    {
        "name": "Destroy the Size 4 Squid in the Squid Minigame"
    },
    {
        "name": "Defeat an Octorock Inside the Forsaken Fortress"
    },
    {
        "name": "Flatten a Wizzrobe with the Skull Hammer"
    },
    {
        "name": "Flatten a Bokobaba with the Skull Hammer"
    },
    {
        "name": "Fall Flat on Ice"
    },
    {
        "name": "Score at Least 5 Points in the Fish Shooting Minigame"
    },
    {
        "name": "Parry a Floormaster"
    },
    {
        "name": "Break Three Rainbow Orbs"
    },
    {
        "name": "Defeat a Moblin with a Quickspin"
    },
    {
        "name": "Defeat a Darknut with a Quickspin"
    },
    {
        "name": "From the Top of Aryll's Lookout, Anger the Black Pig"
    },
    {
        "name": "Hear the Mini-Boss Theme"
    }
];
