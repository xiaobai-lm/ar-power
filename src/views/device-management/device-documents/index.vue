<template>
  <div class="container">
    <a-layout class="container-layout">
      <a-layout-sider
        class="container-layout-sider"
        style="margin-left: 10px; width: 250px"
      >
        <a-tabs @tab-click="tabClick">
          <a-tab-pane key="1" title="层级结构">
            <a-tree
              :data="treeData"
              :show-line="true"
              :default-expanded-keys="['0-0-0']"
              :default-selected-keys="['0-0-0']"
              @select="tabsHandleClick"
          /></a-tab-pane>
          <a-tab-pane key="2" title="分类列表">
            <div class="list"
              ><div><a-input-search /></div
              ><div
                ><div>#</div
                ><a-button
                  v-for="(i, index) in x"
                  :key="index"
                  type="text"
                  class="list-content"
                  :style="{
                    background: index === selectedIndex ? '#2cb0be' : 'black',
                    color: index === selectedIndex ? 'white' : ' #a2a0a0',
                  }"
                  @click="leftClick(index)"
                  ><span style="position: absolute; left: 10%">380电缆头</span
                  ><span style="position: absolute; right: 10%"
                    >0</span
                  ></a-button
                ></div
              ></div
            ></a-tab-pane
          >
        </a-tabs>
      </a-layout-sider>
      <a-layout-content class="container-layout-content">
        <Equipment v-if="isShow === 1" />
        <a-tabs
          v-else-if="isShow === 2"
          type="card-gutter"
          auto-switch
          destroy-on-hide
        >
          <a-tab-pane key="0" title="设备信息">
            <DeviceInformation
          /></a-tab-pane>
          <a-tab-pane key="1" title="概况"> <GeneralSituation /></a-tab-pane>
          <a-tab-pane key="2" title="实时数据"> <RealData /></a-tab-pane>
          <a-tab-pane key="3" title="事件记录"> <Incident /> </a-tab-pane>
          <a-tab-pane key="4" title="运维历史">
            <maintenanceHistory :list="['1', '2', '3', '4']" />
          </a-tab-pane>
          <a-tab-pane key="5" title="缺陷记录">
            <maintenanceHistory :list="['5', '6']" />
          </a-tab-pane>
          <a-tab-pane key="6" title="历史趋势"><HistoricalTrend /> </a-tab-pane>
          <a-tab-pane key="7" title="数据报表"> <DataReport /> </a-tab-pane>
          <a-tab-pane key="8" title="电子资料"> <electronicData /> </a-tab-pane>
        </a-tabs>
        <div v-else-if="3"><div class="list-right-content"> s</div></div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  import Equipment from './components/Equipment.vue';
  import Incident from './components/IncidentRecord.vue';
  import RealData from './components/RealTimeData.vue';
  import electronicData from './components/electronic-data.vue';
  import GeneralSituation from './components/GeneralSituation.vue';
  import HistoricalTrend from './components/HistoricalTrend.vue';
  import DataReport from './components/DataReport.vue';
  import DeviceInformation from './components/DeviceInformation.vue';
  import maintenanceHistory from './components/maintenance-history.vue';

  const isShow = ref(2);
  const x = [];
  for (let i = 1; i <= 100; i += 1) {
    x.push(i);
  }
  const tabsHandleClick = (key: string[]) => {
    if (key[0] === '0-0-1-1') {
      isShow.value = 1;
    } else if (key[0] !== '0-0-1-1') {
      isShow.value = 2;
    }
  };
  const tabClick = (key: any) => {
    if (key === '2') {
      isShow.value = 3;
    } else isShow.value = 2;
  };
  const treeData = [
    {
      title: 'xxx广场',
      key: '0-0',
      children: [
        {
          title: '10KV室内部分',
          key: '0-0-0',
          children: [
            {
              title: 'G01高压进线柜',
              key: '0-0-0-0',
            },
            {
              title: 'G02高压进线柜',
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
  const selectedIndex = ref(0);
  // 点击修改按钮的背景颜色
  const leftClick = (i: any) => {
    selectedIndex.value = i;
    //   点击其他按钮以后的背景颜色恢复原样
  };
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
    color: #a2a0a0;
    .list {
      margin-left: 5%;
      width: 90%;
      .list-content {
        width: 100%;
        height: 30px;
        background-color: #000000;
        line-height: 30px;
        border-radius: 6px;
        padding: 0 15px;
        margin-top: 5px;
        color: #a2a0a0;
      }
      .list-right-content {
      }
    }
  }
</style>
