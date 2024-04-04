function sum (numbers) {
    
    let sumCicle = 0 
    for (let i = 0; i < numbers.length; i++) {
        sumCicle += numbers[i]
    }
    return sumCicle.toFixed(2) //redondea al numero mayor haciendo que se convierta en string y se ponen 2 decimales despues del punto
}

console.log(sum([1.2, 2, -6, 2]))

//Objetivo: Dado un array, se suman todos los numeros ya sean negativos o decimales, en caso de un array vacio, regresar 0