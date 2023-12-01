<template>
  <div class="container">
    <a-layout class="layout-demo">
      <a-layout-sider collapsible breakpoint="xl" :collapsed="collapse">
        <a-menu
          :style="{ width: '200px', borderRadius: '4px' }"
          :collapsed="collapsed"
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
          <a-menu-item key="0_0"> 碳排总览 </a-menu-item>
          <a-menu-item key="1_0"> 碳流图 </a-menu-item>
          <a-menu-item key="2_0"> 碳排报告 </a-menu-item>
          <a-menu-item key="3_0"> 碳排报表 </a-menu-item>
          <a-menu-item key="4_0"> 碳排核算 </a-menu-item>
          <a-menu-item key="5_0"> 核算边界 </a-menu-item>
          <a-menu-item key="6_0"> 排放因子 </a-menu-item>
          <a-menu-item key="7_0"> 减碳项目 </a-menu-item>
          <a-menu-item key="8_0"> 碳资产 </a-menu-item>
          <a-menu-item key="9_0"> 碳交易 </a-menu-item>
        </a-menu>
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>

      <a-layout-content>
        <div v-if="items === '0'">
          <!-- 站点看板 -->
          <overview />
        </div>
        <div v-else-if="items === '1'">
          <flowDiagram />
        </div>
        <div v-else-if="items === '2'">
          <report />
        </div>
        <div v-else-if="items === '3'">
          <analysisReport />
        </div>
        <div v-else-if="items === '4'">
          <emissionAccounting />
        </div>
        <div v-else-if="items === '5'">
          <accountingBoundary />
        </div>
        <div v-else-if="items === '6'">
          <emissionFactor />
        </div>
        <div v-else-if="items === '7'">
          <ccerProject />
        </div>
        <div v-else-if="items === '8'">
          <carbonAssets />
        </div>
        <div v-else-if="items === '9'">
          <carbonTrading />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import router from '@/router';

  import { ref, Ref } from 'vue';
  // import { useRouter } from "vue-router";

  // const router = useRouter();
  import overview from './components/overview.vue';
  import flowDiagram from './components/flow-diagram.vue';
  import report from './components/report.vue';
  import analysisReport from './components/analysis-report.vue';
  import emissionAccounting from './components/emission-accounting.vue';
  import accountingBoundary from './components/accounting-boundary.vue';
  import emissionFactor from './components/emission-factor.vue';
  import ccerProject from './components/ccer-project.vue';
  import carbonAssets from './components/carbon-assets.vue';
  import carbonTrading from './components/carbon-trading.vue';

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
