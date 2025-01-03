# JavaScript Division by Zero Example

This repository demonstrates a common error in JavaScript: attempting to divide by zero. The `bug.js` file contains a function that performs division.  If the divisor is zero, it throws an error. The `bugSolution.js` shows how to gracefully handle this exception.

## How to Run

1. Clone this repository.
2. Open `bug.js` and run it in a JavaScript environment (Node.js, browser console, etc.).  Observe the error when attempting to divide by zero.
3. Open `bugSolution.js` to see how to handle the error using a try...catch block.

## Learning Points

* **Error Handling:**  It's essential to anticipate potential errors, such as division by zero, and handle them gracefully to prevent unexpected program termination. The `try...catch` block is a powerful tool for achieving robust error handling.
* **Input Validation:** A more proactive approach is to validate inputs before performing any calculations.  You could add a check to the `divide` function to ensure the divisor is not zero before attempting the division operation.
* **Testing:** Writing unit tests for your functions is an important part of software development. Such tests would identify this type of edge case easily.