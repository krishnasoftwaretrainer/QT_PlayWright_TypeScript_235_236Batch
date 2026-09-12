"use strict";
class cons {
    //Default Constructor
    name;
    age;
    //Default Constructor
    display() {
        this.name = "Rohit";
        this.age = 20;
        console.log(this.name);
        console.log(this.age);
    }
}
let obj = new cons();
obj.display();
//     public constructor()
//     {
//         console.log("I am Constructor");
//     }
// }
// let obj=new cons();
// //obj.constructor1();
// cons.constructor1();
