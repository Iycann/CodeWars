function twoSum(numbers, target) {
    
    let suma = 0
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i]
    }
    return suma
}

console.log(twoSum([1, 2, 3], 4))