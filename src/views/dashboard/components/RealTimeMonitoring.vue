<template>
  <div class="container">
    <a-tabs v-model:active-key="activeKey" type="card-gutter" class="tabsList">
      <a-tab-pane key="1" title="实时评分">
        <div
          style="
            display: flex;
            justify-content: space-between;
            height: 40px;
            line-height: 40px;
            color: var(--color-text-1);
          "
        >
          <div
            >数据刷新时间：{{ date }}
            <a-button type="text" @click="renovateClick">
              <template #icon>
                <icon-loop />
              </template>
              刷新
            </a-button>
          </div>

          <a-drawer
            :width="540"
            :visible="drawVisible"
            unmount-on-close
            :footer="false"
            @ok="drawHandleOk"
            @cancel="drawHandleCancel"
          >
            <template #title> 指标说明 </template>
            <div class="draw-div">
              <a-tabs>
                <a-tab-pane key="1" title="配置内容">
                  <div v-for="(item, index) in drawList" :key="index">
                    <div
                      style="
                        --color-text-1: rgba(255, 255, 255, 0.9);
                        font-size: 18px;
                        margin: 10px 0;
                      "
                    >
                      {{ item.title }}</div
                    >
                    <div style="font-size: 15px; margin: 10px 0">{{
                      item.content
                    }}</div>
                    <div
                      style="
                        white-space: pre-line;
                        color: #7e93a6;
                        font-size: 14px;
                        margin: 10px 0;
                      "
                    >
                      {{ item.data }}
                    </div>
                    <div
                      style="color: #7e93a6; font-size: 12px; margin: 10px 0"
                    >
                      {{ item.value }}
                    </div>
                    <a-divider></a-divider>
                  </div>
                </a-tab-pane>
              </a-tabs>
            </div>
          </a-drawer>
          <div @click="drawClick"><icon-info-circle-fill />指标说明</div>
        </div>
        <a-row :gutter="20">
          <a-col :span="6" style="position: relative">
            <a-card title="评分" style="margin: 0 auto">
              <div id="radarChart"></div>
              <div id="radarChartValue" :style="radarStyle">
                {{ achievement }}
              </div>
            </a-card>
            <a-card title="回路统计" style="margin-top: 20px">
              <div id="seriesChart"></div>
            </a-card>
          </a-col>
          <a-col :span="18">
            <a-table
              :columns="columns"
              :data="data"
              :scroll="scroll"
              :virtual-list-props="{ height: 914 }"
              :bordered="{ cell: true }"
              @cell-click="cellClick"
              @row-click="RowClick"
            >
            </a-table>
            <a-modal
              v-model:visible="visible"
              @ok="handleOk"
              @cancel="handleCancel"
            >
              <template #title>
                {{ tableTitle }}
              </template>
            </a-modal>
            <div id="modalChart"></div>
          </a-col>
        </a-row>
      </a-tab-pane>
      <a-tab-pane key="2" title="单回路监测">
        <div
          style="
            display: flex;
            justify-content: space-between;
            height: 40px;
            line-height: 40px;
            margin: 0 0 10px 0;
          "
        >
          <a-select
            default-value="Beijing"
            :style="{ width: '320px' }"
            placeholder="Please select ..."
          >
            <template #label="{ data }">
              <span><icon-right-circle />{{ data?.label }}</span>
            </template>
            <a-optgroup label="Group-1">
              <a-option>
                <template #icon>
                  <icon-right-circle />
                </template>
                A
              </a-option>
              <a-option>
                <template #icon>
                  <icon-right-circle />
                </template>
                B
              </a-option>
            </a-optgroup>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
          </a-select>
          <div @click="drawClick"><icon-info-circle-fill />指标说明</div>
        </div>
        <a-row :gutter="20">
          <a-col :span="8">
            <a-card title="三相不平衡度">
              <div>
                <a-row :gutter="10">
                  <a-col :span="12">
                    <div id="threePhase"></div>
                  </a-col>
                  <a-col :span="12">
                    <div
                      style="
                        margin-top: 40px;
                        text-align: center;
                        width: 80%;
                        height: 60px;
                        padding: 14px 0 0 0;
                        background: linear-gradient(
                          -20deg,
                          rgb(81, 198, 255),
                          rgb(21, 72, 248)
                        );
                      "
                    >
                      <div>电压不平衡度</div>
                      {{ averageValue }}%
                    </div>
                    <div v-for="(voltageItem, index) in nameList" :key="index">
                      <div style="line-height: 30px">
                        <span>{{ voltageItem.title }}</span>
                        <span>{{ voltageItem.data }}</span>
                      </div>
                      <div>
                        {{ voltageItem.value }}
                      </div>
                    </div>
                  </a-col>
                </a-row>
              </div>
              <hr />
              <a-row>
                <a-col :span="12">
                  <div id="threePhaseTwo"></div>
                </a-col>
                <a-col :span="12">
                  <div
                    style="
                      margin-top: 40px;
                      text-align: center;
                      width: 80%;
                      height: 60px;
                      padding: 14px 0 0 0;
                      background: linear-gradient(
                        -20deg,
                        rgb(81, 198, 255),
                        rgb(21, 72, 248)
                      );
                    "
                  >
                    <div>电压不平衡度</div>
                    {{ averageValue }}%
                  </div>
                  <div v-for="(voltageItem, index) in nameList" :key="index">
                    <div style="line-height: 30px">
                      <span>{{ voltageItem.title }}</span>
                      <span>{{ voltageItem.data }}</span>
                    </div>
                    <div>
                      {{ voltageItem.value }}
                    </div>
                  </div>
                </a-col>
              </a-row>
            </a-card>
            <a-card title="电压 额定电压10.5V" style="margin: 10px 0">
              <div style="margin-top: 12px">下限：5.64kV 上限：6.49kV</div>
              <div id="voltageChart"></div>
            </a-card>
          </a-col>
          <a-col :span="16">
            <a-card title="谐波">
              <a-tabs class="ripple" type="rounded">
                <a-tab-pane key="1" title="含量">
                  <div id="content"></div>
                  <a-divider></a-divider>
                  <div id="contentA"></div>
                </a-tab-pane>
                <a-tab-pane key="2" title="有效值">
                  <div id="contentTwo"></div>
                  <a-divider></a-divider>
                  <div id="contentTwoA"></div>
                </a-tab-pane>
              </a-tabs>
              <div id=""></div>
            </a-card>
            <a-row :gutter="20" style="margin-top: 10px">
              <a-col :span="12">
                <a-card title="频率">
                  <div style="text-align: center">
                    <div style="margin: 20px">
                      <span style="color: red; font-size: 18px">当前频率 </span>
                      <a-space
                        style="
                          width: 70px;
                          height: 20px;
                          text-align: center;
                          border-radius: 10px;
                          font-size: 16px;
                        "
                        >50.05Hz</a-space
                      >
                    </div>
                    <div>
                      <span style="font-size: 18px">频率偏差 </span>
                      <a-space
                        style="
                          width: 80px;
                          height: 30px;
                          background-color: #1dc593;
                          font-size: 16px;
                          border-radius: 15px;
                        "
                        >0.04%</a-space
                      >
                    </div>
                  </div>
                  <div class="frequency-footer">
                    <a-divider
                      class="frequency-footer-divider"
                      type="dotted"
                      direction="vertical"
                    />
                    <a-divider
                      class="frequency-footer-divider2"
                      type="dotted"
                      direction="vertical"
                    />
                    <a-divider
                      class="frequency-footer-divider3"
                      type="dotted"
                      direction="vertical"
                    />
                    <a-divider
                      class="frequency-footer-divider4"
                      type="dotted"
                      direction="vertical"
                    />
                    <a-divider
                      class="frequency-footer-divider5"
                      type="dotted"
                      direction="vertical"
                    />
                    <div style="position: absolute; left: 12%; top: 130%"
                      >1</div
                    >
                    <div style="position: absolute; left: 32%; top: 130%"
                      >1</div
                    >
                    <div style="position: absolute; left: 50%; top: 130%"
                      >1</div
                    >
                    <div style="position: absolute; left: 72%; top: 130%"
                      >1</div
                    >
                    <div style="position: absolute; left: 92%; top: 130%"
                      >1</div
                    >
                    <div class="frequency-footer-bg"></div>
                    <div class="frequency-footer-line"></div>
                  </div>
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-card title="有功功率和无功功率">
                  <div style="margin: 35px 20px">
                    有功功率：
                    <a-popover>
                      <template #title> 有功功率：{{ kw }} kw </template>
                      <a-progress
                        :percent="HavePower"
                        :style="{
                          width: '50%',
                          height: '10px',
                          marginTop: '30px',
                        }"
                      />
                    </a-popover>
                    {{ kw }} kw
                    <br />
                    无功功率：
                    <a-popover>
                      <template #title> 无功功率：{{ kvar }} kVar </template>
                      <a-progress
                        :percent="NoPower"
                        :style="{ width: '50%', margin: '52px 0' }"
                      />
                    </a-popover>
                    {{ kvar }} kVar
                  </div>
                </a-card>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
  import { ref, reactive, onMounted, Ref } from 'vue';
  import * as echarts from 'echarts';
  import dayjs from 'dayjs';

  const date = ref(dayjs().format('YYYY-MM-DD HH:mm:ss'));

  const visible: Ref<boolean> = ref(false);
  const drawVisible: Ref<boolean> = ref(false);
  const activeKey: Ref<string> = ref('1');
  const tableTitle: Ref<string> = ref('');
  const averageValue: Ref<number> = ref(10);

  const kw = 896.2;
  const kvar = 123.6;

  const a = Math.round(kw);
  const HavePower = a * 0.001;
  const c = Math.round(kvar);
  const NoPower = c * 0.001;

  const nameList = reactive([
    {
      title: 'A相电压',
      data: '幅值: 6.18 V',
      value: ' 相角: -',
    },
    {
      title: 'A相电压',
      data: '幅值: 6.18 V',
      value: ' 相角: -',
    },
    {
      title: 'A相电压',
      data: '幅值: 6.18 V',
      value: ' 相角: -',
    },
  ]);
  const scroll = {
    x: 1200,
  };
  const num = ref(0);

  const renovateClick = () => {
    date.value = dayjs().format('YYYY-MM-DD HH:mm:ss');
  };

  const drawClick = () => {
    drawVisible.value = true;
  };

  const drawHandleOk = () => {
    drawVisible.value = false;
  };

  const drawHandleCancel = () => {
    drawVisible.value = false;
  };

  const RowClick = (record: any, event: any) => {
    // visible.value = true;
  };

  const cellClick = (record: any, event: any) => {
    console.log(record.name);
    console.log(record[event.dataIndex]);
    if (event.title === '回路') {
      visible.value = false;
      activeKey.value = '2';
    } else {
      tableTitle.value = record.name;
      activeKey.value = '1';
      visible.value = true;
    }
  };

  const handleOk = () => {
    visible.value = false;
  };

  const handleCancel = () => {
    visible.value = false;
  };

  const drawList = reactive([
    {
      title: '【设备级配置】',
      content: '请在 站点管理->监控设备中配置 或 联系运维管理员：',
      data: `额定电压、额定电流、电流负载率门限、电能质量分析`,
      value: `如果设备没有配置额定电压，电压/谐波畸变率分析项可能没有数据
                如果设备不勾选电能质量分析，该设备不参与电能质量分析`,
    },
    {
      title: '【变量级配置】',
      content: `请在 站点管理->变量列表中配置 或 联系运维管理员：配置下列变量，且需要指定变量的变量属性`,
      data: `A/B/C相电压
                A/B/C相电流
                功率因数
                频率
                有功/无功功率
                有功/无功电度
                电压三相不平衡度
                电流三相不平衡度
                A/B/C相电压相角
                A/B/C相电流相角
                A/B/C相电压总谐波畸变率
                A/B/C相电流总谐波畸变率
                2~31次A/B/C相电压谐波含量或有效值 (可二选一)
                2~31次A/B/C相电流谐波含量或有效值 (可二选一)`,
      value: '如果变量没有指定变量属性 或 变量没有数据，分析项可能没有数据',
    },
  ]);

  const columns = [
    {
      title: '回路',
      dataIndex: 'name',
      fixed: 'left',
      width: 200,
      bodyCellStyle: (record: any) => {
        if (record.name > averageValue.value) {
          return {
            color: 'red',
          };
        }
        return record;
      },
    },
    {
      title: '功率因数',
      dataIndex: 'salary',
    },
    {
      title: '不平衡度',
      dataIndex: 'address',
      children: [
        {
          title: '电流',
          dataIndex: 'address',
        },
        {
          title: '电压',
          dataIndex: 'address',
        },
      ],
    },
    {
      title: '电压',
      dataIndex: 'email',
      children: [
        {
          title: 'A相',
          dataIndex: 'address',
        },
        {
          title: 'B相',
          dataIndex: 'address',
        },
        {
          title: 'C相',
          dataIndex: 'address',
        },
      ],
    },
    {
      title: '电流负载率',
      dataIndex: 'emaila',
      children: [
        {
          title: 'A相',
          dataIndex: 'address',
        },
        {
          title: 'B相',
          dataIndex: 'address',
        },
        {
          title: 'C相',
          dataIndex: 'address',
        },
      ],
    },
    {
      title: '电流谐波畸变率',
      dataIndex: 'emailc',
      children: [
        {
          title: 'A相',
          dataIndex: 'address',
        },
        {
          title: 'B相',
          dataIndex: 'address',
        },
        {
          title: 'C相',
          dataIndex: 'address',
        },
      ],
    },
    {
      title: '评分',
      dataIndex: 'emaild',
    },
  ];

  const data = reactive([
    {
      key: '1',
      name: 10,
      salary: 23000,
      address: '32 Park ondon',
      email: 'jane.le.com',
    },
    {
      key: '2',
      name: 6,
      salary: 25000,
      address: '35 PaLondon',
      email: 'alisa.e.com',
    },
    {
      key: '3',
      name: 5,
      salary: 22000,
      address: '31 Parkndon',
      email: 'kevin.sanle.com',
      disabled: true,
    },
    {
      key: '4',
      name: 18,
      salary: 17000,
      address: '42 ParkLondon',
      email: 'ed.hple.com',
    },
    {
      key: '5',
      name: 7,
      salary: 27000,
      address: '62 ParLondon',
      email: 'williamle.com',
    },
    {
      key: '6',
      name: 5,
      salary: 15000,
      address: '32 ParLondon',
      email: 'jane.d.com',
    },
    {
      key: '7',
      name: 6,
      salary: 28000,
      address: '35 Park Rondon',
      email: 'alisa.roe.com',
    },
    {
      key: '8',
      name: 1,
      salary: 26000,
      address: '31 Paron',
      email: 'kevin.sancom',
    },
    {
      key: '9',
      name: '',
      salary: 18000,
      address: '42 Par',
      email: 'ed.hellen',
    },
    {
      key: '10',
      name: '4',
      salary: 12000,
      address: '62 Parn',
      email: 'william',
    },
  ]);

  const dataList = [1, 14.15, 11, 12, 14, 12.3];

  const radarStyle = ref(
    'background: linear-gradient(-20deg, rgb(81, 198, 255), rgb(21, 72, 248))'
  );

  dataList.forEach((item) => {
    num.value += item;
  });

  const integer = Math.round(num.value);
  const achievement = ref('优秀');

  if (integer > 80) {
    achievement.value = '优秀';
    radarStyle.value =
      'background: linear-gradient(-20deg, rgb(81, 198, 255), rgb(21, 72, 248))';
  } else if (integer > 60) {
    achievement.value = '合格';
    radarStyle.value =
      'background: linear-gradient(-20deg, rgb(250, 227, 159), rgb(236, 119, 55))';
  } else if (integer <= 60 && integer >= 0) {
    achievement.value = '不合格';
    radarStyle.value =
      'background: linear-gradient(-20deg, rgb(255, 142, 167), rgb(255, 56, 66))';
  }
  onMounted(() => {
    const radarChart = echarts.init(
      document.getElementById('radarChart'),
      null,
      {
        height: 400,
      }
    );
    const radarChartOptions = {
      title: {
        text: `总评分${integer}`,
        top: '90%',
        left: '48%',
        textAlign: 'center',
      },
      color: '#4fa8ce',
      tooltip: {
        trigger: 'item',
      },
      radar: {
        // shape: 'circle',
        name: '123123',
        indicator: [
          { name: '谐波畸变率', max: 100 },
          { name: '负载率', max: 100 },
          { name: '电流平衡度', max: 100 },
          { name: '功率因数', max: 100 },
          { name: '电压合格率', max: 100 },
          { name: '电压平衡度', max: 100 },
        ],
      },
      label: {
        show: true,
        position: 'center',
        formatter: '{c}',
      },
      series: [
        {
          name: '评分',
          type: 'radar',
          areaStyle: {
            color: '#356178',
          },
          data: [
            {
              value: dataList,
            },
          ],
        },
      ],
    };
    const seriesChart = echarts.init(
      document.getElementById('seriesChart'),
      null,
      {
        height: 400,
      }
    );

    const seriesChartOptions = {
      title: {
        text: '共计回路',
        top: '52%',
        left: '48%',
        textAlign: 'center',
      },
      color: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgb(81, 198, 255)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgb(21, 72, 248)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgb(250, 227, 159)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgb(236, 119, 55)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgb(255, 142, 167)', // 0% 处的颜色
            },
            {
              offset: 1,
              color: 'rgb(255, 56, 66)', // 100% 处的颜色
            },
          ],
          global: false, // 缺省为 false
        },
      ],
      tooltip: {
        trigger: 'item',
      },
      legend: {
        right: 'right',
        top: 'bottom',
        textStyle: {
          color: 'color',
        },
      },
      series: [
        {
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
              color: 'a',
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: '优秀' },
            { value: 735, name: '合格' },
            { value: 580, name: '不合格' },
          ],
        },
      ],
    };
    const modalChart = echarts.init(
      document.getElementById('modalChart'),
      null,
      {
        height: 400,
      }
    );
    const modalChartOptions = {
      xAxis: {
        type: 'category',
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

    const threePhase = echarts.init(
      document.getElementById('threePhase'),
      null,
      {
        height: 300,
      }
    );
    const threePhaseOptions = {
      radar: {
        shape: 'circle',
        indicator: [
          { name: 'A相电压' },
          { name: `幅值${activeKey.value}` },
          { name: `相角${activeKey.value}` },
        ],
      },
      legend: {
        data: ['aaa', 'bbb', 'ccc'],
      },
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'aaa',
          type: 'radar',

          data: [
            {
              value: [310, 180, 200, 300, 100, 204],
            },
          ],
        },
        {
          name: 'bbb',
          type: 'radar',

          data: [
            {
              value: [100, 290, 300, 350, 340, 260],
            },
          ],
        },
        {
          name: 'ccc',
          type: 'radar',
          data: [
            {
              value: [233, 340, 320, 340, 180, 360],
            },
          ],
        },
      ],
    };

    const threePhaseTwo = echarts.init(
      document.getElementById('threePhaseTwo'),
      null,
      {
        height: 300,
      }
    );
    const gaugeData = [
      {
        value: [10, 20, 30],
        title: {
          offsetCenter: ['-40%', '80%'],
        },
        detail: {
          offsetCenter: ['-40%', '95%'],
        },
      },
      {
        value: 40,
        title: {
          offsetCenter: ['0%', '80%'],
        },
        detail: {
          offsetCenter: ['0%', '95%'],
        },
      },
      {
        value: 60,
        title: {
          offsetCenter: ['40%', '80%'],
        },
        detail: {
          offsetCenter: ['40%', '95%'],
        },
      },
    ];
    const threePhaseTwoOptions = {
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          type: 'gauge',
          anchor: {
            show: true,
            showAbove: true,
            size: 16,
            itemStyle: {
              color: '#FAC858',
            },
          },
          pointer: {
            icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
            width: 6,
            length: '70%',
            offsetCenter: [0, '8%'],
          },
          progress: {
            show: true,
            overlap: true,
            roundCap: true,
          },
          axisLine: {
            roundCap: true,
          },
          data: gaugeData,
          title: {
            fontSize: 12,
          },
          detail: {
            width: 14,
            height: 14,
            fontSize: 12,
            color: '#fff',
            backgroundColor: 'inherit',
            borderRadius: 3,
            formatter: '{value}%',
          },
        },
      ],
    };

    const voltageChart = echarts.init(
      document.getElementById('voltageChart'),
      null,
      {
        height: 200,
      }
    );
    const voltageChartOptions = {
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
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: 'category',
        data: ['UA', 'UB', 'UC'],
      },
      series: [
        {
          name: '2011',
          type: 'bar',
          data: [6, 5, 6],
        },
        {
          name: '2011',
          type: 'bar',
          data: [2, 3, 4],
        },
      ],
    };

    const content = echarts.init(document.getElementById('content'), null, {
      height: 260,
    });

    const contentOption = {
      title: {
        text: 'Waterfall Chart',
        left: '50%',
      },
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],

          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1],
          ['Walnut Brownie2', 72.4, 53.9, 39.1],
          ['Walnut Brownie3', 72.4, 53.9, 39.1],
          ['Walnut Brownie4', 72.4, 53.9, 39.1],
          ['Walnut Brownie5', 72.4, 53.9, 39.1],
          ['Walnut Brownie6', 72.4, 53.9, 39.1],
          ['Walnut Brownie7', 72.4, 53.9, 39.1],
          ['Walnut Brownie8', 72.4, 53.9, 39.1],
          ['Walnut Brownie9', 72.4, 53.9, 39.1],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
    };
    const contentA = echarts.init(document.getElementById('contentA'), null, {
      height: 260,
    });

    const contentOptionA = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],

          ['Matcha Latte', 43.3, 85.8, 93.7],
          ['Milk Tea', 83.1, 73.4, 55.1],
          ['Cheese Cocoa', 86.4, 65.2, 82.5],
          ['Walnut Brownie', 72.4, 53.9, 39.1],
          ['Walnut Brownie2', 72.4, 53.9, 39.1],
          ['Walnut Brownie3', 72.4, 53.9, 39.1],
          ['Walnut Brownie4', 72.4, 53.9, 39.1],
          ['Walnut Brownie5', 72.4, 53.9, 39.1],
          ['Walnut Brownie6', 72.4, 53.9, 39.1],
          ['Walnut Brownie7', 72.4, 53.9, 39.1],
          ['Walnut Brownie8', 72.4, 53.9, 39.1],
          ['Walnut Brownie9', 72.4, 53.9, 39.1],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
    };

    const contentTwo = echarts.init(
      document.getElementById('contentTwo'),
      null,
      {
        height: 260,
      }
    );
    const contentOptionTwo = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],

          ['Matcha Latte', 83.1, 73.4, 55.1],
          ['Milk Tea', 43.3, 85.8, 93.7],
          ['Cheese Cocoa', 72.4, 53.9, 39.1],
          ['Walnut Brownie', 72.4, 53.9, 39.1],
          ['Walnut Brownie2', 86.4, 65.2, 82.5],
          ['Walnut Brownie3', 86.4, 65.2, 82.5],
          ['Walnut Brownie4', 172.4, 53.9, 39.1],
          ['Walnut Brownie5', 72.4, 153.9, 39.1],
          ['Walnut Brownie6', 72.4, 53.9, 39.1],
          ['Walnut Brownie7', 72.4, 53.9, 139.1],
          ['Walnut Brownie8', 72.4, 153.9, 39.1],
          ['Walnut Brownie9', 72.4, 53.9, 239.1],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
    };
    const contentTwoA = echarts.init(
      document.getElementById('contentTwoA'),
      null,
      {
        height: 260,
      }
    );
    const contentOptionTwoA = {
      legend: {},
      tooltip: {},
      dataset: {
        source: [
          ['product', '2015', '2016', '2017'],

          ['Matcha Latte', 83.1, 73.4, 55.1],
          ['Milk Tea', 43.3, 85.8, 93.7],
          ['Cheese Cocoa', 72.4, 53.9, 39.1],
          ['Walnut Brownie', 72.4, 53.9, 39.1],
          ['Walnut Brownie2', 86.4, 65.2, 82.5],
          ['Walnut Brownie3', 86.4, 65.2, 82.5],
          ['Walnut Brownie4', 172.4, 53.9, 39.1],
          ['Walnut Brownie5', 72.4, 153.9, 39.1],
          ['Walnut Brownie6', 72.4, 53.9, 39.1],
          ['Walnut Brownie7', 72.4, 53.9, 139.1],
          ['Walnut Brownie8', 72.4, 153.9, 39.1],
          ['Walnut Brownie9', 72.4, 53.9, 239.1],
        ],
      },
      xAxis: { type: 'category' },
      yAxis: {},
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
    };

    radarChart.setOption(radarChartOptions);
    seriesChart.setOption(seriesChartOptions);
    modalChart.setOption(modalChartOptions);
    threePhase.setOption(threePhaseOptions);
    threePhaseTwo.setOption(threePhaseTwoOptions);
    voltageChart.setOption(voltageChartOptions);
    content.setOption(contentOption);
    contentA.setOption(contentOptionA);
    contentTwo.setOption(contentOptionTwo);
    contentTwoA.setOption(contentOptionTwoA);

    window.addEventListener('resize', function () {
      radarChart.resize();
      seriesChart.resize();
      modalChart.resize();
      threePhase.resize();
      threePhaseTwo.resize();
      voltageChart.resize();
      content.resize();
      contentA.resize();
      contentTwo.resize();
      contentTwoA.resize();
    });
  });
</script>

<style lang="less" scoped>
  .tabsList {
    padding: 10px;
  }

  /* tabs 的表头 */
  .arco-tabs-nav-tab {
    background-color: #33404c;
    border: none;
  }

  /* tabs 选中 */
  .arco-tabs-nav-type-card-gutter .arco-tabs-tab-active,
  .arco-tabs-nav-type-card-gutter .arco-tabs-tab-active:hover {
    border-top: solid 3px #6c7fff !important;
    border: unset;
  }

  .arco-tabs-tab {
    height: 40px;
  }

  /* table的头顶 */
  .arco-table .arco-table-element {
    margin: 0;
  }

  .abutton {
    margin: 0 10px;
  }

  .arco-tabs-type-card > .arco-tabs-content,
  .arco-tabs-type-card-gutter > .arco-tabs-content {
    border: unset;
  }

  .historySpan {
    color: rgb(var(--gray-10));
  }

  /* 雷达图 */
  .radarChart {
    text-align: center;
    margin: 0 auto;
    position: absolute;
    width: 100%;
    height: 100%;
  }

  #radarChartValue {
    width: 40px;
    height: 20px;
    text-align: center;
    border-radius: 4px;
  }

  /* 抽屉样式 */
  .draw-div .arco-tabs-nav-tab {
    background-color: unset;
  }

  /*  */
  .ripple .arco-tabs-nav-tab {
    background-color: unset;
  }

  .frequency {
    &-footer {
      width: 80%;
      height: 60px;
      margin: 38px auto;
      background-color: #d7d9db;
      position: relative;

      &-divider,
      &-divider2,
      &-divider3,
      &-divider4,
      &-divider5 {
        height: 100%;
        position: absolute;
      }

      &-divider {
        left: 10%;
      }

      &-divider2 {
        left: 30%;
      }

      &-divider3 {
        left: 47%;
      }

      &-divider4 {
        left: 70%;
      }

      &-divider5 {
        left: 90%;
      }

      &-bg {
        width: 25%;
        height: 60px;
        margin: 0 auto;
        background-color: aqua;
      }

      &-line {
        border-right: 2px solid red;
        height: 140%;
        position: absolute;
        top: -10px;
        left: 50%;
      }
    }
  }

  .arco-progress-line-text {
    display: none;
  }

  .arco-progress-line-bar {
    height: 10px;
  }

  .arco-progress-line {
    height: 10px !important;
  }
</style>
