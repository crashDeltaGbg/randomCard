/* GLOBAL VARIABLES */
const deck = generateDeck();
console.log(deck);
/* FUNCTIONS */
function generateDeck() {
    let suits = ['&hearts;', '&clubs;', '&diams;', '&spades;'];
    let deck = [];
    for (let suit of suits) {
        for (let i = 2; i <= 14; i++) {
            let val = `${i}`;
            if (i === 11) {
                val = 'J';
            }
            ;
            if (i === 12) {
                val = 'Q';
            }
            ;
            if (i === 13) {
                val = 'K';
            }
            ;
            if (i === 14) {
                val = 'A';
            }
            ;
            let color = (suit === '&hearts;' || suit === '&diams;') ? 'red' : 'black';
            let card = {
                suit: suit,
                rank: val,
                value: i,
                color: color
            };
            deck.push(card);
        }
    }
    return deck;
}
function updateUI() {
    // Slumpar index i deck
    const rand = Math.floor(Math.random() * deck.length);
    // Plockar kortet på det indexet
    const card = deck.splice(rand, 1)[0];
    // Skapar HTML av den informationen
    const el = `
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
    let target = document.querySelector('main');
    // Töm main
    target.innerHTML = '';
    // Appenda nya kortet
    target.insertAdjacentHTML('beforeend', el);
}
updateUI();
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
    if (deck.length) {
        updateUI();
        document.querySelector('.counter').innerHTML = `${deck.length} / 52`;
    }
    else {
        alert('Kortleken är slut!');
    }
});
