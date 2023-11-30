<script setup lang="ts">
  import * as echarts from 'echarts';
  import { ref, onMounted, reactive } from 'vue';

  const chart = ref();
  const chartX = ref();
  const typeGraphics = ref('heatmap');
  const columns = [
    {
      title: '日期',
      dataIndex: 'dateTime',
      width: 75,
    },
    {
      title: '最大需量（KM）',
      dataIndex: 'num',
    },
    {
      title: '时间',
      dataIndex: 'time',
    },
  ];
  const dataX: any = reactive([]);

  const dataFirst: any = ref('');
  const dataLast: any = ref('');
  const list: any = {
    dateTime: '',
    num: '',
    time: '',
  };
  let myChart: any;
  // 热力图和曲线图切换
  const changeGraphics = () => {
    const hours = [
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
    const date = new Date();
    const month = date.getMonth() + 1; // 月份从0开始获取，所以需要加1
    const year = date.getFullYear();

    const d = new Date(year, month, 0);
    const days1 = d.getDate(); // 获取当前月的总天数days
    console.log(days1, month);
    dataFirst.value = `${year}-${month}-01`;
    dataLast.value = `${year}-${month}-${days1}`;
    // prettier-ignore
    const days:any = [];
    for (let i = 1; i <= days1; i += 1) {
      const str = `${month} - ${i}`;
      days.push(str);
      list.dateTime = str;
    }

    const data1 = [];
    for (let j = 0; j < days1; j += 1) {
      for (let i = 0; i < 96; i += 1) {
        data1.push([j, i, Math.round(Math.random() * 100)]);
      }
    }
    // prettier-ignore
    const data = data1.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });
    const options = {
      tooltip: {
        position: 'top',
      },
      grid: {
        height: '72%',
        width: '93%',
        top: '7%',
        left: '5%',
      },
      xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
          show: true,
        },
      },
      yAxis: {
        type: 'category',
        data: days,
        splitArea: {
          show: true,
        },
      },
      visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '5%',
        textStyle: {
          color: 'white',
        },
      },
      series: [
        {
          name: 'Punch Card',
          type: typeGraphics.value,
          data,
          label: {
            show: false,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    const option = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        show: false,
      },
      grid: {
        height: '72%',
        width: '93%',
        top: '17%',
        left: '5%',
        containLabel: true,
      },
      toolbox: {
        feature: {
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
      },
      series: [
        {
          name: 'Email',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'Union Ads',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'Video Ads',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: 'Direct',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: 'Search Engine',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    };
    myChart.clear();
    if (typeGraphics.value === 'line') {
      myChart.setOption(option);
    } else {
      myChart.setOption(options);
    }
  };

  onMounted(() => {
    myChart = echarts.init(chart.value);
    const myChartX = echarts.init(chartX.value);
    const hours = [
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
    const date = new Date();
    const month = date.getMonth() + 1; // 月份从0开始获取，所以需要加1
    const year = date.getFullYear();

    const d = new Date(year, month, 0);
    const days1 = d.getDate(); // 获取当前月的总天数days
    console.log(days1, month);
    dataFirst.value = `${year}-${month}-01`;
    dataLast.value = `${year}-${month}-${days1}`;
    // prettier-ignore
    const days:any = [];
    for (let i = 1; i <= days1; i += 1) {
      const str = `${month} - ${i}`;
      days.push(str);
      list.dateTime = str;
      dataX.push(JSON.parse(JSON.stringify(list)));
    }

    const data1 = [];
    for (let j = 0; j < days1; j += 1) {
      for (let i = 0; i < 96; i += 1) {
        data1.push([j, i, Math.round(Math.random() * 100)]);
      }
    }
    // prettier-ignore
    const data = data1.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });
    const options = {
      tooltip: {
        position: 'top',
      },
      grid: {
        height: '72%',
        width: '93%',
        top: '7%',
        left: '5%',
      },
      xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
          show: true,
        },
      },
      yAxis: {
        type: 'category',
        data: days,
        splitArea: {
          show: true,
        },
      },
      visualMap: {
        min: 0,
        max: 100,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '5%',
        textStyle: {
          color: 'white',
        },
      },

      series: [
        {
          name: 'Punch Card',
          type: 'heatmap',
          data,
          label: {
            show: false,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    // 柱形图
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },

      legend: {
        textStyle: {
          color: 'white',
        },
        bottom: '0%',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: [
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
          ],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '汇总设备',
          type: 'bar',
          barWidth: 5,
          stack: 'Search Engine',
          emphasis: {
            focus: 'series',
          },
          data: [
            320, 332, 301, 334, 390, 330, 320, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
          ],
        },
        {
          name: '高压',
          type: 'bar',
          stack: 'Search Engine',
          emphasis: {
            focus: 'series',
          },
          data: [
            320, 332, 301, 334, 390, 330, 320, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
          ],
        },
        {
          name: '低压',
          type: 'bar',
          stack: 'Search Engine',
          emphasis: {
            focus: 'series',
          },
          data: [
            320, 332, 301, 394, 390, 330, 320, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
          ],
        },
        {
          name: '中央空调',
          type: 'bar',
          stack: 'Search Engine',
          emphasis: {
            focus: 'series',
          },
          data: [
            320, 132, 301, 334, 390, 330, 320, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
          ],
        },
        {
          name: '配电箱',
          type: 'bar',
          stack: 'Search Engine',
          emphasis: {
            focus: 'series',
          },
          data: [
            320, 132, 301, 334, 390, 330, 320, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
          ],
        },
        {
          name: '新系统设备',
          type: 'bar',
          stack: 'Search Engine',
          emphasis: {
            focus: 'series',
          },
          data: [
            320, 132, 301, 334, 390, 330, 320, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
            120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210,
          ],
        },
      ],
    };
    myChart.setOption(options);
    myChartX.setOption(option);
    myChart.resize();
  });
</script>

<template>
  <div class="all">
    <!--  头部选择框 -->
    <div>
      <a-space size="medium">
        支路 :
        <a-select> </a-select>
        月份 :
        <a-date-picker style="width: 180px"></a-date-picker>

        <a-radio-group>
          <a-radio style="margin-right: 15px" value="A">电费结算周期</a-radio>
          <a-radio value="B">自然月</a-radio>
        </a-radio-group>
        <a-select style="width: 120px" :options="['全部日期', '工作日']">
        </a-select>
        <a-select
          style="width: 120px"
          :options="['全部时段', '运营时段']"
        ></a-select>
        <a-button type="secondary">
          <template #icon>
            <icon-search />
          </template>
          查询
        </a-button>
      </a-space>
    </div>
    <!--  图表区-->
    <div style="width: 100%; display: flex">
      <!--    右边曲线图-->
      <div>
        <!--      热力图-->
        <div
          style="
            width: 1050px;
            position: relative;
            background-color: #232323;
            margin-top: 10px;
          "
        >
          <div
            style="
              width: 1050px;
              height: 35px;
              line-height: 35px;
              background-color: #313335;
              position: absolute;
            "
          >
            <a-space>
              <span style="font-size: large; margin-left: 10px">嘉德股份</span>
              <span>每日最大需量趋势</span>
              <span><icon-history />({{ dataFirst }}~{{ dataLast }})</span>
              <span style="font-size: small; color: #7d807d; margin-left: 450px"
                ><icon-info-circle />单击可查看日最大需量占比</span
              >
            </a-space>
          </div>
          <div ref="chart" style="width: 1050px; height: 500px"></div>
          <div
            style="
              position: absolute;
              top: 465px;
              width: 1050px;
              height: 35px;
              text-align: center;
              line-height: 35px;
            "
          >
            <span>削峰填谷后最大需量为125KW，可节省约3452.4元</span>
            <a-radio-group
              v-model="typeGraphics"
              type="button"
              style="float: right"
              @change="changeGraphics"
            >
              <a-radio value="line">曲线</a-radio>
              <a-radio value="heatmap">热力图</a-radio>
            </a-radio-group></div
          >
        </div>
        <!--      最大需量图-->
        <div
          style="
            width: 1050px;
            position: relative;
            top: 10px;
            background-color: #232323;
          "
        >
          <div
            style="
              width: 1050px;
              height: 35px;
              line-height: 35px;
              background-color: #313335;
              position: absolute;
            "
          >
            <a-space>
              <span style="font-size: large; margin-left: 10px">嘉德股份</span>
              <span>每日最大需量趋势</span>
              <span><icon-history />({{ dataFirst }}~{{ dataLast }})</span>
              <span style="font-size: small; color: #7d807d; margin-left: 450px"
                ><icon-info-circle />单击可查看日最大需量占比</span
              >
            </a-space>
          </div>

          <div ref="chartX" style="width: 1050px; height: 350px"></div>
        </div>
      </div>
      <!--    左侧日期-->
      <div style="width: 100%; height: 870px; margin: 10px 0 0 5px">
        <a-table
          :columns="columns"
          :data="dataX"
          :pagination="false"
          size="mini"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
  .all {
    color: white;
    margin: 10px;
  }
</style>
