// Problem: Valid Sudoku

// Category: Hash Map, Set

// Difficulty: Medium

// Description: Determine if a 9x9 Sudoku board is valid. Only the filled cells 
// need to be validated according to the following rules:
// 1. Each row must contain the digits 1-9 without repetition.
// 2. Each column must contain the digits 1-9 without repetition.
// 3. Each of the nine 3x3 sub-boxes must contain the digits 1-9 without repetition.


var isValidSudoku = function(board) {
    const boardTable = {
        1: {x: [], y: []},
        2: {x: [], y: []},
        3: {x: [], y: []},
        4: {x: [], y: []},
        5: {x: [], y: []},
        6: {x: [], y: []},
        7: {x: [], y: []},
        8: {x: [], y: []},
        9: {x: [], y: []},
    };
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (Number(board[i][j])) {
                boardTable[board[i][j]].x.push(j + 1)
                boardTable[board[i][j]].y.push(i + 1)
            }
        };
    };

    for (let i = 1; i < 10; i++) {
        let xValTest = boardTable[i].x.filter((item, index) => boardTable[i].x.indexOf(item) !== index);
        let yValTest = boardTable[i].y.filter((item, index) => boardTable[i].y.indexOf(item) !== index);
        if (xValTest.length > 0) {
            return false;
        } else if (yValTest.length > 0) {
            return false;
        };
    };
    
    for (let subGridIndex = 0; subGridIndex < 9; subGridIndex++) {
        let seen = new Set();

        let startRow = Math.floor(subGridIndex / 3) * 3;
        let startCol = (subGridIndex % 3) * 3;

        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] !== '.') {  
                    if (seen.has(board[i][j])) {
                        return false;
                    }
                    seen.add(board[i][j]);
                }
            }
        }
    }

    return true; 
};