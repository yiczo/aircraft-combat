class EndScene extends Scene {
    constructor() {
        super()
    }

    setupItems() {

    }

    setupActions() {
        let self = this
        let replay = new Action(ActionType.KEYUP, 'r', function() {
            SceneManager.instance().loadScene(new GameScene())
        })
        this.actions = [replay]
    }
}
