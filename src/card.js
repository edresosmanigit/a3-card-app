function Card({suit, num, picked, onClick}){
    const redCards = suit == "Hearts" || suit =="Diamonds";
    const blackCards = suit == "Spades" || suit =="Clubs";
    const classes = `card ${redCards ? "red" : ""} ${blackCards ? "black" : ""} ${picked ? "picked" : ""}`

    return(
        <div className={classes} onClick={onClick}>
            {num}{suit}
        </div>
    );
}

export default Card;
