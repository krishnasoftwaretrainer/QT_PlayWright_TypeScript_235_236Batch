"use strict";
var num1 = 20;
var num2 = 10;
var num3 = 30;
var num4 = 40;
console.log((num1 > num2) && (num4 <= num3)); //f
console.log((num2 < num1) || (num3 == num4)); // t 
console.log(!(num2 < num1) || (num3 == num4)); //f
