let canvas = document.querySelector('#id-canvas')
let context = canvas.getContext('2d')

let images = {
    'anything': 'image/anything.png'
}

ImageLoader.instance().loadImages(images, function() {
    context.drawImage(ImageLoader.instance().getImageByName('anything'), 0, 0)
})

let km = KeyboardManager.instance()
km.registHoldAction('a', function() {
    console.log('a')
})

km.registKeyUpAction('c', function() {
    console.log('c')
})

km.removeAllActions()

km.registHoldAction('d', function() {
    console.log('d')
})

km.registKeyUpAction('b', function() {
    console.log('b')
})

setInterval(function() {
    km.checkHoldActionExecute()
}, (1000 / 60))

