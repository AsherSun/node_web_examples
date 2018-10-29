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

function factorialAsync(response, url) {
  process.nextTick(() => {
    factorialView(url.searchParams, response)
  })
}

module.exports = {
  '/' : index,
  '/index': index,
  '/add': add,
  '/ride': ride,
  '/factorialAsync': factorialAsync
}