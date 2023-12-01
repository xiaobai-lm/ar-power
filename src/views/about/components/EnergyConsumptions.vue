<template>
  <div class="container">
    <a-row>
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
      <a-col :span="20">
        <a-tabs v-model="tabsValue" @change="handleChange">
          <a-tab-pane key="1" title="基本配置">
            <a-table
              :bordered="{ cell: true, wrapper: true }"
              :columns="columns"
              :data="data"
              style="padding: 10px"
            >
            </a-table>
          </a-tab-pane>
          <a-tab-pane key="2" title="偏差配置">
            <a-table
              :bordered="{ cell: true, wrapper: true }"
              :columns="columns2"
              :data="data2"
            ></a-table>
          </a-tab-pane>
        </a-tabs>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import leftSide from '../../../components/leftSide/index.vue';

  const checkValue = ref('1');
  const labelValue = ref('1');
  const tabsValue = ref(1);

  const handleChange = () => {
    console.log('111');
  };

  const columns = [
    {
      title: '序号',
      dataIndex: 'serialNumber',
    },
    {
      title: '变量编码',
      dataIndex: 'VariableCoding',
    },
    {
      title: '计划变量',
      dataIndex: 'PlanVariable',
    },
    {
      title: '类别',
      dataIndex: 'category',
    },
    {
      title: '支路',
      dataIndex: 'branch',
    },
    {
      title: '分项',
      dataIndex: 'subitem',
    },
    {
      title: '部门',
      dataIndex: 'department',
    },
    {
      title: '楼栋',
      dataIndex: 'Ban',
    },
    {
      title: '设备',
      dataIndex: 'equipment',
    },
  ];

  const data = reactive([
    {
      serialNumber: '1',
      VariableCoding: 'nm20231022_G01_EPf',
      PlanVariable: '其他',
      category: '电',
      branch: '/高压/1段/高压设备1',
      subitem: '',
      department: '部门A',
      Ban: '',
      equipment: '',
    },
  ]);

  const columns2 = [
    {
      title: '序号',
      dataIndex: 'serialNumber',
    },
    {
      title: '变量编码',
      dataIndex: 'VariableCoding',
    },
    {
      title: '基准值',
      dataIndex: 'ReferenceValue',
    },
    {
      title: '告警门限',
      dataIndex: 'AlarmThreshold',
    },
  ];

  const data2 = reactive([
    {
      serialNumber: '1',
      VariableCoding: 'nm',
      ReferenceValue: '',
      AlarmThreshold: '',
    },
  ]);
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;
  }
</style>
