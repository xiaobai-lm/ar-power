<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';

  const chartLeft = ref();
  const chartLeftItem1 = ref();
  const chartLeftItem2 = ref();
  const chart2 = ref();
  const chartRight = ref();

  onMounted(() => {
    const myChart = echarts.init(chartLeft.value);
    const myCharts = echarts.init(chartLeftItem1.value);
    const myChart1 = echarts.init(chartLeftItem2.value);
    const myChart2 = echarts.init(chart2.value);
    const myChart3 = echarts.init(chartRight.value);

    const option = {
      xAxis: {
        type: 'category',
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14, 16, 19, 21, 32, 34],
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        height: '75%',
        width: '80%',
        top: '8%',
        left: '5%',
      },
      series: {
        name: '实际用能',
        type: 'bar',
        smooth: true,
        data: [1, 2, 3, 8, 15, 16, 15, 3, 2, 11, 13, 14, 16, 19, 21, 32, 34],
      },
    };
    const option1 = {
      tooltip: {
        trigger: 'item',
      },

      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '80%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 40163, name: 'Search Engine' },
            { value: 126617, name: 'Direct' },
            { value: 39290, name: 'Email' },
            { value: 230240, name: 'Union Ads' },
          ],
        },
        {
          name: 'Access From',
          type: 'pie',
          radius: ['15%', '40%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 166780, name: '科技园' },
            { value: 269530, name: '产业园' },
          ],
        },
      ],
    };
    const option2 = {
      series: [
        {
          showEmptyCircle: true,
          type: 'pie',
          radius: ['70%', '80%'],
          center: ['80%', '60%'],
          data: [{ value: 40163, name: 'Search Engine' }],
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
          radius: ['70%', '80%'],
          center: ['50%', '60%'],
          data: [{ value: 40163, name: 'Search Engine1' }],
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
          radius: ['70%', '80%'],
          center: ['20%', '60%'],
          data: [{ value: 40163, name: 'Search Engine2' }],
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
    const option3 = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 100,
          splitNumber: 5,
          itemStyle: {
            color: '#58D9F9',
            shadowColor: 'rgba(0,138,255,0.45)',
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2,
          },
          progress: {
            show: true,
            roundCap: true,
            width: 18,
          },
          pointer: {
            icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
            length: '75%',
            width: 16,
            offsetCenter: [0, '5%'],
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 18,
            },
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 2,
              color: '#999',
            },
          },
          splitLine: {
            length: 12,
            lineStyle: {
              width: 3,
              color: '#999',
            },
          },
          axisLabel: {
            distance: 30,
            color: '#999',
            fontSize: 20,
          },
          title: {
            show: false,
          },
          detail: {
            color: 'white',
            borderColor: '#232323',

            borderWidth: 2,
            width: '30%',
            lineHeight: 40,
            height: 40,
            borderRadius: 8,
            offsetCenter: [0, '-15%'],
            valueAnimation: true,
            formatter: (value: any) => {
              return value.toFixed(0);
            },
            rich: {
              value: {
                fontSize: 50,
                fontWeight: 'bolder',
                color: '#777',
              },
              unit: {
                fontSize: 20,
                color: '#999',
                padding: [0, 0, -20, 10],
              },
            },
          },
          data: [
            {
              value: 0,
            },
          ],
          radius: '150%',
          center: ['45%', '75%'],
        },
      ],
    };
    myChart.setOption(option);
    myCharts.setOption(option1);
    myChart1.setOption(option1);
    myChart2.setOption(option2);
    myChart3.setOption(option3);
  });
</script>

<template>
  <div class="overview">
    <a-row class="grid-demo" :gutter="12">
      <a-col :span="16">
        <div>
          <div class="leftTop">
            <a-row class="grid-demo" :gutter="12">
              <a-col :span="8"
                ><div class="borderColor">
                  <div style="display: flex; position: relative; height: 90px"
                    ><a-statistic
                      title="今年累计碳排 (t)"
                      :value="436.31"
                      precision="2"
                      style="margin: 15px"
                      :value-style="{ color: '#e74d27' }"
                    /><div
                      style="
                        position: absolute;
                        right: 10px;
                        bottom: 10px;
                        text-align: center;
                      "
                      ><span style="color: #747974">环比去年</span
                      ><p style="color: #08b762">-28.01 %<icon-caret-down /></p
                    ></div>
                  </div>

                  <div
                    style="
                      display: flex;
                      position: relative;
                      height: 70px;
                      background-color: #343232;
                    "
                    ><div style="position: absolute; left: 10px; top: 10px"
                      ><span style="color: #747974">今年碳排强度 (t/万元)</span
                      ><p class="color">0.364</p></div
                    ><div
                      style="
                        position: absolute;
                        right: 10px;
                        bottom: 0;
                        text-align: center;
                      "
                      ><span style="color: #747974">环比去年</span
                      ><p style="color: #08b762"
                        >-28.01 %<icon-caret-down /></p></div></div></div
              ></a-col>
              <a-col :span="8"
                ><div
                  ><div class="borderColor">
                    <div style="display: flex; position: relative; height: 90px"
                      ><a-statistic
                        title="碳资产余额 (t)"
                        :value="2003"
                        show-group-separator
                        style="margin: 15px"
                        :value-style="{ color: '#e74d27' }"
                      /><div
                        style="
                          position: absolute;
                          right: 10px;
                          bottom: 10px;
                          text-align: center;
                        "
                        ><div
                          ><span style="color: #747974">今年还需</span
                          ><span class="color"> 0</span></div
                        ><div
                          ><a-button type="text"> 申请或购买CCER</a-button></div
                        ></div
                      >
                    </div>

                    <div
                      style="
                        display: flex;
                        position: relative;
                        height: 70px;
                        background-color: #343232;
                      "
                      ><div style="position: absolute; left: 10px; top: 10px"
                        ><span style="color: #747974; font-size: 10px"
                          >CEA余额 / CCER余额 (t)</span
                        ><p class="color">700 / 1,303</p></div
                      ><div style="position: absolute; right: 0; bottom: 0"
                        ><span style="color: #747974; font-size: 10px"
                          >CEA市值 / CCER市值 (元)</span
                        ><p class="color">42,000 / 39,090</p></div
                      ></div
                    ></div
                  ></div
                ></a-col
              >
              <a-col :span="8"
                ><div class="borderColor">
                  <div style="position: relative; height: 90px">
                    <div class="right-top"
                      ><div class="color"
                        >累计减排项目数 / 已完成 / 今年新增</div
                      >
                      <div style="margin-top: 10px" class="size"
                        ><span class="color">3</span
                        ><a-divider direction="vertical" /><span
                          style="color: #0ae77d"
                          >0</span
                        ><a-divider direction="vertical" /><span class="color"
                          >0</span
                        ></div
                      ></div
                    >
                  </div>

                  <div
                    style="
                      display: flex;
                      position: relative;
                      height: 70px;
                      background-color: #343232;
                    "
                    ><div style="position: absolute; left: 10px; top: 10px"
                      ><span style="color: #747974; font-size: 10px"
                        >累计投入 / 产出（元）</span
                      ><p class="color">220,000 / 15,090</p></div
                    ><div style="position: absolute; right: 10px; bottom: 0"
                      ><span style="color: #747974; font-size: 10px"
                        >预计总减排 / 已核证CCER (t)</span
                      ><p style="color: #08b762">15,005 / 503</p></div
                    ></div
                  ></div
                ></a-col
              >
            </a-row>
          </div>
          <div style="margin-top: 10px; background-color: #232323"
            ><div class="content-leftTop"
              ><a-space
                ><span class="color" style="font-size: large; margin-left: 15px"
                  >碳排放趋势</span
                ><a-radio-group
                  style="position: absolute; right: 3px"
                  type="button"
                  size="mini"
                  default-value="Beijing"
                >
                  <a-radio value="Beijing">总量</a-radio>
                  <a-radio value="Shanghai">强度</a-radio>
                  <a-radio value="Guangzhou">人均</a-radio>
                  <a-radio value="Guangzhou">单位面积</a-radio>
                </a-radio-group></a-space
              ></div
            ><div ref="chartLeft" style="width: 978px; height: 200px"></div>
          </div>
          <div class="left-footer">
            <a-row class="grid-demo" :gutter="10">
              <a-col :span="8"
                ><div style="background-color: #232323; height: 250px"
                  ><div class="content-leftTop"
                    ><a-space
                      ><span
                        class="color"
                        style="font-size: medium; margin-left: 10px"
                        >碳排放类型分布</span
                      ><a-select
                        style="width: 100px; position: absolute; right: 0"
                        default-value="2022"
                      >
                        <option value="2022">2022</option>
                        <option>2023</option>
                        <option>2021</option>
                      </a-select></a-space
                    ></div
                  ><div
                    ><div style="position: relative; margin-top: 15px">
                      <a-progress
                        size="large"
                        :percent="0.2"
                        style="width: 95%; margin-left: 5px"
                        track-color="#08b762"
                        :show-text="false"
                      />
                      <span>热力</span
                      ><span style="position: absolute; right: 0"
                        >电力</span
                      ></div
                    ><div style="position: relative; margin-top: 15px">
                      <a-progress
                        size="large"
                        :percent="0.2"
                        style="width: 95%; margin-left: 5px"
                        track-color="#08b762"
                        :show-text="false"
                      />
                      <span>外购热力产生的排放</span
                      ><span style="position: absolute; right: 0"
                        >外购电力产生的排放</span
                      ></div
                    >
                    <div style="position: relative; margin-top: 15px">
                      <a-progress
                        size="large"
                        :percent="0.99"
                        style="width: 95%; margin-left: 5px"
                        track-color="#08b762"
                        :show-text="false"
                      />
                      <span>间接排放</span></div
                    >
                    <div style="position: relative; margin-top: 15px">
                      <a-progress
                        size="large"
                        :percent="0.99"
                        style="width: 95%; margin-left: 5px"
                        track-color="#08b762"
                        :show-text="false"
                      />
                      <span>范围2</span></div
                    >
                  </div></div
                ></a-col
              >
              <a-col :span="8"
                ><div style="background-color: #232323; height: 250px"
                  ><div class="content-leftTop"
                    ><a-space
                      ><span
                        class="color"
                        style="font-size: medium; margin-left: 10px"
                        >碳排放类型分布</span
                      ><a-select
                        style="width: 100px; position: absolute; right: 0"
                        default-value="2022"
                      >
                        <option value="2022">2022</option>
                        <option>2023</option>
                        <option>2021</option>
                      </a-select></a-space
                    ></div
                  ><div
                    ref="chartLeftItem1"
                    style="width: 100%; height: 210px"
                  ></div></div
              ></a-col>
              <a-col :span="8"
                ><div style="background-color: #232323; height: 250px"
                  ><div class="content-leftTop"
                    ><a-space
                      ><span
                        class="color"
                        style="font-size: medium; margin-left: 10px"
                        >碳排放类型分布</span
                      ><a-select
                        style="width: 100px; position: absolute; right: 0"
                        default-value="2022"
                      >
                        <option value="2022">2022</option>
                        <option>2023</option>
                        <option>2021</option>
                      </a-select></a-space
                    ></div
                  ><div
                    ref="chartLeftItem2"
                    style="width: 100%; height: 210px"
                  ></div></div
              ></a-col>
            </a-row> </div
        ></div>
      </a-col>
      <a-col :span="8">
        <div class="right">
          <div style="margin-left: 30%; width: 40%"
            ><a-select default-value="2023年核算情况">
              <a-option value="1">2023年核算情况</a-option>
              <a-option value="2">2022年核算情况</a-option>
              <a-option value="3">2021年核算情况</a-option>
            </a-select></div
          >
          <div
            ><span style="font-size: medium; margin-left: 25px" class="color"
              >边界</span
            ><a-button type="text" size="mini"><icon-right /></a-button>
            <div style="width: 487px; height: 180px; position: relative"
              ><div ref="chart2" style="width: 100%; height: 150px"></div
              ><div
                style="
                  text-align: center;
                  position: absolute;
                  top: 55px;
                  left: 105px;
                "
                ><p style="font-size: 16px; margin-bottom: 5px">电力</p
                ><p style="margin-top: 0">两个节点</p></div
              >
              <div
                style="
                  text-align: center;
                  position: absolute;
                  top: 55px;
                  left: 215px;
                "
                ><p style="font-size: 16px; margin-bottom: 5px">热力</p
                ><p style="margin-top: 0">两个节点</p></div
              >
              <div
                style="
                  text-align: center;
                  position: absolute;
                  top: 55px;
                  left: 330px;
                "
                ><p style="font-size: 16px; margin-bottom: 5px">2</p
                ><p style="margin-top: 0">核算单元</p></div
              >
              <a-divider></a-divider>
            </div>
          </div>
          <div
            ><span style="font-size: medium; margin-left: 25px" class="color"
              >核算</span
            ><a-button type="text" size="mini"><icon-right /></a-button
            ><a-button type="text" size="mini" style="margin-left: 215px"
              ><icon-to-bottom /></a-button
            ><span>单位（t）</span></div
          >
          <div style="margin: 0 20px"
            ><a-row class="grid-demo" :gutter="[5, 5]">
              <a-col :span="8"
                ><div
                  style="
                    background-color: #474847;
                    height: 30px;
                    line-height: 30px;
                    padding-left: 10px;
                  "
                  ><span>1月</span>
                  <span style="margin-left: 40px" class="color"
                    >57.899</span
                  ></div
                ></a-col
              >
              <a-col :span="8"
                ><div
                  style="
                    background-color: #474847;
                    height: 30px;
                    line-height: 30px;
                    padding-left: 10px;
                  "
                  ><span>1月</span>
                  <span style="margin-left: 40px" class="color"
                    >57.899</span
                  ></div
                ></a-col
              >
              <a-col :span="8"
                ><div
                  style="
                    background-color: #474847;
                    height: 30px;
                    line-height: 30px;
                    padding-left: 10px;
                  "
                  ><span>1月</span>
                  <span style="margin-left: 40px" class="color"
                    >57.899</span
                  ></div
                ></a-col
              >
              <a-col :span="8"
                ><div
                  style="
                    background-color: #474847;
                    height: 30px;
                    line-height: 30px;
                    padding-left: 10px;
                  "
                  ><span>1月</span>
                  <span style="margin-left: 40px" class="color"
                    >57.899</span
                  ></div
                ></a-col
              >
              <a-col :span="8"
                ><div
                  style="
                    background-color: #474847;
                    height: 30px;
                    line-height: 30px;
                    padding-left: 10px;
                  "
                  ><span>1月</span>
                  <span style="margin-left: 40px" class="color"
                    >57.899</span
                  ></div
                ></a-col
              >
              <a-col :span="8"
                ><div
                  style="
                    background-color: #474847;
                    height: 30px;
                    line-height: 30px;
                    padding-left: 10px;
                  "
                  ><span>1月</span>
                  <span style="margin-left: 40px" class="color"
                    >57.899</span
                  ></div
                ></a-col
              >
              <a-col :span="8"
                ><div
                  style="
                    background-color: #474847;
                    height: 30px;
                    line-height: 30px;
                    padding-left: 10px;
                  "
                  ><span>1月</span>
                  <span style="margin-left: 40px" class="color"
                    >57.899</span
                  ></div
                ></a-col
              >
              <a-col :span="8"
                ><div
                  style="
                    background-color: #474847;
                    height: 30px;
                    line-height: 30px;
                    padding-left: 10px;
                  "
                  ><span>1月</span>
                  <span style="margin-left: 40px" class="color"
                    >57.899</span
                  ></div
                ></a-col
              >
              <a-col :span="8"
                ><div
                  style="
                    background-color: #474847;
                    height: 30px;
                    line-height: 30px;
                    padding-left: 10px;
                  "
                  ><span>1月</span>
                  <span style="margin-left: 40px" class="color"
                    >57.899</span
                  ></div
                ></a-col
              >
            </a-row></div
          >
          <div
            ><span style="font-size: medium; margin-left: 25px" class="color"
              >履约</span
            ><a-button type="text" size="mini"><icon-right /></a-button
          ></div>
          <div style="position: relative"
            ><div style="margin: 0 20px; display: flex"
              ><div
                style="
                  margin-left: 10px;
                  border: #111111 solid;
                  width: 45%;
                  height: 80px;
                  margin-top: 10px;
                  background-color: #111111;
                "
                ><p style="margin: 10px 0 0 10px">年度碳排放 (t)</p
                ><p
                  style="margin-top: 10px; margin-left: 10px"
                  class="size color"
                  >436.31</p
                ></div
              ><div
                style="
                  margin-left: 20px;
                  border: #111111 solid;
                  width: 45%;
                  height: 80px;
                  margin-top: 10px;
                  background-color: #111111;
                "
                ><p style="margin: 10px 0 0 10px">年度碳排放 (t)</p
                ><p
                  style="margin-top: 10px; margin-left: 10px"
                  class="size color"
                  >436.31</p
                ></div
              ></div
            >
            <div ref="chartRight" style="width: 100%; height: 200px"></div
            ><span
              style="position: absolute; top: 180px; left: 175px"
              class="color"
              >以履约碳排(t)</span
            ><span style="position: absolute; top: 255px; left: 90px"
              >CEA余额700t</span
            ><span style="position: absolute; top: 255px; left: 270px"
              >CCER余额1,303t</span
            ></div
          >
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped lang="less">
  .overview {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;

    .right-top {
      margin-left: 15px;
      padding-top: 10px;
    }
    .content-leftTop {
      height: 40px;
      width: 100%;
      background-color: #343435;
      position: relative;
      line-height: 40px;
    }
    .left-footer {
      margin-top: 10px;
    }
    .right {
      background-color: #232323;
      width: 100%;
      height: 670px;
    }
  }
  .size {
    font-size: 24px;
  }

  .color {
    color: white;
  }
  .borderColor {
    background-color: #232323;
  }
</style>
