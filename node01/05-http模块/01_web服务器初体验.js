const http = require('http')

/* 创建一个web服务器 */
const server = http.createServer((request, response) => {
  response.end('hello worldxxxlook')
})

server.listen(8888, '0.0.0.0', () => {
  console.log('服务器启动成功');
})  