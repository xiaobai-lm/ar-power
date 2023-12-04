<template>
  <div class="container">
    <a-card>
      <template #title> 当年总单耗趋势</template>
      <template #extra>
        <a-radio-group>
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked"> 总单耗</a-tag>
            </template>
          </a-radio>
          <a-radio value="2">
            <template #radio="{ checked }">
              <a-tag :checked="checked"> 电单耗</a-tag>
            </template>
          </a-radio>
          <a-radio value="3">
            <template #radio="{ checked }">
              <a-tag :checked="checked"> 气单耗</a-tag>
            </template>
          </a-radio>
          <a-radio value="4">
            <template #radio="{ checked }">
              <a-tag :checked="checked"> 水单耗</a-tag>
            </template>
          </a-radio>
        </a-radio-group>
      </template>
      <a-row>
        <a-col :span="4">
          <a-card style="height: 180px">
            <template #title>
              <a-space>当年总单耗</a-space>
              <a-space>千克标准煤/万元</a-space>
            </template>
            <div>
              {{ data }}
            </div>
          </a-card>

          <a-card style="height: 180px; margin-top: 10px">
            <template #title>
              <a-space>上一年同期总单耗</a-space>
              <a-space>千克标准煤/万元</a-space>
            </template>
            <div>
              {{ data }}
            </div>
            <div style="">
              {{ dataValue }}
            </div>
          </a-card>
        </a-col>
        <a-col :span="20">
          <div id="topChart"></div>
        </a-col>
      </a-row>
    </a-card>

    <a-card>
      <template #title> 当年总产值趋势</template>
      <template #extra>
        <a-radio-group>
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked"> 总产值</a-tag>
            </template>
          </a-radio>
        </a-radio-group>
      </template>
      <a-row>
        <a-col :span="4">
          <a-card style="height: 180px">
            <template #title>
              <a-space>当年总单耗</a-space>
              <a-space>千克标准煤/万元</a-space>
            </template>
            <div>
              {{ data }}
            </div>
          </a-card>

          <a-card style="height: 180px; margin-top: 10px">
            <template #title>
              <a-space>上一年同期总单耗</a-space>
              <a-space>千克标准煤/万元</a-space>
            </template>
            <div>
              {{ data }}
            </div>
            <div style="">
              {{ dataValue }}
            </div>
          </a-card>
        </a-col>
        <a-col :span="20">
          <div id="BottomChart"></div>
        </a-col>
      </a-row>
    </a-card>

    <a-row :gutter="10" style="margin-top: 10px">
      <a-col v-for="(item, index) in itemList" :key="index" :span="6">
        <a-card>
          <template #title>
            <a-space>{{ item.title }}</a-space>
            <a-space>单位:千克标准煤/万元</a-space>
          </template>
          <div style="display: flex; justify-content: space-between">
            <a-space>当月:255</a-space>
            <a-space>上月:255</a-space>
            <a-space
              >环比:
              <a-space>25</a-space>
            </a-space>
          </div>
          <a-divider></a-divider>
          <div style="display: flex; justify-content: space-between">
            <a-space>当年:255</a-space>
            <a-space>上一月:255</a-space>
            <a-space
              >环比:
              <a-space>25</a-space>
            </a-space>
          </div>
          <a-divider></a-divider>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts';

  const data = ref(218.97);
  const dataValue = ref(32.45);

  const itemList = [
    {
      title: '总单耗',
    },
    {
      title: '电单耗',
    },
    {
      title: '气单耗',
    },
    {
      title: '水单耗',
    },
  ];

  onMounted(() => {
    const topChart = echarts.init(document.getElementById('topChart'), null, {
      height: 400,
    });

    const topChartOptions = {
      xAxis: {
        type: 'category',
        data: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月',
        ],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
        {
          data: [120, 200, 150, 80, 70, 120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    };

    const BottomChart = echarts.init(
      document.getElementById('BottomChart'),
      null,
      {
        height: 400,
      }
    );

    const BottomChartOptions = {
      xAxis: {
        type: 'category',
        data: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月',
        ],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
        {
          data: [120, 200, 150, 80, 70, 120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    };

    topChart.setOption(topChartOptions);
    BottomChart.setOption(BottomChartOptions);
    window.addEventListener('resize', () => {
      topChart.resize();
      BottomChart.resize();
    });
  });
</script>

<style scoped>
  .container {
    padding: 10px;
  }
</style>
