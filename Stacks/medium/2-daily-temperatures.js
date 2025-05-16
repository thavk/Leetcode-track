// Problem: Daily Temperatures

// Category: Stacks

// Difficulty: Medium

// Description: Given an array of integers temperatures represents the daily 
//              temperatures, return an array answer such that answer[i] is the 
//              number of days you have to wait after the ith day to get a warmer temperature. 
//              If there is no future day for which this is possible, keep answer[i] == 0.


var dailyTemperatures = function(temperatures) {
    const stack = [];
    const returnArr = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            returnArr[prevIndex] = i - prevIndex;
        };
        
        stack.push(i);
    };

    return returnArr;
};