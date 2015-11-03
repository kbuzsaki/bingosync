var bingoList = [];
bingoList["info"] = {
version: "v9"
};
bingoList[1] = [
        { name: "Bottled Fairy", jp: 'ビン(妖精)', types: { "bottle": 0 }, child: "yes" },
        { name: "Bullet Bag (50)", jp: 'デクのタネ袋(50)', types: { "bulletbag": 1 }, child: "yes" },
        { name: "Bomb Bag (30)", jp: 'ボム袋(30)', types: { "bombbag": 100 }, child: "yes" },
        { name: "Lens of Truth", jp: 'まことのメガネ', types: { "botw": 3 }, child: "yes" } ,
        { name: "Defeat a Skull Kid", jp: 'スタルキッド撃破', types: { "forest": 1, "skullkid": 1 }, child: "no" },
        { name: "At least 30 Deku Nuts", jp: 'デクの実30個以上', types: { "forest": 1, "nuts": 100 }, child: "yes" }
];
bingoList[2] = [
        { name: "Map & Compass in Dodongo's Cavern", jp: 'ドドンゴの洞窟のマップとコンパス', types: { "dc": 2 }, subtypes: { "mapcompass": 2 }, child: "yes" },
        { name: "Map & Compass in Deku Tree", jp: 'デクの樹様の中のマップとコンパス', types: { "deku": 3 }, subtypes: { "mapcompass": 3 }, child: "yes" },
        { name: "Map & Compass in Bottom of the Well", jp: '井戸の底のマップとコンパス', types: { "botw": 4 }, subtypes: { "mapcompass": 3 }, child: "yes" },
        { name: "Giant's Knife", jp: '巨人のナイフ', types: { "swords": 3 }, subtypes: { "wallet": 1 }, child: "no" },
        { name: "Minuet of Forest", jp: '森のメヌエット', types: { "forest": 3 }, subtypes: { "songs": 3 }, child: "no" },
        { name: "Goron Tunic", jp: 'ゴロンの服', types: { "gtunic": 2.5, "dmc": 2, "fire": 1 }, child: "no" },
        { name: "Zora Tunic", jp: 'ゾーラの服', types: { "ice": 2 }, child: "no" }
];
bingoList[3] = [
        { name: "Both heart pieces in Death Mountain Crater", jp: 'デスマウンテン火口のハートのかけら２つ', types: { "dmc": 2 }, subtypes: { "hearts": 1.5, "hovers": 0.5 }, child: "yes" },
        { name: "Fairy Slingshot", jp: '妖精のパチンコ', types: { "bulletbag": 100, "deku": 2.5 }, child: "yes" },
        { name: "At least 3 songs", jp: '歌3つ以上', types: { "songs": 6, "zl": 6, "childzl": 2 }, child: "yes" },
        { name: "Quiver (40)", jp: '矢立て(40)', types: { "forest": 1, "quiver": 1 }, child: "no" },
        { name: "Defeat all Lizalfos in Dodongo's Cavern", jp: 'ドドンゴの洞窟のリザルフォス全て撃破', types: { "dc": 3 }, child: "yes" },
        { name: "Bolero of Fire", jp: '炎のボレロ', types: { "dmc": 2 }, subtypes: { "songs": 3 }, child: "no" }
];
bingoList[4] = [
        { name: "30 Deku Sticks", jp: 'デクの棒30本', types: { "atrade": 2 }, child: "yes" },
        { name: "Defeat King Dodongo", jp: 'キングドドンゴ撃破', types: { "dc": 3, "kd": 2 }, subtypes: { "hearts": 3 }, child: "yes" },
        { name: "Fire Temple Boss Key", jp: '炎の神殿のボス部屋のカギ', types: { "fire": 1, "dmc": 2 }, subtypes: { "bosskey": 4 }, child: "no"},
        { name: "Ruto's Letter", jp: 'ルトの手紙', types: { "bottle": 4 }, child: "yes" },
        { name: "Ice Arrows", jp: '氷の矢', types: { "fortress": 3, "gtg": 2.5 }, subtypes: { "kd": 2 }, child: "yes" },
        { name: "Map & Compass in Shadow Temple", jp: '闇の神殿のマップとコンパス', types: { "shadow": 1, "hovers": 2.5 }, subtypes: { "mapcompass": 3 }, child: "yes" }
];
bingoList[5] = [
        { name: "Bullet Bag (40)", jp: 'デクのタネ袋(40)', types: { "bulletbag": 10, "deku": 3 }, child: "yes" },
        { name: "Blue Fire", jp: '青い炎', types: { "ice": 4, "bottle": 0, "ganon": 4 }, child: "yes" },
        { name: "Defeat Queen Gohma", jp: 'ゴーマ撃破', types: { "deku": 5, "ganon": 1.5 }, subtypes: { "hearts": 3, "childzl": 1.5 }, child: "yes" },
        { name: "All 3 Kokiri Forest area Skulltulas", jp: 'コキリの森エリアの黄金のスタルチュラ３匹', types: { "forest": 1 }, subtypes: { "wallet": 1 }, child: "no" },
        { name: "Ice Cavern Heart Piece", jp: '氷の洞窟のハートのかけら', types: { "ice": 4 }, subtypes: { "hearts": 1, "mapcompass": 3 }, child: "yes" },
        { name: "3 Tunics", jp: '服3種類', types: { "gtunic": 2.5, "ice": 2, "fire": 2.5 }, child: "no" },
        { name: "Water Temple Boss Key", jp: '水の神殿のボス部屋のカギ', types: { "water": 3, "fortress": 3 }, subtypes: { "bosskey": 5 }, child: "no" }
];
bingoList[6] = [
        { name: "Beat Dodongo's Cavern", jp: 'ドドンゴの洞窟クリア', types: { "dc": 3, "fortress": 2, "kd": 2 }, child: "yes" },
        { name: "Map & Compass in Ice Cavern", jp: '氷の洞窟のマップとコンパス', types: { "ice": 4 }, subtypes: { "mapcompass": 3 }, child: "yes" },
        { name: "Defeat a White Wolfos", jp: 'ホワイトウルフォス撃破', types: { "ice": 6, "fortress": 3 }, subtypes: { "mapcompass": 3 }, child: "yes" },
        { name: "Ganon's Castle Boss Key", jp: 'ガノン城のボス部屋のカギ', types: { "ganon": 3 }, subtypes: { "bosskey": 4, "childzl": 1.5 }, child: "yes" },
        { name: "All 3 Skulltulas in Bottom of the Well", jp: '井戸の底の黄金のスタルチュラ3匹', types: { "botw": 4 }, subtypes: { "wallet": 1 }, child: "yes" },
        { name: "Cow in House", jp: '牛(リンクの家)', types: { "cow": 5 }, child: "no" },
        { name: "Beat the Deku Tree", jp: 'デクの樹様の中クリア', types: { "deku": 5, "ganon": 3 }, subtypes: { "hearts": 3, "childzl": 1.5 }, child: "yes" },
        { name: "3 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ3つ', types: { "fortress": 3, "gtg": 2 }, child: "yes" },
        { name: "All 3 Skulltulas in Ice Cavern", jp: '氷の洞窟の黄金のスタルチュラ3匹', types: { "ice": 5 }, subtypes: { "wallet": 1, "mapcompass": 3 }, child: "yes" }
];
bingoList[7] = [
        { name: "Milk", jp: 'ロンロン牛乳', types: { "lonlon": 4, "bottle": 4 }, subtypes: { "childzl": 1 }, child: "yes" },
        { name: "4 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ4つ', types: { "fortress": 3, "gtg": 3 }, child: "yes" },
        { name: "All 4 Lost Woods area Skulltulas", jp: '迷いの森エリアの黄金のスタルチュラ4匹', types: { "forest": 2 }, subtypes: { "wallet": 1.5 }, child: "no" },
        { name: "Fill all 4 Bottle Slots", jp: '4つの空きビンスロットを全て埋める', types: { "bottle": 6 }, child: "yes" },
        { name: "Blue Potion", jp: '青いクスリ', types: { "atrade": 4, "zl": 6 }, child: "no" },
        { name: "At least 4 songs", jp: '歌4つ以上', types: { "songs": 6, "zl": 6 }, subtypes: { "child2": 2 }, child: "yes" },
        { name: "Giant's Wallet", jp: '巨人のサイフ', types: { "wallet": 6 }, child: "yes" }
];
bingoList[8] = [
        { name: "Plant bean in Death Mountain Crater", jp: 'デスマウンテン火口の土にマメを植える', types: { "dmc": 2, "beans": -1 }, subtypes: { "child2": 3 }, child: "yes" },
        { name: "Both Gerudo's Fortress area Skulltulas", jp: 'ゲルドの砦の黄金のスタルチュラ2匹', types: { "fortress": 2.5 }, subtypes: { "wallet": 0.5 }, child: "no" },
        { name: "Epona's Song", jp: 'エポナの歌', types: { "lonlon": 4 }, subtypes: { "songs": 4, "childzl": 1 }, child: "yes" },
        { name: "Iron Boots", jp: 'ヘビーブーツ', types: { "ice": 4, "irons": 2 }, subtypes: { "hovers": 1, "mapcompass": 2 }, child: "yes" },
        { name: "5 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ5つ', types: { "fortress": 3, "gtg": 4 }, child: "yes" },
        { name: "6 Hearts", jp: 'ハート6つ', types: { "hearts": 7 }, child: "yes" },
        { name: "Defeat Phantom Ganon", jp: 'ファントムガノン撃破', types: { "forest": 4, "pg": 3 }, subtypes: { "hearts": 3 }, child: "yes" },
        { name: "Map & Compass in Water Temple", jp: '水の神殿のマップとコンパス', types: { "water": 3 }, subtypes: { "mapcompass": 3 }, child: "no" }
];
bingoList[9] = [
        { name: "3 Swords & 3 Tunics", jp: '剣3種類と服3種類', types: { "swords": 3, "tunics": 5, "ice": 2, "fire": 2.5 }, subtypes: { "wallet": 1 }, child: "no" },
        { name: "3 Boots", jp: '靴3種類', types: { "ice": 4, "irons": 2, "hovers": 2.5 }, subtypes: { "mapcompass": 3 }, child: "yes" },
        { name: "All 5 Skulltulas in Dodongo's Cavern", jp: 'ドドンゴの洞窟の黄金のスタルチュラ5匹', types: { "dc": 4 }, subtypes: { "wallet": 2 }, child: "yes" },
        { name: "Defeat Morpha", jp: 'モーファ撃破', types: { "water": 7, "hovers": 1 }, subtypes: { "hearts": 3, "zl": 1.5 }, child: "no" },
        { name: "Beat the Forest Temple", jp: '森の神殿クリア', types: { "forest": 4, "pg": 4 }, subtypes: { "hearts": 3 }, child: "yes" },
        { name: "500 Rupees", jp: '500ルピー', types: { "wallet": 6 }, child: "yes" }
];
bingoList[10] = [
        { name: "At least 7 Magic Beans", jp: '魔法のマメ7つ以上', types: { "beans": 6 }, subtypes: { "child2": 2, "wallet": 2 }, child: "yes" },
        { name: "Defeat Big Octo", jp: '大オクタ撃破', types: { "jabu": 3, "ice": 3 }, child: "yes" },
        { name: "37th heart piece (Child Fortress)", jp: '37番目のハートのかけら(子供のゲルドの砦)', types: { "fortress": 2.5 }, subtypes: { "hearts": 1, "kd": 2 }, child: "yes" },
        { name: "Beat the Water Temple", jp: '水の神殿クリア', types: { "water": 7, "hovers": 1 }, subtypes: { "hearts": 1.5, "zl": 1.5 }, child: "no" },
        { name: "Forest Medallion", jp: '森のメダル', types: { "forest": 4, "lightarrow": 6, "atrade": 6, "zl": 6, "pg": 4 }, subtypes: { "hearts": 2 }, child: "yes" },
        { name: "6 unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ6つ', types: { "fortress": 3, "gtg": 5 }, child: "yes" },
        { name: "Requiem of Spirit", jp: '魂のレクイエム', types: { "fortress": 2.5, "spirit": 2.5 }, subtypes: { "songs": 3, "hovers": 1 }, child: "yes" },
        { name: "At least 6 songs", jp: '歌6つ以上', types: { "songs": 9, "zl": 6 }, subtypes: { "child2": 2 }, child: "no" }
];
bingoList[11] = [                                                                                  
        { name: "At least 4 Skulltulas in Shadow Temple", jp: '闇の神殿の黄金のスタルチュラ4匹以上', types: { "shadow": 3, "hovers": 2.5 }, subtypes: { "wallet": 1.5 }, child: "no" },
        { name: "All 8 Kakariko area Skulltulas", jp: 'カカリコ村エリアの黄金のスタルチュラ8匹', types: { "botw": 1, "childchu": 1 }, subtypes: { "wallet": 3.5 }, child: "no" },
        { name: "Mirror Shield", jp: 'ミラーシールド', types: { "fortress": 2.5, "spirit": 3, "hovers": 2.5, "gtg": 1 }, child: "yes" },
        { name: "All 5 Skulltulas in Forest Temple", jp: '森の神殿の黄金のスタルチュラ5匹', types: { "forest": 6, "hovers": 2 }, subtypes: { "wallet": 2 }, child: "no" },
        { name: "All 4 Skulltulas in Deku Tree", jp: 'デクの樹様の中の黄金のスタルチュラ4匹', types: { "deku": 3 }, subtypes: { "wallet": 1.5, "hovers": 1, "fortress": 1, "gtg": 1, "quiver": 3 }, child: "yes" },
        { name: "Water Medallion", jp: '水のメダル', types: { "water": 7, "hovers": 1, "zl": 6, "lightarrow": 2 }, subtypes: { "hearts": 3 }, child: "no" },
        { name: "Gerudo's Card", jp: 'ゲルドの会員証', types: { "fortress": 2.5, "gerudo": 6 }, child: "yes" },
        { name: "Defeat Amy (Green Poe)", jp: 'エイミー撃破(緑のポウ)ｴ', types: { "forest": 9, "fortress": 3, "gtg": 1 }, subtypes: { "mapcompass": 1.5, "bosskey": 3, "hovers": 1 }, child: "no" }
];
bingoList[12] = [
        { name: "Stone of Agony", jp: 'もだえ石', types: { "wallet": 10, "forest": 1 }, child: "yes" },
        { name: "Get to the end of Fire Trial", jp: '炎の結界の最後の部屋に到達', types: { "ganon": 3, "gtunic": 1, "hovers": 2.5 }, child: "no" },
        { name: "Golden Gauntlets", jp: '金のグローブ', types: { "strength": 100, "ganon": 3, "hovers": 1 }, child: "yes" },
        { name: "Get Bombchu chest in Spirit Temple", jp: '魂の神殿のボムチュウ取得', types: { "fortress": 2.5, "spirit": 6, "hovers": 2.5 }, child: "yes" },
        { name: "All 4 Skulltulas in Jabu-Jabu", jp: 'ジャブジャブ様のお腹の黄金のスタルチュラ4匹', types: { "jabu": 5, "ice": 3 }, subtypes: { "hearts": 1.5, "wallet": 1.5 }, child: "yes" },
        { name: "Fairy Bow", jp: '妖精の弓', types: { "forest": 6, "hovers": 2, "quiver": 3 }, subtypes: { "mapcompass": 2, "bosskey": 3 }, child: "no" },
        { name: "Defeat Dark Link", jp: 'ダークリンク撃破', types: { "water": 3, "longshot": 4 }, subtypes: { "mapcompass": 1.5, "dc": 2.5, "zl": 1.5 }, child: "no" },
        { name: "Fire Arrow", jp: '炎の矢', types: { "water": 1.5, "fortress": 3, "gtg": 1 }, subtypes: { "zl": 1.5, "quiver": 3 }, child: "no" }
];
bingoList[13] = [
        { name: "7 Hearts", jp: 'ハート7つ', types: { "hearts": 10 }, child: "yes" },
        { name: "Map & Compass in Jabu-Jabu", jp: 'ジャブジャブ様のお腹のマップとコンパス', types: { "jabu": 5, "ice": 3 }, subtypes: { "mapcompass": 3 }, child: "yes" },
        { name: "Win Bombchu Bowling Prize", jp: 'ボムチュウボウリングの景品', types: { "dc": 3, "fortress": 2, "kd": 3 }, subtypes: { "hearts": 3, "child2": 1 }, child: "yes" },
        { name: "Silver Gauntlets", jp: '銀のグローブ', types: { "strength": 100, "fortress": 3, "spirit": 2.5, "hovers": 2.5 }, child: "yes" },
        { name: "Longshot", jp: 'ロングフック', types: { "water": 3, "longshot": 5 }, subtypes: { "mapcompass": 1.5, "dc": 2.5, "zl": 1.5 }, child: "no" },
        { name: "3 Swords & 3 Boots", jp: '剣3種類と靴3種類', types: { "swords": 3, "hovers": 2.5, "ice": 4, "irons": 2 }, subtypes: { "mapcompass": 3, "wallet": 1 }, child: "no" }
];
bingoList[14] = [
        { name: "Both Hyrule Field area Skulltulas", jp: 'ハイラル平原エリアの黄金ノスタルチュラ2匹', types: { "zl": 3, "childzl": 3, "water": 5 }, subtypes: { "wallet": 0.5, "dmc": 1.5, "magic": 2 }, child: "yes" },
        { name: "All 4 Lon-Lon Ranch area Skulltulas", jp: 'ロンロン牧場エリアの黄金のスタルチュラ4匹', types: { "jabu": 7, "lonlon": 1.5 }, subtypes: { "wallet": 1.5 }, child: "yes" },
        { name: "Double Magic", jp: '魔力2倍', types: { "dmc": 1.5, "zl": 6, "childzl": 6, "magic": 2 }, child: "yes" },
        { name: "At least 8 songs", jp: '歌8つ以上', types: { "songs": 10, "zl": 6 }, subtypes: { "child2": 2 }, child: "no" },
        { name: "Bronze Gauntlets", jp: '銅のグローブ', types: { "strength": 100, "bulletbag": 100, "ganon": 3 }, subtypes: { "wallet": 1 }, child: "no" },
        { name: "Keaton Mask", jp: 'キータンのお面', types: { "childzl": 10 }, child: "yes" },
        { name: "3 Tunics & 3 Boots", jp: '服3種類と靴3種類', types: { "gtunic": 2.5, "dmc": 2, "fire": 1, "hovers": 2.5, "ice": 4, "irons": 2 }, subtypes: { "mapcompass": 3 }, child: "no" },
        { name: "Forest Temple Boss Key", jp: '森の神殿のボス部屋のカギ', types: { "forest": 6, "hovers": 2, "quiver": 3, "claimcheck": 10 }, subtypes: { "mapcompass": 2, "bosskey": 5 }, child: "no" }
];
bingoList[15] = [
        { name: "Map & Compass in Forest Temple", jp: '森の神殿のマップとコンパス', types: { "forest": 6, "hovers": 2, "quiver": 3 }, subtypes: { "mapcompass": 3, "bosskey": 3 }, child: "no" },
        { name: "Map & Compass in Fire Temple", jp: '炎の神殿のマップとコンパス', types: { "dmc": 2, "fire": 6, "gtunic": 1 }, subtypes: { "mapcompass": 3, "bosskey": 3 }, child: "no" },
        { name: "All 4 Gerudo Valley area Skulltulas", jp: 'ゲルドの谷エリアの黄金のスタルチュラ4匹', types: { "fortress": 2, "jabu": 0.5 }, subtypes: { "wallet": 1.5, "child2": 1.5 }, child: "no" },
        { name: "All 8 Death Mountain area Skulltulas", jp: 'デスマウンテンエリアの黄金のスタルチュラ8匹', types: { "dmc": 2, "childzl": 1 }, subtypes: { "child2": 3, "wallet": 3 }, child: "no" },
        { name: "At least 9 Magic Beans", jp: '魔法のマメ9つ以上', types: { "beans": 10 }, subtypes: { "child2": 2, "wallet": 2 }, child: "yes" },
        { name: "Blue Gauntlets", jp: '青のグローブ', types: { "strength": 100, "bulletbag": 100, "fortress": 3, "spirit": 2.5, "hovers": 2.5 }, subtypes: { "wallet": 1 }, child: "no" }
];
bingoList[16] = [
        { name: "Megaton Hammer", jp: 'メガトンハンマー', types: { "dmc": 2, "fire": 7, "gtunic": 1 }, subtypes: { "mapcompass": 2, "bosskey": 3, "hearts": 1 }, child: "no" },
        { name: "6 Maps", jp: 'マップ6つ', types: { "mapcompass": 15, "claimcheck": 3 }, child: "yes" },
        { name: "All 8 Zora's Domain area Skulltulas", jp: 'ゾーラの里エリアの黄金のスタルチュラ8匹', types: { "jabu": 2, "ice": 3 }, subtypes: { "wallet": 3 }, child: "no" },
        { name: "Defeat Barinade", jp: 'バリネード撃破', types: {  "jabu": 8, "ice": 3  }, subtypes: { "hearts": 3 }, child: "yes" },
        { name: "Double Defense", jp: '防御力2倍', types: { "zl": 6, "childzl": 6, "dmc": 1.5, "magic": 2, "ganon": 1 }, child: "no" },
        { name: "At least 3 Skulltulas in Water Temple", jp: '水の神殿の黄金のスタルチュラ3匹以上', types: { "water": 3, "longshot": 2, "ice": 4, "irons": 2, "zl": 6, "childzl": 6 }, subtypes: { "wallet": 1 }, child: "no"}
];
bingoList[17] = [
        { name: "Frog's Heart Piece", jp: 'カエルのハートのかけら(嵐の歌)', types: { "forest": 4, "child2": 3, "pg": 4, "hovers": 2.5 }, subtypes: { "hearts": 4, "songs": 2 }, child: "no" },
        { name: "Shadow Temple Boss Key", jp: '闇の神殿のボス部屋のカギ', types: { "hovers": 2.5, "shadow": 6, "zl": 6, "childzl": 6 }, subtypes: { "hearts": 1.5, "bosskey": 5 }, child: "no"},
        { name: "Defeat both Flare Dancers", jp: 'フレアダンサー2体撃破', types: { "dmc": 2, "fire": 8, "gtunic": 1 }, subtypes: { "mapcompass": 2, "bosskey": 3 }, child: "no" },
        { name: "Beat Jabu-Jabu's Belly", jp: 'ジャブジャブ様のお腹クリア', types: { "jabu": 8, "ice": 3 }, subtypes: { "hearts": 3, "child2": 1 }, child: "yes" },
        { name: "All 5 Skulltulas in Spirit Temple", jp: '魂の神殿の黄金のスタルチュラ5匹', types: { "fortress": 2.5, "spirit": 6, "hovers": 2.5 }, subtypes: { "wallet": 1.5 }, child: "yes" },
        { name: "3 Swords & 3 Shields", jp: '剣3種類と盾3種類', types: { "swords": 3, "fortress": 2.5, "spirit": 3, "hovers": 2.5, "gtg": 1 }, subtypes: { "wallet": 1 }, child: "no" },
        { name: "Get to the end of Light Trial", jp: '光の結界の最後の部屋に到達', types: { "ganon": 3, "zl": 6, "childzl": 6}, child: "no"},
        { name: "8 different unused keys in Gerudo Training Grounds", jp: 'ゲルドの修練場の未使用のカギ8つ', types: { "fortress": 3, "gtg": 10, "quiver": 1 }, child: "no" }
];
bingoList[18] = [
        { name: "Defeat Nabooru-Knuckle", jp: 'アイアンナック(ナボール)撃破', types: { "fortress": 2.5, "spirit": 8, "hovers": 2.5, "gtg": 1 }, child: "no" },
        { name: "Saria's Song", jp: 'サリアの歌', types: { "childzl": 7, "saria": 3 }, subtypes: { "child2": 2.5, "songs": 5 }, child: "yes" },
        { name: "Farore's Wind", jp: 'フロルの風', types: { "zl": 6, "childzl": 6, "dmc": 1.5, "magic": 2, "ice": 3 }, child: "yes" },
        { name: "All 5 Skulltulas in Fire Temple", jp: '炎の神殿の黄金のスタルチュラ5匹', types: { "dmc": 2, "fire": 7 }, subtypes: { "wallet": 1.5, "mapcompass": 2, "bosskey": 3 }, child: "no" },
        { name: "Defeat Volvagia", jp: 'ヴァルバジア撃破', types: { "dmc": 2, "fire": 9, "forest": 1, "gtunic": 1, "pg": 2 }, subtypes: { "hearts": 3, "mapcompass": 2, "bosskey": 3 }, child: "no" },
        { name: "At least 9 songs", jp: '歌9つ以上', types: { "songs": 15, "zl": 6 }, subtypes: { "child2": 3 }, child: "no" }
];
bingoList[19] = [
        { name: "Defeat Bongo-Bongo", jp: 'ボンゴボンゴ撃破', types: { "hovers": 2.5, "shadow": 9, "zl": 6, "childzl": 6, "deku": 2 }, subtypes: { "hearts": 3, "bosskey": 5 }, child: "no" },
        { name: "8 Hearts", jp: 'ハート8つ', types: { "hearts": 15 }, child: "yes" },
        { name: "6 Compasses", jp: 'コンパス6つ', types: { "mapcompass": 15 }, child: "yes" },
        { name: "3 Shields & 3 Tunics", jp: '盾3種類と服3種類', types: { "fortress": 2.5, "spirit": 3, "hovers": 2.5, "gtg": 1, "gtunic": 2.5, "dmc": 2, "ice": 2, "fire": 2.5 }, child: "no" },
        { name: "Beat the Fire Temple", jp: '炎の神殿クリア', types: { "dmc": 2, "fire": 9, "forest": 2, "gtunic": 1, "pg": 2 }, subtypes: { "hearts": 3, "bosskey": 2, "mapcompass": 3 }, child: "no" },
];
bingoList[20] = [
        { name: "Light Arrows", jp: '光の矢', types: { "lightarrow": 6.5, "zl": 6, "fortress": 1.5 }, subtypes: { "bosskey": 4 }, child: "no" },
        { name: "Beat the Shadow Temple", jp: '闇の神殿クリア', types: { "hovers": 2.5, "shadow": 9, "zl": 6, "childzl": 6, "deku": 2 }, subtypes: { "hearts": 3, "bosskey": 5 }, child: "no" },
        { name: "Defeat Meg (purple Poe)", jp: 'メグ撃破(紫のポウ)', types: { "forest": 6, "hovers": 2, "quiver": 3 }, subtypes: { "mapcompass": 2, "bosskey": 3 }, child: "no" },
        { name: "All 4 Wasteland/ Colossus area Skulltulas", jp: '幻影の砂漠・巨大邪神像エリアの黄金のスタルチュラ4匹', types: { "fortress": 2.5, "spirit": 2.5 }, subtypes: { "child2": 1.5, "wallet": 1.5 }, child: "no" },
        { name: "Goron Bracelet", jp: 'ゴロンの腕輪', types: { "strength": 100, "childzl": 7, "saria": 5 }, subtypes: { "child2": 2.5 }, child: "yes" },
        { name: "Nayru's Love", jp: 'ネールの愛', types: { "fortress": 2.5, "spirit": 2, "zl": 6, "childzl": 6, "dmc": 1.5, "magic": 2 }, child: "yes" },
        { name: "Free all 9 gorons in Fire Temple", jp: '炎の神殿で９人のゴロンを全員救う', types: {"dmc": 2, "fire": 9, "gtunic": 1 }, subtypes: { "mapcompass": 2, "bosskey": 3 }, child: "no"}
];
bingoList[21] = [
        { name: "All 5 Lake Hylia Skulltulas", jp: 'ハイリア湖畔エリアの黄金のスタルチュラ5匹', types: { "ice": 4, "irons": 2, "water": 1 }, subtypes: { "hovers": 1, "mapcompass": 3, "child2": 3, "wallet": 1.5 }, child: "no" },
        { name: "Din's Fire", jp: 'ディンの炎', types: { "childzl": 7, "zl": 6, "magic": 2, "dmc": 1.5 }, subtypes: { "child2": 1 }, child: "yes" },
        { name: "Get to the end of Spirit Trial", jp: '魂の結界の最後の部屋に到達', types: { "fortress": 2.5, "spirit": 3, "hovers": 2.5, "gtg": 1, "ganon": 3 }, child: "no" },
        { name: "All 4 Market area Skulltulas", jp: '城下町エリアの黄金のスタルチュラ4匹', types: { "forest": 4, "child2": 3, "pg": 4, "hovers": 2.5 }, subtypes: { "hearts": 3, "wallet": 1.5 }, child: "no" },
        { name: "Spooky Mask", jp: 'こわそなお面', types: { "childzl": 15, "fortress": 3, "gerudo": 7, "saria": 3, "beans": 15 }, child: "yes" }
];
bingoList[22] = [
        { name: "Spirit Temple Boss Key", jp: '魂の神殿のボス部屋のカギ', types: { "fortress": 3, "spirit": 5, "lightarrow": 7, "zl": 6 }, subtypes: { "bosskey": 5 }, child: "no" },
        { name: "Quiver (50)", jp: '矢立て(50)', types: { "fortress": 3, "gerudo": 7, "quiver": 1, "beans": 10 }, child: "no" },
        { name: "3 Shields & 3 Boots", jp: '盾3種類と靴3種類', types: { "fortress": 2.5, "spirit": 3, "hovers": 2.5, "gtg": 1, "hovers": 2.5, "ice": 4, "irons": 2 }, subtypes: { "mapcompass": 2.5 }, child: "yes" },
        { name: "Get to the end of Water Trial", jp: '水の結界の最後の部屋に到達', types: { "dmc": 2, "fire": 7, "gtunic": 1, "lightarrow": 7, "zl": 3 }, subtypes: { "mapcompass": 2, "bosskey": 3, "pg": 2 }, child: "no" }
];
bingoList[23] = [
        { name: "Both heart pieces in Lost Woods", jp: '迷いの森のハートのかけら２つ', types: { "childzl": 7, "saria": 3 }, subtypes: { "hearts": 1.5, "child2": 2.5, "songs": 5 }, child: "yes" },
        { name: "7 Maps", jp: 'マップ7つ', types: { "mapcompass": 20, "claimcheck": 6 }, child: "yes" },
        { name: "Map & Compass in Spirit Temple", jp: '魂の神殿のマップとコンパス', types: { "fortress": 3, "spirit": 2.5, "zl": 6, "childzl": 6, "quiver": 1 }, subtypes: { "mapcompass": 3 }, child: "yes" },
        { name: "Defeat Twinrova", jp: 'ツインローバ撃破', types: { "fortress": 2.5, "spirit": 3, "hovers": 2.5, "gtg": 1, "hovers": 2.5 }, subtypes: { "hearts": 3 }, child: "no" }
];
bingoList[24] = [
        { name: "Beat the Spirit Temple", jp: '魂の神殿クリア', types: { "fortress": 2.5, "spirit": 3, "hovers": 2.5, "gtg": 1, "hovers": 2.5 }, subtypes: { "hearts": 3 }, child: "no" },
        { name: "9 Hearts", jp: 'ハート9つ', types: { "hearts": 20 }, child: "yes" },
        { name: "All 5 Skulltulas in Shadow Temple", jp: '闇の神殿の黄金のスタルチュラ5匹', types: { "hovers": 2.5, "shadow": 8, "zl": 6, "childzl": 6 }, subtypes: { "wallet": 1.5, "bosskey": 4 }, child: "no" },
        { name: "Get to the end of Shadow Trial", jp: '闇の結界の最後の部屋に到達', types: { "ganon": 3, "dmc": 2, "fire": 7, "gtunic": 1, "hovers": 2.5 }, subtypes: { "lightarrow": 7, "zl": 3, "mapcompass": 2, "bosskey": 3, "pg": 2 }, child: "no" }
];
bingoList[25] = [
        { name: "7 Compasses", jp: 'コンパス7つ', types: { "mapcompass": 22 }, child: "no" },
        { name: "All 5 Skulltulas in Water Temple", jp: '水の神殿の黄金のスタルチュラ5匹', types: { "water": 4, "longshot": 4, "zl": 6 }, child: "no" },
        { name: "Two Fairy Spells", jp: '魔法のアイテム２つ', types: { "zl": 6, "childzl": 7, "fortress": 2.5, "spirit": 2, "dmc": 1.5, "magic": 2, "ice": 3 }, subtypes: { "child2": 1.5 }, child: "yes" },
        { name: "Green Gauntlets", jp: '緑のグローブ', types: { "strength": 100, "bulletbag": 100, "childzl": 7, "saria": 5 }, subtypes: { "wallet": 1 }, child: "no" }
];