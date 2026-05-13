// //  Functions:

//  function greet() {
//      console.log("Hello");
//  }           
//                   // nothing prints yet; i am not calling the function

//  greet();        // function calling. code executes



// //sum of two number:
// function sum(a,b){
//     console.log(a+b);
//     console.log(a-b);
// }
// sum(4,7);
// sum(20,40);
// sum(10,20);



// // ------------------------------------------------------------------------------------------------------------------------


// function sayHello() {
//   console.log("Hello!");
// }

// function sayHello();


// //function FizzBuzz() {
// for(let i=1;i<=50; i++)
// if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
// }
// else if (i % 3 === 0){
//     console.log("Fizz")
// }
// else if (i % 5 === 0){
//     console.log("Buzz")
// }
// else{
//     console.log(i);
// }
// }

// FizzBuzz();



// // function test() {
//    console.log("Inside");
// }

// console.log("Outside");
// test();



// //Calculation:
// function calculateTotal(price, tax) {
//    return price + tax;
// }

// let result = calculateTotal(100, 20);

// console.log(result);


// //Together:
// function greet() {
//    console.log("Hello Waleed");

// }
// console.log("Before Function");

// greet();

// console.log("After Function");




// let name = "Waleed"; // global variable

// function showName() {
//     console.log(name);
// }
// showName();
// console.log(name);



// function greet() {
//     let msg = "Hello"; // local variable
//     console.log(msg);
// }
// greet();
// //console.log(msg); //  Error (not accessible outside)

// function greet() {

//    let age = 20;

//    console.log(age);
// }
// greet();
// //console.log(age);



// //Age Check ( Allowed or Not)
// function checkAge(age) {
//     if (age >= 18) {
//         console.log("Allowed");
//     } else {
//         console.log("not");
//     }
// }

// //checkAge(20);
// checkAge(15);


// // positive or negative number:
// function checkNumber(num) {
//     if (num > 0) {
//         console.log("Positive");
//     } else if (num < 0) {
//         console.log("Negative");
//     } else {
//         console.log("Zero");
//     }
// }

// checkNumber(5);
// checkNumber(-5);
// checkNumber(0);



// // Password check:
// function checkPassword(password)
// {
//     if(password === 1234){
//         console.log("Login Success")
//     }
//     else{
//         console.log("Wrong password")
//     }
// }
// checkPassword(1234);