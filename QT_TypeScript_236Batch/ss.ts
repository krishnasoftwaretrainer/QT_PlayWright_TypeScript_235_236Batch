class customer    {
 private accname: string = "Krishna";
 private accno: number = 222222;
 private balance: number = 10;

 public set accname1(value:string)
    {
        this.accname=value;
    }

 public get accname1():string
    {
        return this.accname;
    }

    public set accno1(value:number)
    {
        this.accno=value;
    }

    public get accno1():number
    {
        return this.accno;
    }

    public set balance1(value:number)
    {
        this.balance=value;
    }

    public get balance1():number
    {
        return this.balance;
    }

}

class emp extends customer
{
    

}
let cc=new emp();
cc.accname1="Ramesh";
cc.accno1=333333;
cc.balance1=20;
console.log(cc.accname1);
console.log(cc.accno1);
console.log(cc.balance1);