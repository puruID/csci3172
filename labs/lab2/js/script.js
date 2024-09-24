// 1. Function to calculate the area of a circle of radius 6
function calculateCircleArea() {
  const radius = 6; 
  const pi = 3.14159;
  const area = pi * radius * radius; 
  console.log("The area of the circle is: " + area);
}

// Call the function to print the area of the circle
calculateCircleArea();

// 2. Function to perform arithmetic operations (add, subtract, multiply, divide)
function arithmeticOperations(value1, value2, operation) {
  let result = 0; 

  if (operation === "add") {
    result = value1 + value2;
  } else if (operation === "subtract") {
    result = value1 - value2;
  } else if (operation === "multiply") {
    result = value1 * value2;
  } else if (operation === "divide") {
    if (value2 === 0) {
      console.log("Division by zero is not allowed.");
      return;
    } else {
      result = value1 / value2;
    }
  } else {
    console.log("Invalid operation.");
    return;
  }

  console.log("The result of " + operation + " is: " + result);
}

// 3. Function to calculate the area of a rectangle
function calculateRectangleArea() {
  const length = 20;
  const width = 15;
  const area = length * width; //formula for Calculating the area
  console.log("The area of the rectangle is: " + area);
}

// Call the function to print the area of the rectangle
calculateRectangleArea();

//answer to the questions :
//(a) What is the scope of a const variable?
// Constants are block-scoped, variables declared with const cannot be redeclared or reassigned. For example, if you declared a variable let us say lastname as 'Doe' and then you try to reassign the value to 'Joe' that will give you an error.
//(b) When were the let and const keywords added to JavaScript?
// In 2015, with ES6.
