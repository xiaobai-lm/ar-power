<template>
  <div class="container">
    <a-row>
      <a-col :span="4">
        <checkboxIndex />
      </a-col>
      <a-col :span="20">
        <a-space>选择时间范围:</a-space>
        <a-range-picker v-model="rangeValue" style="width: 300px" />
        <a-checkbox v-model="checkBoxValue" @change="handleChange">
          只看曲线
        </a-checkbox>
        <div>
          <div id="myChart" style="margin-top: 10px"></div>
          <!-- 步骤条 -->
          <div v-show="isShow" style="margin-top: 20px">
            <div style="display: flex; justify-content: space-between">
              <div>运行状态曲线</div>
              <div>分时长:{{}}分钟 合时长：{{}}小时</div>
            </div>
            <a-slider
              :default-value="100"
              :marks="marks"
              :max="100"
              :style="{ width: '93%', marginLeft: '3.3%' }"
              disabled
            />
            <a-slider
              :default-value="0"
              :marks="marks2"
              :max="100"
              :style="{ width: '93%', marginLeft: '3.3%' }"
              disabled
            />
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import checkboxIndex from '@/components/leftSide/checkboxIndex.vue';
  import * as echarts from 'echarts';

  const rangeValue = ref([Date.now(), Date.now()]);
  const isShow = ref(true);
  const checkBoxValue = ref(false);
  const handleChange = () => {
    if (checkBoxValue.value === true) {
      isShow.value = false;
    } else {
      isShow.value = true;
    }
  };
  const marks = {
    0: '分',
    20: '',
    40: '',
    80: '',
    100: '',
  };

  const marks2 = {
    0: '分',
    10: '10',
    20: '20',
    30: '30',
    40: '40',
    50: '50',
    60: '60',
    70: 'Apr',
    80: '80',
    90: '90',
    100: '100',
  };
  onMounted(() => {
    const myChart = echarts.init(document.getElementById('myChart'), null, {
      height: 500,
      width: 1400,
    });

    const myChartOptions = {
      title: {
        text: '23123',
        left: '50%',
        textStyle: {
          color: 'white',
        },
      },
      // legend: {
      //     data: ['本期', '上期'],
      //     textStyle: {
      //         color: "var(--color-text-2)"
      //     }
      // },
      xAxis: {
        type: 'category',
        // 数值居中
        // boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },

      yAxis: {
        type: 'value',
      },

      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    };

    myChart.setOption(myChartOptions);
    window.addEventListener('resize', () => {
      myChart.resize();
    });
  });
</script>

<style scoped>
  .container {
    padding: 10px;
    color: var(--color-text-2);
  }

  .arco-tag-checked {
    padding: 10px 20px !important;
    color: #6c7fff;
    background-color: #6c7fff !important;
  }

  .arco-tag-checked:hover {
    padding: 20px !important;
    color: black !important;
    background-color: #6c7fff;
  }

  .arco-tag {
    width: 100%;
    padding: 14px 16px !important;
    background-color: #33404c;
    margin-left: 10px;
  }

  .arco-tag:hover {
    width: 100%;
    padding: 14px 16px !important;
    color: #6c7fff;
  }

  .arco-radio .arco-radio-disabled {
    color: black !important;
  }

  .arco-tag .arco-tag-size-medium .arco-tag-checkable {
    color: black !important;
  }

  .arco-tag > .arco-tag-size-medium > .arco-tag-checkable {
    color: black !important;
  }
</style>
