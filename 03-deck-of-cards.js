function printDeckOfCards(arr) {

    let result = [];

    for (let curr of arr) {

        let face = '';
        let suit = '';

        if (curr.length == 3) {
            face = curr.slice(0, 2);
            suit = curr.charAt(2);
        } else {
            face = curr.charAt(0);
            suit = curr.charAt(1);
        }

        let card = createCard(face, suit);

        if (card.includes("Invalid")) {
            console.log(card);
            return; 
        }

        result.push(card);
    }

    console.log(result.join(' '));

    function createCard(face, suit) {

        switch (face) {
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '10':
            case 'J':
            case 'Q':
            case 'K':
            case 'A':
                break;
            default: return `Invalid card: ${face}${suit}`;
        }

        let code = '';

        switch (suit) {
            case 'S': code = '\u2660';
                break;
            case 'H': code = '\u2665';
                break;
            case 'D': code = '\u2666';
                break;
            case 'C': code = '\u2663';
                break;
                default: return `Invalid card: ${face}${suit}`;
        }

        let card = {
            face: face,
            suit: code,
            toString() {
                return `${card.face}${card.suit}`;
            }
        }

        return card.toString();
    }
}

    printDeckOfCards(['AS', '10D', 'KH', '2C']);
    printDeckOfCards(['5S', '3D', 'QD', '1C']);
