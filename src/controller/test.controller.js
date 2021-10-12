const testService = require('../service/test.service');

class TestController {
  async demo(ctx, next){
    await testService.demo();
    ctx.body = ctx.hello + 'koa';
  }
}

module.exports = new TestController();