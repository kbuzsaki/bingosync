bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "Prologue"
    },
    {
        "name": "Franklin and Lamar"
    },
    {
        "name": "Repossession"
    },
    {
        "name": "Complications"
    },
    {
        "name": "Father/Son"
    },
    {
        "name": "Marriage Counselling"
    },
    {
        "name": "Friend Request"
    },
    {
        "name": "Casing The Jewel Store"
    },
    {
        "name": "Chop"
    },
    {
        "name": "Daddy's Little Girl"
    },
    {
        "name": "Carbine Rifles"
    },
    {
        "name": "Bugstars Equipment"
    },
    {
        "name": "BZ Gas Grenades"
    },
    {
        "name": "The Jewel Store Job (Smart)"
    },
    {
        "name": "The Jewel Store Job (Loud)"
    },
    {
        "name": "Mr Philips"
    },
    {
        "name": "Trevor Philips Industries"
    },
    {
        "name": "Nervous Ron"
    },
    {
        "name": "Crystal Maze"
    },
    {
        "name": "Friends Reunited"
    },
    {
        "name": "Fame or Shame"
    },
    {
        "name": "Hotel Assassination"
    },
    {
        "name": "The Long Stretch"
    },
    {
        "name": "Dead Man Walking"
    },
    {
        "name": "Three's Company"
    },
    {
        "name": "Did Somebody Say Yoga"
    },
    {
        "name": "By the Book"
    },
    {
        "name": "Hood Safari"
    },
    {
        "name": "Cargobob"
    },
    {
        "name": "Minisub"
    },
    {
        "name": "Boiler Suits"
    },
    {
        "name": "Masks"
    },
    {
        "name": "Trash Truck"
    },
    {
        "name": "Masks"
    },
    {
        "name": "Tow Truck"
    },
    {
        "name": "Getaway Vehicle (Blitz Play)"
    },
    {
        "name": "The Merryweather Heist (Off-Shore)"
    },
    {
        "name": "The Merryweather Heist (Freighter)"
    },
    {
        "name": "Blitz Play"
    },
    {
        "name": "Mr. Richards"
    },
    {
        "name": "I Fought the Law"
    },
    {
        "name": "Eye in the Sky"
    },
    {
        "name": "Caida Libre"
    },
    {
        "name": "Minor Turbulence"
    },
    {
        "name": "Paleto Score Setup"
    },
    {
        "name": "Military Hardware"
    },
    {
        "name": "Predator"
    },
    {
        "name": "The Paleto Score"
    },
    {
        "name": "Derailed"
    },
    {
        "name": "Monkey Business"
    },
    {
        "name": "Hang Ten"
    },
    {
        "name": "Surveying the Score"
    },
    {
        "name": "Deep Inside"
    },
    {
        "name": "Burry The Hatchet"
    },
    {
        "name": "Pack Man"
    },
    {
        "name": "Fresh Meat"
    },
    {
        "name": "The Ballad of Rocco"
    },
    {
        "name": "Cleaning out The Bureau"
    },
    {
        "name": "Reuniting The Family"
    },
    {
        "name": "Architect's Plans"
    },
    {
        "name": "Doting Dad"
    },
    {
        "name": "Fire Engine"
    },
    {
        "name": "Getaway Vehicle (Bureau Raid)"
    },
    {
        "name": "The Bureau Raid (Fire Crew)"
    },
    {
        "name": "The Bureau Raid (Roof Entry)"
    },
    {
        "name": "The Wrap Up"
    },
    {
        "name": "Legal Trouble"
    },
    {
        "name": "Lamar Down"
    },
    {
        "name": "Meltdown"
    },
    {
        "name": "Sidetracked"
    },
    {
        "name": "Driller"
    },
    {
        "name": "Stingers"
    },
    {
        "name": "Gauntlet 1"
    },
    {
        "name": "Gauntlet 2 "
    },
    {
        "name": "Gauntlet 3"
    },
    {
        "name": "The Big Score (Obvious)"
    },
    {
        "name": "The Big Score (Subtle)"
    },
    {
        "name": "Parenting 101"
    },
    {
        "name": "The Third Way"
    },
    {
        "name": "Something Sensible"
    },
    {
        "name": "The Times's Come"
    },
    {
        "name": "The Multi Target Assassination"
    },
    {
        "name": "The Vice Assassination"
    },
    {
        "name": "Pulling Favours"
    },
    {
        "name": "Pulling Another Favour"
    },
    {
        "name": "Pulling Favours Again"
    },
    {
        "name": "Still Pulling Favours"
    },
    {
        "name": "Pulling One Last Favour"
    },
    {
        "name": "Shift Work"
    },
    {
        "name": "Seeking the Truth"
    },
    {
        "name": "Accepting the Truth"
    },
    {
        "name": "Assuming the Truth"
    },
    {
        "name": "Chasing the Truth"
    },
    {
        "name": "Bearing the Truth"
    },
    {
        "name": "Delivering the Truth"
    },
    {
        "name": "Exercising the Truth"
    },
    {
        "name": "Unknowing the Truth"
    },
    {
        "name": "Exercising Demons - Michael"
    },
    {
        "name": "Exercising Demons - Franklin"
    },
    {
        "name": "Exercising Demons - Trevor"
    },
    {
        "name": "Bail Bonds"
    },
    {
        "name": "Risk Assesment"
    },
    {
        "name": "Golf"
    },
    {
        "name": "Tennis"
    },
    {
        "name": "Any Shooting Range Challenge"
    },
    {
        "name": "Flight School - Franklin"
    },
    {
        "name": "Flight School - Michael"
    },
    {
        "name": "Flight School - Trevor"
    },
    {
        "name": "Darts"
    },
    {
        "name": "Sea Race 1"
    },
    {
        "name": "Sea Race 2"
    },
    {
        "name": "Sea Race 3"
    },
    {
        "name": "Sea Race 4"
    },
    {
        "name": "Triathlon"
    },
    {
        "name": "Offroad Moto/ATV Race"
    },
    {
        "name": "Offroad Truck Race"
    },
    {
        "name": "Packie Mcreary (Heist Crew Member)"
    },
    {
        "name": "Taliana Martinez (Heist Crew Member)"
    },
    {
        "name": "Buy Smoke On The Water"
    },
    {
        "name": "Buy Mckenzie Airfield"
    },
    {
        "name": "Buy Sonar Collection Docks"
    },
    {
        "name": "Max Out Personal Vehicle (Franklin)"
    },
    {
        "name": "Max Out Personal Vehicle (Michael)"
    },
    {
        "name": "Max Out Personal Vehicle (Trevor)"
    },
    {
        "name": "Max Out Any Weapon"
    },
    {
        "name": "Obtain a Carbine Rifle"
    },
    {
        "name": "Obtain an Assault Rifle"
    },
    {
        "name": "Obtain a SMG"
    },
    {
        "name": "Obtain a Micro SMG"
    },
    {
        "name": "Obtain a MG"
    },
    {
        "name": "Obtain a Combat MG"
    },
    {
        "name": "Obtain a RPG"
    },
    {
        "name": "Obtain a Pump Shotgun"
    },
    {
        "name": "Obtain a Sawed Off Shotgun"
    },
    {
        "name": "Obtain an Assault Shotgun"
    },
    {
        "name": "Obtain a Sniper Rifle"
    },
    {
        "name": "Obtain a Heavy Sniper Rifle"
    },
    {
        "name": "Obtain a Minigun"
    },
    {
        "name": "Obtain an Assault SMG"
    },
    {
        "name": "Obtain a Bullpup Shotgun"
    },
    {
        "name": "Obtain a Gusenberg Sweeper"
    },
    {
        "name": "Obtain a Special Carbine"
    },
    {
        "name": "Obtain a Bullpup Rifle"
    },
    {
        "name": "Obtain a Musket"
    },
    {
        "name": "Obtain a Marksman Rifle"
    },
    {
        "name": "Obtain a Heavy Shotgun"
    },
    {
        "name": "Obtain a Combat PDW"
    },
    {
        "name": "Obtain a Marksman Pistol"
    },
    {
        "name": "Obtain a Railgun"
    },
    {
        "name": "Obtain a Homing Launcher"
    },
    {
        "name": "Obtain a Machine Pistol"
    },
    {
        "name": "Obtain a Heavy Pistol"
    },
    {
        "name": "Obtain a Stun Gun"
    },
    {
        "name": "Obtain a AP Pistol"
    },
    {
        "name": "Obtain a Combat Pistol"
    },
    {
        "name": "Obtain a Pistol"
    },
    {
        "name": "Obtain a SNS Pistol"
    },
    {
        "name": "Obtain a Pistol .50"
    },
    {
        "name": "Obtain a Vintage Pistol"
    },
    {
        "name": "Obtain a Helipad"
    },
    {
        "name": "Obtain a Hangar"
    }
];
