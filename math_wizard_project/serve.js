const http = require('http');
module.exports = function() {
  http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('math wizard project.');
  }).listen(8801);
}