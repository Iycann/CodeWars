function regexTest(string) {
    // return /z/gi.test(string)
    // return string.match(/miliano/gi)
        return string.replace(/miliano/gi, "mily")
}

console.log(regexTest('Emiliano'))