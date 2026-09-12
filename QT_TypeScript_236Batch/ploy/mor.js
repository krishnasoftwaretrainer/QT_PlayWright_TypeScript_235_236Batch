"use strict";
class RBI {
    RateOfIntrest() {
        console.log("RBI Rate of Intrest is:5%");
    }
    BankTiming() {
        console.log("Bank Timing is: 9AM to 5PM");
    }
}
class SBI extends RBI {
    RateOfIntrest() {
        console.log("SBI Rate of Intrest is:6%");
    }
}
class ICICI extends RBI {
    RateOfIntrest() {
        console.log("ICICI Rate of Intrest is:7%");
    }
}
let rbi = new RBI();
rbi.RateOfIntrest();
rbi.BankTiming();
console.log("-------------------");
let ri = new SBI();
ri.RateOfIntrest();
ri.BankTiming();
console.log("-------------------");
let ri1 = new ICICI();
ri1.RateOfIntrest();
ri1.BankTiming();
