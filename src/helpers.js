export const SUITS = ["Spades", "Diamonds", "Clovers", "Hearts"];
export const CARDNUMS = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

export function buildDeck(){
    return SUITS.flatMap((suit) =>
        CARDNUMS.map((nums) => ({
            suit: suit,
            nums: nums,
            id: `${nums}${suit}`
        }))
    );
}

export function shuffleDeck(cardArray){
    const arr = [...cardArray];
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [a[j], a[i]];
    }
    return a;
}