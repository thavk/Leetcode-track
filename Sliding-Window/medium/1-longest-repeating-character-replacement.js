// Problem: Longest Repeating Character Replacement

// Category: Sliding Window

// Difficulty: Medium

// Description: You are given a string s and an integer k. You can choose any character 
// of the string and change it to any other uppercase English character. 
// You can perform this operation at most k times.
// Return the length of the longest substring containing the same 
// letter you can get after performing the above operations.

var characterReplacement = function(s, k) {
    const charTrack = {};
    let left = 0;
    let maxFreq = 0;
    let maxLen = 0;
    

    for (let right = 0; right < s.length; right++) {
        charTrack[s[right]] = (charTrack[s[right]] || 0) + 1;

        maxFreq = Math.max(maxFreq, charTrack[s[right]]);

        
        if ((right - left + 1) - maxFreq > k) {
            charTrack[s[left]] -= 1;
            left++;
        };

        maxLen = Math.max(maxLen, right - left + 1);
    };

    return maxLen;
};