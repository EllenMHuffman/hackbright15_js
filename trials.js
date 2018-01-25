"use strict";
// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

phoneNumbers.set('home', '510-867-5309')
phoneNumbers.set('mobile', '415-555-1212')
phoneNumbers.set('business', '415-123-4567')

// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information
function printAccountInfo(name, number, business) {
    console.log(`Account Holder Name: ${name}`);
    console.log(`Account Holder Number: ${number}`);
    console.log(`Business Name: ${business}`);
}


// Add function to print all addresses, including a header

function showAddresses(addresses) {
    console.log("Addresses:");
    for (let address of addresses){
        console.log(address);
    }
}


// Add function to print phone types and numbers

function showPhones(phoneNumbers) {
    console.log("Phone Numbers:");
    for (let [k, v] of phoneNumbers){
        console.log(`${k}: ${v}`);
    }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions
let transactions = new Map();
transactions.set('May-2', -500);
transactions.set('May-13', +1200);
transactions.set('May-15', -100);
transactions.set('May-21', -500);
transactions.set('May-29', +2200);

// Add function to add transactions
function addTransaction(date, amount) {
    transactions.set(date, amount);
}


// Add function to show balance status
function showBalanceStatus(balance) {
    console.log(`Balance: ${balance}`);
    if (balance < 0) {
        console.log("You are overdrawn");
    } else if (balance < 20) {
        console.log("Warning: You are close to zero balance!");
    } else {
        console.log("Thank you for your business");
    }

}


// Add function to show transactions

function showTransactions(transactions, begBal) {
    let overdrawn = false;

    console.log(`Starting Balance: ${begBal}`);
    for (let [k, v] of transactions){
        console.log(`Transaction Date: ${k}`);
        if (v < 0){
            console.log("Withdrawal");
        } else {
            console.log("Deposit");
        }
        console.log(Math.abs(v));
        console.log(begBal += v);
        if (begBal < 0) {
            overdrawn = true
        }
    }

    if (overdrawn) {
        begBal -= 25;
        console.log("$25 overdraft fee applied");
    }

    showBalanceStatus(begBal);

}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info
const customerInfo = {
    "Account Holder": "Balloonicorn",
    "Account Number": "123456",
    "Business Name": "Balloonicorn's Cupcake Shop",
}

customerInfo["Addresses"] = addresses;
customerInfo["Phone Numbers"] = phoneNumbers;
customerInfo["Transactions"] = transactions;
customerInfo["Starting Balance"] = 26000;



// Function to add customer attributes
function addToObject(melon="Canteloupe", pets=0) {
    customerInfo["melon"] = melon;
    customerInfo["pets"] = pets;
}


// ///////////////////////////////////////////////////////
// Getting a Business Loan

function getInterestRate(income, customerInfo) {
    let preferredCustomer = false;
    let rate;

    if (customerInfo.melon === 'Casaba' || customerInfo.pets > 5) {
        preferredCustomer = true;
    }
    if (income < 100000) {
        rate = 8;
    } else if (income < 200000) {
        rate = 7;
    }
    if (preferredCustomer) {
        rate -= 3;
    }
    if (income >= 200000) {
        rate = 4;
    }

    return rate.toString();
}


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week


// Add a function for weekly hours






