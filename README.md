# Desafio da Palavra V5

## Nova lógica

O jogo possui 4 blocos fixos: A, B, C e D.

Cada bloco tem 12 perguntas e cada pergunta possui 4 alternativas fixas:
A, B, C e D.

### Regra principal de memorização
Se o jogador errar uma pergunta:

1. A partida termina.
2. A pontuação volta a zero na próxima tentativa.
3. A pergunta errada fica salva como pendente.
4. Ao recomeçar o mesmo bloco, a pergunta errada passa a ser a pergunta nº 1.
5. As alternativas permanecem exatamente na mesma ordem.
6. Quando a pergunta for acertada, o jogador continua a sequência do bloco.

Assim, o erro é repetido até virar acerto.

### Pontuação
100 → 200 → 500 → 1.000 → 2.000 → 5.000 → 10.000 → 20.000 → 50.000 → 100.000 → 500.000 → 1.000.000

Para alcançar 1.000.000 é necessário acertar 12 perguntas seguidas.

## Teste
python -m http.server 8080
Acesse http://localhost:8080


## Visual V6
O layout foi atualizado para um estilo inspirado no Windows 7 / Aero:
- vidro translúcido
- gradientes azuis
- reflexos
- botões clássicos
- barras de progresso com aparência de sistema
- sombras e bordas no estilo Aero

A lógica do jogo permanece exatamente igual à V5.


## V7 — Estudo dos Versículos
Foi adicionada uma nova área sem alterar a lógica do jogo.

Cada versículo agora possui:
- Contexto
- Explicação
- Lição
- Reflexão

A área de estudo permite:
- filtrar por livro
- escolher o versículo
- navegar entre versículos
- ler o texto e o estudo correspondente
