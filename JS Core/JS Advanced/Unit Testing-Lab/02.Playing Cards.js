function makeCard(face,suit) {
    let allFaces=['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let allSuits=['S','H','D','C'];

    if(!allFaces.includes(face)){
        throw new Error("Invalid card face: " + face);
    }

    if(!allSuits.includes(suit)){
        throw new Error("Invalid card suit: " + suit);
    }
    return {
        face,
        suit,
        toString: function () {
            let suitCode={
                'S': "\u2660", // ♠
                'H': "\u2665", // ♥
                'D': "\u2666", // ♦
                'C': "\u2663", // ♣
            };

            return this.face+suitCode[this.suit];
        }
    }
}