<template>
  <div class="container">
    <a-radio-group v-model="checkValue" @change="handleChange">
      <a-radio value="1">手动</a-radio>
      <a-radio value="2">自动</a-radio>
    </a-radio-group>
    <div v-if="checkValue === '1'">
      <span class="historySpan"> 场景： </span>
      <a-select :style="{ width: '200px' }"></a-select>
      <span class="historySpan"> 设备：</span>
      <a-select :style="{ width: '200px' }"></a-select>
      <span class="historySpan">变量：</span>
      <a-select :style="{ width: '200px' }"></a-select>
      <span class="historySpan">执行时间：</span>
      <a-range-picker v-model="rangeValue" style="width: 300px" />
      <a-button type="primary">刷新</a-button>
      <a-table
        :bordered="{ cell: true }"
        :columns="columns"
        :data="dataHistoryTwo"
        style="margin-top: 40px"
      />
    </div>
    <div v-else>
      <span class="historySpan">定时任务：</span>
      <a-select :style="{ width: '200px' }"></a-select>
      <span class="historySpan"> 场景： </span>
      <a-select :style="{ width: '200px' }"></a-select>
      <span class="historySpan"> 设备：</span>
      <a-select :style="{ width: '200px' }"></a-select>
      <span class="historySpan">变量：</span>
      <a-select :style="{ width: '200px' }"></a-select>
      <span class="historySpan">执行时间：</span>
      <a-range-picker v-model="rangeValue" style="width: 300px" />
      <a-button type="primary">刷新</a-button>
      <a-table
        :bordered="{ cell: true }"
        :columns="columns"
        :data="dataHistory"
        style="margin-top: 40px"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';

  const checkValue = ref('1');

  const columns = [
    {
      title: '任务名称',
      dataIndex: 'name',
    },
    {
      title: '场景',
      dataIndex: 'salary',
    },
    {
      title: '执行对象',
      dataIndex: 'address',
    },
    {
      title: '设置值',
      dataIndex: 'email',
    },
    {
      title: '执行时间',
      dataIndex: 'email',
    },
    {
      title: '执行结果',
      dataIndex: 'email',
    },
  ];
  const dataHistory = reactive([
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
    {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    },
    {
      key: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
  ]);
  const dataHistoryTwo = reactive([]);
</script>

<style scoped>
  .container {
    padding: 10px;
  }
</style>
