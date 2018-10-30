function factorial(n) {
  if(n == 0) {
    return 1;
  } else {
    return n * factorialAsync(n -1);
  }
}

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n -1 ) + fibonacci(n - 2);
  }
}

function fibonacciAsync(n, done) {
  if (n === 1 || n === 2) {
    done(1);
  } else {
    process.nextTick(function() {
      fibonacciAsync(n - 1, function(value1) {
        process.nextTick(function() {
          fibonacciAsync(n - 2, function(value2) {
            done(value1 + value2);
          });
        });
      });
    });
  }
}

module.exports = {
  factorial,
  fibonacci,
  fibonacciAsync
}