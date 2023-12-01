<template>
  <div class="container">
    <div class="container-body">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" title="电流">
          <a-table
            :bordered="{ wrapper: true, cell: true }"
            :columns="columnFirst"
            :data="dataFirst"
            :pagination="false"
          />
        </a-tab-pane>
        <a-tab-pane key="2" title="电压">
          <a-table
            :bordered="{ wrapper: true, cell: true }"
            :columns="columnSecond"
            :data="dataSecond"
            :pagination="false"
          />
        </a-tab-pane>
      </a-tabs>
    </div>
    <div class="container-header">
      <a-date-picker v-model="value" style="width: 200px" />
      <a-select
        :default-value="defaultValue"
        :style="{ width: '100px', margin: '0 20px' }"
        placeholder="Please select ..."
        @change="handleChange"
      >
        <a-option>日报表</a-option>
        <a-option>月报表</a-option>
        <a-option>年报表</a-option>
      </a-select>
      <a-button type="primary">
        <template #icon>
          <icon-search />
        </template>
        <!-- Use the default slot to avoid extra spaces -->
        <template #default>搜索</template>
      </a-button>
      <a-button style="float: right; margin-right: 40px">
        <template #icon>
          <icon-download />
        </template>
        <!-- Use the default slot to avoid extra spaces -->
        <template #default>导出</template>
      </a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const value = ref(Date.now());
  const defaultValue = ref('日报表');

  const columnFirst = [
    {
      title: '时间',
      dataIndex: 'name',
      width: 100,
    },
    {
      title: '高压进线',
      dataIndex: 'salary',
      children: [
        {
          title: 'A相电流(A)',
          dataIndex: '',
          width: 120,
        },
        {
          title: 'B相电流(B)',
          dataIndex: '',
          width: 120,
        },
        {
          title: 'C相电流(C)',
          dataIndex: '',
          width: 120,
        },
      ],
    },
    {
      title: '高压出线1',
      dataIndex: 'address',
      children: [
        {
          title: 'A相电流(A)',
          dataIndex: '',
          width: 120,
          height: 50,
        },
        {
          title: 'B相电流(B)',
          dataIndex: '',
          width: 120,
        },
        {
          title: 'C相电流(C)',
          dataIndex: '',
          width: 120,
        },
      ],
    },
    {
      title: '14A(A)',
      dataIndex: 'email',
      width: 100,
    },
    {
      title: '14A(B)',
      dataIndex: 'email',
      width: 100,
    },
    {
      title: '14A(C)',
      dataIndex: 'email',
      width: 100,
    },
    {
      title: '13A(A)',
      dataIndex: 'email',
      width: 100,
    },
    {
      title: '13A(B)',
      dataIndex: 'email',
      width: 100,
    },
    {
      title: '13A(C)',
      dataIndex: 'email',
      width: 100,
    },
    {
      title: '13C(kWh)',
      dataIndex: 'email',
      width: 100,
    },
  ];
  const dataFirst = ref([
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

  const columnSecond = [
    {
      title: '时间',
      dataIndex: 'name',
    },
    {
      title: '高压母线相电压',
      dataIndex: 'salary',
      children: [
        {
          title: 'A相(kV)',
          dataIndex: '',
        },
        {
          title: 'B相(kV)',
          dataIndex: '',
        },
        {
          title: 'C相(kV)',
          dataIndex: '',
        },
      ],
    },
    {
      title: '高压母线线电压',
      dataIndex: 'address',
      children: [
        {
          title: 'AB(V)',
          dataIndex: '',
        },
        {
          title: 'BC(kV)',
          dataIndex: '',
        },
        {
          title: 'CA(kV)',
          dataIndex: '',
        },
      ],
    },
  ];
  const dataSecond = ref([
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

  const handleChange = (key) => {
    if (key === '月报表') {
      dataFirst.value = [
        {
          key: '1',
          name: '12',
          salary: 23000,
          address: '32 Park Road, London',
          email: 'jane.doe@example.com',
        },
        {
          key: '2',
          name: '122',
          salary: 25000,
          address: '35 Park Road, London',
          email: 'alisa.ross@example.com',
        },
        {
          key: '3',
          name: '343',
          salary: 22000,
          address: '31 Park Road, London',
          email: 'kevin.sandra@example.com',
        },
        {
          key: '4',
          name: '454',
          salary: 17000,
          address: '42 Park Road, London',
          email: 'ed.hellen@example.com',
        },
        {
          key: '5',
          name: '653',
          salary: 27000,
          address: '62 Park Road, London',
          email: 'william.smith@example.com',
        },
      ];
      dataSecond.value = [
        {
          key: '1',
          name: '12',
          salary: 23000,
          address: '32 Park Road, London',
          email: 'jane.doe@example.com',
        },
        {
          key: '2',
          name: '122',
          salary: 25000,
          address: '35 Park Road, London',
          email: 'alisa.ross@example.com',
        },
        {
          key: '3',
          name: '343',
          salary: 22000,
          address: '31 Park Road, London',
          email: 'kevin.sandra@example.com',
        },
        {
          key: '4',
          name: '454',
          salary: 17000,
          address: '42 Park Road, London',
          email: 'ed.hellen@example.com',
        },
        {
          key: '5',
          name: '653',
          salary: 27000,
          address: '62 Park Road, London',
          email: 'william.smith@example.com',
        },
      ];
    }
    console.log(key);
  };
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;
    position: relative;

    &-header {
      position: absolute;
      top: 80px;
      left: 20px;
      width: 100%;
    }
  }

  :deep(.arco-tabs-content) {
    margin-top: 50px;
  }

  :deep(.arco-table .arco-table-element) {
    margin: 0 !important;
  }
</style>
