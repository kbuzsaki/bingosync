bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [[
{"name": "100% riverbed flight" , "types": ["lvl14"]},
{"name": "100% clover forest", "types": ["lvl10"]},
{"name": "100% city entrance", "types": ["lvl7"]},
{"name": "100% anthill", "types": ["lvl1"]},
{"name": "100% cliffside", "types": ["lvl4"]},
{"name": "100% riverbed canyon", "types": ["lvl5"]},
{"name": "100% city square", "types": ["lvl8"]},
{"name": "100% the tunnels", "types": ["lvl2"]},
{"name": "100% anthill part2", "types": ["lvl13"]},
{"name": "100% the tree", "types": ["lvl11"]}
],
[{"name": "60 combined grains in anthill and city entrance", "types": ["lvl1","lvl7"]},
{"name": "60 combined grains in tunnels and riverned flight", "types": ["lvl2","lvl14"]},
{"name": "60 combined grains in cliffside and riverbed canyon", "types": ["lvl4","lvl5"]},
{"name": "60 combined grains in city square and the tree", "types": ["lvl8","lvl11"]},
{"name": "60 combined grains in clover forest and anthill part2", "types": ["lvl10","lvl13"]},
{"name": "60 combined grains in anthill and city square", "types": ["lvl1","lvl8"]},
{"name": "60 combined grains in tunnels and cliffside", "types": ["lvl2","lvl4"]},
{"name": "60 combined grains in the tree and riverbed canyon", "types": ["lvl11","lvl5"]}
],
[
{"name": "60 combined grains in city entrance and the tree", "types": ["lvl11","lvl7"]},
{"name": "60 combined grains in clover forest and riverbed flight", "types": ["lvl10","lvl14"]},
{"name": "60 combined grains in anthill and clover forest", "types": ["lvl1","lvl10"]},
{"name": "60 combined grains in tunnels and city square", "types": ["lvl2","lvl8"]},
{"name": "60 combined grains in cliffside and city entrance", "types": ["lvl4","lvl7"]},
{"name": "60 combined grains in riverbed canyon and riverbed flight", "types": ["lvl5","lvl14"]},
{"name": "60 combined grains in the tree and anthill part2" , "types": ["lvl13","lvl11"]}
],
[
{"name": "25 grains in both anthill and tunnels", "types": ["lvl1","lvl2"]},
{"name": "25 grains in both cliffside and city square", "types": ["lvl4","lvl8"]},
{"name": "25 grains in both riverbed canyon and anthill part2", "types": ["lvl5","lvl13"]},
{"name": "25 grains in both city entrance and riverbed flight", "types": ["lvl7","lvl14"]},
{"name": "25 grains in both clover forest and the tree", "types": ["lvl10","lvl11"]},
{"name": "25 grains in both anthill and cliffside", "types": ["lvl1","lvl4"]},
{"name": "25 grains in both tunnels and riverbed canyon", "types": ["lvl2","lvl5"]},
{"name": "25 grains in both city entrance and the tree", "types": ["lvl7","lvl11"]}
],
[
{"name": "25 grains in both  city square and clover forest", "types": ["lvl8", "lvl10"]},
{"name": "25 grains in both anthill part2 and riverded flight", "types": ["lvl13","lvl14"]},
{"name": "25 grains in both anthill and riverbed canyon", "types": ["lvl1","lvl5"]},
{"name": "25 grains in both tunnels and city entrance", "types": ["lvl2","lvl7"]},
{"name": "25 grains in both cliffside and clover forest", "types": ["lvl4","lvl10"]},
{"name": "25 grains in both  city square and anthill part2", "types": ["lvl8","lvl13"]},
{"name": "25 grains in both the tree and riverbed flight", "types": ["lvl11","lvl14"]}
],
[
{"name": "2 grain tokens", "types": ["misc"]},
{"name": "grain token in council chamber", "types": ["lvl3"]},
{"name": "grain token in riverbed canyon", "types": ["lvl5"]}
],
[
{"name": "grain token in city entrance", "types": ["lvl7"]},
{"name": "grain token in tunnels", "types": ["lvl2"]},
{"name": "grain token in bugbar", "types": ["lvl9"]}
],
[
{"name": "2 flik tokens", "types": ["flik"]},
{"name": "flik token in anthill part2", "types": ["lvl13"]},
{"name": "flik token in the tree", "types": ["lvl11"]}
],
[
{"name": "flik token in city square", "types": ["lvl8"]},
{"name": "flik token in riverbed flight", "types": ["lvl14"]},
{"name": "flik token in hopper", "types": ["lvl15"]}
],
[
{"name": "2 enemies tokens", "types": ["enemies"]},
{"name": "enemy token in bird", "types": ["lvl6"]},
{"name": "enemy token in battle arena", "types": ["lvl12"]}
],
[
{"name": "enemy token in clover forest", "types": ["lvl10"]},
{"name": "enemy token in cliffside", "types": ["lvl4"]},
{"name": "enemy token in anthill", "types": ["lvl1"]}
],
[
{"name": "collect all berries types(5 colours)" , "types": ["misc2"]},
{"name": "collect 4 gold berries", "types": ["misc2"]},
{"name": "collect 4 super berries", "types": ["misc2"]},
{"name": "collect 4 purple berries", "types": ["misc2"]},
{"name": "collect 4 green berries", "types": ["misc2"]},
{"name": "collect 10 berries ", "types": ["misc2"]},
{"name": "collect 2 gold berries and 2 green berries ", "types": ["misc2"]},
{"name": "collect 2 blue berries and 2 purple berries", "types": ["misc2"]},
{"name": "collect 2 gold berries and 2 blue berries ", "types": ["misc2"]},
{"name": "collect 2 green berries and 2 purple berries", "types": ["misc2"]}
],
[
{"name": "use a canon and a mine plant", "types": ["misc3"]},
{"name": "use a canon and super jump", "types": ["misc3"]},
{"name": "use a mine plant and super jump", "types": ["misc3"]},
{"name": "use a dandelion and super jump" , "types": ["misc3"]}
],
[
{"name": "plant 4 back to back mushrooms", "types": ["misc3"]},
{"name": "plant 4 back to back green plants", "types": ["misc3"]},
{"name": "grow all types of seeds in the same level", "types": ["misc3"]},
{"name": "use all seeds colours(5)" , "types": ["misc3"]}
],
[
{"name": "grow 20 seeds", "types": ["misc3"]},
{"name": "grow 15 seeds", "types": ["misc3"]},
{"name": "grow 7 green seeds", "types": ["misc3"]},
{"name": "grow 10 different plants", "types": ["misc3"]}
],
[
{"name": "grow 7 brown seeds", "types": ["misc3"]},
{"name": "grow 2 gold berry plants", "types": ["misc3"]},
{"name": "grow 3 dandelions", "types": ["misc3"]},
{"name": "grow 2 canons", "types": ["misc3"]}
],
[
{"name": "Defeat 14 grasshoppers", "types": ["misc4"]},
{"name": "Defeat 17 spiders", "types": ["misc4"]},
{"name": "Defeat 11 Mosquitoes" , "types": ["misc4"]},
{"name": "Defeat 7 Flies", "types": ["misc4"]},
{"name": "Defeat 6 Cockroaches", "types": ["misc4"]},
{"name": "Defeat 14 Wasps", "types": ["misc4"]},
{"name": "Defeat a grasshoppers, a spider, a mosquito, a dragonfly and a armour plated beetle", "types": ["misc4"]},
{"name": "Defeat 13 Mites", "types": ["misc4"]}
],
[
{"name": "Defeat 5 Grubs", "types": ["misc4"]},
{"name": "Defeat 5 Earthworms", "types": ["misc4"]},
{"name": "Defeat 4 Centipedes", "types": ["misc4"]},
{"name": "Defeat 11 Dragonflies", "types": ["misc4"]},
{"name": "Defeat a fly, a cokroach, a wasp a grub and a dragonfly", "types": ["misc4"]},
{"name": "Defeat 3 Armour Plated Beetles", "types": ["misc4"]},
{"name": "Defeat 9 Daddy Long Legs", "types": ["misc4"]},
{"name": "Defeat a mite, a grub an earthworm , a centipede and a daddy long legs", "types": ["misc4"]}
],
[
{"name": "ELP anthill and anthill part2", "types": ["lvl1","lvl13"]},
{"name": "ELP tunnels and the tree", "types": ["lvl2","lvl11"]},
{"name": "ELP cliffside and riverbed flight", "types": ["lvl4","lvl14"]},
{"name": "ELP riverbed canyon and clover forest", "types": ["lvl5","lvl10"]},
{"name": "ELP city entrance and city square ", "types": ["lvl7","lvl8"]}
],
[
{"name": "ELP anthill and riverbed flight", "types": ["lvl1","lvl14"]},
{"name": "ELP tunnels and anthill part2", "types": ["lvl2","lvl13"]},
{"name": "ELP cliffside and the tree", "types": ["lvl4","lvl11"]},
{"name": "ELP riverbed canyon and city square ", "types": ["lvl5","lvl8"]},
{"name": "ELP city entrance and clover forest", "types": ["lvl7","lvl10"]}
],
[
{"name": "ELP anthill and the tree", "types": ["lvl1","lvl11"]},
{"name": "ELP tunnels and clover forest", "types": ["lvl2","lvl10"]},
{"name": "ELP cliffside and anthill part2", "types": ["lvl4","lvl13"]},
{"name": "ELP riverbed canyon and city entrance", "types": ["lvl5","lvl7"]},
{"name": "ELP riverbed flight and city square ", "types": ["lvl14","lvl8"]}
],
[
{"name": "Defeat thumper and molt", "types": ["lvl3","lvl12"]},
{"name": "Defeat bird and thud", "types": ["lvl6","lvl9"]},
{"name": "Defeat hopper and thud", "types": ["lvl15","lvl9"]},
{"name": "Defeat thumper and thud", "types": ["lvl3","lvl9"]},
{"name": "Defeat thumper and bird", "types": ["lvl3","lvl6"]},
{"name": "Defeat thumper and hopper", "types": ["lvl3","lvl15"]},
{"name": "Defeat bird and molt", "types": ["lvl6","lvl12"]},
{"name": "Defeat bird and hopper", "types": ["lvl6","lvl15"]},
{"name": "Defeat thud and molt", "types": ["lvl9","lvl12"]},
{"name": "Defeat molt and hopper", "types": ["lvl12","lvl15"]}
],
[
{"name": "Finish 2 Bonus levels", "types": ["bonus"]},
{"name": "100% training", "types": ["bonus"]},
{"name": "Finish first Bonus level(in training)" , "types": ["bonus"]},
{"name": "Finish Second Bonus level(in tunnels)" , "types": ["bonus"]},
{"name": "Finish third Bonus level(in clover forest)" , "types": ["bonus"]}
],
[
{"name": "150 grains", "types": ["misc4"]},
{"name": "5 tokens", "types": ["misc4"]},
{"name": "ELP 7 levels", "types": ["misc4"]},
{"name": "Defeat 3 bosses", "types": ["misc4"]},
{"name": "Defeat 80 enemies", "types": ["misc4"]},
{"name": "250 grains", "types": ["misc4"]},
{"name": "Defeat 7 enemies from the same type", "types": ["misc4"]},
{"name": "7 tokens", "types": ["misc4"]},
{"name": "10 tokens", "types": ["misc4"]},
{"name": "ELP 4 back to back levels", "types": ["misc4"]}
],
[
{"name": "use 3 telescopes", "types": ["misc5"]},
{"name": "talk to 5 different NPC's", "types": ["misc5"]},
{"name": "Defeat all grasshoppers bosses and 1 grasshopper from another level", "types": ["misc5"]},
{"name": "Defeat bird and thud without getting hit by them", "types": ["misc5"]},
{"name": "use the harvester to kill as many enemies you can in 2 levels", "types": ["misc5"]},
{"name": "use 3 harvesters", "types": ["misc5"]},
{"name": "Defeat 50 enemies and say Not really every time you defeat one", "types": ["misc5"]},
{"name": "ELP riverbed canyon and talk only when asked to(ignoring people or talking without asked cancel it)" , "types": ["misc5"]},
{"name": "ELP 3 levels without getting anything in them", "types": ["misc5"]},
{"name": "hit 15 enemies using seeds", "types": ["misc5"]}
]
];
