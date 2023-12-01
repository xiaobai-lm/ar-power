<template>
  <div class="container">
    <div class="container-header">
      <a-row :gutter="10">
        <a-col
          v-for="(headerList, headerIndex) in headerData"
          :key="headerIndex"
          :span="6"
        >
          <div
            :style="headerList.style"
            style="width: 100%; height: 140px; border-radius: 10px"
          >
            <div style="font-size: 26px; padding: 20px 0 0 20px">
              {{ headerList.title }}
              <icon-thunderbolt style="float: right; margin-right: 20px" />
            </div>
            <div style="font-size: 20px; padding: 20px 0 0 20px">
              {{ headerList.value }}
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div class="container-content">
      <a-row :gutter="10">
        <a-col :span="18">
          <div style="height: 630px">
            <iframe
              height="100%"
              src="https://demo.kuaikongiot.cn:8921/monitor.html?sn=834ecea4-f404-4e55-8579-16f6a579abf3&support3d=true"
              style="border: unset"
              width="100%"
            ></iframe>
          </div>
        </a-col>
        <a-col :span="6">
          <a-card style="height: 310px">
            <template #title>
              <icon-clock-circle />
              <span>本月峰平谷电量占比分析</span>
            </template>
            <div id="Fengpinggu"></div>
          </a-card>
          <a-card style="height: 310px; margin-top: 10px">
            <template #title>
              <icon-clock-circle />
              <span>变压器实时功率因数</span>
            </template>
            <div
              v-for="(transformer, transformerIndex) in transformerData"
              :key="transformerIndex"
              class="transformer"
            >
              <span>{{ transformer.title }}</span>
              <span style="float: right">{{ transformer.data }}</span>
            </div>
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="10">
        <a-col :span="12" style="margin-top: 10px">
          <a-card>
            <template #title>
              <icon-share-internal />
              <span>同期日用能对比</span>
            </template>
            <div>
              <a-button style="position: absolute; z-index: 9999">
                <icon-dashboard />
              </a-button>
              <div id="EnergyConsumption"></div>
            </div>
          </a-card>
        </a-col>

        <a-col :span="12" style="margin-top: 10px">
          <a-card>
            <template #title>
              <icon-share-internal />
              <span>本月峰平谷电量趋势分析</span>
            </template>
            <div id="PowerTrend"></div>
          </a-card>
        </a-col>

        <a-col :span="12" style="margin-top: 10px">
          <a-card>
            <template #title>
              <icon-share-internal />
              <span>日用电量变化趋势</span>
            </template>
            <div id="ElectricQuantity"></div>
          </a-card>
        </a-col>

        <a-col :span="12" style="margin-top: 10px">
          <a-card>
            <template #title>
              <icon-share-internal />
              <span>事件警告列表</span>
            </template>
            <a-table
              :columns="columns"
              :data="data"
              :pagination="false"
              style="height: 400px"
            >
            </a-table>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue';
  import * as echarts from 'echarts';

  const headerData = ref([
    {
      title: '1264.50kW',
      value: '1#出线实时功率:',
      style: 'background:linear-gradient(135deg ,#4789d8,#141e28)',
    },
    {
      title: '1264.50kW',
      value: '1#出线实时功率:',
      style: 'background:linear-gradient(135deg ,#49cbb0,#141e28)',
    },
    {
      title: '1264.50kW',
      value: '1#出线实时功率:',
      style: 'background:linear-gradient(135deg ,#b3e283,#141e28)',
    },
    {
      title: '1264.50kW',
      value: '1#出线实时功率:',
      style: 'background:linear-gradient(135deg ,#e59d24,#141e28)',
    },
  ]);

  const transformerData = ref([
    {
      title: '1#变压器Cos:',
      data: '0.90',
    },
    {
      title: '2#变压器Cos:',
      data: '0.92',
    },
    {
      title: '3#变压器Cos:',
      data: '0.80',
    },
    {
      title: '4#变压器Cos:',
      data: '0.84',
    },
  ]);
  onMounted(() => {
    setTimeout(() => {
      const transformer = echarts.init(
        document.getElementById('Fengpinggu'),
        null,
        {
          height: 240,
        }
      );
      const transformerDataList = {
        tooltip: {
          trigger: '{a}',
        },
        series: [
          {
            type: 'pie',
            radius: ['50%', '70%'],
            label: {
              show: true,
              margin: 1,
            },
            emphasis: {
              label: {
                fontSize: 22,
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: true,
            },
            data: [
              { value: 735, name: '尖峰:' },
              { value: 580, name: '峰:' },
              { value: 484, name: '平:' },
              { value: 300, name: '谷:' },
            ],
          },
        ],
      };
      transformer.setOption(transformerDataList);

      // 同期日用能对比
      const EnergyConsumption = echarts.init(
        document.getElementById('EnergyConsumption'),
        null,
        {
          height: 400,
        }
      );
      const EnergyConsumptionData = {
        tooltip: {
          trigger: 'axis',
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

            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
          {
            name: 'Lowest',
            type: 'line',
            data: [1, -2, 2, 5, 3, 2, 0],

            markLine: {
              data: [
                { type: 'average', name: 'Avg' },
                [
                  {
                    symbol: 'none',
                    x: '90%',
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
      EnergyConsumption.setOption(EnergyConsumptionData);

      // 本月峰平谷电量趋势分析
      const PowerTrend = echarts.init(
        document.getElementById('PowerTrend'),
        null,
        {
          height: 400,
        }
      );
      const PowerTrendData = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {},

        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series',
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
        ],
      };
      PowerTrend.setOption(PowerTrendData);

      // ElectricQuantity
      const ElectricQuantity = echarts.init(
        document.getElementById('ElectricQuantity'),
        null,
        {
          height: 400,
        }
      );
      const ElectricQuantityData = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line',
          },
        ],
      };
      ElectricQuantity.setOption(ElectricQuantityData);
    }, 10);
  });

  const columns = [
    {
      title: '时间',
      dataIndex: 'name',
    },
    {
      title: '事件',
      dataIndex: 'salary',
    },
    {
      title: '设备',
      dataIndex: 'address',
    },
    {
      title: '状态',
      dataIndex: 'email',
    },
  ];
  const data = reactive([
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
    {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    },
    {
      key: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
  ]);
</script>

<style lang="less" scoped>
  * {
    color: white;
  }

  .container {
    padding: 10px;

    &-content {
      margin-top: 10px;
    }
  }

  .transformer {
    padding: 10px;
    border-bottom: 1px solid black;
  }

  .transformer:hover {
    background-color: #233149;
  }

  .arco-table .arco-table-element {
    padding: 0;
  }
</style>
