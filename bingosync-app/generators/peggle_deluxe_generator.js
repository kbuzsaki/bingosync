var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[[
{ "name": "35 Orange Pegs, Page 1, Challenge 1", "types": ["more_orange"] },
{ "name": "35 Orange Pegs, Page 1, Challenge 2", "types": ["more_orange"] },
{ "name": "35 Orange Pegs, Page 1, Challenge 3", "types": ["more_orange"] },
{ "name": "35 Orange Pegs, Page 1, Challenge 4", "types": ["more_orange"] },
{ "name": "35 Orange Pegs, Page 1, Challenge 5", "types": ["more_orange"] }
],[
{ "name": "45 Orange Pegs, Page 2, Challenge 1", "types": ["more_orange"] },
{ "name": "45 Orange Pegs, Page 2, Challenge 4", "types": ["more_orange"] },
{ "name": "55 Orange Pegs, Page 3, Challenge 1", "types": ["more_orange"] },
{ "name": "55 Orange Pegs, Page 3, Challenge 3", "types": ["more_orange"] }
],[
{ "name": "The 300K Cup, Page 4, Challenge 5", "types": ["points"] },
{ "name": "55 Orange Pegs, Page 3, Challenge 4", "types": ["more_orange"] },
{ "name": "45 Orange Pegs, Page 2, Challenge 5", "types": ["more_orange"] },
{ "name": "45 Orange Pegs, Page 2, Challenge 3", "types": ["more_orange"] }
],[
{ "name": "45 Orange Pegs, Page 2, Challenge 2", "types": ["more_orange"] },
{ "name": "55 Orange Pegs, Page 3, Challenge 5", "types": ["more_orange"] },
{ "name": "The 300K Cup, Page 4, Challenge 3", "types": ["points"] },
{ "name": "The 350K Open, Page 5, Challenge 1", "types": ["points"] }
],[
{ "name": "Dueling, Page 9, Challenge 1", "types": ["duels"] },
{ "name": "Dueling, Page 9, Challenge 2", "types": ["duels"] },
{ "name": "Dueling, Page 9, Challenge 3", "types": ["duels"] },
{ "name": "Dueling, Page 9, Challenge 4", "types": ["duels"] },
{ "name": "Dueling, Page 9, Challenge 5", "types": ["duels"] }
],[
{ "name": "Full Clear 1-1", "types": ["full_clear"] },
{ "name": "In the Clear, Page 7, Challenge 1", "types": ["full_clear"] },
{ "name": "Multilevel Challenge, Page 12, Challenge 1", "types": ["multilevel"] },
{ "name": "In the Clear, Page 7, Challenge 4", "types": ["full_clear"] },
{ "name": "Full Clear 1-4", "types": ["full_clear"] }
],[
{ "name": "Full Clear 1-2", "types": ["full_clear"] },
{ "name": "In the Clear, Page 7, Challenge 2", "types": ["full_clear"] },
{ "name": "The 300K Cup, Page 4, Challenge 1", "types": ["points"] },
{ "name": "The 350K Open, Page 5, Challenge 3", "types": ["points"] },
{ "name": "The 400K Bowl, Page 6, Challenge 5", "types": ["points"] }
],[
{ "name": "Full Clear 2-2", "types": ["full_clear"] },
{ "name": "Clearly Impossible!, Page 8, Challenge 1", "types": ["full_clear"] },
{ "name": "In the Clear, Page 7, Challenge 5", "types": ["full_clear"] },
{ "name": "Full Clear 1-5", "types": ["full_clear"] },
{ "name": "55 Orange Pegs, Page 3, Challenge 2", "types": ["more_orange"] }
],[
{ "name": "In the Clear, Page 7, Challenge 3", "types": ["full_clear"] },
{ "name": "Full Clear 1-3", "types": ["full_clear"] },
{ "name": "Full Clear 2-1", "types": ["full_clear"] },
{ "name": "The 400K Bowl, Page 6, Challenge 4", "types": ["points"] },
{ "name": "The 350K Open, Page 5, Challenge 4", "types": ["points"] }
],[
{ "name": "Full Clear 5-1", "types": ["full_clear"] },
{ "name": "Full Clear 5-2", "types": ["full_clear"] },
{ "name": "The 400K Bowl, Page 6, Challenge 3", "types": ["points"] },
{ "name": "The 350K Open, Page 5, Challenge 2", "types": ["points"] }
],[
{ "name": "Multilevel Challenge, Page 12, Challenge 2", "types": ["multilevel"] },
{ "name": "Clearly Impossible!, Page 8, Challenge 3", "types": ["full_clear"] },
{ "name": "Full Clear 2-4", "types": ["full_clear"] },
{ "name": "Full Clear 3-5", "types": ["full_clear"] },
{ "name": "The 350K Open, Page 5, Challenge 5", "types": ["points"] }
],[
{ "name": "Serious Dueling, Page 10, Challenge 1", "types": ["duels"] },
{ "name": "Serious Dueling, Page 10, Challenge 2", "types": ["duels"] },
{ "name": "Serious Dueling, Page 10, Challenge 3", "types": ["duels"] },
{ "name": "Serious Dueling, Page 10, Challenge 4", "types": ["duels"] },
{ "name": "Serious Dueling, Page 10, Challenge 5", "types": ["duels"] }
],[
{ "name": "Clearly Impossible!, Page 8, Challenge 5", "types": ["full_clear"] },
{ "name": "Full Clear 7-2", "types": ["full_clear"] },
{ "name": "Full Clear 3-3", "types": ["full_clear"] },
{ "name": "Full Clear 6-1", "types": ["full_clear"] },
{ "name": "Multilevel Challenge, Page 12, Challenge 3", "types": ["multilevel"] },
{ "name": "Full Clear 4-1", "types": ["full_clear"] }
],[
{ "name": "Full Clear 5-4", "types": ["full_clear"] },
{ "name": "Full Clear 8-2", "types": ["full_clear"] },
{ "name": "Full Clear 6-5", "types": ["full_clear"] },
{ "name": "Full Clear 6-4", "types": ["full_clear"] },
{ "name": "The 400K Bowl, Page 6, Challenge 1", "types": ["points"] }
],[
{ "name": "Clearly Impossible!, Page 8, Challenge 4", "types": ["full_clear"] },
{ "name": "Insane Challenges, Page 15, Challenge 2", "types": ["insane"] },
{ "name": "Full Clear 6-2", "types": ["full_clear"] },
{ "name": "Full Clear 5-5", "types": ["full_clear"] },
{ "name": "Full Clear 3-1", "types": ["full_clear"] },
{ "name": "Clearly Impossible!, Page 8, Challenge 2", "types": ["full_clear"] }
],[
{ "name": "The 300K Cup, Page 4, Challenge 2", "types": ["points"] },
{ "name": "Multilevel Score, Page 14, Challenge 1", "types": ["multiscore"] },
{ "name": "Full Clear 6-3", "types": ["full_clear"] },
{ "name": "Full Clear 7-5", "types": ["full_clear"] },
{ "name": "Full Clear 2-5", "types": ["full_clear"] },
{ "name": "Full Clear 7-3", "types": ["full_clear"] }
],[
{ "name": "Full Clear 3-2", "types": ["full_clear"] },
{ "name": "Full Clear 4-4", "types": ["full_clear"] },
{ "name": "Full Clear 7-1", "types": ["full_clear"] },
{ "name": "Full Clear 5-3", "types": ["full_clear"] },
{ "name": "Full Clear 9-1", "types": ["full_clear"] }
],[
{ "name": "The 300K Cup, Page 4, Challenge 4", "types": ["points"] },
{ "name": "Multilevel Score, Page 14, Challenge 2", "types": ["multiscore"] },
{ "name": "Full Clear 10-3", "types": ["full_clear"] },
{ "name": "Full Clear 9-2", "types": ["full_clear"] },
{ "name": "Full Clear 8-5", "types": ["full_clear"] },
{ "name": "Full Clear 11-4", "types": ["full_clear"] }
],[
{ "name": "Full Clear 2-3", "types": ["full_clear"] },
{ "name": "Full Clear 9-5", "types": ["full_clear"] },
{ "name": "Full Clear 9-4", "types": ["full_clear"] },
{ "name": "Full Clear 7-4", "types": ["full_clear"] },
{ "name": "Full Clear 8-4", "types": ["full_clear"] },
{ "name": "Multilevel Score, Page 14, Challenge 3", "types": ["multiscore"] },
{ "name": "Multilevel Challenge, Page 12, Challenge 4", "types": ["multilevel"] }
],[
{ "name": "Three Level Duel, Page 13, Challenge 1", "types": ["tri_duels"] },
{ "name": "The 400K Bowl, Page 6, Challenge 2", "types": ["points"] },
{ "name": "Full Clear 4-3", "types": ["full_clear"] },
{ "name": "Full Clear 11-5", "types": ["full_clear"] },
{ "name": "Full Clear 10-2", "types": ["full_clear"] },
{ "name": "Multilevel Score, Page 14, Challenge 4", "types": ["multiscore"] }
],[
{ "name": "Three Level Duel, Page 13, Challenge 2", "types": ["tri_duels"] },
{ "name": "Insane Challenges, Page 15, Challenge 4", "types": ["insane"] },
{ "name": "Insane Challenges, Page 15, Challenge 1", "types": ["insane"] },
{ "name": "Full Clear 4-5", "types": ["full_clear"] },
{ "name": "Full Clear 9-3", "types": ["full_clear"] }
],[
{ "name": "Three Level Duel, Page 13, Challenge 3", "types": ["tri_duels"] },
{ "name": "Multilevel Score, Page 14, Challenge 5", "types": ["multiscore"] },
{ "name": "Full Clear 8-1", "types": ["full_clear"] },
{ "name": "Full Clear 10-4", "types": ["full_clear"] },
{ "name": "Full Clear 4-2", "types": ["full_clear"] },
{ "name": "Full Clear 3-4", "types": ["full_clear"] }
],[
{ "name": "Three Level Duel, Page 13, Challenge 4", "types": ["tri_duels"] },
{ "name": "Multilevel Challenge, Page 12, Challenge 5", "types": ["multilevel"] },
{ "name": "Full Clear 10-1", "types": ["full_clear"] },
{ "name": "Full Clear 11-1", "types": ["full_clear"] },
{ "name": "Full Clear 11-2", "types": ["full_clear"] },
{ "name": "Full Clear 8-3", "types": ["full_clear"] }
],[
{ "name": "Three Level Duel, Page 13, Challenge 5", "types": ["tri_duels"] },
{ "name": "Insane Challenges, Page 15, Challenge 5", "types": ["insane"] },
{ "name": "Insane Challenges, Page 15, Challenge 3", "types": ["insane"] },
{ "name": "Duel to the Death, Page 11, Challenge 4", "types": ["duels"] },
{ "name": "Full Clear 11-3", "types": ["full_clear"] }
],[
{ "name": "Duel to the Death, Page 11, Challenge 1", "types": ["duels"] },
{ "name": "Duel to the Death, Page 11, Challenge 2", "types": ["duels"] },
{ "name": "Duel to the Death, Page 11, Challenge 3", "types": ["duels"] },
{ "name": "Duel to the Death, Page 11, Challenge 5", "types": ["duels"] },
{ "name": "Full Clear 10-5", "types": ["full_clear"] }
]];
