//StAuth10244: I Edres Osmani, 000918923 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else

import { buildDeck, shuffleDeck, SUITS, CARDNUMS} from "./helpers";
import Card from "./card";
import { useState } from "react";
import "./App.css";
import Deck from "./deck";

function App() {
	const [deck, createDeck] = useState(buildDeck());
	const [hand, createHand] = useState([]);
	const [pickedId, setPickedId] = useState(null);

	function drawOne(){
		if (deck.length == 0) return;
		
		const cardIndex = Math.floor(Math.random() * deck.length);
		const card = deck[cardIndex];

		createDeck(deck.filter((_, i) => i != cardIndex));
		createHand([...hand, card])
	}

	function dealCard(n) {
		const all = shuffleDeck([...deck, ...hand]);
		createHand(all.slice(0, n));
		createDeck(all.slice(n));
		setPickedId(null);
	}

	function reset(){
		createDeck(buildDeck());
		createHand([]);
		setPickedId(null);
	}

	function regroup(){
		createHand(shuffleDeck(hand));
	}

	function wildCard(){
		const suit = SUITS[Math.floor(Math.random() * SUITS.length)];
		const num = CARDNUMS[Math.floor(Math.random() * CARDNUMS.length)];

		createHand([...hand, {suit, num, id :`${num}${suit}_${Date.now()}`}]);
	}

	function toss(){
		if(!pickedId) return;
		createHand(hand.filter(card => card.id !== pickedId))
		setPickedId(null);
	}

	function pickedCard(card){
		if(!pickedId){
			setPickedId(card.id);
		}else if(pickedId == card.id){
			setPickedId(null);
		}else{
			const a = hand.findIndex(c => c.id == pickedId);
			const b = hand.findIndex(c => c.id == card.id);
			const newHand = [...hand];
			[newHand[a], newHand[b]] = [newHand[b], newHand[a]];
			createHand(newHand);
			setPickedId(null);
		}
	}

  	return (
		<div className="app">
			<h1>Card App</h1>
			<p>Deck: {deck.length} Hand: {hand.length}</p>

			<Deck count={deck.length} onClick={drawOne} />

			<div className="controls">
				<button onClick={() => dealCard(5)}>Deal 5</button>
				<button onClick={() => dealCard(7)}>Deal 7</button>
				<button onClick={reset}>Reset</button>
				<button onClick={regroup}>Regroup</button>
				<button onClick={wildCard}>Wildcard</button>
				<button onClick={toss} disabled={!pickedId}>Toss</button>
			</div>

			<div className="hand">
				{hand.map(card => (
					<Card key={card.id} suit={card.suit} num={card.num} picked={card.id == pickedId} onClick={() => pickedCard(card)}/>
				))}
			</div>

		</div>
  	);
}

export default App;