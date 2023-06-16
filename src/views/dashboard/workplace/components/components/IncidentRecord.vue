<template>
  <div class="container">
    <a-table :columns="columns" :data="data" :bordered="{ cell: true }" />
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

const columns = [
  {
    title: "发生时间",
    dataIndex: "name",
  },
  {
    title: "关闭时间",
    dataIndex: "salary",
  },
  {
    title: "事件",
    dataIndex: "address",
    ellipsis: true,
    width: 150,
  },
  {
    title: "类型",
    dataIndex: "email",
    sortable: {
      sortDirections: ["ascend", "descend"],
    },
  },
  {
    title: "级别",
    dataIndex: "email",
    sortable: {
      sortDirections: ["ascend", "descend"],
    },
  },
  {
    title: "状态",
    dataIndex: "email",
    ellipsis: true,
    tooltip: { position: "left" },
    width: 200,
  },
];
const data = reactive([]);
</script>

<style lang="less" scoped>
.container {
  padding: 10px;
}
</style>
