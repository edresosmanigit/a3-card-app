import { buildDeck} from "./helpers";
import Card from "./card";
import { use, useState } from "react";
import "./App.css";

function App() {
	const [deck, createDeck] = useState(buildDeck());
	const [hand, createHand] = useState([]);

	function drawOne(){
		if (deck.length == 0) return;
		
		const cardIndex = Math.floor(Math.random() * deck.length);
		const card = deck[cardIndex];

		createDeck(deck.filter((_, i) => i != cardIndex));
		createHand([...hand, card])
	}

  	return (
		<div className="app">
			<h1>Card App</h1>
			<p>Deck: {deck.length} Hand: {hand.length}</p>

			{deck.length == 0 ? (
				<div className="empty">No cards left in the deck</div>
			) : (
				<div className="deck" onClick={drawOne}>
					{deck.length} left
				</div>
			)}

			<div className="hand">
				{hand.map(card => (
					<Card suit={card.suit} num={card.num} picked={false} onClick={() => {}}/>
				))}
			</div>
		</div>
  	);
}

export default App;