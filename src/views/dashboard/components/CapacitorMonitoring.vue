<template>
  <div class="container">
    <div class="container-header">
      <a-radio-group :default-value="radioValue" @change="radioChange(index)">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>平铺</a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>表格</a-tag>
          </template>
        </a-radio>
      </a-radio-group>
      <span>数据刷新时间：{{ date }}</span>
      <span> <icon-paste />总设备数：</span>
      <span><icon-exclamation-circle />告警设备数：</span>
    </div>
    <div v-show="isShow" class="container-body">
      <a-row :gutter="20">
        <a-col
          v-for="(item, index) in cardList"
          :key="index"
          :xxl="4"
          :xl="5"
          :lg="6"
          :md="8"
          class="container-body-col"
        >
          <a-card
            class="container-body-col-card"
            :header-style="{
              background: 'linear-gradient(to top, #6c7fff, #3a54ff)',
            }"
            :bordered="false"
            :body-style="{ border: '1px solid #3a54ff', borderTop: 'unset' }"
          >
            <template #title>
              <span>{{ item.title }}</span>
              <a-button @click="historyClick(item, index)">
                <icon-close /> 历史数据</a-button
              >
            </template>
            <a-row :gutter="6">
              <a-col :span="24">
                <a-list :bordered="false" :split="false">
                  <a-list-item>剩余电流 {{ item.afterCurrent }} mA</a-list-item>
                </a-list>
              </a-col>
              <a-col
                v-for="(List, index2) in item.children1"
                :key="index2"
                :span="item.span"
              >
                <a-list
                  :bordered="false"
                  fixed-size="true"
                  style="height: 120px"
                >
                  <template #header>
                    <span style="font-size: 12px; padding: 0">{{
                      List.CableTemperatureTitle
                    }}</span>
                  </template>
                  <a-list-item
                    v-for="(List2, index3) in List.children2"
                    :key="index3"
                  >
                    <span>{{ List2.mutually }}</span>
                    <span> {{ List2.CableTemperature }} ℃</span>
                  </a-list-item>
                </a-list>
              </a-col>
            </a-row>

            <div>安装位置： {{ item.footer }}</div>
          </a-card>
          <a-modal
            v-model:visible="item.visible"
            @ok="handleOk"
            @cancel="handleCancel"
          >
            <template #title> {{ item.title }}</template>
            <div>
              <a-date-picker v-model="value" style="width: 200px" />
              <a-radio-group default-value="1" @change="modalRadioChange">
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
            </div>
            <Child
              v-if="modalShow"
              :item="parentMsg"
              :data="dataList"
              :my-chart="myChartSon"
            />
            <a-table
              v-if="modalShowTwo"
              :columns="modalColumns"
              :data="modalData"
              :bordered="{ wrapper: true, cell: true }"
            />
          </a-modal>
        </a-col>
      </a-row>
    </div>
    <div v-show="isShowTwo" class="container-main">
      <a-table
        :columns="columns"
        :data="data"
        :bordered="{ wrapper: true, cell: true }"
      >
        <template #optional="{ record }">
          <a-button @click="historyClick(record)">查询</a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, onMounted, reactive, nextTick } from 'vue';
  import dayjs from 'dayjs';
  import * as echarts from 'echarts';
  import Child from './components/Child.vue';

  const isShow = ref(true);
  const isShowTwo = ref(false);
  const modalShow = ref(false);
  const modalShowTwo = ref(true);
  const radioValue = ref('1');
  const radioChange = () => {
    isShow.value = !isShow.value;
    isShowTwo.value = !isShowTwo.value;
  };
  const modalRadioChange = () => {
    modalShow.value = !modalShow.value;
    modalShowTwo.value = !modalShowTwo.value;
  };
  // 时间
  const date = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'));
  const value = Date.now();
  // child 数据
  const parentMsg = [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'bar',
    },
    {
      data: [1250, 2330, 2224, 2138, 1335, 1447, 2560],
      type: 'bar',
    },
  ];
  const dataList = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  setInterval(() => {
    date.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
  }, 3000);
  // modal
  const visible = ref(false);
  const historyClick = async (record: { visible: boolean }) => {
    await nextTick();
    record.visible = true;
  };
  const handleOk = () => {
    visible.value = false;
    modalShow.value = false;
    modalShowTwo.value = true;
  };
  const handleCancel = () => {
    visible.value = false;
    modalShow.value = false;
    modalShowTwo.value = true;
  };
  const columns = [
    {
      title: '设备名称',
      dataIndex: 'title',
    },
    {
      title: '安装位置',
      dataIndex: 'footer',
    },
    {
      title: '剩余电流',
      dataIndex: 'afterCurrent',
    },
    {
      title: '线缆温度',
      children: [
        {
          title: 'A相',
          dataIndex: 'mutuallyA',
        },
        {
          title: 'B相',
          dataIndex: 'mutuallyB',
        },
        {
          title: 'C相',
          dataIndex: 'mutuallyC',
        },
        {
          title: 'N相',
          dataIndex: 'mutuallyN',
        },
      ],
    },
    {
      title: '电流',
      dataIndex: 'electricCurrent',
      children: [
        {
          title: 'A相',
          dataIndex: 'electricCurrentA',
        },
        {
          title: 'B相',
          dataIndex: 'electricCurrentB',
        },
        {
          title: 'C相',
          dataIndex: 'electricCurrentC',
        },
      ],
    },
    {
      title: 'Optional',
      slotName: 'optional',
    },
  ];

  const data = reactive([
    {
      key: '1',
      title: 'Jane Doe',
      afterCurrent: 23000,
      CableTemperature: '32 Park Road, London',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
      electricCurrentA: '1235',
      electricCurrentB: '1235',
      electricCurrentC: '1235',
      email: 'jane.doe@example.com',
      footer: '电气火灾',
    },
    {
      key: '2',
      title: 'Alisa Ross',
      afterCurrent: 25000,
      CableTemperature: '35 Park Road, London',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
      electricCurrentA: '1235',
      electricCurrentB: '1235',
      electricCurrentC: '1235',
      email: 'alisa.ross@example.com',
      footer: '电气火灾',
    },
    {
      key: '3',
      title: 'Kevin Sandra',
      afterCurrent: 22000,
      CableTemperature: '31 Park Road, London',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
      electricCurrentA: '1235',
      electricCurrentB: '1235',
      electricCurrentC: '1235',
      email: 'kevin.sandra@example.com',
      footer: '电气火灾',
    },
    {
      key: '4',
      title: 'Ed Hellen',
      afterCurrent: 17000,
      CableTemperature: '42 Park Road, London',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
      electricCurrentA: '1235',
      electricCurrentB: '1235',
      electricCurrentC: '1235',
      email: 'ed.hellen@example.com',
      footer: '电气火灾',
    },
    {
      key: '5',
      title: 'William Smith',
      afterCurrent: 27000,
      CableTemperature: '62 Park Road, London',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
      electricCurrentA: '1235',
      electricCurrentB: '1235',
      electricCurrentC: '1235',
      email: 'william.smith@example.com',
      footer: '电气火灾',
    },
  ]);
  const modalColumns = [
    {
      title: '时间',
      dataIndex: 'timing',
    },
    {
      title: '剩余电流(mA)',
      dataIndex: 'electricCurrent',
    },
    {
      title: '线缆温度(℃)',
      children: [
        {
          title: 'A相',
          dataIndex: 'mutuallyA',
        },
        {
          title: 'B相',
          dataIndex: 'mutuallyB',
        },
        {
          title: 'C相',
          dataIndex: 'mutuallyC',
        },
        {
          title: 'N相',
          dataIndex: 'mutuallyN',
        },
      ],
    },
  ];
  const modalData = reactive([
    {
      timing: '232',
      electricCurrent: '423423',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
    },
    {
      timing: '232',
      electricCurrent: '423423',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
    },
    {
      timing: '232',
      electricCurrent: '423423',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
    },
    {
      timing: '232',
      electricCurrent: '423423',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
    },
    {
      timing: '232',
      electricCurrent: '423423',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
    },
    {
      timing: '232',
      electricCurrent: '423423',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
    },
    {
      timing: '232',
      electricCurrent: '423423',
      mutuallyA: '12345',
      mutuallyB: '23456',
      mutuallyC: '2343',
      mutuallyN: 'hjhj',
    },
  ]);
  // 数组
  const cardList = reactive([
    {
      title: '办公室1楼',
      afterCurrent: '0.0102',
      CableTemperature: '线缆温度',
      visible: false,
      children1: [
        {
          CableTemperatureTitle: '线缆温度',
          children2: [
            {
              mutually: 'A相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'B相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'C相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'N相',
              CableTemperatureValue: '10.3',
            },
          ],
        },
      ],
      footer: '电气火灾',
    },
    {
      title: '办公室2楼',
      afterCurrent: '0.0102',
      CableTemperature: '线缆温度',
      visible: false,
      children1: [
        {
          CableTemperatureTitle: '线缆温度',
          children2: [
            {
              mutually: 'A相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'B相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'C相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'N相',
              CableTemperatureValue: '10.3',
            },
          ],
        },
      ],
      footer: '电气火灾',
    },
    {
      title: '办公室3楼',
      afterCurrent: '0.0102',
      visible: false,
      span: 12,
      children1: [
        {
          CableTemperatureTitle: '线缆温度',
          children2: [
            {
              mutually: 'A相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'B相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'C相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'N相',
              CableTemperatureValue: '10.3',
            },
          ],
        },
        {
          CableTemperatureTitle: '电流',
          children2: [
            {
              mutually: 'A相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'B相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'C相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'N相',
              CableTemperatureValue: '10.3',
            },
          ],
        },
      ],
      footer: '电气火灾',
    },
    {
      title: '办公室4楼',
      afterCurrent: '0.0102',
      visible: false,
      children1: [
        {
          CableTemperatureTitle: '线缆温度',
          children2: [
            {
              mutually: 'A相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'B相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'C相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'N相',
              CableTemperatureValue: '10.3',
            },
          ],
        },
      ],
      footer: '电气火灾',
    },
    {
      title: '办公室5楼',
      afterCurrent: '0.0102',
      CableTemperature: '线缆温度',
      span: 12,
      children1: [
        {
          CableTemperatureTitle: '线缆温度',
          children2: [
            {
              mutually: 'A相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'B相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'C相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'N相',
              CableTemperatureValue: '10.3',
            },
          ],
        },
        {
          CableTemperatureTitle: '电流',
          children2: [
            {
              mutually: 'A相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'B相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'C相',
              CableTemperatureValue: '10.3',
            },
            {
              mutually: 'N相',
              CableTemperatureValue: '10.3',
            },
          ],
        },
      ],
      footer: '电气火灾',
    },
  ]);
</script>

<style lang="less" scoped>
  * {
    color: white;
  }

  .container {
    padding: 20px;

    &-header {
    }

    &-body {
      &-col {
        margin-top: 10px;

        &-card {
          // background: linear-gradient(to top, #6c7fff, #3a54ff);
        }
      }
    }
  }

  :deep(.arco-list-medium .arco-list-content-wrapper .arco-list-header) {
    padding: 0 !important;
  }

  .arco-list-medium
    .arco-list-content-wrapper
    .arco-list-content
    > .arco-list-item {
    padding: 0;
    background-color: #24323d;
  }

  :deep(.arco-list) {
    border-radius: unset !important;
  }

  .arco-list-split .arco-list-header,
  .arco-list-split .arco-list-item:not(:last-child) {
    border-bottom: 2px solid #232324;
  }

  .arco-list-split .arco-list-header,
  .arco-list-split .arco-list-item:not(:last-child) {
    border-bottom: 2px solid #232324;
  }
</style>
