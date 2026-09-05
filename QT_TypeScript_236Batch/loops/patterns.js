"use strict";
/*  1   2   3   4   5
    1   2   3   4   5
    1   2   3   4   5
    1   2   3   4   5
    1   2   3   4   5
    */
/*
declare const process: any;
for(let i=1;i<=8;i++)  //Rows Outer Loop 1<5T
{  //entry of outerloop
 for(let j=1;j<=5;j++) //Columns Inner Loop 1<5T
 {  //ineer loop entry
    // console.log(j);
    //process.stdout.write(j.toString()+"  ");
    //process.stdout.write(j.toString()+"  ");
    process.stdout.write(" ### ");
 }  //Exit of innerloop

 //console.log();
process.stdout.write("\n");
} //Exit of Ourtloop
*/
for (let i = 1; i <= 5; i++) //Rows 1 2 3 4 5 
 {
    for (let j = 1; j <= i; j++) { //process.stdout.write(j.toString()+"  ");
        process.stdout.write(i.toString() + "  ");
        //process.stdout.write(" ### ");
    }
    //console.log();
    process.stdout.write("\n");
}
/*
//j<=i; 1<=1T Print:1  2<=1F
i=2 j=1  1<=2T 2<=2T 3<=2F
i=3 j=1  1<=3T 2<=3T 3<=3T 4<=3F
i=4 j=1  1<=4T 2<=4T 3<=4T 4<=4T 5<=4F
i=5 j=1  1<=5T 2<=5T 3<=5T 4<=5T 5<=5T 6<=5F
*/
