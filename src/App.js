import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SingleCard from './components/SingleCard';

const cardImages = [
  { src: '/img/helmet-1.png' },
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // shuffle cards
  const shuffleCards = () => {
    const cards = [...cardImages, ...cardImages];

    for (let i = cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }

    const shuffledCards = cards.map((card, i) => {
      return { ...card, id: Math.random() * 100000 };
    });

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);

  return (
    <section className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard src={card.src} key={card.id} />
        ))}
      </div>
    </section>
  );
}

export default App;
