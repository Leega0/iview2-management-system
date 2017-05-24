<template>
	 <!-- 头部导航 -->
   <div>
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
    </div>
</template>
<script>
	export default {
			data(){
			    return {
			      headerFixed : true,
			  	}
			}
	}
</script>
<style>
	/* 头部导航 */
header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
header .menu-demo{padding-left: 300px;}
</style>