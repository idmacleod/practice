const Card = require('./card');

const Deck = function () {
    const suits = ['spades', 'hearts', 'diamonds', 'clubs'];
    const ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven',
                   'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
    this.cards = [];
    for (suit of suits) {
        for (rank of ranks) {
            this.cards.push(new Card(rank, suit));
        }
    }
}

//Implementing the Durstenfeld Shuffle Algorithm
Deck.prototype.shuffle = function () {
    const n = this.cards.length;
    for (let i = n-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
}

module.exports = Deck;