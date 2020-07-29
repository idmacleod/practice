const Player = function (name) {
    this.name = name;
    this.hand = [];
}

Player.prototype.pickUp = function (card) {
    this.hand.push(card);
}

module.exports = Player;