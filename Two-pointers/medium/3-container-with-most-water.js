// Problem: Container With Most Water

// Category: Two Pointers

// Difficulty: Medium

// Description: Given n non-negative integers a1, a2, ..., an where each represents a point at coordinate (i, ai). 
//              n vertical lines are drawn such that the two endpoints of the line i are at (i, ai) and (i, 0). 
//              Find two lines that together with the x-axis form a container, such that the container contains the most water.
//              Return the maximum amount of water a container can store.

var maxArea = function(height) {
    let largest = 0;
    let left = 0;
    let right = height.length - 1;
    while(right > left) {
        let distance = right - left;
        let area = height[right] > height[left] ? height[left] * distance : height[right] * distance;
        if (height[right] > height[left]) {
            left++
        } else {
            right--
        }
        largest = Math.max(largest, area);
    };
    return largest;
};