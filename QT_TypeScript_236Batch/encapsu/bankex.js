"use strict";
class Customer {
    accnum = 5456546;
    accname = "Krishna";
    balance = 5000;
    //Get Method 
    get accountNumber() {
        return this.accnum;
    }
    set accountNumber(accnum) {
        this.accnum = accnum;
    }
    get accountName() {
        return this.accname;
    }
    set accountName(accname) {
        this.accname = accname;
    }
    get accountBalance() {
        return this.balance;
    }
    set accountBalance(balance) {
        this.balance = balance;
    }
}
class Employee extends Customer {
    display11() {
        console.log("Account Number: " + this.accountNumber);
        console.log("Account Name: " + this.accountName);
        console.log("Balance: " + this.accountBalance);
    }
}
let obj1 = new Employee();
obj1.accountNumber = 88888888;
obj1.accountName = "Ramesh";
obj1.accountBalance = 2000;
obj1.display11();
