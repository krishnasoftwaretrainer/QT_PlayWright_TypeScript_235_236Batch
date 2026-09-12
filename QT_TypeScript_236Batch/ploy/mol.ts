class compile
{
    add(a: number, b: number):void
    add(a: number, b: number,c: number):void

    add(a: number, b: number, c?: number): void 
    {
        if(c!== undefined)
        {
            let sum= a+b+c;
            console.log("Sum of three numbers is: "+sum);
        }
        else
        {
            let sum= a+b;
            console.log("Sum of two numbers is: "+sum);
        }
    }
}

let obj= new compile();
obj.add(20,30,40);