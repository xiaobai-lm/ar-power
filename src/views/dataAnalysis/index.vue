<template>
  <div class="container">
    <a-layout class="layout-demo">
      <a-layout-sider :collapsed="collapse" breakpoint="xl" collapsible>
        <a-menu
          :collapsed="collapsed"
          :default-open-keys="['0']"
          :default-selected-keys="['0_0']"
          :style="{ width: '200px', borderRadius: '4px' }"
          @menu-item-click="handleClick"
        >
          <!-- <a-sub-menu v-for="List in ListValue" :key="List.id">
            <template #title>{{ List.title }}</template>
            <a-menu-item v-for="item in List.ListValue2" :key="item.id" @click="handleClick(item)">
              {{ item.icon }}
              {{ item.first}}
            </a-menu-item>
          </a-sub-menu> -->
          <a-menu-item key="0_0">
            <icon-settings />
            月度报告
          </a-menu-item>
          <a-menu-item key="1_0">
            <icon-settings />
            同比分析
          </a-menu-item>
          <a-menu-item key="2_0">
            <icon-settings />
            环比分析
          </a-menu-item>
          <a-menu-item key="3_0">
            <icon-settings />
            变位分析
          </a-menu-item>
          <a-menu-item key="4_0">
            <icon-settings />
            能源同比分析
          </a-menu-item>
          <a-menu-item key="5_0">
            <icon-settings />
            能源环比分析
          </a-menu-item>
          <a-menu-item key="6_0">
            <icon-settings />
            手动抄表
          </a-menu-item>
        </a-menu>
        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>

      <a-layout-content>
        <div v-if="items === '0'">
          <!-- 能耗总览 -->
          <MonthlyReport />
        </div>
        <div v-if="items === '1'">
          <!-- 能耗总览 -->
          <TogetherAnalyse />
        </div>
        <div v-if="items === '2'">
          <RingComparisonAnalysis />
        </div>
        <div v-if="items === '3'">
          <DisplacementAnalysis />
        </div>
        <div v-if="items === '4'">
          <EnergySharing />
        </div>
        <div v-if="items === '5'">
          <EnergyChainAnalysis />
        </div>
        <div v-if="items === '6'">
          <ManualMeterReading />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import { ref, Ref } from 'vue';
  import MonthlyReport from './components/MonthlyReport.vue';
  import TogetherAnalyse from './components/TogetherAnalyse.vue';
  import RingComparisonAnalysis from './components/RingComparisonAnalysis.vue';
  import DisplacementAnalysis from './components/DisplacementAnalysis.vue';
  import EnergySharing from './components/EnergySharing.vue';
  import EnergyChainAnalysis from './components/EnergyChainAnalysis.vue';
  import ManualMeterReading from './components/ManualMeterReading.vue';

  const items: Ref<string> = ref('0');

  const handleClick = (key: any) => {
    if (key === '0_0') {
      items.value = '0';
    } else if (key === '1_0') {
      items.value = '1';
    } else if (key === '2_0') {
      items.value = '2';
    } else if (key === '3_0') {
      items.value = '3';
    } else if (key === '4_0') {
      items.value = '4';
    } else if (key === '5_0') {
      items.value = '5';
    } else if (key === '6_0') {
      items.value = '6';
    }
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
</style>
