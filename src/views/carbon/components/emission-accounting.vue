<script setup lang="ts">
  import { ref, reactive } from 'vue';

  // 用来切换页面
  const item = ref(0);
  // 进入详情页后的年份变量
  const year = ref(0);
  // 进入详情页后的月份变量
  const month = ref(0);
  // 进入详情页后的排放量变量
  const num = ref(0);
  // 主界面表格的表头名称
  const columns = [
    { title: '年度', dataIndex: 'year', width: 70, fixed: 'left' },
    {
      title: '月碳排放量 (tCO2)',
      dataIndex: 'year',

      children: [
        { title: '1月', slotName: 'one' },
        { title: '2月', slotName: 'two' },
        { title: '3月', slotName: 'three' },
        { title: '4月', slotName: 'four' },
        { title: '5月', slotName: 'five' },
        { title: '6月', slotName: 'six' },
        { title: '7月', slotName: 'seven' },
        { title: '8月', slotName: 'eight' },
        { title: '9月', slotName: 'nine' },
        { title: '10月', slotName: 'ten' },
        { title: '11月', slotName: 'eleven' },
        { title: '12月', slotName: 'twelve' },
      ],
    },
    { title: '操作', slotName: 'do', width: 60, fixed: 'right' },
  ];
  // 主界面的表格模拟数据
  const data = [
    {
      year: '2023',
      one: '52.1',
      two: '31.98',
      three: '71.2',
      four: '43.02',
      five: '13.29',
      six: '37.16',
      seven: '27.64',
      eight: '31.28',
      nine: '36.69',
      ten: '35.13',
      eleven: '66.33',
      twelve: '41.33',
    },
    {
      year: '2022',
      one: '32.1',
      two: '41.98',
      three: '21.2',
      four: '33.02',
      five: '43.29',
      six: '17.16',
      seven: '23.641',
      eight: '11.28',
      nine: '36.69',
      ten: '35.13',
      eleven: '66.33',
      twelve: '41.33',
    },
    {
      year: '2021',
      one: '36.13',
      two: '11.913',
      three: '28.2',
      four: '37.02',
      five: '19.29',
      six: '17.16',
      seven: '23.641',
      eight: '11.28',
      nine: '36.69',
      ten: '35.13',
      eleven: '66.33',
      twelve: '41.33',
    },
  ];
  // 碳排详情页的表头数据
  const columns1 = [
    { title: '核算单元', dataIndex: 'dan' },
    { title: '排放节点', dataIndex: 'dan1' },
    { title: '排放源', dataIndex: 'dan2' },
    {
      title: '排放因子',
      dataIndex: 'dan3',
      children: [
        { title: '数据来源', dataIndex: 'lai' },
        { title: '排放因子', dataIndex: 'pai' },
      ],
    },
    {
      title: '活动数据',
      dataIndex: 'dan4',
      children: [
        { title: '数据来源', dataIndex: 'lai1' },
        { title: '消耗量', dataIndex: 'pai2' },
        { title: '排放量 (tCO2)', dataIndex: 'pai3' },
      ],
    },
  ];
  // 合并表格行
  const spanMethod = ({ rowIndex, columnIndex }) => {
    if (rowIndex === 0 && columnIndex === 1) {
      return {
        rowspan: 2,
        colspan: 1,
      };
    }
    if (rowIndex === 0 && columnIndex === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      };
    }
    if (rowIndex === 2 && columnIndex === 0) {
      return {
        rowspan: 2,
        colspan: 1,
      };
    }
    if (rowIndex === 2 && columnIndex === 1) {
      return {
        rowspan: 2,
        colspan: 1,
      };
    }

    return 0;
  };
  // 碳排核算详情页的模拟数据项
  const data1 = [
    {
      dan: '科技园',
      dan1: '总进线',
      dan2: '电力',
      lai: '缺省值',
      pai: '0.0006101',
      lai1: '关联变量',
      pai2: '26794.625',
      pai3: '16.347',
    },
    {
      dan: '科技园',
      dan1: '总进线',
      dan2: '热力',
      lai: '缺省值',
      pai: '0.11',
      lai1: '关联变量',
      pai2: '41.079',
      pai3: '4.519',
    },
    {
      dan: '产业园',
      dan1: '总进线',
      dan2: '电力',
      lai: '缺省值',
      pai: '0.0006101',
      lai1: '关联变量',
      pai2: '54862.05',
      pai3: '11.347',
    },
    {
      dan: '产业园',
      dan1: '总进线',
      dan2: '热力',
      lai: '缺省值',
      pai: '0.11',
      lai1: '关联变量',
      pai2: '61.132',
      pai3: '5.519',
    },
  ];
  // 用来对应具体月份
  const x: any = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
  };
  // 进入碳排核算详情页面
  const detail = (record: any, n: any) => {
    item.value = 1;
    year.value = record.year;
    month.value = n;
    const x1 = x[n];
    num.value = record[x1];
    console.log(record, n);
  };
  // 弹窗开关响应式变量
  const visible = ref(false);
  // 收集信息表单
  const form = reactive({
    name: '',
    post: '',
  });
  // 打开弹窗
  const handleClick = () => {
    visible.value = true;
  };
  // 弹窗确认，提交信息
  const handleBeforeOk = () => {
    console.log(form);
    item.value = 2;
  };
  // 弹窗关闭
  const handleCancel = () => {
    visible.value = false;
  };
</script>

<template>
  <div class="emission">
    <!--    碳排核算主界面-->
    <div v-if="item === 0">
      <a-table
        :columns="columns"
        :bordered="{ wrapper: true, cell: true, headerCell: true }"
        :data="data"
        ><template #one="{ record }">
          <a-button type="text" class="color" @click="detail(record, 1)">{{
            record.one
          }}</a-button>
        </template>
        <template #two="{ record }">
          <a-button type="text" class="color" @click="detail(record, 2)">{{
            record.two
          }}</a-button>
        </template>
        <template #three="{ record }">
          <a-button type="text" class="color" @click="detail(record, 3)">{{
            record.three
          }}</a-button>
        </template>
        <template #four="{ record }">
          <a-button type="text" class="color" @click="detail(record, 4)">{{
            record.four
          }}</a-button>
        </template>
        <template #five="{ record }">
          <a-button type="text" class="color" @click="detail(record, 5)">{{
            record.five
          }}</a-button>
        </template>
        <template #six="{ record }">
          <a-button type="text" class="color" @click="detail(record, 6)">{{
            record.six
          }}</a-button>
        </template>
        <template #seven="{ record }">
          <a-button type="text" class="color" @click="detail(record, 7)">{{
            record.seven
          }}</a-button>
        </template>
        <template #eight="{ record }">
          <a-button type="text" class="color" @click="detail(record, 8)">{{
            record.eight
          }}</a-button>
        </template>
        <template #nine="{ record }">
          <a-button type="text" class="color" @click="detail(record, 9)">{{
            record.nine
          }}</a-button>
        </template>
        <template #ten="{ record }">
          <a-button type="text" class="color" @click="detail(record, 10)">{{
            record.ten
          }}</a-button>
        </template>
        <template #eleven="{ record }">
          <a-button type="text" class="color" @click="detail(record, 11)">{{
            record.eleven
          }}</a-button>
        </template>
        <template #twelve="{ record }">
          <a-button type="text" class="color" @click="detail(record, 12)">{{
            record.twelve
          }}</a-button>
        </template>
        <template #do>
          <!--          弹窗选择月份-->
          <a-button type="text" @click="handleClick">核算报告</a-button>
          <a-modal
            v-model:visible="visible"
            title="核算报告"
            @cancel="handleCancel"
            @ok="handleBeforeOk"
          >
            <a-form :model="form">
              <a-form-item field="post" label="选择月份">
                <a-select default-value="1月">
                  <a-option value="1月">1月</a-option>
                  <a-option value="2月">2月</a-option>
                  <a-option value="3月">3月</a-option>
                  <a-option value="4月">4月</a-option>
                </a-select>
              </a-form-item>
            </a-form>
          </a-modal>
        </template>
      </a-table>
    </div>
    <!--  碳排核算界面  -->
    <div v-else-if="item === 1">
      <div
        ><a-divider
          direction="vertical"
          style="
            border: #245daf solid 2px;
            height: 25px;
            margin-left: 0;
          " /><a-space
          ><span style="color: #ffffff; font-size: large">碳排核算</span
          ><a-button
            style="margin-left: 10px"
            type="secondary"
            size="small"
            @click="item = 0"
            >返回</a-button
          ></a-space
        ><div class="detail"
          ><div class="detail-top"
            ><a-row :gutter="10"
              ><a-col :span="5"
                ><div
                  ><a-space
                    ><span>年度:</span><span>{{ year }}</span></a-space
                  ></div
                ></a-col
              ><a-col :span="4"
                ><div
                  ><a-space
                    ><span>月份:</span><span>{{ month }}月</span></a-space
                  ></div
                ></a-col
              ><a-col :span="6"
                ><div
                  ><a-space
                    ><span>核算边界:</span
                    ><a-select default-value="1" style="width: 130px"
                      ><a-option value="1">v-2022-1.0</a-option></a-select
                    ></a-space
                  ></div
                ></a-col
              ><a-col :span="5"
                ><div
                  ><a-space
                    ><icon-info-circle-fill /><span
                      >总碳排放量： {{ num }} tCO2</span
                    ></a-space
                  ></div
                ></a-col
              ><a-col :span="4"
                ><div
                  ><a-button type="text" @click="item = 2">核算报告</a-button
                  ><a-button type="text">下载报告</a-button></div
                ></a-col
              ></a-row
            ></div
          ><div class="detail-content"
            ><a-table
              :columns="columns1"
              :bordered="{ wrapper: true, cell: true, headerCell: true }"
              :span-method="spanMethod"
              :data="data1"
            ></a-table></div></div></div
    ></div>
    <!--    核算报告pdf界面-->
    <div v-else-if="item === 2" style="position: relative">
      <iframe
        src="https://jingyuexing.github.io/Ebook/Front_End/Vue/Vue.js%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%20%E5%BF%AB%E9%80%9F%E5%85%A5%E9%97%A8%E4%B8%8E%E4%B8%93%E4%B8%9A%E5%BA%94%E7%94%A8.pdf"
        height="700px;"
        width="100%"
        style="position: absolute; right: 0; top: 0"
      ></iframe>
      <a-button
        style="position: relative; top: 15px; left: 380px"
        type="primary"
        @click="item = 0"
        >返回</a-button
      >
    </div>
  </div>
</template>

<style scoped lang="less">
  .emission {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    .color {
      color: #dad9d9;
    }
    .detail {
      background-color: #232323;
      width: 100%;
      margin-top: 10px;
      .detail-top {
        width: 97%;
        margin-left: 10px;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
      }
      .detail-content {
        width: 97%;
        margin-left: 10px;
        margin-top: 15px;
      }
    }
  }
</style>
