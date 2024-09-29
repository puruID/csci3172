document.addEventListener("DOMContentLoaded", function() {
  // the day select background color change logic
  const daySelect = document.getElementById('daySelect');
  const colorContainer = document.getElementById('colorContainer');

  daySelect.addEventListener('change', function() {
      const selectedDay = daySelect.value;
      switch (selectedDay) {
          case 'Monday':
              colorContainer.style.backgroundImage = 'linear-gradient(to right, #2E3192, #1BFFFF)';
              break;
          case 'Tuesday':
              colorContainer.style.backgroundImage = 'linear-gradient(to right, #662D8C, #ED1E79)';
              break;
          case 'Wednesday':
              colorContainer.style.backgroundImage = 'linear-gradient(to right, #43cea2, #185a9d)';
              break;
          case 'Thursday':
              colorContainer.style.backgroundImage = 'linear-gradient(to right, #f7971e, #ffd200)';
              break;
          case 'Friday':
              colorContainer.style.backgroundImage = 'linear-gradient(to right, #ff9966, #ff5e62)';
              break;
          case 'Saturday':
              colorContainer.style.backgroundImage = 'linear-gradient(to right, #00c6ff, #0072ff)';
              break;
          case 'Sunday':
              colorContainer.style.backgroundImage = 'linear-gradient(to right, #e1eec3, #f05053)';
              break;
          default:
              colorContainer.style.backgroundImage = 'none';
              colorContainer.style.backgroundColor = 'white';
              break;
      }
  });

  //  number evaluation logic
  const form = document.getElementById('numberForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', function(event) {
      event.preventDefault(); 

      const number = parseInt(document.getElementById('numberInput').value);
      let message = 'The number entered is ';

      // Check whether the number is odd or even
      if (number % 2 === 0) {
          message += 'even ';
      } else {
          message += 'odd ';
      }

      // Check whether the number is prime or composite
      if (isPrime(number)) {
          message += 'and prime ';
      } else {
          message += 'and composite ';
      }

      // if and else if statements to check the range of the number
      if (number <= 50) {
          message += 'and less than or equal to 50.';
      } else if (number > 50 && number <= 75) {
          message += 'and greater than 50 and less than or equal to 75.';
      } else if (number > 75 && number < 100) {
          message += 'and greater than 75 and less than 100.';
      } else {
          message += 'and greater than 100.';
      }

      //the result message
      result.textContent = message;
  });

  // Helper function to check if a number is prime
  function isPrime(num) {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) {
              return false;
          }
      }
      return true;
  }
});
