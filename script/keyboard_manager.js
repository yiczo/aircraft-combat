class KeyboardManager {
    constructor() {
        this.keydowns = {}
        this.holdActions = {}
        this.listenHolds()

        this.keyUpListeners = {}
    }

    static instance(...args) {
        this.i = this.i || new KeyboardManager(...args)
        return this.i
    }

    listenHolds() {
        let self = this
        window.addEventListener('keydown', function(event) {
            self.keydowns[event.key] = true
        })
        window.addEventListener('keyup', function(event) {
            self.keydowns[event.key] = false
        })
    }

    registHoldAction(key, action) {
        this.holdActions[key] = action
    }

    registKeyUpAction(key, action) {
        var listener = function(event) {
            if (event.key == key) {
                action()
            }
        }

        window.addEventListener('keyup', listener)

        this.keyUpListeners[key] = listener
    }

    removeAllActions() {
        this.keydowns = {}
        this.holdActions = {}

        let keys = Object.keys(this.keyUpListeners)
        for (let i = keys.length - 1; i >= 0; i--) {
            let key = keys[i]
            let listener = this.keyUpListeners[key]
            window.removeEventListener('keyup', listener)
        }
    }

    checkHoldActionExecute() {
        let keys = Object.keys(this.holdActions)
        for (let i = keys.length - 1; i >= 0; i--) {
            let k = keys[i]
            if (this.keydowns[k]) {
                this.holdActions[k]()
            }
        }
    }
}