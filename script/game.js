class Game {
    constructor() {

    }

    static instance(...args) {
        this.i = this.i || new Game(...args)
        return this.i
    }
}