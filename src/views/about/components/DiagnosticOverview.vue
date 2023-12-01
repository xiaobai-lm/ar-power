<template>
  <div class="container">
    <div v-if="isShow">
      <a-card>
        <a-row :gutter="40" class="container-top">
          <a-col :span="3" class="container-top-img">
            <img
              alt=""
              src="https://demo.kuaikongiot.cn/img/energySaving/status-bad.png"
            />
          </a-col>
          <a-col :span="6" class="container-top-value">
            <div class="container-top-value-title">有节能空间</div>
            <div class="container-top-value-bgImage">
              <span
                class="container-top-value-bgImage-span"
                style="margin-left: 40px"
                >总空间<span>6412</span>kWh +10345441元
              </span>
            </div>
          </a-col>
          <a-col :span="7" class="container-top-timeDate">
            <div> 诊断时间:{{ NowDate }}</div>
            <div> 统计周期:{{ StatisticalPeriod }}</div>
          </a-col>
          <a-col :span="8" class="container-top-operate">
            <a-button>
              <template #icon>
                <div>
                  <icon-swap />
                </div>
              </template>
              一键诊断
            </a-button>
            <a-button>
              <template #icon>
                <div>
                  <icon-apps />
                </div>
              </template>
              诊断记录
            </a-button>
            <a-button>
              <template #icon>
                <div>
                  <icon-settings />
                </div>
              </template>
              节能配置
            </a-button>
          </a-col>
        </a-row>
      </a-card>

      <a-row :gutter="10">
        <a-col
          v-for="(item, index) in itemList"
          :key="index"
          :span="6"
          style="margin-top: 10px"
        >
          <a-card
            id="a-card"
            :header-style="{ backgroundColor: '#26987c', borderRadius: '3px' }"
            class="card-demo"
            hoverable
            title="Custom hover style"
            @click="handleClick(item, index)"
          >
            <template #title>
              <icon-refresh />
              {{ item.title }}
            </template>
            <template></template>
            <div
              style="
                display: flex;
                justify-content: space-between;
                font-size: 20px;
              "
            >
              <div>
                <span>{{ item.titleValue }}</span>
              </div>
              <div> 有节能空间</div>
            </div>
            <a-divider type="dashed" />
            <div style="margin-top: 20px">当前数据:{{ item.data }}</div>
            <div style="margin-top: 20px">结论建议:{{ item.suggestion }}</div>
            <div style="margin-top: 20px; height: 80px; overflow-y: scroll"
              >实施方案:{{ item.plan }}
            </div>
            <div style="margin-top: 20px">预期收益:{{ item.profit }}</div>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <div v-else>
      <div>
        <a-space>详情</a-space>
        <a-button @click="backClick">返回</a-button>
      </div>
      <a-card>
        <a-row class="container-bottom">
          <a-col :span="3">
            <icon-refresh />
            {{ dataValue.title }}
          </a-col>
          <a-col :span="5">
            <div class="container-bottom-topTitle">有节能空间</div>
            <div class="container-bottom-bfImg">
              <span class="container-bottom-bgCone"
                >总空间<span>6412</span>kWh +10345441元
              </span>
            </div>
            统计时间: {{ NowDate }} 统计周期: {{ StatisticalPeriod }}
          </a-col>
          <a-divider
            direction="vertical"
            style="height: 140px"
            type="dashed"
          ></a-divider>

          <a-col :span="8">
            <div class="container-bottom-third">
              <div>
                <img
                  alt=""
                  src="https://demo.kuaikongiot.cn/img/carbonMgmt/titleIcon.png"
                /><span style="height: 20px; line-height: 20px"> 数据建议</span>
              </div>
              <div style="display: flex; justify-content: space-between">
                <div> 当前数据:</div>
                <div>
                  {{ dataValue.data }}
                </div>
              </div>

              <div style="display: flex; justify-content: space-between">
                <div> 结论建议:</div>
                <div>
                  {{ dataValue.suggestion }}
                </div>
              </div>
            </div>
          </a-col>
          <a-divider
            direction="vertical"
            style="height: 140px"
            type="dashed"
          ></a-divider>
          <a-col :span="7">
            <div class="container-bottom-fourth">
              <div>
                <img
                  alt=""
                  src="https://demo.kuaikongiot.cn/img/carbonMgmt/titleIcon.png"
                /><span style="height: 20px; line-height: 20px">方案预期</span>
              </div>
              <div style="display: flex; justify-content: space-between">
                <div style="width: 150px">实施方案:</div>
                <div>
                  {{ dataValue.plan }}
                </div>
              </div>
            </div>
          </a-col>
        </a-row>
        <a-table :columns="columns" :data="data"></a-table>
      </a-card>
      <a-card>
        <template #title> 高压设备12</template>
        <a-row>
          <a-col :span="18">
            <a-row>
              <a-col :span="12">
                有功功率损耗曲线
                <div id="myChart"></div>
              </a-col>
              <a-col :span="12"> 相关运行参数曲线</a-col>
            </a-row>
          </a-col>
          <a-col :span="6"></a-col>
        </a-row>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { nextTick, onMounted, reactive, ref } from 'vue';
  import * as dayjs from 'dayjs';
  import * as echarts from 'echarts';

  const NowDate = dayjs().format('YYYY-MM-DD hh:mm:ss');
  const StatisticalPeriod = [dayjs().startOf('month'), dayjs().endOf('month')];
  const dataValue = ref();
  const isShow = ref(true);
  const handleClick = (item: any, index: number) => {
    dataValue.value = item;
    isShow.value = false;
    console.log(dataValue.value);
    nextTick(() => {});
  };
  const backClick = () => {
    isShow.value = true;
  };
  const itemList = ref([
    {
      title: '变压器',
      titleValue: '4027kWh',
      data: '估计浪费约4027kWh，3515元',
      suggestion: '节能空间较大，建议治理',
      plan: '将元[高压设备23、高压设备23]所带堵在转移至[高压设备12(减少580kVa到2400kVa)、高压设备12]、所带堵在转移至[高压设备12(减少580kVa到2400kVa)、高压设备12],将元[高压设备23、高压设备23]所带堵在转移至[高压设备12(减少580kVa到2400kVa)、高压设备12]、所带堵在转移至[高压设备12(减少580kVa到2400kVa)、高压设备12]',
      profit: '年节省约48432kWh,42210元',
    },
    {
      title: '12',
      titleValue: '4027kWh',
      data: '估计浪费约4027kWh，3515元',
      suggestion: '节能空间较大，建议治理',
      plan: '将元[高压设备23、高压设备23]所带堵在转移至[高压设备12(减少580kVa到2400kVa)、高压设备12]、所带堵在转移至[高压设备12(减少580kVa到2400kVa)、高压设备12]',
      profit: '年节省约48432kWh,42210元',
    },
    {
      title: '332',
      titleValue: '4027kWh',
      data: '估计浪费约4027kWh，3515元',
      suggestion: '节能空间较大，建议治理',
      plan: '将元[高压设备23、高压设备23]所带堵在转移至[高压设备12(减少580kVa到2400kVa)、高压设备12]、所带堵在转移至[高压设备12(减少580kVa到2400kVa)、高压设备12]',
      profit: '年节省约48432kWh,42210元',
    },
    {
      title: '5454',
      titleValue: '4027kWh',
      data: '估计浪费约4027kWh，3515元',
      suggestion: '节能空间较大，建议治理',
      plan: '将元[高压设备23、高压设备23]所带堵在转移至[高压设备12(减少580kVa到2400kVa)、高压设备12]、所带堵在转移至[高压设备12(减少580kVa到2400kVa)、高压设备12]',
      profit: '年节省约48432kWh,42210元',
    },
  ]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Email',
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

  onMounted(() => {
    const newPromise = new Promise((resolve, reject) => {
      resolve();
    }).then(() => {
      const myChart = echarts.init(document.getElementById('myChart'), null, {
        height: 320,
      });

      const myChartOptions = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999',
            },
          },
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
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
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisPointer: {
              type: 'shadow',
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
            name: 'Precipitation',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml',
            },
          },
          {
            type: 'value',
            name: 'Temperature',
            min: 0,
            max: 25,
            interval: 5,
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
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
          },
        ],
      };

      myChart.setOption(myChartOptions);

      window.addEventListener('resize', () => {
        myChart.resize();
      });
    });
  });
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;
    color: var(--color-text-2);

    &-top {
      display: flex;
      justify-content: space-between;
      height: 160px;

      &-img {
        img {
          height: 160px;
        }
      }

      &-value {
        &-title {
          font-size: 22px;
          color: #e00202;
          border-image: linear-gradient(
              90deg,
              transparent,
              rgba(224, 2, 2, 0.8) 50%,
              transparent
            )
            2 2 2 2;
          border-top: rgba(224, 2, 2, 0.8) 3px solid;
          border-bottom: rgba(224, 2, 2, 0.8) 3px solid;
          margin-top: 5%;
          padding: 6px 0;
          width: 50%;
        }

        &-bgImage {
          background: url('https://demo.kuaikongiot.cn/img/energySaving/savingEnergyBoxBg.png');
          font-size: 22px;
          font-weight: 600;
          background-size: cover;
          margin: 20px 0 0 0;
          background-position: left;
          width: 100%;
          height: 21px;
          position: relative;

          &-span {
            display: table-cell;
            font-weight: 600;
            width: 100%;
            margin: 20px 0 0 0;
            position: absolute;
            top: -24px;
          }
        }
      }

      &-timeDate {
        display: flex;
        justify-content: space-between;
        margin-top: 100px;
      }

      &-operate {
        line-height: 160px;
      }
    }

    &-bottom {
      &-third {
      }

      &-fourth {
      }
    }
  }

  #a-card:hover {
    border: 1px solid #26987c;
  }

  .card-demo {
    transition-property: all;
  }

  .card-demo:hover {
    transform: translateY(-4px);
  }
</style>
