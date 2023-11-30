<script setup lang="ts">
  import Table from './table.vue';
</script>

<template>
  <div class="setting"
    ><a-tabs>
      <a-tab-pane key="1" title="用能" class="content">
        <a-space>
          <a-radio-group type="button" size="large" default-value="Beijing">
            <a-radio value="Beijing" style="margin-right: 5px">月</a-radio>
            <a-radio value="Shanghai">年</a-radio>
          </a-radio-group>
          <span>时间:</span>
          <a-date-picker />
          <a-button type="primary">查询</a-button>
        </a-space>
        <div><Table /></div></a-tab-pane
      ><a-tab-pane key="2" title="产品" class="tab2">
        <a-layout>
          <a-layout-sider theme="dark" style="height: 620px"
            ><a-input-search style="width: 100%" placeholder="搜索产品" />
            <a-space
              class="wrapper"
              direction="vertical"
              style="margin: 20px 0 0 30px"
            >
              <a-button type="text" long><icon-archive />合成氨</a-button>
              <a-button type="text" long><icon-archive />乙烯</a-button>
              <a-button type="text" long><icon-archive />二氯乙烯</a-button>
              <a-button type="text" long><icon-archive />乙基苯</a-button>
              <a-button type="text" long><icon-archive />苯乙烯</a-button>
              <a-button type="text" long><icon-archive />聚丙烯</a-button>
            </a-space>
          </a-layout-sider>
          <a-layout-content style="margin-left: 10px"
            ><div style="background-color: #232324"
              ><a-space style="margin-top: 10px; margin-left: 10px">
                <a-radio-group
                  type="button"
                  size="large"
                  default-value="Beijing"
                >
                  <a-radio value="Beijing" style="margin-right: 5px"
                    >月</a-radio
                  >
                  <a-radio value="Shanghai">年</a-radio>
                </a-radio-group>
                <span>时间:</span>
                <a-date-picker />
                <a-button type="primary">查询</a-button>
              </a-space>
              <div style="margin-left: 10px; margin-right: 10px"
                ><Table /></div></div
          ></a-layout-content> </a-layout></a-tab-pane
      ><a-tab-pane key="3" title="工序">
        <a-layout>
          <a-layout-sider theme="dark" style="height: 620px"
            ><a-input-search style="width: 100%" placeholder="搜索工序" />
            <a-space
              class="wrapper"
              direction="vertical"
              style="margin: 20px 0 0 30px"
            >
              <a-button type="text" long><icon-archive />烧结</a-button>
              <a-button type="text" long><icon-archive />球团</a-button>
              <a-button type="text" long><icon-archive />高炉</a-button>
              <a-button type="text" long><icon-archive />转炉</a-button>
              <a-button type="text" long><icon-archive />化产</a-button>
            </a-space>
          </a-layout-sider>
          <a-layout-content style="margin-left: 10px"
            ><div style="background-color: #232324"
              ><a-space style="margin-top: 10px; margin-left: 10px">
                <a-radio-group
                  type="button"
                  size="large"
                  default-value="Beijing"
                >
                  <a-radio value="Beijing" style="margin-right: 5px"
                    >月</a-radio
                  >
                  <a-radio value="Shanghai">年</a-radio>
                </a-radio-group>
                <span>时间:</span>
                <a-date-picker />
                <a-button type="primary">查询</a-button>
              </a-space>
              <div style="margin-left: 10px; margin-right: 10px"
                ><Table /></div></div
          ></a-layout-content>
        </a-layout>
      </a-tab-pane> </a-tabs></div
></template>

<style scoped lang="less">
  .setting {
    background-color: #232324;
    width: 97%;
    //height: 1000px;
    margin: 10px 20px;
    //border: #1dfffc solid;
    .content {
      width: 97%;
      margin: 10px 20px;

      //border: #72de61 solid;
    }
    .tab2 {
      background-color: #29292c;
    }
  }
  span {
    color: #b2afaf;
  }
</style>
