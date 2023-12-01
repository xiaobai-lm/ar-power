<script setup lang="ts">
  import { reactive, ref } from 'vue';

  const columns = [
    { title: '项目编号', dataIndex: 'source', align: 'center' },
    { title: '项目名称', dataIndex: 'type', align: 'center' },
    { title: '类型', dataIndex: 'classification', align: 'center' },
    { title: '投入成本', dataIndex: 'scope', align: 'center' },
    { title: '预期减排量', dataIndex: 'factor', align: 'center' },
    { title: '累计核证减排量', dataIndex: 'unit', align: 'center' },
    { title: '启动时间', dataIndex: 'describe', align: 'center' },
    { title: '状态', slotName: 'state', align: 'center' },
    { title: '操作', slotName: 'do', align: 'center' },
  ];
  const data = [
    {
      source: 'N0001',
      type: '光伏',
      classification: '光伏发电',
      scope: '200000',
      factor: '10000',
      unit: '200',
      describe: '2023-08-19',
    },
    {
      source: 'N0002',
      type: '绿植',
      classification: '林业碳汇',
      scope: '10000',
      factor: '5000',
      unit: '300',
      describe: '2023-09-23',
    },
    {
      source: 'N0003',
      type: '厨房改气改造',
      classification: '沼气利用',
      scope: '10000',
      factor: '5',
      unit: '3',
      describe: '2023-12-13',
    },
  ];
  const columns1 = [
    { title: '序号', dataIndex: 'serialNumber', align: 'center' },
    { title: '减排项目', dataIndex: 'photovoltaic', align: 'center' },
    { title: '减排时段', dataIndex: 'time', align: 'center' },
    { title: '核证减排量(吨)', dataIndex: 'num', align: 'center' },
    { title: '核证时间', dataIndex: 'heTime', align: 'center' },
    { title: '操作', slotName: 'do', align: 'center' },
  ];
  const data1 = [
    {
      serialNumber: '1',
      photovoltaic: '光伏',
      time: '2022-01-01~2022-12-31',
      num: '200',
      heTime: '2023-04-27',
    },
  ];
  const visible = ref(false);
  const form = reactive({
    name: '',
    post: '',
  });
  const handleClick = () => {
    visible.value = true;
  };
  const handleBeforeOk = () => {
    form.name = 'x';
  };
  const handleCancel = () => {
    visible.value = false;
  };
</script>

<template>
  <div class="ccer"
    ><div class="content"
      ><a-table
        class="table"
        :columns="columns"
        :bordered="{ wrapper: true, cell: true, headerCell: true }"
        :data="data"
      >
        <template #state>
          <a-switch disabled default-checked>
            <template #checked> 运行 </template>
            <template #unchecked> 关闭 </template>
          </a-switch></template
        >
        <template #do
          ><a-button type="text" @click="handleClick"
            >CCER列表</a-button
          ></template
        > </a-table
      ><a-modal
        v-model:visible="visible"
        width="800px"
        title="光伏的CCER列表"
        @cancel="handleCancel"
        @ok="handleBeforeOk"
      >
        <a-table
          :columns="columns1"
          :data="data1"
          :bordered="{ wrapper: true, cell: true, headerCell: true }"
        ></a-table> </a-modal></div
  ></div>
</template>

<style scoped lang="less">
  .ccer {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    position: relative;
    .content {
      margin-top: 10px;
      background-color: #232323;
    }
    .table {
      width: 98%;
      margin-left: 1%;
      padding-top: 10px;
    }
  }
</style>
