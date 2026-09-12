class cons
{

    //Default Constructor
    name?:string;
    age?:number;
    //Default Constructor

    display()
    {
        this.name="Rohit";
        this.age=20;
        console.log(this.name);
        console.log(this.age);
    }

    /*
   name:string;  //global variable
    age:number;

     constructor(name:string,age:number)  //With parameter Constructor
    {
        this.name=name;
        this.age=age;
            }
display()
{
    console.log(this.name);
    console.log(this.age);
} */
        
    /*
    constructor()  //Without parameter Constructor
    {
        this.name="Rohit";
        this.age=20;
        console.log(this.name);
        console.log(this.age);
    }  */
}

let obj=new cons();
obj.display();













//     public constructor()
//     {
//         console.log("I am Constructor");
//     }
    
// }

// let obj=new cons();
// //obj.constructor1();
// cons.constructor1();