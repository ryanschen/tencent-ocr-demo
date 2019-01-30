const path = require('path')
const Koa = require('koa')
const axios = require('./axios')
const signobj = require('./sign')
const serve = require('koa-static')
const koaBody = require('koa-body')
const route = require('koa-route')
const app = new Koa()

const getResult = async ctx => {
  const body = ctx.request.body
  if (!body.aiUrl) ctx.throw(400, '.aiUrl required')
  if (!body.aiParams) ctx.throw(400, '.aiParams required')

  let arr = {
    app_id: 2108697748, // 替换为实际APP_ID
    time_stamp: signobj.createTimestamp(),
    nonce_str: signobj.createNonceStr()
  }

  const appkey = 's0Z9XHK9D9p3wyYR' // 替换为实际APP_KEY
  
  arr = Object.assign({}, arr, body.aiParams)
  arr['sign'] = signobj.getSign(arr, appkey)

  const response = await axios.post(body.aiUrl, arr)
  ctx.body = response.data
}

app.use(koaBody())
app.use(serve(path.join(__dirname, '..', 'webapp')))
app.use(route.post('/getResult', getResult))
app.use(route.post('/h5-api/union/apply', async function(ctx) {
  const response = await axios.post(body.aiUrl, arr)
  ctx.body = response.data
}))

const port = 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}/`)
})