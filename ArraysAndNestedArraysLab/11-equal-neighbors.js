function pairsCount(matrix) {

    let pairsCount = 0;

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {

            let currElem = matrix[r][c];

            if(c < matrix[r].length - 1) {
                let rightNeighbor = matrix[r][c + 1];
                if (currElem == rightNeighbor) {
                    pairsCount++;
                }
            }

            if(r < matrix.length - 1) {
                let downNeighbor = matrix[r + 1][c];
                if (currElem == downNeighbor) {
                    pairsCount++;
                }
            }
        }
    }

    return pairsCount;
}

console.log(pairsCount([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));
console.log(pairsCount([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
));