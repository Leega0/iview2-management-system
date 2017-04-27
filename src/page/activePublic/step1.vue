<template>
  <div class="step1">
    <!-- 表单组件 -->
    <Form :model="ruleForm" ref="ruleForm" class="demo-ruleForm" :rules="rules" label-position="top">
        <!-- 表单项，prop属性表示要进行表单验证，验证规则对应为rules的属性name -->
        <Form-item label="活动名称" prop="name">
          <Input v-model="ruleForm.name" size="large"></Input>
        </Form-item>
        <Form-item label="" prop="fenLei">
          <!-- 改装后的表单项，在标签栏添加了一个按钮 -->
          <Row style="height: 35px;" type="flex" align="middle">
            <i-col span="3">
              <div class="iview-form-item__label" style="padding-bottom: 0;"> 活动分类</div>
            </i-col>
            <i-col span="2">
              <Button type="text" @click.native="dialogFormFenLeiVisible = true" style="margin: 0;padding: 0;">
                  设置
              </Button>
            </i-col>
          </Row>
          <Radio-group v-model="ruleForm.fenLei">
            <Radio v-for="item in ruleForm.fenLeis" :label="item.name" :key="item.name">
            </Radio>
          </Radio-group>
        </Form-item>
        <Form-item label="活动标签" required>
          <Tag v-for="tag of ruleForm.tags"
              type="dot"
              :key="tag.name"
              :closable="true"
              @on-close="handleClose(tag)"
              >
              {{tag.name}}
          </Tag>
          <Button icon="plus" @click.native="showDialog" style="vertical-align: middle;margin: 10px;">
          </Button>
          <transition name="fade">
            <div class="iview-form-item__error" v-show="tagsValid">{{ tagsError }}</div>
          </transition>
        </Form-item>
        <Form-item label="活动时间" required style="width: 750px;">
              <Row>
              <i-col span="5">
              <Form-item prop="activeStartTimeDate">
                <Date-picker
                 v-model="ruleForm.activeStartTimeDate"
                 type="date"
                 placeholder="活动开始日期">
                </Date-picker>
              </Form-item>

              </i-col>
              <i-col span="5">
              <Form-item prop="activeStartTimeTime">
                <Time-picker placeholder="请选择时间点"
                v-model="ruleForm.activeStartTimeTime" format="HH:mm">
                </Time-picker>
              </Form-item>
              </i-col>
              <i-col span="1">—</i-col>
              <i-col span="5">
                <Form-item prop="activeEndTimeDate">
                  <Date-picker
                  v-model="ruleForm.activeEndTimeDate"
                  type="date"
                  placeholder="活动结束日期">
                </Date-picker>
              </Form-item>
              </i-col>
              <i-col span="5">
              <Form-item prop="activeEndTimeTime">
                <Time-picker
                placeholder="请选择时间点"
                v-model="ruleForm.activeEndTimeTime"
                format="HH:mm">
                </Time-picker>
              </Form-item>
              </i-col>
            </Row>
        </Form-item>
        <Form-item label="报名时间" required style="width: 750px;">
            <Row>
              <i-col span="5">
              <Form-item prop="signStartTimeDate">
                <Date-picker
                  v-model="ruleForm.signStartTimeDate"
                  type="date"
                  placeholder="报名开始日期">
                </Date-picker>
              </Form-item>
              </i-col>
              <i-col span="5">
            <Form-item prop="signStartTimeTime">
              <Time-picker
                placeholder="请选择时间点"
                v-model="ruleForm.signStartTimeTime"
                format="HH:mm"
                >
              </Time-picker>
            </Form-item>
            </i-col>
            <i-col span="1">—</i-col>
            <i-col span="5">
            <Form-item prop="signEndTimeDate">
              <Date-picker
                v-model="ruleForm.signEndTimeDate"
                type="date"
                placeholder="报名结束日期">
              </Date-picker>
            </Form-item>
            </i-col>
            <i-col span="5">
            <Form-item prop="signEndTimeTime">
              <Time-picker
                placeholder="请选择时间点"
                v-model="ruleForm.signEndTimeTime"
                format="HH:mm"
                >
              </Time-picker>
            </Form-item>
            </i-col>
            </Row>
        </Form-item>
        <Form-item label="活动地点" required>
          <!-- 自己封装的一个二级联动地址选择器 -->
	        <address-select
              :province="ruleForm.province"
              :city="ruleForm.city"
              :detail="ruleForm.detail"
              :isAddressTrue="isAddressTrue"
              ></address-select>
        </Form-item>

        <Form-item label="活动人数">
          <Row>
              <Radio-group v-model="ruleForm.activePerson">
              <Radio class="radio" label="无限制">
              </Radio>
              <Radio class="radio" label="限制">
              </Radio>
              </Radio-group>
              <Input placeholder="0" :number="true" size="large"
              v-model="ruleForm.activePersonNum"
               :disabled=" ruleForm.activePerson == '无限制' ">
               <span slot="append">人</span></Input>
          </Row>
        </Form-item>
        <Form-item label="活动封面">
          <Upload action="http://jsonplaceholder.typicode.com/"
          type="drag"
          :multiple="true"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :on-error="handleError">
            <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>点击或将文件拖拽到这里上传</p>
            </div>
          </Upload>
        </Form-item>

        <Form-item label="活动简介">
            <Input
              type="textarea"
              placeholder="请输入内容"
              :autosize="{minRows: 4, maxRows: 8}"
              v-model="ruleForm.activeDescribe">
            </Input>
        </Form-item>

        <Form-item label="报名用户信息展示">
          <Radio-group v-model="ruleForm.UseMsgShow">
            <Radio label="不展示"></Radio>
            <Radio label="展示报名人数"></Radio>
            <Radio label="展示报名清单"></Radio>
            <Radio label="报名成功显示完整用户资料"></Radio>
          </Radio-group>
        </Form-item>

        <Form-item label="评价功能">
          <Radio-group v-model="ruleForm.evaluate">
            <Radio  label="不开启"></Radio>
            <Radio  label="实时评价"></Radio>
            <Radio  label="审核后评论"></Radio>
          </Radio-group>
        </Form-item>

        <Form-item label="">
          <Row>
              赞助广告
              <Button type="text" @click.native="openAd">开通赞助广告<Icon type="help-circled"></Icon></Button>
          </Row>
          <Upload action="http://jsonplaceholder.typicode.com/"
          type="drag" :multiple="true"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleSuccess"
          :on-error="handleError">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>点击或将文件拖拽到这里上传</p>
            </div>
          </Upload>
        </Form-item>

        <Form-item>
          <Input
            placeholder="请填写您的广告标题"
            size="large"
            v-model="ruleForm.adTitle">
          </Input>
        </Form-item>

        <Form-item>
          <Input
            placeholder="请填写您的广告内容"
            size="large"
            v-model="ruleForm.adContent">
          </Input>
        </Form-item>

        <Form-item >
          <Input
            placeholder="请填写您的赞助链接"
            size="large"
            v-model="ruleForm.adLink">
          </Input>
        </Form-item>
    </Form>
    <Modal title="添加活动标签"  v-model="dialogFormVisible" top="35%">
      <Form :model="dialogForm">
        <Form-item>
          <Input v-model="dialogForm.name" auto-complete="off" ></Input>
        </Form-item>
      </Form>
              <span slot="footer" class="dialog-footer">
                  <Button @click.native="dialogFormVisible = false">取 消</Button>
                  <Button type="primary"  @click.native="handleAdd(dialogForm.name,dialogForm,ruleForm.tags)">添加</Button>
              </span>
    </Modal>
    <Modal title="设置活动分类" v-model="dialogFormFenLeiVisible" >
      <Form :model="ruleForm">
        <Form-item>
          <Tag
            v-for="item in ruleForm.fenLeis"
            :key="item.name"
            :closable="true"
            @on-close="handleCloseFenLei(item)"
            >
            {{ item.name }}
          </Tag>
        </Form-item>
        <Form-item>
          <Input v-model="dialogFormFenLei.name" auto-complete="off" ></Input>
        </Form-item>
      </Form>
      <span slot="footer" class="dialog-footer">
        <Button @click.native="dialogFormFenLeiVisible = false">取 消</Button>
        <Button type="primary"  @click.native="handleAdd(dialogFormFenLei.name,dialogFormFenLei,ruleForm.fenLeis)">添加</Button>
      </span>
    </Modal>
  </div>
</template>

<script>
  import addressSelect from '@/components/address.vue'
  import store from '@/store'

  export default {
    name:'step1',
    components: {
      'address-select' : addressSelect
    },
    data(){
      return {
        test:'',
        tagsValid:false,
        tagsError:'请设置标签',
        isAddressTrue:false,
        dialogFormVisible: false,
        dialogFormFenLeiVisible:false,
        dialogForm:{name:''},
        dialogFormFenLei:[{name:''}],
        ruleFormChange:false,
        ruleFormValid:false,
        rules: {
          name:[
            {required:true,message:'请输入活动名称',trigger:'change'}
          ],
          fenLei:[
            {required:true,message:'请选择活动分类',trigger:'change'}
          ],
          activeStartTimeDate: [{required:true,type: 'date',message:'请选择活动开始日期',trigger:'change'}],
          activeStartTimeTime: [{required:true,type: 'date',message:'请选择活动开始时间',trigger:'change'}],
          activeEndTimeDate:   [{required:true,type: 'date',message:'请选择活动结束日期',trigger:'change'}],
          activeEndTimeTime:   [{required:true,type: 'date',message:'请选择活动结束时间',trigger:'change'}],
          signStartTimeDate:   [{required:true,type: 'date',message:'请选择报名开始日期',trigger:'change'}],
          signStartTimeTime:   [{required:true,type: 'date',message:'请选择报名开始时间',trigger:'change'}],
          signEndTimeDate:     [{required:true,type: 'date',message:'请选择报名截止日期',trigger:'change'}],
          signEndTimeTime:     [{required:true,type: 'date',message:'请选择报名截止时间',trigger:'change'}],
        },
        ruleForm: {
          name: '',
          fenLeis:[
            {name: '未发布'},
            {name: '测试活动'},
            {name: '精彩活动'}
          ],
          fenLei: '',
          tags: [],
          activeStartTimeDate: '',
          activeStartTimeTime: '',
          activeEndTimeDate: '',
          activeEndTimeTime: '',
          signStartTimeDate: '',
          signStartTimeTime: '',
          signEndTimeDate: '',
          signEndTimeTime: '',
          activePerson:'',
          activePersonNum:'',
          activeDescribe:'',
          UseMsgShow:'',
          evaluate:'',
          adTitle:'',
          adContent:'',
          adLink:'',
        }
      };
    },
    watch: {
      ruleForm: {
        handler: function (val,oldVal) {
          store.commit('setRuleForm',this.ruleForm);
          this.tagsValid = !this.ruleForm.tags.length ? '' :false ;
          this.ruleFormChange = true ;
        },
        deep: true
      }
    },
    methods: {
      handleReset: function () {
        this.$refs.ruleForm.resetFields();
      },
      handleSubmit: function (ev) {},
      handleRemove: function (file, fileList) {
        console.log(file, fileList);
      },
      handlePreview: function (file) {
        console.log(file);
      },
      handleSuccess: function () {
      },
      handleError: function () {
      },
      showDialog: function () {
        if(this.ruleForm.tags.length >=5 ){
          this.$Message.warning('最多设置5个标签');
        }else{
          this.dialogFormVisible = true;
          this.dialogForm = {};
        }
      },
      handleClose: function (tag) {
        var index = this.ruleForm.tags.indexOf(tag);
        this.ruleForm.tags.splice(index,1);
      },
      handleCloseFenLei: function (fenLei){
        var index = this.ruleForm.fenLeis.indexOf(fenLei);
        this.ruleForm.fenLeis.splice(index,1);
      },
      handleAdd: function (tag,form,tags) {
        if(tag && tag.trim().length !== 0){
          var isExist = false ;
          tag = tag.trim();
          for(var i=0;i<tags.length; i++){
            if(tags[i].name == tag ){
              isExist = true;
              break
            }
          }
          if(isExist){
            this.$Message.warning('该标签已存在');
          }else{
            this.dialogFormVisible = false;
            this.dialogFormFenLeiVisible = false;
            tags.push({
              name: tag
            });
          }
        }else{
          this.$Message.warning('标签不能为空');
        }
      },
      openAd: function (){
        this.$Message.info('该功能正在完善');
      },

    },
    created: function(){
      //es6复制对象方法
        Object.assign(this.ruleForm, store.state.ruleForm);
        var _this = this;
        setTimeout(function () {
            _this.ruleFormChange = false ;
        })
    },

  }
</script>
<style>
  .step{margin-bottom: 30px;}
  .ivu-form-item .ivu-form-item {
    margin-right: 10px;
  }
</style>
