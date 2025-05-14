// Problem: Valid Parentheses

// Category: Stacks

// Difficulty: Easy

// Description: Given a string s containing just the characters 
//               '(', ')', '{', '}', '[' and ']', 
//              determine if the input string is valid. An input string is valid if:
//              1. Open brackets are closed by the same type of brackets.
//              2. Open brackets are closed in the correct order.
//              3. Every close bracket has a corresponding open bracket of the same type.

var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else if ((stack[stack.length - 1] === '(' && s[i] === ')') || (stack[stack.length - 1] === '[' && s[i] === ']') || (stack[stack.length - 1] === '{' && s[i] === '}')) {
            stack.pop();
        } else {
            return false;
        };
    };

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};