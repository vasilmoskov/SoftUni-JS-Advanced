function printDiagonalSums(matrix) {

    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;

    let c = matrix[0].length - 1;

    for (let r = 0; r < matrix.length; r++) {
        sumMainDiagonal += matrix[r][r];
        sumSecondaryDiagonal += matrix[r][c--];
    }

    console.log(sumMainDiagonal + ' ' + sumSecondaryDiagonal);
}

printDiagonalSums([[20, 40],
[10, 60]]
);

printDiagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]
);