pending

function findMissingLetter(array) {
    let abecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    let esMayus = array.some((item) => /[A-Z]/.test(item));

    let minuscula = [];

    if(esMayus === true) {
         minuscula.push(array.map((element) => element.toLowerCase()))  
    }

    console.log(minuscula)
   
    
    return esMayus
}

console.log(findMissingLetter(['A', 'B', 'C', 'D', 'F']))
  //Objetivo: Encontrar la letra faltante, ya sea mayus o minuscula
  //0. Convertir a minuscula el input
  //0.1 Acordarte si es mayuscula o minuscula 
  //1. Saber el abecedario
  //2. Compararlo con el array
  //2.1 Identificar donde va a empezar a hacer la comparacion
  //2.2 Regresar a mayuscula o minuscula
  //3. Poner la letra faltante

//('O', 'Q', 'R', 'S')

// 1. Aprender sobre el .some() method
// 2. Aprender sobre el .map() method
// 3. Aprender sobre REGEX

// Arrow Functions (item) => /[A-Z]/.test(item)
    // function nombreDeFuncion(item) { 
    //     return /[A-Z]/.test(item)
    // }

    // for(let i = 0; i < array.length; i++) {
    //   if ( /[A-Z]/.test(array[i]) ) {
    //     return true
    //   }
    // }
    
