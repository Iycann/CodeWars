function sum(numbers) {
    
    let total = numbers.reduce((previous, next) => previous + next)
    return total
}

console.log(sum([1, 2, 4, -2]))