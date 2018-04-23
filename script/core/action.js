const ActionType = {
    KEYUP: 'keyup',
    HOLD: 'hold',
}

class Action {
    constructor(type, key, func) {
        this.type = type
        this.key = key
        this.func = func
    }
}
