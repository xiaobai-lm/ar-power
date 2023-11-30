<template>
  <div class="container">
    <a-tabs v-model="tabValue">
      <a-tab-pane key="1" title="Tab 1">
        <a-radio-group v-model="radioValue">
          <a-radio value="1">日</a-radio>
          <a-radio value="2">周</a-radio>
          <a-radio value="3">月</a-radio>
          <a-radio value="4">季度</a-radio>
          <a-radio value="5">年</a-radio>
          <a-radio value="6">时间范围</a-radio>
        </a-radio-group>
        <a-date-picker style="width: 200px" />
        <a-week-picker style="width: 200px" />
        <a-month-picker style="width: 200px" />
        <a-quarter-picker style="width: 200px" />
        <a-year-picker style="width: 200px" />

        <a-table
          :bordered="{ cell: true }"
          :columns="columns"
          :data="data"
          :scroll="scroll"
        >
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="2" title="Tab 2"> Content of Tab Panel 2</a-tab-pane>
      <a-tab-pane key="3" title="Tab 3"> Content of Tab Panel 3</a-tab-pane>
      <a-tab-pane key="4" title="Tab 4"> Content of Tab Panel 4</a-tab-pane>
      <a-tab-pane key="5" title="Tab 5"> Content of Tab Panel 5</a-tab-pane>
      <a-tab-pane key="6" title="Tab 6"> Content of Tab Panel 6</a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';

  const tabValue = ref('1');
  const scroll = {
    x: 1800,
  };

  const columns = [
    {
      title: '回路名称',
      dataIndex: '',
      width: '100',
    },
    {
      title: '有功功率',
      dataIndex: '',
      children: [
        {
          title: '最大值',
          dataIndex: '',
          children: [
            {
              title: '数值',
              dataIndex: '',
            },
            {
              title: '发生时间',
              dataIndex: '',
            },
          ],
        },
        {
          title: '最小值',
          dataIndex: '',
          children: [
            {
              title: '数值',
              dataIndex: '',
            },
            {
              title: '发生时间',
              dataIndex: '',
            },
          ],
        },
        {
          title: '平均值',
          dataIndex: '',
        },
      ],
    },
    {
      title: '无功功率',
      dataIndex: '',
      children: [
        {
          title: '最大值',
          dataIndex: '',
          children: [
            {
              title: '数值',
              dataIndex: '',
            },
            {
              title: '发生时间',
              dataIndex: '',
            },
          ],
        },
        {
          title: '最小值',
          dataIndex: '',
          children: [
            {
              title: '数值',
              dataIndex: '',
            },
            {
              title: '发生时间',
              dataIndex: '',
            },
          ],
        },
        {
          title: '平均值',
          dataIndex: '',
        },
      ],
    },
    {
      title: '视功功率',
      dataIndex: '',
      children: [
        {
          title: '最大值',
          dataIndex: '',
          children: [
            {
              title: '数值',
              dataIndex: '',
            },
            {
              title: '发生时间',
              dataIndex: '',
            },
          ],
        },
        {
          title: '最小值',
          dataIndex: '',
          children: [
            {
              title: '数值',
              dataIndex: '',
            },
            {
              title: '发生时间',
              dataIndex: '',
            },
          ],
        },
        {
          title: '平均值',
          dataIndex: '',
        },
      ],
    },
    {
      title: '功率因数',
      dataIndex: '',
      children: [
        {
          title: '最大值',
          dataIndex: '',
          children: [
            {
              title: '数值',
              dataIndex: '',
            },
            {
              title: '发生时间',
              dataIndex: '',
            },
          ],
        },
        {
          title: '最小值',
          dataIndex: '',
          children: [
            {
              title: '数值',
              dataIndex: '',
            },
            {
              title: '发生时间',
              dataIndex: '',
            },
          ],
        },
        {
          title: '平均值',
          dataIndex: '',
        },
      ],
    },
  ];

  const data = reactive([{}]);
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;
  }

  .arco-tag {
    padding: 16px 12px;
    font-size: 16px;
    margin: 6px;
  }

  .arco-tag-checked {
    background-color: #8695ff;
  }
</style>
