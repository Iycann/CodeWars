function likes(names) {
    let stringLike = "";
   

    if (names.length === 0) {
        stringLike = 'no one likes this'
    } else  names = names.join(" ").replace(/,/gi , "").split(" "); if (names.length === 1) {
        stringLike = `${names[0]} likes this`
    } else if (names.length === 2) {
        stringLike = `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        stringLike = `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length > 3) {
        stringLike = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
    return stringLike
}

console.log(likes(['Andrew', 'Jacob']));
