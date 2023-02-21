// Definir uma lista de frases de escritores brasileiros
const quotes = [
  "A vida é a arte do encontro, embora haja tanto desencontro pela vida. - Vinicius de Moraes",
  "Para trás dos meus olhos, para trás da minha testa, há uma coisa que não pensa, uma coisa que não sente, que não é nada. - Clarice Lispector",
  "Amar é mudar a alma de casa. - Mario Quintana",
  "A gente morre é para provar que viveu. - Guimarães Rosa",
  "Sei que sou um tanto errado. Mas quem não é? - Machado de Assis"
];

// Selecionar elementos da interface gráfica
const quoteContainer = document.querySelector("#quote-container");
const quote = document.querySelector("#quote");
const newQuoteButton = document.querySelector("#new-quote");

// Função para gerar uma citação aleatória
function generateQuote() {
  // Escolher uma citação aleatória da lista
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[randomIndex];
  
  // Atualizar a interface gráfica com a nova citação
  quote.textContent = quoteText;
}

// Adicionar um evento de clique ao botão "Nova citação"
newQuoteButton.addEventListener("click", generateQuote);

// Gerar a primeira citação aleatória ao carregar a página
generateQuote();