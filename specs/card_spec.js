const assert = require('assert');
const Card = require('../models/card');

describe('Card', function () {
    let card1;
    let card2;

    beforeEach(function () {
        card1 = new Card('Ten', 'Diamonds');
        card2 = new Card('Queen', 'Hearts');
    });

    it('should have a face', function () {
        assert.strictEqual(card1.face, 'Ten');
    });

    it('should have a suit', function () {
        assert.strictEqual(card1.suit, 'Diamonds');
    });
});