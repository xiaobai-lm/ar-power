<template>
  <div class="container">
    <a-row :gutter="20">
      <a-col v-for="(item, index) in List" :key="index" :span="6">
        <a-card class="container-card">
          <h1 class="container-card-h1">{{ item.title }}</h1>
          <h4 class="container-card-h4">{{ item.content }}</h4>
        </a-card>
      </a-col>
    </a-row>
    <a-card class="container-content-card">
      <div style="--color-text-1: var(--color-neutral-10); padding-left: 10px">
        选择时间范围:
        <a-range-picker
          v-model="rangeValue"
          style="width: 400px; margin-top: 20px"
          show-time
          :time-picker-props="{ defaultValue: ['00:00:00'] }"
        />
      </div>
      <div id="container"></div>
      <div id="parallel"></div>
    </a-card>
    <a-button @click="handleClick">按钮</a-button>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import * as echarts from 'echarts';

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const rangeValue = ref([new Date(year, month, 1), Date.now()]);

  const handleClick = () => {
    console.log(year, month + 1, 1);
    console.log(date.toLocaleDateString());
  };
  const List = ref([
    {
      title: '合',
      content: '电流 开关位置',
    },
    {
      title: '0',
      content: '本日 分 次数',
    },
    {
      title: '0',
      content: '本月 分 次数',
    },
    {
      title: '0 分钟',
      content: '本月 分 时长',
    },
  ]);

  // 指定图表的配置项和数据
  setTimeout(() => {
    const myChart = echarts.init(document.getElementById('container'), null, {
      height: 400,
    });
    const parallel = echarts.init(document.getElementById('parallel'), null, {
      height: 200,
    });

    const option = {
      legend: {
        data: ['合'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: [
        {
          name: '分 次数分布',
          type: 'value',
          nameTextStyle: {
            fontSize: 18,
          },
          data: [0, 1, 2, 3, 4],
        },
        {
          name: '分 次数: 0',
          nameLocation: 'start',
          inverse: true,
        },
      ],
      series: [
        {
          name: '合',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    const parallelEcharts = {
      legend: {
        data: ['合'],
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: [
        {
          name: '分 次数分布',
          type: 'value',
          nameTextStyle: {
            fontSize: 18,
          },
          data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          name: '分 次数: 0',
          nameLocation: 'start',
          inverse: true,
        },
      ],
      series: [
        {
          name: '合',
          type: 'bar',
        },
      ],
    };
    myChart.setOption(option);
    parallel.setOption(parallelEcharts);
  }, 10);

  // 使用刚指定的配置项和数据显示图表。
</script>

<style lang="less" scoped>
  .container {
    &-card {
      &-h1 {
        text-align: center;
      }

      &-h4 {
        text-align: center;
        padding: 10px;
      }
    }

    &-content {
      &-card {
        margin-top: 20px;
      }
    }
  }
</style>
