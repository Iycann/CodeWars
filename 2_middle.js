function getMiddle(s) {
let contarLetras = s.length

if(contarLetras == 1) {
    return s
} else if (contarLetras == 2) {
    return s
} else if(contarLetras % 2 == 0) {
    return s.substr((contarLetras / 2) - 1, 2)
} else {
    return s.substr(contarLetras / 2, 1)
}

}

console.log(getMiddle('t'))

// Objetivo: Poner la letra del centro de la palabra, si es impar poner esa letra, si es par poner las 2 letras y si esta solo poner esa letra

// 1. Contar cada una de las letras de la palabra. 
// 2. Ver si la palabra es par, impar o un solo caracter
// 3. Si la palabra es par identificar y poner los caracteres del medio
// 4. Si la palabra es par identificar y poner los caracteres del medio
// 5. Si es un solo caracter... arrojar ese caracter.

