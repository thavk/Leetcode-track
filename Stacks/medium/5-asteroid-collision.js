// Problem: Asteroid Collision

// Category: Stack

// Difficulty: Medium

// Description: Simulate asteroid collisions moving in a line, where opposite signs indicate 
//              opposite directions.


/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    const stack = [];

    for (let i = 0; i < asteroids.length; i++) {
        let destroyed = false;

        while (stack.length > 0 && 
              ((stack[stack.length - 1] > 0 && asteroids[i] < 0))) {
            if (Math.abs(asteroids[i]) > Math.abs(stack[stack.length - 1])) {
                stack.pop();
            } else if (Math.abs(asteroids[i]) < Math.abs(stack[stack.length - 1])) {
                destroyed = true;
                break;
            } else if (Math.abs(asteroids[i]) === Math.abs(stack[stack.length - 1])) {
                destroyed = true;
                stack.pop();
                break;
            };
        };

        if (destroyed) continue;

        stack.push(asteroids[i]);
    };

    return stack;
};
