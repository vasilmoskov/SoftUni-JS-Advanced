function cardFactory(face, suit) {

    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'D', 'K', 'A'];

    let suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    if (!faces.includes(face) || !Object.keys(suits).includes(suit)) {
        throw new Error("Error");
    }

    let card = {
        cardFace: face,
        cardSuit: suits[suit],
        toString() {
            return this.cardFace + this.cardSuit;
        }
    }

    return card;
}

module.export = cardFactory;


try {
    cardFactory('A', 'S');
    cardFactory('10', 'H');
    cardFactory('1', 'C');
} catch (ex) {
    console.log(ex.message)
}