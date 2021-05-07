interface Card {
  suit: string,
  rank: string,
  value: number,
  color: string
}

/* GLOBAL VARIABLES */
const deck: Card[] = generateDeck();
console.log(deck);


/* FUNCTIONS */
function generateDeck(): Card[] {
  let suits: string[] = ['&hearts;', '&clubs;', '&diams;', '&spades;'];
  let deck: Card[] = [];

  for(let suit of suits){
    for(let i: number = 2; i <= 14; i++) {
      let val: string = `${i}`;
      if(i === 11) {val = 'J'};
      if(i === 12) {val = 'Q'};
      if(i === 13) {val = 'K'};
      if(i === 14) {val = 'A'};

      let color: string = (suit === '&hearts;' || suit === '&diams;') ? 'red' : 'black';

      let card: Card = {
        suit: suit,
        rank: val,
        value: i,
        color: color
      }
      deck.push(card);
    }
  }
  return deck;
}

function updateUI(): void {
  // Slumpar index i deck
  const rand = Math.floor(Math.random() * deck.length);

  // Plockar kortet på det indexet
  const card: Card = deck.splice(rand, 1)[0];

  // Skapar HTML av den informationen
  const el: any = `
  <article class="${card.color}">
    <header>
      <p class="suit">${card.suit}</p>
      <p>${card.rank}</p>
    </header>
    <h1 class="suit">${card.suit}</h1>
    <footer>
      <p class="suit">${card.suit}</p>
      <p>${card.rank}</p>
    </footer>
  </article>`; 

// Leta reda på <main>
let target: HTMLElement = document.querySelector('main');

// Töm main
target.innerHTML = '';

// Appenda nya kortet
target.insertAdjacentHTML('beforeend', el);

}

updateUI();

let btn: HTMLElement = document.querySelector('button');

btn.addEventListener('click', () => {
  if (deck.length) {
    updateUI();
    document.querySelector('.counter').innerHTML = `${deck.length} / 52`;
  } else {
    alert('Kortleken är slut!');
  }
});
