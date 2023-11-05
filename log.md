###11.13

1. 设置 static 变量
2. 注册用户 添加数据库和拓展信息
   ![img.png](img.png)
   *采用一对一的关系模型*

       采用python默认数据库sqlite3 并且此时主键为id
   ![img_1.png](img_1.png)
   创建超级用户
   ![img_2.png](img_2.png)







bug：
### 1.  problem1
![img_4.png](img_4.png)
![img_3.png](img_3.png)

solution:
在视图view函数之前添加"@csrf_exempt"即可解决问题，
