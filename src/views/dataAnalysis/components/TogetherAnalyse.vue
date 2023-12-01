<template>
  <div class="container">
    <a-row>
      <a-col :span="4">
        <leftSide @tree-data-value="treeDataValue" />
      </a-col>
      <a-col :span="20">
        <a-space>选择时间范围:</a-space>
        <a-range-picker v-model="rangeValue" style="width: 300px" />
        <a-radio-group v-model="DateValue" @change="DateValueChange">
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable>所有值</a-tag>
            </template>
          </a-radio>
          <a-radio value="2">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable>每日值</a-tag>
            </template>
          </a-radio>
          <a-radio value="3">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable>每月值</a-tag>
            </template>
          </a-radio>
        </a-radio-group>
        <a-select v-model="averageValue" style="width: 100px">
          <a-option value="1">平均值</a-option>
          <a-option value="2">最大值</a-option>
          <a-option value="3">最小值</a-option>
          <a-option value="4">累计值</a-option>
        </a-select>
        <a-button>查询</a-button>
        <a-radio-group v-model="tableChart" @change="tableChartChange">
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable>表格</a-tag>
            </template>
          </a-radio>
          <a-radio value="2">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable>图表</a-tag>
            </template>
          </a-radio>
        </a-radio-group>
        <div v-show="isShow" id="myChart" style="margin-top: 10px"> </div>

        <a-table
          v-show="isShow2"
          :bordered="{ wrapper: true, cell: true }"
          :columns="columns"
          :data="data"
          style="margin-top: 10px"
        >
        </a-table>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue';
  import * as echarts from 'echarts';
  import leftSide from '@/components/leftSide/checkboxIndex.vue';

  const rangeValue = [Date.now(), Date.now()];
  const DateValue = ref('1');
  const tableChart = ref('2');
  const isShow = ref(true);
  const isShow2 = ref(false);
  const averageValue = ref('1');
  const a = ref(Math.random() * 10);
  const DateValueChange = () => {
    console.log(a.value);
  };
  const tableChartChange = () => {
    console.log(tableChart.value);
    if (tableChart.value === '1') {
      isShow.value = false;
      isShow2.value = true;
    } else {
      isShow.value = true;
      isShow2.value = false;
    }
  };

  const treeDataValue = (data: any) => {
    console.log(data);
  };
  onMounted(() => {
    const myChart = echarts.init(document.getElementById('myChart'), null, {
      height: 500,
      width: 1400,
    });

    const myChartOptions = {
      title: {},
      tooltip: {
        trigger: 'axis',
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C',
        },
      },
      series: [
        {
          name: 'Highest',
          type: 'line',
          data: [10, 11, 13, 11, 12, 12, 9],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' },
            ],
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }],
          },
        },
        {
          name: 'Lowest',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }],
          },
          markLine: {
            data: [
              { type: 'average', name: 'Avg' },
              [
                {
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max',
                },
                {
                  symbol: 'circle',
                  label: {
                    position: 'start',
                    formatter: 'Max',
                  },
                  type: 'max',
                  name: '最高点',
                },
              ],
            ],
          },
        },
      ],
    };

    myChart.setOption(myChartOptions);
    window.addEventListener('resize', () => {
      myChart.resize();
    });
  });

  const columns = [
    {
      title: '时间',
      dataIndex: 'date',
    },
    {
      title: '高压电流',
      dataIndex: 'a',
    },
    {
      title: '低压电流',
      dataIndex: 'b',
    },
    {
      title: '高压电',
      dataIndex: 'c',
    },
  ];

  const data = reactive([
    {
      date: '2023-11-23',
      a: '12.03',
      b: '23',
      c: '432',
    },
  ]);
</script>

<style scoped>
  .container {
    padding: 5px;
    color: var(--color-text-2);
  }

  .arco-tag-checked {
    padding: 10px 20px !important;
    color: #6c7fff;
    background-color: #6c7fff !important;
  }

  .arco-tag-checked:hover {
    padding: 20px !important;
    color: black !important;
    background-color: #6c7fff;
  }

  .arco-tag {
    width: 100%;
    padding: 14px 16px !important;
    background-color: #33404c;
    margin-left: 10px;
  }

  .arco-tag:hover {
    width: 100%;
    padding: 14px 16px !important;
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
