console.log("Estan conectados")

let elInput = document.querySelector("#texto")

elInput.addEventListener("input", write)

let loEscrito = ""
let loEscondido = ""

function write(e) {
    loEscrito = e.target.value
    console.log(loEscrito)
    transform(e)
}

function transform(e) {
    let longitud = e.target.value.length

    for (let i = 0; longitud; i++) {
        loEscondido = "#".repeat(longitud)
        console.log({longitud})
        console.log({loEscondido})
        console.log({loEscrito})
        elInput.value = loEscondido
        return
    } 
    
}

// 1. una funcion que reciba el texto de e y lo almacene en una variable
// 2. otra function que mientras se escriba en el input... se transforme la longitud
// del texto en # y se almacene en otra variable
// 3. conectar el boton para que muestre una variable u otra cuando le piques




// const input = document.querySelector("input");
// const log = document.getElementById("values");

// input.addEventListener("input", updateValue);

// function updateValue(e) {
//   log.textContent = e.target.value;
// }