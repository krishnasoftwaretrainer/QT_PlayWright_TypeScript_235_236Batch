"use strict";
class compile {
    add(a, b, c) {
        if (c !== undefined) {
            let sum = a + b + c;
            console.log("Sum of three numbers is: " + sum);
        }
        else {
            let sum = a + b;
            console.log("Sum of two numbers is: " + sum);
        }
    }
}
let obj = new compile();
obj.add(20, 30, 40);
