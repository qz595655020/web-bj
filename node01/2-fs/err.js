//错误捕获  同步捕获 try catch
const fs = require('fs')
/*console.log(1);

try {
  //需要捕获错误的代码
  fs.mkdirSync('./xixi')
} catch (error) {
  //需要捕获的代码出错就会执行catch 方法 也不会阻塞下面的代码
  console.log(error);
}
console.log(2); */
// 抛出错误 会终止一下的执行


//异步捕获 错误的回调优先 在回调函数中 第一个参数一定是表示错误信息
//错误状态 null 表示执行ok 若包含错误信息表示执行失败
fs.mkdir('./test', error => console.log(error))