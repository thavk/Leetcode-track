// Problem: Find Peak Element

// Category: Binary Search

// Difficulty: Medium

// Description: A peak element is an element strictly greater than its neighbors. Return the index 
//              of any one peak element. You may imagine nums[-1] = -∞ and nums[n] = -∞.

var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[mid + 1]) {
            if (nums[mid] > nums[mid - 1]) return mid;
            right = mid;
        } else {
            left = mid + 1;
        };
        console.log(mid, left, right);
    };
    return left;
};

