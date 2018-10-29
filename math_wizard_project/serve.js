const http = require('http');
const URL = require('url').URL;

module.exports = function(route, routeHandle) {
  http.createServer(function(req, res) {
    if (req.url === '/favicon.ico') return false;
    let url = new URL(req.url, 'http://localhost:8801')
    route(url, routeHandle, function (options = {code: 200, contentType: 'text/html',  hanldeResult: ''}) {
      res.writeHead(options.code, {'Content-Type': options.contentType || 'text/plain'});
      res.end(options.hanldeResult);
    })
  }).listen(8801);
}
