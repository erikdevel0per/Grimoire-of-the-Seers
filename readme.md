# Leitura de Tarô

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
├── index.html        # Estrutura principal e seletores
├── styles.css        # Estilização mística e animações
└── script.js        # Lógica do baralho, modos e síntese