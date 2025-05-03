// Problem: Binary Search

// Category: Binary Search

// Difficulty: Easy

// Description: Given an array of integers nums which is sorted in ascending order, 
//              and an integer target, write a function to search target in nums. 
//              If target exists, then return its index. Otherwise, return -1. 
//              You must write an algorithm with O(log n) runtime complexity.

var search = function(nums, target) {
    let mid;
    let high = nums.length - 1;
    let low = 0;

    while (high >= low) {
        mid = low + Math.floor((high - low) / 2); 

        if (nums[mid] === target) {
            return mid;
        };

        if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        };
    }

    return -1;
};