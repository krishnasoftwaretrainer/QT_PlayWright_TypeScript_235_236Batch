"use strict";
class Class1 {
    accnum = 5456546;
    accname = "Krishna";
    balance = 10000;
    display() {
        console.log("Account Number: " + this.accnum);
        console.log("Account Name: " + this.accname);
        console.log("Balance: " + this.balance);
    }
}
let obj = new Class1();
obj.display();
