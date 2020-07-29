const assert = require('assert');
const Game = require('../models/game');
const Player = require('../models/player');

describe('Game', function () {
    let game1;
    let player1;
    let player2;

    beforeEach(function () {
        player1 = new Player('Iain');
        player2 = new Player('Gary');
        game1 = new Game(player1, player2);
    });

    it('has two players', function () {
        assert.strictEqual(game1.player1, player1);
        assert.strictEqual(game1.player2, player2);
    });

    it('starts with a deck of 52 cards', function () {
        assert.strictEqual(game1.deck.cards.length, 52);
    });
});