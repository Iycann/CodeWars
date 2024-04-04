pending

function longestMountainPass(mountains, E) {
    let indexMountain = []

    // for loop adentro de otro for loop
    // map adentro del for loop
    // un for loop adentro de un map
    // forEach adentro de un loop
    // un loop adentro de un forEach
    for (let i = 0; i < mountains.length; i++) {
        // la variable que rastrea el index es i
        // valor de donde inicio
        // push(i - caminoTrack) = startIndex

        // variable que rastrea energia
        let energiaActual = E

        // variable que rastree el camino avanzado
        let caminoTrack = 0
        let startIndex = i - caminoTrack
    
    for () {


        //condicion donde puedes avanzar con energia pero sin que se gaste


        //condicion donde puedes avanzar sin energia
        if (energiaActual == 0 && mountains[i] > mountains[i + 1]) {
            caminoTrack += 1
        }

        // condicion donde ya no puedes avanzar
        if (energiaActual <= 0 && mountains[i + 1] > mountains[i] ) {
            break
        }

        //condicion que rastrea la energia
        if (energiaActual > 0 && mountains[i + 1] > mountains[i]) {

            //condicion de si la energia es menor al tama;o de la monta;a


            energiaActual = energiaActual - (mountains[i + 1] - mountains[i]) 
            caminoTrack += 1
        }

        // lo que tiene que volver a empezar es ?

        indexMountain.push([caminoTrack, startIndex])

    }


    return indexMountain
}
}
console.log(longestMountainPass([1, 8, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7))

//Objetivo: Descubrir cual es el camino que mas lejos te lleve dependiendo de la energia


//Primero. Ir avanzando entre monta;as checando cuanta energia posees, guardando el index en donde vas, 
//actualizando el valor si es una monta:a mas grande y si es menor o igual la energia no cambia
//Segundo. Checar que la energia no sea negativa porque no podriamos subir la monta;a
//Tercero. Si la energia es mayor a 0 entonces la longitud del camino aumenta y si es menor a 0 pues ya no puedes avanzar. Si la montana es mas chica que la anterior o igual 
//y la energia es 0 aun puedes avanzar\
//Cuarto. Almacenar la longitud que pudiste avanzar y el index en donde iniciaste de cada camino que simulaste
//Quinto. Comparar cual simulacion es la que mas longitud posee y regreasar eso mas el index de la misma

for() { // empiza desde cada monta;a 0, 1, 2 ,3 
    let energiaActual = E
    let caminoTrack = 0
    let startIndex = i - caminoTrack

        for() { // el que intenta llegar lo mas lejos que puede 0 -> x
            actualizar las varibales afurea
        }

 push al array
}