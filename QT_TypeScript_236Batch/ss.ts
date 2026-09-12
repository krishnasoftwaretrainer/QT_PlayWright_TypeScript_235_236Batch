abstract class abs
{
    abstract deposit():void;

    bankname()
    {
        console.log("SBI");
    }
}

class chs extends abs
{
    deposit():void 
    {
        console.log("deposit:5k")
    }
}

class chs2 extends abs
{
    deposit():void 
    {
        console.log("deposit:10k")
    }
}

let c=new chs();
c.bankname();
c.deposit();
console.log("-----------");

let c1=new chs2();
c1.bankname();
c1.deposit();