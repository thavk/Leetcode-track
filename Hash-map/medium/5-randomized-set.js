// Problem: Randomized Set

// Category: Hash Map

// Difficulty: Medium

// Description: Implement a data structure that supports inserting, removing, and 
// getting a random element in constant average time complexity. The structure
// should support the following operations:
// 1. insert(val): Inserts an item val into the set if not present.
// 2. remove(val): Removes an item val from the set if present.
// 3. getRandom(): Returns a random element from the current set of elements.

var RandomizedSet = function() {
    this.map = new Map();
    this.items = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false;
    };
    this.items.push(val);
    this.map.set(val, this.items.length - 1);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) {
        return false;
    };
    let index = this.map.get(val);
    let lastElement = this.items[this.items.length - 1];
    this.items[index] = lastElement;
    this.map.set(lastElement, index);
    this.items.pop();
    this.map.delete(val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.items[Math.floor(Math.random() * this.items.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */