<template>
  <div class="page2">
    <Card class="box-card">
      <Row :gutter="20" align="middle" type="flex" justify="end" style="margin-bottom: 20px;">
        <Col :span="3">
          报名列表
        </Col>
        <Col :span="21" >
          <Input placeholder="请输入手机号或者姓名" size="large" v-model="searchText"></Input>
        </Col>
      </Row>


      <Row :gutter="20" align="middle" type="flex" style="padding: 20px;">
        <Col :span="6" style="width: 160px;">已选择{{ selectNum }} 个报名用户</Col>
        <Col :span="8" style="width: 300px;" class="btn-group">
          <Button>通过</Button>
          <Button>拒绝</Button>
          <Button>退款</Button>
        </Col>
        <Col :span="9">
            <Button>导入excel</Button>
            <Button>导出excel</Button>
            <Button>群发信息</Button>
        </Col>
      </Row>

      <Tabs type="card"  @on-click="tabClick">
        <Tab-pane name="全部" label="全部"></Tab-pane>
        <Tab-pane name="待支付" label="待支付"></Tab-pane>
        <Tab-pane name="待审核" label="待审核"></Tab-pane>
        <Tab-pane name="退款中" label="退款中"></Tab-pane>
        <Tab-pane name="已成功报名" label="已成功报名"></Tab-pane>
        <Tab-pane name="已关闭报名" label="已关闭报名"></Tab-pane>
      </Tabs>
<Row type="flex" align="middle" style="padding: 20px 0;">
      <Table :data="tableData" :context="self" :columns="columns6"
                @on-selection-change="selectionchange">
      </Table>
      </Row>


      <Row type="flex" align="middle" justify="end" style="padding: 20px 0;">
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
  /* 测试数据 */
const testData = [
  {
    name: 'Allen',
    tel: '18825144569',
    way: '祖传链接',
    status: '待支付',
    note: '喳喳'
  }, {
    name: 'Allen',
    tel: '13480278079',
    way: '祖传链接',
    status: '已关闭报名',
    note: '喳喳'
  }, {
    name: 'Allen',
    tel: '18825188888',
    way: '祖传链接',
    status: '已成功报名',
    note: '喳喳'
  }, {
    name: 'Allen',
    tel: '17070897917',
    way: '祖传链接',
    status: '退款中',
    note: '喳喳'
  }, {
    name: 'Allen',
    tel: '12414389677',
    way: '祖传链接',
    status: '待审核',
    note: '喳喳'
  }
];

  import debounce from 'lodash.debounce'
  export default {
    name: 'page2',
    data: function () {
      return {
        self: this,
        columns6:[
          {
            type: 'selection',
            width: 50,
            align: 'center'
          },
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
        ],
        status:'全部',
        selectNum: 0,
        totalItemsNum:1000,
        searchText: '',
        sourceDate:[],
        tableData:[],
        multipleSelection: []
      }
    },
    computed:{

    },
    methods: {
      handleSelect: function (row, column, cell, event) {
        if (column.label == '操作') {
          this.$router.push('/activeManage/detail/page1');
        } else if (column.type == 'selection') {
          row.$info = !row.$selected;
        } else {
          row.$selected = !row.$selected;
          row.$info = row.$selected;
        }
      },
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
      changePage:function(){},
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
  .page2{min-width: 800px;}
</style>
