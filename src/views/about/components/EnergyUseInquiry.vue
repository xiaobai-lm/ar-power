<template>
  <div class="container">
    <a-row :gutter="10">
      <a-col :span="4">
        <a-card class="container-left">
          <a-space>类别：</a-space>
          <a-radio-group v-model="checkValue">
            <a-radio value="1">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable>
                  <icon-sun />
                </a-tag>
              </template>
            </a-radio>
            <a-radio value="2">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable>
                  <icon-sun />
                </a-tag>
              </template>
            </a-radio>
            <a-radio value="3">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable>
                  <icon-sun />
                </a-tag>
              </template>
            </a-radio>
          </a-radio-group>
          <br />
          <a-space>标签：</a-space>
          <a-radio-group v-model="labelValue">
            <a-radio value="1">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 支路 </a-tag>
              </template>
            </a-radio>
            <a-radio value="2">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 分项 </a-tag>
              </template>
            </a-radio>
            <a-radio value="3">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 部门 </a-tag>
              </template>
            </a-radio>
          </a-radio-group>
          <a-divider></a-divider>
          <leftSide />
        </a-card>
      </a-col>
      <a-col :span="20" class="container-right">
        <a-card>
          <a-radio-group v-model="reportForms" @change="handleChange">
            <a-radio value="1">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 日报表 </a-tag>
              </template>
            </a-radio>
            <a-radio value="2">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 周报表 </a-tag>
              </template>
            </a-radio>
            <a-radio value="3">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 月报表 </a-tag>
              </template>
            </a-radio>
            <a-radio value="4">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 年报表 </a-tag>
              </template>
            </a-radio>
          </a-radio-group>
          <a-select style="width: 140px; margin: 0 10px">
            <a-option v-for="(item, index) in dayList" :key="index">{{
              item
            }}</a-option>
          </a-select>
          <a-range-picker
            v-model="rangeValue"
            style="width: 300px; margin-right: 10px"
          />

          <a-button style="margin: 0 10px" type="outline">
            <template #icon>
              <icon-delete />
            </template>
            <!-- Use the default slot to avoid extra spaces -->
            <template #default>删除</template>
          </a-button>
          <a-button style="margin: 0 10px 0 0" type="outline">
            <template #icon>
              <icon-upload />
            </template>
            <!-- Use the default slot to avoid extra spaces -->
            <template #default>导出</template>
          </a-button>

          <a-radio-group>
            <a-radio>电量</a-radio>
            <a-radio>电费</a-radio>
          </a-radio-group>
          <a-checkbox style="margin: 0 10px" value="1">显示原始值</a-checkbox>
          <a-radio-group v-model="lastCheck" @change="checkChange">
            <a-radio value="1">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 表格 </a-tag>
              </template>
            </a-radio>
            <a-radio value="2">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable> 图表 </a-tag>
              </template>
            </a-radio>
          </a-radio-group>
          <a-table
            v-show="isShow"
            :bordered="{ cell: true }"
            :columns="columns"
            :data="data"
          ></a-table>
          <div v-show="isShowTwo" id="myChart"> </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
  import { nextTick, onMounted, reactive, ref } from 'vue';
  import * as dayjs from 'dayjs';
  import * as echarts from 'echarts';

  import leftSide from '../../../components/leftSide/index.vue';

  const checkValue = ref('1');
  const labelValue = ref('1');
  const lastCheck = ref('1');
  const isShow = ref(true);
  const isShowTwo = ref(false);
  const checkChange = () => {
    if (lastCheck.value === '1') {
      isShow.value = true;
      isShowTwo.value = false;
    } else {
      isShow.value = false;
      isShowTwo.value = true;
    }
  };
  const dayList = ref(['每15分钟', '每30分钟', '每小时']);
  onMounted(() => {
    const myChart = echarts.init(document.getElementById('myChart'), null, {
      height: 620,
    });

    const myChartOptions = {
      title: {
        text: 'Temperature Change in the Coming Week',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {},
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: 'none',
          },
          dataView: { readOnly: false },
          magicType: { type: ['line', 'bar'] },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C',
        },
      },
      series: [
        {
          name: 'Highest',
          type: 'line',
          data: [10, 11, 13, 11, 12, 12, 9],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' },
            ],
          },
          markLine: {
            data: [{ type: 'average', name: 'Avg' }],
          },
        },
        {
          name: 'Lowest',
          type: 'line',
          data: [1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }],
          },
          markLine: {
            data: [
              { type: 'average', name: 'Avg' },
              [
                {
                  symbol: 'none',
                  x: '90%',
                  yAxis: 'max',
                },
                {
                  symbol: 'circle',
                  label: {
                    position: 'start',
                    formatter: 'Max',
                  },
                  type: 'max',
                  name: '最高点',
                },
              ],
            ],
          },
        },
      ],
    };

    nextTick(() => {
      myChart.setOption(myChartOptions);
    });

    window.addEventListener('resize', () => {
      myChart.resize();
    });
  });

  const sevenNow: any = dayjs().subtract(7, 'day');
  const sevenDateNow = ref(sevenNow.format('MM-DD'));
  const sixNow: any = dayjs().subtract(6, 'day');
  const sixDateNow = ref(sixNow.format('MM-DD'));
  const fiveNow: any = dayjs().subtract(5, 'day');
  const fiveDateNow = ref(fiveNow.format('MM-DD'));
  const fourNow: any = dayjs().subtract(4, 'day');
  const fourDateNow = ref(fourNow.format('MM-DD'));
  const threeNow: any = dayjs().subtract(3, 'day');
  const threeDateNow = ref(threeNow.format('MM-DD'));
  const twoNow: any = dayjs().subtract(2, 'day');
  const twoDateNow = ref(twoNow.format('MM-DD'));
  const now: any = dayjs().subtract(7, 'day');
  const dateNow = ref(now.format('MM-DD'));

  const rangeValue = ref([Date.now(), Date.now()]);
  const reportForms = ref('1');

  const columns = ref([
    {
      title: '支路名称',
      dataIndex: 'name',
      width: '100',
      fixed: 'left',
    },
    {
      title: '00:00',
      dataIndex: 'a',
    },
    {
      title: '01:00',
      dataIndex: 'b',
    },
    {
      title: '02:00',
      dataIndex: 'c',
    },
    {
      title: '03:00',
      dataIndex: 'd',
    },
    {
      title: '04:00',
      dataIndex: 'e',
    },
    {
      title: '05:00',
      dataIndex: 'f',
    },
    {
      title: '06:00',
      dataIndex: 'g',
    },
    {
      title: '07:00',
      dataIndex: 'h',
    },
    {
      title: '08:00',
      dataIndex: 'i',
    },
    {
      title: '09:00',
      dataIndex: 'j',
    },
    {
      title: '10:00',
      dataIndex: 'k',
    },
    {
      title: '11:00',
      dataIndex: 'l',
    },
    {
      title: '12:00',
      dataIndex: 'm',
    },
    {
      title: '13:00',
      dataIndex: 'n',
    },
    {
      title: '14:00',
      dataIndex: 'o',
    },
    {
      title: '15:00',
      dataIndex: 'p',
    },
    {
      title: '16:00',
      dataIndex: 'q',
    },
    {
      title: '17:00',
      dataIndex: 'r',
    },
    {
      title: '18:00',
      dataIndex: 's',
    },
    {
      title: '19:00',
      dataIndex: 't',
    },
    {
      title: '20:00',
      dataIndex: 'u',
    },
    {
      title: '21:00',
      dataIndex: 'v',
    },
    {
      title: '22:00',
      dataIndex: 'w',
    },
    {
      title: '23:00',
      dataIndex: 'x',
    },
    {
      title: '汇总',
      dataIndex: 'y',
      width: '80',
    },
    {
      title: '单位',
      dataIndex: 'z',
      width: '80',
    },
  ]);

  const data = reactive([
    {
      key: '1',
      name: '汇总设备',
      a: '12',
      b: '12',
      c: '112',
      d: '3',
      e: '3',
      f: '42',
      g: '432',
      h: '42',
      i: '2',
      j: '4',
      k: '543',
      l: '53',
      m: '543',
      n: '53',
      o: '24',
      p: '42',
      q: '453',
      r: '534',
      s: '654',
      t: '42',
      u: '231',
      v: '53',
      w: '432',
      x: '534',
      y: '64',
      z: '423',
    },
  ]);

  const handleChange = () => {
    if (reportForms.value === '1') {
      dayList.value = ['每15分钟', '每30分钟', '每小时'];
      columns.value = [
        {
          title: '支路名称',
          dataIndex: 'name',
          width: '100',
          fixed: 'left',
        },
        {
          title: '00:00',
          dataIndex: 'a',
        },
        {
          title: '01:00',
          dataIndex: 'b',
        },
        {
          title: '02:00',
          dataIndex: 'c',
        },
        {
          title: '03:00',
          dataIndex: 'd',
        },
        {
          title: '04:00',
          dataIndex: 'e',
        },
        {
          title: '05:00',
          dataIndex: 'f',
        },
        {
          title: '06:00',
          dataIndex: 'g',
        },
        {
          title: '07:00',
          dataIndex: 'h',
        },
        {
          title: '08:00',
          dataIndex: 'i',
        },
        {
          title: '09:00',
          dataIndex: 'j',
        },
        {
          title: '10:00',
          dataIndex: 'k',
        },
        {
          title: '11:00',
          dataIndex: 'l',
        },
        {
          title: '12:00',
          dataIndex: 'm',
        },
        {
          title: '13:00',
          dataIndex: 'n',
        },
        {
          title: '14:00',
          dataIndex: 'o',
        },
        {
          title: '15:00',
          dataIndex: 'p',
        },
        {
          title: '16:00',
          dataIndex: 'q',
        },
        {
          title: '17:00',
          dataIndex: 'r',
        },
        {
          title: '18:00',
          dataIndex: 's',
        },
        {
          title: '19:00',
          dataIndex: 't',
        },
        {
          title: '20:00',
          dataIndex: 'u',
        },
        {
          title: '21:00',
          dataIndex: 'v',
        },
        {
          title: '22:00',
          dataIndex: 'w',
        },
        {
          title: '23:00',
          dataIndex: 'x',
        },
        {
          title: '汇总',
          dataIndex: 'y',
          width: '80',
        },
        {
          title: '单位',
          dataIndex: 'z',
          width: '80',
        },
      ];
    } else if (reportForms.value === '2') {
      dayList.value = ['每小时', '每天', '每周'];
      columns.value = [
        {
          title: '支路名称',
          dataIndex: 'name',
          width: '100',
          fixed: 'left',
        },
        {
          title: `${sevenDateNow.value} 00:00`,
          dataIndex: 'a',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 01:00`,
          dataIndex: 'b',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 02:00`,
          dataIndex: 'c',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 03:00`,
          dataIndex: 'd',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 04:00`,
          dataIndex: 'e',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 05:00`,
          dataIndex: 'f',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 06:00`,
          dataIndex: 'g',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 07:00`,
          dataIndex: 'h',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 08:00`,
          dataIndex: 'i',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 09:00`,
          dataIndex: 'j',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 10:00`,
          dataIndex: 'k',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 11:00`,
          dataIndex: 'l',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 12:00`,
          dataIndex: 'm',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 13:00`,
          dataIndex: 'n',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 14:00`,
          dataIndex: 'o',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 15:00`,
          dataIndex: 'p',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 16:00`,
          dataIndex: 'q',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 17:00`,
          dataIndex: 'r',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 18:00`,
          dataIndex: 's',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 19:00`,
          dataIndex: 't',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 20:00`,
          dataIndex: 'u',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 21:00`,
          dataIndex: 'v',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 22:00`,
          dataIndex: 'w',
          width: '120',
        },
        {
          title: `${sevenDateNow.value} 23:00`,
          dataIndex: 'x',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 00:00`,
          dataIndex: 'a',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 01:00`,
          dataIndex: 'b',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 02:00`,
          dataIndex: 'c',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 03:00`,
          dataIndex: 'd',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 04:00`,
          dataIndex: 'e',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 05:00`,
          dataIndex: 'f',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 06:00`,
          dataIndex: 'g',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 07:00`,
          dataIndex: 'h',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 08:00`,
          dataIndex: 'i',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 09:00`,
          dataIndex: 'j',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 10:00`,
          dataIndex: 'k',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 11:00`,
          dataIndex: 'l',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 12:00`,
          dataIndex: 'm',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 13:00`,
          dataIndex: 'n',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 14:00`,
          dataIndex: 'o',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 15:00`,
          dataIndex: 'p',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 16:00`,
          dataIndex: 'q',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 17:00`,
          dataIndex: 'r',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 18:00`,
          dataIndex: 's',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 19:00`,
          dataIndex: 't',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 20:00`,
          dataIndex: 'u',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 21:00`,
          dataIndex: 'v',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 22:00`,
          dataIndex: 'w',
          width: '120',
        },
        {
          title: `${sixDateNow.value} 23:00`,
          dataIndex: 'x',
          width: '120',
        },

        {
          title: `${fiveDateNow.value} 00:00`,
          dataIndex: 'a',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 01:00`,
          dataIndex: 'b',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 02:00`,
          dataIndex: 'c',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 03:00`,
          dataIndex: 'd',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 04:00`,
          dataIndex: 'e',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 05:00`,
          dataIndex: 'f',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 06:00`,
          dataIndex: 'g',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 07:00`,
          dataIndex: 'h',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 08:00`,
          dataIndex: 'i',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 09:00`,
          dataIndex: 'j',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 10:00`,
          dataIndex: 'k',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 11:00`,
          dataIndex: 'l',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 12:00`,
          dataIndex: 'm',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 13:00`,
          dataIndex: 'n',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 14:00`,
          dataIndex: 'o',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 15:00`,
          dataIndex: 'p',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 16:00`,
          dataIndex: 'q',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 17:00`,
          dataIndex: 'r',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 18:00`,
          dataIndex: 's',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 19:00`,
          dataIndex: 't',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 20:00`,
          dataIndex: 'u',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 21:00`,
          dataIndex: 'v',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 22:00`,
          dataIndex: 'w',
          width: '120',
        },
        {
          title: `${fiveDateNow.value} 23:00`,
          dataIndex: 'x',
          width: '120',
        },

        {
          title: `${fourDateNow.value} 00:00`,
          dataIndex: 'a',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 01:00`,
          dataIndex: 'b',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 02:00`,
          dataIndex: 'c',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 03:00`,
          dataIndex: 'd',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 04:00`,
          dataIndex: 'e',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 05:00`,
          dataIndex: 'f',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 06:00`,
          dataIndex: 'g',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 07:00`,
          dataIndex: 'h',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 08:00`,
          dataIndex: 'i',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 09:00`,
          dataIndex: 'j',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 10:00`,
          dataIndex: 'k',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 11:00`,
          dataIndex: 'l',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 12:00`,
          dataIndex: 'm',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 13:00`,
          dataIndex: 'n',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 14:00`,
          dataIndex: 'o',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 15:00`,
          dataIndex: 'p',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 16:00`,
          dataIndex: 'q',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 17:00`,
          dataIndex: 'r',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 18:00`,
          dataIndex: 's',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 19:00`,
          dataIndex: 't',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 20:00`,
          dataIndex: 'u',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 21:00`,
          dataIndex: 'v',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 22:00`,
          dataIndex: 'w',
          width: '120',
        },
        {
          title: `${fourDateNow.value} 23:00`,
          dataIndex: 'x',
          width: '120',
        },

        {
          title: `${threeDateNow.value} 00:00`,
          dataIndex: 'a',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 01:00`,
          dataIndex: 'b',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 02:00`,
          dataIndex: 'c',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 03:00`,
          dataIndex: 'd',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 04:00`,
          dataIndex: 'e',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 05:00`,
          dataIndex: 'f',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 06:00`,
          dataIndex: 'g',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 07:00`,
          dataIndex: 'h',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 08:00`,
          dataIndex: 'i',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 09:00`,
          dataIndex: 'j',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 10:00`,
          dataIndex: 'k',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 11:00`,
          dataIndex: 'l',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 12:00`,
          dataIndex: 'm',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 13:00`,
          dataIndex: 'n',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 14:00`,
          dataIndex: 'o',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 15:00`,
          dataIndex: 'p',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 16:00`,
          dataIndex: 'q',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 17:00`,
          dataIndex: 'r',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 18:00`,
          dataIndex: 's',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 19:00`,
          dataIndex: 't',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 20:00`,
          dataIndex: 'u',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 21:00`,
          dataIndex: 'v',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 22:00`,
          dataIndex: 'w',
          width: '120',
        },
        {
          title: `${threeDateNow.value} 23:00`,
          dataIndex: 'x',
          width: '120',
        },

        {
          title: `${twoDateNow.value} 00:00`,
          dataIndex: 'a',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 01:00`,
          dataIndex: 'b',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 02:00`,
          dataIndex: 'c',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 03:00`,
          dataIndex: 'd',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 04:00`,
          dataIndex: 'e',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 05:00`,
          dataIndex: 'f',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 06:00`,
          dataIndex: 'g',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 07:00`,
          dataIndex: 'h',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 08:00`,
          dataIndex: 'i',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 09:00`,
          dataIndex: 'j',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 10:00`,
          dataIndex: 'k',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 11:00`,
          dataIndex: 'l',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 12:00`,
          dataIndex: 'm',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 13:00`,
          dataIndex: 'n',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 14:00`,
          dataIndex: 'o',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 15:00`,
          dataIndex: 'p',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 16:00`,
          dataIndex: 'q',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 17:00`,
          dataIndex: 'r',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 18:00`,
          dataIndex: 's',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 19:00`,
          dataIndex: 't',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 20:00`,
          dataIndex: 'u',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 21:00`,
          dataIndex: 'v',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 22:00`,
          dataIndex: 'w',
          width: '120',
        },
        {
          title: `${twoDateNow.value} 23:00`,
          dataIndex: 'x',
          width: '120',
        },

        {
          title: `${dateNow.value} 00:00`,
          dataIndex: 'a',
          width: '120',
        },
        {
          title: `${dateNow.value} 01:00`,
          dataIndex: 'b',
          width: '120',
        },
        {
          title: `${dateNow.value} 02:00`,
          dataIndex: 'c',
          width: '120',
        },
        {
          title: `${dateNow.value} 03:00`,
          dataIndex: 'd',
          width: '120',
        },
        {
          title: `${dateNow.value} 04:00`,
          dataIndex: 'e',
          width: '120',
        },
        {
          title: `${dateNow.value} 05:00`,
          dataIndex: 'f',
          width: '120',
        },
        {
          title: `${dateNow.value} 06:00`,
          dataIndex: 'g',
          width: '120',
        },
        {
          title: `${dateNow.value} 07:00`,
          dataIndex: 'h',
          width: '120',
        },
        {
          title: `${dateNow.value} 08:00`,
          dataIndex: 'i',
          width: '120',
        },
        {
          title: `${dateNow.value} 09:00`,
          dataIndex: 'j',
          width: '120',
        },
        {
          title: `${dateNow.value} 10:00`,
          dataIndex: 'k',
          width: '120',
        },
        {
          title: `${dateNow.value} 11:00`,
          dataIndex: 'l',
          width: '120',
        },
        {
          title: `${dateNow.value} 12:00`,
          dataIndex: 'm',
          width: '120',
        },
        {
          title: `${dateNow.value} 13:00`,
          dataIndex: 'n',
          width: '120',
        },
        {
          title: `${dateNow.value} 14:00`,
          dataIndex: 'o',
          width: '120',
        },
        {
          title: `${dateNow.value} 15:00`,
          dataIndex: 'p',
          width: '120',
        },
        {
          title: `${dateNow.value} 16:00`,
          dataIndex: 'q',
          width: '120',
        },
        {
          title: `${dateNow.value} 17:00`,
          dataIndex: 'r',
          width: '120',
        },
        {
          title: `${dateNow.value} 18:00`,
          dataIndex: 's',
          width: '120',
        },
        {
          title: `${dateNow.value} 19:00`,
          dataIndex: 't',
          width: '120',
        },
        {
          title: `${dateNow.value} 20:00`,
          dataIndex: 'u',
          width: '120',
        },
        {
          title: `${dateNow.value} 21:00`,
          dataIndex: 'v',
          width: '120',
        },
        {
          title: `${dateNow.value} 22:00`,
          dataIndex: 'w',
          width: '120',
        },
        {
          title: `${dateNow.value} 23:00`,
          dataIndex: 'x',
          width: '120',
        },
        {
          title: '汇总',
          dataIndex: 'y',
          width: '80',
        },
        {
          title: '单位',
          dataIndex: 'z',
          width: '80',
        },
      ];
    }
  };
</script>

<style lang="less" scoped>
  .container {
    &-left {
    }

    &-right {
      padding: 0 10px;
    }
  }

  .arco-tag {
    margin: 0 10px 10px 0;
  }
</style>
