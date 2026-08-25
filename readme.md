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

Grimoire of th.../
├── assets/                  # Pasta para arquivos de mídia/recursos estáticos
│   ├── cards/              # Subpasta contendo as imagens das cartas
│   │   ├── carta-1.png     # Imagem da carta 1
│   │   ├── carta-2.png     # Imagem da carta 2
│   │   ├── carta-3.png     # Imagem da carta 3
│   │   ├── carta-4.png     # Imagem da carta 4
│   │   ├── carta-5.png     # Imagem da carta 5
│   │   ├── carta-6.png     # Imagem da carta 6
│   │   ├── carta-7.png     # Imagem da carta 7
│   │   ├── carta-8.png     # Imagem da carta 8
│   │   ├── carta-9.png     # Imagem da carta 9
│   │   ├── carta-10.png    # Imagem da carta 10
│   │   ├── carta-11.png    # Imagem da carta 11
│   │   ├── carta-12.png    # Imagem da carta 12
│   │   ├── carta-13.png    # Imagem da carta 13
│   │   ├── carta-14.png    # Imagem da carta 14
│   │   ├── carta-15.png    # Imagem da carta 15
│   │   ├── carta-16.png    # Imagem da carta 16
│   │   ├── carta-17.png    # Imagem da carta 17
│   │   ├── carta-18.png    # Imagem da carta 18
│   │   ├── carta-19.png    # Imagem da carta 19
│   │   ├── carta-20.png    # Imagem da carta 20
│   │   ├── carta-21.png    # Imagem da carta 21
│   │   └── carta-22.png    # Imagem da carta 22
│   └── verso.png           # Imagem do verso padrão de todas as cartas
├── index.html              # Arquivo HTML principal (estrutura da página)
├── readme.md               # Documentação explicativa do projeto
├── script.js               # Arquivo JavaScript (lógica do projeto/jogo)
└── styles.css              # Arquivo de estilos CSS (visual e layout)
