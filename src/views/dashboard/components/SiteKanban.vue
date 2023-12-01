<template>
  <div>
    <a-row :gutter="12" class="grid-demo" justify="space-between">
      <a-col :span="6">
        <div style="height: 490px">
          <a-row :gutter="15">
            <a-col :span="24" type="flex">
              <a-row justify="space-between">
                <a-col :span="8">
                  <div class="condition">
                    <div class="condition-icon">
                      <icon-wifi
                        :style="{ fontSize: '32px', color: 'lightgreen' }"
                      />
                      <p
                        class="condition-online"
                        style="color: lightgreen; margin-bottom: 10px"
                        >在线</p
                      >
                    </div>
                    <p class="condition-online-p">站点通讯状态</p>
                  </div>
                </a-col>
                <a-col :span="8">
                  <div class="condition2">
                    <div class="condition-icon">
                      <icon-exclamation-circle-fill
                        :style="{ fontSize: '32px', color: 'red' }"
                      />
                      <p
                        class="condition-warn"
                        style="color: red; margin-bottom: 10px"
                        >告警</p
                      >
                    </div>
                    <p class="condition-warn-p">站点告警状态</p>
                  </div>
                </a-col>
                <a-col :span="8">
                  <div class="condition">
                    <div class="condition-icon">
                      <icon-tool
                        :style="{ fontSize: '32px', color: 'lightgreen' }"
                      />
                      <p
                        class="condition-breakdown"
                        style="color: lightgreen; margin-bottom: 10px"
                        >正常</p
                      >
                    </div>
                    <p class="condition-breakdown-p">站点故障状态</p>
                  </div>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="24">
              <a-card style="margin-top: 10px; height: 390px">
                <template #title>
                  <icon-drag-dot />&nbsp;&nbsp;&nbsp; 企业基本信息
                </template>
                <div style="margin: 10px 0">
                  企业名称:<span style="margin-left: 40px">xxx园区</span>
                </div>
                <a-divider />
                <div style="margin: 10px 0">
                  企业地址:<span style="margin-left: 40px"
                    >虹口区柳营路125号</span
                  >
                </div>
                <a-divider />
                <div style="margin: 10px 0">
                  研发用地:<span style="margin-left: 40px"
                    >1600m<sup>2</sup></span
                  >
                </div>
                <a-divider />
                <div style="margin: 10px 0">
                  生产用地:<span style="margin-left: 40px"
                    >2280m<sup>2</sup></span
                  >
                </div>
                <a-divider />
                <div style="margin: 10px 0">
                  生活用地:<span style="margin-left: 40px"
                    >1140m<sup>2</sup></span
                  >
                </div>
                <a-divider />
              </a-card>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col :span="6">
        <a-card style="height: 235px">
          <template #title>
            <h2>今日用电(kWh)</h2>
            <h1>627</h1>
          </template>
          <div
            >昨日同期 639 1.95%
            <icon-caret-down />
          </div>
        </a-card>
        <a-card style="margin-top: 20px; height: 235px">
          <template #title>
            <h2>本月用电(kWh)</h2>
            <h1>11,534</h1>
          </template>
          <div
            >上月同期 10786 6.94%
            <icon-caret-up />
          </div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <div class="third">
          <a-card style="height: 100%">
            <template #title>
              <icon-clock-circle />
              分项用电情况
            </template>
            <div>
              <a-button
                style="margin-top: 10px; padding: 10px"
                @click="thirdMonthClick"
                >月</a-button
              >
              <a-button
                style="margin: 10px 0 0 10px; padding: 10px"
                @click="thirdYearClick"
                >年</a-button
              >
            </div>
            <div id="thirdEchars"></div>
          </a-card>
        </div>
      </a-col>
      <a-col :span="6">
        <div class="forth">
          <a-card style="height: 100%">
            <template #title>
              <icon-clock-circle />
              分类用能占比(吨标准煤)
            </template>
            <a-button
              style="margin-top: 10px; padding: 10px"
              @click="forthMonthClick"
              >月</a-button
            >
            <a-button
              style="margin: 10px 0 0 10px; padding: 10px"
              @click="forthYearClick"
              >年</a-button
            >
            <div id="forthEchars"></div>
          </a-card>
        </div>
      </a-col>
    </a-row>

    <a-row :gutter="10" class="grid-demo" justify="space-between">
      <a-col :span="12">
        <div>
          <a-card>
            <template #icon> 当日用能趋势</template>
            <div style="display: flex">
              <div style="display: flex; flex-flow: column">
                <a-button style="margin-top: 10px; padding: 10px">
                  <IconFire />
                </a-button>
                <a-button style="margin-top: 10px">
                  <IconFire />
                </a-button>
                <a-button style="margin-top: 10px">
                  <IconFire />
                </a-button>
              </div>
              <div id="bottomLeft"></div>
            </div>
          </a-card>
        </div>
      </a-col>
      <a-col :span="12">
        <div>
          <a-card>
            <template #icon> 分类用能趋势(吨标准煤)</template>
            <div style="display: flex">
              <div style="display: flex; flex-flow: column">
                <a-button style="margin-top: 10px">月</a-button>
                <a-button style="margin-top: 10px; padding: 10px">年</a-button>
              </div>
              <div id="bottomRight"></div>
            </div>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import * as echarts from 'echarts';

  let thirdEchars: any;
  let thirdEcharsOption: any;
  const data1 = ref([
    { value: 335, name: 'A' },
    { value: 310, name: 'B' },
    { value: 234, name: 'C' },
    { value: 135, name: 'D' },
    { value: 158, name: 'E' },
  ]);
  setTimeout(() => {
    // 基于准备好的dom，初始化echarts实例
    // 分享用电情况
    thirdEchars = echarts.init(document.getElementById('thirdEchars'), null, {
      height: 280,
    });
    // 绘制图表

    thirdEcharsOption = {
      color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
      tooltip: {
        trigger: 'item',
        textStyle: {
          color: '#bfa',
        },
      },
      textStyle: {
        color: '#bfa',
      },
      // 显示
      legend: {
        y: 'bottom',
        label: true,
      },
      title: {
        text: 'kWh',
        left: 'center',
        top: '60%',
      },
      label: {
        show: true,
      },
      series: [
        {
          // 类型
          type: 'pie',
          // 饼图
          radius: ['50%', '70%'],
          // avoidLabelOverlap: false,
          textStyle: {
            color: '#bfa',
          },
          // 数据名显示在图形里面
          label: {
            show: false,
            position: 'center',
            formatter: '{c}',
          },
          // 数据名称是否有连接线
          // labelLine: {
          //   show: false,
          // },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold',
            },
          },
          // 数据
          data: data1.value,
        },
      ],
    };

    const forthEchars = echarts.init(
      document.getElementById('forthEchars'),
      null,
      {
        height: 280,
      }
    );
    // 绘制图表

    const forthEcharsOption = {
      tooltip: {
        trigger: 'item',
      },
      // 显示
      legend: {
        y: 'bottom',
      },
      title: {
        text: 'kWh',
        left: 'center',
        top: '60%',
      },
      series: [
        {
          // 类型
          type: 'pie',
          // 饼图
          radius: ['50%', '70%'],
          // avoidLabelOverlap: false,
          // 数据名显示在图形里面
          label: {
            show: false,
            position: 'center',
            formatter: '{c}',
          },
          // 数据名称是否有连接线
          // labelLine: {
          //   show: false,
          // },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold',
            },
          },
          // 数据
          data: [
            { value: 335, name: 'A' },
            { value: 310, name: 'B' },
            { value: 234, name: 'C' },
            { value: 135, name: 'D' },
            { value: 158, name: 'E' },
          ],
        },
      ],
    };
    // bottom left
    const bottomLeft = echarts.init(
      document.getElementById('bottomLeft'),
      null,
      {
        height: 250,
      }
    );
    const bottomLeftEcharsOption = {
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {
            name: '数据',
          },
        },
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
          name: '今日',
          type: 'line',
          stack: 'today',
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '昨日',
          type: 'line',
          stack: 'yesterday',
          data: [220, 182, 191, 234, 290, 330, 310],
        },
      ],
    };

    // bottomRight
    const bottomRight = echarts.init(
      document.getElementById('bottomRight'),
      null,
      {
        height: 250,
      }
    );
    const bottomRightEcharsOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: '燃气',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '水',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '电',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series',
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
      ],
    };
    thirdEchars.setOption(thirdEcharsOption);
    forthEchars.setOption(forthEcharsOption);
    bottomLeft.setOption(bottomLeftEcharsOption);
    bottomRight.setOption(bottomRightEcharsOption);
  }, 10);

  const thirdMonthClick = () => {
    thirdEchars.setOption({
      series: [
        {
          data: data1.value,
        },
      ],
    });
  };
  const thirdYearClick = () => {
    const dataList = [
      { value: 12, name: 'A' },
      { value: 23, name: 'B' },
      { value: 13, name: 'C' },
      { value: 32, name: 'D' },
      { value: 21, name: 'E' },
    ];
    thirdEchars.setOption({
      series: [
        {
          data: dataList,
        },
      ],
    });
    console.log(data1.value);
  };

  const forthMonthClick = () => {
    console.log('forthMonthClick');
  };
  const forthYearClick = () => {
    console.log('forthYearClick');
  };
</script>

<style lang="less" scoped>
  * {
    padding: 0;
    margin: 0;
  }

  .grid-demo {
    padding: 10px;
  }

  .condition,
  .condition2 {
    height: 91px;
    text-align: center;
    background: var(--color-bg-2);
  }

  .condition2 {
    margin: 0 5px;
    overflow: hidden;
  }

  .condition-icon {
    padding-top: 10px;
  }

  .condition-online {
  }

  .condition-online-p {
    color: var(--color-text-2);
  }

  .condition-warn {
  }

  .condition-warn-p {
    color: var(--color-text-2);
  }

  .condition-breakdown {
  }

  .condition-breakdown-p {
    color: var(--color-text-2);
  }

  .third {
    height: 490px;
  }

  .thirdEchars,
  .forthEchars {
    margin: 0 auto;
    text-align: center;
  }

  .forth {
    height: 490px;
  }

  #bottomLeft {
    width: 100%;
    height: 250px;
  }

  #bottomRight {
    width: 100%;
    height: 250px;
  }

  :deep(.arco-card-header) {
    height: auto !important;
  }
</style>
