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
var isBold = true;
var msg = `hello my name is ${isBold ? "<b>asim</b>" : "asim"}`;
console.log(msg)



// what are template strings tag?
// i18n - internalization
// how to create them?

function h1(strings, ...values) {
    return "h1" + strings[0] + "</h1>";
}
var name = "asim";
var place = "world";
console.log(h1`hello ${place} my name is ${name}`);

// h1`asim` // <h1>asim</h1>



// What does the below print?
//
//     var fruits = ["Apples", "Oranges", "Bananas"];
//     console.log(["Mangoes", ...fruits]);
// ["Mangoes", "Apples", "Oranges", "Bananas"]


// what are the different types in javascript?

/*
 primetive types
 6 types

 Boolean   true/false
 Number    int
 String    "a"
 Null      null
 Undefined   undefined

 non-premetive types
 Object    new Object()


 typeOf(x)
 examples
 typeof(1)  // number
 typeof(null)  // object
 typeof({})  // object



 /*
 what is the difference between dynamic language js and static language like java?
 - with js the type of  variable is detemined at run time dynamically
 - in java the type of a variable is determines tyatically as e write the code

 */

// in static we can manage memory


// what is the difference between undefined and null?
/*
var a;
console.log(a)

undefined - is used by js to show that variable is not initialized and have no type
null -  only a programmer set the null not js

in js null is a value, in java null is not a value

null == undefined return true we are comparing a value not types
*/


/* what is the difference between == and ===?
== check only the values between two elements
=== strict equal compare the type and the value for two elements

'' == '0'  false
0 === ''   true
0 == '0'   true
0 === ''   false  the value and the type not the same
0 === '0'  false   the value and the type not the same


Boolean('false')  true
*/


/*

what is the type of NaN?   // "number"
what is NaN and how can we check for it?
"abc"/4    NaN
NaN == 1   false
NaN == false
NaN == NaN  // false strange lol

isNaN(NaN) true
isNaN("A") true lol
isNaN("1")  false

NaN == NaN false

interviewer lookin for how to check if the variable is NaN?
var a == NaN  // undefined
a !== a  true
a = 1 // 1
a !== a   // false
a = 'a' // "a"
a != a // false
*/


/* what are the different scopes in javascript?



*/
