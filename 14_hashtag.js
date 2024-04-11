function generateHashtag (str) {

    let stringFixed = str.split(" ")

    for (let i = 0; i < stringFixed.length; i++) {
        if (stringFixed[i] !== "") {
            stringFixed[i] = stringFixed[i][0].toUpperCase() + stringFixed[i].substr(1)
        }
    }

    stringFixed = stringFixed.join("")

    if (stringFixed.length == 0) {
        stringFixed = false
    } else if (stringFixed.length >= 140) {
        stringFixed = false
    } else {
        stringFixed = "#" + stringFixed
    }

     return stringFixed
}

console.log(generateHashtag("a".repeat(140)))