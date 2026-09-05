let marks: number[]=[90, 95, 98, 100];
console.log(marks);
console.log(marks[0]); //90
marks.push(105);


//find 98 index of the array
console.log(marks.indexOf(98)); //2

marks.push(110);
console.log(marks);

marks.pop();
console.log(marks);
console.log(marks.length); //5
marks.pop();
console.log(marks);
console.log(marks.length); //5

