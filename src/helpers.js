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