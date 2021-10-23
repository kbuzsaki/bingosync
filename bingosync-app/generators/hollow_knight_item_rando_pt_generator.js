bingoGenerator = require("./generators/generator_bases/synerGen.js");

var bingoList = {
  "bingoTypes": {
    "Tiebreaker": {"Max": 1}
  },
  "maxScore": 9.5,
  //Sorted alphabetically and grouped

  //Bosses. Dream versions grouped instead of alphabetical


  "2DreamBosses": {
    "Desc": "Mate dois Chefes dos Sonhos"
  },

  "BVessel": {
    "Desc": "Mate o Receptáculo Quebrado",
    "Excludes": ["LostKin"]
  },

  "LostKin": {
    "Desc": "Mate o Parente Perdido",
    "Excludes": ["BVessel"]
  },

  "CG1": {
    "Desc": "Mate o Guardião Cristalizado 1",
    "Excludes": ["CG2"]
  },

  "CG2": {
    "Desc": "Mate o Guardião Cristalizado 2",
    "Excludes": ["CG1"]
  },

  "Collector": {
    "Desc": "Mate O Colecionador",
    "Excludes": ["KEGrubs"]
  },

  "DDefender": {
    "Desc": "Mate o Defensor do Esterco",
    "Excludes": ["WhiteDefender"]
  },

  "WhiteDefender": {
    "Desc": "Mate o Defensor Branco",
    "Types": ["Tiebreaker"],
    "Excludes": ["DDefender", "MrMushroom1"]
  },

  "FChamp": {
    "Desc": "Mate o Campeão Fracassado"
  },

  "FKnight_BMawlek": {
    "Desc": "Mate Falso Cavaleiro + Mawlek Incubador"
  },

  "Flukemarm": {
    "Desc": "Mate Flukemarm"
  },

/*
  "GPZote": {
    "Desc": "Mate o Príncipe Cinza Zote",
    "Types": ["Tiebreaker"],
    "Excludes": ["ColoZote", "DeepnestZote", "Colo1"]
  },
*/

  "HiveKnight": {
    "Desc": "Mate o Cavaleiro da Colmeia",
    "Excludes": ["HiveMask"]
  },

  "Hornet2": {
    "Desc": "Mate Hornet 2",
    "Excludes": ["VisitQueensShell"]
  },

  "MLords": {
    "Desc": "Mate Lordes Louva-a-Deus"
  },

  "Nosk": {
    "Desc": "Mate Nosk",
    "Excludes": ["PaleOreCheck"]
  },

/*
  "OroMato": {
    "Desc": "Mate Oro e Mato",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },
*/

  "PaleLurker": {
    "Desc": "Mate o Pale Lurker"
  },

/*
  "PaintmasterSheo": {
    "Desc": "Mate o Mestre da Pintura Sheo",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

  "PVessel": {
    "Desc": "Mate o Receptáculo Puro",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },
*/

  "Radiant": { // Under I know you're reading this and I hope it fills you with joy
    "Desc": "Mate qualquer chefe radiante",
    "Excludes": ["Godhome", "Ordeal20"]
  },

  "SoulMaster": {
    "Desc": "Mate o Mestre das Almas",
    "Excludes": ["SoulTyrant"]
  },

  "SoulTyrant": {
    "Desc": "Mate o Tirano das Almas",
    "Excludes": ["SoulMaster"]
  },

  "TLord": {
    "Desc": "Mate o Lorde Traidor",
    "Excludes": ["WhiteLady", "ClothQuest"]
  },

  "TMGrimm": {
    "Desc": "Mate o Grimm"
  },

  "NKGrimm": {
    "Desc": "Mate o Rei do Pesadelo Grimm",
    "Types": ["Tiebreaker"],
    "Excludes": ["CarefreeMelody"]
  },

  "Uumuu": {
    "Desc": "Mate Uumuu"
  },

  "WK": {
    "Desc": "Mate Cavaleiro Sentinela"
  },

  "VK_MMC": {
    "Desc": "Mate Batedor Musgoso Imenso + Rei Vengemosca"
  },




  //Dream Warriors


  "2DreamWarriors": {
    "Desc": "Mate dois Guerreiros dos Sonhos" // No exclusion for now - but I wouldn't be surprised if a type demand rises up
  },

  "Galien": {
    "Desc": "Mate Galien"
  },

  "Gorb": {
    "Desc": "Mate Gorb"
  },

  "Hu": {
    "Desc": "Mate o Ancião Hu"
  },

  "Marmu": {
    "Desc": "Mate Marmu"
  },

  "Markoth": {
    "Desc": "Mate Markoth"
  },

  "NoEyes": {
    "Desc": "Mate Sem Olhos"
  },

  "Xero": {
    "Desc": "Mate Xero"
  },




  //Enemies

  "2Warriors": {
    "Desc": "Mate dois Guerreiros das Almas",
    "Excludes": ["SSoulCheck"]
  },

  "3Sentries": {
    "Desc": "Mate três Carcaça Sentinela Grandiosa",
    "Excludes": ["GHusk"]
  },

  "Aluba": {
    "Desc": "Mate um Aluba"
  },

  "Aluba2": {
    "Desc": "Mate dois alubas distintos"
  },

  "Colo1": {
    "Desc": "Coliseu 1",
    "Excludes": ["ColoZote", "GPZote"]
  },

/*
  "Colo3": {
    "Desc": "Coliseu 3",
    "Types": ["Tiebreaker"]
  },
*/

  "ColoZote": {
    "Desc": "Mate Zote no Coliseu",
    "Excludes": ["Colo1", "GPZote"]
  },

  "CrystalCrawler": {
    "Desc": "Consiga um Rastejador de Cristal no Diário do Caçador"
  },

  "Devout": {
    "Desc": "Mate 6 Devotos Espreitadores distintos"
  },

  "Durandoo": {
    "Desc": "Mate um Durandoo",
    "Excludes": ["Gulka"]
  },

  "GHopper": {
    "Desc": "Mate um Grande Saltador"
  },

  "GHusk": {
    "Desc": "Mate a Carcaça Deslumbrante",
    "Excludes": ["3Sentries"]
  },

  "Gulka": {
    "Desc": "Mate um Gulka com seu próprio projétil",
    "Excludes": ["Durandoo"]
  },

  "Kingsmould": {
    "Desc": "Mate uma Armadura Real",
    "Excludes": ["PoP"],
    "Score": 0.88
  },

  "Lightseed": {
    "Desc": "Mate um Germe de Luz"
  },

  "Maggots": {
    "Desc": "Mate dois vermes distintos"
  },

  "Marissa": {
    "Desc": "Use seu Ferrão dos Sonhos na Marissa",
    "Excludes": ["Springs", "2Keys"]
  },

  "Millibelle": {
    "Desc": "Ataque Millibelle na Casa dos Prazeres",
    "Excludes": ["Bank"]
  },

  "Mimics": {
    "Desc": "Mate quatro Mímicos de Larva"
  },

  "Myla": {
    "Desc": "Mate Myla",
    "Score": 1.18
  },




  //Items. Different types (Dreamers/Skills/Keys/etc) grouped together

  "Herrah": {
    "Desc": "Obtenha Herrah",
    "Score": 1.30
  },

  "Lurien": {
    "Desc": "Obtenha Lurien",
    "Score": 1.30
  },

  "Monomon": {
    "Desc": "Obtenha Monomon",
    "Score": 1.30
  },


  "DeepStag": {
    "Desc": "Monte no besouro até a Aldeia Distante",
    "Excludes": ["Midwife", "VisitDistantHive"],
    "Score": 1.30
  },

  "GardenStag": {
    "Desc": "Monte no besouro até os Jardins da Rainha",
    "Score": 1.30
  },

  "HiddenStag": {
    "Desc": "Monte no besouro até a Estação Escondida",
    "Excludes": ["WPShadeSkip"],
    "Score": 1.30
  },

  "KingStag": {
    "Desc": "Monte no besouro até a Estação do Rei",
    "Score": 1.30
  },

  "QueensStag": {
    "Desc": "Monte no besouro até a Estação da Rainha",
    "Score": 1.30
  },



  "5Charms": {
    "Desc": "Tenha 5 ou mais amuletos",
    "Score": 0.20
  },

  "5CharmsEquipped": {
    "Desc": "Tenha 5 amuletos equipados simultaneamente",
  },


  "CarefreeMelody": {
    "Desc": "Obtenha Melodia Despreocupada",
    "Excludes": ["NKGrimm", "Brumm"]
  },

  "CompassSwarm": {
    "Desc": "Obtenha Bússola Caprichosa ou Enxame de Colecionadores",
    "Score": 1.06
  },

  "DWielderShield": {
    "Desc": "Obtenha Portador dos Sonhos ou Escudo dos Sonhos",
    "Score": 1.06
  },

  "FCharms": {
    "Desc": "Obtenha dois amuletos inquebráveis",
    "Score": 1.00
  },

  "FlukenestFury": {
    "Desc": "Obtenha Ninho de Flukes ou Fúria dos Caídos",
    "Score": 1.06
  },

  "GrubsongElegy": {
    "Desc": "Obtenha Canção das Larvas ou Elegia da Larvamosca",
    "Score": 1.06
  },

  "GWombWeavers": {
    "Desc": "Obtenha Útero Brilhante ou Canção das Tecelãs",
    "Score": 1.06
  },

  "HeavyBlowSteady": {
    "Desc": "Obtenha Golpe Pesado ou Corpo Firme",
    "Score": 1.06
  },

  "HivebloodShadow": {
    "Desc": "Obtenha Sangue da Colmeia ou Sombra Afiada",
    "Score": 1.06
  },

  "LifebloodCharms": {
    "Desc": "Obtenha dois amuletos de Sangue Vital",
    "Score": 1.00
  },

  "Longnail": {
    "Desc": "Obtenha Ferrão Longo ou Marca de Orgulho",
    "Score": 1.06
  },

  "QSlashGlory": {
    "Desc": "Obtenha Corte Rápido ou Glória do Mestre do Ferrão",
    "Score": 1.06
  },

  "QuickDeepFocus": {
    "Desc": "Obtenha Foco Rápido ou Foco Profundo",
    "Score": 1.06
  },

  "ShamanStoneTwister": {
    "Desc": "Obtenha Pedra do Xamã ou Dobrador de Magias",
    "Score": 1.06
  },

  "SprintmasterDashmaster": {
    "Desc": "Obtenha Mestre da Esquiva ou Mestre da Corrida",
    "Score": 1.06
  },

  "SoulTools": {
    "Desc": "Obtenha Devorador de Almas ou Apanhador de Almas",
    "Score": 1.06
  },

  "ThornsStalwart": {
    "Desc": "Obtenha Espinhos da Agonia ou Carapaça Robusta",
    "Score": 1.06
  },

  "UnnShell": {
    "Desc": "Obtenha Forma de Unn ou Carapaça de Baldur",
    "Score": 1.06
  },

  "LoveKey": {
    "Desc": "Obtenha Chave do Amor",
    "Excludes": ["KEGrubs"],
    "Score": 1.30
  },


  "DDark": {
    "Desc": "Obtenha Escuridão Descente",
    "Score": 1.03
  },

  "DNail": {
    "Desc": "Obtenha Ferrão dos Sonhos",
    "Score": 0.80
  },

  "DGate": {
    "Desc": "Obtenha Portal dos Sonhos",
    "Score": 0.95
  },

  "NailArts": {
    "Desc": "Obtenha duas Artes do Ferrão",
    "Score": 1.00
  },

  "Shriek": {
    "Desc": "Obtenha Grito do Abismo",
    "Score": 1.03
  },

  "SSoul": {
    "Desc": "Obtenha Alma Sombria",
    "Score": 1.03
  },

  "Tear": {
    "Desc": "Obtenha Lágrima de Isma",
    "Excludes": ["UnnSkip", "LoveKeySkip"],
    "Score": 1.18
  },

  "VSpirit": {
    "Desc": "Obtenha Espírito Vingativo",
    "Score": 0.96
  },

  "Wraiths": {
    "Desc": "Obtenha Espectro Uivantes",
    "Score": 0.96
  },


  "15Grub": {
    "Desc": "Salve ou obtenha 15 larvas",
    "Excludes": ["KEGrubs", "35Grub"]
  },

/*
  "35Grub": {
    "Desc": "Obtenha 35 larvas",
    "Excludes": ["KEGrubs", "15Grub", "DeepnestGrubs", "BasinGrubs", "CrossroadsCanyonGrubs", "PeaksGrub", "QueenGrub", "WaterGrub", "FunGreenGrub"],
    "Types": ["Tiebreaker"]
  },
*/

  "2Ore": {
    "Desc": "Obtenha 2 Minérios Palidos",
    "Excludes": ["Nail3"],
    "Score": 0.71
  },

  "2Keys": {
    "Desc": "Use duas Chaves Simples",
    "Excludes": ["Jiji", "Marissa"],
    "Score": 0.89
  },

  "3Maps": {
    "Desc": "Tenha 3 mapas diferentes sem ser da Colmeia ou Dirtmouth",
    "Excludes": ["Cornifer3"]
  },

  "CollectorMap": {
    "Desc": "Obtenha Mapa do Colecionador",
    "Score": 1.30
  },

  "Egg": {
    "Desc": "Obtenha 1 Ovo Arcano",
    "Score": 0.73
  },

  "Godtuner": {
    "Desc": "Obtenha Sintonizador de Deuses",
    "Score": 1.30
  },

  "Idols": {
    "Desc": "Obtenha 3 Ídolos do Rei",
    "Score": 0.66
  },

  "Journals": {
    "Desc": "Obtenha 5 Diários de Viajante",
    "Score": 0.51
  },

  "Lantern": {
    "Desc": "Obtenha Lanterna de Lumélula",
    "Excludes": ["JoniDarkRoom"],
    "Score": 1.30
  },

  "Mask1": {
    "Desc": "Obtenha uma máscara extra",
    "Score": 0.43
  },

  "Notches": {
    "Desc": "Tenha 6 Encaixes de Amuleto",
    "Score": 0.41
  },

  "RancidEggs": {
    "Desc": "Obtenha 4 Ovos Rançosos",
    "Score": 0.36
  },

  "Seals": {
    "Desc": "Obtenha 5 Selos de Hallownest",
    "Score": 0.44
  },

  "SoulVessel": {
    "Desc": "Obtenha um Receptáculo de Alma extra",
    "Score": 0.61
  },

  "TramPass": {
    "Desc": "Obtenha Passe do Trem",
    "Excludes": ["PinsAll", "KEGrubs"],
    "Score": 1.30
  },

  "WorldSense": {
    "Desc": "Obtenha Percepção do Mundo",
    "Score": 1.30
  },



  //Checks (Grubs are grouped)


  "Cornifer3": {
    "Desc": "Interaja 3 vezes com Cornifer",
    "Excludes": ["3Maps"]

  },


  "CHeartCheck": {
    "Desc": "Verifique o local do Coração de Cristal"
  },

  "CPeaksChest": {
    "Desc": "Abra o baú do Pico de Cristal"
  },

  "DeepFocusCheck": {
    "Desc": "Verifique o local do Foco Profundo"
  },

  "Dreamers": {
    "Desc": "Verifique o local de dois sonhadores(Requer ferrão dos sonhos)",
    "Excludes": ["Uumuu", "WK", "VisitDistantHive"]
  },

  "GreenpathRoot": {
    "Desc": "Complete a Raíz Sussurrante do Caminho Verde"
  },

  "HallownestCrown": {
    "Desc": "Verifique a Coroa de Hallownest"
  },

  "Fountain": {
    "Desc": "Compre o item na fonte da Bacia Antiga",
    "Excludes": ["3000", "4000"]
  },

  "FungalCoreElder": {
    "Desc": "Curve-se para o Ancião do núcleo fúngico"
  },

  "GWombSkip": {
    "Desc": "Verifique o local do Útero Brilhante"
  },

  "HiveMask": {
    "Desc": "Verifique o local do Fragmento de Máscara da Colmeia",
    "Excludes": ["HiveKnight", "KEGrubs"]
  },

  "JoniDarkRoom": {
    "Desc": "Verifique o local da Bênção de Joni",
    "Excludes": ["Lantern"]
  },

  "KEdgeRoot": {
    "Desc": "Complete a Raíz Sussurante em Borda do Reino"
  },

  "LoveKeySkip": {
    "Desc": "Verifique o local da Chave do Amor",
    "Excludes": ["Tear"]
  },

  "Nailmasters": {
    "Desc": "Verifique dois Mestres do Ferrão"
  },

  "PaleOreCheck": {
    "Desc": "Verifique o local de dois minérios pálidos (Sem contar Larvas/Essência)",
    "Excludes": ["Nosk"]
  },

  "SanctuarySkip": {
    "Desc": "Verifique o local do Diário de Viajante embaixo do Santuário de Pedra"
  },

  "Sheo": {
    "Desc": "Verifique o Mestre de Ferrão Sheo"
  },

  "Shops": {
    "Desc": "Visite todas as lojas(Sly, Iselda, Salubra e Come Pernas)",
    "Excludes": ["Cloth"]
  },

  "SpellLocations": {
    "Desc": "Verifique os locais de três magias diferentes"
  },

  "StagVessel": {
    "Desc": "Verifique o local do Fragmento de Receptaculo no Ninho dos Besouros"
  },

  "SSoulCheck": {
    "Desc": "Verifique o local da Alma Sombria",
    "Excludes": ["2Warriors"],
    "Score": 1.30
  },

  "ShriekCheck": {
    "Desc": "Verifique o local do Grito do Abismo"
  },

  "TearCheck": {
    "Desc": "Verifique o local da Lágrima de Isma"
  },

  "Trees4": {
    "Desc": "Complete 4 Raízes Sussurantes"
  },

  "UnnSkip": {
    "Desc": "Verifique o local da Forma de Unn",
    "Excludes": ["Tear"]
  },

  "VillageJournal": {
    "Desc": "Verifique o Diário do Viajante em cima da Vila dos Louva-a-Deus"
  },

  "VoidHeart": {
    "Desc": "Verifique o local do Coração Vazio"
  },


  "BasinGrubs": {
    "Desc": "Verifique todas larvas em: Bacia Antiga (2)"
  },

  "CoTGrubs": {
    "Desc": "Verifique todas larvas em: Cidade das Lágrimas (5)"
  },

  "CrossroadsCanyonGrubs": {
    "Desc": "Verifique todas larvas em: Encruzilhada(5); Cânion da Nevoa (1)"
  },

  "DeepnestGrubs": {
    "Desc": "Verifique todas larvas em: Ninho Profundo (5)"
  },

  "FunGreenGrub": {
    "Desc": "Verifique todas larvas em: Caminho Verde(4); Ermos Fúngicos (2)"
  },

/*
  "KEGrubs": {
    "Desc": "Verifique todas larvas em: Borda do Reino (7)",
    "Excludes": ["3Floors", "15Grub", "TramPass", "HiveMask", "Collector", "LoveKey"],
    "Types": ["Tiebreaker"]
  },
*/

  "PeaksGrub": {
    "Desc": "Verifique todas larvas em: Pico de Cristal (7)"
  },

  "QueenGrub": {
    "Desc": "Verifique todas larvas em: Jardins da Rainha (3)"
  },

  "WaterGrub": {
    "Desc": "Verifique todas larvas em: Hidrovia Real (3)"
  },




  //Misc.

  "3Floors": {
    "Desc": "Quebre 3 chãos usando Mergulho Desolador",
    "Excludes": ["KEGrubs"]

  },

  "420Rock": {
    "Desc": "Quebre a pedra com 420 geo na Borda do Reino"
  },

  "500Essence": {
    "Desc": "Colete 500 essências"
  },

  "3000": {
    "Desc": "Gaste 3000 geo",
    "Excludes": ["Fountain", "4000"]
  },

  "4000": {
    "Desc": "Gaste 4000 geo",
    "Excludes": ["Fountain", "3000", "5000"]
  },

  "5000": {
    "Desc": "Gaste 5000 geo",
    "Excludes": ["4000"]
  },

  "Bank": {
    "Desc": "Tenha 1500 no banco",
    "Excludes": ["Millibelle"]
  },

  "Bardoon": {
    "Desc": "Fale com Bardoon"
  },

  "BrettaSly": {
    "Desc": "Resgate Bretta + Sly"
  },

  "Brumm": {
    "Desc": "Adquira a chama de Brumm",
    "Excludes": ["CarefreeMelody"]
  },

  "Cloth": {
    "Desc": "Fale com Cloth",
    "Excludes": ["Shops"]
  },

  "ClothQuest": {
    "Desc": "Complete qualquer final da história de Cloth",
    "Excludes": ["TLord", "WhiteLady"]
  },

  "CotQuirrel": {
    "Desc": "Sente-se no banco do Quirrel na Cidade das Lágrimas"
  },

  "CrestElevator": {
    "Desc": "Use o Brasão da Cidade e os dois elevadores grandes da Cidade das Lágrimas",
    "Score": 1.30
  },

  "DamnItGrimmchild": { //https://clips.twitch.tv/LivelySpookyBibimbapTakeNRG
    "Desc": "Mate 3 Oomas com uma invocação(amuleto)",
    "Score": 0.87
  },

  "DeepnestZote": {
    "Desc": "Resgate Zote no Ninho Profundo",
    "Excludes": ["GPZote"]

  },

  "DefenderSign": {
    "Desc": "Leia a placa do Defensor do Esterco antes do Bosque de Isma"
  },

  "DirtmouthElevator": {
    "Desc": "Libere o elevador entre Dirtmouth e Pico de Cristal"
  },

  "ElderFlower": {
    "Desc": "Dê flor delicada para Inseto Ancião"
  },

  "Emilitia": {
    "Desc": "Fale com Emilitia (atalho para Bosque de Isma)"
  },

  "FlukeHermit": {
    "Desc": "Fale com Fluke Eremita"
  },

  "Godhome": {
    "Desc": "Entre no Lar dos Deuses",
    "Excludes": ["Ordeal20", "Radiant"]
  },

  "GoamGarpede": {
    "Desc": "Consiga Goam e Garpede no Diário do Caçador"
  },

  "Jiji": {
    "Desc": "Abra a cabana da Confessora Jiji"
  },

  "HopperHell": {
    "Desc": "Bata no espantalho de Oro até que Grande Saltadores apareçam"
  },

  "Lemm": {
    "Desc": "Fale com Lemm na sua loja com Insignia do Defensor equipado",
    "Score": 1.30
  },

  "LegEater": {
    "Desc": "Compre tudo do Come Pernas"
  },

  "Lifeblood": {
    "Desc": "Tenha 10 Sangues Vitais ao mesmo tempo"
  },

  "LifebloodRoom": {
    "Desc": "Entre no núcleo do Sangue Vital sem amuletos de Sangue Vital"
  },

  "LoreArchives": {
    "Desc": "Leia três pontos de história em: Arquivos da Professora"
  },

  "LoreBasin": {
    "Desc": "Leia o ponto de história em: Bacia Antiga"
  },

  "LoreCity": {
    "Desc": "Leia dois pontos de história em: Cidade das Lágrimas (Subáreas não contam)"
  },

  "LoreCliffs": {
    "Desc": "Leia o ponto de história em: Penhascos Uivantes"
  },


  "LoreGreenpath": {
    "Desc": "Leia três pontos de história em: Caminho Verde"
  },

  "LoreKEdge": {
    "Desc": "Leia 3 pontos de história em:Borda do Reino(com Cogumelo com Esporos)",
    "Score": 1.30
  },

  "LorePilgrims": {
    "Desc": "Leia o ponto de história nos dois Caminhos do Peregrino"
  },

  "LoreSanctum": {
    "Desc": "Leia 2 pontos de história em: Santuário das Almas"
  },

  "LoreVillage": {
    "Desc": "Leia 2 pontos de história em: Vila dos Louva-a-Deus"
  },

  "Lumafly": {
    "Desc": "Consiga Lumélulas Elétricas no Díario do Caçador"
  },

  "MaskMaker": {
    "Desc": "Fale com o Criador de Máscaras"
  },

  "Midwife": {
    "Desc": "Fale com a Parteira",
    "Excludes": ["DeepStag", "VisitDistantHive"]
  },

  "MossProphet": {
    "Desc": "Curve-se para o Profeta do Musgo"
  },

  "MrMushroom1": {
    "Desc": "Interaja com o Sr. Cogumelo",
    "Score": 0.88
  },

  "Nail2": {
    "Desc": "Ferrão 2",
    "Score": 0.55
  },

  "Nail3": {
    "Desc": "Ferrão 3",
    "Excludes": ["2Ore"],
    "Score": 0.78
  },

  "NailHut": {
    "Desc": "Use a Arte do Ferrão na casa do respectivo Mestre do Ferrão"
  },

  "Ordeal20": {
    "Desc": "Provação Eterna: Mate 20 Zotes",
    "Types": ["Tiebreaker"],
    "Excludes": ["Godhome", "Radiant"]
  },

  "Overcharm": {
    "Desc": "Fale com Salubra enquanto sobrecarregado"
  },

  "PoP": {
    "Desc": "Complete o Caminho da Dor",
    "Types": ["Tiebreaker"],
    "Excludes": ["Kingsmould"]
  },

  "Pins": {
    "Desc": "Compre 6 pinos da Iselda (Todos menos 2)",
    "Excludes": ["PinsAll"],
    "Score": 0.68
  },

  "PinsAll": {
    "Desc": "Compre 8 pinos da Iselda (Todos)",
    "Excludes": ["Pins", "TramPass"],
    "Score": 1.15
  },

  "Revek": {
    "Desc": "Bata na cabeça de Revek 3 vezes sem morrer (Guarda da Clareira dos Espíritos)",
    "Excludes": ["ShrineOfBelievers"]
  },

  "Salubra": {
    "Desc": "Compre tudo de Salubra"
  },

  "ShadeGates": {
    "Desc": "Ataque dois portões de sombra"
  },

  "Springs": {
    "Desc": "Tome um banho em 4 fontes termais diferentes",
    "Excludes": ["Marissa"]
  },

  "SpringSplash": {
    "Desc": "Jogue água no NPC na fonte termal do Coliseu"
  },

  "ShrineOfBelievers": {
    "Desc": "Visite o Santuário dos Fieis",
    "Excludes": ["Revek"]
  },

  "Telescope": {
    "Desc": "Olhe no telescópio de Lurien"
  },

  "Tendrils": {
    "Desc": "Consiga Tentáculos do Vazio no Diário de Caçador"
  },

  "Tiso": {
    "Desc": "Golpeie o Escudo de Tiso para longe de seu corpo"
  },

  "Trilobite": {
    "Desc": "Golpeie a Trilobita em Covil das Tecelãs"
  },

  "Tuk": {
    "Desc": "Fale com Tuk"
  },

  "VisitDistantHive": {
    "Desc": "Visite a Aldeia Distante ou A Colmeia",
    "Excludes": ["TramPass", "DeepStag", "Midwife"]

  },

  "VisitLakes": {
    "Desc": "Visite o Lago Azul ou o Lago de Unn"
  },

  "VisitMounds": {
    "Desc": "Visite Monte Luxuriante ou Cristalizado(M. Cristalizado requer Mergulho Desolador)"
  },

  "VisitQueensShell": {
    "Desc": "Visite Jardins da Rainha ou Carapaça Abandonada",
    "Excludes": ["Hornet2"]

  },

  "VisitSanctumWaterways": {
    "Desc": "Visite Santuário da Alma or Hidrovia Real"
  },

  "VisitTower": {
    "Desc": "Visite Torre do Amor (Não precisa da Chave do Amor)"
  },

  "VoidPool": {
    "Desc": "Nade em um lago de sombra"
  },

  "WhiteLady": {
    "Desc": "Use o Ferrão dos Sonhos na Dama Branca",
    "Excludes": ["TLord", "ClothQuest"]
  },

  "Willow": {
    "Desc": "Use o Ferrão dos Sonhos na comida de Willoh"
  },

  "WPShadeSkip": {
    "Desc": "Sente-se na Estação Escondida",
    "Excludes": ["HiddenStag", "Wings"]
  }

};
