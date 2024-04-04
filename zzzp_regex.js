pending

const REGEXP = /[\w]{1,} ^[_]/g ;

function regex(str) {
    // return /.{6,}/gi.test(str)
    // return /[a-z]{1,}/g.test(str)
    // return /[A-Z]{1,}/g.test(str)
    // return /\d{1,}/gi.test(str)
    // return !/[\W_]/g.test(str)

    return REGEXP.test(str)    
}

// ! NOT 
// /_/
// /^_/ solo en el principio
// /[^_]/  todo menos el _

// \w = a-z A-Z 0-9 _
// \W = !@#$%^&*()+{}|:">?< + _
//
console.log(regex("Letra1"))

// letr
// letra1
// LETRA1
// Letra1_
// Letra1!

// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long DONE
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)
// NO DEBE CONTENER !@#$%^&*()_+{}:"<?>"/*-+` 
// \W permite que pase _
// necesitas emular la funcionalidad de \W