var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[[
{ "name": "Throw your best Pro/Fortified WHILST ON 2 LOSSES", "types": ["combine","survivor"] },
{ "name": "Open any reward from your mailbox", "types": ["packs"] },
{ "name": "Create a Catalogue or Silver Star S8+ Pro", "types": ["training","combine"] },
{ "name": "Search any teams Global Rank via Team Connector", "types": ["team"] },
{ "name": "Claim 100 draft picks from any card packs", "types": ["matches","picks"] }
],[
{ "name": "Use 3 Supermoves", "types": ["Supermove","matches"] },
{ "name": "Go from 0 to 100 matches on any lvl 0 card", "types": ["Training","matches"] },
{ "name": "Use 3 emotes in the same survivor round", "types": ["custom","survivor"] },
{ "name": "Purchase Grab bag / Mixed Bag 1500SuperCoins Store", "types": ["SC","packs"] },
{ "name": "Remove all equipment that have all matches trained", "types": ["custom"] }
],[
{ "name": "Trigger yours / opponents Reversal", "types": ["matches","ability"] },
{ "name": "Trigger yours / opponents Chain", "types": ["matches","ability"] },
{ "name": "Trigger yours / opponents Defend", "types": ["matches","ability"] },
{ "name": "Trigger yours / opponents Inspire", "types": ["matches","ability"] },
{ "name": "Trigger yours / opponents Assist", "types": ["matches","ability"] },
{ "name": "Trigger yours / opponents Overrun", "types": ["matches","ability"] }
],[
{ "name": "Perfect Pro any top 3 rarity card", "types": ["combine","Training"] },
{ "name": "Finish your Daily Challenges", "types": ["custom"] },
{ "name": "Type the Authentication Code Incorrectly", "types": ["custom"] },
{ "name": "Spend 220 SC for a lowest tier pair and pro them", "types": ["SC","packs","combine"] },
{ "name": "Force close the game to cancel a losing bout", "types": ["matches"] }
],[
{ "name": "Play 5 MITB", "types": ["SC","matches"] },
{ "name": "Open any Ticket Pack", "types": ["Packs"] },
{ "name": "Play the free special pack OR watch an ad for a free pack!", "types": ["packs"] },
{ "name": "Get any draft board to its final card", "types": ["picks"] },
{ "name": "Change your cardback", "types": ["custom"] },
],[
{ "name": "10 Undefeated Wild Modes", "types": ["matches"] },
{ "name": "Go from 0 to 100 matches on any lvl 100 card", "types": ["matches"] },
{ "name": "Type the Authentication Code into the game", "types": ["custom"] },
{ "name": "Score 50 SC in 1 bout", "types": ["SC","matches"] },
{ "name": "change your champion image", "types": ["custom"] },
{ "name": "change the image of any Top 8 card", "types": ["custom"] }
],[
{ "name": "Earn 100 SC or more in the same PvP mode", "types": ["matches","PvP","SC"] },
{ "name": "Earn 500 SC from MiTB or PvP Collectively", "types": ["matches","PvP","SC"] },
{ "name": "Recieve a WELL PLAYED from your team chat", "types": ["team"] },
{ "name": "Score less than 20 SC in a MiTB", "types": ["SC","matches"] },
{ "name": "match your champion to any team members champion", "types": ["custom"] }
],[
{ "name": "KO anyone out of a survivor by using your SUPERMOVE", "types": ["survivor","supermove"] },
{ "name": "Pull any S8+ Title Boosted Superstar", "types": ["picks"] },
{ "name": "Fail an advert and return to the title screen", "types": ["matches"] },
{ "name": "Equip a character with the same tier equipment", "types": ["custom"] },
{ "name": "Start a King of the Ring and use 0 energy until eliminated", "types": ["matches"] }
],[
{ "name": "Have your team deck contain 3 cards from your Top 8", "types": ["custom"] },
{ "name": "Start a Bio-Mech Fusion and upgrade it to Forged tier", "types": ["picks","packs"] },
{ "name": "Change your profile badge", "types": ["custom"] },
{ "name": "Build a new supermove and use it immedietely", "types": ["custom"] },
{ "name": "Use both support cards in a MiTB match", "types": ["SC","matches"] }
],[
{ "name": "Pull 5 different tiers of the same Manager/Support", "types": ["picks"] },
{ "name": "Dust 8 packs of 25 picks from the SC", "types": ["picks","packs","SC"] },
{ "name": "Train a Bio card with a card from your top 3 rarity", "types": ["training"] },
{ "name": "Play 1 of each of the 5 PvP modes in succession", "types": ["matches"] }
],[
{ "name": "EDP TIER PULL", "types": ["picks","packs"] },
{ "name": "Use FILL ALL to max everyone's energy in 1 go!", "types": ["custom"] },
{ "name": "Gain a pack via offerwall", "types": ["custom","packs"] },
{ "name": "Create a deck where all cards share the same tier", "types": ["custom"] }
],[
{ "name": "Draft Board Tier Pull", "types": ["picks"] },
{ "name": "Win 10 Consecutive PvP matches without leaving the PvP mode", "types": ["PvP","SC","matches"] },
{ "name": "Receive an in game message and follow them", "types": ["custom"] },
{ "name": "Scan an already redeemed QR code", "types": ["custom","packs"] }
],[
{ "name": "Pull an Equipment from the board", "types": ["picks"] },
{ "name": "Go from 0 to 100 matches on any lvl 0 Pro", "types": ["combine","training","matches"] },
{ "name": "Delete a lvl 100 card", "types": ["training}"] },
{ "name": "Have a deck that boosts all 4 stats NO SECOND WIND", "types": ["custom"] }
],[
{ "name": "Participate in a TBG / TSG", "types": ["team"] },
{ "name": "Play 50 matches collectively across all game modes", types: ["matches"] },
{ "name": "Get 3 of the same tier survivors in a row", types: ["survivor"] },
{ "name": "Share the same Manager as your opponent", "types": ["custom"] },
{ "name": "Pull the same card in the same tier back to back", "types": ["picks"] }
],[
{ "name": "Go from 0 to 100 matches on any Max level Pro/Fortified", types: ["combine","training","mathes"] },
{ "name": "Pick 10 energy cards from the draft board", "types": ["picks"] },
{ "name": "Make 10 silver star or catalogue pros in a row of any tiers", "types": ["combine"] },
{ "name": "be stuck on 'Waiting for Network' for 3+ seconds straight", "types": ["custom"] }
],[
{ "name": "Top 4 in Survivor", "types": ["survivor"] },
{ "name": "Lose 0-3 in a Wild Mode", "types": ["matches"] },
{ "name": "Get in 3 different survivor Lobbies", "types": ["survivor"] },
{ "name": "Silver star 2 lvl 0 match 100 cards of any tier", "types": ["training","combine"] },
{ "name": "See your strongest RR card in the final 3 cards", "types": ["matches"] }
],[
{ "name": "10 additional bouts via watching ads", "types": ["matches"] },
{ "name": "Play 20 matches of the same game mode", "types": ["matches"] },
{ "name": "Win a 2-2 Survivor Tie", "types": ["survivor"] },
{ "name": "Lose a 2-2 Survivor Tie", "types": ["survivor"] }
],[
{ "name": "Purchase a Bronze/Silver/GoldORPlat pack in the SC Store", "types": ["Packs","SC"] },
{ "name": "Fill the Dust Meter 5 times", "types": ["picks","SC",] },
{ "name": "Reset the Draft Board 2 times in 2 picks", "types": ["picks"] },
{ "name": "Fully autoplay an entire round of survivor", "types": ["survivor"] }
],[
{ "name": "Get in a male survivor lobby of each 3 tiers", "types": ["survivor"] },
{ "name": "Get in a female survivor lobby of each 3 tiers", "types": ["survivor"] },
{ "name": "Gain a pack via Offerwall", "types": ["custom"] },
{ "name": "Create an F3 card in survivor", "types": ["combine","survivor"] }
],[
{ "name": "Pull a 1 stat and 2 stat manager that share the same tier S8+", "types": ["matches","picks"] },
{ "name": "Reach at least the Finals in King of the Ring", "types": ["custom","matches"] },
{ "name": "Pull a 1 stat and 2 stat Support that share the same tier S8+", "types": ["matches","picks"] },
{ "name": "Get the bye round", "types": ["Survivor"] }
],[
{ "name": "Get 500+ points within 5 PvP bouts", "types": ["PvP"] },
{ "name": "Earn 500 / 1K if GOLD Battle Pass Points", "types": ["matches"] },
{ "name": "Train any S7 card to lvl 100 and then use it to train an S8+ card", "types": ["training"] },
{ "name": "Fail to have ad bouts show up 5 times in a row", "types": ["matches"] },
{ "name": "Have the day reset whilst you are playing", "types": ["custom"] }
],[
{ "name": "Open any pack that is featured in the Battle Pass", "types": ["packs"] },
{ "name": "Have 3 different tiers appear for your 3 wild opponents", "types": ["matches"] },
{ "name": "Tie any match in any game mode", "types": ["matches"] },
{ "name": "See your strongest RR card in the starting 3 cards", types: ["matches"] }
],[
{ "name": "Train a Male card using ONLY males", "types": ["training"] },
{ "name": "Train a Female card using ONLY Females", "types": ["training"] },
{ "name": "Train a Manager card using ONLY Managers", "types": ["training"] },
{ "name": "Train a Support card using ONLY Supports", "types": ["training"] }
],[
{ "name": "Pull any Season 8 or higher Second Wind", "types": ["picks"] },
{ "name": "Have 2 different procs go off at the same time", "types": ["ability"] },
{ "name": "Get 4 credits via Login or Free Packs within 5 minutes", "Types": ["packs"] },
{ "name": "Have the same ability go off twice in a row", "types": ["ability"] }
],[
{ "name": "Get in all 6 possible survivor lobbies", "types": ["survivor"] },
{ "name": "Earn Battle Points in 10 consecutive matches", "types": ["matches"] },
{ "name": "Fill the dust meter by dusting an EDP pull", "types": ["matches","packs","picks"] },
{ "name": "Earn 1K+ SC between all game modes", "types": ["SC","matches"] }
]];
