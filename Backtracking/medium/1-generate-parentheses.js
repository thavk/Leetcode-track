// Problem: Generate Parentheses

// Category: Backtracking

// Difficulty: Medium

// Description: Given n pairs of parentheses, write a function to generate all combinations 
//              of well-formed parentheses. Return the result as an array of strings.


var generateParenthesis = function(n) {
    const result = [];

    const generate = (str, open, close) => {
        if (str.length === n * 2) {
            result.push(str);
            return;
        };

        if (open < n) {
            generate(str + '(', open + 1, close);
        };

        if (close < open) {
            generate(str + ')', open, close + 1);
        };
    };

    generate('', 0, 0);
    return result;
};