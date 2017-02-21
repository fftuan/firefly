
播放器的制作，各位可以直接开个新的分支然后开始修改优化的我代码


> 弹幕播放器v0.0.1

优化点

1.弹幕池遍历上(学习二分法)

2.弹幕滚动的轨迹方式

3.判断浏览器对H5视频的播放器的支持

4.发送弹幕的时候将弹幕加入弹幕池

5.弹幕到达屏幕左边时淡出

6.弹幕运动速度

7.弹幕重叠问题

8.加入与服务器连接

9.优化遍历算法(二分法)

10.加入更多弹幕配置

11.加入更多输入时弹幕设置

12.播放器全屏

13.播放器音量问题

14.播放器输入弹幕问题(ok)

15.视频加载使用异步请求

16.播放结束时重置弹幕setTime(ok)

17.测试50个dom容器搭载弹幕，弹幕播放完成回收dom(待测试)

18.加入导航栏

19.缓存提示

20.进度条控制

 －－－－－

 to run this, first:

 clone this repo to your local machine. you might need this guide: http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000   proposed by 葫芦

 second:

 install npm, and use npm run this project. you might need this guide:

 http://www.cnblogs.com/PeunZhang/p/5553574.html  proposed by 火乌日暗崩腾云

 simple guide:

 1. npm install
 2.npm start  
 3.visit 127.0.0.1:8080 through web browser

-------

 to edit this, just use your favourite text editor and do whatever you want in your local code base.


 to make a commit, make sure your changeset is a runnable one; if your changeset is runnable and furfill the goal we both agreed, i will merge that into master branch.


 > by FrosV

 # 初衷

 **就是为了让各位初学者接触到一个真实的项目，然后我们会进行一个完整的公司流程来制作这个网站，让大家都能接触到真实的公司计划，还有在面试的时候可以把这个网站贴到你的简历上，一个很好的给大家练手的计划，希望大家都能参与然后多提出问题多进行优化**

 # 关于如何让我们的网站跑起来

 在命令行(cmd)里找到你clone下来的文件夹然后输入 npm i 等待安装完成后输入 npm start就可以在浏览器输入localhost:8080正式浏览

 # webpack

 [webpack各种中文资料](http://www.cnblogs.com/vajoy/p/4650467.html)

 关于webpack是现在很流行的一个管理工具，这里可以帮你把很多
