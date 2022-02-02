bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "End with 10 Coins"
    },
    {
        "name": "End with 0 Coins"
    },
    {
        "name": "End with 1 Coin"
    },
    {
        "name": "End with 2 Coins"
    },
    {
        "name": "End with 3 Coins"
    },
    {
        "name": "End with 4 Coins"
    },
    {
        "name": "End with 5 Coins"
    },
    {
        "name": "End with 6 Coins"
    },
    {
        "name": "End with 7 Coins"
    },
    {
        "name": "End with 8 Coins"
    },
    {
        "name": "End with 9 Coins"
    },
    {
        "name": "Race as Mario"
    },
    {
        "name": "Race as Luigi"
    },
    {
        "name": "Race as Peach"
    },
    {
        "name": "Race as Daisy"
    },
    {
        "name": "Race as Rosalina"
    },
    {
        "name": "Race as Tanooki Mario"
    },
    {
        "name": "Race as Cat Peach"
    },
    {
        "name": "Race as Yoshi"
    },
    {
        "name": "Race as Light-Blue Yoshi"
    },
    {
        "name": "Race as Black Yoshi"
    },
    {
        "name": "Race as Red Yoshi"
    },
    {
        "name": "Race as Yellow Yoshi"
    },
    {
        "name": "Race as White Yoshi"
    },
    {
        "name": "Race as Blue Yoshi"
    },
    {
        "name": "Race as Pink Yoshi"
    },
    {
        "name": "Race as Orange Yoshi"
    },
    {
        "name": "Race as Toad"
    },
    {
        "name": "Race as Koopa Troopa"
    },
    {
        "name": "Race as Shy Guy"
    },
    {
        "name": "Race as Light-Blue Shy Guy"
    },
    {
        "name": "Race as Black Shy Guy"
    },
    {
        "name": "Race as Green Shy Guy"
    },
    {
        "name": "Race as Yellow Shy Guy"
    },
    {
        "name": "Race as White Shy Guy"
    },
    {
        "name": "Race as Blue Shy Guy"
    },
    {
        "name": "Race as Pink Shy Guy"
    },
    {
        "name": "Race as Orange Shy Guy"
    },
    {
        "name": "Race as Lakitu"
    },
    {
        "name": "Race as Toadette"
    },
    {
        "name": "Race as King Boo"
    },
    {
        "name": "Race as Baby Mario"
    },
    {
        "name": "Race as Baby Luigi"
    },
    {
        "name": "Race as Baby Peach"
    },
    {
        "name": "Race as Baby Daisy"
    },
    {
        "name": "Race as Baby Rosalina"
    },
    {
        "name": "Race as Gold Mario"
    },
    {
        "name": "Race as Metal Mario"
    },
    {
        "name": "Race as Pink Gold Peach"
    },
    {
        "name": "Race as Wario"
    },
    {
        "name": "Race as Waluigi"
    },
    {
        "name": "Race as Donkey Kong"
    },
    {
        "name": "Race as Bowser"
    },
    {
        "name": "Race as Dry Bones"
    },
    {
        "name": "Race as Bowser Jr."
    },
    {
        "name": "Race as Dry Bowser"
    },
    {
        "name": "Race as Lemmy"
    },
    {
        "name": "Race as Larry"
    },
    {
        "name": "Race as Wendy"
    },
    {
        "name": "Race as Ludwig"
    },
    {
        "name": "Race as Iggy"
    },
    {
        "name": "Race as Roy"
    },
    {
        "name": "Race as Morton"
    },
    {
        "name": "Race as Orange Inkling Girl"
    },
    {
        "name": "Race as Green Inkling Girl"
    },
    {
        "name": "Race as Pink Inkling Girl"
    },
    {
        "name": "Race as Blue Inkling Boy"
    },
    {
        "name": "Race as Purple Inkling Boy"
    },
    {
        "name": "Race as Cyan Inkling Boy"
    },
    {
        "name": "Race as Link Hero of the Skies"
    },
    {
        "name": "Race as Link Hero of the Wild"
    },
    {
        "name": "Race as Villager Boy"
    },
    {
        "name": "Race as Villager Girl"
    },
    {
        "name": "Race as Isabelle"
    },
    {
        "name": "Race as Mii Character"
    },
    {
        "name": "Get Top 5 with Mario"
    },
    {
        "name": "Get Top 5 with Luigi"
    },
    {
        "name": "Get Top 5 with Peach"
    },
    {
        "name": "Get Top 5 with Daisy"
    },
    {
        "name": "Get Top 5 with Rosalina"
    },
    {
        "name": "Get Top 5 with Tanooki Mario"
    },
    {
        "name": "Get Top 5 with Cat Peach"
    },
    {
        "name": "Get Top 5 with Yoshi"
    },
    {
        "name": "Get Top 5 with Light-Blue Yoshi"
    },
    {
        "name": "Get Top 5 with Black Yoshi"
    },
    {
        "name": "Get Top 5 with Red Yoshi"
    },
    {
        "name": "Get Top 5 with Yellow Yoshi"
    },
    {
        "name": "Get Top 5 with White Yoshi"
    },
    {
        "name": "Get Top 5 with Blue Yoshi"
    },
    {
        "name": "Get Top 5 with Pink Yoshi"
    },
    {
        "name": "Get Top 5 with Orange Yoshi"
    },
    {
        "name": "Get Top 5 with Toad"
    },
    {
        "name": "Get Top 5 with Koopa Troopa"
    },
    {
        "name": "Get Top 5 with Shy Guy"
    },
    {
        "name": "Get Top 5 with Light-Blue Shy Guy"
    },
    {
        "name": "Get Top 5 with Black Shy Guy"
    },
    {
        "name": "Get Top 5 with Green Shy Guy"
    },
    {
        "name": "Get Top 5 with Yellow Shy Guy"
    },
    {
        "name": "Get Top 5 with White Shy Guy"
    },
    {
        "name": "Get Top 5 with Blue Shy Guy"
    },
    {
        "name": "Get Top 5 with Pink Shy Guy"
    },
    {
        "name": "Get Top 5 with Orange Shy Guy"
    },
    {
        "name": "Get Top 5 with Lakitu"
    },
    {
        "name": "Get Top 5 with Toadette"
    },
    {
        "name": "Get Top 5 with King Boo"
    },
    {
        "name": "Get Top 5 with Baby Mario"
    },
    {
        "name": "Get Top 5 with Baby Luigi"
    },
    {
        "name": "Get Top 5 with Baby Peach"
    },
    {
        "name": "Get Top 5 with Baby Daisy"
    },
    {
        "name": "Get Top 5 with Baby Rosalina"
    },
    {
        "name": "Get Top 5 with Gold Mario"
    },
    {
        "name": "Get Top 5 with Metal Mario"
    },
    {
        "name": "Get Top 5 with Pink Gold Peach"
    },
    {
        "name": "Get Top 5 with Wario"
    },
    {
        "name": "Get Top 5 with Waluigi"
    },
    {
        "name": "Get Top 5 with Donkey Kong"
    },
    {
        "name": "Get Top 5 with Bowser"
    },
    {
        "name": "Get Top 5 with Dry Bones"
    },
    {
        "name": "Get Top 5 with Bowser Jr."
    },
    {
        "name": "Get Top 5 with Dry Bowser"
    },
    {
        "name": "Get Top 5 with Lemmy"
    },
    {
        "name": "Get Top 5 with Larry"
    },
    {
        "name": "Get Top 5 with Wendy"
    },
    {
        "name": "Get Top 5 with Ludwig"
    },
    {
        "name": "Get Top 5 with Iggy"
    },
    {
        "name": "Get Top 5 with Roy"
    },
    {
        "name": "Get Top 5 with Morton"
    },
    {
        "name": "Get Top 5 with Orange Inkling Girl"
    },
    {
        "name": "Get Top 5 with Green Inkling Girl"
    },
    {
        "name": "Get Top 5 with Pink Inkling Girl"
    },
    {
        "name": "Get Top 5 with Blue Inkling Boy"
    },
    {
        "name": "Get Top 5 with Purple Inkling Boy"
    },
    {
        "name": "Get Top 5 with Cyan Inkling Boy"
    },
    {
        "name": "Get Top 5 with Link Hero of the Skies"
    },
    {
        "name": "Get Top 5 with Link Hero of the Wild"
    },
    {
        "name": "Get Top 5 with Villager Boy"
    },
    {
        "name": "Get Top 5 with Villager Girl"
    },
    {
        "name": "Get Top 5 with Isabelle"
    },
    {
        "name": "Get Top 5 with Mii Character"
    },
    {
        "name": "Get Top 3 with Mario"
    },
    {
        "name": "Get Top 3 with Luigi"
    },
    {
        "name": "Get Top 3 with Peach"
    },
    {
        "name": "Get Top 3 with Daisy"
    },
    {
        "name": "Get Top 3 with Rosalina"
    },
    {
        "name": "Get Top 3 with Tanooki Mario"
    },
    {
        "name": "Get Top 3 with Cat Peach"
    },
    {
        "name": "Get Top 3 with Yoshi"
    },
    {
        "name": "Get Top 3 with Light-Blue Yoshi"
    },
    {
        "name": "Get Top 3 with Black Yoshi"
    },
    {
        "name": "Get Top 3 with Red Yoshi"
    },
    {
        "name": "Get Top 3 with Yellow Yoshi"
    },
    {
        "name": "Get Top 3 with White Yoshi"
    },
    {
        "name": "Get Top 3 with Blue Yoshi"
    },
    {
        "name": "Get Top 3 with Pink Yoshi"
    },
    {
        "name": "Get Top 3 with Orange Yoshi"
    },
    {
        "name": "Get Top 3 with Toad"
    },
    {
        "name": "Get Top 3 with Koopa Troopa"
    },
    {
        "name": "Get Top 3 with Shy Guy"
    },
    {
        "name": "Get Top 3 with Light-Blue Shy Guy"
    },
    {
        "name": "Get Top 3 with Black Shy Guy"
    },
    {
        "name": "Get Top 3 with Green Shy Guy"
    },
    {
        "name": "Get Top 3 with Yellow Shy Guy"
    },
    {
        "name": "Get Top 3 with White Shy Guy"
    },
    {
        "name": "Get Top 3 with Blue Shy Guy"
    },
    {
        "name": "Get Top 3 with Pink Shy Guy"
    },
    {
        "name": "Get Top 3 with Orange Shy Guy"
    },
    {
        "name": "Get Top 3 with Lakitu"
    },
    {
        "name": "Get Top 3 with Toadette"
    },
    {
        "name": "Get Top 3 with King Boo"
    },
    {
        "name": "Get Top 3 with Baby Mario"
    },
    {
        "name": "Get Top 3 with Baby Luigi"
    },
    {
        "name": "Get Top 3 with Baby Peach"
    },
    {
        "name": "Get Top 3 with Baby Daisy"
    },
    {
        "name": "Get Top 3 with Baby Rosalina"
    },
    {
        "name": "Get Top 3 with Gold Mario"
    },
    {
        "name": "Get Top 3 with Metal Mario"
    },
    {
        "name": "Get Top 3 with Pink Gold Peach"
    },
    {
        "name": "Get Top 3 with Wario"
    },
    {
        "name": "Get Top 3 with Waluigi"
    },
    {
        "name": "Get Top 3 with Donkey Kong"
    },
    {
        "name": "Get Top 3 with Bowser"
    },
    {
        "name": "Get Top 3 with Dry Bones"
    },
    {
        "name": "Get Top 3 with Bowser Jr."
    },
    {
        "name": "Get Top 3 with Dry Bowser"
    },
    {
        "name": "Get Top 3 with Lemmy"
    },
    {
        "name": "Get Top 3 with Larry"
    },
    {
        "name": "Get Top 3 with Wendy"
    },
    {
        "name": "Get Top 3 with Ludwig"
    },
    {
        "name": "Get Top 3 with Iggy"
    },
    {
        "name": "Get Top 3 with Roy"
    },
    {
        "name": "Get Top 3 with Morton"
    },
    {
        "name": "Get Top 3 with Orange Inkling Girl"
    },
    {
        "name": "Get Top 3 with Green Inkling Girl"
    },
    {
        "name": "Get Top 3 with Pink Inkling Girl"
    },
    {
        "name": "Get Top 3 with Blue Inkling Boy"
    },
    {
        "name": "Get Top 3 with Purple Inkling Boy"
    },
    {
        "name": "Get Top 3 with Cyan Inkling Boy"
    },
    {
        "name": "Get Top 3 with Link Hero of the Skies"
    },
    {
        "name": "Get Top 3 with Link Hero of the Wild"
    },
    {
        "name": "Get Top 3 with Villager Boy"
    },
    {
        "name": "Get Top 3 with Villager Girl"
    },
    {
        "name": "Get Top 3 with Isabelle"
    },
    {
        "name": "Get Top 3 with Mii Character"
    },
    {
        "name": "Win as Mario"
    },
    {
        "name": "Win as Luigi"
    },
    {
        "name": "Win as Peach"
    },
    {
        "name": "Win as Daisy"
    },
    {
        "name": "Win as Rosalina"
    },
    {
        "name": "Win as Tanooki Mario"
    },
    {
        "name": "Win as Cat Peach"
    },
    {
        "name": "Win as Yoshi"
    },
    {
        "name": "Win as Light-Blue Yoshi"
    },
    {
        "name": "Win as Black Yoshi"
    },
    {
        "name": "Win as Red Yoshi"
    },
    {
        "name": "Win as Yellow Yoshi"
    },
    {
        "name": "Win as White Yoshi"
    },
    {
        "name": "Win as Blue Yoshi"
    },
    {
        "name": "Win as Pink Yoshi"
    },
    {
        "name": "Win as Orange Yoshi"
    },
    {
        "name": "Win as Toad"
    },
    {
        "name": "Win as Koopa Troopa"
    },
    {
        "name": "Win as Shy Guy"
    },
    {
        "name": "Win as Light-Blue Shy Guy"
    },
    {
        "name": "Win as Black Shy Guy"
    },
    {
        "name": "Win as Green Shy Guy"
    },
    {
        "name": "Win as Yellow Shy Guy"
    },
    {
        "name": "Win as White Shy Guy"
    },
    {
        "name": "Win as Blue Shy Guy"
    },
    {
        "name": "Win as Pink Shy Guy"
    },
    {
        "name": "Win as Orange Shy Guy"
    },
    {
        "name": "Win as Lakitu"
    },
    {
        "name": "Win as Toadette"
    },
    {
        "name": "Win as King Boo"
    },
    {
        "name": "Win as Baby Mario"
    },
    {
        "name": "Win as Baby Luigi"
    },
    {
        "name": "Win as Baby Peach"
    },
    {
        "name": "Win as Baby Daisy"
    },
    {
        "name": "Win as Baby Rosalina"
    },
    {
        "name": "Win as Gold Mario"
    },
    {
        "name": "Win as Metal Mario"
    },
    {
        "name": "Win as Pink Gold Peach"
    },
    {
        "name": "Win as Wario"
    },
    {
        "name": "Win as Waluigi"
    },
    {
        "name": "Win as Donkey Kong"
    },
    {
        "name": "Win as Bowser"
    },
    {
        "name": "Win as Dry Bones"
    },
    {
        "name": "Win as Bowser Jr."
    },
    {
        "name": "Win as Dry Bowser"
    },
    {
        "name": "Win as Lemmy"
    },
    {
        "name": "Win as Larry"
    },
    {
        "name": "Win as Wendy"
    },
    {
        "name": "Win as Ludwig"
    },
    {
        "name": "Win as Iggy"
    },
    {
        "name": "Win as Roy"
    },
    {
        "name": "Win as Morton"
    },
    {
        "name": "Win as Orange Inkling Girl"
    },
    {
        "name": "Win as Green Inkling Girl"
    },
    {
        "name": "Win as Pink Inkling Girl"
    },
    {
        "name": "Win as Blue Inkling Boy"
    },
    {
        "name": "Win as Purple Inkling Boy"
    },
    {
        "name": "Win as Cyan Inkling Boy"
    },
    {
        "name": "Win as Link Hero of the Skies"
    },
    {
        "name": "Win as Link Hero of the Wild"
    },
    {
        "name": "Win as Villager Boy"
    },
    {
        "name": "Win as Villager Girl"
    },
    {
        "name": "Win as Isabelle"
    },
    {
        "name": "Win as Mii Character"
    },
    {
        "name": "Win in Mario Kart Staium"
    },
    {
        "name": "Win in Water Park"
    },
    {
        "name": "Win in Sweet Sweet Canyon"
    },
    {
        "name": "Win in Thwomp Ruins"
    },
    {
        "name": "Win in Moo Moo Meadows (Wii)"
    },
    {
        "name": "Win in Mario Circuit (GBA)"
    },
    {
        "name": "Win in Cheap Cheap Beach (DS)"
    },
    {
        "name": "Win in Toad's Turpike (N64)"
    },
    {
        "name": "Win in Maio Circuit"
    },
    {
        "name": "Win in Toad Harbor"
    },
    {
        "name": "Win in Twisted Mansion"
    },
    {
        "name": "Win in Shy Guy Falls"
    },
    {
        "name": "Win in Dry Dry Desert (GCN)"
    },
    {
        "name": "Win in Donut Plains 3 (SNES)"
    },
    {
        "name": "Win in Royal Raceway (N64)"
    },
    {
        "name": "Win in DK Jungle (3DS)"
    },
    {
        "name": "Win in Sunshine Airport"
    },
    {
        "name": "Win in Dolphin Shoals"
    },
    {
        "name": "Win in Electrodrome"
    },
    {
        "name": "Win in Mount Wario"
    },
    {
        "name": "Win in Wario Stadium (DS)"
    },
    {
        "name": "Win in Sherbet Land (GCN)"
    },
    {
        "name": "Win in Music Park (3DS)"
    },
    {
        "name": "Win in Yoshi Valley (N64)"
    },
    {
        "name": "Win in Couldtop Cruise"
    },
    {
        "name": "Win in Bone-Dry Dunes"
    },
    {
        "name": "Win in Bowser's Castle"
    },
    {
        "name": "Win in Rainbow Road"
    },
    {
        "name": "Win in Tick-Tock Clock (DS)"
    },
    {
        "name": "Win in Piranha Plant Slide (3DS)"
    },
    {
        "name": "Win in Grumble Volcano (Wii)"
    },
    {
        "name": "Win in Rainbow Road (N64)"
    },
    {
        "name": "Win in Yoshi Circuit (GCN)"
    },
    {
        "name": "Win in Excitebike Arena"
    },
    {
        "name": "Win in Dragon Driftway"
    },
    {
        "name": "Win in Mute City"
    },
    {
        "name": "Win in Wario's Gold Mine (Wii)"
    },
    {
        "name": "Win in Rainbow Road (SNES)"
    },
    {
        "name": "Win in Ice Ice Outpost"
    },
    {
        "name": "Win in Hyrule Circuit"
    },
    {
        "name": "Win in Baby Park (GCN)"
    },
    {
        "name": "Win in Cheese Land (GBA)"
    },
    {
        "name": "Win in Wild Woods"
    },
    {
        "name": "Win in Animal Crossing"
    },
    {
        "name": "Win in Neo Bowser City (3DS)"
    },
    {
        "name": "Win in Ribbon Road (GBA)"
    },
    {
        "name": "Win in Super Bell Subway"
    },
    {
        "name": "Win in Big Blue"
    },
    {
        "name": "Get Top 5 in Mario Kart Staium"
    },
    {
        "name": "Get Top 5 in Water Park"
    },
    {
        "name": "Get Top 5 in Sweet Sweet Canyon"
    },
    {
        "name": "Get Top 5 in Thwomp Ruins"
    },
    {
        "name": "Get Top 5 in Moo Moo Meadows (Wii)"
    },
    {
        "name": "Get Top 5 in Mario Circuit (GBA)"
    },
    {
        "name": "Get Top 5 in Cheap Cheap Beach (DS)"
    },
    {
        "name": "Get Top 5 in Toad's Turpike (N64)"
    },
    {
        "name": "Get Top 5 in Maio Circuit"
    },
    {
        "name": "Get Top 5 in Toad Harbor"
    },
    {
        "name": "Get Top 5 in Twisted Mansion"
    },
    {
        "name": "Get Top 5 in Shy Guy Falls"
    },
    {
        "name": "Get Top 5 in Dry Dry Desert (GCN)"
    },
    {
        "name": "Get Top 5 in Donut Plains 3 (SNES)"
    },
    {
        "name": "Get Top 5 in Royal Raceway (N64)"
    },
    {
        "name": "Get Top 5 in DK Jungle (3DS)"
    },
    {
        "name": "Get Top 5 in Sunshine Airport"
    },
    {
        "name": "Get Top 5 in Dolphin Shoals"
    },
    {
        "name": "Get Top 5 in Electrodrome"
    },
    {
        "name": "Get Top 5 in Mount Wario"
    },
    {
        "name": "Get Top 5 in Wario Stadium (DS)"
    },
    {
        "name": "Get Top 5 in Sherbet Land (GCN)"
    },
    {
        "name": "Get Top 5 in Music Park (3DS)"
    },
    {
        "name": "Get Top 5 in Yoshi Valley (N64)"
    },
    {
        "name": "Get Top 5 in Couldtop Cruise"
    },
    {
        "name": "Get Top 5 in Bone-Dry Dunes"
    },
    {
        "name": "Get Top 5 in Bowser's Castle"
    },
    {
        "name": "Get Top 5 in Rainbow Road"
    },
    {
        "name": "Get Top 5 in Tick-Tock Clock (DS)"
    },
    {
        "name": "Get Top 5 in Piranha Plant Slide (3DS)"
    },
    {
        "name": "Get Top 5 in Grumble Volcano (Wii)"
    },
    {
        "name": "Get Top 5 in Rainbow Road (N64)"
    },
    {
        "name": "Get Top 5 in Yoshi Circuit (GCN)"
    },
    {
        "name": "Get Top 5 in Excitebike Arena"
    },
    {
        "name": "Get Top 5 in Dragon Driftway"
    },
    {
        "name": "Get Top 5 in Mute City"
    },
    {
        "name": "Get Top 5 in Wario's Gold Mine (Wii)"
    },
    {
        "name": "Get Top 5 in Rainbow Road (SNES)"
    },
    {
        "name": "Get Top 5 in Ice Ice Outpost"
    },
    {
        "name": "Get Top 5 in Hyrule Circuit"
    },
    {
        "name": "Get Top 5 in Baby Park (GCN)"
    },
    {
        "name": "Get Top 5 in Cheese Land (GBA)"
    },
    {
        "name": "Get Top 5 in Wild Woods"
    },
    {
        "name": "Get Top 5 in Animal Crossing"
    },
    {
        "name": "Get Top 5 in Neo Bowser City (3DS)"
    },
    {
        "name": "Get Top 5 in Ribbon Road (GBA)"
    },
    {
        "name": "Get Top 5 in Super Bell Subway"
    },
    {
        "name": "Get Top 5 in Big Blue"
    },
    {
        "name": "Get Top 3 in Mario Kart Staium"
    },
    {
        "name": "Get Top 3 in Water Park"
    },
    {
        "name": "Get Top 3 in Sweet Sweet Canyon"
    },
    {
        "name": "Get Top 3 in Thwomp Ruins"
    },
    {
        "name": "Get Top 3 in Moo Moo Meadows (Wii)"
    },
    {
        "name": "Get Top 3 in Mario Circuit (GBA)"
    },
    {
        "name": "Get Top 3 in Cheap Cheap Beach (DS)"
    },
    {
        "name": "Get Top 3 in Toad's Turpike (N64)"
    },
    {
        "name": "Get Top 3 in Maio Circuit"
    },
    {
        "name": "Get Top 3 in Toad Harbor"
    },
    {
        "name": "Get Top 3 in Twisted Mansion"
    },
    {
        "name": "Get Top 3 in Shy Guy Falls"
    },
    {
        "name": "Get Top 3 in Dry Dry Desert (GCN)"
    },
    {
        "name": "Get Top 3 in Donut Plains 3 (SNES)"
    },
    {
        "name": "Get Top 3 in Royal Raceway (N64)"
    },
    {
        "name": "Get Top 3 in DK Jungle (3DS)"
    },
    {
        "name": "Get Top 3 in Sunshine Airport"
    },
    {
        "name": "Get Top 3 in Dolphin Shoals"
    },
    {
        "name": "Get Top 3 in Electrodrome"
    },
    {
        "name": "Get Top 3 in Mount Wario"
    },
    {
        "name": "Get Top 3 in Wario Stadium (DS)"
    },
    {
        "name": "Get Top 3 in Sherbet Land (GCN)"
    },
    {
        "name": "Get Top 3 in Music Park (3DS)"
    },
    {
        "name": "Get Top 3 in Yoshi Valley (N64)"
    },
    {
        "name": "Get Top 3 in Couldtop Cruise"
    },
    {
        "name": "Get Top 3 in Bone-Dry Dunes"
    },
    {
        "name": "Get Top 3 in Bowser's Castle"
    },
    {
        "name": "Get Top 3 in Rainbow Road"
    },
    {
        "name": "Get Top 3 in Tick-Tock Clock (DS)"
    },
    {
        "name": "Get Top 3 in Piranha Plant Slide (3DS)"
    },
    {
        "name": "Get Top 3 in Grumble Volcano (Wii)"
    },
    {
        "name": "Get Top 3 in Rainbow Road (N64)"
    },
    {
        "name": "Get Top 3 in Yoshi Circuit (GCN)"
    },
    {
        "name": "Get Top 3 in Excitebike Arena"
    },
    {
        "name": "Get Top 3 in Dragon Driftway"
    },
    {
        "name": "Get Top 3 in Mute City"
    },
    {
        "name": "Get Top 3 in Wario's Gold Mine (Wii)"
    },
    {
        "name": "Get Top 3 in Rainbow Road (SNES)"
    },
    {
        "name": "Get Top 3 in Ice Ice Outpost"
    },
    {
        "name": "Get Top 3 in Hyrule Circuit"
    },
    {
        "name": "Get Top 3 in Baby Park (GCN)"
    },
    {
        "name": "Get Top 3 in Cheese Land (GBA)"
    },
    {
        "name": "Get Top 3 in Wild Woods"
    },
    {
        "name": "Get Top 3 in Animal Crossing"
    },
    {
        "name": "Get Top 3 in Neo Bowser City (3DS)"
    },
    {
        "name": "Get Top 3 in Ribbon Road (GBA)"
    },
    {
        "name": "Get Top 3 in Super Bell Subway"
    },
    {
        "name": "Get Top 3 in Big Blue"
    },
    {
        "name": "Use a Green Shell"
    },
    {
        "name": "Use a Green Shell as Mario"
    },
    {
        "name": "Use a Green Shell as Luigi"
    },
    {
        "name": "Use a Green Shell as Peach"
    },
    {
        "name": "Use a Green Shell as Daisy"
    },
    {
        "name": "Use a Green Shell as Rosalina"
    },
    {
        "name": "Use a Green Shell as Tanooki Mario"
    },
    {
        "name": "Use a Green Shell as Cat Peach"
    },
    {
        "name": "Use a Green Shell as Yoshi"
    },
    {
        "name": "Use a Green Shell as Light-Blue Yoshi"
    },
    {
        "name": "Use a Green Shell as Black Yoshi"
    },
    {
        "name": "Use a Green Shell as Red Yoshi"
    },
    {
        "name": "Use a Green Shell as Yellow Yoshi"
    },
    {
        "name": "Use a Green Shell as White Yoshi"
    },
    {
        "name": "Use a Green Shell as Blue Yoshi"
    },
    {
        "name": "Use a Green Shell as Pink Yoshi"
    },
    {
        "name": "Use a Green Shell as Orange Yoshi"
    },
    {
        "name": "Use a Green Shell as Toad"
    },
    {
        "name": "Use a Green Shell as Koopa Troopa"
    },
    {
        "name": "Use a Green Shell as Shy Guy"
    },
    {
        "name": "Use a Green Shell as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Green Shell as Black Shy Guy"
    },
    {
        "name": "Use a Green Shell as Green Shy Guy"
    },
    {
        "name": "Use a Green Shell as Yellow Shy Guy"
    },
    {
        "name": "Use a Green Shell as White Shy Guy"
    },
    {
        "name": "Use a Green Shell as Blue Shy Guy"
    },
    {
        "name": "Use a Green Shell as Pink Shy Guy"
    },
    {
        "name": "Use a Green Shell as Orange Shy Guy"
    },
    {
        "name": "Use a Green Shell as Lakitu"
    },
    {
        "name": "Use a Green Shell as Toadette"
    },
    {
        "name": "Use a Green Shell as King Boo"
    },
    {
        "name": "Use a Green Shell as Baby Mario"
    },
    {
        "name": "Use a Green Shell as Baby Luigi"
    },
    {
        "name": "Use a Green Shell as Baby Peach"
    },
    {
        "name": "Use a Green Shell as Baby Daisy"
    },
    {
        "name": "Use a Green Shell as Baby Rosalina"
    },
    {
        "name": "Use a Green Shell as Gold Mario"
    },
    {
        "name": "Use a Green Shell as Metal Mario"
    },
    {
        "name": "Use a Green Shell as Pink Gold Peach"
    },
    {
        "name": "Use a Green Shell as Wario"
    },
    {
        "name": "Use a Green Shell as Waluigi"
    },
    {
        "name": "Use a Green Shell as Donkey Kong"
    },
    {
        "name": "Use a Green Shell as Bowser"
    },
    {
        "name": "Use a Green Shell as Dry Bones"
    },
    {
        "name": "Use a Green Shell as Bowser Jr."
    },
    {
        "name": "Use a Green Shell as Dry Bowser"
    },
    {
        "name": "Use a Green Shell as Lemmy"
    },
    {
        "name": "Use a Green Shell as Larry"
    },
    {
        "name": "Use a Green Shell as Wendy"
    },
    {
        "name": "Use a Green Shell as Ludwig"
    },
    {
        "name": "Use a Green Shell as Iggy"
    },
    {
        "name": "Use a Green Shell as Roy"
    },
    {
        "name": "Use a Green Shell as Morton"
    },
    {
        "name": "Use a Green Shell as Orange Inkling Girl"
    },
    {
        "name": "Use a Green Shell as Green Inkling Girl"
    },
    {
        "name": "Use a Green Shell as Pink Inkling Girl"
    },
    {
        "name": "Use a Green Shell as Blue Inkling Boy"
    },
    {
        "name": "Use a Green Shell as Purple Inkling Boy"
    },
    {
        "name": "Use a Green Shell as Cyan Inkling Boy"
    },
    {
        "name": "Use a Green Shell as Link Hero of the Skies"
    },
    {
        "name": "Use a Green Shell as Link Hero of the Wild"
    },
    {
        "name": "Use a Green Shell as Villager Boy"
    },
    {
        "name": "Use a Green Shell as Villager Girl"
    },
    {
        "name": "Use a Green Shell as Isabelle"
    },
    {
        "name": "Use a Green Shell as Mii Character"
    },
    {
        "name": "Use a Red Shell"
    },
    {
        "name": "Use a Red Shell as Mario"
    },
    {
        "name": "Use a Red Shell as Luigi"
    },
    {
        "name": "Use a Red Shell as Peach"
    },
    {
        "name": "Use a Red Shell as Daisy"
    },
    {
        "name": "Use a Red Shell as Rosalina"
    },
    {
        "name": "Use a Red Shell as Tanooki Mario"
    },
    {
        "name": "Use a Red Shell as Cat Peach"
    },
    {
        "name": "Use a Red Shell as Yoshi"
    },
    {
        "name": "Use a Red Shell as Light-Blue Yoshi"
    },
    {
        "name": "Use a Red Shell as Black Yoshi"
    },
    {
        "name": "Use a Red Shell as Red Yoshi"
    },
    {
        "name": "Use a Red Shell as Yellow Yoshi"
    },
    {
        "name": "Use a Red Shell as White Yoshi"
    },
    {
        "name": "Use a Red Shell as Blue Yoshi"
    },
    {
        "name": "Use a Red Shell as Pink Yoshi"
    },
    {
        "name": "Use a Red Shell as Orange Yoshi"
    },
    {
        "name": "Use a Red Shell as Toad"
    },
    {
        "name": "Use a Red Shell as Koopa Troopa"
    },
    {
        "name": "Use a Red Shell as Shy Guy"
    },
    {
        "name": "Use a Red Shell as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Red Shell as Black Shy Guy"
    },
    {
        "name": "Use a Red Shell as Green Shy Guy"
    },
    {
        "name": "Use a Red Shell as Yellow Shy Guy"
    },
    {
        "name": "Use a Red Shell as White Shy Guy"
    },
    {
        "name": "Use a Red Shell as Blue Shy Guy"
    },
    {
        "name": "Use a Red Shell as Pink Shy Guy"
    },
    {
        "name": "Use a Red Shell as Orange Shy Guy"
    },
    {
        "name": "Use a Red Shell as Lakitu"
    },
    {
        "name": "Use a Red Shell as Toadette"
    },
    {
        "name": "Use a Red Shell as King Boo"
    },
    {
        "name": "Use a Red Shell as Baby Mario"
    },
    {
        "name": "Use a Red Shell as Baby Luigi"
    },
    {
        "name": "Use a Red Shell as Baby Peach"
    },
    {
        "name": "Use a Red Shell as Baby Daisy"
    },
    {
        "name": "Use a Red Shell as Baby Rosalina"
    },
    {
        "name": "Use a Red Shell as Gold Mario"
    },
    {
        "name": "Use a Red Shell as Metal Mario"
    },
    {
        "name": "Use a Red Shell as Pink Gold Peach"
    },
    {
        "name": "Use a Red Shell as Wario"
    },
    {
        "name": "Use a Red Shell as Waluigi"
    },
    {
        "name": "Use a Red Shell as Donkey Kong"
    },
    {
        "name": "Use a Red Shell as Bowser"
    },
    {
        "name": "Use a Red Shell as Dry Bones"
    },
    {
        "name": "Use a Red Shell as Bowser Jr."
    },
    {
        "name": "Use a Red Shell as Dry Bowser"
    },
    {
        "name": "Use a Red Shell as Lemmy"
    },
    {
        "name": "Use a Red Shell as Larry"
    },
    {
        "name": "Use a Red Shell as Wendy"
    },
    {
        "name": "Use a Red Shell as Ludwig"
    },
    {
        "name": "Use a Red Shell as Iggy"
    },
    {
        "name": "Use a Red Shell as Roy"
    },
    {
        "name": "Use a Red Shell as Morton"
    },
    {
        "name": "Use a Red Shell as Orange Inkling Girl"
    },
    {
        "name": "Use a Red Shell as Green Inkling Girl"
    },
    {
        "name": "Use a Red Shell as Pink Inkling Girl"
    },
    {
        "name": "Use a Red Shell as Blue Inkling Boy"
    },
    {
        "name": "Use a Red Shell as Purple Inkling Boy"
    },
    {
        "name": "Use a Red Shell as Cyan Inkling Boy"
    },
    {
        "name": "Use a Red Shell as Link Hero of the Skies"
    },
    {
        "name": "Use a Red Shell as Link Hero of the Wild"
    },
    {
        "name": "Use a Red Shell as Villager Boy"
    },
    {
        "name": "Use a Red Shell as Villager Girl"
    },
    {
        "name": "Use a Red Shell as Isabelle"
    },
    {
        "name": "Use a Red Shell as Mii Character"
    },
    {
        "name": "Use a Banana"
    },
    {
        "name": "Use a Banana as Mario"
    },
    {
        "name": "Use a Banana as Luigi"
    },
    {
        "name": "Use a Banana as Peach"
    },
    {
        "name": "Use a Banana as Daisy"
    },
    {
        "name": "Use a Banana as Rosalina"
    },
    {
        "name": "Use a Banana as Tanooki Mario"
    },
    {
        "name": "Use a Banana as Cat Peach"
    },
    {
        "name": "Use a Banana as Yoshi"
    },
    {
        "name": "Use a Banana as Light-Blue Yoshi"
    },
    {
        "name": "Use a Banana as Black Yoshi"
    },
    {
        "name": "Use a Banana as Red Yoshi"
    },
    {
        "name": "Use a Banana as Yellow Yoshi"
    },
    {
        "name": "Use a Banana as White Yoshi"
    },
    {
        "name": "Use a Banana as Blue Yoshi"
    },
    {
        "name": "Use a Banana as Pink Yoshi"
    },
    {
        "name": "Use a Banana as Orange Yoshi"
    },
    {
        "name": "Use a Banana as Toad"
    },
    {
        "name": "Use a Banana as Koopa Troopa"
    },
    {
        "name": "Use a Banana as Shy Guy"
    },
    {
        "name": "Use a Banana as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Banana as Black Shy Guy"
    },
    {
        "name": "Use a Banana as Green Shy Guy"
    },
    {
        "name": "Use a Banana as Yellow Shy Guy"
    },
    {
        "name": "Use a Banana as White Shy Guy"
    },
    {
        "name": "Use a Banana as Blue Shy Guy"
    },
    {
        "name": "Use a Banana as Pink Shy Guy"
    },
    {
        "name": "Use a Banana as Orange Shy Guy"
    },
    {
        "name": "Use a Banana as Lakitu"
    },
    {
        "name": "Use a Banana as Toadette"
    },
    {
        "name": "Use a Banana as King Boo"
    },
    {
        "name": "Use a Banana as Baby Mario"
    },
    {
        "name": "Use a Banana as Baby Luigi"
    },
    {
        "name": "Use a Banana as Baby Peach"
    },
    {
        "name": "Use a Banana as Baby Daisy"
    },
    {
        "name": "Use a Banana as Baby Rosalina"
    },
    {
        "name": "Use a Banana as Gold Mario"
    },
    {
        "name": "Use a Banana as Metal Mario"
    },
    {
        "name": "Use a Banana as Pink Gold Peach"
    },
    {
        "name": "Use a Banana as Wario"
    },
    {
        "name": "Use a Banana as Waluigi"
    },
    {
        "name": "Use a Banana as Donkey Kong"
    },
    {
        "name": "Use a Banana as Bowser"
    },
    {
        "name": "Use a Banana as Dry Bones"
    },
    {
        "name": "Use a Banana as Bowser Jr."
    },
    {
        "name": "Use a Banana as Dry Bowser"
    },
    {
        "name": "Use a Banana as Lemmy"
    },
    {
        "name": "Use a Banana as Larry"
    },
    {
        "name": "Use a Banana as Wendy"
    },
    {
        "name": "Use a Banana as Ludwig"
    },
    {
        "name": "Use a Banana as Iggy"
    },
    {
        "name": "Use a Banana as Roy"
    },
    {
        "name": "Use a Banana as Morton"
    },
    {
        "name": "Use a Banana as Orange Inkling Girl"
    },
    {
        "name": "Use a Banana as Green Inkling Girl"
    },
    {
        "name": "Use a Banana as Pink Inkling Girl"
    },
    {
        "name": "Use a Banana as Blue Inkling Boy"
    },
    {
        "name": "Use a Banana as Purple Inkling Boy"
    },
    {
        "name": "Use a Banana as Cyan Inkling Boy"
    },
    {
        "name": "Use a Banana as Link Hero of the Skies"
    },
    {
        "name": "Use a Banana as Link Hero of the Wild"
    },
    {
        "name": "Use a Banana as Villager Boy"
    },
    {
        "name": "Use a Banana as Villager Girl"
    },
    {
        "name": "Use a Banana as Isabelle"
    },
    {
        "name": "Use a Banana as Mii Character"
    },
    {
        "name": "Use a Mushroom"
    },
    {
        "name": "Use a Mushroom as Mario"
    },
    {
        "name": "Use a Mushroom as Luigi"
    },
    {
        "name": "Use a Mushroom as Peach"
    },
    {
        "name": "Use a Mushroom as Daisy"
    },
    {
        "name": "Use a Mushroom as Rosalina"
    },
    {
        "name": "Use a Mushroom as Tanooki Mario"
    },
    {
        "name": "Use a Mushroom as Cat Peach"
    },
    {
        "name": "Use a Mushroom as Yoshi"
    },
    {
        "name": "Use a Mushroom as Light-Blue Yoshi"
    },
    {
        "name": "Use a Mushroom as Black Yoshi"
    },
    {
        "name": "Use a Mushroom as Red Yoshi"
    },
    {
        "name": "Use a Mushroom as Yellow Yoshi"
    },
    {
        "name": "Use a Mushroom as White Yoshi"
    },
    {
        "name": "Use a Mushroom as Blue Yoshi"
    },
    {
        "name": "Use a Mushroom as Pink Yoshi"
    },
    {
        "name": "Use a Mushroom as Orange Yoshi"
    },
    {
        "name": "Use a Mushroom as Toad"
    },
    {
        "name": "Use a Mushroom as Koopa Troopa"
    },
    {
        "name": "Use a Mushroom as Shy Guy"
    },
    {
        "name": "Use a Mushroom as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Mushroom as Black Shy Guy"
    },
    {
        "name": "Use a Mushroom as Green Shy Guy"
    },
    {
        "name": "Use a Mushroom as Yellow Shy Guy"
    },
    {
        "name": "Use a Mushroom as White Shy Guy"
    },
    {
        "name": "Use a Mushroom as Blue Shy Guy"
    },
    {
        "name": "Use a Mushroom as Pink Shy Guy"
    },
    {
        "name": "Use a Mushroom as Orange Shy Guy"
    },
    {
        "name": "Use a Mushroom as Lakitu"
    },
    {
        "name": "Use a Mushroom as Toadette"
    },
    {
        "name": "Use a Mushroom as King Boo"
    },
    {
        "name": "Use a Mushroom as Baby Mario"
    },
    {
        "name": "Use a Mushroom as Baby Luigi"
    },
    {
        "name": "Use a Mushroom as Baby Peach"
    },
    {
        "name": "Use a Mushroom as Baby Daisy"
    },
    {
        "name": "Use a Mushroom as Baby Rosalina"
    },
    {
        "name": "Use a Mushroom as Gold Mario"
    },
    {
        "name": "Use a Mushroom as Metal Mario"
    },
    {
        "name": "Use a Mushroom as Pink Gold Peach"
    },
    {
        "name": "Use a Mushroom as Wario"
    },
    {
        "name": "Use a Mushroom as Waluigi"
    },
    {
        "name": "Use a Mushroom as Donkey Kong"
    },
    {
        "name": "Use a Mushroom as Bowser"
    },
    {
        "name": "Use a Mushroom as Dry Bones"
    },
    {
        "name": "Use a Mushroom as Bowser Jr."
    },
    {
        "name": "Use a Mushroom as Dry Bowser"
    },
    {
        "name": "Use a Mushroom as Lemmy"
    },
    {
        "name": "Use a Mushroom as Larry"
    },
    {
        "name": "Use a Mushroom as Wendy"
    },
    {
        "name": "Use a Mushroom as Ludwig"
    },
    {
        "name": "Use a Mushroom as Iggy"
    },
    {
        "name": "Use a Mushroom as Roy"
    },
    {
        "name": "Use a Mushroom as Morton"
    },
    {
        "name": "Use a Mushroom as Orange Inkling Girl"
    },
    {
        "name": "Use a Mushroom as Green Inkling Girl"
    },
    {
        "name": "Use a Mushroom as Pink Inkling Girl"
    },
    {
        "name": "Use a Mushroom as Blue Inkling Boy"
    },
    {
        "name": "Use a Mushroom as Purple Inkling Boy"
    },
    {
        "name": "Use a Mushroom as Cyan Inkling Boy"
    },
    {
        "name": "Use a Mushroom as Link Hero of the Skies"
    },
    {
        "name": "Use a Mushroom as Link Hero of the Wild"
    },
    {
        "name": "Use a Mushroom as Villager Boy"
    },
    {
        "name": "Use a Mushroom as Villager Girl"
    },
    {
        "name": "Use a Mushroom as Isabelle"
    },
    {
        "name": "Use a Mushroom as Mii Character"
    },
    {
        "name": "Use a Fire Flower"
    },
    {
        "name": "Use a Fire Flower as Mario"
    },
    {
        "name": "Use a Fire Flower as Luigi"
    },
    {
        "name": "Use a Fire Flower as Peach"
    },
    {
        "name": "Use a Fire Flower as Daisy"
    },
    {
        "name": "Use a Fire Flower as Rosalina"
    },
    {
        "name": "Use a Fire Flower as Tanooki Mario"
    },
    {
        "name": "Use a Fire Flower as Cat Peach"
    },
    {
        "name": "Use a Fire Flower as Yoshi"
    },
    {
        "name": "Use a Fire Flower as Light-Blue Yoshi"
    },
    {
        "name": "Use a Fire Flower as Black Yoshi"
    },
    {
        "name": "Use a Fire Flower as Red Yoshi"
    },
    {
        "name": "Use a Fire Flower as Yellow Yoshi"
    },
    {
        "name": "Use a Fire Flower as White Yoshi"
    },
    {
        "name": "Use a Fire Flower as Blue Yoshi"
    },
    {
        "name": "Use a Fire Flower as Pink Yoshi"
    },
    {
        "name": "Use a Fire Flower as Orange Yoshi"
    },
    {
        "name": "Use a Fire Flower as Toad"
    },
    {
        "name": "Use a Fire Flower as Koopa Troopa"
    },
    {
        "name": "Use a Fire Flower as Shy Guy"
    },
    {
        "name": "Use a Fire Flower as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Fire Flower as Black Shy Guy"
    },
    {
        "name": "Use a Fire Flower as Green Shy Guy"
    },
    {
        "name": "Use a Fire Flower as Yellow Shy Guy"
    },
    {
        "name": "Use a Fire Flower as White Shy Guy"
    },
    {
        "name": "Use a Fire Flower as Blue Shy Guy"
    },
    {
        "name": "Use a Fire Flower as Pink Shy Guy"
    },
    {
        "name": "Use a Fire Flower as Orange Shy Guy"
    },
    {
        "name": "Use a Fire Flower as Lakitu"
    },
    {
        "name": "Use a Fire Flower as Toadette"
    },
    {
        "name": "Use a Fire Flower as King Boo"
    },
    {
        "name": "Use a Fire Flower as Baby Mario"
    },
    {
        "name": "Use a Fire Flower as Baby Luigi"
    },
    {
        "name": "Use a Fire Flower as Baby Peach"
    },
    {
        "name": "Use a Fire Flower as Baby Daisy"
    },
    {
        "name": "Use a Fire Flower as Baby Rosalina"
    },
    {
        "name": "Use a Fire Flower as Gold Mario"
    },
    {
        "name": "Use a Fire Flower as Metal Mario"
    },
    {
        "name": "Use a Fire Flower as Pink Gold Peach"
    },
    {
        "name": "Use a Fire Flower as Wario"
    },
    {
        "name": "Use a Fire Flower as Waluigi"
    },
    {
        "name": "Use a Fire Flower as Donkey Kong"
    },
    {
        "name": "Use a Fire Flower as Bowser"
    },
    {
        "name": "Use a Fire Flower as Dry Bones"
    },
    {
        "name": "Use a Fire Flower as Bowser Jr."
    },
    {
        "name": "Use a Fire Flower as Dry Bowser"
    },
    {
        "name": "Use a Fire Flower as Lemmy"
    },
    {
        "name": "Use a Fire Flower as Larry"
    },
    {
        "name": "Use a Fire Flower as Wendy"
    },
    {
        "name": "Use a Fire Flower as Ludwig"
    },
    {
        "name": "Use a Fire Flower as Iggy"
    },
    {
        "name": "Use a Fire Flower as Roy"
    },
    {
        "name": "Use a Fire Flower as Morton"
    },
    {
        "name": "Use a Fire Flower as Orange Inkling Girl"
    },
    {
        "name": "Use a Fire Flower as Green Inkling Girl"
    },
    {
        "name": "Use a Fire Flower as Pink Inkling Girl"
    },
    {
        "name": "Use a Fire Flower as Blue Inkling Boy"
    },
    {
        "name": "Use a Fire Flower as Purple Inkling Boy"
    },
    {
        "name": "Use a Fire Flower as Cyan Inkling Boy"
    },
    {
        "name": "Use a Fire Flower as Link Hero of the Skies"
    },
    {
        "name": "Use a Fire Flower as Link Hero of the Wild"
    },
    {
        "name": "Use a Fire Flower as Villager Boy"
    },
    {
        "name": "Use a Fire Flower as Villager Girl"
    },
    {
        "name": "Use a Fire Flower as Isabelle"
    },
    {
        "name": "Use a Fire Flower as Mii Character"
    },
    {
        "name": "Use a Star Power"
    },
    {
        "name": "Use a Star Power as Mario"
    },
    {
        "name": "Use a Star Power as Luigi"
    },
    {
        "name": "Use a Star Power as Peach"
    },
    {
        "name": "Use a Star Power as Daisy"
    },
    {
        "name": "Use a Star Power as Rosalina"
    },
    {
        "name": "Use a Star Power as Tanooki Mario"
    },
    {
        "name": "Use a Star Power as Cat Peach"
    },
    {
        "name": "Use a Star Power as Yoshi"
    },
    {
        "name": "Use a Star Power as Light-Blue Yoshi"
    },
    {
        "name": "Use a Star Power as Black Yoshi"
    },
    {
        "name": "Use a Star Power as Red Yoshi"
    },
    {
        "name": "Use a Star Power as Yellow Yoshi"
    },
    {
        "name": "Use a Star Power as White Yoshi"
    },
    {
        "name": "Use a Star Power as Blue Yoshi"
    },
    {
        "name": "Use a Star Power as Pink Yoshi"
    },
    {
        "name": "Use a Star Power as Orange Yoshi"
    },
    {
        "name": "Use a Star Power as Toad"
    },
    {
        "name": "Use a Star Power as Koopa Troopa"
    },
    {
        "name": "Use a Star Power as Shy Guy"
    },
    {
        "name": "Use a Star Power as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Star Power as Black Shy Guy"
    },
    {
        "name": "Use a Star Power as Green Shy Guy"
    },
    {
        "name": "Use a Star Power as Yellow Shy Guy"
    },
    {
        "name": "Use a Star Power as White Shy Guy"
    },
    {
        "name": "Use a Star Power as Blue Shy Guy"
    },
    {
        "name": "Use a Star Power as Pink Shy Guy"
    },
    {
        "name": "Use a Star Power as Orange Shy Guy"
    },
    {
        "name": "Use a Star Power as Lakitu"
    },
    {
        "name": "Use a Star Power as Toadette"
    },
    {
        "name": "Use a Star Power as King Boo"
    },
    {
        "name": "Use a Star Power as Baby Mario"
    },
    {
        "name": "Use a Star Power as Baby Luigi"
    },
    {
        "name": "Use a Star Power as Baby Peach"
    },
    {
        "name": "Use a Star Power as Baby Daisy"
    },
    {
        "name": "Use a Star Power as Baby Rosalina"
    },
    {
        "name": "Use a Star Power as Gold Mario"
    },
    {
        "name": "Use a Star Power as Metal Mario"
    },
    {
        "name": "Use a Star Power as Pink Gold Peach"
    },
    {
        "name": "Use a Star Power as Wario"
    },
    {
        "name": "Use a Star Power as Waluigi"
    },
    {
        "name": "Use a Star Power as Donkey Kong"
    },
    {
        "name": "Use a Star Power as Bowser"
    },
    {
        "name": "Use a Star Power as Dry Bones"
    },
    {
        "name": "Use a Star Power as Bowser Jr."
    },
    {
        "name": "Use a Star Power as Dry Bowser"
    },
    {
        "name": "Use a Star Power as Lemmy"
    },
    {
        "name": "Use a Star Power as Larry"
    },
    {
        "name": "Use a Star Power as Wendy"
    },
    {
        "name": "Use a Star Power as Ludwig"
    },
    {
        "name": "Use a Star Power as Iggy"
    },
    {
        "name": "Use a Star Power as Roy"
    },
    {
        "name": "Use a Star Power as Morton"
    },
    {
        "name": "Use a Star Power as Orange Inkling Girl"
    },
    {
        "name": "Use a Star Power as Green Inkling Girl"
    },
    {
        "name": "Use a Star Power as Pink Inkling Girl"
    },
    {
        "name": "Use a Star Power as Blue Inkling Boy"
    },
    {
        "name": "Use a Star Power as Purple Inkling Boy"
    },
    {
        "name": "Use a Star Power as Cyan Inkling Boy"
    },
    {
        "name": "Use a Star Power as Link Hero of the Skies"
    },
    {
        "name": "Use a Star Power as Link Hero of the Wild"
    },
    {
        "name": "Use a Star Power as Villager Boy"
    },
    {
        "name": "Use a Star Power as Villager Girl"
    },
    {
        "name": "Use a Star Power as Isabelle"
    },
    {
        "name": "Use a Star Power as Mii Character"
    },
    {
        "name": "Use a Golden Mushroom"
    },
    {
        "name": "Use a Golden Mushroom as Mario"
    },
    {
        "name": "Use a Golden Mushroom as Luigi"
    },
    {
        "name": "Use a Golden Mushroom as Peach"
    },
    {
        "name": "Use a Golden Mushroom as Daisy"
    },
    {
        "name": "Use a Golden Mushroom as Rosalina"
    },
    {
        "name": "Use a Golden Mushroom as Tanooki Mario"
    },
    {
        "name": "Use a Golden Mushroom as Cat Peach"
    },
    {
        "name": "Use a Golden Mushroom as Yoshi"
    },
    {
        "name": "Use a Golden Mushroom as Light-Blue Yoshi"
    },
    {
        "name": "Use a Golden Mushroom as Black Yoshi"
    },
    {
        "name": "Use a Golden Mushroom as Red Yoshi"
    },
    {
        "name": "Use a Golden Mushroom as Yellow Yoshi"
    },
    {
        "name": "Use a Golden Mushroom as White Yoshi"
    },
    {
        "name": "Use a Golden Mushroom as Blue Yoshi"
    },
    {
        "name": "Use a Golden Mushroom as Pink Yoshi"
    },
    {
        "name": "Use a Golden Mushroom as Orange Yoshi"
    },
    {
        "name": "Use a Golden Mushroom as Toad"
    },
    {
        "name": "Use a Golden Mushroom as Koopa Troopa"
    },
    {
        "name": "Use a Golden Mushroom as Shy Guy"
    },
    {
        "name": "Use a Golden Mushroom as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Golden Mushroom as Black Shy Guy"
    },
    {
        "name": "Use a Golden Mushroom as Green Shy Guy"
    },
    {
        "name": "Use a Golden Mushroom as Yellow Shy Guy"
    },
    {
        "name": "Use a Golden Mushroom as White Shy Guy"
    },
    {
        "name": "Use a Golden Mushroom as Blue Shy Guy"
    },
    {
        "name": "Use a Golden Mushroom as Pink Shy Guy"
    },
    {
        "name": "Use a Golden Mushroom as Orange Shy Guy"
    },
    {
        "name": "Use a Golden Mushroom as Lakitu"
    },
    {
        "name": "Use a Golden Mushroom as Toadette"
    },
    {
        "name": "Use a Golden Mushroom as King Boo"
    },
    {
        "name": "Use a Golden Mushroom as Baby Mario"
    },
    {
        "name": "Use a Golden Mushroom as Baby Luigi"
    },
    {
        "name": "Use a Golden Mushroom as Baby Peach"
    },
    {
        "name": "Use a Golden Mushroom as Baby Daisy"
    },
    {
        "name": "Use a Golden Mushroom as Baby Rosalina"
    },
    {
        "name": "Use a Golden Mushroom as Gold Mario"
    },
    {
        "name": "Use a Golden Mushroom as Metal Mario"
    },
    {
        "name": "Use a Golden Mushroom as Pink Gold Peach"
    },
    {
        "name": "Use a Golden Mushroom as Wario"
    },
    {
        "name": "Use a Golden Mushroom as Waluigi"
    },
    {
        "name": "Use a Golden Mushroom as Donkey Kong"
    },
    {
        "name": "Use a Golden Mushroom as Bowser"
    },
    {
        "name": "Use a Golden Mushroom as Dry Bones"
    },
    {
        "name": "Use a Golden Mushroom as Bowser Jr."
    },
    {
        "name": "Use a Golden Mushroom as Dry Bowser"
    },
    {
        "name": "Use a Golden Mushroom as Lemmy"
    },
    {
        "name": "Use a Golden Mushroom as Larry"
    },
    {
        "name": "Use a Golden Mushroom as Wendy"
    },
    {
        "name": "Use a Golden Mushroom as Ludwig"
    },
    {
        "name": "Use a Golden Mushroom as Iggy"
    },
    {
        "name": "Use a Golden Mushroom as Roy"
    },
    {
        "name": "Use a Golden Mushroom as Morton"
    },
    {
        "name": "Use a Golden Mushroom as Orange Inkling Girl"
    },
    {
        "name": "Use a Golden Mushroom as Green Inkling Girl"
    },
    {
        "name": "Use a Golden Mushroom as Pink Inkling Girl"
    },
    {
        "name": "Use a Golden Mushroom as Blue Inkling Boy"
    },
    {
        "name": "Use a Golden Mushroom as Purple Inkling Boy"
    },
    {
        "name": "Use a Golden Mushroom as Cyan Inkling Boy"
    },
    {
        "name": "Use a Golden Mushroom as Link Hero of the Skies"
    },
    {
        "name": "Use a Golden Mushroom as Link Hero of the Wild"
    },
    {
        "name": "Use a Golden Mushroom as Villager Boy"
    },
    {
        "name": "Use a Golden Mushroom as Villager Girl"
    },
    {
        "name": "Use a Golden Mushroom as Isabelle"
    },
    {
        "name": "Use a Golden Mushroom as Mii Character"
    },
    {
        "name": "Use a Blooper"
    },
    {
        "name": "Use a Blooper as Mario"
    },
    {
        "name": "Use a Blooper as Luigi"
    },
    {
        "name": "Use a Blooper as Peach"
    },
    {
        "name": "Use a Blooper as Daisy"
    },
    {
        "name": "Use a Blooper as Rosalina"
    },
    {
        "name": "Use a Blooper as Tanooki Mario"
    },
    {
        "name": "Use a Blooper as Cat Peach"
    },
    {
        "name": "Use a Blooper as Yoshi"
    },
    {
        "name": "Use a Blooper as Light-Blue Yoshi"
    },
    {
        "name": "Use a Blooper as Black Yoshi"
    },
    {
        "name": "Use a Blooper as Red Yoshi"
    },
    {
        "name": "Use a Blooper as Yellow Yoshi"
    },
    {
        "name": "Use a Blooper as White Yoshi"
    },
    {
        "name": "Use a Blooper as Blue Yoshi"
    },
    {
        "name": "Use a Blooper as Pink Yoshi"
    },
    {
        "name": "Use a Blooper as Orange Yoshi"
    },
    {
        "name": "Use a Blooper as Toad"
    },
    {
        "name": "Use a Blooper as Koopa Troopa"
    },
    {
        "name": "Use a Blooper as Shy Guy"
    },
    {
        "name": "Use a Blooper as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Blooper as Black Shy Guy"
    },
    {
        "name": "Use a Blooper as Green Shy Guy"
    },
    {
        "name": "Use a Blooper as Yellow Shy Guy"
    },
    {
        "name": "Use a Blooper as White Shy Guy"
    },
    {
        "name": "Use a Blooper as Blue Shy Guy"
    },
    {
        "name": "Use a Blooper as Pink Shy Guy"
    },
    {
        "name": "Use a Blooper as Orange Shy Guy"
    },
    {
        "name": "Use a Blooper as Lakitu"
    },
    {
        "name": "Use a Blooper as Toadette"
    },
    {
        "name": "Use a Blooper as King Boo"
    },
    {
        "name": "Use a Blooper as Baby Mario"
    },
    {
        "name": "Use a Blooper as Baby Luigi"
    },
    {
        "name": "Use a Blooper as Baby Peach"
    },
    {
        "name": "Use a Blooper as Baby Daisy"
    },
    {
        "name": "Use a Blooper as Baby Rosalina"
    },
    {
        "name": "Use a Blooper as Gold Mario"
    },
    {
        "name": "Use a Blooper as Metal Mario"
    },
    {
        "name": "Use a Blooper as Pink Gold Peach"
    },
    {
        "name": "Use a Blooper as Wario"
    },
    {
        "name": "Use a Blooper as Waluigi"
    },
    {
        "name": "Use a Blooper as Donkey Kong"
    },
    {
        "name": "Use a Blooper as Bowser"
    },
    {
        "name": "Use a Blooper as Dry Bones"
    },
    {
        "name": "Use a Blooper as Bowser Jr."
    },
    {
        "name": "Use a Blooper as Dry Bowser"
    },
    {
        "name": "Use a Blooper as Lemmy"
    },
    {
        "name": "Use a Blooper as Larry"
    },
    {
        "name": "Use a Blooper as Wendy"
    },
    {
        "name": "Use a Blooper as Ludwig"
    },
    {
        "name": "Use a Blooper as Iggy"
    },
    {
        "name": "Use a Blooper as Roy"
    },
    {
        "name": "Use a Blooper as Morton"
    },
    {
        "name": "Use a Blooper as Orange Inkling Girl"
    },
    {
        "name": "Use a Blooper as Green Inkling Girl"
    },
    {
        "name": "Use a Blooper as Pink Inkling Girl"
    },
    {
        "name": "Use a Blooper as Blue Inkling Boy"
    },
    {
        "name": "Use a Blooper as Purple Inkling Boy"
    },
    {
        "name": "Use a Blooper as Cyan Inkling Boy"
    },
    {
        "name": "Use a Blooper as Link Hero of the Skies"
    },
    {
        "name": "Use a Blooper as Link Hero of the Wild"
    },
    {
        "name": "Use a Blooper as Villager Boy"
    },
    {
        "name": "Use a Blooper as Villager Girl"
    },
    {
        "name": "Use a Blooper as Isabelle"
    },
    {
        "name": "Use a Blooper as Mii Character"
    },
    {
        "name": "Use a Bob-omb"
    },
    {
        "name": "Use a Bob-omb as Mario"
    },
    {
        "name": "Use a Bob-omb as Luigi"
    },
    {
        "name": "Use a Bob-omb as Peach"
    },
    {
        "name": "Use a Bob-omb as Daisy"
    },
    {
        "name": "Use a Bob-omb as Rosalina"
    },
    {
        "name": "Use a Bob-omb as Tanooki Mario"
    },
    {
        "name": "Use a Bob-omb as Cat Peach"
    },
    {
        "name": "Use a Bob-omb as Yoshi"
    },
    {
        "name": "Use a Bob-omb as Light-Blue Yoshi"
    },
    {
        "name": "Use a Bob-omb as Black Yoshi"
    },
    {
        "name": "Use a Bob-omb as Red Yoshi"
    },
    {
        "name": "Use a Bob-omb as Yellow Yoshi"
    },
    {
        "name": "Use a Bob-omb as White Yoshi"
    },
    {
        "name": "Use a Bob-omb as Blue Yoshi"
    },
    {
        "name": "Use a Bob-omb as Pink Yoshi"
    },
    {
        "name": "Use a Bob-omb as Orange Yoshi"
    },
    {
        "name": "Use a Bob-omb as Toad"
    },
    {
        "name": "Use a Bob-omb as Koopa Troopa"
    },
    {
        "name": "Use a Bob-omb as Shy Guy"
    },
    {
        "name": "Use a Bob-omb as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Bob-omb as Black Shy Guy"
    },
    {
        "name": "Use a Bob-omb as Green Shy Guy"
    },
    {
        "name": "Use a Bob-omb as Yellow Shy Guy"
    },
    {
        "name": "Use a Bob-omb as White Shy Guy"
    },
    {
        "name": "Use a Bob-omb as Blue Shy Guy"
    },
    {
        "name": "Use a Bob-omb as Pink Shy Guy"
    },
    {
        "name": "Use a Bob-omb as Orange Shy Guy"
    },
    {
        "name": "Use a Bob-omb as Lakitu"
    },
    {
        "name": "Use a Bob-omb as Toadette"
    },
    {
        "name": "Use a Bob-omb as King Boo"
    },
    {
        "name": "Use a Bob-omb as Baby Mario"
    },
    {
        "name": "Use a Bob-omb as Baby Luigi"
    },
    {
        "name": "Use a Bob-omb as Baby Peach"
    },
    {
        "name": "Use a Bob-omb as Baby Daisy"
    },
    {
        "name": "Use a Bob-omb as Baby Rosalina"
    },
    {
        "name": "Use a Bob-omb as Gold Mario"
    },
    {
        "name": "Use a Bob-omb as Metal Mario"
    },
    {
        "name": "Use a Bob-omb as Pink Gold Peach"
    },
    {
        "name": "Use a Bob-omb as Wario"
    },
    {
        "name": "Use a Bob-omb as Waluigi"
    },
    {
        "name": "Use a Bob-omb as Donkey Kong"
    },
    {
        "name": "Use a Bob-omb as Bowser"
    },
    {
        "name": "Use a Bob-omb as Dry Bones"
    },
    {
        "name": "Use a Bob-omb as Bowser Jr."
    },
    {
        "name": "Use a Bob-omb as Dry Bowser"
    },
    {
        "name": "Use a Bob-omb as Lemmy"
    },
    {
        "name": "Use a Bob-omb as Larry"
    },
    {
        "name": "Use a Bob-omb as Wendy"
    },
    {
        "name": "Use a Bob-omb as Ludwig"
    },
    {
        "name": "Use a Bob-omb as Iggy"
    },
    {
        "name": "Use a Bob-omb as Roy"
    },
    {
        "name": "Use a Bob-omb as Morton"
    },
    {
        "name": "Use a Bob-omb as Orange Inkling Girl"
    },
    {
        "name": "Use a Bob-omb as Green Inkling Girl"
    },
    {
        "name": "Use a Bob-omb as Pink Inkling Girl"
    },
    {
        "name": "Use a Bob-omb as Blue Inkling Boy"
    },
    {
        "name": "Use a Bob-omb as Purple Inkling Boy"
    },
    {
        "name": "Use a Bob-omb as Cyan Inkling Boy"
    },
    {
        "name": "Use a Bob-omb as Link Hero of the Skies"
    },
    {
        "name": "Use a Bob-omb as Link Hero of the Wild"
    },
    {
        "name": "Use a Bob-omb as Villager Boy"
    },
    {
        "name": "Use a Bob-omb as Villager Girl"
    },
    {
        "name": "Use a Bob-omb as Isabelle"
    },
    {
        "name": "Use a Bob-omb as Mii Character"
    },
    {
        "name": "Use a Blue Shell"
    },
    {
        "name": "Use a Blue Shell as Mario"
    },
    {
        "name": "Use a Blue Shell as Luigi"
    },
    {
        "name": "Use a Blue Shell as Peach"
    },
    {
        "name": "Use a Blue Shell as Daisy"
    },
    {
        "name": "Use a Blue Shell as Rosalina"
    },
    {
        "name": "Use a Blue Shell as Tanooki Mario"
    },
    {
        "name": "Use a Blue Shell as Cat Peach"
    },
    {
        "name": "Use a Blue Shell as Yoshi"
    },
    {
        "name": "Use a Blue Shell as Light-Blue Yoshi"
    },
    {
        "name": "Use a Blue Shell as Black Yoshi"
    },
    {
        "name": "Use a Blue Shell as Red Yoshi"
    },
    {
        "name": "Use a Blue Shell as Yellow Yoshi"
    },
    {
        "name": "Use a Blue Shell as White Yoshi"
    },
    {
        "name": "Use a Blue Shell as Blue Yoshi"
    },
    {
        "name": "Use a Blue Shell as Pink Yoshi"
    },
    {
        "name": "Use a Blue Shell as Orange Yoshi"
    },
    {
        "name": "Use a Blue Shell as Toad"
    },
    {
        "name": "Use a Blue Shell as Koopa Troopa"
    },
    {
        "name": "Use a Blue Shell as Shy Guy"
    },
    {
        "name": "Use a Blue Shell as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Blue Shell as Black Shy Guy"
    },
    {
        "name": "Use a Blue Shell as Green Shy Guy"
    },
    {
        "name": "Use a Blue Shell as Yellow Shy Guy"
    },
    {
        "name": "Use a Blue Shell as White Shy Guy"
    },
    {
        "name": "Use a Blue Shell as Blue Shy Guy"
    },
    {
        "name": "Use a Blue Shell as Pink Shy Guy"
    },
    {
        "name": "Use a Blue Shell as Orange Shy Guy"
    },
    {
        "name": "Use a Blue Shell as Lakitu"
    },
    {
        "name": "Use a Blue Shell as Toadette"
    },
    {
        "name": "Use a Blue Shell as King Boo"
    },
    {
        "name": "Use a Blue Shell as Baby Mario"
    },
    {
        "name": "Use a Blue Shell as Baby Luigi"
    },
    {
        "name": "Use a Blue Shell as Baby Peach"
    },
    {
        "name": "Use a Blue Shell as Baby Daisy"
    },
    {
        "name": "Use a Blue Shell as Baby Rosalina"
    },
    {
        "name": "Use a Blue Shell as Gold Mario"
    },
    {
        "name": "Use a Blue Shell as Metal Mario"
    },
    {
        "name": "Use a Blue Shell as Pink Gold Peach"
    },
    {
        "name": "Use a Blue Shell as Wario"
    },
    {
        "name": "Use a Blue Shell as Waluigi"
    },
    {
        "name": "Use a Blue Shell as Donkey Kong"
    },
    {
        "name": "Use a Blue Shell as Bowser"
    },
    {
        "name": "Use a Blue Shell as Dry Bones"
    },
    {
        "name": "Use a Blue Shell as Bowser Jr."
    },
    {
        "name": "Use a Blue Shell as Dry Bowser"
    },
    {
        "name": "Use a Blue Shell as Lemmy"
    },
    {
        "name": "Use a Blue Shell as Larry"
    },
    {
        "name": "Use a Blue Shell as Wendy"
    },
    {
        "name": "Use a Blue Shell as Ludwig"
    },
    {
        "name": "Use a Blue Shell as Iggy"
    },
    {
        "name": "Use a Blue Shell as Roy"
    },
    {
        "name": "Use a Blue Shell as Morton"
    },
    {
        "name": "Use a Blue Shell as Orange Inkling Girl"
    },
    {
        "name": "Use a Blue Shell as Green Inkling Girl"
    },
    {
        "name": "Use a Blue Shell as Pink Inkling Girl"
    },
    {
        "name": "Use a Blue Shell as Blue Inkling Boy"
    },
    {
        "name": "Use a Blue Shell as Purple Inkling Boy"
    },
    {
        "name": "Use a Blue Shell as Cyan Inkling Boy"
    },
    {
        "name": "Use a Blue Shell as Link Hero of the Skies"
    },
    {
        "name": "Use a Blue Shell as Link Hero of the Wild"
    },
    {
        "name": "Use a Blue Shell as Villager Boy"
    },
    {
        "name": "Use a Blue Shell as Villager Girl"
    },
    {
        "name": "Use a Blue Shell as Isabelle"
    },
    {
        "name": "Use a Blue Shell as Mii Character"
    },
    {
        "name": "Use a Lightning"
    },
    {
        "name": "Use a Lightning as Mario"
    },
    {
        "name": "Use a Lightning as Luigi"
    },
    {
        "name": "Use a Lightning as Peach"
    },
    {
        "name": "Use a Lightning as Daisy"
    },
    {
        "name": "Use a Lightning as Rosalina"
    },
    {
        "name": "Use a Lightning as Tanooki Mario"
    },
    {
        "name": "Use a Lightning as Cat Peach"
    },
    {
        "name": "Use a Lightning as Yoshi"
    },
    {
        "name": "Use a Lightning as Light-Blue Yoshi"
    },
    {
        "name": "Use a Lightning as Black Yoshi"
    },
    {
        "name": "Use a Lightning as Red Yoshi"
    },
    {
        "name": "Use a Lightning as Yellow Yoshi"
    },
    {
        "name": "Use a Lightning as White Yoshi"
    },
    {
        "name": "Use a Lightning as Blue Yoshi"
    },
    {
        "name": "Use a Lightning as Pink Yoshi"
    },
    {
        "name": "Use a Lightning as Orange Yoshi"
    },
    {
        "name": "Use a Lightning as Toad"
    },
    {
        "name": "Use a Lightning as Koopa Troopa"
    },
    {
        "name": "Use a Lightning as Shy Guy"
    },
    {
        "name": "Use a Lightning as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Lightning as Black Shy Guy"
    },
    {
        "name": "Use a Lightning as Green Shy Guy"
    },
    {
        "name": "Use a Lightning as Yellow Shy Guy"
    },
    {
        "name": "Use a Lightning as White Shy Guy"
    },
    {
        "name": "Use a Lightning as Blue Shy Guy"
    },
    {
        "name": "Use a Lightning as Pink Shy Guy"
    },
    {
        "name": "Use a Lightning as Orange Shy Guy"
    },
    {
        "name": "Use a Lightning as Lakitu"
    },
    {
        "name": "Use a Lightning as Toadette"
    },
    {
        "name": "Use a Lightning as King Boo"
    },
    {
        "name": "Use a Lightning as Baby Mario"
    },
    {
        "name": "Use a Lightning as Baby Luigi"
    },
    {
        "name": "Use a Lightning as Baby Peach"
    },
    {
        "name": "Use a Lightning as Baby Daisy"
    },
    {
        "name": "Use a Lightning as Baby Rosalina"
    },
    {
        "name": "Use a Lightning as Gold Mario"
    },
    {
        "name": "Use a Lightning as Metal Mario"
    },
    {
        "name": "Use a Lightning as Pink Gold Peach"
    },
    {
        "name": "Use a Lightning as Wario"
    },
    {
        "name": "Use a Lightning as Waluigi"
    },
    {
        "name": "Use a Lightning as Donkey Kong"
    },
    {
        "name": "Use a Lightning as Bowser"
    },
    {
        "name": "Use a Lightning as Dry Bones"
    },
    {
        "name": "Use a Lightning as Bowser Jr."
    },
    {
        "name": "Use a Lightning as Dry Bowser"
    },
    {
        "name": "Use a Lightning as Lemmy"
    },
    {
        "name": "Use a Lightning as Larry"
    },
    {
        "name": "Use a Lightning as Wendy"
    },
    {
        "name": "Use a Lightning as Ludwig"
    },
    {
        "name": "Use a Lightning as Iggy"
    },
    {
        "name": "Use a Lightning as Roy"
    },
    {
        "name": "Use a Lightning as Morton"
    },
    {
        "name": "Use a Lightning as Orange Inkling Girl"
    },
    {
        "name": "Use a Lightning as Green Inkling Girl"
    },
    {
        "name": "Use a Lightning as Pink Inkling Girl"
    },
    {
        "name": "Use a Lightning as Blue Inkling Boy"
    },
    {
        "name": "Use a Lightning as Purple Inkling Boy"
    },
    {
        "name": "Use a Lightning as Cyan Inkling Boy"
    },
    {
        "name": "Use a Lightning as Link Hero of the Skies"
    },
    {
        "name": "Use a Lightning as Link Hero of the Wild"
    },
    {
        "name": "Use a Lightning as Villager Boy"
    },
    {
        "name": "Use a Lightning as Villager Girl"
    },
    {
        "name": "Use a Lightning as Isabelle"
    },
    {
        "name": "Use a Lightning as Mii Character"
    },
    {
        "name": "Use a Bullet Bill"
    },
    {
        "name": "Use a Bullet Bill as Mario"
    },
    {
        "name": "Use a Bullet Bill as Luigi"
    },
    {
        "name": "Use a Bullet Bill as Peach"
    },
    {
        "name": "Use a Bullet Bill as Daisy"
    },
    {
        "name": "Use a Bullet Bill as Rosalina"
    },
    {
        "name": "Use a Bullet Bill as Tanooki Mario"
    },
    {
        "name": "Use a Bullet Bill as Cat Peach"
    },
    {
        "name": "Use a Bullet Bill as Yoshi"
    },
    {
        "name": "Use a Bullet Bill as Light-Blue Yoshi"
    },
    {
        "name": "Use a Bullet Bill as Black Yoshi"
    },
    {
        "name": "Use a Bullet Bill as Red Yoshi"
    },
    {
        "name": "Use a Bullet Bill as Yellow Yoshi"
    },
    {
        "name": "Use a Bullet Bill as White Yoshi"
    },
    {
        "name": "Use a Bullet Bill as Blue Yoshi"
    },
    {
        "name": "Use a Bullet Bill as Pink Yoshi"
    },
    {
        "name": "Use a Bullet Bill as Orange Yoshi"
    },
    {
        "name": "Use a Bullet Bill as Toad"
    },
    {
        "name": "Use a Bullet Bill as Koopa Troopa"
    },
    {
        "name": "Use a Bullet Bill as Shy Guy"
    },
    {
        "name": "Use a Bullet Bill as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Bullet Bill as Black Shy Guy"
    },
    {
        "name": "Use a Bullet Bill as Green Shy Guy"
    },
    {
        "name": "Use a Bullet Bill as Yellow Shy Guy"
    },
    {
        "name": "Use a Bullet Bill as White Shy Guy"
    },
    {
        "name": "Use a Bullet Bill as Blue Shy Guy"
    },
    {
        "name": "Use a Bullet Bill as Pink Shy Guy"
    },
    {
        "name": "Use a Bullet Bill as Orange Shy Guy"
    },
    {
        "name": "Use a Bullet Bill as Lakitu"
    },
    {
        "name": "Use a Bullet Bill as Toadette"
    },
    {
        "name": "Use a Bullet Bill as King Boo"
    },
    {
        "name": "Use a Bullet Bill as Baby Mario"
    },
    {
        "name": "Use a Bullet Bill as Baby Luigi"
    },
    {
        "name": "Use a Bullet Bill as Baby Peach"
    },
    {
        "name": "Use a Bullet Bill as Baby Daisy"
    },
    {
        "name": "Use a Bullet Bill as Baby Rosalina"
    },
    {
        "name": "Use a Bullet Bill as Gold Mario"
    },
    {
        "name": "Use a Bullet Bill as Metal Mario"
    },
    {
        "name": "Use a Bullet Bill as Pink Gold Peach"
    },
    {
        "name": "Use a Bullet Bill as Wario"
    },
    {
        "name": "Use a Bullet Bill as Waluigi"
    },
    {
        "name": "Use a Bullet Bill as Donkey Kong"
    },
    {
        "name": "Use a Bullet Bill as Bowser"
    },
    {
        "name": "Use a Bullet Bill as Dry Bones"
    },
    {
        "name": "Use a Bullet Bill as Bowser Jr."
    },
    {
        "name": "Use a Bullet Bill as Dry Bowser"
    },
    {
        "name": "Use a Bullet Bill as Lemmy"
    },
    {
        "name": "Use a Bullet Bill as Larry"
    },
    {
        "name": "Use a Bullet Bill as Wendy"
    },
    {
        "name": "Use a Bullet Bill as Ludwig"
    },
    {
        "name": "Use a Bullet Bill as Iggy"
    },
    {
        "name": "Use a Bullet Bill as Roy"
    },
    {
        "name": "Use a Bullet Bill as Morton"
    },
    {
        "name": "Use a Bullet Bill as Orange Inkling Girl"
    },
    {
        "name": "Use a Bullet Bill as Green Inkling Girl"
    },
    {
        "name": "Use a Bullet Bill as Pink Inkling Girl"
    },
    {
        "name": "Use a Bullet Bill as Blue Inkling Boy"
    },
    {
        "name": "Use a Bullet Bill as Purple Inkling Boy"
    },
    {
        "name": "Use a Bullet Bill as Cyan Inkling Boy"
    },
    {
        "name": "Use a Bullet Bill as Link Hero of the Skies"
    },
    {
        "name": "Use a Bullet Bill as Link Hero of the Wild"
    },
    {
        "name": "Use a Bullet Bill as Villager Boy"
    },
    {
        "name": "Use a Bullet Bill as Villager Girl"
    },
    {
        "name": "Use a Bullet Bill as Isabelle"
    },
    {
        "name": "Use a Bullet Bill as Mii Character"
    },
    {
        "name": "Use a Boomerang Flower"
    },
    {
        "name": "Use a Boomerang Flower as Mario"
    },
    {
        "name": "Use a Boomerang Flower as Luigi"
    },
    {
        "name": "Use a Boomerang Flower as Peach"
    },
    {
        "name": "Use a Boomerang Flower as Daisy"
    },
    {
        "name": "Use a Boomerang Flower as Rosalina"
    },
    {
        "name": "Use a Boomerang Flower as Tanooki Mario"
    },
    {
        "name": "Use a Boomerang Flower as Cat Peach"
    },
    {
        "name": "Use a Boomerang Flower as Yoshi"
    },
    {
        "name": "Use a Boomerang Flower as Light-Blue Yoshi"
    },
    {
        "name": "Use a Boomerang Flower as Black Yoshi"
    },
    {
        "name": "Use a Boomerang Flower as Red Yoshi"
    },
    {
        "name": "Use a Boomerang Flower as Yellow Yoshi"
    },
    {
        "name": "Use a Boomerang Flower as White Yoshi"
    },
    {
        "name": "Use a Boomerang Flower as Blue Yoshi"
    },
    {
        "name": "Use a Boomerang Flower as Pink Yoshi"
    },
    {
        "name": "Use a Boomerang Flower as Orange Yoshi"
    },
    {
        "name": "Use a Boomerang Flower as Toad"
    },
    {
        "name": "Use a Boomerang Flower as Koopa Troopa"
    },
    {
        "name": "Use a Boomerang Flower as Shy Guy"
    },
    {
        "name": "Use a Boomerang Flower as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Boomerang Flower as Black Shy Guy"
    },
    {
        "name": "Use a Boomerang Flower as Green Shy Guy"
    },
    {
        "name": "Use a Boomerang Flower as Yellow Shy Guy"
    },
    {
        "name": "Use a Boomerang Flower as White Shy Guy"
    },
    {
        "name": "Use a Boomerang Flower as Blue Shy Guy"
    },
    {
        "name": "Use a Boomerang Flower as Pink Shy Guy"
    },
    {
        "name": "Use a Boomerang Flower as Orange Shy Guy"
    },
    {
        "name": "Use a Boomerang Flower as Lakitu"
    },
    {
        "name": "Use a Boomerang Flower as Toadette"
    },
    {
        "name": "Use a Boomerang Flower as King Boo"
    },
    {
        "name": "Use a Boomerang Flower as Baby Mario"
    },
    {
        "name": "Use a Boomerang Flower as Baby Luigi"
    },
    {
        "name": "Use a Boomerang Flower as Baby Peach"
    },
    {
        "name": "Use a Boomerang Flower as Baby Daisy"
    },
    {
        "name": "Use a Boomerang Flower as Baby Rosalina"
    },
    {
        "name": "Use a Boomerang Flower as Gold Mario"
    },
    {
        "name": "Use a Boomerang Flower as Metal Mario"
    },
    {
        "name": "Use a Boomerang Flower as Pink Gold Peach"
    },
    {
        "name": "Use a Boomerang Flower as Wario"
    },
    {
        "name": "Use a Boomerang Flower as Waluigi"
    },
    {
        "name": "Use a Boomerang Flower as Donkey Kong"
    },
    {
        "name": "Use a Boomerang Flower as Bowser"
    },
    {
        "name": "Use a Boomerang Flower as Dry Bones"
    },
    {
        "name": "Use a Boomerang Flower as Bowser Jr."
    },
    {
        "name": "Use a Boomerang Flower as Dry Bowser"
    },
    {
        "name": "Use a Boomerang Flower as Lemmy"
    },
    {
        "name": "Use a Boomerang Flower as Larry"
    },
    {
        "name": "Use a Boomerang Flower as Wendy"
    },
    {
        "name": "Use a Boomerang Flower as Ludwig"
    },
    {
        "name": "Use a Boomerang Flower as Iggy"
    },
    {
        "name": "Use a Boomerang Flower as Roy"
    },
    {
        "name": "Use a Boomerang Flower as Morton"
    },
    {
        "name": "Use a Boomerang Flower as Orange Inkling Girl"
    },
    {
        "name": "Use a Boomerang Flower as Green Inkling Girl"
    },
    {
        "name": "Use a Boomerang Flower as Pink Inkling Girl"
    },
    {
        "name": "Use a Boomerang Flower as Blue Inkling Boy"
    },
    {
        "name": "Use a Boomerang Flower as Purple Inkling Boy"
    },
    {
        "name": "Use a Boomerang Flower as Cyan Inkling Boy"
    },
    {
        "name": "Use a Boomerang Flower as Link Hero of the Skies"
    },
    {
        "name": "Use a Boomerang Flower as Link Hero of the Wild"
    },
    {
        "name": "Use a Boomerang Flower as Villager Boy"
    },
    {
        "name": "Use a Boomerang Flower as Villager Girl"
    },
    {
        "name": "Use a Boomerang Flower as Isabelle"
    },
    {
        "name": "Use a Boomerang Flower as Mii Character"
    },
    {
        "name": "Use a Piranha Plant"
    },
    {
        "name": "Use a Piranha Plant as Mario"
    },
    {
        "name": "Use a Piranha Plant as Luigi"
    },
    {
        "name": "Use a Piranha Plant as Peach"
    },
    {
        "name": "Use a Piranha Plant as Daisy"
    },
    {
        "name": "Use a Piranha Plant as Rosalina"
    },
    {
        "name": "Use a Piranha Plant as Tanooki Mario"
    },
    {
        "name": "Use a Piranha Plant as Cat Peach"
    },
    {
        "name": "Use a Piranha Plant as Yoshi"
    },
    {
        "name": "Use a Piranha Plant as Light-Blue Yoshi"
    },
    {
        "name": "Use a Piranha Plant as Black Yoshi"
    },
    {
        "name": "Use a Piranha Plant as Red Yoshi"
    },
    {
        "name": "Use a Piranha Plant as Yellow Yoshi"
    },
    {
        "name": "Use a Piranha Plant as White Yoshi"
    },
    {
        "name": "Use a Piranha Plant as Blue Yoshi"
    },
    {
        "name": "Use a Piranha Plant as Pink Yoshi"
    },
    {
        "name": "Use a Piranha Plant as Orange Yoshi"
    },
    {
        "name": "Use a Piranha Plant as Toad"
    },
    {
        "name": "Use a Piranha Plant as Koopa Troopa"
    },
    {
        "name": "Use a Piranha Plant as Shy Guy"
    },
    {
        "name": "Use a Piranha Plant as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Piranha Plant as Black Shy Guy"
    },
    {
        "name": "Use a Piranha Plant as Green Shy Guy"
    },
    {
        "name": "Use a Piranha Plant as Yellow Shy Guy"
    },
    {
        "name": "Use a Piranha Plant as White Shy Guy"
    },
    {
        "name": "Use a Piranha Plant as Blue Shy Guy"
    },
    {
        "name": "Use a Piranha Plant as Pink Shy Guy"
    },
    {
        "name": "Use a Piranha Plant as Orange Shy Guy"
    },
    {
        "name": "Use a Piranha Plant as Lakitu"
    },
    {
        "name": "Use a Piranha Plant as Toadette"
    },
    {
        "name": "Use a Piranha Plant as King Boo"
    },
    {
        "name": "Use a Piranha Plant as Baby Mario"
    },
    {
        "name": "Use a Piranha Plant as Baby Luigi"
    },
    {
        "name": "Use a Piranha Plant as Baby Peach"
    },
    {
        "name": "Use a Piranha Plant as Baby Daisy"
    },
    {
        "name": "Use a Piranha Plant as Baby Rosalina"
    },
    {
        "name": "Use a Piranha Plant as Gold Mario"
    },
    {
        "name": "Use a Piranha Plant as Metal Mario"
    },
    {
        "name": "Use a Piranha Plant as Pink Gold Peach"
    },
    {
        "name": "Use a Piranha Plant as Wario"
    },
    {
        "name": "Use a Piranha Plant as Waluigi"
    },
    {
        "name": "Use a Piranha Plant as Donkey Kong"
    },
    {
        "name": "Use a Piranha Plant as Bowser"
    },
    {
        "name": "Use a Piranha Plant as Dry Bones"
    },
    {
        "name": "Use a Piranha Plant as Bowser Jr."
    },
    {
        "name": "Use a Piranha Plant as Dry Bowser"
    },
    {
        "name": "Use a Piranha Plant as Lemmy"
    },
    {
        "name": "Use a Piranha Plant as Larry"
    },
    {
        "name": "Use a Piranha Plant as Wendy"
    },
    {
        "name": "Use a Piranha Plant as Ludwig"
    },
    {
        "name": "Use a Piranha Plant as Iggy"
    },
    {
        "name": "Use a Piranha Plant as Roy"
    },
    {
        "name": "Use a Piranha Plant as Morton"
    },
    {
        "name": "Use a Piranha Plant as Orange Inkling Girl"
    },
    {
        "name": "Use a Piranha Plant as Green Inkling Girl"
    },
    {
        "name": "Use a Piranha Plant as Pink Inkling Girl"
    },
    {
        "name": "Use a Piranha Plant as Blue Inkling Boy"
    },
    {
        "name": "Use a Piranha Plant as Purple Inkling Boy"
    },
    {
        "name": "Use a Piranha Plant as Cyan Inkling Boy"
    },
    {
        "name": "Use a Piranha Plant as Link Hero of the Skies"
    },
    {
        "name": "Use a Piranha Plant as Link Hero of the Wild"
    },
    {
        "name": "Use a Piranha Plant as Villager Boy"
    },
    {
        "name": "Use a Piranha Plant as Villager Girl"
    },
    {
        "name": "Use a Piranha Plant as Isabelle"
    },
    {
        "name": "Use a Piranha Plant as Mii Character"
    },
    {
        "name": "Use a Super Horn"
    },
    {
        "name": "Use a Super Horn as Mario"
    },
    {
        "name": "Use a Super Horn as Luigi"
    },
    {
        "name": "Use a Super Horn as Peach"
    },
    {
        "name": "Use a Super Horn as Daisy"
    },
    {
        "name": "Use a Super Horn as Rosalina"
    },
    {
        "name": "Use a Super Horn as Tanooki Mario"
    },
    {
        "name": "Use a Super Horn as Cat Peach"
    },
    {
        "name": "Use a Super Horn as Yoshi"
    },
    {
        "name": "Use a Super Horn as Light-Blue Yoshi"
    },
    {
        "name": "Use a Super Horn as Black Yoshi"
    },
    {
        "name": "Use a Super Horn as Red Yoshi"
    },
    {
        "name": "Use a Super Horn as Yellow Yoshi"
    },
    {
        "name": "Use a Super Horn as White Yoshi"
    },
    {
        "name": "Use a Super Horn as Blue Yoshi"
    },
    {
        "name": "Use a Super Horn as Pink Yoshi"
    },
    {
        "name": "Use a Super Horn as Orange Yoshi"
    },
    {
        "name": "Use a Super Horn as Toad"
    },
    {
        "name": "Use a Super Horn as Koopa Troopa"
    },
    {
        "name": "Use a Super Horn as Shy Guy"
    },
    {
        "name": "Use a Super Horn as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Super Horn as Black Shy Guy"
    },
    {
        "name": "Use a Super Horn as Green Shy Guy"
    },
    {
        "name": "Use a Super Horn as Yellow Shy Guy"
    },
    {
        "name": "Use a Super Horn as White Shy Guy"
    },
    {
        "name": "Use a Super Horn as Blue Shy Guy"
    },
    {
        "name": "Use a Super Horn as Pink Shy Guy"
    },
    {
        "name": "Use a Super Horn as Orange Shy Guy"
    },
    {
        "name": "Use a Super Horn as Lakitu"
    },
    {
        "name": "Use a Super Horn as Toadette"
    },
    {
        "name": "Use a Super Horn as King Boo"
    },
    {
        "name": "Use a Super Horn as Baby Mario"
    },
    {
        "name": "Use a Super Horn as Baby Luigi"
    },
    {
        "name": "Use a Super Horn as Baby Peach"
    },
    {
        "name": "Use a Super Horn as Baby Daisy"
    },
    {
        "name": "Use a Super Horn as Baby Rosalina"
    },
    {
        "name": "Use a Super Horn as Gold Mario"
    },
    {
        "name": "Use a Super Horn as Metal Mario"
    },
    {
        "name": "Use a Super Horn as Pink Gold Peach"
    },
    {
        "name": "Use a Super Horn as Wario"
    },
    {
        "name": "Use a Super Horn as Waluigi"
    },
    {
        "name": "Use a Super Horn as Donkey Kong"
    },
    {
        "name": "Use a Super Horn as Bowser"
    },
    {
        "name": "Use a Super Horn as Dry Bones"
    },
    {
        "name": "Use a Super Horn as Bowser Jr."
    },
    {
        "name": "Use a Super Horn as Dry Bowser"
    },
    {
        "name": "Use a Super Horn as Lemmy"
    },
    {
        "name": "Use a Super Horn as Larry"
    },
    {
        "name": "Use a Super Horn as Wendy"
    },
    {
        "name": "Use a Super Horn as Ludwig"
    },
    {
        "name": "Use a Super Horn as Iggy"
    },
    {
        "name": "Use a Super Horn as Roy"
    },
    {
        "name": "Use a Super Horn as Morton"
    },
    {
        "name": "Use a Super Horn as Orange Inkling Girl"
    },
    {
        "name": "Use a Super Horn as Green Inkling Girl"
    },
    {
        "name": "Use a Super Horn as Pink Inkling Girl"
    },
    {
        "name": "Use a Super Horn as Blue Inkling Boy"
    },
    {
        "name": "Use a Super Horn as Purple Inkling Boy"
    },
    {
        "name": "Use a Super Horn as Cyan Inkling Boy"
    },
    {
        "name": "Use a Super Horn as Link Hero of the Skies"
    },
    {
        "name": "Use a Super Horn as Link Hero of the Wild"
    },
    {
        "name": "Use a Super Horn as Villager Boy"
    },
    {
        "name": "Use a Super Horn as Villager Girl"
    },
    {
        "name": "Use a Super Horn as Isabelle"
    },
    {
        "name": "Use a Super Horn as Mii Character"
    },
    {
        "name": "Use a Crazy 8"
    },
    {
        "name": "Use a Crazy 8 as Mario"
    },
    {
        "name": "Use a Crazy 8 as Luigi"
    },
    {
        "name": "Use a Crazy 8 as Peach"
    },
    {
        "name": "Use a Crazy 8 as Daisy"
    },
    {
        "name": "Use a Crazy 8 as Rosalina"
    },
    {
        "name": "Use a Crazy 8 as Tanooki Mario"
    },
    {
        "name": "Use a Crazy 8 as Cat Peach"
    },
    {
        "name": "Use a Crazy 8 as Yoshi"
    },
    {
        "name": "Use a Crazy 8 as Light-Blue Yoshi"
    },
    {
        "name": "Use a Crazy 8 as Black Yoshi"
    },
    {
        "name": "Use a Crazy 8 as Red Yoshi"
    },
    {
        "name": "Use a Crazy 8 as Yellow Yoshi"
    },
    {
        "name": "Use a Crazy 8 as White Yoshi"
    },
    {
        "name": "Use a Crazy 8 as Blue Yoshi"
    },
    {
        "name": "Use a Crazy 8 as Pink Yoshi"
    },
    {
        "name": "Use a Crazy 8 as Orange Yoshi"
    },
    {
        "name": "Use a Crazy 8 as Toad"
    },
    {
        "name": "Use a Crazy 8 as Koopa Troopa"
    },
    {
        "name": "Use a Crazy 8 as Shy Guy"
    },
    {
        "name": "Use a Crazy 8 as Light-Blue Shy Guy"
    },
    {
        "name": "Use a Crazy 8 as Black Shy Guy"
    },
    {
        "name": "Use a Crazy 8 as Green Shy Guy"
    },
    {
        "name": "Use a Crazy 8 as Yellow Shy Guy"
    },
    {
        "name": "Use a Crazy 8 as White Shy Guy"
    },
    {
        "name": "Use a Crazy 8 as Blue Shy Guy"
    },
    {
        "name": "Use a Crazy 8 as Pink Shy Guy"
    },
    {
        "name": "Use a Crazy 8 as Orange Shy Guy"
    },
    {
        "name": "Use a Crazy 8 as Lakitu"
    },
    {
        "name": "Use a Crazy 8 as Toadette"
    },
    {
        "name": "Use a Crazy 8 as King Boo"
    },
    {
        "name": "Use a Crazy 8 as Baby Mario"
    },
    {
        "name": "Use a Crazy 8 as Baby Luigi"
    },
    {
        "name": "Use a Crazy 8 as Baby Peach"
    },
    {
        "name": "Use a Crazy 8 as Baby Daisy"
    },
    {
        "name": "Use a Crazy 8 as Baby Rosalina"
    },
    {
        "name": "Use a Crazy 8 as Gold Mario"
    },
    {
        "name": "Use a Crazy 8 as Metal Mario"
    },
    {
        "name": "Use a Crazy 8 as Pink Gold Peach"
    },
    {
        "name": "Use a Crazy 8 as Wario"
    },
    {
        "name": "Use a Crazy 8 as Waluigi"
    },
    {
        "name": "Use a Crazy 8 as Donkey Kong"
    },
    {
        "name": "Use a Crazy 8 as Bowser"
    },
    {
        "name": "Use a Crazy 8 as Dry Bones"
    },
    {
        "name": "Use a Crazy 8 as Bowser Jr."
    },
    {
        "name": "Use a Crazy 8 as Dry Bowser"
    },
    {
        "name": "Use a Crazy 8 as Lemmy"
    },
    {
        "name": "Use a Crazy 8 as Larry"
    },
    {
        "name": "Use a Crazy 8 as Wendy"
    },
    {
        "name": "Use a Crazy 8 as Ludwig"
    },
    {
        "name": "Use a Crazy 8 as Iggy"
    },
    {
        "name": "Use a Crazy 8 as Roy"
    },
    {
        "name": "Use a Crazy 8 as Morton"
    },
    {
        "name": "Use a Crazy 8 as Orange Inkling Girl"
    },
    {
        "name": "Use a Crazy 8 as Green Inkling Girl"
    },
    {
        "name": "Use a Crazy 8 as Pink Inkling Girl"
    },
    {
        "name": "Use a Crazy 8 as Blue Inkling Boy"
    },
    {
        "name": "Use a Crazy 8 as Purple Inkling Boy"
    },
    {
        "name": "Use a Crazy 8 as Cyan Inkling Boy"
    },
    {
        "name": "Use a Crazy 8 as Link Hero of the Skies"
    },
    {
        "name": "Use a Crazy 8 as Link Hero of the Wild"
    },
    {
        "name": "Use a Crazy 8 as Villager Boy"
    },
    {
        "name": "Use a Crazy 8 as Villager Girl"
    },
    {
        "name": "Use a Crazy 8 as Isabelle"
    },
    {
        "name": "Use a Crazy 8 as Mii Character"
    },
    {
        "name": "Grab a Item Box"
    },
    {
        "name": "Grab a Item Box as Mario"
    },
    {
        "name": "Grab a Item Box as Luigi"
    },
    {
        "name": "Grab a Item Box as Peach"
    },
    {
        "name": "Grab a Item Box as Daisy"
    },
    {
        "name": "Grab a Item Box as Rosalina"
    },
    {
        "name": "Grab a Item Box as Tanooki Mario"
    },
    {
        "name": "Grab a Item Box as Cat Peach"
    },
    {
        "name": "Grab a Item Box as Yoshi"
    },
    {
        "name": "Grab a Item Box as Light-Blue Yoshi"
    },
    {
        "name": "Grab a Item Box as Black Yoshi"
    },
    {
        "name": "Grab a Item Box as Red Yoshi"
    },
    {
        "name": "Grab a Item Box as Yellow Yoshi"
    },
    {
        "name": "Grab a Item Box as White Yoshi"
    },
    {
        "name": "Grab a Item Box as Blue Yoshi"
    },
    {
        "name": "Grab a Item Box as Pink Yoshi"
    },
    {
        "name": "Grab a Item Box as Orange Yoshi"
    },
    {
        "name": "Grab a Item Box as Toad"
    },
    {
        "name": "Grab a Item Box as Koopa Troopa"
    },
    {
        "name": "Grab a Item Box as Shy Guy"
    },
    {
        "name": "Grab a Item Box as Light-Blue Shy Guy"
    },
    {
        "name": "Grab a Item Box as Black Shy Guy"
    },
    {
        "name": "Grab a Item Box as Green Shy Guy"
    },
    {
        "name": "Grab a Item Box as Yellow Shy Guy"
    },
    {
        "name": "Grab a Item Box as White Shy Guy"
    },
    {
        "name": "Grab a Item Box as Blue Shy Guy"
    },
    {
        "name": "Grab a Item Box as Pink Shy Guy"
    },
    {
        "name": "Grab a Item Box as Orange Shy Guy"
    },
    {
        "name": "Grab a Item Box as Lakitu"
    },
    {
        "name": "Grab a Item Box as Toadette"
    },
    {
        "name": "Grab a Item Box as King Boo"
    },
    {
        "name": "Grab a Item Box as Baby Mario"
    },
    {
        "name": "Grab a Item Box as Baby Luigi"
    },
    {
        "name": "Grab a Item Box as Baby Peach"
    },
    {
        "name": "Grab a Item Box as Baby Daisy"
    },
    {
        "name": "Grab a Item Box as Baby Rosalina"
    },
    {
        "name": "Grab a Item Box as Gold Mario"
    },
    {
        "name": "Grab a Item Box as Metal Mario"
    },
    {
        "name": "Grab a Item Box as Pink Gold Peach"
    },
    {
        "name": "Grab a Item Box as Wario"
    },
    {
        "name": "Grab a Item Box as Waluigi"
    },
    {
        "name": "Grab a Item Box as Donkey Kong"
    },
    {
        "name": "Grab a Item Box as Bowser"
    },
    {
        "name": "Grab a Item Box as Dry Bones"
    },
    {
        "name": "Grab a Item Box as Bowser Jr."
    },
    {
        "name": "Grab a Item Box as Dry Bowser"
    },
    {
        "name": "Grab a Item Box as Lemmy"
    },
    {
        "name": "Grab a Item Box as Larry"
    },
    {
        "name": "Grab a Item Box as Wendy"
    },
    {
        "name": "Grab a Item Box as Ludwig"
    },
    {
        "name": "Grab a Item Box as Iggy"
    },
    {
        "name": "Grab a Item Box as Roy"
    },
    {
        "name": "Grab a Item Box as Morton"
    },
    {
        "name": "Grab a Item Box as Orange Inkling Girl"
    },
    {
        "name": "Grab a Item Box as Green Inkling Girl"
    },
    {
        "name": "Grab a Item Box as Pink Inkling Girl"
    },
    {
        "name": "Grab a Item Box as Blue Inkling Boy"
    },
    {
        "name": "Grab a Item Box as Purple Inkling Boy"
    },
    {
        "name": "Grab a Item Box as Cyan Inkling Boy"
    },
    {
        "name": "Grab a Item Box as Link Hero of the Skies"
    },
    {
        "name": "Grab a Item Box as Link Hero of the Wild"
    },
    {
        "name": "Grab a Item Box as Villager Boy"
    },
    {
        "name": "Grab a Item Box as Villager Girl"
    },
    {
        "name": "Grab a Item Box as Isabelle"
    },
    {
        "name": "Grab a Item Box as Mii Character"
    },
    {
        "name": "Grab 5 Item Box"
    },
    {
        "name": "Grab 5 Item Box as Mario"
    },
    {
        "name": "Grab 5 Item Box as Luigi"
    },
    {
        "name": "Grab 5 Item Box as Peach"
    },
    {
        "name": "Grab 5 Item Box as Daisy"
    },
    {
        "name": "Grab 5 Item Box as Rosalina"
    },
    {
        "name": "Grab 5 Item Box as Tanooki Mario"
    },
    {
        "name": "Grab 5 Item Box as Cat Peach"
    },
    {
        "name": "Grab 5 Item Box as Yoshi"
    },
    {
        "name": "Grab 5 Item Box as Light-Blue Yoshi"
    },
    {
        "name": "Grab 5 Item Box as Black Yoshi"
    },
    {
        "name": "Grab 5 Item Box as Red Yoshi"
    },
    {
        "name": "Grab 5 Item Box as Yellow Yoshi"
    },
    {
        "name": "Grab 5 Item Box as White Yoshi"
    },
    {
        "name": "Grab 5 Item Box as Blue Yoshi"
    },
    {
        "name": "Grab 5 Item Box as Pink Yoshi"
    },
    {
        "name": "Grab 5 Item Box as Orange Yoshi"
    },
    {
        "name": "Grab 5 Item Box as Toad"
    },
    {
        "name": "Grab 5 Item Box as Koopa Troopa"
    },
    {
        "name": "Grab 5 Item Box as Shy Guy"
    },
    {
        "name": "Grab 5 Item Box as Light-Blue Shy Guy"
    },
    {
        "name": "Grab 5 Item Box as Black Shy Guy"
    },
    {
        "name": "Grab 5 Item Box as Green Shy Guy"
    },
    {
        "name": "Grab 5 Item Box as Yellow Shy Guy"
    },
    {
        "name": "Grab 5 Item Box as White Shy Guy"
    },
    {
        "name": "Grab 5 Item Box as Blue Shy Guy"
    },
    {
        "name": "Grab 5 Item Box as Pink Shy Guy"
    },
    {
        "name": "Grab 5 Item Box as Orange Shy Guy"
    },
    {
        "name": "Grab 5 Item Box as Lakitu"
    },
    {
        "name": "Grab 5 Item Box as Toadette"
    },
    {
        "name": "Grab 5 Item Box as King Boo"
    },
    {
        "name": "Grab 5 Item Box as Baby Mario"
    },
    {
        "name": "Grab 5 Item Box as Baby Luigi"
    },
    {
        "name": "Grab 5 Item Box as Baby Peach"
    },
    {
        "name": "Grab 5 Item Box as Baby Daisy"
    },
    {
        "name": "Grab 5 Item Box as Baby Rosalina"
    },
    {
        "name": "Grab 5 Item Box as Gold Mario"
    },
    {
        "name": "Grab 5 Item Box as Metal Mario"
    },
    {
        "name": "Grab 5 Item Box as Pink Gold Peach"
    },
    {
        "name": "Grab 5 Item Box as Wario"
    },
    {
        "name": "Grab 5 Item Box as Waluigi"
    },
    {
        "name": "Grab 5 Item Box as Donkey Kong"
    },
    {
        "name": "Grab 5 Item Box as Bowser"
    },
    {
        "name": "Grab 5 Item Box as Dry Bones"
    },
    {
        "name": "Grab 5 Item Box as Bowser Jr."
    },
    {
        "name": "Grab 5 Item Box as Dry Bowser"
    },
    {
        "name": "Grab 5 Item Box as Lemmy"
    },
    {
        "name": "Grab 5 Item Box as Larry"
    },
    {
        "name": "Grab 5 Item Box as Wendy"
    },
    {
        "name": "Grab 5 Item Box as Ludwig"
    },
    {
        "name": "Grab 5 Item Box as Iggy"
    },
    {
        "name": "Grab 5 Item Box as Roy"
    },
    {
        "name": "Grab 5 Item Box as Morton"
    },
    {
        "name": "Grab 5 Item Box as Orange Inkling Girl"
    },
    {
        "name": "Grab 5 Item Box as Green Inkling Girl"
    },
    {
        "name": "Grab 5 Item Box as Pink Inkling Girl"
    },
    {
        "name": "Grab 5 Item Box as Blue Inkling Boy"
    },
    {
        "name": "Grab 5 Item Box as Purple Inkling Boy"
    },
    {
        "name": "Grab 5 Item Box as Cyan Inkling Boy"
    },
    {
        "name": "Grab 5 Item Box as Link Hero of the Skies"
    },
    {
        "name": "Grab 5 Item Box as Link Hero of the Wild"
    },
    {
        "name": "Grab 5 Item Box as Villager Boy"
    },
    {
        "name": "Grab 5 Item Box as Villager Girl"
    },
    {
        "name": "Grab 5 Item Box as Isabelle"
    },
    {
        "name": "Grab 5 Item Box as Mii Character"
    },
    {
        "name": "Grab 10 Item Box"
    },
    {
        "name": "Grab 10 Item Box as Mario"
    },
    {
        "name": "Grab 10 Item Box as Luigi"
    },
    {
        "name": "Grab 10 Item Box as Peach"
    },
    {
        "name": "Grab 10 Item Box as Daisy"
    },
    {
        "name": "Grab 10 Item Box as Rosalina"
    },
    {
        "name": "Grab 10 Item Box as Tanooki Mario"
    },
    {
        "name": "Grab 10 Item Box as Cat Peach"
    },
    {
        "name": "Grab 10 Item Box as Yoshi"
    },
    {
        "name": "Grab 10 Item Box as Light-Blue Yoshi"
    },
    {
        "name": "Grab 10 Item Box as Black Yoshi"
    },
    {
        "name": "Grab 10 Item Box as Red Yoshi"
    },
    {
        "name": "Grab 10 Item Box as Yellow Yoshi"
    },
    {
        "name": "Grab 10 Item Box as White Yoshi"
    },
    {
        "name": "Grab 10 Item Box as Blue Yoshi"
    },
    {
        "name": "Grab 10 Item Box as Pink Yoshi"
    },
    {
        "name": "Grab 10 Item Box as Orange Yoshi"
    },
    {
        "name": "Grab 10 Item Box as Toad"
    },
    {
        "name": "Grab 10 Item Box as Koopa Troopa"
    },
    {
        "name": "Grab 10 Item Box as Shy Guy"
    },
    {
        "name": "Grab 10 Item Box as Light-Blue Shy Guy"
    },
    {
        "name": "Grab 10 Item Box as Black Shy Guy"
    },
    {
        "name": "Grab 10 Item Box as Green Shy Guy"
    },
    {
        "name": "Grab 10 Item Box as Yellow Shy Guy"
    },
    {
        "name": "Grab 10 Item Box as White Shy Guy"
    },
    {
        "name": "Grab 10 Item Box as Blue Shy Guy"
    },
    {
        "name": "Grab 10 Item Box as Pink Shy Guy"
    },
    {
        "name": "Grab 10 Item Box as Orange Shy Guy"
    },
    {
        "name": "Grab 10 Item Box as Lakitu"
    },
    {
        "name": "Grab 10 Item Box as Toadette"
    },
    {
        "name": "Grab 10 Item Box as King Boo"
    },
    {
        "name": "Grab 10 Item Box as Baby Mario"
    },
    {
        "name": "Grab 10 Item Box as Baby Luigi"
    },
    {
        "name": "Grab 10 Item Box as Baby Peach"
    },
    {
        "name": "Grab 10 Item Box as Baby Daisy"
    },
    {
        "name": "Grab 10 Item Box as Baby Rosalina"
    },
    {
        "name": "Grab 10 Item Box as Gold Mario"
    },
    {
        "name": "Grab 10 Item Box as Metal Mario"
    },
    {
        "name": "Grab 10 Item Box as Pink Gold Peach"
    },
    {
        "name": "Grab 10 Item Box as Wario"
    },
    {
        "name": "Grab 10 Item Box as Waluigi"
    },
    {
        "name": "Grab 10 Item Box as Donkey Kong"
    },
    {
        "name": "Grab 10 Item Box as Bowser"
    },
    {
        "name": "Grab 10 Item Box as Dry Bones"
    },
    {
        "name": "Grab 10 Item Box as Bowser Jr."
    },
    {
        "name": "Grab 10 Item Box as Dry Bowser"
    },
    {
        "name": "Grab 10 Item Box as Lemmy"
    },
    {
        "name": "Grab 10 Item Box as Larry"
    },
    {
        "name": "Grab 10 Item Box as Wendy"
    },
    {
        "name": "Grab 10 Item Box as Ludwig"
    },
    {
        "name": "Grab 10 Item Box as Iggy"
    },
    {
        "name": "Grab 10 Item Box as Roy"
    },
    {
        "name": "Grab 10 Item Box as Morton"
    },
    {
        "name": "Grab 10 Item Box as Orange Inkling Girl"
    },
    {
        "name": "Grab 10 Item Box as Green Inkling Girl"
    },
    {
        "name": "Grab 10 Item Box as Pink Inkling Girl"
    },
    {
        "name": "Grab 10 Item Box as Blue Inkling Boy"
    },
    {
        "name": "Grab 10 Item Box as Purple Inkling Boy"
    },
    {
        "name": "Grab 10 Item Box as Cyan Inkling Boy"
    },
    {
        "name": "Grab 10 Item Box as Link Hero of the Skies"
    },
    {
        "name": "Grab 10 Item Box as Link Hero of the Wild"
    },
    {
        "name": "Grab 10 Item Box as Villager Boy"
    },
    {
        "name": "Grab 10 Item Box as Villager Girl"
    },
    {
        "name": "Grab 10 Item Box as Isabelle"
    },
    {
        "name": "Grab 10 Item Box as Mii Character"
    },
    {
        "name": "Grab 25 Item Box"
    },
    {
        "name": "Grab 25 Item Box as Mario"
    },
    {
        "name": "Grab 25 Item Box as Luigi"
    },
    {
        "name": "Grab 25 Item Box as Peach"
    },
    {
        "name": "Grab 25 Item Box as Daisy"
    },
    {
        "name": "Grab 25 Item Box as Rosalina"
    },
    {
        "name": "Grab 25 Item Box as Tanooki Mario"
    },
    {
        "name": "Grab 25 Item Box as Cat Peach"
    },
    {
        "name": "Grab 25 Item Box as Yoshi"
    },
    {
        "name": "Grab 25 Item Box as Light-Blue Yoshi"
    },
    {
        "name": "Grab 25 Item Box as Black Yoshi"
    },
    {
        "name": "Grab 25 Item Box as Red Yoshi"
    },
    {
        "name": "Grab 25 Item Box as Yellow Yoshi"
    },
    {
        "name": "Grab 25 Item Box as White Yoshi"
    },
    {
        "name": "Grab 25 Item Box as Blue Yoshi"
    },
    {
        "name": "Grab 25 Item Box as Pink Yoshi"
    },
    {
        "name": "Grab 25 Item Box as Orange Yoshi"
    },
    {
        "name": "Grab 25 Item Box as Toad"
    },
    {
        "name": "Grab 25 Item Box as Koopa Troopa"
    },
    {
        "name": "Grab 25 Item Box as Shy Guy"
    },
    {
        "name": "Grab 25 Item Box as Light-Blue Shy Guy"
    },
    {
        "name": "Grab 25 Item Box as Black Shy Guy"
    },
    {
        "name": "Grab 25 Item Box as Green Shy Guy"
    },
    {
        "name": "Grab 25 Item Box as Yellow Shy Guy"
    },
    {
        "name": "Grab 25 Item Box as White Shy Guy"
    },
    {
        "name": "Grab 25 Item Box as Blue Shy Guy"
    },
    {
        "name": "Grab 25 Item Box as Pink Shy Guy"
    },
    {
        "name": "Grab 25 Item Box as Orange Shy Guy"
    },
    {
        "name": "Grab 25 Item Box as Lakitu"
    },
    {
        "name": "Grab 25 Item Box as Toadette"
    },
    {
        "name": "Grab 25 Item Box as King Boo"
    },
    {
        "name": "Grab 25 Item Box as Baby Mario"
    },
    {
        "name": "Grab 25 Item Box as Baby Luigi"
    },
    {
        "name": "Grab 25 Item Box as Baby Peach"
    },
    {
        "name": "Grab 25 Item Box as Baby Daisy"
    },
    {
        "name": "Grab 25 Item Box as Baby Rosalina"
    },
    {
        "name": "Grab 25 Item Box as Gold Mario"
    },
    {
        "name": "Grab 25 Item Box as Metal Mario"
    },
    {
        "name": "Grab 25 Item Box as Pink Gold Peach"
    },
    {
        "name": "Grab 25 Item Box as Wario"
    },
    {
        "name": "Grab 25 Item Box as Waluigi"
    },
    {
        "name": "Grab 25 Item Box as Donkey Kong"
    },
    {
        "name": "Grab 25 Item Box as Bowser"
    },
    {
        "name": "Grab 25 Item Box as Dry Bones"
    },
    {
        "name": "Grab 25 Item Box as Bowser Jr."
    },
    {
        "name": "Grab 25 Item Box as Dry Bowser"
    },
    {
        "name": "Grab 25 Item Box as Lemmy"
    },
    {
        "name": "Grab 25 Item Box as Larry"
    },
    {
        "name": "Grab 25 Item Box as Wendy"
    },
    {
        "name": "Grab 25 Item Box as Ludwig"
    },
    {
        "name": "Grab 25 Item Box as Iggy"
    },
    {
        "name": "Grab 25 Item Box as Roy"
    },
    {
        "name": "Grab 25 Item Box as Morton"
    },
    {
        "name": "Grab 25 Item Box as Orange Inkling Girl"
    },
    {
        "name": "Grab 25 Item Box as Green Inkling Girl"
    },
    {
        "name": "Grab 25 Item Box as Pink Inkling Girl"
    },
    {
        "name": "Grab 25 Item Box as Blue Inkling Boy"
    },
    {
        "name": "Grab 25 Item Box as Purple Inkling Boy"
    },
    {
        "name": "Grab 25 Item Box as Cyan Inkling Boy"
    },
    {
        "name": "Grab 25 Item Box as Link Hero of the Skies"
    },
    {
        "name": "Grab 25 Item Box as Link Hero of the Wild"
    },
    {
        "name": "Grab 25 Item Box as Villager Boy"
    },
    {
        "name": "Grab 25 Item Box as Villager Girl"
    },
    {
        "name": "Grab 25 Item Box as Isabelle"
    },
    {
        "name": "Grab 25 Item Box as Mii Character"
    },
    {
        "name": "Get Hit by Green Shell"
    },
    {
        "name": "Get Hit by Green Shell as Mario"
    },
    {
        "name": "Get Hit by Green Shell as Luigi"
    },
    {
        "name": "Get Hit by Green Shell as Peach"
    },
    {
        "name": "Get Hit by Green Shell as Daisy"
    },
    {
        "name": "Get Hit by Green Shell as Rosalina"
    },
    {
        "name": "Get Hit by Green Shell as Tanooki Mario"
    },
    {
        "name": "Get Hit by Green Shell as Cat Peach"
    },
    {
        "name": "Get Hit by Green Shell as Yoshi"
    },
    {
        "name": "Get Hit by Green Shell as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Green Shell as Black Yoshi"
    },
    {
        "name": "Get Hit by Green Shell as Red Yoshi"
    },
    {
        "name": "Get Hit by Green Shell as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Green Shell as White Yoshi"
    },
    {
        "name": "Get Hit by Green Shell as Blue Yoshi"
    },
    {
        "name": "Get Hit by Green Shell as Pink Yoshi"
    },
    {
        "name": "Get Hit by Green Shell as Orange Yoshi"
    },
    {
        "name": "Get Hit by Green Shell as Toad"
    },
    {
        "name": "Get Hit by Green Shell as Koopa Troopa"
    },
    {
        "name": "Get Hit by Green Shell as Shy Guy"
    },
    {
        "name": "Get Hit by Green Shell as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Green Shell as Black Shy Guy"
    },
    {
        "name": "Get Hit by Green Shell as Green Shy Guy"
    },
    {
        "name": "Get Hit by Green Shell as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Green Shell as White Shy Guy"
    },
    {
        "name": "Get Hit by Green Shell as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Green Shell as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Green Shell as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Green Shell as Lakitu"
    },
    {
        "name": "Get Hit by Green Shell as Toadette"
    },
    {
        "name": "Get Hit by Green Shell as King Boo"
    },
    {
        "name": "Get Hit by Green Shell as Baby Mario"
    },
    {
        "name": "Get Hit by Green Shell as Baby Luigi"
    },
    {
        "name": "Get Hit by Green Shell as Baby Peach"
    },
    {
        "name": "Get Hit by Green Shell as Baby Daisy"
    },
    {
        "name": "Get Hit by Green Shell as Baby Rosalina"
    },
    {
        "name": "Get Hit by Green Shell as Gold Mario"
    },
    {
        "name": "Get Hit by Green Shell as Metal Mario"
    },
    {
        "name": "Get Hit by Green Shell as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Green Shell as Wario"
    },
    {
        "name": "Get Hit by Green Shell as Waluigi"
    },
    {
        "name": "Get Hit by Green Shell as Donkey Kong"
    },
    {
        "name": "Get Hit by Green Shell as Bowser"
    },
    {
        "name": "Get Hit by Green Shell as Dry Bones"
    },
    {
        "name": "Get Hit by Green Shell as Bowser Jr."
    },
    {
        "name": "Get Hit by Green Shell as Dry Bowser"
    },
    {
        "name": "Get Hit by Green Shell as Lemmy"
    },
    {
        "name": "Get Hit by Green Shell as Larry"
    },
    {
        "name": "Get Hit by Green Shell as Wendy"
    },
    {
        "name": "Get Hit by Green Shell as Ludwig"
    },
    {
        "name": "Get Hit by Green Shell as Iggy"
    },
    {
        "name": "Get Hit by Green Shell as Roy"
    },
    {
        "name": "Get Hit by Green Shell as Morton"
    },
    {
        "name": "Get Hit by Green Shell as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Green Shell as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Green Shell as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Green Shell as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Green Shell as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Green Shell as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Green Shell as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Green Shell as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Green Shell as Villager Boy"
    },
    {
        "name": "Get Hit by Green Shell as Villager Girl"
    },
    {
        "name": "Get Hit by Green Shell as Isabelle"
    },
    {
        "name": "Get Hit by Green Shell as Mii Character"
    },
    {
        "name": "Get Hit by Red Shell"
    },
    {
        "name": "Get Hit by Red Shell as Mario"
    },
    {
        "name": "Get Hit by Red Shell as Luigi"
    },
    {
        "name": "Get Hit by Red Shell as Peach"
    },
    {
        "name": "Get Hit by Red Shell as Daisy"
    },
    {
        "name": "Get Hit by Red Shell as Rosalina"
    },
    {
        "name": "Get Hit by Red Shell as Tanooki Mario"
    },
    {
        "name": "Get Hit by Red Shell as Cat Peach"
    },
    {
        "name": "Get Hit by Red Shell as Yoshi"
    },
    {
        "name": "Get Hit by Red Shell as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Red Shell as Black Yoshi"
    },
    {
        "name": "Get Hit by Red Shell as Red Yoshi"
    },
    {
        "name": "Get Hit by Red Shell as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Red Shell as White Yoshi"
    },
    {
        "name": "Get Hit by Red Shell as Blue Yoshi"
    },
    {
        "name": "Get Hit by Red Shell as Pink Yoshi"
    },
    {
        "name": "Get Hit by Red Shell as Orange Yoshi"
    },
    {
        "name": "Get Hit by Red Shell as Toad"
    },
    {
        "name": "Get Hit by Red Shell as Koopa Troopa"
    },
    {
        "name": "Get Hit by Red Shell as Shy Guy"
    },
    {
        "name": "Get Hit by Red Shell as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Red Shell as Black Shy Guy"
    },
    {
        "name": "Get Hit by Red Shell as Green Shy Guy"
    },
    {
        "name": "Get Hit by Red Shell as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Red Shell as White Shy Guy"
    },
    {
        "name": "Get Hit by Red Shell as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Red Shell as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Red Shell as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Red Shell as Lakitu"
    },
    {
        "name": "Get Hit by Red Shell as Toadette"
    },
    {
        "name": "Get Hit by Red Shell as King Boo"
    },
    {
        "name": "Get Hit by Red Shell as Baby Mario"
    },
    {
        "name": "Get Hit by Red Shell as Baby Luigi"
    },
    {
        "name": "Get Hit by Red Shell as Baby Peach"
    },
    {
        "name": "Get Hit by Red Shell as Baby Daisy"
    },
    {
        "name": "Get Hit by Red Shell as Baby Rosalina"
    },
    {
        "name": "Get Hit by Red Shell as Gold Mario"
    },
    {
        "name": "Get Hit by Red Shell as Metal Mario"
    },
    {
        "name": "Get Hit by Red Shell as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Red Shell as Wario"
    },
    {
        "name": "Get Hit by Red Shell as Waluigi"
    },
    {
        "name": "Get Hit by Red Shell as Donkey Kong"
    },
    {
        "name": "Get Hit by Red Shell as Bowser"
    },
    {
        "name": "Get Hit by Red Shell as Dry Bones"
    },
    {
        "name": "Get Hit by Red Shell as Bowser Jr."
    },
    {
        "name": "Get Hit by Red Shell as Dry Bowser"
    },
    {
        "name": "Get Hit by Red Shell as Lemmy"
    },
    {
        "name": "Get Hit by Red Shell as Larry"
    },
    {
        "name": "Get Hit by Red Shell as Wendy"
    },
    {
        "name": "Get Hit by Red Shell as Ludwig"
    },
    {
        "name": "Get Hit by Red Shell as Iggy"
    },
    {
        "name": "Get Hit by Red Shell as Roy"
    },
    {
        "name": "Get Hit by Red Shell as Morton"
    },
    {
        "name": "Get Hit by Red Shell as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Red Shell as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Red Shell as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Red Shell as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Red Shell as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Red Shell as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Red Shell as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Red Shell as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Red Shell as Villager Boy"
    },
    {
        "name": "Get Hit by Red Shell as Villager Girl"
    },
    {
        "name": "Get Hit by Red Shell as Isabelle"
    },
    {
        "name": "Get Hit by Red Shell as Mii Character"
    },
    {
        "name": "Get Hit by Banana"
    },
    {
        "name": "Get Hit by Banana as Mario"
    },
    {
        "name": "Get Hit by Banana as Luigi"
    },
    {
        "name": "Get Hit by Banana as Peach"
    },
    {
        "name": "Get Hit by Banana as Daisy"
    },
    {
        "name": "Get Hit by Banana as Rosalina"
    },
    {
        "name": "Get Hit by Banana as Tanooki Mario"
    },
    {
        "name": "Get Hit by Banana as Cat Peach"
    },
    {
        "name": "Get Hit by Banana as Yoshi"
    },
    {
        "name": "Get Hit by Banana as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Banana as Black Yoshi"
    },
    {
        "name": "Get Hit by Banana as Red Yoshi"
    },
    {
        "name": "Get Hit by Banana as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Banana as White Yoshi"
    },
    {
        "name": "Get Hit by Banana as Blue Yoshi"
    },
    {
        "name": "Get Hit by Banana as Pink Yoshi"
    },
    {
        "name": "Get Hit by Banana as Orange Yoshi"
    },
    {
        "name": "Get Hit by Banana as Toad"
    },
    {
        "name": "Get Hit by Banana as Koopa Troopa"
    },
    {
        "name": "Get Hit by Banana as Shy Guy"
    },
    {
        "name": "Get Hit by Banana as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Banana as Black Shy Guy"
    },
    {
        "name": "Get Hit by Banana as Green Shy Guy"
    },
    {
        "name": "Get Hit by Banana as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Banana as White Shy Guy"
    },
    {
        "name": "Get Hit by Banana as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Banana as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Banana as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Banana as Lakitu"
    },
    {
        "name": "Get Hit by Banana as Toadette"
    },
    {
        "name": "Get Hit by Banana as King Boo"
    },
    {
        "name": "Get Hit by Banana as Baby Mario"
    },
    {
        "name": "Get Hit by Banana as Baby Luigi"
    },
    {
        "name": "Get Hit by Banana as Baby Peach"
    },
    {
        "name": "Get Hit by Banana as Baby Daisy"
    },
    {
        "name": "Get Hit by Banana as Baby Rosalina"
    },
    {
        "name": "Get Hit by Banana as Gold Mario"
    },
    {
        "name": "Get Hit by Banana as Metal Mario"
    },
    {
        "name": "Get Hit by Banana as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Banana as Wario"
    },
    {
        "name": "Get Hit by Banana as Waluigi"
    },
    {
        "name": "Get Hit by Banana as Donkey Kong"
    },
    {
        "name": "Get Hit by Banana as Bowser"
    },
    {
        "name": "Get Hit by Banana as Dry Bones"
    },
    {
        "name": "Get Hit by Banana as Bowser Jr."
    },
    {
        "name": "Get Hit by Banana as Dry Bowser"
    },
    {
        "name": "Get Hit by Banana as Lemmy"
    },
    {
        "name": "Get Hit by Banana as Larry"
    },
    {
        "name": "Get Hit by Banana as Wendy"
    },
    {
        "name": "Get Hit by Banana as Ludwig"
    },
    {
        "name": "Get Hit by Banana as Iggy"
    },
    {
        "name": "Get Hit by Banana as Roy"
    },
    {
        "name": "Get Hit by Banana as Morton"
    },
    {
        "name": "Get Hit by Banana as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Banana as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Banana as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Banana as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Banana as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Banana as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Banana as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Banana as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Banana as Villager Boy"
    },
    {
        "name": "Get Hit by Banana as Villager Girl"
    },
    {
        "name": "Get Hit by Banana as Isabelle"
    },
    {
        "name": "Get Hit by Banana as Mii Character"
    },
    {
        "name": "Get Hit by Fire Flower"
    },
    {
        "name": "Get Hit by Fire Flower as Mario"
    },
    {
        "name": "Get Hit by Fire Flower as Luigi"
    },
    {
        "name": "Get Hit by Fire Flower as Peach"
    },
    {
        "name": "Get Hit by Fire Flower as Daisy"
    },
    {
        "name": "Get Hit by Fire Flower as Rosalina"
    },
    {
        "name": "Get Hit by Fire Flower as Tanooki Mario"
    },
    {
        "name": "Get Hit by Fire Flower as Cat Peach"
    },
    {
        "name": "Get Hit by Fire Flower as Yoshi"
    },
    {
        "name": "Get Hit by Fire Flower as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Fire Flower as Black Yoshi"
    },
    {
        "name": "Get Hit by Fire Flower as Red Yoshi"
    },
    {
        "name": "Get Hit by Fire Flower as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Fire Flower as White Yoshi"
    },
    {
        "name": "Get Hit by Fire Flower as Blue Yoshi"
    },
    {
        "name": "Get Hit by Fire Flower as Pink Yoshi"
    },
    {
        "name": "Get Hit by Fire Flower as Orange Yoshi"
    },
    {
        "name": "Get Hit by Fire Flower as Toad"
    },
    {
        "name": "Get Hit by Fire Flower as Koopa Troopa"
    },
    {
        "name": "Get Hit by Fire Flower as Shy Guy"
    },
    {
        "name": "Get Hit by Fire Flower as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Fire Flower as Black Shy Guy"
    },
    {
        "name": "Get Hit by Fire Flower as Green Shy Guy"
    },
    {
        "name": "Get Hit by Fire Flower as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Fire Flower as White Shy Guy"
    },
    {
        "name": "Get Hit by Fire Flower as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Fire Flower as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Fire Flower as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Fire Flower as Lakitu"
    },
    {
        "name": "Get Hit by Fire Flower as Toadette"
    },
    {
        "name": "Get Hit by Fire Flower as King Boo"
    },
    {
        "name": "Get Hit by Fire Flower as Baby Mario"
    },
    {
        "name": "Get Hit by Fire Flower as Baby Luigi"
    },
    {
        "name": "Get Hit by Fire Flower as Baby Peach"
    },
    {
        "name": "Get Hit by Fire Flower as Baby Daisy"
    },
    {
        "name": "Get Hit by Fire Flower as Baby Rosalina"
    },
    {
        "name": "Get Hit by Fire Flower as Gold Mario"
    },
    {
        "name": "Get Hit by Fire Flower as Metal Mario"
    },
    {
        "name": "Get Hit by Fire Flower as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Fire Flower as Wario"
    },
    {
        "name": "Get Hit by Fire Flower as Waluigi"
    },
    {
        "name": "Get Hit by Fire Flower as Donkey Kong"
    },
    {
        "name": "Get Hit by Fire Flower as Bowser"
    },
    {
        "name": "Get Hit by Fire Flower as Dry Bones"
    },
    {
        "name": "Get Hit by Fire Flower as Bowser Jr."
    },
    {
        "name": "Get Hit by Fire Flower as Dry Bowser"
    },
    {
        "name": "Get Hit by Fire Flower as Lemmy"
    },
    {
        "name": "Get Hit by Fire Flower as Larry"
    },
    {
        "name": "Get Hit by Fire Flower as Wendy"
    },
    {
        "name": "Get Hit by Fire Flower as Ludwig"
    },
    {
        "name": "Get Hit by Fire Flower as Iggy"
    },
    {
        "name": "Get Hit by Fire Flower as Roy"
    },
    {
        "name": "Get Hit by Fire Flower as Morton"
    },
    {
        "name": "Get Hit by Fire Flower as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Fire Flower as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Fire Flower as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Fire Flower as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Fire Flower as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Fire Flower as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Fire Flower as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Fire Flower as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Fire Flower as Villager Boy"
    },
    {
        "name": "Get Hit by Fire Flower as Villager Girl"
    },
    {
        "name": "Get Hit by Fire Flower as Isabelle"
    },
    {
        "name": "Get Hit by Fire Flower as Mii Character"
    },
    {
        "name": "Get Hit by Star Power"
    },
    {
        "name": "Get Hit by Star Power as Mario"
    },
    {
        "name": "Get Hit by Star Power as Luigi"
    },
    {
        "name": "Get Hit by Star Power as Peach"
    },
    {
        "name": "Get Hit by Star Power as Daisy"
    },
    {
        "name": "Get Hit by Star Power as Rosalina"
    },
    {
        "name": "Get Hit by Star Power as Tanooki Mario"
    },
    {
        "name": "Get Hit by Star Power as Cat Peach"
    },
    {
        "name": "Get Hit by Star Power as Yoshi"
    },
    {
        "name": "Get Hit by Star Power as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Star Power as Black Yoshi"
    },
    {
        "name": "Get Hit by Star Power as Red Yoshi"
    },
    {
        "name": "Get Hit by Star Power as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Star Power as White Yoshi"
    },
    {
        "name": "Get Hit by Star Power as Blue Yoshi"
    },
    {
        "name": "Get Hit by Star Power as Pink Yoshi"
    },
    {
        "name": "Get Hit by Star Power as Orange Yoshi"
    },
    {
        "name": "Get Hit by Star Power as Toad"
    },
    {
        "name": "Get Hit by Star Power as Koopa Troopa"
    },
    {
        "name": "Get Hit by Star Power as Shy Guy"
    },
    {
        "name": "Get Hit by Star Power as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Star Power as Black Shy Guy"
    },
    {
        "name": "Get Hit by Star Power as Green Shy Guy"
    },
    {
        "name": "Get Hit by Star Power as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Star Power as White Shy Guy"
    },
    {
        "name": "Get Hit by Star Power as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Star Power as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Star Power as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Star Power as Lakitu"
    },
    {
        "name": "Get Hit by Star Power as Toadette"
    },
    {
        "name": "Get Hit by Star Power as King Boo"
    },
    {
        "name": "Get Hit by Star Power as Baby Mario"
    },
    {
        "name": "Get Hit by Star Power as Baby Luigi"
    },
    {
        "name": "Get Hit by Star Power as Baby Peach"
    },
    {
        "name": "Get Hit by Star Power as Baby Daisy"
    },
    {
        "name": "Get Hit by Star Power as Baby Rosalina"
    },
    {
        "name": "Get Hit by Star Power as Gold Mario"
    },
    {
        "name": "Get Hit by Star Power as Metal Mario"
    },
    {
        "name": "Get Hit by Star Power as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Star Power as Wario"
    },
    {
        "name": "Get Hit by Star Power as Waluigi"
    },
    {
        "name": "Get Hit by Star Power as Donkey Kong"
    },
    {
        "name": "Get Hit by Star Power as Bowser"
    },
    {
        "name": "Get Hit by Star Power as Dry Bones"
    },
    {
        "name": "Get Hit by Star Power as Bowser Jr."
    },
    {
        "name": "Get Hit by Star Power as Dry Bowser"
    },
    {
        "name": "Get Hit by Star Power as Lemmy"
    },
    {
        "name": "Get Hit by Star Power as Larry"
    },
    {
        "name": "Get Hit by Star Power as Wendy"
    },
    {
        "name": "Get Hit by Star Power as Ludwig"
    },
    {
        "name": "Get Hit by Star Power as Iggy"
    },
    {
        "name": "Get Hit by Star Power as Roy"
    },
    {
        "name": "Get Hit by Star Power as Morton"
    },
    {
        "name": "Get Hit by Star Power as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Star Power as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Star Power as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Star Power as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Star Power as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Star Power as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Star Power as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Star Power as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Star Power as Villager Boy"
    },
    {
        "name": "Get Hit by Star Power as Villager Girl"
    },
    {
        "name": "Get Hit by Star Power as Isabelle"
    },
    {
        "name": "Get Hit by Star Power as Mii Character"
    },
    {
        "name": "Get Hit by Blooper"
    },
    {
        "name": "Get Hit by Blooper as Mario"
    },
    {
        "name": "Get Hit by Blooper as Luigi"
    },
    {
        "name": "Get Hit by Blooper as Peach"
    },
    {
        "name": "Get Hit by Blooper as Daisy"
    },
    {
        "name": "Get Hit by Blooper as Rosalina"
    },
    {
        "name": "Get Hit by Blooper as Tanooki Mario"
    },
    {
        "name": "Get Hit by Blooper as Cat Peach"
    },
    {
        "name": "Get Hit by Blooper as Yoshi"
    },
    {
        "name": "Get Hit by Blooper as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Blooper as Black Yoshi"
    },
    {
        "name": "Get Hit by Blooper as Red Yoshi"
    },
    {
        "name": "Get Hit by Blooper as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Blooper as White Yoshi"
    },
    {
        "name": "Get Hit by Blooper as Blue Yoshi"
    },
    {
        "name": "Get Hit by Blooper as Pink Yoshi"
    },
    {
        "name": "Get Hit by Blooper as Orange Yoshi"
    },
    {
        "name": "Get Hit by Blooper as Toad"
    },
    {
        "name": "Get Hit by Blooper as Koopa Troopa"
    },
    {
        "name": "Get Hit by Blooper as Shy Guy"
    },
    {
        "name": "Get Hit by Blooper as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Blooper as Black Shy Guy"
    },
    {
        "name": "Get Hit by Blooper as Green Shy Guy"
    },
    {
        "name": "Get Hit by Blooper as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Blooper as White Shy Guy"
    },
    {
        "name": "Get Hit by Blooper as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Blooper as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Blooper as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Blooper as Lakitu"
    },
    {
        "name": "Get Hit by Blooper as Toadette"
    },
    {
        "name": "Get Hit by Blooper as King Boo"
    },
    {
        "name": "Get Hit by Blooper as Baby Mario"
    },
    {
        "name": "Get Hit by Blooper as Baby Luigi"
    },
    {
        "name": "Get Hit by Blooper as Baby Peach"
    },
    {
        "name": "Get Hit by Blooper as Baby Daisy"
    },
    {
        "name": "Get Hit by Blooper as Baby Rosalina"
    },
    {
        "name": "Get Hit by Blooper as Gold Mario"
    },
    {
        "name": "Get Hit by Blooper as Metal Mario"
    },
    {
        "name": "Get Hit by Blooper as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Blooper as Wario"
    },
    {
        "name": "Get Hit by Blooper as Waluigi"
    },
    {
        "name": "Get Hit by Blooper as Donkey Kong"
    },
    {
        "name": "Get Hit by Blooper as Bowser"
    },
    {
        "name": "Get Hit by Blooper as Dry Bones"
    },
    {
        "name": "Get Hit by Blooper as Bowser Jr."
    },
    {
        "name": "Get Hit by Blooper as Dry Bowser"
    },
    {
        "name": "Get Hit by Blooper as Lemmy"
    },
    {
        "name": "Get Hit by Blooper as Larry"
    },
    {
        "name": "Get Hit by Blooper as Wendy"
    },
    {
        "name": "Get Hit by Blooper as Ludwig"
    },
    {
        "name": "Get Hit by Blooper as Iggy"
    },
    {
        "name": "Get Hit by Blooper as Roy"
    },
    {
        "name": "Get Hit by Blooper as Morton"
    },
    {
        "name": "Get Hit by Blooper as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Blooper as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Blooper as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Blooper as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Blooper as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Blooper as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Blooper as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Blooper as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Blooper as Villager Boy"
    },
    {
        "name": "Get Hit by Blooper as Villager Girl"
    },
    {
        "name": "Get Hit by Blooper as Isabelle"
    },
    {
        "name": "Get Hit by Blooper as Mii Character"
    },
    {
        "name": "Get Hit by Bob-omb"
    },
    {
        "name": "Get Hit by Bob-omb as Mario"
    },
    {
        "name": "Get Hit by Bob-omb as Luigi"
    },
    {
        "name": "Get Hit by Bob-omb as Peach"
    },
    {
        "name": "Get Hit by Bob-omb as Daisy"
    },
    {
        "name": "Get Hit by Bob-omb as Rosalina"
    },
    {
        "name": "Get Hit by Bob-omb as Tanooki Mario"
    },
    {
        "name": "Get Hit by Bob-omb as Cat Peach"
    },
    {
        "name": "Get Hit by Bob-omb as Yoshi"
    },
    {
        "name": "Get Hit by Bob-omb as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Bob-omb as Black Yoshi"
    },
    {
        "name": "Get Hit by Bob-omb as Red Yoshi"
    },
    {
        "name": "Get Hit by Bob-omb as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Bob-omb as White Yoshi"
    },
    {
        "name": "Get Hit by Bob-omb as Blue Yoshi"
    },
    {
        "name": "Get Hit by Bob-omb as Pink Yoshi"
    },
    {
        "name": "Get Hit by Bob-omb as Orange Yoshi"
    },
    {
        "name": "Get Hit by Bob-omb as Toad"
    },
    {
        "name": "Get Hit by Bob-omb as Koopa Troopa"
    },
    {
        "name": "Get Hit by Bob-omb as Shy Guy"
    },
    {
        "name": "Get Hit by Bob-omb as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Bob-omb as Black Shy Guy"
    },
    {
        "name": "Get Hit by Bob-omb as Green Shy Guy"
    },
    {
        "name": "Get Hit by Bob-omb as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Bob-omb as White Shy Guy"
    },
    {
        "name": "Get Hit by Bob-omb as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Bob-omb as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Bob-omb as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Bob-omb as Lakitu"
    },
    {
        "name": "Get Hit by Bob-omb as Toadette"
    },
    {
        "name": "Get Hit by Bob-omb as King Boo"
    },
    {
        "name": "Get Hit by Bob-omb as Baby Mario"
    },
    {
        "name": "Get Hit by Bob-omb as Baby Luigi"
    },
    {
        "name": "Get Hit by Bob-omb as Baby Peach"
    },
    {
        "name": "Get Hit by Bob-omb as Baby Daisy"
    },
    {
        "name": "Get Hit by Bob-omb as Baby Rosalina"
    },
    {
        "name": "Get Hit by Bob-omb as Gold Mario"
    },
    {
        "name": "Get Hit by Bob-omb as Metal Mario"
    },
    {
        "name": "Get Hit by Bob-omb as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Bob-omb as Wario"
    },
    {
        "name": "Get Hit by Bob-omb as Waluigi"
    },
    {
        "name": "Get Hit by Bob-omb as Donkey Kong"
    },
    {
        "name": "Get Hit by Bob-omb as Bowser"
    },
    {
        "name": "Get Hit by Bob-omb as Dry Bones"
    },
    {
        "name": "Get Hit by Bob-omb as Bowser Jr."
    },
    {
        "name": "Get Hit by Bob-omb as Dry Bowser"
    },
    {
        "name": "Get Hit by Bob-omb as Lemmy"
    },
    {
        "name": "Get Hit by Bob-omb as Larry"
    },
    {
        "name": "Get Hit by Bob-omb as Wendy"
    },
    {
        "name": "Get Hit by Bob-omb as Ludwig"
    },
    {
        "name": "Get Hit by Bob-omb as Iggy"
    },
    {
        "name": "Get Hit by Bob-omb as Roy"
    },
    {
        "name": "Get Hit by Bob-omb as Morton"
    },
    {
        "name": "Get Hit by Bob-omb as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Bob-omb as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Bob-omb as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Bob-omb as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Bob-omb as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Bob-omb as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Bob-omb as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Bob-omb as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Bob-omb as Villager Boy"
    },
    {
        "name": "Get Hit by Bob-omb as Villager Girl"
    },
    {
        "name": "Get Hit by Bob-omb as Isabelle"
    },
    {
        "name": "Get Hit by Bob-omb as Mii Character"
    },
    {
        "name": "Get Hit by Blue Shell"
    },
    {
        "name": "Get Hit by Blue Shell as Mario"
    },
    {
        "name": "Get Hit by Blue Shell as Luigi"
    },
    {
        "name": "Get Hit by Blue Shell as Peach"
    },
    {
        "name": "Get Hit by Blue Shell as Daisy"
    },
    {
        "name": "Get Hit by Blue Shell as Rosalina"
    },
    {
        "name": "Get Hit by Blue Shell as Tanooki Mario"
    },
    {
        "name": "Get Hit by Blue Shell as Cat Peach"
    },
    {
        "name": "Get Hit by Blue Shell as Yoshi"
    },
    {
        "name": "Get Hit by Blue Shell as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Blue Shell as Black Yoshi"
    },
    {
        "name": "Get Hit by Blue Shell as Red Yoshi"
    },
    {
        "name": "Get Hit by Blue Shell as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Blue Shell as White Yoshi"
    },
    {
        "name": "Get Hit by Blue Shell as Blue Yoshi"
    },
    {
        "name": "Get Hit by Blue Shell as Pink Yoshi"
    },
    {
        "name": "Get Hit by Blue Shell as Orange Yoshi"
    },
    {
        "name": "Get Hit by Blue Shell as Toad"
    },
    {
        "name": "Get Hit by Blue Shell as Koopa Troopa"
    },
    {
        "name": "Get Hit by Blue Shell as Shy Guy"
    },
    {
        "name": "Get Hit by Blue Shell as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Blue Shell as Black Shy Guy"
    },
    {
        "name": "Get Hit by Blue Shell as Green Shy Guy"
    },
    {
        "name": "Get Hit by Blue Shell as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Blue Shell as White Shy Guy"
    },
    {
        "name": "Get Hit by Blue Shell as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Blue Shell as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Blue Shell as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Blue Shell as Lakitu"
    },
    {
        "name": "Get Hit by Blue Shell as Toadette"
    },
    {
        "name": "Get Hit by Blue Shell as King Boo"
    },
    {
        "name": "Get Hit by Blue Shell as Baby Mario"
    },
    {
        "name": "Get Hit by Blue Shell as Baby Luigi"
    },
    {
        "name": "Get Hit by Blue Shell as Baby Peach"
    },
    {
        "name": "Get Hit by Blue Shell as Baby Daisy"
    },
    {
        "name": "Get Hit by Blue Shell as Baby Rosalina"
    },
    {
        "name": "Get Hit by Blue Shell as Gold Mario"
    },
    {
        "name": "Get Hit by Blue Shell as Metal Mario"
    },
    {
        "name": "Get Hit by Blue Shell as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Blue Shell as Wario"
    },
    {
        "name": "Get Hit by Blue Shell as Waluigi"
    },
    {
        "name": "Get Hit by Blue Shell as Donkey Kong"
    },
    {
        "name": "Get Hit by Blue Shell as Bowser"
    },
    {
        "name": "Get Hit by Blue Shell as Dry Bones"
    },
    {
        "name": "Get Hit by Blue Shell as Bowser Jr."
    },
    {
        "name": "Get Hit by Blue Shell as Dry Bowser"
    },
    {
        "name": "Get Hit by Blue Shell as Lemmy"
    },
    {
        "name": "Get Hit by Blue Shell as Larry"
    },
    {
        "name": "Get Hit by Blue Shell as Wendy"
    },
    {
        "name": "Get Hit by Blue Shell as Ludwig"
    },
    {
        "name": "Get Hit by Blue Shell as Iggy"
    },
    {
        "name": "Get Hit by Blue Shell as Roy"
    },
    {
        "name": "Get Hit by Blue Shell as Morton"
    },
    {
        "name": "Get Hit by Blue Shell as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Blue Shell as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Blue Shell as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Blue Shell as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Blue Shell as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Blue Shell as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Blue Shell as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Blue Shell as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Blue Shell as Villager Boy"
    },
    {
        "name": "Get Hit by Blue Shell as Villager Girl"
    },
    {
        "name": "Get Hit by Blue Shell as Isabelle"
    },
    {
        "name": "Get Hit by Blue Shell as Mii Character"
    },
    {
        "name": "Get Hit by Lightning"
    },
    {
        "name": "Get Hit by Lightning as Mario"
    },
    {
        "name": "Get Hit by Lightning as Luigi"
    },
    {
        "name": "Get Hit by Lightning as Peach"
    },
    {
        "name": "Get Hit by Lightning as Daisy"
    },
    {
        "name": "Get Hit by Lightning as Rosalina"
    },
    {
        "name": "Get Hit by Lightning as Tanooki Mario"
    },
    {
        "name": "Get Hit by Lightning as Cat Peach"
    },
    {
        "name": "Get Hit by Lightning as Yoshi"
    },
    {
        "name": "Get Hit by Lightning as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Lightning as Black Yoshi"
    },
    {
        "name": "Get Hit by Lightning as Red Yoshi"
    },
    {
        "name": "Get Hit by Lightning as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Lightning as White Yoshi"
    },
    {
        "name": "Get Hit by Lightning as Blue Yoshi"
    },
    {
        "name": "Get Hit by Lightning as Pink Yoshi"
    },
    {
        "name": "Get Hit by Lightning as Orange Yoshi"
    },
    {
        "name": "Get Hit by Lightning as Toad"
    },
    {
        "name": "Get Hit by Lightning as Koopa Troopa"
    },
    {
        "name": "Get Hit by Lightning as Shy Guy"
    },
    {
        "name": "Get Hit by Lightning as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Lightning as Black Shy Guy"
    },
    {
        "name": "Get Hit by Lightning as Green Shy Guy"
    },
    {
        "name": "Get Hit by Lightning as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Lightning as White Shy Guy"
    },
    {
        "name": "Get Hit by Lightning as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Lightning as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Lightning as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Lightning as Lakitu"
    },
    {
        "name": "Get Hit by Lightning as Toadette"
    },
    {
        "name": "Get Hit by Lightning as King Boo"
    },
    {
        "name": "Get Hit by Lightning as Baby Mario"
    },
    {
        "name": "Get Hit by Lightning as Baby Luigi"
    },
    {
        "name": "Get Hit by Lightning as Baby Peach"
    },
    {
        "name": "Get Hit by Lightning as Baby Daisy"
    },
    {
        "name": "Get Hit by Lightning as Baby Rosalina"
    },
    {
        "name": "Get Hit by Lightning as Gold Mario"
    },
    {
        "name": "Get Hit by Lightning as Metal Mario"
    },
    {
        "name": "Get Hit by Lightning as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Lightning as Wario"
    },
    {
        "name": "Get Hit by Lightning as Waluigi"
    },
    {
        "name": "Get Hit by Lightning as Donkey Kong"
    },
    {
        "name": "Get Hit by Lightning as Bowser"
    },
    {
        "name": "Get Hit by Lightning as Dry Bones"
    },
    {
        "name": "Get Hit by Lightning as Bowser Jr."
    },
    {
        "name": "Get Hit by Lightning as Dry Bowser"
    },
    {
        "name": "Get Hit by Lightning as Lemmy"
    },
    {
        "name": "Get Hit by Lightning as Larry"
    },
    {
        "name": "Get Hit by Lightning as Wendy"
    },
    {
        "name": "Get Hit by Lightning as Ludwig"
    },
    {
        "name": "Get Hit by Lightning as Iggy"
    },
    {
        "name": "Get Hit by Lightning as Roy"
    },
    {
        "name": "Get Hit by Lightning as Morton"
    },
    {
        "name": "Get Hit by Lightning as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Lightning as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Lightning as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Lightning as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Lightning as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Lightning as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Lightning as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Lightning as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Lightning as Villager Boy"
    },
    {
        "name": "Get Hit by Lightning as Villager Girl"
    },
    {
        "name": "Get Hit by Lightning as Isabelle"
    },
    {
        "name": "Get Hit by Lightning as Mii Character"
    },
    {
        "name": "Get Hit by Bullet Bill"
    },
    {
        "name": "Get Hit by Bullet Bill as Mario"
    },
    {
        "name": "Get Hit by Bullet Bill as Luigi"
    },
    {
        "name": "Get Hit by Bullet Bill as Peach"
    },
    {
        "name": "Get Hit by Bullet Bill as Daisy"
    },
    {
        "name": "Get Hit by Bullet Bill as Rosalina"
    },
    {
        "name": "Get Hit by Bullet Bill as Tanooki Mario"
    },
    {
        "name": "Get Hit by Bullet Bill as Cat Peach"
    },
    {
        "name": "Get Hit by Bullet Bill as Yoshi"
    },
    {
        "name": "Get Hit by Bullet Bill as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Bullet Bill as Black Yoshi"
    },
    {
        "name": "Get Hit by Bullet Bill as Red Yoshi"
    },
    {
        "name": "Get Hit by Bullet Bill as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Bullet Bill as White Yoshi"
    },
    {
        "name": "Get Hit by Bullet Bill as Blue Yoshi"
    },
    {
        "name": "Get Hit by Bullet Bill as Pink Yoshi"
    },
    {
        "name": "Get Hit by Bullet Bill as Orange Yoshi"
    },
    {
        "name": "Get Hit by Bullet Bill as Toad"
    },
    {
        "name": "Get Hit by Bullet Bill as Koopa Troopa"
    },
    {
        "name": "Get Hit by Bullet Bill as Shy Guy"
    },
    {
        "name": "Get Hit by Bullet Bill as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Bullet Bill as Black Shy Guy"
    },
    {
        "name": "Get Hit by Bullet Bill as Green Shy Guy"
    },
    {
        "name": "Get Hit by Bullet Bill as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Bullet Bill as White Shy Guy"
    },
    {
        "name": "Get Hit by Bullet Bill as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Bullet Bill as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Bullet Bill as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Bullet Bill as Lakitu"
    },
    {
        "name": "Get Hit by Bullet Bill as Toadette"
    },
    {
        "name": "Get Hit by Bullet Bill as King Boo"
    },
    {
        "name": "Get Hit by Bullet Bill as Baby Mario"
    },
    {
        "name": "Get Hit by Bullet Bill as Baby Luigi"
    },
    {
        "name": "Get Hit by Bullet Bill as Baby Peach"
    },
    {
        "name": "Get Hit by Bullet Bill as Baby Daisy"
    },
    {
        "name": "Get Hit by Bullet Bill as Baby Rosalina"
    },
    {
        "name": "Get Hit by Bullet Bill as Gold Mario"
    },
    {
        "name": "Get Hit by Bullet Bill as Metal Mario"
    },
    {
        "name": "Get Hit by Bullet Bill as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Bullet Bill as Wario"
    },
    {
        "name": "Get Hit by Bullet Bill as Waluigi"
    },
    {
        "name": "Get Hit by Bullet Bill as Donkey Kong"
    },
    {
        "name": "Get Hit by Bullet Bill as Bowser"
    },
    {
        "name": "Get Hit by Bullet Bill as Dry Bones"
    },
    {
        "name": "Get Hit by Bullet Bill as Bowser Jr."
    },
    {
        "name": "Get Hit by Bullet Bill as Dry Bowser"
    },
    {
        "name": "Get Hit by Bullet Bill as Lemmy"
    },
    {
        "name": "Get Hit by Bullet Bill as Larry"
    },
    {
        "name": "Get Hit by Bullet Bill as Wendy"
    },
    {
        "name": "Get Hit by Bullet Bill as Ludwig"
    },
    {
        "name": "Get Hit by Bullet Bill as Iggy"
    },
    {
        "name": "Get Hit by Bullet Bill as Roy"
    },
    {
        "name": "Get Hit by Bullet Bill as Morton"
    },
    {
        "name": "Get Hit by Bullet Bill as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Bullet Bill as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Bullet Bill as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Bullet Bill as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Bullet Bill as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Bullet Bill as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Bullet Bill as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Bullet Bill as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Bullet Bill as Villager Boy"
    },
    {
        "name": "Get Hit by Bullet Bill as Villager Girl"
    },
    {
        "name": "Get Hit by Bullet Bill as Isabelle"
    },
    {
        "name": "Get Hit by Bullet Bill as Mii Character"
    },
    {
        "name": "Get Hit by Boomerang Flower"
    },
    {
        "name": "Get Hit by Boomerang Flower as Mario"
    },
    {
        "name": "Get Hit by Boomerang Flower as Luigi"
    },
    {
        "name": "Get Hit by Boomerang Flower as Peach"
    },
    {
        "name": "Get Hit by Boomerang Flower as Daisy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Rosalina"
    },
    {
        "name": "Get Hit by Boomerang Flower as Tanooki Mario"
    },
    {
        "name": "Get Hit by Boomerang Flower as Cat Peach"
    },
    {
        "name": "Get Hit by Boomerang Flower as Yoshi"
    },
    {
        "name": "Get Hit by Boomerang Flower as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Boomerang Flower as Black Yoshi"
    },
    {
        "name": "Get Hit by Boomerang Flower as Red Yoshi"
    },
    {
        "name": "Get Hit by Boomerang Flower as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Boomerang Flower as White Yoshi"
    },
    {
        "name": "Get Hit by Boomerang Flower as Blue Yoshi"
    },
    {
        "name": "Get Hit by Boomerang Flower as Pink Yoshi"
    },
    {
        "name": "Get Hit by Boomerang Flower as Orange Yoshi"
    },
    {
        "name": "Get Hit by Boomerang Flower as Toad"
    },
    {
        "name": "Get Hit by Boomerang Flower as Koopa Troopa"
    },
    {
        "name": "Get Hit by Boomerang Flower as Shy Guy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Black Shy Guy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Green Shy Guy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Boomerang Flower as White Shy Guy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Lakitu"
    },
    {
        "name": "Get Hit by Boomerang Flower as Toadette"
    },
    {
        "name": "Get Hit by Boomerang Flower as King Boo"
    },
    {
        "name": "Get Hit by Boomerang Flower as Baby Mario"
    },
    {
        "name": "Get Hit by Boomerang Flower as Baby Luigi"
    },
    {
        "name": "Get Hit by Boomerang Flower as Baby Peach"
    },
    {
        "name": "Get Hit by Boomerang Flower as Baby Daisy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Baby Rosalina"
    },
    {
        "name": "Get Hit by Boomerang Flower as Gold Mario"
    },
    {
        "name": "Get Hit by Boomerang Flower as Metal Mario"
    },
    {
        "name": "Get Hit by Boomerang Flower as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Boomerang Flower as Wario"
    },
    {
        "name": "Get Hit by Boomerang Flower as Waluigi"
    },
    {
        "name": "Get Hit by Boomerang Flower as Donkey Kong"
    },
    {
        "name": "Get Hit by Boomerang Flower as Bowser"
    },
    {
        "name": "Get Hit by Boomerang Flower as Dry Bones"
    },
    {
        "name": "Get Hit by Boomerang Flower as Bowser Jr."
    },
    {
        "name": "Get Hit by Boomerang Flower as Dry Bowser"
    },
    {
        "name": "Get Hit by Boomerang Flower as Lemmy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Larry"
    },
    {
        "name": "Get Hit by Boomerang Flower as Wendy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Ludwig"
    },
    {
        "name": "Get Hit by Boomerang Flower as Iggy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Roy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Morton"
    },
    {
        "name": "Get Hit by Boomerang Flower as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Boomerang Flower as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Boomerang Flower as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Boomerang Flower as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Boomerang Flower as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Boomerang Flower as Villager Boy"
    },
    {
        "name": "Get Hit by Boomerang Flower as Villager Girl"
    },
    {
        "name": "Get Hit by Boomerang Flower as Isabelle"
    },
    {
        "name": "Get Hit by Boomerang Flower as Mii Character"
    },
    {
        "name": "Get Hit by Piranha Plant"
    },
    {
        "name": "Get Hit by Piranha Plant as Mario"
    },
    {
        "name": "Get Hit by Piranha Plant as Luigi"
    },
    {
        "name": "Get Hit by Piranha Plant as Peach"
    },
    {
        "name": "Get Hit by Piranha Plant as Daisy"
    },
    {
        "name": "Get Hit by Piranha Plant as Rosalina"
    },
    {
        "name": "Get Hit by Piranha Plant as Tanooki Mario"
    },
    {
        "name": "Get Hit by Piranha Plant as Cat Peach"
    },
    {
        "name": "Get Hit by Piranha Plant as Yoshi"
    },
    {
        "name": "Get Hit by Piranha Plant as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Piranha Plant as Black Yoshi"
    },
    {
        "name": "Get Hit by Piranha Plant as Red Yoshi"
    },
    {
        "name": "Get Hit by Piranha Plant as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Piranha Plant as White Yoshi"
    },
    {
        "name": "Get Hit by Piranha Plant as Blue Yoshi"
    },
    {
        "name": "Get Hit by Piranha Plant as Pink Yoshi"
    },
    {
        "name": "Get Hit by Piranha Plant as Orange Yoshi"
    },
    {
        "name": "Get Hit by Piranha Plant as Toad"
    },
    {
        "name": "Get Hit by Piranha Plant as Koopa Troopa"
    },
    {
        "name": "Get Hit by Piranha Plant as Shy Guy"
    },
    {
        "name": "Get Hit by Piranha Plant as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Piranha Plant as Black Shy Guy"
    },
    {
        "name": "Get Hit by Piranha Plant as Green Shy Guy"
    },
    {
        "name": "Get Hit by Piranha Plant as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Piranha Plant as White Shy Guy"
    },
    {
        "name": "Get Hit by Piranha Plant as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Piranha Plant as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Piranha Plant as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Piranha Plant as Lakitu"
    },
    {
        "name": "Get Hit by Piranha Plant as Toadette"
    },
    {
        "name": "Get Hit by Piranha Plant as King Boo"
    },
    {
        "name": "Get Hit by Piranha Plant as Baby Mario"
    },
    {
        "name": "Get Hit by Piranha Plant as Baby Luigi"
    },
    {
        "name": "Get Hit by Piranha Plant as Baby Peach"
    },
    {
        "name": "Get Hit by Piranha Plant as Baby Daisy"
    },
    {
        "name": "Get Hit by Piranha Plant as Baby Rosalina"
    },
    {
        "name": "Get Hit by Piranha Plant as Gold Mario"
    },
    {
        "name": "Get Hit by Piranha Plant as Metal Mario"
    },
    {
        "name": "Get Hit by Piranha Plant as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Piranha Plant as Wario"
    },
    {
        "name": "Get Hit by Piranha Plant as Waluigi"
    },
    {
        "name": "Get Hit by Piranha Plant as Donkey Kong"
    },
    {
        "name": "Get Hit by Piranha Plant as Bowser"
    },
    {
        "name": "Get Hit by Piranha Plant as Dry Bones"
    },
    {
        "name": "Get Hit by Piranha Plant as Bowser Jr."
    },
    {
        "name": "Get Hit by Piranha Plant as Dry Bowser"
    },
    {
        "name": "Get Hit by Piranha Plant as Lemmy"
    },
    {
        "name": "Get Hit by Piranha Plant as Larry"
    },
    {
        "name": "Get Hit by Piranha Plant as Wendy"
    },
    {
        "name": "Get Hit by Piranha Plant as Ludwig"
    },
    {
        "name": "Get Hit by Piranha Plant as Iggy"
    },
    {
        "name": "Get Hit by Piranha Plant as Roy"
    },
    {
        "name": "Get Hit by Piranha Plant as Morton"
    },
    {
        "name": "Get Hit by Piranha Plant as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Piranha Plant as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Piranha Plant as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Piranha Plant as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Piranha Plant as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Piranha Plant as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Piranha Plant as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Piranha Plant as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Piranha Plant as Villager Boy"
    },
    {
        "name": "Get Hit by Piranha Plant as Villager Girl"
    },
    {
        "name": "Get Hit by Piranha Plant as Isabelle"
    },
    {
        "name": "Get Hit by Piranha Plant as Mii Character"
    },
    {
        "name": "Get Hit by Super Horn"
    },
    {
        "name": "Get Hit by Super Horn as Mario"
    },
    {
        "name": "Get Hit by Super Horn as Luigi"
    },
    {
        "name": "Get Hit by Super Horn as Peach"
    },
    {
        "name": "Get Hit by Super Horn as Daisy"
    },
    {
        "name": "Get Hit by Super Horn as Rosalina"
    },
    {
        "name": "Get Hit by Super Horn as Tanooki Mario"
    },
    {
        "name": "Get Hit by Super Horn as Cat Peach"
    },
    {
        "name": "Get Hit by Super Horn as Yoshi"
    },
    {
        "name": "Get Hit by Super Horn as Light-Blue Yoshi"
    },
    {
        "name": "Get Hit by Super Horn as Black Yoshi"
    },
    {
        "name": "Get Hit by Super Horn as Red Yoshi"
    },
    {
        "name": "Get Hit by Super Horn as Yellow Yoshi"
    },
    {
        "name": "Get Hit by Super Horn as White Yoshi"
    },
    {
        "name": "Get Hit by Super Horn as Blue Yoshi"
    },
    {
        "name": "Get Hit by Super Horn as Pink Yoshi"
    },
    {
        "name": "Get Hit by Super Horn as Orange Yoshi"
    },
    {
        "name": "Get Hit by Super Horn as Toad"
    },
    {
        "name": "Get Hit by Super Horn as Koopa Troopa"
    },
    {
        "name": "Get Hit by Super Horn as Shy Guy"
    },
    {
        "name": "Get Hit by Super Horn as Light-Blue Shy Guy"
    },
    {
        "name": "Get Hit by Super Horn as Black Shy Guy"
    },
    {
        "name": "Get Hit by Super Horn as Green Shy Guy"
    },
    {
        "name": "Get Hit by Super Horn as Yellow Shy Guy"
    },
    {
        "name": "Get Hit by Super Horn as White Shy Guy"
    },
    {
        "name": "Get Hit by Super Horn as Blue Shy Guy"
    },
    {
        "name": "Get Hit by Super Horn as Pink Shy Guy"
    },
    {
        "name": "Get Hit by Super Horn as Orange Shy Guy"
    },
    {
        "name": "Get Hit by Super Horn as Lakitu"
    },
    {
        "name": "Get Hit by Super Horn as Toadette"
    },
    {
        "name": "Get Hit by Super Horn as King Boo"
    },
    {
        "name": "Get Hit by Super Horn as Baby Mario"
    },
    {
        "name": "Get Hit by Super Horn as Baby Luigi"
    },
    {
        "name": "Get Hit by Super Horn as Baby Peach"
    },
    {
        "name": "Get Hit by Super Horn as Baby Daisy"
    },
    {
        "name": "Get Hit by Super Horn as Baby Rosalina"
    },
    {
        "name": "Get Hit by Super Horn as Gold Mario"
    },
    {
        "name": "Get Hit by Super Horn as Metal Mario"
    },
    {
        "name": "Get Hit by Super Horn as Pink Gold Peach"
    },
    {
        "name": "Get Hit by Super Horn as Wario"
    },
    {
        "name": "Get Hit by Super Horn as Waluigi"
    },
    {
        "name": "Get Hit by Super Horn as Donkey Kong"
    },
    {
        "name": "Get Hit by Super Horn as Bowser"
    },
    {
        "name": "Get Hit by Super Horn as Dry Bones"
    },
    {
        "name": "Get Hit by Super Horn as Bowser Jr."
    },
    {
        "name": "Get Hit by Super Horn as Dry Bowser"
    },
    {
        "name": "Get Hit by Super Horn as Lemmy"
    },
    {
        "name": "Get Hit by Super Horn as Larry"
    },
    {
        "name": "Get Hit by Super Horn as Wendy"
    },
    {
        "name": "Get Hit by Super Horn as Ludwig"
    },
    {
        "name": "Get Hit by Super Horn as Iggy"
    },
    {
        "name": "Get Hit by Super Horn as Roy"
    },
    {
        "name": "Get Hit by Super Horn as Morton"
    },
    {
        "name": "Get Hit by Super Horn as Orange Inkling Girl"
    },
    {
        "name": "Get Hit by Super Horn as Green Inkling Girl"
    },
    {
        "name": "Get Hit by Super Horn as Pink Inkling Girl"
    },
    {
        "name": "Get Hit by Super Horn as Blue Inkling Boy"
    },
    {
        "name": "Get Hit by Super Horn as Purple Inkling Boy"
    },
    {
        "name": "Get Hit by Super Horn as Cyan Inkling Boy"
    },
    {
        "name": "Get Hit by Super Horn as Link Hero of the Skies"
    },
    {
        "name": "Get Hit by Super Horn as Link Hero of the Wild"
    },
    {
        "name": "Get Hit by Super Horn as Villager Boy"
    },
    {
        "name": "Get Hit by Super Horn as Villager Girl"
    },
    {
        "name": "Get Hit by Super Horn as Isabelle"
    },
    {
        "name": "Get Hit by Super Horn as Mii Character"
    },
    {
        "name": "Drive in a Standard Kart"
    },
    {
        "name": "Drive in a Pip Frame"
    },
    {
        "name": "Drive in a Mach 8"
    },
    {
        "name": "Drive in a Steel Driver"
    },
    {
        "name": "Drive in a Cat Cruiser"
    },
    {
        "name": "Drive in a Circuit Special"
    },
    {
        "name": "Drive in a Tri-Speeder"
    },
    {
        "name": "Drive in a Badwagon"
    },
    {
        "name": "Drive in a Prancer"
    },
    {
        "name": "Drive in a Biddybuggy"
    },
    {
        "name": "Drive in a Landship"
    },
    {
        "name": "Drive in a Sneeker"
    },
    {
        "name": "Drive in a Sports Coupe"
    },
    {
        "name": "Drive in a Gold Standard"
    },
    {
        "name": "Drive in a GLA"
    },
    {
        "name": "Drive in a W 25 Silver Arrow"
    },
    {
        "name": "Drive in a 300 SL Roadster"
    },
    {
        "name": "Drive in a Blue Falcon"
    },
    {
        "name": "Drive in a Tanooki Kart"
    },
    {
        "name": "Drive in a B Dasher"
    },
    {
        "name": "Drive in a Streetle"
    },
    {
        "name": "Drive in a P-Wing"
    },
    {
        "name": "Drive in a Koopa Clown"
    },
    {
        "name": "Drive in a Standard Bike"
    },
    {
        "name": "Drive in a Comet"
    },
    {
        "name": "Drive in a Sport Bike"
    },
    {
        "name": "Drive in a The Duke"
    },
    {
        "name": "Drive in a Flame Rider"
    },
    {
        "name": "Drive in a Varmint"
    },
    {
        "name": "Drive in a Mr.Scooty"
    },
    {
        "name": "Drive in a Jet Bike"
    },
    {
        "name": "Drive in a Yoshi Bike"
    },
    {
        "name": "Drive in a Master Cycle"
    },
    {
        "name": "Drive in a Master Cycle Zero"
    },
    {
        "name": "Drive in a City Tripper"
    },
    {
        "name": "Drive in a Standard ATV"
    },
    {
        "name": "Drive in a Wild Wiggler"
    },
    {
        "name": "Drive in a Teddy Buggy"
    },
    {
        "name": "Drive in a Bone Rattler"
    },
    {
        "name": "Drive in a Splat Buggy"
    },
    {
        "name": "Drive in a Inkstriker"
    },
    {
        "name": "Drive with Standard Wheels"
    },
    {
        "name": "Drive with Monster Wheels"
    },
    {
        "name": "Drive with Roller Wheels"
    },
    {
        "name": "Drive with Slim Wheels"
    },
    {
        "name": "Drive with Slick Wheels"
    },
    {
        "name": "Drive with Metal Wheels"
    },
    {
        "name": "Drive with Button Wheels"
    },
    {
        "name": "Drive with Off-Road Wheels"
    },
    {
        "name": "Drive with Sponge Wheels"
    },
    {
        "name": "Drive with Wood Wheels"
    },
    {
        "name": "Drive with Cushion Wheels"
    },
    {
        "name": "Drive with Blue Standard Wheels"
    },
    {
        "name": "Drive with Hot Monster Wheels"
    },
    {
        "name": "Drive with Azure Roller Wheels"
    },
    {
        "name": "Drive with Crimson Wheels"
    },
    {
        "name": "Drive with Cyber Wheels"
    },
    {
        "name": "Drive with Retro Off-Road Wheels"
    },
    {
        "name": "Drive with Gold Tires Wheels"
    },
    {
        "name": "Drive with GLA Tires Wheels"
    },
    {
        "name": "Drive with Triforce Tires Wheels"
    },
    {
        "name": "Drive with Ancient Tires Wheels"
    },
    {
        "name": "Drive with Leaf Tires Wheels"
    },
    {
        "name": "Fly with Super Glider"
    },
    {
        "name": "Fly with Cloud Glider"
    },
    {
        "name": "Fly with Wario Wing"
    },
    {
        "name": "Fly with Waddle Wing"
    },
    {
        "name": "Fly with Peach Parasol"
    },
    {
        "name": "Fly with Parachute"
    },
    {
        "name": "Fly with Parafoil"
    },
    {
        "name": "Fly with Flower Glider"
    },
    {
        "name": "Fly with Bowser Kite"
    },
    {
        "name": "Fly with Plane Glider"
    },
    {
        "name": "Fly with MKTV Parafoil"
    },
    {
        "name": "Fly with Gold Glider"
    },
    {
        "name": "Fly with Hylian Kite"
    },
    {
        "name": "Fly with Paraglider"
    },
    {
        "name": "Fly with Paper Glider"
    }
];
