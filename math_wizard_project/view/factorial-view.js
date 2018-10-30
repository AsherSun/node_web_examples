const common = require('./common')
const URL = require('url').URL;
function factorialAsync(n, done) {
  if(n == 0) {
    done(1);
  } else {
    process.nextTick(function() {
      factorialAsync(n -1, function(value) {
        done(n * value);
      });
    })
  }
}

function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacci(n -1 ) + fibonacci(n - 2)
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

function view(num1, result) {
  return common.page('factorialAsync', common.navMenu(), `
    ${!isNaN(num1) ? `<p class="result">${num1} factorial = ${result}</p>` : '<p>请输入正确的数字</p>'}
    <p>Enter Numbers to see it's factorialAsync </p>
    <form name="add" action="/factorialAsync" method="get">
      A: <input type="text" name="a" />
      <input type="submit" value="Submit"/>
    </form>
  `)
}
process.on('message', m => {
  console.log('子进程收到消息：', m, typeof m)
  let url = new URL(m.url)
  page(url.searchParams.get('a'))
})
function page(params) {
  if (params === null || isNaN(params)) {
    process.send({
      page: view(NaN, NaN)
    })
  } else {
    fibonacciAsync(Math.floor(params), function (result) {
      process.send({
        page: view(params, result)
      })
    })
  }
}