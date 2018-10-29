module.exports = function (url, handle, response) {
  if (typeof handle[url.pathname] === 'function') {
    handle[url.pathname](response, url)
  } else {
    response({code: 404, hanldeResult: '404 Not found.'})
  }
}