"use strict";
let sdetails = [[101, "Krishna", 99.99, true],
    [102, "Ravi", 98.99, false],
    [103, "Ramesh", 97.99, true],
    [104, "Suresh", 96.99, false],
    [105, "Ramesh", 95.99, true]];
//for(let i=0;i<5;i++)  //Outer:Row 
for (let i = 0; i < sdetails.length; i++) {
    for (let j = 0; j < sdetails[i].length; j++) {
        //console.log(sdetails[i][j]);
        process.stdout.write(sdetails[i][j] + "    ");
    }
    // process.stdout.write("\n");
    console.log();
}
