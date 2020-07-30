const assert = require('assert');
import Player from '../models/player';
import Card from '../models/card';

describe('Player', function () {
    let player1;
    let card1;
    let card2;

    beforeEach(function () {
        player1 = new Player('Iain');
        card1 = new Card('Jack', 'Clubs');
        card2 = new Card('Three', 'Diamonds');
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