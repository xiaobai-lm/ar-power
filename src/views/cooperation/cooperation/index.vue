<script setup lang="ts">
  import Echarts from './components/Echarts.vue';
</script>

<template
  ><div class="all"
    ><div class="content">
      <a-tabs
        :justify="true"
        class="change"
        default-active-key="1"
        type="card"
        style="width: 1285px"
      >
        <a-tab-pane key="1" title="用能"
          ><div style="margin-left: 15px"
            ><div
              ><a-space>
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
                <a-button>导出</a-button>
                <a-radio-group
                  default-value="Beijing"
                  type="button"
                  size="large"
                  style="margin-left: 530px"
                >
                  <a-radio value="Beijing">总耗能</a-radio>
                  <a-radio value="Shanghai">电</a-radio>
                  <a-radio value="Shanghai">气</a-radio>
                  <a-radio value="Shanghai">水</a-radio>
                </a-radio-group>
              </a-space>
            </div>
            <Echarts /></div
        ></a-tab-pane>
        <a-tab-pane key="2" title="产品"
          ><div style="margin-left: 15px"
            ><div
              ><a-space>
                <span>选择产品:</span>
                <a-select>
                  <option></option>
                </a-select>
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
                <a-button>导出</a-button>
                <a-radio-group
                  default-value="Beijing"
                  type="button"
                  size="large"
                  style="margin-left: 280px"
                >
                  <a-radio value="Beijing">总耗能</a-radio>
                  <a-radio value="Shanghai">电</a-radio>
                  <a-radio value="Shanghai">水</a-radio>
                </a-radio-group>
              </a-space>
            </div>
            <Echarts
          /></div> </a-tab-pane
        ><a-tab-pane key="3" title="工序"
          ><div style="margin-left: 15px"
            ><div
              ><a-space>
                <span>选择工序:</span>
                <a-select>
                  <option></option>
                </a-select>
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
                <a-button>导出</a-button>
                <a-radio-group
                  default-value="Beijing"
                  type="button"
                  size="large"
                  style="margin-left: 330px"
                >
                  <a-radio value="Beijing">总耗能</a-radio>
                  <a-radio value="Shanghai">电</a-radio>
                </a-radio-group>
              </a-space>
            </div>
            <Echarts /></div
        ></a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<style scoped lang="less">
  .all {
    background-color: #232324;
    width: 97%;
    //height: 1000px;
    margin: 10px 20px;
    //border: #1dfffc solid;
    .content {
      width: 97%;
      //margin: 10px 20px;
      //border: #72de61 solid;
      span {
        color: #b2afaf;
      }
    }
  }
</style>
