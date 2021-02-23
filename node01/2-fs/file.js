/*
  创建一个文件  writeFile 覆盖写入文件
  修改一个文件  appendFile  添加文件
  删除一个文件  unlink   删除文件
  读取一个文件 readFile   读取文件
*/

const fs = require('fs');

// 创建并且写入文件
/* fs.writeFile('./hehe.text', '你好呀', (err) => {
  console.log(err);
}) */

// 修改文件  添加内容
/* fs.appendFile('./hehe.text', '韩梅梅', (err) => {
  console.log(err);
}) */


// 删除文件
/* fs.unlink('./hehe.text', (err) => { console.log(err); })  */

/* 读取文件 */
// fs.readFile('./a.txt', 'utf8', (err, data) => {
//   console.log(err);
//   // buffer <Buffer 68 65 6c 6c 6f 77 72 6f 64> 二进制的数据流
//   // console.log(data.toString());
//   console.log(data);
// })


/* 判断文件的类型 */
fs.stat('./a.txt', (err, data) => {
  console.log(data.isFile());  //判断是不是 文件
  console.log(data.isDirectory()); // 判断是不是文件夹
})