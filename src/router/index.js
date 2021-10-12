const {readdirSync} = require('fs');

const useRoutes = async (ctx, next)=>{
  readdirSync(__dirname).forEach(file => {
    if(file !== 'index.js'){
      const router = require(`./${file}`);
      ctx.app.use(router.routes());
      ctx.app.use(router.allowedMethods());
    }
  });

  await next();
}

module.exports = useRoutes;