const common = require('./common')
function factorial(n) {
  if(n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function fibonacci(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}
module.exports = function (req) {
  let num1 = req.get('a')
  if (!Math.floor(num1)) {
    return common.page('factorial', common.navMenu(), `
      <p>请输入正确的数字</p>
      <p>Enter Numbers to see it's factorial </p>
      <form name="add" action="/factorial" method="get">
        A: <input type="text" name="a" />
        <input type="submit" value="Submit"/>
      </form>
    `)
  } else {
    let fact = fibonacci(Math.floor(num1))
    return common.page('factorial', common.navMenu(), `
      ${!isNaN(num1) ? `<p class="result">${num1} factorial = ${fact}</p>` : '<p>请输入正确的数字</p>'}
      <p>Enter Numbers to see it's factorial </p>
      <form name="add" action="/factorial" method="get">
        A: <input type="text" name="a" />
        <input type="submit" value="Submit"/>
      </form>
    `)
  }
}