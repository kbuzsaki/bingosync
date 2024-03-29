//Hitman 3: Santa Fortuna Three Headed Serpent
//Version 1.0
//By Providence Community
bingoGenerator = require("./generators/generator_bases/simple_generator.js");
var bingoList = [
    {"name": "Become a Chef"},
    {"name": "Become a Coca Field Guard"},
    {"name": "Become a Coca Field Worker"},
    {"name": "Become a Construction Worker"},
    {"name": "Become a Drug Lab Worker"},
    {"name": "Become a Gardener"},
    {"name": "Become a Mansion Guard"},
    {"name": "Become a Mansion Staff"},
    {"name": "Become a Street Soldier"},
    {"name": "Become a Submarine Crew"},
    {"name": "Become an Elite Guard"},
    {"name": "Become the Band Member"},
    {"name": "Become the Barman"},
    {"name": "Become the Hippie"},
    {"name": "Become the Hippo Whisperer"},
    {"name": "Become the Shaman"},
    {"name": "Become the Submarine Engineer"},
    {"name": "Become the Tattoo Artist"},
    {"name": "Collect 2 Coconuts"},
    {"name": "Collect 2 Frogs"},
    {"name": "Collect 2 Hammers"},
    {"name": "Collect 2 Kitchen Knives"},
    {"name": "Collect 2 Lethal Poison Pill Jars"},
    {"name": "Collect 2 Meaty Bones"},
    {"name": "Collect 2 Scissors"},
    {"name": "Collect 3 Apricots"},
    {"name": "Collect 3 Bricks"},
    {"name": "Collect 3 Cocaine Bricks"},
    {"name": "Collect 3 Crowbars"},
    {"name": "Collect 3 Rat Poisons"},
    {"name": "Collect 3 Screwdrivers"},
    {"name": "Collect 5 Soda Cans"},
    {"name": "Collect a Baseball"},
    {"name": "Collect a Botany Lab Keycard"},
    {"name": "Collect a Caves Keycard"},
    {"name": "Collect a Cleaver"},
    {"name": "Collect a tube of Glue"},
    {"name": "Collect both Pool Balls"},
    {"name": "Collect the Bag of Gunpowder"},
    {"name": "Collect the Barber Razor"},
    {"name": "Collect the Circuit Board"},
    {"name": "Collect the Claw Hammer"},
    {"name": "Collect the Cocaine Machine Blueprints"},
    {"name": "Collect the Cocaine Souvenir Recipe"},
    {"name": "Collect the Construction Eq. Brochure"},
    {"name": "Collect the Cowboy Bust"},
    {"name": "Collect the Drug Experiment Report"},
    {"name": "Collect the Drug Smuggler Memo"},
    {"name": "Collect the Folding Knife"},
    {"name": "Collect the Helicopter Cargo Manifest"},
    {"name": "Collect the Hippo Behavior Notes"},
    {"name": "Collect the Letter Opener"},
    {"name": "Collect the Letterbomb Parcel"},
    {"name": "Collect the Mansion Gate Key"},
    {"name": "Collect the Picture of Héctor and Andrea"},
    {"name": "Collect the Speedboat Key"},
    {"name": "Collect the Submarine Blueprints"},
    {"name": "Collect the Truck Key"},
    {"name": "Destroy Jorge's Flower Sample manually"},
    {"name": "Detonate a Remote Explosive"},
    {"name": "Drop the Column next to the Hippo"},
    {"name": "Fire the Shashka A33 Gold"},
    {"name": "Interact with 2 Fuseboxes"},
    {"name": "Interact with 2 Generators"},
    {"name": "Interact with the Mansion Gate Knocker"},
    {"name": "Open a Secret Door"},
    {"name": "Operate the Submarine Control Panel"},
    {"name": "Overflow the Fish Tank manually"},
    {"name": "Play all 4 Museum Voiceovers"},
    {"name": "Play the Interrogation Recording"},
    {"name": "Ring the Service Bell"},
    {"name": "Turn on 2 Faucets"},
    {"name": "Turn on 3 Sinks"},
    {"name": "Turn on a Money Counter"},
    {"name": "Turn on an Ice Machine"},
    {"name": "Turn on both Vacuum Cleaners"},
    {"name": "Turn on the Cement Mixer"},
    {"name": "Turn on the Jacuzzi"},
    {"name": "Turn on the Vanisher's Photocopier"},
    {"name": "Turn on the Water Pump"},
    {"name": "Turn on the Wind-Up-Toy"},
    {"name": " Drop the Hanging Sculpture"},
    {"name": "Make the Golden Statue fall"},
    {"name": "Make the Timber Log move"},
    {"name": "Puncture both Water Coolers"},
    {"name": "Puncture both Wine Barrels"},
    {"name": "Blend in as Gardener"},
    {"name": "Blend in as Mansion Staff"},
    {"name": "Pacify someone with a Frying Pan"},
    {"name": "Examine Franco's Drug Notes"},
    {"name": "Blow up 2 Gas Canisters"},
    {"name": "Poison a line of Cocaine"},
    {"name": "Poison Catalina's Champagne"},
    {"name": "Poison the Shaman's Ayahuasca"},
    {"name": "Feed Mijo with the Meaty Bone"}
];
