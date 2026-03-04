//StAuth10244: I Edres Osmani, 000918923 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else

import "./card.css";

function Card({suit, num, picked, onClick}){
    const redCards = suit == "♥" || suit =="♦";
    const blackCards = suit == "♠" || suit =="♣";
    const classes = `card ${redCards ? "red" : ""} ${blackCards ? "black" : ""} ${picked ? "picked" : ""}`

    return(
        <div className={classes} onClick={onClick}>
            {num}{suit}
        </div>
    );
}

export default Card;
