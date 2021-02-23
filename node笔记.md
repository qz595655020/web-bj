### node 的特点
1· 非阻塞的i（input输入）/o （output输出）模型
通过异步回调将阻塞操作变成非阻塞
一般情况下 i/o操作都是阻塞的 （网络请求（同步/异步）,文件操作,数据库操作）
2·事件驱动

该特点适合用于处理高并发操作


### 环境配置
安装
  1·直接安装
  2·通过nvm安装
 ```
  nvm list 查看暗转过的所有node版本
  nvm install 版本号 下载指定的node版本
  nvm uninstal  版本号  删除指定的版本号
  nvm use  版本号  切换node的版本
 ```
 npm
 ```
  npm init 初始化项目
  npm install 包名   默认是生产依赖
  npm uninstall 包名   删除包

 ```
### 模块化规范
AMD CMD CommonJS(node)

### 模块3步走 （功能代码的抽离）
1·创建一个模  块,并抛出  module.exports = 模块
2·引入模块    require('路径')
3·使用模块

### 模块的分类
1·内置模块  node自带的模块,可以直接使用
2·第三方模块  通过npm下载的模块
3·自定义模块  开发者自己写的模块

#### 文件操作模块 (增删改查) create updata read delect
1·文件夹的操作
2·文件的操作

### 作业