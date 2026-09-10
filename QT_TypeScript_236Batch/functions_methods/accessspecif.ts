class access
{
    public static addition() 
 {
    console.log("Addition: ",(20+10));
 }

 private subtraction() 
 {
    console.log("Subtraction: ",(20-10));
 }

 public sub()
 {
    this.subtraction();
 }
 

}  //Exit 

access.addition();  //Outside class 
 let cal1=new access();
cal1.sub();


class access1
{

}

access.addition();