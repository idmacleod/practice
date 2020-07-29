const Player = function (name) {
    this.name = name;
    this.hand = [];
}

Player.prototype.pickUp = function (card) {
    this.hand.push(card);
}

Player.prototype.valueHand = function () {
    return this.hand.reduce((acc, card) => acc + card.getValue(), 0);
}

module.exports = Player;