const log = console.log.bind(console)

const randomBetween = function(min, max) {
    return Math.random() * (max - min) + min
}

const collide = function(item1, item2) {
    let i1 = item1
    let i2 = item2

    let x1 = i1.x
    let x2 = i2.x
    let y1 = i1.y
    let y2 = i2.y
    let w1 = i1.width
    let w2 = i2.width
    let h1 = i1.height
    let h2 = i2.height

    let mx1 = x1 + w1 * 0.5
    let mx2 = x2 + w2 * 0.5
    let my1 = y1 + h1 * 0.5
    let my2 = y2 + h2 * 0.5

    if (Math.abs(mx1 - mx2) <= (w1 + w2) * 0.5) {
        if (Math.abs(my1 - my2) <= (h1 + h2) * 0.5) {
            return true
        }
    }
    return false
}
