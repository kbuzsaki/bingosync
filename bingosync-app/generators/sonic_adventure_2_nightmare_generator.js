bingoGenerator = require("./generators/generator_bases/srl_generator_v8.js");

var bingoList = [];
bingoList[1] = [
    {name: "City Escape M1 with 0 A inputs", types: ["hero", "abc"]},
    {name: "Collect 10 hidden animals on City Escape M1 and finish", types: ["hero", "animals"]},
    {name: "Iron Gate M1 with 0 A inputs", types: ["dark", "abc"]},
    {name: "Collect 10 hidden animals on Iron Gate M1 and finish", types: ["dark", "animals"]},
    {name: "Get speedshoes thrice on single level and finish", types: ["multistory"]},
    {name: "Get Magnetic Shield thrice on single level and finish", types: ["multistory"]}
];
bingoList[2] = [
    {name: "Beat Big Foot with 12 rings", types: ["hero", "ra"]},
    {name: "City Escape M2 with 0 A inputs", types: ["hero", "abc"]},
    {name: "Wild Canyon M1 with 0 A inputs", types: ["hero", "abc"]},
    {name: "Beat Hot Shot with 12 rings", types: ["dark", "ra"]},
    {name: "Iron Gate M2 with 0 A inputs", types: ["dark", "abc"]},
    {name: "Collect 10 hidden animals on Dry Lagoon M1 and finish", types: ["dark", "animals"]}
];
bingoList[3] = [
    {name: "A-rank on 3 Shadow/Sonic missions (Team Combined)", types: ["multistory"]},
    {name: "Beat Eggman 1 with 24 rings", types: ["hero", "ra"]},
    {name: "Wild Canyon M2 with 0 A inputs", types: ["hero", "abc"]},
    {name: "Dry Lagoon M2 without using Back Ring", types: ["dark"]},
    {name: "Collect 10 hidden animals on Sand Ocean M1 and finish", types: ["dark", "animals"]},
    {name: "3 Chao Boxes on Sand Ocean M1 and finish", types: ["dark", "boxes"]}
];
bingoList[4] = [
    {name: "Prison Lane M2 without checkpoints", types: ["hero"]},
    {name: "Eliminate 9 enemies on Wild Canyon M4 and finish", types: ["hero", "genocide"]},
    {name: "Collect 10 hidden animals on Wild Canyon M3 and finish", types: ["hero", "animals"]},
    {name: "Beat Shadow 1 with 9 rings", types: ["hero", "ra"]},
    {name: "Destroy 3 planes on Radical Highway M1 and finish", types: ["dark"]},
    {name: "3 Chao Boxes on Radical Highway M1 and finish", types: ["dark", "boxes"]},
    {name: "3 Chao Boxes on Dry Lagoon M3 and finish", types: ["dark", "boxes"]}
];
bingoList[5] = [
    {name: "Metal Harbor M2 without using Homing Attack", types: ["hero"]},
    {name: "Metal Harbor M2 without checkpoints", types: ["hero", "checkpointless"]},
    {name: "Metal Harbor M2 with 0 A inputs", types: ["hero", "abc"]},
    {name: "Egg Quarters M1 with 0 A inputs", types: ["dark", "abc"]},
    {name: "Eliminate 14 enemies on Egg Quarters and finish", types: ["dark", "genocide"]},
    {name: "Radical Highway M2 without using Homing Attack", types: ["dark"]}
];
bingoList[6] = [
    {name: "Eliminate 7 enemies on Pumpkin Hill and finish", types: ["hero", "genocide"]},
    {name: "Pumpkin Hill M1 with 0 A inputs", types: ["hero", "abc"]},
    {name: "Green Forest M2 with 0 A inputs", types: ["hero", "abc"]},
    {name: "3 Chao Boxes on Egg Quarters M2 and finish", types: ["dark", "boxes"]},
    {name: "Get Life Capsule on Radical Highway M3 and finish (deathless)", types: ["dark"]},
    {name: "Collect 10 hidden animals on Lost Colony M1 and finish", types: ["dark", "animals"]}
];
bingoList[7] = [
    {name: "Metal Harbor M4 ringless", types: ["hero", "ringless"]},
    {name: "Pumpkin Hill M2 without using Back Ring", types: ["hero"]},
    {name: "Collect 10 hidden animals on Metal Harbor M4 and finish", types: ["hero", "animals"]},
    {name: "Mission Street M1 ringless", types: ["hero", "ringless"]},
    {name: "Collect 10 hidden animals on Radical Highway M4 and finish", types: ["dark", "animals"]},
    {name: "Collect 10 hidden animals on Weapons Bed M1 and finish", types: ["dark", "animals"]},
    {name: "Get Life Capsule on Weapons Bed M1 and finish", types: ["dark"]}
];
bingoList[8] = [
    {name: "Eliminate 5 enemies on Aquatic Mine and finish", types: ["hero", "genocide"]},
    {name: "Aquatic Mine M1 with 0 A inputs", types: ["hero", "abc"]},
    {name: "Metal Harbor M5 Pacifist", types: ["hero", "pacifist"]},
    {name: "Collect 10 hidden animals on Green Forest M4 and finish", types: ["hero", "animals"]},
    {name: "Collect 4 Life Capsules on Green Forest M4 and finish", types: ["hero"]},
    {name: "Radical Highway M5 Pacifist", types: ["dark", "pacifist"]},
    {name: "3 Chao Boxes on Weapons Bed M2 and finish", types: ["dark", "boxes"]},
    {name: "Beat Tails 1 with 24 rings", types: ["dark", "ra"]}
];
bingoList[9] = [
    {name: "Destroy 7 barrels on Pumpkin Hill M4 and finish", types: ["hero"]},
    {name: "Destroy 7 huts on Pumpkin Hill M4 and finish", types: ["hero"]},
    {name: "Collect 3 Life Capsules on Prison Lane M1 and finish", types: ["hero"]},
    {name: "3 Chao Boxes on Mission Street M3 and finish", types: ["hero", "boxes"]},
    {name: "Eliminate 16 enemies on Security Hall and finish", types: ["dark", "genocide"]},
    {name: "3 Chao Boxes on Lost Colony M4 and finish", types: ["dark", "boxes"]},
    {name: "Get 2 Life Capsules on Lost Colony M4 and finish", types: ["dark"]}
];
bingoList[10] = [
    {name: "Green Forest M5 without using Bounce Bracelet", types: ["hero"]},
    {name: "Green Forest M5 ringless", types: ["hero", "ringless"]},
    {name: "Collect 10 hidden animals on Green Forest M5 and finish", types: ["hero", "animals"]},
    {name: "Green Forest M5 Pacifist", types: ["hero", "pacifist"]},
    {name: "Collect 10 hidden animals on Mission Street M4 and finish", types: ["hero", "animals"]},
    {name: "Flying Dog with 0 A inputs", types: ["dark", "abc"]},
    {name: "Beat Flying Dog with 26 rings", types: ["dark", "ra"]},
    {name: "Collect Magnetic Shield on Lost Colony M5 and finish", types: ["dark"]},
    {name: "Security Hall M2 without using Mystic Melody", types: ["dark"]}
];
bingoList[11] = [
    {name: "Aquatic Mine M5 deathless and ringless", types: ["hero", "ringless"]},
    {name: "Eliminate 15 enemies on Pyramid Cave and finish", types: ["hero", "genocide"]},
    {name: "Pyramid Cave M1 ringless", types: ["hero", "ringless"]},
    {name: "Hidden Base M2 without checkpoints", types: ["hero", "checkpointless"]},
    {name: "Route 101 M3 ringless", types: ["hero", "ringless"]},
    {name: "Collect 10 hidden animals on Prison Lane M4 and finish", types: ["hero", "animals"]},
    {name: "Mission Street M5 Pacifist", types: ["hero", "pacifist"]},
    {name: "Iron Gate M5 Pacifist", types: ["dark", "pacifist"]},
    {name: "White Jungle M1 with 0 A inputs", types: ["dark", "abc"]},
    {name: "3 Chao Boxes on White Jungle M1 and finish", types: ["dark", "boxes"]},
    {name: "Weapons Bed M5 Pacifist", types: ["dark", "pacifist"]}
];
bingoList[12] = [
    {name: "3 Chao Boxes on Death Chamber M1 and finish", types: ["hero", "boxes"]},
    {name: "Pyramid Cave M2 without checkpoints", types: ["hero", "checkpointless"]},
    {name: "Collect 10 hidden animals on Hidden Base M3 and finish", types: ["hero", "animals"]},
    {name: "White Jungle M2 with 0 A inputs", types: ["dark", "abc"]},
    {name: "Beat Sonic 1 with 9 rings", types: ["dark", "ra"]},
    {name: "3 Chao Boxes on Security Hall M4 and finish", types: ["dark", "boxes"]}
];
bingoList[13] = [
    {name: "Death Chamber M2 without Mystic Melody and Sunglasses", types: ["hero"]},
    {name: "Beat King Boom Boo with 24 rings", types: ["hero", "ra"]},
    {name: "Pyramid Cave M3 without using Bounce Bracelet", types: ["hero"]},
    {name: "Security Hall M5 deathless and ringless", types: ["dark", "ringless"]},
    {name: "Security Hall M5 Pacifist", types: ["dark", "pacifist"]},
    {name: "Collect Green Shield while you already own Magnetic Shield", types: ["multistory"]},
    {name: "Get 3 Chao Emblems (Team Combined)", types: ["multistory"]}
];
bingoList[14] = [
    {name: "Finish Hidden Base M5 with Green Shield", types: ["hero"]},
    {name: "Hit 11 hourglasses on Pyramid Cave M4 and finish", types: ["hero"]},
    {name: "Collect 6 Life Capsules on Pyramid Cave M4 and finish", types: ["hero"]},
    {name: "Collect 10 hidden animals on Pyramid Cave M4 and finish", types: ["hero", "animals"]},
    {name: "Beat Hero Egg Golem with 47 rings", types: ["hero", "ra"]},
    {name: "Route 101 M5 boostless", types: ["hero"]},
    {name: "Route 280 M2 without balloons", types: ["dark"]},
    {name: "Collect 10 hidden animals on White Jungle M4 and finish", types: ["dark", "animals"]},
    {name: "Collect 3 Life Capsules on White Jungle M4 and finish", types: ["dark"]}
];
bingoList[15] = [
    {name: "Finish Pyramid Cave M5 with Magnetic Shield", types: ["hero"]},
    {name: "Collect 15 hidden animals on Pyramid Cave M5 and finish", types: ["hero", "animals"]},
    {name: "Pyramid Cave M5 ringless", types: ["hero", "ringless"]},
    {name: "Sky Rail M2 with 0 A inputs", types: ["dark", "abc"]},
    {name: "Beat Dark Egg Golem with 52 rings", types: ["dark", "ra"]},
    {name: "White Jungle M5 Pacifist", types: ["dark", "pacifist"]},
    {name: "5000 total rings", types: ["multistory"]}
];
bingoList[16] = [
    {name: "Eliminate 7 enemies on Meteor Herd and finish", types: ["hero", "genocide"]},
    {name: "Collect 6 Life Capsules on Meteor Herd and finish", types: ["hero"]},
    {name: "Eternal Engine M2 without checkpoints", types: ["hero", "checkpointless"]},
    {name: "Eliminate 7 enemies on Mad Space and finish", types: ["dark", "genocide"]},
    {name: "Sky Rail M3 with 0 A inputs", types: ["dark", "abc"]},
    {name: "Route 280 M3 ringless", types: ["dark", "ringless"]},
    {name: "Win all kart races as Tails/Rouge without rings boost", types: ["multistory"]}
];
bingoList[17] = [
    {name: "Beat Rouge with 0 A inputs", types: ["hero", "abc"]},
    {name: "Beat Rouge with 32 rings", types: ["hero", "ra"]},
    {name: "Meteor Herd M2 without using Back Ring", types: ["hero"]},
    {name: "Collect 10 hidden animals on Sky Rail M4 and finish", types: ["dark", "animals"]},
    {name: "Route 280 M5 boostless", types: ["dark"]},
    {name: "Beat Knuckles with 32 rings", types: ["dark", "ra"]},
    {name: "Beat Knuckles with 0 A inputs", types: ["dark", "abc"]},
    {name: "Mad Space M2 without using Treasure Scope", types: ["dark"]},
    {name: "Route 280 M5 or Route 101 M5 without hitting cars", types: ["multistory"]}
];
bingoList[18] = [
    {name: "Collect 10 hidden animals on Eternal Engine M4 and finish", types: ["hero", "animals"]},
    {name: "Eliminate 9 enemies in Crazy Gadget's puzzle room and finish", types: ["hero", "genocide"]},
    {name: "3 Chao Boxes on Meteor Herd M3 and finish", types: ["hero", "boxes"]},
    {name: "Sky Rail M5 without using Homing Attack", types: ["dark"]},
    {name: "Sky Rail M5 with Magnetic Shield", types: ["dark"]},
    {name: "Sky Rail M5 ringless", types: ["dark", "ringless"]},
    {name: "69 Emblems (Team Combined)", types: ["multistory"]}
];
bingoList[19] = [
    {name: "Beat Eggman 2 with 0 A inputs", types: ["hero", "abc"]},
    {name: "Eternal Engine M5 with Magnetic Shield", types: ["hero"]},
    {name: "Crazy Gadget M2 without checkpoints", types: ["hero", "checkpointless"]},
    {name: "Beat Tails 2 with 0 A inputs", types: ["dark", "abc"]},
    {name: "Eliminate 8 enemies on Dry Lagoon M4 and finish", types: ["dark", "genocide"]},
    {name: "Collect 3 Life Capsules on Mad Space M4 and finish", types: ["dark"]},
    {name: "Collect Chao Key on every level (Team Combined)", types: ["multistory"]}
];
bingoList[20] = [
    {name: "Collect 13 Life Capsules on Final Rush M1 and finish", types: ["hero"]},
    {name: "Eliminate 17 enemies on Final Rush and finish", types: ["hero", "genocide"]},
    {name: "Every Sonic's M1 A-rank", types: ["hero"]},
    {name: "Every Shadow's M1 A-rank", types: ["dark"]},
    {name: "Collect 10 hidden animals on Cosmic Wall M2 and finish", types: ["dark", "animals"]},
    {name: "3 Chao Boxes on Mad Space M5 and finish", types: ["dark", "boxes"]},
    {name: "All upgrades (Team Combined)", types: ["multistory"]}
];
bingoList[21] = [
    {name: "Final Rush M2 with 0 A inputs", types: ["hero", "abc"]},
    {name: "Final Rush M2 without checkpoints", types: ["hero", "checkpointless"]},
    {name: "Collect 10 hidden animals on Crazy Gadget M4 and finish", types: ["hero", "animals"]},
    {name: "Final Chase M2 without using Homing Attack", types: ["dark"]},
    {name: "Cosmic Wall M3 Pacifist and ringless", types: ["dark", "pacifist", "ringless"]},
    {name: "Game Over on Shadow 2 or Sonic 2 with 99 rings", types: ["multistory"]}
];
bingoList[22] = [
    {name: "3 Chao Boxes on City Escape M5 and finish", types: ["hero", "boxes"]},
    {name: "Crazy Gadget M5 with Magnetic Shield", types: ["hero"]},
    {name: "3 Chao Boxes on Crazy Gadget M5 and finish", types: ["hero", "boxes"]},
    {name: "3 Chao Boxes on Cosmic Wall M4 and finish", types: ["dark", "boxes"]},
    {name: "Complete every Rouge hunting M4 hintless", types: ["dark"]},
    {name: "Unlock any Alternative Kart", types: ["multistory"]}
];
bingoList[23] = [
    {name: "Collect 10 hidden animals on Final Rush M4 and finish", types: ["hero", "animals"]},
    {name: "Complete every Knuckles' M4 hintless", types: ["hero"]},
    {name: "Collect 10 Life Capsules on Final Chase M4 and finish", types: ["dark"]},
    {name: "10000 total rings", types: ["multistory"]}
];
bingoList[24] = [
    {name: "Hero Story Boss Rush ringless", types: ["hero", "ringless"]},
    {name: "Dark Story Boss Rush ringless (1 ring EG permitted)", types: ["dark", "ringless"]},
    {name: "Collect Magnetic Shield on Cosmic Wall M5 and finish", types: ["dark"]},
    {name: "70 Emblems", types: ["multistory"]},
    {name: "Final Rush M3 or Final Chase M3 with 700+ rings", types: ["multistory"]}
];
bingoList[25] = [
    {name: "3 Chao Boxes on FR or FC M5 and finish", types: ["multistory", "boxes"]},
    {name: "3 Alternative Costumes (Team Combined)", types: ["multistory"]}
];
