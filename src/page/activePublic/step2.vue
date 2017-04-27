<template>
  <div class="step2">

    <Form ref="signForm" :model="signForm" label-position="top" @submit.prevent="onSubmit">

      <Form-item label="报名限制" prop="">
          <Radio-group v-model="signForm.signUpLimit">
              <Radio  label="无限制" ></Radio>
              <Radio  label="必须关注公众号才能报名"></Radio>
              <Radio  label="必须成为会员才能报名"></Radio>
              <Radio  label="必须分享才能报名"></Radio>
          </Radio-group>
        </Form-item>

      <Form-item label="每人可报名额限制" prop="">
        <Row>
          <Col span="6">
            <Radio-group v-model="signForm.numLimit">
              <Radio class="radio" label="无限制"></Radio>
              <Radio class="radio" label="限制"></Radio>
            </Radio-group>
          </Col>
          <Col span="6">
            <Input placeholder="0"
            :number="true"
            v-model="signForm.numLimitDetail"
            :disabled=" signForm.numLimit == '无限制' ">
            <span slot="append">人</span></Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="付费活动" prop="">
        <Row>
          <Col span="6">
            <Radio-group v-model="signForm.cost">
              <Radio class="radio" label="免费" ></Radio>
              <Radio class="radio" label="费用"></Radio>
            </Radio-group>
          </Col>
          <Col span="6">
            <Input placeholder="0"
            :number="true"
            v-model="signForm.costDetail"
            :disabled="signForm.cost == '免费'">
            <span slot="append">元</span>
            </Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="允许取消报名" prop="">
        <Row>
          <Col span="6">
            <Radio-group v-model="signForm.cancel">
              <Radio class="radio" label="不允许" ></Radio>
              <Radio class="radio" label="允许"></Radio>
            </Radio-group>
          </Col>
          <Col span="6">
            <Input placeholder="活动前几小时"
            v-model="signForm.costDetail"
            :disabled="signForm.cancel == '不允许'">
            <span slot="append">小时</span>
            </Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="报名是否需要审核" prop="">
        <Row>
          <Col span="6">
            <Radio-group v-model="signForm.audit">
              <Radio class="radio" label="不需要" ></Radio>
              <Radio class="radio" label="需要"></Radio>
            </Radio-group>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="设置报名表" prop="" class="setSign">

            <Row :gutter="20" v-for="item of signForm.signFormList" :key="item.title">
                <Col span="3">
                  <Checkbox class="checkbox" v-model="item.require">必填</Checkbox>
                </Col>
                <Col span="4" class="title">
                    <Input  v-model="item.title"></Input>
                </Col>
                <Col span="10">
                      <Input   :placeholder="'提示语:请输入您的'+item.title" readonly>
                      </Input>
                </Col>

                <Button
                @click.native.prevent="removeItem(item)"
                title="删除">
                <Icon type="trash-a" size="16"></Icon>
                </Button>

                <Dropdown trigger="click"  style="margin-left: 10px;color: #20a0ff;">
                  <Button>
                    移动<Icon type="arrow-down-b" size="16"></Icon>
                  </Button>
                    <Dropdown-menu slot="list">
                      <Dropdown-item @click.native="moveTop(item)">置顶</Dropdown-item>
                      <Dropdown-item @click.native="moveUp(item)">上移</Dropdown-item>
                      <Dropdown-item @click.native="moveDown(item)">下移</Dropdown-item>
                    </Dropdown-menu>
                </Dropdown>
            </Row>

            <Row>
                <Col span="14" :offset="5">
                    <Button span="24"
                    type="primary"
                    @click.native="addItem">添加更多
                    </Button>
                </Col>
            </Row>
      </Form-item>

      <Form-item label="签到条件" prop="">
        <Row>
          <Col span="24">
            <Radio-group v-model="signForm.sign">
              <Radio class="radio" label="必须报名"></Radio>
              <Radio class="radio" label="不需要报名"></Radio>
            </Radio-group>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="签到方式" prop="">
        <Row>
          <Col span="19" style="width: 633px;">
            <Radio-group v-model="signForm.signType">
              <Radio  label="签到二维码"></Radio>
              <Radio  label="入场二维码"></Radio>
              <Radio  label="会员二位码"></Radio>
              <Radio  label="手机号"></Radio>
              <Radio  label="暗号"></Radio>
            </Radio-group>
          </Col>
          <Col span="5" :pull="2">
              <Input :disabled="signForm.signType != '暗号'"
              v-model="signForm.secretCode"
              placeholder="请填写您的暗号">
            </Input>
          </Col>
        </Row>
      </Form-item>

      <transition name="list">
        <Form-item label="生成签到二维码" v-show="signForm.signType == '签到二维码'">
            <Row>
            <Col span="4" style="width: 130px;">
                <img width="100" height="100" :src="imgUrl">
            </Col>

            <Col span="4">
                <Button @click.native="createQRcode">生成</Button>
            </Col>
            </Row>
        </Form-item>
      </transition>

    </Form>


  </div>
</template>
<script>
  import store from '@/store'

  export default {
    name: 'step2',
    data: function () {
      return {
        imgUrl: '',
        signForm: {
          signUpLimit: '无限制',
          numLimit: '无限制',
          numLimitDetail: '',
          cost: '免费',
          costDetail: '',
          cancel: '不允许',
          audit: '不需要',
          needName: true,
          needTel: true,
          signFormList: [
            {title: '姓名', require: true},
            {title: '手机', require: true}
          ],
          sign: '必须报名',
          signType: '签到二维码',
          secretCode: ''
        }
      }
    },
    watch: {
      signForm: {
        handler: function () {
          store.commit('setSignForm', this.signForm);
        },
        deep: true
      }
    },
    methods: {
      onSubmit: function () {
        console.log('submit!');
      },
      addItem: function () {
        var n = this.signForm.signFormList ? this.signForm.signFormList.length + 1 : 1;
        this.signForm.signFormList.push({
          title: '标题' + n,
          require: false
        });
      },
      removeItem: function (item) {
        var index = this.signForm.signFormList.indexOf(item);
        this.signForm.signFormList.splice(index, 1);
      },

      moveTop: function (item) {
        var index = this.signForm.signFormList.indexOf(item);
        if(index != 0){
          this.signForm.signFormList.splice(index,1);
          this.signForm.signFormList.splice(0,0,item);
        }
      },
      moveUp: function (item) {
        var index = this.signForm.signFormList.indexOf(item);
        if(index != 0){
        this.signForm.signFormList.splice(index,1);
        this.signForm.signFormList.splice(index-1,0,item);
        }
      },
      moveDown: function (item) {
        var index = this.signForm.signFormList.indexOf(item);
        var max = this.signForm.signFormList.length ;
        if(index != max){
          this.signForm.signFormList.splice(index,1);
          this.signForm.signFormList.splice(index+1,0,item);
        }
      },
      createQRcode: function () {
        console.log('生成二维码');
        this.$Notice.info({
          title: '消息',
          desc: '该功能正在完善中'
        });
      }
    },
    created: function () {
      Object.assign(this.signForm, store.state.signForm);
    }
  }
</script>
<style>
  .step2 .ivu-form-item-content .ivu-row{
    margin-bottom: 10px;
  }
  .step2 .title{text-align: right;}
  .step2 .router-link{color:#333;}
  .step2 .router-link{color:#fff;}

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }

</style>
