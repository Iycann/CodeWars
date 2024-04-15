function wave(str){
    
    let stringArray = str.split("")
    let stringArray2 = str.split("")
    let stringConcat = str
    let stringWave = []
    let arrayWave = []
    for (let i = 0; i < stringArray.length; i++) {
        stringWave.push(stringConcat.replace(stringArray[i], stringConcat.substr(stringArray.length)))
    }

    for (let i = 0; i < stringConcat.length; i++) {
        stringWave.push(stringConcat[i])
    }


    return stringWave
}

console.log(wave("hello"))