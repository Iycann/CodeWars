function mutateMyStrings(str1, str2) {
    let arrayString1 = str1.split("")
    let arrayString2 = str2.split("")
    let arrayContainer = []
    arrayContainer.push(str1)

    for(let i = 0; i < arrayString1.length; i++) {
        if(arrayString1[i] == arrayString2[i]) {
        } else {
            arrayString1.splice(i, 1, arrayString2[i])
            arrayContainer.push(arrayString1.join("")) 
        }
    }
    return arrayContainer.join("\n") + "\n"
}

console.log(mutateMyStrings('bubble gum', 'turtle ham'))

//Objetivo: Dados 2 strings, el primer string tiene que convertirse en el segundo string letra por letra
//Ejemplo: 
// bubble gum  1 string
// tubble gum
// turble gum
// turtle gum
// turtle hum
// turtle ham  2 string
// `bubble gum\n
// tubble gum\n
// turble gum\n
// turtle gum\n
// turtle hum\n
// turtle ham\n
// `

// [
//     ['b'], ['u'], 
// ]