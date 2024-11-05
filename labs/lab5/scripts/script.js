document.getElementById('calculate').addEventListener('click', () => {
  const input = document.getElementById('numberValues').value;
  const numbers = input.split(',').map(Number);

  
  let primeCount = 0, compositeCount = 0, neither = 0;

  
  const isPrime = (num) => {
      if (num <= 1) return false;
      for (let i = 2; i < num; i++) {
          if (num % i === 0) return false;
      }
      return true;
  };

//usin for loop
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === 1) {
          neither++;
      } else if (isPrime(numbers[i])) {
          primeCount++;
      } else {
          compositeCount++;
      }
  }
  document.getElementById('forResult').innerText = `For loop - Primes: ${primeCount}, Composites: ${compositeCount}, Neither: ${neither}`;

  // Reset counts for next loop
  primeCount = 0; compositeCount = 0; neither = 0;

  // Using forEach loop
  numbers.forEach((num) => {
      if (num === 1) {
          neither++;
      } else if (isPrime(num)) {
          primeCount++;
      } else {
          compositeCount++;
      }
  });
  document.getElementById('forEachResult').innerText = `ForEach loop - Primes: ${primeCount}, Composites: ${compositeCount}, Neither: ${neither}`;

  // Reset counts for next loop
  primeCount = 0; compositeCount = 0; neither = 0;
//using maps
  numbers.map((num) => {
      if (num === 1) {
          neither++;
      } else if (isPrime(num)) {
          primeCount++;
      } else {
          compositeCount++;
      }
  });
  document.getElementById('mapResult').innerText = `Map loop - Primes: ${primeCount}, Composites: ${compositeCount}, Neither: ${neither}`;

  
});

document.getElementById('reset').addEventListener('click', () => {
  document.getElementById('forResult').innerText = '';
  document.getElementById('forEachResult').innerText = '';
  document.getElementById('mapResult').innerText = '';
  primeCount = 0; compositeCount = 0; neither = 0;
  
});