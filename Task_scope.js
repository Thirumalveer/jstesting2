//1. What is the output of:

var x = 10;
function foo() {
  console.log(x);
}
foo();

foo();
//ans:10

//2. What is the output of:

var x = 10;
function foo() {
  var x = 20;
  console.log(x);
}
foo();

//ans:20


//3.1. What is the output of:

var x = 10;
function foo() {
  console.log(x);
  var x = 20;
}
foo();
//ans:undefined


//4.1. What is the output of:

var x = 10;
function foo() {
  console.log(x);
}
var x = 20;
foo();


//ans:20


//5.1. What is the output of:

function foo() {
  console.log(x);
}
var x = 10;
foo();


//ans:10

//6.1. What is the output of:

function foo() {
  console.log(x);
}
foo();
var x = 10;

//ans:undefined








