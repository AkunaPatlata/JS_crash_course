// task 1

function time () {
    const now = new Date();
    const timeElem = document.getElementById('time');
    timeElem.innerHTML = now.toLocaleTimeString();
};

setInterval(time, 1000);


// task 2

class Deck {
    constructor() {
      this.cards = [];
      const suits = ['♡', '♢', '♤', '♧'];
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
      for (let suit of suits) {
        for (let value of values) {
          this.cards.push({ suit, value });
        }
      }
      
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    draw() {
      return this.cards.pop();
    }
  }
  
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    addCard(card) {
        this.hand.push(card);
    }

    getCards() {
        return this.hand;
    }

    showPlayersDeck() {
        const playerHand = document.getElementById('for_deck')
        let mas = []
        let Nmas = []
        this.hand.map(obj => {
            Object.entries(obj).forEach(([key, value]) => {
              mas.push(`${value}`);
            });
          });
        for (let i = 0; i < 12; i += 2) {
            Nmas.push(mas[i]+mas[i+1])
        }
        let name = prompt('Enter your player name')
        playerHand.innerHTML += `<p>${name}'s deck is: ${Nmas.join(',')}.</p>`;
    }
}
  
const deck = new Deck();
deck.shuffle();

const player1 = new Player('Player 1');
const player2 = new Player('Player 2');

for (let i = 0; i < 6; i++) {
    player1.addCard(deck.draw());
    player2.addCard(deck.draw());
}

console.log(player1.getCards());
console.log(player2.getCards());

player1.showPlayersDeck()
player2.showPlayersDeck()
// querySelector
// querySelectorAll [player, player]
// player.innerHTML = "<div>hello</div>"

