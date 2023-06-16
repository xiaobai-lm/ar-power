<template>
  <div class="container">
    <div>
      <a-radio-group default-value="1">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>实时</a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>历史</a-tag>
          </template>
        </a-radio>
      </a-radio-group>
      <span style="color: white">数据刷新时间：{{ date }}</span>
      <a-button type="text" @click="handleClick">
        <template #icon>
          <icon-sync />
        </template>
        <template #default>刷新</template>
      </a-button>
      <a-button type="outline">导出</a-button>
    </div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" title="功率流图">
        <a-card>
          <div id="SanKiTu"></div>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="2" title="负载情况">
        <a-card>
          <div id="tree" style="padding: 20px"></div>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="3" title="原始数据">
        <a-card>
          <a-table
            :columns="columns"
            :data="tableData"
            :bordered="{ wrapper: true, cell: true }"
          />
        </a-card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

const radioValue = ref("A");
const isShowOne = ref(true);
const isShowTwo = ref(true);
const isShowThree = ref(false);
const date = ref(dayjs().format("YYYY-MM-DD HH:mm:ss"));

function handleClick() {
  date.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
}
const columns = ref([
  {
    title: "设备目录",
    dataIndex: "facilityInventory",
  },
  {
    title: "设备名称",
    dataIndex: "deviceName",
  },
  {
    title: "设备编号",
    dataIndex: "equipmentNumber",
  },
  {
    title: "额定电压(kV)",
    dataIndex: "ratedVoltage",
  },
  {
    title: "额定容量(kVA)",
    dataIndex: "ratedCapacity",
  },
  {
    title: "有功功率(kW)",
    dataIndex: "activePower",
  },
  {
    title: "负载率(%)",
    dataIndex: "loadRate",
  },
]);

const tableData = [
  {
    key: "1",
    facilityInventory: "",
    deviceName: "嘉德广场",
    equipmentNumber: "nm20191022",
    ratedVoltage: "",
    ratedCapacity: "1001",
    activePower: "1729.5",
    loadRate: "172.8",
  },
  {
    key: "2",
    facilityInventory: "/高压/高压I段",
    deviceName: "1H1-1#电缆进线柜",
    equipmentNumber: "nm20191022",
    ratedVoltage: "10.5",
    ratedCapacity: "8400",
    activePower: "762.5",
    loadRate: "38.1",
  },
  {
    key: "3",
    facilityInventory: "/高压/高压I段",
    deviceName: "1H5-1#变压器",
    equipmentNumber: "nm20191022",
    ratedVoltage: "10.5",
    ratedCapacity: "1001",
    activePower: "1729.5",
    loadRate: "172.8",
  },
  {
    key: "4",
    facilityInventory: "/高压/高压I段",
    deviceName: "1H1-1#电缆进线柜",
    equipmentNumber: "nm20191022",
    ratedVoltage: "10.5",
    ratedCapacity: "8400",
    activePower: "762.5",
    loadRate: "38.1",
  },
  {
    key: "5",
    facilityInventory: "/高压/高压I段",
    deviceName: "1H1-1#电缆进线柜",
    equipmentNumber: "nm20191022",
    ratedVoltage: "10.5",
    ratedCapacity: "8400",
    activePower: "762.5",
    loadRate: "38.1",
  },
  {
    key: "6",
    facilityInventory: "/高压/高压I段",
    deviceName: "1H1-1#电缆进线柜",
    equipmentNumber: "nm20191022",
    ratedVoltage: "10.5",
    ratedCapacity: "8400",
    activePower: "762.5",
    loadRate: "38.1",
  },
  {
    key: "7",
    facilityInventory: "/高压/高压I段",
    deviceName: "1H1-1#电缆进线柜",
    equipmentNumber: "nm20191022",
    ratedVoltage: "10.5",
    ratedCapacity: "8400",
    activePower: "762.5",
    loadRate: "38.1",
  },
  {
    key: "8",
    facilityInventory: "/高压/高压I段",
    deviceName: "1H1-1#电缆进线柜",
    equipmentNumber: "nm20191022",
    ratedVoltage: "10.5",
    ratedCapacity: "8400",
    activePower: "762.5",
    loadRate: "38.1",
  },
  {
    key: "9",
    facilityInventory: "/高压/高压I段",
    deviceName: "1H1-1#电缆进线柜",
    equipmentNumber: "nm20191022",
    ratedVoltage: "10.5",
    ratedCapacity: "8400",
    activePower: "762.5",
    loadRate: "38.1",
  },
  {
    key: "10",
    facilityInventory: "/高压/高压I段",
    deviceName: "1H1-1#电缆进线柜",
    equipmentNumber: "nm20191022",
    ratedVoltage: "10.5",
    ratedCapacity: "8400",
    activePower: "762.5",
    loadRate: "38.1",
  },
];

const data = {
  name: `${tableData[0].activePower} / ${tableData[0].loadRate} / ${tableData[0].equipmentNumber} / ${tableData[0].ratedCapacity}`,
  children: [
    {
      name: "1234",
    },
    {
      name: "display",
    },
    {
      name: "flex",
    },
    {
      name: "query",
    },
    {
      name: "scale",
    },
  ],
};
let a;
tableData.forEach((element) => {
  console.log(element);
  a = element;
});
console.log(a);
const dataList = {
  title: `${tableData[0].deviceName} / ${tableData[0].equipmentNumber} / ${tableData[0].ratedVoltage} / ${tableData[0].ratedCapacity} / ${tableData[0].activePower} / ${tableData[0].loadRate}`,
  data1: `${tableData[1].deviceName} / ${tableData[1].equipmentNumber} / ${tableData[1].ratedVoltage} / ${tableData[1].ratedCapacity} / ${tableData[1].activePower} / ${tableData[1].loadRate}`,
  data2: "1H5-1#变压器/8400kVA / 174.8kW / 2.1%",
  data3: "1H2-10KV进线保护柜1 /8400kVA / 1295.25kW /",
  data4: "1H6-3#变压器/8400kVA /1532.5kW /18.2%",
  data5: "2H1-2#电统进线柜/8000kVA / 5080kW /63.5%",
  data6: "2H2-10KV进线保护柜2 / 8400kVA / 1748kw / 20",
  data7: "2H5-2#变压器/8400kVA / 1511.13kW / 18%",
  data8: "高压设备/8400kVA / 919.5kw /10.9%",
  data9: "2H6-4#变压器/8400kVA / 736.25kw /8.8%",
  data10: "0.4KV低压进线柜1 /1140kVA / 381kw / 33.49",
  data11: "1#工艺水泵/304kVA / 174.8kw / 57.5%",
  data12: "1#析器进料泵/304kVA / 107.94kw /35.5%",
  data13: "1#结晶器排料泵/304kVA / 153.25kW / 50.4%",
  data14: "1#底层母液泵 /304kVA / 88.35kW /29.1%",
  data15: "0.4KV低压进线柜2 / 1140kVA / 381kW /33.4%",
  data16: "2#工艺水泵/304kVA / 174.8kW / 57.5%",
  data17: "2#析器进料泵 /304kVA / 107.94kW /35.5%",
  data18: "2#结晶器排料泵/304kVA / 153.25kW / 50.4%",
  data19: "2#底层母液泵 /304kVA /88.35kW /29.1%",
  data20: "断路器3 / 0.22kVA / 174.8kW /79454.5%",
};
console.log(Object.values(dataList));
setTimeout(() => {
  const SanKiTu = echarts.init(document.getElementById("SanKiTu"), null, {
    height: 700,
  });

  const SanKiTuData = {
    series: {
      color: ["#33cd00", "#ff0400"],
      type: "sankey",
      layout: "none",
      name: "sankey",
      emphasis: {
        focus: "adjacency",
      },
      layoutIterations: 0,
      data: [
        {
          name: dataList.title,
        },
        {
          name: dataList.data1,
        },
        {
          name: dataList.data2,
        },
        {
          name: dataList.data3,
        },
        {
          name: dataList.data4,
        },
        {
          name: dataList.data5,
        },
        {
          name: dataList.data6,
        },
        {
          name: dataList.data7,
        },
        {
          name: dataList.data8,
        },
        {
          name: dataList.data9,
        },
        {
          name: dataList.data10,
        },
        {
          name: dataList.data11,
        },
        {
          name: dataList.data12,
        },
        {
          name: dataList.data13,
        },
        {
          name: dataList.data14,
        },
        {
          name: dataList.data15,
        },
        {
          name: dataList.data16,
        },
        {
          name: dataList.data17,
        },
        {
          name: dataList.data18,
        },
        {
          name: dataList.data19,
        },
        {
          name: dataList.data20,
        },
      ],
      links: [
        {
          source: dataList.title,
          target: dataList.data1,
          value: 20,
        },
        {
          source: dataList.title,
          target: dataList.data2,
          value: 10,
        },
        {
          source: dataList.title,
          target: dataList.data3,
          value: 3,
        },
        {
          source: dataList.title,
          target: dataList.data4,
          value: 17,
        },
        {
          source: dataList.title,
          target: dataList.data5,
          value: 23,
        },
        {
          source: dataList.title,
          target: dataList.data6,
          value: 40,
        },
        {
          source: dataList.title,
          target: dataList.data7,
          value: 17,
        },
        {
          source: dataList.title,
          target: dataList.data1,
          value: 18,
        },
        {
          source: dataList.title,
          target: dataList.data8,
          value: 5,
        },
        {
          source: dataList.title,
          target: dataList.data9,
          value: 7,
        },
        {
          source: dataList.title,
          target: dataList.data10,
          value: 8,
        },
        {
          source: dataList.title,
          target: dataList.data11,
          value: 4,
        },
        {
          source: dataList.title,
          target: dataList.data12,
          value: 17,
        },
        {
          source: dataList.title,
          target: dataList.data13,
          value: 12,
        },
        {
          source: dataList.title,
          target: dataList.data14,
          value: 3,
        },
        {
          source: dataList.title,
          target: dataList.data15,
          value: 8,
        },
        {
          source: dataList.title,
          target: dataList.data16,
          value: 16,
        },
        {
          source: dataList.title,
          target: dataList.data17,
          value: 23,
        },
        {
          source: dataList.title,
          target: dataList.data18,
          value: 26,
        },
        {
          source: dataList.title,
          target: dataList.data19,
          value: 21,
        },
        {
          source: dataList.title,
          target: dataList.data20,
          value: 12,
        },
      ],
    },
  };

  SanKiTu.setOption(SanKiTuData);

  const tree = echarts.init(document.getElementById("tree"), null, {
    height: 700,
  });
  const treeData = {
    tooltip: {
      trigger: "item",
      triggerOn: "mousemove",
    },
    series: [
      {
        type: "tree",
        id: 0,
        name: "tree1",
        data: [data],
        top: "10%",
        left: "8%",
        bottom: "22%",
        right: "20%",
        // 节点大小
        symbolSize: 7,
        edgeForkPosition: "63%",
        initialTreeDepth: 3,
        lineStyle: {
          width: 2,
        },
        // 移动+放大
        roam: true,
        label: {
          normal: {
            backgroundColor: "white",
            position: "left",
            width: 240,
            height: 60,
            verticalAlign: "middle",
            align: "right",
            overflow: "breakAll",
          },
        },
        // 叶子节点的特殊配置
        leaves: {
          label: {
            position: "right",
            verticalAlign: "middle",
            align: "left",
            formatter: [
              `{a| 文本采用样}`,
              "{b| 这段文本采用样式b}这段用默认样式{x|这段用样式x}",
              "{c| 这是c}",
            ].join("\n"),
            rich: {
              a: {
                color: "red",
                // lineHeight: 10,
              },
              b: {
                backgroundColor: {
                  image: "xxx/xxx.jpg",
                },
                height: 40,
              },
              x: {
                fontSize: 18,
                fontFamily: "Microsoft YaHei",
                borderColor: "#449933",
                borderRadius: 4,
              },
              c: {
                color: "green",
              },
            },
          },
        },
        emphasis: {
          focus: "descendant",
        },
        // 折叠交互
        expandAndCollapse: true,
        // 动画效果
        animationDuration: 550,
        animationDurationUpdate: 750,
      },
    ],
  };
  tree.setOption(treeData);
}, 10);
</script>

<style lang="less" scoped>
.container {
}

.arco-radio-group .arco-radio {
  margin-right: 0;
}
</style>
