var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Unlock the Docks warper", types: ["warp"] },
  { name: "Smoke 5 ciggys", types: ["cig"] },
  { name: "Eat 1 slug", types: ["slug"] },
  { name: "Get the Camera", types: ["item"] },
];
bingoList[2] = [
{ name: "Get 5 tags ", types: ["tag"] },
{ name: "Install the Ciggy app", types: ["app", "cig"] },
{ name: "Die by falling", types: ["die"] },
{ name: "Drink a soda", types: ["misc"] },
];
bingoList[3] = [
{ name: "Unlock the Controller warper", types: ["warp"] },
{ name: "Smoke 1 full ciggy", types: ["cig"] },
{ name: "Install the Lifeloop app", types: ["app", "die"] },
{ name: "Kiss a slug", types: ["misc"] },
];
bingoList[4] = [
{ name: "Unlock the Comms warper", types: ["warp"] },
{ name: "Kiss an egg", types: ["misc"] },
{ name: "Jump on a cat", types: ["misc"] },
{ name: "Die in Crypt Creeper", types: ["game"] },
];
bingoList[5] = [
{ name: "Unlock the GLUG Tower warper", types: ["warp"] },
{ name: "Eat 5 slugs", types: ["slug"] },
{ name: "Pet the dog", types: ["loc"] },
{ name: "Pee in a toilet", types: ["misc"] },
];
bingoList[6] = [
{ name: "Unlock the Gen Pop warper", types: ["warp"] },
{ name: "Get the Glider", types: ["item"] },
{ name: "Eat an egg", types: ["misc"] },
{ name: "Collab w/ Hans", types: ["collab"] },
];
bingoList[7] = [
{ name: "Unlock the Hanger warper", types: ["warp"] },
{ name: "Install the Satview app", types: ["app", "sat"] },
{ name: "Get to level 5 in Crypt Creeprt", types: ["game"] },
{ name: "Talk to the meditating monk", types: ["talk"] },
];
bingoList[8] = [
{ name: "Unlock the Chemico1 warper", types: ["warp"] },
{ name: "Install the To-Do list", types: ["app"] },
{ name: "Talk to the zombie", types: ["talk"] },
{ name: "Die 5 times", types: ["die"] },
];
bingoList[9] = [
{ name: "Unlock the Chemico2 warper", types: ["warp"] },
{ name: "Talk to King Eyes", types: ["talk"] },
{ name: "Install any 3 apps", types: ["app"] },
{ name: "Get hit by a CLOP", types: ["misc"] },
];
bingoList[10] = [
{ name: "Get pecked by a bird", types: ["misc"] },
{ name: "Spit in the CEO's food", types: ["glug"] },
{ name: "Smoke 10 ciggys", types: ["cig"] },
{ name: "Press the secret button in GLUG tower", types: ["glug"] },
];
bingoList[11] = [
{ name: "Die by lasers", types: ["die", "nuke"] },
{ name: "Upgrade your health in Crypt Creeper", types: ["game"] },
{ name: "Get 1 zoom", types: ["zoom"] },
{ name: "Talk to the dumpster man", types: ["talk"] },
];
bingoList[12] = [
{ name: "Jump on the 2 butthole cat", types: ["loc"] },
{ name: "Install Worm Machine", types: ["app"] },
{ name: "Talk to the pooping man", types: ["talk"] },
{ name: "Collab w/ Mosca", types: ["collab"]  },
];
bingoList[13] = [
{ name: "Pee off GLUG tower", types: ["glug"] },
{ name: "Talk to the vampire", types: ["loc"] },
{ name: "Get 25 tags", types: ["tag"] },
{ name: "Install Crypt Creeper", types: ["app", "game"] },
];
bingoList[14] = [
{ name: "Collab w/ Double", types: ["collab"]  },
{ name: "Get the Valdal Eyes", types: ["item"] },
{ name: "Tag the CEO's bathroom", types: ["loc"] },
{ name: "Talk to Big Mud", types: ["talk"] },
];
bingoList[15] = [
{ name: "Die by snake", types: ["die"] },
{ name: "Steal the diamonds", types: ["loc", "glug"] },
{ name: "Unlock any 5 warpers", types: ["warp"] },
{ name: "Smoke 15 ciggys", types: ["cig"] },
];
bingoList[16] = [
{ name: "Get 2 unique zooms", types: ["zoom"] },
{ name: "Talk to a cat", types: ["misc"] },
{ name: "Tag the satellite dish", types: ["loc", "sat"] },
{ name: "Get to level 10 in Crypt Creeprt", types: ["game"] },
];
bingoList[17] = [
{ name: "Get 50 tags", types: ["tag"] },
{ name: "Eat 10 slugs", types: ["slug"] },
{ name: "Get the Bad Ending", types: ["end"] },
{ name: "Upgrade your inventory in Crypt Creeper", types: ["game"] },
];
bingoList[18] = [
{ name: "Get the personal Warper", types: ["item"] },
{ name: "Jump off the CEO's balcony", types: ["die","glug"] },
{ name: "Install Big Mud's mixtape", types: ["app"] },
{ name: "Tag the top of the statue", types: ["loc"] }
];
bingoList[19] = [
{ name: "Shoot a basketball hoop", types: ["ball"] },
{ name: "Trip 5 times on zoom", types: ["zoom"] },
{ name: "Tag the nuke", types: ["loc", "nuke"] },
{ name: "Die 10 times", types: ["die"] },
];
bingoList[20] = [
{ name: "Get the Good Ending", types: ["end"] },
{ name: "Collab w/ Uzzi", types: ["collab"]  },
{ name: "Laptop jump over the lasers", types: ["loc", "nuke"] },
{ name: "Put the basketball in the trash", types: ["ball"] },
];
bingoList[21] = [
{ name: "Unlock the Stacker2 warper", types: ["warp"] },
{ name: "Upgrade health and inv in Crypt Creeper", types: ["game"] },
{ name: "Sculpt all the statues", types: ["loc"] },
{ name: "Eat 15 slugs", types: ["slug"] },
];
bingoList[22] = [
{ name: "Unlock the Stacker1 warper", types: ["warp"] },
{ name: "Get to level 15 in Crypt Creeper", types: ["game"] },
{ name: "Get 75 tags", types: ["tag"] },
{ name: "Get all the gadgets", types: ["item"] },
];
bingoList[23] = [
{ name: "Get 3 unique zooms", types: ["zoom"] },
{ name: "Collab w/ Tia", types: ["collab"] },
{ name: "Enter every hospital", types: ["loc"] },
{ name: "Smoke 20 ciggys", types: ["cig"] },
];
bingoList[24] = [
{ name: "Get 100 tags", types: ["tag"] },
{ name: "Unlock all warpers", types: ["warp"] },
{ name: "Eat 20 slugs", types: ["slug"] },
{ name: "Install all 7 apps", types: ["app"] },
];
bingoList[25] = [
{ name: "Get the Weird Ending", types: ["end"] },
{ name: "Beat Crypt Creeper", types: ["game"] },
{ name: "Eat All 23 slugs", types: ["slug"] },
{ name: "Grab and smoke all 14 Ciggy packs", types: ["cig"] },
];
