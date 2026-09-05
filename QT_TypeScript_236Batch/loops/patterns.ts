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

/* Outer Loop
i=1;i<=5;i++
    1<=5:T 
j=1;j<=5;j++
    1<=5:T Print j value 1, i value 1
j++:j=2; 2<=5:T Print j value 2, i value 1
3<=5:T 4<=5: 5<=5 6<=5F
i++:i=2;2<=5:T Outer 
j=1;j<=5;j++  Inner 
    1<=5:T Print 1 
j++:j=2; 2<=5:T Print 2 
3<=5:T 4<=5: 5<=5 6<=5F



    1   2    3    4     5   
    1   2    3   4      5



*/

/*
5	6	7	
5	6	7
5	6	7
5	6	7
*/
/*
5   5   5
6   6   6
7   7   7
8   8   8
*/
/*

declare const process: any;
for(let i=5;i<=8;i++) //Rows  
{  
    for(let j=5;j<=7;j++) 
    {  //process.stdout.write(j.toString()+"  ");
       process.stdout.write(i.toString()+"  ");
       //process.stdout.write(" ### ");
    }  

    //console.log();
process.stdout.write("\n");
}  */

/*
1
2   2
3   3   3
4   4   4   4
5   5   5   5   5
*/

declare const process: any;
for(let i=1;i<=5;i++) //Rows 1 2 3 4 5 
{  
    for(let j=1;j<=i;j++)     {  //process.stdout.write(j.toString()+"  ");
       process.stdout.write(i.toString()+"  ");
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

/*
5
4   4
3   3   3
2   2   2   2
1   1   1   1   1
*/