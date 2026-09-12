class Parent 
{
    Father()
    {
        console.log("I am your Father");
    }
}

class Child1 extends Parent
{
    Son1()
    {
        console.log("I am your Son1");
    }
}

class Child2 extends Parent
{
    Son2()
    {
        console.log("I am your Son2");
    }
}

class Child3 extends Parent
{
    Son3()
    {
        console.log("I am your Son3");
    }
}

let s1=new Child1();
s1.Father();
s1.Son1();
console.log("-----------------------------");
let s2=new Child2();
s2.Father();
s2.Son2();
console.log("---------------------");
let s3=new Child3();
s3.Father();
s3.Son3();  