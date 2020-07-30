const assert = require('assert');
import Card from '../models/card';

describe('Card', function () {
    let card1;
    let card2;
    let card3;

    beforeEach(function () {
        card1 = new Card('Ten', 'Diamonds');
        card2 = new Card('Queen', 'Hearts');
        card3 = new Card('Ace', 'Spades');
    });

    it('should have a rank', function () {
        assert.strictEqual(card1.rank, 'Ten');
    });

    it('should have a suit', function () {
        assert.strictEqual(card1.suit, 'Diamonds');
    });

    it('should have a value if pip card', function () {
        assert.strictEqual(card1.getValue(), 10);
    });

    it('should have a value if face card', function () {
        assert.strictEqual(card2.getValue(), 10);
    });

    it('should have a value if aces high', function () {
        assert.strictEqual(card3.getValue(), 11);
    });

    it('can display its name', function () {
        assert.strictEqual(card3.displayName(), 'Ace of Spades')
    })
});