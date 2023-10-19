<template>
  <!-- info是父组件传递过了的值 -->
  <div id="myChart" style="width: 100%; height: 100%"></div>
  <div id="myChart2" style="width: 100%; height: 100%"></div>
</template>

<script lang="ts" setup>
import { ref, defineProps, onMounted, nextTick,toRefs } from "vue";
import * as echarts from "echarts";

const props = defineProps({
  item: Array,
  data: Array,
  // item2: Array,
  // data2: Array,
});

const { item, data } = toRefs(props);
// const { item, data, item2, data2 } = toRefs(props);

onMounted(async () => {
  await nextTick(() => {
    const myChart: any = echarts.init(document.getElementById("myChart"), null, {
      height: 420,
    });
    const options = {
      xAxis: {
        type: "category",
        data: data.value,
      },
      yAxis: {
        type: "value",
      },
      series: item.value,
    };

    myChart.setOption(options);

    // const myChart2: any = echarts.init(document.getElementById("myChart2"));

    // const options2 = {
    //   xAxis: {
    //     type: "category",
    //     data: data2.value,
    //   },
    //   yAxis: {
    //     type: "value",
    //   },
    //   series: item2.value,
    // };
    // myChart2.setOption(options2);
  });
});
</script>

<style></style>
