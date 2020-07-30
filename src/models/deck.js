import Card from './card';

const Deck = function () {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    const ranks = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
                   'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    this.cards = [];
    for (const suit of suits) {
        for (const rank of ranks) {
            this.cards.push(new Card(rank, suit));
        }
    }
    this.shuffle();
}

//Implementing the Durstenfeld Shuffle Algorithm
Deck.prototype.shuffle = function () {
    const n = this.cards.length;
    for (let i = n-1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
}

Deck.prototype.dealCardTo = function (player) {
    if (this.cards.length > 0) {
        const card = this.cards.pop();
        player.pickUp(card);
    }
}

module.exports = Deck;