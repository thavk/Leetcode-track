// Problem: Koko Eating Bananas (Minimum Eating Speed)

// Category: Binary Search

// Difficulty: Medium

// Description: Given an array `piles` of banana piles and an integer `h`, return the minimum 
//              integer `k` such that Koko can eat all the bananas within `h` hours.

var minEatingSpeed = function(piles, h) {
    if (h === piles.length) {
        piles.sort((a, b) => b - a);
        return piles[0];
    };

    let left = 1;
    let right = 1;

    for (let i = 0; i < piles.length; i++) {
        right = Math.max(right, piles[i]);
    };

    while (left < right) {
        let totalHours = 0;
        let mid = Math.floor((right + left) / 2);

        for (let i = 0; i < piles.length; i++) {
            totalHours += Math.ceil(piles[i] / mid);
        };

        if (totalHours <= h) {
            right = mid;
        } else {
            left = mid + 1;
        };
    };

    return left;
};