"use strict";
//Entry Control and Exit Control Loops
//for while loops and do while loops are used for entry control and exit control respectively. In entry control loops, the condition is checked before executing the loop body, while in exit control loops, the loop body is executed at least once before checking the condition.
/*
for(let i=5;i<=3;i++)
{
    console.log(i);
}  */
let i = 5;
do {
    console.log(i); //5
    i++;
} while (i <= 3); //5<=3 6<=3 
