

// class Cat {

//       constructor() {
//     console.log("A cat is created!");
//   }

//    meow()
//   {
//      console.log("meow")
//   }
// }

// let kitty = new Cat();
// kitty.meow()

// let lion = new Cat()






// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   meow() {
//     console.log(this.name + " says meow");
//   }
// }

// let cat1 = new Cat("Tom");
// let cat2 = new Cat("Jerry");

// cat1.meow();
// cat2.meow();




// class Cat {

//   constructor(name,age) {
//     this.x = name;
//     this.age = age;
//   }

//   meow() {
//     console.log(this.x + " says meow and his age is " + this.age);
//   }
// }

// let cat1 = new Cat("Tom",2);
// let cat2 = new Cat(1122,4);

// cat1.meow();
// cat2.meow();



// //Function
// function sayHello() {
//     console.log("Hello");
// }
// sayHello();




// //Method
// class Human {

//     speak() {
//         console.log("I can speak");
//     }

// }
// let Ali=new Human();
// Ali.speak()


// // Constructor
// class Human {

//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(this.name);
//     }

// }

// let ali = new Human("Ali");

// ali.speak();



// // Constructor or This:
// class Hy {

//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(this.name);
//     }

// }
// let Waleed=new Hy("Waleed")
// Waleed.speak();





// Task:

//Vehicle Class:
class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

let v1 = new Vehicle();
v1.start();

let v2 = new Vehicle();
v2.start();



// Student Class:
class Student {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log("My name is " + this.name);
    }
}

let s1 = new Student("Ali");
s1.introduce();




// Fruit Class:
class Fruit {
    constructor(name) {
        this.name = name;
    }

    show() {
        console.log("Fruit is " + this.name);
    }
}

let f1 = new Fruit("Mango");
f1.show();


// Maths Class:
class Maths {
    constructor(num) {
        this.num = num;
    }

    square() {
        console.log(this.num * this.num);
    }
}

let m1 = new Maths(4);
m1.square();


//Mobile class:
class Mobile{
    constructor(model){
        this.model=model;
    }
showmodel(){
    console.log(this.model);
}

}
let m2=new Mobile("Apple");
m2.showmodel();

let m3 = new Mobile("Huawei");
m3.showmodel();




// Book class:
class Book {
    constructor(title){
        this.title = title;
    }
    read(){
        console.log("Reading " + this.title + " book");
    }
}
let b1= new Book("English");
b1.read();




//Car Class:
class Car {
    constructor(brand,speed){
        this .brand= brand;
        this .speed=speed; 
    }
    drive(){
        console.log(this. brand + " is running at " + this. speed + " km/h");
    }
}
let c1 =new Car ("Toyata" ,120);
c1.drive();



