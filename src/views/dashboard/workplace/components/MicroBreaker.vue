<template>
  <div class="container" v-show="isShowAll">
    <div class="container-header">
      <a-row justify="space-between">
        <a-col :span="12">
          <a-select
            :style="{ width: '320px' }"
            :default-value="'Beijing'"
            placeholder="Please select ..."
          >
            <a-option>Beijing</a-option>
            <a-option>Shanghai</a-option>
            <a-option>Guangzhou</a-option>
          </a-select>
          <a-checkbox :model-value="checkBox" @change="handleChange">全选</a-checkbox>
          <a-button @click="handleClick" class="container-header-switchOn">
            <template #icon> <icon-shrink /> </template>
            分闸
          </a-button>
          <a-button @click="handleClickTwo" class="container-header-switchOff">
            <template #icon><icon-expand /></template>合闸
          </a-button>
        </a-col>
        <a-col :span="12" style="text-align: right">
          <a-radio-group default-value="1" @change="radioChange">
            <a-radio value="1">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable><icon-drag-dot-vertical />平铺</a-tag>
              </template>
            </a-radio>
            <a-radio value="2">
              <template #radio="{ checked }">
                <a-tag :checked="checked" checkable><icon-drag-dot />表格</a-tag>
              </template>
            </a-radio>
          </a-radio-group>
          <a-select :style="{ width: '160px', margin: '0 10px' }" placeholder="选择状态">
            <a-option>在线</a-option>
            <a-option>离线</a-option>
            <a-option>分闸</a-option>
            <a-option>合闸</a-option>
          </a-select>

          <a-input-search
            :style="{ width: '160px', margin: '0 10px' }"
            placeholder="搜索名称"
            allow-clear
          />
        </a-col>
      </a-row>

      <a-modal
        v-model:visible="visible"
        @before-ok="beforeOk"
        @ok="handleOk"
        @cancel="handleCancel"
        :align-center="false"
        :top="200"
        width="500px"
      >
        <template #title> 远程控制 </template>
        <div class="container-header-switchOn-modalOn">
          将对选中的设备进行以下操作：
          <span class="container-header-switchOn-modalOn-btn">分闸</span>
          <div class="container-header-switchOn-modalOn-passWord">请输入登录密码：</div>
          <a-input-password
            :style="{ width: '320px', margin: '10px 0' }"
            :default-value="iptValue"
            placeholder="请输入登录密码"
            :invisible-button="false"
          />
          <div class="container-header-switchOn-modalOn-footer">
            {{ iptPromptingMessage }}
          </div>
        </div>
      </a-modal>
      <a-modal
        v-model:visible="visibleTwo"
        @before-ok="beforeOkTwo"
        @ok="handleOkTwo"
        @cancel="handleCancelTwo"
        :align-center="false"
        :top="200"
        width="500px"
      >
        <template #title> 远程控制 </template>
        <div class="container-header-switchOn-modalOff">
          将对选中的设备进行以下操作：
          <span class="container-header-switchOn-modalOff-btn">合闸</span>
          <div class="container-header-switchOn-modalOff-passWord">请输入登录密码：</div>
          <a-input-password
            :style="{ width: '320px', margin: '10px 0' }"
            :default-value="iptValueTwo"
            placeholder="请输入登录密码"
            :invisible-button="false"
          />
          <div class="container-header-switchOn-modalOff-footer">
            {{ iptPromptingMessageTwo }}
          </div>
        </div>
      </a-modal>
    </div>

    <div class="container-main" v-show="isShow">
      <a-row :gutter="10">
        <a-col
          :span="6"
          v-for="(item, index) in dataList"
          :key="index"
          @click="cardClick(index)"
        >
          <a-card :header-style="item.headerStyle" :body-style="item.bodyStyle">
            <template #title>
              <a-checkbox :model-value="checkBox"></a-checkbox>
              {{ item.title }}
              <span class="container-main-detxails">详情</span>
              <span class="container-main-onlineState">{{
                item.CommunicationStatus
              }}</span>
            </template>
            <a-row>
              <a-col :span="8" class="container-main-body-left">
                <img src="@/assets/MicroBreakerView/MicroBreaker-close.png" />
                <div :style="item.ImgBtnStyle">{{ item.GateState }}</div>
              </a-col>
              <a-col :span="16">
                <div class="container-main-body-right">
                  <div>
                    <span class="container-main-body-right-type">{{
                      item.deviceType
                    }}</span>
                    <span class="container-main-body-right-value">{{
                      item.deviceTypeValue
                    }}</span>
                  </div>
                  <div>
                    <span class="container-main-body-right-type">{{
                      item.temperature
                    }}</span>
                    <span class="container-main-body-right-value">{{
                      item.temperatureValue
                    }}</span>
                  </div>
                  <div>
                    <span class="container-main-body-right-type">{{
                      item.drainCurrent
                    }}</span>
                    <span class="container-main-body-right-value"
                      >{{ item.drainCurrentValue }}{{ list.MA }}</span
                    >
                  </div>
                  <div>
                    <span class="container-main-body-right-type">{{
                      item.electricCurrent
                    }}</span>
                    <span class="container-main-body-right-value">{{
                      item.electricCurrentValue
                    }}</span>
                  </div>
                  <div>
                    <span class="container-main-body-right-type">{{ item.voltage }}</span>
                    <span class="container-main-body-right-value">{{
                      item.voltageValue
                    }}</span>
                  </div>
                  <div>
                    <span class="container-main-body-right-type">{{
                      item.activePower
                    }}</span>
                    <span class="container-main-body-right-value">{{
                      item.activePowerValue
                    }}</span>
                  </div>
                  <div>
                    <span class="container-main-body-right-type">{{
                      item.PowerFactor
                    }}</span>
                    <span class="container-main-body-right-value">{{
                      item.PowerFactorValue
                    }}</span>
                  </div>
                  <div>
                    <span class="container-main-body-right-type">{{
                      item.ElectricityConsumptionToday
                    }}</span>
                    <span class="container-main-body-right-value">{{
                      item.ElectricityConsumptionTodayValue
                    }}</span>
                  </div>
                </div>
              </a-col>
            </a-row>
            <div class="container-main-footer">{{ item.footer }}</div>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <div class="container-table" v-show="isShowTwo">
      <a-table
        :columns="columns"
        :data="data"
        :pagination="pagination"
        :row-selection="rowSelection"
        :bordered="{ wrapper: true, cell: true }"
      />
      <a-pagination
        class="container-table-pagination"
        :page-size="pageSize"
        :total="data.length"
        show-total
        show-page-size
        @page-size-change="pagChange"
      />
    </div>
  </div>

  <div
    class="content"
    v-show="isShowAllTwo"
    v-for="(content, contentIndex) in dataList"
    :key="contentIndex"
  >
    <div class="content-header">
      <a-select :style="{ width: '320px' }" allow-clear placeholder="Please select ...">
        <a-option>Beijing</a-option>
        <a-option>Shanghai</a-option>
      </a-select>
      <a-breadcrumb>
        <a-breadcrumb-item>
          <template #separator>
            <icon-right />
          </template>
          <a-link> 嘉德广场 </a-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <template #separator>
            <icon-right />
          </template>
          <a-link> 配电箱 </a-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item>断路器1</a-breadcrumb-item>
      </a-breadcrumb>
      <span class="content-header-right">
        <a-popover position="br">
          <icon-info-circle-fill />
          <template #content>
            <div>
              <p>Step1、请在"站点管理->监控设备"中配置变压器信息：</p>
              <div>1、设备类型：选择或输入各类变压器</div>
              <div>2、额定容量：输入额定电压和额定电流</div>
              <div>
                3、变压器图片：请在"设备管理->设备档案"中配置变压器图片，且监控设备处选择关联的监控设备
              </div>
              <p>Step2、请在"站点管理->变量管理"中配置以下变量属性的变量：</p>
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
          </template>
        </a-popover>
      </span>
    </div>
    <div class="content-main">
      <a-card class="content-main-firstCard">
        <a-row>
          <a-col :span="3" class="content-main-firstCard-left">
            <img :src="content.circuitBreaker" class="content-main-firstCard-left-img" />
          </a-col>
          <a-col :span="4" class="content-main-firstCard-left2">
            <div class="content-main-firstCard-left2-title">
              {{ content.title }}
              <span :style="content.GateStateStyle">{{ content.GateState }}</span>
            </div>
            <div class="content-main-firstCard-left2-body">
              <span class="">{{ content.deviceType }}</span>
              {{ content.deviceTypeValue }}
            </div>
            <div class="content-main-firstCard-left2-body">
              <span>通讯状态： </span>{{ content.CommunicationStatus }}
            </div>
            <div class="content-main-firstCard-left2-body">
              <span>{{ content.footer }}</span>
            </div>
          </a-col>
          <a-col :span="15"></a-col>
          <a-col :span="2" style="border-left: 1px solid white; height: 120px">
            <a-button
              style="margin: 20px 0 20px 10px"
              @click="handleClick"
              class="container-header-switchOn"
            >
              <template #icon> <icon-shrink /> </template>
              分闸
            </a-button>
            <a-button @click="handleClickTwo" class="container-header-switchOff">
              <template #icon><icon-expand /></template>合闸
            </a-button>
          </a-col>
        </a-row>
      </a-card>
      <a-row :gutter="10" class="content-main-second">
        <a-col :span="8">
          <a-card class="content-main-second-card">
            <template #title>
              <h3>实时数据</h3>
            </template>
            <a-row>
              <a-col
                :span="12"
                v-for="(realTimeData, DataIndex) in realTimeDataList"
                :key="DataIndex"
              >
                <div class="content-main-second-card-type">
                  {{ realTimeData.type }}
                </div>
                <div class="content-main-second-card-value">
                  {{ realTimeData.value }}
                </div>
              </a-col>
            </a-row>
            <!--  -->
          </a-card>
        </a-col>
        <a-col :span="16">
          <a-card style="height: 400px; width: 100%">
            <template #title>
              <span> 历史数据 </span>
              <span style="float: right">
                <a-radio-group default-value="1">
                  <a-radio value="1">
                    <template #radio="{ checked }">
                      <a-tag :checked="checked" checkable>日</a-tag>
                    </template>
                  </a-radio>
                  <a-radio value="2">
                    <template #radio="{ checked }">
                      <a-tag :checked="checked" checkable>月</a-tag>
                    </template>
                  </a-radio>
                  <a-radio value="3">
                    <template #radio="{ checked }">
                      <a-tag :checked="checked" checkable>年</a-tag>
                    </template>
                  </a-radio>
                </a-radio-group>
                日期：<a-date-picker style="width: 200px" />
                <a-button type="primary">
                  <template #icon>
                    <icon-search />
                  </template>
                  <!-- Use the default slot to avoid extra spaces -->
                  <template #default>查找</template>
                </a-button>
              </span>
            </template>

            <a-tabs default-active-key="1">
              <a-tab-pane
                :title="realTimeData.type"
                v-for="(realTimeData, DataIndex) in realTimeDataList"
                :key="DataIndex"
              >
              </a-tab-pane>
            </a-tabs>
            <div id="historyData"></div>
          </a-card>
        </a-col>
      </a-row>

      <a-row :gutter="10" style="margin-top: 20px">
        <a-col :span="8">
          <a-card title="控制记录" style="height: 400px; padding: 10px">
            <a-table
              :columns="ControlRecord"
              :data="ControlRecordData"
              :bordered="{ wrapper: true, cell: true }"
            >
            </a-table>
          </a-card>
        </a-col>
        <a-col :span="16">
          <a-card title="告警统计" style="height: 400px; padding: 10px">
            <a-row style="margin-top: 20px">
              <a-col :span="12">
                <div style="display: flex; justify-content: space-evenly">
                  <a-card style="width: 10vw">
                    <div
                      style="
                        padding: 10px 16px;
                        background-color: aqua;
                        line-height: 20px;
                      "
                    >
                      <div>今日警告值</div>
                      <div>{{ WarningToday }}</div>
                    </div>
                  </a-card>
                  <a-card style="width: 10vw">
                    <div
                      style="
                        padding: 10px 16px;
                        background-color: aqua;
                        margin-left: 20px;
                        line-height: 20px;
                      "
                    >
                      <div>本月警告数</div>
                      <div>{{ WarningMonth }}</div>
                    </div>
                  </a-card>
                </div>
                <div id="wringEcharts" style="margin: 0 auto"></div>
              </a-col>
              <a-col :span="12">
                <a-table :columns="AlarmStatistics" :data="AlarmStatisticsData"></a-table>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { useUserDataList } from "@/store";
import * as echarts from "echarts";
import circuitBreakerClose from "@/assets/MicroBreakerView/MicroBreaker-close.png";
import circuitBreakerOpen from "@/assets/MicroBreakerView/MicroBreaker-open.png";

const list = useUserDataList();
// 分页
const pagination = ref({ pageSize: 10 });
// 表头全选
const checkBox = ref(false);
// modal 里的值
const visible = ref(false);
const visibleTwo = ref(false);
const iptValue = ref("");
const iptValueTwo = ref("");
const iptPromptingMessage = ref("");
const iptPromptingMessageTwo = ref("");
// 切换页面
const isShowAll = ref(true);
const isShowAllTwo = ref(false);
// 表格平铺切换
const isShow = ref(true);
const isShowTwo = ref(false);
// 表格全选
const rowSelection = reactive({
  type: "checkbox",
  showCheckedAll: true,
  onlyCurrent: false,
});
// 单选按钮
const radioChange = () => {
  isShow.value = !isShow.value;
  isShowTwo.value = !isShowTwo.value;
};
// 分页
const pagChange = (item) => {
  console.log(item);
  pagination.value.pageSize = item;
};
// 首个modal
const handleClick = () => {
  visible.value = true;
};

const beforeOk = () => {
  if (iptValue.value !== "123456") {
    iptPromptingMessage.value = "设备不能为空";
  }
  return false;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  iptValue.value = "";
  iptPromptingMessage.value = "";
  visible.value = false;
};
// 第二个modal
const handleClickTwo = () => {
  visibleTwo.value = true;
};
const beforeOkTwo = () => {
  if (iptValueTwo.value !== "123456") {
    iptPromptingMessageTwo.value = "设备不能为空";
  }
  return false;
};
const handleOkTwo = () => {
  visibleTwo.value = false;
};
const handleCancelTwo = () => {
  visibleTwo.value = false;
};
// card值
const cardClick = (index) => {
  console.log(index);
  isShowAll.value = false;
  isShowAllTwo.value = true;
};
// 表头
const handleChange = () => {
  checkBox.value = !checkBox.value;
  console.log("改变");
};
const dataList = ref([
  {
    title: "断路器1",
    CommunicationStatus: "离线",
    GateState: "合闸",
    GateStateStyle: "background-color: #e00202;padding: 6px 8px;font-size: 14px;",
    circuitBreaker: circuitBreakerClose,
    headerStyle: "background-color:#e00202; ",
    bodyStyle: "border: 1px solid #e00202;border-top: none;",
    ImgBtnStyle:
      " background-color: #e00202;margin-top: 32px;font-size: 12px;width: 40px;height: 32px;line-height: 32px;text-align: center;",
    footer: "安装位置: 1#配电箱",
    deviceType: "设备类型：",
    deviceTypeValue: "断路器3p",
    drainCurrent: "漏电流：",
    drainCurrentValue: "1.5",
    temperature: "温度：",
    temperatureValue: "12",
    electricCurrent: "电流：",
    electricCurrentValue: "24.06A/23.39A/25.05A",
    voltage: "电压：",
    voltageValue: "228V/228V/228V",
    activePower: "有功功率：",
    activePowerValue: "602.25kW",
    PowerFactor: "功率因数：",
    PowerFactorValue: "0.9",
    ElectricityConsumptionToday: "今日用电：",
    ElectricityConsumptionTodayValue: "331.14kWh",
  },
  {
    title: "断路器3",
    headerStyle: "background-color:#08b762; ",
    CommunicationStatus: "在线",
    GateState: "分闸",
    GateStateStyle: "background-color: #08b762;padding: 6px 8px;",
    circuitBreaker: circuitBreakerOpen,
    bodyStyle: "border: 1px solid #08b762;border-top: none;",
    ImgBtnStyle:
      " background-color: #08b762;margin-top: 32px;font-size: 12px;width: 40px;height: 32px;line-height: 32px;text-align: center;",
    footer: "安装位置： 3#配电箱",
    deviceType: "设备类型：",
    deviceTypeValue: "断路器3p",
    drainCurrent: "漏电流：",
    drainCurrentValue: "1.5",
    temperature: "温度：",
    temperatureValue: "26℃ / 28℃ / 27.5℃",
    electricCurrent: "电流：",
    electricCurrentValue: "24.06A/23.39A/25.05A",
    voltage: "电压：",
    voltageValue: "228V/228V/228V",
    activePower: "有功功率：",
    activePowerValue: "602.25kW",
    PowerFactor: "功率因数：",
    PowerFactorValue: "0.9",
    ElectricityConsumptionToday: "今日用电：",
    ElectricityConsumptionTodayValue: "331.14kWh",
  },
]);
// 表单值
const columns = [
  {
    title: "名称",
    dataIndex: "name",
  },
  {
    title: "安装位置",
    dataIndex: "salary",
  },
  {
    title: "设备类型",
    dataIndex: "address",
  },
  {
    title: "状态",
    children: [
      {
        title: "通讯状态",
        dataIndex: "CommunicationStatus",
      },
      {
        title: "开关状态",
        dataIndex: "SwitchState",
      },
    ],
    dataIndex: "email",
  },
  {
    title: "漏电流(mA)",
    dataIndex: "drainCurrent",
  },
  {
    title: "温度",
    children: [
      {
        title: "A相",
        dataIndex: "APhase",
      },
      {
        title: "B相",
        dataIndex: "CPhase",
      },
      {
        title: "C相",
        dataIndex: "CPhase",
      },
      {
        title: "N",
        dataIndex: "N",
      },
    ],
  },
  {
    title: "电流(A)",
    children: [
      {
        title: "A相电流",
        dataIndex: "APhaseCurrent",
      },
      {
        title: "B相电流",
        dataIndex: "BPhaseCurrent",
      },
      {
        title: "C相电流",
        dataIndex: "CPhaseCurrent",
      },
    ],
  },
  {
    title: "电压(V)",
    children: [
      {
        title: "A相电压",
        dataIndex: "APhaseVoltage",
      },
      {
        title: "B相电压",
        dataIndex: "BPhaseVoltage",
      },
      {
        title: "C相电压",
        dataIndex: "CPhaseVoltage",
      },
    ],
  },
  {
    title: "有功功率(kW)",
    dataIndex: "activePower",
  },
  {
    title: "功率因数",
    dataIndex: "PowerFactor",
  },
  {
    title: "今日用电(kWh)",
    dataIndex: "ElectricityConsumptionToday",
  },
];
const data = reactive([
  {
    key: "1",
    name: "Jane Doe",
    salary: 23000,
    address: "32 Park Road, London",
    email: "jane.doe@example.com",
    CommunicationStatus: "12",
    SwitchState: "43231",
    drainCurrent: "5432",
    APhase: "5643",
    BPhase: "234",
    CPhase: "234",
    N: "SDG",
    APhaseCurrent: "T453T",
    BPhaseCurrent: "543TF4E",
    CPhaseCurrent: "4567",
    APhaseVoltage: "63423",
    BPhaseVoltage: "4325",
    CPhaseVoltage: "3215",
    activePower: "4234",
    PowerFactor: "53423",
    ElectricityConsumptionToday: "534",
  },
  {
    key: "2",
    name: "Alisa Ross",
    salary: 25000,
    address: "35 Park Road, London",
    email: "alisa.ross@example.com",
  },
  {
    key: "3",
    name: "Kevin Sandra",
    salary: 22000,
    address: "31 Park Road, London",
    email: "kevin.sandra@example.com",
  },
  {
    key: "4",
    name: "Ed Hellen",
    salary: 17000,
    address: "42 Park Road, London",
    email: "ed.hellen@example.com",
  },
  {
    key: "5",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "6",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "7",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "8",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "9",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "10",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "11",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "12",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "13",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
  {
    key: "14",
    name: "William Smith",
    salary: 27000,
    address: "62 Park Road, London",
    email: "william.smith@example.com",
  },
]);

const realTimeDataList = [
  {
    type: "漏电流 (mA)",
    value: "1.5",
  },
  {
    type: "电流 (A)",
    value: "21.09 / 20.45 / 21.87",
  },
  {
    type: "电压 (V)",
    value: "228.06 / 228.06 / 228.06",
  },
  {
    type: "线电压",
    value: "",
  },
  {
    type: "有功功率 (kW)",
    value: "527.25",
  },
  {
    type: "无功功率",
    value: "",
  },
  {
    type: "视在功率",
    value: "",
  },
  {
    type: "功率因数",
    value: "0.82",
  },
  {
    type: "今日用电 (kWh)",
    value: "525.63",
  },
];

// 历史数据

setTimeout(() => {
  const history = echarts.init(document.getElementById("historyData"), null, {
    height: 280,
  });
  const wringEcharts = echarts.init(document.getElementById("wringEcharts"), null, {
    height: 280,
  });
  // history.clear();
  const historyDataList = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
      },
      {
        data: [220, 332, 201, 434, 290, 330, 320],
        type: "line",
        areaStyle: {},
      },
    ],
  };

  const wringEchartsList = {
    series: [
      {
        type: "gauge",
        progress: {
          show: true,
          width: 18,
        },
        axisLine: {
          lineStyle: {
            width: 18,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          length: 15,
          lineStyle: {
            width: 2,
            color: "#999",
          },
        },
        axisLabel: {
          distance: 25,
          color: "#999",
          fontSize: 12,
        },
        anchor: {
          show: true,
          showAbove: true,
          size: 25,
          itemStyle: {
            borderWidth: 10,
          },
        },
        title: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          fontSize: 20,
          offsetCenter: [0, "70%"],
        },
        data: [
          {
            value: 70,
          },
        ],
      },
    ],
  };
  history.setOption(historyDataList);
  wringEcharts.setOption(wringEchartsList);
}, 100);
// 控制记录
const ControlRecord = ref([
  {
    title: "任务名称",
    dataIndex: "TaskName",
  },
  {
    title: "设置值",
    dataIndex: "SetValue",
  },
  {
    title: "执行时间",
    dataIndex: "executionTime",
  },
  {
    title: "执行结果",
    dataIndex: "ExecutionResult",
  },
]);
const ControlRecordData = ref([]);

const AlarmStatistics = ref([
  {
    title: "时间",
    dataIndex: "timing",
  },
  {
    title: "事件",
    dataIndex: "event",
  },
  {
    title: "状态",
    dataIndex: "condition",
  },
]);

const AlarmStatisticsData = ref([]);

const WarningToday = ref(0);
const WarningMonth = ref(0);
// 告警统计
</script>

<style lang="less" scoped>
* {
  color: white;
}
.container {
  padding: 0.5em;
  &-header {
    &-switchOn {
      background-color: #08b762;
      padding: 10px 15px;
      margin-left: 10px;
      &-modalOn {
        font-size: 12px;
        &-btn {
          padding: 8px;
          background-color: #08b762;
          font-size: 14px;
        }
        &-passWord {
          margin: 10px 0;
        }
        &-footer {
          color: red;
          height: 20px;
        }
      }
      &-modalOff {
        font-size: 12px;
        &-btn {
          padding: 8px;
          background-color: #e00202;
        }
        &-passWord {
          margin: 10px 0;
        }
        &-footer {
          color: red;
          height: 20px;
        }
      }
    }
    &-switchOff {
      background-color: #e00202;
      padding: 10px 15px;
      margin-left: 10px;
    }
  }
  &-main {
    margin-top: 20px;
    &-details {
      border-bottom: 1px solid white;
    }
    &-onlineState {
      float: right;
    }
    &-body {
      &-left {
        text-align: -webkit-center;
        padding: 20px 30px;
      }
      &-right {
        line-height: 30px;
        font-size: 12px;
        &-type {
          color: #7e93a6;
        }
      }
    }
    &-footer {
      margin: 20px 0 10px 10px;
      color: #7e93a6;
      font-size: 12px;
    }
  }
  &-table {
    margin-top: 20px;
    &-pagination {
      float: right;
      margin: 20px;
      padding-bottom: 20px;
    }
  }
}
// 另一个
.content {
  padding: 10px;
  &-header {
    &-right {
      float: right;
    }
  }
  &-main {
    &-firstCard {
      height: 120px;
      margin: 20px 0 10px;
      &-left {
        text-align: center;
        &-img {
          vertical-align: middle;
          margin-top: 25px;
        }
      }
      &-left2 {
        &-title {
          font-size: 16px;
          margin-top: 12px;
        }
        &-body {
          font-size: 14px;
          margin-top: 10px;
        }
      }
    }
    &-second {
      &-card {
        height: 400px;
        width: 100%;

        &-type {
          padding: 20px 30px 6px 30px;
          color: #7e93a6;
        }
        &-value {
          padding: 0 0 0 30px;
          font-size: 16px;
        }
      }
    }
  }
}
// 选择框
:deep(.arco-checkbox-icon) {
  background-color: unset !important;
  border: 1px solid white !important;
}
// card 边框
.arco-card-bordered {
  border: unset !important;
}
// 单选框
.arco-tag-size-medium {
  padding: 14px;
}
.arco-tag-checked {
  background-color: #6c7fff;
}
.arco-tag-size-medium:hover {
  color: #6c7fff;
  background-color: #1b2834;
}
.arco-tag-checkable.arco-tag-checked:hover {
  color: #1b2834;
  background-color: #6c7fff;
}

// 分页页码
:deep(.arco-table-pagination) {
  display: none !important;
}

// card
:deep(.arco-card-body) {
  padding: 0 !important;
}
#historyData {
  width: 100%;
}
</style>
