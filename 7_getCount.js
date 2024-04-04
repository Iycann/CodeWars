function getCount(str) {
    let vowelCounter = str.match(/[aeiou]/gi, "")
    
    if(vowelCounter === null) {
        return 0
    } else {
        return vowelCounter.length
    }

}

console.log(getCount("fgh"))

//Objetivo: Contar las vocales de un string que solamente son minusculas y sin espacio
