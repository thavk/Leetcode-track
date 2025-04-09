// Problem: Top K Frequent Elements

// Category: Hash Map, Bucket Sort

// Difficulty: Medium

// Description: Given a non-empty array of integers, return the k most frequent 
// elements. You may assume that the answer is guaranteed to be unique.


var topKFrequent = function(nums, k) {
    const sortedArray = nums.sort((a, b) => a - b);
    const numSet = new Set(sortedArray);
    const obj = {};
    let count = 0;
    
    for (let num of numSet) {
        let number = 0;    
        while (sortedArray[count] === num) {
            count++;
            number++;
            obj[num] = number;
        };
    };

    const buckets = {};
    const res = [];

    for (let num in obj) {
        if (!buckets[obj[num]]) {
            buckets[obj[num]] = [];
        };
        buckets[obj[num]].push(Number(num));
    };

    for (let i = nums.length; i >= 1; i--) {
        if (buckets[i]) {
            res.push(...buckets[i]);
            if (res.length >= k) {
                return res.slice(0, k);
            }
        }
    }

    return res;

};