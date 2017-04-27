<template>
    <div class="detail">
        <h2>{{ activeTitle }}</h2>
        <Row :gutter="20">
            <Col span="5">发起人: {{ hostPerson }}</Col>
            <Col span="10">发起时间: {{ hostTime }}</Col>
            <Col span="5">浏览数: {{ readNum }}</Col>
        </Row>
          <hr>
        <Row :gutter="20">
          <Col span="24">
            <Tabs @on-click="routerTo" class="tab">
              <Tab-pane label="活动详情"></Tab-pane>
              <Tab-pane label="报名管理"></Tab-pane>
              <Tab-pane label="签到"></Tab-pane>
              <Tab-pane label="数据统计"></Tab-pane>
              <Tab-pane label="评价管理"></Tab-pane>
            </Tabs>
          </Col>
        </Row>
      <transition name="fade">
        <router-view></router-view>
      </transition>


    </div>
</template>

<script>

    export default {
        name:'index',
        data: function () {
            return {
              activeTitle:'活动主题',
              hostPerson:'发起人姓名',
              hostTime:'2016年9月14日',
              readNum:'1999'
            }
        },
        methods: {
          routerTo: function (val) {
            this.$router.push('/activeManage/detail/page'+(val+1));
          },

        },
        watch: function () {

        }
    }

</script>

<style>
  .detail .i-tabs__item{padding:0 40px;}
</style>
