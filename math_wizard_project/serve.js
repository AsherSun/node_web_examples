const http = require('http');
module.exports = function(route) {
  http.createServer(function(req, res) {
    if (req.url === '/favicon.ico') return false;
    route(req.url)
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('math wizard project. url: ' + req.url);
  }).listen(8801);
}