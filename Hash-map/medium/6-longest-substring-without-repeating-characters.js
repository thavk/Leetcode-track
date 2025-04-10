// Problem: Longest Substring Without Repeating Characters

// Category: Hash Map

// Difficulty: Medium

// Description: Given a string s, find the length of the longest substring without duplicate characters. 
//              The function uses a sliding window approach to track the longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let hashMap = {};
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
        if (hashMap[s[end]] !== undefined && hashMap[s[end]] >= start) {
            start = hashMap[s[end]] + 1;
        };
        hashMap[s[end]] = end;

        longest = Math.max(longest, end - start + 1);
    };

    return longest;
};
