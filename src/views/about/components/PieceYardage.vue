<template>
  <div class="container">
    <a-tabs v-model="tabsValue" @change="handleClcik">
      <a-tab-pane key="1" title="产品">
        <a-radio-group v-model="radioValue">
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable> 月</a-tag>
            </template>
          </a-radio>
          <a-radio value="2">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable> 年</a-tag>
            </template>
          </a-radio>
        </a-radio-group>
        <a-space style="margin: 0 10px 0 20px">时间:</a-space>
        <a-date-picker style="width: 200px; margin-right: 20px">
        </a-date-picker>
        <a-button type="primary">
          <template #icon>
            <icon-search></icon-search>
          </template>
          查询
        </a-button>

        <a-table
          :bordered="{ cell: true }"
          :columns="columns"
          :data="data"
          stripe
          style="margin-top: 10px"
        >
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="2" title="工序">
        <a-radio-group v-model="radioValue">
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable> 月</a-tag>
            </template>
          </a-radio>
          <a-radio value="2">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable> 年</a-tag>
            </template>
          </a-radio>
        </a-radio-group>
        <a-space style="margin: 0 10px 0 20px">时间:</a-space>
        <a-date-picker style="width: 200px; margin-right: 20px">
        </a-date-picker>
        <a-button type="primary">
          <template #icon>
            <icon-search></icon-search>
          </template>
          查询
        </a-button>

        <a-table
          :bordered="{ cell: true }"
          :columns="columns2"
          :data="data2"
          stripe
          style="margin-top: 10px"
        >
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';

  const tabsValue = ref(2);
  const radioValue = ref('1');

  const columns = ref([
    {
      title: '产品',
      dataIndex: 'product',
    },
    {
      title: '单位产品能耗',
      dataIndex: 'unitProduct',
    },
    {
      title: '先进值',
      children: [
        {
          title: '国家',
          dataIndex: 'country',
        },
      ],
    },
    {
      title: '限定值',
      dataIndex: 'LimitValue',
    },
    {
      title: '准入值',
      dataIndex: 'AdmissionValue',
    },
    {
      title: '单位',
      dataIndex: 'unit',
    },
  ]);
  const columns2 = ref(
    (columns.value = [
      {
        title: '工序',
        dataIndex: 'product',
      },
      {
        title: '单位产品能耗',
        dataIndex: 'unitProduct',
      },
      {
        title: '先进值',
        children: [
          {
            title: '国家',
            dataIndex: 'country',
          },
        ],
      },
      {
        title: '限定值',
        dataIndex: 'LimitValue',
      },
      {
        title: '准入值',
        dataIndex: 'AdmissionValue',
      },
      {
        title: '单位',
        dataIndex: 'unit',
      },
    ])
  );
  const data = reactive([
    {
      product: '合成氨',
      unitProduct: '',
      country: '<=1150',
      LimitValue: '<=1150',
      AdmissionValue: '<=1350',
      unit: '千克标准煤/吨',
    },
    {
      product: '乙烯',
      unitProduct: '',
      country: '<=1150',
      LimitValue: '<=1150',
      AdmissionValue: '<=1350',
      unit: '千克标准煤/吨',
    },
    {
      product: '二氯乙烯',
      unitProduct: '',
      country: '<=1150',
      LimitValue: '<=1150',
      AdmissionValue: '<=1350',
      unit: '千克标准煤/吨',
    },
  ]);
  const data2 = reactive([
    {
      product: '合成氨',
      unitProduct: '',
      country: '<=1150',
      LimitValue: '<=1150',
      AdmissionValue: '<=1350',
      unit: '千克标准煤/吨',
    },
    {
      product: '乙烯',
      unitProduct: '',
      country: '<=1150',
      LimitValue: '<=1150',
      AdmissionValue: '<=1350',
      unit: '千克标准煤/吨',
    },
    {
      product: '二氯乙烯',
      unitProduct: '',
      country: '<=1150',
      LimitValue: '<=1150',
      AdmissionValue: '<=1350',
      unit: '千克标准煤/吨',
    },
  ]);
  const handleClcik = () => {
    console.log(tabsValue.value);
    console.log('aa');
  };
</script>

<style scoped>
  .container {
    padding: 10px;
    color: var(--color-text-2);
  }
</style>
