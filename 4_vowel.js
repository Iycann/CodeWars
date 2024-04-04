// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, "")
// }

function disemvowel(str) {
 
    // iterable
    let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"] // Arreglo de vocales mayus y minus

    let stringArray = str.split("") // Variable "a" que separa por letra el string y lo convierte en un array
    
 // El metodo map recorre el array llamado stringArray y cada vez que pasa por una de sus partes corre la funcion letraDelString
// Ejemplo: [T, h, i, s, etc]

    let reemplazar = stringArray.map(function(letraDelString) { // .map() recibe una funcion anonima 

// Recorre el array llamado vocales y luego checa si el parametro letraDelString equivale a cualquiera de los elementos del array vocales 
// De ser asi, se reemplaza utilizando el metodo .replace() que recibe 2 parametros, elprimero es lo que se quiere reemplazar y el 2do con lo que se va a reemplazar
         for(let i = 0; i < vocales.length; i++) { 
            if(letraDelString == vocales[i]) {
               letraDelString = letraDelString.replace(letraDelString , "")
            }
         }

       return letraDelString; // Este es el return de la funcion anonima
       
    }); 
    return reemplazar.join("") // Este es el return de la funcion disemvowel y se usa el metodo .join() para convertir el array en string
}

 console.log( disemvowel("This website is for losers LOL!") )


//Objetivo: Quitar todas las vocales del string
//1. Conocer las vocales
//2. Identificar las vocales del string
//3. Eliminar las vocales
//4. Poner el string sin las vocales

// replace(a, b) puede recibir dos parametros
// map(callback(a, b, c)) puede recibir una function con tres parametros
// map(callback(valorActual, indice, array))
