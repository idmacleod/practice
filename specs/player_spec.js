const assert = require('assert');
const Player = require('../src/player');

describe('Player', function () {
    let player1;

    beforeEach(function () {
        player1 = new Player('Iain');
    });

    it('should have a name', function () {
        assert.strictEqual(player1.name, 'Iain');
    });

    it('should start with an empty hand', function () {
        assert.strictEqual(player1.hand.length, 0);
    });
});