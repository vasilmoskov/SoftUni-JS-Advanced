function biggestElement(matrix) {
    let biggestElement = Number.MIN_VALUE;

    matrix.forEach(row => {
        row.forEach(element => {
            if(element > biggestElement) {
                biggestElement = element;
            }
        });
    });

    /*
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if(matrix[r][c] > biggestElement) {
                biggestElement = matrix[r][c];
            }
        }
    }
    */

    return biggestElement;
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ));
console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));