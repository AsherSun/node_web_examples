
const cp = require('child_process');
const addView = require('./view/add-view');
const common = require('./view/common');
const rideView = require('./view/ride-view')


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
  let childProcess = cp.fork('./view/factorial-view')
  childProcess.on('message', (m) => {
    console.log('父进程收到消息：', m)
    response({
      code: 200,
      contentType: 'text/html',
      hanldeResult: m.page
    })
  });
  childProcess.send({url: url})
}

module.exports = {
  '/' : index,
  '/index': index,
  '/add': add,
  '/ride': ride,
  '/factorialAsync': factorialAsync
}