<template>
  <div class="container">
    <a-row class="container-condition" :gutter="10">
      <a-col
        v-for="(item, index) in dataList"
        :key="index"
        :span="item.span"
        class="container-condition-first"
      >
        <div class="container-condition-first-data">
          <div class="container-condition-first-top">
            <span class="container-condition-first-top-left">{{ item.title }}</span>
            <span class="container-condition-first-top-right">{{ item.titleData }}</span>
            <span><img src="" alt="" /></span>
          </div>
          <div class="container-condition-first-bottom">{{ item.condition }}</div>
        </div>
      </a-col>
      <a-col :span="2">
        <div class="container-condition-second">
          <h3>100</h3>
          <div class="container-condition-second-title">运行优，请保持</div>
          <div class="container-condition-second-date">2023-04-13</div>
          <div class="container-condition-second-grade">站点巡检评分</div>
        </div>
      </a-col>
      <a-col v-for="(thirdItem, thirdIndex) in third" :key="thirdIndex" :span="2">
        <div class="container-condition-third">
          <img src="" alt="" />
          <div class="container-condition-third-AlarmType">{{ thirdItem.AlarmType }}</div>
          <div class="container-condition-third-AlarmStatus">
            {{ thirdItem.AlarmStatus }}
          </div>
        </div>
      </a-col>
    </a-row>

    <a-row class="container-generateElectricity" :gutter="10">
      <a-col :span="4">
        <div
          v-for="(electricity, electricityIndex) in electricityList"
          :key="electricityIndex"
          class="container-generateElectricity-left"
        >
          <div class="container-generateElectricity-left-title">
            {{ electricity.title }}
            <img src="" alt="" />
          </div>
          <div class="container-generateElectricity-left-data">
            {{ electricity.data }}
          </div>
          <a-divider />
          <div class="container-generateElectricity-left-lastTitle">
            <span>{{ electricity.lastTitle }}</span>
            <span style="margin-left: 10px">{{ electricity.lastTitleData }}</span>
          </div>
          <div class="container-generateElectricity-left-lastData">
            {{ electricity.lastData }}
          </div>
        </div>
      </a-col>
      <a-col :span="12">
        <a-card>
          <template #title>
            <img src="" alt="" />
            <span>发电统计</span>
          </template>
          <div style="display: flex">
            <a-radio-group default-value="1" style="display: flex; flex-flow: column">
              <a-radio value="1">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>日 </a-tag>
                </template>
              </a-radio>
              <a-radio value="2">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>月 </a-tag>
                </template>
              </a-radio>
              <a-radio value="3">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>年 </a-tag>
                </template>
              </a-radio>
            </a-radio-group>
            <div id="ElectricityStatistics"></div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card>
          <template #title>
            <span></span>
            <span>发电功率趋势</span>
          </template>
          <div id="power"></div>
        </a-card>
      </a-col>
    </a-row>

    <a-row class="container-statusMessages" :gutter="10">
      <a-col :span="8" class="container-statusMessages-left">
        <a-card style="height: 350px">
          <template #title>
            <span>逆变器状态统计</span>
            <a href="">查看详情</a>
          </template>
          <div style="width: 500px; display: flex; margin-top: 40px">
            <div style="margin-left: 20px">
              <a-progress
                type="circle"
                :percent="firstPercent"
                stroke-width="10"
                @click="percentClick"
              />
              <div style="font-size: 30px; text-align: center">
                <span style="color: #05d4ce">{{ firstPercent }}</span
                >/1
              </div>
              <div style="text-align: center">在线设备数</div>
            </div>
            <div style="margin-left: 20px">
              <a-progress type="circle" :percent="secondPercent" stroke-width="10" />
              <div style="font-size: 30px; text-align: center">
                <span style="color: #03cb91">{{ secondPercent }}</span
                >/1
              </div>
              <div style="text-align: center">运行设备数</div>
            </div>
            <div style="margin-left: 20px">
              <a-progress type="circle" :percent="thirdPercent" stroke-width="10" />
              <div style="font-size: 30px; text-align: center">
                <span style="color: #d43d56">{{ thirdPercent }}</span
                >/1
              </div>
              <div style="text-align: center">故障设备数</div>
            </div>
          </div>
        </a-card>
      </a-col>
      <a-col :span="8" class="container-statusMessages-center">
        <a-card style="height: 350px">
          <template #title>
            <span>站点基本信息</span>
          </template>
          <a-list :bordered="false">
            <a-list-item v-for="(listData, listIndex) in listList" :key="listIndex"
              >{{ listData.title }}<span>{{ listData.data }}</span></a-list-item
            >
          </a-list>
        </a-card>
      </a-col>
      <a-col :span="8" class="container-statusMessages-right">
        <a-row :gutter="10">
          <a-col
            v-for="(plate, plateIndex) in plateList"
            :key="plateIndex"
            :span="12"
            class="container-statusMessages-right-col"
          >
            <div class="container-statusMessages-right-col-image">
              <div class="container-statusMessages-right-col-image-img">
                <img :src="plate.img" alt="" />
              </div>
              <div>
                <div class="container-statusMessages-right-col-image-title">
                  {{ plate.title }}
                </div>
                <div class="container-statusMessages-right-col-image-data">
                  <span>{{ plate.data }}</span>
                  <span style="font-size: 15px; margin-left: 10px">{{
                    plate.dataType
                  }}</span>
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>

    <a-row :gutter="10" class="container-card">
      <a-col
        v-for="(emission, emissionIndex) in emissionList"
        :key="emissionIndex"
        :span="6"
        class="container-card-top"
      >
        <div class="container-card-main">
          <span class="container-card-main-top">{{ emission.title }}</span>
          <span><img src="" alt="" /></span>
          <div class="container-card-main-bottom">
            {{ emission.data }}
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row class="container-last" :gutter="10">
      <a-col :span="12">
        <a-card style="height: 310px">
          <template #title> 事件警告列表 </template>
          <a-table :columns="columns" :data="data" :pagination="false" />
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card style="height: 310px">
          <template #title> 运维工单统计 </template>
          <div id="Alarm"></div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <a-card style="height: 310px">
          <template #title> 告警处理统计 </template>
          <div id="WorkOrder"></div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import * as echarts from "echarts";

const firstPercent = ref(0);
const secondPercent = ref(0);
const thirdPercent = ref(0);
const percentClick = () => {
  firstPercent.value = 1;
};
onMounted(() => {
  const ElectricityStatistics = echarts.init(
    document.getElementById("ElectricityStatistics"),
    null,
    {
      width: 300,
      height: 320,
    }
  );
  const ElectricityStatisticsData = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Rainfall", "Evaporation"],
      top: "bottom",
    },
    toolbox: {
      show: true,
      feature: {
        saveAsImage: { show: true },
      },
    },
    calculable: true,
    xAxis: [
      {
        type: "category",
        // prettier-ignore
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Rainfall",
        type: "bar",
        data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
      },
      {
        name: "Evaporation",
        type: "bar",
        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
      },
    ],
  };

  ElectricityStatistics.setOption(ElectricityStatisticsData);
  const power = echarts.init(document.getElementById("power"), null, {
    width: 200,
    height: 320,
  });
  const powerData = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        smooth: true,
      },
    ],
  };
  power.setOption(powerData);

  const Alarm = echarts.init(document.getElementById("Alarm"), null, {
    height: 240,
    width: 300,
  });

  const AlarmData = {
    tooltip: {
      trigger: "item",
    },

    series: [
      {
        name: "告警",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
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
        data: [
          { value: 1048, name: "未确认" },
          { value: 0, name: "已确认" },
        ],
      },
    ],
  };
  Alarm.setOption(AlarmData);

  const WorkOrder = echarts.init(document.getElementById("WorkOrder"), null, {
    height: 240,
    width: 300,
  });

  const WorkOrderData = {
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        name: "工单",
        type: "pie",
        radius: ["40%", "70%"],
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
        data: [
          { value: 600, name: "待处理" },
          { value: 735, name: "已完成" },
          { value: 580, name: "已接单" },
        ],
      },
    ],
  };
  WorkOrder.setOption(WorkOrderData);
});
const dataList = [
  {
    title: "300",
    titleData: "kWp",
    img: "",
    condition: "装机容量:",
    span: 4,
  },
  {
    title: "58.6",
    titleData: "kW",
    img: "",
    condition: "实时功率:",
    span: 4,
  },
  {
    title: "4228.2",
    titleData: "h",
    img: "",
    condition: "4228.2h:",
    span: 4,
  },
  {
    title: "1268466.6",
    titleData: "kWp",
    img: "",
    condition: "累计发电量:",
    span: 6,
  },
];

const electricityList = [
  {
    title: "今日发电量(kWp)",
    img: "",
    data: "316",
    lastTitle: "昨日同期",
    lastTitleData: "109",
    lastData: "188.57%",
  },
  {
    title: "本月发电量(kWp)",
    img: "",
    data: "19,534",
    lastTitle: "上月同期",
    lastTitleData: "0",
    lastData: "",
  },
];

const plateList = [
  {
    img: "http://118.190.51.135/img/weather_kk/2X/hj-wt.png",
    title: "环境问题:",
    data: "24.8",
    dataType: "℃",
  },
  {
    img: "http://118.190.51.135/img/weather_kk/2X/hj-wt.png",
    title: "环境问题:",
    data: "24.8",
    dataType: "℃",
  },
  {
    img: "http://118.190.51.135/img/weather_kk/2X/hj-wt.png",
    title: "环境问题:",
    data: "24.8",
    dataType: "℃",
  },
  {
    img: "http://118.190.51.135/img/weather_kk/2X/hj-wt.png",
    title: "环境问题:",
    data: "24.8",
    dataType: "℃",
  },
  {
    img: "http://118.190.51.135/img/weather_kk/2X/hj-wt.png",
    title: "环境问题:",
    data: "24.8",
    dataType: "℃",
  },
  {
    img: "http://118.190.51.135/img/weather_kk/2X/hj-wt.png",
    title: "环境问题:",
    data: "24.8",
    dataType: "℃",
  },
];

const emissionList = [
  {
    title: "68503kWh",
    img: "",
    data: "等效植树:",
  },
  {
    title: "38.057t",
    img: "",
    data: "SO2减排量:",
  },
  {
    title: "1264.776t",
    img: "",
    data: "C02减排量:",
  },
  {
    title: "512.51t",
    img: "",
    data: "节约标煤:",
  },
];
const columns = [
  {
    title: "时间",
    dataIndex: "name",
  },
  {
    title: "事件",
    dataIndex: "salary",
  },
  {
    title: "设备",
    dataIndex: "address",
  },
  {
    title: "状态",
    dataIndex: "email",
  },
];
const data = reactive([
  {
    name: "12:13:59",
    salary: "[模拟通讯设备] 设备离线 恢复",
    address: "模拟通讯设备",
    email: "自动恢复",
  },
  {
    name: "12:13:59",
    salary: "[模拟通讯设备] 设备离线",
    address: "模拟通讯设备",
    email: "自动恢复",
  },
  {
    name: "11:13:59",
    salary: "[模拟通讯设备] 设备离线 恢复",
    address: "模拟通讯设备",
    email: "自动恢复",
  },
  {
    name: "11:13:59",
    salary: "[模拟通讯设备] 设备离线",
    address: "模拟通讯设备",
    email: "自动恢复",
  },
]);

const third = [
  {
    img: "",
    AlarmType: "无告警",
    AlarmStatus: "站点告警状态",
  },
  {
    img: "",
    AlarmType: "正常",
    AlarmStatus: "站点故障状态",
  },
];

const listList = [
  {
    title: "站点名称:",
    data: "嘉德广场",
  },
  {
    title: "详细地址",
    data: "详细地址",
  },
  {
    title: "联系方式:",
    data: "张经理/1380000000",
  },
  {
    title: "投运时间:",
    data: "2019 -07-31",
  },
  {
    title: "安全运行:",
    data: "1419 天",
  },
];
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
  color: white;
}
.container {
  padding: 10px;
  // 顶部内容
  &-condition {
    &-first {
      height: 100px;
      border-radius: 5px;
      &-top {
        &-left {
          font-size: 36px;
        }
        &-right {
          font-size: 24px;
        }
      }
      &-data {
        padding: 14px 18px;
      }
      &-bottom {
        margin-top: 10px;
        font-size: 20px;
      }
    }
    &-first:nth-child(2n + 1) {
      background: linear-gradient(135deg, #2f4d92, #181765);
    }
    &-first:nth-child(2n) {
      background: linear-gradient(135deg, #181765, #2f4d92);
    }
    &-second {
      background-color: #1b2834;
      text-align: center;
      height: 100px;
      h3 {
        font-size: 32px;
        color: #42ad79;
      }
      &-title {
        font-size: 13px;
        color: #42ad79;
      }
      &-date {
        font-size: 12px;
        color: #999999;
      }
      &-grade {
        font-size: 14px;
        color: #999999;
      }
    }
    &-third {
      background-color: #1b2834;
      text-align: center;
      height: 100px;
      &-AlarmType {
        font-size: 16px;
        color: #42ad79;
        margin-top: 30px;
      }
      &-AlarmStatus {
        font-size: 14px;
        color: #fcfcfc;
      }
    }
  }
  // 发电量内容
  &-generateElectricity {
    margin-top: 10px;
    &-left {
      height: 190px;
      padding: 10px 0 0 16px;
      background-color: #1b2834;
      &-title {
        font-size: 20px;
      }
      &-data {
        font-size: 36px;
        color: #10aaeb;
        margin-top: 30px;
      }
      &-lastTitle {
        color: #7e93a6;
        font-size: 16px;
        margin-top: 10px;
      }
      &-lastData {
        padding: 10px 0 0 10px;
      }
    }
    &-left:nth-child(2) {
      margin-top: 10px;
    }
  }
  //
  &-statusMessages {
    margin-top: 10px;
    background-color: 10px;
    &-left {
      height: 350px;
    }
    &-center {
      height: 350px;
    }
    &-right {
      &-col {
        height: 110px;
        margin-top: 10px;
        &-image {
          display: flex;
          width: 100%;
          height: 110px;
          border-left: 3px solid #2f4255;
          img {
            width: 110px;
          }
          &-title {
            font-size: 16px;
            margin-top: 30px;
            font-size: 18px;
            color: rgb(109, 199, 190);
          }
          &-data {
            margin-top: 10px;
            font-size: 25px;
          }
        }
      }
      &-col:nth-child(1) {
        margin: 0;
      }
      &-col:nth-child(2) {
        margin: 0;
      }
    }
  }
  // 卡片
  &-card {
    margin-top: 10px;
    &-main {
      height: 100px;
      border-radius: 5px;
      padding: 10px 16px;
      &-top {
        font-size: 26px;
      }
      &-bottom {
        font-size: 24px;
      }
    }
    &-top:nth-child(2n) {
      background: linear-gradient(135deg, #0d755e, #141e28);
    }
    &-top:nth-child(2n + 1) {
      background: linear-gradient(135deg, #141e28, #0d755e);
    }
  }
  // last
  &-last {
    margin-top: 10px;
  }
}
//
#ElectricityStatistics {
  height: 100%;
}

.arco-tag {
  padding: 16px 12px;
  font-size: 16px;
  margin: 6px;
}
.arco-tag-checked {
  background-color: #8695ff;
}

:deep(.arco-progress-circle-wrapper) {
  width: 150px !important;
  height: -webkit-fill-available !important;
}
:deep(.arco-table .arco-table-element) {
  margin: 0;
}
</style>
