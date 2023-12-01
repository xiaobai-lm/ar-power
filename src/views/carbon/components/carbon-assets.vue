<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';

  const chart = ref();
  onMounted(() => {
    const myChart = echarts.init(chart.value);
    const option = {
      xAxis: {
        type: 'category',
        data: [
          '2023-01',
          '2023-02',
          '2023-03',
          '2023-04',
          '2023-05',
          '2023-06',
          '2023-07',
          '2023-08',
          '2023-09',
          '2023-10',
          '2023-11',
          '2023-12',
        ],
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        width: '93%',
        height: '80%',
        left: '5%',
        top: '7%',
      },
      series: [
        {
          name: 'Electricity',
          type: 'line',
          data: [30, 28, 25, 26, 27, 30, 55, 50, 40, 39, 38, 39],
        },
        {
          name: 'Electricity',
          type: 'bar',
          data: [
            -300, -280, -250, -260, -270, -300, -550, -500, -400, -390, -380,
            -390,
          ],
          itemStyle: {
            borderWidth: 2.5,
            color: 'rgb(20,179,196)',
          },
        },
      ],
    };
    myChart.setOption(option);
  });
</script>

<template>
  <div class="assets"
    ><div class="top"
      ><a-row :gutter="5"
        ><a-col :span="8"
          ><div class="demo-item" style="background-color: #c41d61"
            ><div class="top-left color">碳资产总值(元)</div
            ><div class="top-left1 color size">810900</div></div
          ></a-col
        ><a-col :span="8"
          ><div class="demo-item" style="background-color: #059dd4"
            ><div class="top-left color">配额资产总值(元)</div
            ><div class="top-left1 color size">42000</div></div
          ></a-col
        ><a-col :span="8"
          ><div class="demo-item" style="background-color: #1cc470"
            ><div class="top-left color">CCER资产总值(元)</div
            ><div class="top-left1 color size">39090</div></div
          ></a-col
        ></a-row
      ></div
    ><div style="margin: 5px 0; font-size: large"
      ><span class="color">配额资产</span></div
    ><div class="top"
      ><a-grid
        :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }"
        :col-gap="5"
        class="grid-demo-grid"
      >
        <a-grid-item class="demo-item1"
          ><div class="color" style="padding-top: 20px; font-size: large"
            >年度分配配额(tCO2)</div
          ><div class="top-left1 color size">-</div></a-grid-item
        >
        <a-grid-item class="demo-item1"
          ><div class="color" style="padding-top: 20px; font-size: large"
            >年度外购配额(tCo2)</div
          ><div class="top-left1 color size">-</div></a-grid-item
        >
        <a-grid-item class="demo-item1"
          ><div class="color" style="padding-top: 20px; font-size: large"
            >年度碳排放(tCO2)</div
          ><div class="top-left1 color size">436.31</div></a-grid-item
        >
        <a-grid-item class="demo-item1"
          ><div class="color" style="padding-top: 20px; font-size: large"
            >年度剩余配额(tCO2)</div
          ><div class="top-left1 color size">-631.31</div></a-grid-item
        >
        <a-grid-item class="demo-item1"
          ><div class="color" style="padding-top: 20px; font-size: large"
            >年度剩余配额资产总值(元)</div
          ><div class="top-left1 color size">-38178.6</div></a-grid-item
        >
      </a-grid></div
    >
    <div class="chartContent"
      ><div class="chartTitle"
        ><a-space
          ><icon-public /><span style="font-size: medium"
            >碳配额月度统计</span
          ></a-space
        ></div
      ><div ref="chart" style="width: 100%; height: 265px"></div
    ></div>
    <div style="margin: 5px 0"><span class="color">CCER资产</span></div>
    <div class="top"
      ><a-grid
        :cols="{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }"
        :col-gap="5"
        class="grid-demo-grid"
      >
        <a-grid-item class="demo-item2"
          ><div class="color" style="padding-top: 15px; font-size: large"
            >年度分配配额(tCO2)</div
          ></a-grid-item
        >
        <a-grid-item class="demo-item2"
          ><div class="color" style="padding-top: 15px; font-size: large"
            >年度外购配额(tCo2)</div
          ></a-grid-item
        >
        <a-grid-item class="demo-item2"
          ><div class="color" style="padding-top: 15px; font-size: large"
            >年度碳排放(tCO2)</div
          ></a-grid-item
        >
        <a-grid-item class="demo-item2"
          ><div class="color" style="padding-top: 15px; font-size: large"
            >年度剩余配额(tCO2)</div
          ></a-grid-item
        >
        <a-grid-item class="demo-item2"
          ><div class="color" style="padding-top: 15px; font-size: large"
            >年度剩余配额资产总值(元)</div
          ></a-grid-item
        >
      </a-grid></div
    >
  </div>
</template>

<style scoped lang="less">
  .assets {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    position: relative;
    .top {
      background-color: #232323;
      padding: 10px;
      .top-left {
        padding-top: 30px;
        font-size: medium;
      }
      .top-left1 {
        padding-top: 10px;
      }
    }
    .chartContent {
      margin-top: 5px;
      background-color: #232323;
      .chartTitle {
        height: 35px;
        background-color: #343435;
        line-height: 35px;
      }
    }
  }
  .demo-item {
    text-align: center;
    height: 120px;
  }
  .demo-item1 {
    background-color: #9908c9;
    text-align: center;

    height: 100px;
  }
  .demo-item2 {
    background-color: #2890c7;
    text-align: center;

    height: 50px;
  }
  .color {
    color: white;
  }
  .size {
    font-size: 26px;
    font-weight: 600;
  }
</style>
