<template>
  <div class="acitvePublic">
    <Steps :current="current" class="step">
        <Step title="活动信息" content=""></Step>
        <Step title="报名签到" content=""></Step>
        <Step title="分享设置" content=""></Step>
        <Step title="个性设置" content=""></Step>
    </Steps>

      <transition name="fade">
        <router-view class="view"></router-view>
      </transition>
      <div class="btn-group">
        <Button @click.native.prevent="handlePreview" v-show="preview">预览</Button>
        <Button @click.native.prevent="handlePreStep" v-show="preStep">上一步</Button>
        <Button @click.native.prevent="handleNextStep" v-show="nextStep" type="primary">下一步</Button>
        <Button @click.native.prevent="handlePublish" v-show="publish" type="primary">发布活动</Button>
      </div>
  </div>
</template>

<script>
    import store from '@/store'
    import $ from 'jquery'

    export default {
      name:'activePublic',
      data(){
        return {
          isRouter: false,
          preview: true,
          preStep: false,
          nextStep: true,
          publish: false,
          current: 0
        }
      },
      methods:{
          handlePreview: function () {
            console.log('预览');
          },
          handlePreStep: function(){
            this.$router.go(-1);
            this.current--;
            this.goStep(this.current);
            $('html,body').animate({scrollTop:0},500);
          },
          handleNextStep:function(){
            this.$router.push('/activePublic/step'+(this.current+2));
            var _this = this;
            setTimeout(function(){
              if (_this.isRouter) {
                _this.current++;
                _this.goStep(_this.current)
              }
            })
            $('html,body').animate({scrollTop:0},500);
          },
          handlePublish: function () {
            console.log('发布');
          },
          goStep:function(n){
             switch (n) {
               case 0:
                 this.preview = true;
                 this.preStep = false;
                 this.nextStep = true;
                 this.publish = false;
                 break;
               case 1:
                 this.preview = false;
                 this.preStep = true;
                 this.nextStep = true;
                 this.publish = false;
                 break;
               case 2:
                 this.preview = false;
                 this.preStep = true;
                 this.nextStep = true;
                 this.publish = false;
                 break;
                case 3:
                  this.preview = false;
                  this.preStep = true;
                  this.nextStep = false;
                  this.publish = true;
                  break;
             }
          }
      },
      watch:{
        '$route':function(to,from){
          this.isRouter = true;
        }
      }
    }
</script>
<style scoped>
  .activePublic .router-link{color:#fff;}
  .acitvePublic .btn-group .ivu-btn{margin-right: 20px;}
</style>
