let a:boolean=false;
let b:boolean=false;

console.log(a && b); //t f f f
console.log(a || b); //t t t f

console.log(!a);  //f f t t
console.log(!(a&&b));  //f t t t