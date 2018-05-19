
var Koa = require('koa');
var app = new Koa();
const  serve = require("koa-static");
app.use(serve(__dirname+ "/static"));
app.listen(8080);