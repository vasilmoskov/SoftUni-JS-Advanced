function matrixIsMagical(matrix) {
    let aggregation = 0;

    for (let c = 0; c < matrix[0].length; c++) {
        aggregation += matrix[0][c];
    }

    for (let r = 0; r < matrix.length; r++) {
        let aggregationOfNextDimension = 0;

        for (let c = 0; c < matrix[r].length; c++) {
            aggregationOfNextDimension += matrix[r][c];
        }

        if (aggregation != aggregationOfNextDimension) {
            return false;
        }
    }

    for (let c = 0; c < matrix[0]; c++) {
        let aggregationOfNextDimension = 0;

        for (let r = 0; r < matrix.length; r++) {
            aggregationOfNextDimension += matrix[r][c];
        }

        if (aggregation != aggregationOfNextDimension) {
            return false;
        }
    }

    return true;
}

console.log(matrixIsMagical([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
));

console.log(matrixIsMagical([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   ));
console.log(matrixIsMagical([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));