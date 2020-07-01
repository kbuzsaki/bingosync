bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = []; //number represents difficulty
bingoList[1] = [
    { name:"Get all 28 beans in Willow" , types: ["willow"] },
    { name:"Activate both secrets in Willow from out of bounds" , types: ["willow"] },
];
bingoList[2] = [
    { name:"Get all of the beans in the chasm" , types: ["rictu"] },
    { name:"Get Hagrid's Wizard Card during your first night at Hogwarts" , types: ["cards", "outside"] }
];
bingoList[3] = [
    { name:"Get 10 Wizard Cards before entering Rictusempra" , types: ["cards"] },
    { name:"Get 8 challenge stars in Rictusempra" , types: ["rictu", "stars"] },
    { name:"Hit 10 cauldrons" , types: ["collection"] },
    { name:"Get on top of Hagrid's Hut" , types: ["inside"] },
];
bingoList[4] = [
    { name:"Complete Rictusempra without Jumping" , types: ["rictu"] },
    { name:"Get all Rictusempra secrets" , types: ["rictu", "cards"] },
    { name:"Put 15 crabs into pits during Rictusempra" , types: ["rictu"] },
    { name:"Kill Peeves" , types: ["skurge"] },
    { name:"Finish a spell challenge with a gnome in your hand" , types: ["compstar"] },
    { name:"Collect the 14 beans on the roof in the Bean Bonus Room" , types: ["beans"] },
];
bingoList[5] = [
    { name:"Complete a Quidditch game before learning how to fly" , types: ["outside"] },
    { name:"Lose 5 house points" , types: ["inside"] },
    { name:"Cast at all 3 of the pigs near Hagrid's Hut" , types: ["outside"] },
    { name:"Get behind the Quidditch gate" , types: ["outside"] },
    { name:"Get the 16 beans on Lockhart's balcony" , types: [ "stairs"] },
];
bingoList[6] = [
    { name:"Get 8 Skurge challenge stars" , types: ["skurge", "stars"] },
    { name:"Get all Skurge secrets" , types: ["skurge", "cards"] },
    { name:"Clip 4 gnomes out of bounds" , types: ["skurge"] },
    { name:"Enter Quidditch practice from out of bounds" , types: ["outside"] },
];
bingoList[7] = [
    { name:"All Bicorn secrets" , types: ["bicorn", "cards"] },
    { name:"Empty 10 armor stands" , types: ["inside"] },
    { name:"Lose a Quidditch match by 250 points" , types: ["outside"] },
];
bingoList[8] = [
    { name:"Get enough ingredients for 4 potions during Bicorn" , types: ["bicorn", "potions"] },
    { name:"Complete all 10 duels" , types: ["duels", "beans"] },
    { name:"Activate a potion cauldron with a gnome" , types: ["potions"] },
];
bingoList[9] = [
    { name:"Complete Diffindo without casting Diffindo" , types: ["diffindo"] },
    { name:"Empty 5 bean boxes" , types: ["collection"] },
    { name:"Buy the Quidditch Armor" , types: ["beans"] },
    { name:"Talk to Percy, Hagrid, Snape, and Madam Pomfrey" , types: ["inside" , "outside" , "stairs"] },
];
bingoList[10] = [
    { name:"Get 9 Diffindo challenge stars" , types: ["diffindo", "stars"] },
    { name:"Have 15 potions" , types: ["potions"] },
    { name:"Buy the Nimbus 2001" , types: ["beans"] },
];
bingoList[11] = [
    { name:"Make a 5 mushroom high tower in Diffindo" , types: ["diffindo"] },
    { name:"Get all Boomslang secrets" , types: ["boom", "cards"] },
    { name:"Collect 3 chocolate frogs in Boomslang" , types: ["boom"] },
    { name:"Buy 4 Bronze Wizard Cards" , types: ["cards", "beans"] },
    { name:"Get 2 health increases" , types: ["cards", "beans"] },
];
bingoList[12] = [
    { name:"Cut all Venomous Tentacula heads off in Boomslang" , types: ["boom"] },
    { name:"Collect 17 challenge stars" , types: ["stars"] },
    { name:"Finish with 1000 beans"  , types: ["beans"] },
];
bingoList[13] = [
    { name:"Get 13 Diffindo challenge stars" , types: ["diffindo", "stars"] },
    { name:"Complete Boomslang without jumping" , types: ["boom"] },
    { name:"Complete Goyle without casting Skurge" , types: ["goyle"] },
    { name:"Go up the fireplace in Goyle" , types: ["goyle"] },
    { name:"Get 2 keys" , types: ["cards", "beans"] },
];
bingoList[14] = [
    { name:"Let McGonagall fall down during the second Nick cutscene" , types: ["stairs",  "goyle"] },
    { name:"Buy 3 Silver Wizard Cards" , types: ["cards", "beans"] },
    { name:"Collect 23 wizard cards" , types: ["cards"] },
    { name:"Get all Goyle secrets" , types: ["goyle", "cards"] },
];
bingoList[15] = [
    { name:"Hit 8 different Lumos statues in Goyle" , types: ["goyle"] },
    { name:"Knock over 8 flower pots" , types: ["collection", "boom"] },
];
bingoList[16] = [
    { name:"Collect both potion ingredients as Harry in Slytherin" , types: ["slyth"] },
    { name:"Hit 25 cauldrons" , types: ["collection"] },
    { name:"Spawn 12 gnomes in the girl's bathroom" , types: ["collection"] },
    { name:"Finish with 2000 beans" , types: ["beans"] },
];
bingoList[17] = [
    { name:"Get 3 health increases" , types: ["cards", "beans"] },
    { name:"Buy 8 Bronze Wizard Cards" , types: ["cards", "beans"] },
    { name:"Get all Slytherin secrets" , types: ["slyth", "cards"] },
];
bingoList[18] = [
    { name:"Walk up the stairs to Girl's Dormitory in Slytherin" , types: ["slyth"] },
    { name:"Collect 37 wizard cards" , types: ["cards"] },
    { name:"Collect 31 challenge stars" , types: ["stars"] },
];
bingoList[19] = [
    { name:"Get 5 secrets as Harry in Slytherin" , types: ["slyth"] },
    { name:"Enter Forest from out of bounds" , types: ["forest"] },
    { name:"Get 3 keys" , types: ["cards", "beans"] },
    { name:"Get all 4 completion stars" , types: ["sponge", "compstar"] },
    { name:"Have a score on all 6 Quidditch Matches" , types: ["sponge"] },
];
bingoList[20] = [
{ name:"Put 4 imps into the same hole" , types: ["sponge"] },
    { name:"Open all 5 Peeves chests" , types: ["spongify"] },
    { name:"Collect 8 beans from the Great Hall at night" , types: ["inside", "forest"] },
    { name:"Get all Grounds secrets in both day and night" , types: ["cards"] },
    { name:"Get all Entry Hall secrets" , types: ["cards", "inside"] },
    { name:"Complete the Gryffindor Challenge" , types: ["gyff"] },
];
bingoList[21] = [
    { name:"Have 9 Slytherins surrounding you on the table in Slytherin" , types: ["slyth"] },
    { name:"Get all Forest secrets" , types: ["forest", "cards"] },
    { name:"Get all Grand Staircase secrets" , types: ["cards", "stairs", "sponge"] },
    { name:"Hit all of the ropes in the Aragog fight" , types: ["forest"] },
    { name:"Get all Challenge Stars in the Gryffindor Challenge" , types: ["gyff", "stars"] },
    { name:"Get all secrets in the Gryffindor Challenge" , types: ["gyff"] },
];
bingoList[22] = [
    { name: "Complete Forest without jumping" , types: ["forest"] },
    { name:"Kill 12 spiders in the Aragog fight" , types: ["forest"] },
    { name:"Get 8 Spongify challenge stars" , types: ["sponge", "stars"] },
    { name:"Cast on 5 Lumos statues during Spongify" , types: ["sponge"] },
    { name:"Use all 9 Spongify tiles in the Grand Staircase area" , types: ["sponge", "stairs"] },
];
bingoList[23] = [
    { name:"Get all Spongify secrets" , types: ["sponge", "cards"] },
    { name:"All Chamber secrets" , types: ["chamber"] },
    { name:"Collect 53 wizard cards" , types: ["cards"] },
];
bingoList[24] = [
    { name:"Complete Chamber without Jumping" , types: ["chamber"] },
    { name:"Avoid fire damage from the snake statues in Chamber" , types: ["chamber"] },
];
bingoList[25] = [
    { name:"Get the Harry Potter Wizard Card" , types: ["cards"] },
    { name:"Get 5 health increases" , types: ["cards", "beans"] },
    { name:"Finish the game" , types: ["chamber"] },
];
