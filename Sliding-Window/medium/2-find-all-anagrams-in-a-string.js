// Problem: Find All Anagrams in a String

// Category: Sliding Window

// Difficulty: Medium

// Description: Given two strings s and p, return an array of all the 
//              start indices of p's anagrams in s. 
//              You may return the answer in any order.



var findAnagrams = function(s, p) {
    const pCount = {};
    const sTrack = {};
    let l = 0;
    let formed = 0;

    const indexesArray = [];

    for (let i = 0; i < p.length; i++) {
        pCount[p[i]] = (pCount[p[i]] || 0) + 1;
    };

    const required = Object.values(pCount).length;

    for (let r = 0; r < s.length; r++) {
        sTrack[s[r]] = (sTrack[s[r]] || 0) + 1;

        if (s[r] in pCount) {
            if (sTrack[s[r]] === pCount[s[r]]) formed++;
            else if (sTrack[s[r]] === pCount[s[r]] + 1) formed--;
        }

        if (r - l + 1 === p.length) {
            if (formed === required) {
                indexesArray.push(l);
            };
            if (s[l] in pCount) {
                if (sTrack[s[l]] === pCount[s[l]]) formed--;
                else if (sTrack[s[l]] === pCount[s[l]] + 1) formed++;
            };
            sTrack[s[l]] -= 1;
            l++;
        };
    };

    return indexesArray;
};