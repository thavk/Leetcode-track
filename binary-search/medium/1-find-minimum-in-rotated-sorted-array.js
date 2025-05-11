// Problem: Find Minimum in Rotated Sorted Array

// Category: Binary Search

// Difficulty: Medium

// Description: Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
//              Given the rotated array nums of unique elements, return the minimum element of this array.
//              You must write an algorithm that runs in O(log n) time.

var findMin = function(nums) {
    let mid;
    let low = 0;
    let high = nums.length - 1;

    if (nums[0] <= nums[nums.length - 1]) return nums[0];

    while (high >= low) {
        mid = low + Math.floor((high - low) / 2);

        if (nums[mid] > nums[mid + 1]) {
            return nums[mid + 1];
        } else if (nums[mid - 1] > nums[mid]) {
            return nums[mid];
        }

        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
};
