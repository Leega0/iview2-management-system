<template>
	<Row type="flex" class="main">
      <!-- 左侧导航 -->
      <div class="main-left">
          <Menu theme="light" :activeName="activePage" @on-select="routeTo">
            <Menu-item name="1">活动发布 </Menu-item>
            <Menu-item name="2">活动管理</Menu-item>
          </Menu>
      </div>
      <div class="main-right">
        <transition name="fade">
            <router-view class="view"></router-view>
        </transition>
      </div>
    </Row>
</template>
<script>
	export default {
		data(){
			return {
				  activePage:'1',
			      page:[{
			        index:1,
			        name:'activePublic'
			      },{
			        index:2,
			        name:'activeManage'
			      }]
			}
		},
		created:function(){
		    this.$router.push('/activePublic');
		},
		methods:{
		    routeTo:function(e){
		      this.$router.push('/'+this.$data.page[e - 1].name);
		    }
		}
	}
</script>