class Enemy extends Item {
    constructor(x, y) {
        let enemyImage = ImageLoader.instance().getImageByName('anything')
        super(enemyImage, x, y, 25, 25)

        this.speed = randomBetween(3, 6)
    }

    moveDown() {
        this.y += this.speed
    }
}
