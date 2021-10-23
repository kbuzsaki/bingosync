var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
    {name: "Lock the groundskeeper out of the garden", types: ["garden", "early"]},
];

bingoList[2] = [
    {name: "Steal the sun hat", types: ["garden"]},
    {name: "Dont use glitches", types: ["misc"]},
];

bingoList[3] = [
    {name: "Watering can in the water", types: ["garden", "water"]},
    {name: "Dont open any gates", types: ["misc"]},
    {name: "Bring all 4 cabbages to blanket", types: ["garden", "blanket"]},
];

bingoList[4] = [
    {name: "Complete all main tasks in garden", types: ["garden", "main"]},
    {name: "Make someone outside highstreet buy their own stuff", types: ["highstreet", "garden"]},
    {name: "Make boy wear sunglasses", types: ["highstreet", "boy"]},
    {name: "Trip boy 5 times", types: ["highstreet", "boy"]},
];

bingoList[5] = [
    {name: "Complete all main and hidden tasks in the garden", types: ["garden", "hidden", "main"]},
    {name: "Hoard 10 items anywhere", types: ["items"]},
    {name: "Trap yourself with the boy in the phone booth", types: ["highstreet", "boy"]},
    {name: "1 before the bell rings challenge", types: ["main", "timed"]},
    {name: "Bring the radio to the high street radio", types: ["garden", "highstreet"]},
    {name: "Remove all items from shopkeepers shelf", types: ["highstreet", "shop"]},
];

bingoList[6] = [
    {name: "Bring a pair of 5 different foods to the blanket", types: ["blanket"]},
    {name: "Put the can in your home in the trash", types: ["highstreet"]},
    {name: "Swap locations of picnic and shopping basket", types: ["garden", "highstreet"]},
    {name: "Kick soccerball into lake", types: ["soccer", "highstreet", "water"]},
    {name: "Open all 3 umbrellas in the TV shop", types: ["highstreet", "hidden"]},
    {name: "Bring the boy and shopkeeper into the lake", types: ["highstreet", "water"]},
];

bingoList[7] = [
    {name: "Sail toy car under bridge", types: ["highstreet", "water"]},
    {name: "Trap the boy in the garage", types: ["highstreet", "boy", "hidden"]},
    {name: "Complete all main tasks in highstreet", types: ["highstreet", "main"]},
    {name: "Lock the groundskeeper in the garage", types: ["garden", "highstreet"]},
    {name: "Get the boy on TV", types: ["highstreet", "tv"]},
    {name: "Complete all hidden tasks in high street", types: ["highstreet", "hidden"]},
];

bingoList[8] = [
    {name: "Steal all of the shopkeepers produce", types: ["highstreet"]},
    {name: "Lock the boy and shopkeeper in the garage", types: ["highstreet", "main", "hidden"]},
    {name: "Complete every main and hidden task in the highstreet", types: ["main", "hidden", "highstreet"]},
    {name: "2 before the bell rings challenges", types: ["main", "timed"]},
    {name: "Hoard 15 items in any location", types: ["items"]},
    {name: "Do the washing in the lake", types: ["back", "water"]},
    {name: "Drop any of the boys items in the back garden fountain", types: ["boy", "back"]},
 ];

bingoList[9] = [
    {name: "Bring all of the back garden manâ€™s items to the shopkeeper", types: ["back", "highstreet"]},
    {name: "Get the drawer thrown over the fence", types: ["fence", "back"]},
    {name: "Take toilet paper to the toilet in back gardens", types: ["highstreet", "back"]},
    {name: "Steal 3 different pairs of glasses and bring them to bust", types: ["back", "bust"]},
    {name: "Bring the goose statue to blanket", types: ["statue", "back", "blanket"]},
];

bingoList[10] = [
    {name: "Cooler in the back garden fountain", types: ["back"]},
    {name: "Bring the goose statue to your home", types: ["statue", "back", "home"]},
    {name: "Have the back gardens man throw 10 items over fence", types: ["fence", "items", "back"]},
    {name: "Get the frog statue to the lilypads", types: ["back", "water"]},
    {name: "Move all of womans items to mans side", types: ["back"]},

];

bingoList[11] = [
    {name: "Hit the tennis ball with the racket", types: ["back", "home"]},
    {name: "Complete all main tasks in back garden", types: ["back", "main"]},
    {name: "Score a goal", types: ["soccer", "back"]},
    {name: "Get both you and the goose statue thrown from house", types: ["statue", "back"]},
    {name: "Reunite the two old boots", types: ["home", "back"]},
    {name: "Swap package and letter", types: ["back"]},
];

bingoList[12] = [
    {name: "Find the cone and bring it to the others", types: ["pub"]},
    {name: "3 before the bell rings challenges", types: ["main", "timed"]},
    {name: "Score a goal with the cabbage", types: ["garden", "back"]},
    {name: "Sneak into the pub using the box", types: ["pub"]},
    {name: "Get thrown over the fence", types: ["back", "hidden"]},
    {name: "Complete all of the back garden hidden tasks", types: ["back", "hidden"]},
];

bingoList[13] = [
    {name: "Drop 5 items into the well", types: ["items", "well"]},
    {name: "Get at least 3 of the rings on the center peg", types: ["pub"]},
    {name: "Trip the burly man 5 times", types: ["pub", "burly"]},
    {name: "Take all the pint cups and throw then into the canal", types: ["pub", "main"]},
    {name: "Uncork the keg barrel", types: ["pub"]},
    {name: "Perform at the pub using the harmonica", types: ["pub", "main"]},
];

bingoList[14] = [
    {name: "Hoard 20 items anywhere", types: ["items"]},
    {name: "All main and hidden tasks in back gardens", types: ["back", "hidden", "main"]},
    {name: "Drop the boys plane in the pub sink", types: ["boy", "pub"]},
    {name: "Sail the toy boat under a bridge", types: ["pub", "hidden"]},
    {name: "Steal the wool hat, dart, and harmonica", types: ["pub", "hidden"]},
    {name: "Make back gardens man throw the tackle box over the fence", types: ["pub", "back", "fence"]},
];

bingoList[15] = [
    {name: "Steal all four hats and bring them to the bust", types: ["bust", "garden", "pub", "hidden"]},
    {name: "Complete all hidden tasks in the pub", types: ["pub", "hidden"]},
    {name: "Drop 10 items into the well", types: ["items", "well"]},
    {name: "Put 5 different items into the van and close the doors", types: ["pub"]},
    {name: "Use pacifier, sun hat, and sunglasses to dress up bust", types: ["garden", "highstreet", "back", "bust"]},
    {name: "Bring the shops tomatoes together with the pubsâ€™ ", types: ["highstreet", "pub"]},
];

bingoList[16] = [
    {name: "Complete 3 tasks while wearing the ribbon", types: ["main", "hidden"]},
    {name: "Play the harmonica on TV", types: ["pub", "tv"]},
    {name: "Hoard 25 items anywhere", types: ["items"]},
    {name: "Complete all main tasks in the pub", types: ["pub"]},
    {name: "Steal the harmonica, toothbrush, and pacifier and bring to bust", types: ["pub", "highstreet", "bust"]},
    {name: "Make 3 different people fall or trip", types: ["pub", "highstreet"]},
];

bingoList[17] = [
    {name: "All 4 before the bell rings challenges", types: ["main", "timed"]},
    {name: "Complete every main and hidden task in the pub", types: ["pub", "main", "hidden"]},
    {name: "Bring mop from pub to the other mop in high street", types: ["pub", "highstreet"]},
    {name: "Bring the pubs power washer into the canal", types: ["pub", "water"]},
    {name: "Set the table for 2", types: ["pub"]},
];

bingoList[18] = [
    {name: "Bring the coin to the mini well", types: ["model"]},
    {name: "Bring the art brush to the model village easel", types: ["back", "model"]},
    {name: "Drop 15 items into the well", types: ["items"]},
    {name: "Drag 3 no goose signs to the trash", types: ["pub", "garden", "back", "highstreet"]},
    {name: "Drown all mini NPCs", types: ["model"]},
    {name: "Complete all main tasks in an area while wearing a ribbon", types: ["main"]},
];

bingoList[19] = [
    {name: "Rake in mini lake", types: ["garden", "model"]},
    {name: "Bring the goose miniature to your home", types: ["model", "home"]},
    {name: "Drop something other than the bell in the bell pit", types: ["home"]},
    {name: "Remove all removable items in the model village", types: ["model"]},
    {name: "Bring 5 items to model village", types: ["items", "model"]},

];

bingoList[20] = [
    {name: "Drop 20 items into the well", types: ["items"]},
    {name: "Bring 2 of the model items to their originals", types: ["splatling"]},
    {name: "Bring 2 people their miniature matches", types: ["model"]},
    {name: "Bring the goose statue and the goose miniature to the blanket", types: ["model", "statue", "blanket"]},
];

bingoList[21] = [
    {name: "Drag fish statue to model village", types: ["back", "model"]},
    {name: "Bring 10 items to model village", types: ["items"]},
    {name: "Bring the soccerball to model village", types: ["soccer", "model"]},
];

bingoList[22] = [
    {name: "Bring at least 3 model village items to their originals", types: ["model"]},
    {name: "Collect 5 flowers", types: ["hidden"]},
];

bingoList[23] = [
    {name: "Have back gardens man throw 20 items over the fence", types: ["items"]},
    {name: "Drop 25 items into the well", types: ["items"]},
];

bingoList[24] = [
    {name: "Bring 15 items to model village", types: ["items", "model"]},
    {name: "All hidden tasks", types: ["hidden"]},
];

bingoList[25] = [
    {name: "Drag 1 item from each main area to the model village", types: ["long", "model"]},
];
