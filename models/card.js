const Card = function (rank, suit) {
    this.rank = rank;
    this.suit = suit;
}

Card.prototype.getValue = function () {
    const values = {'ace': 11, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
                    'six': 6, 'seven' :7, 'eight': 8, 'nine': 9, 'ten': 10,
                    'jack': 10, 'queen': 10, 'king': 10};
    return values[this.rank.toLowerCase()];
}

module.exports = Card;