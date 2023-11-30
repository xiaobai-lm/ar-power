<template>
  <div class="container">
    <div class="container-content">
      <a-row>
        <a-col :span="5">
          <div
            style="
              width: 100%;
              height: 214px;
              background-color: #1b2834;
              font-size: 16px;
              text-align: center;
              position: relative;
            "
          >
            <div style="height: 36px; line-height: 36px">机体信息</div>
            <div style="margin: 6px 0">演示机器人</div>
            <div style="display: flex; font-size: 14px; margin-top: 20px">
              <div style="flex: 1">
                <span>机器人</span>
                <span
                  style="
                    width: 14px;
                    height: 14px;
                    background-color: #7e93a6;
                    border-radius: 10px;
                    display: inline-block;
                  "
                ></span>
                <span>离线</span>
              </div>
              <div style="flex: 1">
                <span>可见光</span>
                <span
                  style="
                    width: 14px;
                    height: 14px;
                    background-color: #00a854;
                    border-radius: 10px;
                    display: inline-block;
                  "
                ></span>
                <span>在线</span>
              </div>
            </div>
            <div style="display: flex; text-align: center; margin-top: 10px">
              <div style="flex: 1; border-right: 2px solid #394c5e">
                <div style="color: #00a854; font-size: 26px">-</div>
                <icon-more />
                <span>水平位置</span>
              </div>
              <div style="flex: 1">
                <div style="color: #00a854; font-size: 26px">-</div>
                <icon-more-vertical />
                <span>垂直位置</span>
              </div>
            </div>
            <div
              style="
                background-color: #24323d;
                position: absolute;
                bottom: 0;
                display: flex;
              "
            >
              <div></div>
              <div>空闲</div>
              <div>上一次巡检时间: -</div>
            </div>
          </div>
        </a-col>
        <a-col :span="18">
          <a-col :span="18"> </a-col>
          <a-col :span="6"> </a-col>
          <a-col :span="24"></a-col>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
</script>

<style lang="less" scoped>
  * {
    color: white;
  }
  .container {
  }
</style>
