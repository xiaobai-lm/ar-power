<template>
  <div class="container">
    <div v-show="isShow" class="container-content">
      <div class="container-content-header">
        <a-radio-group v-model="radioValue">
          <a-radio value="1">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable>> 年度</a-tag>
            </template>
          </a-radio>
          <a-radio value="2">
            <template #radio="{ checked }">
              <a-tag :checked="checked" checkable> 任意时段</a-tag>
            </template>
          </a-radio>
        </a-radio-group>
        <a-year-picker v-if="radioValue === '1'" style="width: 200px" />
        <a-range-picker
          v-else
          :shortcuts="shortcuts"
          mode="month"
          style="width: 254px; marginbottom: 20px"
        />
        <a-button style="margin: 0 10px" type="outline">
          <template #icon>
            <icon-search />
          </template>
          <!-- Use the default slot to avoid extra spaces -->
          <template #default>查询</template>
        </a-button>
        <a-button style="margin: 0 10px 0 0" type="outline">
          <template #icon>
            <icon-upload />
          </template>
          <!-- Use the default slot to avoid extra spaces -->
          <template #default>导出</template>
        </a-button>
      </div>
      <a-card id="content">
        <div id="myChart"></div>
        <a-table :bordered="{ cell: true }" :columns="columns" :data="data">
          <template #optional="{ record }">
            <a-space style="cursor: pointer" @click="PDFClick(record)"
              >PDF
            </a-space>
            <a-divider direction="vertical"></a-divider>
            <a-space style="cursor: pointer" @click="imgClick">图片</a-space>
            <a-divider direction="vertical"></a-divider>
            <a-space style="cursor: pointer" @click="detailsClick"
              >详情
            </a-space>
            <a-divider direction="vertical"></a-divider>
            <a-space style="cursor: pointer" @click="RegenerateClick"
              >重新生成
            </a-space>
          </template>
        </a-table>
      </a-card>
    </div>

    <div v-show="isShowTwo" class="container-form"
      >PDFClick
      <a-button @click="backClick">返回</a-button>
      <a-button @click="PDFprint">打印</a-button>
      <div id="formMain" class="container-form-main">
        <h1>嘉德股份电费报告</h1>
        <a-row>
          <a-col :span="12">
            <span>开始时间：2023-10-01 00:00:00</span><br />
            <span>开始时间：2023-10-01 00:00:00</span>
          </a-col>
          <a-col :span="12"> 报告生成日期：2023-11-01 00:00:00</a-col>
        </a-row>
        <h1>1.基本信息</h1>
        <a-table
          :bordered="{ cell: true }"
          :columns="information"
          :data="informationData"
        ></a-table>
        <h1>2.用电统计</h1>
        <div
          style="
            width: 100%;
            height: 100%;
            border: 1px dashed #2dad96;
            padding: 10px 6px;
          "
        >
          <a-row style="font-size: 18px">
            <a-col :span="12">
              实际最大需量是否超过变压器容量的75%：否 <br />
              峰电量占比：32.33%
            </a-col>
            <a-col :span="12">
              功率因数实际值是否低于考核标准值0.9：否 <br />
              谷电量占比：19.62%
            </a-col>
            <div
              style="
                width: 100%;
                border-top: 1px dashed #2dad96;
                margin: 10px 6px;
              "
            ></div>
            <a-col :span="24">
              保持（当前）计费方式<br />
              功率因数罚款：功率因数控制较好，符合供电部分考核标准。<br />
              谷电量占比：可合理调整峰时段用电负荷，增加谷时段用电时间，有效降低平均电价(谷电量占比&lg;50%)。
            </a-col>
          </a-row>
        </div>
        <div id="modalChart"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, reactive, ref } from 'vue';
  import * as dayjs from 'dayjs';
  import * as echarts from 'echarts';
  import html2canvas from 'html2canvas';
  import JSpdf from 'jspdf';

  const dateYear = dayjs().year();
  const radioValue = ref('1');
  const isShow = ref(true);
  const isShowTwo = ref(false);
  const shortcuts = ref([
    {
      label: '当年',
      value: () => [dayjs(), dayjs()],
    },
    {
      label: '最近一年',
      value: () => [dayjs().subtract('1', 'year'), dayjs().add('1', 'year')],
    },
    {
      label: '上一年',
      value: () => [dayjs().subtract('1', 'year'), dayjs()],
    },
    {
      label: '最近3年',
      value: () => [dayjs().subtract('3', 'year'), dayjs()],
    },
    {
      label: '最近5年',
      value: () => [dayjs().subtract('5', 'year'), dayjs()],
    },
  ]);

  const PDFClick = async (record: any) => {
    // 获取要导出的Vue组件
    const vueComponent = document.querySelector('#content');
    // 使用html2canvas将Vue组件渲染为图片
    const canvas = await html2canvas(vueComponent);
    // 创建新的jsPDF文档
    const PDFValue = new JSpdf('p', 'mm', 'a4');
    // 将渲染的图片添加到PDF文档中
    PDFValue.addImage(canvas.toDataURL('image/png', 0.9), 'PNG', 0, 0, 210, 80);
    // 下载PDF文件
    PDFValue.save('my-pdf.pdf');
  };

  const PDFprint = async (page, title) => {
    const modules = ref(page);
    if (!modules.value.length) return;
    const a4Width = 596;
    const a4Height = 841;
    const PdfValue = new JSpdf('p', 'pt');
  };

  const detailsClick = (record: any) => {
    isShow.value = false;
    isShowTwo.value = true;
  };

  const backClick = () => {
    isShow.value = true;
    isShowTwo.value = false;
  };

  const columns: any = [
    {
      title: '月份',
      dataIndex: 'month',
    },
    {
      title: '电度电费',
      children: [
        {
          title: '总电量(kWh)',
          dataIndex: 'TotalPower',
        },
        {
          title: '尖峰电量占比',
          dataIndex: 'topPeakProportion',
        },
        {
          title: '峰电量占比',
          dataIndex: 'PeakProportion',
        },
        {
          title: '平电量占比',
          dataIndex: 'EqualProportion',
        },
        {
          title: '谷电量占比',
          dataIndex: 'ValleyProportion',
        },
        {
          title: '电费(元)',
          dataIndex: 'electricityBill',
        },
      ],
    },
    {
      title: '基本电费',
      children: [
        {
          title: '最大需量(kWh)',
          dataIndex: 'maxDemand',
        },
        {
          title: '申报需量(kWh)',
          dataIndex: 'DeclaredDemand',
        },
        {
          title: '电费(元)',
          dataIndex: 'electricityBill2',
        },
      ],
    },
    {
      title: '力调电费',
      children: [
        {
          title: '功率因数',
          dataIndex: 'PowerFactor',
        },
        {
          title: '标准值',
          dataIndex: 'StandardValue',
        },
        {
          title: '电费(元)',
          dataIndex: 'electricityBill3',
        },
      ],
    },
    {
      title: '加征(收)电费(元)',
      dataIndex: 'AddSign',
    },
    {
      title: '总电费(元)',
      dataIndex: 'TotalElectricityCharge',
    },
    {
      title: '平均电价(元/kWh)',
      dataIndex: 'AverageElectricityPrice',
    },
    {
      title: '可省电费(元)',
      dataIndex: 'SaveElectricity',
    },
    {
      title: '操作',
      slotName: 'optional',
      width: 200,
    },
  ];

  const data = reactive([
    {
      key: '1',
      month: '2023-11-02',
      TotalPower: '1453.65',
      topPeakProportion: '9.93%',
      PeakProportion: '12.93%',
      EqualProportion: '34.93%',
      ValleyProportion: '53%',
      electricityBill: '2316.5',
      maxDemand: '54.2',
      DeclaredDemand: '2463.8',
      electricityBill2: '432.5',
      PowerFactor: '432.7',
      StandardValue: '54.7',
      electricityBill3: '514.8',
      AddSign: '756.4',
      TotalElectricityCharge: '543.7',
      AverageElectricityPrice: '632.7',
      SaveElectricity: '632.8',
    },
  ]);

  const information = [
    {
      title: '电压等级(kV)',
      dataIndex: 'a',
    },
    {
      title: '变压器容量(kVA)',
      dataIndex: 'b',
    },
    {
      title: '计费线路(路)',
      dataIndex: 'c',
    },
    {
      title: '申报需量(kW)',
      dataIndex: 'd',
    },
    {
      title: '计费方式',
      dataIndex: 'e',
    },
  ];

  const informationData = reactive([
    {
      key: '',
      a: '10',
      b: '4000',
      c: '1',
      d: '3800',
      e: '按实际最大需量',
    },
  ]);

  onMounted(() => {
    const myChart = echarts.init(document.getElementById('myChart'), null, {
      height: 320,
    });

    const myChartOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },

      legend: {
        left: 'right',
        top: 'top',
        textStyle: {
          color: '--color-text-2',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: [
            `${dateYear}-01`,
            `${dateYear}-02`,
            `${dateYear}-03`,
            `${dateYear}-04`,
            `${dateYear}-05`,
            `${dateYear}-06`,
            `${dateYear}-07`,
            `${dateYear}-08`,
            `${dateYear}-09`,
            `${dateYear}-10`,
            `${dateYear}-11`,
            `${dateYear}-12`,
          ],
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
          name: 'Ads',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series',
          },
          data: [],
        },
        {
          name: 'ANTA',
          type: 'bar',
          stack: 'Ad',
          emphasis: {
            focus: 'series',
          },
          data: [],
        },
      ],
    };

    const modalChart = echarts.init(
      document.getElementById('modalChart'),
      null,
      {
        width: 1200,
        height: 420,
      }
    );

    const modalChartOptions = {
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

    myChart.setOption(myChartOption);
    modalChart.setOption(modalChartOptions);
    window.addEventListener('resize', () => {
      myChart.resize();
      modalChart.resize();
    });
  });

  // const exportPDF = async () => {
  //     // 获取要导出的Vue组件
  //     const vueComponent = document.querySelector('#myChart')
  //     // 使用html2canvas将Vue组件渲染为图片
  //     const canvas = await html2canvas(vueComponent)
  //     // 创建新的jsPDF文档
  //     const PDF = new JSpdf('p', 'mm', 'a4')
  //     // 将渲染的图片添加到PDF文档中
  //     PDF.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298)
  //     // 下载PDF文件
  //     PDF.save('my-pdf-document.pdf')
  // }
</script>

<style lang="less" scoped>
  .container {
    padding: 10px;

    &-content {
      margin-top: 20px;
    }

    &-form {
      &-main {
        width: 60%;
        height: 100%;
        background-color: white;
        margin: 0 auto;
        padding: 4% 6%;
      }

      :deep(.arco-table-cell) {
        background-color: white !important;
        color: black;
      }
    }
  }
</style>
