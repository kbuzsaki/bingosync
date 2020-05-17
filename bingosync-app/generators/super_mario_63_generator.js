bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [[
{ "name": "2 Shines in Bob-omb Battlefield", "types": ["bob"] },
{ "name": "3 Shines in Bob-omb Battlefield", "types": ["bob"] },
{ "name": "4 Shines in Bob-omb Battlefield", "types": ["bob"] },
{ "name": "3 Shines in Bob-omb Battlefield Hover Only", "types": ["bob"] },
{ "name": "3 Star Coins in Shifting Sand Land", "types": ["starcoin","ssl"] }
],[
{ "name": "2 Shines in Shifting Sand Land", "types": ["ssl"] },
{ "name": "3 Shines in Shifting Sand Land", "types": ["ssl"] },
{ "name": "3 Shines in Shifting Sand Land Hover Only", "types": ["ssl"] },
{ "name": "3 Star Coins in Snowman's Land", "types": ["starcoin","sl"] },
{ "name": "3 Star Coins in BoB", "types": ["starcoin","bob"] }
],[
{ "name": "2 Shines in Snowman's Land", "types": ["sl"] },
{ "name": "3 Shines in Snowman's Land", "types": ["sl"] },
{ "name": "4 Shines in Snowman's Land", "types": ["sl"] },
{ "name": "3 Shines in Snowman's Land Hover Only", "types": ["sl"] },
{ "name": "Jolly Roger Bay", "types": ["css"] }
],[
{ "name": "Secret of the Isles", "types": ["css"] },
{ "name": "8 Shines in Lobby", "types": ["lobby"] },
{ "name": "All Power-up Stars", "types": ["sl"] },
{ "name": "6 Star Coins in Bob-omb Battlefield", "types": ["starcoin","bob"] },
{ "name": "6 Star Coins", "types": ["starcoin_count"] }
],[
{ "name": "Bowser 1 Red Coins", "types": ["reds"] },
{ "name": "12 Shines", "types": ["shine_count"] },
{ "name": "King Bob-omb", "types": ["bob"] },
{ "name": "All 7 1-Ups in Secret of the Mushroom", "types": ["css"] },
{ "name": "6 Star Coins in Snowman's Land", "types": ["starcoin","sl"] }
],[
{ "name": "10 Star Coins", "types": ["starcoin_count"] },
{ "name": "12 Star Coins", "types": ["starcoin_count"] },
{ "name": "12 Shines in Lobby", "types": ["lobby"] },
{ "name": "Lobby Castle Secret Shines", "types": ["lobby"] },
{ "name": "3 Star Coins in Hazy Maze Cave", "types": ["starcoin","hmc"] }
],[
{ "name": "2 Shines in Hazy Maze Cave", "types": ["hmc"] },
{ "name": "3 Shines in Hazy Maze Cave", "types": ["hmc"] },
{ "name": "4 Shines in Hazy Maze Cave", "types": ["hmc"] },
{ "name": "100% Bob-omb Battlefield", "types": ["bob"] },
{ "name": "First Shine in 3 Courses", "types": ["firsts"] }
],[
{ "name": "2 Red Coin Shines", "types": ["reds"] },
{ "name": "3 Red Coin Shines", "types": ["reds"] },
{ "name": "100% Snowman's Land", "types": ["sl"] },
{ "name": "3 Star Coins in Castle Secret Shines", "types": ["starcoin"] },
{ "name": "16 Star Coin Prize", "types": ["starcoin_count"] }
],[
{ "name": "Secret Shine in 2 Courses", "types": ["secrets"] },
{ "name": "Secret Shine in 3 Courses", "types": ["secrets"] },
{ "name": "Hazy Maze Cave Red Coins", "types": ["hmc","reds"] },
{ "name": "6 Star Coins in Hazy Maze Cave", "types": ["hmc","starcoin"] },
{ "name": "2 Shines in Hazy Maze Cave Hover Only", "types": ["hmc"] }
],[
{ "name": "2 Silver Stars Shines", "types": ["silvers"] },
{ "name": "3 Silver Stars Shines", "types": ["silvers"] },
{ "name": "2 Shines in Wet Dry World Hover Only", "types": ["wdw"] },
{ "name": "3 Star Coins in Wet Dry World", "types": ["wdw","starcoin"] },
{ "name": "100% Two Mini Courses", "types": ["100%"] }
],[
{ "name": "2 Shines in Wet Dry World", "types": ["wdw"] },
{ "name": "3 Shines in Wet Dry World", "types": ["wdw"] },
{ "name": "Wet Dry World Red Coins", "types": ["wdw","reds"] },
{ "name": "4 Castle Secret Shines", "types": ["css"] },
{ "name": "5 Castle Secret Shines", "types": ["css"] }
],[
{ "name": "20 Star Coins", "types": ["starcoin_count"] },
{ "name": "22 Star Coins", "types": ["starcoin_count"] },
{ "name": "24 Star Coins", "types": ["starcoin_count"] },
{ "name": "Basement Castle Secret Shines", "types": ["basement"] },
{ "name": "16 Shines", "types": ["shine_count"] }
],[
{ "name": "5 Red Coin Shines", "types": ["reds"] },
{ "name": "6 Red Coin Shines", "types": ["reds"] },
{ "name": "3 Star Coins in Boo's Mansion", "types": ["bm","starcoin"] },
{ "name": "3 Mini-Boss Shines", "types": ["miniboss"] },
{ "name": "4 Mini-Boss Shines", "types": ["miniboss"] }
],[
{ "name": "2 Shines in Boo's Mansion", "types": ["bm"] },
{ "name": "3 Shines in Boo's Mansion", "types": ["bm"] },
{ "name": "4 Shines in Boo's Mansion", "types": ["bm"] },
{ "name": "100% Two Main Courses", "types": ["100%"] },
{ "name": "100% Hazy Maze Cave", "types": ["hmc"] }
],[
{ "name": "100% Lobby", "types": ["lobby","100%"] },
{ "name": "8 Shines in Basement", "types": ["basement"] },
{ "name": "12 Shines in Basement", "types": ["basement"] },
{ "name": "Bowser 2 Red Coins", "types": ["reds"] },
{ "name": "20 Shines", "types": ["shine_count"] }
],[
{ "name": "6 Star Coins in Boo's Mansion", "types": ["bm","starcoin"] },
{ "name": "Boo's Mansion Red Coins", "types": ["bm","reds"] },
{ "name": "28 Star Coins", "types": ["starcoin_count"] },
{ "name": "30 Star Coins", "types": ["starcoin_count"] },
{ "name": "3 Star Coins in Lethal Lava Land", "types": ["lll","starcoin"] }
],[
{ "name": "2 Shines in Lethal Lava Land", "types": ["lll"] },
{ "name": "3 Shines in Lethal Lava Land", "types": ["lll"] },
{ "name": "4 Shines in Lethal Lava Land", "types": ["lll"] },
{ "name": "3 Star Coins in Tall Tall Mountain", "types": ["ttm","starcoin"] },
{ "name": "3 Shines in Lethal Lava Land Hover Only", "types": ["lll"] }
],[
{ "name": "2 Shines in Tall Tall Mountain", "types": ["ttm"] },
{ "name": "3 Shines in Tall Tall Mountain", "types": ["ttm"] },
{ "name": "4 Shines in Tall Tall Mountain", "types": ["ttm"] },
{ "name": "Lethal Lava Land Volcano", "types": ["lll"] },
{ "name": "Secret Shine in 4 Courses", "types": ["secrets"] },
{ "name": "Secret Shine in 5 Courses", "types": ["secrets"] }
],[
{ "name": "8 Red Coin Shines", "types": ["reds"] },
{ "name": "9 Red Coin Shines", "types": ["reds"] },
{ "name": "24 Shines", "types": ["shine_count"] },
{ "name": "Lethal Lava Land Secret FLUDDless", "types": ["lll"] },
{ "name": "Tall Tall Mountain Secret", "types": ["ttm"] },
{ "name": "First Shine in 4 Courses", "types": ["firsts"] }
],[
{ "name": "5 Silver Star Shines", "types": ["silvers"] },
{ "name": "7 Silver Star Shines", "types": ["silvers"] },
{ "name": "Play as Luigi", "types": ["starcoin_count"] },
{ "name": "6 Star Coins in Lethal Lava Land", "types": ["lll","starcoin"] },
{ "name": "First Shine in 7 Courses", "types": ["firsts"] },
{ "name": "3 Star Coins in Bowser Courses", "types": ["bt3","starcoin"] }
],[
{ "name": "30 Shines", "types": ["shine_count"] },
{ "name": "32 Shines", "types": ["shine_count"] },
{ "name": "40 Shines", "types": ["shine_count"] },
{ "name": "3 Star Coins in Tick Tock Clock", "types": ["ttc","starcoin"] },
{ "name": "6 Star Coins in Tall Tall Mountain", "types": ["ttm","starcoin"] },
{ "name": "First Shine in Every Course", "types": ["firsts"] }
],[
{ "name": "2 Shines in Tick Tock Clock", "types": ["ttc"] },
{ "name": "3 Shines in Tick Tock Clock", "types": ["ttc"] },
{ "name": "3 Star Coins in Rainbow Ride", "types": ["rr"] },
{ "name": "2 Shines in Tick Tock Clock Hover Only", "types": ["ttc"] },
{ "name": "Upstairs Castle Secrets", "types": ["upstairs"] },
{ "name": "100% 3 Main Courses", "types": ["100%"] }
],[
{ "name": "2 Shines in Rainbow Ride", "types": ["rr"] },
{ "name": "3 Shines in Rainbow Ride", "types": ["rr"] },
{ "name": "4 Shines in Rainbow Ride", "types": ["rr"] },
{ "name": "Edge of the Mushroom Kindgom", "types": ["bt3","css"] },
{ "name": "Rocket and Turbo Room in Bowser 3", "types": ["bt3"] },
{ "name": "100% Basement", "types": ["basement","100%"] }
],[
{ "name": "36 Star Coins", "types": ["starcoin_count"] },
{ "name": "38 Star Coins", "types": ["starcoin_count"] },
{ "name": "40 Star Coins", "types": ["starcoin_count"] },
{ "name": "3 Shines in Rainbow Ride Hover Only", "types": ["rr"] },
{ "name": "6 Star Coins in Rainbow Ride", "types": ["rr","starcoin"] },
{ "name": "100% 4 Main Courses", "types": ["100%"] }
],[
{ "name": "12 Red Coin Shines", "types": ["reds"] },
{ "name": "Secret Shine in Every Main Course", "types": ["secrets"] },
{ "name": "Bowser 3 Reds", "types": ["b3","reds"] },
{ "name": "48 Star Coin Prize", "types": ["starcoin_count"] },
{ "name": "Complete Bowser 3", "types": ["b3"] },
{ "name": "100% Upstairs", "types": ["upstairs","100%"] }
]];
