<template>
  <div class="container">
    <a-layout class="container-layout">
      <a-layout-sider class="container-layout-sider">
        <a-tree
          :data="treeData"
          :show-line="true"
          :default-expanded-keys="['0-0-0']"
          :default-selected-keys="['0-0-0']"
          @select="tabsHandleClick"
        />
      </a-layout-sider>
      <a-layout-content class="container-layout-content">
        <Equipment v-if="isShow === true" />
        <a-tabs v-else type="card-gutter" auto-switch>
          <a-tab-pane key="1" title="概况"> <GeneralSituation /></a-tab-pane>
          <a-tab-pane key="2" title="实时数据"> <RealData /></a-tab-pane>
          <a-tab-pane key="3" title="事件记录"> <Incident /> </a-tab-pane>
          <a-tab-pane key="4" title="运行状态统计">
            <RunningState />
          </a-tab-pane>
          <a-tab-pane key="5" title="历史趋势"><HistoricalTrend /> </a-tab-pane>
          <a-tab-pane key="6" title="数据报表"> <DataReport /> </a-tab-pane>
        </a-tabs>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import * as echarts from 'echarts';
  import Equipment from './Equipment.vue';
  import Incident from './components/IncidentRecord.vue';
  import RealData from './components/RealTimeData.vue';
  import RunningState from './components/RunningState.vue';
  import GeneralSituation from './components/GeneralSituation.vue';
  import HistoricalTrend from './components/HistoricalTrend.vue';
  import DataReport from './components/DataReport.vue';

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
        height: 85vh;
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
