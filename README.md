# iview2-manage-system

基于Vue2 + iView2.0的后台管理系统解决方案简单示例.

线上访问(不支持手机)：[电脑访问](http://139.199.33.111/dist)

--------------
### 目前实现的功能及用到的组件
- [x] 页面： [iView2.0](https://github.com/iview/iview)
- [x] 图表： [百度Echarts](http://echarts.baidu.com)&[Vue-Echarts](https://github.com/xlsdg/vue-echarts-v3)
- [x] 文件上传： [使用iView自带的文件上传组件](https://www.iviewui.com/components/upload)

--------------

### 使用
```
npm i               // 安装依赖
npm run dev         // 本地开发
npm run build       // 生产部署
```
--------------

### 目录结构
	|-- build                                  // webpack配置文件
	|-- config                                 // 项目打包路径
	|-- dist                                   // 静态文件目录
	|-- src      							   // 源码目录
	|	|-- assets							   // 资源文件夹
	|		|-- js							   // 模拟数据文件
	|           |-- addressData.js             // 地址数据
	|           |-- testData.js 			   // 测试数据
	|   |-- components                         // 组件
	|       |-- address.vue                    // 地址选择组件
    |   |-- page  							   // 页面
    |		|-- activeManage 				   // 活动管理目录
    |  			|-- detail.vue 				   // 详情页
    |  			|-- index.vue 				   // 活动管理页
    |  			|-- page1.vue 				   // page1
    |  			|-- page2.vue 				   // page2
    |  			|-- page3.vue 				   // page3
    |  			|-- page4.vue 				   // page4
    |  			|-- page5.vue 				   // page5
    |  			|-- totalpages.vue 			   // 路由显示
    |		|-- acitvePublic 				   // 活动发布目录
    |			|-- index.vue  				   // 活动发布页
    |			|-- step1.vue  				   // step1
    |			|-- step2.vue  				   // step2
    |			|-- step3.vue  				   // step3
    |			|-- step4.vue  				   // step4
    |		|-- 404.vue   					   // 404页面
	|		|-- index.vue  					   // 公用页
	|		|-- login.vue 					   // 登录页
    |	|-- router   						   // 路由目录
    |		|--index.js						   // 路由配置文件
    |	|-- store  							   // vuex目录
    |		|--index.js						   // vuex store文件
	|   |-- App.vue                            // 页面入口
	|   |-- main.js                            // 程序入口
	|-- .babelrc                               // ES6语法编译配置
	|-- .editorconfig                          // 代码编写规格
	|-- .gitignore                             // push忽略文件
	|-- index.html                             // 入口html页面
	|-- package.json                           // 依赖及配置
	|-- README.md                              // 简介
	

----------------

### 存在的问题及维护说明
1.表单验证时间组件部分会出现验证错误，后面会解决此问题

2.路由后退前进操作对应菜单显示不一致的情况，下次更新将会修复

3.本项目只是简单示例，实际应用还需自行添加需要实现的功能

4.部分内容参考了 [Vue2 后台管理系统解决方案](https://github.com/vanishcode/iview2-management-system)

---------------

### 其他
有任何问题或建议欢迎提出issue.

---------------

### License
[MIT](https://opensource.org/licenses/MIT)