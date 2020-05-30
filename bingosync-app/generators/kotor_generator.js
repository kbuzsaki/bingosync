var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoListVersion = "5.0";
var bingoList = [];

bingoList[1] = [
  { name: "Kill Selven", types: ["Taris","Bounty"] },
  { name: "Fully Upgraded Republic Mod Armor", types: ["Upgrade"] },
  { name: "Rescue Tanis", types: ["Tatooine"] },
  { name: "Czerka Corp. Resource ID", types: ["Kashyyyk"] },
  { name: "Kill the Whimpering Locker", types: ["Manaan", "Alignment"] },
  { name: "Implant Level 3", types: ["Character"] },
  { name: "Kill Calo Nord", types: ["Bosses"] },
  { name: "Discover Zelka Forn's Secret", types: ["Taris"] },
];
bingoList[2] = [
  { name: "Blow Up Matrik's Apartment", types: ["Taris", "Bounty"] },
  { name: "Fully Upgraded Echani Fiber Armor", types: ["Upgrade"] },
  { name: "Sell Sharina's Wraid Plate", types: ["Tatooine"] },
  { name: "Sith Medallion", types: ["Korriban"] },
  { name: "Destroy Droid (Force Power)", types: ["Force power","Character"] },
  { name: "Bondar Crystal", types: ["Crystal"] },
  { name: "Exactly 0 Credits", types: ["Credits"] },
  { name: "Attend Yun Genda's Party", types: ["Taris", "Gender"] },
];
bingoList[3] = [
  { name: "Get Dia's Bounty Lifted", types: ["Taris","Bounty"] },
  { name: "Clear the Endar Spire", types: ["Clear"] },
  { name: "Talk to Samnt", types: ["Dantooine"] },
  { name: "Defend the Sandcrawler Miners", types: ["Tatooine"] },
  { name: "Above 30 Net Stealth Skill", types: ["Character"] },
  { name: "Rubat Crystal", types: ["Crystal"] },
  { name: "Poison Both Yuthura and Uthar", types: ["Korriban"] },
  { name: "Help with Lyn Sekla's Audition", types: ["Taris"] },
  { name: "Complete \"Pazaak Rules\"", types: ["Pazaak"] },
];
bingoList[4] = [
  { name: "Damind Crystal", types: ["Crystal"] },
  { name: "Kill a Hive Kinrath", types: ["Dantooine"] },
  { name: "Convict Both Rickard and Handon", types: ["Dantooine","Murder"] },
  { name: "Rescue the Mandalorian on Korriban", types: ["Korriban"] },
  { name: "Force Storm", types: ["Character"] },
  { name: "Recruit HK-47", types: ["Party", "Tatooine", "HK"] },
  { name: "Complete \"The Trouble with Gizka\"", types: [] },
  { name: "Solve the Rakatan Riddles", types: ["Riddles"] },
];
bingoList[5] = [
  { name: "Kill Kandon Ark", types: ["Taris"] },
  { name: "Kill a Shyrack Alpha", types: ["Korriban"] },
  { name: "Opila Crystal", types: ["Crystal"] },
  { name: "15 Tach Glands", types: ["Kashyyyk"] },
  { name: "Sneak Attack IX", types: ["Character"] },
  { name: "Uncanny Dodge 2", types: ["Character"] },
  { name: "Complete \"Rakghoul Serum\"", types: ["Taris"] },
  { name: "Win 4 Fighter Skirmishes", types: [] },
  { name: "Kill a Rancor", types: ["Taris"] },
];
bingoList[6] = [
  { name: "Qel-Droma Robes", types: ["Korriban","Hunt","AlignedItem"] },
  { name: "Sith Armor", types: ["Taris"] },
  { name: "Become Sector Champion on Manaan", types: ["Manaan","Swoops"] },
  { name: "Eralam Crystal", types: ["Crystal"] },
  { name: "Two Weapon Specializations", types: ["Character"] },
  { name: "5 Different Lightsaber Colors", types: ["Colors"] },
  { name: "Complete \"Unfinished Business\"", types: ["Riddles"] },
  { name: "Successfully Interrogate the Sith Prisoner", types: ["Manaan"] },
];
bingoList[7] = [
  { name: "Davik's War Suit", types: ["Taris","Bosses"] },
  { name: "150 Racing Bonds", types: ["Tatooine","Swoops"] },
  { name: "Complete \"Sandral-Matale Feud\"", types: ["Dantooine"] },
  { name: "20 Gaffi Sticks", types: ["Tatooine"] },
  { name: "Jenruax Crystal", types: ["Crystal"] },
  { name: "Complete \"Honest Debt\"", types: ["Kashyyyk"] },
  { name: "Nextor Crystal", types: ["Crystal"] },
  { name: "10,000 Credits", types: ["Credits"] },
];
bingoList[8] = [
  { name: "Free Hudrow", types: ["Taris"] },
  { name: "Kill an Albino Kath Hound", types: ["Dantooine"] },
  { name: "Defeat Furko Nellis's Tournament Deck", types: ["Pazaak","Tatooine"] },
  { name: "Solari Crystal", types: ["Crystal","Korriban","Hunt","AlignedItem"] },
  { name: "Fully Repair HK-47", types: ["Party","HK"] },
  { name: "Return Sasha to Dantooine", types: ["Party", "Zaalbar"] },
  { name: "Kill Darth Bandon", types: ["Bosses"] },
  { name: "Clear the Hidden Bek Base", types: ["Clear", "Taris"] },
];
bingoList[9] = [
  { name: "Fully Upgraded Mission's Vibroblade", types: ["Mission","Upgrade"] },
  { name: "Carbonite Projector Mark II", types: ["Korriban","Tombs"] },
  { name: "Firkrann Crystal", types: ["Crystal","Korriban"] },
  { name: "Dark Side Mastery", types: ["Character","Alignment"] },
  { name: "Win All 8 Swoop Races", types: ["Swoops"] },
  { name: "Kill Belaya", types: ["Dantooine","Korriban","Juhani","Party"] },
  { name: "Complete \"Mission for the Republic\"", types: ["Manaan"] },
  { name: "Strand Zaalbar on Kashyyyk", types: ["Kashyyyk","Zaalbar","Party"] },
];
bingoList[10] = [
  { name: "Two Krayt Dragon Pearls", types: ["Tatooine"] },
  { name: "Get Banned From Manaan", types: ["Manaan"] },
  { name: "Redeem Ajunta Pall's Spirit", types: ["Korriban","Tombs"] },
  { name: "Kill Kel Algwinn", types: ["Korriban", "Alignment"] },
  { name: "Romance Carth", types: ["Party", "Gender"] },
  { name: "Romance Bastila", types: ["Party", "Gender"] },
  { name: "Defeat Twitch", types: ["Taris","Bounty"] },
  { name: "One Droid with Upgrade Class 3", types: ["Character", "HK", "T3", "Party"] },
  { name: "Purchase a Store's Entire Inventory", types: ["Credits"] },
];
bingoList[11] = [
  { name: "Talk to Komad on Kashyyyk", types: ["Tatooine","Kashyyyk"] },
  { name: "Two Bendak's Blasters", types: ["Taris","Bounty","Blasters"] },
  { name: "Kill Griff", types: ["Mission","Tatooine","Party", "Alignment"] },
  { name: "Phond Crystal", types: ["Crystal","Korriban","Tombs"] },
  { name: "One of Each Pazaak Card", types: ["Pazaak"] },
  { name: "GenoHaradan Poison Blade", types: ["Bounty","Manaan","Geno"] },
  { name: "All Master-Level Blaster Feats", types: ["Character"] },
  { name: "Kill Zuulan", types: ["Dantooine","Bounty","Blasters","Geno"] },
];
bingoList[12] = [
  { name: "Download 5 Area Schematics", types: [] },
  { name: "GenoHaradan Blaster", types: ["Dantooine","Bounty","Blasters"] },
  { name: "Give Griff a Tach Gland", types: ["Tatooine","Mission","Kashyyyk"] },
  { name: "Master Caution, Empathy, and Gear Head", types: ["Character"] },
  { name: "Three Viper Kinrath Corpses", types: ["Kashyyyk","Zaalbar","Hunt"] },
  { name: "Fully Upgraded Bendak's Blaster", types: ["Taris","Bounty","Upgrade","Blasters"] },
  { name: "Naga Sadow's Poison Blade", types: ["Korriban","Tombs"] },
  { name: "Solve the Light Ring Puzzle", types: ["Korriban", "Tombs"] },
  { name: "Clear the Vulkar Base", types: ["Taris", "Clear"] },
];
bingoList[13] = [
  { name: "Complete \"The Promised Land\"", types: ["Taris"] },
  { name: "GenoHaradan Power Gloves", types: ["Manaan","Bounty","Geno"] },
  { name: "Kill Vorn", types: ["Tatooine","Bounty", "Geno"] },
  { name: "Kill Jorak Uln", types: ["Korriban", "Tombs", "Redeem"] },
  { name: "Kill Rulan", types: ["Kashyyyk","Bounty", "Geno"] },
  { name: "All 3 Force Immunity Feats", types: ["Character"] },
  { name: "Both Holocrons", types: ["Tatooine","Korriban","Family"] },
  { name: "Circlet of Saresh", types: ["Kashyyyk","Hunt","AlignedItem"] },
];
bingoList[14] = [
  { name: "GenoHaradan Visor", types: ["Kashyyyk","Bounty", "Geno"] },
  { name: "GenoHaradan Stealth Unit", types: ["Tatooine","Bounty", "Geno", "Belts"] },
  { name: "Four Third-Tier Force Powers", types: ["Character"] },
  { name: "100,000 Credits", types: ["Credits"] },
  { name: "Master Scoundrel's Luck and Master Sense", types: ["Character"] },
  { name: "Token From Tortured Selkath", types: ["Manaan"] },
  { name: "Defeat Both Defense Droids", types: ["Kashyyyk"] },
  { name: "Fully Upgraded Armor, Blaster, and Sword", types: ["Upgrade"] },
];
bingoList[15] = [
  { name: "Complete All 5 Taris Bounty Quests", types: ["Taris","Bounty"] },
  { name: "Complete \"Mandalorian Raiders\"", types: ["Dantooine","Mandos"] },
  { name: "Clear Davik's Estate", types: ["Taris", "Clear"] },
  { name: "Complete \"Hidden Hunters\"", types: ["Kashyyyk","Mandos"] },
  { name: "Level 6 in Two Classes", types: ["Character"] },
  { name: "Talk to Yuthura on Dantooine", types: ["Korriban","Dantooine", "Redeem"] },
  { name: "Recruit All Party Members", types: ["Party","Mission","Zaalbar","Juhani","Jolee","HK","T3"] },
  { name: "One of All 4 Deadly Mines", types: [] },
];
bingoList[16] = [
  { name: "Have Sunry Declared Innocent", types: ["Kashyyyk","Manaan","Murder","Party","Jolee"] },
  { name: "Fully Upgraded Baragwin Assault Blade", types: ["Upgrade"] },
  { name: "Complete \"Finding Dustil\"", types: ["Party"] },
  { name: "Complete \"Chieftain in Need\"", types: ["Party"] },
  { name: "Resolve All 3 Murder Cases", types: ["Murder"] },
  { name: "250 Maximum Vitality", types: ["Character"] },
  { name: "Complete All Dantooine Quests", types: ["Dantooine","Quests"] },
  { name: "Both Exoskeletons", types: ["Credits"] },
];
bingoList[17] = [
  { name: "All Three Great Hunt Journals", types: ["Hunt"] },
  { name: "Clear the Sand People Enclave", types: ["Tatooine", "Clear"] },
  { name: "Moisture Vaporators", types: ["Tatooine","HK"] },
  { name: "Three Unique Bowcasters", types: ["Kashyyyk"] },
  { name: "All 4 Sith Lord Artifacts", types: ["Tombs","Korriban","AlignedItem"] },
  { name: "Complete \"Threat from Xor\"", types: ["Juhani","Party"] },
  { name: "250 Maximum Force Points", types: ["Character"] },
  { name: "Complete All Manaan Quests", types: ["Manaan","Quests"] },
];
bingoList[18] = [
  { name: "40 Points in All Skills", types: ["Character"] },
  { name: "Achieve Level 20", types: ["Character"] },
  { name: "Kill Four Terentateks", types: ["Hunt"] },
  { name: "10 Prestige Points", types: ["Korriban"] },
  { name: "Zaalbar Wielding Bacca's Ceremonial Blade", types: ["Zaalbar","Kashyyyk"] },
  { name: "13 Unique Lightsaber Power Crystals", types: ["Crystal", "Collect"] },
  { name: "Complete All Kashyyyk Quests", types: ["Kashyyyk","Quests"] },
  { name: "At Least 25 in All Saves", types: ["Character"] },
];
bingoList[19] = [
  { name: "Luxum Crystal", types: ["Crystal","Manaan"] },
  { name: "Kill Hulas", types: ["Bounty", "Geno"] },
  { name: "21 Base Charisma", types: ["Character"] },
  { name: "Clear the Hrakert Rift Station", types: ["Manaan", "Clear"] },
  { name: "Raito's Gaderffii", types: ["Tatooine"] },
  { name: "Three Light Alignment-Restricted Items", types: ["AlignedItem"] },
  { name: "Five Alignment-Restricted Items", types: ["Tombs","AlignedItem"] },
  { name: "Complete All Tatooine Quests", types: ["Tatooine","Quests"] },
];
bingoList[20] = [
  { name: "Resolve All Party Family Disputes", types: ["Party","Mission","Zaalbar","Family"] },
  { name: "Clear the Sith Academy", types: ["Korriban","Clear"] },
  { name: "Clear the Shadowlands", types: ["Kashyyyk", "Clear"] },
  { name: "Clear Both Sith Bases", types: ["Taris","Manaan","Clear"] },
  { name: "Complete All Taris Quests", types: ["Taris", "Quests"] },
  { name: "Complete All Korriban Quests", types: ["Korriban","Quests"] },
  { name: "Complete All 11 Bounty Quests", types: ["Geno", "Bounty"] },
  { name: "Redeem Four Sith to the Light", types: ["Korriban", "Tombs", "Redeem"] },
];
bingoList[21] = [
  { name: "Kill Saul Karath", types: ["Bosses","Leviathan"] },
  { name: "Verpine Prototype Shield", types: ["Armband","Verpine", "Leviathan"] },
  { name: "Complete \"Premium Merchant\"", types: ["Leviathan"] },
  { name: "All 5 Star Maps", types: [] },
  { name: "Dominator Gauntlets", types: ["Credits", "Gloves"] },
  { name: "Mantle of the Force", types: ["Credits", "Colors"] },
  { name: "Heart of the Guardian", types: ["Credits", "Colors"] },
  { name: "Adrenaline Stimulator", types: ["Credits","Belts"] },
];
bingoList[22] = [
  { name: "All 10 Armbands", types: ["Collect","Armband"] },
  { name: "All 14 Medium Armors", types: ["Credits","Collect"] },
  { name: "All 6 Stealth Generators", types: ["Credits", "Collect", "Belts"] },
  { name: "Ship Parts", types: ["Lehon"] },
  { name: "Kill the One", types: ["Lehon"] },
  { name: "Kill the Duros on Lehon", types: ["Lehon"] },
  { name: "Kill the Trandoshan Smugglers", types: [] },
  { name: "All 7 Different Lightsaber Colors", types: ["Colors", "Credits"] },
];
bingoList[23] = [
  { name: "Defeat Malak on the Leviathan", types: ["Leviathan"] },
  { name: "Kill Calo, Davik, Bandon, and Saul", types: ["Leviathan", "Bosses"] },
  { name: "Verpine Zal Alloy Mesh", types: ["Lehon", "Mandos", "Verpine"] },
  { name: "Complete \"Rakatan Research\"", types: ["Lehon"] },
  { name: "Sith Power Gauntlets", types: ["Lehon", "Gloves"] },
  { name: "Clear the Warrior Rakatan Compound", types: ["Lehon", "Clear"] },
  { name: "Kill Jolee and Juhani", types: ["Lehon"] },
  { name: "Star Map: Kashyyyk as Revan", types: ["Kashyyyk"] },
];
bingoList[24] = [
  { name: "All 23 Blaster Pistols", types: ["Credits","Blasters","Collect"] },
  { name: "Clear the Leviathan", types: ["Leviathan", "Clear"] },
  { name: "Get Suvam Tam's Pazaak Discount", types: ["Pazaak"] },
  { name: "Defeat Every Pazaak Player Once", types: ["Pazaak"] },
  { name: "40 Completed Quests in Journal", types: ["Quests"] },
  { name: "Level 8 in Two Classes", types: ["Character"] },
  { name: "Kill 40 Unique Enemies", types: ["Bounty", "Bosses"] },
  { name: "All 14 Light Armors", types: ["Credits","Collect","Geno"] },
  { name: "All 12 Gloves", types: ["Collect","Gloves"] },
];
bingoList[25] = [
  { name: "Level 10 in Base Class", types: ["Character"] },
  { name: "Light Side Mastery", types: ["Character","Alignment","Bounty"] },
  { name: "Clear All 4 Sith Strongholds", types: ["Clear"] },
  { name: "Kill At Least 25 Mandalorians", types: ["Mandos"] },
  { name: "All 15 Lightsaber Power Crystals", types: ["Crystal", "Collect"] },
  { name: "Complete All 9 Companion Sidequests", types: ["Party","Zaalbar","Juhani","Mission","Jolee","HK","T3"] },
  { name: "Reach the Star Forge", types: [] },
  { name: "Force Zaalbar to Kill Mission", types: ["Lehon"] },
];
