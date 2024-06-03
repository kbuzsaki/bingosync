bingoGenerator = require("./generators/generator_bases/simple_generator.js");

var bingoList = [
    {
        "name": "4 girls red heart"
    },
    {
        "name": "3 girls red heart"
    },
    {
        "name": "2 girls red heart"
    },
    {
        "name": "have a baby"
    },
    {
        "name": "10 baby heart"
    },
    {
        "name": "10 dog heart"
    },
    {
        "name": "10 horse heart"
    },
    {
        "name": "9 power berry"
    },
    {
        "name": "8 power berry"
    },
    {
        "name": "7 power berry"
    },
    {
        "name": "6 power berry"
    },
    {
        "name": "5 power berry"
    },
    {
        "name": "4 power berry"
    },
    {
        "name": "3 power berry"
    },
    {
        "name": "2 power berry"
    },
    {
        "name": "1 power berry"
    },
    {
        "name": "mystic berry"
    },
    {
        "name": "win chicken festival"
    },
    {
        "name": "win cow festival"
    },
    {
        "name": "win sheep festival"
    },
    {
        "name": "win dog festival"
    },
    {
        "name": "win horse festival"
    },
    {
        "name": "win cooking festival"
    },
    {
        "name": "win tomato festival"
    },
    {
        "name": "win swimming festival"
    },
    {
        "name": "carp"
    },
    {
        "name": "sea bream"
    },
    {
        "name": "char"
    },
    {
        "name": "squid"
    },
    {
        "name": "catfish"
    },
    {
        "name": "angler"
    },
    {
        "name": "56 recipes"
    },
    {
        "name": "48 recipes"
    },
    {
        "name": "40 recipes"
    },
    {
        "name": "32 recipes"
    },
    {
        "name": "24 recipes"
    },
    {
        "name": "16 recipes"
    },
    {
        "name": "eat greens"
    },
    {
        "name": "eat pumpkin pudding"
    },
    {
        "name": "eat strawberry milk"
    },
    {
        "name": "eat relaxation tea"
    },
    {
        "name": "eat chocolate cookies"
    },
    {
        "name": "eat chocolate cake"
    },
    {
        "name": "eat apple pie"
    },
    {
        "name": "eat chocolate"
    },
    {
        "name": "eat grilled fish"
    },
    {
        "name": "drink bodigizer XL"
    },
    {
        "name": "drink turbojolt XL"
    },
    {
        "name": "eat roasted potato"
    },
    {
        "name": "eat salad"
    },
    {
        "name": "ship 999 sweet potato"
    },
    {
        "name": "ship 999 turnip"
    },
    {
        "name": "ship 999 onion"
    },
    {
        "name": "ship 999 strawberry"
    },
    {
        "name": "ship 999 pumpkin"
    },
    {
        "name": "ship 999 spinach"
    },
    {
        "name": "ship 999 egg"
    },
    {
        "name": "ship 999 milk"
    },
    {
        "name": "ship 999 wool"
    },
    {
        "name": "ship 999 mayo"
    },
    {
        "name": "ship 999 cheese"
    },
    {
        "name": "ship 999 yarn"
    },
    {
        "name": "coop upgrade"
    },
    {
        "name": "house 1 upgrade"
    },
    {
        "name": "barn upgrade"
    },
    {
        "name": "house 2 upgrade"
    },
    {
        "name": "hothouse"
    },
    {
        "name": "vase"
    },
    {
        "name": "1 animal death"
    },
    {
        "name": "pass out"
    },
    {
        "name": "eat poisonous mushroom"
    },
    {
        "name": "cliff left"
    },
    {
        "name": "kicked from the village"
    },
    {
        "name": "cook food fiasco"
    },
    {
        "name": "all mystrile tools"
    },
    {
        "name": "mystrile hammer"
    },
    {
        "name": "mystrile axe"
    },
    {
        "name": "mystrile watering can"
    },
    {
        "name": "mystrile hoe"
    },
    {
        "name": "mystrile sickle"
    },
    {
        "name": "full heart 7 sprites"
    },
    {
        "name": "full heart 6 sprites"
    },
    {
        "name": "full heart 5 sprites"
    },
    {
        "name": "full heart 4 sprites"
    },
    {
        "name": "full heart 3 sprites"
    },
    {
        "name": "full heart 2 sprites"
    },
    {
        "name": "full heart 1 sprites"
    },
    {
        "name": "marry ann"
    },
    {
        "name": "marry karen"
    },
    {
        "name": "marry popuri"
    },
    {
        "name": "marry elli"
    },
    {
        "name": "marry popuri"
    },
    {
        "name": "buy mayo maker"
    },
    {
        "name": "buy cheese maker"
    },
    {
        "name": "buy yarn maker"
    },
    {
        "name": "have fishing pole"
    },
    {
        "name": "have 99 fish"
    },
    {
        "name": "have 10 chicken"
    },
    {
        "name": "have 20 cows"
    },
    {
        "name": "have 20 sheeps"
    },
    {
        "name": "have 999 lumber"
    },
    {
        "name": "have 999999 gold"
    },
    {
        "name": "98 percent"
    },
    {
        "name": "all king fish"
    },
    {
        "name": "all recipes"
    },
    {
        "name": "all girls red heart"
    },
    {
        "name": "10 power berry"
    },
    {
        "name": "have earrings"
    },
    {
        "name": "have bracelet"
    },
    {
        "name": "have necklace"
    },
    {
        "name": "hatch an egg"
    },
    {
        "name": "cow birth"
    },
    {
        "name": "sheep birth"
    },
    {
        "name": "have 1 red magic red flower"
    },
    {
        "name": "have perfume"
    },
    {
        "name": "have cliff's photo"
    },
    {
        "name": "see a wild dog"
    },
    {
        "name": "see flower of happiness"
    },
    {
        "name": "part time job in winery"
    },
    {
        "name": "attend Ann's birthday"
    },
    {
        "name": "confess sin"
    },
    {
        "name": "accepted to the village"
    },
    {
        "name": "attend tea party"
    },
    {
        "name": "goddess festival with girlfriend"
    },
    {
        "name": "fireworks display with girlfriend"
    },
    {
        "name": "moonviewing day with girlfriend"
    },
    {
        "name": "star night festival with girlfriend"
    }
];
