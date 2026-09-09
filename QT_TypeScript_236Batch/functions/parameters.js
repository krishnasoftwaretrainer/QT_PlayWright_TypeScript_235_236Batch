"use strict";
//Reqired Parameters
/*
function sum(a:number, b:number):void{
let sum=a+b;
console.log("Addition:",sum);
}
sum(22,11);
sum(11,22);
*/
//Optional Parameters
/*
function greet(name: string, message?: string): void {
console.log("Name:", name);
console.log("Message:", message);
}
greet("Krishna", "Good Morning");
greet("Ravi");
//greet();
*/
//Default Parameters
function sum(a, b = 30) {
    let result = a + b;
    console.log("Addition:", result);
}
sum(20, 30); //50
sum(20); //30
