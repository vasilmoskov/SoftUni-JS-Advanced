function solution(moves) {

    function printDashboard(dashboard) {
        for (let r = 0; r < dashboard.length; r++) {
            console.log(dashboard[r].join('\t'));
        }
    }

    function thereAreEmptyFields(dashboard) {
        for (let r = 0; r < dashboard.length; r++) {
            for (let c = 0; c < dashboard[r].length; c++) {
                if (dashboard[r][c] == false) {
                    return true;
                }
            }
        }

        return false;
    }

    function playerHasWon(dashboard, player) {
        if ((dashboard[0][0] == player && dashboard[0][1] == player && dashboard[0][2] == player) ||
            (dashboard[1][0] == player && dashboard[1][1] == player && dashboard[1][2] == player) ||
            (dashboard[2][0] == player && dashboard[2][1] == player && dashboard[2][2] == player) ||
            (dashboard[0][0] == player && dashboard[1][0] == player && dashboard[2][0] == player) ||
            (dashboard[0][1] == player && dashboard[1][1] == player && dashboard[2][1] == player) ||
            (dashboard[0][2] == player && dashboard[1][2] == player && dashboard[2][2] == player) ||
            (dashboard[0][0] == player && dashboard[1][1] == player && dashboard[2][2] == player) ||
            (dashboard[2][0] == player && dashboard[1][1] == player && dashboard[0][2] == player)) {
            return true;
        }

        return false;
    }

        let dashboard =
        [[false, false, false],
            [false, false, false],
            [false, false, false]];

    for (let i = 0; i < moves.length - 1; i++) {

        if (!thereAreEmptyFields(dashboard)) {
            break;
        }

        let moveX = moves[i];
        let rX = moveX.split(' ')[0];
        let cX = moveX.split(' ')[1];

        while (dashboard[rX][cX] != false) {
            console.log("This place is already taken. Please choose another!");
            moveX = moves[++i];
            rX = moveX.split(' ')[0];
            cX = moveX.split(' ')[1];
        }

        dashboard[rX][cX] = 'X';

        if (playerHasWon(dashboard, 'X')) {
            console.log('Player X wins!');
            printDashboard(dashboard);
            return;
        }

        if (!thereAreEmptyFields(dashboard)) {
            break;
        }

        let moveO = moves[++i];
        let rO = moveO.split(' ')[0];
        let cO = moveO.split(' ')[1];

        while (dashboard[rO][cO] != false) {
            console.log("This place is already taken. Please choose another!");
            moveO = moves[++i];
            rO = moveO.split(' ')[0];
            cO = moveO.split(' ')[1];
        }

        dashboard[rO][cO] = 'O';

        if (playerHasWon(dashboard, 'O')) {
            console.log('Player O wins!');
            printDashboard(dashboard);
            return;
        }
    }

    console.log("The game ended! Nobody wins :(");
    printDashboard(dashboard);
}

solution(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);