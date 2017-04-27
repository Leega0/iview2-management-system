<template>
    <div class="page1">
        <p style="color: #999;font-size: 14px;">活动详情的按照内容板块可分别编辑，活动结束后不可编辑。</p>
        <Tabs type="card" @on-click="routerTo">
          <Tab-pane label="活动信息"></Tab-pane>
          <Tab-pane label="报名签到"></Tab-pane>
          <Tab-pane label="分享设置"></Tab-pane>
          <Tab-pane label="个性化设置"></Tab-pane>
        </Tabs>
      <transition name="fade">
        <router-view></router-view>
      </transition>
      <div class="btn-group">
        <Button @click.native.prevent="handleCancel">取消</Button>
        <Button @click.native.prevent="handleSave" type="primary">保存</Button>
      </div>
    </div>
</template>
<script>

  export default {

    data: function () {
      return {

      }
    },
    methods: {
      routerTo: function (val) {
        this.$router.push('/activeManage/detail/page1/step'+(val+1));
      },
      handleCancel: function () {

      },
      handleSave: function () {

      }

    },
    watch: {

    },
    created: function () {

    }
  }

</script>

<style>
  .page1 .btn-group{margin: 10px 0;}
   .btn-group button{margin-right: 10px;padding: 10px 25px;}
</style>
