const app = require('./app');
const {
  SERVER_PORT,
  SERVER_TITLE,
} = require('./app/config');

app.listen(SERVER_PORT, err=>{
  if(err){
    console.log(`${SERVER_TITLE}服务器启动失败！`,err);
    return;
  }
  console.log(`${SERVER_TITLE}服务器在端口${SERVER_PORT}启动成功！`);
});