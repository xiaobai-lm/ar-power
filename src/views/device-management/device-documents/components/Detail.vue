<script setup lang="ts">
  import DeviceInformation from '@/views/device-management/device-documents/components/DeviceInformation.vue';
  import { reactive, ref, defineProps } from 'vue';

  const props = defineProps(['x']);
  const visible = ref(false);
  const form = reactive({
    name: '',
    post: '',
  });

  const handleClick = () => {
    visible.value = true;
  };
  const handleBeforeOk = () => {
    console.log(form);
  };
  const handleCancel = () => {
    visible.value = false;
  };
</script>

<template>
  <div
    ><div class="content"
      ><div class="icon" :style="`background-color:${x}`"></div
      ><div class="right"
        ><div
          ><a-space
            ><span>工单来源：报修</span
            ><span>编号：TSRP5_20230605112851183</span></a-space
          ></div
        ><div style="font-size: 26px; margin-top: 20px"
          ><span class="color">日常巡视高压房，仪表工作状态等</span></div
        ><div style="position: absolute; bottom: 0"
          ><a-space
            ><span class="color size">状态：</span
            ><span class="size" style="color: #0be87e">待接单</span
            ><a-alert type="error" banner>超时</a-alert></a-space
          ></div
        ></div
      ></div
    >
    <!--  备注部分  -->
    <div class="content1"
      ><div
        ><a-space size="large"
          ><span>提单人： 彭培富/1</span><span>创建时间：2023-06-05 11:28</span
          ><span>期望完成时间：2023-06-06 11:28</span></a-space
        ></div
      ><div style="margin-top: 10px"
        ><span>备注：需上传现场巡视过程照片，仪表状态照片</span></div
      ></div
    ><a-divider style="border: #5353ea solid" /><div
      ><a-row
        ><a-col :span="16" style="margin-left: 40px"
          ><div class="size color">当前处理人</div
          ><div class="person">chenGeng15601658411</div>
          <div
            ><spna>设备</spna
            ><div
              ><a-row
                ><a-col :span="8"
                  ><a-button type="text" @click="handleClick"
                    >G01高压进线柜</a-button
                  ></a-col
                ><a-col :span="4"
                  ><a-button type="text" @click="handleClick"
                    >G01高压进线柜</a-button
                  ></a-col
                ></a-row
              ></div
            ><div
              ><a-row
                ><a-col :span="8"
                  ><a-button type="text" @click="handleClick"
                    >G01高压进线柜</a-button
                  ></a-col
                ><a-col :span="4"
                  ><a-button type="text" @click="handleClick"
                    >G01高压进线柜</a-button
                  ></a-col
                ></a-row
              ></div
            ><a-modal
              v-model:visible="visible"
              title="设备详情"
              width="1050px"
              @cancel="handleCancel"
              @ok="handleBeforeOk"
              ><div style="background-color: #232323"
                ><DeviceInformation
              /></div> </a-modal></div></a-col
        ><a-col :span="6"
          ><span>流程记录</span
          ><a-steps direction="vertical">
            <a-step status="finish"
              ><div>s</div><div>2</div><a-image></a-image
            ></a-step>
            <a-step status="finish">Processing</a-step>
            <a-step>Pending</a-step>
          </a-steps></a-col
        ></a-row
      ></div
    ></div
  >
</template>

<style scoped lang="less">
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

  .size {
    font-size: large;
  }
  .color {
    color: white;
  }
</style>
