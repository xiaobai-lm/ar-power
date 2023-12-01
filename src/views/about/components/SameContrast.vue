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
                <a-tag :checked="checked" checkable> 支路 </a-tag>
              </template>
            </a-radio>
            <a-radio value="2">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 分项 </a-tag>
              </template>
            </a-radio>
            <a-radio value="3">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 部门 </a-tag>
              </template>
            </a-radio>
          </a-radio-group>
          <a-divider></a-divider>
          <leftSide />
        </a-card>
      </a-col>
      <a-col :span="20" class="container-right">
        <a-space style="margin: 0 10px">日期：</a-space>
        <a-year-picker v-model="value" style="width: 200px" />
        <a-button style="margin: 0 10px" type="outline">
          <template #icon>
            <icon-search />
          </template>
          <template #default>查询</template>
        </a-button>
        <a-button type="outline">
          <template #icon>
            <icon-upload />
          </template>
          <template #default>导出</template>
        </a-button>
        <div id="myChart"> </div>
        <a-table
          :bordered="{ cell: true }"
          :columns="columns"
          :data="data"
          :stripe="true"
          :style="{ marginTop: '40px' }"
        ></a-table>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue';
  import * as echarts from 'echarts';
  import '@/components//css//radioStyle.css';
  import leftSide from '../../../components/leftSide/index.vue';

  const checkValue = ref('1');
  const labelValue = ref('1');

  const value = ref(Date.now());

  const columns = [
    {
      title: '月份',
      dataIndex: 'name',
    },
    {
      title: '本期(kWh)',
      dataIndex: '',
    },
    {
      title: '同期(kWh)',
      dataIndex: '',
    },
    {
      title: '同比(%)',
      dataIndex: '',
    },
  ];
  const data = reactive([
    {
      key: '1',
      name: '123',
    },
    {
      key: '2',
      name: '123',
    },
    {
      key: '3',
      name: '123',
    },
    {
      key: '4',
      name: '123',
    },
    {
      key: '5',
      name: '123',
    },
    {
      key: '6',
      name: '123',
    },
  ]);

  onMounted(() => {
    const myChart = echarts.init(document.getElementById('myChart'), null, {
      height: 420,
    });

    const myChartOptions = {
      title: {
        text: 'Rainfall vs Evaporation',
        subtext: 'Fake Data',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: ['Rainfall', 'Evaporation'],
        top: 'bottom',
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      calculable: true,
      xAxis: [
        {
          type: 'category',
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      series: [
        {
          name: 'Rainfall',
          type: 'bar',
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
          ],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' },
            ],
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }],
          },
        },
        {
          name: 'Evaporation',
          type: 'bar',
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
          ],
          markPoint: {
            data: [
              { name: 'Max', value: 182.2, xAxis: 7, yAxis: 183 },
              { name: 'Min', value: 2.3, xAxis: 11, yAxis: 3 },
            ],
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }],
          },
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
