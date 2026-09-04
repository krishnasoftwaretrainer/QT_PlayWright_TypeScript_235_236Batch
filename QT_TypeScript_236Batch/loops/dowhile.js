"use strict";
let i = 1;
do {
    //console.log(i);  //1 SR MC
    process.stdout.write(i + " ");
    //MR SC
    i++; //2
} while (i <= 10); //2<=10T
//10 to 1
/*
let i:number=10;
do
{
    console.log(i);  //10
    i--;            //9
}while(i>=1);
*/
