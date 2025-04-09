// Problem: Product of Array Except Self

// Category: Array

// Difficulty: Medium

// Description: Given an array of integers, return an array such that each element 
// at index i of the output array is the product of all the numbers in the input 
// array except the one at i.

var productExceptSelf = function(nums) {
    const ans = Array(nums.length).fill(1);

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        ans[i] = prefix;
        prefix *= nums[i];
    };

    let suffix = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i]; 
    };
    
    return ans;
};