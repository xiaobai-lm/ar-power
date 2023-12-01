<script setup lang="ts">
  import { ref } from 'vue';
  import Table from './analysis-table.vue';

  const checkStrictly = ref(false);

  const table = ref('Beijing1');
  const treeData = [
    {
      title: '嘉德股份',
      key: '0-0',
      children: [
        {
          title: '产业园',
          key: '0-0-0',

          children: [
            {
              title: '总进线',
              key: '0-0-0-0',
              children: [
                {
                  title: '热力',
                  key: '0-0-0-0-1',
                },
                {
                  title: '电力',
                  key: '0-0-0-0-2',
                },
              ],
            },
          ],
        },
        {
          title: '科技园',
          key: '0-0-1',
          children: [
            {
              title: '总进线',
              key: '0-0-1-0',
              children: [
                {
                  title: '热力',
                  key: '0-0-1-0-1',
                },
                {
                  title: '电力',
                  key: '0-0-1-0-2',
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  const columns = [
    { title: '名称', dataIndex: 'name', width: 100, fixed: 'left' },
  ];
  const list = {
    title: '',
    dataIndex: '',
  };
  for (let i = 0; i < 15; i += 1) {
    list.title = `${i}`;
    list.dataIndex = `${i}`;
    columns.push(JSON.parse(JSON.stringify(list)));
  }
  const data = [{ name: '产业园/总进线/热力', 0: '1', 1: '2' }];
  const scroll = { x: 2000, y: 200 };
</script>

<template>
  <div class="analysis"
    ><a-row :gutter="10"
      ><a-col :span="6"
        ><div class="left"
          ><div style="width: 90%; margin-left: 5%; padding-top: 20px"
            ><a-input-search></a-input-search></div
          ><div style="margin-top: 20px">
            <a-tree
              :data="treeData"
              :check-strictly="checkStrictly"
              :default-expanded-keys="['0-0-0']"
              :default-selected-keys="['0-0-0', '0-0-1']"
              :checkable="true" /></div></div></a-col
      ><a-col :span="18"
        ><div
          ><div style="position: relative"
            ><a-space
              ><a-radio-group
                type="button"
                default-value="Beijing1"
                size="large"
              >
                <a-radio value="Beijing1">月</a-radio>
                <a-radio value="Beijing">年</a-radio>
              </a-radio-group>
              <a-range-picker style="width: 230px"></a-range-picker>
              <a-button
                ><icon-search style="margin-right: 10px" />查询</a-button
              >
              <a-button
                ><icon-upload style="margin-right: 10px" />导出</a-button
              >
              <a-radio-group
                v-model="table"
                type="button"
                size="large"
                style="position: absolute; right: 0"
              >
                <a-radio value="Beijing1">图标</a-radio>
                <a-radio value="Beijing">表格</a-radio>
              </a-radio-group>
            </a-space> </div
          ><div v-if="table === 'Beijing1'"><Table /></div>
          <div v-else style="margin-top: 10px"
            ><a-table :columns="columns" :scroll="scroll" :data="data"
          /></div> </div></a-col></a-row
  ></div>
</template>

<style scoped lang="less">
  .analysis {
    width: 97%;
    margin: 10px 15px;
    color: #c7c6c6;
    .left {
      background-color: #232323;
      height: 680px;
    }
  }
</style>
