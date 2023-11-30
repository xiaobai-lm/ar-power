<template>
  <div class="container">
    <div class="container-top">
      <div>
        <span style="color: var(--color-text-2)">设备</span>
        <a-select :style="{ width: '320px' }"></a-select>
        <a-date-picker
          v-model="value"
          style="width: 320px; margin-left: 100px"
        />
      </div>
      <div>
        <a-popover position="lt" trigger="click" title="指标说明">
          <div style="color: var(--color-text-2)"
            ><icon-info-circle-fill /><span>指标说明</span></div
          >
          <template #content>
            <a-divider></a-divider>
            <p>如果有电压/电流三相不平衡度变量，直接使用该变量的数据；</p>
            <p
              >如果没有电压/电流三相不平衡度变量，电压/电流三相不平衡度=（相最大-相最小）/
              相最大</p
            >
          </template>
        </a-popover>
      </div>
    </div>
    <div class="container-card">
      <a-row :gutter="20">
        <a-col :span="12">
          <a-card title="电压不平衡度">
            <div id="myChart"></div>
            <a-divider></a-divider>
            <div id="myChartTwo"></div>
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card title="电流不平衡度">
            <div id="myChartSecond"></div>
            <a-divider></a-divider>
            <div id="myChartTwoSecond"></div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';

  const value = ref(Date.now());

  onMounted(() => {
    const myChart = echarts.init(document.getElementById('myChart'), null, {
      height: 400,
    });

    const myChartTwo = echarts.init(
      document.getElementById('myChartTwo'),
      null,
      {
        height: 400,
      }
    );

    const myChartSecond = echarts.init(
      document.getElementById('myChartSecond'),
      null,
      {
        height: 400,
      }
    );

    const myChartSecondTwo = echarts.init(
      document.getElementById('myChartTwoSecond'),
      null,
      {
        height: 400,
      }
    );

    const myChartOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        top: 'bottom',
      },
      xAxis: {
        type: 'category',
        data: [
          '00:00',
          '01:15',
          '02:30',
          '03:45',
          '05:00',
          '06:15',
          '07:30',
          '08:45',
          '10:00',
          '11:15',
          '12:30',
          '13:45',
          '15:00',
          '16:15',
          '17:30',
          '18:45',
          '20:00',
          '21:15',
          '22:30',
          '23:45',
        ],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'AA',
          type: 'line',
          smooth: true,
          // prettier-ignore
          data: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300],
          markLine: {
            silent: true,
            label: '严重三相不平衡',
            show: true,
            position: 'middle',
            lineStyle: {
              color: '#333',
            },
            data: [
              {
                yAxis: 300,
              },
            ],
          },
        },
        {
          name: 'BB',
          type: 'line',
          smooth: true,
          // prettier-ignore
          data: [1300, 1280, 1250, 1260, 1270, 1300, 1550, 1500, 1400, 1390, 1380, 1390, 1400, 1500, 1600, 1750, 1800, 1700, 1600, 1400],
        },
        {
          name: 'CC',
          type: 'line',
          smooth: true,
          // prettier-ignore
          data: [2300, 2280, 2250, 2260, 2270, 2300, 2550, 2500, 2400, 2390, 2380, 2390, 2400, 2500, 2600, 2750, 2800, 2700, 2600, 2400],
        },
      ],
    };
    const myChartOptionsTwo = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    };
    const myChartSecondOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    };
    const myChartSecondOptionsTwo = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    };

    myChart.setOption(myChartOptions);
    myChartTwo.setOption(myChartOptionsTwo);
    myChartSecond.setOption(myChartSecondOptions);
    myChartSecondTwo.setOption(myChartSecondOptionsTwo);
  });
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;

    &-top {
      display: flex;
      justify-content: space-between;
    }
  }
</style>
