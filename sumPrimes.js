function sumPrimes(num) {
  let sieve = [],
    i,
    j,
    primes = 0;
  for (i = 2; i <= num; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes += i;
      for (j = i << 1; j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }
  return primes;
}
console.log(sumPrimes(100));
sumPrimes(10);
