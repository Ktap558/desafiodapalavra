const VERSES = [
  {id:"romanos-3-23",book:"Romanos",chapter:3,verse:23,text:"Porque todos pecaram e destituídos estão da glória de Deus."},
  {id:"romanos-5-8",book:"Romanos",chapter:5,verse:8,text:"Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores."},
  {id:"romanos-8-1",book:"Romanos",chapter:8,verse:1,text:"Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito."},
  {id:"romanos-8-28",book:"Romanos",chapter:8,verse:28,text:"E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito."},
  {id:"romanos-8-31",book:"Romanos",chapter:8,verse:31,text:"Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?"},
  {id:"romanos-12-2",book:"Romanos",chapter:12,verse:2,text:"E não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus."},

  {id:"filipenses-1-21",book:"Filipenses",chapter:1,verse:21,text:"Porque para mim o viver é Cristo, e o morrer é ganho."},
  {id:"filipenses-4-4",book:"Filipenses",chapter:4,verse:4,text:"Regozijai-vos sempre no Senhor; outra vez digo, regozijai-vos."},
  {id:"filipenses-4-6",book:"Filipenses",chapter:4,verse:6,text:"Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração e súplicas, com ação de graças."},
  {id:"filipenses-4-13",book:"Filipenses",chapter:4,verse:13,text:"Posso todas as coisas em Cristo que me fortalece."},
  {id:"filipenses-4-19",book:"Filipenses",chapter:4,verse:19,text:"O meu Deus, segundo as suas riquezas, suprirá todas as vossas necessidades em glória, por Cristo Jesus."},

  {id:"mateus-5-14",book:"Mateus",chapter:5,verse:14,text:"Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte."},
  {id:"mateus-6-33",book:"Mateus",chapter:6,verse:33,text:"Mas buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas."},
  {id:"mateus-7-7",book:"Mateus",chapter:7,verse:7,text:"Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á."},
  {id:"mateus-11-28",book:"Mateus",chapter:11,verse:28,text:"Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei."},
  {id:"mateus-18-20",book:"Mateus",chapter:18,verse:20,text:"Porque, onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles."},
  {id:"mateus-28-19",book:"Mateus",chapter:28,verse:19,text:"Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo."},

  {id:"joao-1-1",book:"João",chapter:1,verse:1,text:"No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus."},
  {id:"joao-3-16",book:"João",chapter:3,verse:16,text:"Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."},
  {id:"joao-8-32",book:"João",chapter:8,verse:32,text:"E conhecereis a verdade, e a verdade vos libertará."},
  {id:"joao-10-10",book:"João",chapter:10,verse:10,text:"O ladrão não vem senão a roubar, a matar, e a destruir; eu vim para que tenham vida, e a tenham com abundância."},
  {id:"joao-11-25",book:"João",chapter:11,verse:25,text:"Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá."},
  {id:"joao-14-6",book:"João",chapter:14,verse:6,text:"Disse-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim."},
  {id:"joao-16-33",book:"João",chapter:16,verse:33,text:"Tenho-vos dito isto, para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo; eu venci o mundo."}
];

const BLOCKS = {
  A: ["mateus-11-28","joao-3-16","filipenses-4-13","romanos-8-28","joao-14-6","mateus-6-33","romanos-8-31","joao-8-32","mateus-7-7","romanos-3-23","joao-10-10","filipenses-4-6"],
  B: ["joao-1-1","romanos-5-8","mateus-5-14","filipenses-1-21","joao-11-25","mateus-18-20","romanos-12-2","filipenses-4-4","joao-16-33","mateus-28-19","romanos-8-1","filipenses-4-19"],
  C: ["filipenses-4-13","mateus-11-28","romanos-3-23","joao-8-32","mateus-6-33","romanos-5-8","joao-3-16","filipenses-1-21","romanos-8-28","joao-14-6","mateus-28-19","joao-16-33"],
  D: ["romanos-8-31","joao-10-10","filipenses-4-6","mateus-7-7","joao-11-25","romanos-12-2","mateus-5-14","filipenses-4-4","joao-1-1","mateus-18-20","romanos-8-1","filipenses-4-19"]
};
