var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

// Yu-Gi-Oh! Forbidden Memories Bingo Version 1 - Maintained by GFC (twitch.tv/gfc_) and duke1102 (twitch.tv/duke1102)
var bingoList = [];
bingoList[1] = [
    { name: "Beat Simon Muran", types: ["short1"] },
    { name: "Have Dark Hole", types: ["short2"] },
    { name: "Get a Ritual card", types: ["short3"] },
    { name: "Buy a reptile-type card", types: ["short4"] },
    { name: "Watch a full 3D battle", types: ["short5"] },
    { name: "Buy an equip", types: ["short7"] }
  ];
  bingoList[2] = [
    { name: "Lose to Teana", types: ["medium1"] },
    { name: "Buy a thunder-type card", types: ["medium2"] },
    { name: "Fuse Cockroach Knight", types: ["medium3"] },
    { name: "Have the AI fuse", types: ["medium4"] },
    { name: "Get Tomozaurus", types: ["medium5"] },
    { name: "Get a defensive win", types: ["medium6"] }
  ];
  bingoList[3] = [
    { name: "Beat every Villager", types: ["lo"] },
    { name: "Fuse THTD", types: ["lo"] },
    { name: "Fuse Dark Elf", types: ["lo"] },
    { name: "Lose by decking out", types: ["lo"] },
    { name: "Win 5 duels in a row", types: ["lo"] },
    { name: "Play a magic 3 duels in a row", types: ["lo"] },
    { name: "Unlock Jono in Free Duel", types: ["lo"] }
  ];
  bingoList[4] = [
    { name: "Fuse to make a magic card", types: ["lo"] },
    { name: "Win a 1200+ atk monster", types: ["lo"] },
    { name: "5 Duel Master K Free Duels", types: ["lo"] },
    { name: "Have the AI change the field", types: ["lo"] },
    { name: "Win a duel without fusing", types: ["lo"] },
    { name: "Win a duel by dealing exact damage", types: ["lo"] },
    { name: "Have 5 card with less than 600atk in your hand", types: ["lo"] }
  ];
  bingoList[5] = [
    { name: "Lose to Shadi in campaign", types: ["lo"] },
    { name: "Get 3 D-TEC in a row", types: ["lo"] },
    { name: "Suicide a monster into one with equal atk", types: ["lo"] },
    { name: "Fuse Crimson Sunbird", types: ["lo"] },
    { name: "Crash 2 of the same monster together", types: ["lo"] },
    { name: "Obtain Little D.", types: ["lo"] },
    { name: "Have AI increase their LP", types: ["lo"] },
    { name: "Make a THTD without a thunder", types: ["lo"] },
    { name: "Win Crawling Dragon #2", types: ["lo"] },
    { name: "Fuse Great Mammoth of Goldfine", types: ["lo"] },
    { name: "Watch a 3D battle against Kaiba", types: ["lo"] },
    { name: "Kill someone with Sparks", types: ["lo"] },
    { name: "Kill someone with Mushroom Man", types: ["lo"] },
    { name: "Win an equip", types: ["lo"] },
    { name: "Fuse Soul Hunter", types: ["lo"] },
    { name: "Fuse Garvas with an unusable beast", types: ["lo"] },
    { name: "Win a dragon/thunder from Duel Master K", types: ["lo"] },
    { name: "1 card draw Raigeki", types: ["lo"] }
  ];
  bingoList[6] = [
    { name: "5 card fusion THTD", types: ["lo"] },
    { name: "7 Weevil Free Duels", types: ["lo"] },
    { name: "Win Time Wizard", types: ["lo"] },
    { name: "Play 2 THTD in 1 duel", types: ["lo"] },
    { name: "Have 3 Skull Servant", types: ["lo"] },
    { name: "Have the AI fuse THTD", types: ["lo"] },
    { name: "Destroy an MBD", types: ["lo"] },
    { name: "Have Gate Deeg and Dig Beak in hand", types: ["lo"] },
    { name: "Have the AI equip a card", types: ["lo"] }
  ];
  bingoList[7] = [
    { name: "5 card fusion Pumpking", types: ["lo"] },
    { name: "Win the same card back to back", types: ["lo"] },
    { name: "Win a duel with 50LP remaining", types: ["lo"] },
    { name: "Win a duel in 3 turns", types: ["lo"] },
    { name: "Fuse Thousand Dragon", types: ["lo"] },
    { name: "7 wins against Keith in free duel", types: ["lo"] },
    { name: "Have the AI do a 4+ card fusion", types: ["lo"] },
    { name: "Have 4 copies of the same card", types: ["lo"] },
    { name: "Obtain Behegon", types: ["lo"] },
    { name: "Ritual summon any card", types: ["lo"] }
  ];
  bingoList[8] = [
    { name: "Isis plays B. Skull Dragon", types: ["lo"] },
    { name: "S-TEC someone", types: ["lo"] },
    { name: "Kill a ritual monster", types: ["lo"] },
    { name: "Fuse Summoned Skull", types: ["lo"] },
    { name: "Play 3 THTD in 1 duel", types: ["lo"] },
    { name: "Fuse Psychic Kappa + Kappa Avenger", types: ["lo"] },
    { name: "Have 5 identical monsters on the field", types: ["lo"] }
  ];
  bingoList[9] = [
    { name: "Beat the World Tournament", types: ["lo"] },
    { name: "Summon Cosmo Queen", types: ["lo"] },
    { name: "Do a 6 card fusion", types: ["lo"] }
  ];
  bingoList[10] = [
    { name: "Fuse 23 times in 1 duel", types: ["lo"] },
    { name: "Have 3 copies of the same dragon-type", types: ["lo"] },
    { name: "Kill Kaiba with a Yaiba Robo", types: ["lo"] },
    { name: "Destroy a monster with a trap", types: ["lo"] },
    { name: "Get every rank at least once", types: ["lo"] }
  ];
  bingoList[11] = [
    { name: "Beat Heishin 1", types: ["lo"] },
    { name: "Purchase a card for 100+ starchips", types: ["lo"] },
    { name: "Win Shadow Specter from Meadow Mage", types: ["lo"] },
    { name: "Have 5 different females on your side at once", types: ["lo"] },
    { name: "Trigger Reverse Trap", types: ["lo"] },
    { name: "Get 11 wins on Mage Soldier before the mages", types: ["lo"] }
  ];
  bingoList[12] = [
    { name: "Win any 20/22 from Meadow Mage", types: ["lo"] },
    { name: "Dark Hole 5 monsters + 5 non-monsters at once", types: ["lo"] },
    { name: "Win against Keith/Bakura without fusing", types: ["lo"] },
    { name: "Win 10 females in free duel", types: ["lo"] },
    { name: "Have 5 card with 1000+atk in your hand", types: ["lo"] }
  ];
  bingoList[13] = [
    { name: "Do a 7 magic trapless A-TEC", types: ["lo"] },
    { name: "Obtain Raigeki and Dark Hole", types: ["lo"] },
    { name: "Win Dragon Capture Jar or Warrior Elimination", types: ["lo"] }
  ];
  bingoList[14] = [
    { name: "Get 200 starchips", types: ["lo"] },
    { name: "Beat WT without THTD", types: ["lo"] },
    { name: "Beat Seto 2nd", types: ["lo"] },
    { name: "Fuse THTD + 2 working equips in 1 hand", types: ["lo"] },
    { name: "Kill a monster that's boosted by terrain and guardian star", types: ["lo"] },
    { name: "Win Umi from Isis", types: ["lo"] },
    { name: "Buy Crawling Dragon", types: ["lo"] },
    { name: "Have a monster with 3500+ atk on the field", types: ["lo"] }
  ];
  bingoList[15] = [
    { name: "Have 40 of any 1 type of card", types: ["lo"] },
    { name: "Win any Exodia piece", types: ["lo"] },
    { name: "Trigger 2 traps (your own) in 1 duel", types: ["lo"] },
    { name: "Fuse THTD with two Thunder Dragon", types: ["lo"] },
    { name: "Beat Labyrinth Mage 3 times in the labyrinth", types: ["lo"] },
    { name: "Fuse Darkfire Dragon", types: ["lo"] },
    { name: "Kill BEWD with Dark Magician", types: ["lo"] },
    { name: "Beat Secmeton without THTD", types: ["lo"] },
    { name: "Effective attack on Zera the Mant", types: ["lo"] }
  ];
  bingoList[16] = [
    { name: "Obtain every field card", types: ["lo"] },
    { name: "Trigger the Suicide Glitch", types: ["lo"] },
    { name: "Win a duel after bring Raigeki'd 3 times", types: ["lo"] },
    { name: "Draw a trap as the 40th card", types: ["lo"] },
    { name: "Win Megamorph", types: ["lo"] },
    { name: "Equip a Crimson Sunbird", types: ["lo"] },
    { name: "Play Dark Hole 20 total times", types: ["lo"] }
  ];
  bingoList[17] = [
    { name: "Activate every field spell in 1 duel", types: ["lo"] },
    { name: "Win Beast Fangs", types: ["lo"] },
    { name: "Get a Victory By Attrition", types: ["lo"] },
    { name: "Win a duel in 2 turns", types: ["lo"] },
    { name: "Win Meteor B. Dragon", types: ["lo"] },
    { name: "Win a card with a droprate of 10 or less", types: ["lo"] },
    { name: "Have 150 cards in your chest", types: ["lo"] },
    { name: "Win Crush Card", types: ["lo"] }
  ];
  bingoList[18] = [
    { name: "Fuse Meteor B. Dragon", types: ["lo"] },
    { name: "Win Tatsunootoshigo", types: ["lo"] },
    { name: "SA-POW Kepura 7 times", types: ["lo"] },
    { name: "Fuse B. Skull Dragon", types: ["lo"] },
    { name: "Equip 1 monster with 3 different equips", types: ["lo"] },
    { name: "Win THTD", types: ["lo"] },
    { name: "SA-TEC all high mages", types: ["lo"] },
    { name: "Have 5 cards with 1600+atk in your hand", types: ["lo"] }
  ];
  bingoList[19] = [
    { name: "Activate 3 different traps (your own) in 1 duel", types: ["lo"] },
    { name: "Beat any Heishin using no equips", types: ["lo"] },
    { name: "Beat all mages with only monster cards", types: ["lo"] },
    { name: "Win 20 Seto 2nd free duels", types: ["lo"] }
  ];
  bingoList[20] = [
    { name: "Win 3 Dark Magician", types: ["lo"] },
    { name: "Successfully fuse 2 equips", types: ["lo"] },
    { name: "Equip Labyrinth Wall 3 times in 1 duel", types: ["lo"] },
    { name: "Win Crimson Sunbird", types: ["lo"] }
  ];
  bingoList[21] = [
    { name: "Enter the Final 6/7", types: ["lo"] },
    { name: "Die to anyone in the final 6/7", types: ["lo"] },
    { name: "Spend 500 starchips total", types: ["lo"] }
  ];
  bingoList[22] = [
    { name: "Obtain MetalZoa", types: ["lo"] },
    { name: "Make Darknite run out of monsters, and win", types: ["lo"] },
    { name: "Win MBD or Skull Knight from Mountain Mage", types: ["lo"] },
    { name: "Win a duel where BEUD is played turn 1", types: ["lo"] }
  ];
  bingoList[23] = [
    { name: "Buy Bright Castle", types: ["lo"] },
    { name: "Beat Heishin 1 with the starter deck", types: ["lo"] },
    { name: "Complete a full page of the library", types: ["lo"] },
    { name: "Beat all high mages in campaign without saving", types: ["lo"] },
    { name: "Overpower and kill a BEUD", types: ["lo"] },
    { name: "Watch a full 3D battle against Nitemare", types: ["lo"] }
  ];
  bingoList[24] = [
    { name: "Beat every high mage without THTD", types: ["lo"] },
    { name: "Fuse Swords of Revealing Light", types: ["lo"] },
    { name: "Play MBD in Mars against Heishin 2, and win", types: ["lo"] },
    { name: "SA-TEC someone in the final 6", types: ["lo"] },
    { name: "Witness 3 BEUD played in 1 duel", types: ["lo"] },
    { name: "Have Heishin Megamorph a monster, and win", types: ["lo"] }
  ];
  bingoList[25] = [
    { name: "Unlock every duelist in Free Duel", types: ["lo"] },
    { name: "Beat Nitemare", types: ["lo"] },
    { name: "SA-POW/TEC Nitemare", types: ["lo"] },
    { name: "Beat the Final 7", types: ["lo"] },
    { name: "Beat the Final 6 without THTD or MBD", types: ["lo"] }
  ];
