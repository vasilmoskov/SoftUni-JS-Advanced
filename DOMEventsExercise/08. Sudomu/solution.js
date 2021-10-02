function solve() {
    let quickCheckButton = document.querySelectorAll('tfoot tr td button')[0];
    let clearButton = document.querySelectorAll('tfoot tr td button')[1];

   let rows = Array.from(document.querySelectorAll('tbody tr'));

    let board = Array.from(document.querySelectorAll('#exercise tbody tr'))
        .map(row => Array.from(row.querySelectorAll('input'))
        .map(x => Number(x.value)));

    let checkParagraph = document.querySelector('check p');
    let table = document.querySelector('exercise table');

    clearButton.addEventListener('click', clear);

    function clear(e) {
        for (let i = 0; i < rows.length; i++) {
            let cols = rows[i].children;

            for (let i = 0; i < cols.length; i++) {
                cols[i].children[0].value = '';
            }
        }

        checkParagraph.textContent = '';
        table.style.border = '';
    }

    quickCheckButton.addEventListener('click', check);

    function check(e) {

        let isValid = isValidSudoku(board);

        table.style.border = isValid ? '2px solid green' : '2px solid red';

        checkParagraph.textContent = isValid
            ? "You solve it! Congratulations!"
            : "NOP! You are not done yet...";
        checkParagraph.style.color = isValid ? 'green' : 'red';

    }

    function isValidSudoku(board) {
        for (let row = 0; row < board.length; row++) {
            let rowObj = { 1: 0, 2: 0, 3: 0 };
            let colObj = { 1: 0, 2: 0, 3: 0 };

            for (let col = 0; col < board[row].length; col++) {
                let curRowCell = board[row][col];
                let curColCell = board[col][row];

                rowObj[curRowCell]++;
                colObj[curColCell]++;
            }
        }

        let rowValues = Object.values(rowObj);
        let colValues = Object.values(colObj);

        if (rowValues.length > board.length || rowValues.some(x => x !== 1) ||
            colValues.length > board.length || colValues.some(x => x !== 1)) {
            return false;
        }

        return true;
    }
}