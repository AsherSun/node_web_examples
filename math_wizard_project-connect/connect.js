const connect = require('connect');

connect.createServe()
  .use(connect.favicon())
  .use(connect.logger())