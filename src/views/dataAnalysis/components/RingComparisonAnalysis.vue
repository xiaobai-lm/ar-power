<template>
  <div class="container">
    <a-row>
      <a-col :span="4">
        <checkboxIndex />
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

        <a-select
          v-model="averageValue"
          style="width: 100px; margin-left: 10px"
        >
          <a-option value="1">平均值</a-option>
          <a-option value="2">最大值</a-option>
          <a-option value="3">最小值</a-option>
          <a-option value="4">累计值</a-option>
        </a-select>
        <a-button style="margin-left: 10px">查询</a-button>
        <div id="myChart" style="margin-top: 10px"></div>
        <!-- <a-table v-show="isShow2" :columns="columns" :data="data" style="margin-top: 10px;"
            :bordered="{ wrapper: true, cell: true }">
        </a-table> -->
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import checkboxIndex from '@/components/leftSide/checkboxIndex.vue';
  import * as echarts from 'echarts';

  const rangeValue = ref([Date.now(), Date.now()]);
  const DateValue = ref('1');
  const averageValue = ref('1');
  // const isShow2 = ref(false)
  const DateValueChange = () => {
    console.log('aa');
  };

  // const columns = [
  //     {
  //         title:"名字",
  //         dataIndex:"name",
  //     },
  // ]

  // const data = reactive([
  //     {
  //         name:"123",
  //     },
  // ])

  onMounted(() => {
    const myChart = echarts.init(document.getElementById('myChart'), null, {
      height: 500,
      width: 1400,
    });

    const myChartOptions = {
      legend: {
        data: ['本期', '上期'],
        textStyle: {
          color: 'var(--color-text-2)',
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      yAxis: {
        type: 'value',
      },

      series: [
        {
          name: '本期',
          data: [820, 932, 3901, 934, 1290, 1330, 1320],
          type: 'line',
          areaStyle: {},
        },
        {
          name: '上期',
          data: [2820, 2932, 2901, 2934, 1290, 4330, 1320],
          type: 'line',
          areaStyle: {},
        },
      ],
    };

    myChart.setOption(myChartOptions);
    window.addEventListener('resize', () => {
      myChart.resize();
    });
  });
</script>

<style scoped>
  .container {
    padding: 10px;
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
