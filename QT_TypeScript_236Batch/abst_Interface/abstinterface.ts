interface RBI
{
    RateOfIntrest():void;

    BankTiming():void;  
    
}

class SBI implements RBI
{
    RateOfIntrest():void
    {
        console.log("SBI Rate of Intrest is: 6%");
    }

    BankTiming():void
    {
        console.log("SBI Bank Timing is: 9AM to 5PM");
    }
}

let ss=new SBI();
ss.RateOfIntrest();
ss.BankTiming();
console.log("-------------------");