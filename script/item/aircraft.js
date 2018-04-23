class Aircraft extends Item {
    constructor(x, y, speed) {
        let aircraftImage = ImageLoader.instance().getImageByName('anything')
        super(aircraftImage, x, y, 30, 30)
        
        this.speed = speed
    }

    moveUp() {
        this.y -= this.speed
    }

    moveDown() {
        this.y += this.speed
    }

    moveLeft() {
        this.x -= this.speed
    }

    moveRight() {
        this.x += this.speed
    }

    positionShootFrom() {
        let p = {
            x: this.x + this.width * 0.5,
            y: this.y
        }
        return p
    }
}
