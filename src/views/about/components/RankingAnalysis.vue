<template>
  <div class="container">
    <a-row :gutter="10">
      <a-col :span="4">
        <a-card class="container-left">
          <a-space>类别：</a-space>
          <a-radio-group v-model="checkValue">
            <a-radio value="1">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable>
                  <icon-sun />
                </a-tag>
              </template>
            </a-radio>
            <a-radio value="2">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable>
                  <icon-sun />
                </a-tag>
              </template>
            </a-radio>
            <a-radio value="3">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable>
                  <icon-sun />
                </a-tag>
              </template>
            </a-radio>
          </a-radio-group>
          <br />
          <br />
          <a-space>标签：</a-space>
          <a-radio-group v-model="labelValue">
            <a-radio value="1">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 支路</a-tag>
              </template>
            </a-radio>
            <a-radio value="2">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 分项</a-tag>
              </template>
            </a-radio>
            <a-radio value="3">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 部门</a-tag>
              </template>
            </a-radio>
          </a-radio-group>
          <a-divider></a-divider>
          <leftSide ref="treeData" />
        </a-card>
      </a-col>
      <a-col :span="20" class="container-right">
        <a-radio-group v-model="dateCheckValue">
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable> 日</a-tag>
            </template>
          </a-radio>
          <a-radio value="2">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable> 月</a-tag>
            </template>
          </a-radio>
          <a-radio value="3">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable> 年</a-tag>
            </template>
          </a-radio>
        </a-radio-group>
        <a-space style="margin: 0 10px">日期：</a-space>
        <a-year-picker v-model="value" style="width: 200px" />
        <a-select v-model="selectValue" style="width: 120px; margin-left: 10px">
          <a-option>全部时段</a-option>
          <a-option>工作日</a-option>
          <a-option>非工作日</a-option>
        </a-select>
        <a-button style="margin: 0 10px" type="outline">
          <template #icon>
            <icon-search />
          </template>
          <template #default>查询</template>
        </a-button>
        <a-card style="margin-top: 20px">
          <template #title>
            <icon-bar-chart />
            支路用电排名
          </template>
          <div id="myChart"></div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts';
  import '@/components//css//radioStyle.css';
  import leftSide from '../../../components/leftSide/index.vue';

  const checkValue = ref('1');
  const labelValue = ref('1');
  const dateCheckValue = ref('1');
  const treeData = ref('');
  console.log(treeData, '12312312');

  const value = ref(Date.now());
  const selectValue = ref('工作日');

  onMounted(() => {
    const myChart = echarts.init(document.getElementById('myChart'), null, {
      height: 762,
    });

    const myChartOptions = {
      title: {
        text: 'World Population',
      },
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
      xAxis: {
        type: 'value',
        position: 'top',
        show: true,
      },
      yAxis: {
        type: 'category',
        data: ['汇总设备', '1#进线', '低压', '高压'],
      },
      series: [
        {
          // name: '2011',
          type: 'bar',
          data: [182033, 234389, 290534, 104970],
        },
      ],
    };

    myChart.setOption(myChartOptions);
    window.addEventListener('resize', () => {
      myChart.resize();
    });
  });
</script>

<style scoped>
  .container {
    padding: 10px;
    color: var(--color-text-2);
  }

  #myChart {
    margin-top: 20px;
  }
</style>
