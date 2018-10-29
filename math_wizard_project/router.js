module.exports = function (url, handle, response) {
  if (typeof handle[url] === 'function') {
    handle[url](response)
  } else {
    response({code: 404, hanldeResult: '404 Not found.'})
  }
}