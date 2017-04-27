<template>
  <div class="page3">
    <Card class="box-card">
      <Row :gutter="20" align="middle" type="flex" justify="end" style="margin-bottom: 20px;">
        <Col :span="3">
          签到列表
        </Col>
        <Col :span="21" >
          <Input placeholder="请输入手机号或者姓名" size="large" v-model="searchText"></Input>
        </Col>
      </Row>


      <Row :gutter="20" align="middle" type="flex" style="margin-bottom:20px">
        <Col :span="10" >
          <Input placeholder="请输入位序列号或手机号" size="large" v-model="signInInput"></Input>
        </Col>
        <Col :span="4">
          <Button type="primary"  size="large" @click.native="signIn">签到</Button>
        </Col>
        <Col :span="10" stlyle="min-width:200px;">
          <Button>导入excel</Button>
          <Button>导出excel</Button>
        </Col>
      </Row>

      <Tabs type="card" @on-click="tabClick" >
        <Tab-pane name="全部"   label="全部"></Tab-pane>
        <Tab-pane name="已签到" label="已签到"></Tab-pane>
        <Tab-pane name="未签到" label="未签到"></Tab-pane>
      </Tabs>

      <Table :data="tableData" :context="self" :columns="columns6">
        
        <el-table-column inline-template fixed="right" label="操作" width="80">
          <Button type="text" size="mini" style="padding: 0;text-align: center;">{{ row.status == "已签到"?"取消签到":"签到" }}</Button>
        </el-table-column>
      </Table>


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

  /* 测试数据 */
  const testData = [
    {
      name: 'Allen',
      tel: '18825144569',
      way: '祖传链接',
      status: '已签到',
      note: '喳喳'
    }, {
      name: 'Allen',
      tel: '13480278079',
      way: '祖传链接',
      status: '已签到',
      note: '喳喳'
    }, {
      name: 'Allen',
      tel: '18825188888',
      way: '祖传链接',
      status: '已签到',
      note: '喳喳'
    }, {
      name: 'Allen',
      tel: '17070897917',
      way: '祖传链接',
      status: '未签到',
      note: '喳喳'
    }, {
      name: 'Allen',
      tel: '12414389677',
      way: '祖传链接',
      status: '未签到',
      note: '喳喳'
    }
  ];
  export default {
    name:'page3',
    data: function () {
      return {
        self: this,
        columns6:[
          {
            title:'姓名',
            width:80,
            key: 'name'
          },
          {
            title:'手机号',
            width:130,
            key: 'tel'
          },
          {
            title:'报名渠道',
            width:100,
            key: 'way'
          },
          {
            title:'交易状态',
            width:130,
            key: 'status'
          },
          {
            title:'备注',
            width:100,
            key: 'note'
          },
          {
            title:'操作',
            width:80,
            render(row,column,index){
                return `<i-button type="text" size="small" style="padding: 0;text-align: center;">{{ row.status == "已签到"?"取消签到":"签到" }}</i-button>`
            }
          },
        ],
        searchText:'',
        signInInput:'',
        status:'全部',
        totalItemsNum:1000,
        tableData: '',
      }
    },
    methods: {
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
      signIn: function () {
        console.log("签到");
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
  .page3 .ivu-row{margin-bottom: 20px;}

</style>
