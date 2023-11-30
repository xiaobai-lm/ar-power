<script setup lang="ts">
  import * as echarts from 'echarts';
  import { ref, onMounted } from 'vue';

  const chart = ref();

  const xDay: any = [
    '00:00',
    '00:15',
    '00:30',
    '00:45',
    '01:00',
    '01:15',
    '01:30',
    '01:45',
    '02:00',
    '02:15',
    '02:30',
    '02:45',
    '03:00',
    '03:15',
    '03:30',
    '03:45',
    '04:00',
    '04:15',
    '04:30',
    '04:45',
    '05:00',
    '05:15',
    '05:30',
    '05:45',
    '06:00',
    '06:15',
    '06:30',
    '06:45',
    '07:00',
    '07:15',
    '07:30',
    '07:45',
    '08:00',
    '08:15',
    '08:30',
    '08:45',
    '09:00',
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
    '10:30',
    '10:45',
    '11:00',
    '11:15',
    '11:30',
    '11:45',
    '12:00',
    '12:15',
    '12:30',
    '12:45',
    '13:00',
    '13:15',
    '13:30',
    '13:45',
    '14:00',
    '14:15',
    '14:30',
    '14:45',
    '15:00',
    '15:15',
    '15:30',
    '15:45',
    '16:00',
    '16:15',
    '16:30',
    '16:45',
    '17:00',
    '17:15',
    '17:30',
    '17:45',
    '18:00',
    '18:15',
    '18:30',
    '18:45',
    '19:00',
    '19:15',
    '19:30',
    '19:45',
    '20:00',
    '20:15',
    '20:30',
    '20:45',
    '21:00',
    '21:15',
    '21:30',
    '21:45',
    '22:00',
    '22:15',
    '22:30',
    '22:45',
    '23:00',
    '23:15',
    '23:30',
    '23:45',
  ];
  const data: any = [];

  onMounted(() => {
    for (let i = 1; i <= xDay.length; i += 1) {
      data.push(Math.round(Math.random() * 4000));
    }
    const myChart = echarts.init(chart.value);
    const option = {
      xAxis: {
        type: 'category',
        data: xDay,
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        height: '90%',
        width: '93%',
        top: '5%',
        left: '5%',
      },
      series: {
        name: '实际用能',
        type: 'line',
        smooth: true,
        data,
      },
    };
    myChart.setOption(option);
  });
</script>

<template>
  <div class="overview"
    ><div
      ><a-space><span>年度:</span><a-date-picker></a-date-picker></a-space
    ></div>
    <div class="content">
      <a-row class="grid-demo">
        <a-col :span="8">
          <a-row class="grid-demo" style="margin-bottom: 22px">
            <a-col :span="12"
              ><div
                style="
                  border: #45549a solid;
                  margin-right: 10px;
                  background-color: #45549a;
                  border-radius: 8px;
                  height: 150px;
                  padding: 0 20px;
                "
                ><a-typography-title :heading="5" style="color: #c7c6c6">
                  累计申报站点数 </a-typography-title
                ><a-typography-title
                  :heading="2"
                  style="display: inline; color: #c7c6c6"
                  >3</a-typography-title
                ><span>个</span></div
              ></a-col
            >
            <a-col :span="12"
              ><div
                style="
                  border: #232324 solid;
                  border-radius: 8px;
                  margin-left: 10px;
                  background-color: #232324;
                  height: 150px;
                  padding: 0 20px;
                "
                ><a-typography-title :heading="5" style="color: #c7c6c6">
                  累计申报响应负荷 </a-typography-title
                ><a-typography-title
                  :heading="2"
                  style="display: inline; color: #c7c6c6"
                  >3034</a-typography-title
                ><span>kw </span></div
              ></a-col
            >
          </a-row>
          <a-row class="grid-demo" style="margin-bottom: 22px">
            <a-col :span="12"
              ><div
                style="
                  border: #7e5f1a solid;
                  margin-right: 10px;
                  background-color: #7e5f1a;
                  border-radius: 8px;
                  height: 150px;
                  padding: 0 20px;
                "
                ><a-typography-title :heading="5" style="color: #c7c6c6">
                  累计响应负荷 </a-typography-title
                ><a-typography-title
                  :heading="2"
                  style="display: inline; color: #c7c6c6"
                  >-</a-typography-title
                ><span></span></div
            ></a-col>
            <a-col :span="12"
              ><div
                style="
                  border: #232324 solid;
                  border-radius: 8px;
                  margin-left: 10px;
                  background-color: #232324;
                  height: 150px;
                  padding: 0 20px;
                "
                ><a-typography-title :heading="5" style="color: #c7c6c6">
                  累计响应次数 </a-typography-title
                ><a-typography-title
                  :heading="2"
                  style="display: inline; color: #c7c6c6"
                  >0</a-typography-title
                ><span>次 </span></div
              ></a-col
            >
          </a-row>
          <a-row class="grid-demo" style="margin-bottom: 10px">
            <a-col :span="12"
              ><div
                style="
                  border: #277e1a solid;
                  margin-right: 10px;
                  background-color: #277e1a;
                  border-radius: 8px;
                  height: 150px;
                  padding: 0 20px;
                "
                ><a-typography-title :heading="5" style="color: #c7c6c6">
                  累计响应电量 </a-typography-title
                ><a-typography-title
                  :heading="2"
                  style="display: inline; color: #c7c6c6"
                  >-</a-typography-title
                ><span></span></div
            ></a-col>
            <a-col :span="12"
              ><div
                style="
                  border: #232324 solid;
                  border-radius: 8px;
                  margin-left: 10px;
                  background-color: #232324;
                  height: 150px;
                  padding: 0 20px;
                "
                ><a-typography-title :heading="5" style="color: #c7c6c6">
                  累计补贴金额 </a-typography-title
                ><a-typography-title
                  :heading="2"
                  style="display: inline; color: #c7c6c6"
                  >-</a-typography-title
                ><span> </span></div
            ></a-col>
          </a-row>
        </a-col>
        <a-col :span="16">
          <div style="margin-left: 10px; background-color: #232324">
            <div
              style="
                height: 40px;
                line-height: 35px;
                font-size: large;
                background-color: #343435;
              "
              ><span>负荷曲线</span></div
            >
            <div ref="chart" style="width: 100%; height: 450px"></div>
          </div>
        </a-col> </a-row
    ></div>
    <div class="content1">
      <a-row class="grid-demo" :gutter="24">
        <a-col :span="6">
          <div
            ><div class="footer"><span>不同负荷申报站点数占比</span></div></div
          >
        </a-col>
        <a-col :span="6">
          <div
            ><div class="footer"><span>不同负荷响应负荷占比 </span></div></div
          >
        </a-col>
        <a-col :span="6">
          <div
            ><div class="footer"><span>不同行业响应负荷占比</span></div></div
          >
        </a-col>
        <a-col :span="6">
          <div
            ><div class="footer"><span>不同区域响应负荷占比</span></div></div
          >
        </a-col>
      </a-row></div
    >
  </div>
</template>

<style scoped lang="less">
  .overview {
    margin: 15px;
    color: #c7c6c6;
    .content {
      height: 500px;
      width: 100%;
      margin-top: 15px;
    }
    .content1 {
      height: 500px;
      width: 100%;
      margin-top: 15px;
      .grid-demo .arco-col {
        height: 48px;
        color: var(--color-white);
      }
      .grid-demo .arco-col > div {
        display: flex;
        //align-items: center;
        //justify-content: center;
        height: 500px;
        background-color: #232324;
        .footer {
          font-size: large;
          height: 40px;
          width: 100%;
          background-color: #343435;
          line-height: 40px;
          span {
            margin-left: 50px;
          }
        }
      }
    }
  }
</style>
