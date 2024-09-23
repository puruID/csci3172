// (a) Function to calculate the area of a circle with radius 6
const radius = 6;
const pi = Math.PI;
const areaOfCircle = (radius, pi) => {
  return pi * radius * radius;
};
console.log("The area of the circle is: " + areaOfCircle(radius, pi));

const num1 = 12;
const num2 = 5;
// (b) Function to perform basic sum operations
const sumOfNumbers = (num1, num2) => {
  return num1 + num2;
};
console.log("The sum of the numbers is: " + sumOfNumbers(num1, num2));
// (b) Function to perform basic subtraction operations
const subtraction = (num1, num2) => {
  return num1 - num2;
};
console.log("The difference of the numbers is: " + subtraction(num1, num2));
// (b) Function to perform basic multiplication operations
const multiplication = (num1, num2) => {
  return num1 * num2;
};
console.log("The product of the numbers is: " + multiplication(num1, num2));
// (b) Function to perform basic division operations
const division = (num1, num2) => {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Error: Division by zero is not allowed";
  }
};
console.log("The quotient of the numbers is: " + division(num1, num2));
// (c) Function to calculate the area of a rectangle with length 20 and width 15
const length = 10;
const width = 15;
const areaOfRectangle = (length, width) => {
  return length * width;
};
console.log("The area of the rectangle is: " + areaOfRectangle(length, width));


//answer to the questions :
//(a) What is the scope of a const variable?
// Constants are block-scoped, similar to variables declared with the let statement. Once defined, the value of a constant cannot be reassigned or redeclared.

//(b) When were the let and const keywords added to JavaScript?
// In 2015, with ES6.