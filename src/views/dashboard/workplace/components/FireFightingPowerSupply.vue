<template>
  <div class="container">
    <a-empty class="container-empty">
      <template #image>
        <icon-exclamation-circle-fill />
      </template>
      <p>无消防电源测点变量</p>
      <a-popover
        trigger="click"
        class="container-empty-click"
        content-style="margin-bottom: 10px;"
      >
        <a>查看配置说明</a>
        <template #content>
          <p>"站点管理->变量管理"中配置以下变量属性的变量：</p>
          <div>【消防电源】：</div>
          <div>电压->A/B/C相电压</div>
          <div>状态->通讯/过压/欠压/缺相</div>
          <p></p>
          <div>【消防备用电源(可选)】：</div>
          <div>电压->A/B/C相电压</div>
          <div>状态->通讯/过压/欠压/缺相</div>
        </template>
      </a-popover>
    </a-empty>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.container {
  height: 100%;
  &-empty {
    margin-top: 20%;
    &-click {
    }
  }
}
a {
  padding-top: 10px;
  color: #6c7fff;
  text-decoration: none;
  background-color: transparent;
  outline: 0;
  cursor: pointer;
  transition: color 0.3s;
}
</style>
