<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';

  const chart = ref();

  onMounted(() => {
    const myChart = echarts.init(chart.value);
    const option = {
      xAxis: {
        type: 'category',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 16, 19, 21, 32, 34],
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        height: '85%',
        width: '93%',
        top: '5%',
        left: '5%',
      },
      legend: {
        type: 'plain',
        show: true,
        textStyle: {
          color: 'white',
          fontSize: 16,
        },
        bottom: '10px',
      },
      series: {
        name: '实际用能',
        type: 'bar',
        smooth: true,
        data: [1, 2, 3, 8, 15, 16, 15, 3, 2, 11, 13, 14, 16, 19, 21, 32, 34],
      },
    };
    myChart.setOption(option);
  });
</script>

<template>
  <div
    ref="chart"
    style="
      width: 100%;
      height: 610px;
      margin-top: 10px;
      background-color: #232323;
    "
  ></div>
</template>

<style scoped lang="less"></style>
