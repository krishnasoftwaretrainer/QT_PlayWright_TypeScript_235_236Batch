class Parent 
{
Father()
{
    console.log("I am your Father");
}
}

class Child extends Parent
{
    Son()
    {
        console.log("I am your Son");
    }
}
let ch=new Child();
ch.Father();
ch.Son();