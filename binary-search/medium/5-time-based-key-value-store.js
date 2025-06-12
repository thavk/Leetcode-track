
// Problem: Time Based Key-Value Store

// Category: Binary Search / Hash Map

// Difficulty: Medium

// Description: Design a data structure that stores key-value pairs along with timestamps. 
//              Implement `set` and `get` methods, where `get` retrieves the latest value at or before the given timestamp.

var TimeMap = function() {
    this.keys = {

    };

    this.collection = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.keys[key]) {
        this.keys[key] = {};
        this.collection[key] = [];   
    };
    
    this.keys[key][timestamp] = value;
    this.collection[key].push(timestamp);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.keys[key]) return "";

    if (this.keys[key][timestamp]) {
        return this.keys[key][timestamp];
    }

    let left = 0;
    let right = this.collection[key].length - 1;
    let res = "";

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midTimestamp = this.collection[key][mid];

        if (midTimestamp <= timestamp) {
            res = this.keys[key][midTimestamp];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */