<template>
  <div class="container">
    <a-layout class="container-layout">
      <a-layout-sider class="container-layout-sider">
        <a-tree
          v-model="treeData"
          :data="treeData"
          :default-expanded-keys="['0-0-0']"
          :default-selected-keys="['0-0-0']"
          :show-line="true"
          @select="tabsHandleClick"
        />
      </a-layout-sider>
      <a-layout-content class="container-layout-content">
        <a-breadcrumb>
          <a-breadcrumb-item v-for="tab in treeData">{{
            tab
          }}</a-breadcrumb-item>
        </a-breadcrumb>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const isShow = ref(false);
  const tabsHandleClick = (key: string[]) => {
    if (key[0] === '0-0-1-1') {
      isShow.value = true;
    } else if (key[0] !== '0-0-1-1') {
      isShow.value = false;
    }
  };
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
</script>

<style lang="less" scoped>
  .container {
    &-layout {
      &-sider {
        height: 90vh;
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
</style>
