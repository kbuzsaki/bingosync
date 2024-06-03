var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[[
{ "name": "Initiate Challenges, Page 1, Challenge 2", "types": ["more_orange"] },
{ "name": "Initiate Challenges, Page 1, Challenge 3", "types": ["points"] },
{ "name": "Initiate Challenges, Page 1, Challenge 4", "types": ["duels"] },
{ "name": "Orange Crush, Page 2, Challenge 1", "types": ["more_orange"] },
{ "name": "Lucky Number 7, Page 3, Challenge 1", "types": ["points"] },
{ "name": "Power Plays, Page 4, Challenge 1", "types": ["power_plays"] }
],[
{ "name": "Orange Crush, Page 2, Challenge 4", "types": ["more_orange"] },
{ "name": "Lucky Number 7, Page 3, Challenge 2", "types": ["points"] },
{ "name": "Lucky Number 7, Page 3, Challenge 3", "types": ["points"] },
{ "name": "Power Plays, Page 4, Challenge 4", "types": ["power_plays"] },
{ "name": "Multilevel Challenge, Page 8, Challenge 1", "types": ["multilevel"] },
{ "name": "Fewer Balls Challenge, Page 11, Challenge 1", "types": ["limited_balls"] }
],[
{ "name": "Initiate Challenges, Page 1, Challenge 1", "types": ["limited_balls"] },
{ "name": "Orange Crush, Page 2, Challenge 2", "types": ["more_orange"] },
{ "name": "Orange Crush, Page 2, Challenge 5", "types": ["more_orange"] },
{ "name": "Pinball and Low Ball, Page 10, Challenge 1", "types": ["pinball"] },
{ "name": "Full Clear 1-1", "types": ["full_clear"] }
],[
{ "name": "Ace Score 9-3", "types": ["ace_score"] },
{ "name": "Orange Crush, Page 2, Challenge 3", "types": ["more_orange"] },
{ "name": "Power Plays, Page 4, Challenge 3", "types": ["power_plays"] },
{ "name": "The Duelists, Page 6, Challenge 1", "types": ["duels"] },
{ "name": "Multilevel Challenge, Page 8, Challenge 2", "types": ["multilevel"] },
{ "name": "Full Clear 3-2", "types": ["full_clear"] }
],[
{ "name": "Ace Score 3-2", "types": ["ace_score"] },
{ "name": "The Duelists, Page 6, Challenge 2", "types": ["duels"] },
{ "name": "The Duelists, Page 6, Challenge 5", "types": ["duels"] },
{ "name": "Full Clear 1-5", "types": ["full_clear"] },
{ "name": "Full Clear 1-3", "types": ["full_clear"] }
],[
{ "name": "Stylistic Challenges, Page 5, Challenge 2", "types": ["style"] },
{ "name": "Stylistic Challenges, Page 5, Challenge 4", "types": ["style"] },
{ "name": "The Duelists, Page 6, Challenge 4", "types": ["duels"] },
{ "name": "Multilevel Challenge, Page 8, Challenge 3", "types": ["multilevel"] },
{ "name": "Full Clear 2-4", "types": ["full_clear"] }
],[
{ "name": "Initiate Challenges, Page 1, Challenge 5", "types": ["multilevel"] },
{ "name": "Ace Score 6-2", "types": ["ace_score"] },
{ "name": "Ace Score 6-5", "types": ["ace_score"] },
{ "name": "Fewer Balls Challenge, Page 11, Challenge 3", "types": ["limited_balls"] },
{ "name": "Full Clear 1-2", "types": ["full_clear"] }
],[
{ "name": "Ace Score 1-3", "types": ["ace_score"] },
{ "name": "Ace Score 8-1", "types": ["ace_score"] },
{ "name": "Multilevel Challenge, Page 8, Challenge 4", "types": ["multilevel"] },
{ "name": "Pinball and Low Ball, Page 10, Challenge 2", "types": ["pinball"] },
{ "name": "Full Clear 1-4", "types": ["full_clear"] }
],[
{ "name": "Ace Score 1-2", "types": ["ace_score"] },
{ "name": "Lucky Number 7, Page 3, Challenge 5", "types": ["points"] },
{ "name": "Stylistic Challenges, Page 5, Challenge 1", "types": ["style"] },
{ "name": "The Duelists, Page 6, Challenge 3", "types": ["duels"] },
{ "name": "Pinball and Low Ball, Page 10, Challenge 3", "types": ["pinball"] },
{ "name": "Full Clear 2-1", "types": ["full_clear"] }
],[
{ "name": "Ace Score 1-1", "types": ["ace_score"] },
{ "name": "Lucky Number 7, Page 3, Challenge 4", "types": ["points"] },
{ "name": "Power Plays, Page 4, Challenge 5", "types": ["power_plays"] },
{ "name": "Stylistic Challenges, Page 5, Challenge 3", "types": ["style"] },
{ "name": "Multilevel Challenge, Page 8, Challenge 5", "types": ["multilevel"] },
{ "name": "Insane Challenges, Page 12, Challenge 3", "types": ["limited_balls"] }
],[
{ "name": "Ace Score 1-5", "types": ["ace_score"] },
{ "name": "Ace Score 4-2", "types": ["ace_score"] },
{ "name": "Ace Score 8-2", "types": ["ace_score"] },
{ "name": "Ace Score 8-5", "types": ["ace_score"] }
],[
{ "name": "Ace Score 2-1", "types": ["ace_score"] },
{ "name": "Ace Score 6-4", "types": ["ace_score"] },
{ "name": "Ace Score 4-1", "types": ["ace_score"] },
{ "name": "Ace Score 7-4", "types": ["ace_score"] },
{ "name": "Stylistic Challenges, Page 5, Challenge 5", "types": ["limited_balls"] },
{ "name": "Insane Challenges, Page 12, Challenge 2", "types": ["limited_balls"] }
],[
{ "name": "Ace Score 12-1", "types": ["ace_score"] },
{ "name": "Ace Score 11-4", "types": ["ace_score"] },
{ "name": "Ace Score 2-3", "types": ["ace_score"] },
{ "name": "Ace Score 4-4", "types": ["ace_score"] },
{ "name": "Ace Score 8-4", "types": ["ace_score"] },
{ "name": "Fewer Balls Challenge, Page 11, Challenge 5", "types": ["limited_balls"] },
{ "name": "Fewer Balls Challenge, Page 11, Challenge 2", "types": ["limited_balls"] },
{ "name": "Full Clear 8-1", "types": ["full_clear"] }
],[
{ "name": "Ace Score 1-4", "types": ["ace_score"] },
{ "name": "Ace Score 3-3", "types": ["ace_score"] },
{ "name": "Ace Score 3-4", "types": ["ace_score"] },
{ "name": "Ace Score 7-1", "types": ["ace_score"] },
{ "name": "Ace Score 4-3", "types": ["ace_score"] },
{ "name": "Power Plays, Page 4, Challenge 2", "types": ["power_plays"] },
{ "name": "Full Clear 2-2", "types": ["full_clear"] },
{ "name": "Full Clear 4-4", "types": ["full_clear"] }
],[
{ "name": "Ace Score 11-5", "types": ["ace_score"] },
{ "name": "Ace Score 10-2", "types": ["ace_score"] },
{ "name": "Ace Score 2-2", "types": ["ace_score"] },
{ "name": "Ace Score 6-3", "types": ["ace_score"] },
{ "name": "Ace Score 7-3", "types": ["ace_score"] },
{ "name": "Full Clear 9-3", "types": ["full_clear"] },
{ "name": "Multlievel Score Challenge, Page 9, Challenge 1", "types": ["multilevel"] },
{ "name": "Full Clear 2-3", "types": ["full_clear"] },
{ "name": "Full Clear 2-5", "types": ["full_clear"] },
{ "name": "Full Clear 3-3", "types": ["full_clear"] },
{ "name": "Full Clear 5-2", "types": ["full_clear"] }
],[
{ "name": "Full Clear 5-5", "types": ["full_clear"] },
{ "name": "Full Clear 3-5", "types": ["full_clear"] },
{ "name": "Ace Score 12-3", "types": ["ace_score"] },
{ "name": "Ace Score 10-3", "types": ["ace_score"] },
{ "name": "Ace Score 6-1", "types": ["ace_score"] },
{ "name": "Ace Score 7-2", "types": ["ace_score"] },
{ "name": "Pinball and Low Ball, Page 10, Challenge 4", "types": ["low_score"] },
{ "name": "Multlievel Score Challenge, Page 9, Challenge 2", "types": ["multilevel"] },
{ "name": "Full Clear 4-1", "types": ["full_clear"] },
{ "name": "Full Clear 4-2", "types": ["full_clear"] }
],[
{ "name": "Ace Score 10-5", "types": ["ace_score"] },
{ "name": "Ace Score 11-3", "types": ["ace_score"] },
{ "name": "Ace Score 5-5", "types": ["ace_score"] },
{ "name": "Ace Score 3-1", "types": ["ace_score"] },
{ "name": "Full Clear 11-3", "types": ["full_clear"] },
{ "name": "Full Clear 9-1", "types": ["full_clear"] },
{ "name": "Fewer Balls Challenge, Page 11, Challenge 4", "types": ["limited_balls"] },
{ "name": "Full Clear 5-4", "types": ["full_clear"] },
{ "name": "Full Clear 7-1", "types": ["full_clear"] },
{ "name": "Full Clear 7-3", "types": ["full_clear"] }
],[
{ "name": "Ace Score 10-4", "types": ["ace_score"] },
{ "name": "Ace Score 3-5", "types": ["ace_score"] },
{ "name": "Ace Score 8-3", "types": ["ace_score"] },
{ "name": "Ace Score 9-4", "types": ["ace_score"] },
{ "name": "Full Clear 12-2", "types": ["full_clear"] },
{ "name": "Full Clear 12-5", "types": ["full_clear"] },
{ "name": "Full Clear 8-5", "types": ["full_clear"] },
{ "name": "Insane Challenges, Page 12, Challenge 1", "types": ["limited_balls"] },
{ "name": "Full Clear 4-3", "types": ["full_clear"] },
{ "name": "Full Clear 6-2", "types": ["full_clear"] },
{ "name": "Full Clear 6-5", "types": ["full_clear"] },
{ "name": "Full Clear 7-2", "types": ["full_clear"] }
],[
{ "name": "Ace Score 12-2", "types": ["ace_score"] },
{ "name": "Ace Score 11-2", "types": ["ace_score"] },
{ "name": "Ace Score 11-1", "types": ["ace_score"] },
{ "name": "Ace Score 9-5", "types": ["ace_score"] },
{ "name": "Full Clear 12-3", "types": ["full_clear"] },
{ "name": "Full Clear 10-2", "types": ["full_clear"] },
{ "name": "Multlievel Score Challenge, Page 9, Challenge 5", "types": ["multilevel"] },
{ "name": "Multlievel Score Challenge, Page 9, Challenge 3", "types": ["multilevel"] },
{ "name": "Full Clear 5-3", "types": ["full_clear"] },
{ "name": "Full Clear 6-4", "types": ["full_clear"] },
{ "name": "Full Clear 7-4", "types": ["full_clear"] },
{ "name": "Full Clear 7-5", "types": ["full_clear"] },
{ "name": "Full Clear 8-3", "types": ["full_clear"] }
],[
{ "name": "Ace Score 5-4", "types": ["ace_score"] },
{ "name": "Ace Score 4-5", "types": ["ace_score"] },
{ "name": "Full Clear 11-5", "types": ["full_clear"] },
{ "name": "Full Clear 10-4", "types": ["full_clear"] },
{ "name": "Full Clear 9-5", "types": ["full_clear"] },
{ "name": "Full Clear 9-4", "types": ["full_clear"] },
{ "name": "Full Clear 3-1", "types": ["full_clear"] }
],[
{ "name": "Ace Score 9-1", "types": ["ace_score"] },
{ "name": "Ace Score 7-5", "types": ["ace_score"] },
{ "name": "Ace Score 9-2", "types": ["ace_score"] },
{ "name": "Ace Score 2-5", "types": ["ace_score"] },
{ "name": "Full Clear 12-4", "types": ["full_clear"] },
{ "name": "Full Clear 9-2", "types": ["full_clear"] },
{ "name": "Multlievel Score Challenge, Page 9, Challenge 4", "types": ["multilevel"] },
{ "name": "Full Clear 8-2", "types": ["full_clear"] }
],[
{ "name": "Ace Score 5-2", "types": ["ace_score"] },
{ "name": "Ace Score 2-4", "types": ["ace_score"] },
{ "name": "Ace Score 10-1", "types": ["ace_score"] },
{ "name": "Full Clear 11-4", "types": ["full_clear"] },
{ "name": "Duel of the Greats, Page 7, Challenge 1", "types": ["duels"] },
{ "name": "Duel of the Greats, Page 7, Challenge 5", "types": ["duels"] },
{ "name": "Full Clear 3-4", "types": ["full_clear"] },
{ "name": "Full Clear 6-1", "types": ["full_clear"] },
{ "name": "Full Clear 8-4", "types": ["full_clear"] }
],[
{ "name": "Ace Score 12-5", "types": ["ace_score"] },
{ "name": "Ace Score 12-4", "types": ["ace_score"] },
{ "name": "Full Clear 11-2", "types": ["full_clear"] },
{ "name": "Full Clear 10-1", "types": ["full_clear"] },
{ "name": "Duel of the Greats, Page 7, Challenge 2", "types": ["duels"] },
{ "name": "Pinball and Low Ball, Page 10, Challenge 5", "types": ["low_score"] },
{ "name": "Full Clear 5-1", "types": ["full_clear"] },
{ "name": "Full Clear 6-3", "types": ["full_clear"] }
],[
{ "name": "Ace Score 5-3", "types": ["ace_score"] },
{ "name": "Full Clear 12-1", "types": ["full_clear"] },
{ "name": "Full Clear 11-1", "types": ["full_clear"] },
{ "name": "Full Clear 10-3", "types": ["full_clear"] },
{ "name": "Duel of the Greats, Page 7, Challenge 3", "types": ["duels"] },
{ "name": "Full Clear 4-5", "types": ["full_clear"] }
],[
{ "name": "Insane Challenges, Page 12, Challenge 5", "types": ["multilevel"] },
{ "name": "Ace Score 5-1", "types": ["ace_score"] },
{ "name": "Full Clear 10-5", "types": ["full_clear"] },
{ "name": "Duel of the Greats, Page 7, Challenge 4", "types": ["duels"] },
{ "name": "Insane Challenges, Page 12, Challenge 4", "types": ["points"] }
]];
