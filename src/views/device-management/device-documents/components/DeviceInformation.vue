<script setup lang="ts"></script>

<template>
  <div class="information"
    ><div class="content">
      <div
        ><a-row :gutter="24">
          <a-col :span="18">
            <a-form disabled>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="设备名称" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
              ></a-row>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="设备类型" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="监控设备" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
              ></a-row>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="生产厂家" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="设备型号" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
              ></a-row>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="厂家联系人" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="厂家联系电话" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
              ></a-row>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="投运日期" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="使用寿命" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
              ></a-row>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="上次维修日期" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="保养周期" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
              ></a-row>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="巡检周期" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="设备编号" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
              ></a-row>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="安装位置" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="安装日期" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
              ></a-row>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="额定容量" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="生产时间" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
              ></a-row>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="长度" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="颜色" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
              ></a-row> </a-form
          ></a-col>
          <a-col :span="6"
            ><div>设备照片</div
            ><div
              style="
                width: 220px;
                height: 140px;
                border: #8d8d8d dashed 1px;
                margin: 5px 0;
              "
            ></div
            ><div>设备二维码</div
            ><div
              style="
                width: 220px;
                height: 140px;
                border: #8d8d8d dashed 1px;
                margin: 5px 0;
              "
            ></div
            ><div>摄像头</div
            ><div
              style="
                width: 220px;
                height: 140px;
                border: #8d8d8d dashed 1px;
                margin: 5px 0;
              "
            ></div
          ></a-col> </a-row
      ></div>
      <div style="margin-left: 10px; font-size: medium; color: #c6c8fc"
        ><a-space><icon-bulb /><span>继电保护</span></a-space></div
      ><a-divider style="border: #c6c8fc dashed 1px" /> </div
    ><div
      ><div
        ><a-row
          ><a-col :span="18"
            ><a-form disabled>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="型号" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
                ><a-col :span="12">
                  <a-form-item label="厂家" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col></a-row
              ><a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="额定电流" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col></a-row></a-form></a-col
          ><a-col :span="6"></a-col></a-row></div
      ><div style="margin-left: 10px; font-size: medium; color: #c6c8fc"
        ><a-space><icon-bulb /><span>断路器</span></a-space></div
      ><a-divider style="border: #c6c8fc dashed 1px" /></div
    ><div
      ><div
        ><a-row
          ><a-col :span="18"
            ><a-form disabled>
              <a-row :gutter="16">
                <a-col :span="12">
                  <a-form-item label="型号" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col
                ><a-col :span="12">
                  <a-form-item label="厂家" label-col-flex="100px">
                    <a-input></a-input>
                  </a-form-item> </a-col></a-row></a-form></a-col
          ><a-col :span="6"></a-col></a-row></div></div
  ></div>
</template>

<style scoped lang="less">
  .information {
    width: 97%;
    margin: 10px 20px;
    color: #c7c6c6;
    position: relative;
    background-color: #232323;
    .content {
      padding-top: 20px;
    }
  }
</style>
