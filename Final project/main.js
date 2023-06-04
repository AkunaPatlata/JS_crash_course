const tilesContainer = document.querySelector(".tiles");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

const imageFolder = "photos/";
const images = ["Кучма.jpg", "байден.jpg", "залужний.jpg", "зеленський.png", "зеленськийй.jpeg", "мед.jpg", "Джонсон.jpg", "порох.jpg"];
const imagesPicklist = [...images, ...images];
const tileCount = imagesPicklist.length;

let revealedCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;
let score = 0;
let timer = 120;
let isFirstTileClick = true;
let prevTileImage = null;
let consecutiveMatches = 0;
let timerInterval;

function startTimer() {
  timerInterval = setInterval(() => {
    timer--;
    timerElement.textContent = timer;

    if (timer === 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function updateScore(points) {
  score += points;
  scoreElement.textContent = score;
}

function buildTile(image) {
  const element = document.createElement("div");
  element.classList.add("tile");
  element.setAttribute("data-image", image);
  element.setAttribute("data-revealed", "false");

  const frontFace = document.createElement("div");
  frontFace.classList.add("tile-face", "tile-front");

  const backFace = document.createElement("div");
  backFace.classList.add("tile-face", "tile-back");
  backFace.style.backgroundImage = `url(${imageFolder + image})`;

  element.appendChild(frontFace);
  element.appendChild(backFace);

  element.addEventListener("click", () => {
    const revealed = element.getAttribute("data-revealed");

    if (awaitingEndOfMove || revealed === "true" || element === activeTile) {
      return;
    }

    if (isFirstTileClick) {
      isFirstTileClick = false;
      startTimer();
    }

    element.classList.add("flip");

    if (!activeTile) {
      activeTile = element;
      return;
    }

    const imageToMatch = activeTile.getAttribute("data-image");

    if (imageToMatch === image) {
      element.setAttribute("data-revealed", "true");
      activeTile.setAttribute("data-revealed", "true");

      if (consecutiveMatches !== 0) {
        consecutiveMatches++;
        updateScore(10 * consecutiveMatches);
      } else {
        consecutiveMatches = 1;
        updateScore(10);
        prevTileImage = imageToMatch;
      }

      activeTile = null;
      revealedCount += 2;

      if (revealedCount === tileCount) {
        setTimeout(() => {
          endGame();
        }, 500);
      }
    } else {
      awaitingEndOfMove = true;

      setTimeout(() => {
        element.classList.remove("flip");
        activeTile.classList.remove("flip");
        activeTile = null;
        consecutiveMatches = 0;
        awaitingEndOfMove = false;
      }, 1000);
    }
  });

  return element;
}

function endGame() {
  stopTimer();
  alert(`You win! Your score is ${score}. Refresh to start again.`);
}

for (let i = 0; i < tileCount; i++) {
  const randomIndex = Math.floor(Math.random() * imagesPicklist.length);
  const image = imagesPicklist[randomIndex];
  const tile = buildTile(image);

  imagesPicklist.splice(randomIndex, 1);
  tilesContainer.appendChild(tile);
}
