var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[[
  { "name": "Copeland - The Right to Bear Arms", "types": ["Character Collectable","Cascade"] },
  { "name": "Tucker - Trust No One", "types": ["Character Collectable","Belknap"] },
  { "name": "Boozer - Our Only Guest", "types": ["Character Collectable","Lost Lake"] },
  { "name": "Iron Mike - I'll Always Be with You", "types": ["Character Collectable","Lost Lake"] },
  { "name": "Taylor - Delivery Boy", "types": ["Character Collectable","Wizard Island"] },
  { "name": "Jim - Advisory Warning", "types": ["Character Collectable","Iron Butte "] },
  { "name": "Peter Skene Ogden - Fur Trade Warrior", "types": ["Historical Markers","Cascade"] },
  { "name": "Belknap Crater - Belknap's Volcano", "types": ["Historical Markers","Belknap"] },
  { "name": "Booker-Hick's Logging Camp - The Wandering Timber Town", "types": ["Historical Markers","Crater Lake"] },
  { "name": "Lost Cabin Mine - The Goldmine", "types": ["Historical Markers","Crater Lake"] },
  { "name": "Old Pioneer Cemetery Brochure", "types": ["Tourism","Cascade"] },
  { "name": "Hungry Jim's Menu", "types": ["Tourism","Belknap"] },
  { "name": "One Mind", "types": ["Sermon","Belknap"] },
  { "name": "Fear the Rising", "types": ["Sermon","Iron Butte"] }
],[
  { "name": "Copeland - Hunting Season", "types": ["Character Collectable","Cascade"] },
  { "name": "Tucker - I Can't Go On", "types": ["Character Collectable","Belknap"] },
  { "name": "Boozer - My Beautiful Wife", "types": ["Character Collectable","Lost Lake"] },
  { "name": "Iron Mike - Let There Be Peace", "types": ["Character Collectable","Lost Lake"] },
  { "name": "Taylor - Flying High", "types": ["Character Collectable","Wizard Island"] },
  { "name": "Grotto Caves - The Buried Caves", "types": ["Historical Markers","Cascade"] },
  { "name": "Salome Hot Springs - The Salt Springs", "types": ["Historical Markers","Belknap"] },
  { "name": "Luckly Lad Mines - The Gold Rush Mines", "types": ["Historical Markers","Lost Lake"] },
  { "name": "Crater Lake - The Volcanic Lake", "types": ["Historical Markers","Crater Lake"] },
  { "name": "Marion Forks Bumper Stickers", "types": ["Tourism","Belknap"] },
  { "name": "Meet the Campfire Cadets", "types": ["Tourism","Lost Lake"] },
  { "name": "Klamath Marsh Wetlands Preservation Flyer", "types": ["Tourism","Highway 97"] },
  { "name": "Set You Free", "types": ["Sermon","Iron Butte"] },
  { "name": "Destroy Your Ego", "types": ["Sermon","Iron Butte"] }
],[
  { "name": "Manny - Happy Birthday, Stud", "types": ["Character Collectable","Cascade"] },
  { "name": "Alkai - A Portrait of Salome", "types": ["Character Collectable","Belknap"] },
  { "name": "Rikki - Your Lamp in the Sky", "types": ["Character Collectable","Lost Lake"] },
  { "name": "Addy - Straying from the Path of God", "types": ["Character Collectable","Lost Lake"] },
  { "name": "Doc Jiminez - Doctor Arturo", "types": ["Character Collectable","Wizard Island"] },  
  { "name": "Caldera Reservoir - Bombs in the Water", "types": ["Historical Markers","Cascade"] },
  { "name": "Belknap Caves - The Lava River Caves", "types": ["Historical Markers","Belknap"] },
  { "name": "The 45th Parallel - The Halfway Point", "types": ["Historical Markers","Lost Lake"] },
  { "name": "Camp Adair - The War Games", "types": ["Historical Markers","Crater Lake"] },
  { "name": "Marion Forks Postcards", "types": ["Tourism","Belknap"] },
  { "name": "Sherman's Camp Farmer's Market Poster", "types": ["Tourism","Lost Lake"] },
  { "name": "Chemult Ski Resort Brochure", "types": ["Tourism","Highway 97"] },
  { "name": "Don't Run", "types": ["Sermon","Belknap"] },
  { "name": "Sacrifice for Freedom", "types": ["Sermon","Iron Butte"] }
],[
  { "name": "Manny - Zen and the Art of Bike Repair", "types": ["Character Collectable","Cascade"] },
  { "name": "Lisa - Have a Good Day", "types": ["Character Collectable","Belknap"] },
  { "name": "Skizzo - The Shit List", "types": ["Character Collectable","Lost Lake"] },
  { "name": "Addy - The Old Generator", "types": ["Character Collectable","Lost Lake"] },
  { "name": "Colonel - The Good Book", "types": ["Character Collectable","Wizard Island"] },
  { "name": "Rainbow Falls - Path of the Spirits", "types": ["Historical Markers","Cascade"] },
  { "name": "McKenzie Pass - Robber's Pass", "types": ["Historical Markers","Belknap"] },
  { "name": "Camp Pioneer - The Grand Campsite", "types": ["Historical Markers","Lost Lake"] },
  { "name": "Iron Butte Meteorite - Gift from the Sky", "types": ["Historical Markers","Iron Butte"] },
  { "name": "The Benefits of Bear Creek Hot Springs", "types": ["Tourism","Belknap"] },
  { "name": "Rogue Camp Whiskey Menu", "types": ["Tourism","Lost Lake"] },
  { "name": "Iron Butte Ranch Masters Tournament", "types": ["Tourism","Iron Butte"] },
  { "name": "Chemult Community College Green Week Poster", "types": ["Tourism","Highway 97"] },
  { "name": "Founder's Tale", "types": ["Sermon","Iron Butte"] }
],[
  { "name": "Rikki - Wrench in Hand", "types": ["Character Collectable","Lost Lake"] },
  { "name": "Skizzo - With Honours", "types": ["Character Collectable","Lost Lake"] },
  { "name": "Colonel - Sleepy Tea", "types": ["Character Collectable","Wizard Island"] },
  { "name": "Kouri - To Protect and Serve", "types": ["Character Collectable","Diamond Lake"] },
  { "name": "Sarah - My Old Lady", "types": ["Character Collectable","Iron Butte"] },
  { "name": "Peaceful Lake - Battle of the Misty Lake", "types": ["Historical Markers","Cascade"] },
  { "name": "Indigenous Petroglyphs - Stories in Stone", "types": ["Historical Markers","Belknap"] },
  { "name": "Architectural Memorial - The Community Builder", "types": ["Historical Markers","Lost Lake"] },
  { "name": "Iron Bute - The Iron Mountain", "types": ["Historical Markers","Iron Butte"] },
  { "name": "Salome Hot Springs Guestbook", "types": ["Tourism","Belknap"] },
  { "name": "Bears? Where?! Black Bear Awareness Poster", "types": ["Tourism","Belknap"] },
  { "name": "Fishing at Diamond Lake Village", "types": ["Tourism","Crater Lake"] },
  { "name": "Pet Parade", "types": ["Tourism","Highway 97"] },
  { "name": "The Ultimate Goal", "types": ["Sermon","Iron Butte"] }
],[
  { "name": "Song - Yesterday", "types": ["Song"] },
  { "name": "Teller Cabin - The Horror House", "types": ["Historical Markers","Cascade"] },
  { "name": "Memorial of the Unknown Mailman - Pioneer Mailman", "types": ["Historical Markers","Belknap"] },
  { "name": "Three Fingered Jack Viewpoint - Old Hot Fingers", "types": ["Historical Markers","Belknap"] },
  { "name": "Metolius Lava Cave - Distillery Cave", "types": ["Historical Markers","Lost Lake"] },
  { "name": "Iron Butte Ranch - The Summer Marsh", "types": ["Historical Markers","Iron Butte"] },
  { "name": "Crater Lake - The Native American Legend", "types": ["Historical Markers","Crater Lake"] },
  { "name": "The Stagecoach Legend - Rushing for Gold", "types": ["Historical Markers","Highway 97"] },
  { "name": "Japanese Balloon Bomb - The Casualties of War", "types": ["Historical Markers","Highway 97"] },
  { "name": "Belknap Fire Season Warning Sign", "types": ["Tourism","Belknap"] },
  { "name": "Adam Finch Stout Label", "types": ["Tourism","Lost Lake"] },
  { "name": "Snowbrush Ranch Alpaca Farm", "types": ["Tourism","Iron Butte"] },
  { "name": "Take Out & Tunes", "types": ["Tourism","Highway 97"] },
  { "name": "Rest in Peace", "types": ["Sermon","Iron Butte"] }
],[
  { "name": "Song - Mirrors", "types": ["Song"] },
  { "name": "Margaret Alice Miller - The Guardian Angel", "types": ["Historical Markers","Cascade"] },
  { "name": "The Lava Arch - Lava River Cave", "types": ["Historical Markers","Belknap"] },
  { "name": "Outlaw Memorial - The Oregon Lengen", "types": ["Historical Markers","Belknap"] },
  { "name": "Moon Trees - Grown From Outer Space", "types": ["Historical Markers","Lost Lake"] },
  { "name": "Snowbrush Ranch - The First Alpaca Farm", "types": ["Historical Markers","Iron Butte"] },
  { "name": "Crater Lake - The Old Man of the Lake", "types": ["Historical Markers","Crater Lake"] },
  { "name": "Mazama Village - The New Deal Projects", "types": ["Historical Markers","Crater Lake"] },
  { "name": "Bill The Grey Fox Miner - Oregon's Worst Bandit", "types": ["Historical Markers","Highway 97"] },
  { "name": "Seeking Gorgeous Man", "types": ["Tourism","Belknap"] },
  { "name": "Crater Lake Postcards", "types": ["Tourism","Crater Lake"] },
  { "name": "Balloons Over Chemult", "types": ["Tourism","Highway 97"] },
  { "name": "The Free", "types": ["Sermon","Iron Butte"] },
  { "name": "Join or Die", "types": ["Sermon","Iron Butte"] }
],[
  { "name": "Song - Our Lies", "types": ["Song"] },
  { "name": "Captain Jack - The Modoc Warrior", "types": ["Historical Markers","Belknap"] },
  { "name": "Berley Lake - The Moon Country", "types": ["Historical Markers","Lost Lake"] },
  { "name": "Devil's Lake - View of the Cascades", "types": ["Historical Markers","Iron Butte"] },
  { "name": "Waldo Lake - The Oregon Conservationist", "types": ["Historical Markers","Iron Butte"] },
  { "name": "Mazama Falls - The Silent Falls", "types": ["Historical Markers","Crater Lake"] },
  { "name": "The Phantom Ship - The Ghost on the Water", "types": ["Historical Markers","Crater Lake"] },
  { "name": "Gentleman Bandit Memorial - Poetic Justice", "types": ["Historical Markers","Highway 97"] },
  { "name": "Frontier Motel Brochures", "types": ["Tourism","Belknap"] },
  { "name": "Classified Virus Research", "types": ["Tourism","Iron Butte"] },
  { "name": "Preserving the Beauty of Crater Lake Poster", "types": ["Tourism","Crater Lake"] },
  { "name": "Chemult Suds-fest", "types": ["Tourism","Highway 97"] },
  { "name": "Pain is a Gift", "types": ["Sermon","Cascade "] },
  { "name": "The Rising is Coming", "types": ["Sermon","Iron Butte"] }
],[
  { "name": "No Field Repairs", "types": ["Skills"] },
  { "name": "No Monkey Wrench", "types": ["Skills"] },
  { "name": "Jefferson Tail Tunnel Ambush Camp", "types": ["Ambush Camp","Cascade"] },
  { "name": "Bear Creek Hot Springs Ambush Camp", "types": ["Ambush Camp","Belknap"] },
  { "name": "Berley Lake Ambush Camp", "types": ["Ambush Camp","Lost Lake"] },
  { "name": "Redwood RV Park Ambush Camp", "types": ["Ambush Camp","Iron Butte"] },
  { "name": "Old Pioneer Cemetery Nero Checkpoint", "types": ["Nero Checkpoint","Cascade"] },
  { "name": "Marion Forks Tunnel Nero Checkpoint", "types": ["Nero Checkpoint","Belknap"] },
  { "name": "Rogue Tunnel Nero Checkpoint", "types": ["Nero Checkpoint","Iron Butte"] }
],[
  { "name": "No Busted Lip", "types": ["Skills"] },
  { "name": "No Catch Your Breath", "types": ["Skills"] },
  { "name": "Song - Perfect", "types": ["Song"] },
  { "name": "Cascade Radio Tower Ambush Camp", "types": ["Ambush Camp","Cascade"] },
  { "name": "Black Crater Ambush Camp", "types": ["Ambush Camp","Belknap"] },
  { "name": "Deerborn ambush Camp", "types": ["Ambush Camp","Lost Lake"] },
  { "name": "Spruce lake Ambush Camp", "types": ["Ambush Camp","Crater Lake"] },
  { "name": "Iron Butte Pass Nero Checkpoint", "types": ["Nero Checkpoint","Belknap"] },
  { "name": "Volcanic Legacy Scenic Byway Nero Checkpoint", "types": ["Nero Checkpoint","Crater Lake"] },
  { "name": "Pillette Bridge Nero Checkpoint", "types": ["Nero Checkpoint","Highway 97"] }
],[
  { "name": "No Fight and Flight", "types": ["Skills"] },
  { "name": "No Eagle-Eyed", "types": ["Skills"] },
  { "name": "Horse Creek Ambush Camp", "types": ["Ambush Camp","Cascade"] },
  { "name": "Belknap Caves Ambush Camp", "types": ["Ambush Camp","Belknap"] },
  { "name": "Wagon Road Ambush Camp", "types": ["Ambush Camp","Iron Butte"] },
  { "name": "Cascade Lakes Railway Ambush Camp", "types": ["Ambush Camp","Crater Lake"] },
  { "name": "Horse Lake Nero Checkpoint", "types": ["Nero Checkpoint","Cascade"] },
  { "name": "Santiam Tunnel Nero Checkpoint", "types": ["Nero Checkpoint","Lost Lake"] },
  { "name": "Spruce Lake Nero Checkpoint", "types": ["Nero Checkpoint","Crater Lake"] },
  { "name": "Chemult Community College Nero Checkpoint", "types": ["Nero Checkpoint","Highway 97"] }
],[
  { "name": "No Crowd Control", "types": ["Skills"] },
  { "name": "No Hawkeyed", "types": ["Skills"] },
  { "name": "Song - She's My Drug", "types": ["Song"] },
  { "name": "Horse Lake Horde", "types": ["Horde","Cascade"] },
  { "name": "O'Leary Mountain Horde", "types": ["Horde","Cascade"] },
  { "name": "Little Bear Lake Horde", "types": ["Horde","Cascade"] },
  { "name": "River Flow Farms Horde", "types": ["Horde","Lost Lake"] },
  { "name": "Old Sawmill Nero Checkpoint", "types": ["Nero Checkpoint","Lost Lake"] },
  { "name": "Aspen Butte Ambush Camp", "types": ["Ambush Camp","Highway 97"] }
],[
  { "name": "No Lightning Reflexes", "types": ["Skills"] },
  { "name": "No On the Move", "types": ["Skills"] },
  { "name": "Peaceful Lake 1 - Hear About a Ripper Camp?", "types": ["Camp Mission","Cascade"] },
  { "name": "Hot Springs 1 - Everyone Has to Work", "types": ["Camp Mission","Belknap"] },
  { "name": "Lost Lake 1 - Drifters at Eden Hill", "types": ["Camp Mission","Lost Lake"] },
  { "name": "Diamond Lake 1 - A Bunch of Cavemen", "types": ["Camp Mission","Diamond Lake"] },
  { "name": "Wizard Island 1 - You Don't Want to Know", "types": ["Camp Mission","Wizard Island"] },
  { "name": "Death Train Horde", "types": ["Horde","Cascade"] },
  { "name": "Cascade Highway Horde", "types": ["Horde","Cascade"] },
  { "name": "Shadow Lake Horde", "types": ["Horde","Belknap"] },
  { "name": "Bare Bay Ambush Camp", "types": ["Ambush Camp","Highway 97"] }
],[
  { "name": "No Just Roll with It", "types": ["Skills"] },
  { "name": "No Under Pressure", "types": ["Skills"] },
  { "name": "Logging Camp Infestation", "types": ["Nest","Cascade"] },
  { "name": "Pioneer Cemetery Infestation", "types": ["Nest","Cascade"] },
  { "name": "White King Mine Horde", "types": ["Horde","Cascade"] },
  { "name": "Proxy Falls Horde", "types": ["Horde","Cascade"] },
  { "name": "Westfir Horde", "types": ["Horde","Lost Lake"] },
  { "name": "Bear Creek Hot Springs Horde", "types": ["Horde","Belknap"] }
],[
  { "name": "No Quick Reload", "types": ["Skills"] },
  { "name": "No Shape Up", "types": ["Skills"] },
  { "name": "Crazy Willie's Infestation", "types": ["Nest","Belknap"] },
  { "name": "Patjens Lakes Infestation", "types": ["Nest","Belknap"] },
  { "name": "Wapinitia Road Horde", "types": ["Horde","Lost Lake"] },
  { "name": "Sherman's Camp Horde", "types": ["Horde","Lost Lake"] },
  { "name": "Marion Forks Horde", "types": ["Horde","Belknap"] },
  { "name": "Lava Arch Horde", "types": ["Horde","Belknap"] }
],[
  { "name": "No Two Birds, One Bullet", "types": ["Skills"] },
  { "name": "No Carry That Weight", "types": ["Skills"] },
  { "name": "Marion Forks Infestation", "types": ["Nest","Belknap"] },
  { "name": "Sherman's Camp Infestation", "types": ["Nest","Lost Lake"] },
  { "name": "Grotto Caves Horde", "types": ["Horde","Cascade"] },
  { "name": "Berley Lake Horde", "types": ["Horde","Lost Lake"] },
  { "name": "Belknap Crater Horde", "types": ["Horde","Belknap"] },
  { "name": "Twin Craters Horde", "types": ["Horde","Belknap"] }
],[
  { "name": "No Executioner", "types": ["Skills"] },
  { "name": "No Up the Ante", "types": ["Skills"] },
  { "name": "Wizard Island 2 - Never Give Up Hope", "types": ["Camp Mission","Wizard Island"] },
  { "name": "Diamond Lake 2 - A Hell of a Fight", "types": ["Camp Mission","Diamond Lake"] },
  { "name": "Lost Lake 2 - Gone Fishing", "types": ["Camp Mission","Lost Lake"] },
  { "name": "Hot Springs 2 - Nice and Bloody", "types": ["Camp Mission","Belknap"] },
  { "name": "Peaceful Lake 2 - He Never Came Back", "types": ["Camp Mission","Cascade"] },
  { "name": "Patjens Lake Horde", "types": ["Horde","Belknap"] },
  { "name": "Groose Gardens Horde", "types": ["Horde","Highway 97"] },
  { "name": "Chemult Community College Horde", "types": ["Horde","Highway 97"] },
  { "name": "Rum Rye Gulch Horde", "types": ["Horde","Highway 97"] }
],[
  { "name": "No Focused Shot", "types": ["Skills"] },
  { "name": "No Eye for Detail", "types": ["Skills"] },
  { "name": "Rogue Camp Infestation", "types": ["Nest","Lost Lake"] },
  { "name": "Berley Lake Infestation", "types": ["Nest","Lost Lake"] },
  { "name": "Metolius Lave Cave Horde", "types": ["Horde","Lost Lake"] },
  { "name": "Juniper Ridge Horde", "types": ["Horde","Highway 97"] },
  { "name": "Friendship Ridge Horde", "types": ["Horde","Highway 97"] },
  { "name": "Solomon Hill Horde", "types": ["Horde","Highway 97"] }
],[
  { "name": "Herb - 50", "types": ["Food or Ear"] },
  { "name": "Berry - 50", "types": ["Food or Ear"] },
  { "name": "Mushroom - 50", "types": ["Food or Ear"] },
  { "name": "Tumblebug River Infestation", "types": ["Nest","Crater Lake"] },
  { "name": "Rimview Ranch Infestation", "types": ["Nest","Crater Lake"] },
  { "name": "McLeod Ridge Horde", "types": ["Horde","Crater Lake"] },
  { "name": "Mt. Scott Ski Resort Horde", "types": ["Horde","Highway 97"] },
  { "name": "Sagebrush Point Horde", "types": ["Horde","Highway 97"] },
  { "name": "Chemult Station Horde", "types": ["Horde","Highway 97"] }
],[
  { "name": "Swarmer Ear - 600", "types": ["Food or Ear"] },
  { "name": "Crier Beak - 10", "types": ["Food or Ear"] },
  { "name": "Reacher Ear - 10", "types": ["Food or Ear"] },
  { "name": "Cascade Lakes Rail Line Infestation", "types": ["Nest","Highway 97"] },
  { "name": "Chemult College Infestation", "types": ["Nest","Highway 97"] },
  { "name": "Rimview Ranch Horde", "types": ["Horde","Crater Lake"] },
  { "name": "Beasley Lake Horde", "types": ["Horde","Highway 97"] },
  { "name": "Cascade Lake Rail Line Horde", "types": ["Horde","Highway 97"] },
  { "name": "Veaver Marsh Rest Stop Horde", "types": ["Horde","Highway 97"] }
],[
  { "name": "Iron Butte Resort Horde", "types": ["Horde","Iron Butte"] }
],[
  { "name": "Bleacher Ear - 200", "types": ["Food or Ear"] },
  { "name": "Cougar Meat - 5", "types": ["Food or Ear"] },
  { "name": "Wolf Meat - 25", "types": ["Food or Ear"] },
  { "name": "Peaceful Lake 3 - Hard to Miss", "types": ["Camp Mission","Cascade"] },
  { "name": "Hot Springs 3 - A Score to Settle", "types": ["Camp Mission","Belknap"] },
  { "name": "Lost Lake 3 - Over a Card Game", "types": ["Camp Mission","Lost Lake"] },
  { "name": "Wizard Island 3 - Take Back What's Mine", "types": ["Camp Mission","Wizard Island"] },
  { "name": "Lobert Draw Ridge Horde", "types": ["Horde","Highway 97"] }
],[
  { "name": "Newt Ear - 50", "types": ["Food or Ear"] },
  { "name": "Breaker Ear - 10", "types": ["Food or Ear"] },
  { "name": "Dear Meat - 30", "types": ["Food or Ear"] },
  { "name": "Wizard Island 4 - Still Breathing", "types": ["Camp Mission","Wizard Island"] },
  { "name": "Lost Lake 4 - How Many Bodies?", "types": ["Camp Mission","Lost Lake"] },
  { "name": "Hot Springs 4 - Coming into Town", "types": ["Camp Mission","Belknap"] },
  { "name": "Peaceful Lake 4 - Here's a Little Chaos", "types": ["Camp Mission","Cascade"] },
  { "name": "Mt. Bailey Horde", "types": ["Horde","Crater Lake"] }
],[
  { "name": "Bear Meat - 5", "types": ["Food or Ear"] },
  { "name": "Screamer Ear - 25", "types": ["Food or Ear"] },
  { "name": "Runner Ear - 20", "types": ["Food or Ear"] },
  { "name": "Hot Springs 5 - I'll Double It", "types": ["Camp Mission","Belknap"] },
  { "name": "Lost Lake 5 - He's Just a Kid", "types": ["Camp Mission","Lost Lake"] },
  { "name": "Wizard Island 5 - He's Feeding the Freaks", "types": ["Camp Mission","Wizard Island"] },
  { "name": "Old Sawmill Horde", "types": ["Horde","Lost Lake"] }
],[
  { "name": "Rager Ear - 5", "types": ["Food or Ear"] },
  { "name": "Crow Meat - 10", "types": ["Food or Ear"] },
  { "name": "South Oregon Crier Nests", "types": ["Special"] },
  { "name": "Craft Taser Weapon", "types": ["Special"] },
  { "name": "Wizard Island 6 - How Do I Get Them?", "types": ["Camp Mission","Wizard Island"] },
  { "name": "Lost Lake 6 - On Tonight's Menu", "types": ["Camp Mission","Lost Lake"] },
  { "name": "Hot Springs 6 - Rippers, Rest in Hell", "types": ["Camp Mission","Belknap"] },
  { "name": "Hot Springs 7 - Part of the Family", "types": ["Camp Mission","Belknap"] }
]];