//revising js day-1 

//data-type primitive types and 


let a = 10;
let b= a;
b = 20;

console.log(a);
console.log(b);
//reference type 

let obj1 = {name: 'baiju'};
let obj2 = obj1;

obj2.name = 'thomas';
console.log(obj1);

// Variables & Hoisting

console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError
let b = 10;

//Scope

function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }
  console.log(a); // 10
  console.log(b); // ReferenceError
}