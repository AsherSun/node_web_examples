const addView = require('./view/add-view');
const common = require('./view/common');
const rideView = require('./view/ride-view');
const factorialView = require('./view/factorial-view')

function index (response) {
  response({
    code: 200,
    contentType: 'text/html',
    hanldeResult: common.page('Index', common.navMenu(), '')
  })
}

function add(response, url) {
  response({
    code: 200, 
    contentType: 'text/html', 
    hanldeResult: addView(url.searchParams)
  })
}

function ride(response, url) {
  response({
    code: 200, 
    contentType: 'text/html', 
    hanldeResult: rideView(url.searchParams)
  })
}

function factorial(response, url) {
  response({
    code: 200, 
    contentType: 'text/html', 
    hanldeResult: factorialView(url.searchParams)
  })
}

module.exports = {
  '/' : index,
  '/index': index,
  '/add': add,
  '/ride': ride,
  '/factorial': factorial
}