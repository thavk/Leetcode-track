// Problem: Search in Rotated Sorted Array

// Category: Binary Search

// Difficulty: Medium

// Description: Given a rotated sorted array and a target value, return the index of the target
// if it is in the array, or -1 if it is not. You must use O(log n) time complexity.

var search = function(nums, target) {
    let right = nums.length - 1;
    let left = 0;

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (nums[mid] === target) return mid;
        
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            };
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        };
    };
    return -1;
};