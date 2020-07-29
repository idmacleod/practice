const assert = require('assert');
const Player = require('../models/player');
const Card = require('../models/card');

describe('Player', function () {
    let player1;
    let card1;
    let card2;

    beforeEach(function () {
        player1 = new Player('Iain');
        card1 = new Card('jack', 'clubs');
        card2 = new Card('three', 'diamonds');
    });

    it('should have a name', function () {
        assert.strictEqual(player1.name, 'Iain');
    });

    it('should start with an empty hand', function () {
        assert.strictEqual(player1.hand.length, 0);
    });

    it('can pick up card', function () {
        player1.pickUp(card1);
        assert.strictEqual(player1.hand.length, 1);
    });

    it('can value hand', function () {
        player1.pickUp(card1);
        player1.pickUp(card2);
        assert.strictEqual(player1.valueHand(), 13);
    });
});