function solution(string) {
    return string.replace(/(?=[A-Z])/g, " ")
}

console.log(solution("camelCasing"))

