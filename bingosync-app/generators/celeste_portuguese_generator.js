bingoGenerator = require("./generators/generator_bases/srl_generator_v5.js");
 
var bingoList = [];
bingoList[1] = [
{ name: "Fale com o Theo na Travessia (1A-2)", types: ["earlygame","cutscene"] },
{ name: "Complete o Início da 1A sem pular", types: ["earlygame","task"] },
{ name: "Todos os 6 Morangos no Início da 1A", types: ["checkpoint_berries"] },
{ name: "Todos os 5 Morangos no Abismo (1A-3)", types: ["checkpoint_berries"] },
{ name: "Consiga um 1-Up na 1A", types: ["1up","earlygame"] },
{ name: "Coração Azul da 1A", types: ["hearts","earlygame"] },
{ name: "Complete o Início da 1A sem usar dash", types: ["earlygame","task"] },
{ name: "Cassete da 1A", types: ["1b","earlygame"] },
{ name: "Coração Azul da 2A", types: ["hearts","earlygame"] },
];
bingoList[2] = [
{ name: "Consiga dois 1-Ups", types: ["1up"] },
{ name: "10 Morangos na 1A", types: ["amount_berries"] },
{ name: "Fale com o Theo na Desperta (2A-3)", types: ["earlygame","awake"] },
{ name: "1 Morango na Desperta (2A-3)", types: ["checkpoint_berries"] },
{ name: "Todos os 8 Morangos na Intervenção (2A-2)", types: ["checkpoint_berries"] },
{ name: "Complete a Desperta sem usar dash (2A-3)", types: ["earlygame","awake"] },
{ name: "Todos os 9 Morangos no Início da 2A", types: ["checkpoint_berries"] },
{ name: "Cassete da 2A", types: ["2b", "earlygame"] },
{ name: "Complete o Abismo sem usar dash (1A-3)", types: ["earlygame", "task"] },
 
];
bingoList[3] = [
{ name: "5 Morangos em 3 Capítulos", types: ["amount_berries"] },
{ name: "Leia o Poema na 2A", types: ["earlygame","awake"] },
{ name: "Fale com o Theo no Poço do Elevador (3A-3)", types: ["resort_cutscene","cutscene"] },
{ name: "Completar Intervenção sem pular (2A-2)", types: ["earlygame","task"] },
{ name: "Todos os 9 Morangos na Travessia (1A-2)", types: ["checkpoint_berries"] },
{ name: "10 Morangos na 2A", types: ["amount_berries"] },
{ name: "Encontre a Carta e o PICO-8 na 3A", types: ["resort_cutscene","cutscene"] },
{ name: "Consiga um 1-Up em 2 Capítulos", types: ["1up","challenge"] },
{ name: "Início da 3A sem agarrar", types: ["grabless"] },
];
bingoList[4] = [
{ name: "Consiga um 1-Up na 2A", types: ["1up"] },
{ name: "Chegue no Old Site no PICO-8", types: ["pico-8"] },
{ name: "Complete a 1B", types: ["1b"] },
{ name: "Todos os Colecionáveis da 1A", types: ["amount_berries"] },
{ name: "5 Morangos em 4 Capíitulos", types: ["amount_berries"] },
{ name: "Complete a Travessia sem usar dash (1A-2)", types: ["challenge","task"] },
{ name: "Completar Templo sem usar dash (4A-2)", types: ["task"] },
{ name: "Início da 4A sem agarrar", types: ["grabless"] },
{ name: "Consiga um 1-Up na 4A", types: ["1up","challenge"] },
{ name: "2 Cassetes", types: ["amount_cassettes"] },
];
bingoList[5] = [
{ name: "20 Morangos", types: ["amount_berries"] },
{ name: "5 Morangos no PICO-8", types: ["pico-8"] },
{ name: "Complete a 2B", types: ["2b"] },
{ name: "1A sem agarrar", types: ["grabless"] },
{ name: "2A sem agarrar", types: ["grabless"] },
{ name: "3 Corações Azuis", types: ["hearts"] },
{ name: "Consiga três 1-Ups", types: ["1up","challenge"] },
{ name: "Consiga um 1-Up na 5A", types: ["1up","challenge"] },
{ name: "Todos os 4 Morangos no Poço do Elevador", types: ["checkpoint_berries"] },
{ name: "2 Morangos Alados em 2 Capítulos", types: ["special_berries"] },
];
bingoList[6] = [
{ name: "Todos os 7 Morangos na Grande Bagunça", types: ["checkpoint_berries"] },
{ name: "Corações Azul e Vermelho na Cidade", types: ["1b"] },
{ name: "Corações Azul e Vermelho no Terreno", types: ["2b"] },
{ name: "Todos os Colecionáveis da 2A", types: ["amount_berries"] },
{ name: "Coração Azul da 3A", types: ["hearts"] },
{ name: "Todos os 3 Morangos na Suíte Presidencial", types: ["checkpoint_berries"] },
{ name: "Cassete da 5A", types: ["5b"] },
{ name: "Grande Bagunça: Baú -> Livros -> Toalha", types: ["huge_mess_pathing"] },
{ name: "Grande Bagunça: Baú -> Toalha -> Livros", types: ["huge_mess_pathing"] },
{ name: "Grande Bagunça: Toalha -> Livros -> Baú", types: ["huge_mess_pathing"] },
{ name: "2 Morangos de Semente", types: ["special_berries"] },
];
bingoList[7] = [
{ name: "2 Cutscenes Opcionais do Theo", types: ["cutscene"] },
{ name: "Consiga um 1-Up em 3 Capítulos", types: ["1up","challenge"] },
{ name: "Leia o Diário no Poço do Elevador (3A-3)", types: ["resort_cutscene","cutscene"] },
{ name: "Poço do Elevador sem agarrar (3A-3)", types: ["grabless"] },
{ name: "Todos os 8 Morangos no Início da 4A", types: ["checkpoint_berries"] },
{ name: "Cassete da 4A", types: ["4b"] },
{ name: "Complete 3 Lados A", types: ["amount_chapters"] },
];
bingoList[8] = [
{ name: "Todos os 7 Morangos na Antiga Trilha (4A-3)", types: ["checkpoint_berries"] },
{ name: "3 Morangos Alados", types: ["special_berries","earlygame"] },
{ name: "4 Morangos Alados", types: ["special_berries"] },
{ name: "Use 5 Binóculos em Lados B", types: ["binoculars"] },
{ name: "5 Morangos em 5 Capítulos", types: ["amount_berries"] },
{ name: "Grande Bagunça sem agarrar (3A-2)", types: ["grabless"] },
{ name: "Grande Bagunça: Livros -> Toalha -> Baú", types: ["huge_mess_pathing"] },
{ name: "Grande Bagunça: Livros -> Baú -> Toalha", types: ["huge_mess_pathing"] },
{ name: "Grande Bagunça: Toalha -> Baú -> Livros", types: ["huge_mess_pathing"] },
{ name: "Pule em 10 Bolas de Neve", types: ["snowballs"] },
];
bingoList[9] = [
{ name: "Suíte Presidencial sem agarrar (3A-4)", types: ["grabless"] },
{ name: "25 Morangos", types: ["amount_berries"] },
{ name: "Coração Azul da 4A", types: ["hearts"] },
{ name: "Face do Penhasco sem agarrar (4A-4)", types: ["grabless"] },
{ name: "4 Corações Azuis", types: ["hearts"] },
{ name: "Encontre o celular do Theo na 5A", types: ["cutscene"] },
{ name: "Cassete da 3A", types: ["3b"] },
{ name: "Revelações sem agarrar (5A-3)", types: ["grabless"] },
];
bingoList[10] = [
{ name: "2 Chaves na 5B", types: ["5b","task"] },
{ name: "Todos os 5 Morangos na Face do Penhasco", types: ["checkpoint_berries"] },
{ name: "Procura sem agarrar (5A-4)", types: ["grabless"] },
{ name: "5 Morangos Alados", types: ["special_berries"] },
{ name: "Falar com o Theo na Procura (5A-4)", types: ["cutscene","search"] },
{ name: "4 Cassetes", types: ["amount_cassettes"] },
{ name: "15 Morangos na 4A", types: ["amount_berries"] },
];
bingoList[11] = [
{ name: "Use 6 Binóculos em Lados B", types: ["binoculars"] },
{ name: "10 Morangos no PICO-8", types: ["pico-8"] },
{ name: "Atordoe o Oshiro 10 vezes", types: ["oshiro_stun"] },
{ name: "Complete o 4B", types: ["4b"] },
{ name: "Morango Dourado Alado", types: ["challenge"] },
{ name: "Complete a 5A", types: ["task"] },
{ name: "Profundezas sem agarrar (5A-2)", types: ["grabless"] },
{ name: "10 Morangos na 3A", types: ["amount_berries"] },
 
];
bingoList[12] = [
{ name: "Complete 2 Lados B", types: ["amount_chapters"] },
{ name: "Colete a Chave nas Profundezas (5A-2)", types: ["task"] },
{ name: "1 Morango no Resgate (5A-5)", types: ["checkpoint_berries"] },
{ name: "Coração Azul da 5A", types: ["hearts"] },
{ name: "Todos os 12 Morangos no Início da 5A", types: ["checkpoint_berries"] },
{ name: "Todos os 11 Morangos no Início da 3A", types: ["checkpoint_berries"] },
{ name: "Todos os 9 Morangos no Templo (4A-2)", types: ["checkpoint_berries"] },
{ name: "Acerte um bloco Kevin de todos os 4 lados", types: ["task"] },
];
bingoList[13] = [
{ name: "1 Morango nas Revelações (5A-3)", types: ["checkpoint_berries"] },
{ name: "2 Corações Azuis e 2 Corações Vermelhos", types: ["amount_hearts","amount_chapters"] },
{ name: "Colete o Orbe no PICO-8", types: ["pico-8"] },
{ name: "1 Chave na Fonte de Energia", types: ["ch9","binoculars"] },
{ name: "Entre na Biblioteca (3B-3)", types: ["3b"] },
{ name: "1 Morango em No Núcleo (8A-2)", types: ["checkpoint_berries","core"] },
{ name: "Cutscene da Ravina (6A-3)", types: ["cutscene"] },
{ name: "Lago sem agarrar (6A-2)", types: ["grabless"] },
];
bingoList[14] = [
{ name: "35 Morangos", types: ["amount_berries"] },
{ name: "40 Morangos", types: ["amount_berries"] },
{ name: "Complete o PICO-8", types: ["pico-8"] },
{ name: "3 Cutscenes Opcionais do Theo", types: ["cutscene"] },
{ name: "Mate um Seeker", types: ["seeker","task"] },
{ name: "Use 1 Binóculo em 4 Capítulos", types: ["binoculars"] },
{ name: "Ir só pela rota de cima na Ravina (6A-3)", types: ["task","reflection_pathing"] },
{ name: "1 Chave na Procura (5A-4)", types: ["task","search"] },
{ name: "Cassete da 6A", types: ["6b"] },
{ name: "Coração Azul da 6A", types: ["hearts"] },
];
bingoList[15] = [
{ name: "3 Morangos de Semente", types: ["special_berries"] },
{ name: "Complete 2 Lados A e 2 Lados B", types: ["amount_chapters"] },
{ name: "5 Cassetes", types: ["amount_cassettes"] },
{ name: "Atordoe Seekers 15 vezes", types: ["seeker","task"] },
{ name: "2 Chaves em Fonte de Energia (9-3)", types: ["ch9","binoculars"] },
{ name: "Use 5 Binóculos em Adeus", types: ["ch9","binoculars"] },
{ name: "Todos os 11 Morangos nas Profundezas (5A-2)", types: ["checkpoint_berries"] },
{ name: "Todos os 6 Morangos na Procura (5A-4)", types: ["checkpoint_berries"] },
{ name: "Complete a 5B", types: ["5b"] },
 
];
bingoList[16] = [
{ name: "5 Corações", types: ["amount_hearts"] },
{ name: "20 Morangos na 5A", types: ["amount_berries"] },
{ name: "Use 7 Binóculos", types: ["binoculars"] },
{ name: "Use 8 Binóculos", types: ["binoculars"] },
{ name: "Use 2 Binóculos em 3 Capítulos", types: ["binoculars"] },
{ name: "15 Morangos no PICO-8", types: ["pico-8","challenge"] },
{ name: "Complete 3B", types: ["3b"] },
{ name: "Ir só pela rota de baixo na Ravina (6A-3)", types: ["task","reflection_pathing"] },
{ name: "2 Chaves em Procura (5A-4)", types: ["task","search"] },
{ name: "3 Chaves em Procura (5A-4)", types: ["task","search"] },
 
];
bingoList[17] = [
{ name: "6 Morangos Alados", types: ["special_berries"] },
{ name: "7 Morangos Alados", types: ["special_berries"] },
{ name: "Mate 2 Seekers diferentes", types: ["seeker","task"] },
{ name: "3 Chaves em Fonte de Energia (9-3)", types: ["ch9","binoculars"] },
{ name: "4 Chaves em Fonte de Energia (9-3)", types: ["ch9","binoculars"] },
{ name: "Use 1 Binóculo em 5 Capítulos", types: ["binoculars"] },
{ name: "10 Morangos em 3 Capítulos", types: ["amount_berries"] },
{ name: "Em No Núcleo, ative o Gelo na direita (8A-2)", types: ["core"] },
{ name: "5 Corações Azuis", types: ["hearts"] },
 
];
bingoList[18] = [
{ name: "Complete 3 Lados B", types: ["amount_chapters"] },
{ name: "3 Corações Azuis e 3 Corações Vermelhos", types: ["amount_hearts","amount_chapters"] },
{ name: "Complete 2 Capítulos sem agarrar", types: ["grabless","challenge"] },
{ name: "Atordoe Seekers 20 vezes", types: ["seeker","task"] },
{ name: "Mate 3 Seekers diferentes", types: ["seeker","task"] },
{ name: "Corações Azul e Vermelho na Cordilheira", types: ["4b"] },
{ name: "Ravina sem agarrar (6A-3)", types: ["grabless","challenge"] },
{ name: "15 Morangos em 2 Capítulos", types: ["amount_berries"] },
{ name: "15 Morangos na 3A", types: ["amount_berries"] },
];
bingoList[19] = [
{ name: "45 Morangos", types: ["amount_berries"] },
{ name: "50 Morangos", types: ["amount_berries"] },
{ name: "Entre no Fundo do Poço (6A-5 ou 6B-3)", types: ["6b","lategame"] },
{ name: "Use 2 Binóculos em 4 Capítulos", types: ["binoculars"] },
{ name: "Corações Azul e Vermelho no Templo", types: ["5b"] },
{ name: "1 Morango em O Coração da Montanha (8A-4)", types: ["checkpoint_berries","core"] },
{ name: "Use todos os 3 Binóculos nos 500M", types: ["binoculars","lategame"] },
{ name: "Todos os 4 Morangos no Início da 7A", types: ["lategame"] },
{ name: "Complete a 6A", types: ["lategame","task"] },
{ name: "Todos os Colecionáveis da 4A", types: ["amount_berries"] },
];
bingoList[20] = [
{ name: "8 Morangos Alados", types: ["special_berries"] },
{ name: "9 Morangos Alados", types: ["special_berries"] },
{ name: "Complete 3 Lados A e 3 Lados B", types: ["amount_chapters"] },
{ name: "3 Gemas na 7A", types: ["lategame","gems"] },
{ name: "Gemas do Início da 7A e 500M", types: ["lategame","gems","task"] },
{ name: "3A sem agarrar", types: ["grabless"] },
{ name: "10 Morangos em 4 Capítulos", types: ["amount_berries"] },
{ name: "Todos os Colecionáveis da 3A", types: ["amount_berries"] },
{ name: "Fundo do Poço sem agarrar (6A-5 ou 6B-3)", types: ["lategame","grabless"] },
{ name: "Sala do easteregg no Reflexo (6A-4)", types: ["task"] },
{ name: "4 Morangos de Semente", types: ["special_berries","lategame"] },
];
bingoList[21] = [
{ name: "6 Corações", types: ["amount_hearts"] },
{ name: "7 Corações", types: ["amount_hearts"] },
{ name: "20 Morangos na 7A", types: ["lategame"] },
{ name: "Use 9 Binóculos", types: ["binoculars"] },
{ name: "Use 10 Binóculos", types: ["binoculars"] },
{ name: "5A sem agarrar", types: ["grabless"] },
{ name: "Todos os 6 Morangos nos 500M", types: ["lategame"] },
{ name: "Todos os 6 Morangos nos 1000M", types: ["lategame"] },
{ name: "Todas as 4 Cutscenes Opcionais do Theo", types: ["cutscene"] },
{ name: "Complete 5 Lados A", types: ["amount_chapters"] },
];
bingoList[22] = [
{ name: "Cassete da 7A", types: ["7b"] },
{ name: "65 Morangos", types: ["amount_berries","big_berries"] },
{ name: "75 Morangos", types: ["amount_berries","big_berries"] },
{ name: "4 Gemas na 7A", types: ["lategame","gems"] },
{ name: "Gemas dos 500M e 1000M", types: ["lategame","gems","task"] },
{ name: "Corações Azul e Vermelho no Resort", types: ["3b"] },
{ name: "10 Morangos em 5 Capítulos", types: ["amount_berries"] },
{ name: "Use 5 Binóculos na 7A", types: ["binoculars","lategame"] },
{ name: "Use todos os 4 Binóculos nos 1000M", types: ["binoculars","lategame"] },
];
bingoList[23] = [
{ name: "Complete 4 Lados B", types: ["amount_chapters"] },
{ name: "Complete a 6B", types: ["6b"] },
{ name: "Revele o Carro em Lembrança (9-4)", types: ["ch9","task","challenge"] },
{ name: "5 Gemas na 7A", types: ["lategame","gems"] },
{ name: "Gemas dos 2000M e 2500M", types: ["lategame","gems","task"] },
{ name: "15 Morangos em 3 Capítulos", types: ["amount_berries","big_berries"] },
{ name: "6A sem agarrar", types: ["lategame","grabless","challenge"] },
{ name: "Todos os 8 Morangos nos 1500M", types: ["lategame"] },
{ name: "Todos os 8 Morangos nos 2000M", types: ["lategame"] },
{ name: "5 Chaves em Fonte de Energia (9-3)", types: ["ch9","binoculars"] },
];
bingoList[24] = [
{ name: "35 Morangos na 7A", types: ["lategame"] },
{ name: "Corações Azul e Vermelho na Reflexão", types: ["6b"] },
{ name: "Todas as Bandeiras nos 3000M", types: ["task","lategame"] },
{ name: "Todos os Colecionáveis da 5A", types: ["amount_berries"] },
{ name: "Todos os 8 Morangos nos 2500M", types: ["lategame"] },
{ name: "Todos os 7 Morangos nos 3000M", types: ["lategame"] },
{ name: "Todos os 3 Morangos em Quente e Frio (8A-3)", types: ["checkpoint_berries","core"] },
{ name: "Use 2 Binóculos em 5 Capítulos", types: ["binoculars"] },
{ name: "Coração Azul do Núcleo", types: ["core"] },
{ name: "Visite o Ninho de Pássaros no Epílogo", types: ["task","lategame"] },
];
bingoList[25] = [
{ name: "Complete a  7B", types: ["7b"] },
{ name: "100 Morangos", types: ["amount_berries","big_berries"] },
{ name: "Complete 5 Lados B", types: ["amount_chapters"] },
{ name: "15 Morangos em 4 Capítulos", types: ["amount_berries","big_berries"] },
{ name: "Entre no Horizonte de Eventos (9-4)", types: ["ch9"] },
{ name: "Todos os Colecionáveis do 8A", types: ["checkpoint_berries","core"] },
{ name: "Coração Azul da 7A", types: ["gems","hearts"] },
];