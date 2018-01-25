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
transactions.set('May-13', +1,200);
transactions.set('May-15', -100);
transactions.set('May-21', -500);

// Add function to add transactions


// Add function to show balance status


// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info


// Function to add customer attributes


// ///////////////////////////////////////////////////////
// Getting a Business Loan


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






