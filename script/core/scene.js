class Scene {
    constructor() {
        this.items = []
        this.actions = []

        this.setupItems()
        this.setupActions()
    }

    setupItems() {

    }

    setupActions() {

    }

    update() {

    }

    addItem(item) {
        this.items.push(item)
    }

    removeItem(item) {
       let index = this.items.indexOf(item)
        if (index > -1) {
            this.items.splice(index, 1)
        }
    }
}
