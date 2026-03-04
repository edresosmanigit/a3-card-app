//StAuth10244: I Edres Osmani, 000918923 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else
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