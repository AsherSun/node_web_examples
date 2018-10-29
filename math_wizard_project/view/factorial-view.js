const common = require('./common')
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
module.exports = function (req, response) {
  let num1 = req.get('a')
  if (!Math.floor(num1)) {
    response({
      code: 200,
      contentType: 'text/html',
      hanldeResult: common.page('factorialAsync', common.navMenu(), `
        <p>请输入正确的数字</p>
        <p>Enter Numbers to see it's factorialAsync </p>
        <form name="add" action="/factorialAsync" method="get">
          A: <input type="text" name="a" />
          <input type="submit" value="Submit"/>
        </form>
      `)
    }) 
  } else {
    fibonacciAsync(Math.floor(num1), function (result) {
      response({
        code: 200,
        contentType: 'text/html', 
        hanldeResult: common.page('factorialAsync', common.navMenu(), `
          ${!isNaN(num1) ? `<p class="result">${num1} factorial = ${result}</p>` : '<p>请输入正确的数字</p>'}
          <p>Enter Numbers to see it's factorialAsync </p>
          <form name="add" action="/factorialAsync" method="get">
            A: <input type="text" name="a" />
            <input type="submit" value="Submit"/>
          </form>
        `)
      })
    })
  }
}