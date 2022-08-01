function sumFibs(num) {
  let fib = [1, 1];
  let sum = 0;
  for (let i = 1; i < num; i++) {
    let fibNum = fib[i] + fib[i - 1];
    if (fibNum <= num) {
      fib.push(fibNum);
    }
  }
  for (let number of fib) {
    if (number % 2 !== 0) {
      sum += number;
    }
  }
  console.log(sum);

  return sum;
}

sumFibs(100);
