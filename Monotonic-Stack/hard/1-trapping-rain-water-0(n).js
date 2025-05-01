// Problem: Trapping Rain Water

// Category: Monotonic Stack

// Difficulty: Hard

// Description: Given n non-negative integers representing an elevation map where the width of each bar is 1,
//              compute how much water it can trap after raining.
//              Use a monotonic decreasing stack to keep track of bars that could form boundaries.

var maxSlidingWindow = function(nums, k) {
    const deque = [];
    const solutionArr = [];

    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && nums[i] > nums[deque[deque.length - 1]]) {
            deque.pop();
        };

        deque.push(i);

        if (deque[0] <= i - k) {
            deque.shift();
        }

        if (i >= k - 1) {
            solutionArr.push(nums[deque[0]]);
        }
    };

    return solutionArr
};
