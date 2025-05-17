// Problem: Evaluate Reverse Polish Notation

// Category: Stacks

// Difficulty: Medium

// Description: Evaluate the value of an arithmetic expression in Reverse Polish Notation.
//              Valid operators are +, -, *, and /. Each operand may be an integer or 
//              another expression. Division between two integers should truncate toward zero.



var evalRPN = function(tokens) {
    const stack = [];
    let answer = 0;

    for (let i = 0; i < tokens.length; i++) {
        if (!isNaN(tokens[i])) {
            stack.push(Number(tokens[i]));
        };

        if (isNaN(tokens[i])) {
            let second = stack.pop();
            let first = stack.pop();
            let expression = first + ' ' + tokens[i] + ' ' + second;

            answer = eval(expression);
            if (answer > 0) {
                answer = Math.floor(answer);
            } else {
                answer = Math.ceil(answer);
            }
            stack.push(answer);
        };
    };

    if (tokens.length < 2) {
        return Number(tokens[0]);
    }

    return answer;
};