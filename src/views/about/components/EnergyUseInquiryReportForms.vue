<template>
  <div class="container">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" title="年报">
        <a-date-picker v-model="value" style="width: 200px" />
        <a-button style="margin-left: 20px">
          <template #icon>
            <icon-search />
          </template>
          <template #default>查询</template>
        </a-button>
        <a-button style="float: right; margin-right: 10px">
          <template #icon>
            <icon-upload />
          </template>
          <template #default>导出</template>
        </a-button>
        <a-table
          :bordered="{ cell: true }"
          :columns="columnsYear"
          :data="dataYear"
          :stripe="true"
          style="margin-top: 10px"
        />
      </a-tab-pane>
      <a-tab-pane key="2" title="用能日报">
        <a-table
          :bordered="{ cell: true }"
          :columns="columnsDay"
          :data="dataDay"
          :stripe="true"
        />
      </a-tab-pane>
      <a-tab-pane key="3" title="周报">
        <a-table
          :bordered="{ cell: true }"
          :columns="columns"
          :data="data"
          :stripe="true"
        />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';

  const columnsYear = [
    {
      title: '时间',
      dataIndex: 'time',
    },
    {
      title: '设备1(kWh)',
      dataIndex: 'equipmentOne',
      width: '200px',
    },
    {
      title: '设备2(kWh)',
      dataIndex: 'equipmentTwo',
      width: '200px',
    },
    {
      title: '设备3(kWh)',
      dataIndex: 'equipmentThree',
      width: '200px',
    },
    {
      title: 'Email',
      dataIndex: 'total',
    },
  ];
  const dataYear = reactive([
    {
      key: '1',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
    {
      key: '2',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
    {
      key: '3',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
    {
      key: '4',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
    {
      key: '5',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
  ]);

  const columnsDay = [
    {
      title: '时间',
      dataIndex: 'time',
    },
    {
      title: '总进线(kWh)',
      dataIndex: 'equipmentOne',
      width: '200px',
    },
    {
      title: '总进线',
      dataIndex: 'equipmentTwo',
      width: '200px',
      children: [
        {
          title: '1#进线(kWh)',
          dataIndex: 'birthday',
        },
        {
          title: '2#进线(kWh)',
          dataIndex: 'birthday2',
        },
        {
          title: '3#进线(kWh)',
          dataIndex: 'birthday3',
        },
      ],
    },
    {
      title: 'Email',
      dataIndex: 'total',
    },
  ];
  const dataDay = reactive([
    {
      key: '1',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
    {
      key: '2',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
    {
      key: '3',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
    {
      key: '4',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
    {
      key: '5',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
    {
      key: '6',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
    {
      key: '7',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
    {
      key: '8',
      time: 'Jane Doe',
      equipmentOne: 23000,
      equipmentTwo: '32 Park Road, London',
      equipmentThree: 'jane.doe@example.com',
      total: 'jane.doe@example.com',
    },
  ]);

  const columns = [
    {
      title: '时间',
      dataIndex: 'time',
    },
    {
      title: '正向有功电度(kWh)',
      dataIndex: 'equipmentOne',
      width: '200px',
    },
    {
      title: 'Email',
      dataIndex: 'total',
    },
  ];
  const data = reactive([
    {
      key: '1',
      time: 'Jane Doe',
      equipmentOne: 23000,
      total: 'jane.doe@example.com',
    },
    {
      key: '2',
      time: 'Jane Doe',
      equipmentOne: 23000,
      total: 'jane.doe@example.com',
    },
    {
      key: '3',
      time: 'Jane Doe',
      equipmentOne: 23000,
      total: 'jane.doe@example.com',
    },
    {
      key: '4',
      time: 'Jane Doe',
      equipmentOne: 23000,
      total: 'jane.doe@example.com',
    },
    {
      key: '5',
      time: 'Jane Doe',
      equipmentOne: 23000,
      total: 'jane.doe@example.com',
    },
    {
      key: '6',
      time: 'Jane Doe',
      equipmentOne: 23000,
      total: 'jane.doe@example.com',
    },
  ]);
</script>

<style scoped>
  .container {
    padding: 10px;
  }
</style>
