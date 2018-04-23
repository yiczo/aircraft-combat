class Aircraft extends Item {
    constructor(x, y, speed) {
        let aircraftImage = ImageLoader.instance().getImageByName('anything')
        super(aircraftImage, x, y, 30, 30)
        
        this.speed = speed
    }

    moveUp() {
        this.y -= this.speed
        this.makeSureInRect()
    }

    moveDown() {
        this.y += this.speed
        this.makeSureInRect()
    }

    moveLeft() {
        this.x -= this.speed
        this.makeSureInRect()
    }

    moveRight() {
        this.x += this.speed
        this.makeSureInRect()
    }

    makeSureInRect() {
        let canvasWidth = 500
        let canvasHeight = 500

        if (this.x < 0) {
            this.x = 0
        } else if (this.x + this.width > canvasWidth) {
            this.x = canvasWidth - this.width
        }

        if (this.y < 0) {
            this.y = 0
        } else if (this.y + this.height > canvasHeight) {
            this.y = canvasHeight - this.height
        }
     }

    positionShootFrom() {
        let p = {
            x: this.x + this.width * 0.5,
            y: this.y
        }
        return p
    }
}
