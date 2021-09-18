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

scopes
- function or local scope variable

function moo() {
var foo = 1;
}
console.log(foo)  foo is not exist thus it will gives error and it is outside the function
- var making global variable in js

- block level scope variable - comes to es6
*/
{
  var a = "block";
}
console.log(a);  // undefined

{
  let b = "block";
}
console.log(b);  // error will throw a is not defined because we used let keyword


// what is the difference between let, const, and var?
/*
* let a;     once declared we can not assign any thing later
* const a;   similar to let, but we can use the variable later for re-assign
* var a;     it is declared in global scope and we can use it everywhere with re assignation.
*
* **/
// what is variable hoisting?
// we can declare let,var, const anywhere in the file in js, js under the hood put the declarations in the top
// hoisting means automatic hoisting for the delcarations variable

fooo();

function fooo() {
    var a ;
    console.log(a);
    a = 1;
}

// what is scope chain?
// function scope they can nested inside other function
// first look into inner scope then it go outer then outer and outer


// nested functions
// they will trick you up, they will ask what it will print
function roo2() {
    console.log(myVar2);  // undersolved myVar2 variable
}

function goo2() {
    var myVar2 = 1;
    roo2();

}

function goo() {
    var myVar = 1;
    function roo() {
        console.log(myVar);
        function too() {
            console.log(myVar);
        }

        too();
    }
    roo();

}
goo();



// what is an IIFE and why might you use it?
// IIFE - Immediatley Invoked Function Expression
// anonymous function
(function() {
    var thing = {'hello': 'other'};
    console.log("other: ", thing);
})();


// what are function closures?
// a function that return a function currying
// clousre - the function that return it keep the reference to its variable
// here the closure is text
function sayHello(name) {
    var text = 'Hello' + name;
    return function() {
        console.log(text);
    }
};

var sayAsim = sayHello("Asim");
sayAsim();


// closure skill test
var doo = [];
for(var i =0; i < 10; i++) {
    doo[i] = function() { return i };
}
console.log(doo[0]());
console.log(doo[1]());
console.log(doo[2]());

// the output will be 10 for all
// we will solve it with IIFE
var doo2 = [];
for(var i =0; i < 10; i++) {
    (function() {
        var y = i;
        doo2[i] = function() { return i };
     })();
    }

console.log(doo2[0]());
console.log(doo2[1]());
console.log(doo2[2]());
// the output will be 0 to 10


// destructuring
const obj = {first: 'Asim', last: 'Hussain', age: 42};
const {first: f, age: ag} = obj;   //destructuring

console.log(f);
console.log(ag);


// array destructuring
const arr = ['a', 'b'];
const [x, y] = arr;

console.log(x);
console.log(y);

// function ff({x=0}) {
//   console.log(x);
// }
// ff({x=1});


// What are the different ways you can loop with for?

let array = [1,2,3];
// for
for(let i = 0; i <array.length; i++) {
  console.log(array[i]);
}

// foreach
// One of the disadvantages of forEach is that you cannot use continue or break and return statements don't behave as you might expect.
array.forEach((value) => {
  console.log(value);
})

// for-in
// objects
var obj = {a:1, b:2};
for(let prop in obj) {
    console.log(prop);
}

// for-of
// array
let array = [10,20, 30];
for(let value of array) {
    console.log(value);
    console.log(typeof(value));
}


// what does this keyword means?
console.log(this); // will print a global window object
this.asim = 1;  // is setting asim as a global window object

console.log(this.asim);
console.log(window.asim);

function checkThis() {
    console.log(this);
}
checkThis();

var asim = {
    checkThis: function() {
        console.log(this);
    }
};
asim.checkThis();  // isn't pointing to global object but it pointing to object asim

// in js this is determined by calling a conttext,



// what do the functions call, bind and apply do?


// what is a fat arrow function?
// first class function is called anonymous function
setTimeout(function() {
    console.log("setTimeout called!");
}, 1000);


let callback = function() {
    console.log("setTimeout called!");
}


var setTimeOut = (timeout) => {
    console.log()
};
setTimeOut(1000);

// what is the prototype chain?


// what is the difference between prototypal and classical inheritance?


// what is the Constructor OO pattern?


// what is the Prototype OO pattern?


// How do you use the class and extends keywords?


