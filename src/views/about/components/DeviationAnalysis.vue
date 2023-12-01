<template>
  <div class="container">
    <div v-show="isShow" class="container-content">
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

      <a-space style="margin-left: 10px">标签</a-space>
      <a-radio-group v-model="labelValue">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable> 支路</a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable> 部门</a-tag>
          </template>
        </a-radio>
      </a-radio-group>
      <a-divider
        direction="vertical"
        style="height: 40px; width: 4px"
      ></a-divider>
      <a-radio-group v-model="dateValue">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable> 日分析</a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable> 月分析</a-tag>
          </template>
        </a-radio>
      </a-radio-group>
      <a-date-picker v-model="value" style="margin: 0 10px" />
      <a-button style="margin: 0 10px" type="outline">
        <template #icon>
          <icon-search />
        </template>
        <template #default>查询</template>
      </a-button>
      <a-button type="outline">
        <template #icon>
          <icon-upload />
        </template>
        <template #default>导出</template>
      </a-button>

      <a-card style="margin-top: 20px">
        <a-table
          :bordered="{ cell: true, wrapper: true }"
          :data="data"
          :load-more="loadMore"
          :stripe="true"
        >
          <template #columns>
            <a-table-column
              data-index="BranchName"
              title="支路名称"
            ></a-table-column>
            <a-table-column
              data-index="Electricity"
              title="实际用电"
            ></a-table-column>
            <a-table-column
              data-index="ReferenceElectricity"
              title="基准用电"
            ></a-table-column>
            <a-table-column
              data-index="ElectricalDeviation"
              title="用电偏差"
            ></a-table-column>
            <a-table-column title="偏差率">
              <template #cell="{ record }">
                <div
                  v-if="record.DeviationRate >= 100"
                  style="
                    cursor: pointer;
                    background: linear-gradient(to right, red, black);
                  "
                >
                  {{ record.DeviationRate }}
                </div>
                <div
                  v-else
                  style="
                    cursor: pointer;
                    background: linear-gradient(to right, lightgreen, black);
                  "
                >
                  {{ record.DeviationRate }}
                </div>
              </template>
            </a-table-column>
            <a-table-column title="最大值偏差率">
              <a-table-column data-index="maxDate" title="值">
                <template #cell="{ record }">
                  <div
                    v-if="record.maxDate >= 100"
                    style="
                      cursor: pointer;
                      display: flex;
                      height: 10px;
                      line-height: 10px;
                    "
                  >
                    <div
                      style="
                        width: 10px;
                        height: 10px;
                        border-radius: 3px;
                        background-color: red;
                      "
                    >
                    </div>
                    {{ record.maxDate }}
                  </div>
                  <div
                    v-else
                    style="
                      display: flex;
                      cursor: pointer;
                      height: 10px;
                      line-height: 10px;
                    "
                  >
                    <div
                      style="
                        width: 10px;
                        height: 10px;
                        border-radius: 3px;
                        background-color: lightgreen;
                      "
                    >
                    </div>
                    {{ record.maxDate }}
                  </div>
                </template>
              </a-table-column>
              <a-table-column
                data-index="maxDate"
                title="时间段"
              ></a-table-column>
            </a-table-column>
            <a-table-column data-index="minDate" title="最大值偏差率">
              <a-table-column data-index="minValue" title="值">
                <template #cell="{ record }">
                  <div
                    v-if="record.minValue >= 100"
                    style="
                      cursor: pointer;
                      display: flex;
                      height: 10px;
                      line-height: 10px;
                    "
                  >
                    <div
                      style="
                        width: 10px;
                        height: 10px;
                        border-radius: 3px;
                        background-color: red;
                      "
                    >
                    </div>
                    {{ record.minValue }}
                  </div>
                  <div
                    v-else
                    style="
                      display: flex;
                      cursor: pointer;
                      height: 10px;
                      line-height: 10px;
                    "
                  >
                    <div
                      style="
                        width: 10px;
                        height: 10px;
                        border-radius: 3px;
                        background-color: lightgreen;
                      "
                    >
                    </div>
                    {{ record.minValue }}
                  </div>
                </template>
              </a-table-column>
              <a-table-column
                data-index="minDate"
                title="时间段"
              ></a-table-column>
            </a-table-column>
            <a-table-column data-index="unit" title="单位"></a-table-column>
            <a-table-column slot-name="optional" title="操作">
              <template #cell="{ record }">
                <a-button @click="optionalClick(record)">详情</a-button>
              </template>
            </a-table-column>
          </template>
        </a-table>
      </a-card>
    </div>
    <div v-show="isShowTwo" class="container-main">
      <div>
        <a-breadcrumb-item>支路</a-breadcrumb-item>
        <a-breadcrumb-item>高压</a-breadcrumb-item>
        <a-breadcrumb-item>偏差分析</a-breadcrumb-item>
        <a-button @click="backClick"> 返回</a-button>
      </div>
      <a-row :gutter="10" style="margin-top: 10px">
        <a-col v-for="(item, index) in itemValue" :key="index" :span="6">
          <a-card style="width: 100%">
            <div
              style="
                display: flex;
                justify-content: space-between;
                height: 70px;
              "
            >
              <div style="margin-left: 20px">
                <div style="text-align: center; font-size: 16px">
                  <icon-bar-chart />
                  {{ item.leftTitle }}({{ recordUnit }})
                </div>
                <div
                  style="text-align: center; font-size: 16px; margin-top: 20px"
                >
                  {{ item.leftValue }}
                </div>
              </div>
              <div style="margin-right: 20px">
                <div style="text-align: center; font-size: 16px">
                  <icon-bar-chart />
                  {{ item.rightTitle }}({{ recordUnit }})
                </div>
                <div
                  style="text-align: center; font-size: 16px; margin-top: 20px"
                >
                  {{ item.rightValue }}
                </div>
              </div>
            </div>
          </a-card>
        </a-col>
      </a-row>
      <a-card style="margin-top: 10px">
        <template #title> 偏差分析趋势</template>
        <div id="analyse"></div>
      </a-card>
      <a-row :gutter="10" style="margin-top: 10px">
        <a-col :span="6">
          <a-card>
            <template #title> 下级支路用电偏差占比</template>
            <div id="deviation"></div>
          </a-card>
        </a-col>
        <a-col :span="18">
          <a-card>
            <template #title> 下级支路用电偏差率Top5</template>
            <div id="deviation5"></div>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue';
  import dayjs from 'dayjs';
  import * as echarts from 'echarts';

  const date = dayjs().format('hh:mm');
  const value = Date.now();
  const checkValue = ref('1');
  const labelValue = ref('1');
  const dateValue = ref('1');
  const recordUnit = ref();

  const isShow = ref(true);
  const isShowTwo = ref(false);

  const optionalClick = (record: any) => {
    recordUnit.value = record.unit;
    console.log(record.unit);
    isShow.value = false;
    isShowTwo.value = true;
  };

  const backClick = () => {
    isShow.value = true;
    isShowTwo.value = false;
  };

  const itemValue = ref([
    {
      leftTitle: '实际用电',
      leftValue: '89423.2',
      rightTitle: '基准用电',
      rightValue: '321321.4',
    },
    {
      leftTitle: '用电偏差',
      leftValue: '89423.2',
      rightTitle: '偏差率',
      rightValue: '321321.4',
    },
    {
      leftTitle: '最大值偏差率',
      leftValue: '89423.2',
      rightTitle: '最大值偏差率(时间段)',
      rightValue: '321321.4',
    },
    {
      leftTitle: '最小值偏差率',
      leftValue: '89423.2',
      rightTitle: '最小值偏差率(时间段)',
      rightValue: '321321.4',
    },
  ]);

  const columns = [
    {
      title: '支路名称',
      dataIndex: 'BranchName',
    },
    {
      title: '实际用电',
      dataIndex: 'Electricity',
    },
    {
      title: '基准用电',
      dataIndex: 'ReferenceElectricity',
    },
    {
      title: '用电偏差',
      dataIndex: 'ElectricalDeviation',
    },
    {
      title: '偏差率',
      dataIndex: 'DeviationRate',
    },
    {
      title: '最大值偏差率',
      children: [
        {
          title: '值',
          dataIndex: 'maxValue',
        },
        {
          title: '时间段',
          dataIndex: 'maxDate',
        },
      ],
    },
    {
      title: '最大值偏差率',
      children: [
        {
          title: '值',
          dataIndex: 'minValue',
        },
        {
          title: '时间段',
          dataIndex: 'minDate',
        },
      ],
    },
    {
      title: '单位',
      dataIndex: 'unit',
    },
    {
      title: '操作',
      slotName: 'optional',
    },
  ];

  const data = reactive([
    {
      key: '1',
      BranchName: '432',
      Electricity: '432',
      ReferenceElectricity: '432',
      ElectricalDeviation: '432',
      DeviationRate: '80',
      maxValue: '432',
      maxDate: '432',
      minValue: '27',
      minDate: '432',
      unit: '432',
      optional: '432',
      children: [
        {
          key: '2',
          BranchName: '432',
          Electricity: '432',
          ReferenceElectricity: '432',
          ElectricalDeviation: '432',
          DeviationRate: '432',
          maxValue: '432',
          maxDate: `${date} ~ ${date}`,
          minValue: '432',
          minDate: '432',
          unit: '432',
          optional: '432',
          isLeaf: true,
          children: [
            {
              key: '3',
              BranchName: 'q',
              Electricity: 'q',
              ReferenceElectricity: 'q',
              ElectricalDeviation: 'q',
              DeviationRate: 'q',
              maxValue: 'q',
              maxDate: 'q',
              minValue: 'q',
              minDate: 'q',
              unit: 'q',
              optional: 'q',
              isLeaf: true,
            },
          ],
        },
        {
          key: '4',
          BranchName: '432',
          Electricity: '432',
          ReferenceElectricity: '432',
          ElectricalDeviation: '432',
          DeviationRate: '432',
          maxValue: '432',
          maxDate: '432',
          minValue: '432',
          minDate: '432',
          unit: '432',
          optional: '432',
          isLeaf: true,
        },
      ],
    },
    {
      key: '5',
      BranchName: '432',
      Electricity: '432',
      ReferenceElectricity: '432',
      ElectricalDeviation: '432',
      DeviationRate: '432',
      maxValue: '432',
      maxDate: '432',
      minValue: '432',
      minDate: '432',
      unit: '432',
      optional: '432',
    },
    {
      key: '6',
      BranchName: '432',
      Electricity: '432',
      ReferenceElectricity: '432',
      ElectricalDeviation: '432',
      DeviationRate: '432',
      maxValue: '432',
      maxDate: '432',
      minValue: '432',
      minDate: '432',
      unit: '432',
      optional: '432',
    },
    {
      key: '7',
      BranchName: '432',
      Electricity: '432',
      ReferenceElectricity: '432',
      ElectricalDeviation: '432',
      DeviationRate: '432',
      maxValue: '432',
      maxDate: '432',
      minValue: '432',
      minDate: '432',
      unit: '432',
      optional: '432',
    },
    {
      key: '8',
      BranchName: '432',
      Electricity: '432',
      ReferenceElectricity: '432',
      ElectricalDeviation: '432',
      DeviationRate: '432',
      maxValue: '432',
      maxDate: '432',
      minValue: '432',
      minDate: '432',
      unit: '432',
      optional: '432',
    },
    {
      key: '9',
      BranchName: '432',
      Electricity: '432',
      ReferenceElectricity: '432',
      ElectricalDeviation: '432',
      DeviationRate: '432',
      maxValue: '432',
      maxDate: '432',
      minValue: '432',
      minDate: '432',
      unit: '432',
      optional: '432',
    },
    {
      key: '10',
      BranchName: '432',
      Electricity: '432',
      ReferenceElectricity: '432',
      ElectricalDeviation: '432',
      DeviationRate: '432',
      maxValue: '432',
      maxDate: '432',
      minValue: '432',
      minDate: '432',
      unit: '432',
      optional: '432',
    },
    {
      key: '11',
      BranchName: '432',
      Electricity: '432',
      ReferenceElectricity: '432',
      ElectricalDeviation: '432',
      DeviationRate: '432',
      maxValue: '432',
      maxDate: '432',
      minValue: '432',
      minDate: '432',
      unit: '432',
      optional: '432',
    },
    {
      key: '12',
      BranchName: '432',
      Electricity: '432',
      ReferenceElectricity: '432',
      ElectricalDeviation: '432',
      DeviationRate: '432',
      maxValue: '432',
      maxDate: '432',
      minValue: '432',
      minDate: '432',
      unit: '432',
      optional: '432',
    },
  ]);

  const loadMore = (record: any, done: any) => {
    done([
      {
        BranchName: 'Ed Hellen',
        Electricity: 17000,
        ReferenceElectricity: '42',
        ElectricalDeviation: 'ed',
        DeviationRate: '23',
        maxValue: 'dsa',
        maxDate: 'da',
        minValue: 'vsa',
        minDate: 'vew',
        unit: 'wqcds',
        optional: 'ewrfg',
      },
    ]);
  };

  onMounted(() => {
    const analyse = echarts.init(document.getElementById('analyse'), null, {
      height: 420,
    });
    const deviation = echarts.init(document.getElementById('deviation'), null, {
      height: 420,
    });
    const deviation5 = echarts.init(
      document.getElementById('deviation5'),
      null,
      {
        height: 420,
      }
    );
    const analyseOptions = {
      color: ['#5470C6', '#91CC75', '#EE6666'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      grid: {
        right: '20%',
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature'],
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true,
          },
          // prettier-ignore
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Evaporation',
          position: 'right',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#5470C6',
            },
          },
          axisLabel: {
            formatter: '{value} ml',
          },
        },
        {
          type: 'value',
          name: 'Precipitation',
          position: 'right',
          alignTicks: true,
          offset: 80,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#91CC75',
            },
          },
          axisLabel: {
            formatter: '{value} ml',
          },
        },
        {
          type: 'value',
          name: '温度',
          position: 'left',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: '#EE6666',
            },
          },
          axisLabel: {
            formatter: '{value} °C',
          },
        },
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
          ],
        },
        {
          name: 'Precipitation',
          type: 'bar',
          yAxisIndex: 1,
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
          ],
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 2,
          data: [
            2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
          ],
        },
      ],
    };
    const deviationOptions = {
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
              fontSize: 40,
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
    const deviation5Options = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      tooltip: {
        trigger: 'axis',
      },
      series: [
        {
          data: [120, 200, 150],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
      ],
    };
    analyse.setOption(analyseOptions);
    deviation.setOption(deviationOptions);
    deviation5.setOption(deviation5Options);
    window.addEventListener('resize', () => {
      analyse.resize();
      deviation.resize();
      deviation5.resize();
    });
  });
</script>

<style scoped>
  .container {
    padding: 10px;
    color: var(--color-text-2);
  }
</style>
