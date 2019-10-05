bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = [];
bingoList[1] = [
  { name: "Read Atrus's letter to Catherine", types: ["mystisland","click"] },
  { name: "Turn off lights in observatory", types: ["mystisland","click"] },
  { name: "Turn in red library page", types: ["mystisland","rpage"] }
];
bingoList[2] = [
  { name: "Turn in blue library page", types: ["mystisland","bpage"] },
  { name: "Read the organ solution", types: ["mystisland","library"] }
];
bingoList[3] = [
  { name: "Read leaf constellation", types: ["mystisland","library"] },
  { name: "View Insignia of Black Ship", types: ["mystisland","library"] },
  { name: "View Channelwood future bridge diagram", types: ["mystisland","library"] }
];
bingoList[4] = [
  { name: "Deliberately trip the breaker in the powerhouse", types: ["mystisland","gate"] },
  { name: "View the correct fireplace code", types: ["mystisland","library"] },
  { name: "Open Selenetic", types: ["mystisland","gate"] }
];
bingoList[5] = [
  { name: "Light the boiler", types: ["mystisland","gate"] },
  { name: "Read fireplace combination 300", types: ["mystisland","library"] },
  { name: "Open Mechanical", types: ["mystisland","gate"] }
];
bingoList[6] = [
  { name: "Play organ code", types: ["mystisland","click"] },
  { name: "View marker switch diagram", types: ["mystisland","cutscene"] },
  { name: "Open Stoneship", types: ["mystisland","gate"] }
];
bingoList[7] = [
  { name: "Tower Rotation hint (Mechanical)", types: ["mystisland","rotation"] },
  { name: "Tower Rotation hint (Stoneship)", types: ["mystisland","rotation"] },
  { name: "View spider constellation", types: ["mystisland","observatory"] }
];
bingoList[8] = [
  { name: "Tower Rotation hint (Channelwood)", types: ["mystisland","rotation"] },
  { name: "Tower Rotation hint (Selenetic)", types: ["mystisland","rotation"] },
  { name: "View leaf constellation", types: ["mystisland","observatory"] }
];
bingoList[9] = [
  { name: "View the topographic demo", types: ["mystisland","cutscene"] },
  { name: "View snake constellation", types: ["mystisland","observatory"] },
  { name: "Free Atrus", types: ["mystisland","endgame"] }
];
bingoList[10] = [
  { name: "Touch the bird in Mechanical", types: ["mechanical","click"] },
  { name: "View Sirrus's portrait", types: ["mechanical","click"] },
  { name: "View swords & dragonfly", types: ["mechanical","click"] },
  { name: "Sit in Achenar's throne", types: ["mechanical","click"] }
];
bingoList[11] = [
  { name: "Sit in Sirrus's throne", types: ["mechanical","click"] },
  { name: "View decapitated head in Mechanical", types: ["mechanical","click"] },
  { name: "View Selenetic statue", types: ["mechanical","click"] },
  { name: "View Stoneship Statue", types: ["mechanical","click"] }
];
bingoList[12] = [
  { name: "View clock tower statue", types: ["mechanical","click"] },
  { name: "View knight's helmet & sword", types: ["mechanical","click"] },
  { name: "Set off electric cage", types: ["mechanical","cutscene"] },
  { name: "View Achenar's note to Sirrus", types: ["mechanical","click"] }
];
bingoList[13] = [
  { name: "Enable magma audio", types: ["selenetic","click"] },
  { name: "Enable clock audio", types: ["selenetic","click"] },
  { name: "Enable crystal audio", types: ["selenetic","click"] },
  { name: "View cobra jack-in-the-box", types: ["mechanical","cutscene"] }
];
bingoList[14] = [
  { name: "Enable water audio", types: ["selenetic","click"] },
  { name: "Enable wind audio", types: ["selenetic","click"] },
  { name: "Turn on tunnel light", types: ["selenetic","click"] },
  { name: "Open audio console door", types: ["selenetic","click"] }
];
bingoList[15] = [
  { name: "Collect Selenetic blue page", types: ["selenetic","bpage"] },
  { name: "Collect Selenetic red page", types: ["selenetic","rpage"] },
  { name: "Play with Sirrus's desk toy", types: ["stoneship","cutscene"] },
  { name: "Look at Sirrus's drugs", types: ["stoneship","click"] }
];
bingoList[16] = [
  { name: "View red globe in Sirrus's room", types: ["stoneship","click"] },
  { name: "View blue globe in Sirrus's room", types: ["stoneship","click"] },
  { name: "View the lighthouse through the telescope", types: ["stoneship","cutscene"] },
  { name: "View first half of Marker Switch hint page", types: ["stoneship","click"] }
];
bingoList[17] = [
  { name: "View tribal mask in Achenar's room", types: ["stoneship","click"] },
  { name: "View the rotational demo", types: ["mechanical","cutscene"] },
  { name: "View skull hologram in Achenar's room", types: ["stoneship","cutscene"] }
];
bingoList[18] = [
  { name: "Collect Mechanical blue page", types: ["mechanical","bpage"] },
  { name: "Collect Mechanical red page", types: ["mechanical","rpage"] },
  { name: "Use backtrack in Mazerunner", types: ["selenetic","click"] }
];
bingoList[19] = [
  { name: "View padlock at bottom of lighthouse", types: ["stoneship","click"] },
  { name: "Fully charge the generator in Stoneship", types: ["stoneship","cutscene"] },
  { name: "Set off the buzzer in Stoneship", types: ["stoneship","click"] }
];
bingoList[20] = [
  { name: "Ride to the top of the tree", types: ["mystisland","cutscene"] },
  { name: "Watch Atrus's message to Catherine", types: ["mystisland","cutscene"] },
  { name: "Collect Selenetic blue page", types: ["selenetic","bpage"] },
  { name: "Collect Selenetic red page", types: ["selenetic","rpage"] }
];
bingoList[21] = [
  { name: "Collect Stoneship blue page", types: ["stoneship","bpage"] },
  { name: "Collect Stoneship red page", types: ["stoneship","rpage"] },
  { name: "View second half of Mechanical code", types: ["mechanical","rotation"] },
  { name: "Trigger useless lever in windmill room", types: ["channelwood","click"] }
];
bingoList[22] = [
  { name: "View Bob through telescope", types: ["mechanical","rotation"] },
  { name: "View first half of Mechanical code", types: ["mechanical","rotation"] },
  { name: "Use every elevator in Channelwood", types: ["channelwood"] },
  { name: "Trigger the trap chest", types: ["channelwood","cutscene"] }
];
bingoList[23] = [
  { name: "Make the iron gate creak", types: ["channelwood","click"] },
  { name: "View second half of Marker Switch hint page", types: ["channelwood","click"] },
  { name: "View Sirrus's dagger", types: ["channelwood","click"] },
  { name: "Solve the audio cue puzzle in Selenetic", types: ["selenetic","cutscene"] }
];
bingoList[24] = [
  { name: "View Achenar's third recording", types: ["channelwood","cutscene"] },
  { name: "View Achenar's first recording", types: ["channelwood","cutscene"] },
  { name: "View Achenar's second recording", types: ["channelwood","cutscene"] }
];
bingoList[25] = [
  { name: "View Sirrus's recording", types: ["channelwood","cutscene"] },
  { name: "Collect Channelwood blue page", types: ["channelwood","bpage"] },
  { name: "Collect Channelwood red page", types: ["channelwood","rpage"] }
];
