//Calculator 5,3 + - * / % 

let a:number=5;
let b:number=3;

console.log("CALCULATOR");
console.log("1.Addition");
console.log("2.Subtraction");
console.log("3.Multiplication");
console.log("4.Division");

let choice:number=13;

switch(choice)
{
    case 1:
        {
            let sum:number=a+b;
            console.log("Addition: " +sum);
            break;
        }
    
    case 2:
        {
            let sub:number=a-b;
            console.log("Subtraction: " +sub);
            break;
        }
    
    case 3:
        {
            let mul:number=a*b;
            console.log("Multiplication: " +mul);
            break;
        }
    
    case 4:
        {
            let div:number=a/b;
            console.log("Division: " +div);
            break;
        }

    default:
        {
            console.log("Invalid Choice: Select 1 to 4 only");
        }
}

