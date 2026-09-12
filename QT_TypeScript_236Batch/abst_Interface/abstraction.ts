abstract class RBI1  //Class Parent
{
    abstract RateOfIntrest():void;  //Method-1

    BankTiming():void  //Method-2 
    {
        console.log("Bank Timing is: 9AM to 5PM");
    }
}

class  SBI1 extends RBI1  //Class Child
{
    RateOfIntrest():void
    {
        console.log("SBI Rate of Intrest is: 6%");
    }
}

class  ICICI1 extends RBI1  //Class Child
{
    RateOfIntrest():void
    {
        console.log("ICICI Rate of Intrest is: 7%");
    }
}

let sbi1= new SBI1();
sbi1.RateOfIntrest();
sbi1.BankTiming();
console.log("-------------------");

let icici1= new ICICI1();
icici1.RateOfIntrest();
icici1.BankTiming();