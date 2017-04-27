<template>
  <div class="page5">
    <Card class="box-card">
      <Row :gutter="20" align="middle" type="flex" justify="end" style="margin-bottom: 20px;">
        <Col :span="3">
          评价列表
        </Col>
        <Col :span="15" :offset="3">
          <Input placeholder="请输入手机号或者姓名" size="large" v-model="searchText"></Input>
        </Col>
        <Col :span="3">
          <Button size="large" icon="search">搜索</Button>
        </Col>
      </Row>

      <Row :gutter="20" align="middle" type="flex" style="padding: 20px;">
        <Col :span="6" style="width: 160px;">已选择{{ selectNum }} 个报名用户</Col>
        <Col :span="18" style="width: 400px;" class="btn-group">
          <Button>通过</Button>
          <Button>拒绝</Button>
          <Button>取消审核</Button>
        </Col>
      </Row>

      <Tabs type="card" @on-click="tabClick">
        <Tab-pane name="全部" label="全部"></Tab-pane>
        <Tab-pane name="未审核" label="未审核"></Tab-pane>
        <Tab-pane name="审核通过" label="审核通过"></Tab-pane>
        <Tab-pane name="审核不通过" label="审核不通过"></Tab-pane>
      </Tabs>

      <Row>
        <Table :data="tableData" :columns="columns6" :context="self"
        @on-selection-change="selectionchange">
        </Table>
      </Row>


      <Row  type="flex" align="middle" justify="end" style="padding: 20px 0;">
          <Page
          :current="1" 
          @on-change="changePage"
          :total="1000">
        </Page>
      </Row>
    </Card>

  </div>
</template>

<script>
  import debounce from 'lodash.debounce'

  const testData =  [
    {
      name: 'Allen',
      tel: '18825144569',
      evaluate: '祖传链接好啊',
      status: '审核不通过',
      note:'喳喳'
    },{
      name: '蝈蝈',
      tel: '13825144569',
      evaluate: '祖传链接好啊',
      status: '审核通过',
      note:'喳喳'
    },{
      name: '哎呀',
      tel: '17025144569',
      evaluate: '祖传链接好啊',
      status: '未审核',
      note:'喳喳'
    },{
      name: 'Allen',
      tel: '15925144569',
      evaluate: '祖传链接好啊',
      status: '未审核',
      note:'喳喳'
    },{
      name: '大伦',
      tel: '13625144569',
      evaluate: '祖传链接好啊',
      status: '未审核',
      note:'喳喳'
    }];
  export default {
    name: 'page5',
    data: function () {
      return {
        columns6:[
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title:'姓名',
            key: 'name'
          },
          {
            title:'手机号',
            key: 'tel'
          },
          {
            title:'评价内容',
            key:'evaluate'
          },{
            title:'状态',
            key:'status'
          },
          {
            title:'备注',
            key:'note'
          }
        ],
        status:'全部',
        searchText:'',
        selectNum:0,
        totalItemsNum:1000,
        tableData:[],
        multipleSelection: []

      }
    },
    methods: {
      selectionchange: function (val) {
        var arr = [];
        val.forEach(function (item) {
          arr.push(item.id);
        });
        this.selectItems = arr;
        this.selectNum = this.selectItems.length;
      },
      filterBySearchText: function (val,data) {
        return data.filter(function (item) {
          return item.name.toLowerCase().match(val.toLowerCase()) || item.tel.match(val)
        })
      },
      filterByStatus: function (status,data) {
        return data.filter(function (item) {
          return (status=="全部") ? true : (item.status == status);
        })
      },
      filterByVal: function () {
        var data = this.filterByStatus(this.status,testData);
        this.tableData = this.searchText ? this.filterBySearchText(this.searchText,data):data;
      },
      tabClick: function (status) {
        this.status = status;
        this.filterByVal();
      },
      changePage:function(){}
    },
    watch: {
      searchText: debounce(function (val, oldVal) {
        this.filterByVal();
      }, 500)
    },
    created: function () {
      this.tableData = testData ;
    }
  }

</script>

<style>

</style>
