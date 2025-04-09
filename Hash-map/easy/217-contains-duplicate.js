// Problem: Contains Duplicate

// Category: Array, Hash Map

// Difficulty: Easy

// Description: Given an integer array, return true if any value appears at least twice, and false if every element is distinct.



var containsDuplicate = function(nums) {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] !== undefined) {
            return true;
        } else {
            hashMap[nums[i]] = i;
        }
    };
    return false;
};