// Problem: Trapping Rain Water

// Category: Two Pointers

// Difficulty: Hard

// Description: Given n non-negative integers representing an elevation map where the width of each bar is 1, 
//              compute how much water it can trap after raining.

var trap = function(height) {
    let areaOfWater = 0;
    const stack = [];

    for (let i = 0; i < height.length; i++) {
        while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();

            if (stack.length === 0) break;

            const left = stack[stack.length - 1];
            const width = i - left - 1;
            const heightOfWater = Math.min(height[i], height[left]) - height[top];
            areaOfWater += heightOfWater * width;
        }
        stack.push(i);
    }

    return areaOfWater;
};