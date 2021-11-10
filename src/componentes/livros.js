const livros = [
    {
        nome: 'Raul Seixas: Filosofias políticas e lutas, de Mário Lucena',
        imagem:'https://blog.estantevirtual.com.br/wp-content/uploads/Raul-Seixas-Filosofias-poli%CC%81ticas-e-lutas.jpg',
        resumo: '	Esta obra compila o pensamento poético e filosófico do roqueiro baiano através de análises e citações de seus versos – trechos de 163 letras de Raul (quatro inéditas) figuram no livro – e entrevistas. Uma profunda análise filosófica da mensagem do Maluco Beleza.'
    },
    {
        nome: 'Raul Seixas por ele mesmo, de Raul Seixas',
        imagem:'https://blog.estantevirtual.com.br/wp-content/uploads/Raul-Seixas-por-ele-mesmo.jpeg',
        resumo: '	Elaborado a partir de entrevistas, letras de músicas, pensamentos e declarações do cantor, produzidos no curto percurso de sua vida, trata-se, curiosamente, de um livro autobiográfico, embora não tenha sido escrito diretamente por Raul Seixas. Todo o material de pesquisa e sua organização foi realizado pelo fundador do Raul Rock Club/Raul Seixas Oficial Fã-Clube, Sylvio Passos, que foi grande amigo e companheiro do cantor.'
    },
    {
        nome: 'Raul Seixas: a Trajetória de um Ídolo',
        imagem:'https://bazardascoisas.loja2.com.br/img/cb803ca6d64b02bf5ef1e10ffca10261.jpg',
        resumo: '	ESTE LIVRO É UM DEPOIMENTO, UM APANHADO DE MEMÓRIA QUE RELACIONA SENTIMENTO, EMOÇÃO E OBJETIVIDADE DOS FATOS. CONTEM FOTOS, ETC'
    },
    {
        nome: 'Raul No Caldeirão',
        imagem:'https://http2.mlstatic.com/livro-raul-no-caldeiro-raul-seixas-raulzito-rock-D_NQ_NP_353311-MLB20549153501_012016-O.webp',
        resumo: '	David Eduardo Martins, em uma abordagem sutil, nos leva a visitar o aspecto simbólico do criativo imaginário existencial de Raul Seixas, fazendo uma análise hermenêutica de suas músicas. Raul no Caldeirão mostra a necessidade que tem o homem de se achar no Universo, de tentar encontrar-se. E este caminho é todo sinalizado pelos símbolos arquitípicos, que nos são próprios, e, ao mesmo tempo, comum a todos. É um passeio entre vários conceitos místicos do inconsciente coletivo, focado no processo de individuação, passando pelo esoterismo e pelo cristianismo, nos convidando a reflexão e aos sonhos.'
    },
    {
        nome: 'Raul Seixas: Uma antologia, de Sylvio Passos e Toninho Buda',
        imagem:'https://blog.estantevirtual.com.br/wp-content/uploads/Raul-Seixas-Uma-antologia-e1467129866464.jpg',
        resumo: '	Aqui estão presentes depoimentos de amigos e do próprio Raul, além da sua biografia e, é claro, a discografia completa. O que significa “Sociedade Alternativa’? Quem foi Aleister Crowley, o homem que influenciou tanto a cabeça de Raulzito? E o novo Aeon? Quantos parceiros Raul teve? Qual foi o último? O que ele achava de Deus e do Diabo?'
    },
    {
        nome: 'Raul Rock Seixas, de Kika Seixas',
        imagem:'https://blog.estantevirtual.com.br/wp-content/uploads/raul-rock-seixas-224x300.jpg',
        resumo: '	Este livro escrito por Kika Seixas, última mulher de Raulzito, é uma bonita homenagem ao astro, e compreende toda a sua trajetória. De fotos de infância aos seus últimos registros a cópias de músicas escritas à mão pelo músico, passando por imagens de objetos pessoais e textos inéditos, este livro faz um apanhado geral da vida do artista, desde a Bahia ao sucesso nacional.'
    },
    {
        nome: 'O Baú do Raul Revirado',
        imagem:'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_25c1121e3b8958921c8c0e04fa9bd9347040822c.jpg',
        resumo: '	 221 páginas em brochura. Livro com Corte, borda e páginas com manchas levemente escurecidas. MC06. Sem CD. Sinopse: O baú em que Raul Seixas guardava pequena lembranças de sua carreira está finalmente ao alcance do público. Esse livro reúne fotos e manuscritos inéditos de um dos maiores ídolos do Brasil. Conhecer a história de Raul e do rock nacional através de seus objetos pessoais irá agradar até quem nasceu há dez mil anos atrás.'
    },
    {
        nome: 'Raul Seixas Musicalmente Falando',
        imagem:'https://cache.skoob.com.br/local/images//EhIN8n9cdUP4PUt8bkrR-m6jnLw=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/36620/RAUL_SEIXAS_MUSICALMENTE_FALANDO_1247588763B.jpg',
        resumo: '	Meu primeiro livro foi justamente sobre Raul,"eu quero cantar por cantar",onde procurei não só reunir e analisar tudo que descobri e pesquisei em vinte anos,após descobrir Raul em 1973,como também complementar outros livros anteriores sobre Dom Raulzito.A obra e a vida do ultraversátil Raul sempre permitem interpretações novas,e este livro da thaís(que,por concidência,também deve a Raul-e à Nova Sampa-Sua grande estréia no mundo litérário)também pretende complementar todos os outros trabalhos escritos sobre Raul,inclusive o meu.'
    },
    {
        nome: '30 Anos de Rock: Raul Seixas e a cultura brasileira',
        imagem:'http://www.desfrutecultural.com.br/wp-content/uploads/2019/09/RAUL-capa-1024x841.jpg',
        resumo: '	Em pouco mais de 400 páginas, Tiago revela os bastidores do programa que prestou uma homenagem a Seixas. O repórter viajou por algumas cidades, bateu um papo com amigos, fãs, familiares e artistas que conviveram de perto com o lendário Raul. O livro já foi lançado em Salvador, São Paulo, Goiânia, Curitiba, Florianópolis, entre outras regiões.'
    },
    {
        nome: 'Raul Seixas: Não diga que a canção está perdida',
        imagem:'https://images-americanas.b2w.io/produtos/imagens/175481395/175481619_1GG.jpg',
        resumo: '	Como Raulzito, o garoto de classe média de Salvador que era fã de Elvis Presley, se transformou em Raul Seixas, um dos maiores ícones da cultura pop brasileira? Como o jovem sonhador, depois de “passar fome por dois anos na cidade maravilhosa”, conquistou as gravadoras e o grande público? E como o criador de “Maluco Beleza” e “Sociedade Alternativa”, responsável por versos que se confundem com a contracultura dos anos 1970, foi derrotado pelas drogas e pelo alcoolismo na década seguinte, mas sem deixar de produzir hits inesquecíveis? Jotabê Medeiros, autor de Apenas um rapaz latino-americano, cultuada biografia de Belchior, e crítico musical de larga experiência, responde a essas perguntas e apresenta, neste livro vertiginoso, a primeira biografia de Raul à altura de sua importância.'
    },
    {
        nome: 'Krig-Há, Bandolo! Cuidado, Aí Vem Raul Seixas',
        imagem:'https://images-americanas.b2w.io/produtos/01/00/sku/8690/4/8690425_1GG.jpg',
        resumo: '	Partindo da questão da idolatria, e tomando como base a figura-ícone de Raul Seixas e os diversos fã-clubes que o roqueiro deixou espalhados pelo Brasil, Rosana da Câmara Teixeira descreve um universo de raulseixistas e raulmaníacos de todos os tipos - ajudando a desvendar os mecanismos envolvidos nessa forma de adesão e sociabilidade características da sociedade contemporânea, e ao mesmo tempo lançando uma luz sobre a vida e a obra do artista.'
    },
    {
        nome: 'Livro - Raul Seixas: a História que Não Foi Contada',
        imagem:'https://images-americanas.b2w.io/produtos/01/00/item/5393/5/5393562_1GG.jpg',
        resumo: `	"A arte é o espírito social de uma época." Frase dita por alguém que enquanto esteve entre nós, de uma maneira ou de outra, tentou incansavelmente confirmá-la. Os seus últimos 10 anos de passagem por este planeta foram repletos de sucessos, desilusões, casamentos e descasamentos, realizações e fracassos, tudo isso regado pela velha trilogia "sexo, drogas e rock'n roll". Leia a história que não foi contada, desvendada por Elton Frans, que participou durante uma década da vida de um mito chamado Raul Seixas.`
    },
    {
        nome: ' O Protesto dos Inconscientes – Raul Seixas e a Micropolítica',
        imagem:'https://http2.mlstatic.com/livro-raul-seixas-raulseixismo-raro-D_NQ_NP_774175-MLB30321576872_052019-V.webp',
        resumo: '	Esse trabalho reconstituiu a trajetória do roqueiro Raul Seixas visando compreender a construção do mito que se tornou, problematizando sua inserção no cenário musical, seu diálogo com outros movimentos artísticos, as temáticas que fez uso ao longo das décadas de 70 e 80. Tornando-se um mito, Raul Seixas deixou em suas músicas as bases do que denominou Raulseixismo, que ganha cada vez mais adeptos. Para analisarmos sua mitificação procuramos os fundamentos de sua filosofia e a reapropriação do seu discurso pelos fãs, seguidores ou simplesmente, raulseixistas.'
    },
    {
        nome: 'Raul Seixas - Por Trás Das Canções',
        imagem:'https://images-americanas.b2w.io/produtos/01/00/img2/147796/0/147796082_1GG.jpg',
        resumo: '	Um mergulho por trás das principais composições de um dos maiores nomes do rock brasileiro, com novas histórias e fotografias inéditas.  Em de agosto de 2019 completa-se trinta anos da morte de Raul Seixas, considerado por muitos o pai do rock brasileiro. Mesmo após todo esse tempo sua influência na música brasileira e a paixão de seus fãs permanecem, mantendo viva a figura do Maluco Beleza e de sua obra, que segue influenciando músicos e sofrendo releituras até os dias de hoje.  Em Raul Seixas: Por trás das canções, Carlos Minuano - autor de Tons de Clô, biografia do apresentador Clodovil - vai, através das letras de Raul e de sua relação com a composição, abordar a vida e a carreira do artista de uma forma precisa e íntima, nunca feita antes. O livro também conta com depoimentos de amigos, parceiros de trabalho e familiares de Raul e com o relato de uma inusitada e incrível turnê do disco Ouro de Tolo por dois garimpos no interior do Pará e fotos inéditas dessa viagem. Uma jornada pela memória de um dos brasileiros mais ilustres e peculiares de todos os tempos, guiada pela poesia única de suas composições.  As fotos de acervo de família, manuscritos de letras de Raul e da viagem pelo Pará ilustram a incrível narrativa da vida desse ícone da música brasileira.  Sobre o Autor: Carlos Minuano é Jornalista, pós-graduado em cinema e começou a carreira em 1997. Trabalhou como repórter para veículos como Folha de S. Paulo, Rolling Stone, entre outros. Atualmente é colaborador do UOL e escreve roteiros para televisão e cinema. É autor de Tons de Clô, biografia de Clodovil Hernandes também publicada pela editora BestSeller.'
    },
    {
        nome: 'Dossiê Raul Seixas',
        imagem:'http://lojasaraiva.vteximg.com.br/arquivos/ids/777079/1001894573.jpg?v=636975021083470000',
        resumo: '	O tempo faz a medida de cada artista. Quando sua obra é capaz de transcender o tempo é porque, de fato, ela possui qualidades para ser chamada de Arte. Nesse contexto, sem nenhuma dúvida, se insere a obra de Raul Seixas, que o consagrou como um verdadeiro precursor do rock nacional.'
    },
    {
        nome: 'Raul Seixas, O Verbalóide',
        imagem:'https://lojasaraiva.vteximg.com.br/arquivos/ids/2178628-400-400/1001077092.jpg?v=637007863383770000',
        resumo: '	Raul Seixas, O Verbalóide é uma das mais completas biografias do cantor e compositor baiano falecido em 1989 e que transformou-se no maior mito que a música brasileira ja criou. Contém toda a trajetória pessoal e artística de Raul Seixas, bem como uma esplendorosa viagem ao universo filosófico de sua obra poética e musical, desenhos inéditos e fotos nunca dantes publicadas, poemas e capítulos especiais de grandes nomes da MPB admiradores confessos da obra raulseixista. Com mais de 600 páginas este trata-se de um livro escrito por um dos maiores fãs de Raul Seixas, fundador do primeiro fã clube brasileiro do cantor e filósofo, além de ter sido amigo pessoal do ídolo, o autor, Isaac Soares de Souza é jornalista, poeta e compositor. Já publicou as biografias RAUL SEIXAS, O METAMORFÔNICO (1995) e ZÉ RAMALHO: O PROFETA DO TERCEIRO MILÊNIO (2009). Esta biografia foi escrita em 1995/2010, revista e ampliada diversas vezes devido ao tempo decorrido desde o seu término e a demora em editá-la por causa da falta de apoio das grandes editoras. Finalmente, através do clube de autores este magnífico livro pode agora ser editado. Para os admiradores da obra poética, musical e filosófica de Raul Seixas, esta biografia é mais do que importante, pois trata-se de um documento vivo da história deste que foi, sem dúvida, o maior cantor / compositor brasileiro de todos os tempos na historiografia da música brasileira. Imperdível. Adquira já o seu exemplar e viaje com Raul Seixas para outras dimensões astrais, maágicas e filosóficas.'
    },
    {
        nome: 'NOVO AEON: RAUL SEIXAS NO TORVELINHO DO SEU TEMPO',
        imagem:'https://img.travessa.com.br/livro/BA/fd/fdfae57b-8623-4df3-9c61-f732170f6a95.jpg',
        resumo: '	O assunto que ora nos reúne e convida a pensar é a concepção de Novo Aeon apresentada por Raul Seixas. Elaborada pelo poeta e mago inglês Aleister Crowley no início do século XX, a doutrina do Novo Aeon impulsionou trajetórias existenciais de grande força contestatória, influenciando a contracultura das décadas de 1960 e 1970. Raul, que acompanhou o movimento e propôs uma Sociedade Alternativa, lançou sua criação poética à condição de espírito do seu tempo.'
    },
    {
        nome: 'Raul Seixas, Rock Book',
        imagem:'http://lucianoalves.com.br/wp-content/uploads/2012/10/Raul-Seixas-Rock-Book-.jpg',
        resumo: '	Songbook com sucessos de Raul Seixas. Edição Griphus, 1994, 124 páginas. Contém linhas melódicas e, junto, letras, cifras e diagramas para violão. Algumas canções trazem ainda linhas de acompanhamento ou o baixo na clave de fá. Contém ainda 20 páginas de informações e fotografias, antes das partituras. Trata-se de um perfeito exemplar da primeira edição, que veio com um poster do artista. Apresenta apenas leve escurecimento nos cortes, pela ação do tempo e assinatura na página de rosto.'
    },
    {
        nome: ' Raul Seixas: O Sonho da Sociedade Alternativa',
        imagem:'https://cache.skoob.com.br/local/images//8m8S0S3xzcd-mYyxtVTXb4HSVno=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/12040/RAUL_SEIXAS_O_SONHO_DA_SOCIEDADE_ALTERN_1233556504B.jpg',
        resumo: '	Sonho que se sonha junto O livro editado pela Martin Claret apresenta muitas falhas editoriais, mas ainda assim é um achado precioso para quem quer se aprofundar na obra de Raul.  De inicio parece apenas um caça-níqueis, publicado em celebração no aniversário de morte do cantor, meio que encomendado pela editora à autora Luciane Alves. Porém, o livro é mais do que isso. É uma análise de todo o conjunto da obra, filosofia, ideias e projetos do Maluco Beleza.  A autora começa sabiamente contextualizando o mundo socio-politico-cultural da época em que Raul começou sua carreira. Eram tempos de ditadura, e Luciane mostra com precisão a forma que a censura e repressão influenciou a rebeldia do cantor. Depois, associando a rebeldia com a maior influencia que Raul Seixas recebeu - o Livro de Lei, de Alester Crowley - vemos como as letras de suas músicas eram sempre direcionadas a um único pensamento, uma única filosofia e ideologia: a propagação da Sociedade Alternativa, uma visão de Raul para o Novo Aeon.  São páginas e páginas de interpretações de letras, comparando com entrevistas e depoimentos de amigos, mostrando um Raul que poucos conheceram. Vemos um Raul sonhador, ao mesmo tempo com medo. Um exemplo era seu medo de assuntos sobrenaturais, ao contrário do que se imagina. Mas também descobrimos que era um gênio ainda mais fascinante do que se nota pelas composições.  Também temos uma boa introdução sobre o que é o Livro da Lei, a Thelema e o Novo Aeon, de Crowley, e a forma que isso está sempre presente na obra de Raul.  Além disso, temos informações preciosas e raras sobre o projeto da Cidade das Estrelas e o Manifesto da Sociedade Alternativa.  Enfim, é uma obra que merecia uma reedição, pois novos materiais sobre Raul surgiram após sua publicação, e algumas falhas poderiam ser corrigidas.'
    },
    {
        nome: 'Whats Com Raul Seixas - Livro',
        imagem:'https://http2.mlstatic.com/whats-com-raul-seixas-livro-D_NQ_NP_824222-MLB32037468935_092019-F.webp',
        resumo: '	O escritor Hermélio Silva lançou o livro “Whats com Raul Seixas e outros papos”, em 16 de agosto de 2019, em Rondonópolis – Mato Grosso, com a presença da Putos Brothers Band, que tem na sua composição o musicista Agnaldo Araújo e o gaitista e fã número um do Raul Seixas, o mito Sylvio Passos. São acontecimentos ligados ao Raul ou não, mas que de certa forma lhe trouxeram lembranças dele. “Posso afirmar que tem muita verdade no livro, mas aviso que ela não é absoluta. Acho que vai ser bem bacana a leitura”, diz Hermélio Silva. O autor afirma que é um livro que nunca vai terminar de escrever e isso para ele já é muito bom, pois estará sempre conectado a esse assunto que tanto lhe apraz. Hermélio Silva é formado em Marketing, escritor com 21 livros publicados, membro fundador e vice-presidente da Academia Rondonopolitana de Letras – ARL, cadeira nº 06 e Membro do Comitê Nacional de Cerimonial Público – CNCP. “Um grande amigo que temos em comum, o adora, e sempre diz que ele é uma pessoa espirituosa, por isso o escolheu para escrever sobre ele. Se um espírito que vive em plano superior o escolheu para escrever sua história, com certeza Raul Seixas deve estar se sentindo honrado por ter parte de sua história escrita nos livros desse grande escritor”, disse Edson Cândido Caetano, empresário e médium, em 1997.'
    },
    {
        nome: 'O Esoterismo na obra de Raul Seixas',
        imagem:'https://scontent.ftjl2-1.fna.fbcdn.net/v/t1.6435-9/198790158_10161324866058228_4891328637660621553_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=8bfeb9&_nc_ohc=A0UUyg_FrTsAX8ZLdrb&tn=_H_xfO6Cc0MX7Bok&_nc_ht=scontent.ftjl2-1.fna&oh=09db0f9cf17ac9ed0576ca6c06ea5ec8&oe=613C35FA',
        resumo: '	Entenda melhor as músicas de Raul Seixas. Saiba o que você está cantando.'
    },
    {
        nome: 'A Paixão Segundo Raul Seixas',
        imagem:'https://cache.skoob.com.br/local/images//C04W3A0AOySpMKorQkWSQ0Lm7ZY=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/298794/A_PAIXAO_SEGUNDO_RAUL_SEIXAS_1359398027B.jpg',
        resumo: '	A Paixão Segundo Raul Seixas é uma obra de ficção, baseada em fatos reais. Ela busca reconstruir a história oculta da Sociedade Alternativa de Raul Seixas, que tem profundas relações com o passado remoto das grandes sociedades secretas do mundo, como o Priorado de Sião, os Cavaleiros Templários e a Ordo Templi Orientis. Mas também tem relações mais fortes ainda com os movimentos da Nova Era, como a New Utopian de John Lennon, o Movimento Hippie e a Era de Aquarius. No entanto, a morte muitas vezes trágica e solitária de vários de seus'
    },
    {
        nome: 'Raul Seixas - Metamorfose ambulante',
        imagem:'https://cache.skoob.com.br/local/images//JCWWninTM0LyJuGx7vWDlnjaa68=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/82071/RAUL_SEIXAS__METAMORFOSE_AMBULANTE_1264298630B.jpg',
        resumo: '	O livro mostra um Raul que os fãs não conheceram. Seu fascínio por filosofia e a inspiração para músicas que revolucionaram o rock nacional, e a criação do "Maluco Beleza", reverenciado por antigos e novos admiradores de sua genialidade.    Sylvio Passos, que conviveu nove anos com Raul Seixas, comenta: "Nesse livro vamos ver que Raul conseguiu passar conceitos de filósofos, de Platão a Sartre, tendo obsessão pelo niilista alemão Arthur Schopenhauer e o hermético Crowley".    Algumas revelações do livro:    - A metamorfose ocorre com a leitura do filósofo niilista Schopenhauer.    - Em 1968 citou Schopenhauer na composição Trem 103: Consciente de voltar por onde vim. O trem, a composição, veículo da morte-renascimento, torna-se presença constante na sua obra. Aparece com destaque em 1973 (A hora do trem passar) e em 1974 (Trem das sete). Em 1989, ano de sua morte, Raul expressou o desejo de mudar a direção do trem (Carpinteiro do universo).    - Em alguns momentos citou Protágoras, Sócrates, Platão, Sartre, mas suas principais fontes foram o hermético Crowley e o pessimista Schopenhauer.    - De Crowley, Raul abstraiu a proposta místico-liberal. Levou-a ao público a partir de 1974 como Sociedade Alternativa. Mesmo sem a benção da censura, recitava os versos da Lei de Thelema ou Lei da Vontade (de Crowley e Schopenhauer) em meio ao refrão da Sociedade.    - Mosca na sopa é Schopenhauer (Se a mosca, que agora zumbe em torno de mim, morre à noite, e na primavera zumbe outra mosca nascida do seu ovo, isso é em si a mesma coisa), mas para não deixar dúvida sobre sua fonte mais rica, em 1983 pegou do filósofo um trecho do capítulo Morte - do livro Dores do Mundo - para usar em Nuit: (Quão longa é a noite do tempo sem limites, comparada ao curto sonho da vida).'
    },
    {
        nome: 'Raul Seixas Forever - Madiel Figueiredo',
        imagem:'https://http2.mlstatic.com/livro-raul-seixas-forever-madiel-figueiredo-raulzito-D_NQ_NP_877152-MLB27619750518_062018-W.webp',
        resumo: '	Esta obra foi elaborada em prosa e verso. A obra relata o nascimento, a vida e a morte de Raul Seixas. Não tem a pretensão de uma obra biográfica; tampouco sou biográfo e sim um poeta existencialista. Como fã de Raul Seixas, no entanto, fui durante anos memorizando fatos, curiosidades a respeito desse ídolo. O que caia em minhas mãos (reportagens, entrevistas...) eu saborosamente ia deglutindo tudo. Também me ajudou muito o contato direto que tive com o Baú do Raul [...] Esta minha admiração por Raul Seixas iniciou-se após assistir pela TV, no programa Flávio Cavalcante, à divulgação da música Ouro de Tolo pelo próprio Raul, em 1973. A partir daí tornei-me fã incondicional desse imortal intérprete, cantor e compositor do rock-baião brasileiro.'
    },
    {
        nome: 'Raul Seixas - Eu Quero Cantar por Cantar',
        imagem:'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/489659df956a5111bb05c4d3247842bf926d1470.jpg',
        resumo: '	Raul Seixas:Eu quero cantar por cantar responde tudo isso e muito mais! O mais influente dos roqueiros brasileiros tem neste livro a sua mais completa discografia, filmografia e cronologia, além de relacionar todas suas composições gravadas por outros artistas. Apresenta ainda várias fotos inéditas e um estudo crítico que demonstra porque Raul é respeitado por personalidade tão diferentes quanto Caetano Veloso, Zezé di Camargo, J.Ramos Tinhorão, Alceu Valença, Cazuza e Rita Lee.'
    },
    {
        nome: 'A Paixão Segundo Raul Seixas',
        imagem:'https://books.google.com.br/books/content?id=BRJKBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE70OuMS5kCv8mVCeoagZwxQNusI9bSzs0jTY_wdJNzY_06zI98dW0V2ZApKR_ZfyA_UakDMwJNwBCbBg8sSJBh4N0cGl51V46KZUbWQqy3etb6IEPOlpPlCYIGeYp_0Fs7-97Q1V',
        resumo: '	O livro reportagem Luar Aos Avessos, do jornalista Angelo Sastre, é o resultado de uma pesquisa que durou cerca de dois anos e meio. Neste período, foram analisados materiais de imprensa e documentos pessoais, além de entrevistas com pessoas que tiveram ligações diretas com o cantor (mãe, amigos de infância, parceiros musicais, ex-esposa, entre outros). O livro “Luar Aos Avessos” procura revelar a “outra face” do cantor e compositor Raul Seixas, que revolucionou a música brasileira. Para isso, o autor levanta o debate sobre vários “mitos” que foram construídos ao longo de sua carreira. O resultado é uma reunião dos principais acontecimentos da vida do cantor, que são descritos através de reconstituições e depoimentos de pessoas que conviveram com Raul Seixas. Neste trabalho, o jornalista reconstitui os principais acontecimentos da vida do cantor, que vão desde sua infância até o dia de sua morte e levanta o debate sobre vários “mitos” relacionados com a carreira do cantor. Entre os fatos de maior relevância estão os cinco casamentos, o envolvimento com magia negra, a prisão no DOPS, a expulsão da gravadora CBS, a luta contra o álcool e as drogas, o “anúncio” de sua morte através das letras de músicas e até supostos “milagres”. Tudo isso, através de relatos descontraídos que envolvem o leitor desde as primeiras linhas até o último capítulo.'
    },
    {
        nome: 'Vivendo a Sociedade Alternativa: Raul Seixas e o Seu Tempo',
        imagem:'https://images-na.ssl-images-amazon.com/images/I/41mx1eCWGhL._SX331_BO1,204,203,200_.jpg',
        resumo: '	Tendo como pano de fundo a carreira de Raul Seixas, o autor passeia pelos movimentos alternativos das décadas de 1960 e 1970: a contracultura, as novas espiritualidades, a Sociedade Alternativa. O preenchem uma das maiores lacunas de nossa cultura popular, que é a falta de pesquisas e documentos sobre os movimentos da juventude brasileira na segunda metade do século XX.'
    },
    {
        nome: ' As aventuras de Raul Seixas na Cidade de Thor',
        imagem:'https://cache.skoob.com.br/local/images//IbYtm0KWrq3NB_9qACETQ6IOclw=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/262057/AS_AVENTURAS_DE_RAUL_SEIXAS_NA_CIDADE_DE_1362882228B.jpg',
        resumo: '	Existem dezenas de livros escritos sobre Raul Seixas - biografias, análises, homenagens, coletâneas de textos e letras, etc. Mas Raul, que em criança, além de sonhar em ser cantor de rock, também queria ser escritor, só viu em vida um único livro seu ser publicado: As Aventuras de Raul Seixas na Cidade de Thor. Esse livro, lançado em 1983, traz um vasto material entre textos e desenhos que ele guardava desde a infância, e coisas que ele foi escrevendo mais tarde, e até então inéditas. O livro foi lançado por uma pequena editora, Shogun Arte, que pertencia a Paulo Coelho, que na época ainda não era um escritor famoso, sendo mais conhecido como ex-parceiro de Raul. É de Paulo Coelho, aliás, o prefácio do livro, que começa assim: "Blade Runners. Ano de 2020 na cidade de Thor. Os caçadores de androides saem da cabeça de William Bourroughs e invadem as ruas superpolusosas, em busca de suas vítimas. A terra sacode-se nos eixos, já não há mais espaços. Brasil 1955. A cidade de Thor começa a ganhar contornos entre as colinas e praias de Salvador. A Quarta Dimensão está definitivamente plugada no Universo-Terra, mas poucas pessoas são capazes de perceber o fenômeno. Raul Seixas, com 13 anos, estabelece contatos imediatos com esta Quarta Dimensão e começa a escrever os cadernos/documentos. Tudo que nossa geração vive naquela época vai sendo registrado pouco a pouco por Raul'
    },
    {
        nome: 'O Trem das Sete',
        imagem:'https://cache.skoob.com.br/local/images//zYZTfonYywWa62oIpCekr8__w08=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/56500/O_TREM_DAS_SETE_1256333445B.jpg',
        resumo: '	O Trem das Sete chega na estação pra buscar aqueles que querem viajar. Não precisa passagem nem mesmo bagagem pra embarcar nesse trem. São sete viagens, sete autores à procura de um personagem, sete visões de uma mesma personalidade multifacetada: Raul Seixas.  Este é o trem que vem de longe trazendo a chama do Novo Aeon. Quem vai ficar? Quem vai partir?'
    },
    {
        nome: 'Gente do Século',
        imagem:'https://www.terra.com.br/istoegente/15/fotos/livro_raul.jpg',
        resumo: '	As músicas de Raul “maluco beleza” Seixas são referências para várias gerações - tanto que já foram regravadas por artistas como Caetano Veloso, Cássia Eller e Titãs - e suas letras passeiam no imaginário popular. Quem não tem na ponta da língua os versos de “Metamorfose Ambulante” ou “Sociedade Alternativa”? O que pouca gente sabe é que, antes de estourar nas paradas, Raul teve uma infância peculiar na cidade de Salvador, decifrada em detalhes saborosos pela biografia da coleção Gente do Século, que será vendida com a edição 16 de Gente.  Raulzito era do tipo moleque levado e protagonizou travessuras históricas - como quando sua mãe o encontrou trancado em uma geladeira, com o nariz sangrando. Raul e seu irmão mais novo, Plínio, haviam apostado para ver quem conseguia ficar mais tempo ali trancado.  Histórias divertidas como essa ajudam a desvendar a personalidade irreverente que havia detrás do artista Raul Seixas, que desde o lançamento do primeiro disco, em 1968, traçou uma trajetória sólida. Na década de 70, ele se consagraria como um compositor capaz de filtrar influências do repente e baião em uma moldura rock’n’roll. Com público fiel, foi o primeiro artista brasileiro a ter um disco lançado por iniciativa de um fã-clube, a compilação de gravações raras Caroço de Manga, de 1985. Quando faleceu, vítima de uma parada cardíaca e respiratória em agosto de 1989, foi velado por 5 mil pessoas em São Paulo. Suas peripécias - musicais e pessoais - são narradas nessa biografia em linguagem tão acessível como a de suas canções, eternizadas na memória dos brasileiros.'
    },
    {
        nome: 'Coisas do Coração - Minha História com Raul Seixas',
        imagem:'https://images-na.ssl-images-amazon.com/images/I/51i6xpcpf8L._SX331_BO1,204,203,200_.jpg',
        resumo: 'Um relato emocionante, tocante e íntimo do período em que Kika Seixas viveu com um dos maiores ícones do rock brasileiro. A ideia do livro surgiu a partir do desejo de Kika de deixar registrada para sua filha, Vivian Seixas, a história não somente do ídolo, mas do filho, irmão, marido e pai Raul. A cada página, o leitor descobre dramas cotidianos, histórias engraçadas e divertidas, muito amor, cumplicidade e fatos desconhecidos para a maioria do público. A obra traz cartas que Kika e Raul trocaram desde que se conheceram até sua morte, além das correspondências escritas por Dona Maria Eugênia, mãe do artista. Coisas do Coração, que dá nome à obra, é também o título de uma das músicas mais lindas lançadas por Raul Seixas, composta em parceria com Cláudio Roberto. No livro, Kika Seixas faz uma revelação: “Eu fui apenas a inspiração, mas ele acabou colocando meu nome na parceria.”'
    },
    {
        nome: 'Por Uma Teoria Do Direito E Rock',
        imagem:'https://images-na.ssl-images-amazon.com/images/I/41iHypfIfQS._SX331_BO1,204,203,200_.jpg',
        resumo: 'O livro em suas mãos é uma ousada provocação aos estudos de direito e arte no país. Fruto da dissertação de Mestrado em pasme Direito, de Amanda Muniz Oliveira, a obra propõe uma teoria de direito e rock baseada em um referencial teórico pouco estudado nas academias jurídicas brasileiras: os Estudos Culturais. Utilizando como objeto de estudo Raul Seixas, o pai do rock brasileiro, a autora pretende demonstrar que o cantor propagava em suas canções distintas representações sobre o direito, reflexo direto das lutas e tensões sociais nas quais o artista se insere. Entretanto, mais que apresentar os resultados da pesquisa sobre o direito em Raul Seixas, o presente livro ainda tem a ousadia de propor uma possível teoria de direito e rock, a partir da valorização da cultura pop em geral, demonstrando como o suposto menor valor artístico dessas produções são baseados em discriminações vazias e limitantes. Em outras palavras, seja você leitora/leitor do funk, do rap, da cultura nerd, do RPG ou dos games, esperamos que a obra lhe forneça fundamentos para demonstrar porque o direito deve se preocupar também com essas manifestações culturais, tão legítimas e importantes quanto Shakespeare, Tolstói ou Dostoiévski.'
    },
    {
        nome: 'Sociedade Alternativa!!!',
        imagem:'https://images-na.ssl-images-amazon.com/images/I/41twSVl5XKL._SX350_BO1,204,203,200_.jpg',
        resumo: 'Como diria Raul Rock Seixas nosso saudoso, querido eterno e amado maluco beleza voçê pode não acreditar na sociedade alternativa, todavia, ela sempre existiu e sabe aonde? Dentro de voçê. Nesse livro eu José Henrique Maia considerado por muitos amigos e fãs até então a lenda viva da soul music, do funk e do rock and roll irei mostrar e provar para cada leitor e brasileiro principalmente que a sociedade alternativa é um sonho de todos nós que deve e pode se tornar realidade. É lógico que diferente mas nem tanto daquela idealizada e proposta por Raul e Paulo Coelho inspirada no livro da lei e na teoria de thelema de Aleister Crowley o grande mago, bruxo do século XX.. Através da leitura desse livro eu irei mostrar e provar detalhadamente como ela pode se tornar uma realidade e que só depende de cada um de nós juntos unidos lutarmos para que ela possa acontecer mesmo por que como diria o próprio Raul: Sonho que se sonha só é só um sonho, sonho que se sonha junto é realidade.Portanto pessoal Viva para sempre a sociedade alternativa.'
    },
    {
        nome: 'Coleção Mitos do Pop Raul Seixas',
        imagem:'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_1c747ecda2a4b31a852f3fa398305662c501d9ed.jpg',
        resumo: ''
    },
    {
        nome: 'Raul Seixas - Eu Quero Cantar por Cantar',
        imagem:'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/489659df956a5111bb05c4d3247842bf926d1470.jpg',
        resumo: ''
    },
    {
        nome: 'Raul Seixas - a Mosca na Sopa da Ditadura Militar, Censura, Tortura...',
        imagem:'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/_f2ffaf0dbb0f45dd402c170a0cb247ed3d62e0f7.jpg',
        resumo: ''
    },
    {
        nome: 'O baú do Raul, de Raul Seixas',
        imagem: 'https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/18c3e8a149eb89892199ef8f7bdaa93bba056eff.jpg',
        resumo: '	Diário do mais popular cantor brasileiro de rock, este livro revela aspectos da intimidade de Raul Seixas e de sua inquieta atividade criativa.'

    },
]

export default livros