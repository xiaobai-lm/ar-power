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
        <div v-else-if="3"
          ><div class="list-right-content">
            <div style="margin-top: 5px" class="color">380V配电抽屉开关柜</div
            ><div
              class="list-contents"
              style="
                position: relative;
                background-color: #1e1f22;
                width: 99%;
                height: 300px;
                margin-top: 5px;
              "
              ><div
                class="list-contents-top"
                style="
                  position: absolute;
                  right: 0;
                  height: 35px;
                  line-height: 35px;
                "
                ><a-space
                  ><a-input-search
                    style="width: 150px; height: 25px"
                  /><a-button style="height: 25px" type="primary"
                    ><icon-download
                      style="margin-right: 5px"
                    />下载模版</a-button
                  ><a-button style="height: 25px" type="primary"
                    ><icon-upload style="margin-right: 5px" />导出</a-button
                  ></a-space
                ></div
              ><div style="padding-top: 35px; width: 98%; margin-left: 1%"
                ><a-table
                  :columns="columns"
                  :data="data"
                  :row-selection="rowSelection"
                  :bordered="{ cell: true, wrapper: true }"
                  :scroll="scroll"
                ></a-table></div></div></div
        ></div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
  // 导入Vue中的reactive和ref模块
  import { reactive, ref } from 'vue';

  // 导入组件
  import Equipment from './components/Equipment.vue';
  import Incident from './components/IncidentRecord.vue';
  import RealData from './components/RealTimeData.vue';
  import electronicData from './components/electronic-data.vue';
  import GeneralSituation from './components/GeneralSituation.vue';
  import HistoricalTrend from './components/HistoricalTrend.vue';
  import DataReport from './components/DataReport.vue';
  import DeviceInformation from './components/DeviceInformation.vue';
  import maintenanceHistory from './components/maintenance-history.vue';

  // 定义变量isShow，并初始化为2
  const isShow = ref(2);
  // 定义变量x，并循环赋值
  const x = [];
  for (let i = 1; i <= 100; i += 1) {
    x.push(i);
  }
  // 定义点击tabsHandleClick事件处理函数，根据传入的key值切换显示页面
  const tabsHandleClick = (key: string[]) => {
    if (key[0] === '0-0-1-1') {
      isShow.value = 1;
    } else if (key[0] !== '0-0-1-1') {
      isShow.value = 2;
    }
  };
  // 定义点击tabClick事件处理函数，根据传入的key值切换显示页面
  const tabClick = (key: any) => {
    if (key === '2') {
      isShow.value = 3;
    } else isShow.value = 2;
  };
  // 定义treeData变量，存储树形结构数据
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
  // 定义scroll变量，存储滚动条的范围
  const scroll = {
    x: 2000,
    y: 200,
  };
  // 定义columns变量，存储表格的列配置
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      width: 100,
      fixed: 'left',
    },
    {
      title: '名称',
      dataIndex: 'name',
      width: 150,
      fixed: 'left',
    },
    {
      title: '设备目录',
      dataIndex: 'type',
      width: 200,
    },
    {
      title: '日期',
      dataIndex: 'status',
      width: 120,
    },
    {
      title: '设备型号',
      dataIndex: 'operation',
    },
    {
      title: '生产厂家',
      dataIndex: 'manufacturer',
    },
    {
      title: '厂家联系人',
      dataIndex: 'contact',
    },
    {
      title: '厂家联系电话',
      dataIndex: 'phone',
    },
  ];
  // 定义rowSelection变量，配置多选表格的选项
  const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
    onlyCurrent: false,
  });
  // 定义data变量，存储数据
  const data = reactive([
    {
      key: '1',
      index: 1,
      name: '设备1',
      type: '设备目录1',
      status: '2021-01-01',
      operation: '设备型号1',
      manufacturer: '生产厂家1',
      contact: '厂家联系人1',
      phone: '厂家联系电话1',
    },
    {
      key: '2',
      index: 2,
      name: '设备2',
      type: '设备目录2',
      status: '2021-01-02',
      operation: '设备型号2',
      manufacturer: '生产厂家2',
      contact: '厂家联系人2',
      phone: '厂家联系电话2',
    },
  ]);
  // 定义selectedIndex变量，配置下拉框的选项
  const selectedIndex = ref(0);
  // 定义leftClick函数，点击修改按钮后的事件处理函数
  const leftClick = (i: any) => {
    selectedIndex.value = i;
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
        width: 97%;
        margin: 10px 20px;
        color: #c7c6c6;
        .list-contents {
          background-color: #1e1f22;
          position: relative;
          width: 100%;
          .list-contents-top {
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }
  .color {
    color: #fcfdfd;
  }
</style>
