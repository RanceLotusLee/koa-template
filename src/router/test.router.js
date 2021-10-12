const Router = require('koa-router');
const testController = require('../controller/test.controller');
const { sayHello } = require('../middleware/test.middleware');

const testRouter = new Router({
  prefix: '/test'
});

testRouter.get('/', sayHello, testController.demo);

module.exports = testRouter;