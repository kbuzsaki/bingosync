var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[[
{ "name": "Get a 3k", "types": ["kills"] },
{ "name": "Get a 4k", "types": ["kills"] },
{ "name": "Get a 2k", "types": ["kills"] },
{ "name": "Play 15 unique ops", "types": ["play"] },
{ "name": "Kill Vigil", "types": ["bounty"] },
{ "name": "Kill Glaz", "types": ["bounty"] }
], [
{ "name": "15 kill match", "types": ["kills"] },
{ "name": "10 kill match", "types": ["kills"] },
{ "name": "0 kill win", "types": [null] },
{ "name": "Get an Ace", "types": ["kills"] },
{ "name": "Kill Kaid", "types": ["bounty"] },
{ "name": "Kill Ash", "types": ["bounty"] }
], [
{ "name": "3 assists in a match", "types": ["assists"] },
{ "name": "5 assists in a match", "types": ["assists"] },
{ "name": "7 assists in a match", "types": ["assists"] },
{ "name": "Play 10 unique ops", "types": ["play"] },
{ "name": "Kill Alibi", "types": ["bounty"] },
{ "name": "Kill Grim", "types": ["bounty"] }
], [
{ "name": "Get 3 trap kills", "types": ["trap"] },
{ "name": "Get 5 trap kills", "types": ["trap"] },
{ "name": "Play 7 unique ops", "types": ["play"] },
{ "name": "Get a drone ace", "types": ["drone"] },
{ "name": "Get 2 secondary shotgun kills", "types": ["shotgun", "second"] },
{ "name": "Get 7 trap kills", "types": ["trap"] }
], [
{ "name": "7 ar kills", "types": ["kills", "ARs"] },
{ "name": "7 smg kills", "types": ["kills", "smgs"] },
{ "name": "Kill Warden", "types": ["bounty"] },
{ "name": "Get 1 kill (End)", "types": ["end"] },
{ "name": "4 secondary kills", "types": ["second", "kills"] },
{ "name": "5 shotgun kills", "types": ["kills", "shotgun"] }
], [
{ "name": "Get 1 grim scan", "types": ["intel"] },
{ "name": "Get 2 grim scans", "types": ["intel"] },
{ "name": "Ping 15 unique operators", "types": ["pings"] },
{ "name": "Kill Blackbeard", "types": ["bounty"] },
{ "name": "2 hip fire kills (No Shotgun)", "types": ["kills"] },
{ "name": "Get 3 grim scans", "types": ["intel"] }
], [
{ "name": "1 round damageless", "types": ["damage"] },
{ "name": "2 rounds damageless", "types": ["damage"] },
{ "name": "3 rounds damageless", "types": ["damage"] },
{ "name": "Kill Cav", "types": ["bounty"] },
{ "name": "Kill Nokk", "types": ["bounty"] }
], [
{ "name": "5 ar kills", "types": ["ARs", "kills"] },
{ "name": "5 smg kills", "types": ["smg", "kills"] },
{ "name": "Ping 40 items", "types": ["pings"] },
{ "name": "Disable 3 gadgets", "types": ["disable"] },
{ "name": "3 pump shotgun kills", "types": ["shotgun", "kills"] }
], [
{ "name": "Kill 2 rappelled attackers", "types": ["kills"] },
{ "name": "3 kills while rappelled", "types": ["stance", "kills"] },
{ "name": "Ping 20 items", "types": ["pings"] },
{ "name": "Play BB and Cav", "types": ["play"] },
{ "name": "20 overall drone kills", "types": ["drone"] },
{ "name": "5 kills while rappelled", "types": ["stance", "kills"] }
], [
{ "name": "3 kills while prone", "types": ["stance", "kills"] },
{ "name": "6 kills while prone", "types": ["stance", "kills"] },
{ "name": "Burn yourself in 3 separate matches", "types": ["neg"] },
{ "name": "30 overall kills", "types": ["kills", "totalkills"] },
{ "name": "13 secondary kills", "types": ["second", "kills"] }
], [
{ "name": "Get knocked over twice", "types": ["jab"] },
{ "name": "Stun 5 people", "types": ["stun"] },
{ "name": "Get a kill while blinded", "types": ["flash"] },
{ "name": "Get both BB shields broken", "types": [null] },
{ "name": "Reach 4000 points", "types": ["score"] }
], [
{ "name": "Kill 2 shield ops", "types": ["bounty"] },
{ "name": "3 rcxd kills", "types": ["gadget"] },
{ "name": "Hop out 7 times overall", "types": ["runout"] },
{ "name": "Hop out 3 times in one round", "types": ["runout"] },
{ "name": "2 rcxd kills", "types": ["gadget"] }
], [
{ "name": "Break 25 barricades", "types": ["barricade"] },
{ "name": "Break 15 barricades", "types": ["barricade"] },
{ "name": "Ping 20 people", "types": ["intel"] },
{ "name": "Disable 7 gadgets", "types": ["disable"] },
{ "name": "Disable 5 gadgets", "types": ["disable"] },
{ "name": "Hack a twitch drone", "types": ["intel"] }
], [
{ "name": "Shoot 2 Zero/Valk cams", "types": ["intel"] },
{ "name": "Scan 10 separate people as pulse", "types": ["intel"] },
{ "name": "Kill Zophia twice", "types": ["bounty"] },
{ "name": "Kill Jager and Doc", "types": ["bounty"] },
{ "name": "5 kills with BOSG", "types": ["shotgun"] }
], [
{ "name": "Ping 12 unique operators", "types": ["pings"] },
{ "name": "Disable all ADS’s in 1 round", "types": ["burn"] },
{ "name": "Break 3 bp’s", "types": ["clear"] },
{ "name": "Disable an attacker drone (No Mute)", "types": ["util", "intel"] },
{ "name": "10000 points overall", "types": ["score"] }
], [
{ "name": "Get 5 vertical kills", "types": ["vert"] },
{ "name": "Burn yourself in 5 separate rounds", "types": ["neg"] },
{ "name": "Get 3 vertical kills", "types": ["vert"] },
{ "name": "3 drones alive in building during prep", "types": ["drone"] },
{ "name": "Get pinged 7 times", "types": ["intel"] },
{ "name": "Traverse up 10 hatches", "types": ["destruction"] }
], [
{ "name": "25 total drone kills", "types": ["drone"] },
{ "name": "Break 30 barricades", "types": ["barricade"] },
{ "name": "Open 3 walls entirely", "types": ["destruction"] },
{ "name": "3 wallbangs", "types": ["kills"] },
{ "name": "15 ar kills", "types": ["kills", "ARs"] },
{ "name": "Breach a reinforced hatch", "types": ["destruction"] }
], [
{ "name": "Destroy or capture 5 projectiles", "types": ["burn"] },
{ "name": "Shoot 1 Ying Candela", "types": ["clear"] },
{ "name": "Destroy 10 traps", "types": ["clear"] },
{ "name": "Destroy 7 traps", "types": ["clear"] },
{ "name": "3 depth charges", "types": ["util"] },
{ "name": "10 melee kills", "types": ["melee", "kills"] }
], [
{ "name": "Nade 5 people", "types": ["util"] },
{ "name": "Nade 7 people", "types": ["util"] },
{ "name": "Run out 5 separate rounds", "types": ["runout"] },
{ "name": "Shoot 3 fuze charges", "types": ["clear"] },
{ "name": "Kill Kapkan and Mira", "types": ["bounty"] },
{ "name": "Break 2 black mirrors", "types": ["clear"] }
], [
{ "name": "Shoot 3 phones", "types": ["clear"] },
{ "name": "Shoot 5 phones", "types": ["clear"] },
{ "name": "Knocked from falling (End)", "types": ["end"] },
{ "name": "Kill Twitch and Melusi", "types": ["bounty"] },
{ "name": "3 kills with a 3x", "types": ["kills"] },
{ "name": "2 kills with a 3x", "types": ["kills"] }
], [
{ "name": "Crouch for 4 rounds", "types": ["stance"] },
{ "name": "Crouch for a whole match", "types": ["stance"] },
{ "name": "Avoid 4 lion scans, or 3 dokkaebi calls", "types": ["intel"] },
{ "name": "First Blood twice", "types": ["kills"] },
{ "name": "Shoot a c4", "types": ["clear"] }
], [
{ "name": "Go from dbno to max hp 3 times", "types": ["state"] },
{ "name": "Break 3 deployables (No nades, ash, zof)", "types": ["clear"] },
{ "name": "Hack 2 twitch drones", "types": ["intel"] },
{ "name": "Remove a flash effect (Can’t be finka)", "types": ["flash"] },
{ "name": "Hipfire 5 drones", "types": ["drone"] },
{ "name": "200 passive points", "types": ["score"] }
], [
{ "name": "Impact trick 2 breaching gadgets", "types": ["clear"] },
{ "name": "6 deaths in 1 match", "types": ["death"] },
{ "name": "8 deaths in 1 match", "types": ["death"] },
{ "name": "Explode 2 melusi wubs", "types": ["clear"] },
{ "name": "Bleed out", "types": ["death", "damage"] },
{ "name": "3 sniper pistol kills", "types": ["second"] }
], [
{ "name": "Run out 7 separate rounds", "types": ["runout"] },
{ "name": "3 spawn peek kills", "types": ["spawn"] },
{ "name": "Reach the highest obtainable hp", "types": ["damage"] },
{ "name": "Break 50 gadgets", "types": ["clear"] },
{ "name": "End with -20", "types": ["neg"] },
{ "name": "40 overall kills", "types": ["kills", "totalkills"] }
], [
{ "name": "10 assists in 1 match", "types": ["assists"] },
{ "name": "Get an interro or get interro’d", "types": ["death"] },
{ "name": "2 breach charge kills", "types": ["util"] },
{ "name": "3 breach charge kills", "types": ["util"] },
{ "name": "Turn a hard wall soft", "types": ["destruction"] },
{ "name": "Impact trick 2 gadgets", "types": ["clear"] }
]];
