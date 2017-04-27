<template>
  <div class="step4">
    <Form label-position="top" :model="selfForm" class="demo-form-stacked">
      <Form-item label="消息推送">
          <Row>
              <Col span="4">
                  <Checkbox class="checkbox" v-model="selfForm.signUpSuccess" checked>报名成功</Checkbox>
              </Col>
              <Col span="18">
                  <Input
                    type="textarea"
                    placeholder="请输入内容"
                    :autosize="{minRows: 2, maxRows: 5}"
                    v-model="selfForm.signUpSuccessText">
                  </Input>
              </Col>
          </Row>
      </Form-item>

      <Form-item label="">
        <Row>
          <Col span="4">
            <Checkbox class="checkbox" v-model="selfForm.auditSuccess" checked>审核通过</Checkbox>
          </Col>
          <Col span="18">
            <Input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 2, maxRows: 5}"
              v-model="selfForm.auditSuccessText">
            </Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="">
        <Row>
          <Col span="4">
            <Checkbox class="checkbox" v-model="selfForm.auditFailed" checked>审核不通过</Checkbox>
          </Col>
          <Col span="18">
            <Input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 2, maxRows: 5}"
              v-model="selfForm.auditFailedText">
            </Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="">
        <Row>
          <Col span="4">
            <Checkbox class="checkbox" v-model="selfForm.signInSuccess" checked>签到成功</Checkbox>
          </Col>
          <Col span="18">
            <Input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 2, maxRows: 5}"
              v-model="selfForm.signInSuccessText">
            </Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="">
        <Row>
          <Col span="4">
            <Checkbox class="checkbox" v-model="selfForm.signInFailed" checked>签到失败</Checkbox>
          </Col>
          <Col span="18">
            <Input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 2, maxRows: 5}"
              v-model="selfForm.signInFailedText">
            </Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="">
        <Row>
          <Col span="4">
            <Checkbox class="checkbox" v-model="selfForm.signInDouble" checked>重复签到</Checkbox>
          </Col>
          <Col span="18">
            <Input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 2, maxRows: 5}"
              v-model="selfForm.signInDoubleText">
            </Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="微信提醒">
          <Row :gutter="20">
              <Col span="7">
                <Radio-group v-model="selfForm.remind">
                  <Radio class="radio" label="不提醒"></Radio>
                  <Radio class="radio" label="提醒"></Radio>
                </Radio-group>
              </Col>
              <Col span="4">
                  <Select  :disabled="selfForm.remind != '提醒'" v-model="selfForm.remindTime" placeholder="提前几小时">
                      <Option
                        v-for="n of 24"
                        :value="n" :key="n"></Option>
                  </Select>
              </Col>
              <Col span="10">
                  <Input placeholder="请填写您的微信提醒" :disabled="selfForm.remind != '提醒'" v-model="selfForm.remindText"></Input>
              </Col>
          </Row>
      </Form-item>

      <Form-item label="">
        <Row>
          <div class="Form-item__label"> 活动报名使用积分</div>
          <Col  class="Form-item__label is-active" span="4">
            <Button type="text" @click.native="showMeg(1)">了解积分规则</Button>
          </Col>
        </Row>
        <Row :gutter="20">
          <Col span="7">
            <Radio-group v-model="selfForm.useScore">
              <Radio class="radio" label="不使用" ></Radio>
              <Radio class="radio" label="使用"></Radio>
            </Radio-group>
          </Col>

          <Col span="7">
            <Input placeholder="0" :disabled="selfForm.useScore != '使用'" size="large" :number="true" v-model="selfForm.useScoreNum"><template slot="append">积分</template></Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="活动报名获得积分">
        <Row :gutter="20">
          <Col span="7">
            <Radio-group v-model="selfForm.signUpScore">
              <Radio class="radio" label="无积分" ></Radio>
              <Radio class="radio" label="获得积分"></Radio>
            </Radio-group>
          </Col>

          <Col span="7">
            <Input placeholder="0"  :disabled="selfForm.signUpScore != '获得积分'" size="large" :number="true" v-model="selfForm.signUpScoreNum"><template slot="append">积分</template></Input>
          </Col>
        </Row>
      </Form-item>
      <Form-item label="分享活动获得积分">
        <Row :gutter="20">
          <Col span="7">
            <Radio-group v-model="selfForm.shareScore">
              <Radio class="radio" label="无积分" ></Radio>
              <Radio class="radio" label="获得积分"></Radio>
            </Radio-group>
          </Col>

          <Col span="7">
            <Input placeholder="0" :disabled="selfForm.shareScore != '获得积分'"  size="large" :number="true" v-model="selfForm.shareScoreNum"><template slot="append">积分</template></Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="分享后每个阅读量获得积分">
        <Row :gutter="20">
          <Col span="7">
            <Radio-group v-model="selfForm.shareReadScore">
              <Radio class="radio" label="无积分" ></Radio>
              <Radio class="radio" label="获得积分"></Radio>
            </Radio-group>
          </Col>

          <Col span="7">
            <Input placeholder="0" :disabled="selfForm.shareReadScore != '获得积分'" size="large" :number="true" v-model="selfForm.shareReadScoreNum"><template slot="append">积分</template></Input>
          </Col>
          <Col span="2" style="line-height: 42px;text-align: right;">
              上限
          </Col>
          <Col span="7">
            <Input placeholder="0"  :disabled="selfForm.shareReadScore != '获得积分'"  size="large" :number="true" v-model="selfForm.shareReadScoreNumMax"><template slot="append">积分</template></Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="分享后好友报名获得积分">
        <Row :gutter="20">
          <Col span="7">
            <Radio-group v-model="selfForm.shareSignUp">
              <Radio class="radio" label="无积分" checked></Radio>
              <Radio class="radio" label="获得积分"></Radio>
            </Radio-group>
          </Col>

          <Col span="7">
            <Input placeholder="0" size="large" :disabled ="selfForm.shareSignUp != '获得积分'" :number="true" v-model="selfForm.shareSignUpNum"><template slot="append">积分</template></Input>
          </Col>
          <Col span="2" style="line-height: 42px;text-align: right;">
            上限
          </Col>
          <Col span="7">
            <Input placeholder="0" size="large" :disabled ="selfForm.shareSignUp != '获得积分'"  :number="true" v-model="selfForm.shareSignUpNumMax"><template slot="append">积分</template></Input>
          </Col>
        </Row>
      </Form-item>

      <Form-item label="用户分享后，页面跳转至">
            <Radio-group v-model="selfForm.afterShare">
              <Radio label="不跳转"></Radio>
              <Radio label="图文库"></Radio>
              <Radio label="活动库"></Radio>
              <Radio label="问卷库"></Radio>
              <Radio label="试卷库"></Radio>
              <Radio label="大转盘"></Radio>
              <Radio label="砸金蛋"></Radio>
              <Radio label="自定义链接"></Radio>
            </Radio-group>

            <Input
              v-show="selfForm.afterShare == '自定义链接'"
              placeholder="请输入自定义链接"
              v-model="selfForm.afterShareLink">
            </Input>
      </Form-item>

      <Form-item label="用户报名后，页面跳转至">

        <Radio-group v-model="selfForm.afterSingUp">
          <Radio  label="不跳转"></Radio>
          <Radio  label="图文库"></Radio>
          <Radio  label="活动库"></Radio>
          <Radio  label="问卷库"></Radio>
          <Radio  label="试卷库"></Radio>
          <Radio  label="大转盘"></Radio>
          <Radio  label="砸金蛋"></Radio>
          <Radio  label="自定义链接"></Radio>
        </Radio-group>

        <Input
          v-show="selfForm.afterSingUp == '自定义链接'"
          placeholder="请输入自定义链接"
          v-model="selfForm.afterSingUpLink">
        </Input>

      </Form-item>

      <Form-item label="">
        <Row>
          <Col span="4">
            配置截屏分享图片
          </Col>
          <Col span="4">
              <Button type="text" @click.native="showMeg(2)">了解截屏分享图片<Icon type="help-circled"></Icon></Button>
          </Col>
        </Row>
        <Radio-group v-model="selfForm.shareImg">
          <Radio  label="不配置"></Radio>
          <Radio  label="配置"></Radio>
        </Radio-group>
      </Form-item>
    </Form>

    <Modal title="提示" v-model="dialogVisible" size="tiny">
        <div v-html="DialogInnerHtml"></div>
        <span slot="footer" class="dialog-footer">
          <Button @click.native="dialogVisible = false">取 消</Button>
          <Button type="primary" @click.native="dialogVisible = false">确 定</Button>
        </span>
    </Modal>

  </div>
</template>



<script>
    import store from '@/store'

    const template1 = `<span style="font-size: 16px;line-height: 1.6em;">
          积分使用
          <br/>(1) 用户可以使用积分进行指定活动的报名优惠抵扣。
          <br/>(2) 单个积分可抵扣的相应的优惠值由活动方自己定义。例如：1个积分抵扣2元报名费。 <br/>
          <br/>积分获取:
          <br/>(1) 活动参与者通过分享活动，报名活动，或由分享后带来的好友阅读量，好友报名数等途径获得积分。
          <br/>(2) 一次活动获得的积分只对本次活动可用。</span>` ;
    const template2 =`<span>该功能正在完善中~</span>`;

    export default {
      name:'step4',
       data: function () {
         return {
           dialogVisible:false,
           DialogInnerHtml:template1,
           selfForm:{
             signUpSuccess:true,       // 报名成功
             signUpSuccessText:'您已成功报名***(默认活动标题名)活动',
             auditSuccess:true,
             auditSuccessText:'您报名的***(默认活动标题名)活动，已审核通过',
             auditFailed:true,
             auditFailedText:'您报名的***(默认活动标题名)活动，审核不通过',
             signInSuccess:true,
             signInSuccessText:'***(默认用户名)您好！恭喜您签到成功！',
             signInFailed:true,
             signInFailedText:'抱歉，签到失败',
             signInDouble:true,
             signInDoubleText:'请勿重复签到！',
             remind:'',
             remindTime:'',
             remindText:'',
             useScore:'',
             useScoreNum:'',
             signUpScore:'',
             signUpScoreNum:'',
             shareScore:'',
             shareScoreNum:'',
             shareReadScore:'',
             shareReadScoreNum:'',
             shareReadScoreNumMax:'',
             shareSignUp:'',
             shareSignUpNum:'',
             shareSignUpNumMax:'',
             afterShare:'',
             afterShareLink:'',
             afterSingUp:'',
             afterSingUpLink:'',
             shareImg:'',
             shareImgUrl:''
           }
         }
       },
        watch: {
            selfForm: {
                handler: function () {
                    store.commit('setSelfForm', this.selfForm);
                } ,
                deep:true
            }
        },
        methods: {
            showMeg: function (n) {
                this.dialogVisible = true;

                this.DialogInnerHtml = n == 1 ? template1 : template2;
            }
        },
        created: function () {
            Object.assign(this.selfForm, store.state.selfForm);
        }
    }
</script>
<style>
  .step4 .router-link{color:#333;}
  .step4 .ivu-btn-primary .router-link{color:#fff;}
  .step4 .is-active{color: #20a0ff;cursor: pointer;}

</style>
