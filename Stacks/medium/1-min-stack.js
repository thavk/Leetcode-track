// Problem: Min Stack

// Category: Stacks

// Difficulty: Medium

// Description: Design a stack that supports push, pop, top, and retrieving the 
//              minimum element in constant time.
//              Implement the MinStack class:
//              - MinStack() initializes the stack object.
//              - void push(int val) pushes the element val onto the stack.
//              - void pop() removes the element on the top of the stack.
//              - int top() gets the top element of the stack.
//              - int getMin() retrieves the minimum element in the stack.



var MinStack = function() {
    this.lastMin = [];
    this.min = undefined;
    this.lastIndex = -1;
};

MinStack.prototype.push = function(val) {
    this.lastIndex += 1;
    this[this.lastIndex] = val;

    if (this.min === undefined) {
        this.min = val;
        this.lastMin.push(val);

    } else if (this.min >= val) {
        this.lastMin.push(val);
        this.min = val;
    };
};

MinStack.prototype.pop = function() {
    if (this[this.lastIndex] === this.min) {
        this.lastMin.pop();
        this.min = this.lastMin[this.lastMin.length - 1];
    };

    delete this[this.lastIndex];
    this.lastIndex -= 1;
};

MinStack.prototype.top = function() {
    return this[this.lastIndex];
};

MinStack.prototype.getMin = function() {
    return this.min;
};
