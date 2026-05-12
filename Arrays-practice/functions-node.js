// push:
let fruits = ["Apple", "Banana"];

fruits.push("mango");

console.log(fruits);


// pop:
let nums=[3, 4];
nums.pop();
console.log(nums);


// join
let words = ["Muhammad", "Waleed"];

console.log(words.join(" "));


// reverse:
let nums = [1, 2, 3];
nums.reverse();

console.log(nums);



let nums = [1, 2, 3];
console.log(nums.toString());



//map() → Create new array
let num = [1, 2, 3];

let result = num.map(function(value) {
    return value * 2;
});

console.log(result);


//filter() → Filter values
let num = [10, 15, 20, 25];

let result = num.filter(function(value) {
    return value > 15;
});

console.log(result);


//find method
let num = [10, 20, 30];

let result = num.find(function(value) {
    return value > 15;
});

console.log(result);



// reduce Add all values:
let num=[10, 20, 30];
let result=num.reduce(function(total, value){
    return total + value;
}, 0);
console.log(result);


//some() → Check any ONE condition true

let num = [10, 20, 30];

let result = num.some(function(value) {
    return value > 25;
});

console.log(result);




//splice() → Add/Remove values
let num = [10, 20, 30, 40];

num.splice(1, 1);

console.log(num);


//sort() → Arrange numbers
let num = [40, 10, 30, 20];

num.sort(function(a, b) {
    return a - b;
});

console.log(num);


//join() → Convert array to string
let num = [10, 20, 30];

let result = num.join("-");

console.log(result);
console.log(typeof result);




//flat() → Remove nested arrays
let num = [1, [2, 3], [4, 5]];

let result = num.flat();

console.log(result);


//toUpperCase:
let name ="waleed";
console.log(name.toUpperCase());


//toLowerCase:
let name="ALI";
console.log(name.toLowerCase());



// slice:
let name="Pakistan";
console.log(name.slice(0, 3));



//includes:
let name="Computer is a Machine";
console.log(name.includes("is"));



//index of:
let name="waleed";
console.log(name.indexOf("e"));



//replace:
let name ="My name is Ali";
console.log(name.replace("Ali","Waleed"));


//Concat:
let a = "Hello";
let b = "World";

console.log(a.concat(" ", b));


// trim:
let text = "   Hello   ";
console.log(text.trim());



//split:
let text = "a,b,c";
console.log(text.split(","));










