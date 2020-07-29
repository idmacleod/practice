const Game = require('./models/game');
const Player = require('./models/player');

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', startGame);
});

const startGame = function (event) {
    event.preventDefault();
    const player1 = new Player(event.target.p1.value);
    const player2 = new Player(event.target.p2.value);
    const game = new Game(player1, player2);
    console.dir(game);
}