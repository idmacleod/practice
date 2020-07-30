import Deck from './deck';

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.deck = new Deck();
        this.deck.dealCardTo(this.player1);
        this.deck.dealCardTo(this.player2);
    }
}

export default Game;