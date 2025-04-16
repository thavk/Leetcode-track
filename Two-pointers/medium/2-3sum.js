// Problem: 3Sum

// Category: Two Pointers

// Difficulty: Medium

// Description: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

var threeSum = function(nums) {
    const solution = [];

    nums.sort((a, b) => a - b);

    let target = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        let partialTarget = target - nums[i];
        while (j < k) {
            let partialSum = nums[j] + nums[k];
            if (partialTarget === partialSum) {
                solution.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            } else if (partialSum > partialTarget) {
                k--
            } else {
                j++
            }
        }
    }
    return solution;
};