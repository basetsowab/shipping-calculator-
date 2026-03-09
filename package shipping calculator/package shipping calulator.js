const readline = require("readline");


// for weight calculation
// I put 5 dollars per pound is being charged

function calculateCost(weight, distance, express) {

  if (arguments.length === 1) {
    return weight * 5;
  }

  // calculates weight and distance
  // for every mile I decided to charge 50 cents extra

  if (arguments.length === 2) {
    return (weight * 5) + (distance * 0.5);
  }

  // calulates the things for express shipping
  // following all the other calculations I put 10 dollars extra for express because this is similar what ups charges

  if (arguments.length === 3) {
    let cost = (weight * 5) + (distance * 0.5);

    if (express) {
      cost = cost + 10;
    }

    return cost;
  }

  return "Invalid input combination";
}


// Helper function: ask a question and wait for the answer

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}


// Main function where it calulates the price value of the packages

async function main() {
  console.log("Lets Calculate your delivery price");
  console.log("Choose the option that is best for you ");
  console.log("For Weight only type 1");
  console.log("For Weight and distance type 2");
  console.log("For Weight, distance, and express type 3");

  const choice = (await ask("")).trim();

  if (choice === "1") {
    const weight = parseFloat(await ask("Enter weight (lb): "));
    const result = calculateCost(weight);
    console.log("Total cost: $" + result.toFixed(2));
    console.log("Thank you and happy shipping ");
  }

  else if (choice === "2") {
    const weight = parseFloat(await ask("Enter weight (lb): "));
    const distance = parseFloat(await ask("Enter distance (miles): "));
    const result = calculateCost(weight, distance);
    console.log("Total cost: $" + result.toFixed(2));
    console.log("Thank you and happy shipping ");
  }

  else if (choice === "3") {
    const weight = parseFloat(await ask("Enter weight (lb): "));
    const distance = parseFloat(await ask("Enter distance (miles): "));
    console.log("Express delivery? Yes or NO : ");
    const expressChoice = (await ask("If Yes type y and If No type n")).trim().toLowerCase();

    // Convert y/n into boolean true/false
    const express = (expressChoice === "y");

    const result = calculateCost(weight, distance, express);
    console.log("Total cost: $" + result.toFixed(2));
    console.log("Thank you and happy shipping ");
  }

  else {
    console.log("Invalid option.");
  }

  rl.close();
}

main();