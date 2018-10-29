const http = require('http');
module.exports = function(route, routeHandle) {
  http.createServer(function(req, res) {
    if (req.url === '/favicon.ico') return false;
    route(req.url, routeHandle, function (options = {code: 200, contentType: 'text/html',  hanldeResult: ''}) {
      res.writeHead(options.code, {'Content-Type': options.contentType || 'text/html'});
      res.end(options.hanldeResult);
    })
  }).listen(8801);
}
