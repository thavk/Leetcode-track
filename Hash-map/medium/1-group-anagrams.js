// Problem: Group Anagrams

// Category: Hash Map, String, Sorting

// Difficulty: Medium

// Description: Given an array of strings, group the anagrams together.

var groupAnagrams = function(strs) {
    let hashTable = {};
    for (let w of strs) {
        let key = w.split('').sort().join('');
        if (!hashTable[key]) {
            hashTable[key] = [];
        };
        hashTable[key].push(w);
    };
    return Object.values(hashTable);
};
