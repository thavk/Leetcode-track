// Problem: Two Sum II - Input Array Is Sorted  

// Category: Two Pointers  

// Difficulty: Medium  

// Description: Given a sorted array of integers numbers and an integer target, 
// return the indices of the two numbers such that they add up to target. 
// The answer must be a 1-based index. You may assume that each input would 
// have exactly one solution and you may not use the same element twice. 
// Your solution should be efficient with time complexity of O(n).

var twoSum = function(numbers, target) {
    let right = numbers.length - 1;
    let left = 0;

    while (right > left) {
        if (numbers[left] + numbers[right] > target) {
            right--;
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    };
};