const Koa = require('koa');
const path = require('path');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const cors = require('koa2-cors');
const static = require('koa-static');
const { historyApiFallback } = require('koa2-connect-history-api-fallback');
const useRoutes = require('../router');

const app = new Koa();

const dest = path.resolve(__dirname, '../public'); //静态资源路径

app.use(logger()); //日志
app.use(bodyParser()); //处理所有body格式，除了form-data
app.use(cors()); //允许跨域
app.use(useRoutes); //注册所有路由
app.use(historyApiFallback({
  whiteList: ['/api'], //添加路由白名单
})); //处理vue history和接口的冲突
app.use(static(dest)); 

module.exports = app;
