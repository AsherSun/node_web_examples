const fs = require('fs');

const Koa = require('koa');

const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

const app = new Koa();

function addControllers() {
  let controllersFiles = fs.readdirSync(__dirname + '/controllers');

  let filesJs = controllersFiles.filter(file => {
    return file.endsWith('.js')
  })
  for(let file of filesJs) {
    let mapping = require(__dirname + '/controllers/' + file)
    addControllersHandle(mapping)
  }
}

function addControllersHandle(mappingHandle) {
  for (let handle in mappingHandle) {
    if (handle.startsWith('GET ')) {
      let getPath = handle.substr(4)
      router.get(getPath, mappingHandle[handle]);
    } else if (handle.startsWith('POST ')) {
      let postPath = handle.substr(5)
      router.post(postPath, mappingHandle[handle]);
    } else {
      // router.get('404', async (ctx, next) => {
      //   ctx.response.body = '* v * Not Found.'
      //   next()
      // })
    }
  }
}

addControllers(router)

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// router.get('/hello/:name', async (ctx, next) => {
//   var name = ctx.params.name;
//   ctx.response.body = `<h1>Hello ${name}</h1>`;
// });

// router.get('/', async (ctx, next) => {
//   ctx.response.body = `<h1>Index</h1>
//   <form action="/signin" method="post">
//       <p>Name: <input name="name" value="koa"></p>
//       <p>Password: <input name="password" type="password"></p>
//       <p><input type="submit" value="Submit"></p>
//   </form>`
// })

// router.post('/signin', async (ctx, next) => {
//   let name = ctx.request.body.name || ''
//   let password = ctx.request.body.password || ''
//   console.log(`signin with name: ${name}, password: ${password}`);
//   if (name === 'koa' && password === '12345') {
//     ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
//   } else {
//     ctx.response.body = `<h1>Login failed!</h1><p><a href="/">Try agin</a></p>`;
//   }
// })

app.use(bodyParser());
app.use(router.routes());

app.listen(8808);

console.log('http://localhost:8808');

