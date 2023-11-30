<template>
  <div class="container">
    <div class="container-header">
      <a-radio-group default-value="1" @change="handleChange">
        <a-radio value="1">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>单屏</a-tag>
          </template>
        </a-radio>
        <a-radio value="2">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>四分屏</a-tag>
          </template>
        </a-radio>
        <a-radio value="3">
          <template #radio="{ checked }">
            <a-tag :checked="checked" checkable>九分屏</a-tag>
          </template>
        </a-radio>
      </a-radio-group>
      <span>
        <a-button> 查看巡检记录 </a-button>
        <a-button> 远程巡检 </a-button>
      </span>
    </div>
    <div class="container-body">
      <!-- 单屏 -->
      <a-card v-show="isShow">
        <template #title>
          <span><icon-video-camera /></span>
          <span>机柜</span>
          <span>在线</span>
        </template>
        <a-row :gutter="8">
          <a-col :span="16">
            <video>
              <source src="@/assets/video/video.mp4" />
            </video>
          </a-col>
          <a-col :span="8">
            <a-collapse :default-active-key="[1]" accordion>
              <a-collapse-item key="1" header="云台控制">
                <template #expand-icon="{ active }">
                  <icon-double-down v-if="active" />
                  <icon-double-right v-else />
                </template>
                <div>
                  <div
                    style="
                      width: 140px;
                      height: 140px;
                      margin: 0 auto;
                      position: relative;
                    "
                  >
                    <span
                      style="
                        position: absolute;
                        left: 32%;
                        top: 0;
                        cursor: pointer;
                      "
                      ><icon-caret-up :style="{ fontSize: '54px' }"
                    /></span>
                    <span
                      style="
                        position: absolute;
                        left: 0;
                        top: 30%;
                        cursor: pointer;
                      "
                      ><icon-caret-left :style="{ fontSize: '54px' }"
                    /></span>
                    <span
                      style="
                        position: absolute;
                        right: 0;
                        top: 30%;
                        cursor: pointer;
                      "
                      ><icon-caret-right :style="{ fontSize: '54px' }"
                    /></span>
                    <span
                      style="
                        position: absolute;
                        left: 32%;
                        bottom: 0;
                        cursor: pointer;
                      "
                      ><icon-caret-down :style="{ fontSize: '54px' }"
                    /></span>
                  </div>
                  <div
                    style="
                      margin: 0 auto;
                      width: 160px;
                      height: 40px;
                      line-height: 40px;
                      font-size: 16px;
                      text-align: center;
                      display: flex;
                      justify-content: space-around;
                    "
                  >
                    <div><icon-plus-circle style="font-size: 40px" /></div>
                    <div>放大/缩小</div>
                    <div><icon-minus-circle style="font-size: 40px" /></div>
                  </div>
                  <div
                    style="
                      margin: 0 auto;
                      width: 160px;
                      height: 40px;
                      line-height: 40px;
                      font-size: 16px;
                      text-align: center;
                      display: flex;
                      justify-content: space-around;
                      margin-top: 10px;
                    "
                  >
                    <div><icon-plus style="font-size: 40px" /></div>
                    <div>近焦/ 远焦</div>
                    <div><icon-minus style="font-size: 40px" /></div>
                  </div>
                </div>
              </a-collapse-item>
              <a-collapse-item key="2" header="语音控制">
                <template #extra>
                  <a-popover
                    title="Chrome 高版本中非https无法打开录音功能解决方法"
                    position="left"
                  >
                    <icon-info-circle-fill />
                    <template #content>
                      <div>
                        Step1：地址栏输入
                        chrome://flags/#unsafely-treat-insecure-origin-as-secure
                      </div>
                      <div>Step2：添加信任的地址 http://118.190.51.135</div>
                      <div>Step3：点击Enabled</div>
                      <div>Step4：点击下面的重启</div>
                    </template>
                  </a-popover>
                </template>
                <template #expand-icon="{ active }">
                  <icon-double-down v-if="active" />
                  <icon-double-right v-else />
                </template>
                <div></div>
              </a-collapse-item>
              <a-collapse-item key="3" header="回放">
                <template #expand-icon="{ active }">
                  <icon-double-down v-if="active" />
                  <icon-double-right v-else />
                </template>
                <div>
                  <a-date-picker
                    v-model="date"
                    style="width: 200px; margin-bottom: 10px"
                  />
                  <a-table
                    :columns="columns"
                    :data="data"
                    :bordered="{ wrapper: true, cell: true }"
                  />
                </div>
              </a-collapse-item>
            </a-collapse>
          </a-col>
        </a-row>
        <div class="container-body-footer">
          <a-card>
            <a-row :gutter="10">
              <a-col
                v-for="(footerList, footerIndex) in footerData"
                :key="footerIndex"
                :span="3"
              >
                <img :src="footerList.img" style="width: 100%; height: 100%" />
                <div>
                  <span>{{ footerList.title }}</span>
                  <span style="float: right; color: #00a854">{{
                    footerList.onlineState
                  }}</span>
                </div>
              </a-col>
            </a-row>
          </a-card>
        </div>
      </a-card>
      <!-- 四分屏 -->
      <a-row v-show="isShowTwo" :gutter="10">
        <a-col v-for="(item, index) in splitScreen" :key="index" :span="12">
          <video style="width: 100%" controls>
            <source :src="item.video" />
          </video>
        </a-col>
      </a-row>
      <!-- 九分屏 -->
      <a-row v-show="isShowThree" :gutter="10"
        ><a-row>
          <a-col v-for="(item, index) in splitScreen" :key="index" :span="8">
            <video style="width: 100%" controls>
              <source :src="item.video" />
            </video>
          </a-col>
        </a-row>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import videos from '@/assets/video/video.mp4';
  import imgs from '@/assets/monitor.jpg';

  const date: string = Date.now();

  const isShow: boolean = ref(true);
  const isShowTwo: boolean = ref(false);
  const isShowThree: boolean = ref(false);
  const handleChange = (key) => {
    console.log(key);
    if (key === '1') {
      isShow.value = true;
      isShowTwo.value = false;
      isShowThree.value = false;
    } else if (key === '2') {
      isShow.value = false;
      isShowTwo.value = true;
      isShowThree.value = false;
    } else {
      isShow.value = false;
      isShowTwo.value = false;
      isShowThree.value = true;
    }
  };

  const columns = [
    {
      title: '起止时间',
      dataIndex: 'name',
      sortable: {
        sortDirections: ['ascend', 'descend'],
      },
    },
    {
      title: '文件大小',
      dataIndex: 'salary',
      sortable: {
        sortDirections: ['ascend', 'descend'],
      },
    },
    {
      title: '操作',
      dataIndex: 'address',
    },
  ];

  const splitScreen = [
    {
      video: videos,
    },
    {
      video: videos,
    },
    {
      video: videos,
    },
    {
      video: videos,
    },
    {
      video: videos,
    },
    {
      video: videos,
    },
  ];

  const footerData = [
    {
      title: '机柜1',
      onlineState: '在线',
      img: imgs,
    },
    {
      title: '机器人摄像头',
      onlineState: '在线',
      img: imgs,
    },
    {
      title: 'lyf配电室01',
      onlineState: '在线',
      img: imgs,
    },
    {
      title: 'lyf配电室02',
      onlineState: '在线',
      img: imgs,
    },
    {
      title: '可见光',
      onlineState: '离线',
      img: imgs,
    },
    {
      title: '红外',
      onlineState: '离线',
      img: imgs,
    },
  ];
</script>

<style lang="less" scoped>
  .container {
    &-body {
      padding: 10px;
    }
  }

  video {
    width: 100%;
    height: 100%;
  }

  // card
  .arco-card-size-medium .arco-card-body {
    padding: 10px !important ;
  }

  //
  .arco-collapse-item-content {
    padding: 0 10px !important ;
  }
  // table
  .arco-table .arco-table-element {
    margin-top: 10px;
  }
</style>
