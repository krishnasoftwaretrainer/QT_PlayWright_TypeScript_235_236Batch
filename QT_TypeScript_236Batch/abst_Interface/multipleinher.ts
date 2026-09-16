interface Parent1
{
    Father1():void;
}

interface Parent2
{
    Father2():void;
}

interface Parent3
{
    Father3():void
}

class Child1 implements Parent1,Parent2,Parent3
{
Father1():void
{
console.log("I am your Father1");
}

Father2():void
{
console.log("I am your Father2");
}

Father3():void
{
console.log("I am your Father3");
}
}

let c1=new Child1();
c1.Father1();
c1.Father2();
c1.Father3();