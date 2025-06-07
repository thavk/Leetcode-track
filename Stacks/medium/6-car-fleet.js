// Problem: Car Fleet

// Category: Stack

// Difficulty: Medium

// Description: Given the position and speed of multiple cars heading to a target, 
// determine how many car fleets will arrive at the destination. A car fleet is a group
// of cars traveling at the same speed such that no car can pass another.


var carFleet = function(target, position, speed) {
    const stack = [];
    const pairs = [];

    for (let i = 0; i < position.length; i++) {
        let time = (target - position[i]) / speed[i];
        pairs.push([position[i], time]);
    };

    pairs.sort((a, b) => b[0] - a[0]);

    for (let i = 0; i < pairs.length; i++) {
        const currTime = pairs[i][1];

        if (stack.length === 0 || currTime > stack[stack.length - 1][1]) {
            stack.push(pairs[i]);
        }
    };

    return stack.length;
};