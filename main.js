// what is "use strict" mode and what it does?
// strict mode make debugging easier
// we put it in string because it tell the browser 
"use strict";


// not strict mode
function newCode() {
    "use strict"
    // Strict mode
}



var theVal = 0;
theVal = 1;

if(theVal > 0) {
    console.log("Hello!");
}

// another feature of use strict is stop use a reserved for future version of js

//use strict feature  can not delete function and arguments

// var eval = 1;


// Does javascript pass variables by reference or by value;
// the answer is, it pass primatives types string, bool, number, etc by value 
// and it pass objects by reference

// outside scope
var a = 1;
function foo(a) {
    // in scope
    a = 2;
}
foo(a); // a pass by value (copy of a)
console.log(a);


// pass by reference
var b = {};  // b is an object
function foo2() {
    b.zoo = false; // pass by reference
}
foo2(b)
console.log(b);




// what are the rest operator?
// ...
function sum(a, b) {
    console.log(arguments);
    return a+b;
}

sum(1,2); // 3
sum(1,2,3,4); // what will happen when u call this? answer it will print 3 it will ignore 3 and 4
sum(1) //  what will happen when call this? answer NaN as b is not specified


function login(method) {
    // var options = arguments.slice(1);
    var options = Array.prototype.slice.call(arguments, 1);
    console.log(method);
    console.log(options);
}

login("facebook", 1,2,3,4);

// arguments is not an array it looks like an array ut actually it is not.


// using rest operator
function login2(...options) {
    console.log(options);
}
login2("facebook", 1,2,3,4);

function login3(method, ...options) {
    console.log(method);
    console.log(options);
}

login3("facebook", 1,2,3,4);


// what is the spread operator?
// ...

// answers
// concate two arrays
var ar1 = [4,5,6];
var ar2 = [1,2,3, ...ar1];
console.log(ar2);


// copying an array
var ar11 = [4,5,6];
var ar22 = [...ar11]; // we create a copy of ar11
ar11[0] = -1;
console.log(ar11);
console.log(ar22);

// calling function
var meth = "twitter";
var opts = ["key", "callbackUrl"];
function myLogin(method, ...options) {
    console.log(method);
    console.log(options);

}
myLogin(meth, ...opts);


// what are template strings?

var msg = 'hello world\'s my name is asim';
console.log(msg)