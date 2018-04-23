class SceneManager {
    constructor() {
        this.scene = null

        this.canvas = document.querySelector('#id-canvas')
        this.context = this.canvas.getContext('2d')
    }

    static instance(...args) {
        this.i = this.i || new SceneManager(...args)
        return this.i
    }

    loadScene(scene) {
        this.scene = scene

        KeyboardManager.instance().removeAllActions()
        for (let i = scene.actions.length - 1; i >= 0; i--) {
            let action = scene.actions[i]
            KeyboardManager.instance().registAction(action)
        }
    }

    startRunloop() {
        this.runloop()
    }

    update() {
        KeyboardManager.instance().checkHoldActionExecute()

        this.scene.update()
    }

    draw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for (let i = this.scene.items.length - 1; i >= 0; i--) {
            let item = this.scene.items[i]
            this.context.drawImage(item.image, item.x, item.y, item.width, item.height)
        }
    }

    runloop() {
        if (!this.scene) {
            return
        }

        let self = this
        setTimeout(function() {
            self.update()
            self.draw()
            self.runloop()
        }, (1000 / 60))
    }
}
