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
    throw new Error('Division by zero');
  }
  return a / b;
}

function handleDivision(a, b) {
  try {
    const result = divide(a, b);
    console.log("Result:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6
console.log(multiply(7, 2)); // Output: 14
console.log(divide(9, 3)); // Output: 3
handleDivision(5, 0); // Output: Error: Division by zero