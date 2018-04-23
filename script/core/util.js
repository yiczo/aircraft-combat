const log = console.log.bind(console)

const randomBetween = function(min, max) {
    return Math.random() * (max - min) + min
}
