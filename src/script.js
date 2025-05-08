function generateCard() {
  const suits = [
    { symbol: "♥", className: "heart" },
    { symbol: "♠", className: "spade" },
    { symbol: "♣", className: "club" },
    { symbol: "♦", className: "diamond" }
  ];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const card = document.getElementById("card");
  const topSuit = document.getElementById("top-suit");
  const bottomSuit = document.getElementById("bottom-suit");
  const cardValue = document.getElementById("card-value");

  // Quitar cualquier clase de palo anterior
  card.className = "card " + randomSuit.className;

  topSuit.textContent = randomSuit.symbol;
  bottomSuit.textContent = randomSuit.symbol;
  cardValue.textContent = randomValue;

  // Leer inputs de tamaño
  const width = document.getElementById("input-width").value;
  const height = document.getElementById("input-height").value;

  card.style.width = width ? width + "px" : "200px";
  card.style.height = height ? height + "px" : "300px";
}

// Botón que genera nueva carta
document.getElementById("btn-generate").addEventListener("click", generateCard);

// Temporizador que genera carta cada 10 segundos
setInterval(generateCard, 10000);
