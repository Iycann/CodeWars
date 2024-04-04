function maskify(str) {

    let arrayString = str.split("")
    let numeroCaracteres = 0

        if(str.length > 4) {
            numeroCaracteres = str.length - 4

            for(let i = 0; i < numeroCaracteres; i++) {

               arrayString.splice(i, 1, "#")

            }

        return arrayString.join("")
    } else {
        return str
    }
}

console.log(maskify("2"))

//Objetivo: Dado un string poner el signo # a todos los caracteres menos los ultimos 4
// 1. Checar que el string sea mayor a 4 caracteres de lo contrario regrasarlo tal cual
// 1.1 Identificar(saber su ubicacion en el index) cuales si vas a cambiar
// 2. Convetir los caracteres restantes a signo de #
// 3. Regresarlo ya convertido en string