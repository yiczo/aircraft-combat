class GameScene extends Scene {
    constructor() {
        super()
    }

    setupItems() {
        this.aircraft = new Aircraft(0, 0, 5)
        this.addItem(this.aircraft)
    }

    setupActions() {
        let self = this
        let moveUp = new Action(ActionType.HOLD, 'w', function() {
            self.aircraft.moveUp()
        })
        let moveDown = new Action(ActionType.HOLD, 's', function() {
            self.aircraft.moveDown()
        })
        let moveLeft = new Action(ActionType.HOLD, 'a', function() {
            self.aircraft.moveLeft()
        })
        let moveRight = new Action(ActionType.HOLD, 'd', function() {
            self.aircraft.moveRight()
        })
        let shoot = new Action(ActionType.KEYUP, 'j', function() {
            let p = self.aircraft.positionShootFrom()
            let bullet = new Bullet(p.x, p.y)
            self.addItem(bullet)
        })
        this.actions = [moveUp, moveDown, moveLeft, moveRight, shoot]
    }

    update() {
        this.generateEnemy()

        for (let i = this.items.length - 1; i >= 0; i--) {
            let item = this.items[i]

            if (item instanceof Bullet) {
                item.moveUp()
                let isOutOfCanvas = (item.y + item.height <= 0)
                if (isOutOfCanvas) {
                    this.removeItem(item)
                }
            }

            if (item instanceof Enemy) {
                item.moveDown()
                let isOutOfCanvas = (item.y > 500)
                if (isOutOfCanvas) {
                    this.removeItem(item)
                }
            }
        }
    }

    generateEnemy() {
        let self = this
        setTimeout(function() {
            let enemy = new Enemy(randomBetween(0, 500 - 25), (0 - 25))
            self.addItem(enemy)
        }, randomBetween(1, 1000000))
    }
}
