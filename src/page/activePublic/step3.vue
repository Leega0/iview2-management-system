<template>
  <div class="step3">
    <Form label-position="top" ref="shareForm" :model="shareForm" class="demo-form-stacked">

      <Form-item label="分享标题">
        <Input v-model="shareForm.title"></Input>
      </Form-item>

      <Form-item label="分享描述">
        <Input v-model="shareForm.describe"></Input>
      </Form-item>

      <Form-item label="分享图片">
        <Upload
          action="http://jsonplaceholder.typicode.com/"
          type="drag"
          :thumbnail-mode="true"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          >
          <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>点击或将文件拖拽到这里上传</p>
          </div>
        </Upload>
      </Form-item>
    </Form>
  </div>
  </template>

<script>
    import store from '@/store'

    export default {
        name: 'step3',
        data: function () {
            return {
                shareForm: {
                    title: '',
                    describe: ''
                }
            }
        },
        watch: {
            shareForm: {
                handler: function () {
                    store.commit('setShareForm', this.shareForm);
                } ,
                deep:true
            }
        },
        methods: {
            handleRemove: function (file, fileList) {
                console.log(file, fileList);
            },
            handlePreview: function (file) {
                console.log(file);
            }
        },
        created: function () {
            store.state.shareForm && Object.assign(this.shareForm, store.state.shareForm);
        }
    }
</script>
<style>
  .step3 .router-link{color:#333;}
  .step3 .ivu-btn-primary .router-link{color:#fff;}
</style>
