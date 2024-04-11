const rps = (p1, p2) => {
    let result = ""
    
    //Cuando empatan
    if (p1.length == p2.length) {
        result = "Draw!"
    } else {
        //Cuando rock gana a scissors
        if (p1.length == 4 && p2.length == 8) {
            result = "Player 1 won!"
        } else {
            //Cuando rock pierde a paper
            if (p1.length == 4 && p2.length == 5) {
                result = "Player 2 won!"
            } else {
                //Cuando scissors gana a paper
                if (p1.length == 8 && p2.length == 5) {
                    result = "Player 1 won!"
                } else {
                    if (p1.length == 8 && p2.length == 4) {
                        result = "Player 2 won!"
                    } else {
                        if (p1.length == 5 && p2.length == 8) {
                            result = "Player 2 won!"
                        } else {
                            if (p1.length == 5 && p2.length == 4) {
                                result = "Player 1 won!"
                            }
                        }
                    }
                }
            }
        }
    }
    return result
};

console.log(rps('rock', 'scissors'))