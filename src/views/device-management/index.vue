<template>
  <div class="container">
    <a-layout class="layout-demo">
      <a-layout-sider collapsible breakpoint="xl">
        <a-menu
          :style="{ width: '200px', borderRadius: '4px' }"
          :default-open-keys="['0']"
          :default-selected-keys="['0_0']"
          @menu-item-click="handleClick"
        >
          <!-- <a-sub-menu v-for="List in ListValue" :key="List.id">
            <template #title>{{ List.title }}</template>
            <a-menu-item v-for="item in List.ListValue2" :key="item.id" @click="handleClick(item)">
              {{ item.icon }}
              {{ item.first}}
            </a-menu-item>
          </a-sub-menu> -->
          <a-menu-item key="0_0"> 设备档案 </a-menu-item>
          <a-menu-item key="1_0"> 开关寿命评估 </a-menu-item>
          <a-menu-item key="2_0"> 星标设备 </a-menu-item>
          <a-menu-item key="3_0"> 属性字典 </a-menu-item>
          <a-menu-item key="4_0"> 电子档案 </a-menu-item>
          <a-menu-item key="5_0"> 产品库 </a-menu-item>
          <a-menu-item key="6_0"> 备品备件 </a-menu-item>
        </a-menu>
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>

      <a-layout-content>
        <div v-if="items === '0'">
          <!-- 站点看板 -->
          <deviceDocuments />
        </div>
        <div v-else-if="items === '1'">
          <switchLifeMonitor />
        </div>
        <div v-else-if="items === '2'">
          <userDevice />
        </div>
        <div v-else-if="items === '3'">
          <deviceAttribute />
        </div>
        <div v-else-if="items === '4'">
          <emissionAccounting />
        </div>
        <div v-else-if="items === '5'">
          <productLibrary />
        </div>
        <div v-else-if="items === '6'">
          <emissionFactor />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import { ref, Ref } from 'vue';
  import deviceDocuments from './device-documents/index.vue';
  import switchLifeMonitor from './switch-life-monitor/index.vue';
  import userDevice from './user-device/index.vue';
  import deviceAttribute from './device-attribute/index.vue';
  import productLibrary from './product-library/index.vue';

  const items: Ref<string> = ref('0');

  const handleClick = (key: any) => {
    switch (key) {
      case '0_0':
        items.value = '0';
        break;
      case '1_0':
        items.value = '1';
        break;
      case '2_0':
        items.value = '2';

        break;
      case '3_0':
        items.value = '3';
        break;
      case '4_0':
        items.value = '4';
        break;
      case '5_0':
        items.value = '5';
        break;
      case '6_0':
        items.value = '6';
        break;
      case '7_0':
        items.value = '7';
        break;
      case '8_0':
        items.value = '8';
        break;
      case '9_0':
        items.value = '9';
        break;
      default:
        items.value = '0';
    }
    // if (key === '0_0') {
    //   items.value = '0';
    // } else if (key === '1_0') {
    //   items.value = '1';
    // } else if (key === '2_0') {
    //   items.value = '2';
    // } else if (key === '3_0') {
    //   items.value = '3';
    // } else if (key === '4_0') {
    //   items.value = '4';
    // } else if (key === '5_0') {
    //   items.value = '5';
    // } else if (key === '6_0') {
    //   items.value = '6';
    // } else if (key === '7_0') {
    //   items.value = '7';
    // } else if (key === '8_0') {
    //   items.value = '8';
    // } else if (key === '9_0') {
    //   items.value = '9';
    // }
  };
</script>

<style lang="less">
  .arco-layout-sider-children {
    overflow-y: auto;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background-color: #556170;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #78818c;
  }

  .layout-demo {
    height: 88vh;
  }

  .arco-radio-group .arco-radio {
    margin: 0;
  }

  .arco-radio {
    padding: 0;
  }

  .arco-tag {
    border-radius: unset;
  }
  .arco-tabs-type-card > .arco-tabs-content {
    border: none;
  }
</style>
