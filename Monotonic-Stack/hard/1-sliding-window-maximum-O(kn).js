// Problem: Sliding Window Maximum

// Category: Monotonic Stack

// Difficulty: Hard

// Description: You are given an array of integers `nums`, and a sliding window of size `k` that moves from the very left of the array to the very right. 
//              You can only see the `k` numbers in the window. Each time the window slides right by one position.
//              Return the maximum value in each window as an array.


var maxSlidingWindow = function(nums, k) {
    let right = k - 1;
    const returnArray = [];

    for (let left = 0; left < nums.length; left++) {

        if (right > nums.length - 1) {
            break;
        };

        let stack = nums.slice(left, right + 1);

        let pointer = 0;
        let longest = stack[0];
        while (pointer < stack.length) {
            let current = stack[pointer];
            if (stack.length === 1) {
                longest = current;
            } else {
                longest = Math.max(longest, current);
            }
            pointer++;
        };

        returnArray.push(longest);
        right++;
        stack = [];
    };

    return returnArray;
};