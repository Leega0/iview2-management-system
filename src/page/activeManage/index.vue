<template>
  <div class="allActive">
    <Row class="head">
      <Col span="18" style="padding:20px 0;background: #33CCCC;">
        <Col span="8">
          {{ totalActiveNum }}<br>
          <span>活动总数</span>
        </Col>
        <Col span="8">
          {{ totalActiveNum }}<br>
          <span>报名总数</span>
        </Col>
        <Col span="8" style="border: none;">
          {{ auditNum }}<br>
          <span>待审核</span>
        </Col>
      </Col>

      <Col span="5" offset="1" style="background:  #3091F2;padding:40px 0;">
        {{ totalActiveNum }}<br>
        <span>查看会员</span>
      </Col>
    </Row>

    <Card class="box-card">
      <h3>活动列表</h3>
      <Row type="flex" align="middle" :gutter="20" style="padding:20px 0;">
        <Col span="5" style="width: 160px;text-align: center;">
          已选择{{ activeNum }}个活动
        </Col>
        <Col span="5" style="width: 140px;">
          <Select v-model="currentType" placeholder="请选择活动分类">
            <Option
              v-for="type in types"
              :value="type" :key="type">
            </Option>
          </Select>
        </Col>
        <Col span="13">
          <Button :plain="true" @click.native="handleRemove" type="error">删除</Button>
          <Button :plain="true" @click.native="handleMoveToTop" type="info">置顶</Button>
          <Button :plain="true" @click.native="handleCopy" type="info">复制</Button>
        </Col>
      </Row>

      <Table :data="filteredTableData" :context="self" :columns="columns8" @on-selection-change="selectionchange" style="width: 100%">        
      </Table>

      <Row type="flex" justify="end" style="padding:20px 0; ">
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
  export default {
    name: 'allActive',
    data: function () {
      return {
        self: this,
        columns8:[
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title:'活动名称',
            key: 'title'
          },
          {
            title:'活动分类',
            key: 'type'
          },
          {
            title:'活动状态',
            key: 'status'
          },
          {
            title:'浏览数',
            key: 'readNum'
          },
          {
            title:'报名数',
            key: 'signUpNum'
          },
          {
            title:'待审核',
            key:'auditNum'
          },
          {
            title:'操作',
            key:'id',
            render(row,column,index){
              return `<i-button type="text" size="small" @click="handleSelect(${index+1})">查看详情</i-button>`
            }
          }
        ],
        totalActiveNum: 3,
        totalSignUp: 204,
        auditNum: 15,
        activeNum: 0,
        currentType: '全部',
        selectItems:[],
        types: ['全部','测试活动','免费活动','收费活动'],
        tableData: [
          {
            id: '001',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }, {
            id: '002',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }, {
            id: '003',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }, {
            id: '004',
            title: '王小虎',
            type: '测试活动',
            status: '已结束',
            readNum: 200,
            signUpNum: 100,
            auditNum: 100
          }],
      }
    },
    computed:{
        filteredTableData: function () {
          var type = this.currentType;
          return this.tableData.filter(function (data) {
            if(type == '全部'|| type == '' ){
              return true
            }else{
              return data.type == type
            }
          })
        }
    },
    methods: {
      handleSelect: function (index) {
       this.$router.push('/activeManage/detail/page1');
      },
      selectionchange: function (val) {
        var arr = [];
        val.forEach(function (item) {
            arr.push(item.id);
        });
        this.selectItems = arr;
        this.activeNum = this.selectItems.length;
      },
      handleSelectFenLei:function(){},
      handleSetFenLei:function(){

      },
      handleRemove:function(){
        var tableData = this.tableData;

        this.selectItems.forEach(function (id) {
          tableData.forEach(function (data) {
              if(id == data.id){
                tableData.splice(tableData.indexOf(data),1)
              }
          })
        });
        this.selectItems = [];
      },
      handleMoveToTop:function(){},
      handleCopy:function(){},
      pageSizechange:function(){},
      changePage:function(){},
      viewDetail:function(){}
    }
  }
</script>
<style>
  .allActive > .head > .ivu-col  > .ivu-col  {
    padding: 20px 0;
    border-right: solid 1px #fff;
  }

  .allActive .head {
    text-align: center;
    color: #fff;
    font-size: 30px;
    margin-bottom: 50px;
  }

  .allActive .head span {
    font-size: 16px;
  }
</style>
