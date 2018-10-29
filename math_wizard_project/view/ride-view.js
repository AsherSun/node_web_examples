const common = require('./common')

module.exports = function (req) {
  let num1 = req.get('a')
  let num2 = req.get('b')
  return common.page('ride', common.navMenu(), `
    ${!isNaN(num1) && !isNaN(num2) ? `<p class="result">${num1} * ${num2} = ${num1 * num2}</p>` : '<p>请输入正确的数字</p>'}
    <p>Enter Numbers to Add</p>
    <form name="add" action="/ride" method="get">
      A: <input type="text" name="a" /> <br />
      B: <input type="text" name="b" />
      <input type="submit" value="Submit"/>
    </form>
  `)
}