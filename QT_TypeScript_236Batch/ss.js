"use strict";
class customer {
    accname = "Krishna";
    accno = 222222;
    balance = 10;
    set accname1(value) {
        this.accname = value;
    }
    get accname1() {
        return this.accname;
    }
    set accno1(value) {
        this.accno = value;
    }
    get accno1() {
        return this.accno;
    }
    set balance1(value) {
        this.balance = value;
    }
    get balance1() {
        return this.balance;
    }
}
class emp extends customer {
}
let cc = new emp();
cc.accname1 = "Ramesh";
cc.accno1 = 333333;
cc.balance1 = 20;
console.log(cc.accname1);
console.log(cc.accno1);
console.log(cc.balance1);
