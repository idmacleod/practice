const assert = require('assert');
import Deck from '../models/deck';
import Player from '../models/player';

describe('Deck', function () {
    let deck1;
    let player1;

    beforeEach(function () {
        deck1 = new Deck();
        player1 = new Player('Iain');
    });

    it('should have 52 cards', function () {
        assert.strictEqual(deck1.cards.length, 52);
    });

    it('can be shuffled', function () {
        deck1.shuffle();
        // console.log(deck1); //Impossible to test, but can print to console to check
    });

    it('can deal card to player', function () {
        deck1.dealCardTo(player1);
        assert.strictEqual(deck1.cards.length, 51);
        assert.strictEqual(player1.hand.length, 1);
    });
});