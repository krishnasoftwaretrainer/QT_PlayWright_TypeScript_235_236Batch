declare const process:any;
let a:(number|string)[][]=[[1,2,3],[4,5,6],[7,8,"Krishna"]];

//console.log(a);
//process.stdout.write(a[0][1].toString());

for(let i=0;i<a.length;i++)
{
    for(let j=0;j<a[i].length;j++)
    {
process.stdout.write(a[i][j].toString()+"   ");
    }
    console.log();
}