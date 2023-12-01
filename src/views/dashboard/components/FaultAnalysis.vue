<template>
  <div class="container">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" title="故障记录">
        <div class="container-top">
          <span> 回路：</span>
          <a-select :style="{ width: '320px' }" placeholder="Please select ...">
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
            <a-option disabled>Disabled</a-option>
          </a-select>
          <span> 查询时间：</span>
          <a-range-picker v-model="rangeValue" style="width: 300px" />
          <a-button type="primary" @click="handleClick">刷新</a-button>
        </div>
        <div class="container-draw">
          故障列表
          <span style="color: #3c7eff; cursor: pointer" @click="handleClick2"
            >(故障示例)</span
          >
        </div>
        <a-drawer
          :mask-closable="false"
          :visible="visible"
          :width="widthValue"
          @cancel="handleCancel"
          @ok="handleOk"
        >
          <template #title> 示例详情</template>
          <div style="width: 100%; height: 100%">
            <h1>故障示例:电压暂降</h1>
            <div>【发生时间】 2023-09-06 {{ date }}</div>
            <div>【故障选项】A</div>
            <div>【事件状态】</div>
            <div style="display: flex">
              <div>【故障数据】</div>
              <div>
                <div class="FaultData" style="">残余电压：182.48V</div>
                <div class="FaultData">持续时间：1.1s</div>
              </div>
            </div>
            <a-divider />
            <div>【故障录波】 下载文件</div>
            <div class="FailureTime">
              故障发生时间: {{ date }} 录波开始时间: {{ date }}
            </div>
            <div id="myCharts" class="myCharts"></div>
            <div id="myCharts2" class="myCharts"></div>
            <div id="myCharts3" class="myCharts"></div>

            <a-button
              class="SizeChange"
              shape="circle"
              size="large"
              @click="fontFace"
            >
              <template #icon>
                <icon-left v-if="widthValue === '40%'" />
                <icon-right v-else />
              </template>
            </a-button>
          </div>
        </a-drawer>
        <div class="container-table">
          <a-table
            :bordered="{ wrapper: true, cell: true }"
            :columns="columns"
            :data="data"
          />
        </div>
      </a-tab-pane>

      <a-tab-pane key="2" title="录波文件">
        <div class="container-top">
          <span> 回路：</span>
          <a-select :style="{ width: '320px' }" placeholder="Please select ...">
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
            <a-option disabled>Disabled</a-option>
          </a-select>
          <span style="margin-left: 10px"> 查询时间：</span>
          <a-range-picker v-model="rangeValue" style="width: 300px" />
          <a-button style="margin: 0 20px" type="primary" @click="dateClick"
            >从站端召唤故障录波</a-button
          >
          {{ date }}
        </div>
        <div class="container-draw">
          录波列表
          <span style="color: #3c7eff; cursor: pointer" @click="breakdown"
            >( 录波示例 )</span
          >
        </div>
        <a-drawer
          :mask-closable="false"
          :visible="visibleDate"
          :width="widthValueDate"
          @cancel="handleCancelDate"
          @ok="handleOkDate"
        >
          <template #title> 示例详情</template>
          <div id="myCharts4" class="myCharts"></div>
          <div>12312321321</div>
          <a-button
            class="SizeChange"
            shape="circle"
            size="large"
            @click="ExampleDetails"
          >
            <template #icon>
              <DoubleRightOutlined />
            </template>
          </a-button>
        </a-drawer>
        <div class="container-table">
          <a-table
            :bordered="{ wrapper: true, cell: true }"
            :columns="columnsDate"
            :data="dataDate"
          />
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup>
  import { nextTick, ref } from 'vue';
  import { Notification } from '@arco-design/web-vue';
  import dayjs from 'dayjs';
  import * as echarts from 'echarts';

  const date = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  const rangeValue = ref([Date.now(), Date.now()]);
  const widthIsShow = ref(true);
  const widthIsShowTwo = ref(true);
  const widthValue = ref('40%');
  const widthValueDate = ref('40%');
  const visible = ref(false);
  const visibleDate = ref(false);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '故障发生时间',
      dataIndex: 'salary',
    },
    {
      title: '故障描述',
      dataIndex: 'address',
    },
    {
      title: '故障选相',
      dataIndex: 'email',
    },
    {
      title: '故障状态',
      dataIndex: 'email',
    },
    {
      title: '操作',
      dataIndex: 'email',
    },
  ];
  const columnsDate = [
    {
      title: '故障发生时间',
      dataIndex: 'name',
    },
    {
      title: '描述',
      dataIndex: 'salary',
    },
    {
      title: '操作',
      dataIndex: 'salary',
    },
  ];
  const data = ref([
    // {
    //   name: "123",
    //   salary: "123",
    //   address: "13",
    //   email: "532",
    // },
  ]);
  const dataDate = ref([
    // {
    //   name: "123",
    //   salary: "123",
    //   address: "13",
    //   email: "532",
    // }
  ]);
  let myChart;
  let myChart2;
  let myChart3;
  let myChart4;
  const echartsView = () => {
    myChart = echarts.init(document.getElementById('myCharts'));

    const myChartData = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {},
      series: [
        {
          data: [0, 0, 0, 0, 0, 0, 0],
          type: 'line',
          smooth: true,
        },
      ],
    };
    myChart2 = echarts.init(document.getElementById('myCharts2'));
    const myChartData2 = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {},
      series: [
        {
          data: [0, 0, 0, 0, 0, 0, 0],
          type: 'line',
          smooth: true,
        },
      ],
    };
    myChart3 = echarts.init(document.getElementById('myCharts3'));
    const myChartData3 = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {},
      series: [
        {
          data: [0, 0, 0, 0, 0, 0, 0],
          type: 'line',
          smooth: true,
        },
      ],
    };

    myChart.setOption(myChartData);
    myChart2.setOption(myChartData2);
    myChart3.setOption(myChartData3);
    // setTimeout(() => {
    //   myChart.dispose();
    // }, 3000);
  };

  const echartsTwo = () => {
    myChart4 = echarts.init(document.getElementById('myCharts4'));
    const myChartData4 = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {},
      series: [
        {
          data: [0, 0, 0, 0, 0, 0, 0],
          type: 'line',
          smooth: true,
        },
      ],
    };
    myChart4.setOption(myChartData4);
  };
  const handleClick = () => {
    if (data.value.length === 0) {
      Notification.warning({
        title: '当前设备表计地址为空',
      });
    }
  };

  const fontFace = async () => {
    myChart.dispose();
    myChart2.dispose();
    myChart3.dispose();
    if (widthIsShow.value === true) {
      widthValue.value = '90%';
      await nextTick();
      echartsView();
      widthIsShow.value = false;
    } else if (widthIsShow.value === false) {
      widthValue.value = '40%';
      await nextTick();
      echartsView();
      widthIsShow.value = true;
    }
  };

  const ExampleDetails = async () => {
    myChart4.dispose();
    if (widthIsShowTwo.value === true) {
      widthValueDate.value = '90%';
      await nextTick();
      echartsTwo();
      widthIsShowTwo.value = false;
    } else if (widthIsShowTwo.value === false) {
      widthValueDate.value = '40%';
      await nextTick();
      echartsTwo();
      widthIsShowTwo.value = true;
    }
  };

  // 故障示例
  const handleClick2 = async () => {
    visible.value = true;
    await nextTick();
    echartsView();
  };

  const breakdown = async () => {
    visibleDate.value = true;
    await nextTick();
    echartsTwo();
  };
  const handleOk = () => {
    visible.value = false;
  };
  const handleOkDate = () => {
    visibleDate.value = false;
  };

  const handleCancel = () => {
    visible.value = false;
    widthValue.value = 340;
  };
  const handleCancelDate = () => {
    visibleDate.value = false;
    widthValueDate.value = 340;
  };
  const dateClick = () => {
    date.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
  };
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;
    color: white;
    margin: 0;

    &-top {
    }

    &-draw {
      margin-top: 20px;
    }

    &-table {
      margin-top: 20px;
    }
  }

  span {
    font-size: 14px;
  }

  // 故障分析
  .FaultData {
    width: 200px;
    background-color: #31404c;
    padding: 5px 10px;
    margin-bottom: 10px;
  }

  // 故障时间
  .FailureTime {
    margin: 0 auto;
    text-align: center;
  }

  .myCharts {
    width: 100%;
    height: 40%;
  }

  // 按钮更改大小
  .SizeChange {
    position: absolute;
    left: 10px;
    top: 50%;
  }
</style>
