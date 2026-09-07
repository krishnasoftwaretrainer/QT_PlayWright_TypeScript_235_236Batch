"use strict";
//let htno:number[]=[101,102,103,104,105];
//let snames:string[]=["Ravi","Ramesh","Suresh","Mahesh","Rajesh"];
//console.log(htno); //One Time 
//for(let i=0;i<4;i++) //0<5T..5<5F 
//for(let i=0;i<htno.length;i++) //0<5T..5<5F 
// for(let i=0;i<snames.length;i++) //0<5T..5<5F 
// {
//     //console.log(htno[i]); //5 Times 
//     //process.stdout.write(htno[i]+" "); //5 Times
//     process.stdout.write(snames[i]+" "); //5 Times
// }
//5 4  5 7 
// let details:(string | number | boolean)[]=[101,"Krishna",99.99, true];
// console.log(details[2]);
// details[2]=98.22;  
// console.log(details[2]);
// console.log("Length of Array:",details.length); //4
// console.log("First Index:",details[0]); //101
// console.log("Last Index:",details[details.length-1]); //true
// console.log("Index of 101:",details.indexOf(101)); //0
// console.log("Last Index of true:",details.lastIndexOf(true)); //0
// // for(let i=0;i<details.length;i++) //0<5T..5<5F 
// // {
// //     //console.log(details[i]); //5 Times 
// //     //process.stdout.write(htno[i]+" "); //5 Times
// //     //process.stdout.write(details[i]+" "); //5 Times
// // console.log(details[1]);
// // }
//for of loop
// let details:(any)[]=[101,"Krishna",99.99, true,"Male"];
// for(let detail of details) 
// {
//     console.log(detail);
// }/
//for in loop Print Index for all values in array using for in loop
/*
let details:(any)[]=[101,"Krishna",99.99, true];

for(let index in details)
{
    console.log(index);
} */
let details = [101, "Krishna", 99.99, true];
console.log(details);
console.log("after");
details.push("Male", "Female");
console.log(details);
console.log("after");
details.pop();
console.log(details);
