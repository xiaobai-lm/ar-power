<template>
  <div class="container">
    <a-layout class="container-layout">
      <a-layout-sider class="container-layout-sider">
        <div v-show="isShow">
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
        </div>
        <div style="margin-top: 10px">
          <a-space>标签：</a-space>
          <a-radio-group v-model="labelValue">
            <a-radio value="1">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 支路</a-tag>
              </template>
            </a-radio>
            <a-radio value="3">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 部门</a-tag>
              </template>
            </a-radio>
          </a-radio-group>
        </div>
        <a-divider></a-divider>
        <a-tree
          v-model="treeData"
          :data="treeData"
          :default-expanded-keys="['0-0-0']"
          :default-selected-keys="['0-0-0']"
          :show-line="true"
        />
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import { defineExpose, ref } from 'vue';

  const isShow = ref(true);

  const labelValue = ref('1');
  const checkValue = ref('1');
  const treeData = [
    {
      title: 'xxx广场',
      key: '0-0',
      children: [
        {
          title: 'Ⅱ',
          key: '0-0-0',
          children: [
            {
              title: '高压设备12',
              key: '0-0-0-0',
            },
            {
              title: '高压设备11',
              key: '0-0-0-1',
            },
          ],
        },
        {
          title: '高压',
          key: '0-0-1',
          children: [
            {
              title: '电气柜',
              key: '0-0-1-0',
            },
            {
              title: '电气柜2',
              key: '0-0-1-1',
            },
          ],
        },
      ],
    },
  ];
  defineExpose({
    isShow,
  });
</script>

<style lang="less" scoped>
  .container {
    &-layout {
      &-sider {
        height: 90vh;
        width: 100% !important;
      }

      &-content {
        width: 100%;
        height: 90vh;
        margin-left: 10px;

        &-tab1 {
          padding: 10px;
        }
      }
    }
  }

  .arco-tag-checked {
    color: #6c7fff;
    background-color: #6c7fff !important;
  }

  .arco-tag-checked:hover {
    color: black !important;
    background-color: #6c7fff;
  }

  .arco-tag {
    width: 100%;
    background-color: #33404c;
    margin-left: 10px;
  }

  .arco-tag:hover {
    width: 100%;
    color: #6c7fff;
  }

  .arco-radio .arco-radio-disabled {
    color: black !important;
  }

  .arco-tag .arco-tag-size-medium .arco-tag-checkable {
    color: black !important;
  }

  .arco-tag > .arco-tag-size-medium > .arco-tag-checkable {
    color: black !important;
  }
</style>
