<template>
  <div class="container">
    <div class="container-header">
      <a-radio-group default-value="1" @change="clickChange">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>按类别</a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>概况</a-tag>
          </template>
        </a-radio>
      </a-radio-group>
      <a-space class="container-header-category">类别：</a-space>
      <a-radio-group default-value="1">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-fire />
            </a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-fire />
            </a-tag>
          </template>
        </a-radio>
        <a-radio value="3">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-fire />
            </a-tag>
          </template>
        </a-radio>
      </a-radio-group>
      <a-space class="container-header-label">标签：</a-space>
      <a-radio-group default-value="1">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-fire />
            </a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>
              <icon-fire />
            </a-tag>
          </template>
        </a-radio>
      </a-radio-group>

      <a-range-picker
        v-model="rangeValue"
        style="width: 300px; margin-left: 20px"
      />

      <a-button style="margin-left: 20px" type="primary">
        <template #icon>
          <icon-search />
        </template>
        <!-- Use the default slot to avoid extra spaces -->
        <template #default>查询</template>
      </a-button>
      <a-space class="container-header-dataPresentation">数据显示：</a-space>
      <a-checkbox-group :default-value="['1']">
        <a-checkbox value="1">数值</a-checkbox>
        <a-checkbox value="2">占比</a-checkbox>
      </a-checkbox-group>
      <a-space class="container-header-zeroDeflection">无偏差</a-space>
      <a-space class="container-header-deviation">正常偏差</a-space>
      <a-space class="container-header-excessiveDeviation">偏差过大</a-space>
      <a-space class="container-header-dataException">数据异常</a-space>
    </div>
    <div class="container-content">
      <a-card>
        <div v-show="isShow" id="firstChart"></div>
        <div v-show="!isShow" id="secondChart"></div>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts';
  import '@/components//css//radioStyle.css';

  const isShow = ref(true);
  const isShowTwo = ref(false);
  const rangeValue = ref([Date.now(), Date.now()]);
  const clickChange = () => {
    console.log('aaa');
    isShow.value = !isShow.value;
    isShowTwo.value = !isShowTwo.value;
    console.log(isShow.value, isShowTwo.value);
  };

  onMounted(() => {
    const firstChart = echarts.init(
      document.getElementById('firstChart'),
      null,
      {
        height: 820,
      }
    );
    const secondChart = echarts.init(
      document.getElementById('secondChart'),
      null,
      {
        height: 820,
      }
    );

    const firstChartOptions = {
      series: {
        type: 'sankey',
        layout: 'none',
        emphasis: {
          focus: 'adjacency',
        },
        data: [
          {
            name: '电',
          },
          {
            name: '汇总设备',
          },
          {
            name: '1#进线',
          },
          {
            name: '高压',
          },
          {
            name: '低压',
          },
          {
            name: '1段',
          },
          {
            name: '2段',
          },
          {
            name: '3段',
          },
          {
            name: '4段',
          },
        ],
        links: [
          {
            source: '电',
            target: '汇总设备',
            value: 1,
          },
          {
            source: '电',
            target: '1#进线',
            value: 1,
          },
          {
            source: '电',
            target: '高压',
            value: 3,
          },
          {
            source: '电',
            target: '低压',
            value: 3,
          },
          {
            source: '高压',
            target: '1段',
            value: 2,
          },
          {
            source: '高压',
            target: '2段',
            value: 2,
          },
          {
            source: '低压',
            target: '3段',
            value: 2,
          },
          {
            source: '低压',
            target: '4段',
            value: 2,
          },
        ],
      },
    };
    const secondChartOptions = {
      series: {
        type: 'sankey',
        layout: 'none',
        emphasis: {
          focus: 'adjacency',
        },
        data: [
          {
            name: '电',
          },
          {
            name: '水',
          },
          {
            name: '气',
          },
          {
            name: '汇总设备',
          },
          {
            name: '1#进线',
          },
          {
            name: '高压',
          },
          {
            name: '低压',
          },
          {
            name: '1段',
          },
          {
            name: '2段',
          },
          {
            name: '3段',
          },
          {
            name: '4段',
          },
          {
            name: '生产区',
          },
        ],
        links: [
          {
            source: '气',
            target: '汇总设备',
            value: 1,
          },
          {
            source: '电',
            target: '1#进线',
            value: 1,
          },
          {
            source: '电',
            target: '汇总设备',
            value: 1,
          },
          {
            source: '气',
            target: '生产区',
            value: 0.3,
          },
          {
            source: '水',
            target: '生产区',
            value: 0.3,
          },
          {
            source: '电',
            target: '高压',
            value: 3,
          },
          {
            source: '电',
            target: '低压',
            value: 3,
          },
          {
            source: '高压',
            target: '1段',
            value: 2,
          },
          {
            source: '高压',
            target: '2段',
            value: 2,
          },
          {
            source: '低压',
            target: '3段',
            value: 2,
          },
          {
            source: '低压',
            target: '4段',
            value: 2,
          },
        ],
      },
    };
    firstChart.setOption(firstChartOptions);
    secondChart.setOption(secondChartOptions);
    window.addEventListener('resize', () => {
      firstChart.resize();
      secondChart.resize();
    });
  });
</script>

<style lang="less" scoped>
  .container {
    color: var(--color-text-2);

    &-header {
      &-category {
        margin-left: 20px;
      }

      &-label {
        margin-left: 20px;
      }

      &-dataPresentation {
        margin-left: 20px;
      }

      &-zeroDeflection,
      &-deviation,
      &-excessiveDeviation,
      &-dataException {
        padding: 5px 10px;
        border-radius: 3px;
        margin-left: 10px;
      }

      &-zeroDeflection {
        background-color: #43bed9;
      }

      &-deviation {
        background-color: #f9dc17;
      }

      &-excessiveDeviation {
        background-color: #e70200;
      }

      &-dataException {
        background-color: #d5d7d8;
      }
    }

    &-content {
    }
  }
</style>
