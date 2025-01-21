/*
The let keyword was introduced in ES6 (2015)
Variables declared with let have Block Scope
Variables declared with let must be Declared before use
Variables declared with let cannot be Redeclared in the same scope
*/

//--------------------------------------------------------------------------------------


//Block Scope :=>
// Before ES6 (2015), JavaScript did not have Block Scope.
// JavaScript had Global Scope and Function Scope.
// ES6 introduced the two new JavaScript keywords: let and const.
// These two keywords provided Block Scope in JavaScript:


// Example
// Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
}
// x can NOT be used here


//--------------------------------------------------------------------------------------------------------------



// Global Scope:=>
// Variables declared with the var always have Global Scope.
// Variables declared with the var keyword can NOT have block scope:
// Example
// Variables declared with var inside a { } block can be accessed from outside the block:

{
  var x = 2;
}
// x CAN be used here

//--------------------------------------------------------------------------------------------------------


let m= "Hello";

console.log(m);

//------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------


//JavaScript Const :=>
/*
The const keyword was introduced in ES6 (2015)
Variables defined with const cannot be Redeclared
Variables defined with const cannot be Reassigned
Variables defined with const have Block Scope


***A variable defined with the const keyword cannot be reassigned:***
*/

const PI = 3.14159265359;
console.log(PI);
console.log(typeof PI);


// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp



/*Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
*/

const cars = ["Saab","Volvo","BMW"];
console.log(cars);

console.log("---------------------------------------------");

cars[0] = "Toyota";
console.log(cars);
console.log("---------------------------------------------");
cars.push("Audi");
console.log(cars);


//-----------************************-------------------------------************************---------------------------


const car = {
  type:'Fiat',
  model:"500",
  color:"white"
}

console.log(car);
