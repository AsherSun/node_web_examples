exports.navMenu = function() {
  return `<header>
    <nav>
      <p><a href='/'>home</a></p>
      <p><a href='/add'>add</a></p>
      <p><a href='/ride'>ride</a></p>
      <p><a href='/factorialAsync'>factorialAsync</a></p>
    </nav>
  </header>`
}

exports.page = function(title, navMenu, content) {
  return `<!doctype html>
  <html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8"/>
    </head>
    <body>
      ${navMenu}
      <h1>${title}</h1>
      <table>
        <tr>
          <td>${content}</td>
        </tr>
      </table>
    </body>
    <body></body>
  </html>`
}