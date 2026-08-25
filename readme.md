# Grimório dos Videntes

Uma aplicação web interativa e mística inspirada nos Caminhos de *Lord of the Mysteries*. O Oráculo permite realizar leituras de tarô em dois modos distintos, fornecendo interpretações individuais e leituras compostas sobre os caminhos do destino.

---

## Sobre o Projeto

O **Oráculo Beyonder** é uma interface desenvolvida em HTML5, CSS3 e JavaScript (Vanilla) que simula uma mesa de leitura de cartas. O objetivo é oferecer uma experiência imersiva e responsiva para consulta mística, combinando elementos visuais elegantes com lógica de síntese automatizada.

### Funcionalidades

* **Modo Carta Única:** Sorteia uma carta do baralho, revelando o caminho e exibindo uma interpretação detalhada do seu resultado direto.
* **Modo Três Cartas (Carta Tripla):** Permite retirar até 3 cartas sequenciais. Quando todas são reveladas, a aplicação calcula automaticamente a **Convergência do Destino** — uma síntese combinada das três forças sorteadas.
* **Mesa Interativa:** Animações 3D de giro de carta (*card flip*), efeitos visuais de iluminação e monte interativo.
* **Design Responsivo:** Adaptado para telas de computadores, tablets e dispositivos móveis.

---

## Tecnologias Utilizadas

* **HTML5:** Estruturação semântica da aplicação.
* **CSS3:** Animações 3D (`transform-style`, `backface-visibility`), CSS Grid/Flexbox e variáveis customizadas (`:root`).
* **JavaScript (ES6+):** Manipulação da DOM, gerenciamento de estado e algoritmo de sorteio sem repetição.

---

## Explicação da Estrutura do Código

### 1. Estrutura de Arquivos

```text
Grimoire of the Seers/
├── assets/                  # Arquivos de mídia e recursos estáticos
│   ├── cards/               # Ilustrações das cartas de Tarô
│   │   ├── carta-1.png      # O Tolo
│   │   ├── carta-2.png      # O Mágico
│   │   ├── carta-3.png      # A Alta Sacerdotisa
│   │   ├── carta-4.png      # A Imperatriz
│   │   ├── carta-5.png      # O Imperador
│   │   ├── carta-6.png      # O Hierofante
│   │   ├── carta-7.png      # Os Amantes
│   │   ├── carta-8.png      # O Carro
│   │   ├── carta-9.png      # A Força
│   │   ├── carta-10.png     # O Eremita
│   │   ├── carta-11.png     # A Roda da Fortuna
│   │   ├── carta-12.png     # A Justiça
│   │   ├── carta-13.png     # O Enforcado
│   │   ├── carta-14.png     # A Morte
│   │   ├── carta-15.png     # A Temperança
│   │   ├── carta-16.png     # O Demônio
│   │   ├── carta-17.png     # A Torre
│   │   ├── carta-18.png     # A Estrela
│   │   ├── carta-19.png     # A Lua
│   │   ├── carta-20.png     # O Sol
│   │   ├── carta-21.png     # O Julgamento
│   │   └── carta-22.png     # O Mundo
│   └── verso.png            # Verso padrão utilizado para todas as cartas
├── index.html               # Estrutura principal da aplicação
├── script.js                # Lógica da tiragem, manipulação de estado e banco de dados
├── styles.css               # Estilização, temas e animações
└── README.md                # Documentação do projeto
