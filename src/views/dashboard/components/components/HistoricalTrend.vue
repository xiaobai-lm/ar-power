<template>
  <div class="container">
    <div class="container-header">
      选择时间范围:<a-range-picker
        v-model="rangeValue"
        :time-picker-props="['00:00:00']"
        style="width: 400px"
      />
    </div>
    <div>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" title="概况">
          <div id="generalSituation"></div>
        </a-tab-pane>
        <a-tab-pane key="2" title="功率"> <div id="power"></div></a-tab-pane>
        <a-tab-pane key="3" title="电度"> <div id="generalSituation"></div> </a-tab-pane>
        <a-tab-pane key="4" title="电压">Content of Tab Panel 4 </a-tab-pane>
        <a-tab-pane key="5" title="功率因数">Content of Tab Panel 5 </a-tab-pane>
        <a-tab-pane key="6" title="频率">Content of Tab Panel 6 </a-tab-pane>
        <a-tab-pane key="7" title="电压谐波">Content of Tab Panel 7 </a-tab-pane>
        <a-tab-pane key="8" title="电压谐波">Content of Tab Panel 8 </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import * as echarts from "echarts";

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const rangeValue = ref([new Date(year, month, 1), Date.now()]);

setTimeout(() => {
  const generalSituation = echarts.init(
    document.getElementById("generalSituation"),
    null,
    {
      height: 600,
    }
  );
  const power = echarts.init(document.getElementById("power"), null, {
    height: 600,
  });

  const generalSituationData = {
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
      itemStyle: {},
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        itemStyle: {
          color: "white",
        },
        type: "line",
        data: [120, 132, 100, 134, 90, 230, 210],
        markArea: {
          data: [
            [
              {
                name: "早上好",
                xAxis: "Mon",
                yAxis: "0",

                itemStyle: {
                  color: "rgba(255, 173, 177, 0.4)",
                  opacity: 1,
                },
              },
              {
                xAxis: "Sun",
                yAxis: "100",
              },
            ],
            [
              {
                name: "Evening Peak",
                xAxis: "Thu",
                yAxis: "0",
                itemStyle: {
                  color: "#bfa",
                  opacity: 0.2,
                },
              },
              {
                xAxis: "Sat",
                yAxis: "200",
              },
            ],
            [
              {
                name: "Evening Peak",
                xAxis: "Tue",
                yAxis: "0",
                itemStyle: {
                  color: "aqua",

                  opacity: 0.2,
                },
              },
              {
                xAxis: "Thu",
                yAxis: "180",
              },
            ],
          ],
        },
      },
    ],
  };
  const powerData = {
    title: {
      text: "Stacked Line",
      textStyle: {
        color: "white",
        textBorderColor: "aqua",
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        data: [1220, 1332, 1400, 1354, 2319, 2330, 2410],
        markArea: {
          data: [
            [
              {
                name: "早上好",
                xAxis: "Sat",
                yAxis: "0",
                itemStyle: {
                  color: "rgba(255, 173, 177, 0.4)",
                  opacity: 1,
                },
              },
              {
                xAxis: "Sun",
                yAxis: "1500",
              },
            ],
            [
              {
                name: "Evening Peak",
                xAxis: "Thu",
                yAxis: "0",
                itemStyle: {
                  color: "#bfa",
                  opacity: 0.2,
                },
              },
              {
                xAxis: "Sat",
                yAxis: "3250",
              },
            ],
            [
              {
                name: "Evening Peak",
                xAxis: "Mon",
                yAxis: "0",
                itemStyle: {
                  color: "aqua",
                  opacity: 0.2,
                },
              },
              {
                xAxis: "Thu",
                yAxis: "1820",
              },
            ],
          ],
        },
      },
    ],
  };
  power.setOption(powerData);
  generalSituation.setOption(generalSituationData);
}, 10);
</script>

<style lang="less" scoped>
.container {
  &-header {
    color: white;
    line-height: 32px;
  }
}
</style>
