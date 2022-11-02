bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Complete “Dressed for the Ball”"
    },
    {
        "name": "Complete “Dinglehoppers”"
    },
    {
        "name": "Complete “Merryweather’s Gift”"
    },
    {
        "name": "Complete “The Lost Ribbon”"
    },
    {
        "name": "Complete “Join the Lost Boys”"
    },
    {
        "name": "Complete “Books for Belle”"
    },
    {
        "name": "Complete “Space Ranger Cadets”"
    },
    {
        "name": "Complete “Feed Stitch”"
    },
    {
        "name": "Complete “Cheer Up, Stitch”"
    },
    {
        "name": "Complete “A Message for Jumba Jookiba”"
    },
    {
        "name": "Complete “Help Tiana”"
    },
    {
        "name": "Complete “Where Am I?”"
    },
    {
        "name": "Complete “Meet Sheriff Woody”"
    },
    {
        "name": "Complete Hide ‘n Seek”"
    },
    {
        "name": "Complete “What Did We Catch”"
    },
    {
        "name": "Complete “Honey, Honey, Honey”"
    },
    {
        "name": "Complete “The Return of Genie”"
    },
    {
        "name": "Complete “A Costume for Jasmine”"
    },
    {
        "name": "Complete “Mickey’s Photo Album” "
    },
    {
        "name": "Complete “Election Preparations”"
    },
    {
        "name": "Complete “Treasure Hunt”"
    },
    {
        "name": "Complete “Further Election Preparations”"
    },
    {
        "name": "Complete “Inspiration for the Parade”"
    },
    {
        "name": "Complete “Fishing for Pearls”"
    },
    {
        "name": "Complete “Fixing Beast’s Book”"
    },
    {
        "name": "Complete “The Lost Watch”"
    },
    {
        "name": "Complete “Beast’s Gift”"
    },
    {
        "name": "Complete “Royal Service”"
    },
    {
        "name": "Complete “Missing Books”"
    },
    {
        "name": "Complete “Homework”"
    },
    {
        "name": "Complete “Royal Tea Party”"
    },
    {
        "name": "Complete “The Royal Celebration”"
    },
    {
        "name": "Complete “Scuttle Strikes Again”"
    },
    {
        "name": "Complete “A Grand Design”"
    },
    {
        "name": "Complete “Joining the Jolly Roger”"
    },
    {
        "name": "Complete “Hook’s New Look”"
    },
    {
        "name": "Complete “Preparations for the Ball”"
    },
    {
        "name": "Complete “Birthday Lights”"
    },
    {
        "name": "Complete “Gooseberry Pie”"
    },
    {
        "name": "Complete “Water the Flowers”"
    },
    {
        "name": "Complete “Diamond Hunt”"
    },
    {
        "name": "Complete “You Shall Go to the Ball”"
    },
    {
        "name": "Complete” Ariel’s Parade”"
    },
    {
        "name": "Complete “A New Ship”"
    },
    {
        "name": "Complete “The Monster”"
    },
    {
        "name": "Complete “Defeat Zurg”"
    },
    {
        "name": "Complete “Help Jumba”"
    },
    {
        "name": "Complete “Black Barty’s Fortune”"
    },
    {
        "name": "Complete “X Marks the Spot”"
    },
    {
        "name": "Complete “Competition”"
    },
    {
        "name": "Complete “Surprise”"
    },
    {
        "name": "Complete “The Stress of Success”"
    },
    {
        "name": "Complete “Pete’s Gold”"
    },
    {
        "name": "Complete “Pete’s a-Missin’”"
    },
    {
        "name": "Complete “Eeyore’s Tail”"
    },
    {
        "name": "Complete “A Message in a Bottle”"
    },
    {
        "name": "Complete “The Trouble With Woozles”"
    },
    {
        "name": "Complete “The Sting”"
    },
    {
        "name": "Complete “Pooh’s Birthday Party”"
    },
    {
        "name": "Complete “Hidden Treasure”"
    },
    {
        "name": "Complete “In a Man’s World”"
    },
    {
        "name": "Complete “A Fishing Rod for Mowgli”"
    },
    {
        "name": "Complete “Baloo and the Monkeys”"
    },
    {
        "name": "Complete “Election Photos”"
    },
    {
        "name": "Complete “The Election!”"
    },
    {
        "name": "Complete “Goofy’s Fireworks”"
    },
    {
        "name": "Complete 10 Adventures"
    },
    {
        "name": "Complete 15 Adventures"
    },
    {
        "name": "Complete 20 Adventures"
    },
    {
        "name": "Get Chip and Dale’s Autograph"
    },
    {
        "name": "Get Genie’s Autograph"
    },
    {
        "name": "Get Br’er Rabbit’s Autograph"
    },
    {
        "name": "Get Stitch’s Autograph"
    },
    {
        "name": "Get Captain Hook’s Autograph"
    },
    {
        "name": "Get The Queen of Hearts’ Autograph"
    },
    {
        "name": "Get Br’er Bear’s Autograph"
    },
    {
        "name": "Get Br’er Fox’s Autograph"
    },
    {
        "name": "Get Jasmine’s Autograph"
    },
    {
        "name": "Get Cinderella’s Autograph"
    },
    {
        "name": "Get Ariel’s Autograph"
    },
    {
        "name": "Get Belle’s Autograph"
    },
    {
        "name": "Get Snow White’s Autograph"
    },
    {
        "name": "Get Aurora’s Autograph"
    },
    {
        "name": "Get Tiana’s Autograph"
    },
    {
        "name": "Get Mickey’s Autograph"
    },
    {
        "name": "Get Daisy’s Autograph"
    },
    {
        "name": "Get Donald Duck’s Autograph"
    },
    {
        "name": "Get Goofy’s Autograph"
    },
    {
        "name": "Get Minnie’s Autograph"
    },
    {
        "name": "Get Pluto’s Autograph"
    },
    {
        "name": "Get Duffy Bear’s Autograph"
    },
    {
        "name": "Get Beast’s Autograph"
    },
    {
        "name": "Get Baloo’s Autograph"
    },
    {
        "name": "Get Mowgli’s Autograph"
    },
    {
        "name": "Get Pinocchio’s Autograph"
    },
    {
        "name": "Get Eeyore’s Autograph"
    },
    {
        "name": "Get Pooh’s Autograph"
    },
    {
        "name": "Get Piglet’s Autograph"
    },
    {
        "name": "Get Tigger’s Autograph"
    },
    {
        "name": "Get Buzz’s Autograph"
    },
    {
        "name": "Get The Martian’s Autograph"
    },
    {
        "name": "Get Woody’s Autograph"
    },
    {
        "name": "Get Jessie’s Autograph"
    },
    {
        "name": "Get Stinky Pete’s Autograph"
    },
    {
        "name": "Get Alice’s Autograph"
    },
    {
        "name": "Get Mad Hatter’s Autograph"
    },
    {
        "name": "Get White Rabbit’s Autograph"
    },
    {
        "name": "Get Aladdin’s Autograph"
    },
    {
        "name": "Get Naveen’s Autograph"
    },
    {
        "name": "Get Peter Pan’s Autograph"
    },
    {
        "name": "Complete Black Barty’s Autograph"
    },
    {
        "name": "Complete Tricksters Autograph Book"
    },
    {
        "name": "Complete Villains Autograph Book"
    },
    {
        "name": "Complete Princesses Autograph Book"
    },
    {
        "name": "Complete The Sensational Six Autograph Book"
    },
    {
        "name": "Complete Big and Small Autograph Book"
    },
    {
        "name": "Complete Winnie the Pooh Autograph Book"
    },
    {
        "name": "Complete Toy Story Autograph Book"
    },
    {
        "name": "Complete Alice in Wonderland Autograph Book"
    },
    {
        "name": "Complete Heroes Autograph Book"
    },
    {
        "name": "Collect 7 Different Collection Items"
    },
    {
        "name": "Collect 14 Different Collection Items"
    },
    {
        "name": "Complete 1 Target Minigame"
    },
    {
        "name": "Complete 3 Target Minigames"
    },
    {
        "name": "Complete 5 Target Minigames"
    },
    {
        "name": "Complete Enchanted Tiki Room Conducting Minigame"
    },
    {
        "name": "Complete Jambalaya Jazz Band Conducting Minigame"
    },
    {
        "name": "Complete Grim Grinning Ghosts Conducting Minigame"
    },
    {
        "name": "Complete Royal Street Bachelors Conducting Minigame"
    },
    {
        "name": "Collect 10,000 coins"
    },
    {
        "name": "Collect 100,000 coins"
    },
    {
        "name": "Collect 500,000 coins"
    },
    {
        "name": "Make Monstro the Whale Sneeze"
    },
    {
        "name": "Ride King Arthur Carousel"
    },
    {
        "name": "Ride Dumbo the Flying Elephant"
    },
    {
        "name": "Ride Alice in Wonderland Teacups"
    },
    {
        "name": "Ride Astro Orbiter"
    },
    {
        "name": "Ride Gadget Go Coaster"
    },
    {
        "name": "Ride All Non-Playable Rides"
    },
    {
        "name": "Talk to 1 Park Guide"
    },
    {
        "name": "Talk to 3 Park Guides"
    },
    {
        "name": "Talk to 5 Park Guides"
    },
    {
        "name": "Dance with Chip and Dale"
    },
    {
        "name": "Dance with Genie"
    },
    {
        "name": "Dance with Br’er Rabbit"
    },
    {
        "name": "Dance with Stitch"
    },
    {
        "name": "Dance with Captain Hook"
    },
    {
        "name": "Dance with The Queen of Hearts"
    },
    {
        "name": "Dance with Br’er Bear"
    },
    {
        "name": "Dance with Br’er Fox"
    },
    {
        "name": "Dance with Jasmine"
    },
    {
        "name": "Dance with Cinderella"
    },
    {
        "name": "Dance with Ariel"
    },
    {
        "name": "Dance with Belle"
    },
    {
        "name": "Dance with Snow White"
    },
    {
        "name": "Dance with Aurora"
    },
    {
        "name": "Dance with Tiana"
    },
    {
        "name": "Dance with Mickey"
    },
    {
        "name": "Dance with Daisy"
    },
    {
        "name": "Dance with Donald Duck"
    },
    {
        "name": "Dance with Goofy"
    },
    {
        "name": "Dance with Minnie"
    },
    {
        "name": "Dance with Pluto"
    },
    {
        "name": "Dance with Duffy Bear"
    },
    {
        "name": "Dance with Beast"
    },
    {
        "name": "Dance with Baloo"
    },
    {
        "name": "Dance with Mowgli"
    },
    {
        "name": "Dance with Pinocchio"
    },
    {
        "name": "Dance with Eeyore"
    },
    {
        "name": "Dance with Pooh"
    },
    {
        "name": "Dance with Piglet"
    },
    {
        "name": "Dance with Tigger"
    },
    {
        "name": "Dance with Buzz"
    },
    {
        "name": "Dance with The Martians"
    },
    {
        "name": "Dance with Woody"
    },
    {
        "name": "Dance with Jessie"
    },
    {
        "name": "Dance with Stinky Pete"
    },
    {
        "name": "Dance with Alice"
    },
    {
        "name": "Dance with The Mad Hatter"
    },
    {
        "name": "Dance with The White Rabbit"
    },
    {
        "name": "Dance with Aladdin"
    },
    {
        "name": "Dance with Naveen"
    },
    {
        "name": "Dance with Peter Pan"
    },
    {
        "name": "Dance with Black Barty"
    },
    {
        "name": "Hug Chip and Dale"
    },
    {
        "name": "Hug Genie"
    },
    {
        "name": "Hug Br’er Rabbit"
    },
    {
        "name": "Hug Stitch"
    },
    {
        "name": "Hug Captain Hook"
    },
    {
        "name": "Hug The Queen of Hearts"
    },
    {
        "name": "Hug Br’er Bear"
    },
    {
        "name": "Hug Br’er Fox"
    },
    {
        "name": "Hug Jasmine"
    },
    {
        "name": "Hug Cinderella"
    },
    {
        "name": "Hug Ariel"
    },
    {
        "name": "Hug Belle"
    },
    {
        "name": "Hug Snow White"
    },
    {
        "name": "Hug Aurora"
    },
    {
        "name": "Hug Tiana"
    },
    {
        "name": "Hug Mickey"
    },
    {
        "name": "Hug Daisy"
    },
    {
        "name": "Hug Donald Duck"
    },
    {
        "name": "Hug Goofy"
    },
    {
        "name": "Hug Minnie"
    },
    {
        "name": "Hug Pluto"
    },
    {
        "name": "Hug Duffy Bear"
    },
    {
        "name": "Hug Beast"
    },
    {
        "name": "Hug Baloo"
    },
    {
        "name": "Hug Mowgli"
    },
    {
        "name": "Hug Pinocchio"
    },
    {
        "name": "Hug Eeyore"
    },
    {
        "name": "Hug Pooh"
    },
    {
        "name": "Hug Piglet"
    },
    {
        "name": "Hug Tigger"
    },
    {
        "name": "Hug Buzz"
    },
    {
        "name": "Hug The Martians"
    },
    {
        "name": "Hug Woody"
    },
    {
        "name": "Hug Jessie"
    },
    {
        "name": "Hug Stinky Pete"
    },
    {
        "name": "Hug Alice"
    },
    {
        "name": "Hug The Mad Hatter"
    },
    {
        "name": "Hug The White Rabbit"
    },
    {
        "name": "Hug Aladdin"
    },
    {
        "name": "Hug Naveen"
    },
    {
        "name": "Hug Peter Pan"
    },
    {
        "name": "Hug Black Barty"
    },
    {
        "name": "Photograph Chip and Dale"
    },
    {
        "name": "Photograph Genie"
    },
    {
        "name": "Photograph Br’er Rabbit"
    },
    {
        "name": "Photograph Stitch"
    },
    {
        "name": "Photograph Captain Hook"
    },
    {
        "name": "Photograph The Queen of Hearts"
    },
    {
        "name": "Photograph Br’er Bear"
    },
    {
        "name": "Photograph Br’er Fox"
    },
    {
        "name": "Photograph Jasmine"
    },
    {
        "name": "Photograph Cinderella"
    },
    {
        "name": "Photograph Ariel"
    },
    {
        "name": "Photograph Belle"
    },
    {
        "name": "Photograph Snow White"
    },
    {
        "name": "Photograph Aurora"
    },
    {
        "name": "Photograph Tiana"
    },
    {
        "name": "Photograph Mickey"
    },
    {
        "name": "Photograph Daisy"
    },
    {
        "name": "Photograph Donald Duck"
    },
    {
        "name": "Photograph Goofy"
    },
    {
        "name": "Photograph Minnie"
    },
    {
        "name": "Photograph Pluto"
    },
    {
        "name": "Photograph Duffy Bear"
    },
    {
        "name": "Photograph Beast"
    },
    {
        "name": "Photograph Baloo"
    },
    {
        "name": "Photograph Mowgli"
    },
    {
        "name": "Photograph Pinocchio"
    },
    {
        "name": "Photograph Eeyore"
    },
    {
        "name": "Photograph Pooh"
    },
    {
        "name": "Photograph Piglet"
    },
    {
        "name": "Photograph Tigger"
    },
    {
        "name": "Photograph Buzz"
    },
    {
        "name": "Photograph The Martians"
    },
    {
        "name": "Photograph Woody"
    },
    {
        "name": "Photograph Jessie"
    },
    {
        "name": "Photograph Stinky Pete"
    },
    {
        "name": "Photograph Alice"
    },
    {
        "name": "Photograph The Mad Hatter"
    },
    {
        "name": "Photograph The White Rabbit"
    },
    {
        "name": "Photograph Aladdin"
    },
    {
        "name": "Photograph Naveen"
    },
    {
        "name": "Photograph Peter Pan"
    },
    {
        "name": "Photograph Black Barty"
    },
    {
        "name": "Photograph 10 Hidden Mickeys"
    },
    {
        "name": "Photograph 20 Hidden Mickeys"
    },
    {
        "name": "Photograph 30 Hidden Mickeys"
    },
    {
        "name": "Complete the Photo Pass Album for Frontierland"
    },
    {
        "name": "Complete the Photo Pass Album for Critter Country"
    },
    {
        "name": "Complete the Photo Pass Album for New Orleans Square"
    },
    {
        "name": "Complete the Photo Pass Album for Main Street U.S.A"
    },
    {
        "name": "Complete the Photo Pass Album for Tomorrowland"
    },
    {
        "name": "Complete the Photo Pass Album for Adventureland"
    },
    {
        "name": "Complete the Photo Pass Album for Mickey’s Toontown"
    },
    {
        "name": "Complete the Photo Pass Album for Disneyland Landmarks"
    },
    {
        "name": "Complete the Photo Pass Album for Fantasyland"
    },
    {
        "name": "Complete the Discovery Photo Album for Mickey’s Toontown"
    },
    {
        "name": "Complete the Discovery Photo Album for Frontierland"
    },
    {
        "name": "Complete the Discovery Photo Album for Critter Country"
    },
    {
        "name": "Complete the Discovery Photo Album for Adventureland"
    },
    {
        "name": "Complete the Discovery Photo Album for New Orleans Square"
    },
    {
        "name": "Complete the Discovery Photo Album for Tomorrowland"
    },
    {
        "name": "Complete the Discovery Photo Album for Fantasyland"
    },
    {
        "name": "Complete the Discovery Photo Album for Main Street U.S.A"
    },
    {
        "name": "Obtain the Camera Magic Item"
    },
    {
        "name": "Obtain the Wand Magic Item"
    },
    {
        "name": "Obtain the Blaster Magic Item"
    },
    {
        "name": "Obtain the Fishing Rod Magic Item"
    },
    {
        "name": "Obtain the Megaphone Magic Item"
    },
    {
        "name": "Obtain the Spyglass Magic Item"
    },
    {
        "name": "Obtain the Squirtgun Magic Item"
    },
    {
        "name": "Obtain all 7 of the Magic Items"
    },
    {
        "name": "Won the bronze pin badge on Alice in Wonderland"
    },
    {
        "name": "Won the bronze pin badge on Peter Pan’s Flight"
    },
    {
        "name": "Won the bronze pin badge on Splash Mountain"
    },
    {
        "name": "Won the bronze pin badge on Jungle Cruise"
    },
    {
        "name": "Won the bronze pin badge on Disney Princess Fantasy Faire"
    },
    {
        "name": "Won the bronze pin badge on Finding Nemo Submarine Voyage"
    },
    {
        "name": "Won the bronze pin badge on The Many Adventures of Winnie the Pooh"
    },
    {
        "name": "Won the bronze pin badge on Big Thunder Mountain Railroad"
    },
    {
        "name": "Won the bronze pin badge on Mickey’s Soundsational Parade"
    },
    {
        "name": "Won the bronze pin badge on Fireworks Spectacular"
    },
    {
        "name": "Won the bronze pin badge on Buzz Lightyear’s Astro Blasters"
    },
    {
        "name": "Won the bronze pin badge on Haunted Mansion"
    },
    {
        "name": "Won the bronze pin badge on “It’s a Small World”"
    },
    {
        "name": "Won the bronze pin badge on Matterhorn Bobsleds"
    },
    {
        "name": "Won the bronze pin badge on Pixie Hollow"
    },
    {
        "name": "Won the bronze pin badge on Space Mountain"
    },
    {
        "name": "Won the bronze pin badge on Pirates of the Caribbean"
    },
    {
        "name": "Won the silver pin badge on Alice in Wonderland"
    },
    {
        "name": "Won the silver pin badge on Peter Pan’s Flight"
    },
    {
        "name": "Won the silver pin badge on Splash Mountain"
    },
    {
        "name": "Won the silver pin badge on Jungle Cruise"
    },
    {
        "name": "Won the silver pin badge on Disney Princess Fantasy Faire"
    },
    {
        "name": "Won the silver pin badge on Finding Nemo Submarine Voyage"
    },
    {
        "name": "Won the silver pin badge on The Many Adventures of Winnie the Pooh"
    },
    {
        "name": "Won the silver pin badge on Big Thunder Mountain Railroad"
    },
    {
        "name": "Won the silver pin badge on Mickey’s Soundsational Parade"
    },
    {
        "name": "Won the silver pin badge on Fireworks Spectacular"
    },
    {
        "name": "Won the silver pin badge on Buzz Lightyear’s Astro Blasters"
    },
    {
        "name": "Won the silver pin badge on Haunted Mansion"
    },
    {
        "name": "Won the silver pin badge on “It’s a Small World”"
    },
    {
        "name": "Won the silver pin badge on Matterhorn Bobsleds"
    },
    {
        "name": "Won the silver pin badge on Pixie Hollow"
    },
    {
        "name": "Won the silver pin badge on Space Mountain"
    },
    {
        "name": "Won the silver pin badge on Pirates of the Caribbean"
    },
    {
        "name": "Won the gold pin badge on Alice in Wonderland"
    },
    {
        "name": "Won the gold pin badge on Peter Pan’s Flight"
    },
    {
        "name": "Won the gold pin badge on Splash Mountain"
    },
    {
        "name": "Won the gold pin badge on Jungle Cruise"
    },
    {
        "name": "Won the gold pin badge on Disney Princess Fantasy Faire"
    },
    {
        "name": "Won the gold pin badge on Finding Nemo Submarine Voyage"
    },
    {
        "name": "Won the gold pin badge on The Many Adventures of Winnie the Pooh"
    },
    {
        "name": "Won the gold pin badge on Big Thunder Mountain Railroad"
    },
    {
        "name": "Won the gold pin badge on Mickey’s Soundsational Parade"
    },
    {
        "name": "Won the gold pin badge on Fireworks Spectacular"
    },
    {
        "name": "Won the gold pin badge on Buzz Lightyear’s Astro Blasters"
    },
    {
        "name": "Won the gold pin badge on Haunted Mansion"
    },
    {
        "name": "Won the gold pin badge on “It’s a Small World”"
    },
    {
        "name": "Won the gold pin badge on Matterhorn Bobsleds"
    },
    {
        "name": "Won the gold pin badge on Pixie Hollow"
    },
    {
        "name": "Won the gold pin badge on Space Mountain"
    },
    {
        "name": "Won the gold pin badge on Pirates of the Caribbean"
    },
    {
        "name": "Get 1 platinum pin for attractions"
    },
    {
        "name": "Get 2 platinum pins for attractions"
    },
    {
        "name": "Get 3 platinum pins for attractions"
    },
    {
        "name": "Won 3 bronze pin badges for attractions"
    },
    {
        "name": "Won 3 silver pin badges for attractions"
    },
    {
        "name": "Won 3 gold pin badges for attractions"
    },
    {
        "name": "Finish 25% of Mickey’s Toontown"
    },
    {
        "name": "Finish 25% of Frontierland"
    },
    {
        "name": "Finish 25% of Adventureland"
    },
    {
        "name": "Finish 25% of Main Street U.S.A"
    },
    {
        "name": "Finish 25% of Fantasyland"
    },
    {
        "name": "Finish 25% of Tomorrowland"
    },
    {
        "name": "Finish 25% of Critter Country"
    },
    {
        "name": "Finish 25% of New Orleans Square"
    },
    {
        "name": "Finish 50% of Mickey’s Toontown"
    },
    {
        "name": "Finish 50% of Frontierland"
    },
    {
        "name": "Finish 50% of Adventureland"
    },
    {
        "name": "Finish 50% of Main Street U.S.A"
    },
    {
        "name": "Finish 50% of Tomorrowland"
    },
    {
        "name": "Finish 50% of Critter Country"
    },
    {
        "name": "Finish 50% of New Orleans Square"
    },
    {
        "name": "Buy an item from each shop in the park"
    },
    {
        "name": "Dance with all of the Princesses"
    },
    {
        "name": "Hug all of the Villains"
    },
    {
        "name": "High Fived all of the Fab Five"
    },
    {
        "name": "Reach Level 2"
    },
    {
        "name": "Reach Level 3"
    },
    {
        "name": "Reach Level 4"
    },
    {
        "name": "Reach Level 5"
    },
    {
        "name": "Reach Level 6"
    },
    {
        "name": "Reach Level 7"
    },
    {
        "name": "Reach Level 8"
    },
    {
        "name": "Play all 4 chapters of Peter Pan’s Flight"
    },
    {
        "name": "Obtain all 10 secrets on Peter Pan’s Flight"
    },
    {
        "name": "Play all 3 chapters of Alice in Wonderland"
    },
    {
        "name": "Obtain all 10 secrets on Alice in Wonderland"
    },
    {
        "name": "Play all 3 chapters of Matterhorn Bobsleds"
    },
    {
        "name": "Obtain all 10 secrets on Matterhorn Bobsleds"
    },
    {
        "name": "Play “It’s a Small World”"
    },
    {
        "name": "Play Disney Princess Fantasy Faire"
    },
    {
        "name": "Play Pixie Hollow"
    },
    {
        "name": "Obtain all 10 secrets on Pixie Hollow"
    },
    {
        "name": "Play all 4 chapters of Buzz Lightyear’s Astro Blasters"
    },
    {
        "name": "Obtain all 10 secrets on Buzz Lightyear’s Astro Blasters"
    },
    {
        "name": "Play Fireworks Spectacular"
    },
    {
        "name": "Obtain all 10 secrets on Fireworks Spectacular"
    },
    {
        "name": "Play all 2 chapters of Haunted Mansion"
    },
    {
        "name": "Obtain all 10 secrets on Haunted Mansion"
    },
    {
        "name": "Play all 3 chapters of Jungle Cruise"
    },
    {
        "name": "Obtain all 10 secrets on Jungle Cruise"
    },
    {
        "name": "Play all 3 chapters of Finding Nemo Submarine Voyage"
    },
    {
        "name": "Obtain all 10 secrets on Finding Nemo Submarine Voyage"
    },
    {
        "name": "Play Mickey’s Soundsational Parade"
    },
    {
        "name": "Obtain all 10 secrets on Mickey’s Soundsational Parade"
    },
    {
        "name": "Play all 4 chapters of Pirates of the Caribbean"
    },
    {
        "name": "Obtain all 10 secrets on Pirates of the Caribbean"
    },
    {
        "name": "Play all 3 chapters of The Many Adventures of Winnie the Pooh"
    },
    {
        "name": "Obtain all 10 secrets on The Many Adventures of Winnie the Pooh"
    },
    {
        "name": "Play all 2 chapters of Space Mountain"
    },
    {
        "name": "Obtain all 10 secrets on Space Mountain"
    },
    {
        "name": "Play all 2 chapters of Splash Mountain"
    },
    {
        "name": "Obtain all 10 secrets on Splash Mountain"
    },
    {
        "name": "Play all 2 chapters of Big Thunder Mountain Railroad"
    },
    {
        "name": "Obtain all 10 secrets on Big Thunder Mountain Railroad"
    },
    {
        "name": "Collect all of 1 collectible set"
    },
    {
        "name": "Collect all of 2 collectible sets"
    },
    {
        "name": "Collect all of 3 collectible sets"
    },
    {
        "name": "Collect 7 different collectibles"
    },
    {
        "name": "Collect 20 Pins"
    },
    {
        "name": "Collect 30 Pins"
    },
    {
        "name": "Collect 40 Pins"
    },
    {
        "name": "Collect 50 Pins"
    },
    {
        "name": "Collect 60 Pins"
    },
    {
        "name": "Collect 70 Pins"
    },
    {
        "name": "Collect 80 Pins"
    },
    {
        "name": "Buy 5 Costumes"
    },
    {
        "name": "Buy 10 Costumes"
    },
    {
        "name": "Buy All Costumes"
    }
];
