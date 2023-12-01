<template>
  <div class="container">
    <a-row :gutter="10">
      <a-col :span="4">
        <a-card class="container-left">
          <div style="margin-top: 10px">
            <a-space>标签：</a-space>
            <a-radio-group v-model="labelValue">
              <a-radio value="1">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable> 支路</a-tag>
                </template>
              </a-radio>
              <a-radio value="3">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable> 部门</a-tag>
                </template>
              </a-radio>
            </a-radio-group>
          </div>
          <leftSide ref="RefValue" />
        </a-card>
      </a-col>
      <a-col :span="20" class="container-right">
        <a-range-picker
          :default-value="rangeValue"
          :shortcuts="shortcuts"
          :time-picker-props="{ defaultValue: ['00:00:00', '09:09:06'] }"
          format="YYYY-MM-DD HH:mm"
          show-time
          style="width: 360px; margin: 0 24px 24px 0"
        />
        <a-button style="margin: 0 10px" type="outline">
          <template #icon>
            <icon-search />
          </template>
          <!-- Use the default slot to avoid extra spaces -->
          <template #default>查询</template>
        </a-button>
        <a-button style="margin: 0 10px 0 0" type="outline">
          <template #icon>
            <icon-upload />
          </template>
          <!-- Use the default slot to avoid extra spaces -->
          <template #default>导出</template>
        </a-button>
        <a-radio-group v-model="tabChange" @change="tabChangeClick">
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable> 表格</a-tag>
            </template>
          </a-radio>
          <a-radio value="2">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable> 图表</a-tag>
            </template>
          </a-radio>
        </a-radio-group>
        <a-card v-show="isShow">
          <a-table
            :bordered="{ cell: true }"
            :columns="columns"
            :data="data"
            style="margin-top: 20px"
          >
          </a-table>
        </a-card>
        <a-card v-show="isShowTwo">
          <template #title> 汇总设备 分时用电</template>
          <a-row>
            <a-col :span="12">
              <div id="myChart"></div>
            </a-col>
            <a-col :span="12">
              <div id="electricityBill"></div>
            </a-col>
            <a-radio-group v-model="changeValue" @change="changeValue">
              <a-radio value="1">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable> 电量</a-tag>
                </template>
              </a-radio>
              <a-radio value="2">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable> 电费</a-tag>
                </template>
              </a-radio>
              <div id="lineChart"></div>
            </a-radio-group>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { nextTick, onMounted, reactive, ref } from 'vue';
  import * as dayjs from 'dayjs';
  import * as echarts from 'echarts';
  import leftSide from '@/components/leftSide/index.vue';

  const isShow = ref(true);
  const isShowTwo = ref(false);

  const RefValue = ref();
  const labelValue = ref('1');
  const tabChange = ref('1');
  const changeValue = ref('1');
  const rangeValue = ref([Date.now(), Date.now()]);

  const tabChangeClick = () => {
    if (tabChange.value === '1') {
      isShow.value = true;
      isShowTwo.value = false;
    } else {
      isShow.value = false;
      isShowTwo.value = true;
    }
  };

  const shortcuts = ref([
    {
      label: '今天',
      value: () => [dayjs(), dayjs()],
    },
    {
      label: '最近24小时',
      value: () => [dayjs(), dayjs().add(1, 'month')],
    },
    {
      label: '昨日',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '最近7日',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '最近30天',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '本月',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '上月',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '最近12月',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '本年',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
    {
      label: '上一年',
      value: () => [dayjs(), dayjs().add(1, 'year')],
    },
  ]);

  const columns = ref([
    {
      title: '支路名称',
      dataIndex: 'name',
    },
    {
      title: '尖峰',
      children: [
        {
          title: '电量(kWh)',
          dataIndex: 'spikeA',
        },
        {
          title: '电费(元)',
          dataIndex: 'spikeB',
        },
      ],
    },
    {
      title: '峰',
      children: [
        {
          title: '电量(kWh)',
          dataIndex: 'peakA',
        },
        {
          title: '电费(元)',
          dataIndex: 'peakB',
        },
      ],
    },
    {
      title: '平',
      children: [
        {
          title: '电量(kWh)',
          dataIndex: 'flatA',
        },
        {
          title: '电费(元)',
          dataIndex: 'flatB',
        },
      ],
    },
    {
      title: '谷',
      children: [
        {
          title: '电量(kWh)',
          dataIndex: 'kindA',
        },
        {
          title: '电费(元)',
          dataIndex: 'kindB',
        },
      ],
    },
    {
      title: '总',
      children: [
        {
          title: '电量(kWh)',
          dataIndex: 'totalA',
        },
        {
          title: '电费(元)',
          dataIndex: 'totalB',
        },
      ],
    },
    {
      title: '谷电量占比',
      dataIndex: 'ValleyProportion',
    },
  ]);

  const data = reactive([
    {
      key: '1',
      name: '汇总设备',
      spikeA: '321',
      spikeB: '',
      peakA: '64',
      peakB: '423',
      flatA: '423',
      flatB: '423',
      kindA: '423',
      kindB: '423',
      totalA: '423',
      totalB: '423',
      ValleyProportion: '123123',
    },
  ]);

  onMounted(() => {
    const first = ref([
      { value: 1048, name: '1' },
      { value: 735, name: '2' },
      { value: 580, name: '3' },
      { value: 484, name: '4' },
      { value: 300, name: '5' },
    ]);

    const myChart = echarts.init(document.getElementById('myChart'), null, {
      height: 320,
      width: 800,
    });
    const myChartOptions = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'right',
      },

      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          selectedMode: 'single',
          label: {
            show: true,
            formatter(param) {
              // correct the percentage
              return param.name;
            },
          },
          labelLine: {
            show: true,
          },
          data: first.value,
        },
      ],
    };
    const electricityBill = echarts.init(
      document.getElementById('electricityBill'),
      null,
      {
        height: 320,
        width: 800,
      }
    );
    const electricityBillOptions = {
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: first.value,
        },
      ],
    };

    const lineChart = echarts.init(document.getElementById('lineChart'), null, {
      height: 320,
      width: 1600,
    });

    const lineChartOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series',
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Email',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Union Ads',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Video Ads',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series',
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
      ],
    };
    myChart.setOption(myChartOptions);
    electricityBill.setOption(electricityBillOptions);
    lineChart.setOption(lineChartOptions);

    nextTick(() => {
      setTimeout(() => {
        myChart.setOption(myChartOptions);
        electricityBill.setOption(electricityBillOptions);
        lineChart.setOption(lineChartOptions);
      }, 100);
    });

    window.addEventListener('resize', () => {
      myChart.resize();
      electricityBill.resize();
      lineChart.resize();
    });
  });
</script>

<style lang="less" scoped>
  .container {
    padding: 0 10px;

    &-right {
      margin-top: 10px;
    }
  }

  .arco-tag {
    margin: 0 10px 10px 0;
  }

  .arco-tag-checked {
    color: #6c7fff;
    background-color: #6c7fff !important;
  }

  .arco-tag-checked:hover {
    color: black !important;
    background-color: #6c7fff;
  }

  .arco-tag {
    width: 100%;
    background-color: #33404c;
  }

  .arco-tag:hover {
    width: 100%;
    color: #6c7fff;
  }

  .arco-radio .arco-radio-disabled {
    color: black !important;
  }

  .arco-tag .arco-tag-size-medium .arco-tag-checkable {
    color: black !important;
  }

  .arco-tag > .arco-tag-size-medium > .arco-tag-checkable {
    color: black !important;
  }
</style>
