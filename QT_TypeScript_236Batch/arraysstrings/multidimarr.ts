let sdetails:(any)[][]=[ [101,"Krishna",99.99, true],
                        [102,"Ravi",98.99, false],
                        [103,"Ramesh",97.99, true],
                        [104,"Suresh",96.99, false],
                        [105,"Ramesh",95.99, true]];

/* 4r 4C 
R0C0  R0C1  R0C2  R0C3
R1C0  R1C1  R1C2  R1C3
R2C0  R2C1  R2C2  R2C3
R3C0  R3C1  R3C2  R3C3

00  01          02      03
101  Krishna    99.99  true

10      11  12  13
102  Ravi  98.99  false

20  21  22  23
103  Ramesh  97.99  true

30  31  32  33
104  Suresh  96.99  false

*/
declare var process: any;
//for(let i=0;i<5;i++)  //Outer:Row 
for(let i=0;i<sdetails.length;i++)  
{
for(let j=0;j<sdetails[i].length;j++)
{
 //console.log(sdetails[i][j]);
 process.stdout.write(sdetails[i][j]+"    ");
}
// process.stdout.write("\n");
console.log();
}