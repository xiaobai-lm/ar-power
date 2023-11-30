<script lang="ts" setup>
  import * as echarts from 'echarts';
  import { ref, onMounted } from 'vue';

  const chart = ref();
  onMounted(() => {
    const myChart = echarts.init(chart.value);
    let base = +new Date(2023, 9, 3);
    const oneDay = 24 * 3600 * 1000;
    const date = [];
    const data = [Math.random() * 300];
    const data1 = [Math.random() * 300];
    for (let i = 1; i < 500; i += 1) {
      const now = new Date((base += oneDay));
      date.push(
        [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
      );
      data.push(
        Math.round(Math.random() * 500) + Math.round(Math.random() * 1000)
      );
      data1.push(
        Math.round(Math.random() * 400) + Math.round(Math.random() * 1200)
      );
    }
    const option = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        height: '85%',
        width: '90%',
        bottom: '10%',
        left: '4%',
      },
      legend: { data: ['预测负荷', '实际负荷'], textStyle: { color: 'white' } },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
      },
      yAxis: {
        type: 'value',
        boundaryGap: false,
        max: '1500',
      },
      dataZoom: [
        {
          show: true,
          type: 'inside',
          start: 0,
          end: 50,
        },
        {
          type: 'slider',
          start: 0,
          end: 10,
        },
      ],
      series: [
        {
          name: '预测负荷',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(255, 70, 131)',
          },
          data,
          markPoint: { data: [{ type: 'max' }, { type: 'min' }] },
        },
        {
          name: '实际负荷',
          type: 'line',
          symbol: 'none',
          sampling: 'lttb',
          itemStyle: {
            color: 'rgb(64,213,213)',
          },
          data: data1,
        },
      ],
    };
    myChart.setOption(option);
  });
</script>

<template>
  <div class="forecast">
    <div class="top">
      <a-tabs :justify="true" class="change" default-active-key="1" type="card">
        <a-tab-pane key="1" title="负荷预测">
          <div class="item1">
            <div class="search">
              <a-space size="medium">
                <div>
                  月份:
                  <a-date-picker />
                </div>
                <a-button type="primary"> 查询</a-button>
                <span>上次预测时间: 2023-11-08 09:10:55</span>
                <a-divider direction="vertical"></a-divider>
                <span>状态:</span>
                <span style="color: #08b762">成功</span>
                <a-button type="secondary" class="button">重新预测</a-button>
              </a-space>
            </div>
            <div ref="chart" style="width: 100%; height: 900px"></div>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" title="用电预测">
          <div class="item1">
            <div class="search">
              <a-space size="medium">
                <div>
                  月份:
                  <a-date-picker />
                </div>
                <a-button type="primary"> 查询</a-button>

                <a-radio-group
                  type="button"
                  style="margin-left: 650px"
                  default-value="line"
                >
                  <a-radio value="line">总</a-radio>
                  <a-radio value="heatmap">尖峰</a-radio>
                  <a-radio value="峰">峰</a-radio>
                  <a-radio value="平">平</a-radio>
                  <a-radio value="谷">谷</a-radio>
                  <a-radio value="深谷">深谷</a-radio>
                </a-radio-group>
              </a-space>
            </div>
          </div>
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .forecast {
    background-color: #232324;
    width: 97%;
    height: 1000px;
    margin: 10px 20px;

    .top {
      width: 100%;
      background-color: #343435;
      height: 34px;

      .change {
        //border: #08b762 solid;
        height: 1000px;
        //background-color: red;
        .item1 {
          height: 1000px;
          //border: #05d4ce solid;
          //background-color: #05d4ce;
          .search {
            margin-left: 15px;
            width: 100%;
            height: 35px;
            color: #adaaaa;
            //border: #4a69b7 solid;
            .button {
              position: relative;
              left: 450px;
            }
          }
        }
      }
    }
  }
</style>
