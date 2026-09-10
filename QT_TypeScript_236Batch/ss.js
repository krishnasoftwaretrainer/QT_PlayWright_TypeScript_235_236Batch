"use strict";
class parent1 {
    Father() {
        console.log('Father');
    }
}
class Child extends parent1 {
    Child() {
        console.log("Son");
    }
}
// let f=new parent1();
// f.Father();
let s = new Child();
s.Father();
s.Child();
