<template>
  <div id="app">
    <!-- 头部导航 -->
    <header class="header" :class="{ 'header-fixed' : headerFixed }">
        <Row>
          <Col span="24">
            <Menu mode="horizontal" theme="light" active-name="1" class="menu-demo">
              <Menu-item name="1">高级插件</Menu-item>
              <Menu-item name="2">在线商城</Menu-item>
              <Menu-item name="3">客户管理</Menu-item>
              <Menu-item name="4">系统设置</Menu-item>
              <Menu-item name="5">活动发布</Menu-item>
            </Menu>
          </Col>
        </Row>
    </header>
    <div v-show="headerFixed" style="position: relative;height: 60px;width: 100%;"></div>
    <Row type="flex" class="main">
      <!-- 左侧导航 -->
      <div class="main-left">
          <Menu theme="light" :active-name="setActive" @on-select="routeTo">
            <Menu-item name="activePublic">活动发布 </Menu-item>
            <Menu-item name="activeManage">活动管理</Menu-item>
          </Menu>
      </div>
      <div class="main-right">
        <transition name="fade">
            <router-view class="view"></router-view>
        </transition>
      </div>
    </Row>
  </div>
</template>

<script>

export default {
  data(){
    return {
      headerFixed : true,
      page:['activePublic','activeManage']
    }
  },
  computed:{
    setActive:function(){
      // 拿到对应的路由
      if (this.$route.path.split("/").length>2) {
        return this.$route.path.replace('/','').split("/")[0];
      }else{
        return this.$route.path.replace('/','');
      }
    }
  },
  methods:{
    routeTo:function(e){
        this.$router.push('/'+e);
      } 
  }
}
</script>

<style>
body{margin: 0;}
#app {
  min-width: 1200px;
  margin: 0 auto;
  font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
}
/* 头部导航 */
header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
header .menu-demo{padding-left: 300px;}
/*主内容区*/
.main{ min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
.main .main-left{text-align: center;-webkit-box-flex: 0;-ms-flex: 0 0 200px;flex: 0 0 200px;}
.main .main-right{-webkit-box-flex:1;-ms-flex:1;flex:1; background-color: #fff; padding: 50px 70px; }
/*  */
.router-link{display:inline-block;width:100%;height:100%;text-align:center;color:#475669;text-decoration: none; }
.is-active .router-link{color:#20a0ff; }

/* 路由切换动效 */
  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }
/* 导航栏菜单选中效果 */
  .isActive{color: #20a0ff!important;}
   #app main .aside .is-active{color: #475669;}

</style>
