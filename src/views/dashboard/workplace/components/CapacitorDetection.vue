<template>
  <div class="container">
    <div class="container-realTimeStatus">
      <span class="container-realTimeStatus-left">实时状态</span>
      <span class="container-realTimeStatus-right" @click="handleClick">
        <icon-unordered-list />{{ examine }}</span
      >
    </div>
    <div v-show="isShow">
      <div class="container-realTimeStatus-main">
        <a-card :bordered="false" class="container-realTimeStatus-main-card">
          <div class="container-realTimeStatus-main-card-header">
            <img
              src="@/assets/workplaceView/CapacitorDetectionView/CapacitorDetection-header.png"
            />
            <span style="margin: 0 20px">电容柜</span>
            <span
              style="
                background-color: #23313f;
                border-radius: 15px;
                padding: 2px 5px;
                font-size: 10px !important;
                margin: 0 10px;
              "
              >嘉德广场</span
            >
            <img
              src="../../../assets/workplaceView/CapacitorDetectionView/CapacitorDetection-group01.png"
            />
          </div>
          <div class="container-realTimeStatus-main-card-content">
            <div
              v-for="(item, index) in dataList.capacitor"
              :key="index"
              class="container-realTimeStatus-main-card-content-header"
              @click="handleClickList(item, index)"
            >
              <img :src="item.img" />
              <span>{{ item.value }}</span>
            </div>
          </div>
          <a-modal
            v-model:visible="visible"
            @ok="handleOk"
            hide-cancel
            :footer="false"
            :width="1200"
          >
            <template #title> 嘉德广场/电容柜/{{}} </template>
            <a-card>
              <span>日期选择 </span>
              <a-range-picker v-model="rangeValue" style="width: 360px" />
              <span style="float: right">
                当前状态:{{}}
                实时温度:{{}}
              </span>
            </a-card>
            <div id="eCharts"></div>
          </a-modal>
        </a-card>
      </div>
      <div class="container-OperationStatistics">
        <div class="container-OperationStatistics-header">
          <span class="container-OperationStatistics-header-span">运行统计</span>
          <a-card style="margin-top: 10px">
            <div>
              <span> 设备选择 </span>
              <a-select
                :style="{ width: '320px' }"
                v-model="value"
                placeholder="Please select ..."
                default-value="Beijing"
                allow-clear
              >
                <a-option>Beijing</a-option>
              </a-select>
              <span>日期选择</span>
              <a-range-picker v-model="rangeValue" style="width: 300px" />
            </div>
            <h4>投入时间排行</h4>
            <div id="TimeRanking"></div>
            <h4>投入次数排行</h4>
            <div id="NumberRanking"></div>
          </a-card>
        </div>
      </div>
    </div>

    <div>
      <a-table
        v-show="isShowTwo"
        :columns="columns"
        :data="dataList.capacitor"
        column-resizable
        :bordered="{ cell: true }"
        :span-method="dataSpanMethod"
        :pagination="false"
      ></a-table>
    </div>
  </div>
  <!--  axisLine: {
        lineStyle: {
            type: 'solid'
        } 
    } -->
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import * as echarts from "echarts";
import { useUserDataList } from "@/store";
import ON from "@/assets/workplaceView/CapacitorDetectionView/CapacitorDetection-on.png";
import OFF from "@/assets/workplaceView/CapacitorDetectionView/CapacitorDetection-off.png";

const isShow = ref(true);
const isShowTwo = ref(false);
const examine = ref("列表查看");
const handleClick = () => {
  examine.value = "图表查看";
  isShow.value = !isShow.value;
  isShowTwo.value = !isShowTwo.value;
};
const visible = ref(false);

const handleClickList = () => {
  visible.value = true;
};
const dataList = useUserDataList();

const dataSpanMethod = ({ record, column }) => {
  if (record.name === "Alisa Ross" && column.dataIndex === "salary") {
    return {
      rowspan: 2,
    };
  }
  return record;
};

const rangeValue = ref([Date.now(), Date.now()]);

onMounted(() => {
  setTimeout(() => {
    const myChart = echarts.init(document.getElementById("eCharts"), null, {
      height: 400,
    });
    const myChartData = {
      xAxis: {
        type: "category",
        axisLine: {
          lineStyle: {
            type: "solid",
          },
        },
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "?"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260, 253],
          type: "line",
        },
      ],
    };

    const TimeRanking = echarts.init(document.getElementById("TimeRanking"), null, {
      height: 210,
    });
    const TimeRankingData = {
      tooltip: {
        trigger: "axis",
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "?"],
        axisTick: {
          alignWithLabel: true,
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 433],
          type: "bar",
          itemStyle: {
            width: 16,
            color: "#a90000",
          },
        },
      ],
    };
    const NumberRanking = echarts.init(document.getElementById("NumberRanking"), null, {
      height: 200,
    });
    const NumberRankingData = {
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
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
      ],
    };
    myChart.setOption(myChartData);
    TimeRanking.setOption(TimeRankingData);
    NumberRanking.setOption(NumberRankingData);
  }, 10);
});
const columns = reactive([
  {
    title: "分组",
    dataIndex: "PrimaryName",
  },
  {
    title: "柜体",
    dataIndex: "SecondaryName",
  },
  {
    title: "电容器",
    dataIndex: "capacitorName",
  },
  {
    title: "当前状态",
    dataIndex: "currentState",
  },
  {
    title: "当前温度",
    dataIndex: "currentTemperature",
  },

  {
    title: "近1年投入比",
    dataIndex: "oneYearInvestment",
  },
  {
    title: "近1年投切次数",
    dataIndex: "oneYearSwitch",
  },
  {
    title: "近90天投入比",
    dataIndex: "threeMonthsInvestment",
  },
  {
    title: "近90天投切次数",
    dataIndex: "threeMonthsSwitch",
  },
  {
    title: "近30天投入比",
    dataIndex: "oneMonthsInvestment",
  },
  {
    title: "近30天投入比",
    dataIndex: "oneMonthsSwitch",
  },
]);
</script>

<style lang="less" scoped>
* {
  color: white;
}
.container {
  padding: 10px;
  &-realTimeStatus {
    &-left {
      border-left: 4px solid #6c7fff;
      padding-left: 7px;
      font-size: 16px;
    }
    &-right {
      float: right;
    }
    &-main {
      margin-top: 20px;
      &-card {
        padding: 6px;
        background-color: #1b2834;
        border-radius: 8px;
        &-header {
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          img {
            vertical-align: middle;
          }
        }
        &-content {
          display: flex;
          &-header {
            width: 70px;
            height: 100px;
            text-align: center;
            align-items: center;
            span {
              color: #1dfffc;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  &-OperationStatistics {
    margin: 20px 0;
    &-header {
      &-span {
        border-left: 4px solid #6c7fff;
        padding-left: 7px;
        font-size: 16px;
      }
    }
  }
}
h4 {
  margin: 6px 0;
  padding: 0;
}
.container-realTimeStatus-main-card-content-header {
  height: 100px;
}
.arco-btn-primary,
.arco-btn-primary[type="button"],
.arco-btn-primary[type="submit"] {
  display: none;
}

.arco-modal {
  width: 1200px;
}
</style>
