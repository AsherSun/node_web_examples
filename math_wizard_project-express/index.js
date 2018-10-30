const express = require('express');
const app = express.createServer(
  express.logger()
);
app.register('.html', require('ejs'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.configure(function() {
  app.use(app.router);
  app.use(express.static(__dirname + '/filez'));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }))
});

app.get('/', function(req, res) {
  res.render('home.html', {title: 'Math wizard'});
});

app.get('/mult', function(req, res) {
  if (req.a && req.b) req.result = req.a * req.b;
  res.render('mult.html', {
    title: 'Math Wizard',
    req: req
  })
})

app.get('/square', (req, res) => {
  if (req.a) {
    Math.fibonacciAsync(Math.floor(req.a), val => {
      req.result = val;
      res.render('fibo.html', {
        title: 'Math wizard',
        req
      })
    })
  } else {
    res.render('fibo.html', {
      title: 'Math Wizard',
      req
    })
  }
})

app.get('/factorial', (req, res) => {
  if (req.a) req.result = Math.factorial(req.a);
  res.render('factorial.html', {
    title: 'Math wizard',
    req: req
  })
})

app.get('/404', (req, res) => {
  res.send('not found' + req.url);
})

app.listen(8803);
console.loog('listening to http://loaclhost:8803');