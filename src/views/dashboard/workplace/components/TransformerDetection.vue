<template>
  <div class="container" v-if="isShow ? true : false">
    <div class="container-header">
      <a-button style="margin-right: 20px" type="primary">
        <template #icon> <icon-paste /> </template>
        平铺
      </a-button>
      <a-button type="primary">
        <template #icon> <icon-paste /> </template>
        表格
      </a-button>
      <div class="container-header-p1">
        <icon-calendar :style="{ color: '#3d648f' }" />
        变压器台数：{{ dataList.highPressure.length }}
      </div>
      <div class="container-header-p2">
        <icon-nav :style="{ color: '#9d416f' }" />
        总额日当容量：16800kVA
      </div>
      <div class="container-header-p3">轻载：2</div>
    </div>
    <div class="container-container">
      <a-row :gutter="10">
        <a-col
          v-for="(firstItem, index) in dataList.highPressure"
          :key="index"
          :span="5"
          @click="handleClick(firstItem, index)"
        >
          <a-card
            v-for="(item, index) in firstItem"
            :bordered="false"
            :title="item[0].cardName"
            hoverable
            style="border: 1px solid #faad14"
            class="container-container-outCard"
            :key="index"
          >
            <template #extra>
              <a-link> 详情 </a-link>
            </template>
            <a-row>
              <a-col v-for="(list, index2) in item" :key="index2" :span="list.span">
                <div class="container-container-outCard-title">
                  {{ list.title }}
                </div>
                <a-card class="container-container-lineCard" :bordered="false">
                  <div
                    v-for="(lists, index4) in list.children"
                    :key="index4"
                    class="container-container-lineCard-main"
                  >
                    {{ lists.name }}
                    <span style="float: right">{{ lists.value }}</span>
                    <a-divider v-show="lists.isShow" />
                  </div>
                </a-card>
              </a-col>
            </a-row>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
  <div class="body" v-if="isShowTwo ? true : false">
    <TransformerMonitoring />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useUserDataList } from "@/store";
import TransformerMonitoring from "./components/TransformerMonitoring.vue";

const dataList = useUserDataList();

const isShow = ref(true);
const isShowTwo = ref(false);
const handleClick = (firstItem, index) => {
  console.log(index);
  isShow.value = false;
  isShowTwo.value = true;
  dataList.title = firstItem.highPressureList[0].cardName;
  console.log(dataList.title);
};
</script>

<style lang="less" scoped>
* {
  font-size: 12px;
}
.container {
  padding: 10px;
  &-header {
    display: flex;
    &-p1,
    &-p2 {
      margin-left: 20px;
      font-size: 18px;
      line-height: 32px;
      color: white;
    }
    &-p3 {
      color: white;
      position: absolute;
      line-height: 32px;
      right: 20px;
    }
  }
  &-container {
    padding: 20px;
    &-outCard {
      &-title {
        padding: 0 10px;
      }
    }
    &-lineCard {
      margin-bottom: 10px;

      &-main {
        background-color: #33404c;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
      }
    }
  }
}

// divider
.arco-divider-horizontal {
  margin: 2px 0;
}

:deep(.arco-card-header) {
  background-color: #faad14 !important;
}
:deep(.arco-card-body) {
  padding: 5px !important;
}
</style>
