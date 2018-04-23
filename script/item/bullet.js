class Bullet extends Item {
    constructor(x, y) {
        let bulletImage = ImageLoader.instance().getImageByName('anything')
        super(bulletImage, x, y, 5, 5)
        
        this.speed = 10
    }

    moveUp() {
        this.y -= this.speed
    }
}
