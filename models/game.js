const Deck = require("./deck");

const Game = function (player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.deck = new Deck();
}

module.exports = Game;