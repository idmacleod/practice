import Game from './models/game';
import Player from './models/player';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', startGame);
});

const displayHands = function (game) {
    const hand1 = document.querySelector('#hand1');
    const hand2 = document.querySelector('#hand2');
    
    const cardsArray1 = game.player1.hand[0];
    const cardsArray2 = game.player2.hand[0];
    const card1 = document.createElement('li');
    card1.textContent = `${cardsArray1.displayName()}`;
    const card2 = document.createElement('li');
    card2.textContent = `${cardsArray2.displayName()}`;

    hand1.appendChild(card1);
    hand2.appendChild(card2);
}

const displayGame = function (game) {
    const gameHeader = document.querySelector('#game-header');
    const p1Hand = document.querySelector('#p1-hand');
    const p2Hand = document.querySelector('#p2-hand');

    gameHeader.textContent = `${game.player1.name} Versus ${game.player2.name}`;
    p1Hand.textContent = `${game.player1.name}'s Hand (${game.player1.valueHand()})`;
    p2Hand.textContent = `${game.player2.name}'s Hand (${game.player2.valueHand()})`;

    displayHands(game);
}

const startGame = function (event) {
    const formContainer = document.querySelector('#form-container');

    event.preventDefault();
    const player1 = new Player(event.target.p1.value);
    const player2 = new Player(event.target.p2.value);
    const game = new Game(player1, player2);

    formContainer.innerHTML = '';
    displayGame(game);
}