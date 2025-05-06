// Problem: Minimum Window Substring

// Category: Two Pointers

// Difficulty: Hard

// Description: Given two strings `s` and `t`, return the minimum window in `s` 
// which contains all the characters of `t`. If no such window exists, return an 
// empty string.

var minWindow = function(s, t) {
    const charDic = {};
    let returnWord = [0, Infinity];
    let right = 0;
    let left = 0;
    
    for (let i = 0; i < t.length; i++) {
        if (!charDic[t[i]]) {
            charDic[t[i]] = 1;
        } else {
            charDic[t[i]] += 1;
        };  
    };

    const required = Object.keys(charDic).length;
    let formed = 0;
    const tCount = {};

    while (right < s.length) {
        if (charDic[s[right]]) {
            tCount[s[right]] = (tCount[s[right]] || 0) + 1;

            if (tCount[s[right]] === charDic[s[right]]) {
                formed++;
            };
        };

        while (formed === required) {
            if (right - left < returnWord[1] - returnWord[0]) {
                returnWord = [left, right];
            }

            if (charDic[s[left]]) {
                tCount[s[left]] -= 1;
                if (tCount[s[left]] < charDic[s[left]]) formed--;
            };
            left++;
        };
        right++;
    };

    if (returnWord[1] === Infinity) {
        return '';
    } else {
        return s.slice(returnWord[0], returnWord[1] + 1);
    };
};