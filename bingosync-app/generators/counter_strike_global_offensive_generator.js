var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [[
{ "name": "Ace clutch", "types": ["clutch"] },
{ "name": "Knife/Zues kill", "types": ["knife"] },
{ "name": "No-scope clutch", "types": ["clutch"] },
{ "name": "40 kills", "types": ["kills"] },
{ "name": "35 kills", "types": ["kills"] }
],[
{ "name": "Teammate with terrible mic", "types": ["random"] },
{ "name": "Player gets kicked", "types": ["random"] },
{ "name": "AFK/Leaver", "types": ["random"] },
{ "name": "Player gets banned", "types": ["random"] },
{ "name": "Awkward reload face-off", "types": ["fail"] }
],[
{ "name": "Molotov multikill", "types": ["grenade"] },
{ "name": "30 kills", "types": ["kills"] },
{ "name": "Ace", "types": ["multikill"] },
{ "name": "Win a knife fight", "types": ["knife"] }
],[
{ "name": "10 kills with enemy unique weapon", "types": ["enemy"] },
{ "name": "Succesful spray transfer", "types": ["skill"] },
{ "name": "20 kills by half", "types": ["half"] },
{ "name": "Collateral kill", "types": ["luck"] }
],[
{ "name": "4k", "types": ["multikill"] },
{ "name": "8 no-scope kills", "types": ["ns"] },
{ "name": "Finish game with most kills", "types": ["end"] },
{ "name": "Finish game wtih most kills on team", "types": ["end"] }
],[
{ "name": "10 kills with enemy weapon", "types": ["enemy"] },
{ "name": "Kill enemy through a teammate", "types": ["skill"] },
{ "name": "2 or more kills after round end", "types": ["save"] },
{ "name": "15 kills by half", "types": ["half"] }
],[
{ "name": "20 kills", "types": ["kills"] },
{ "name": "Land a hard jump", "types": ["jump"] },
{ "name": "5 kills with enemy weapon", "types": ["enemy"] },
{ "name": "Kill 5 players trying to plant", "types": ["plant"] }
],[
{ "name": "Win a round from bomb explosion", "types": ["plant"] },
{ "name": "Win a round from timer expiring", "types": ["plant"] },
{ "name": "Bomb defusal with less than a second left", "types": ["plant"] },
{ "name": "Kill 3 players trying to plant", "types": ["plant"] }
],[
{ "name": "1v3 clutch", "types": ["clutch"] },
{ "name": "Kill with a molotov", "types": ["grenade"] },
{ "name": "300 utility damage", "types": ["utility"] },
{ "name": "15 headshot kills", "types": ["hs"] }
],[
{ "name": "Accidental self flash", "types": ["fail"] },
{ "name": "Accidental self nade", "types": ["fail"] },
{ "name": "Fail an easy jump", "types": ["fail"] },
{ "name": "Bomb forgotten", "types": ["fail"] }
],[
{ "name": "Finish the game with most assists", "types": ["end"] },
{ "name": "10 kills by half", "types": ["half"] },
{ "name": "10 headshot kills", "types": ["hs"] },
{ "name": "15 kills with a rifle", "types": ["rifle"] },
{ "name": "5 no-scope kills", "types": ["ns"] }
],[
{ "name": "Finish the game with least deaths", "types": ["end"] },
{ "name": "Finish the game with most deaths", "types": ["end"] },
{ "name": "Most kills by the half", "types": ["half"] },
{ "name": "Most assists by the half", "types": ["half"] }
],[
{ "name": "Get killed trying to save", "types": ["save"] },
{ "name": "'We're not gonna talk about that' moment", "types": ["fail"] },
{ "name": "Wrong bombsite", "types": ["fail"] }
],[
{ "name": "Succesfully save an awp", "types": ["save"] },
{ "name": "Finish the game with positive K/D", "types": ["end"] },
{ "name": "25 kills", "types": ["kills"] },
{ "name": "100 adr round 15 or later", "types": ["adr"] }
],[
{ "name": "Kill enemy with their own gun", "types": ["enemy"] },
{ "name": "1v2 clutch", "types": ["clutch"] },
{ "name": "15 kills", "types": ["kills"] },
{ "name": "10 kills with a sniper", "types": ["sniper"] },
{ "name": "Succesfully save a rifle", "types": ["save"] }
],[
{ "name": "Kill a flashed enemy", "types": ["flash"] },
{ "name": "Kill a player trying to save", "types": ["save"] },
{ "name": "One deag (not really though)", "types": ["fail"] }
],[
{ "name": "Kill while flashed", "types": ["flash"] },
{ "name": "One deag", "types": ["skill"] },
{ "name": "10 effective flashes", "types": ["utility"] }
],[
{ "name": "Accidental team kill", "types": ["team"] },
{ "name": "Ninja plant", "types": ["ninja"] },
{ "name": "Defuse without site control", "types": ["ninja"] }
],[
{ "name": "3k", "types": ["multikill"] },
{ "name": "Kill with HE grenade", "types": ["grenade"] },
{ "name": "Direct impact with a grenade", "types": ["grenade"] },
{ "name": "5 kills with enemy unique weapon", "types": ["enemy"] }
],[
{ "name": "5 kills with a scoped weapon", "types": ["scope"] },
{ "name": "5 kills with heavy weapon", "types": ["heavy"] },
{ "name": "5 kills with a pistol", "types": ["pistol"] },
{ "name": "5 kills with a sniper", "types": ["sniper"] },
{ "name": "3 no-scope kills", "types": ["ns"] },
{ "name": "5 headshot kills", "types": ["hs"] }
],[
{ "name": "20 kills with a rifle", "types": ["rifle"] },
{ "name": "15 kills with a pistol", "types": ["pistol"] },
{ "name": "15 effective flashes", "types": ["utility"] },
{ "name": "150 utility damage", "types": ["utility"] }
],[
{ "name": "10 kills with a smg", "types": ["smg"] },
{ "name": "10 kills with heavy weapon", "types": ["heavy"] },
{ "name": "10 kills with a pistol", "types": ["pistol"] },
{ "name": "10 kills with scoped weapon", "types": ["scope"] }
],[
{ "name": "10 kills with a rifle", "types": ["rifle"] },
{ "name": "5 kills with a smg", "types": ["smg"] },
{ "name": "50 utility damage", "types": ["utility"] },
{ "name": "5 effective flashes", "types": ["utility"] },
{ "name": "5 assists", "types": ["assists"] }
],[
{ "name": "Kill through smoke", "types": ["skill"] },
{ "name": "Killed through smoke", "types": ["fail"] },
{ "name": "Wallbang kill", "types": ["skill"] },
{ "name": "COD reload", "types": ["fail"] }
],[
{ "name": "Get team flashed", "types": ["team"] },
{ "name": "Accidentally flash teammate", "types": ["team"] },
{ "name": "Round start team knife", "types": ["team"] },
{ "name": "Bad/wrong callout", "types": ["team"] }
]];
