//在做文件操作时,需要写文件的绝对路径

const fs = require('fs')
const path = require('path')
console.log(__dirname); //当前文件所在文件夹的绝对路径
const result = path.join(__dirname, './a.txt')//将所有的参数拼接成一个路径
console.log(result);

// js代码执行的过程中   ./相对路径  指定是 node 命令执行的路径
fs.readFile(path.join(__dirname, './a.txt'), 'utf8', (err, data) => {
  console.log(data);
})