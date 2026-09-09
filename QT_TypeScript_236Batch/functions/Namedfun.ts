function addition()
{
let a:number=20;
let b:number=20;
let c:number=a+b;
console.log("Addition of two numbers is: "+c);
//console.log("Thank You");
}

//With Parameters Without ReturnType
function subtraction(x:number,y:number):void
{
// let a:number=20;
// let b:number=10;
// console.log("Re-Use of Function");
let sub:number=x-y;
console.log("Subtraction of two numbers is: "+sub);
}
//With Parameters With ReturnType
function multiplication(x:number,y:number):number
{
    let mul:number=x*y;
return mul;
}


addition()
subtraction(20,10);
let result:number=multiplication(20,10);
console.log("Multiplication of two numbers is: "+result);