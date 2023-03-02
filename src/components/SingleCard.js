import './SingleCard.css';

export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="card__front" src={card.src} alt="card front" />
        <img
          className="card__back"
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
