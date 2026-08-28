"use strict";
// // Global Scope
// // var num1:number=10;  //number  Re-Initialization is possible
// // //num1=40;  //number
// // var num1:number=40;  //number  Re-Declaration is possible
// // let num2:number=20;  //number
// // //num2=50;  //number  Re-Initialization is possible
// // let num2:number=50;  //number  Re-Declaration is not possible
// // const num3:number=30;  //number
// // //num3=60;  //number  Re-Initialization is not possible
// // const num3:number=60;  //number  Re-Declaration is not possible
// // console.log("var:"+num1);  //Using before declaration[Variable 'num1' is used before being assigned.]
// // var num1:number; //Only Declared , not Initialized
// // console.log("var:"+num1);  //Using[Variable 'num1' is used before being assigned.]
// // console.log("var:"+num1);  //Variable declaration expected.
// // var num1:number=22;
// // console.log("var:"+num1);
// // console.log("let:"+num2);
// // console.log("const:"+num3);
// // Function Scope
// function fun1()  //fun
// {
// // var num1:number=22;  //var is functional level only use inside function
// // num1=33;
// // console.log("var:"+num1);
// // let num1:number=32;  //var is functional level only use inside function
// // num1=33;
// // console.log("var:"+num1);
// }
// //fun1();
// //console.log("var:"+num1);  //Error 
if (true) //Block
 {
    // var num1:number=52;  //var is functional level only use inside function
    //  num1=33;
    // console.log("Inside Block var:"+num1);
    let num1 = 52; //var is functional level only use inside function
    num1 = 33;
    console.log("Inside Block var:" + num1);
}
//console.log("Outside Block var:"+num1);  //Ouside block
console.log("Outside Block let:" + num1); //Ouside block
// // Block Scope
