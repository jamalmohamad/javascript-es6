#### Grammar and types

#

### Basic
JavaScript is case-sensitive and uses the Unicode character set.

A semicolon is not necessary after a statement if it is written on its own line. But if more than one statement on a line is desired, then they must be separated by semicolons.

#
### Comments

```
// a one line comment

/* this is a longer,
 * multi-line comment
 */

/* You can't, however, /* nest comments */ SyntaxError */


```

#

## Declarations
### var
(var hoisting)
Because variable declarations (and declarations in general) are processed before any code is executed, declaring a variable anywhere in the code is equivalent to declaring it at the top. This also means that a variable can appear to be used before it's declared. This behavior is called "hoisting", as it appears that the variable declaration is moved to the top of the function or global code. 


```
bla = 2;
var bla;

// ...is implicitly understood as:

var bla;
bla = 2;

```

For that reason, it is recommended to always declare variables at the top of their scope (the top of global code and the top of function code) so it's clear which variables are function scoped (local) and which are resolved on the scope chain. 



let 

```
function varTest() {
  var x = 1;
  {
    var x = 2;  // same variable!
    console.log(x);  // 2
  }
  console.log(x);  // 2
}

function letTest() {
  let x = 1;
  {
    let x = 2;  // different variable
    console.log(x);  // 2
  }
  console.log(x);  // 1
}

```

const

The const declaration creates a read-only reference to a value.

```
// define MY_FAV as a constant and give it the value 7
const MY_FAV = 7;

// this will throw an error - Uncaught TypeError: Assignment to constant variable.
MY_FAV = 20;

// MY_FAV is 7
console.log('my favorite number is: ' + MY_FAV);

// trying to redeclare a constant throws an error
// Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// the name MY_FAV is reserved for constant above, so this will fail too
var MY_FAV = 20;

// this throws an error too
let MY_FAV = 20;

```

Variable scope

When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available only within that function.

``` 
if (true) {
  var x = 5;
}
console.log(x);  // x is 5

```

```
if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y is not defined

```

Data structures and types
Data types
The latest ECMAScript standard defines eight data types:


    Seven data types that are primitives:
        - Boolean. true and false.
        null. A special keyword denoting a null value. (Because JavaScript is case-sensitive, null is not the same as Null, NULL, or any other variant.)
       
        - undefined. A top-level property whose value is not defined.
        
        - Number. An integer or floating point number. For example: 42 or 3.14159.
        
        - BigInt. An integer with arbitrary precision. For example: 9007199254740992n.
        
        - String. A sequence of characters that represent a text value. For example: "Howdy"
        
        - Symbol (new in ECMAScript 2015). A data type whose instances are unique and immutable.
    and Object



Data type conversion

JavaScript is a dynamically typed language. This means you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.

So, for example, you could define a variable as follows:

`var answer = 42;`

And later, you could assign the same variable a string value, for example:

`answer = 'Thanks for all the fish...';`

Because JavaScript is dynamically typed, this assignment does not cause an error message.

## Numbers and the '+' operator

In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings. For example, consider the following statements:

```
x = 'The answer is ' + 42 // "The answer is 42"
y = 42 + ' is the answer' // "42 is the answer"
```

