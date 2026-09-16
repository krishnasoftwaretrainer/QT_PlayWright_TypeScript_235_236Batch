class Customer
{
private accnum: number=5456546;
private accname: string="Krishna";
private balance: number=5000;

//Get Method 
get accountNumber(): number
{
    return this.accnum;

}

set accountNumber(accnum: number)
{
    this.accnum=accnum;
}

get accountName(): string
{
    return this.accname;
}

set accountName(accname: string)
{
    this.accname=accname;
}

get accountBalance(): number
{
    return this.balance;
}

set accountBalance(balance: number)
{
    this.balance=balance;
}
}

class Employee extends Customer
{
    display11(): void
    {
        console.log("Account Number: "+ this.accountNumber);
        console.log("Account Name: " + this.accountName);
        console.log("Balance: " + this.accountBalance);
    }
}

let obj1=new Employee();
obj1.accountNumber=88888888;
obj1.accountName="Ramesh";
obj1.accountBalance=2000;
obj1.display11();
