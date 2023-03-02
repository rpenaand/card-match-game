import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';

const cardImages = [
  { src: '/img/potion-1.png', matched: false },
  { src: '/img/helmet-1.png', matched: false },
  { src: '/img/ring-1.png', matched: false },
  { src: '/img/scroll-1.png', matched: false },
  { src: '/img/shield-1.png', matched: false },
  { src: '/img/sword-1.png', matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);

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

  // Handle a Choice
  const handleChoice = (card) => {
    !choice1 ? setChoice1(card) : setChoice2(card);
    console.log(choice1, choice2);
  };

  // Compare Cards
  const compareCards = () => {
    if (!choice1 || !choice2) return;
    if (choice1.src === choice2.src) {
      setCards((prevCards) => {
        return prevCards.map((card) => {
          if (card.src === choice1.src) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
      });
      resetTurn();
    } else {
      setTimeout(() => {
        resetTurn();
      }, 1000);
    }
  };

  useEffect(compareCards, [choice1, choice2]);

  console.log(cards);

  // Reset Turn
  const resetTurn = () => {
    setChoice1(null);
    setChoice2(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  return (
    <section className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            handleChoice={handleChoice}
            flipped={card === choice1 || card === choice2 || card.matched}
          />
        ))}
      </div>
    </section>
  );
}

export default App;
