<template>
  <div class="container">
    <a-tabs v-model="tabValue" @change="handleChange">
      <a-tab-pane key="1" title="产品"></a-tab-pane>
      <a-tab-pane key="2" title="工序"></a-tab-pane>
    </a-tabs>
    <a-space style="margin: 0 10px 0 0">选择产品</a-space>
    <a-select
      v-model="selectValue"
      style="width: 320px; margin: 0 10px 0 10px"
      @change="handleSelectChange"
    >
      <a-option>苯乙烯</a-option>
      <a-option>苯甲酰</a-option>
      <a-option>甲醛</a-option>
    </a-select>
    <a-radio-group v-model="radioValue" style="margin: 0 20px">
      <a-radio value="1">
        <template #radio="{ checked }">
          <a-tag :checked="checked" checkable>月</a-tag>
        </template>
      </a-radio>
      <a-radio value="2">
        <template #radio="{ checked }">
          <a-tag :checked="checked" checkable>年</a-tag>
        </template>
      </a-radio>
    </a-radio-group>
    <a-date-picker style="width: 200px" />
    <a-button style="width: 80px; margin-left: 30px" type="primary">
      <template #icon>
        <icon-search />
      </template>
      查询
    </a-button>
    <a-card style="margin-top: 10px">
      <template #icon>
        <icon-search />
      </template>
      <template #title> 当月能耗趋势</template>
      <div id="sameMonth"></div>
      <div id="sameMonthTwo"></div>
      <a-table :bordered="{ cell: true }" :columns="columns" :data="data">
      </a-table>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
  import { nextTick, onMounted, reactive, ref } from 'vue';
  import * as echarts from 'echarts';

  const tabValue = ref('1');
  const radioValue = ref('1');
  const selectValue = ref('苯乙烯');
  const dataValue = ref(['23', '34', '45', '23', '32', '42', '152']);

  const handleChange = () => {
    dataValue.value = ['12', '21', '12', '12', '43', '12', '54'];
  };

  const handleSelectChange = () => {
    if (selectValue.value === '苯乙烯') {
      dataValue.value = ['12', '21', '12', '12', '43', '12', '54'];
    } else {
      dataValue.value = ['23', '34', '45', '23', '32', '42', '52'];
    }
    console.log(dataValue.value);
  };
  const dayjsValue = [];

  for (let i = 1; i <= 31; i += 1) {
    dayjsValue.push(i);
    console.log(dayjsValue);
  }

  const columns = [
    {
      title: '产品',
      dataIndex: 'name',
    },
    {
      title: '能耗(千克标准煤)',
      dataIndex: '',
    },
    {
      title: '产量(吨)',
      dataIndex: '',
    },
    {
      title: '单位产品能耗(千克标准煤/吨)',
      dataIndex: '名字',
    },
    {
      title: '类别单位产品能耗',
      children: [
        {
          title: '电(kvarh/吨)',
          dataIndex: '',
        },
        {
          title: '水(kvarh/吨)',
          dataIndex: '',
        },
      ],
    },
  ];

  const data = reactive([
    {
      name: 'aaaa',
    },
    {
      name: 'aaaa',
    },
    {
      name: 'aaaa',
    },
    {
      name: 'aaaa',
    },
  ]);

  onMounted(() => {
    // @ts-ignore
    const sameMonth = echarts.init(document.getElementById('sameMonth'), null, {
      height: 320,
    });

    const sameMonthOptions = {
      title: {
        left: 10,
      },
      xAxis: {
        type: 'category',
        data: dayjsValue,
      },
      yAxis: {
        type: 'value',
      },
      lenged: {
        left: 10,
      },
      series: [
        {
          data: dataValue.value,
          type: 'bar',
        },
      ],
    };
    // @ts-ignore
    const sameMonthTwo = echarts.init(
      document.getElementById('sameMonthTwo'),
      null,
      {
        height: 320,
      }
    );
    const sameMonthTwoOptions = {
      xAxis: {
        alignTicks: true,
        type: 'category',
        data: dayjsValue,
      },
      yAxis: {
        type: 'value',
        axisLine: { onZero: false },
        axisTick: {
          show: true,
        },
      },
      series: [
        {
          data: dataValue.value,
          type: 'line',
        },
      ],
    };

    nextTick(() => {
      sameMonth.setOption(sameMonthOptions);
      sameMonthTwo.setOption(sameMonthTwoOptions);
    });
    window.addEventListener('resize', () => {
      sameMonth.resize();
      sameMonthTwo.resize();
    });
  });
</script>

<style scoped>
  .container {
    padding: 10px;
    color: var(--color-text-2);
  }
</style>
