<script setup lang="ts">
  import { ref, reactive } from 'vue';

  const columns = [
    { title: '排放源', dataIndex: 'source' },
    { title: '排放类型', dataIndex: 'type' },
    { title: '排放分类', dataIndex: 'classification' },
    { title: '排放范围', dataIndex: 'scope' },
    { title: '排放因子', dataIndex: 'factor' },
    { title: '单位', dataIndex: 'unit' },
    { title: '描述', dataIndex: 'describe' },
  ];
  const data = [
    {
      source: '电力',
      type: '外购电力产生的排放',
      classification: '间接排放',
      scope: '范围2',
      factor: '0.00061',
      unit: 'tCO2/kWh',
    },
    {
      source: '电力',
      type: '脱敏过程排放',
      classification: '运输间接排放',
      scope: '范围4',
      factor: '99*99.888888/88',
      unit: 'tCO2/kWh',
    },
    {
      source: '电力',
      type: '外购电力产生的排放',
      classification: '间接排放',
      scope: '范围1',
      factor: '0.00061',
      unit: 'tCO2/kWh',
    },
    {
      source: '天然气',
      type: '外购电力产生的排放',
      classification: '测试排放',
      scope: '范围4',
      factor: '0.00060',
      unit: 'tCO2/kWh',
    },
    {
      source: '热力',
      type: '外购电力产生的排放',
      classification: '间接排放',
      scope: '范围2',
      factor: '0.00061',
      unit: 'tCO2/kWh',
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
  <div class="factor"
    ><div
      ><a-button type="primary" @click="handleClick"
        ><icon-plus style="margin-right: 10px" />添加</a-button
      >
      <a-modal
        v-model:visible="visible"
        width="800px"
        title="新建排放源"
        @cancel="handleCancel"
        @ok="handleBeforeOk"
      >
        <a-form :model="form">
          <a-form-item
            label="排放范围"
            label-col-flex="100px"
            required
            show-colon
            tooltip="Please enter username"
          >
            <a-select default-value="范围2">
              <a-option value="范围2">范围2</a-option>
            </a-select>
          </a-form-item>
          <a-form-item
            label="排放分类"
            label-col-flex="100px"
            required
            show-colon
            tooltip="Please enter username"
          >
            <a-select default-value="间接排放">
              <a-option value="间接排放">间接排放</a-option>
            </a-select>
          </a-form-item>
          <a-form-item
            label="排放类型"
            label-col-flex="100px"
            required
            show-colon
          >
            <a-select default-value="1">
              <a-option value="1">外购电力产生的排放</a-option>
            </a-select>
          </a-form-item>
          <a-form-item
            label="排放源"
            label-col-flex="100px"
            required
            show-colon
          >
            <a-select default-value="间接排放">
              <a-option value="间接排放">电力</a-option>
            </a-select>
          </a-form-item>
          <a-form-item
            label="排放因子"
            label-col-flex="100px"
            required
            show-colon
            tooltip="Please enter username"
          >
            <a-input placeholder="please enter..." />
          </a-form-item>
          <a-form-item
            label="单位"
            label-col-flex="100px"
            show-colon
            tooltip="Please enter username"
          >
            <a-input />
          </a-form-item>
          <a-form-item
            label="描述"
            label-col-flex="100px"
            show-colon
            tooltip="Please enter username"
          >
            <a-textarea />
          </a-form-item>
        </a-form>
      </a-modal>
      <a-input-search
        placeholder="搜索排放源"
        style="width: 200px; position: absolute; right: 0"
      ></a-input-search></div
    ><div class="content"
      ><a-table
        class="table"
        :columns="columns"
        :bordered="{ wrapper: true, cell: true, headerCell: true }"
        :data="data"
      ></a-table></div
  ></div>
</template>

<style scoped lang="less">
  .factor {
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
  .strike-through {
    position: relative;
    display: inline-block;
  }

  .strike-through::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background-color: black;
    transform: rotate(15deg);
  }
</style>
