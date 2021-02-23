/*
创建文件夹 mkdir
删除文件夹 rmdir
修改文件夹 rename
读取文件交 reddir
*/

// 引入文件相关的模块
const { log } = require('console')
const fs = require('fs')
/* fs.mkdir('./hehe', (err) => {
  console.log(err);
})
 */

/* let result = fs.mkdirSync('./haha')
console.log(result); */


// 异步删除 文件夹操作
/* fs.rmdir('./hehe', (err) => {
  if (err) console.log('删除失败')
  else { console.log('删除成功') }
}) */

//同步删除文件夹操作
// let result = fs.rmdirSync('./test')
// console.log(result);


//异步修改文件夹操作
/* fs.rename('./xixi', './demo', (err) => {
  console.log(err);
}) */

// 读取文件夹
fs.readdir('./', (err, infos) => {
  // err 读取状态   infos 读取到的内容
  console.log(infos);
})