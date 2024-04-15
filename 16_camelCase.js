String.prototype.camelCase = function() {
    let stringArray = this.split(" ")

    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] !== "") {
            stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].substr(1)
        } 
    }

    stringArray = stringArray.join("")

    return stringArray
}


console.log(camelCase("test case".camelCase()))

// Objetivo: Dado un string ponerlo en camel case