var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[[
{"name": "Feel like the scum of the earth", "types": ["Item", "Ruins"]},
{"name": "Decide not to steal candy", "types": ["Item", "Ruins"]},
{"name": "Obtain the bow and toy knife", "types": ["Item", "Ruins"]},
{"name": "Kill Tori with a stick", "types": ["Ruins"]}
], [
{"name": "Check out the snow sculptures", "types": ["Snowdin"]},
{"name": "Check on two mice", "types": ["Mice"]},
{"name": "Steal the key", "types": ["CORE", "Key"]},
{"name": "Kill Temmie", "types": ["Waterfall", "Temmie"]}
], [
{"name": "10 unique encounters", "types": ["Encounters"]},
{"name": "Kill Jerry", "types": ["Snowdin"]},
{"name": "Obtain the tutu", "types": ["Waterfall"]},
{"name": "Get the free xp message", "types": ["Waterfall"]},
{"name": "Im all out of vacation days", "types": ["CORE", "Shop"]}
], [
{"name": "Take just one piece of the snowman", "types": ["Item", "Snowdin"]},
{"name": "Take 2 snow pieces", "types": ["Snowdin", "Item"]},
{"name": "Kill the snowman", "types": ["Snowdin", "Item"]},
{"name": "Eat snow in WF, HL, and Judge Hall", "types": ["Heal"]},
{"name": "Spare the snowman", "types": ["Snowdin"]}
], [
{"name": "Where are the knives?", "types": ["Ruins"]},
{"name": "Climb onto grillbys counter", "types": ["Snowdin", "Grillby"]},
{"name": "It's me, Chara message", "types": ["Text"]},
{"name": "Fill your box", "types": ["Item"]}
], [
{"name": "Gold in the snow poff", "types": ["Snowdin"]},
{"name": "Pick up the frying pan", "types": ["Hotlands"]},
{"name": "Sans says you're going to have a bad time", "types": ["Snowdin"]},
{"name": "Obtain 30 items", "types": ["Item"]}
], [
{"name": "Obtain 15 items", "types": ["Item"]},
{"name": "Purchase one of everything from Gerson", "types": ["Waterfall", "Shop"]},
{"name": "Reach 1.75k gold", "types": ["Gold"]},
{"name": "80 total encounters", "types": ["Encounters"]}
], [
{"name": "Obtain 50 items", "types": ["Item"]},
{"name": "Try and take the artifact", "types": ["Waterfall"]},
{"name": "Beat up the trash dummy", "types": ["Waterfall"]},
{"name": "Don't take the elevator in CORE", "types": ["CORE"]}
], [
{"name": "Kill Dogamy first", "types": ["Snowdin"]},
{"name": "Find 2 Cameras in Snowdin", "types": ["Cameras", "Snowdin"]},
{"name": "Find 4 Cameras in Snowdin", "types": ["Cameras", "Snowdin"]},
{"name": "Kill Dogaressa first", "types": ["Hotlands"]}
], [
{"name": "Get the text I couldn't stop laughing", "types": ["Hotlands"]},
{"name": "Spare the training dummy", "types": ["Spare", "Ruins"]},
{"name": "60 total encounters", "types": ["Encounters"]},
{"name": "Threaten Gerson and Burgerpants", "types": ["CORE", "Waterfall", "Shop"]}
], [
{"name": "Abandoned quiche", "types": ["Items"]},
{"name": "Enter the pink house", "types": ["Waterfall"]},
{"name": "Ride with the riverperson", "types": ["Hotlands"]},
{"name": "Leave Ruins with at least 30 G", "types": ["Ruins", "Gold"]}
], [
{"name": "Spare 10 enemies", "types": ["Spare"]},
{"name": "Obtain 70 items", "types": ["Items"]},
{"name": "Hit a quad hit", "types": ["misc"]},
{"name": "Stop to smell the flowers", "types": ["Hotlands"]}
], [
{"name": "Fall in a pit 15 times", "types": ["Ruins"]},
{"name": "Kill Glyde", "types": ["Snowdin"]},
{"name": "Its me, Chara message twice", "types": ["Text", "Ruins", "NH", "Hotlands"]},
{"name": "Spare 15 enemies", "types": ["Spare"]}
], [
{"name": "Its just here to complete the look message", "types": ["Hotlands"]},
{"name": "Get 3 Dog Salads", "types": ["Item", "Waterfall"]},
{"name": "Kill Undyne", "types": ["Undyne", "Waterfall"]},
{"name": "Make Temmie say You Will Regret This", "types": ["Item", "Waterfall"]}
], [
{"name": "Go through 3 muffet attacks", "types": ["Hotlands", "Muffet"]},
{"name": "Sleep after killing toriel", "types": ["Ruins"]},
{"name": "No chocolate", "types": ["NH", "Text"]},
{"name": "Knock 3 times on the knocking door", "types": ["Snowdin"]}
], [
{"name": "Kill Muffet", "types": ["Muffet", "Hotlands"]},
{"name": "Not worth talking to", "types": ["Ruins"]},
{"name": "Look at the word search for 5 seconds", "types": ["Snowdin"]},
{"name": "Fall in a pit 10 times", "types": ["Ruins"]}
], [
{"name": "Kill Mettaton NEO", "types": ["CORE"]},
{"name": "90 encounters", "types": ["Encounters"]},
{"name": "Spare 5 enemies", "types": ["Spare"]},
{"name": "Try to go through the Fire Exit", "types": ["Grillby", "Snowdin"]}
], [
{"name": "Get Purple flag in Ball", "types": ["Ball", "Snowdin"]},
{"name": "Get Yellow flag in Ball", "types": ["Ball", "Snowdin"]},
{"name": "Get Orange flag in Ball", "types": ["Ball", "Snowdin"]},
{"name": "35 unique encounters", "types": ["Encounters"]},
{"name": "Get Red flag in Ball", "types": ["Snowdin", "Ball"]}
], [
{"name": "Take both Astronaut Food's", "types": ["Item", "Waterfall"]},
{"name": "Take the Instant Noodles", "types": ["Item", "Hotlands"]},
{"name": "Throw away the Burnt Pan", "types": ["Item", "Hotlands"]},
{"name": "Fill inventory with junk food", "types": ["Item", "CORE"]}
], [
{"name": "Enter the pink ghost house", "types": ["Waterfall", "Key"]},
{"name": "20 unique encounters", "types": ["Encounters"]},
{"name": "Equip the ballerina outfit", "types": ["Item", "Waterfall"]},
{"name": "Theyre better dry", "types": ["Heal", "sans"]}
], [
{"name": "Reach 2 hp", "types": ["Antiheal"]},
{"name": "Spare 20 enemies", "types": ["Spare"]},
{"name": "Have a concert with shyren", "types": ["Waterfall", "Encounter"]},
{"name": "Get Light Blue flag in Ball", "types": ["Ball", "Snowdin"]}
], [
{"name": "Check on three Mice", "types": ["Mice"]},
{"name": "One heal during sans", "types": ["sans", "Antiheal"]},
{"name": "Its a carboard cutout", "types": ["Snowdin"]},
{"name": "Find 6 snowdin Cameras", "types": ["Cameras", "Snowdin"]}
], [
{"name": "Obtain Knife and Locket", "types": ["Item", "NH"]},
{"name": "No heal for 2 sections", "types": ["Antiheal"]},
{"name": "Clear the warriors path", "types": ["CORE", "Encounter"]},
{"name": "Skip the warriors path", "types": ["CORE"]}
], [
{"name": "No heal for 3 sections", "types": ["Antiheal"]},
{"name": "Find 8 snowdin cameras", "types": ["Snowdin", "Cameras"]},
{"name": "Kill sans", "types": ["sans"]},
{"name": "Erase", "types": ["end"]}
], [
{"name": "Get dunked on", "types": ["sans"]},
{"name": "Looks comfortable", "types": ["end", "Text"]},
{"name": "Max HP at sans break", "types": ["Heal", "sans"]},
{"name": "No hit first sans attack", "types": ["sans"]}
]];
