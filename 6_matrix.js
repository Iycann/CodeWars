function matrix(matrixSquare) {
  
  let matrixNew = 0
    for (let i = 0; i < matrixSquare.length; i++) {
      for (let j = 0; j < matrixSquare[i].length; j++) {
        if (i == j && (matrixSquare[i][j] < 0)) {
          matrixSquare[i][j] = 0
          } else {
            if (i == j && matrixSquare[i][j] >= 0)
            matrixSquare[i][j] = 1
          }
        }
    }
  return matrixSquare
}

console.log(matrix([
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]))

// Objetivo: Cambiar la diagonal principal, con las sig condiciones: si es neg ponerlo en 0 y todos los demas num a 0 incluyendo el 0