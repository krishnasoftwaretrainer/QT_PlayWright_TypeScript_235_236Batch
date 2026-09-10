"use strict";
class parameters {
    //WithOut Parameters Without ReturnType
    static addition() {
        console.log("Addition: ", (20 + 10));
    }
    //With Parameters Without ReturnType
    static subtraction(a, b) {
        console.log("Subtraction: ", (a - b));
    }
    //WithOut Parameters With ReturnType
    static multiplication() {
        return (20 * 10);
    }
    //With Parameters With ReturnType
    static division(a, b) {
        return (a / b);
    }
}
parameters.addition();
parameters.subtraction(22, 11);
parameters.subtraction(44, 55);
console.log("Multiplication: ", parameters.multiplication());
console.log("Division: ", parameters.division(22, 11));
