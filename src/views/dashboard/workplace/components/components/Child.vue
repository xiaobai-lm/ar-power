<template>
  <!-- info是父组件传递过了的值 -->
  <div id="myChart" style="width: 100%; height: 100%"></div>
</template>

<script lang="ts" setup>
import { toRefs, defineProps, onMounted } from "vue";
import * as echarts from "echarts";

const props: Array = defineProps({
  item: Array,
  data: Array,
});

const { item, data } = toRefs(props);

onMounted(() => {
  setTimeout(() => {
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
    console.log(options.series);
    myChart.setOption(options);
  }, 10);
});
</script>

<style></style>
