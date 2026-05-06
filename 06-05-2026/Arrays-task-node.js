//Create array of 5 numbers + print using loop
//Arrays with for loop:

let numbers = [10, 20, 30, 40, 50 ];
for(let i = 0; i < numbers.length; i++) {
   console.log(numbers[i]);
}


 //Add number 100 at the end using push()

let numbers =[10, 20, 30, 40, 50];
numbers.push(100);
    console.log(numbers);


//Remove last element using pop()

    let numbers = [10, 20, 30, 40, 50];

numbers.pop();

console.log(numbers);


//Store numbers 1 to 10 in array using loop

let number= [];
for(let i=1; i<=10; i++){
    number.push(i);
}
    console.log(number)


    // store numbers 1 to 50 with fizzBuzz
    let numbers=[];
    for( let i=1; i<=50; i++){

        if(i%3===0 && i%5===0){
        numbers.push("fizzbuzz");
        }
else if (i%3===0){
    numbers.push("fizz");
}

else if (i%5===0){
    numbers.push("Buzz");
}

else{
    numbers.push(i);
}

    }
console.log(numbers);

