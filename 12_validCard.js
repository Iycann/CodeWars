function validCard(card){
  let cleanCard = card.replace(/\s/gi, "")
  let cardArray = cleanCard.split("")
  let numberArray = cardArray.map(Number)

  for (let i = 0; i < numberArray.length; i += 2) {
    if ((numberArray[i] * 2) > 9 ) {
        let changeCard = numberArray[i] * 2

        changeCard = changeCard % 10 + Math.floor(changeCard / 10)
        numberArray[i] = changeCard
        
    } else {
        numberArray[i] *= 2
    }
  }
  return numberArray.reduce((acumulador, valorActual) => acumulador + valorActual) % 10 == 0
}

console.log(validCard("5457 1111 9323 4311"))

//Objetivo: Checar que la tarejeta sea valida, checando que cada 2 caracteres este lo multiplique x2 y si es mayor a 9 sumar estos 2 numeros, o sino regresar solamente el numero. 
// Al final sumar todos los numeros y checar que sea modulo de 10
//1. Limpiar el string
//2. Verificar que el string no sea mayor de 16 caracteres
//3. Multiplicar x2 cada dos caracteres empezando por el primer caracter
//4. Checar que el caracter sea menor a 9, si es mayor sumar estos dos digitos
//5. Sumar todos los digitos y checar que sea modulo de 10

