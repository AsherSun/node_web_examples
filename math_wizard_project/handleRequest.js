function index (response) {
  response({
    code: 200,
    contentType: 'text/html',
    hanldeResult: '/index'
  })
}

function add(response) {
  response({
    code: 200, 
    contentType: 'text/html', 
    hanldeResult: '/add'
  })
}

function ride(response) {
  response({
    code: 200, 
    contentType: 'text/html', 
    hanldeResult: '/ride'
  })
}

function factorial(response) {
  response({
    code: 200, 
    contentType: 'text/html', 
    handleResult: '/factorial'
  })
}

module.exports = {
  '/' : index,
  '/index': index,
  '/add': add,
  '/ride': ride,
  '/factorial': factorial
}