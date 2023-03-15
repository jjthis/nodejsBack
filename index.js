const Koa = require('koa'); 
const Router = require('koa-router');
const app = new Koa(); 
const router = new Router();
// app.use(async ctx => {ctx.body = 'Hello world' }); 
router.get('/', (ctx, next) => {
    ctx.body = '홈';
});
router.get('/start', (ctx, next) => {
    ctx.body = '홈tsm';
});
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('heurm server is listening to port 4000');
});
console.log("starts");