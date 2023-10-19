<template>
  <div>
    <div class="container-layout-content-tab1">
      <a-collapse :default-active-key="['1', '2', '3']">
        <!-- 实施情况 -->
        <a-collapse-item key="1" :show-expand-icon="true">
          <template #header>
            <div>
              <span>实施概况</span>
              <!-- <a-button type="outline" style="float: right">查看更多</a-button> -->
            </div>
          </template>
          <div>
            <!-- 状态内容 -->
            <div class="conditions">
              <a-card
                v-for="(item, index) in conditions"
                :key="index"
                style="margin-right: 5px"
              >
                <h3>{{ item.title }}</h3>
                <!-- <icon-font :type="item.icon" /> -->
                <icon-paste />
                <span>{{ item.condition }}</span>
              </a-card>
            </div>
            <!-- 电力内容 -->
            <div class="electricity">
              <a-row :gutter="10">
                <!-- 电力左侧 -->
                <a-col :span="10">
                  <a-row :gutter="10">
                    <a-col
                      v-for="(item, index) in electricity"
                      :key="index"
                      :span="item.span"
                      @click="handleClick(item, index)"
                    >
                      <div class="electricity-header">
                        <div class="electricity-header-title">
                          {{ item.titleIcon }}
                        </div>
                        {{ item.title }}
                      </div>
                      <a-card hoverable :bordered="false" class="electricity-body">
                        <div
                          v-for="(list, index2) in item.main"
                          :key="index2"
                          style="text-align: center"
                        >
                          <span style="float: left">{{ list.mainName }}</span>
                          <span>{{ list.mainBody }}</span>
                          <span style="float: right">{{ list.mainUnits }}</span>
                          <a-divider />
                        </div>
                      </a-card>
                    </a-col>
                  </a-row>
                </a-col>
                <!-- 电力右侧 -->
                <a-col :span="14">
                  <div>
                    <h2 style="padding: 13px">历史数据</h2>
                    <a-tabs type="card" :active-key="activeKey" @tab-click="tabClick">
                      <a-tab-pane
                        v-for="(historical, index) in historicalData"
                        :key="historical.id"
                        :title="historical.title"
                        :closable="index !== 2"
                        style="margin-bottom: 6px"
                      >
                        <a-radio-group default-value="1" style="margin-right: 20px">
                          <a-radio value="1">
                            <template #radio="{ checked }">
                              <a-tag :checked="checked" checkable style="font-size: 16px"
                                >日</a-tag
                              >
                            </template>
                          </a-radio>
                          <a-radio value="2">
                            <template #radio="{ checked }">
                              <a-tag :checked="checked" checkable style="font-size: 16px"
                                >月</a-tag
                              >
                            </template>
                          </a-radio>
                        </a-radio-group>
                        日期：<a-date-picker v-model="value" style="width: 200px" />
                        <a-button type="primary" style="margin-left: 20px">
                          <template #icon>
                            <icon-search />
                          </template>
                          查询</a-button
                        >
                      </a-tab-pane>
                    </a-tabs>
                    <div id="electricCurrent"></div>
                  </div>
                </a-col>
              </a-row>
            </div>
          </div>
        </a-collapse-item>
        <!-- 用电 -->
        <a-collapse-item key="2" :show-expand-icon="false">
          <template #header> 用电 </template>
          <a-row>
            <a-col :span="12">
              <a-row :gutter="6">
                <a-col
                  v-for="(consumeElectricity, index) in consumeElectricityList"
                  :key="index"
                  :span="6"
                >
                  <div
                    style="
                      width: 100%;
                      height: 100%;
                      background-color: #232324;
                      display: flex;
                      padding: 11px 10px;
                      margin-bottom: 6px;
                    "
                  >
                    <img v-show="consumeElectricity.isShow" src="" alt="" />

                    <div style="height: 80px">
                      <div style="margin-bottom: 20px; font-size: 16px">
                        {{ consumeElectricity.left1 }}
                      </div>
                      <div style="font-size: 14px">
                        {{ consumeElectricity.left2 }}
                      </div>
                    </div>
                    <div style="height: 80px">
                      <div style="margin-bottom: 20px; color: #6c7c8b; font-size: 14px">
                        {{ consumeElectricity.right1 }}
                      </div>
                      <div style="color: #1d9463">
                        {{ consumeElectricity.right2 }}
                      </div>
                    </div>
                  </div>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="12">
              <a-row>
                <a-col :span="11" style="background-color: #232324; margin-left: 10px">
                  <div id="TimeSharingElectricity"></div>
                </a-col>
                <a-col :span="11" style="background-color: #232324; margin-left: 10px">
                  <div id="TimeSharingElectricity2"></div>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
        </a-collapse-item>
        <!-- 发电 -->
        <a-collapse-item key="3" :show-expand-icon="false">
          <template #header> 发电 </template>
          <a-row :gutter="10">
            <a-col
              v-for="(generateElectricity, index) in generateElectricityList"
              :key="index"
              :span="3"
            >
              <div
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  padding: 10px;
                  background-color: #232324;
                  margin-bottom: 6px;
                "
              >
                <img v-show="generateElectricity.isShow" src="" alt="" />

                <div style="height: 80px">
                  <div style="margin-bottom: 20px; font-size: 16px">
                    {{ generateElectricity.left1 }}
                  </div>
                  <div style="font-size: 14px">
                    {{ generateElectricity.left2 }}
                  </div>
                </div>
                <div style="height: 80px">
                  <div style="margin-bottom: 20px; color: #6c7c8b; font-size: 14px">
                    {{ generateElectricity.right1 }}
                  </div>
                  <div style="color: #1d9463">
                    {{ generateElectricity.right2 }}
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-collapse-item>
      </a-collapse>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import * as echarts from "echarts";

const value = ref(new Date());

// selectedMode: "single",
const conditions = [
  {
    title: "状态通讯",
    icon: "icon-person",
    condition: "在线",
  },
  {
    title: "开关位置",
    icon: "icon-person",
    condition: "合",
  },
  {
    title: "隔离闸刀",
    icon: "icon-person",
    condition: "分",
  },
  {
    title: "地刀",
    icon: "icon-person",
    condition: "分",
  },
  {
    title: "告警",
    icon: "icon-person",
    condition: "无告警",
  },
  {
    title: "故障",
    icon: "icon-person",
    condition: "无故障",
  },
  {
    title: "开关位置控制",
    icon: "icon-person",
    condition: "",
  },
];

const electricity = [
  {
    span: 8,
    titleIcon: "I",
    title: "电流",
    main: [
      {
        mainName: "IA",
        mainBody: "36.48",
        mainUnits: "A",
      },
      {
        mainName: "IB",
        mainBody: "35.48",
        mainUnits: "A",
      },
      {
        mainName: "IC",
        mainBody: "36.48",
        mainUnits: "A",
      },
    ],
  },
  {
    span: 8,
    titleIcon: "U",
    title: "相电压",
    main: [
      {
        mainName: "UA",
        mainBody: "6.2",
        mainUnits: "kV",
      },
      {
        mainName: "UB",
        mainBody: "6.2",
        mainUnits: "kV",
      },
      {
        mainName: "UC",
        mainBody: "6.2",
        mainUnits: "kV",
      },
    ],
  },
  {
    span: 8,
    titleIcon: "UL",
    title: "线电压",
    main: [
      {
        mainName: "AB",
        mainBody: "10.3",
        mainUnits: "kV",
      },
      {
        mainName: "BC",
        mainBody: "10.2",
        mainUnits: "kV",
      },
      {
        mainName: "CA",
        mainBody: "10.4",
        mainUnits: "kV",
      },
    ],
  },
  {
    span: 12,
    titleIcon: "P",
    title: "功率",
    main: [
      {
        mainName: "有功功率",
        mainBody: "912",
        mainUnits: "kW",
      },
      {
        mainName: "无功功率",
        mainBody: "182.4",
        mainUnits: "kVar",
      },
      {
        mainName: "视在功率",
        mainBody: "1094.4",
        mainUnits: "kVA",
      },
    ],
  },
  {
    span: 12,
    titleIcon: "UL",
    title: "线电压",
    main: [
      {
        mainName: "AB",
        mainBody: "10.3",
        mainUnits: "kV",
      },
      {
        mainName: "BC",
        mainBody: "10.2",
        mainUnits: "kV",
      },
      {
        mainName: "CA",
        mainBody: "10.4",
        mainUnits: "kV",
      },
    ],
  },
  {
    span: 12,
    titleIcon: "UL",
    title: "线电压",
    main: [
      {
        mainName: "AB",
        mainBody: "10.3",
        mainUnits: "kV",
      },
      {
        mainName: "BC",
        mainBody: "10.2",
        mainUnits: "kV",
      },
      {
        mainName: "CA",
        mainBody: "10.4",
        mainUnits: "kV",
      },
    ],
  },
  {
    span: 12,
    titleIcon: "UL",
    title: "线电压",
    main: [
      {
        mainName: "AB",
        mainBody: "10.3",
        mainUnits: "kV",
      },
      {
        mainName: "BC",
        mainBody: "10.2",
        mainUnits: "kV",
      },
      {
        mainName: "CA",
        mainBody: "10.4",
        mainUnits: "kV",
      },
    ],
  },
];

const historicalData = ref([
  {
    title: "电流",
    id: 1,
  },
  {
    title: "电压",
    id: 2,
  },
  {
    title: "功率",
    id: 3,
  },
  {
    title: "功率因数",
    id: 4,
  },
  {
    title: "频率",
    id: 5,
  },
  {
    title: "电压谐波 ",
    id: 6,
  },
  {
    title: "电度",
    id: 7,
  },
  {
    title: "用电",
    id: 8,
  },
  {
    title: "发电",
    id: 9,
  },
]);

const consumeElectricityList = [
  {
    img: "",
    left1: "392.25",
    left2: "当日用电kWh",
    isShow: true,
  },
  {
    left1: "昨日同期",
    left2: "452.64",
    right1: "环比",
    right2: "-13.34% ↓",
    isShow: false,
  },
  {
    img: "",
    left1: "359.48",
    left2: "当日电费元",
    isShow: true,
  },
  {
    left1: "昨日同期",
    left2: "414.31",
    right1: "环比",
    right2: "-13.34% ↓",
    isShow: false,
  },
  {
    img: "",
    left1: "10225.53",
    left2: "当月用电kWh",
    isShow: true,
  },
  {
    left1: "上月同期",
    left2: "31254.25",
    right1: "环比",
    right2: "-67.53% ↓",
    isShow: false,
  },
  {
    img: "",
    left1: "9563.53",
    left2: "当月用电kWh",
    isShow: true,
  },
  {
    left1: "上月同期",
    left2: "31254.25",
    right1: "环比",
    right2: "-68.23% ↓",
    isShow: false,
  },
];
const generateElectricityList = [
  {
    img: "",
    left1: "74.18",
    left2: "当日发电kWh",
    isShow: true,
  },
  {
    left1: "昨日同期",
    left2: "-1298.1",
    right1: "环比",
    right2: "-105.23% ↓",
    isShow: false,
  },
  {
    img: "",
    left1: "4191.43",
    left2: "当月发电kWh",
    isShow: true,
  },
  {
    left1: "上月同期",
    left2: "3354.25",
    right1: "环比",
    right2: "24.23% ↑",
    isShow: false,
  },
];
let electricCurrent: any;
let TimeSharingElectricity: any;
let TimeSharingElectricity2: any;
setTimeout(() => {
  electricCurrent = echarts.init(
    document.getElementById("electricCurrent"),
    null as null,
    {
      height: 380,
    }
  );
  const electricCurrentData = {
    tooltip: {
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct"],
      y: "bottom",
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [120, 132, 101, 134, 90, 230, 210],
      },
      {
        name: "Union Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [220, 182, 191, 234, 290, 330, 310],
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [150, 232, 201, 154, 190, 330, 410],
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
        data: [320, 332, 301, 334, 390, 330, 320],
      },
    ],
  };
  TimeSharingElectricity = echarts.init(
    document.getElementById("TimeSharingElectricity")
  );
  TimeSharingElectricity2 = echarts.init(
    document.getElementById("TimeSharingElectricity2")
  );
  const TimeSharingElectricityData = {
    tooltip: {
      trigger: "{a}",
    },
    series: [
      {
        type: "pie",
        radius: ["35%", "65%"],
        emphasis: {
          label: {
            fontSize: 22,
            fontWeight: "bold",
          },
        },
        label: {
          show: true,
          margin: 1,
        },
        data: [
          { value: 735, name: "尖峰:" },
          { value: 580, name: "峰:" },
          { value: 484, name: "平:" },
          { value: 300, name: "谷" },
        ],
      },
    ],
  };
  const TimeSharingElectricityData2 = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        type: "pie",
        radius: ["35%", "65%"],
        emphasis: {
          label: {
            fontSize: 22,
            fontWeight: "bold",
          },
        },
        label: {
          show: true,
          margin: 1,
        },
        data: [
          { value: 735, name: "尖峰:" },
          { value: 580, name: "峰:" },
          { value: 484, name: "平:" },
          { value: 300, name: "谷" },
        ],
      },
    ],
  };
  electricCurrent.setOption(electricCurrentData);
  TimeSharingElectricity.setOption(TimeSharingElectricityData);
  TimeSharingElectricity2.setOption(TimeSharingElectricityData2);
}, 10);
const tabClick = (key) => {
  if (key === 1) {
    electricCurrent.setOption({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Email",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: "Union Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: "Video Ads",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: "Direct",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
      ],
    });
  }
  if (key === 2) {
    electricCurrent.setOption({
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
        {
          data: [],
        },
        {
          data: [],
        },
      ],
    });
  }
};
const activeKey = ref();
const handleClick = (item: any, index: any) => {
  if (index === 1) {
    electricCurrent.setOption({
      series: [
        {
          name: "Email",
          data: [4, 4, 4, 4, 4, 4, 4, 3, 3, 4, 4],
        },
      ],
    });
    activeKey.value = 2;
  }
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
}

// card的状态
.arco-card-body {
  padding: 0 !important;
}
.arco-card-size-medium {
  width: 100%;
  padding: 11px 10px !important;
}
// divider 分割线
.arco-divider-horizontal {
  margin: 10px 0 !important;
}
// 状态
.conditions {
  display: flex;
}

// 电力
.electricity {
  margin-top: 10px;
  // 顶部
  &-header {
    display: flex;
    line-height: 30px;
    margin: 10px 0;
    &-title {
      width: 30px;
      height: 30px;
      border-radius: 15px;
      text-align: center;
      line-height: 30px;
      margin-right: 5px;
    }
  }
  &-body {
    border-left: 1px solid #232324;
    margin-top: 5px;
  }
}
// 表格
#electricCurrent {
  margin-top: 10px;
}
#TimeSharingElectricity,
#TimeSharingElectricity2 {
  width: 260px;
  height: 210px;
  margin: 0 auto;
}
//
.custom-radio-card-checked .custom-radio-card-mask-dot {
  background-color: red;
}
:deep(.arco-card-body) {
  padding: 0;
}
.arco-radio-group,
.arco-radio {
  margin: 0 !important;
}
.arco-card-size-medium,
.arco-card-body,
.arco-tabs-type-card > .arco-tabs-content,
.arco-tabs-type-card-gutter > .arco-tabs-content {
  border: none !important;
}

.arco-collapse-item-header-left {
  padding-left: 0;
}
.arco-collapse {
  border: none !important;
}
:deep(.arco-collapse-item-content) {
  padding-left: 10px !important;
}
:deep(.arco-collapse-item-content-box) {
  padding-top: 10px !important;
}
.arco-tabs-content {
  padding-top: 0;
}

:deep(.arco-collapse-item-header) {
  display: block !important;
  // position: ;
}
</style>
