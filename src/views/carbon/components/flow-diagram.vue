<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';

  const chart = ref();
  onMounted(() => {
    const myChart = echarts.init(chart.value);
    const option = {
      title: {
        text: '碳排放量',
        left: '48%',
        top: '2%',
        textStyle: { color: '#c7c6c6' },
      },
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {
            title: '保存为图片',
          },
        },
      },
      series: {
        type: 'sankey',
        layout: 'none',
        emphasis: {
          focus: 'adjacency',
        },
        data: [
          {
            name: '加德股份',
          },
          {
            name: '产业园',
          },
          {
            name: '科技园',
          },
          {
            name: '总进线',
          },
          {
            name: '总进线1',
          },
          {
            name: '热力',
          },
          {
            name: '电力',
          },
          {
            name: '热力1',
          },
          {
            name: '电力1',
          },
        ],
        links: [
          {
            source: '加德股份',
            target: '产业园',
            value: 9,
          },

          {
            source: '加德股份',
            target: '科技园',
            value: 6,
          },
          {
            source: '产业园',
            target: '总进线',
            value: 9,
          },
          {
            source: '总进线',
            target: '热力',
            value: 3,
          },
          {
            source: '科技园',
            target: '总进线1',
            value: 6,
          },
          {
            source: '总进线',
            target: '电力',
            value: 6,
          },
          {
            source: '总进线1',
            target: '热力1',
            value: 2,
          },
          {
            source: '总进线1',
            target: '电力1',
            value: 4,
          },
        ],
        height: '90%',
        width: '85%',
        left: '2%',
      },
    };
    myChart.setOption(option);
  });
</script>

<template>
  <div class="diagram"
    ><div
      ><a-space
        ><a-radio-group type="button" default-value="Beijing">
          <a-radio value="Beijing">月</a-radio>
          <a-radio value="Shanghai">年</a-radio> </a-radio-group
        ><a-range-picker
          style="width: 300px"
          shortcuts-position="right"
        /><a-button type="primary"
          ><icon-search style="margin-right: 10px" />查询</a-button
        ><span>显示数据:</span
        ><a-checkbox-group>
          <a-checkbox value="1">数值</a-checkbox>
          <a-checkbox value="2">占比</a-checkbox>
        </a-checkbox-group></a-space
      ></div
    ><div class="content">
      <div ref="chart" style="height: 100%; width: 100%"></div> </div
  ></div>
</template>

<style scoped lang="less">
  .diagram {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    .content {
      background-color: #232323;
      height: 700px;
      margin-top: 10px;
    }
  }
</style>
