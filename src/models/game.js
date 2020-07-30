import Deck from './deck';

const Game = function (player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.deck = new Deck();
    this.deck.dealCardTo(this.player1);
    this.deck.dealCardTo(this.player2);
}

module.exports = Game;