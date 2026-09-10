class parameters
{
    //WithOut Parameters Without ReturnType
    public static addition():void
 {
    console.log("Addition: ",(20+10));
 }

 //With Parameters Without ReturnType
     public static subtraction(a:number,b:number):void
 {
    console.log("Subtraction: ",(a-b));
 }

 //WithOut Parameters With ReturnType
     public static multiplication():number
 {
    return (20*10);
 }

 //With Parameters With ReturnType
     public static division(a:number,b:number):number
 {
    return (a/b);
 }
}

parameters.addition(); 
parameters.subtraction(22,11); 
parameters.subtraction(44,55);
console.log("Multiplication: ",parameters.multiplication());
console.log("Division: ",parameters.division(22,11));