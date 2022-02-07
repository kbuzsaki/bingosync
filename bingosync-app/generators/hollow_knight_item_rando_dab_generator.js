bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList=[[],
[
    {name: "Visit all 4 shops (Sly, Iselda, Salubra and Leg Eater)", types: ["crossroads"]}, 
    {name: "Have 5 or more Charms", types: ["charms"]}, 
    {name: "Have 3 different maps not counting Dirtmouth or Hive", types: ["cornifer"]}, 
    {name: "Interact with 3 Cornifer locations", types: ["cornifer"]}, 
    {name: "Talk to Salubra while overcharmed", types: []}, 
    {name: "Obtain Dream Nail", types: []}, 
    {name: "Obtain Wayward Compass or Gathering Swarm", types: []}, 
    {name: "Obtain Shaman Stone or Spell Twister", types: []}, 
    {name: "Visit Lake of Unn or Blue Lake", types: ["greenpath"]}
],
[
    {name: "Kill two different Maggots", types: ["crossroads"]}, 
    {name: "Kill Gorgeous Husk", types: ["city"]}, 
    {name: "Obtain Vengeful Spirit", types: []}, 
    {name: "Kill Myla", types: ["cdash"]}, 
    {name: "Check/Read the lore tablet in Howling Cliffs", types: ["cliffs"]}, 
    {name: "Check the journal below Stone Sanctuary", types: ["greenpath"]}, 
    {name: "Visit Soul Sanctum or Royal Waterways", types: ["waterways", "sanctum"]}, 
    {name: "Slash two Shade Gates", types: ["greenpath"]}, 
    {name: "Buy 6 map pins from Iselda (All but two)", types: ["geo"]}
],
[
    {name: "Kill three different Great Husk Sentries", types: ["city"]}, 
    {name: "Kill a Lightseed", types: ["crossroads", "basin"]}, 
    {name: "Dream Nail Willoh's meal", types: []}, 
    {name: "Visit Distant Village or Queen's Gardens", types: ["qg"]}, 
    {name: "Go through 3 Dive floors", types: []}, 
    {name: "Kill a Great Hopper", types: ["edge"]}, 
    {name: "Check/Read the lore tablet in Ancient Basin", types: ["basin"]}, 
    {name: "Check the journal above Mantis Village", types: ["fungal"]}, 
    {name: "Check/Read both Pilgrim's Way lore tablets", types: ["fungal"]}
],
[
    {name: "10 Lifeblood masks at the same time", types: []}, 
    {name: "Obtain Dream Gate", types: []}, 
    {name: "Obtain Isma's Tear", types: []}, 
    {name: "Obtain Sprintmaster or Dashmaster", types: []}, 
    {name: "Obtain 1 Arcane Egg", types: []}, 
    {name: "Talk to Tuk", types: ["waterways"]}, 
    {name: "Check the Stag Nest vessel fragment", types: ["cliffs"]}, 
    {name: "Visit Overgrown Mound or Crystalised Mound", types: ["mounds", "peak"]}, 
    {name: "Defeat Gorb", types: ["dreamwarrior", "cliffs"]}
],
[
    {name: "Ride the stag to King's Station", types: []}, 
    {name: "Obtain Lumafly Lantern", types: []}, 
    {name: "Obtain Dream Wielder or Dreamshield", types: []}, 
    {name: "Obtain Quick Slash or Nailmaster's Glory", types: []}, 
    {name: "Talk to Cloth", types: ["fungal"]}, 
    {name: "Sit on the City of Tears Quirrel bench", types: ["city"]}, 
    {name: "Bow to Moss Prophet, dead or alive", types: ["fungal"]}, 
    {name: "Defeat False Knight and Brooding Mawlek", types: ["crossroads"]}, 
    {name: "Defeat Xero", types: ["dreamwarrior"]}
],
[
    {name: "Nail 2", types: ["geo", "city"]}, 
    {name: "Obtain Shade Soul", types: []}, 
    {name: "Obtain Tram Pass", types: ["tram"]}, 
    {name: "Obtain all three Fragile charms", types: []}, 
    {name: "Obtain Glowing Womb or Weaversong", types: []}, 
    {name: "Obtain Howling Wraiths", types: []}, 
    {name: "Sit down in Hidden Station", types: ["basin"]}, 
    {name: "Check/Read three lore tablets in Greenpath", types: ["greenpath"]}, 
    {name: "Check/Read both lore tablets in Mantis Village", types: ["fungal"]}
],
[
    {name: "Obtain Descending Dark", types: []}, 
    {name: "Ride the stag to Hidden Station", types: []}, 
    {name: "Obtain Longnail or Mark of Pride", types: []}, 
    {name: "Obtain Soul Eater or Soul Catcher", types: []}, 
    {name: "Obtain 3 King's Idols", types: []}, 
    {name: "Kill a Durandoo, a Duranda, and a Gulka", types: ["greenpath"]}, 
    {name: "Kill an Aluba", types: ["greenpath"]}, 
    {name: "Visit Tower of Love", types: ["edge"]}, 
    {name: "Defeat Vengefly King + Massive Moss Charger", types: ["greenpath"]}
],
[
    {name: "Use a Nail Art in its vanilla Nailmaster's Hut", types: ["edge", "cliffs"]}, 
    {name: "Obtain Monomon", types: []}, 
    {name: "Use two Simple Keys", types: []}, 
    {name: "Obtain Hiveblood or Sharp Shadow", types: []}, 
    {name: "Obtain Grubsong or Grubberfly's Elegy", types: []}, 
    {name: "Talk to Bardoon", types: ["edge"]}, 
    {name: "Talk to Midwife", types: ["darkdeepnest"]}, 
    {name: "Spend 3000 geo", types: ["geo"]}, 
    {name: "Have 1500 geo in the bank", types: ["greenpath"]}
],
[
    {name: "Obtain Abyss Shriek", types: []}, 
    {name: "Obtain Thorns of Agony or Stalwart Shell", types: []}, 
    {name: "Obtain Flukenest or Fury of the Fallen", types: []}, 
    {name: "Obtain Quick Focus or Deep Focus", types: ["peak"]}, 
    {name: "Obtain 2 Pale Ore", types: []}, 
    {name: "Obtain 4 Rancid Eggs", types: []}, 
    {name: "Hit the Oro scarecrow up until the hoppers spawn", types: ["edge"]}, 
    {name: "Defeat Elder Hu", types: ["fungal", "dreamwarrior"]}, 
    {name: "Defeat two dream warriors", types: ["dreamwarrior"]}
],
[
    {name: "Obtain 1 extra mask", types: []}, 
    {name: "Obtain 5 Hallownest Seals", types: []}, 
    {name: "Obtain Shape of Unn or Baldur Shell", types: []}, 
    {name: "Check Sheo", types: ["greenpath"]}, 
    {name: "Check Glowing Womb", types: ["crossroads"]}, 
    {name: "Check 2 Nailmasters", types: ["edge", "cliffs"]}, 
    {name: "Open the Dirtmouth / Crystal Peaks elevator", types: ["peak", "cdash"]}, 
    {name: "Buy out Leg Eater", types: ["geo"]}
],
[
    {name: "Obtain 2 Nail Arts", types: []}, 
    {name: "Obtain the Love Key", types: []}, 
    {name: "Obtain Herrah", types: []}, 
    {name: "Obtain Heavy Blow or Steady Body", types: []}, 
    {name: "Obtain 1 extra soul vessel", types: []}, 
    {name: "Open the Crystal Peaks chest", types: ["peak"]}, 
    {name: "Rescue Bretta + Sly", types: ["fungal"]}, 
    {name: "Parry Revek 3 times without dying (Spirit's Glade Guard)", types: ["dreamwarrior", "dreamboss"]}, 
    {name: "Defeat Crystal Guardian 1", types: ["peak"]}
],
[
    {name: "Dream Nail Marissa", types: []}, 
    {name: "Obtain World Sense", types: []}, 
    {name: "Break the 420 geo rock in Kingdom's Edge", types: ["edge"]}, 
    {name: "Check Crystal Heart", types: ["peak"]}, 
    {name: "Check Deep Focus", types: ["peak"]}, 
    {name: "Kill a Crystal Crawler", types: ["peak", "journal"]}, 
    {name: "Bow to the Fungal Core Elder", types: ["fungal"]}, 
    {name: "Buy the Basin fountain check", types: ["geo", "basin"]}, 
    {name: "Visit Shrine of Believers", types: ["dreamwarrior", "dreamboss"]}
],
[
    {name: "Obtain Collector's Map", types: []}, 
    {name: "Open Jiji's Hut", types: []}, 
    {name: "Obtain Lurien", types: []}, 
    {name: "Ride the stag to Queen's Station", types: []}, 
    {name: "Kill 3 Oomas using a minion charm", types: ["greenpath"]}, 
    {name: "Talk to Emilitia (shortcut out of sewers)", types: ["rightwaterways"]}, 
    {name: "Spend 5000 geo", types: ["geo"]}, 
    {name: "Have 6 Charm Notches total", types: ["charms"]}, 
    {name: "Defeat Mantis Lords", types: ["fungal"]}
],
[
    {name: "Buy 8 map pins from Iselda (All)", types: ["geo", "tram"]}, 
    {name: "Obtain Godtuner", types: []}, 
    {name: "Obtain two Lifeblood charms", types: []}, 
    {name: "Obtain 5 Wanderer's Journals", types: []}, 
    {name: "Check Isma's Tear", types: ["rightwaterways"]}, 
    {name: "Check/Free all grubs in Crossroads (5) + Fog Canyon (1)", types: ["crossroads", "grubs", "cdash"]}, 
    {name: "Visit Hive or Cast Off Shell", types: ["hive", "tram", "edge"]}, 
    {name: "Defeat Dung Defender", types: ["waterways"]}, 
    {name: "Defeat Flukemarm", types: ["waterways"]}
],
[
    {name: "Nail 3", types: ["geo", "city"]}, 
    {name: "Talk to Lemm in his shop with Defender's Crest equipped", types: ["city"]}, 
    {name: "Check/Kill 4 Mimics", types: ["cdash"]}, 
    {name: "Check/Free all grubs in Ancient Basin (2)", types: ["grubs", "basin"]}, 
    {name: "Slash the Beast's Den Trilobyte", types: ["darkdeepnest"]}, 
    {name: "Talk to Mask Maker", types: ["darkdeepnest"]}, 
    {name: "Splash the NPC in the Colosseum's hot spring", types: ["edge"]}, 
    {name: "Defeat Watcher Knights", types: ["watchers"]}, 
    {name: "Complete both whispering roots in Forgotten Crossroads", types: ["crossroads"]}
],
[
    {name: "Get the Abyss Shriek check", types: ["abyss"]}, 
    {name: "Complete the Kingdom's Edge Root", types: ["edge"]}, 
    {name: "Rescue Zote in Deepnest", types: ["deepnest"]}, 
    {name: "Check Love Key", types: ["qg"]}, 
    {name: "Check the Goam and Garpede Journal Entries", types: ["journal", "deepnest"]}, 
    {name: "Swat Tiso's shield away from his corpse", types: ["edge"]}, 
    {name: "Check/Free all grubs in Greenpath (4) and in Fungal (2)", types: ["greenpath", "grubs", "fungal"]}, 
    {name: "Obtain 500 essence", types: ["dreamwarrior", "dreamboss"]}, 
    {name: "Defeat Marmu", types: ["dreamwarrior", "qg"]}
],
[
    {name: "Check/Read the lore tablet in Kingdom's Edge (requires Spore Shroom)", types: ["edge"]}, 
    {name: "Talk to the Fluke Hermit", types: ["waterways"]}, 
    {name: "Check Joni's Blessing", types: ["cliffs"]}, 
    {name: "Spend 7000 geo", types: ["geo"]}, 
    {name: "Defeat Broken Vessel", types: ["basin"]}, 
    {name: "Defeat Soul Master", types: ["sanctum"]}, 
    {name: "Defeat Galien", types: ["deepnest", "dreamwarrior"]}, 
    {name: "Bow to the Weaver's Den Seal of Binding", types: ["darkdeepnest"]}
],
[
    {name: "Enter the Lifeblood Core room without wearing any Lifeblood charms", types: ["abyss"]}, 
    {name: "Use City Crest + Ride both CoT large elevators", types: ["city"]}, 
    {name: "Check Shape of Unn", types: ["greenpath"]}, 
    {name: "Check the Hallownest Crown", types: ["peak"]}, 
    {name: "Defeat Uumuu", types: ["uumuu"]}, 
    {name: "Check/Read both lore tablets in Soul Sanctum", types: ["sanctum"]}, 
    {name: "Defeat Markoth", types: ["edge", "dreamwarrior"]}, 
    {name: "Flukemunga journal entry", types: ["journal"]}, 
    {name: "Open all 3 shortcuts to the City of Tears right elevator shaft", types: ["city"]}, 
    {name: "Defeat both arenas in Queen's Gardens", types: ["qg"]}
],
[
    {name: "Check Shade Soul", types: ["elegant", "sanctum"]}, 
    {name: "Defeat No Eyes", types: ["greenpath"]}, 
    {name: "Interact with Mr. Mushroom once (Does not require Spore Shroom)", types: []}, 
    {name: "Check Shade Cloak", types: ["abyss"]}, 
    {name: "Check three different spell locations", types: ["mounds", "elegant", "sanctum"]}, 
    {name: "Obtain 15 grubs", types: ["grubs"]}, 
    {name: "Check/Read two lore tablets in City of Tears proper (No sub areas)", types: ["watchers", "city"]}, 
    {name: "Sit on all 4 toll benches", types: ["greenpath", "basin", "qg", "city"]}
],
[
    {name: "Take a bath in 4 different Hot Springs", types: ["edge"]}, 
    {name: "Slash Millibelle in Pleasure House", types: ["geo"]}, 
    {name: "Kill two different Alubas", types: ["qg"]}, 
    {name: "Check the Void Tendrils Journal Entry", types: ["journal", "abyss"]}, 
    {name: "Give Flower to Elderbug", types: []}, 
    {name: "Get two Pale Ore checks (Grubs / Essence excluded)", types: ["peak", "basin", "deepnest", "edge"]}, 
    {name: "Check the Charged Lumafly Journal Entry", types: ["journal", "uumuu"]}, 
    {name: "Defeat Enraged Guardian (CG2)", types: ["peak"]}
],
[
    {name: "Check the Hive Mask Shard", types: ["hive", "tram"]}, 
    {name: "Kill a Kingsmould", types: ["basin"]}, 
    {name: "Kill two Soul Warriors", types: ["elegant", "sanctum"]}, 
    {name: "Complete 4 full dream trees", types: []}, 
    {name: "Defeat Failed Champion", types: ["dreamboss"]}, 
    {name: "Defeat Hornet Sentinel", types: ["edge"]}, 
    {name: "Defeat Troupe Master Grimm", types: ["grimm"]}
],
[
    {name: "Check/Free all grubs in Deepnest (5)", types: ["grubs", "deepnest", "darkdeepnest"]}, 
    {name: "Complete the Greenpath Root", types: ["qg", "greenpath"]}, 
    {name: "Equip 5 Charms at the same time", types: ["charms"]}, 
    {name: "Kill 6 different Stalking Devouts", types: ["darkdeepnest"]}, 
    {name: "Defeat Pale Lurker", types: ["edge"]}, 
    {name: "Defeat both arenas in Royal Waterways", types: ["waterways", "rightwaterways"]}
],
[
    {name: "Check/Free all grubs in Waterways (3)", types: ["grubs", "waterways", "rightwaterways", "tram"]}, 
    {name: "Check/Free all grubs in Queen's Gardens (3)", types: ["grubs", "qg"]}, 
    {name: "Check/Free all grubs in City of Tears (5)", types: ["grubs"]}, 
    {name: "Defeat Nosk", types: ["deepnest"]}, 
    {name: "Defeat Lost Kin", types: ["basin", "dreamboss"]}, 
    {name: "Defeat Traitor Lord", types: ["qg"]}
],
[
    {name: "Defeat Hive Knight", types: ["hive", "tram"]}, 
    {name: "Get Brumm's flame", types: ["darkdeepnest", "grimm"]}, 
    {name: "Check/Free all grubs in Crystal Peaks (7)", types: ["grubs", "peak"]}, 
    {name: "Obtain 20 grubs", types: ["grubs"]}, 
    {name: "Defeat Soul Tyrant", types: ["sanctum", "dreamboss"]}, 
    {name: "Defeat Collector", types: ["edge"]}, 
    {name: "Check Void Heart", types: ["abyss"]}
],
[
    {name: "Obtain Carefree Melody", types: ["darkdeepnest", "grimm"]}, 
    {name: "Get 2 Dreamer's checks (Requires Dream nail)", types: ["darkdeepnest", "watchers", "uumuu"]}, 
    {name: "Colosseum 1", types: ["edge"]}, 
    {name: "Complete either ending of the Cloth questline", types: ["basin", "qg"]}, 
    {name: "Defeat any one Ascended boss", types: ["waterways"]}, 
    {name: "Defeat two Dream Bosses", types: ["dreamboss", "sanctum", "basin"]}, 
    {name: "Give the flower to Nailmaster Oro", types: ["edge"]}
]];