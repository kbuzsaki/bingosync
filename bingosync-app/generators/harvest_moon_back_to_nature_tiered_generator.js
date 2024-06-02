var bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");

var bingoList = 
[[
{ "name": "1 power berry", "types": ["berry"] },
{ "name": "pass out", "types": ["bad_event"] },
{ "name": "eat poisonous mushroom", "types": ["bad_event"] },
{ "name": "confess sin", "types": ["event"] },
{ "name": "hatch an egg", "types": ["animal_event"] }
],[
{ "name": "2 power berry", "types": ["berry"] },
{ "name": "have 1 red magic red flower", "types": ["event"] },
{ "name": "attend tea party", "types": ["event"] },
{ "name": "squid", "types": ["kingfish"] },
{ "name": "full heart 1 sprite", "types": ["sprites"] }
],[
{ "name": "mystic berry", "types": ["berry"] },
{ "name": "have cliff's photo", "types": ["event"] },
{ "name": "see flower of happiness", "types": ["event"] },
{ "name": "part time job in winery", "types": ["event"] },
{ "name": "cook food fiasco", "types": ["cooking"] }
],[
{ "name": "3 power berry", "types": ["berry"] },
{ "name": "cliff left", "types": ["event"] },
{ "name": "1 animal death", "types": ["bad_event"] },
{ "name": "full heart 2 sprites", "types": ["sprites"] },
{ "name": "catfish", "types": ["kingfish"] },
{ "name": "win tomato festival", "types": ["festival"] }
],[
{ "name": "mystrile hammer", "types": ["tool"] },
{ "name": "mystrile axe", "types": ["tool"] },
{ "name": "mystrile watering can", "types": ["tool"] },
{ "name": "mystrile hoe", "types": ["tool"] },
{ "name": "mystrile sickle", "types": ["tool"] }
],[
{ "name": "4 power berry", "types": ["berry"] },
{ "name": "have earrings", "types": ["jewel"] },
{ "name": "have bracelet", "types": ["jewel"] },
{ "name": "have necklace", "types": ["jewel"] },
{ "name": "angler", "types": ["kingfish"] }
],[
{ "name": "goddess festival with girlfriend", "types": ["event"] },
{ "name": "fireworks display with girlfriend", "types": ["event"] },
{ "name": "moonviewing day with girlfriend", "types": ["event"] },
{ "name": "star night festival with girlfriend", "types": ["event"] },
{ "name": "16 recipes", "types": ["recipe"] }
],[
{ "name": "5 power berry", "types": ["berry"] },
{ "name": "win cow festival", "types": ["festival"] },
{ "name": "win sheep festival", "types": ["festival"] },
{ "name": "eat apple pie", "types": ["cooking"] },
{ "name": "full heart 3 sprites", "types": ["sprites"] }
],[
{ "name": "eat chocolate", "types": ["cooking"] },
{ "name": "eat chocolate cake", "types": ["cooking"] },
{ "name": "cow birth", "types": ["animal_event"] },
{ "name": "sheep birth", "types": ["animal_event"] },
{ "name": "coop upgrade", "types": ["house"] }
],[
{ "name": "marry ann", "types": ["girls"] },
{ "name": "marry karen", "types": ["girls"] },
{ "name": "marry popuri", "types": ["girls"] },
{ "name": "marry elli", "types": ["girls"] },
{ "name": "marry popuri", "types": ["girls"] }
],[
{ "name": "win cooking festival", "types": ["festival"] },
{ "name": "eat relaxation tea", "types": ["cooking"] },
{ "name": "10 dog heart", "types": ["98%"] },
{ "name": "full heart 4 sprites", "types": ["sprites"] },
{ "name": "house 1 upgrade", "types": ["house"] },
{ "name": "2 girls red heart", "types": ["girls"] }
],[
{ "name": "6 power berry", "types": ["berry"] },
{ "name": "buy mayo maker", "types": ["maker"] },
{ "name": "eat grilled fish", "types": ["cooking"] },
{ "name": "eat roasted potato", "types": ["cooking"] },
{ "name": "24 recipes", "types": ["recipe"] }
],[
{ "name": "win chicken festival", "types": ["festival"] },
{ "name": "have 10 chicken", "types": ["98%"] },
{ "name": "full heart 5 sprites", "types": ["sprites"] },
{ "name": "eat salad", "types": ["cooking"] },
{ "name": "3 girls red heart", "types": ["girls"] }
],[
{ "name": "char", "types": ["kingfish"] },
{ "name": "attend Ann's birthday", "types": ["event"] },
{ "name": "win swimming festival", "types": ["festival"] },
{ "name": "have a baby", "types": ["event"] },
{ "name": "barn upgrade", "types": ["house"] }
],[
{ "name": "7 power berry", "types": ["berry"] },
{ "name": "full heart 6 sprites", "types": ["sprites"] },
{ "name": "see a wild dog", "types": ["event"] },
{ "name": "buy cheese maker", "types": ["maker"] },
{ "name": "32 recipes", "types": ["recipe"] }
],[
{ "name": "ship 999 sweet potato", "types": ["dupe"] },
{ "name": "ship 999 turnip", "types": ["dupe"] },
{ "name": "ship 999 onion", "types": ["dupe"] },
{ "name": "drink bodigizer XL", "types": ["dupe"] },
{ "name": "drink turbojolt XL", "types": ["dupe"] }
],[
{ "name": "ship 999 egg", "types": ["dupe"] },
{ "name": "ship 999 milk", "types": ["dupe"] },
{ "name": "ship 999 wool", "types": ["dupe"] },
{ "name": "house 2 upgrade", "types": ["house"] },
{ "name": "have vase", "types": ["house"] }
],[
{ "name": "8 power berry", "types": ["berry"] },
{ "name": "full heart 7 sprites", "types": ["sprites"] },
{ "name": "eat chocolate cookies", "types": ["cooking"] },
{ "name": "win dog festival", "types": ["festival"] },
{ "name": "buy yarn maker", "types": ["maker"] }
],[
{ "name": "have perfume", "types": ["event"] },
{ "name": "have 20 cows", "types": ["98%"] },
{ "name": "have 20 sheeps", "types": ["98%"] },
{ "name": "kicked out from village", "types": ["event"] },
{ "name": "hothouse", "types": ["house"] }
],[
{ "name": "9 power berry", "types": ["berry"] },
{ "name": "sea bream", "types": ["kingfish"] },
{ "name": "win horse festival", "types": ["festival"] },
{ "name": "10 horse heart", "types": ["98%"] },
{ "name": "40 recipes", "types": ["recipe"] }
],[
{ "name": "eat strawberry milk", "types": ["cooking"] },
{ "name": "eat pumpkin pudding", "types": ["cooking"] },
{ "name": "eat greens", "types": ["cooking"] },
{ "name": "have fishing pole", "types": ["fishing"] },
{ "name": "4 girls red heart", "types": ["girls"] }
],[
{ "name": "ship 999 strawberry", "types": ["dupe"] },
{ "name": "ship 999 pumpkin", "types": ["dupe"] },
{ "name": "ship 999 spinach", "types": ["dupe"] },
{ "name": "48 recipes", "types": ["recipe"] },
{ "name": "have 999999 gold", "types": ["dupe"] }
],[
{ "name": "all mystrile tools", "types": ["tool"] },
{ "name": "have 999 lumber", "types": ["dupe"] },
{ "name": "10 baby heart", "types": ["98%"] },
{ "name": "have 99 fish", "types": ["fishing"] },
{ "name": "accepted to the village", "types": ["event"] }
],[
{ "name": "carp", "types": ["kingfish"] },
{ "name": "ship 999 yarn", "types": ["dupe"] },
{ "name": "ship 999 cheese", "types": ["dupe"] },
{ "name": "ship 999 mayo", "types": ["dupe"] },
{ "name": "56 recipes", "types": ["recipe"] }
],[
{ "name": "98 percent", "types": ["98%"] },
{ "name": "all 6 king fish", "types": ["kingfish"] },
{ "name": "all 64 recipes", "types": ["recipe"] },
{ "name": "all 5 girls red heart", "types": ["girls"] },
{ "name": "all 10 power berry", "types": ["berry"] }
]];
