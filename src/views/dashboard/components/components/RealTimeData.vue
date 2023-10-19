<template>
  <div class="container">
    <div class="container-change">
      <a-radio-group :default-value="value" @change="changeClick">
        <a-radio v-for="(radio, index) in radioList" :key="index" :value="radio.value">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>{{ radio.title }}</a-tag>
          </template>
        </a-radio>
        <!-- <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>状态量</a-tag>
          </template>
        </a-radio> -->
      </a-radio-group>
      <a-button type="text" style="float: right">
        <template #icon>
          <icon-sync />
        </template>
      </a-button>
    </div>

    <div v-show="imitateIsShow" class="container-imitate">
      <a-row>
        <a-col v-for="(imitate, index) in dataList" :key="index" :span="12">
          <div class="container-imitate-div">
            <div class="container-imitate-div-left">{{ imitate.title }}</div>
            <div class="container-imitate-div-right">{{ imitate.content }}</div>
          </div>
        </a-col>
      </a-row>
    </div>

    <div v-show="conditionIsShow" class="container-condition">
      <a-row>
        <a-col :span="8">
          <a-row>
            <a-col
              v-for="(condition, index) in conditionDataList"
              :key="index"
              :span="24"
            >
              <div class="container-condition-div">
                <div class="container-condition-div-left">{{ condition.title }}</div>
                <div
                  class="container-condition-div-right"
                  :style="{ background: condition.bgColor }"
                >
                  {{ condition.content }}
                </div>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const imitateIsShow = ref(true);
const conditionIsShow = ref(false);
const value = ref(1);
const radioList = ref([
  {
    title: "模拟量",
    value: 1,
  },
  {
    title: "状态量",
    value: 2,
  },
]);
const changeClick = (index) => {
  if (index === 1) {
    imitateIsShow.value = true;
    conditionIsShow.value = false;
  } else if (index === 2) {
    imitateIsShow.value = false;
    conditionIsShow.value = true;
  }
};

const dataList = ref([
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "A相电压二次谐波有效值:",
    content: "10.3  kV",
  },
  {
    title: "BC线电压:",
    content: "10.3  kV",
  },
  {
    title: "B相电压二次谐波有效值:",
    content: "10.3  kV",
  },
  {
    title: "CA线电压:",
    content: "10.3  kV",
  },
  {
    title: "C相电压二次谐波有效值:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
  {
    title: "AB线电压:",
    content: "10.3  kV",
  },
]);

const conditionDataList = ref([
  {
    title: "开关位置:",
    content: "合",
    bgColor: "#e30104",
  },
  {
    title: "隔离刀闸:",
    content: "分",
    bgColor: "#06b865",
  },
  {
    title: "地刀:",
    content: "分",
    bgColor: "#06b865",
  },
  {
    title: "告警:",
    content: "无告警",
    bgColor: "#06b865",
  },
  {
    title: "故障:",
    content: "无故障",
    bgColor: "#06b865",
  },
  {
    title: "通讯状态:",
    content: "在线",
    bgColor: "#06b865",
  },
  {
    title: "开关位置控制:",
    content: "",
    bgColor: "",
  },
]);
</script>

<style lang="less" scoped>
.container {
  padding: 10px;
  &-imitate {
    &-div {
      display: flex;
      color: white;
      margin-top: 10px;
      &-left {
        width: 80%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: right;
        background-color: #33414c;
        padding-right: 10px;
      }
      &-right {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        margin-left: 20px;
      }
    }
  }
  &-condition {
    &-div {
      display: flex;
      color: white;
      margin-top: 10px;
      &-left {
        width: 70%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        text-align: right;
        background-color: #33414c;
        padding-right: 10px;
      }
      &-right {
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        margin-left: 20px;
        padding: 0 10px;
        border-radius: 5px;
      }
    }
  }
}

.arco-tag-checked {
  color: white !important;
  background-color: #6d80fb;
}
.arco-tag-checkable.arco-tag-checked:hover {
  background-color: #6d80fb !important;
}
</style>
