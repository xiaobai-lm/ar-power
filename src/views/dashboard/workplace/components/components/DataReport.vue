<template>
  <div class="container">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" title="实时数据">
        <div style="color: white">
          数据刷新时间: {{ date }}
          <a-button type="text" @click="handleClick">
            <template #icon>
              <icon-sync />
            </template>
            <template #default>刷新</template>
          </a-button>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
  <a-checkbox
    :model-value="checkedAll"
    :indeterminate="indeterminate"
    @change="handleChangeAll"
    >全选
  </a-checkbox>
  <a-checkbox-group v-model="data2" @change="handleChange" style="margin: 20px 0">
    <a-checkbox value="1">设备状态</a-checkbox>
    <a-checkbox value="2">电流</a-checkbox>
    <a-checkbox value="3">功率</a-checkbox>
    <a-checkbox value="4">电度</a-checkbox>
    <a-checkbox value="5">电压</a-checkbox>
    <a-checkbox value="6">功率因数</a-checkbox>
    <a-checkbox value="7">评率</a-checkbox>
    <a-checkbox value="8">温度</a-checkbox>
    <a-checkbox value="9">电压谐波</a-checkbox>
    <a-checkbox value="10">电流谐波</a-checkbox>
    <a-checkbox value="11">水</a-checkbox>
    <a-checkbox value="12">气</a-checkbox>
  </a-checkbox-group>
  <a-table
    :columns="columns"
    :data="data"
    :bordered="{ cell: true }"
    :scroll="{ x: 1800 }"
    style="padding: 0 10px"
  />
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { reactive, ref, onMounted } from "vue";

const date: any = ref(dayjs().format("YYYY-MM-DD HH:mm:ss"));

// 刷新
function handleClick() {
  date.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
}
const indeterminate: boolean = ref(false);
const checkedAll: boolean = ref(false);
const data2: Array = ref([] as Array);

const handleChangeAll = (value) => {
  indeterminate.value = false;
  if (value) {
    checkedAll.value = true;
    data2.value = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  } else {
    checkedAll.value = false;
    data2.value = [];
  }
};

const handleChange = (values) => {
  if (values.length === 12) {
    checkedAll.value = true;
    indeterminate.value = false;
  } else if (values.length === 0) {
    checkedAll.value = false;
    indeterminate.value = false;
  } else {
    checkedAll.value = false;
    indeterminate.value = true;
  }
};

const columns = ref([
  {
    title: "设备名称",
    dataIndex: "name",
    fixed: "left",
    width: 140,
  },
  {
    title: "设备状态",
    children: [
      {
        title: "通讯状态",
        dataIndex: "correspondence",
        width: 200,
      },
      {
        title: "运行状态",
        dataIndex: "running",
        width: 200,
      },
    ],
  },
  {
    title: "电流",
    children: [
      {
        title: "A电流",
        dataIndex: "AElectric",
        width: 200,
      },
      {
        title: "B电流",
        dataIndex: "BElectric",
        width: 200,
      },
      {
        title: "C电流",
        dataIndex: "CElectric",
        width: 200,
      },
    ],
  },
  {
    title: "功率",
    dataIndex: "power",
    width: 120,
    children: [
      {
        title: "有功功率kW",
        dataIndex: "activePower",
        width: 200,
      },
      {
        title: "无功功率kVar",
        dataIndex: "activePower",
        width: 200,
      },
      {
        title: "视在功率kVA",
        dataIndex: "activePower",
        width: 200,
      },
      {
        title: "负载率%",
        dataIndex: "activePower",
        width: 200,
      },
      {
        title: "输入有功功率kW",
        dataIndex: "activePower",
        width: 200,
      },
      {
        title: "输出有功功率kW",
        dataIndex: "activePower",
        width: 200,
      },
    ],
  },
  {
    title: "电度",
    dataIndex: "activePower",
    width: 120,
    children: [
      {
        title: "正向有功电度kWh",
        dataIndex: "activePower",
        width: 200,
      },
      {
        title: `反向有功电度m³`,
        dataIndex: "activePower",
        width: 200,
      },
      {
        title: `正向无功电度kvarh`,
        dataIndex: "activePower",
        width: 200,
      },
      {
        title: `反向无功电度kvarh`,
        dataIndex: "activePower",
        width: 200,
      },
      {
        title: `输入正向无功电度kWh`,
        dataIndex: "activePower",
        width: 200,
      },
      {
        title: `输出正向无功电度kWh`,
        dataIndex: "activePower",
        width: 200,
      },
    ],
  },
  {
    title: "电压",
    dataIndex: "",
    width: 120,
    children: [
      {
        title: "A相电压kV",
        dataIndex: "",
        width: 200,
      },
      {
        title: "B相电压kV",
        dataIndex: "",
        width: 200,
      },
      {
        title: "C相电压kV",
        dataIndex: "",
        width: 200,
      },
      {
        title: "AB相电压kV",
        dataIndex: "",
        width: 200,
      },
      {
        title: "BC相电压kV",
        dataIndex: "",
        width: 200,
      },
      {
        title: "CA相电压kV",
        dataIndex: "",
        width: 200,
      },
    ],
  },
  {
    title: "功率因数",
    dataIndex: "",
    width: 120,
    children: [
      {
        title: "功率因数",
        dataIndex: "",
        width: 200,
      },
    ],
  },
  {
    title: "评率Hz",
    dataIndex: "",
    width: 120,
    children: [
      {
        title: "评率",
        dataIndex: "",
        width: 200,
      },
    ],
  },
  {
    title: "温度℃",
    dataIndex: "",
    width: 120,
    children: [
      {
        title: "变压器温度",
        dataIndex: "",
        width: 200,
      },
    ],
  },
  {
    title: "电压谐波kV",
    dataIndex: "",
    width: 120,
    children: [
      {
        title: "A相电压3次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "B相电压3次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "C相电压3次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "A相电压5次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "B相电压5次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "C相电压5次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "A相电压7次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "B相电压7次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "C相电压7次谐波有效值",
        dataIndex: "",
        width: 200,
      },
    ],
  },
  {
    title: "电流谐波A",
    dataIndex: "",
    width: 200,
    children: [
      {
        title: "A相电流3次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "B相电流3次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "C相电流3次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "A相电流5次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "B相电流5次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "C相电流5次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "A相电流7次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "B相电流7次谐波有效值",
        dataIndex: "",
        width: 200,
      },
      {
        title: "C相电流7次谐波有效值",
        dataIndex: "",
        width: 200,
      },
    ],
  },
  {
    title: "水",
    dataIndex: "",
    width: 120,
    children: [
      {
        title: "新鲜水",
        dataIndex: "",
        width: 200,
      },
    ],
  },
  {
    title: "气m³",
    dataIndex: "",
    width: 120,
    children: [
      {
        title: "天然气",
        dataIndex: "",
        width: 200,
      },
    ],
  },
]);
const data = reactive([]);

onMounted(() => {
  if (data === []) {
    columns.value = [];
  }
});
</script>

<style></style>
