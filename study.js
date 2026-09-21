const STUDIES = {
  "romanos-3-23": {
    context: "Paulo explica que tanto judeus como gentios estão debaixo do pecado e que ninguém consegue alcançar, por mérito próprio, o padrão de Deus.",
    explanation: "O versículo resume a condição humana: todos pecaram e, por isso, precisam da graça e da salvação que Deus oferece.",
    lesson: "Ninguém pode se considerar superior aos outros. Todos dependem da misericórdia de Deus.",
    reflection: "Tenho reconhecido minhas falhas com humildade e buscado em Deus transformação, em vez de confiar apenas em mim mesmo?"
  },
  "romanos-5-8": {
    context: "Paulo fala sobre a justificação pela fé e mostra que o amor de Deus não começou depois que as pessoas melhoraram.",
    explanation: "Cristo morreu por pecadores. O amor de Deus é demonstrado por iniciativa dele, não como recompensa por merecimento humano.",
    lesson: "O amor verdadeiro se manifesta em ação, especialmente quando não há garantia de retorno.",
    reflection: "Minha forma de amar depende apenas de como as pessoas me tratam ou também reflete graça e misericórdia?"
  },
  "romanos-8-1": {
    context: "Depois de tratar da luta contra o pecado, Paulo apresenta a segurança daqueles que pertencem a Cristo.",
    explanation: "Em Cristo há libertação da condenação. A vida cristã passa a ser conduzida pelo Espírito e não pelo domínio do pecado.",
    lesson: "A fé não é viver preso à culpa, mas caminhar em uma nova direção.",
    reflection: "Estou usando o perdão como motivo para viver de forma diferente ou continuo preso ao peso do passado?"
  },
  "romanos-8-28": {
    context: "Paulo fala do sofrimento, da esperança e da atuação do Espírito na vida dos que pertencem a Deus.",
    explanation: "O texto não diz que tudo o que acontece é bom, mas que Deus pode agir até em situações difíceis dentro de seu propósito.",
    lesson: "A fé permite enxergar além do momento presente e confiar que Deus continua trabalhando.",
    reflection: "Quando algo foge do meu controle, consigo manter a confiança em Deus sem negar a dificuldade real da situação?"
  },
  "romanos-8-31": {
    context: "Paulo conclui uma sequência de afirmações sobre a fidelidade de Deus, sua graça e a segurança de seu povo.",
    explanation: "A pergunta destaca a confiança de quem sabe que Deus está a seu favor. Isso não significa ausência de oposição, mas segurança diante dela.",
    lesson: "A presença de dificuldades não significa abandono de Deus.",
    reflection: "Minhas decisões são guiadas mais pelo medo das circunstâncias ou pela confiança em Deus?"
  },
  "romanos-12-2": {
    context: "Após explicar a obra de Deus, Paulo passa a mostrar como o cristão deve responder na prática.",
    explanation: "A transformação começa pela renovação da mente. Em vez de apenas seguir os padrões ao redor, o discípulo aprende a discernir a vontade de Deus.",
    lesson: "Mudanças externas duradouras normalmente começam com uma nova forma de pensar.",
    reflection: "Quais ideias e hábitos do meu ambiente eu tenho aceitado sem avaliar se combinam com os valores de Deus?"
  },

  "filipenses-1-21": {
    context: "Paulo escreve preso e considera a possibilidade de viver ou morrer enquanto permanece comprometido com Cristo.",
    explanation: "Para Paulo, Cristo dá sentido à vida presente, e a morte não representa derrota final.",
    lesson: "Uma vida com propósito não depende apenas das circunstâncias favoráveis.",
    reflection: "O que realmente dá sentido às minhas escolhas e à maneira como uso meu tempo?"
  },
  "filipenses-4-4": {
    context: "Paulo encerra a carta incentivando a igreja a permanecer firme, unida e alegre no Senhor.",
    explanation: "A alegria cristã não depende somente de acontecimentos agradáveis; ela está ligada à relação com Deus.",
    lesson: "É possível cultivar gratidão mesmo em períodos difíceis.",
    reflection: "Tenho treinado meu coração para perceber motivos de gratidão ou só noto aquilo que está dando errado?"
  },
  "filipenses-4-6": {
    context: "Paulo orienta os cristãos a lidar com preocupações por meio da oração, súplica e gratidão.",
    explanation: "O texto não ignora a ansiedade; ele ensina a levar as preocupações conscientemente a Deus.",
    lesson: "Orar é transformar preocupação em conversa com Deus, sem esquecer os motivos de gratidão.",
    reflection: "Quando fico preocupado, minha primeira reação é alimentar o medo ou apresentar a situação a Deus?"
  },
  "filipenses-4-13": {
    context: "Paulo acaba de dizer que aprendeu a viver tanto na abundância quanto na necessidade.",
    explanation: "O sentido do versículo é receber força de Cristo para enfrentar diferentes circunstâncias, e não uma promessa de conseguir qualquer coisa desejada.",
    lesson: "A força espiritual aparece também na capacidade de permanecer fiel em tempos de limitação.",
    reflection: "Tenho buscado força em Cristo apenas para conquistar coisas ou também para suportar dificuldades com fidelidade?"
  },
  "filipenses-4-19": {
    context: "Paulo agradece a ajuda material dos filipenses e fala da provisão de Deus.",
    explanation: "A afirmação está ligada ao cuidado de Deus por uma comunidade generosa e comprometida com sua obra.",
    lesson: "Generosidade e confiança caminham juntas quando reconhecemos Deus como fonte de provisão.",
    reflection: "Tenho usado o que recebo apenas para mim ou também para servir e ajudar outras pessoas?"
  },

  "mateus-5-14": {
    context: "Jesus está no Sermão do Monte ensinando seus discípulos sobre a identidade e a influência deles no mundo.",
    explanation: "Ser luz significa tornar visível, por atitudes e testemunho, aquilo que corresponde ao caráter de Deus.",
    lesson: "A fé deve produzir uma influência perceptível e benéfica.",
    reflection: "Minhas atitudes tornam mais fácil ou mais difícil para outras pessoas perceberem os valores que afirmo seguir?"
  },
  "mateus-6-33": {
    context: "Jesus ensina sobre preocupação com alimento, roupa e necessidades diárias.",
    explanation: "Buscar primeiro o Reino é colocar os valores e a vontade de Deus no centro das prioridades, confiando nele para as necessidades.",
    lesson: "Prioridades espirituais ajudam a organizar as demais áreas da vida.",
    reflection: "O que minhas decisões diárias mostram que realmente ocupa o primeiro lugar na minha vida?"
  },
  "mateus-7-7": {
    context: "No Sermão do Monte, Jesus incentiva perseverança na busca por Deus e fala do cuidado do Pai.",
    explanation: "Pedir, buscar e bater descrevem uma postura ativa e perseverante de oração e confiança.",
    lesson: "A vida de oração envolve constância, não apenas pedidos ocasionais.",
    reflection: "Tenho perseverado em oração ou desisto rapidamente quando a resposta não vem do modo que espero?"
  },
  "mateus-11-28": {
    context: "Jesus fala a pessoas cansadas e sobrecarregadas e as convida a aprender dele.",
    explanation: "O convite de Jesus oferece descanso a quem carrega peso físico, emocional ou religioso. O descanso está ligado a caminhar com ele.",
    lesson: "Nem todo peso precisa ser carregado sozinho.",
    reflection: "Que tipo de peso eu tenho tentado carregar sem entregar a Deus e sem buscar ajuda adequada?"
  },
  "mateus-18-20": {
    context: "Jesus ensina sobre relacionamentos na comunidade, correção, reconciliação e oração.",
    explanation: "A frase enfatiza a presença de Cristo entre seus seguidores reunidos em seu nome e alinhados com sua vontade.",
    lesson: "A fé cristã também é vivida em comunidade, não apenas de maneira individual.",
    reflection: "Tenho valorizado a comunhão e a reconciliação com outras pessoas de fé?"
  },
  "mateus-28-19": {
    context: "Após a ressurreição, Jesus envia seus discípulos para fazer discípulos entre todas as nações.",
    explanation: "A missão envolve ir, fazer discípulos, batizar e ensinar. Não é apenas transmitir informação, mas formar seguidores.",
    lesson: "A fé recebida também deve ser compartilhada por meio de testemunho, ensino e serviço.",
    reflection: "De que maneira minha vida ajuda outras pessoas a conhecer e praticar os ensinamentos de Jesus?"
  },

  "joao-1-1": {
    context: "João inicia seu Evangelho apresentando quem é Jesus antes de narrar seus sinais e ensinamentos.",
    explanation: "O 'Verbo' é apresentado como existente desde o princípio, em relação com Deus e participante da própria identidade divina.",
    lesson: "Jesus não é apresentado apenas como mestre histórico, mas como central na revelação de Deus.",
    reflection: "Minha compreensão sobre Jesus influencia realmente a forma como vivo ou fica apenas no conhecimento teórico?"
  },
  "joao-3-16": {
    context: "A passagem está ligada à conversa de Jesus com Nicodemos sobre novo nascimento, fé e vida eterna.",
    explanation: "O versículo resume o amor de Deus demonstrado ao entregar seu Filho para que quem nele crê receba vida eterna.",
    lesson: "O centro da mensagem cristã é graça, amor e confiança em Cristo.",
    reflection: "Tenho recebido o amor de Deus apenas como informação ou como algo que muda minha maneira de viver e amar?"
  },
  "joao-8-32": {
    context: "Jesus fala a pessoas que haviam crido nele e relaciona liberdade com permanecer em sua palavra.",
    explanation: "A verdade libertadora está ligada a conhecer e permanecer no ensino de Jesus, e não simplesmente possuir informações.",
    lesson: "Liberdade verdadeira exige compromisso com a verdade.",
    reflection: "Existe alguma área da minha vida em que prefiro uma explicação confortável em vez de encarar a verdade?"
  },
  "joao-10-10": {
    context: "Jesus usa a figura do pastor e das ovelhas para contrastar seu cuidado com líderes que exploram o povo.",
    explanation: "Jesus apresenta sua missão como fonte de vida abundante, em contraste com aquilo que destrói e rouba.",
    lesson: "Nem tudo o que promete satisfação produz vida verdadeira.",
    reflection: "As escolhas que faço estão produzindo vida, paz e crescimento ou estão me esvaziando?"
  },
  "joao-11-25": {
    context: "Jesus conversa com Marta pouco antes de chamar Lázaro para fora do túmulo.",
    explanation: "Jesus não apenas promete ressurreição; ele se apresenta como a própria ressurreição e vida.",
    lesson: "A esperança cristã está centrada em uma pessoa, não apenas em uma ideia sobre o futuro.",
    reflection: "Minha esperança depende apenas de as circunstâncias melhorarem ou está fundamentada em Cristo?"
  },
  "joao-14-6": {
    context: "Na noite antes da crucificação, Jesus consola seus discípulos e fala sobre o caminho para o Pai.",
    explanation: "Jesus se apresenta como caminho, verdade e vida, afirmando ser o mediador da relação com o Pai.",
    lesson: "Seguir Jesus envolve confiar nele e orientar a vida por seus ensinamentos.",
    reflection: "Quais áreas da minha vida ainda seguem caminhos diferentes daquele que afirmo encontrar em Cristo?"
  },
  "joao-16-33": {
    context: "Jesus prepara seus discípulos para as dificuldades que enfrentariam depois de sua partida.",
    explanation: "Ele não promete uma vida sem aflições. Promete paz nele e encoraja os discípulos com a afirmação de sua vitória.",
    lesson: "Coragem cristã não nasce da ausência de problemas, mas de uma esperança maior que eles.",
    reflection: "Quando enfrento aflições, lembro apenas do problema ou também das palavras de esperança de Jesus?"
  }
};