function findShort(s) {

  let contenedorPalabras = s.split(" ")
  let contadorLetras = []
  
  for(let i = 0; i < contenedorPalabras.length; i++) {
    contadorLetras.push(contenedorPalabras[i].length)
  }

  return Math.min(...contadorLetras)
// Objetivo: Del string que entra a la funcion findShort este me tiene que regresar el numero de las palabras mas corta
// 1. Tengo que convertir el string en array 
// 2. Separar el array en palabras
// 3. Convertir cada elemento del array en numeros
// 4. Comparar cada elemento del array para averiguar cual es el menor

}

console.log(findShort("Voy a ir a jugar"))