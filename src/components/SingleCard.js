export default function SingleCard({ src }) {
  return (
    <div className="card">
      <div>
        <img className="card__front" src={src} alt="card front" />
        <img className="card__back" src="/img/cover.png" alt="card back" />
      </div>
    </div>
  );
}
