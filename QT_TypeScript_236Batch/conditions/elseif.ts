//Student Grades: A B C D Fail 

let obtMarks:number=25; //f t:f t

if(obtMarks>=85 && obtMarks<=100) //55>=85 f 125>85 85 to 100
{
    console.log("A Grade");  //TBS
}
else if(obtMarks>=70 && obtMarks<85) //55>=70 f
{
    console.log("B Grade");
}
else if(obtMarks>=55) //55>=55 t
{
    console.log("C Grade");
}
else if(obtMarks>=35 && obtMarks<55)  //55>=35 t 55<55 f
{
    console.log("D Grade");
}

else if(obtMarks>=0 && obtMarks<35)  //55<35 f 55>=0 t
{
    console.log("Fail");
}
else
{
    console.log("Invalid Marks");  //TBS
}