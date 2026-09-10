"use strict";
class access {
    static addition() {
        console.log("Addition: ", (20 + 10));
    }
    subtraction() {
        console.log("Subtraction: ", (20 - 10));
    }
    sub() {
        this.subtraction();
    }
} //Exit 
access.addition(); //Outside class 
let cal1 = new access();
cal1.sub();
class access1 {
}
access.addition();
