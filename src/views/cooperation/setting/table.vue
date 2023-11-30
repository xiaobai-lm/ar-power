<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue';
  import * as echarts from 'echarts';

  const switchChart = ref(true);
  const chart = ref();
  const date = new Date();
  const month = date.getMonth() + 1; // 月份从0开始获取，所以需要加1
  const year = date.getFullYear();

  const d = new Date(year, month, 0);
  const data: any = reactive([]);
  const days1 = d.getDate(); // 获取当前月的总天数days
  const tableTop = {
    title: '',
    dataIndex: '',
    width: 0,
  };
  const scroll = { x: 2000, y: 200 };
  const spanMethod = ({ rowIndex, columnIndex }) => {
    if (rowIndex === 0 && columnIndex === 0) {
      return {
        rowspan: 3,
        colspan: 1,
      };
    }
    return 0;
  };
  const columns = [
    {
      title: '能源类型',
      dataIndex: 'name',
      fixed: 'left',
      width: 100,
    },
    {
      title: '每日用能',
      dataIndex: 'address',
      children: [],
    },
    {
      title: '月用能',
      dataIndex: 'monthUse',
      fixed: 'right',
      width: 100,
    },
    {
      title: '每日偏差告警',
      dataIndex: 'dayAlarm',
      fixed: 'right',
      width: 100,
    },
    {
      title: '操作',
      slotName: 'operate',
      fixed: 'right',
      width: 100,
    },
  ];
  const dayTitle: any = [];
  for (let i = 1; i <= days1; i += 1) {
    dayTitle.push(`${i}日`);
    tableTop.title = `${i}日`;
    tableTop.dataIndex = `${i}天`;
    tableTop.width = 70;
    columns[1].children.push(JSON.parse(JSON.stringify(tableTop)));
  }
  const data1 = [
    {
      key: '1',
      name: '电',
      salary: '实际值',
      salary1: '12',
      email: 'jane.doe@example.com',
    },
  ];

  for (let i = 1; i <= days1; i += 1) {
    data1[0][`${i}天`] = Math.round(Math.random() * 2000);
  }
  const visible = ref(false);
  const form = reactive({
    name: '',
    post: '',
  });

  const handleClick = () => {
    visible.value = true;
    console.log(1);
  };
  const handleBeforeOk = () => {
    console.log(form);
  };
  const handleCancel = () => {
    visible.value = false;
  };
  const tabCharts = () => {
    switchChart.value = !switchChart.value;
    setTimeout(() => {
      const myChart = echarts.init(chart.value);

      const option = {
        xAxis: {
          type: 'category',
          data: dayTitle,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data,
            type: 'line',
          },
        ],
      };
      myChart.clear();
      myChart.setOption(option);
    }, 100);
  };
</script>

<template>
  <div
    ><div class="chance"
      ><a-button style="float: left" @click="handleClick">添加</a-button>
      <a-modal
        v-model:visible="visible"
        title="添加站点用能计划"
        width="900px"
        @cancel="handleCancel"
        @ok="handleBeforeOk"
      >
        <a-form :model="form">
          <a-row :gutter="16">
            <a-col :span="10">
              <a-form-item label="时间 :" label-col-flex="100px">
                <a-date-picker />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="站点 :" label-col-flex="110px" required>
                <a-select></a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="9">
              <a-form-item label="能源类型 :" label-col-flex="100px" required>
                <a-select></a-select>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="10">
              <a-form-item label="月用能 :" label-col-flex="100px">
                <a-input />
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="每日偏差告警 :"
                label-col-flex="110px"
                required
              >
                <a-input-number style="width: 300px" allow-clear>
                  <template #suffix>% </template>
                  <template #prefix> ±</template>
                </a-input-number>
              </a-form-item>
            </a-col>
          </a-row>
          <a-row :gutter="16">
            <a-col :span="10">
              <a-form-item label="每日用能 :" label-col-flex="100px">
                <a-button type="text" @click="tabCharts"
                  ><icon-eye-invisible
                /></a-button>
              </a-form-item>
            </a-col>
          </a-row>
          <div v-if="switchChart">
            <a-row :gutter="16">
              <a-col v-for="(item, i) in dayTitle" :key="i" :span="6">
                <a-form-item :label="`${item}:`" label-col-flex="100px">
                  <a-input v-model="data[i]"></a-input>
                </a-form-item>
              </a-col>
            </a-row>
          </div>
          <div v-else
            ><div ref="chart" style="width: 100%; height: 400px"></div
          ></div>
        </a-form>
      </a-modal>

      <a-popconfirm content="开启分时用电，并清空当前的用电计划配置？">
        <a-checkbox value="radio" style="float: right">分时用电</a-checkbox>
      </a-popconfirm>
    </div>
    <div class="table"
      ><a-table
        :columns="columns"
        :data="data1"
        :span-method="spanMethod"
        :bordered="{ wrapper: true, cell: true, headerCell: true }"
        :scroll="scroll"
      >
        <template #operate>
          <a-button @click="handleClick">编辑</a-button>
        </template>
      </a-table></div
    ></div
  ></template
>

<style scoped lang="less">
  .chance {
    width: 100%;
    margin: 10px 0;
    overflow: hidden;
  }
  .table {
    //border: #e1c948 solid;
  }
  span {
    width: 80px;
  }
  .grid-demo .arco-col {
    height: 48px;
    line-height: 48px;
    color: var(--color-white);
    text-align: center;
  }
</style>
