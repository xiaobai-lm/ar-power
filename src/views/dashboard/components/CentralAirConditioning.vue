<template>
  <div class="container">
    <div class="container-header">
      <span style="font-style: italic; padding: 20px; font-size: 16px">空调列表</span>
      <a-select
        :style="{ width: '320px' }"
        v-model="value"
        placeholder="Please select ..."
        allow-clear
        default-value="1"
      >
        <a-option value="1">A栋中央空调</a-option>
        <a-option value="2">C栋中央空调</a-option>
        <a-option value="3">D栋中央空调</a-option>
      </a-select>
    </div>
    <div class="container-body">
      <div class="container-body-content">
        <h1>中央空调 实时监测</h1>
        <img
          src="@/assets/CentralAirConditioningView/AirConditioner.png"
          style="width: 90%"
        />
        <div
          style="
            width: 300px;
            border-radius: 10px;
            border: 2px solid #1584ae;
            padding: 0 10px 10px;
            position: absolute;
            top: 30%;
            left: 60%;
          "
        >
          <h3>空调机组</h3>
          <a-row>
            <a-col :span="12" v-for="(item, itemIndex) in dataList" :key="itemIndex">
              <span
                style="
                  float: left;
                  text-align: center;
                  font-family: 楷体;
                  font-size: 16px;
                  color: #1584ae;
                "
                >{{ item.title }}</span
              >
              <span :style="item.style">{{ item.data }}</span>
            </a-col>
          </a-row>
        </div>
        <div
          style="
            width: 220px;
            border-radius: 10px;
            border: 2px solid #1584ae;
            padding: 20px 20px 30px;
            position: absolute;
            top: 54%;
            left: 15%;
          "
        >
          <div
            v-for="(value, valueIndex) in itemList"
            :key="valueIndex"
            style="text-align: right; padding: 4px"
          >
            <span
              style="float: left; font-family: 楷体; color: #1584ae; font-size: 16px"
              >{{ value.title }}</span
            >
            <span
              :style="value.style"
              style="font-size: 16px; font-family: 楷体; margin: 0 auto"
              >{{ value.data }}</span
            >
          </div>
        </div>
        <div
          style="
            width: 220px;
            border-radius: 10px;
            border: 2px solid #1584ae;
            padding: 20px 20px 30px;
            position: absolute;
            top: 70%;
            left: 46%;
          "
        >
          <div
            v-for="(value, valueIndex) in itemList"
            :key="valueIndex"
            style="text-align: right; padding: 4px"
          >
            <span
              style="float: left; font-family: 楷体; color: #1584ae; font-size: 16px"
              >{{ value.title }}</span
            >
            <span :style="value.style" style="font-size: 16px; font-family: 楷体">{{
              value.data2
            }}</span>
          </div>
        </div>
      </div>

      <div class="container-body-body">
        <div
          style="
            width: 460px;
            height: 240px;
            background-color: #1a4ea3;
            border: 2px solid #1a346e;
            border-radius: 10px;
            margin-top: 40px;
          "
        >
          <div style="display: flex">
            <h2>能耗分布</h2>
            <a-radio-group default-value="1" @change="handleChange">
              <a-radio value="1">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>按日</a-tag>
                </template>
              </a-radio>
              <a-radio value="2">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>按月</a-tag>
                </template>
              </a-radio>
              <a-radio value="3">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>按年</a-tag>
                </template>
              </a-radio>
            </a-radio-group>
          </div>
          <div id="EnergyDistribution"></div>
        </div>
        <div
          style="
            width: 460px;
            height: 240px;
            background-color: #1a4ea3;
            border: 2px solid #1a346e;
            border-radius: 10px;
            margin-top: 40px;
          "
        >
          <div style="display: flex">
            <h2>能耗分布</h2>
            <a-radio-group default-value="1" @change="handleChange2">
              <a-radio value="1">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>按日</a-tag>
                </template>
              </a-radio>
              <a-radio value="2">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>按月</a-tag>
                </template>
              </a-radio>
              <a-radio value="3">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>按年</a-tag>
                </template>
              </a-radio>
            </a-radio-group>
          </div>
          <div id="ec"></div>
        </div>
        <div
          style="
            width: 460px;
            height: 240px;
            background-color: #1a4ea3;
            border: 2px solid #1a346e;
            border-radius: 10px;
            margin-top: 40px;
          "
        >
          <div style="display: flex">
            <h2>能耗分布</h2>
            <a-radio-group default-value="1" @change="handleChange3">
              <a-radio value="1">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>按日</a-tag>
                </template>
              </a-radio>
              <a-radio value="2">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>按月</a-tag>
                </template>
              </a-radio>
              <a-radio value="3">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>按年</a-tag>
                </template>
              </a-radio>
            </a-radio-group>
          </div>
          <div id="ecs"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";

// 饼图
const pre = ref([
  { value: 1000, name: "冷却泵耗电" },
  { value: 1000, name: "冷冻泵耗电" },
]);
// 柱状图
const bar = ref([
  120,
  200,
  150,
  80,
  70,
  110,
  130,
  20,
  30,
  30,
  30,
  30,
  30,
  30,
  50,
  60,
  70,
  70,
  70,
  70,
  70,
  90,
  100,
]);
// 折线图
const line = ref([
  {
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: "line",
    smooth: true,
  },
  {
    data: [600, 600, 600, 600, 600, 600, 600],
    type: "line",
  },
]);
const dataList = ref([
  {
    title: "COP",
    data: "2.00",
  },
  {
    title: "功率",
    data: "200.00",
  },
  {
    title: "用电量",
    data: "999.00",
  },
  {
    title: "状态",
    style:
      "width:10px;height:10px;border-radius: 5px;background-color:red;display: inline-block;",
  },
  {
    title: "制冷量",
    data: "3000.00",
  },
]);
const itemList = ref([
  {
    title: "冷冻泵供水温度",
    data: "25.00",
    data2: "25.00",
  },
  {
    title: "冷冻泵回水温度",
    data: "48.00",
    data2: "48.00",
  },
  {
    title: "冷冻泵供水压力",
    data: "30.00",
    data2: "31.00",
  },
  {
    title: "冷冻泵回水压力",
    data: "30.00",
    data2: "32.00",
  },
  {
    title: "冷冻泵频率",
    data: "50.00",
    data2: "50.00",
  },
  {
    title: "冷冻泵状态",
    style:
      "display:inline-block;width: 10px;height: 10px;border-radius: 10px;background-color: red;",
  },
]);
const rightList = ref([
  {
    title: "能耗分布",
  },
  {
    title: "能耗趋势",
  },
  {
    title: "温度趋势",
  },
]);
let EnergyDistribution;
let EnergyDistributionData;
let ec;
let ecData;
let ecs;
let ecsData;
onMounted(() => {
  setTimeout(() => {
    EnergyDistribution = echarts.init(
      document.getElementById("EnergyDistribution"),
      null,
      { width: 450, height: 180 }
    );

    EnergyDistributionData = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        right: "right",
        left: "58%",
        top: "30%",
      },

      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          center: ["26%", "40%"],
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: pre.value,
        },
      ],
    };
    ec = echarts.init(document.getElementById("ec"), null, {
      width: 450,
      height: 200,
    });
    ecData = {
      grid: {
        top: "4%",
      },
      xAxis: {
        type: "category",
        data: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
        ],
      },
      yAxis: {
        type: "value",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        top: "-10%",
        left: "60%",
      },
      series: [
        {
          data: bar.value,
          type: "bar",
        },
      ],
    };
    ecs = echarts.init(document.getElementById("ecs"), null, {
      width: 450,
      height: 200,
    });
    ecsData = {
      grid: {
        top: "4%",
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      tooltip: {
        trigger: "axis",
      },
      series: line.value,
    };

    EnergyDistribution.setOption(EnergyDistributionData);
    ec.setOption(ecData);
    ecs.setOption(ecsData);
  }, 10);
});
const handleChange = (key) => {
  console.log(typeof key);
  if (key === "1") {
    pre.value = [
      { value: 1000, name: "冷却泵耗电" },
      { value: 1000, name: "冷冻泵耗电" },
    ];
    EnergyDistribution.setOption({
      series: [
        {
          data: pre.value,
        },
      ],
    });
  } else if (key === "2") {
    pre.value = [
      { value: 10, name: "冷却泵耗电" },
      { value: 30, name: "冷冻泵耗电" },
    ];
    console.log(pre.value);
    EnergyDistribution.setOption({
      series: [
        {
          data: pre.value,
        },
      ],
    });
  } else {
    console.log("33333");
  }
};
const handleChange2 = (key) => {
  console.log(key);
  if (key === "1") {
    bar.value = [
      120,
      200,
      150,
      80,
      70,
      110,
      130,
      20,
      30,
      30,
      30,
      30,
      30,
      30,
      50,
      60,
      70,
      70,
      70,
      70,
      70,
      90,
      100,
    ];
    ec.setOption({
      series: [
        {
          data: bar.value,
        },
      ],
    });
  } else if (key === "2") {
    bar.value = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ];
    ec.setOption({
      series: [
        {
          data: bar.value,
        },
      ],
    });
  } else {
    console.log("33333");
  }
};
const handleChange3 = (key) => {
  console.log(key);
  if (key === "1") {
    line.value = [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
      {
        data: [600, 600, 600, 600, 600, 600, 600],
        type: "line",
      },
    ];
    ecs.setOption({
      series: line.value,
    });
  } else if (key === "2") {
    line.value = [
      {
        data: [20, 20, 20, 20, 20, 20, 20],
        type: "line",
        smooth: true,
      },
      {
        data: [30, 30, 30, 40, 40, 40, 20],
        type: "line",
      },
    ];
    ecs.setOption({
      series: line.value,
    });
  } else {
    console.log("33333");
  }
};
</script>

<style lang="less" scoped>
* {
  color: white;
}
.container {
  width: 1700px;
  height: 1000px;
  overflow: auto;
  background-color: #1a346e;
  margin: 10px;
  &-header {
    margin-top: 20px;
  }
  &-body {
    display: flex;
    &-content {
      width: 1100px;
      text-align: center;
      position: relative;
      width: 1100px;
    }
    &-body {
    }
  }
}

#EnergyDistribution {
  margin: 0 0 0 20px;
}
#ec {
  margin: 0 0 0 20px;
}
.arco-layout-content {
  overflow-x: scroll !important;
}
.arco-radio-group {
  margin-left: 120px;
  margin-top: 20px;
  background-color: #1a4ea3;
}
.arco-tag-size-medium {
  height: 38px;
  width: 70px;
  padding: 0 0 0 20px;
  background-color: #0f224e;
}
.arco-tag-size-medium:hover {
  color: #86c2ff;
}
.arco-tag-checked {
  background-color: #1d438e;
  border: 1px solid #86c2ff;
}
.arco-tag-checkable.arco-tag-checked:hover {
  color: #2882ca;
  border: 1px solid #86c2ff;
  background-color: #1a4ea3;
}
h2 {
  padding: 10px;
}
</style>
