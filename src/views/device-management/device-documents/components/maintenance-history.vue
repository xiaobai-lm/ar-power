<script setup lang="ts">
  import { ref, reactive, defineProps } from 'vue';
  import Detail from './Detail.vue';

  const x = ref('1');
  const props = defineProps(['list']);

  const tab = ref(true);
  const colorChange: any = {
    '1': '#2663b4',
    '2': '#26b46d',
    '3': '#1382c7',
    '4': '#0a489a',
    '5': '#d3082a',
    '6': '#9d3407',
  };

  const tabDetail = (i: any) => {
    tab.value = !tab.value;
    x.value = colorChange[i];
  };
</script>

<template>
  <div class="history">
    <!--    运维历史主界面-->
    <div v-if="tab"
      ><div
        ><a-range-picker style="width: 250px" /><a-button type="primary"
          >查询</a-button
        ><a-space style="position: absolute; right: 0"
          ><a-button
            v-for="i in list"
            :key="i"
            :style="`backgroundColor:${colorChange[i]}`"
            >{{ i }}</a-button
          ></a-space
        ></div
      >
      <!--      列表-->
      <div
        ><a-list>
          <a-list-item v-for="i in list" :key="i">
            <a-list-item-meta
              title="2023-06-05 11:28"
              description="日常巡视高压房，仪表工作状态等"
            >
              <template #avatar>
                <a-avatar
                  shape="square"
                  :style="`backgroundColor:${colorChange[i]}`"
                >
                  <div :style="`background-color:${i};height:100%`">{{
                    i
                  }}</div>
                </a-avatar>
              </template>
            </a-list-item-meta>
            <template #actions>
              <a-button type="primary">待接单</a-button>
              <a-button type="text" @click="tabDetail(i)">详情</a-button>
            </template>
          </a-list-item>
        </a-list></div
      ></div
    >
    <!--    工单详情-->
    <div v-else class="detail"
      ><div
        ><a-space
          ><a-divider
            direction="vertical"
            style="border: #5353ea solid 2px; height: 20px"
          /><span class="size color">工单详情</span
          ><a-button @click="tab = !tab">返回</a-button></a-space
        ></div
      >
      <Detail :x="x" /> </div
  ></div>
</template>

<style scoped lang="less">
  .history {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    position: relative;
    background-color: #232323;
    .content {
      margin-left: 40px;
      margin-top: 20px;
      display: flex;
      position: relative;
      .icon {
        width: 150px;
        height: 150px;
        //background-color: #08b762;
      }
      .right {
        margin-left: 20px;
      }
    }
    .detail {
      width: 100%;
      height: 600px;
    }
    .content1 {
      margin-left: 40px;
      margin-top: 20px;
    }
    .person {
      width: 200px;
      height: 30px;
      background-color: #011010;
      border: #a9a7a7 solid 1px;
      line-height: 30px;
      margin: 20px 30px;
    }
  }
  .size {
    font-size: large;
  }
  .color {
    color: white;
  }
</style>
