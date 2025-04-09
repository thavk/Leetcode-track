// Problem: Longest Consecutive Sequence

// Category: Hash Map, Set

// Difficulty: Medium

// Description: Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;
    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let length = 1;
            while (numSet.has(num + length)) {
                length++
            };
            longest = Math.max(longest, length);
        };
    };
    return longest;
};