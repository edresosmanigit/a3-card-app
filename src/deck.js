// src/Deck.js
function Deck({ count, onClick }) {
  return (
    <div>
      {count === 0 ? (
        <div className="deck-empty">no cards remaining</div>
      ) : (
        <div className="deck" onClick={onClick}>
          {count} left
        </div>
      )}
    </div>
  );
}

export default Deck;