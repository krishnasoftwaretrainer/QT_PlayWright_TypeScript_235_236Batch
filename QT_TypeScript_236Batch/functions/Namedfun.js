"use strict";
function addition() {
    let a = 20;
    let b = 20;
    let c = a + b;
    console.log("Addition of two numbers is: " + c);
    //console.log("Thank You");
}
//With Parameters Without ReturnType
function subtraction(x, y) {
    // let a:number=20;
    // let b:number=10;
    // console.log("Re-Use of Function");
    let sub = x - y;
    console.log("Subtraction of two numbers is: " + sub);
}
//With Parameters With ReturnType
function multiplication(x, y) {
    let mul = x * y;
    return mul;
}
addition();
subtraction(20, 10);
let result = multiplication(20, 10);
console.log("Multiplication of two numbers is: " + result);
