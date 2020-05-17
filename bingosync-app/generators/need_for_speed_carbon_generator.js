var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [[
 { "name": "Use Speedbreaker once", "types": [] } ,
 { "name": "Beat any Challenge Series event", "types": ["cs"] } ,
 { "name": "Win a Canyon Duel", "types": ["quickrace"] } ,
 { "name": "Play 3 Quick Races", "types": ["quickrace"] }
], [ { "name": "Win 3 Challenge Series events", "types": ["cs"] } ,
 { "name": "Use one Pursuit Breaker", "types": [] } ,
 { "name": "Hit 170 mph (274 km/h) in a speedtrap", "types": ["speedtrap"] } ,
 { "name": "Win a Drift event", "types": ["quickrace"] }
], [ { "name": "Hit 200 mph (322 km/h) in a speedtrap", "types": ["speedtrap"] } ,
 { "name": "Score 250,000 points in a Drift event", "types": ["drift"] } ,
 { "name": "Hit 190 mph (306 km/h) in a speedtrap", "types": ["speedtrap"] } ,
 { "name": "Hit 130 mph (209 km/h) in a speedtrap", "types": ["speedtrap"] }
], [ { "name": "Score 100,000 points in a Drift event", "types": ["drift"] } ,
 { "name": "Score 500,000 points in a Drift event", "types": ["drift"] } ,
 { "name": "Win 5 Canyon Duels", "types": ["wincanyon"] } ,
 { "name": "Play 10 Quick Races", "types": ["quickrace"] }
], [ { "name": "Win 10 Canyon Duels", "types": ["quickrace"] } ,
 { "name": "Beat 5 Challenge Series events", "types": ["cs"] } ,
 { "name": "Play 5 Sprint Races", "types": ["quickrace"] } ,
 { "name": "Win a single Career Race", "types": ["tracks"] }
], [ { "name": "Lose a race in Career Mode", "types": [] } ,
 { "name": "Win a defensive race in Career Mode", "types": ["defense"] } ,
 { "name": "Win 5 Drift events", "types": ["quickrace"] } ,
 { "name": "Disable a police vehicle in Career Freeroam", "types": ["pursuit", "takedown"] }
], [ { "name": "Escape a police pursuit while in Career Freeroam", "types": ["escape"] } ,
 { "name": "Escape a police pursuit in less than 2 minutes while in Career Freeroam", "types": ["escape"] } ,
 { "name": "Get busted in a police pursuit while in Career Freeroam", "types": ["pursuit"] } ,
 { "name": "Win a Free Roam Challenge in Career Mode", "types": ["freeroamchallenge"] }
], [ { "name": "Disable 5 police vehicles while in Career Freeroam", "types": ["pursuit", "takedown"] } ,
 { "name": "Raise the Heat on your car to Level 2 while in Career Freeroam", "types": ["pursuit", "heat"] } ,
 { "name": "Disable 10 cops in Career Freeroam", "types": ["pursuit", "takedown"] } ,
 { "name": "Play 25 Quick Races", "types": ["quickrace"] }
], [ { "name": "Have a balance of 30,000 cash in Career Mode", "types": ["cash"] } ,
 { "name": "Get a Bounty of 20,000 Cash in a pursuit while in Career Freeroam", "types": ["pursuit", "bounty"] } ,
 { "name": "Escape after an 8 minute police pursuit in Career Freeroam", "types": ["escape"] } ,
 { "name": "Escape 5 police pursuits while in Career Freeroam", "types": ["escape"] }
], [ { "name": "Win 5 races in Career Mode", "types": ["cash", "tracks"] } ,
 { "name": "Modify your car with Autosculpt", "types": [] } ,
 { "name": "Escape after a 12 minute police pursuit while in Career Freeroam", "types": ["escape"] } ,
 { "name": "Unlock 50 Quick Race tracks", "types": ["tracks"] }
], [ { "name": "Commit 6 Infractions in a single pursuit while in Career Freeroam", "types": ["pursuit"] } ,
 { "name": "Disable 20 police vehicles while in Career Freeroam", "types": ["pursuit", "takedown"] } ,
 { "name": "Sell 3 cars in Career Mode", "types": ["cars"] } ,
 { "name": "Cause 50,000 Cost to State in a single pursuit while in Career Freeroam", "types": ["pursuit", "cts"] }
], [ { "name": "Acquire 3 cars in Career Mode", "types": ["cash", "cars"] } ,
 { "name": "Get a Bounty of 50,000 in pursuit while in Career Freeroam", "types": ["pursuit", "bounty"] } ,
 { "name": "Win 5 Free Roam Challenges in Career Mode", "types": ["freeroamchallenge"] } ,
 { "name": "Beat 15 Challenge Series events", "types": ["cs"] }
], [ { "name": "Cause 100,000 Cost to State in a single pursuit while in Career Freeroam", "types": ["pursuit", "cts"] } ,
 { "name": "Ram 25 police vehicles while in Career Freroam", "types": ["pursuit", "ram"] } ,
 { "name": "Have a balance of 50,000 cash in Career Mode", "types": ["cash"] } ,
 { "name": "Play 50 Quick Races", "types": ["quickrace"] }
], [ { "name": "Avoid 10 police roadblocks while in Career Freeroam", "types": ["pursuit", "roadblocks"] } ,
 { "name": "Acquire 5 cars in Career Mode", "types": ["cash", "cars"] } ,
 { "name": "Sell 6 cars in Career Mode", "types": ["cars"] } ,
 { "name": "Ram 50 police vehicles in a single police pursuit while in Career Freeroam", "types": ["pursuit", "ram"] }
], [ { "name": "Unlock 8 cars", "types": ["unlockcars"] } ,
 { "name": "Avoid 12 spike strips in a single police pursuit", "types": ["pursuit", "spikes"] } ,
 { "name": "Win 10 Free Roam Challenges in Career Mode", "types": ["freeroamchallenge"] } ,
 { "name": "Disable 50 police vehicles while in Career Freeroam", "types": ["pursuit", "takedown"] }
], [ { "name": "Avoid 20 police roadblocks while in Career Freeroam", "types": ["pursuit", "roadblocks"] } ,
 { "name": "Escape 15 police pursuits while in Career Freeroam", "types": ["escape"] } ,
 { "name": "Have a balance of 100,000 Cash in Career Mode", "types": ["cash"] } ,
 { "name": "Cause 200,000 Cost to State in a single pursuit while in Career Freeroam", "types": ["pursuit", "cts"] }
], [ { "name": "Immobilise a police Rhino while in Career Freeroam", "types": ["pursuit"] } ,
 { "name": "Raise the Heat on your car to Level 4 while in Career Freeroam", "types": ["pursuit", "heat"] } ,
 { "name": "Complete all Bronze Challenge Series events", "types": ["cs"] } ,
 { "name": "Acquire 8 cars in Career Mode", "types": ["cash", "cars"] }
], [ { "name": "Win 15 races in Career Mode", "types": ["cash", "tracks"] } ,
 { "name": "Avoid a spike strip in a police pursuit while in Career Freeroam", "types": ["pursuit", "spikes"] } ,
 { "name": "Conquer all Downtown Palmont tracks in Career Mode", "types": ["alltracks"] } ,
 { "name": "Avoid 5 spike strips in a police pursuit while in Career Freeroam", "types": ["pursuit", "spikes"] }
], [ { "name": "Win 20 Defensive Races in Career Mode", "types": ["defense"] } ,
 { "name": "Win 25 races in Career Mode", "types": ["cash", "tracks"] } ,
 { "name": "Escape 25 police pursuits in Career Freeroam", "types": ["escape"] } ,
 { "name": "Unlock 12 cars in Career Mode", "types": ["unlockcars"] }
], [ { "name": "Fill your Garage in Career Mode", "types": ["garage"] } ,
 { "name": "Avoid 10 police spike strips while in Career Freeroam", "types": ["pursuit", "spikes"] } ,
 { "name": "Ram 100 police vehicles in a single pursuit while in Career Freeroam", "types": ["pursuit", "ram"] } ,
 { "name": "Fill your Career Garage with only Tuner Cars", "types": ["garage"] }
], [ { "name": "Fill your Career Garage with only Muscle Cars", "types": ["garage"] } ,
 { "name": "Fill your Garage with only Exotic Cars", "types": ["garage"] } ,
 { "name": "Win 25 Free Roam Challenges in Career Mode", "types": ["freeroamchallenge"] } ,
 { "name": "Complete 25 Challenge Series events", "types": ["cs"] }
], [ { "name": "Accumulate a 20,000 fine while in Career Freeroam", "types": ["pursuit", "fine"] } ,
 { "name": "Unlock all the Safe Houses in the game", "types": [] } ,
 { "name": "Complete all Silver Challenge Series events", "types": ["cs"] } ,
 { "name": "Have a balance of 500,000 cash in Career Mode", "types": ["cash"] }
], [ { "name": "Hire 6 different crew members during the Career mode", "types": [] } ,
 { "name": "Unlock 85 Quick Races", "types": ["tracks"] } ,
 { "name": "Raise the Heat on your car to Level 5 while in Career Freeroam", "types": ["pursuit", "heat"] } ,
 { "name": "Win 50 races in Career Mode", "types": ["cash", "tracks"] }
], [ { "name": "Finish Career Mode", "types": [] } ,
 { "name": "Unlock 33 cars", "types": ["unlockcars"] } ,
 { "name": "Have a balance of 1,000,000 cash in Career Mode", "types": ["cash"] } ,
 { "name": "Win 50 Free Roam Challenges in Career Mode", "types": ["freeroamchallenge"] }
], [ { "name": "Complete all Gold Challenge Series events", "types": ["cs"] } ,
 { "name": "Win 65 races in Career Mode", "types": ["cash", "tracks"] } ,
 { "name": "Conquer all the tracks in Career mode", "types": [] } ,
 { "name": "Accumulate a fine of 50,000 while in Career Freeroam", "types": ["pursuit", "fine"] }
]];
