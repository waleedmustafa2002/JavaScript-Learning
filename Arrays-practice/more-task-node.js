//Arrays task for loop used:
// Print all elements:

let num = [10, 20, 30, 40];
for(let i=0; i< num.length; i++) {
    console.log(num[i]);
}


// Sum of array:

let nums=[1, 2, 3, 4, 5];
let sum = 0;
for (let i=0; i<nums.length; i++){
    sum= sum + nums[i];
}
console.log(sum);


//Find largest number

let nums = [10, 50, 30, 80, 20];
let largest=[0];
for(let i=0; i<nums.length; i++){
if (nums[i]> largest){
    largest=nums [i];
}

}
console.log(largest);


// Count even numbers:

let nums=[2, 3, 4, 5, 6, 7, 8];
let count = 0;
for(let i=0; i<nums.length; i++){
   if(nums[i] %2 === 0){
    count++;
   }

}
console.log(count);


// Sum of array:

let nums=[10, 20, 30, 40, 50];
let sum=0;
for (let i=0; i<nums.length; i++){
sum=sum+nums[i];

}
console.log(sum);


 // store even or odd number in array:

let nums=[1, 2, 3, 4, 5, 6,];
let even=[];
let odd=[];
for(let i=0; i<nums.length; i++){
    if(nums[i]%2===0){
        even.push(nums[i]);
    }

    else{
        odd.push(nums[i]);
    }
} 
console.log("Even:",even);
console.log("Odd:",odd);
console.log(nums[4]);


// Reverse array:

let nums=[1,2,3,4,5];
let reversed=[];
for (let i=nums.length -1; i>=0; i--){
reversed.push(nums[i]);

}
console.log(reversed);

