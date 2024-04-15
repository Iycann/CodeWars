function cockroachSpeed(speed) {

    let transform = 0.036
    let total = speed / transform
    return Math.floor(total)
}

console.log(cockroachSpeed(1.08))