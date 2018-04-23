let images = {
    'anything': 'image/anything.png'
}

ImageLoader.instance().loadImages(images, function() {
    let sm = SceneManager.instance()
    sm.loadScene(new GameScene())
    sm.startRunloop()
})
