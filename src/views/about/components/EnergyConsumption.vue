<template>
  <div class="container">
    <div class="container-header">
      <a-radio-group
        v-model="radioValue"
        class="container-header-first"
        @change="handleChange"
      >
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>概况</a-tag>
          </template>
        </a-radio>
        <a-radio value="2" :disabled="disabled">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>按日</a-tag>
          </template>
        </a-radio>
        <a-radio value="3" :disabled="disabled">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>按月</a-tag>
          </template>
        </a-radio>
        <a-radio value="4" :disabled="disabled">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>按年</a-tag>
          </template>
        </a-radio>
      </a-radio-group>

      <a-date-picker
        v-if="radioValue === '2'"
        v-model="dateValue"
        class="datePicker"
      />
      <a-month-picker
        v-else-if="radioValue === '3'"
        v-model="dateValue"
        class="datePicker"
      />
      <a-year-picker
        v-else-if="radioValue === '4'"
        v-model="dateValue"
        class="datePicker"
      />

      <a-radio-group
        v-if="radioValue === '1'"
        v-model="radioValueTwo"
        class="container-header-right"
        @change="radioValueChange"
      >
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>用量</a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>费用</a-tag>
          </template>
        </a-radio>
        <a-radio value="3">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>单位增加值能耗</a-tag>
          </template>
        </a-radio>
        <a-radio value="4">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>人均能耗</a-tag>
          </template>
        </a-radio>
        <a-radio value="5">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>单位面积能耗</a-tag>
          </template>
        </a-radio>
      </a-radio-group>

      <a-radio-group
        v-else
        v-model="radioValueThree"
        class="container-header-right"
      >
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>用量</a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>费用</a-tag>
          </template>
        </a-radio>
      </a-radio-group>
    </div>
    <div v-show="contentValue" class="container-content">
      <a-card title="当日总能耗趋势" class="container-content-firstCard">
        <template #extra>
          <div>
            <a-radio-group v-model="radioDay">
              <a-radio value="1">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>总能耗</a-tag>
                </template>
              </a-radio>
              <a-radio value="2">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>电</a-tag>
                </template>
              </a-radio>
              <a-radio value="3">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>气</a-tag>
                </template>
              </a-radio>
              <a-radio value="4">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>水</a-tag>
                </template>
              </a-radio>
            </a-radio-group>
          </div>
        </template>
        <a-row>
          <a-col :span="4">
            <a-card class="container-content-firstCard-top">
              <div style="display: flex; justify-content: space-between">
                <h4 style="font-size: 14px"> 当日总能耗 </h4>
                <h5 style="font-size: 12px"> 吨标准煤 </h5>
              </div>
              <div style="font-size: 25px; text-align: center"> 0.93 </div>
            </a-card>
            <a-card style="margin-top: 10px">
              <div style="display: flex; justify-content: space-between">
                <h4 style="font-size: 14px"> 昨日同期总能耗 </h4>
                <h5 style="font-size: 12px"> 吨标准煤 </h5>
              </div>
              <div
                style="font-size: 25px; text-align: center; margin: 0 0 20px 0"
                >0.747</div
              >
              <div style="color: red; text-align: center">
                45.2%
                <icon-caret-up />
              </div>
            </a-card>
          </a-col>
          <a-col :span="20">
            <div id="cardImgListTop"></div>
          </a-col>
        </a-row>
      </a-card>

      <a-card title="当月总能耗趋势" class="container-content-secondCard">
        <template #extra>
          <div>
            <a-radio-group v-model="radioMouth">
              <a-radio value="1">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>总能耗</a-tag>
                </template>
              </a-radio>
              <a-radio value="2">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>电</a-tag>
                </template>
              </a-radio>
              <a-radio value="3">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>气</a-tag>
                </template>
              </a-radio>
              <a-radio value="4">
                <template #radio="{ checked }">
                  <a-tag :checked="checked" checkable>水</a-tag>
                </template>
              </a-radio>
            </a-radio-group>
          </div>
        </template>
        <a-row>
          <a-col :span="4">
            <a-card class="container-content-firstCard-top">
              <div style="display: flex; justify-content: space-between">
                <h4> 当日总能耗 </h4>
                <h5> 吨标准煤 </h5>
              </div>
              <div style="font-size: 25px; text-align: center"> 0.93 </div>
            </a-card>
            <a-card style="margin-top: 10px">
              <div style="display: flex; justify-content: space-between">
                <h4> 昨日同期总能耗 </h4>
                <h5> 吨标准煤 </h5>
              </div>
              <div>
                <div
                  style="
                    font-size: 25px;
                    text-align: center;
                    margin: 0 0 20px 0;
                  "
                  >0.747</div
                >
                <div style="color: red; text-align: center">
                  45.2%
                  <icon-caret-up />
                </div>
              </div>
            </a-card>
          </a-col>
          <a-col :span="20">
            <div id="cardImgListBottom"></div>
          </a-col>
        </a-row>
      </a-card>
      <div class="container-content-bottom">
        <a-row :gutter="10">
          <a-col v-for="(item, index) in bottomList" :key="index" :span="6">
            <!-- <a-col :span="6" style="background-color:var(--color-bg-2);padding:10px;border: 1px solid #484849;"> -->
            <div
              style="
                background-color: var(--color-bg-2);
                padding: 10px;
                border: 1px solid #484849;
              "
            >
              <div
                style="
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 20px;
                "
              >
                <div>{{ item.title }} </div>
                <div>单位:{{ item.unit }}</div>
              </div>
              <div style="display: flex; justify-content: space-between">
                <div>当日:{{ item.yesterday }}</div>
                <div>昨日:{{ item.today }}</div>
                <div>
                  环比:{{ item.dayContrast }}
                  <icon-caret-up />
                </div>
              </div>
              <a-divider></a-divider>
              <div style="display: flex; justify-content: space-between">
                <div>当月:{{ item.lastMonth }}</div>
                <div>昨月:{{ item.month }}</div>
                <div>
                  环比:{{ item.monthContrast }}
                  <icon-caret-down />
                </div>
              </div>
              <a-divider></a-divider>
              <div style="display: flex; justify-content: space-between">
                <div>当年:{{ item.lastYear }}</div>
                <div>上一年:{{ item.year }}</div>
                <div>
                  环比:{{ item.yearContrast }}
                  <icon-caret-down />
                </div>
              </div>
            </div>
          </a-col>
          <a-col :span="6"></a-col>
          <a-col :span="6"></a-col>
          <a-col :span="6"></a-col>
        </a-row>
      </div>
    </div>

    <div v-show="contentTwoValue" class="container-contentTwo">
      <a-row :gutter="10">
        <a-col :span="6">
          <a-card title="当日总能耗">
            <div style="padding: 105px 0; text-align: center">
              <div style="font-size: 60px; color: #10aaeb">1.06</div>
              吨煤标准
            </div>
            <a-divider></a-divider>
            <div style="font-size: 16px; text-align: center"
              >昨日同期 0.914
              <span style="color: red">46.52% <icon-caret-up /> </span
            ></div>
          </a-card>
          <a-card title="当日用能能源占比" style="margin-top: 10px">
            <div id="contentTwoLeftBottom"></div>
          </a-card>
        </a-col>
        <a-col :span="18">
          <a-card title="当日能源同比/环比" style="height: 400px">
            <a-table
              :columns="columns"
              :data="data"
              :bordered="{ cell: true }"
            ></a-table>
          </a-card>
          <a-card title="当日能源趋势" style="margin-top: 10px">
            <div id="contentTwoRightBottom"></div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted, nextTick } from 'vue';
  import * as echarts from 'echarts';

  const radioValue = ref('1');
  const radioValueTwo = ref('1');
  const radioValueThree = ref('1');
  const radioDay = ref('1');
  const radioMouth = ref('1');
  const dateValue = ref(Date.now());
  const contentValue = ref(true);
  const contentTwoValue = ref(false);
  const disabled = ref(false);

  const handleChange = () => {
    if (radioValue.value === '1') {
      contentValue.value = true;
      contentTwoValue.value = false;
    } else {
      contentValue.value = false;
      contentTwoValue.value = true;
    }
  };

  const radioValueChange = () => {
    if (
      radioValueTwo.value === '3' ||
      radioValueTwo.value === '4' ||
      radioValueTwo.value === '5'
    ) {
      disabled.value = true;
    } else {
      disabled.value = false;
    }
  };
  const bottomList = reactive([
    {
      title: '总能耗',
      unit: '吨标准煤',
      yesterday: '1.086',
      today: '1.387',
      dayContrast: '45.2%',
      lastMonth: '1.086',
      month: '1.387',
      monthContrast: '-45.2%',
      lastYear: '1.086',
      year: '1.387',
      yearContrast: '-45.2',
    },
    {
      title: '电',
      unit: 'kWh',
      yesterday: '1.086',
      today: '1.387',
      dayContrast: '45.2%',
      lastMonth: '1.086',
      month: '1.387',
      monthContrast: '-45.2%',
      lastYear: '1.086',
      year: '1.387',
      yearContrast: '-45.2',
    },
    {
      title: '气',
      unit: 'm3',
      yesterday: '1.086',
      today: '1.387',
      dayContrast: '45.2%',
      lastMonth: '1.086',
      month: '1.387',
      monthContrast: '-45.2%',
      lastYear: '1.086',
      year: '1.387',
      yearContrast: '-45.2',
    },
    {
      title: '水',
      unit: 'kg',
      yesterday: '1.086',
      today: '1.387',
      dayContrast: '45.2%',
      lastMonth: '1.086',
      month: '1.387',
      monthContrast: '-45.2%',
      lastYear: '1.086',
      year: '1.387',
      yearContrast: '-45.2',
    },
  ]);

  const columns = [
    {
      title: '能源类型',
      dataIndex: 'type',
    },
    {
      title: '能源用途',
      dataIndex: 'use',
    },
    {
      title: '能源量',
      dataIndex: 'amount',
    },
    {
      title: '能源量 (吨标准煤)',
      dataIndex: 'amountcoal',
    },
    {
      title: '同比 (吨标准煤)',
      dataIndex: 'with',
    },
    {
      title: '环比 (吨标准煤)',
      dataIndex: 'loop',
    },
  ];

  const data = reactive([
    {
      type: '电',
      use: '用能',
      amount: '779.88kWh',
      amountcoal: '0.315',
      with: '0.315(0%)',
      loop: '0.319(-1.34%)',
    },
    {
      type: '水',
      use: '用能',
      amount: '779.88kWh',
      amountcoal: '0.315',
      with: '0.315(0%)',
      loop: '0.319(-1.34%)',
    },
    {
      type: '气',
      use: '用能',
      amount: '779.88kWh',
      amountcoal: '0.315',
      with: '0.315(0%)',
      loop: '0.319(-1.34%)',
    },
    {
      type: '总能耗',
      use: '用能',
      amount: '779.88kWh',
      amountcoal: '0.315',
      with: '0.315(0%)',
      loop: '0.319(-1.34%)',
    },
  ]);

  onMounted(() => {
    const cardImgListTop = echarts.init(
      document.getElementById('cardImgListTop'),
      null,
      {
        height: 280,
      }
    );

    const cardImgListTopOptions = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    };
    const cardImgListBottom = echarts.init(
      document.getElementById('cardImgListBottom'),
      null,
      {
        height: 280,
      }
    );

    const cardImgListBottomOptions = {
      xAxis: {
        type: 'category',
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
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    };

    cardImgListTop.setOption(cardImgListTopOptions);
    cardImgListBottom.setOption(cardImgListBottomOptions);
    nextTick(() => {
      const contentTwoLeftBottom = echarts.init(
        document.getElementById('contentTwoLeftBottom'),
        null,
        {
          height: 380,
          width: 388,
        }
      );
      const contentTwoLeftBottomOptions = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
          },
        ],
      };

      const contentTwoRightBottom = echarts.init(
        document.getElementById('contentTwoRightBottom'),
        null,
        {
          height: 380,
          width: 1200,
        }
      );
      const contentTwoRightBottomOptions = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        legend: {},
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'aaa',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series',
            },
            data: [140, 152, 121, 144, 190, 260, 250],
          },
          {
            name: 'bbb',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series',
            },
            data: [140, 152, 121, 144, 190, 260, 250],
          },
        ],
      };
      contentTwoLeftBottom.setOption(contentTwoLeftBottomOptions);
      contentTwoRightBottom.setOption(contentTwoRightBottomOptions);

      window.addEventListener('resize', () => {
        cardImgListTop.resize();
        cardImgListBottom.resize();
        contentTwoLeftBottom.resize();
      });
    });
  });
</script>

<style scoped lang="less">
  .container {
    padding: 10px;
    color: white;

    &-header {
      &-first {
        margin: 0 10px;
      }
    }

    &-content {
      margin-top: 10px;

      &-firstCard {
        &-top {
        }
      }
    }

    &-bottom {
      margin-top: 10px;
    }

    &-contentTwo {
      margin-top: 10px;
    }
  }

  // 日期
  .datePicker {
    width: 200px;
  }

  .arco-tag-checked {
    padding: 20px !important;
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
    padding: 20px !important;
    background-color: #33404c;
    margin-left: 10px;
  }

  .arco-tag:hover {
    width: 100%;
    padding: 20px !important;
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
