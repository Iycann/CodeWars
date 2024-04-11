function getMissingElement(serie) {

   let suma = 0
    for (let i = 0; i < serie.length; i++) {
        suma += serie[i]
    }
    suma = 45 - suma
  return suma
}

console.log(getMissingElement([0,5,1,3,2,9,7,6,4]))

//Objetivo: Dado un array de una serie de numeros del 0 al 9, encontrar el numero faltante