// Problem: Two Sum

// Category: Array, Hash Map

// Difficulty: Easy

// Description: Return indices of two numbers such that they add up to target





var twoSum = function(nums, target) {
    let hashObj = {};
    for (let i = 0; i < nums.length; i++) {
        let current = target - nums[i];
        if (hashObj[current] !== undefined) {
            return [hashObj[current], i]; 
        } else {
            hashObj[nums[i]] = i;
        };
    };
    return [];
};