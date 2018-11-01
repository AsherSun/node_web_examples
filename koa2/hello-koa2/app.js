const Koa = require('koa2');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = new Date().getTime();
  await next();
  const ms =  new Date().getTime() - start;
  console.log(`${ctx.method} ${ctx.url} : ${ms}ms`);
  ctx.response.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx, next) => {
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello, koa2!</h1>'
});


app.use(async (ctx, next) => {
  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliSeconds);
    return 'okay.';
  }
  sleep(1000);
  await next()
});

app.listen(8807);

console.log('http://localhost:8807');
