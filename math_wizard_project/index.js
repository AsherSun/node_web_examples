const serve = require('./serve.js')
const route = require('./router')
const handleRequest = require('./handleRequest')

serve(route, handleRequest)
