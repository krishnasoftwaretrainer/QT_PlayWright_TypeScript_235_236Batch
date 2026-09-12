"use strict";
class GrandParent {
    GrandFather() {
        console.log("I am your Grand Father");
    }
}
class Parent extends GrandParent {
    Father() {
        console.log("I am your Father");
    }
}
class Child extends Parent {
    Son() {
        console.log("I am your Son");
    }
}
let ch1 = new Child();
ch1.GrandFather();
ch1.Father();
ch1.Son();
