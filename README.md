# 社区论坛

基于SpringCloud和Uniapp开发的一款社区论坛app

|              |                            |
| ------------ | -------------------------- |
| Spring Boot  | 基础应用                   |
| Spring Cloud | 微服务化                   |
| Mybatis-Plus | DAO                        |
| Netty        | 聊天功能                   |
| Redis        | 负责点赞、收藏、邮箱验证码 |
| RabbitMQ     | 负责邮箱验证码、日志       |
| 七牛云       | OSS 图床                   |

- #### 项目结构：

   前后端分离

  ##### 后端

  - ***service-commons：*** 公共模块

  - ***service-eureka：*** 服务注册中心模块

  - ***service-zuul：*** 网关路由模块

  - ***service-provider-invitation：*** 帖子、评论、话题模块

  - ***service-provider-user：*** 用户模块

  - ***service-provider-chat：*** 聊天模块

  - ***service-other：*** redis/rabbitmq/七牛云/邮件 SMTP
  
  ##### 前端
  
  - ***后台管理：*** vue模板
  - 主程序：uniapp
  
  


![image-20220702164516076](https://fastly.jsdelivr.net/gh/Hexyan/blobimge/img/202207021645118.png)

- #### 截图

![image-20220702021235787](https://fastly.jsdelivr.net/gh/Hexyan/blobimge//img/image-20220702021235787.png)

![image-20220702021341952](https://fastly.jsdelivr.net/gh/Hexyan/blobimge//img/image-20220702021341952.png)



![image-20220702021255268](https://fastly.jsdelivr.net/gh/Hexyan/blobimge/img/image-20220702021255268.png)



![image-20220702021358588](https://fastly.jsdelivr.net/gh/Hexyan/blobimge/img/image-20220702021358588.png)



![image-20220702163657935](https://fastly.jsdelivr.net/gh/Hexyan/blobimge/img/202207021636970.png)

