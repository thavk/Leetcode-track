// Problem: Sliding Window Maximum

// Category: Monotonic Stack

// Difficulty: Hard

// Description: You are given an array of integers `nums`, and a sliding window of size `k` that moves from the very left of the array to the very right. 
//              You can only see the `k` numbers in the window. Each time the window slides right by one position.
//              Return the maximum value in each window as an array.

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

    return solutionArr;
};
