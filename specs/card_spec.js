const assert = require('assert');
const Card = require('../models/card');

describe('Card', function () {
    let card1;
    let card2;
    let card3;

    beforeEach(function () {
        card1 = new Card('ten', 'diamonds');
        card2 = new Card('queen', 'hearts');
        card3 = new Card('ace', 'spades');
    });

    it('should have a rank', function () {
        assert.strictEqual(card1.rank, 'ten');
    });

    it('should have a suit', function () {
        assert.strictEqual(card1.suit, 'diamonds');
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
});