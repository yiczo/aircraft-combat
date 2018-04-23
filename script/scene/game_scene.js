class GameScene extends Scene {
    constructor() {
        super()
    }

    setupItems() {
        this.aircraft = new Aircraft(0, 0, 5)
        this.items.push(this.aircraft)
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
            self.items.push(bullet)
        })
        this.actions = [moveUp, moveDown, moveLeft, moveRight, shoot]
    }

    update() {
        for (let i = this.items.length - 1; i >= 0; i--) {
            let item = this.items[i]
            if (item instanceof Bullet) {
                item.moveUp()
                // if a bullet out of canvas, remove it
                if (item.y + item.height <= 0) {
                    let index = this.items.indexOf(item)
                    if (index > -1) {
                        this.items.splice(index, 1)
                    }
                }
            }
        }
    }
}
