<template>
  <div class="container">
    <a-row :gutter="20">
      <a-col :span="4">
        <a-card style="height: 85vh">
          <a-space>类别：</a-space>
          <a-radio-group v-model="valueRadio">
            <a-radio value="1">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable>电</a-tag>
              </template>
            </a-radio>
            <a-radio value="2">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable>水</a-tag>
              </template>
            </a-radio>
            <a-radio value="3">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable>火</a-tag>
              </template>
            </a-radio>
          </a-radio-group>
          <a-divider></a-divider>
          <a-space
            style="
              display: flex;
              justify-content: space-around;
              width: 100%;
              background-color: rgb(62, 63, 62);
              padding: 10px;
            "
          >
            <a-space> 电</a-space>
            <a-checkbox v-model="checkBox" @change="checkBoxChange">
              全选站点
            </a-checkbox>
          </a-space>
          <!-- 树形选择 -->
          <a-tree
            v-model:checked-keys="checkedKeysTwo"
            :check-strictly="checkStrictly"
            :checkable="true"
            :data="treeData"
            checked-strategy="child"
            @check="handleCheck"
          >
          </a-tree>
        </a-card>
      </a-col>
      <a-col :span="20">
        <a-space>选择时间范围:</a-space>
        <a-range-picker v-model="rangeValue" style="width: 300px" />
        <a-radio-group v-model="DateValue" @change="DateValueChange">
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable>所有值</a-tag>
            </template>
          </a-radio>
          <a-radio value="2">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable>每日值</a-tag>
            </template>
          </a-radio>
          <a-radio value="3">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable>每月值</a-tag>
            </template>
          </a-radio>
        </a-radio-group>
        <a-button style="margin-left: 10px" type="primary" @click="searchClick">
          <template #icon>
            <div>
              <icon-search></icon-search>
            </div>
          </template>
          查询
        </a-button>
        <a-button style="margin-left: 10px" @click="searchClick">
          <template #icon>
            <div>
              <icon-upload></icon-upload>
            </div>
          </template>
          导出
        </a-button>
        <a-radio-group v-model="tableChart" @change="tableChartChange">
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable>表格</a-tag>
            </template>
          </a-radio>
          <a-radio value="2">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable>图表</a-tag>
            </template>
          </a-radio>
        </a-radio-group>
        <div v-show="isShow" id="myChart" style="margin-top: 10px"></div>

        <a-table
          v-show="isShow2"
          :bordered="{ wrapper: true, cell: true }"
          :columns="columns"
          :data="columnsData"
          style="margin-top: 10px"
        >
        </a-table>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref, Ref } from 'vue';
  import * as echarts from 'echarts';

  const checkStrictly = ref(true);
  const isShow = ref(true);
  const isShow2 = ref(false);
  const rangeValue = ref([Date.now(), Date.now()]);
  const DateValue = ref('1');

  const tableChart = ref('1');
  console.log(rangeValue.value, '时间');
  const dataValue: Ref<any> = ref([]);
  const allCheckedKeys = [
    '0-0',
    '0-0-1',
    '0-0-2',
    '0-0-2-1',
    '0-0-2-2',
    '0-1',
    '0-1-1',
    '0-1-1-1',
    '0-1-1-2',
    '0-1-2',
  ];
  const checkBox = ref(false);
  const checkedKeysTwo: Ref<any> = ref([]);
  const valueRadio = ref('1');
  const checkBoxChange = () => {
    if (checkBox.value === true) {
      checkedKeysTwo.value = allCheckedKeys;
    } else {
      checkedKeysTwo.value = [];
    }
  };

  // tables内容
  const columns = [
    {
      title: '测试',
      dataIndex: 'name',
    },
    {
      title: '4-13 00:00',
      dataIndex: 'a',
    },
    {
      title: '4-13 04:00',
      dataIndex: 'b',
    },
    {
      title: '4-13 08:00',
      dataIndex: 'c',
    },
    {
      title: '4-13 12:00',
      dataIndex: 'd',
    },
    {
      title: '4-13 16:00',
      dataIndex: 'e',
    },
    {
      title: '4-13 20:00',
      dataIndex: 'f',
    },
  ];

  const columnsData = ref([
    {
      name: 'asdas',
      a: '3',
      b: '3',
      c: '4',
      d: '5',
      e: '6',
      f: '7',
    },
  ]);
  const DateValueChange = () => {
    console.log('aa');
  };
  const handleCheck = (checkedKeys: any, data: any) => {
    if (data.checked === true) {
      dataValue.value.push(data.node);
      columnsData.value.push(data.node);
    } else {
      dataValue.value.forEach((element: any) => {
        dataValue.value.indexOf(element);
      });
      dataValue.value.splice(dataValue.value.length - 1, 1);
      columnsData.value.splice(dataValue.value.length - 1, 1);
    }
    // dataValue.value = [...new Set(a.value)]
  };

  const treeData = [
    {
      title: '广场',
      key: '0-0',
      name: '测试',
      type: 'line',
      smooth: true,
      data: [23, 34, 31, 42, 31, 22, 44, 34, 32, 45, 23],
      children: [
        {
          title: '支路',
          key: '0-0-1',
          name: '23',
          a: '123',
          b: '234',
          c: '345',
          d: '456',
          e: '567',
          f: '678',
          areaStyle: {},
          type: 'line',
          smooth: true,
          data: [23, 34, 31, 42, 31, 22, 44, 34, 32, 45, 23],
        },
        {
          title: '支路2',
          key: '0-0-2',
          name: '43',
          areaStyle: {},
          type: 'line',
          smooth: true,
          data: [21, 31, 11, 21, 31, 21, 41],
          children: [
            {
              title: '分支',
              key: '0-0-2-1',
              type: 'line',
              smooth: true,
              areaStyle: {},
              data: [2, 3, 4, 5, 6, 3, 2, 5],
            },
            {
              title: '部门',
              key: '0-0-2-2',
              smooth: true,
              data: [22, 15, 41, 24, 36, 22, 24],
              type: 'line',
            },
          ],
        },
      ],
    },
  ];
  let myChart: any;
  let myChartOptions: any;
  // 查询按钮
  const searchClick = () => {
    console.log(dataValue.value);
    myChart.setOption(myChartOptions);
  };

  const tableChartChange = () => {
    if (tableChart.value === '1') {
      isShow.value = true;
      isShow2.value = false;
    } else {
      isShow.value = false;
      isShow2.value = true;
    }
  };
  const colors = ['#5470C6', '#EE6666'];
  onMounted(() => {
    myChart = echarts.init(document.getElementById('myChart'), null, {
      height: 620,
    });

    myChartOptions = {
      tooltip: {
        trigger: 'axis',
      },
      length: {},
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[1],
            },
          },
          axisPointer: {
            label: {
              formatter(params) {
                return `Precipitation + ${params.value} + ${
                  params.seriesData.length
                    ? `： ${+params.seriesData[0].data}`
                    : ''
                }`;
              },
            },
          },
          // prettier-ignore
          data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
        },
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: colors[0],
            },
          },
          axisPointer: {
            label: {
              formatter(params) {
                return `Precipitation + ${params.value} + ${
                  params.seriesData.length
                    ? `： ${+params.seriesData[0].data}`
                    : ''
                }`;
              },
            },
          },
          // prettier-ignore
          data: ['2015-1', '2015-2', '2015-3', '2015-4', '2015-5', '2015-6', '2015-7', '2015-8', '2015-9', '2015-10', '2015-11', '2015-12'],
        },
      ],
      yAxis: {
        type: 'value',
      },
      series: dataValue.value,
    };

    myChart.setOption(myChartOptions);
  });
</script>

<style scoped>
  .container {
    color: var(--color-text-2);
    padding: 10px;
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
