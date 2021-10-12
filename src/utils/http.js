const agent = require('superagent');

/* POST请求 */
const httpPost = (url, options, headers = {}) => {
  return agent
    .post(url)
    .send(options)
    .set(headers)
}
/* GET请求 */
const httpGet = (url, options, headers = {}) => {
  return agent
    .get(url)
    .query(options)
    .set(headers)
}


module.exports = {
  httpGet,
  httpPost,
};