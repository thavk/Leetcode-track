// Problem: Basic Calculator II

// Category: Stack

// Difficulty: Medium

// Description: Evaluate the arithmetic expression given in string `s` which contains non-negative integers and the operators +, -, *, /.
//              The expression does not contain parentheses, and follows standard operator precedence.


var calculate = function(s) {
    const stack = [];
    
    const parser = (i) => {
        if (!isNaN(s[i]) && s[i] !== ' ') {
            let int = 0;

            while (s.length > i && !isNaN(s[i]) && s[i] !== ' ') {
                int = int * 10 + (s.charCodeAt(i) - '0'.charCodeAt(0));
                i++;
            };

            stack.push(int);
            i--;
        };
        return i;
    };
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue;

        i = parser(i);

        if (isNaN(s[i]) && s[i] !== ' ') {
            let curr = 0;
            let converted = 0;
            switch (s[i]) {
                case '+':
                    stack.push(s[i]);
                    break;
                case '-':
                    stack.push(s[i]);
                    break;
                case '*':
                    while (isNaN(s[i]) || s[i] === ' ') {
                        i++;
                    };
                    curr = stack.pop();
                    i = parser(i);
                    converted = stack.pop();
                    stack.push(curr * converted);
                    break;
                case '/':
                    while (isNaN(s[i]) || s[i] === ' ') {
                        i++;
                    };
                    curr = stack.pop();
                    i = parser(i);
                    converted = stack.pop();
                    stack.push(Math.trunc(curr / converted));
                    break;
            };
        };
    };
    
    let result;
    for (let l = 0; l < stack.length; l++) {
        if (result === undefined) result = stack[l];

        if (stack[l] === '+') {
            l++;
            result += stack[l];
        } else if (stack[l] === '-'){
            l++;
            result -= stack[l];
        };
    };

    return result;
};