<script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';

  const chart = ref();
  const date = new Date();
  const month = date.getMonth() + 1; // 月份从0开始获取，所以需要加1
  const year = date.getFullYear();

  const d = new Date(year, month, 0);
  const xDay: any = [];
  const data: any = [];
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
      title: '数据名称',
      dataIndex: 'salary',
      fixed: 'left',
      width: 100,
    },
    {
      title: '月合计',
      dataIndex: 'salary1',
      fixed: 'left',
      width: 100,
    },
    {
      title: '每日趋势',
      dataIndex: 'address',
      children: [],
    },
  ];
  for (let i = 1; i <= days1; i += 1) {
    tableTop.title = `${i}日`;
    tableTop.dataIndex = `${i}天`;
    tableTop.width = 70;
    columns[3].children.push(JSON.parse(JSON.stringify(tableTop)));
  }
  const data1 = [
    {
      key: '1',
      name: '总耗能',
      salary: '实际值',
      salary1: '12',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      salary: '计划值',
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      salary: '偏差率',
      salary1: '',
      email: 'kevin.sandra@example.com',
    },
  ];

  for (let i = 1; i <= days1; i += 1) {
    const x = Math.round(Math.random() * 2000);

    data1[0][`${i}天`] = x;
  }
  onMounted(() => {
    for (let i = 1; i <= days1; i += 1) {
      xDay.push(`${i}日`);
      data.push(Math.round(Math.random() * 4000));
    }
    const myChart = echarts.init(chart.value);
    const option = {
      xAxis: {
        type: 'category',
        data: xDay,
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        height: '90%',
        width: '93%',
        top: '5%',
        left: '5%',
      },
      series: {
        name: '实际用能',
        type: 'bar',
        data,
      },
    };
    myChart.setOption(option);
  });
</script>

<template
  ><div class="all1"
    ><div class="charts"
      ><div class="borderColor"><span>2023-11 用能计划实绩趋势</span></div>
      <div ref="chart" style="width: 100%; height: 400px"></div>
      <div class="table"
        ><a-table
          :columns="columns"
          :data="data1"
          :span-method="spanMethod"
          :bordered="{ wrapper: true, cell: true, headerCell: true }"
          :scroll="scroll"
      /></div> </div
  ></div>
</template>

<style scoped lang="less">
  .all1 {
    //height: 1000px;
    width: 100%;
    //border: red solid;
    .charts {
      width: 100%;
      //background-color: #08b762;
      //border: #b437de solid;
      span {
        color: white;
        font-size: medium;
      }
      .table {
        //border: #e1c948 solid;
        margin-top: 20px;
        width: 99%;
      }
    }
  }
  .borderColor {
    //border: #f8f8f8 solid;
    height: 35px;
    line-height: 35px;
  }
</style>
