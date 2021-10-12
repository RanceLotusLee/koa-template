const {readdirSync} = require('fs');
const Router = require('koa-router');

const useRoutes = async (ctx, next)=>{
  const rootRouter = new Router({
    prefix: '/api', //配置根路由前缀
  });
  readdirSync(__dirname).forEach(file => {
    if(file !== 'index.js'){
      const router = require(`./${file}`);
      rootRouter.use(router.routes());
      rootRouter.use(router.allowedMethods());
    }
  });
  ctx.app.use(rootRouter.routes());
  ctx.app.use(rootRouter.allowedMethods());

  await next();
}

module.exports = useRoutes;