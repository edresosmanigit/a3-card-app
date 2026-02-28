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
