bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Beat LAV Type G in one shot [M04]", types: ["vehicle","main"] },
  { name: "Save 0 POWs", types: ["pow","recruit"] },
  { name: "Listen To Your Walkman", types: ["music"] },
  { name: "Overflow Mother Base", types: ["recruit"] },
  { name: "Climb Up Using A Box", types: ["box"] },
  { name: "Perform A Leap of Faith [M16]", types: ["box","main"] },
];
bingoList[2] = [
  { name: "Gamer Fuel", types: ["heal"] },
  { name: "5 Uniques In The Same Unit", types: ["recruit"] },
  { name: "S Vehicle: Chopper", types: ["vehicle"] },
  { name: "Complete A Mission: Only Banana", types: ["side","banana"] },
  { name: "Kill A Guard w/ A Turret", types: ["kill"] },
];
bingoList[3] = [
  { name: "Break a Helicopter’s Cockpit", types: ["vehicle"] },
  { name: "Swimsuit Mission", types: ["beach"] },
  { name: "Cook A Ration: Well Done", types: ["heal"] },
  { name: "Zap Zadornov [M32]", types: ["main"] },
  { name: "Use C4 to Destroy an Object [019]", types: ["side"] },
];
bingoList[4] = [
  { name: "Heaven's Divide", types: ["music"] },
  { name: "Don't Loop PW [M22]", types: ["main","AI"] },
  { name: "Read Huey's Letter In Full", types: ["storytime"] },
  { name: "Perfect Date: Kaz", types: ["side","date"] },
  { name: "Complete A Main Op: Only Banana", types: ["main","banana"] },
];
bingoList[5] = [
  { name: "Unique calls for the Love Box or Box Tank", types: ["box"] },
  { name: "S Vehicle: Bomber", types: ["vehicle","chopper"] },
  { name: "Kill All Guards In A Mission", types: ["kill"] },
  { name: "Contact A Ghost [062]", types: ["side"] },
  { name: "Zap Zadornov [M28]", types: ["main"] },
];
bingoList[6] = [
  { name: "Head Shot Master [006]", types: ["side"] },
  { name: "Dodge All Trees [M22]", types: ["main","qte"] },
  { name: "Pull 4 Unique AI Board Types", types: ["AI"] },
  { name: "S Pooyan [063]", types: ["side"] },
  { name: "Use C4 to Destroy an Object [020]", types: ["side"] },
];
bingoList[7] = [
  { name: "S Vehicle: BTR", types: ["vehicle"] },
  { name: "Find Sunlight", types: ["main"] },
  { name: "Head Shot Master [004]", types: ["side"] },
  { name: "Drop A Box on a Guard's Head", types: ["box","supplies"] },
  { name: "Use C4 to Destroy an Object [051]", types: ["side"] },
];
bingoList[8] = [
  { name: "Chaff Zeke [M33]", types: ["main"] },
  { name: "Snapshot [057]", types: ["side"] },
  { name: "Destroy: No Turrets [116]", types: ["AI","side"] },
  { name: "Zap Zadornov [M29]", types: ["main"] },
  { name: "S Pooyan [064]", types: ["side"] },
];
bingoList[9] = [
  { name: "Destroy: No Turrets [M18]", types: ["main","AI"] },
  { name: "Perfect Date: Paz", types: ["side","date"] },
  { name: "Complete A Mission: Only Throwables", types: ["main","side","weapon"] },
  { name: "Recruit A 5* Chef", types: ["recruit"] },
  { name: "Head Shot Master [007]", types: ["side"] },
];
bingoList[10] = [
  { name: "S Vehicle: LAV", types: ["vehicle"] },
  { name: "Head Shot Master [008]", types: ["side"] },
  { name: "Side Ops: Defeat Boss, No Recovery", types: ["side","heal"] },
  { name: "S Pooyan [065]", types: ["side"] },
  { name: "Use C4 to Destroy an Object [M08]", types: ["main"] },
];
bingoList[11] = [
  { name: "Destroy: 6+ Turrets [117]", types: ["AI","side"] },
  { name: "Blow Up A Truck", types: ["main","side"] },
  { name: "Zap Zadornov [M27]", types: ["main"] },
  { name: "Perform a 6-Chain CQC [M19]", types: ["main","cqc","qte"] },
  { name: "Head Shot Master [009]", types: ["side"] },
];
bingoList[12] = [
  { name: "Create a Divine Wind", types: ["weapon"] },
  { name: "S Vehicle: Any Tank", types: ["vehicle","tank"] },
  { name: "Snapshot [058]", types: ["side"] },
  { name: "S Monster [123]", types: ["monster","side"] },
  { name: "Bon Appétit Test Kitchen: Ratholos", types: ["monster","side","weapon"] },
];
bingoList[13] = [
  { name: "Snapshot [059]", types: ["side"] },
  { name: "One-Shot [056]", types: ["side","weapon"] },
  { name: "S Monster [124]", types: ["monster","side"] },
  { name: "Complete A Mission: Only Mosin", types: ["side","main","weapon"] },
  { name: "S Tank [080]", types: ["side","vehicle","tank"] },
];
bingoList[14] = [
  { name: "Perfect Boss CQC [M14]", types: ["qte","main"] },
  { name: "S Monster [121]", types: ["monster","side"] },
  { name: "Bon Appétit Test Kitchen: Tigrex", types: ["monster","side","weapon"] },
  { name: "Save 5+ POWs", types: ["recruit"] },
  { name: "No Rockets: Pupa", types: ["AI","weapon"] },
];
bingoList[15] = [
  { name: "Custom AI [117]", types: ["AI","side"] },
  { name: "S Chopper: Non-Bomber Custom", types: ["vehicle","chopper"] },
  { name: "Bon Appétit Test Kitchen: Gear Rex", types: ["monster","side","weapon"] },
  { name: "S Monster [122]", types: ["monster","side"] },
  { name: "Defend a Base [038-041]", types: ["side"] },
];
bingoList[16] = [
  { name: "Custom AI [113]", types: ["AI","side"] },
  { name: "S Monster [125]", types: ["monster","side"] },
  { name: "Complete A Mission: Only Placeables", types: ["main","side","weapon"] },
  { name: "S Tank [076]", types: ["side","vehicle","tank"] },
  { name: "S Tank [078]", types: ["side","vehicle","tank"] },
];
bingoList[17] = [
  { name: "Airstrike Rex [128]", types: ["side","monster","weapon"] },
  { name: "Custom AI [115]", types: ["AI","side"] },
  { name: "S Chopper: Bomber Custom", types: ["vehicle","chopper","side"] },
  { name: "Mk.22 Only [125]", types: ["side","monster","weapon"] },
  { name: "S Tank [082]", types: ["tank","vehicle","side"] },
];
bingoList[18] = [
  { name: "Custom AI [119]", types: ["AI","side"] },
  { name: "S Monster [126]", types: ["monster","side"] },
  { name: "S Tank [093]", types: ["vehicle","tank","side"] },
  { name: "S Tank [095]", types: ["vehicle","tank","side"] },
  { name: "Bullet Kanchō / Rear Entry", types: ["main","side","weapon"] },
];
bingoList[19] = [
  { name: "Perfect Ghost: No Traces", types: ["main","side"] },
  { name: "Never Enter Main Ops", types: ["main"] },
  { name: "Mk.22 Only [126]", types: ["monster","side","weapon"] },
  { name: "S Tank [097]", types: ["vehicle","tank","side"] },
  { name: "Destroy: 6+ Turrets [M08]", types: ["weapon","AI","main"] },
];
bingoList[20] = [
  { name: "S Vehicle: BTR C ", types: ["vehicle"] },
  { name: "Destroy All Parts: Type-I AI", types: ["AI","weapon","main"] },
  { name: "S Monster [127]", types: ["monster","side"] },
  { name: "No Battle Dress [M24]", types: ["main","weapon"] },
  { name: "Destroy: No Turrets [117]", types: ["AI","weapon","side"] },
];
bingoList[21] = [
  { name: "Complete a mission w/ Hunter scheme", types: ["main","side"] },
  { name: "Mk.22 Only [127]", types: ["monster","side","weapon"] },
  { name: "S Tank [077]", types: ["vehicle","tank","side"] },
  { name: "S Tank [079]", types: ["vehicle","tank","side"] },
  { name: "Destroy: 6+ Turrets [116]", types: ["AI","weapon","side"] },
];
bingoList[22] = [
  { name: "S Vehicle: LAV C", types: ["vehicle"] },
  { name: "No Rockets: Cocoon", types: ["AI","weapon"] },
  { name: "S Tank [081]", types: ["vehicle","tank","side"] },
  { name: "S Tank [083]", types: ["vehicle","tank","side"] },
  { name: "Head Shot Master [005]", types: ["side"] },
];
bingoList[23] = [
  { name: "S Tank [094]", types: ["vehicle","tank","side"] },
  { name: "No Rockets: Chrysalis", types: ["AI","weapon"] },
  { name: "S Tank [092]", types: ["vehicle","tank","side"] },
  { name: "Destroy All Parts: Type-II AI", types: ["AI","weapon","side"] },
  { name: "Use C4 to Destroy an Object [018]", types: ["side","weapon"] },
];
bingoList[24] = [
  { name: "Beat Best Zeke, no Resupplies [120]", types: ["AI","weapon","side"] },
  { name: "S Vehicle: Tank Custom", types: ["vehicle","tank","side"] },
  { name: "Resist Arrest [M19]", types: ["qte","main"] },
  { name: "S-Monster [128]", types: ["monster","side"] },
  { name: "S Tank [096]", types: ["vehicle","tank","side"] },
];
bingoList[25] = [
  { name: "Destroy All Parts: Custom AI", types: ["AI","weapon","side"] },
  { name: "S Tank [098]", types: ["vehicle","tank","side"] },
  { name: "No Bandanna/Supply [128]", types: ["monster","side","weapon","supplies"] },
  { name: "Mk.22 Only [128]", types: ["monster","side","weapon"] },
];
