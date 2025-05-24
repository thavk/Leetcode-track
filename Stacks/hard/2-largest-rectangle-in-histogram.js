// Problem: Largest Rectangle in Histogram

// Category: Monotonic Stack

// Difficulty: Hard

// Description: Given an array of integers heights representing the histogram's bar height where the width of each bar is 1,
//              return the area of the largest rectangle in the histogram.




var largestRectangleArea = function(heights) {
    const stack = [];
    let largest = 0;
    
    heights.push(-1);

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] > heights[i]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            const area = height * width;
            largest = Math.max(largest, area)
        };

        stack.push(i);
    };

    return largest;
};