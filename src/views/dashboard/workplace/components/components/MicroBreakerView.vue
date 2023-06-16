<template>
  <div class="container">
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
          <a-checkbox :model-value="checkBox" @change="handleChange" v-show="checkBoxShow"
            >全选</a-checkbox
          >
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
          @click="cardClick"
        >
          <a-card :header-style="item.headerStyle" :body-style="item.bodyStyle">
            <template #title>
              <a-checkbox :model-value="checkBox"></a-checkbox>
              {{ item.title }}
              <span class="container-main-details">详情</span>
              <span class="container-main-onlineState">在线</span>
            </template>
            <a-row>
              <a-col :span="6" class="container-main-body-left">
                <img src="@/assets/MicroBreakerView/MicroBreaker-close.png" />
                <div :style="item.ImgBtnStyle">合闸</div>
              </a-col>
              <a-col :span="18">
                <div
                  v-for="(itemList, index2) in item.children"
                  :key="index2"
                  class="container-main-body-right"
                >
                  <span class="container-main-body-right-type">{{ itemList.type }}</span>
                  <span class="container-main-body-right-value">{{
                    itemList.value
                  }}</span>
                </div>
              </a-col>
            </a-row>
            <div class="container-main-footer">安装位置: {{ item.footer }}</div>
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
        style="float: right; margin: 20px; padding-bottom: 20px"
        :page-size="pageSize"
        :total="data.length"
        show-total
        show-page-size
        @page-size-change="pagChange"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

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
// 表格平铺切换
const isShow = ref(true);
const isShowTwo = ref(false);
// 表格全选
const rowSelection = reactive({
  type: "checkbox",
  showCheckedAll: true,
});
// 单选按钮
const checkBoxShow = ref(true);
const radioChange = () => {
  isShow.value = !isShow.value;
  isShowTwo.value = !isShowTwo.value;
  checkBoxShow.value = !checkBoxShow.value;
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
const cardClick = (item) => {
  console.log(item);
};
// 表头
const handleChange = () => {
  checkBox.value = !checkBox.value;
  rowSelection.onlyCurrent = !rowSelection.onlyCurrent;
  console.log("改变");
};
const dataList = ref([
  {
    title: "断路器1",
    footer: "1#配电箱",
    headerStyle: "background-color:#e00202; ",
    bodyStyle: "border: 1px solid #e00202;border-top: none;",
    ImgBtnStyle:
      " background-color: #e00202;margin-top: 32px;font-size: 12px;width: 40px;height: 32px;line-height: 32px;text-align: center;",
    children: [
      {
        type: "设备类型：",
        value: "断路器3p",
      },
      {
        type: "漏电流：",
        value: "1.5mA",
      },
      {
        type: "温度：",
        value: "",
      },
      {
        type: "电流：",
        value: "24.06A/23.39A/25.05A",
      },
      {
        type: "电压：",
        value: "228V/228V/228V",
      },
      {
        type: "有功功率：",
        value: "602.25kW",
      },
      {
        type: "功率因数：",
        value: "0.9",
      },
      {
        type: "今日用电：",
        value: "331.14kWh",
      },
    ],
  },
  {
    title: "断路器1",
    headerStyle: "background-color:#08b762; ",
    bodyStyle: "border: 1px solid #08b762;border-top: none;",
    ImgBtnStyle:
      " background-color: #08b762;margin-top: 32px;font-size: 12px;width: 40px;height: 32px;line-height: 32px;text-align: center;",
    footer: "1#配电箱",
    children: [
      {
        type: "设备类型：",
        value: "断路器3p",
      },
      {
        type: "漏电流：",
        value: "1.5mA",
      },
      {
        type: "温度：",
        value: "",
      },
      {
        type: "电流：",
        value: "24.06A/23.39A/25.05A",
      },
      {
        type: "电压：",
        value: "228V/228V/228V",
      },
      {
        type: "有功功率：",
        value: "602.25kW",
      },
      {
        type: "功率因数：",
        value: "0.9",
      },
      {
        type: "今日用电：",
        value: "331.14kWh",
      },
    ],
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
]);
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
      }
      &-right {
        line-height: 30px;
        font-size: 12px;
        &-type {
          color: #7e93a6;
        }
        &-value {
          margin-left: 6px;
        }
      }
    }
    &-footer {
      margin-top: 20px;
    }
  }
  &-table {
    margin-top: 20px;
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
</style>
