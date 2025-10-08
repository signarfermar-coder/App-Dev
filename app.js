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


async function performOperations() {
  try {
    const num1 = await getNumberInput('Enter the first number: ');
    const num2 = await getNumberInput('Enter the second number: ');

    const sum = add(num1, num2);
    const difference = subtract(num1, num2);
    const product = multiply(num1, num2);
    const quotient = divide(num1, num2);
    const avg = average(num1, num2);

    console.log('\n--- Results ---');
    console.log(`Addition: ${num1} + ${num2} = ${sum}`);
    console.log(`Subtraction: ${num1} - ${num2} = ${difference}`);
    console.log(`Multiplication: ${num1} * ${num2} = ${product}`);
    console.log(`Division: ${num1} / ${num2} = ${quotient}`);
    console.log(`Average: (${num1} + ${num2}) / 2 = ${avg}`);
    console.log('---------------\n');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

//Implementation on PerformOperation
