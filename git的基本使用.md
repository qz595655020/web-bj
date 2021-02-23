### git相关的名词解析
git/svn 主流的 团队代码管理工具   
git是分布式的   分布式：每个人操作的是自己单独那份代码
git 里包含本地仓库 和 远程仓库
svn是集中式的  集中式：每个人操作的是同一份代码
github/gitee   一大波远程仓库的集合体
git远程仓库  团队使用在服务器的仓库
git本地仓库 本地创建随便使用
GUI 可视化工具 gitd 
.git 隐藏文件 表示git仓库
工作区  可以看到的写代码的地方叫工作区
暂存区  在git仓库我们是看不到的用来暂时保存代码的提交和修改
分支  将用户的提交 和修改 按照 时间形成一条链叫做分支
版本合并
版本冲突
版本提交


### 基本指令
```
git init  //初始化本地仓库  将一个文件夹变成被git 管理的 本地仓库

git add  //<file,dir> 将工作区的修改提交到暂存区
 
git status //查看当前仓库分支的状态 

git commit -m  '注释'   //将暂存区的修改提交到分支

git reflog  // 打印所有操作记录

git log  //打印提交记录

git log--pretty=oneline   //在一行打印提交记录

git branch //查看所有的本地分支

git branch -a //查看本地和远程所有的分支

git checkout -b 分支名  //创建并且切换一个分支

git checkout 分支名 //切换一个分支
  
git merge 分支名  // 在当前分支合并其他分支

git reset --hard 提交id  //实现版本回退 只能是被git管理的

git diff //查看暂存区和工作区的区别


远程仓库相关的命令
git clone url  // 将远程的仓库克隆到本地
git push origin  远程仓库名 master 分支名
git pull origin 分支名 (fech + commit) 
git fetch     //拉取代码 
git remote add origin url //将本地的仓库与远程仓库做关联

git branch -d 表示删除分支
```


#### 冲突
需要的留着 不需要的删除

### git仓库    本地仓库 和远程仓库
本地仓库和远程仓库都是仓库 该有的都有
本地仓库 ：本地分支 本地工作区 本地暂存区
远程仓库 ：远程分支  远程工作区 远程暂存区

1、远程仓库的创建 gitee  GitHub 自己搭建远程仓库
    a·已经存在一个远程仓库 通过 readme文件自动创建
      git clone + 地址 将远程仓库克隆到本地
    b·没有远程仓库
      1·在本地通过 git init 创建本地仓库
      2· git remote add origin + 地址   和远程仓库关联

### git 分支


### gitflow git工作流
git 的使用流程 更多是对分支的使用

master 主分支  线上分支 和正在线上运行的代码是一致的
realease 分支  预发布分支  发布前的测试u
dev 分支       开发分支   
future 分支    个人分支 功能分支
bug 分支       线上代码出现bug的时候解决bug


### 角色
主程
1·和远程仓库做关联
2·搭建项目框架
3·上传到远程的dev分支
4·开发结束之后 将dev分支的代码 合并到master （预上线分支）
普通开发者
1·clone代码
2·从 dev分支切换出个人分支
3·在个人分支进行修改
4·将个人分支合并到dev分支
5·push dev分支  push之前一定要先更新代码
6·将个人分支删除或者重新创建 