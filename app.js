const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getNumberInput(prompt) {
  return new Promise((resolve, reject) => {
    rl.question(prompt, (input) => {
      if (input.toLowerCase().trim() === 'quit') {
        rl.close();
        process.exit(0);
      }
      const num = parseFloat(input.trim());
      if (isNaN(num)) {
        reject(new Error('Invalid input: Please enter a valid number.'));
      } else {
        resolve(num);
      }
    });
  });
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

function average(a, b) {
  return (a + b) / 2;
}


//Done my part!!