function mutateMyStrings(str1, str2) {
 
    let result = []; //Array vacio que se le agregara el array alterado
    let currentString = str1.split(""); // Se convierte el string1 en un array

    result.push(currentString.join("")); //Al array vacio "result" le metemos el array currentString convertido en string

    str1.split("").map((char, i) => { 
        if (char !== str2[i]) { // si el caracter en string1 no es igual al caracter en string2 entonces aplica la siguiente logica
            currentString[i] = str2[i]; // al caracter de current string en el index [i] asignale el valor de el string2[i]
            result.push(currentString.join("")); 
        }
    });

    return result.join("\n") + "\n"; 
}

console.log(mutateMyStrings('bubble gum', 'turtle ham'))