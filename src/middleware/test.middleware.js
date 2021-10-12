const sayHello = async (ctx, next)=>{
  ctx.hello = 'hello,';
  await next();
};

module.exports = {
  sayHello,
}