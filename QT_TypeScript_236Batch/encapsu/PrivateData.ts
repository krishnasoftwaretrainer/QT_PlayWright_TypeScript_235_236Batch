class Class1
{
private accnum: number=5456546;
private accname: string="Krishna";
private balance: number=10000;

display(): void
{
    console.log("Account Number: " + this.accnum);
    console.log("Account Name: " + this.accname);
    console.log("Balance: " + this.balance);
}

}
class class2 extends Class1
{
    display1(): void
{
    console.log("Account Number: " + this.accnum);
    console.log("Account Name: " + this.accname);
    console.log("Balance: " + this.balance);
}
}



let obj=new Class1();
obj.display();
