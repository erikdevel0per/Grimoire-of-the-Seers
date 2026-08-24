const tarotDatabase = [
  {
    id: 1,
    name: "A Roda da Fortuna",
    path: "O Caminho da Roda da Fortuna representa a Possibilidade do Destino de alguém e o Caos. Ele detém autoridade sobre o Destino, Probabilidade, Ciclo e Desordem.",
    image: "assets/cards/carta-1.png",
    meaning: "Momentos de grande oscilação e imprevisibilidade se aproximam. O destino está em movimento; saiba se adaptar às mudo-as de sorte para virar o jogo a seu favor."
  },
  {
    id: 2,
    name: "O Mundo",
    path: "O Caminho da Mãe possui habilidades relacionadas à vida, às plantas e à terra. Aventure-se no campo da cura e da criação de novas formas de vida.",
    image: "assets/cards/carta-2.png",
    meaning: "Fase de fertilidade, crescimento e restauração. É o momento ideal para nutrir novos projetos e buscar a cura para conflitos internos ou físicos."
  },
  {
    id: 3,
    name: "Os Amantes",
    path: "O Caminho do Erro pode enganar e roubar todo tipo de coisa. Ludibria com sua eloquência e destreza, roubando habilidades e intenções.",
    image: "assets/cards/carta-3.png",
    meaning: "Cuidado com ilusões e escolhas enganosas. Nem tudo o que reluz é verdadeiro; analise as intenções ocultas ao seu redor antes de tomar uma decisão definitiva."
  },
  {
    id: 4,
    name: "O Tolo",
    path: "O Caminho do Louco trata de enganar as percepções e a realidade. Especialistas em adivinhação, ilusões e controle de marionetes.",
    image: "assets/cards/carta-4.png",
    meaning: "O início de uma jornada imprevisível. Abra espaço para o desconhecido, quebre padrões rígidos e confie no seu potencial de moldar a própria realidade."
  },
  {
    id: 5,
    name: "A Lua",
    path: "O Caminho da Lua possui poderosas habilidades de cura, aprimoramento biológico, poções e feitiços de escuridão.",
    image: "assets/cards/carta-5.png",
    meaning: "Intuição afiada e segredos prestes a emergir. É hora de olhar para as suas sombras e confiar nos seus instintos mais profundos para se guiar no escuro."
  },
  {
    id: 6,
    name: "O Demônio",
    path: "O Caminho do Abismo possui habilidades demoníacas. Controla desejos, realiza rituais e fortalece corpo e mente para o combate.",
    image: "assets/cards/carta-6.png",
    meaning: "Alerta para ambições desmedidas e impulsos incontroláveis. Reconheça seus desejos intensos, mas mantenha o domínio sobre sua própria força moral."
  },
  {
    id: 7,
    name: "A Temperança",
    path: "Os membros do Caminho Acorrentado possuem habilidades mutantes. Invocam espíritos e usam força sobrenatural em troca de autocontrole.",
    image: "assets/cards/carta-7.png",
    meaning: "Necessidade urgente de paciência e autocontrole. Ceder ao desespero pode custar caro; encontre o equilíbrio entre a paixão e a disciplina."
  },
  {
    id: 8,
    name: "O Imperador",
    path: "A Via do Imperador Negro manipula as regras para atender aos seus interesses, explorando brechas e dominando os outros.",
    image: "assets/cards/carta-8.png",
    meaning: "Domínio, autoridade e estratégia. Você tem o poder de redefinir as regras ao seu redor, desde que aja com firmeza e inteligência tática."
  },
  {
    id: 9,
    name: "O Julgamento",
    path: "A Via Justiciar trata da defesa da Ordem e criação de leis. Inflige punições e restabelece o equilíbrio.",
    image: "assets/cards/carta-9.png",
    meaning: "A hora da prestação de contas chegou. A justiça se fará presente; certifique-se de estar agindo com integridade para colher frutos justos."
  },
  {
    id: 10,
    name: "O Mágico",
    path: "O Caminho da Porta permite movimento irrestrito, travessia de paredes, teletransporte e uso dos poderes de outros.",
    image: "assets/cards/carta-10.png",
    meaning: "Novas oportunidades e caminhos abertos. Você possui a flexibilidade e os recursos necessários para contornar qualquer obstáculo à sua frente."
  },
  {
    id: 11,
    name: "A Justiça",
    path: "O Caminho Visionário é hábil na manipulação psicológica. Lê mentes, hipnotiza e navega entre os sonhos humanos.",
    image: "assets/cards/carta-11.png",
    meaning: "Clareza mental e percepção afiada. Observe o comportamento alheio e compreenda a psicologia por trás das ações para antecipar movimentos."
  },
  {
    id: 12,
    name: "O Sol",
    path: "O Caminho do Sol possui habilidades sacerdotais de luz sagrada, purificação de feitiços e quebra de maldições.",
    image: "assets/cards/carta-12.png",
    meaning: "Revelação, vitalidade e sucesso. A verdade virá à tona para dissipar qualquer negatividade ou dúvida que estava pairando sobre a sua jornada."
  },
  {
    id: 13,
    name: "O Hierofante",
    path: "O Caminho do Tirano especializa-se em água e clima. Domina trovões, tempestades e a fúria dos mares.",
    image: "assets/cards/carta-13.png",
    meaning: "Poder de liderança avassalador, mas risco de conflitos intensos. Canalize sua energia de forma construtiva para não causar destruição desnecessária."
  },
  {
    id: 14,
    name: "A Torre",
    path: "O Caminho da Torre Branca busca o conhecimento absoluto, analisando e imitando os poderes sobrenaturais alheios.",
    image: "assets/cards/carta-14.png",
    meaning: "Sabedoria adquirida através da observação profunda. Analise os fatos com frieza e lógica antes de agir; a informação é a sua maior arma."
  },
  {
    id: 15,
    name: "O Enforcado",
    path: "O Caminho do Enforcado representa a degeneração e o sacrifício. Domina magia de carne, sangue e sombras.",
    image: "assets/cards/carta-15.png",
    meaning: "Um momento de renúncia em prol de um bem maior. Nem todos os avanços são confortáveis; às vezes é preciso abrir mão de algo precioso para evoluir."
  },
  {
    id: 16,
    name: "A Imperatriz",
    path: "O Caminho da Demoníaca centra-se em desastres, sedução, assassinatos e manipulação de maldições invisíveis.",
    image: "assets/cards/carta-16.png",
    meaning: "Magnetismo pessoal e perigo à espreita. Use sua influência com extrema cautela e esteja atento a influências sutis e manipuladoras."
  },
  {
    id: 17,
    name: "O Carro",
    path: "O Caminho do Sacerdote Vermelho contém a essência da guerra, fogo, táticas de combate e conspirações.",
    image: "assets/cards/carta-17.png",
    meaning: "Ação direta, coragem e superação de desafios. O momento exige postura proativa e determinação para vencer as batalhas que surgirem."
  },
  {
    id: 18,
    name: "O Eremita",
    path: "O Caminho do Eremita especializa-se no conhecimento oculto e místico, rituais sagrados e feitiços estelares.",
    image: "assets/cards/carta-18.png",
    meaning: "Busca por respostas no isolamento e na reflexão. Afaste-se do barulho externo para encontrar as verdades místicas que você procura."
  },
  {
    id: 19,
    name: "A Alta Sacerdotisa",
    path: "A Via Paragon especializa-se em invenções, tecnologia, ciência mística e criação de artefatos Beyonder.",
    image: "assets/cards/carta-19.png",
    meaning: "Pragmatismo, inovação e resolução de problemas. Aplique seus conhecimentos de forma prática para construir soluções duradouras."
  },
  {
    id: 20,
    name: "A Estrela",
    path: "O Caminho das Trevas possui poderes relacionados ao sono, pacifismo das almas e domínio do silêncio da noite.",
    image: "assets/cards/carta-20.png",
    meaning: "Paz de espírito e restauração interior. O momento pede calma, descanso e recolhimento para recuperar suas forças energéticas."
  },
  {
    id: 21,
    name: "A Morte",
    path: "O Caminho da Morte domina os mortos-vivos, o Mundo Espiritual, a comunicação pós-vida e o frio da sepultura.",
    image: "assets/cards/carta-21.png",
    meaning: "Encerramento definitivo de um ciclo. Deixe o passado partir sem medo para abrir espaço ao renascimento e a novas oportunidades."
  },
  {
    id: 22,
    name: "A Força",
    path: "O Caminho do Gigante do Crepúsculo possui força física extrema, maestria em armas e defesa inquebrável.",
    image: "assets/cards/carta-22.png",
    meaning: "Resistência inabalável e proteção divina. Você possui a resiliência necessária para suportar qualquer pressão e defender o que é seu."
  }
];

// Estado da Aplicação
let mode = 'single'; // 'single' ou 'triple'
let availableCards = [...tarotDatabase];
let currentSelectedCards = [];

const deckElement = document.getElementById('deck');
const selectedContainer = document.getElementById('selectedContainer');
const tripleSynthesis = document.getElementById('tripleSynthesis');
const deckHint = document.getElementById('deckHint');

// Troca de Modo (Único vs Triplo)
function switchMode(newMode) {
  if (mode === newMode) return;
  mode = newMode;

  document.getElementById('modeSingleBtn').classList.toggle('active', mode === 'single');
  document.getElementById('modeTripleBtn').classList.toggle('active', mode === 'triple');
  
  document.body.classList.toggle('mode-single', mode === 'single');
  document.body.classList.toggle('mode-triple', mode === 'triple');

  // Reinicia a mesa
  availableCards = [...tarotDatabase];
  currentSelectedCards = [];
  selectedContainer.innerHTML = '';
  tripleSynthesis.style.display = 'none';

  if (mode === 'single') {
    deckHint.textContent = 'Clique no monte para tirar uma carta';
  } else {
    deckHint.textContent = 'Clique no monte para tirar até 3 cartas';
  }
}

// Renderização inicial do monte
function renderDeck() {
  deckElement.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const cardVisual = document.createElement('div');
    cardVisual.className = 'deck-card';
    cardVisual.style.top = `-${i * 2}px`;
    cardVisual.style.left = `${i * 1}px`;
    
    cardVisual.addEventListener('click', drawCard);
    deckElement.appendChild(cardVisual);
  }
}

// Sorteio de Cartas
function drawCard() {
  if (availableCards.length === 0) {
    availableCards = [...tarotDatabase];
  }

  if (mode === 'single') {
    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const cardData = availableCards.splice(randomIndex, 1)[0];
    
    selectedContainer.innerHTML = '';
    tripleSynthesis.style.display = 'none'; // Limpa painéis anteriores
    currentSelectedCards = [cardData];
    createCardUI(cardData, 0);

  } else if (mode === 'triple') {
    if (currentSelectedCards.length >= 3) {
      currentSelectedCards = [];
      selectedContainer.innerHTML = '';
      tripleSynthesis.style.display = 'none';
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const cardData = availableCards.splice(randomIndex, 1)[0];

    currentSelectedCards.push(cardData);
    createCardUI(cardData, currentSelectedCards.length - 1);

    if (currentSelectedCards.length === 3) {
      checkTripleFlippedState();
    }
  }
}

// Criar Elementos da Carta
function createCardUI(data, index) {
  const slot = document.createElement('div');
  slot.className = 'card-slot';

  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.index = index;

  const backFace = document.createElement('div');
  backFace.className = 'card-face card-back';

  const frontFace = document.createElement('div');
  frontFace.className = 'card-face card-front';
  
  const img = document.createElement('img');
  img.src = data.image;
  img.alt = data.name;
  
  frontFace.appendChild(img);
  card.appendChild(backFace);
  card.appendChild(frontFace);

  const description = document.createElement('div');
  description.className = 'card-description';
  description.style.display = 'none';
  description.innerHTML = `<strong>${data.name}</strong>${data.path}`;

  // Evento ao clicar na carta para revelar
  card.addEventListener('click', () => {
    if (!card.classList.contains('flipped')) {
      card.classList.add('flipped');
      description.style.display = 'block';

      if (mode === 'single') {
        generateSingleSynthesis(data);
      } else if (mode === 'triple') {
        checkTripleFlippedState();
      }
    }
  });

  slot.appendChild(card);
  slot.appendChild(description);
  selectedContainer.appendChild(slot);
}

// Gera a explicação do resultado no Modo Carta Única
function generateSingleSynthesis(data) {
  tripleSynthesis.innerHTML = `
    <h3>Resultado do Oráculo</h3>
    <p>A revelação de <strong>${data.name}</strong> indica que as energias deste Caminho estão influenciando diretamente o seu momento presente. ${data.meaning}</p>
  `;
  tripleSynthesis.style.display = 'block';
}

// Verifica e gera a síntese no Modo Três Cartas
function checkTripleFlippedState() {
  if (currentSelectedCards.length < 3) return;

  const flippedCards = selectedContainer.querySelectorAll('.card.flipped');
  if (flippedCards.length === 3) {
    generateTripleSynthesis();
  }
}

// Gera a síntese composta no Modo Três Cartas
function generateTripleSynthesis() {
  const c1 = currentSelectedCards[0];
  const c2 = currentSelectedCards[1];
  const c3 = currentSelectedCards[2];

  const synthesisText = `Sua tiragem une <strong>${c1.name}</strong>, <strong>${c2.name}</strong> e <strong>${c3.name}</strong>. A convergência destes três Caminhos indica um momento em que as forças do oculto e da transformação estão atreladas. A presença de <em>${c1.name}</em> estabelece a base da sua situação atual, enquanto <em>${c2.name}</em> atua como o catalisador ou o desafio a ser superado. Finalmente, <em>${c3.name}</em> aponta para a resolução e a manifestação do seu destino. Integre a sabedoria e as autoridades desses caminhos para dominar o resultado.`;

  tripleSynthesis.innerHTML = `
    <h3>Convergência do Destino</h3>
    <p>${synthesisText}</p>
  `;
  tripleSynthesis.style.display = 'block';
}

renderDeck();