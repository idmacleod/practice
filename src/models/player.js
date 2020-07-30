class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }

    pickUp(card) {
        this.hand.push(card);
    }

    valueHand() {
        return this.hand.reduce((acc, card) => acc + card.getValue(), 0);
    }
}

export default Player;