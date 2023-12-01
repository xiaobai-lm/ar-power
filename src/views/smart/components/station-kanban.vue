<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';

  const chart = ref();
  const chart1 = ref();
  const chart2 = ref();
  const chart3 = ref();
  const chart4 = ref();

  const columns = [
    {
      title: '时间',
      dataIndex: 'time',
    },
    {
      title: '事件',
      dataIndex: 'time',
    },
    {
      title: '设备',
      dataIndex: 'time',
    },
    {
      title: '状态',
      dataIndex: 'time',
    },
  ];

  onMounted(() => {
    const myChart = echarts.init(chart.value);
    const myCharts = echarts.init(chart1.value);
    const myChart1 = echarts.init(chart2.value);
    const myChart2 = echarts.init(chart3.value);
    const myChart3 = echarts.init(chart4.value);

    const option = {
      xAxis: {
        type: 'category',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        height: '75%',
        width: '90%',
        top: '8%',
        left: '5%',
      },
      series: {
        name: '实际用能',
        type: 'bar',
        smooth: true,
        data: [1, 2, 3, 8, 15, 16, 15, 3, 2],
      },
    };
    const optionss = {
      title: {
        text: '共计回路',
        top: '52%',
        left: '48%',
        textAlign: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        right: 'right',
        top: 'bottom',
        textStyle: {
          color: 'color',
        },
      },
      series: [
        {
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
              fontSize: 20,
              fontWeight: 'bold',
              color: 'a',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: '优秀' },
            { value: 735, name: '合格' },
            { value: 580, name: '不合格' },
          ],
        },
      ],
    };
    const option2 = {
      series: [
        {
          showEmptyCircle: true,
          type: 'pie',
          radius: ['65%', '90%'],
          center: ['50%', '50%'],
          data: [],
          label: {
            position: 'outer',
            alignTo: 'none',
            bleedMargin: 5,
          },
          left: 0,
          right: '66.6667%',
          top: 0,
          bottom: 0,
        },
        {
          type: 'pie',
          radius: ['65%', '90%'],
          center: ['50%', '50%'],
          data: [],
          label: {
            position: 'outer',
            alignTo: 'labelLine',
            bleedMargin: 5,
          },
          left: '33.3333%',
          right: '33.3333%',
          top: 0,
          bottom: 0,
        },
        {
          type: 'pie',
          radius: ['65%', '90%'],
          center: ['50%', '50%'],
          data: [],
          label: {
            position: 'outer',
            alignTo: 'edge',
            margin: 20,
          },
          left: '66.6667%',
          right: 0,
          top: 0,
          bottom: 0,
        },
      ],
    };
    myChart.setOption(option);
    myCharts.setOption(option);
    myChart1.setOption(option2);
    myChart2.setOption(optionss);
    myChart3.setOption(optionss);
  });
</script>

<template>
  <div class="station">
    <div class="top1"
      ><div style="margin: 20px 30px"
        ><div class="size">----</div
        ><div class="size" style="margin-top: 15px">装机容量:</div></div
      ></div
    >
    <div class="top1"
      ><div style="margin: 20px 30px"
        ><div class="size">114.2kW</div
        ><div class="size" style="margin-top: 15px">实时功率:</div></div
      ></div
    >
    <div class="top1"
      ><div style="margin: 20px 30px"
        ><div class="size">----</div
        ><div class="size" style="margin-top: 15px">等效利用小时:</div></div
      ></div
    >
    <div class="top1"
      ><div style="margin: 20px 30px"
        ><div class="size">----</div
        ><div class="size" style="margin-top: 15px">累计发电量:</div></div
      ></div
    >
    <div class="top2">
      <div style="font-size: 28px; padding-top: 10px; color: #08b762">100</div>
      <div style="color: #08b762; margin-top: 5px">运行优,请保持</div>
      <div style="margin-top: 10px" class="color">站点巡检评分</div>
    </div>
    <div class="top2">
      <div style="font-size: 28px; padding-top: 10px; color: #08b762"
        ><icon-tool
      /></div>
      <div style="color: #08b762; margin-top: 5px">正常</div>
      <div style="margin-top: 10px" class="color">站点故障状态</div>
    </div>
    <div class="top2">
      <div style="font-size: 28px; padding-top: 10px; color: #b70828"
        ><icon-close
      /></div>
      <div style="color: #b70828; margin-top: 5px">告警</div>
      <div style="margin-top: 10px" class="color">站点告警状态</div>
    </div>
    <div class="top3">
      <div style="margin: 15px">
        <div class="size color">今日发电量</div>
        <div style="color: #36b6f8; margin-top: 30px">——</div>
      </div>
      <a-divider style="border: #4f5050 solid 1px"></a-divider>
      <div style="margin: 15px">昨日同期 -</div>
    </div>
    <div class="top3">
      <div style="margin: 15px">
        <div class="size color">本月发电量</div>
        <div style="color: #36b6f8; margin-top: 30px">——</div>
      </div>
      <a-divider style="border: #4f5050 solid 1px"></a-divider>
      <div style="margin: 15px">上月同期 -</div>
    </div>
    <div class="top4">
      <div
        style="
          background-color: #4f504f;
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: large;
          padding-left: 20px;
        "
        class="color"
        >发电统计</div
      >
      <div ref="chart" style="width: 100%; height: 270px"></div>
    </div>
    <div class="top4">
      <div
        style="
          background-color: #4f504f;
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: large;
          padding-left: 20px;
        "
        class="color"
        >发电功率趋势</div
      >
      <div ref="chart1" style="width: 100%; height: 270px"></div>
    </div>
    <div class="top5">
      <div
        style="
          background-color: #4f504f;
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: large;
          padding-left: 20px;
        "
        class="color"
        >逆变器状态统计</div
      >
      <div ref="chart2" style="width: 100%; height: 150px"></div>
      <div style="width: 100%; margin-top: 20px; display: flex">
        <div style="text-align: center; margin-left: 30px"
          ><div class="size">0/0</div>
          <div style="font-size: 14px; margin-top: 10px">在线设备数</div></div
        >
        <div style="text-align: center; margin-left: 70px"
          ><div class="size">0/0</div>
          <div style="font-size: 14px; margin-top: 10px">在线设备数</div></div
        >
        <div style="text-align: center; margin-left: 60px"
          ><div class="size">0/0</div>
          <div style="font-size: 14px; margin-top: 10px">在线设备数</div></div
        >
      </div>
    </div>
    <div class="top6"
      ><div
        style="
          background-color: #4f504f;
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: large;
          padding-left: 20px;
        "
        class="color"
        >站点基本信息</div
      ><div style="width: 90%; margin-left: 5%; height: 270px">
        <a-space direction="vertical" fill class="top6-content">
          <div class="contentHig"
            ><span>站点名称:</span> <span>嘉德股份</span><hr
          /></div>
          <div class="contentHig"
            ><span>详细地址:</span> <span>详细地址</span><hr
          /></div>
          <div class="contentHig"
            ><span>联系方式:</span> <span>张经理/1380000000</span><hr
          /></div>
          <div class="contentHig"
            ><span>投运时间:</span> <span>2019 -07-31</span><hr
          /></div>
          <div class="contentHig"
            ><span>安全运行:</span> <span>1569 天</span><hr
          /></div> </a-space></div
    ></div>
    <div class="top7">
      <div style="width: 110px; height: 110px; border: #05d4ce solid"></div>
      <div
        ><div style="font-size: 18px; color: #0ad2a0; margin: 20px 0 0 15px"
          >环境温度</div
        ><div class="size" style="margin: 10px 15px">12.0℃</div></div
      >
    </div>
    <div class="top7">
      <div style="width: 110px; height: 110px; border: #05d4ce solid"></div>
      <div
        ><div style="font-size: 18px; color: #0ad2a0; margin: 20px 0 0 15px"
          >环境湿度:</div
        ><div class="size" style="margin: 10px 15px">71.4%RH</div></div
      >
    </div>
    <div class="top7">
      <div style="width: 110px; height: 110px; border: #05d4ce solid"></div>
      <div
        ><div style="font-size: 18px; color: #0ad2a0; margin: 20px 0 0 15px"
          >瞬时辐射:</div
        ><div class="size" style="margin: 10px 15px">-</div></div
      >
    </div>
    <div class="top7">
      <div style="width: 110px; height: 110px; border: #05d4ce solid"></div>
      <div
        ><div style="font-size: 18px; color: #0ad2a0; margin: 20px 0 0 15px"
          >背板温度:</div
        ><div class="size" style="margin: 10px 15px">7.9℃</div></div
      >
    </div>
    <div class="top7">
      <div style="width: 110px; height: 110px; border: #05d4ce solid"></div>
      <div
        ><div style="font-size: 18px; color: #0ad2a0; margin: 20px 0 0 15px"
          >风速:</div
        ><div class="size" style="margin: 10px 15px">2.0</div></div
      >
    </div>
    <div class="top7">
      <div style="width: 110px; height: 110px; border: #05d4ce solid"></div>
      <div
        ><div style="font-size: 18px; color: #0ad2a0; margin: 20px 0 0 15px"
          >日辐射总量:</div
        ><div class="size" style="margin: 10px 15px">---</div></div
      >
    </div>
    <div class="top8"
      ><div
        style="
          background-color: #4f504f;
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: large;
          padding-left: 20px;
        "
        class="color"
        >事件告警列表</div
      ><div><a-table style="height: 270px" :columns="columns"></a-table></div
    ></div>
    <div class="top9"
      ><div
        style="
          background-color: #4f504f;
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: large;
          padding-left: 20px;
        "
        class="color"
        >告警处理统计</div
      ><div ref="chart3" style="width: 100%; height: 270px"></div
    ></div>
    <div class="top9"
      ><div
        style="
          background-color: #4f504f;
          width: 100%;
          height: 40px;
          line-height: 40px;
          font-size: large;
          padding-left: 20px;
        "
        class="color"
        >告警处理统计</div
      ><div ref="chart4" style="width: 100%; height: 270px"></div
    ></div>
    <div class="top7" style="background-color: #108367">
      <div
        ><div class="size" style="margin: 20px 25px">----</div
        ><div style="font-size: 22px; margin: 20px 0 0 25px; width: 100px"
          >等效植树:</div
        ></div
      >
      <div
        style="
          width: 30px;
          height: 34px;
          border: #8dcce7 solid;
          margin: 15px 0 0 130px;
        "
      ></div>
    </div>

    <div class="top7" style="background-color: #108367">
      <div
        ><div class="size" style="margin: 20px 25px">----</div
        ><div style="font-size: 22px; margin: 20px 0 0 25px; width: 130px"
          >SO2减排量:</div
        ></div
      >
      <div
        style="
          width: 30px;
          height: 34px;
          border: #8dcce7 solid;
          margin: 15px 0 0 100px;
        "
      ></div>
    </div>
    <div class="top7" style="background-color: #108367">
      <div
        ><div class="size" style="margin: 20px 25px">----</div
        ><div style="font-size: 22px; margin: 20px 0 0 25px; width: 130px"
          >C02减排量:</div
        ></div
      >
      <div
        style="
          width: 30px;
          height: 34px;
          border: #8dcce7 solid;
          margin: 15px 0 0 100px;
        "
      ></div>
    </div>
    <div class="top7" style="background-color: #108367">
      <div
        ><div class="size" style="margin: 20px 25px">----</div
        ><div style="font-size: 22px; margin: 20px 0 0 25px; width: 130px"
          >节约标煤:</div
        ></div
      >
      <div
        style="
          width: 30px;
          height: 34px;
          border: #8dcce7 solid;
          margin: 15px 0 0 100px;
        "
      ></div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .station {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    .top1 {
      width: 311px;
      height: 110px;
      background-color: #0d0469;
      border: #0d0469 solid;
      margin-top: 5px;
    }
    .top2 {
      width: 97px;
      height: 110px;
      background-color: #232324;
      margin-top: 5px;
      text-align: center;
    }
    .top3 {
      width: 311px;
      height: 170px;
      border: #232323 solid;
      background-color: #232323;
      margin-top: 5px;
    }
    .top4 {
      width: 632px;
      height: 310px;
      margin-top: 10px;
      background-color: #232323;
    }
    .top5 {
      width: 418px;
      height: 310px;
      margin-top: 10px;
      background-color: #232323;
    }
    .top6 {
      width: 310px;
      height: 310px;
      margin-top: 10px;
      background-color: #232323;
      .top6-content {
        .contentHig {
          height: 40px;
          line-height: 40px;
          padding-left: 5px;
        }
        .contentHig:hover {
          background-color: #424141;
        }
      }
    }
    .top7 {
      margin-top: 10px;
      width: 310px;
      height: 110px;
      display: flex;
      background-color: #232323;
    }
    .top8 {
      width: 630px;
      height: 310px;
      margin-top: 10px;
      background-color: #232323;
    }
    .top9 {
      width: 310px;
      height: 310px;
      margin-top: 10px;
      background-color: #232323;
    }
  }
  .size {
    font-size: 24px;
  }

  .color {
    color: white;
  }
</style>
