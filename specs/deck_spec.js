const assert = require('assert');
const Deck = require('../models/deck');

describe('Deck', function () {
    let deck1;

    beforeEach(function () {
        deck1 = new Deck();
    });

    it('should have 52 cards', function () {
        assert.strictEqual(deck1.cards.length, 52);
    });

    it('can be shuffled', function () {
        deck1.shuffle();
        // console.log(deck1); //Impossible to test, but can print to console to check
    });
});