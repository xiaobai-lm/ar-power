<template>
  <div class="container">
    <div class="container-header">
      <a-radio-group default-value="1">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>日</a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>月</a-tag>
          </template>
        </a-radio>
        <a-radio value="3">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>年</a-tag>
          </template>
        </a-radio>
      </a-radio-group>
      <a-select
        :default-value="defaultValue"
        :style="{ width: '100px', marginLeft: '20px' }"
        allow-search
        placeholder="Please select ..."
      >
        <a-option>平均值</a-option>
        <a-option>最小值</a-option>
        <a-option>最大值</a-option>
        <a-option>累计值</a-option>
      </a-select>
      <a-date-picker v-model="value" style="width: 140px; margin-left: 20px" />
    </div>
    <div class="container-body">
      <a-row>
        <a-col :span="12">
          <div id="firstChart"></div>
        </a-col>
        <a-col :span="12">
          <div id="secondChart"></div>
        </a-col>
        <a-col :span="12">
          <div id="thirdChart"></div>
        </a-col>
        <a-col :span="12">
          <div id="fourthChart"></div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts';

  const defaultValue = ref('平均值');
  const value = Date.now();
  onMounted(() => {
    setTimeout(() => {
      const firstChart = echarts.init(
        document.getElementById('firstChart'),
        null,
        {
          height: 400,
        }
      );
      firstChart.setOption({
        title: {
          text: '1#变 电量柱状图',
          textStyle: {
            color: 'white',
          },
        },
        tooltip: {
          trigger: 'axis',
        },

        xAxis: {
          // axisLabel: {
          //   formatter: (values, index) => {
          //     const data = new Date(values);
          //     const hours = data.getHours();
          //     return hours;
          //   },
          // },
          type: 'category',
          boundaryGap: true,
          data: [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
          ],
        },
        yAxis: {
          type: 'value',
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        legend: {
          data: ['Email'],
          textStyle: {
            color: 'white',
          },
          bottom: '0',
        },
        series: [
          {
            name: 'Email',
            data: [20, 30, 40, 50, 60, 70, 80, 90, 100],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
            markArea: {
              data: [
                [
                  {
                    name: 'Morning Peak',
                    xAxis: '1',
                    yAxis: '0',
                    itemStyle: {
                      color: 'rgba(255, 173, 177, 0.4)',
                    },
                  },
                  {
                    xAxis: '4',
                    yAxis: '300',
                  },
                ],
                [
                  {
                    name: 'Evening Peak',
                    xAxis: '4',
                    itemStyle: {
                      color: 'rgba(25, 173, 177, 0.4)',
                    },
                  },
                  {
                    xAxis: '11',
                  },
                ],
                [
                  {
                    name: 'Evening Peak',
                    xAxis: '11',
                    itemStyle: {
                      color: 'rgba(255, 23, 177, 0.4)',
                    },
                  },
                  {
                    xAxis: '16',
                  },
                ],
                [
                  {
                    name: 'Evening Peak',
                    xAxis: '16',
                    color: 'rgba(123,23, 107, 0.4)',
                  },
                  {
                    xAxis: '23',
                  },
                ],
              ],
            },
            type: 'line',
            smooth: true,
          },
        ],
      });

      // 第二
      const secondChart = echarts.init(
        document.getElementById('secondChart'),
        null,
        {
          height: 400,
        }
      );
      const secondChartData = {
        title: {
          text: '1#变 电量柱状图',
          textStyle: {
            color: 'white',
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads'],
          textStyle: {
            color: 'white',
          },
          bottom: '0',
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
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
            type: 'line',
            smooth: true,
          },
          {
            name: 'Union Ads',
            data: [1820, 1932, 1901, 1934, 1390, 1430, 1880],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
            type: 'line',
            smooth: true,
          },
          {
            name: 'Video Ads',
            data: [2820, 2932, 2901, 2934, 2290, 2330, 2320],
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
            type: 'line',
            smooth: true,
          },
        ],
      };
      secondChart.setOption(secondChartData);

      // 第三

      const thirdChart = echarts.init(
        document.getElementById('thirdChart'),
        null,
        {
          height: 400,
        }
      );
      const thirdChartData = {
        title: {
          text: '1#变 电量柱状图',
          textStyle: {
            color: 'white',
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Uab(kV)', 'Ubc(kV)', 'Uca(kV)'],
          textStyle: {
            color: 'white',
          },
          bottom: '0',
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Uab(kV)',
            data: [10, 10, 10, 10, 10, 10, 10],
            type: 'line',
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
            smooth: true,
          },
          {
            name: 'Ubc(kV)',
            data: [11, 11, 11, 11, 11, 11, 11],
            type: 'line',
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
            smooth: true,
          },
          {
            name: 'Uca(kV)',
            data: [13, 13, 13, 13, 13, 13, 13],
            type: 'line',
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
            smooth: true,
          },
        ],
      };
      thirdChart.setOption(thirdChartData);

      // 第四

      const fourthChart = echarts.init(
        document.getElementById('fourthChart'),
        null,
        {
          height: 400,
        }
      );
      const fourthChartData = {
        title: {
          text: '1#变 电量柱状图',
          textStyle: {
            color: 'white',
          },
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Ta(°C)', 'Tb(°C)', 'Tc(°C)'],
          textStyle: {
            color: 'white',
          },
          bottom: '0',
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Ta(°C)',
            data: [10, 10, 10, 10],
            type: 'line',
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
            smooth: true,
          },
          {
            name: 'Tb(°C)',
            data: [11, 11, 11, 11, 11],
            type: 'line',
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
            smooth: true,
          },
          {
            name: 'Tc(°C)',
            data: [10.5, 10.5, 10.5, 10.5],
            type: 'line',
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
            smooth: true,
          },
        ],
      };
      fourthChart.setOption(fourthChartData);
    }, 10);
  });
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;

    &-body {
      height: 100%;
    }
  }

  #firstChart {
    height: 100%;
  }

  // 单选框
  .arco-tag-size-medium {
    padding: 14px;
  }

  .arco-tag-checked {
    background-color: #6c7fff;
  }

  .arco-tag-size-medium:hover {
    color: #6c7fff;
    background-color: #1b2834;
  }

  .arco-tag-checkable.arco-tag-checked:hover {
    color: #1b2834;
    background-color: #6c7fff;
  }
</style>
