<template>
  <div class="page4">
    <p style="font-size: 15px;">数据统计时间: 活动发布时间 {{ activePublishTime }} ——至今</p>
    <Row type="flex" align="middle" class="title">
        <Col :span="3" style="width: 85px;">
            <h4>数据总览</h4>
        </Col>
        <Col :span="20">
            <Button type="text">数据指标说明</Button>
        </Col>
    </Row>

    <Row type="flex" justify="start" class="row" style="margin-bottom: 20px;">
      <Col :span="3">
        <div class="square">
          {{ readNum }}
          <p>浏览次数</p>
        </div>
      </Col>
      <Col :span="3">
        <div class="square">
          {{ readPersonNum }}
          <p>浏览用户数</p>
        </div>
      </Col>
      <Col :span="3">
        <div class="square">
          {{ signUpNum }}
          <p>报名人数</p>
        </div>
      </Col>
      <Col :span="3">
        <div class="square">
          {{ translateRate }}
          <p>报名转化率</p>
        </div>
      </Col>
      <Col :span="3">
        <div class="square">
          {{ signInNum }}
          <p>签到人数</p>
        </div>
      </Col>
    </Row>

    <Row type="flex" align="middle" class="title">
      <Col :span="24">
        <h4>数据趋势</h4>
      </Col>
    </Row>

    <!-- 折现图 -->
        <div id="ployline" style="width: 100%;height: 400px;"></div>

    <Row type="flex" align="middle" class="title">
      <Col :span="24">
        <h4>渠道监控</h4>
      </Col>
    </Row>
    <!-- 柱状图 -->
    <div id="columnChart" style="width: 100%;height: 400px;"></div>

    <Row type="flex" align="middle" class="title">
      <Col :span="24">
        <h4>渠道监控详情</h4>
      </Col>
    </Row>

    <Row>
      <Table :data="tableData" border style="width: 100%" :context="self" :columns="columns4">
      </Table>
    </Row>
    <Row type="flex" align="middle" justify="end" style="padding: 20px 0;">
      <Page
          :current="1" 
          @on-change="changePage"
          :total="1000">
        </Page>
    </Row>

    <Row type="flex" align="middle" class="title">
      <Col :span="24">
        <h4>用户影响力监控</h4>
      </Col>
    </Row>

    <Row>
      <Table :data="tableData1" border style="width: 100%" :context="self" :columns="columns6">
      </Table>
    </Row>
    <Row type="flex" align="middle" justify="end" style="padding: 20px 0;">
      <Page
          :current="1" 
          @on-change="changePage"
          :total="1000">
        </Page>
    </Row>
  </div>
</template>

<script>

  //  TODO:引入图表组件，cnpm引入有点问题
  import echarts from 'echarts'

  export default {
    name: 'page4',
    data: function () {
      return {
        self: this,
        columns4:[
          {
            title:'渠道',
            width:180,
            key: 'way'
          },
          {
            title:'浏览用户数',
            sortable: true,
            key: 'readNum'
          },
          {
            title:'转发次数',
            sortable: true,
            key: 'forwardNum'
          },
          
          {
            title:'报名人数',
            sortable: true,
            key: 'signUpNum'
          },
        ],
        columns6:[
          {
            title:'姓名',
            width:180,
            key: 'name'
          },
          {
            title:'手机',
            key: 'tel'
          },
          {
            title:'渠道',
            key: 'way'
          },
          {
            title:'转发次数',
            sortable: true,
            key: 'forwardNum'
          },
          {
            title:'浏览用户数',
            sortable: true,
            key: 'readNum'
          },
          {
            title:'报名人数',
            sortable: true,
            key: 'signUpNum'
          },
        ],
        activePublishTime: '2016-09-12',
        readNum: 1000,
        readPersonNum: 300,
        signUpNum: 100,
        translateRate: '10%',
        signInNum: 88,
        tableData: [
          {
            way: '渠道一',
            readNum: 1500,
            forwardNum: 5000,
            signUpNum: 88
          }, {
            way: '渠道二',
            readNum: 2500,
            forwardNum: 4000,
            signUpNum: 99
          },
          {
            way: '渠道三',
            readNum: 3500,
            forwardNum: 3000,
            signUpNum: 23
          },
          {
            way: '渠道四',
            readNum: 4500,
            forwardNum: 2000,
            signUpNum: 55
          },
          {
            way: '渠道五',
            readNum: 5500,
            forwardNum: 1000,
            signUpNum: 123
          } ],
        tableData1: [
          {
            name: 'Aleen',
            tel: '18825144569',
            way: '渠道一',
            forwardNum: 1000,
            readNum: 800,
            signUpNum: 88
          }, {
            name: 'Aleen',
            tel: '18825144569',
            way: '渠道一',
            forwardNum: 1000,
            readNum: 800,
            signUpNum: 88
          }, {
            name: 'Aleen',
            tel: '18825144569',
            way: '渠道一',
            forwardNum: 1000,
            readNum: 800,
            signUpNum: 88
          }, {
            name: 'Aleen',
            tel: '18825144569',
            way: '渠道一',
            forwardNum: 1000,
            readNum: 800,
            signUpNum: 88
          }, {
            name: 'Aleen',
            tel: '18825144569',
            way: '渠道一',
            forwardNum: 1000,
            readNum: 800,
            signUpNum: 88
          } ],
        ploylineOption: {
          color: [ '#14CC76', '#3091F2', '#6F57FD' ],
          tooltip: {
            trigger: 'axis'
          },
          legend: {

            data: [ '浏览次数', '浏览用户数', '报名人数' ]
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [ '9-13', '9-14', '9-15', '9-16', '9-17', '9-18', '9-19' ]
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '浏览次数',
              type: 'line',
              stack: '总量',
              data: [ 120, 132, 101, 134, 90, 230, 210 ]
            },
            {
              name: '浏览用户数',
              type: 'line',
              stack: '总量',
              data: [ 220, 182, 191, 234, 290, 330, 310 ]
            },
            {
              name: '报名人数',
              type: 'line',
              stack: '总量',
              data: [ 150, 232, 201, 154, 190, 330, 410 ]
            }
          ]
        },
        columnChartOption: {
          color: [ '#14CC76', '#3091F2', '#6F57FD' ],
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [ '浏览次数', '浏览用户数', '报名人数' ]
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: [ '渠道一', '渠道二', '渠道三', '渠道四' ],
              boundaryGap: [ '20%', '20%' ]
            }
          ],
          yAxis: [
            {
              type: 'value',
              boundaryGap: [ '20%', '20%' ]
            }
          ],
          series: [
            {
              name: '浏览次数',
              type: 'bar',
              stack: '1',
              data: [ 320, 332, 301, 334 ],
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: '#333',
                    fontSize: 16
                  }
                }
              }
            },
            {
              name: '浏览用户数',
              type: 'bar',
              stack: '2',
              data: [ 120, 132, 101, 134 ],
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: '#333',
                    fontSize: 16
                  }
                }
              }
            },
            {
              name: '报名人数',
              type: 'bar',
              stack: '3',
              data: [ 220, 182, 191, 234 ],
              label: {
                normal: {
                  show: true,
                  position: 'top',
                  textStyle: {
                    color: '#333',
                    fontSize: 16
                  }
                }
              }
            }
          ]
        }
      }
    },
    computed: {
      currentTime: function () {
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        var h = date.getHours();
        var mm = date.getMinutes();
        return y + '-' + m + '-' + d + ' ' + h + ':' + mm;
      }
    },

    methods: {
      initChart: function () {
        var _this = this;
        setTimeout( function () {
          var ployline = echarts.init( document.getElementById( 'ployline' ) );
          var columnChart = echarts.init( document.getElementById( 'columnChart' ) );
          ployline.setOption( _this.ploylineOption );
          columnChart.setOption( _this.columnChartOption );
        }, 1000 )
      },
      changePage:function(){}
    },
    watch: {},
    created: function () {
   this.initChart();
    }
  }


</script>

<style>

  .page4 .square{ width: 140px; height: 140px; border: solid 1px #20a0ff; text-align: center; border-radius: 6px; padding: 40px 0; box-sizing: border-box; }
  .page4 .square p{ color: #999; }
  .page4 .row .ivu-col{ width: 140px; margin-right: 20px; }
  .page4 .title{ margin-top: 38px; margin-bottom: 15px; }
  .page4 .title h4{ margin: 0; border-left: solid 3px #20a0ff; padding-left: 15px; }
</style>
