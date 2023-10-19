<template>
  <div class="container">
    <div class="container-header">
      <a-row :gutter="14">
        <a-col :span="4">
          <div
            style="
              width: 100%;
              height: 110px;
              color: #d0d5d6;
              padding: 0 16px;
              background: linear-gradient(45deg, #394255, #1c2935);
            "
          >
            <div style="font-size: 30px; padding-top: 10px">
              212.8ppm
              <icon-dashboard :rotate="315" />
            </div>
            <div style="font-size: 20px; margin-top: 20px">六氟化硫:</div>
          </div>
        </a-col>
        <a-col :span="2">
          <div
            style="
              width: 100%;
              height: 110px;
              color: #d0d5d6;
              text-align: center;
              background: #1b2834;
            "
          >
            <icon-wifi style="font-size: 30px; margin-top: 14px" />
            <div>在线</div>
            <p>站点通讯状态</p>
          </div>
        </a-col>
        <a-col :span="2">
          <div
            style="
              width: 100%;
              height: 110px;
              color: #d0d5d6;
              text-align: center;
              background: #1b2834;
            "
          >
            <icon-exclamation-circle style="font-size: 30px; margin-top: 14px" />
            <div>无警告</div>
            <p>站点告警状态</p>
          </div>
        </a-col>
        <a-col
          :span="4"
          v-for="(item, index) in dataList"
          :key="index"
          style="
            background: url('../../../../assets/EnvironmentalKanbanView/ems_test_bg.png');
          "
        >
          <div
            style="
              width: 100%;
              height: 110px;
              display: flex;
              border-left: 4px solid rgb(109, 199, 190);
              background: #1b2834;
            "
          >
            <img src="@/assets/EnvironmentalKanbanView/yangan.png" />
            <div style="color: #6dba8d; font-size: 18px; padding: 20px 10px">
              {{ item.title }}
              <p>----</p>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="container-content">
      <a-row :gutter="10">
        <a-col :span="6" style="height: 760pxl; background-color: #232324">
          <a-card class="container-content-card">
            <template #title> <icon-drag-dot-vertical /> 站点信息 </template>
            <div
              class="container-content-card-div"
              v-for="(item, index) in SiteInformation"
              :key="index"
            >
              <span style="float: left">{{ item.title }}</span>
              <span style="padding-left: 40px">{{ item.value }}</span>
            </div>
          </a-card>
          <div
            v-for="(items, index2) in dataList2"
            :key="index2"
            style="
              background: url('@/assets/EnvironmentalKanbanView/ems_test_bg.png');
            "
          >
            <div
              style="
                width: 100%;
                height: 110px;
                display: flex;
                margin-top: 10px;
                border-left: 4px solid rgb(109, 199, 190);
                background: #1b2834;
              "
            >
              <img src="@/assets/EnvironmentalKanbanView/yangan.png" />
              <div style="color: #6dba8d; font-size: 18px; padding: 20px 10px">
                {{ items.title }}
                <p>{{ items.value }}</p>
              </div>
              <div style="color: #6dba8d; font-size: 18px; padding: 20px 10px">
                {{ items.title2 }}
                <p>{{ items.value2 }}</p>
              </div>
            </div>
          </div>

          <a-card style="margin-top: 10px">
            <template #title>
              <icon-list />
              <span>门禁开关记录</span>
            </template>
            <a-table
              :columns="columns"
              :data="data"
              :bordered="{ wrapper: true, cell: true }"
            />
          </a-card>
        </a-col>
        <a-col :span="10" style="height: 760px; background-color: #232324">
          <a-card>
            <template #title>
              <icon-sun />
              <span>视频画面内容</span>
            </template>
            <video controls>
              <source src="@/assets/video/video.mp4" type="" />
            </video>
          </a-card>
          <a-card style="margin-top: 10px">
            <template #title>
              <icon-sun />
              <span>事件警告列表</span>
            </template>
            <a-table
              :columns="EventWarningList"
              :data="EventWarningData"
              :bordered="{ wrapper: true, cell: true }"
            />
          </a-card>
        </a-col>
        <a-col :span="8" style="height: 760px; background-color: #232324">
          <a-card>
            <template #title>
              <icon-relation />
              <span>环境温湿度</span>
            </template>
            <a-row>
              <a-col :span="12">
                <div id="ambientTemperature" style="height: 300px"></div>
              </a-col>
              <a-col :span="12">
                <div id="ambientHumidity" style="height: 300px"></div>
              </a-col>
            </a-row>
          </a-card>
          <div style="width: 100%; margin-top: 10px">
            <img
              style="width: 100%"
              src="@/assets/EnvironmentalKanbanView/switch.png"
              alt=""
            />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import * as echarts from "echarts";

const dataList = ref([
  {
    title: "烟感:",
  },
  {
    title: "水浸告警:",
  },
  {
    title: "空调状态:",
  },
  {
    title: "除湿机状态:",
  },
]);

const dataList2 = ref([
  {
    title: "红外:",
    value: "----",
  },
  {
    title: "前门状态:",
    value: "----",
    title2: "后门状态",
    value2: "----",
  },
]);

const SiteInformation = ref([
  {
    title: "项目名称:",
    value: "嘉德广场",
  },
  {
    title: "项目地址:",
    value: "详细地址",
  },
  {
    title: "运行天数:",
    value: "66天",
  },
  {
    title: "现场联系人:",
    value: "赵总/13812340000",
  },
  {
    title: "运维工程师:",
    value: "钱工/15212340000",
  },
]);

const columns = [
  {
    title: "设备名称",
    dataIndex: "name",
  },
  {
    title: "测点名称",
    dataIndex: "salary",
  },
  {
    title: "状态",
    dataIndex: "address",
  },
  {
    title: "发生时间",
    dataIndex: "email",
  },
];
const data = reactive([
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32",
    email: "jane.doe",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 ",
    email: "alisa.ross",
  },
]);

const EventWarningList = [
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

const EventWarningData = reactive([
  {
    name: "17:14:00",
    salary: "[模拟通讯设备] 设备在线",
    address: "模拟通讯设备",
    email: "自动恢复",
  },
  {
    name: "17:14:00",
    salary: "[模拟通讯设备] 设备离线",
    address: "模拟通讯设备",
    email: "自动恢复",
  },
  {
    name: "17:14:00",
    salary: "[模拟通讯设备] 设备在线",
    address: "模拟通讯设备",
    email: "自动恢复",
  },
  {
    name: "17:14:00",
    salary: "[模拟通讯设备] 设备离线",
    address: "模拟通讯设备",
    email: "自动恢复",
  },
]);

onMounted(() => {
  setTimeout(() => {
    const ambientTemperature = echarts.init(
      document.getElementById("ambientTemperature"),
      null,
      {
        height: 260,
      }
    );
    const ambientTemperatureData = {
      series: [
        {
          type: "gauge",
          center: ["50%", "60%"],
          splitNumber: 10,
          itemStyle: {
            color: "#FFAB91",
          },
          progress: {
            show: true,
            width: 6,
          },
          pointer: {
            show: true,
          },
          axisLine: {
            lineStyle: {
              width: 2,
            },
          },

          splitLine: {
            distance: 2,
            length: 14,
            lineStyle: {
              width: 3,
              color: "#999",
            },
          },
          axisLabel: {
            distance: 10,
            color: "#999",
            fontSize: 13,
          },
          anchor: {
            show: false,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            lineHeight: 40,
            borderRadius: 8,
            offsetCenter: [0, "-15%"],
            fontSize: 14,
            fontWeight: "bolder",
            formatter: "{value} °C",
            color: "inherit",
          },
          data: [
            {
              value: 20,
              name: "环境温度",
            },
          ],
        },
      ],
    };
    const ambientHumidity = echarts.init(
      document.getElementById("ambientHumidity"),
      null,
      {
        height: 260,
      }
    );
    const ambientHumidityData = {
      series: [
        {
          type: "gauge",
          center: ["50%", "60%"],
          splitNumber: 10,
          itemStyle: {
            color: "#FFAB91",
          },
          progress: {
            show: true,
            width: 6,
          },
          pointer: {
            show: true,
          },
          axisLine: {
            lineStyle: {
              width: 2,
            },
          },

          splitLine: {
            distance: 2,
            length: 14,
            lineStyle: {
              width: 3,
              color: "#999",
            },
          },
          axisLabel: {
            distance: 10,
            color: "#999",
            fontSize: 13,
          },
          anchor: {
            show: true,
          },
          title: {
            show: false,
          },
          detail: {
            valueAnimation: true,
            lineHeight: 40,
            borderRadius: 8,
            offsetCenter: [0, "-15%"],
            fontSize: 14,
            fontWeight: "bolder",
            formatter: "{value} °C",
            color: "inherit",
          },
          data: [
            {
              value: 20,
              name: "环境湿度",
            },
          ],
        },
      ],
    };
    ambientTemperature.setOption(ambientTemperatureData);
    ambientHumidity.setOption(ambientHumidityData);
  }, 10);
});
</script>

<style lang="less" scoped>
* {
  color: white;
}
.container {
  padding: 10px;
  &-content {
    margin-top: 10px;
    &-card {
      &-div {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid black;
      }
      &-div:hover {
        background-color: #233149;
      }
    }
  }
}
:deep(.arco-table .arco-table-cell) {
  padding: 10px 2px !important;
}
:deep(.arco-table .arco-table-element) {
  margin: 0 !important;
}
</style>
