// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// class ATM {
//     #balance = 5000;
//     #pin = "1234";

//     start() {
//         rl.question("Enter PIN: ", (pin) => {

//             if (pin === this.#pin) {
//                 console.log("\nLogin Successful!\n");
//                 this.menu();
//             } else {
//                 console.log("Wrong PIN");
//                 rl.close();
//             }
//         });
//     }

//     menu() {
//         console.log("\n===== ATM MENU =====");
//         console.log("1. Check Balance");
//         console.log("2. Deposit");
//         console.log("3. Withdraw");
//         console.log("4. Exit");

//         rl.question("\nSelect option: ", (option) => {

//             if (option === "1") {
//                 console.log("Balance:", this.#balance);
//                 this.menu();
//             }

//             else if (option === "2") {
//                 rl.question("Enter amount: ", (amount) => {
//                     this.#balance += Number(amount);
//                     console.log("Deposited. New Balance:", this.#balance);
//                     this.menu();
//                 });
//             }

//             else if (option === "3") {
//                 rl.question("Enter amount: ", (amount) => {

//                     amount = Number(amount);

//                     if (amount > this.#balance) {
//                         console.log("Insufficient Balance");
//                     } else {
//                         this.#balance -= amount;
//                         console.log("Withdraw done. Balance:", this.#balance);
//                     }

//                     this.menu();
//                 });
//             }

//             else if (option === "4") {
//                 console.log("Bye");
//                 rl.close();
//             }

//             else {
//                 console.log("Invalid option");
//                 this.menu();
//             }
//         });
//     }
// }

// let atm = new ATM();
// atm.start();





// // single inheritance:
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Parent Class
// class BankAccount {
//     #balance = 5000;

//     getBalance() {
//         return this.#balance;
//     }

//     deposit(amount) {
//         this.#balance += amount;
//     }

//     withdraw(amount) {
//         if (amount <= this.#balance) {
//             this.#balance -= amount;
//             return true;
//         }
//         return false;
//     }
// }

// // Child Class
// class ATM extends BankAccount {
//     #pin = "1234";

//     start() {
//         rl.question("Enter PIN: ", (pin) => {

//             if (pin === this.#pin) {
//                 console.log("\nLogin Successful!\n");
//                 this.menu();
//             } else {
//                 console.log("Wrong PIN");
//                 rl.close();
//             }
//         });
//     }

//     menu() {
//         console.log("\n===== ATM MENU =====");
//         console.log("1. Check Balance");
//         console.log("2. Deposit");
//         console.log("3. Withdraw");
//         console.log("4. Exit");

//         rl.question("\nSelect option: ", (option) => {

//             if (option === "1") {
//                 console.log("Balance:", this.getBalance());
//                 this.menu();
//             }

//             else if (option === "2") {
//                 rl.question("Enter amount: ", (amount) => {
//                     this.deposit(Number(amount));
//                     console.log("Deposited Successfully");
//                     this.menu();
//                 });
//             }

//             else if (option === "3") {
//                 rl.question("Enter amount: ", (amount) => {

//                     if (this.withdraw(Number(amount))) {
//                         console.log("Withdraw Successful");
//                     } else {
//                         console.log("Insufficient Balance");
//                     }

//                     this.menu();
//                 });
//             }

//             else if (option === "4") {
//                 console.log("Bye");
//                 rl.close();
//             }

//             else {
//                 console.log("Invalid Option");
//                 this.menu();
//             }
//         });
//     }
// }

// let atm = new ATM();
// atm.start();




//  Base Class (GrandParent)
class Account {
    constructor(name) {
        this.name = name;
    }

    showUser() {
        console.log("User Name:", this.name);
    }
}


//  Middle Class (Parent)
class BankAccount extends Account {

    #balance;

    constructor(name, balance) {
        super(name);
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    _deposit(amount) {
        this.#balance += amount;
    }

    _withdraw(amount) {
        this.#balance -= amount;
    }
}


//  Child Class (ATM)
class ATM extends BankAccount {

    #pin;
    isLoggedIn = false;
    attempts = 0;

    constructor(name, balance, pin) {
        super(name, balance);
        this.#pin = pin;
    }

    //  LOGIN
    login(pin) {

        if (this.attempts >= 3) {
            console.log("ATM BLOCKED  Too many wrong attempts!");
            return false;
        }

        if (pin === this.#pin) {
            this.isLoggedIn = true;
            this.attempts = 0;
            console.log("Login Successful");
            return true;
        } else {
            this.attempts++;
            console.log("Wrong PIN  Attempt:", this.attempts);
            return false;
        }
    }

    //  CHECK BALANCE
    checkBalance() {

        if (!this.isLoggedIn) {
            console.log("Please login first!");
            return;
        }

        console.log("Balance:", this.getBalance());
    }

    //  DEPOSIT
    deposit(amount) {

        if (!this.isLoggedIn) {
            console.log("Please login first!");
            return;
        }

        this._deposit(amount);
        console.log(amount + " deposited successfully.");
    }

    //  WITHDRAW
    withdraw(amount) {

        if (!this.isLoggedIn) {
            console.log("Please login first!");
            return;
        }

        if (amount <= this.getBalance()) {
            this._withdraw(amount);
            console.log(amount + " withdrawn successfully.");
        } else {
            console.log("Insufficient Balance!");
        }
    }

    //  EXIT
    exit() {
        this.isLoggedIn = false;
        console.log("Thank you for using ATM");
    }
}


// 👤 USER OBJECT
let user1 = new ATM("Waleed", 1000, "1234");


//  LOGIN
user1.login("1234");


//  OPERATIONS
user1.showUser();
user1.checkBalance();
user1.deposit(500);
user1.withdraw(200);
user1.checkBalance();
user1.exit();





