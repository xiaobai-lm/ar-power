<template>
  <div class="container">
    <a-table :columns="columns" :data="data" :bordered="{ headerCell: true, cell: true }">
      <template #AlarmLevel="{ record }">
        <div :style="(FirstClassWarning, SecondClassWarning, ThirdClassWarning)">
          {{ record.AlarmLevel }}
        </div>
      </template>
    </a-table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const FirstClassWarning = ref("padding: 2px 10px;background-color: red;");
const SecondClassWarning = ref("padding: 2px 10px;background-color: #ff9e2b;");
const ThirdClassWarning = ref("padding: 2px 10px;background-color: #ffc81e;");

const columns = [
  {
    title: "告警类型",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "类型分组",
    dataIndex: "group",
    key: "group",
  },
  {
    title: "级别管理",
    children: [
      {
        title: "告警级别",
        slotName: "AlarmLevel",
        key: "AlarmLevel",
      },
      {
        title: "告警提示",
        dataIndex: "AlarmPrompt",
        key: "AlarmPrompt",
      },
    ],
  },
  {
    title: "触发管理",
    children: [
      {
        title: "触发类型",
        dataIndex: "TriggerType",
        key: "TriggerType",
      },
      {
        title: "触发延时",
        dataIndex: "TriggerDelay",
        key: "TriggerDelay",
      },
      {
        title: "自动确认",
        dataIndex: "Automatic",
        key: "Automatic",
      },
    ],
  },
  {
    title: "编码",
    dataIndex: "Encode",
    key: "Encode",
  },
];
const data = [
  {
    key: "1",
    type: "John Brown",
    group: 98,
    AlarmLevel: "故障",
    AlarmPrompt: 70,
    TriggerType: "1212",
    TriggerDelay: "1212",
    Automatic: "1212",
    Encode: "1212",
  },
  {
    key: "2",
    type: "John Brown",
    group: 98,
    AlarmLevel: "一级警告",
    AlarmPrompt: 70,
    TriggerType: "1212",
    TriggerDelay: "1212",
    Automatic: "1212",
    Encode: "1212",
  },
  {
    key: "3",
    type: "John Brown",
    group: 98,
    AlarmLevel: "二级警告",
    AlarmPrompt: 70,
    TriggerType: "1212",
    TriggerDelay: "1212",
    Automatic: "1212",
    Encode: "1212",
  },
  {
    key: "4",
    type: "John Brown",
    group: 98,
    AlarmLevel: "三级警告",
    AlarmPrompt: 70,
    TriggerType: "1212",
    TriggerDelay: "1212",
    Automatic: "1212",
    Encode: "1212",
  },
];

// data.forEach((element) => {
//   console.log(element);
//   if (element.AlarmLevel === "一级警告") {
//     FirstClassWarning.value;
//   } else if (element.AlarmLevel === "二级警告") {
//     SecondClassWarning.value;
//   } else if (element.AlarmLevel === "三级警告") {
//     ThirdClassWarning.value;
//   }
// });
</script>

<style lang="less" scoped>
.container {
  padding: 10px;
}
.First-class-warning {
  padding: 2px 10px;
  background-color: #ff1c00;
}
.Second-class-warning {
  padding: 2px 10px;
  background-color: #ff9e2b;
}
.Third-class-warning {
  padding: 2px 10px;
  background-color: #ffc81e;
}
// table上面会多出10px的属性
:deep(.arco-table .arco-table-element) {
  margin-top: 0 !important;
}
</style>
