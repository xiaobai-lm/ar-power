<template>
  <div class="container">
    <div class="container-header">
      <a-row :gutter="20">
        <a-col :span="4">
          <a-select
            :style="{ width: '100%' }"
            default-value="123"
            placeholder="Please select ..."
          >
            <a-option>123 </a-option>
            <a-option>456 </a-option>
          </a-select>
        </a-col>
        <a-col :span="4">
          <a-select
            :style="{ width: '100%' }"
            default-value="1234"
            placeholder="Please select ..."
          >
            <a-option>1234</a-option>
            <a-collapse :default-active-key="[1]" accordion>
              <a-collapse-item header="测试" key="1">
                <div>Beijing Toutiao Technology Co., Ltd.</div>
              </a-collapse-item>
            </a-collapse>
          </a-select>
        </a-col>
        <a-col :span="6">
          <a-range-picker v-model="rangeValue" style="width: 100%" />
        </a-col>
        <a-col :span="4">
          <a-select default-value="所有类型" placeholder="Please select ...">
            <a-option> 所有类型</a-option>
            <a-option> 电流越下线 </a-option>
            <a-option> 设备离线</a-option>
            <a-option> 越上线</a-option>
            <a-option> 电流超限预警</a-option>
            <a-option> 用能告警</a-option>
            <a-option> 越上上线</a-option>
            <a-option> 通道通讯中断</a-option>
            <a-option> 电流超限</a-option>
            <a-option> 越下下线</a-option>
            <a-option> 越下线</a-option>
            <a-option> 0_1状态变位</a-option>
            <a-option> 电气火灾</a-option>
            <a-option> 跳闸</a-option>
          </a-select>
        </a-col>
      </a-row>
    </div>
    <div class="container-body">
      <a-card>
        <a-table
          :columns="columns"
          :data="dataList"
          :bordered="{ wrapper: true, cell: true }"
        />
      </a-card>
      <a-button type="primary" @click="handleClick">Open Drawer</a-button>
      <a-drawer
        :width="widthValue"
        :visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
        :mask-closable="false"
      >
        <template #title> Title </template>
        <div>
          You can customize modal body text by the current situation. This modal will be
          closed immediately once you press the OK button.
          <a-button @click="fontFace">放大</a-button>
          <a-button @click="fontA">缩小</a-button>
        </div>
      </a-drawer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const rangeValue = [Date.now(), Date.now()];
const widthValue = ref(340);
const visible = ref(false);

const fontFace = () => {
  widthValue.value = 800;
};
const fontA = () => {
  widthValue.value = 340;
};
const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
  widthValue.value = 340;
};
const columns = [
  {
    title: "发生时间",
    dataIndex: "a",
  },
  {
    title: "事故",
    dataIndex: "b",
  },
  {
    title: "站点",
    dataIndex: "c",
  },
  {
    title: "设备",
    dataIndex: "d",
  },
  {
    title: "告警类型",
    dataIndex: "e",
    sortable: {
      sortDirections: ["ascend", "descend"],
    },
  },
  {
    title: "事故级别",
    dataIndex: "f",
    sortable: {
      sortDirections: ["ascend", "descend"],
    },
  },
  {
    title: "事故详情",
    dataIndex: "g",
  },
];
const dataList = ref([]);
</script>

<style lang="less" scoped>
.container {
  padding: 10px;
}
:deep(.arco-table .arco-table-element) {
  margin: 0;
}
</style>
