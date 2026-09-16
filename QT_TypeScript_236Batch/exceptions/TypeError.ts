let name3:string|null="null";

try {
console.log(name3!.length);
}
catch(error) {
console.log("Error is: ",error);
}
finally {
console.log("Executed Successfully");
}