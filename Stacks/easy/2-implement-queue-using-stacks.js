// Problem: Implement Queue using Stacks

// Category: Stack

// Difficulty: Easy

// Description: Implement a first-in-first-out (FIFO) queue using only two stacks.




var MyQueue = function() {
    this.queue = [];
    this.stack = [];
    this.front = undefined;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
    if (this.front === undefined) this.front = x;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let curr = this.front;
    this.stack = [];

    for (let i = 1; i < this.queue.length; i++) {
        this.stack.push(this.queue[i]);
    };

    this.front = this.stack[0];
    this.queue = this.stack;
    return curr;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.front;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.queue.length === 0) return true;
    else return false;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */