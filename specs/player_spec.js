Player = require('../src/player');
assert = require('assert');

const player1 = new Player('Iain');

describe('Player', function () {
    it('should have a name', function () {
        assert.strictEqual('Iain', player1.name);
    });
});