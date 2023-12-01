<template>
  <div class="container">
    <a-layout class="container-layout">
      <a-layout-sider class="container-layout-sider">
        <a-tree
          :data="treeData"
          :default-expanded-keys="['0-0-0']"
          :default-selected-keys="['0-0-0']"
          :show-line="true"
          @select="tabsHandleClick"
        />
      </a-layout-sider>
      <a-layout-content>
        <RealData />
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import RealData from './components/RealTimeData.vue';

  const tabsHandleClick = (title: any, key: any) => {
    console.log(title, key);
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
        height: 88vh;
      }

      &-content {
        width: 100%;
        height: 85vh;
        margin-left: 10px;

        &-tab1 {
          padding: 10px;
        }
      }
    }
  }
</style>
