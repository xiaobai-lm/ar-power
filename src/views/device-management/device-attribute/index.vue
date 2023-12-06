<script setup lang="ts">
  // 定义scroll变量，存储滚动条的范围
  import { reactive, ref } from 'vue';

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
  const x = [];
  for (let i = 1; i <= 100; i += 1) {
    x.push(i);
  }
  // 定义selectedIndex变量，配置下拉框的选项
  const selectedIndex = ref(0);
  // 定义leftClick函数，点击修改按钮后的事件处理函数
  const leftClick = (i: any) => {
    selectedIndex.value = i;
  };
</script>

<template>
  <div class="container">
    <a-layout>
      <a-layout-sider class="left" theme="dark"
        ><div class="list"
          ><div><a-input-search style="height: 25px" /></div
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
              ><span style="position: absolute; right: 10%">0</span></a-button
            ></div
          ></div
        ></a-layout-sider
      >
      <a-layout-content class="right"
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
              style="
                padding-top: 35px;
                width: 98%;
                margin-left: 1%;
                margin-top: 10px;
              "
              ><a-table
                :columns="columns"
                :data="data"
                :row-selection="rowSelection"
                :bordered="{ cell: true, wrapper: true }"
                :scroll="scroll"
              ></a-table></div></div></div
      ></a-layout-content>
    </a-layout>
  </div>
</template>

<style scoped lang="less">
  .container {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    .left {
      background-color: #232323;
      padding: 10px 0;
    }
    .right {
      margin-left: 10px;
    }
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
