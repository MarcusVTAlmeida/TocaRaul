const livros = [
    {
        nome: 'Raul Seixas: Filosofias políticas e lutas, de Mário Lucena',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660085864/Livros/RAUL_SEIXAS__A_VERDADE_ABSOLUTA_1251009497B_wonyxs.jpg',
        resumo: '	Esta obra compila o pensamento poético e filosófico do roqueiro baiano através de análises e citações de seus versos – trechos de 163 letras de Raul (quatro inéditas) figuram no livro – e entrevistas. Uma profunda análise filosófica da mensagem do Maluco Beleza.'
    },
    {
        nome: 'Raul Seixas por ele mesmo, de Raul Seixas',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660085951/Livros/5111cD8ak8L._SX316_BO1_204_203_200__eh84hi.jpg',
        resumo: '	Elaborado a partir de entrevistas, letras de músicas, pensamentos e declarações do cantor, produzidos no curto percurso de sua vida, trata-se, curiosamente, de um livro autobiográfico, embora não tenha sido escrito diretamente por Raul Seixas. Todo o material de pesquisa e sua organização foi realizado pelo fundador do Raul Rock Club/Raul Seixas Oficial Fã-Clube, Sylvio Passos, que foi grande amigo e companheiro do cantor.'
    },
    {
        nome: 'Raul Seixas: a Trajetória de um Ídolo',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660085999/Livros/_4278ded8f2731f56f1e1531e9269fa86982c9a1f_hlcgq2.jpg',
        resumo: '	ESTE LIVRO É UM DEPOIMENTO, UM APANHADO DE MEMÓRIA QUE RELACIONA SENTIMENTO, EMOÇÃO E OBJETIVIDADE DOS FATOS. CONTEM FOTOS, ETC'
    },
    {
        nome: 'Raul No Caldeirão',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660086159/Livros/6ae8b3c6-425a-4a3e-88e7-48a0c45c36e4_guqmud.jpg',
        resumo: '	David Eduardo Martins, em uma abordagem sutil, nos leva a visitar o aspecto simbólico do criativo imaginário existencial de Raul Seixas, fazendo uma análise hermenêutica de suas músicas. Raul no Caldeirão mostra a necessidade que tem o homem de se achar no Universo, de tentar encontrar-se. E este caminho é todo sinalizado pelos símbolos arquitípicos, que nos são próprios, e, ao mesmo tempo, comum a todos. É um passeio entre vários conceitos místicos do inconsciente coletivo, focado no processo de individuação, passando pelo esoterismo e pelo cristianismo, nos convidando a reflexão e aos sonhos.'
    },
    {
        nome: 'Raul Seixas: Uma antologia, de Sylvio Passos e Toninho Buda',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660086227/Livros/_7e734d197c5869013fe42bd075454f8acdb7b3d2_gannbt.jpg',
        resumo: '	Aqui estão presentes depoimentos de amigos e do próprio Raul, além da sua biografia e, é claro, a discografia completa. O que significa “Sociedade Alternativa’? Quem foi Aleister Crowley, o homem que influenciou tanto a cabeça de Raulzito? E o novo Aeon? Quantos parceiros Raul teve? Qual foi o último? O que ele achava de Deus e do Diabo?'
    },
    {
        nome: 'Raul Rock Seixas, de Kika Seixas',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660086312/Livros/34d1b7dda1b6a15bdc1721d83b7b325750e2eeeb_am5d0d.jpg',
        resumo: '	Este livro escrito por Kika Seixas, última mulher de Raulzito, é uma bonita homenagem ao astro, e compreende toda a sua trajetória. De fotos de infância aos seus últimos registros a cópias de músicas escritas à mão pelo músico, passando por imagens de objetos pessoais e textos inéditos, este livro faz um apanhado geral da vida do artista, desde a Bahia ao sucesso nacional.'
    },
    {
        nome: 'O Baú do Raul Revirado',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660086361/Livros/1000601951_gdd9yz.webp',
        resumo: '	 221 páginas em brochura. Livro com Corte, borda e páginas com manchas levemente escurecidas. MC06. Sem CD. Sinopse: O baú em que Raul Seixas guardava pequena lembranças de sua carreira está finalmente ao alcance do público. Esse livro reúne fotos e manuscritos inéditos de um dos maiores ídolos do Brasil. Conhecer a história de Raul e do rock nacional através de seus objetos pessoais irá agradar até quem nasceu há dez mil anos atrás.'
    },
    {
        nome: 'Raul Seixas Musicalmente Falando',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660086469/Livros/RAUL_SEIXAS_MUSICALMENTE_FALANDO_1247588763B_y322bc.jpg',
        resumo: '	Meu primeiro livro foi justamente sobre Raul,"eu quero cantar por cantar",onde procurei não só reunir e analisar tudo que descobri e pesquisei em vinte anos,após descobrir Raul em 1973,como também complementar outros livros anteriores sobre Dom Raulzito.A obra e a vida do ultraversátil Raul sempre permitem interpretações novas,e este livro da thaís(que,por concidência,também deve a Raul-e à Nova Sampa-Sua grande estréia no mundo litérário)também pretende complementar todos os outros trabalhos escritos sobre Raul,inclusive o meu.'
    },
    {
        nome: '30 Anos de Rock: Raul Seixas e a cultura brasileira',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660086683/Livros/DI04876_yrgphx.jpg',
        resumo: '	Em pouco mais de 400 páginas, Tiago revela os bastidores do programa que prestou uma homenagem a Seixas. O repórter viajou por algumas cidades, bateu um papo com amigos, fãs, familiares e artistas que conviveram de perto com o lendário Raul. O livro já foi lançado em Salvador, São Paulo, Goiânia, Curitiba, Florianópolis, entre outras regiões.'
    },
    {
        nome: 'Raul Seixas: Não diga que a canção está perdida',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660086724/Livros/91w9AOvKx3L_jfw1nt.jpg',
        resumo: '	Como Raulzito, o garoto de classe média de Salvador que era fã de Elvis Presley, se transformou em Raul Seixas, um dos maiores ícones da cultura pop brasileira? Como o jovem sonhador, depois de “passar fome por dois anos na cidade maravilhosa”, conquistou as gravadoras e o grande público? E como o criador de “Maluco Beleza” e “Sociedade Alternativa”, responsável por versos que se confundem com a contracultura dos anos 1970, foi derrotado pelas drogas e pelo alcoolismo na década seguinte, mas sem deixar de produzir hits inesquecíveis? Jotabê Medeiros, autor de Apenas um rapaz latino-americano, cultuada biografia de Belchior, e crítico musical de larga experiência, responde a essas perguntas e apresenta, neste livro vertiginoso, a primeira biografia de Raul à altura de sua importância.'
    },
    {
        nome: 'Krig-Há, Bandolo! Cuidado, Aí Vem Raul Seixas',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660086771/Livros/9788575774618-rosana-da-camara-teixeira-krig-ha-bandolo-3733658387_rxi9en.jpg',
        resumo: '	Partindo da questão da idolatria, e tomando como base a figura-ícone de Raul Seixas e os diversos fã-clubes que o roqueiro deixou espalhados pelo Brasil, Rosana da Câmara Teixeira descreve um universo de raulseixistas e raulmaníacos de todos os tipos - ajudando a desvendar os mecanismos envolvidos nessa forma de adesão e sociabilidade características da sociedade contemporânea, e ao mesmo tempo lançando uma luz sobre a vida e a obra do artista.'
    },
    {
        nome: 'Livro - Raul Seixas: a História que Não Foi Contada',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660086805/Livros/A1x6_EaEwNL_f48ww1.jpg',
        resumo: `	"A arte é o espírito social de uma época." Frase dita por alguém que enquanto esteve entre nós, de uma maneira ou de outra, tentou incansavelmente confirmá-la. Os seus últimos 10 anos de passagem por este planeta foram repletos de sucessos, desilusões, casamentos e descasamentos, realizações e fracassos, tudo isso regado pela velha trilogia "sexo, drogas e rock'n roll". Leia a história que não foi contada, desvendada por Elton Frans, que participou durante uma década da vida de um mito chamado Raul Seixas.`
    },
    {
        nome: 'O Protesto dos Inconscientes – Raul Seixas e a Micropolítica',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660086938/Livros/livro-raul-seixas-raulseixismo-raro-D_NQ_NP_774175-MLB30321576872_052019-V_z48xvl.webp',
        resumo: '	Esse trabalho reconstituiu a trajetória do roqueiro Raul Seixas visando compreender a construção do mito que se tornou, problematizando sua inserção no cenário musical, seu diálogo com outros movimentos artísticos, as temáticas que fez uso ao longo das décadas de 70 e 80. Tornando-se um mito, Raul Seixas deixou em suas músicas as bases do que denominou Raulseixismo, que ganha cada vez mais adeptos. Para analisarmos sua mitificação procuramos os fundamentos de sua filosofia e a reapropriação do seu discurso pelos fãs, seguidores ou simplesmente, raulseixistas.'
    },
    {
        nome: 'Raul Seixas - Por Trás Das Canções',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660086978/Livros/81Q9XOa3PTL_ambs7d.jpg',
        resumo: '	Um mergulho por trás das principais composições de um dos maiores nomes do rock brasileiro, com novas histórias e fotografias inéditas.  Em de agosto de 2019 completa-se trinta anos da morte de Raul Seixas, considerado por muitos o pai do rock brasileiro. Mesmo após todo esse tempo sua influência na música brasileira e a paixão de seus fãs permanecem, mantendo viva a figura do Maluco Beleza e de sua obra, que segue influenciando músicos e sofrendo releituras até os dias de hoje.  Em Raul Seixas: Por trás das canções, Carlos Minuano - autor de Tons de Clô, biografia do apresentador Clodovil - vai, através das letras de Raul e de sua relação com a composição, abordar a vida e a carreira do artista de uma forma precisa e íntima, nunca feita antes. O livro também conta com depoimentos de amigos, parceiros de trabalho e familiares de Raul e com o relato de uma inusitada e incrível turnê do disco Ouro de Tolo por dois garimpos no interior do Pará e fotos inéditas dessa viagem. Uma jornada pela memória de um dos brasileiros mais ilustres e peculiares de todos os tempos, guiada pela poesia única de suas composições.  As fotos de acervo de família, manuscritos de letras de Raul e da viagem pelo Pará ilustram a incrível narrativa da vida desse ícone da música brasileira.  Sobre o Autor: Carlos Minuano é Jornalista, pós-graduado em cinema e começou a carreira em 1997. Trabalhou como repórter para veículos como Folha de S. Paulo, Rolling Stone, entre outros. Atualmente é colaborador do UOL e escreve roteiros para televisão e cinema. É autor de Tons de Clô, biografia de Clodovil Hernandes também publicada pela editora BestSeller.'
    },
    {
        nome: 'Dossiê Raul Seixas',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087013/Livros/51WqUEvX9xL_kckcsy.jpg',
        resumo: '	O tempo faz a medida de cada artista. Quando sua obra é capaz de transcender o tempo é porque, de fato, ela possui qualidades para ser chamada de Arte. Nesse contexto, sem nenhuma dúvida, se insere a obra de Raul Seixas, que o consagrou como um verdadeiro precursor do rock nacional.'
    },
    {
        nome: 'Raul Seixas, O Verbalóide',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087060/Livros/1001077092_lxkhxm.webp',
        resumo: '	Raul Seixas, O Verbalóide é uma das mais completas biografias do cantor e compositor baiano falecido em 1989 e que transformou-se no maior mito que a música brasileira ja criou. Contém toda a trajetória pessoal e artística de Raul Seixas, bem como uma esplendorosa viagem ao universo filosófico de sua obra poética e musical, desenhos inéditos e fotos nunca dantes publicadas, poemas e capítulos especiais de grandes nomes da MPB admiradores confessos da obra raulseixista. Com mais de 600 páginas este trata-se de um livro escrito por um dos maiores fãs de Raul Seixas, fundador do primeiro fã clube brasileiro do cantor e filósofo, além de ter sido amigo pessoal do ídolo, o autor, Isaac Soares de Souza é jornalista, poeta e compositor. Já publicou as biografias RAUL SEIXAS, O METAMORFÔNICO (1995) e ZÉ RAMALHO: O PROFETA DO TERCEIRO MILÊNIO (2009). Esta biografia foi escrita em 1995/2010, revista e ampliada diversas vezes devido ao tempo decorrido desde o seu término e a demora em editá-la por causa da falta de apoio das grandes editoras. Finalmente, através do clube de autores este magnífico livro pode agora ser editado. Para os admiradores da obra poética, musical e filosófica de Raul Seixas, esta biografia é mais do que importante, pois trata-se de um documento vivo da história deste que foi, sem dúvida, o maior cantor / compositor brasileiro de todos os tempos na historiografia da música brasileira. Imperdível. Adquira já o seu exemplar e viaje com Raul Seixas para outras dimensões astrais, maágicas e filosóficas.'
    },
    {
        nome: 'Novo Aeon: Raul Seixas no Torvelinho do seu Tempo',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087104/Livros/20210211112737_8127991873_H_uxpc22.jpg',
        resumo: '	O assunto que ora nos reúne e convida a pensar é a concepção de Novo Aeon apresentada por Raul Seixas. Elaborada pelo poeta e mago inglês Aleister Crowley no início do século XX, a doutrina do Novo Aeon impulsionou trajetórias existenciais de grande força contestatória, influenciando a contracultura das décadas de 1960 e 1970. Raul, que acompanhou o movimento e propôs uma Sociedade Alternativa, lançou sua criação poética à condição de espírito do seu tempo.'
    },
    {
        nome: 'Raul Seixas, Rock Book',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087225/Livros/Raul-Seixas-Rock-Book-_thamkw.jpg',
        resumo: '	Songbook com sucessos de Raul Seixas. Edição Griphus, 1994, 124 páginas. Contém linhas melódicas e, junto, letras, cifras e diagramas para violão. Algumas canções trazem ainda linhas de acompanhamento ou o baixo na clave de fá. Contém ainda 20 páginas de informações e fotografias, antes das partituras. Trata-se de um perfeito exemplar da primeira edição, que veio com um poster do artista. Apresenta apenas leve escurecimento nos cortes, pela ação do tempo e assinatura na página de rosto.'
    },
    {
        nome: 'Raul Seixas: O Sonho da Sociedade Alternativa',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087264/Livros/5671_dlp9uc.webp',
        resumo: '	Sonho que se sonha junto O livro editado pela Martin Claret apresenta muitas falhas editoriais, mas ainda assim é um achado precioso para quem quer se aprofundar na obra de Raul.  De inicio parece apenas um caça-níqueis, publicado em celebração no aniversário de morte do cantor, meio que encomendado pela editora à autora Luciane Alves. Porém, o livro é mais do que isso. É uma análise de todo o conjunto da obra, filosofia, ideias e projetos do Maluco Beleza.  A autora começa sabiamente contextualizando o mundo socio-politico-cultural da época em que Raul começou sua carreira. Eram tempos de ditadura, e Luciane mostra com precisão a forma que a censura e repressão influenciou a rebeldia do cantor. Depois, associando a rebeldia com a maior influencia que Raul Seixas recebeu - o Livro de Lei, de Alester Crowley - vemos como as letras de suas músicas eram sempre direcionadas a um único pensamento, uma única filosofia e ideologia: a propagação da Sociedade Alternativa, uma visão de Raul para o Novo Aeon.  São páginas e páginas de interpretações de letras, comparando com entrevistas e depoimentos de amigos, mostrando um Raul que poucos conheceram. Vemos um Raul sonhador, ao mesmo tempo com medo. Um exemplo era seu medo de assuntos sobrenaturais, ao contrário do que se imagina. Mas também descobrimos que era um gênio ainda mais fascinante do que se nota pelas composições.  Também temos uma boa introdução sobre o que é o Livro da Lei, a Thelema e o Novo Aeon, de Crowley, e a forma que isso está sempre presente na obra de Raul.  Além disso, temos informações preciosas e raras sobre o projeto da Cidade das Estrelas e o Manifesto da Sociedade Alternativa.  Enfim, é uma obra que merecia uma reedição, pois novos materiais sobre Raul surgiram após sua publicação, e algumas falhas poderiam ser corrigidas.'
    },
    {
        nome: 'Whats Com Raul Seixas - Livro',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087370/Livros/whats-com-raul-seixas-livro-D_NQ_NP_824222-MLB32037468935_092019-F_z5hnos.webp',
        resumo: '	O escritor Hermélio Silva lançou o livro “Whats com Raul Seixas e outros papos”, em 16 de agosto de 2019, em Rondonópolis – Mato Grosso, com a presença da Putos Brothers Band, que tem na sua composição o musicista Agnaldo Araújo e o gaitista e fã número um do Raul Seixas, o mito Sylvio Passos. São acontecimentos ligados ao Raul ou não, mas que de certa forma lhe trouxeram lembranças dele. “Posso afirmar que tem muita verdade no livro, mas aviso que ela não é absoluta. Acho que vai ser bem bacana a leitura”, diz Hermélio Silva. O autor afirma que é um livro que nunca vai terminar de escrever e isso para ele já é muito bom, pois estará sempre conectado a esse assunto que tanto lhe apraz. Hermélio Silva é formado em Marketing, escritor com 21 livros publicados, membro fundador e vice-presidente da Academia Rondonopolitana de Letras – ARL, cadeira nº 06 e Membro do Comitê Nacional de Cerimonial Público – CNCP. “Um grande amigo que temos em comum, o adora, e sempre diz que ele é uma pessoa espirituosa, por isso o escolheu para escrever sobre ele. Se um espírito que vive em plano superior o escolheu para escrever sua história, com certeza Raul Seixas deve estar se sentindo honrado por ter parte de sua história escrita nos livros desse grande escritor”, disse Edson Cândido Caetano, empresário e médium, em 1997.'
    },
    {
        nome: 'O Esoterismo na obra de Raul Seixas',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087452/Livros/download_juae0e.jpg',
        resumo: '	Entenda melhor as músicas de Raul Seixas. Saiba o que você está cantando.'
    },
    {
        nome: 'A Paixão Segundo Raul Seixas',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087527/Livros/raul_seixas_tltql6.jpg',
        resumo: '	A Paixão Segundo Raul Seixas é uma obra de ficção, baseada em fatos reais. Ela busca reconstruir a história oculta da Sociedade Alternativa de Raul Seixas, que tem profundas relações com o passado remoto das grandes sociedades secretas do mundo, como o Priorado de Sião, os Cavaleiros Templários e a Ordo Templi Orientis. Mas também tem relações mais fortes ainda com os movimentos da Nova Era, como a New Utopian de John Lennon, o Movimento Hippie e a Era de Aquarius. No entanto, a morte muitas vezes trágica e solitária de vários de seus'
    },
    {
        nome: 'Raul Seixas - Metamorfose ambulante',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087667/Livros/_1e215b24ce372ed2cf36d48739eada568a23af1a_g8dvc1.jpg',
        resumo: '	O livro mostra um Raul que os fãs não conheceram. Seu fascínio por filosofia e a inspiração para músicas que revolucionaram o rock nacional, e a criação do "Maluco Beleza", reverenciado por antigos e novos admiradores de sua genialidade.    Sylvio Passos, que conviveu nove anos com Raul Seixas, comenta: "Nesse livro vamos ver que Raul conseguiu passar conceitos de filósofos, de Platão a Sartre, tendo obsessão pelo niilista alemão Arthur Schopenhauer e o hermético Crowley".    Algumas revelações do livro:    - A metamorfose ocorre com a leitura do filósofo niilista Schopenhauer.    - Em 1968 citou Schopenhauer na composição Trem 103: Consciente de voltar por onde vim. O trem, a composição, veículo da morte-renascimento, torna-se presença constante na sua obra. Aparece com destaque em 1973 (A hora do trem passar) e em 1974 (Trem das sete). Em 1989, ano de sua morte, Raul expressou o desejo de mudar a direção do trem (Carpinteiro do universo).    - Em alguns momentos citou Protágoras, Sócrates, Platão, Sartre, mas suas principais fontes foram o hermético Crowley e o pessimista Schopenhauer.    - De Crowley, Raul abstraiu a proposta místico-liberal. Levou-a ao público a partir de 1974 como Sociedade Alternativa. Mesmo sem a benção da censura, recitava os versos da Lei de Thelema ou Lei da Vontade (de Crowley e Schopenhauer) em meio ao refrão da Sociedade.    - Mosca na sopa é Schopenhauer (Se a mosca, que agora zumbe em torno de mim, morre à noite, e na primavera zumbe outra mosca nascida do seu ovo, isso é em si a mesma coisa), mas para não deixar dúvida sobre sua fonte mais rica, em 1983 pegou do filósofo um trecho do capítulo Morte - do livro Dores do Mundo - para usar em Nuit: (Quão longa é a noite do tempo sem limites, comparada ao curto sonho da vida).'
    },
    {
        nome: 'Raul Seixas Forever - Madiel Figueiredo',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087717/Livros/_bd15acd5d58febbd1e810b6190714e710392b5be_a84vzn.jpg',
        resumo: '	Esta obra foi elaborada em prosa e verso. A obra relata o nascimento, a vida e a morte de Raul Seixas. Não tem a pretensão de uma obra biográfica; tampouco sou biográfo e sim um poeta existencialista. Como fã de Raul Seixas, no entanto, fui durante anos memorizando fatos, curiosidades a respeito desse ídolo. O que caia em minhas mãos (reportagens, entrevistas...) eu saborosamente ia deglutindo tudo. Também me ajudou muito o contato direto que tive com o Baú do Raul [...] Esta minha admiração por Raul Seixas iniciou-se após assistir pela TV, no programa Flávio Cavalcante, à divulgação da música Ouro de Tolo pelo próprio Raul, em 1973. A partir daí tornei-me fã incondicional desse imortal intérprete, cantor e compositor do rock-baião brasileiro.'
    },
    {
        nome: 'Raul Seixas - Eu Quero Cantar por Cantar',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087757/Livros/489659df956a5111bb05c4d3247842bf926d1470_fiyvql.jpg',
        resumo: '	Raul Seixas:Eu quero cantar por cantar responde tudo isso e muito mais! O mais influente dos roqueiros brasileiros tem neste livro a sua mais completa discografia, filmografia e cronologia, além de relacionar todas suas composições gravadas por outros artistas. Apresenta ainda várias fotos inéditas e um estudo crítico que demonstra porque Raul é respeitado por personalidade tão diferentes quanto Caetano Veloso, Zezé di Camargo, J.Ramos Tinhorão, Alceu Valença, Cazuza e Rita Lee.'
    },
    {
        nome: 'Luar Aos Avessos',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087886/Livros/download_1_z0roeb.jpg',
        resumo: '	O livro reportagem Luar Aos Avessos, do jornalista Angelo Sastre, é o resultado de uma pesquisa que durou cerca de dois anos e meio. Neste período, foram analisados materiais de imprensa e documentos pessoais, além de entrevistas com pessoas que tiveram ligações diretas com o cantor (mãe, amigos de infância, parceiros musicais, ex-esposa, entre outros). O livro “Luar Aos Avessos” procura revelar a “outra face” do cantor e compositor Raul Seixas, que revolucionou a música brasileira. Para isso, o autor levanta o debate sobre vários “mitos” que foram construídos ao longo de sua carreira. O resultado é uma reunião dos principais acontecimentos da vida do cantor, que são descritos através de reconstituições e depoimentos de pessoas que conviveram com Raul Seixas. Neste trabalho, o jornalista reconstitui os principais acontecimentos da vida do cantor, que vão desde sua infância até o dia de sua morte e levanta o debate sobre vários “mitos” relacionados com a carreira do cantor. Entre os fatos de maior relevância estão os cinco casamentos, o envolvimento com magia negra, a prisão no DOPS, a expulsão da gravadora CBS, a luta contra o álcool e as drogas, o “anúncio” de sua morte através das letras de músicas e até supostos “milagres”. Tudo isso, através de relatos descontraídos que envolvem o leitor desde as primeiras linhas até o último capítulo.'
    },
    {
        nome: 'Vivendo a Sociedade Alternativa: Raul Seixas e o Seu Tempo',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660087936/Livros/41mx1eCWGhL._SX331_BO1_204_203_200__pwua5h.jpg',
        resumo: '	Tendo como pano de fundo a carreira de Raul Seixas, o autor passeia pelos movimentos alternativos das décadas de 1960 e 1970: a contracultura, as novas espiritualidades, a Sociedade Alternativa. O preenchem uma das maiores lacunas de nossa cultura popular, que é a falta de pesquisas e documentos sobre os movimentos da juventude brasileira na segunda metade do século XX.'
    },
    {
        nome: 'As aventuras de Raul Seixas na Cidade de Thor',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660088032/Livros/AS_AVENTURAS_DE_RAUL_SEIXAS_NA_CIDADE_DE_1362882228B_mmw8s8.jpg',
        resumo: '	Existem dezenas de livros escritos sobre Raul Seixas - biografias, análises, homenagens, coletâneas de textos e letras, etc. Mas Raul, que em criança, além de sonhar em ser cantor de rock, também queria ser escritor, só viu em vida um único livro seu ser publicado: As Aventuras de Raul Seixas na Cidade de Thor. Esse livro, lançado em 1983, traz um vasto material entre textos e desenhos que ele guardava desde a infância, e coisas que ele foi escrevendo mais tarde, e até então inéditas. O livro foi lançado por uma pequena editora, Shogun Arte, que pertencia a Paulo Coelho, que na época ainda não era um escritor famoso, sendo mais conhecido como ex-parceiro de Raul. É de Paulo Coelho, aliás, o prefácio do livro, que começa assim: "Blade Runners. Ano de 2020 na cidade de Thor. Os caçadores de androides saem da cabeça de William Bourroughs e invadem as ruas superpolusosas, em busca de suas vítimas. A terra sacode-se nos eixos, já não há mais espaços. Brasil 1955. A cidade de Thor começa a ganhar contornos entre as colinas e praias de Salvador. A Quarta Dimensão está definitivamente plugada no Universo-Terra, mas poucas pessoas são capazes de perceber o fenômeno. Raul Seixas, com 13 anos, estabelece contatos imediatos com esta Quarta Dimensão e começa a escrever os cadernos/documentos. Tudo que nossa geração vive naquela época vai sendo registrado pouco a pouco por Raul'
    },
    {
        nome: 'O Trem das Sete',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660088076/Livros/O_TREM_DAS_SETE_1256333445B_wbgcur.jpg',
        resumo: '	O Trem das Sete chega na estação pra buscar aqueles que querem viajar. Não precisa passagem nem mesmo bagagem pra embarcar nesse trem. São sete viagens, sete autores à procura de um personagem, sete visões de uma mesma personalidade multifacetada: Raul Seixas.  Este é o trem que vem de longe trazendo a chama do Novo Aeon. Quem vai ficar? Quem vai partir?'
    },
    {
        nome: 'Gente do Século',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660088136/Livros/livro_raul_g25w1y.jpg',
        resumo: '	As músicas de Raul “maluco beleza” Seixas são referências para várias gerações - tanto que já foram regravadas por artistas como Caetano Veloso, Cássia Eller e Titãs - e suas letras passeiam no imaginário popular. Quem não tem na ponta da língua os versos de “Metamorfose Ambulante” ou “Sociedade Alternativa”? O que pouca gente sabe é que, antes de estourar nas paradas, Raul teve uma infância peculiar na cidade de Salvador, decifrada em detalhes saborosos pela biografia da coleção Gente do Século, que será vendida com a edição 16 de Gente.  Raulzito era do tipo moleque levado e protagonizou travessuras históricas - como quando sua mãe o encontrou trancado em uma geladeira, com o nariz sangrando. Raul e seu irmão mais novo, Plínio, haviam apostado para ver quem conseguia ficar mais tempo ali trancado.  Histórias divertidas como essa ajudam a desvendar a personalidade irreverente que havia detrás do artista Raul Seixas, que desde o lançamento do primeiro disco, em 1968, traçou uma trajetória sólida. Na década de 70, ele se consagraria como um compositor capaz de filtrar influências do repente e baião em uma moldura rock’n’roll. Com público fiel, foi o primeiro artista brasileiro a ter um disco lançado por iniciativa de um fã-clube, a compilação de gravações raras Caroço de Manga, de 1985. Quando faleceu, vítima de uma parada cardíaca e respiratória em agosto de 1989, foi velado por 5 mil pessoas em São Paulo. Suas peripécias - musicais e pessoais - são narradas nessa biografia em linguagem tão acessível como a de suas canções, eternizadas na memória dos brasileiros.'
    },
    {
        nome: 'Coisas do Coração - Minha História com Raul Seixas',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660088185/Livros/71e3W9ke-bS_q6hzfl.jpg',
        resumo: '   Um relato emocionante, tocante e íntimo do período em que Kika Seixas viveu com um dos maiores ícones do rock brasileiro. A ideia do livro surgiu a partir do desejo de Kika de deixar registrada para sua filha, Vivian Seixas, a história não somente do ídolo, mas do filho, irmão, marido e pai Raul. A cada página, o leitor descobre dramas cotidianos, histórias engraçadas e divertidas, muito amor, cumplicidade e fatos desconhecidos para a maioria do público. A obra traz cartas que Kika e Raul trocaram desde que se conheceram até sua morte, além das correspondências escritas por Dona Maria Eugênia, mãe do artista. Coisas do Coração, que dá nome à obra, é também o título de uma das músicas mais lindas lançadas por Raul Seixas, composta em parceria com Cláudio Roberto. No livro, Kika Seixas faz uma revelação: “Eu fui apenas a inspiração, mas ele acabou colocando meu nome na parceria.”'
    },
    {
        nome: 'Por Uma Teoria Do Direito E Rock',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660088237/Livros/aa0f1e51-3b99-4f81-ae47-34cf8079d6ee9786555104868_W_gkyjzy.jpg',
        resumo: '   O livro em suas mãos é uma ousada provocação aos estudos de direito e arte no país. Fruto da dissertação de Mestrado em pasme Direito, de Amanda Muniz Oliveira, a obra propõe uma teoria de direito e rock baseada em um referencial teórico pouco estudado nas academias jurídicas brasileiras: os Estudos Culturais. Utilizando como objeto de estudo Raul Seixas, o pai do rock brasileiro, a autora pretende demonstrar que o cantor propagava em suas canções distintas representações sobre o direito, reflexo direto das lutas e tensões sociais nas quais o artista se insere. Entretanto, mais que apresentar os resultados da pesquisa sobre o direito em Raul Seixas, o presente livro ainda tem a ousadia de propor uma possível teoria de direito e rock, a partir da valorização da cultura pop em geral, demonstrando como o suposto menor valor artístico dessas produções são baseados em discriminações vazias e limitantes. Em outras palavras, seja você leitora/leitor do funk, do rap, da cultura nerd, do RPG ou dos games, esperamos que a obra lhe forneça fundamentos para demonstrar porque o direito deve se preocupar também com essas manifestações culturais, tão legítimas e importantes quanto Shakespeare, Tolstói ou Dostoiévski.'
    },
    {
        nome: 'Sociedade Alternativa!!!',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660088291/Livros/41mx1eCWGhL_mdt3kg.jpg',
        resumo: '   Como diria Raul Rock Seixas nosso saudoso, querido eterno e amado maluco beleza voçê pode não acreditar na sociedade alternativa, todavia, ela sempre existiu e sabe aonde? Dentro de voçê. Nesse livro eu José Henrique Maia considerado por muitos amigos e fãs até então a lenda viva da soul music, do funk e do rock and roll irei mostrar e provar para cada leitor e brasileiro principalmente que a sociedade alternativa é um sonho de todos nós que deve e pode se tornar realidade. É lógico que diferente mas nem tanto daquela idealizada e proposta por Raul e Paulo Coelho inspirada no livro da lei e na teoria de thelema de Aleister Crowley o grande mago, bruxo do século XX.. Através da leitura desse livro eu irei mostrar e provar detalhadamente como ela pode se tornar uma realidade e que só depende de cada um de nós juntos unidos lutarmos para que ela possa acontecer mesmo por que como diria o próprio Raul: Sonho que se sonha só é só um sonho, sonho que se sonha junto é realidade.Portanto pessoal Viva para sempre a sociedade alternativa.'
    },
    {
        nome: 'Coleção Mitos do Pop Raul Seixas',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660088522/Livros/_35313c737bedf3088dc7c8181955860eb35efb44_a8vf5u.jpg',
        resumo: '   Raul Seixas por meio de entrevistas'
    },
    {
        nome: 'Raul Seixas - a Mosca na Sopa da Ditadura Militar, Censura, Tortura...',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660088601/Livros/51N8e0Q0WlL._SX335_BO1_204_203_200__egjym3.jpg',
        resumo: '   O objetivo da obra é analisar a carreira artística do cantor e compositor Raul Seixas (1945-1989), tratando as relações da Censura com as músicas do artista no período entre 1973 e 1974.'
    },
    {
        nome: 'O baú do Raul, de Raul Seixas',
        imagem: 'https://res.cloudinary.com/dib0twra5/image/upload/v1660088688/Livros/71HxxdpM87S_hv0o4x.jpg',
        resumo: '	Diário do mais popular cantor brasileiro de rock, este livro revela aspectos da intimidade de Raul Seixas e de sua inquieta atividade criativa.'

    },
]

export default livros