import { buildDeck, shuffleDeck, SUITS} from "./helpers";
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

	function dealCard(n) {
		const all = shuffle([...deck, ...hand]);
		setHand(all.slice(0, n));
		setDeck(all.slice(n));
		setPickedId(null);
	}

	function reset(){
		setDeck(buildDeck());
		setHand([]);
		setPickedId(null);
	}

	function regroup(){
		setHand(shuffleDeck(hand));
	}

	function wildCard(){
		const suit = SUITS[Math.floor(Math.random() * SUITS.length)];
		const num = NUMS[Math.floor(Math.random() * NUMS.length)];

		setHand([...hand, {suit, num, id :`${value}${suit}_${Date.now()}`}]);
	}

  	return (
		<div className="app">
			<h1>Card App</h1>
			<p>Deck: {deck.length} Hand: {hand.length}</p>

			{deck.length == 0 ? (
				<div>No cards left in the deck</div>
			) : (
				<div className="deck" onClick={drawOne}>
					{deck.length} left
				</div>
			)}

			<div className="hand">
				{hand.map(card => (
					<Card key={card.id} suit={card.suit} num={card.num} picked={false} onClick={() => {}}/>
				))}
			</div>
		</div>
  	);
}

export default App;