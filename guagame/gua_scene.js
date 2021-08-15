class GuaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }

    static new(game) {
        var instance = new this(game)
        return instance
    }

    addElement(img) {
        this.elements.push(img)
    }

    draw() {
        for (let ele of this.elements) {
            this.game.drawImage(ele)
        }

    }

    update() {

    }
}
