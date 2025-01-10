//vaiable histing with var

console.log(a);
var a = 10;


//Function Hoisting

morya();

function morya(){
    let a= "Hello World";
    console.log(a);
    
}

//variable hoisting with let

// console.log(b);

// let b = 360;

// Exercise 4: Hoisting Inside a Function

function hoisted(){
    if(true){
        console.log("I am hoisted to function scope");
    }
    console.log(hoisted);
}

console.log("--------------------------------------------------------------");
hoisted();


//

function tdzDemo() { 
    // console.log(aLetVar); 
    // ReferenceError: Cannot access 'aLetVar' before initialization 
    let aLetVar = 10; 
    console.log(aLetVar); // 10
    } 
      
    tdzDemo();

console.log("--------------------------------------------------------------");

    //hoisting with function Expression before it's defined.

//     console.log(notHoisted); // undefined
// // Even though the variable name is hoisted,
// // the definition isn't. so it's undefined.
// notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
console.log(notHoisted());