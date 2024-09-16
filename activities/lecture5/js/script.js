
function calculate(num1, num2, operation) {
  let result;

  
  switch (operation) {
      case '+':
          result = num1 + num2;
          break;
      case '-':
          result = num1 - num2;
          break;
      case '*':
          result = num1 * num2;
          break;
      case '/':
              result = num1 / num2;
          break;
      default:
          console.log('Error: Unknown operation.');
          return 'Error';
  }

  
  console.log(`${num1} ${operation} ${num2} = ${result}`);
  return result;
}


calculate(10, 5, '+'); 
calculate(10, 5, '-'); 
calculate(10, 5, '*'); 
calculate(10, 5, '/'); 

console.log("just a small example for fun!")
