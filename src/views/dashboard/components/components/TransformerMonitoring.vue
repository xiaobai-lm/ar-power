<template>
  <div class="container">
    <div class="header">
      <a-button @click="backClcik"> 返回</a-button>
      <span class="header-select">选择变压器：</span>
      <a-select
        :default-value="dataList.title"
        :style="{ width: '320px' }"
        allow-search
        placeholder="Please select ..."
      >
        <a-option v-for="(item, index) in dataList.highPressure" :key="index">
          <div v-for="(items, index2) in item" :key="index2">
            {{ items[0].cardName }}
          </div>
        </a-option>
      </a-select>
      <span class="header-timing">数据刷新时间：{{ date }}</span>
      <span class="header-right">
        <a-popover position="br" style="width: 600px" trigger="click">
          <icon-info-circle />
          <template #content>
            <p class="header-right-head">指标说明</p>
            <a-divider />
            <a-tabs default-active-key="1">
              <a-tab-pane
                key="1"
                class="header-right-tab1"
                title="运行状态说明"
              >
                <a-table
                  :body-cell-style="{ color: 'red' }"
                  :columns="columns"
                  :data="data"
                  :pagination="false"
                />
              </a-tab-pane>
              <a-tab-pane key="2" class="header-right-tab2" title="配置说明">
                <div>
                  <p>Step1、请在"站点管理->监控设备"中配置变压器信息：</p>
                  <div>1、设备类型：选择或输入各类变压器</div>
                  <div>2、额定容量：输入额定电压和额定电流</div>
                  <div>
                    3、变压器图片：请在"设备管理->设备档案"中配置变压器图片，且监控设备处选择关联的监控设备
                  </div>
                  <p
                    >Step2、请在"站点管理->变量管理"中配置以下变量属性的变量：</p
                  >
                  <div>【功率】</div>
                  <div>模拟量：功率->有功/无功/视在功率</div>
                  <div>【需量】</div>
                  <div>模拟量：功率->当前需量</div>
                  <div>【功率因数】</div>
                  <div>模拟量：功率因数->功率因数</div>
                  <div>【电流】</div>
                  <div>模拟量：电流->A/B/C相电流</div>
                  <div>【线电压】</div>
                  <div>模拟量：电压->AB/BC/CA线电压</div>
                  <div>【温度/变压器】</div>
                  <div>模拟量：</div>
                  <div>干变：A/B/C相绕组温度/环境温度；</div>
                  <div>油变：变压器油温/变压器油位/变压器压力/环境温度</div>
                </div>
              </a-tab-pane>
            </a-tabs>
          </template>
        </a-popover>
      </span>
    </div>
    <div class="container-main">
      <a-row :gutter="10">
        <a-col :span="8">
          <div
            style="
              display: flex;
              justify-content: center;
              overflow: hidden;
              background-color: #1b2834;
              padding: 10px;
            "
          >
            <div style="margin: 0 20px">
              <a-image
                src="http://118.190.51.135/img/dark/transformer/dry-type.png"
                style="width: 100%; padding: 10px"
              />
            </div>
          </div>
          <div style="padding: 0 10px 20px; background-color: #1b2834">
            <a-row :gutter="10">
              <a-col :span="8">
                <div
                  style="
                    background-color: #faad14;
                    height: 60px;
                    color: white;
                    padding: 10px;
                  "
                >
                  <div>负载率:</div>
                  <div style="margin-top: 15px">
                    <span>18.29%</span>
                    <span style="float: right">轻载</span>
                  </div>
                </div>
              </a-col>
              <a-col :span="8">
                <div
                  style="
                    background-color: #33404c;
                    height: 60px;
                    color: white;
                    padding: 10px;
                  "
                >
                  <div>功率因数:</div>
                  <div style="margin-top: 15px">
                    <span>0.81</span>
                  </div>
                </div>
              </a-col>
              <a-col :span="8">
                <div
                  style="
                    background-color: #33404c;
                    height: 60px;
                    color: white;
                    padding: 10px;
                  "
                >
                  <div>额定容量:</div>
                  <div style="margin-top: 15px">
                    <span>8400kVA</span>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>

          <div style="margin-top: 20px">
            <a-table
              :bordered="{ cell: true }"
              :columns="columnsData"
              :data="dataLists"
              :pagination="false"
              :stripe="true"
            />
          </div>
        </a-col>
        <a-col :span="16">
          <a-row :gutter="10">
            <a-col
              v-for="(itemList, itemListIndex) in rightData"
              :key="itemListIndex"
              :xxl="{ span: '24-5' }"
            >
              <a-card style="font-size: 14px">
                {{ itemList.title }}
                <div
                  v-for="(rightItem, rightItemIndex) in itemList.children"
                  :key="rightItemIndex"
                  style="
                    height: 36px;
                    background-color: #33404c;
                    margin: 4px 0;
                    padding: 10px 6px;
                  "
                >
                  <a-row>
                    <a-col :span="10">{{ rightItem.headline }}</a-col>
                    <a-col :span="14">{{ rightItem.value }}</a-col>
                  </a-row>
                </div>
              </a-card>
            </a-col>
          </a-row>

          <a-tabs default-active-key="1" @tab-click="handleClick">
            <a-tab-pane
              v-for="(tabsDate, index) in tabsList"
              :key="index + 1"
              :title="tabsDate.title"
            >
            </a-tab-pane>
          </a-tabs>
          <div>
            日期：
            <a-date-picker v-model="value" style="width: 200px" />
            <a-button type="primary">
              <template #icon>
                <icon-search />
              </template>
              <!-- Use the default slot to avoid extra spaces -->
              <template #default>查询</template>
            </a-button>
          </div>

          <div id="eCharts" style="margin-top: 10px"></div>

          <a-table
            :bordered="{ cell: true }"
            :columns="rightBottomColumns"
            :data="rightBottomData"
            :pagination="false"
            style="margin-top: 20px"
          />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineEmits, onMounted, reactive, ref } from 'vue';
  import { useUserDataList } from '@/store';
  import * as echarts from 'echarts';
  import dayjs from 'dayjs';

  const dataList = useUserDataList();
  const value = Date.now();
  const date = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'));

  const emits = defineEmits(['isShow', 'isShowTwo']);

  const backClcik = () => {
    const a = true;
    const b = false;
    emits('isShow', a);
    emits('isShowTwo', b);
  };
  setInterval(() => {
    date.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
  }, 5000);

  const columns = [
    {
      title: '状态',
      dataIndex: 'condition',
    },
    {
      title: '负载率',
      dataIndex: 'LoadRate',
    },
    {
      title: '建议',
      dataIndex: 'advise',
    },
  ];

  const data = reactive([
    {
      key: '1',
      condition: '过载',
      LoadRate: '>100%',
      advise: '影响变压器寿命，建议扩容',
      color: 'red',
    },
    {
      key: '2',
      condition: '满载',
      LoadRate: '80%-100%',
      advise: '接近满载状态，损耗比高，影响变压器寿命，经济性低',
    },
    {
      key: '3',
      condition: '重载',
      LoadRate: '70%~80%',
      advise: `
    经济性低，会造成电能浪费，建议增加散热装置，适当降低电流密度，以提高运行效率`,
    },
    {
      key: '4',
      condition: '经济运行',
      LoadRate: '40%~70%',
      advise: '变压器运行合理，请继续保持',
    },
    {
      key: '5',
      condition: '轻载',
      LoadRate: '2%~40%',
      advise: '运行效率低，影响功率因数，建议加大设备投入',
    },
    {
      key: '6',
      condition: '空载',
      LoadRate: '0%~2%',
      advise: '运行效率极低，严重影响功率因数，建议停运',
    },
  ]);

  const columnsData = [
    {
      title: '时间',
      dataIndex: 'time',
      tooltip: true,
      width: 130,
      ellipsis: true,
    },
    {
      title: '事件',
      dataIndex: 'event',
      tooltip: true,
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'condition',
      tooltip: true,
      width: 80,
      ellipsis: true,
    },
  ];

  const dataLists = reactive([
    {
      key: '1',
      time: '2023-02-10 21:00',
      event: '[A相电压] 6.12 越下下限恢复 2',
      condition: '自动恢复',
    },
    {
      key: '2',
      time: '2023-02-10 20:00',
      event: '[B相电压] 0.0 越下限 3',
      condition: '[B相电压] 0.0 越下限 3',
    },
    {
      key: '3',
      time: '2023-02-10 21:00',
      event: '[A相电压] 6.12 越下下限恢复 2',
      condition: '自动恢复',
    },
    {
      key: '4',
      time: '2023-02-10 20:00',
      event: '[B相电压] 0.0 越下限 3',
      condition: '[B相电压] 0.0 越下限 3',
    },
    {
      key: '5',
      time: '2023-02-10 21:00',
      event: '[A相电压] 6.12 越下下限恢复 2',
      condition: '自动恢复',
    },
    {
      key: '6',
      time: '2023-02-10 20:00',
      event: '[B相电压] 0.0 越下限 3',
      condition: '[B相电压] 0.0 越下限 3',
    },
  ]);

  const rightData = reactive([
    {
      title: '负载',
      children: [
        {
          headline: '有功功率： ',
          value: '129.6kW',
        },
        {
          headline: '无功功率： ',
          value: '129.6kW',
        },
        {
          headline: '视在功率：',
          value: '129.6kW',
        },
      ],
    },
    {
      title: '损耗',
      children: [
        {
          headline: '实时损耗： ',
          value: '129.6kW',
        },
        {
          headline: '当日损耗： ',
          value: '129.6kW',
        },
        {
          headline: '当月损耗： ',
          value: '129.6kW',
        },
      ],
    },
    {
      title: '需量',
      children: [
        {
          headline: '当月需量 ',
          value: '129.6kW',
        },
        {
          headline: '本月最大当量： ',
          value: '129.6kW',
        },
        {
          headline: '发生时间：',
          value: '2023-05-02 09:14:43',
        },
      ],
    },
    {
      title: '电流',
      children: [
        {
          headline: 'A相电流',
          value: '129.6kW',
        },
        {
          headline: 'B相电流',
          value: '129.6kW',
        },
        {
          headline: 'C相电流',
          value: '129.6kW',
        },
      ],
    },
    {
      title: '电压',
      children: [
        {
          headline: 'AB线电压： ',
          value: '129.6kW',
        },
        {
          headline: 'BC线电压： ',
          value: '129.6kW',
        },
        {
          headline: 'CA线电压： ',
          value: '129.6kW',
        },
      ],
    },
  ]);

  const tabsList = [
    {
      title: '负载率',
    },
    {
      title: '损耗',
    },
    {
      title: '负载',
    },
    {
      title: '功率因数',
    },
    {
      title: '需量',
    },
    {
      title: '视在功率',
    },
    {
      title: '电流',
    },
    {
      title: '电压',
    },
  ];
  // resize()
  let myChart: echarts.ECharts;
  onMounted(() => {
    setTimeout(() => {
      myChart = echarts.init(
        document.getElementById('eCharts') as HTMLElement,
        '',
        {
          height: 366,
        }
      );
      const options = {
        tooltip: {
          trigger: 'category',
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            data: [120, 132, 101, 134, 90, 230, 210],
            areaStyle: {},
            smooth: true,
            markLine: {
              data: [
                {
                  yAxis: 40,
                },
                {
                  name: 'Y 轴值为 100 的水平线',
                  textStyle: {
                    color: 'red',
                  },
                  yAxis: 230,
                  color: 'red',
                },
              ],
            },
          },
        ],
      };
      myChart.setOption(options);
    }, 10);
  });

  const rightBottomColumns = [
    {
      title: '名称',
      dataIndex: 'name',
      width: 140,
    },
    {
      title: '最大值',
      children: [
        {
          title: '数值',
          dataIndex: 'birthday',
        },
        {
          title: '时间',
        },
      ],
    },
    {
      title: '最小值',
      children: [
        {
          title: '数值',
          dataIndex: 'email',
        },
        {
          title: '时间',
          dataIndex: 'phone',
        },
      ],
    },
    {
      title: '平均值',
      dataIndex: 'salary',
      width: 120,
    },
  ];
  const rightBottomData = ref([
    {
      key: '1',
      name: 'Kevin Sandra',
      salary: 22000,
      birthday: '1992-02-11',
    },
  ]);
  const handleClick = (key: number) => {
    if (key === 1) {
      rightBottomData.value = [
        {
          key: '1',
          name: 'Kevin Sandra',
          salary: 22000,
          birthday: '1992-02-11',
        },
      ];
      myChart.resize({
        height: 366,
      });
    } else if (key === 2) {
      rightBottomData.value = [
        {
          key: '1',
          name: 'Kevin Sandra',
          salary: 22000,
          birthday: '1992-02-11',
        },
        {
          key: '2',
          name: 'Kevin Sandra',
          salary: 22000,
          birthday: '1992-02-11',
        },
      ];
      myChart.resize({
        height: 324,
      });
    } else if (key === 3) {
      rightBottomData.value = [
        {
          key: '1',
          name: 'Kevin Sandra',
          salary: 22000,
          birthday: '1992-02-11',
        },
        {
          key: '2',
          name: 'Kevin Sandra',
          salary: 22000,
          birthday: '1992-02-11',
        },
        {
          key: '3',
          name: 'Kevin Sandra',
          salary: 22000,
          birthday: '1992-02-11',
        },
      ];
      myChart.resize({
        height: 282,
      });
    }
    console.log(typeof key);
  };
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;

    &-main {
      margin-top: 10px;
    }
  }

  .arco-col-xxl-24-5 {
    width: 20%;
  }

  .header {
    color: white;

    &-select {
      margin-left: 20px;
    }

    &-timing {
      margin-left: 20px;
      font-size: 14px;
    }

    &-right {
      float: right;
      font-size: 18px;
    }
  }

  .header-right-head {
    padding: 5px 16px 4px;
    margin: 0 !important;
  }

  .header-right-tab2 {
    padding: 10px;
  }

  .arco-divider-horizontal {
    margin: 0;
    padding: 0;
  }

  :deep(.arco-trigger-content .arco-popover-popup-content) {
    width: 600px !important;
    padding: 0;
  }

  :deep(.arco-popover-popup-content) {
    width: 600px !important;
  }

  .arco-tabs-content {
    margin: 0;
  }

  .arco-table-cell {
    padding: 9px 4px !important;
  }

  :deep(.arco-table-cell) {
    padding: 9px 4px !important;
  }
</style>
