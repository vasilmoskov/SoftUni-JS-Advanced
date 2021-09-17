function solution(input) {
    function printMatrix(matrix) {
        for (let r = 0; r < matrix.length; r++) {
            console.log(matrix[r].join(' '));
        }
    }

    let matrix = [];

    for (let i = 0; i < input.length; i++) {
        matrix[i] = input[i].split(' ');
    }

    let sumMainDiagonal = 0;
    let sumSecondaryDiagonal = 0;

    let col = matrix[0].length - 1;

    for (let r = 0; r < matrix.length; r++) {
        sumMainDiagonal += Number(matrix[r][r]);
        sumSecondaryDiagonal += Number(matrix[r][col--]);
    }

    if (sumMainDiagonal !== sumSecondaryDiagonal) {
        printMatrix(matrix);
        return;
    }

    col = matrix[0].length - 1;

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (r !== c && c !== col) {
                matrix[r][c] = sumMainDiagonal;
            }
        }
        col--;
    }

    printMatrix(matrix);
}

// solution(['5 3 12 3 1',
//     '11 4 23 2 5',
//     '101 12 3 21 10',
//     '1 4 5 2 2',
//     '5 22 33 11 1']
// );
solution(['1 1 1',
    '1 1 1',
    '1 1 0']
);