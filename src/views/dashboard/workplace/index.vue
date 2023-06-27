<template>
  <div class="container">
    <a-layout class="layout-demo">
      <a-layout-sider collapsible breakpoint="xl" :collapsed="collapse">
        <a-menu
          :style="{ width: '200px', borderRadius: '4px' }"
          :collapsed="collapsed"
          :default-open-keys="['0']"
          :default-selected-keys="['0_0']"
        >
          <a-sub-menu v-for="List in ListValue" :key="List.id">
            <template #icon>
              <icon-font type="icon-person" :size="32" />
            </template>
            <template #title>{{ List.title }}</template>
            <a-menu-item
              v-for="item in List.ListValue2"
              :key="item.id"
              @click="handleClick(item)"
              >{{ item.first }}</a-menu-item
            >
          </a-sub-menu>
        </a-menu>

        <template #trigger="{ collapsed }">
          <IconCaretRight v-if="collapsed"></IconCaretRight>
          <IconCaretLeft v-else></IconCaretLeft>
        </template>
      </a-layout-sider>
      <a-layout-content>
        <div v-if="items === '0'">
          <!-- 站点看板 -->
          <SiteKanban />
        </div>
        <div v-else-if="items === '1'" style="height: 100%">
          <!-- 监控画面 -->
          <NewSiteKanban />
        </div>
        <div v-else-if="items === '2'">
          <!-- 设备监控 -->
          <EquipmentMonitoring />
        </div>
        <div v-else-if="items === '3'">
          <!-- 变压器监控 -->
          <TransformerDetection />
        </div>
        <div v-else-if="items === '4'">
          <!-- 电容器监测 -->
          <CapacitorDetection />
        </div>
        <div v-else-if="items === '5'">
          <!-- 微断监测 -->
          <MicroBreaker />
        </div>
        <div v-else-if="items === '6'">
          <!-- 负载分析 -->
          <LoadAnalysis />
        </div>
        <div v-else-if="items === '7'">
          <!-- 电气火灾 -->
          <CapacitorMonitoring />
        </div>
        <div v-else-if="items === '8'">
          <!-- 电容器监控 -->
          <EnvironmentalKanban />
        </div>
        <div v-else-if="items === '9'">
          <!-- 消防电源 -->
          <FireFightingPowerSupply />
        </div>
        <div v-else-if="items === '10'">
          <!-- 视频监控 -->
          <VideoSurveillance />
        </div>
        <div v-else-if="items === '11'">
          <!-- 三维监控 -->
          <MonitoringScreen />
        </div>
        <div v-else-if="items === '12'">
          <!-- 三维箱变 -->
          <InspectionRobot />
        </div>
        <div v-else-if="items === '13'">
          <!-- 中央空调 -->
          <CentralAirConditioning />
        </div>
        <div v-else-if="items === '14'">
          <!-- 百度 -->
          <BaiDu />
        </div>
        <div v-else-if="items === '15'">
          <!-- 巡检机器人 -->
          <InspectionRobot />
        </div>
        <div v-else-if="items === '16'">
          <!-- 电力监控看板 -->
          <ElectricPowerMonitoring />
        </div>
        <div v-else-if="items === '17'">
          <!-- 历史曲线 -->
          <HistoricalCurve />
        </div>
        <div v-else-if="items === '18'">
          <!-- 历史报表-->
          <HistoricalReport />
        </div>
        <div v-else-if="items === '19'">
          <!-- 告警统计-->
          <AlarmStatistics />
        </div>
        <div v-else-if="items === '20'">
          <!-- 事件警告-->
          <EventAlarm />
        </div>
        <div v-else-if="items === '21'">
          <!-- 事故追忆-->
          <EventRecollection />
        </div>
        <div v-else-if="items === '22'">
          <!-- 故障分析-->
          <EventAlarm />
        </div>
        <div v-else-if="items === '23'">
          <!-- 历史报表-->
          <EventAlarm />
        </div>
        <div v-else-if="items === '24'">
          <!-- 历史报表-->
          <EventAlarm />
        </div>
        <div v-else-if="items === '25'">
          <!-- 历史报表-->
          <EventAlarm />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import SiteKanban from "./components/SiteKanban.vue";
import NewSiteKanban from "./components/NewSiteKanban.vue";
import MonitoringScreen from "./components/MonitoringScreen.vue";
import EquipmentMonitoring from "./components/EquipmentMonitoring.vue";
import TransformerDetection from "./components/TransformerDetection.vue";
import CapacitorDetection from "./components/CapacitorDetection.vue";
import MicroBreaker from "./components/MicroBreaker.vue";
import LoadAnalysis from "./components/LoadAnalysis.vue";
import CapacitorMonitoring from "./components/CapacitorMonitoring.vue";
import FireFightingPowerSupply from "./components/FireFightingPowerSupply.vue";
import VideoSurveillance from "./components/VideoSurveillance.vue";
import CentralAirConditioning from "./components/CentralAirConditioning.vue";
import EnvironmentalKanban from "./components/EnvironmentalKanban.vue";
import ElectricPowerMonitoring from "./components/ElectricPowerMonitoring.vue";
import InspectionRobot from "./components/InspectionRobot.vue";
import BaiDu from "./components/BaiDu.vue";

import HistoricalCurve from "./components/HistoricalCurve.vue";
import HistoricalReport from "./components/HistoricalReport.vue";

import AlarmStatistics from "./components/AlarmStatistics.vue";
import EventAlarm from "./components/EventAlarm.vue";
import EventRecollection from "./components/EventRecollection.vue";

const router = useRouter();
const items: string = ref("0");
const ListValue: Array = [
  {
    title: "实时监测",
    icon: `icon-list`,
    id: "0",
    ListValue2: [
      {
        first: "站点看板",
        id: "0_0",
      },
      {
        first: "监控画面",
        id: "0_1",
      },
      {
        first: "设备监控",
        id: "0_2",
      },
      {
        first: "变压器监控",
        id: "0_3",
      },
      {
        first: "电容器监测",
        id: "0_4",
      },
      {
        first: "微断检测",
        id: "0_5",
      },
      {
        first: "负载分析",
        id: "0_6",
      },
      {
        first: "电气火灾",
        id: "0_7",
      },
      {
        first: "电容器监控",
        id: "0_8",
      },
      {
        first: "消防电源",
        id: "0_9",
      },
      {
        first: "视频监控",
        id: "0_10",
      },
      {
        first: "三维监控",
        id: "0_11",
      },
      {
        first: "三维箱变",
        id: "0_12",
      },
      {
        first: "中央空调",
        id: "0_13",
      },
      {
        first: "百度",
        id: "0_14",
      },
      {
        first: "巡检机器人",
        id: "0_15",
      },
      {
        first: "电力监控看板",
        id: "0_16",
      },
    ],
  },
  {
    title: "历史数据",
    id: "1",
    ListValue2: [
      {
        first: "历史曲线",
        id: "1_0",
      },
      {
        first: "历史报表",
        id: "1_1",
      },
    ],
  },
  {
    title: "告警管理",
    id: "2",
    ListValue2: [
      {
        first: "告警统计",
        id: "2_0",
      },
      {
        first: "事件告警",
        id: "2_1",
      },
      {
        first: "事故追忆",
        id: "2_2",
      },
      {
        first: "故障分析",
        id: "2_3",
      },
      {
        first: "告警类型管理",
        id: "2_4",
      },
      {
        first: "告警触发配置",
        id: "2_5",
      },
    ],
  },
];

const handleClick = (item) => {
  if (item.id === "0_0") {
    items.value = "0";
  } else if (item.id === "0_1") {
    // router.push({ path: "seconde" });
    items.value = "1";
  } else if (item.id === "0_2") {
    items.value = "2";
  } else if (item.id === "0_3") {
    items.value = "3";
  } else if (item.id === "0_4") {
    items.value = "4";
  } else if (item.id === "0_5") {
    items.value = "5";
  } else if (item.id === "0_6") {
    items.value = "6";
  } else if (item.id === "0_7") {
    items.value = "7";
  } else if (item.id === "0_8") {
    items.value = "8";
  } else if (item.id === "0_9") {
    items.value = "9";
  } else if (item.id === "0_10") {
    items.value = "10";
  } else if (item.id === "0_11") {
    items.value = "11";
  } else if (item.id === "0_12") {
    items.value = "12";
  } else if (item.id === "0_13") {
    items.value = "13";
  } else if (item.id === "0_14") {
    items.value = "14";
  } else if (item.id === "0_15") {
    items.value = "15";
  } else if (item.id === "0_16") {
    items.value = "16";
  } else if (item.id === "1_0") {
    items.value = "17";
  } else if (item.id === "1_1") {
    items.value = "18";
  } else if (item.id === "2_0") {
    items.value = "19";
  } else if (item.id === "2_1") {
    items.value = "20";
  } else if (item.id === "2_2") {
    items.value = "21";
  }
};

// const selectBg = () => {
//   console.log("bg");
// };
</script>

<style lang="less">
.arco-layout-sider-children {
  overflow-y: auto;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: #556170;
}
::-webkit-scrollbar-thumb {
  background-color: #78818c;
}
.layout-demo {
  height: 88vh;
}
.arco-radio-group .arco-radio {
  margin: 0;
}
.arco-radio {
  padding: 0;
}
.arco-tag {
  border-radius: unset;
}
</style>
