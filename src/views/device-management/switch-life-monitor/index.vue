<script setup lang="ts">
  import * as echarts from 'echarts';
  import { ref, onMounted } from 'vue';

  const chart = ref();
  const scroll = {
    x: 2000,
    y: 200,
  };
  const data = [
    {
      device: '设备1',
      temperature: 30,
      humidity: 40,
      battery: 50,
      Cg: '厂家/型号',
      1: '满容量开断',
      2: '电气开断',
      3: '电气开断',
      4: '电气开断',
      5: '100',
      6: '10',
      7: '0.5',
      8: '100%',
      9: '96.7%',
      10: '100%',
      11: '25',
      12: '41.2%',
    },
    {
      device: '设备1',
      temperature: 30,
      humidity: 40,
      battery: 50,
      Cg: '厂家/型号',
      1: '满容量开断',
      2: '电气开断',
      3: '电气开断',
      4: '电气开断',
      5: '100',
      6: '10',
      7: '0.5',
      8: '100%',
      9: '96.7%',
      10: '100%',
      11: '25',
      12: '41.2%',
    },
    {
      device: '设备1',
      temperature: 30,
      humidity: 40,
      battery: 50,
      Cg: '厂家/型号',
      1: '满容量开断',
      2: '电气开断',
      3: '电气开断',
      4: '电气开断',
      5: '100',
      6: '10',
      7: '0.5',
      8: '100%',
      9: '96.7%',
      10: '100%',
      11: '25',
      12: '41.2%',
    },
    {
      device: '设备1',
      temperature: 30,
      humidity: 40,
      battery: 50,
      Cg: '厂家/型号',
      1: '满容量开断',
      2: '电气开断',
      3: '电气开断',
      4: '电气开断',
      5: '100',
      6: '10',
      7: '0.5',
      8: '100%',
      9: '96.7%',
      10: '100%',
      11: '25',
      12: '41.2%',
    },
    {
      device: '设备1',
      temperature: 30,
      humidity: 40,
      battery: 50,
      Cg: '厂家/型号',
      1: '满容量开断',
      2: '电气开断',
      3: '电气开断',
      4: '电气开断',
      5: '100',
      6: '10',
      7: '0.5',
      8: '100%',
      9: '96.7%',
      10: '100%',
      11: '25',
      12: '41.2%',
    },
    {
      device: '设备1',
      temperature: 30,
      humidity: 40,
      battery: 50,
      Cg: '厂家/型号',
      1: '满容量开断',
      2: '电气开断',
      3: '电气开断',
      4: '电气开断',
      5: '100',
      6: '10',
      7: '0.5',
      8: '100%',
      9: '96.7%',
      10: '100%',
      11: '25',
      12: '41.2%',
    },
    {
      device: '设备1',
      temperature: 30,
      humidity: 40,
      battery: 50,
      Cg: '厂家/型号',
      1: '满容量开断',
      2: '电气开断',
      3: '电气开断',
      4: '电气开断',
      5: '100',
      6: '10',
      7: '0.5',
      8: '100%',
      9: '96.7%',
      10: '100%',
      11: '25',
      12: '41.2%',
    },
  ];
  const grades = [
    {
      grade: '优秀',
      colorX: '#1db107',
    },
    {
      grade: '良好',
      colorX: '#0789b1',
    },
    {
      grade: '中等',
      colorX: '#b0b61d',
    },
    {
      grade: '及格',
      colorX: '#c97613',
    },
    {
      grade: '不及格',
      colorX: '#9e1c1c',
    },
  ];
  const columns = [
    {
      title: '设备',
      dataIndex: 'device',
      key: 'device',
    },
    {
      title: '投运日期',
      dataIndex: 'temperature',
      key: 'temperature',
    },
    {
      title: '使用寿命',
      dataIndex: 'humidity',
      key: 'humidity',
    },
    {
      title: '生产时间',
      dataIndex: 'battery',
      key: 'battery',
    },
    {
      title: '厂家/型号',
      dataIndex: 'Cg',
    },
    {
      title: '额定次数',
      children: [
        {
          title: '满容量开断',
          dataIndex: '1',
        },
        {
          title: '电气开断',
          dataIndex: '2',
        },
        {
          title: '跳闸',
          dataIndex: '3',
        },
      ],
    },
    {
      title: '运行次数',
      children: [
        {
          title: '满容量开断',
          dataIndex: '4',
        },
        {
          title: '电气开断',
          dataIndex: '5',
        },
        {
          title: '跳闸',
          dataIndex: '6',
        },
      ],
    },
    {
      title: '剩余能力',
      children: [
        {
          title: '保养系数',
          dataIndex: '10',
        },
        {
          title: '满容量开断',
          dataIndex: '7',
        },
        {
          title: '电气开断',
          dataIndex: '8',
        },
        {
          title: '跳闸',
          dataIndex: '9',
        },
        {
          title: '剩余年限',
          dataIndex: '11',
        },
        {
          title: '合计',
          dataIndex: '12',
        },
      ],
    },
  ];
  onMounted(() => {
    const myChart = echarts.init(chart.value);
    const option = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          max: 6,
          splitNumber: 1,
          axisTick: {
            show: false,
          },
          itemStyle: {
            color: '#58D9F9',
            shadowColor: 'rgba(0,138,255,0.45)',
            shadowBlur: 20,
            shadowOffsetX: 2,
            shadowOffsetY: 2,
          },
          progress: {
            show: true,
            roundCap: true,
            width: 18,
          },
          pointer: {
            show: false,
            icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
            length: '75%',
            width: 16,
            offsetCenter: [0, '5%'],
          },
          data: [
            {
              value: 5,
              name: '设备数',
            },
          ],
          detail: {
            formatter: '{value}',
            show: true,
            fontWeight: '550',
            color: '#8b8686',

            offsetCenter: ['0', '-11%'],
          },
          title: {
            show: true,
            offsetCenter: ['0', '21%'],
            color: '#f5f1f1',
          },
        },
      ],

      radius: '100%',
    };
    myChart.setOption(option);
  });
</script>

<template>
  <div class="switch">
    <div class="top"
      ><a-input-search
        style="width: 200px; float: left"
        placeholder="请输入搜索内容"
      /><a-button type="text" style="float: right">
        <icon-info-circle />等级划分标准</a-button
      ></div
    ><div class="content"
      ><a-row :gutter="10"
        ><a-col :span="10"
          ><div class="bcgColor content-H"
            ><span style="position: absolute; top: 5%; left: 5%">型号统计</span>
            <div class="device">
              <div style="width: 120px"
                ><div style="color: #0ad2a0">YYYY-1MN</div>
                <div style="width: 100%"
                  ><p style="margin-bottom: -8px">5</p
                  ><a-progress
                    :percent="0.8"
                    style="margin-top: 0"
                    color="#0ad2a0" /></div></div
              ><div style="width: 120px; margin-left: 20px"
                ><div style="color: #0a93d2">XXAB-YY</div>
                <div style="width: 100%"
                  ><p style="margin-bottom: -8px">1</p
                  ><a-progress
                    :percent="0.8"
                    style="margin-top: 0"
                    color="#0a93d2" /></div
              ></div>
            </div>
            <div
              ref="chart"
              style="height: 250px; width: 250px"
            ></div></div></a-col
        ><a-col :span="14"
          ><div class="bcgColor content-H"
            ><span style="position: absolute; top: 5%; left: 5%"
              >剩余能力统计<icon-info-circle /></span
            ><div style="width: 94%; margin-left: 3%"
              ><a-progress
                :percent="1"
                style="margin-top: 50px"
                :stroke-width="20"
                status="warning"
                :show-text="false"
            /></div>
            <div
              style="width: 94%; margin-left: 3%; margin-top: 2%; display: flex"
            >
              <div
                v-for="(grade, index) in grades"
                :key="index"
                style="margin-right: 30px"
              >
                <div>{{ grade.grade }}</div>
                <div style="width: 116px"
                  ><p style="margin-bottom: -30%; margin-top: 18%">0</p
                  ><a-progress
                    :percent="1"
                    style="margin-top: 50px"
                    :color="grade.colorX"
                    status="warning"
                    :show-text="false"
                /></div> </div
            ></div> </div></a-col></a-row
    ></div>
    <div class="table bcgColor"
      ><div class="tableT"
        ><a-table
          :columns="columns"
          :bordered="{ cell: true, wrapper: true }"
          :scroll="scroll"
          :data="data"
          size="mini"
        ></a-table></div
    ></div>
  </div>
</template>

<style scoped lang="less">
  .switch {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    .top {
      width: 100%;
      height: 35px;
      line-height: 35px;
    }
    .content {
      margin-top: 5px;
      .content-H {
        height: 200px;
        position: relative;
        .device {
          display: flex;
          position: absolute;
          left: 45%;
          top: 20%;
        }
      }
    }
    .table {
      margin-top: 5px;
      width: 100%;
      .tableT {
        width: 98%;
        padding: 10px 0;
        margin-left: 1%;
      }
    }
  }
  .bcgColor {
    background-color: #232323;
  }
</style>
