class ImageLoader {
    constructor() {
        this.loadedImages = {}
    }

    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    loadImages(images, callback) {
        let names = Object.keys(images)
        let loaded = []
        let self = this
        for (let i = names.length - 1; i >= 0; i--) {
            let name = names[i]
            let path = images[name]
            let image = new Image()
            image.src = path
            image.onload = function() {
                self.loadedImages[name] = image
                loaded.push(name)
                if (loaded.length == names.length) {
                    callback()
                }
            }
        }
    }

    getImageByName(name) {
        return this.loadedImages[name]
    }
}
