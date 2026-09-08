"use strict";
// let values: number[][] = [
//     [10, 20, 30],
//     [40, 50, 60],
//     [70, 80, 90]
// ];
// // for (var i in values) {
// //     for (var j in values[i]) {
// //         console.log(i, "  ", j);
// //     }
// // }
// for (var i of values) {
//     for (var j of i) {
//         console.log(j);
//     }
// }
let values = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(values);
// Add a complete new row:
values.push([7, 8, 9]);
console.log(values);
values.push([10, 11, 12]);
console.log(values);
let popv = values.pop();
console.log(popv);
console.log("Afetr POP");
console.log(values);
