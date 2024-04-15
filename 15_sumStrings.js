function sumStrings(a,b) { 
    let stringArray1 = a.split(" ").join("")
    let stringArray2 = b.split(" ").join("")

    let total = Number(stringArray1) + Number(stringArray2)

    return total
}

console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))