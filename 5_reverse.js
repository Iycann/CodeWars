function reverseWords(str) {
    let arrayString = str.split(" ")

    let letras = arrayString.map(function(i) {
        let separar = i.split("")
        return separar.reverse().join("")
    })

    return letras.join(" ")
}


console.log(reverseWords("This is an example!"))

//Objetivo: Poner alrevez cada palabra del string
//1. Separar el string por palabras
//2. Poner alrevez cada palabra
//3. 